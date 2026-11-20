import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  REPO_ROOT,
  parseCliArgs,
  loadAppInVm,
  withSeed,
  createMockCanvas,
  createReporter,
  checkMathStringIntegrity,
  checkPlainTextBoundary,
  checkRawTexBoundary,
  detectBmLeakInEn,
  hasJsLeak
} from './lib/loader.mjs';

function formatExpectedInput(q) {
  if (q.answerType === 'pair' && Array.isArray(q.correctValue)) {
    return q.correctValue.join(', ');
  }
  return String(q.correctValue);
}

function collectBilingualObjects(node, prefix, out = []) {
  if (!node || typeof node !== 'object') return out;
  if (Array.isArray(node)) {
    node.forEach((item, idx) => collectBilingualObjects(item, `${prefix}[${idx}]`, out));
    return out;
  }
  if ('bm' in node || 'en' in node) {
    out.push({ path: prefix, obj: node });
  }
  for (const [k, v] of Object.entries(node)) {
    if (k === 'bm' || k === 'en') continue;
    if (v && typeof v === 'object') {
      collectBilingualObjects(v, `${prefix}.${k}`, out);
    }
  }
  return out;
}

function walkStrings(node, prefix, visitor) {
  if (typeof node === 'string') {
    visitor(node, prefix);
    return;
  }
  if (!node || typeof node !== 'object') return;
  if (Array.isArray(node)) {
    node.forEach((item, idx) => walkStrings(item, `${prefix}[${idx}]`, visitor));
    return;
  }
  for (const [k, v] of Object.entries(node)) {
    walkStrings(v, `${prefix}.${k}`, visitor);
  }
}

export async function runTier1({ strict = false } = {}) {
  const rep = createReporter('Tier 1: Content, Schema, Bilingual & Math Integrity', { strict });
  const env = loadAppInVm();
  const { root, scripts, links, App, U, loadErrors } = env;

  // T1-01: 18-Chapter Registry & Assets
  rep.define('T1-01', '18-Chapter Registry, Datasets & Disk Assets');
  rep.assert('T1-01', loadErrors.length === 0, 'VM script load errors detected', JSON.stringify(loadErrors[0]));
  rep.assert('T1-01', Boolean(App && U), 'window.AddMathApp or utils missing');

  const expectedIds = [
    ...Array.from({ length: 10 }, (_, i) => `f4-c${i + 1}`),
    ...Array.from({ length: 8 }, (_, i) => `f5-c${i + 1}`)
  ];
  const chapters = App?.chapters || [];
  rep.assert('T1-01', chapters.length === 18, `Expected 18 chapters, got ${chapters.length}`);
  rep.assert(
    'T1-01',
    JSON.stringify(chapters.map((c) => c.id)) === JSON.stringify(expectedIds),
    'Chapter IDs do not match f4-c1..f4-c10, f5-c1..f5-c8'
  );
  for (const ch of chapters) {
    const expForm = ch.id.startsWith('f4-') ? 4 : 5;
    const expNum = Number(ch.id.split('-c')[1]);
    rep.assert('T1-01', ch.form === expForm && ch.num === expNum, `Bad form/num on ${ch.id}`);
    rep.assert('T1-01', ch.unlocked === true, `Chapter ${ch.id} not unlocked`);
    rep.assert('T1-01', Boolean(App.teacherClinic?.[ch.id]), `Missing teacherClinic for ${ch.id}`);
    rep.assert('T1-01', Boolean(App.visualLabs?.[ch.id]), `Missing visualLabs for ${ch.id}`);
    const bank = App.masterBank?.[ch.id];
    rep.assert('T1-01', Array.isArray(bank) && bank.length === 10, `Expected 10 masterBank items for ${ch.id}`);
    rep.assert('T1-01', Array.isArray(ch.solvers) && ch.solvers.length >= 1, `Missing solvers for ${ch.id}`);
    const posterPath = path.join(root, 'assets', 'posters', `${ch.id}.jpg`);
    rep.assert('T1-01', fs.existsSync(posterPath) && fs.statSync(posterPath).size > 0, `Missing poster ${posterPath}`);
  }
  const totalSolvers = chapters.reduce((acc, c) => acc + (c.solvers?.length || 0), 0);
  rep.assert('T1-01', totalSolvers === 20, `Expected 20 solvers total, got ${totalSolvers}`);
  rep.assert('T1-01', Array.isArray(App.upcomingStages) && App.upcomingStages.length === 0, 'upcomingStages must be empty');
  rep.assert('T1-01', Array.isArray(App.blitzBank) && App.blitzBank.length === 22, `Expected 22 blitzBank items, got ${App.blitzBank?.length}`);

  for (const assetRel of ['assets/icon-192.png', 'assets/og-preview.jpg', ...scripts, ...links]) {
    const abs = path.join(root, assetRel);
    rep.assert('T1-01', fs.existsSync(abs) && fs.statSync(abs).size > 0, `Missing local referenced file: ${assetRel}`);
  }

  // T1-02: Recursive bm/en Parity & Placeholder Scan
  rep.define('T1-02', 'Bilingual bm/en Parity, Placeholders & EN/BM Ratio');
  const stubKeywordRe = /\b(TBD|TODO|FIXME|coming soon|akan datang|lorem ipsum)\b/i;
  const explicitPlaceholderStubRe =
    /(?:^\s*placeholder[\s.!?:;-]*$|^\s*(?:a\s+)?dummy\s+placeholder[\s.!?:;-]*$|[\[\(<{]\s*placeholder\s*[\]\)}>]|\bplaceholder\s*:|\bplaceholder\s+(?:text|string|content|copy|here|only|tbd|todo)\b|\b(?:static|wip|draft|empty|this is a|just a)\s+(?:dummy\s+)?placeholder\b)/i;
  const mathPlaceholderRe =
    /\b(?:dummy\s+placeholder\b(?=\s+(?:for\s+(?:the\s+|an?\s+|any\s+|this\s+|each\s+)?(?:(?:input|output|variable|unknown|number|digit|constant|quantity|expression|function|argument|missing|empty|zero|value|term)\b|\$)|in|of|that|which|to\b)|[.,;!?]|$)|placeholder\s+(?:(?:variable|variables|symbol|symbols|letter|letters|notation|digit|digits|value|values|term|terms)\b|for\s+(?:the\s+|an?\s+|any\s+|this\s+|each\s+)?(?:(?:input|output|variable|unknown|number|digit|constant|quantity|expression|function|argument|missing|empty|zero|value|term)\b|\$)))/gi;
  const isPlaceholderText = (str) => {
    if (stubKeywordRe.test(str)) return true;
    if (explicitPlaceholderStubRe.test(str)) return true;
    return /\bplaceholder\b/i.test(str.replace(mathPlaceholderRe, ' '));
  };
  const dashOnlyRe = /^\s*[-—.]+\s*$/;

  const datasets = [
    ['chapters', App.chapters],
    ['masterBank', App.masterBank],
    ['teacherClinic', App.teacherClinic],
    ['visualLabs', App.visualLabs],
    ['blitzBank', App.blitzBank]
  ];
  for (const [name, data] of datasets) {
    const pairs = collectBilingualObjects(data, name);
    rep.assert('T1-02', pairs.length > 0, `No bilingual pairs found in ${name}`);
    for (const { path: p, obj } of pairs) {
      const bmVal = obj.bm;
      const enVal = obj.en;
      if (Array.isArray(bmVal) || Array.isArray(enVal)) {
        rep.assert('T1-02', Array.isArray(bmVal) && Array.isArray(enVal), `Array/string mismatch at ${p}`);
        if (Array.isArray(bmVal) && Array.isArray(enVal)) {
          rep.assert('T1-02', bmVal.length > 0 && enVal.length > 0, `Empty array at ${p}`);
          rep.assertStrict(
            'T1-02',
            bmVal.length === enVal.length || (bmVal.length >= 2 && enVal.length >= 2),
            `Array length parity mismatch (bm=${bmVal.length}, en=${enVal.length})`,
            p
          );
          for (let i = 0; i < bmVal.length; i++) {
            const s = String(bmVal[i] ?? '').trim();
            rep.assert('T1-02', s.length > 0 && !isPlaceholderText(s) && !dashOnlyRe.test(s), `Placeholder/empty in ${p}.bm[${i}]`);
          }
          for (let i = 0; i < enVal.length; i++) {
            const s = String(enVal[i] ?? '').trim();
            rep.assert('T1-02', s.length > 0 && !isPlaceholderText(s) && !dashOnlyRe.test(s), `Placeholder/empty in ${p}.en[${i}]`);
          }
        }
      } else {
        const bmStr = typeof bmVal === 'string' ? bmVal.trim() : '';
        const enStr = typeof enVal === 'string' ? enVal.trim() : '';
        rep.assert('T1-02', bmStr.length > 0 && enStr.length > 0, `Missing/empty bm or en at ${p}`);
        rep.assert('T1-02', !isPlaceholderText(bmStr) && !dashOnlyRe.test(bmStr), `Placeholder in ${p}.bm: ${bmStr}`);
        rep.assert('T1-02', !isPlaceholderText(enStr) && !dashOnlyRe.test(enStr), `Placeholder in ${p}.en: ${enStr}`);
      }
    }
  }

  // EN/BM length ratio checks on concepts, masterBank schemes, teacherClinic
  for (const ch of chapters) {
    for (let i = 0; i < ch.concepts.length; i++) {
      const c = ch.concepts[i];
      if (c.body?.bm && c.body?.en) {
        const ratio = c.body.en.trim().length / Math.max(1, c.body.bm.trim().length);
        rep.assertStrict('T1-02', ratio >= 0.6, `Concept body EN/BM ratio too low (${ratio.toFixed(2)})`, `${ch.id}.concepts[${i}]`);
      }
    }
    const cl = App.teacherClinic[ch.id];
    if (cl) {
      const bmLen = JSON.stringify(cl).length;
      let bmChars = 0;
      let enChars = 0;
      for (const { obj } of collectBilingualObjects(cl, ch.id)) {
        if (typeof obj.bm === 'string') bmChars += obj.bm.length;
        if (typeof obj.en === 'string') enChars += obj.en.length;
      }
      const ratio = enChars / Math.max(1, bmChars);
      rep.assertStrict('T1-02', ratio >= 0.6 && bmLen > 0, `Clinic EN/BM ratio low (${ratio.toFixed(2)})`, ch.id);
    }
  }

  // T1-03: Math Delimiters & JS Escaping Integrity
  rep.define('T1-03', 'Balanced $/$$, Balanced {}, Zero \\(...\\), Zero JS Control Chars');
  for (const [name, data] of datasets) {
    // Check renderMixed fields (skip raw-TeX keys like .tex which are checked in T1-04)
    walkStrings(data, name, (str, p) => {
      if (p.endsWith('.tex') || p.includes('.tex.')) {
        const rawErrs = checkRawTexBoundary(str);
        rep.assert('T1-03', rawErrs.length === 0, `${rawErrs[0]} at ${p}`);
      } else {
        const errs = checkMathStringIntegrity(str);
        rep.assert('T1-03', errs.length === 0, `${errs[0]} at ${p}`);
      }
    });
  }

  // T1-04: UI Rendering Boundaries (U.t plain-text vs U.renderTex raw-TeX)
  rep.define('T1-04', 'Plain-Text (U.t) vs Raw-TeX (U.renderTex) Rendering Boundaries');
  for (const ch of chapters) {
    for (const field of ['title', 'subtitle', 'code', 'spmWeight']) {
      for (const lang of ['bm', 'en']) {
        const errs = checkPlainTextBoundary(U.t(ch[field], lang));
        rep.assert('T1-04', errs.length === 0, `${errs[0]} at ${ch.id}.${field}.${lang}`);
      }
    }
    ch.concepts.forEach((sec, si) => {
      for (const lang of ['bm', 'en']) {
        const errs = checkPlainTextBoundary(U.t(sec.title, lang));
        rep.assert('T1-04', errs.length === 0, `${errs[0]} at ${ch.id}.concepts[${si}].title.${lang}`);
      }
      (sec.formulas || []).forEach((f, fi) => {
        for (const lang of ['bm', 'en']) {
          const lErrs = checkPlainTextBoundary(U.t(f.label, lang));
          rep.assert('T1-04', lErrs.length === 0, `${lErrs[0]} at ${ch.id}.concepts[${si}].formulas[${fi}].label.${lang}`);
          const texStr = U.t(f.tex, lang);
          const tErrs = checkRawTexBoundary(texStr);
          rep.assert('T1-04', tErrs.length === 0, `${tErrs[0]} at ${ch.id}.concepts[${si}].formulas[${fi}].tex.${lang}`);
        }
      });
      if (sec.workedExample?.steps) {
        sec.workedExample.steps.forEach((ws, wi) => {
          for (const lang of ['bm', 'en']) {
            const tErrs = checkRawTexBoundary(U.t(ws.tex, lang));
            rep.assert('T1-04', tErrs.length === 0, `${tErrs[0]} at ${ch.id}.concepts[${si}].workedExample.steps[${wi}].tex.${lang}`);
          }
        });
      }
    });
    (ch.traps || []).forEach((tr, ti) => {
      for (const lang of ['bm', 'en']) {
        const errs = checkPlainTextBoundary(U.t(tr.title, lang));
        rep.assert('T1-04', errs.length === 0, `${errs[0]} at ${ch.id}.traps[${ti}].title.${lang}`);
      }
    });
    (ch.solvers || []).forEach((s, si) => {
      for (const lang of ['bm', 'en']) {
        for (const key of ['title', 'desc']) {
          const errs = checkPlainTextBoundary(U.t(s[key], lang));
          rep.assert('T1-04', errs.length === 0, `${errs[0]} at ${ch.id}.solvers[${si}].${key}.${lang}`);
        }
        (s.inputs || []).forEach((inp, ii) => {
          const errs = checkPlainTextBoundary(U.t(inp.label, lang));
          rep.assert('T1-04', errs.length === 0, `${errs[0]} at ${ch.id}.solvers[${si}].inputs[${ii}].label.${lang}`);
        });
      }
    });
    const cl = App.teacherClinic[ch.id];
    if (cl) {
      for (const lang of ['bm', 'en']) {
        const pErrs = checkPlainTextBoundary(U.t(cl.posterTitle, lang));
        rep.assert('T1-04', pErrs.length === 0, `${pErrs[0]} at clinic.${ch.id}.posterTitle.${lang}`);
      }
      (cl.mentalModels || []).forEach((m, mi) => {
        for (const lang of ['bm', 'en']) {
          const mErrs = checkPlainTextBoundary(U.t(m.tag, lang));
          rep.assert('T1-04', mErrs.length === 0, `${mErrs[0]} at clinic.${ch.id}.mentalModels[${mi}].tag.${lang}`);
        }
      });
    }
  }

  // T1-05: BM-in-EN Leakage Detection
  rep.define('T1-05', 'BM-in-EN Leakage Check (excl. vocabBridge.en & valid min)');
  const scanEnLeaks = (node, prefix) => {
    if (!node || typeof node !== 'object') return;
    if (Array.isArray(node)) {
      node.forEach((it, idx) => scanEnLeaks(it, `${prefix}[${idx}]`));
      return;
    }
    if (('bm' in node || 'en' in node) && !prefix.endsWith('.vocabBridge')) {
      const enVal = node.en;
      const items = Array.isArray(enVal) ? enVal : [enVal];
      items.forEach((s, idx) => {
        if (typeof s === 'string') {
          const leak = detectBmLeakInEn(s);
          rep.assertStrict('T1-05', !leak, `BM leak "${leak}" in EN`, `${prefix}${Array.isArray(enVal) ? `[${idx}]` : ''}`);
        }
      });
    }
    for (const [k, v] of Object.entries(node)) {
      if (k === 'bm' || k === 'en') continue;
      if (k === 'tex' && typeof v === 'string') {
        // Unlocalized raw f.tex string checked when rendered in EN
        const leak = detectBmLeakInEn(v);
        rep.assertStrict('T1-05', !leak, `Unlocalized BM text "${leak}" in raw .tex`, prefix);
      } else if (v && typeof v === 'object') {
        scanEnLeaks(v, `${prefix}.${k}`);
      }
    }
  };
  scanEnLeaks(App.chapters, 'chapters');
  scanEnLeaks(App.masterBank, 'masterBank');
  scanEnLeaks(App.teacherClinic, 'teacherClinic');
  scanEnLeaks(App.visualLabs, 'visualLabs');
  scanEnLeaks(App.blitzBank, 'blitzBank');

  // T1-06: generateQuestion over 20 seeds x 18 ch x 3 tiers x 2 langs (2,160 samples)
  rep.define('T1-06', 'generateQuestion 2,160-Sample Round-Trip, Delimiters & R2 Traps');
  const SEEDS = 20;
  for (const ch of chapters) {
    for (const tier of [1, 2, 3]) {
      for (const lang of ['bm', 'en']) {
        for (let seed = 1; seed <= SEEDS; seed++) {
          let q;
          try {
            q = withSeed(seed * 997 + ch.num * 31 + tier * 7, () => ch.generateQuestion(tier, lang), env.sb);
          } catch (err) {
            rep.fail('T1-06', `generateQuestion threw on ${ch.id} T${tier} ${lang} seed=${seed}`, err.message);
            continue;
          }
          const ctx = `${ch.id} T${tier} ${lang} s${seed}`;
          rep.assert('T1-06', Boolean(q && q.prompt && q.answerType && Array.isArray(q.steps) && q.steps.length >= 1), `Invalid question structure (${ctx})`);
          if (!q) continue;

          if (q.subtopic) {
            const subErrs = checkPlainTextBoundary(U.t(q.subtopic, lang));
            rep.assert('T1-06', subErrs.length === 0, `${subErrs[0]} in q.subtopic (${ctx})`);
          }

          // Check finite correctValue
          if (q.answerType === 'pair') {
            rep.assert('T1-06', Array.isArray(q.correctValue) && q.correctValue.length === 2 && q.correctValue.every(Number.isFinite), `Non-finite pair correctValue (${ctx})`);
          } else if (q.answerType === 'number') {
            rep.assert('T1-06', Number.isFinite(Number(q.correctValue)), `Non-finite numeric correctValue (${ctx})`);
          } else {
            rep.assert('T1-06', ['1', '2', '3'].includes(String(q.correctValue)), `Invalid choice correctValue (${ctx})`);
          }

          // Round-trip evaluateAnswer
          const expInput = formatExpectedInput(q);
          const evalRes = U.evaluateAnswer(q, expInput, lang);
          rep.assert('T1-06', evalRes && evalRes.correct === true, `Round-trip evaluateAnswer failed for "${expInput}" (${ctx})`);

          // Guided steps finite parse
          const gSteps = q.guidedSteps || [];
          for (let gi = 0; gi < gSteps.length; gi++) {
            const gs = gSteps[gi];
            const parsed = U.parseStudentNumber(gs.expected);
            rep.assert('T1-06', Number.isFinite(parsed), `guidedSteps[${gi}].expected="${gs.expected}" not finite (${ctx})`);
          }

          // Zero NaN/undefined/null string leaks & delimiter checks
          walkStrings(
            {
              prompt: q.prompt,
              hints: q.hints,
              traps: q.traps,
              guidedSteps: q.guidedSteps,
              steps: q.steps,
              intentMeta: q.intentMeta
            },
            ctx,
            (str, p) => {
              rep.assert('T1-06', !hasJsLeak(str, true), `Literal NaN/undefined/null leak in ${p}: ${str.slice(0, 60)}`);
              if (p.endsWith('.tex')) {
                const re = checkRawTexBoundary(str);
                rep.assert('T1-06', re.length === 0, `${re[0]} in ${p}`);
              } else if (p.includes('.intentMeta')) {
                // formatSafeMetaMath wraps raw TeX in $...$ if no $ is present
                if (str.includes('$')) {
                  const me = checkMathStringIntegrity(str);
                  rep.assert('T1-06', me.length === 0, `${me[0]} in ${p}`);
                } else {
                  const re = checkRawTexBoundary(str);
                  rep.assert('T1-06', re.length === 0, `${re[0]} in ${p}`);
                }
              } else if (!p.includes('.expected')) {
                const me = checkMathStringIntegrity(str);
                rep.assert('T1-06', me.length === 0, `${me[0]} in ${p}`);
              }
              if (lang === 'en' && !p.includes('.intentMeta') && !p.endsWith('.bm')) {
                const leak = detectBmLeakInEn(str);
                rep.assertStrict('T1-06', !leak, `BM leak "${leak}" in generated EN question`, p);
              }
            }
          );

          if (typeof q.displayAnswerTex === 'string') {
            const datErrs = checkRawTexBoundary(q.displayAnswerTex);
            rep.assert('T1-06', datErrs.length === 0, `${datErrs[0]} in q.displayAnswerTex (${ctx})`);
            rep.assert('T1-06', !hasJsLeak(q.displayAnswerTex, true), `Literal NaN/undefined/null leak in q.displayAnswerTex (${ctx})`);
          }

          // Strict R2 thresholds & trap non-collision
          rep.assertStrict('T1-06', gSteps.length >= 2, `guidedSteps.length=${gSteps.length} < 2`, ctx);
          rep.assertStrict('T1-06', (q.hints || []).length >= 2, `hints.length=${(q.hints || []).length} < 2`, ctx);
          rep.assertStrict('T1-06', (q.traps || []).length >= 1, `traps.length=0`, ctx);
          rep.assertStrict('T1-06', q.steps.length >= 2, `steps.length=${q.steps.length} < 2`, ctx);
          q.steps.forEach((st, si) => {
            rep.assertStrict('T1-06', Boolean(U.t(st.why, lang).trim()), `Missing steps[${si}].why`, ctx);
          });

          // Trap non-collision
          for (const tr of q.traps || []) {
            if (q.answerType === 'number' || q.answerType === 'choice') {
              const trapRes = U.evaluateAnswer(q, String(tr.value), lang);
              rep.assertStrict(
                'T1-06',
                trapRes.correct === false && trapRes.trapHit === true,
                `Trap value ${tr.value} collides with correctValue=${q.correctValue} or fails trapHit`,
                ctx
              );
            } else if (q.answerType === 'pair') {
              if (Array.isArray(tr.value) && tr.value.length >= 2) {
                const trapRes = U.evaluateAnswer(q, `${tr.value[0]}, ${tr.value[1]}`, lang);
                rep.assertStrict(
                  'T1-06',
                  trapRes.correct === false && trapRes.trapHit === true,
                  `Pair trap [${tr.value.join(', ')}] collides with correctValue=${JSON.stringify(q.correctValue)} or fails trapHit`,
                  ctx
                );
              } else if (tr.value !== null && tr.value !== undefined && tr.value !== '') {
                const tv = Number(tr.value);
                const [c1, c2] = q.correctValue || [];
                const tol = q.tolerance !== undefined ? q.tolerance : 0.05;
                const noElemCollision =
                  Number.isFinite(tv) &&
                  Math.abs(tv - c1) > Math.max(tol, Math.abs(c1) * 0.005) &&
                  Math.abs(tv - c2) > Math.max(tol, Math.abs(c2) * 0.005);
                const trapRes = U.evaluateAnswer(q, `${tr.value}, 999999`, lang);
                rep.assertStrict(
                  'T1-06',
                  noElemCollision && trapRes.correct === false && trapRes.trapHit === true,
                  `Pair scalar trap ${tr.value} collides with correctValue=${JSON.stringify(q.correctValue)} or fails trapHit`,
                  ctx
                );
              }
            }
          }

          // EN intentMeta localization check
          if (lang === 'en') {
            const meta = q.intentMeta || {};
            for (const mk of ['given', 'goal', 'conceptRule']) {
              const v = meta[mk];
              const isLocalized =
                (v && typeof v === 'object' && typeof v.en === 'string' && v.en.trim().length > 0 && !detectBmLeakInEn(v.en)) ||
                (typeof v === 'string' && v.trim().length > 0 && !detectBmLeakInEn(v));
              rep.assertStrict('T1-06', Boolean(isLocalized), `intentMeta.${mk} missing or unlocalized BM in EN`, ctx);
            }
          }
        }
      }
    }
  }

  // T1-07: Concept R1/R2 Schema & Teacher Clinic
  rep.define('T1-07', 'Concept R1/R2 Schema & Teacher Clinic Completeness');
  for (const ch of chapters) {
    rep.assert('T1-07', ch.concepts.length >= 2, `${ch.id} has < 2 concepts`);
    rep.assert('T1-07', ch.traps.length >= 1, `${ch.id} has < 1 trap`);
    rep.assertStrict('T1-07', ch.traps.length >= 2, `${ch.id} traps.length=${ch.traps.length} < 2`);

    ch.concepts.forEach((sec, ci) => {
      const ctx = `${ch.id}.concepts[${ci}]`;
      rep.assert('T1-07', Array.isArray(sec.formulas) && sec.formulas.length >= 1, `${ctx} missing formulas`);
      rep.assertStrict('T1-07', Boolean(sec.prereq?.bm?.trim() && sec.prereq?.en?.trim()), `Missing prereq {bm,en}`, ctx);
      rep.assertStrict('T1-07', Boolean(sec.firstStep?.bm?.trim() && sec.firstStep?.en?.trim()), `Missing firstStep {bm,en}`, ctx);
      rep.assertStrict(
        'T1-07',
        Boolean(sec.body?.bm?.trim().length >= 80 && sec.body?.en?.trim().length >= 80),
        `Concept body < 80 chars`,
        ctx
      );
      const we = sec.workedExample;
      const weValid = Boolean(
        we &&
          we.title?.bm &&
          we.title?.en &&
          we.problem?.bm &&
          we.problem?.en &&
          Array.isArray(we.steps) &&
          we.steps.length >= 2 &&
          we.steps.every((st) => st.label?.bm && st.label?.en && U.t(st.tex, 'bm') && st.why?.bm && st.why?.en)
      );
      rep.assertStrict('T1-07', weValid, `Missing or incomplete workedExample`, ctx);
    });

    const cl = App.teacherClinic[ch.id];
    rep.assert('T1-07', Boolean(cl && cl.poster && cl.painSummary && cl.rxFix?.wrong && cl.rxFix?.right), `Clinic baseline fields missing for ${ch.id}`);
    rep.assert('T1-07', (cl?.mentalModels?.length || 0) >= 2, `Clinic ${ch.id} mentalModels < 2`);
    rep.assert('T1-07', (cl?.triggers?.length || 0) >= 2, `Clinic ${ch.id} triggers < 2`);
    rep.assertStrict('T1-07', (cl?.mentalModels?.length || 0) >= 3, `Clinic mentalModels < 3`, ch.id);
    rep.assertStrict('T1-07', (cl?.triggers?.length || 0) >= 3, `Clinic triggers < 3`, ch.id);
    const vbBm = cl?.vocabBridge?.bm?.trim() || '';
    const vbEn = cl?.vocabBridge?.en?.trim() || '';
    rep.assertStrict(
      'T1-07',
      vbBm.length >= 10 && vbEn.length >= 10 && vbEn.length / Math.max(1, vbBm.length) >= 0.6,
      `vocabBridge missing or asymmetric`,
      ch.id
    );
  }

  // T1-08: Master Bank (180 items)
  rep.define('T1-08', 'Master Bank 180 Items Zero-Leap Depth & EN Parity');
  for (const ch of chapters) {
    const bank = App.masterBank[ch.id] || [];
    rep.assert('T1-08', bank.length === 10, `${ch.id} bank length=${bank.length} !== 10`);
    for (const it of bank) {
      const ctx = `${ch.id}:${it.code}`;
      rep.assert('T1-08', Boolean(it.code && it.marks >= 1 && it.topic && it.q), `Missing metadata on ${ctx}`);
      const mBm = it.mistakes?.bm || [];
      const mEn = it.mistakes?.en || [];
      rep.assert('T1-08', mBm.length >= 1 && mEn.length >= 1, `Missing mistakes on ${ctx}`);
      rep.assertStrict('T1-08', mBm.length >= 2 && mEn.length >= 2, `mistakes < 2 (bm=${mBm.length}, en=${mEn.length})`, ctx);

      const sch = it.scheme || [];
      rep.assert('T1-08', sch.length >= 1, `Empty scheme on ${ctx}`);
      rep.assertStrict('T1-08', sch.length >= 3, `Terse scheme (${sch.length} steps < 3)`, ctx);

      let totalBm = 0;
      let totalEn = 0;
      for (let si = 0; si < sch.length; si++) {
        const st = sch[si];
        rep.assert('T1-08', ['K1', 'N1', 'P1', 'J1'].includes(st.badge), `Invalid badge ${st.badge} on ${ctx}`);
        totalBm += (st.bm || '').length;
        totalEn += (st.en || '').length;
        rep.assertStrict('T1-08', Boolean(st.why?.bm?.trim() && st.why?.en?.trim()), `Missing scheme[${si}].why`, ctx);
      }
      const ratio = totalEn / Math.max(1, totalBm);
      rep.assertStrict('T1-08', ratio >= 0.65, `EN scheme truncated (en=${totalEn}, bm=${totalBm}, ratio=${ratio.toFixed(2)})`, ctx);
    }
  }

  // T1-09: 20 Solvers Default Execution & Artifacts Check
  rep.define('T1-09', 'All 20 Dynamic Solvers Default Execution (BM & EN)');
  for (const ch of chapters) {
    for (const solver of ch.solvers || []) {
      const defaults = {};
      for (const inp of solver.inputs || []) defaults[inp.id] = inp.default;

      for (const lang of ['bm', 'en']) {
        const ctx = `${ch.id}/${solver.id}/${lang}`;
        let res;
        try {
          res = solver.solve(defaults, lang);
        } catch (err) {
          rep.fail('T1-09', `Solver threw on defaults (${ctx})`, err.message);
          continue;
        }
        rep.assert('T1-09', Boolean(res && res.problemTex && res.finalTex && Array.isArray(res.steps) && res.steps.length >= 1), `Invalid solver output (${ctx})`);
        if (!res) continue;

        const allText = JSON.stringify(res);
        let solverJsLeak = null;
        walkStrings(res, ctx, (str, p) => {
          if (!solverJsLeak && hasJsLeak(str, false)) solverJsLeak = `${p}: ${str.slice(0, 60)}`;
        });
        rep.assert('T1-09', !solverJsLeak, `NaN/undefined in solver output (${ctx}): ${solverJsLeak}`);
        const strippedInf = allText.replace(/Sum to Infinity/gi, '');
        rep.assert('T1-09', !/\bInfinity\b/.test(strippedInf), `Unexpected Infinity in solver output (${ctx})`);

        for (const rt of [res.problemTex, res.finalTex, ...res.steps.map((s) => s.tex)]) {
          const rErrs = checkRawTexBoundary(rt);
          rep.assert('T1-09', rErrs.length === 0, `${rErrs[0]} in ${ctx}`);
        }
        for (const mt of [...res.steps.flatMap((s) => [s.title, s.why]), res.trapWarning].filter(Boolean)) {
          const mErrs = checkMathStringIntegrity(mt);
          rep.assert('T1-09', mErrs.length === 0, `${mErrs[0]} in ${ctx}`);
        }

        rep.assertStrict('T1-09', res.steps.length >= 3, `Solver steps.length=${res.steps.length} < 3`, ctx);
        res.steps.forEach((st, idx) => {
          rep.assertStrict(
            'T1-09',
            Boolean(st.badge && st.title?.trim() && st.tex?.trim() && st.why?.trim()),
            `Incomplete solver step[${idx}]`,
            ctx
          );
        });

        // Unsimplified polynomial artifact check (1x^, 0x^, 1t^, 0t^)
        const texBlob = [res.problemTex, res.finalTex, ...res.steps.map((s) => s.tex)].join(' ');
        rep.assertStrict(
          'T1-09',
          !/(^|[^0-9._])(0[xt]\^|1[xt]\^)/.test(texBlob),
          `Unsimplified 1x^/0x^/1t^ artifact in solver TeX`,
          ctx
        );

        if (lang === 'en') {
          const leak = detectBmLeakInEn(allText);
          rep.assertStrict('T1-09', !leak, `BM leak "${leak}" in EN solver output`, ctx);
        }
      }

      // Live sensitivity test for sys-3x3 (must NOT be static placeholder)
      if (solver.id === 'sys-3x3') {
        const alt = { ...defaults, d1: Number(defaults.d1) + 5, d2: Number(defaults.d2) - 2 };
        const resDef = solver.solve(defaults, 'en');
        const resAlt = solver.solve(alt, 'en');
        rep.assertStrict(
          'T1-09',
          resDef.finalTex !== resAlt.finalTex && resDef.steps?.[0]?.tex !== resAlt.steps?.[0]?.tex,
          `sys-3x3 output is static/insensitive to input changes`
        );
      }
    }
  }

  // T1-10: Diagnostic Coach Localization & 7 Intents
  rep.define('T1-10', 'Socratic Coach 7 Intents & EN/BM Localization');
  const intentQueries = [
    { intent: 'generate_steps', bm: 'Jana pelan langkah demi langkah', en: 'Generate step by step plan', expectGuided: true },
    { intent: 'motivation', bm: 'Saya rasa susah dan pening kepala', en: 'This is too hard I want to give up', expectGuided: false },
    { intent: 'stuck_start', bm: 'Saya tak tahu nak mula dari mana', en: 'How do I start?', expectGuided: true },
    { intent: 'formula_confusion', bm: 'Rumus mana perlu saya guna?', en: 'Which formula should I use?', expectGuided: false },
    { intent: 'diagnose_wrong', bm: 'Kenapa jawapan saya salah?', en: 'Why was I wrong?', expectGuided: true },
    { intent: 'mental_model', bm: 'Berikan analogi mudah ingat', en: 'Give me the teacher memory trick', expectGuided: false },
    { intent: 'why_concept', bm: 'Terangkan konsep soalan ini', en: 'Explain the concept behind this', expectGuided: false }
  ];
  const repChapters = ['f4-c1', 'f4-c3', 'f4-c7', 'f5-c2', 'f5-c6'].map((id) => chapters.find((c) => c.id === id));
  for (const ch of repChapters) {
    for (const lang of ['bm', 'en']) {
      const q = withSeed(42, () => ch.generateQuestion(1, lang), env.sb);
      for (const iq of intentQueries) {
        const msg = iq[lang];
        let out;
        try {
          out = App.coach.coachOnQuestion(msg, q, ch, '999', lang);
        } catch (err) {
          rep.fail('T1-10', `coachOnQuestion threw on ${ch.id} ${iq.intent} ${lang}`, err.message);
          continue;
        }
        rep.assert('T1-10', Boolean(out && out.tag && out.reply), `Empty coach output on ${ch.id} ${iq.intent} ${lang}`);
        if (iq.expectGuided) {
          rep.assert('T1-10', out.openGuided === true, `Expected openGuided=true on ${iq.intent} (${ch.id})`);
        }
        const mErrs = checkMathStringIntegrity(out.reply);
        rep.assert('T1-10', mErrs.length === 0, `${mErrs[0]} in coach reply (${ch.id} ${iq.intent} ${lang})`);
        if (lang === 'en') {
          const leak = detectBmLeakInEn(out.reply);
          rep.assertStrict('T1-10', !leak, `BM leak "${leak}" in EN coach reply`, `${ch.id} ${iq.intent}`);
        }
      }
    }
  }

  // T1-11: Blitz Bank & Visual Labs Contracts
  rep.define('T1-11', '22 Blitz Questions & 18 Visual Labs Contracts');
  App.blitzBank.forEach((b, idx) => {
    rep.assert('T1-11', Boolean(b.q?.bm && b.q?.en), `blitzBank[${idx}] missing q`);
    rep.assert('T1-11', Array.isArray(b.options?.bm) && b.options.bm.length === 3, `blitzBank[${idx}].options.bm len !== 3`);
    rep.assert('T1-11', Array.isArray(b.options?.en) && b.options.en.length === 3, `blitzBank[${idx}].options.en len !== 3`);
    rep.assert('T1-11', [0, 1, 2].includes(b.ans), `blitzBank[${idx}].ans=${b.ans} invalid`);
  });

  const mockCanvas = createMockCanvas();
  for (const ch of chapters) {
    const lab = App.visualLabs[ch.id];
    rep.assert('T1-11', Boolean(lab && lab.title?.bm && lab.title?.en && lab.desc?.bm && lab.desc?.en), `Invalid lab metadata on ${ch.id}`);
    rep.assert('T1-11', Array.isArray(lab?.controls) && lab.controls.length >= 1, `Lab ${ch.id} missing controls`);
    rep.assert('T1-11', typeof lab?.render === 'function', `Lab ${ch.id} render is not a function`);
    const defVals = {};
    for (const c of lab?.controls || []) {
      rep.assert(
        'T1-11',
        Boolean(c.id && c.label?.bm && c.label?.en && c.min < c.max && c.step > 0 && c.default >= c.min && c.default <= c.max),
        `Invalid control ${c.id} in lab ${ch.id}`
      );
      defVals[c.id] = c.default;
    }
    for (const lang of ['bm', 'en']) {
      for (const isDark of [false, true]) {
        try {
          const info = lab.render(mockCanvas, defVals, lang, isDark);
          rep.assert('T1-11', typeof info === 'string' && info.trim().length > 0, `Empty lab readout on ${ch.id} ${lang} dark=${isDark}`);
        } catch (err) {
          rep.fail('T1-11', `Lab ${ch.id} render threw (${lang}, dark=${isDark})`, err.message);
        }
      }
    }
  }

  return rep.summarize();
}

const isMain = process.argv[1] && path.resolve(process.argv[1]) === path.resolve(fileURLToPath(import.meta.url));
if (isMain) {
  const { strict } = parseCliArgs();
  const summary = await runTier1({ strict });
  process.exit(summary.ok ? 0 : 1);
}
