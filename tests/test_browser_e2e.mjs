import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import {
  REPO_ROOT,
  parseCliArgs,
  createReporter,
  detectBmLeakInEn
} from './lib/loader.mjs';
import {
  startStaticServer,
  launchHeadlessBrowser,
  assertDomMathAndMediaClean
} from './lib/browser.mjs';

async function installQuestionSpy(page) {
  await page.evaluate(() => {
    if (window.__questionSpyInstalled) return;
    window.__questionSpyInstalled = true;
    const App = window.AddMathApp;
    for (const ch of App.chapters) {
      const orig = ch.generateQuestion.bind(ch);
      ch.generateQuestion = function (tier, lang) {
        const q = orig(tier, lang);
        window.__lastQ = q;
        return q;
      };
    }
  });
}

async function getXp(page) {
  return page.evaluate(() => {
    const txt = document.getElementById('hdr-xp')?.textContent || '0';
    const m = txt.match(/\d+/);
    return m ? Number(m[0]) : 0;
  });
}

async function solvePracticeViaGuided(page, { wrongFirst = true } = {}) {
  await page.waitForSelector('#practice-ans-input');
  const qInfo = await page.evaluate(() => {
    const q = window.__lastQ;
    if (!q) return null;
    return {
      answerType: q.answerType,
      correctValue: q.correctValue,
      trapVal: q.traps && q.traps[0] ? q.traps[0].value : null,
      guidedSteps: (q.guidedSteps || []).map((g) => ({ expected: g.expected }))
    };
  });
  if (!qInfo) throw new Error('Question spy did not capture active question');

  if (wrongFirst) {
    const wrongInput = qInfo.answerType === 'pair' ? '9999, 9999' : '999999';
    await page.fill('#practice-ans-input', wrongInput);
    await page.click('#btn-check-ans');
    await page.waitForSelector('#practice-feedback-box .trap-box');
  }

  const gSteps = qInfo.guidedSteps || [];
  if (gSteps.length < 1) {
    throw new Error(`Expected >= 1 guidedStep, got ${gSteps.length}`);
  }
  const alreadyOpen = await page.evaluate(() => Boolean(document.getElementById('guided-box-anchor')));
  if (!alreadyOpen) await page.click('#btn-start-guided');
  await page.waitForSelector('#guided-box-anchor');

  // Wrong guided step -> triggers hint
  await page.fill('#guided-step-inp', '-99999');
  await page.click('#btn-verify-step');
  const errHint = await page.evaluate(() => document.getElementById('guided-step-msg')?.textContent?.trim() || '');
  if (!errHint) throw new Error('Expected guided hint message on wrong step');

  await page.click('#btn-hint-step');
  const explicitHint = await page.evaluate(() => document.getElementById('guided-step-msg')?.textContent?.trim() || '');
  if (!explicitHint) throw new Error('Expected explicit guided hint on #btn-hint-step');

  for (let i = 0; i < gSteps.length; i++) {
    await page.fill('#guided-step-inp', String(gSteps[i].expected));
    await page.click('#btn-verify-step');
  }
  await page.waitForFunction(() => {
    const msg = document.getElementById('guided-step-msg')?.textContent || '';
    const inp = document.getElementById('practice-ans-input')?.value || '';
    return msg.length > 0 && inp.length > 0;
  });

  const xpBefore = await getXp(page);
  await page.click('#btn-check-ans');
  await page.waitForSelector('#practice-feedback-box .tip-box');
  const xpAfter = await getXp(page);
  if (xpAfter <= xpBefore) {
    throw new Error(`Expected XP increase after correct answer (${xpBefore} -> ${xpAfter})`);
  }
  return qInfo;
}

export async function runBrowserTiers({ strict = false, runTier3 = true, runTier4 = true } = {}) {
  const rep = createReporter(
    `Tier ${runTier3 && runTier4 ? '3 & 4' : runTier3 ? '3' : '4'}: Headless Browser E2E`,
    { strict }
  );

  const server = await startStaticServer(REPO_ROOT);
  const browser = await launchHeadlessBrowser();
  console.log(`  [Browser Driver] ${browser.driver} | Server ${server.baseUrl}`);

  async function runCase(id, title, fn, { offline = false, viewport = { width: 1280, height: 800 } } = {}) {
    rep.define(id, title);
    const ctx = await browser.newContext({ offline, viewport });
    try {
      const page = await ctx.newPage();
      await fn(page, rep);
      rep.pass(id, 'Completed cleanly');
    } catch (err) {
      rep.fail(id, err && err.message ? err.message : String(err));
    } finally {
      await ctx.close();
    }
  }

  try {
    if (runTier3) {
      // T3-01: Initial Boot, file:// & Desktop/Mobile Layout
      await runCase('T3-01', 'Initial Boot (http:// & file://) + Desktop/Mobile Layout', async (page) => {
        await page.goto(server.baseUrl);
        await assertDomMathAndMediaClean(page, 'T3-01 desktop http');
        const desktopCheck = await page.evaluate(() => ({
          cards: document.querySelectorAll('#main-view .chap-card').length,
          sideVisible: window.getComputedStyle(document.querySelector('.sidebar')).display !== 'none',
          overflow: document.documentElement.scrollWidth > window.innerWidth
        }));
        rep.assert('T3-01', desktopCheck.cards === 18, `Expected 18 chap cards, got ${desktopCheck.cards}`);
        rep.assert('T3-01', desktopCheck.sideVisible && !desktopCheck.overflow, 'Desktop sidebar/overflow check failed');

        await page.setViewportSize({ width: 390, height: 844 });
        await page.waitForTimeout(100);
        const mobCheck = await page.evaluate(() => ({
          bottomNavVisible: window.getComputedStyle(document.getElementById('bottom-nav')).display !== 'none',
          overflow: document.documentElement.scrollWidth > window.innerWidth
        }));
        rep.assert('T3-01', mobCheck.bottomNavVisible && !mobCheck.overflow, 'Mobile bottom nav / horizontal overflow failed');

        // file:// boot smoke
        const fileUrl = pathToFileURL(path.join(REPO_ROOT, 'index.html')).href;
        await page.setViewportSize({ width: 1280, height: 800 });
        await page.goto(fileUrl);
        await assertDomMathAndMediaClean(page, 'T3-01 file://');
        const fileCards = await page.evaluate(() => document.querySelectorAll('#main-view .chap-card').length);
        rep.assert('T3-01', fileCards === 18, `Expected 18 cards on file://, got ${fileCards}`);
      });

      // T3-02: F4 <-> F5 Switching & All Navigation Paths
      await runCase('T3-02', 'F4 <-> F5 Switching & All Navigation Paths', async (page) => {
        await page.goto(server.baseUrl);
        await page.click('[data-form-filter="4"]');
        rep.assert('T3-02', (await page.evaluate(() => document.querySelectorAll('#main-view .chap-card').length)) === 10, 'F4 filter !== 10');
        await page.click('[data-form-filter="5"]');
        rep.assert('T3-02', (await page.evaluate(() => document.querySelectorAll('#main-view .chap-card').length)) === 8, 'F5 filter !== 8');
        await page.click('[data-form-filter="all"]');
        rep.assert('T3-02', (await page.evaluate(() => document.querySelectorAll('#main-view .chap-card').length)) === 18, 'All filter !== 18');

        await page.click('#main-view .chap-card[data-open-chap="f4-c1"]');
        await page.waitForSelector('#learn-chap-select');
        await assertDomMathAndMediaClean(page, 'T3-02 f4-c1', { expectMath: true });

        await page.selectOption('#learn-chap-select', 'f5-c8');
        rep.assert('T3-02', (await page.evaluate(() => document.querySelector('#learn-chap-select').value)) === 'f5-c8', 'Select switch to f5-c8');

        await page.click('button[data-switch-chap="f4-c1"]');
        rep.assert('T3-02', (await page.evaluate(() => document.querySelector('#learn-chap-select').value)) === 'f4-c1', 'Go to F4 pill');

        await page.click('button[data-switch-chap="f5-c1"]');
        rep.assert('T3-02', (await page.evaluate(() => document.querySelector('#learn-chap-select').value)) === 'f5-c1', 'Go to F5 pill');

        await page.click('#side-chap-list [data-open-chap="f5-c3"]');
        const activeSidebar = await page.evaluate(() => document.querySelector('#side-chap-list .chap-mini-btn.active')?.getAttribute('data-open-chap'));
        rep.assert('T3-02', activeSidebar === 'f5-c3', `Sidebar active=${activeSidebar}`);

        // Cycle Prev/Next
        await page.click('#main-view .card button[data-switch-chap="f5-c2"]');
        rep.assert('T3-02', (await page.evaluate(() => document.querySelector('#learn-chap-select').value)) === 'f5-c2', 'Prev switch from f5-c3 to f5-c2');
        await assertDomMathAndMediaClean(page, 'T3-02 prev switch', { expectMath: true });
        await page.click('#main-view .card button[data-switch-chap="f5-c3"]');
        rep.assert('T3-02', (await page.evaluate(() => document.querySelector('#learn-chap-select').value)) === 'f5-c3', 'Next switch from f5-c2 to f5-c3');
        await assertDomMathAndMediaClean(page, 'T3-02 next switch', { expectMath: true });
      });

      // T3-03: BM <-> EN Live Re-Render & Theme Toggle
      await runCase('T3-03', 'BM <-> EN Live Re-Render & Theme Toggle', async (page) => {
        await page.goto(server.baseUrl);
        await page.click('#btn-lang-en');
        rep.assert('T3-03', (await page.evaluate(() => document.getElementById('brand-sub').textContent.includes('Form 4 & 5'))), 'Home EN brand-sub');

        await page.click('#side-main-nav [data-nav="learn"]');
        for (const sub of ['concept', 'bank', 'solver', 'practice']) {
          await page.click(`.mode-tabs .mode-tab[data-subtab="${sub}"]`);
          await page.click('#btn-lang-bm');
          await assertDomMathAndMediaClean(page, `T3-03 ${sub} bm`, { expectMath: sub !== 'solver' });
          await page.click('#btn-lang-en');
          await assertDomMathAndMediaClean(page, `T3-03 ${sub} en`, { expectMath: sub !== 'solver' });
        }

        for (const view of ['blitz', 'tutor', 'profile']) {
          await page.click(`#side-main-nav [data-nav="${view}"]`);
          await page.click('#btn-lang-bm');
          await assertDomMathAndMediaClean(page, `T3-03 ${view} bm`, { expectMath: view === 'profile' });
          await page.click('#btn-lang-en');
          await assertDomMathAndMediaClean(page, `T3-03 ${view} en`, { expectMath: view === 'profile' });
        }

        // Theme toggle back and forth on visual lab
        await page.click('#side-main-nav [data-nav="learn"]');
        await page.click('.mode-tabs .mode-tab[data-subtab="concept"]');
        await page.click('#btn-theme');
        rep.assert('T3-03', (await page.evaluate(() => document.documentElement.getAttribute('data-theme'))) === 'dark', 'Theme switched to dark');
        await page.click('#btn-theme');
        rep.assert('T3-03', (await page.evaluate(() => document.documentElement.getAttribute('data-theme'))) === 'light', 'Theme switched back to light');
      });

      // T3-04: Poster Lightbox & Home Poster Strip
      await runCase('T3-04', 'Poster Lightbox & Home Poster Strip', async (page) => {
        await page.goto(server.baseUrl);
        await page.click('#btn-toggle-poster-gallery');
        await page.waitForSelector('.poster-strip .poster-mini-card img');
        await assertDomMathAndMediaClean(page, 'T3-04 poster strip');
        const stripCount = await page.evaluate(() => document.querySelectorAll('.poster-strip .poster-mini-card img').length);
        rep.assert('T3-04', stripCount === 18, `Expected 18 poster thumbs, got ${stripCount}`);

        const xp0 = await getXp(page);
        await page.click('.poster-strip [data-open-poster="f4-c1"]');
        await page.waitForSelector('#poster-lightbox-root .poster-modal-box');
        await assertDomMathAndMediaClean(page, 'T3-04 modal open');
        const xp1 = await getXp(page);
        rep.assert('T3-04', xp1 === xp0 + 15, `Expected +15 XP on first poster view (${xp0}->${xp1})`);

        // Next & Prev wrapping across 1/18 <-> 18/18
        await page.click('#poster-lightbox-root .poster-modal-hdr button[data-open-poster="f5-c8"]');
        rep.assert('T3-04', (await page.evaluate(() => document.querySelector('#poster-lightbox-root .poster-modal-hdr').textContent.includes('18/18'))), 'Poster Prev wrap 1/18 -> 18/18');
        await assertDomMathAndMediaClean(page, 'T3-04 modal prev wrap');
        await page.click('#poster-lightbox-root .poster-modal-hdr button[data-open-poster="f4-c1"]');
        rep.assert('T3-04', (await page.evaluate(() => document.querySelector('#poster-lightbox-root .poster-modal-hdr').textContent.includes('1/18'))), 'Poster Next wrap 18/18 -> 1/18');
        await page.click('#poster-lightbox-root .poster-modal-hdr button[data-open-poster="f4-c2"]');
        rep.assert('T3-04', (await page.evaluate(() => document.querySelector('#poster-lightbox-root .poster-modal-hdr').textContent.includes('2/18'))), 'Poster Next 1/18 -> 2/18');
        await assertDomMathAndMediaClean(page, 'T3-04 modal next');

        // Close via button, backdrop, and Escape
        await page.click('#btn-close-poster-modal');
        rep.assert('T3-04', (await page.evaluate(() => document.getElementById('poster-lightbox-root').innerHTML.trim())) === '', 'Close button failed');

        const xpBeforeReopen = await getXp(page);
        await page.click('.poster-strip [data-open-poster="f4-c1"]');
        const xp2 = await getXp(page);
        rep.assert('T3-04', xp2 === xpBeforeReopen, `XP must not double-award on same poster (${xpBeforeReopen}->${xp2})`);
        await page.evaluate(() => document.getElementById('poster-modal-backdrop').click());
        rep.assert('T3-04', (await page.evaluate(() => document.getElementById('poster-lightbox-root').innerHTML.trim())) === '', 'Backdrop click failed');

        await page.click('.poster-strip [data-open-poster="f5-c1"]');
        await page.keyboardPress('Escape');
        rep.assert('T3-04', (await page.evaluate(() => document.getElementById('poster-lightbox-root').innerHTML.trim())) === '', 'Escape key close failed');

        // Jump to chapter clinic from modal
        await page.click('.poster-strip [data-open-poster="f4-c7"]');
        await page.click('#poster-lightbox-root [data-poster-jump-chap="f4-c7"]');
        rep.assert('T3-04', (await page.evaluate(() => document.getElementById('learn-chap-select').value)) === 'f4-c7', 'Jump to chapter from poster modal');
      });

      // T3-05: Visual Labs Interactive Canvas
      await runCase('T3-05', 'Visual Labs Interactive Canvas, Readout & Reset', async (page) => {
        await page.goto(server.baseUrl);
        await page.click('#side-main-nav [data-nav="learn"]');
        for (const chapId of ['f4-c1', 'f5-c1', 'f5-c8']) {
          await page.selectOption('#learn-chap-select', chapId);
          await page.waitForSelector('#active-lab-canvas');
          const before = await page.evaluate(() => {
            const c = document.getElementById('active-lab-canvas');
            const ctrl = document.querySelector('[data-lab-ctrl]');
            return {
              w: c.width,
              h: c.height,
              id: ctrl.getAttribute('data-lab-ctrl'),
              def: ctrl.value,
              max: ctrl.max,
              min: ctrl.min,
              readout: document.getElementById('lab-readout').textContent
            };
          });
          rep.assert('T3-05', before.w > 0 && before.h > 0, `Zero canvas size on ${chapId}`);
          const targetVal = before.def === before.max ? before.min : before.max;
          await page.setRangeValue(`[data-lab-ctrl="${before.id}"]`, targetVal);
          const after = await page.evaluate((id) => ({
            lbl: document.getElementById(`lbl-val-${id}`).textContent,
            readout: document.getElementById('lab-readout').textContent
          }), before.id);
          rep.assert('T3-05', after.lbl === String(targetVal), `Slider label did not update on ${chapId}`);
          rep.assert('T3-05', after.readout.length > 0, `Lab readout empty on ${chapId}`);

          await page.click('#btn-reset-lab');
          const resetLbl = await page.evaluate((id) => document.getElementById(`lbl-val-${id}`).textContent, before.id);
          rep.assert('T3-05', resetLbl === String(before.def), `Reset failed on ${chapId}`);
        }
        // Check Lab Quest marked done on Home
        await page.click('#side-main-nav [data-nav="home"]');
        const xpHome = await getXp(page);
        rep.assert('T3-05', xpHome >= 30, `Expected >=30 XP from Lab quest, got ${xpHome}`);
      });

      // T3-06: Master Bank Flow (Expand All, Search, Mastery Sync)
      await runCase('T3-06', 'Master Bank Flow (Expand All, Search, Mastery Sync)', async (page) => {
        await page.goto(server.baseUrl);
        await page.click('#main-view .chap-card[data-open-chap="f4-c1"]');
        await page.click('.mode-tabs .mode-tab[data-subtab="bank"]');
        await assertDomMathAndMediaClean(page, 'T3-06 bank f4-c1', { expectMath: true });

        await page.click('#btn-mbank-expand-all');
        const expanded = await page.evaluate(() => ({
          mistakes: document.querySelectorAll('.mbank-mistake-panel').length,
          schemes: document.querySelectorAll('.mbank-scheme-panel').length,
          whys: document.querySelectorAll('.scheme-why').length
        }));
        rep.assert('T3-06', expanded.mistakes === 10 && expanded.schemes === 10, `Expand all count: ${JSON.stringify(expanded)}`);
        rep.assertStrict('T3-06', expanded.whys >= 10, `Expected .scheme-why rendered in Master Bank (got ${expanded.whys})`);

        // Collapse single mistake card -> materialize-collapse leaves 9 open
        await page.click('.mbank-card [data-mbank-mistake]');
        const afterOne = await page.evaluate(() => document.querySelectorAll('.mbank-mistake-panel').length);
        rep.assert('T3-06', afterOne === 9, `Materialize-collapse expected 9 mistake panels, got ${afterOne}`);

        // Search filters
        await page.fill('#mbank-search-inp', 'zzzz_no_match_999');
        rep.assert('T3-06', (await page.evaluate(() => document.querySelectorAll('.mbank-card').length)) === 0, 'No-match filter should show 0 cards');
        await page.fill('#mbank-search-inp', 'a+b (x) <script>');
        rep.assert('T3-06', (await page.evaluate(() => document.querySelectorAll('.mbank-card').length)) === 0, 'Special-char/<script> filter should show 0 cards');
        await assertDomMathAndMediaClean(page, 'T3-06 special-char search');
        await page.fill('#mbank-search-inp', '');
        rep.assert('T3-06', (await page.evaluate(() => document.querySelectorAll('.mbank-card').length)) === 10, 'Cleared filter should restore 10 cards');

        // Mark Mastered -> +10 XP & Home sync
        const xp0 = await getXp(page);
        await page.click('.mbank-card [data-mbank-done]');
        const xp1 = await getXp(page);
        rep.assert('T3-06', xp1 === xp0 + 10, `Expected +10 XP on mark mastered (${xp0}->${xp1})`);
        await page.click('#side-main-nav [data-nav="home"]');
        const homeSync = await page.evaluate(() => document.querySelector('#main-view .chap-card[data-open-chap="f4-c1"]').textContent.includes('1/10'));
        rep.assert('T3-06', homeSync, 'Home chapter card did not sync 1/10 bank progress');
      });

      // T3-07: Dynamic Smart Solver & Free-Form Solver
      await runCase('T3-07', 'Dynamic Smart Solver & Free-Form Equation Solver', async (page) => {
        await page.goto(server.baseUrl);
        await page.click('#main-view .chap-card[data-open-chap="f4-c3"]');
        await page.click('.mode-tabs .mode-tab[data-subtab="solver"]');
        await page.click('[data-run-solver="0"]');
        await page.waitForSelector('#solver-out-0 .step-item');
        await assertDomMathAndMediaClean(page, 'T3-07 f4-c3 solver', { expectMath: true });

        // Live edit sys-3x3 inputs -> (1, 2, 3)
        const preText = await page.evaluate(() => document.getElementById('solver-out-0').textContent);
        await page.fill('.solver-inp-0[data-inp-id="a1"]', '1');
        await page.fill('.solver-inp-0[data-inp-id="b1"]', '1');
        await page.fill('.solver-inp-0[data-inp-id="c1"]', '1');
        await page.fill('.solver-inp-0[data-inp-id="d1"]', '6');
        await page.fill('.solver-inp-0[data-inp-id="a2"]', '2');
        await page.fill('.solver-inp-0[data-inp-id="b2"]', '-1');
        await page.fill('.solver-inp-0[data-inp-id="c2"]', '1');
        await page.fill('.solver-inp-0[data-inp-id="d2"]', '3');
        await page.fill('.solver-inp-0[data-inp-id="a3"]', '1');
        await page.fill('.solver-inp-0[data-inp-id="b3"]', '2');
        await page.fill('.solver-inp-0[data-inp-id="c3"]', '-1');
        await page.fill('.solver-inp-0[data-inp-id="d3"]', '2');
        const postText = await page.evaluate(() => document.getElementById('solver-out-0').textContent);
        rep.assertStrict(
          'T3-07',
          postText !== preText &&
            !/Hapuskan z daripada pasangan/.test(postText) &&
            /(?:x\s*=\s*1[\s\S]*y\s*=\s*2[\s\S]*z\s*=\s*3|1,\s*2,\s*3)/.test(postText),
          'sys-3x3 must solve (1, 2, 3) dynamically on input edits without static BM placeholder'
        );

        await page.click('[data-rand-solver="0"]');
        rep.assert('T3-07', (await page.evaluate(() => document.querySelector('.solver-inp-0.inp-flash') !== null)), 'Randomize solver did not flash inputs');

        // Free-form chip + custom input
        await page.click('[data-sample-eq="3x^2 - 11x - 4 = 0"]');
        await page.waitForSelector('.card:has(#custom-eq-inp) .step-item');
        await page.fill('#custom-eq-inp', 'd/dx(2x^3 - 4x)');
        await page.click('#btn-solve-custom-eq');
        await assertDomMathAndMediaClean(page, 'T3-07 free-form', { expectMath: true });
      });

      // T3-08: Practice Mode, Guided Steps & Socratic Coach
      await runCase('T3-08', 'Practice Mode, Guided Steps, Keypad & Socratic Coach (BM & EN)', async (page) => {
        await page.goto(server.baseUrl);
        await installQuestionSpy(page);
        await page.click('#main-view .chap-card[data-open-chap="f4-c1"]');
        await page.click('.mode-tabs .mode-tab[data-subtab="practice"]');
        await assertDomMathAndMediaClean(page, 'T3-08 practice bm', { expectMath: true });

        // Test keypad
        await page.click('.keypad-row [data-key-ins="-"]');
        rep.assert('T3-08', (await page.evaluate(() => document.getElementById('practice-ans-input').value)) === '-', 'Keypad insert failed');
        await page.click('#btn-key-clear');
        rep.assert('T3-08', (await page.evaluate(() => document.getElementById('practice-ans-input').value)) === '', 'Keypad clear failed');

        // Complete guided steps + answer check
        await solvePracticeViaGuided(page, { wrongFirst: true });

        // Show full SPM working
        await page.click('#btn-show-sol');
        await page.waitForSelector('#full-sol-anchor .step-item');
        await assertDomMathAndMediaClean(page, 'T3-08 full sol', { expectMath: true });

        // Switch to EN and test Coach chips & free input
        await page.click('#btn-lang-en');
        await page.click('.mode-tabs .mode-tab[data-subtab="practice"]');
        const chipCount = await page.evaluate(() => document.querySelectorAll('.coach-panel [data-intent-ask]').length);
        rep.assert('T3-08', chipCount >= 5, `Expected >=5 coach chips, got ${chipCount}`);
        for (let ci = 0; ci < chipCount; ci++) {
          await page.evaluate((idx) => {
            document.querySelectorAll('.coach-panel [data-intent-ask]')[idx].click();
          }, ci);
          await page.waitForSelector('#coach-reply-anchor');
          await assertDomMathAndMediaClean(page, `T3-08 coach chip ${ci}`, { expectMath: true });
          const replyTxt = await page.evaluate(() => document.getElementById('coach-reply-anchor').textContent);
          const leak = detectBmLeakInEn(replyTxt);
          rep.assertStrict('T3-08', !leak, `BM leak "${leak}" in EN coach chip #${ci} reply`);
        }

        await page.fill('#intent-free-inp', 'Why was I wrong?');
        await page.click('#btn-ask-intent');
        await page.waitForSelector('#coach-reply-anchor');
        await assertDomMathAndMediaClean(page, 'T3-08 coach free input', { expectMath: true });
      });

      // T3-09: 60s Blitz Flow
      await runCase('T3-09', '60s Blitz Quiz Flow & LocalStorage Score', async (page) => {
        await page.goto(server.baseUrl);
        await page.click('#side-main-nav [data-nav="blitz"]');
        await page.click('#btn-start-blitz');
        await page.waitForSelector('[data-blitz-opt="0"]');
        for (let q = 0; q < 3; q++) {
          await page.waitForSelector('[data-blitz-opt="0"]');
          await page.waitForFunction(() => !document.querySelector('.blitz-opt.blitz-correct, .blitz-opt.blitz-wrong'));
          await page.click('[data-blitz-opt="0"]');
          await page.waitForSelector('.blitz-opt.blitz-correct');
          await page.waitForFunction(() => !document.querySelector('.blitz-opt.blitz-correct, .blitz-opt.blitz-wrong'));
        }
        await page.click('#btn-end-blitz');
        await page.waitForSelector('#btn-start-blitz');
        await assertDomMathAndMediaClean(page, 'T3-09 blitz summary');
        const summaryTxt = await page.evaluate(() => document.getElementById('main-view')?.textContent || '');
        rep.assert('T3-09', /\d+\s*\/\s*3\s+(betul|correct)/i.test(summaryTxt), `Expected 3 answered questions in Blitz summary, got: ${summaryTxt.slice(0, 140)}`);
        const saved = await page.evaluate(() => JSON.parse(localStorage.getItem('addmath_mudah_state_v1') || '{}'));
        rep.assert('T3-09', typeof saved.highBlitz === 'number', 'highBlitz missing in localStorage');
      });

      // T3-10: AI Tutor View
      await runCase('T3-10', 'AI Tutor View, Chips, Custom Input & Gemini Key Prompt', async (page) => {
        await page.goto(server.baseUrl);
        await page.click('#side-main-nav [data-nav="tutor"]');
        await page.waitForSelector('#tutor-stream .msg-bot');
        await assertDomMathAndMediaClean(page, 'T3-10 tutor init');

        await page.click('[data-tutor-chip="2x^2 - 7x + 3 = 0"]');
        await page.waitForFunction(() => document.querySelectorAll('#tutor-stream .msg-bot').length >= 2);
        await assertDomMathAndMediaClean(page, 'T3-10 tutor chip', { expectMath: true });

        await page.fill('#tutor-inp', 'int(6x^2 - 4x + 5)');
        await page.click('#btn-send-tutor');
        await page.waitForFunction(() => document.querySelectorAll('#tutor-stream .msg-bot').length >= 3);
        await assertDomMathAndMediaClean(page, 'T3-10 tutor custom', { expectMath: true });

        // Prompt cancel preserves no key
        page.setDialogHandler(() => null);
        await page.click('#btn-config-key');
        rep.assert('T3-10', (await page.evaluate(() => localStorage.getItem('addmath_gemini_key'))) === null, 'Cancel prompt should not set key');
      });

      // T3-11: Profile, Error Radar, Formula Vault & Reset
      await runCase('T3-11', 'Profile, Formula Vault Search, Reload Persistence & Reset Confirm', async (page) => {
        await page.goto(server.baseUrl);
        await installQuestionSpy(page);
        // Earn some XP + bank progress first
        await page.click('#main-view .chap-card[data-open-chap="f4-c1"]');
        await page.click('.mode-tabs .mode-tab[data-subtab="bank"]');
        await page.click('.mbank-card [data-mbank-done]');

        await page.click('#side-main-nav [data-nav="profile"]');
        await assertDomMathAndMediaClean(page, 'T3-11 profile vault', { expectMath: true });

        await page.fill('#vault-search-inp', 'zzzz');
        rep.assert('T3-11', (await page.evaluate(() => document.querySelectorAll('#vault-list-wrap .formula-box').length)) === 0, 'Vault empty search failed');
        await page.fill('#vault-search-inp', 'sin');
        rep.assert('T3-11', (await page.evaluate(() => document.querySelectorAll('#vault-list-wrap .formula-box').length)) > 0, 'Vault sin search failed');

        // Persistence across reload
        await page.reload();
        rep.assert('T3-11', (await getXp(page)) >= 10, 'XP did not persist across reload');

        await page.click('#side-main-nav [data-nav="profile"]');
        // Dismiss confirm -> preserves XP
        page.setDialogHandler(() => false);
        await page.click('#btn-reset-progress');
        rep.assert('T3-11', (await getXp(page)) >= 10, 'Dismissed reset should preserve XP');

        // Accept confirm -> resets XP to 0
        page.setDialogHandler(() => true);
        await page.click('#btn-reset-progress');
        await page.waitForFunction(() => document.getElementById('hdr-xp')?.textContent === '0 XP');
        rep.assert('T3-11', (await getXp(page)) === 0, 'Confirmed reset should set XP to 0');
      });

      // T3-12: Offline / KaTeX-Blocked Resilience
      await runCase(
        'T3-12',
        'Offline / KaTeX-Blocked Fallback Resilience Across All Views',
        async (page) => {
          await page.goto(server.baseUrl);
          await page.click('#main-view .chap-card[data-open-chap="f4-c8"]');
          for (const sub of ['concept', 'bank', 'solver', 'practice']) {
            await page.click(`.mode-tabs .mode-tab[data-subtab="${sub}"]`);
            if (sub === 'solver') await page.click('[data-run-solver="0"]');
            await assertDomMathAndMediaClean(page, `T3-12 ${sub}`, {
              expectMath: true,
              expectFallbackOnly: true,
              onFallbackTeXLeak: (w) => rep.warn('T3-12', w, sub)
            });
          }
          await page.click('#side-main-nav [data-nav="tutor"]');
          await assertDomMathAndMediaClean(page, 'T3-12 tutor', {
            expectMath: false,
            expectFallbackOnly: false,
            onFallbackTeXLeak: (w) => rep.warn('T3-12', w, 'tutor')
          });
          await page.click('#side-main-nav [data-nav="profile"]');
          await assertDomMathAndMediaClean(page, 'T3-12 profile', {
            expectMath: true,
            expectFallbackOnly: true,
            onFallbackTeXLeak: (w) => rep.warn('T3-12', w, 'profile')
          });
        },
        { offline: true }
      );
    }

    if (runTier4) {
      // T4-01: Aiman (Weak in Basics — F4 Ch 1 Functions)
      await runCase('T4-01', 'Journey: Aiman (Weak in Basics — f4-c1 BM -> EN)', async (page) => {
        await page.goto(server.baseUrl);
        await installQuestionSpy(page);
        await page.click('[data-form-filter="4"]');
        await page.click('#main-view .chap-card[data-open-chap="f4-c1"]');
        await assertDomMathAndMediaClean(page, 'T4-01 f4-c1 concept bm', { expectMath: true });

        // Strict R1 DOM checks
        const r1Dom = await page.evaluate(() => ({
          prereq: document.querySelectorAll('.concept-prereq').length,
          firstStep: document.querySelectorAll('.concept-firststep').length,
          worked: document.querySelectorAll('.concept-worked').length
        }));
        rep.assertStrict('T4-01', r1Dom.prereq >= 1 && r1Dom.firstStep >= 1 && r1Dom.worked >= 1, `Missing R1 concept DOM sections (${JSON.stringify(r1Dom)})`);

        // Poster lightbox (+15 XP)
        await page.click('.clinic-card [data-open-poster="f4-c1"]');
        await page.waitForSelector('#poster-lightbox-root .poster-modal-box');
        await assertDomMathAndMediaClean(page, 'T4-01 poster', { expectMath: true });
        await page.click('#btn-close-poster-modal');

        // Visual Lab slider (+30 XP)
        await page.setRangeValue('[data-lab-ctrl="m"]', 2);
        rep.assert('T4-01', (await getXp(page)) >= 45, 'Expected >=45 XP after poster + lab');

        // Practice TP1-2 + Coach stuck chip -> Guided -> Check
        await page.click('.mode-tabs .mode-tab[data-subtab="practice"]');
        await page.click('.coach-panel [data-intent-ask="Saya tak tahu nak mula dari mana"]');
        await page.waitForSelector('#guided-box-anchor');
        await solvePracticeViaGuided(page, { wrongFirst: true });

        // Bank search "mutlak", reveal & mark mastered
        await page.click('.mode-tabs .mode-tab[data-subtab="bank"]');
        await page.fill('#mbank-search-inp', 'mutlak');
        await page.click('.mbank-card [data-mbank-mistake]');
        await page.click('.mbank-card [data-mbank-scheme]');
        await page.click('.mbank-card [data-mbank-done]');

        // Switch live to EN
        await page.click('#btn-lang-en');
        await page.click('.mode-tabs .mode-tab[data-subtab="concept"]');
        await assertDomMathAndMediaClean(page, 'T4-01 f4-c1 en', { expectMath: true });
      });

      // T4-02: Mei Ling (DLP Student — f4-c2 & f4-c3 EN)
      await runCase('T4-02', 'Journey: Mei Ling (DLP — f4-c2 Quad & f4-c3 3x3 System EN)', async (page) => {
        await page.goto(server.baseUrl);
        await installQuestionSpy(page);
        await page.click('#btn-lang-en');
        await page.click('#main-view .chap-card[data-open-chap="f4-c2"]');
        await page.click('.mode-tabs .mode-tab[data-subtab="solver"]');
        await page.fill('.solver-inp-0[data-inp-id="a"]', '2');
        await page.fill('.solver-inp-0[data-inp-id="b"]', '-8');
        await page.fill('.solver-inp-0[data-inp-id="c"]', '5');
        await page.click('[data-run-solver="0"]');
        await assertDomMathAndMediaClean(page, 'T4-02 quad solver', { expectMath: true });

        await page.click('button[data-switch-chap="f4-c3"]');
        await page.click('.mode-tabs .mode-tab[data-subtab="solver"]');
        await page.fill('.solver-inp-0[data-inp-id="a1"]', '1');
        await page.fill('.solver-inp-0[data-inp-id="b1"]', '1');
        await page.fill('.solver-inp-0[data-inp-id="c1"]', '1');
        await page.fill('.solver-inp-0[data-inp-id="d1"]', '6');
        await page.fill('.solver-inp-0[data-inp-id="a2"]', '2');
        await page.fill('.solver-inp-0[data-inp-id="b2"]', '-1');
        await page.fill('.solver-inp-0[data-inp-id="c2"]', '1');
        await page.fill('.solver-inp-0[data-inp-id="d2"]', '3');
        await page.fill('.solver-inp-0[data-inp-id="a3"]', '1');
        await page.fill('.solver-inp-0[data-inp-id="b3"]', '2');
        await page.fill('.solver-inp-0[data-inp-id="c3"]', '-1');
        await page.fill('.solver-inp-0[data-inp-id="d3"]', '2');
        await page.click('[data-run-solver="0"]');
        await assertDomMathAndMediaClean(page, 'T4-02 sys-3x3', { expectMath: true });
        const sysTxt = await page.evaluate(() => document.getElementById('solver-out-0').textContent);
        rep.assertStrict('T4-02', !/Hapuskan/.test(sysTxt) && /(?:x\s*=\s*1[\s\S]*y\s*=\s*2[\s\S]*z\s*=\s*3|1,\s*2,\s*3)/.test(sysTxt), 'sys-3x3 must solve (1,2,3) live without static BM placeholder in EN');

        await page.click('[data-rand-solver="0"]');
        await page.click('.mode-tabs .mode-tab[data-subtab="practice"]');
        await page.click('[data-tier="2"]');
        await page.click('.coach-panel [data-intent-ask="Which formula should I use?"]');
        await page.waitForSelector('#coach-reply-anchor');
        const coachTxt = await page.evaluate(() => document.getElementById('coach-reply-anchor').textContent);
        const leak = detectBmLeakInEn(coachTxt);
        rep.assertStrict('T4-02', !leak, `BM leak "${leak}" in EN coach reply`);
        await page.click('#btn-show-sol');
        await assertDomMathAndMediaClean(page, 'T4-02 full sol', { expectMath: true });
      });

      // T4-03: Farah (Surds/Logs & Coordinate Geometry — f4-c4 & f4-c7)
      await runCase('T4-03', 'Journey: Farah (f4-c4 Surds/Logs & f4-c7 Coord Geom)', async (page) => {
        await page.goto(server.baseUrl);
        await page.click('#main-view .chap-card[data-open-chap="f4-c4"]');
        await page.click('.mode-tabs .mode-tab[data-subtab="solver"]');
        await page.click('[data-run-solver="0"]');
        await page.fill('.solver-inp-1[data-inp-id="a"]', '2');
        await page.fill('.solver-inp-1[data-inp-id="b"]', '8');
        await page.click('[data-run-solver="1"]');
        await assertDomMathAndMediaClean(page, 'T4-03 f4-c4 solvers', { expectMath: true });

        await page.selectOption('#learn-chap-select', 'f4-c7');
        await page.click('.mode-tabs .mode-tab[data-subtab="bank"]');
        await page.click('#btn-mbank-expand-all');
        await assertDomMathAndMediaClean(page, 'T4-03 f4-c7 bank all', { expectMath: true });

        await page.click('.mode-tabs .mode-tab[data-subtab="solver"]');
        await page.click('[data-run-solver="0"]');
        await assertDomMathAndMediaClean(page, 'T4-03 f4-c7 solver', { expectMath: true });

        await page.click('#btn-lang-en');
        await page.click('.mode-tabs .mode-tab[data-subtab="concept"]');
        await assertDomMathAndMediaClean(page, 'T4-03 f4-c7 concept en', { expectMath: true });
        const hasPoligonTypo = await page.evaluate(() => /\bPoligon\b/.test(document.getElementById('main-view').textContent));
        rep.assertStrict('T4-03', !hasPoligonTypo, 'Found "Poligon" typo in f4-c7 EN concept');
      });

      // T4-04: Daniel (Triangles & Circular Measure — f4-c9 & f5-c1)
      await runCase('T4-04', 'Journey: Daniel (f4-c9 Triangles -> f5-c1 Circular Measure)', async (page) => {
        await page.goto(server.baseUrl);
        await installQuestionSpy(page);
        await page.click('#btn-lang-en');
        await page.click('#main-view .chap-card[data-open-chap="f4-c9"]');
        await page.click('.mode-tabs .mode-tab[data-subtab="solver"]');
        await page.fill('.solver-inp-0[data-inp-id="b"]', '7');
        await page.fill('.solver-inp-0[data-inp-id="c"]', '10');
        await page.fill('.solver-inp-0[data-inp-id="A"]', '60');
        await page.click('[data-run-solver="0"]');
        await assertDomMathAndMediaClean(page, 'T4-04 f4-c9 solver', { expectMath: true });

        await page.click('button[data-switch-chap="f5-c1"]');
        await page.click('.mode-tabs .mode-tab[data-subtab="concept"]');
        await page.setRangeValue('[data-lab-ctrl="theta"]', 2.2);
        await assertDomMathAndMediaClean(page, 'T4-04 f5-c1 lab', { expectMath: true });

        await page.click('.mode-tabs .mode-tab[data-subtab="solver"]');
        await page.fill('.solver-inp-0[data-inp-id="r"]', '6');
        await page.fill('.solver-inp-0[data-inp-id="theta"]', '1.2');
        await page.click('[data-run-solver="0"]');
        await assertDomMathAndMediaClean(page, 'T4-04 f5-c1 solver', { expectMath: true });

        await page.click('.mode-tabs .mode-tab[data-subtab="practice"]');
        await page.click('[data-tier="3"]');
        await solvePracticeViaGuided(page, { wrongFirst: true });

        await page.click('#btn-lang-bm');
        await page.click('.mode-tabs .mode-tab[data-subtab="concept"]');
        await page.click('.clinic-card [data-open-poster="f5-c1"]');
        await page.waitForSelector('#poster-lightbox-root .poster-modal-box');
        await assertDomMathAndMediaClean(page, 'T4-04 f5-c1 poster bm', { expectMath: true });
      });

      // T4-05: Haziq (Calculus Rescue — f5-c2 & f5-c3)
      await runCase('T4-05', 'Journey: Haziq (f5-c2 Diff & f5-c3 Integral + Error Radar)', async (page) => {
        await page.goto(server.baseUrl);
        await installQuestionSpy(page);
        await page.click('#main-view .chap-card[data-open-chap="f5-c2"]');
        await page.click('.mode-tabs .mode-tab[data-subtab="solver"]');
        await page.click('[data-run-solver="0"]');
        await page.click('[data-sample-eq="d/dx(3x^3 - 5x^2 + 4x)"]');
        await page.waitForSelector('.card:has(#custom-eq-inp) .step-item');
        await assertDomMathAndMediaClean(page, 'T4-05 f5-c2 solver', { expectMath: true });

        await page.selectOption('#learn-chap-select', 'f5-c3');
        await page.click('.mode-tabs .mode-tab[data-subtab="solver"]');
        await page.fill('.solver-inp-0[data-inp-id="p"]', '1');
        await page.fill('.solver-inp-0[data-inp-id="q"]', '0');
        await page.fill('.solver-inp-0[data-inp-id="r"]', '0');
        await page.fill('.solver-inp-0[data-inp-id="a"]', '0');
        await page.fill('.solver-inp-0[data-inp-id="b"]', '2');
        await page.click('[data-run-solver="0"]');
        await assertDomMathAndMediaClean(page, 'T4-05 f5-c3 integral', { expectMath: true });
        const intOut = await page.evaluate(() => document.getElementById('solver-out-0').textContent);
        rep.assertStrict('T4-05', !/(^|[^0-9._])(0x\^|1x\^)/.test(intOut), 'definite-integral-solver rendered unsimplified 0x^/1x^');

        // Submit trap/wrong in Practice and inspect Tutor + Error Radar
        await page.click('.mode-tabs .mode-tab[data-subtab="practice"]');
        let trapVal = await page.evaluate(() => window.__lastQ?.traps?.[0]?.value ?? null);
        if (trapVal === null) {
          await page.click('#btn-new-q');
          trapVal = await page.evaluate(() => window.__lastQ?.traps?.[0]?.value ?? null);
        }
        rep.assert('T4-05', trapVal !== null, 'Expected non-null trap value on f5-c3 practice question');
        await page.fill('#practice-ans-input', String(trapVal));
        await page.click('#btn-check-ans');
        await page.waitForSelector('#practice-feedback-box .trap-box');

        await page.click('#side-main-nav [data-nav="tutor"]');
        await page.fill('#tutor-inp', 'int(6x^2 - 4x + 5)');
        await page.click('#btn-send-tutor');
        await page.waitForFunction(() => document.querySelectorAll('#tutor-stream .msg-bot').length >= 2);
        await assertDomMathAndMediaClean(page, 'T4-05 tutor +c', { expectMath: true });

        await page.click('#side-main-nav [data-nav="profile"]');
        await page.waitForSelector('#vault-search-inp');
        await assertDomMathAndMediaClean(page, 'T4-05 profile error radar', { expectMath: true });
        const radarCheck = await page.evaluate(() => {
          const saved = JSON.parse(localStorage.getItem('addmath_mudah_state_v1') || '{}');
          const r = saved.radar || { P: 0, K: 0, J: 0 };
          const items = Array.from(document.querySelectorAll('#main-view .step-item')).map((el) => el.textContent);
          const radarLines = items.filter((t) => /\[(P|K|J)\]/.test(t));
          const domSum = radarLines.reduce((acc, t) => {
            const m = t.match(/:\s*(\d+)\s*$/);
            return acc + (m ? Number(m[1]) : 0);
          }, 0);
          return { sum: (r.P || 0) + (r.K || 0) + (r.J || 0), domSum };
        });
        rep.assert('T4-05', radarCheck.sum > 0 && radarCheck.domSum > 0, `Expected Error Radar [P]/[K]/[J] > 0, got ${JSON.stringify(radarCheck)}`);
      });

      // T4-06: Siti (Probability Distributions & Trig Functions — f5-c5 & f5-c6)
      await runCase('T4-06', 'Journey: Siti (f5-c5 Prob & f5-c6 Trig + 60s Blitz EN)', async (page) => {
        await page.goto(server.baseUrl);
        await installQuestionSpy(page);
        await page.click('#btn-lang-en');
        await page.click('#main-view .chap-card[data-open-chap="f5-c5"]');
        await page.click('.mode-tabs .mode-tab[data-subtab="solver"]');
        await page.fill('.solver-inp-0[data-inp-id="mu"]', '60');
        await page.fill('.solver-inp-0[data-inp-id="sd"]', '5');
        await page.fill('.solver-inp-0[data-inp-id="x"]', '68');
        await page.click('[data-run-solver="0"]');
        await assertDomMathAndMediaClean(page, 'T4-06 f5-c5 z-score', { expectMath: true });

        await page.selectOption('#learn-chap-select', 'f5-c6');
        await page.click('.mode-tabs .mode-tab[data-subtab="solver"]');
        await page.fill('.solver-inp-0[data-inp-id="quad"]', '2');
        await page.click('[data-run-solver="0"]');
        await page.click('[data-rand-solver="0"]');
        await assertDomMathAndMediaClean(page, 'T4-06 f5-c6 trig solver', { expectMath: true });

        await page.click('.mode-tabs .mode-tab[data-subtab="practice"]');
        await solvePracticeViaGuided(page, { wrongFirst: false });

        await page.click('#side-main-nav [data-nav="blitz"]');
        await page.click('#btn-start-blitz');
        for (let i = 0; i < 3; i++) {
          await page.waitForSelector('[data-blitz-opt="0"]');
          await page.waitForFunction(() => !document.querySelector('.blitz-opt.blitz-correct, .blitz-opt.blitz-wrong'));
          await page.click('[data-blitz-opt="0"]');
          await page.waitForSelector('.blitz-opt.blitz-correct');
          await page.waitForFunction(() => !document.querySelector('.blitz-opt.blitz-correct, .blitz-opt.blitz-wrong'));
        }
        await page.click('#btn-end-blitz');
        await page.waitForSelector('#btn-start-blitz');
        await assertDomMathAndMediaClean(page, 'T4-06 blitz summary');
        const blitzTxt = await page.evaluate(() => document.getElementById('main-view')?.textContent || '');
        rep.assert('T4-06', /\d+\s*\/\s*3\s+(betul|correct)/i.test(blitzTxt), `Expected 3 answered questions in Blitz summary, got: ${blitzTxt.slice(0, 140)}`);
      });

      // T4-07: Kavin (Linear Programming & Kinematics — f5-c7 & f5-c8)
      await runCase('T4-07', 'Journey: Kavin (f5-c7 LP, f5-c8 Kinematics, Vault & Reset BM)', async (page) => {
        await page.goto(server.baseUrl);
        await installQuestionSpy(page);
        await page.click('#main-view .chap-card[data-open-chap="f5-c7"]');
        await page.click('.mode-tabs .mode-tab[data-subtab="solver"]');
        await page.click('[data-run-solver="0"]');
        await assertDomMathAndMediaClean(page, 'T4-07 f5-c7 solver', { expectMath: true });

        await page.click('.mode-tabs .mode-tab[data-subtab="practice"]');
        await solvePracticeViaGuided(page, { wrongFirst: false });

        await page.selectOption('#learn-chap-select', 'f5-c8');
        await page.click('.mode-tabs .mode-tab[data-subtab="concept"]');
        await page.setRangeValue('[data-lab-ctrl="t"]', 3);
        await page.click('.mode-tabs .mode-tab[data-subtab="solver"]');
        await page.fill('.solver-inp-0[data-inp-id="p"]', '1');
        await page.fill('.solver-inp-0[data-inp-id="q"]', '6');
        await page.fill('.solver-inp-0[data-inp-id="T"]', '5');
        await page.click('[data-run-solver="0"]');
        await assertDomMathAndMediaClean(page, 'T4-07 f5-c8 kinematics', { expectMath: true });
        const kinOut = await page.evaluate(() => document.getElementById('solver-out-0').textContent);
        rep.assertStrict('T4-07', !/(^|[^0-9._])(0t\^|1t\^)/.test(kinOut), 'kinematics-journey-solver rendered unsimplified 0t^/1t^');

        await page.click('#side-main-nav [data-nav="tutor"]');
        await page.click('[data-tutor-chip*="kinematik"]');
        await page.waitForFunction(() => document.querySelectorAll('#tutor-stream .msg-bot').length >= 2);
        await assertDomMathAndMediaClean(page, 'T4-07 tutor kinematics', { expectMath: true });

        await page.click('#side-main-nav [data-nav="profile"]');
        await page.fill('#vault-search-inp', 'sin');
        await page.reload();
        rep.assert('T4-07', (await getXp(page)) > 0, 'Expected persisted XP before reset');
        await page.click('#side-main-nav [data-nav="profile"]');
        page.setDialogHandler(() => true);
        await page.click('#btn-reset-progress');
        await page.waitForFunction(() => document.getElementById('hdr-xp')?.textContent === '0 XP');
      });

      // T4-08: Rural Offline Student (Zero-CDN Fallback Journey)
      await runCase(
        'T4-08',
        'Journey: Rural Offline Student (Zero-CDN Fallback across f4-c1, f4-c8, f5-c4)',
        async (page) => {
          await page.goto(server.baseUrl);
          for (const langBtn of ['#btn-lang-bm', '#btn-lang-en']) {
            await page.click(langBtn);
            for (const chapId of ['f4-c1', 'f4-c8', 'f5-c4']) {
              await page.click('#side-main-nav [data-nav="learn"]');
              await page.selectOption('#learn-chap-select', chapId);
              for (const sub of ['concept', 'bank', 'solver', 'practice']) {
                await page.click(`.mode-tabs .mode-tab[data-subtab="${sub}"]`);
                if (sub === 'solver') await page.click('[data-run-solver="0"]');
                await assertDomMathAndMediaClean(page, `T4-08 ${langBtn} ${chapId} ${sub}`, {
                  expectMath: true,
                  expectFallbackOnly: true,
                  onFallbackTeXLeak: (w) => rep.warn('T4-08', w, `${langBtn} ${chapId} ${sub}`)
                });
              }
            }
          }
        },
        { offline: true }
      );
    }
  } finally {
    await browser.close();
    await server.close();
  }

  return rep.summarize();
}

const isMain = process.argv[1] && path.resolve(process.argv[1]) === path.resolve(fileURLToPath(import.meta.url));
if (isMain) {
  const { strict, tiers } = parseCliArgs();
  if (tiers && !tiers.every((t) => t === 3 || t === 4)) {
    throw new Error(`test_browser_e2e.mjs supports only tiers 3 and 4 (got --tier=${tiers.join(',')})`);
  }
  const runTier3 = !tiers || tiers.includes(3);
  const runTier4 = !tiers || tiers.includes(4);
  const summary = await runBrowserTiers({ strict, runTier3, runTier4 });
  process.exit(summary.ok ? 0 : 1);
}
