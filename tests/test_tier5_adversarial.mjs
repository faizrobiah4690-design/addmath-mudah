import path from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  parseCliArgs,
  loadAppInVm,
  withSeed,
  createMockCanvas,
  createReporter,
  checkMathStringIntegrity,
  checkPlainTextBoundary,
  hasJsLeak,
  hasUndefinedOverflow,
  RAW_TEX_CMD_RE
} from './lib/loader.mjs';

function walkCorpusStrings(node, prefix, cb) {
  if (typeof node === 'string') {
    cb(node, prefix);
    return;
  }
  if (!node || typeof node !== 'object') return;
  if (Array.isArray(node)) {
    for (let i = 0; i < node.length; i++) {
      walkCorpusStrings(node[i], `${prefix}[${i}]`, cb);
    }
    return;
  }
  for (const [k, v] of Object.entries(node)) {
    walkCorpusStrings(v, `${prefix}.${k}`, cb);
  }
}

function findLeakInObj(node, prefix) {
  let hit = null;
  walkCorpusStrings(node, prefix, (str, p) => {
    if (!hit && (hasJsLeak(str, false) || hasUndefinedOverflow(str))) {
      hit = `${p}: ${str.slice(0, 80)}`;
    }
  });
  return hit;
}

export async function runTier5({ strict = false } = {}) {
  const rep = createReporter('Tier 5: White-Box Adversarial, State Resilience & Regression Suite', { strict });
  const env = loadAppInVm({ onLine: false });
  const { App, U, sb } = env;
  const chapters = App.chapters;

  // T5-01: parseStudentNumber & evaluateAnswer Adversarial Grammar & Pair Tolerance
  rep.define('T5-01', 'parseStudentNumber & evaluateAnswer Adversarial Grammar & Pair Tolerance');
  const rejectNums = [
    'π3', 'πe2', 'pi3', '2π', '1e999', '-1e999', '1e309',
    'sqrt(1e999)', '5%0', '50%%', '%50', '1,2,3', '1,23', ',100'
  ];
  for (const raw of rejectNums) {
    const got = U.parseStudentNumber(raw);
    rep.assert('T5-01', Number.isNaN(got), `Expected NaN for parseStudentNumber(${JSON.stringify(raw)}), got ${got}`);
  }

  const acceptNums = [
    ['1,000', 1000],
    ['25%', 25],
    ['π', Math.PI],
    ['pi/2', Math.PI / 2],
    ['sqrt(2)/2', Math.SQRT1_2],
    ['1e5', 100000]
  ];
  for (const [raw, exp] of acceptNums) {
    const got = U.parseStudentNumber(raw);
    rep.assert(
      'T5-01',
      Number.isFinite(got) && Math.abs(got - exp) < 1e-9,
      `Expected parseStudentNumber(${JSON.stringify(raw)})=${exp}, got ${got}`
    );
  }

  for (const lang of ['bm', 'en']) {
    const infEval = U.evaluateAnswer({ answerType: 'number', correctValue: 1e308, tolerance: 0.05 }, '1e999', lang);
    rep.assert(
      'T5-01',
      infEval.correct === false && /(Format nombor tidak dikenali|Number format not recognized)/i.test(infEval.feedback),
      `evaluateAnswer('1e999', ${lang}) must reject non-finite overflow with format error (got: ${infEval.feedback})`
    );
  }

  const pairBigUnordered = { answerType: 'pair', orderedPair: false, correctValue: [10000, 20000], tolerance: 0.05 };
  const bigPairOk = U.evaluateAnswer(pairBigUnordered, '10001, 20001', 'en');
  rep.assert('T5-01', bigPairOk.correct === true, `Pair 0.5% relative tolerance failed for '10001, 20001'`);

  const pairBigOrdered = { answerType: 'pair', orderedPair: true, correctValue: [10000, 20000], tolerance: 0.05 };
  const bigPairSwap = U.evaluateAnswer(pairBigOrdered, '20001, 10001', 'en');
  rep.assert(
    'T5-01',
    bigPairSwap.correct === false && bigPairSwap.trapHit === true,
    `Ordered pair swap '20001, 10001' should flag trapHit=true`
  );

  const bigPairSignFlip = U.evaluateAnswer(pairBigUnordered, '-20001, -10001', 'en');
  rep.assert(
    'T5-01',
    bigPairSignFlip.correct === false && bigPairSignFlip.trapHit === true,
    `Unordered pair sign-flip '-20001, -10001' should flag trapHit=true`
  );

  // T5-02: renderMixed Code/Markdown Isolation, XSS & fallbackTexToHtml Deep Nesting + Corpus Sweep
  rep.define('T5-02', 'renderMixed Code/Markdown Isolation, XSS & fallbackTexToHtml Deep Nesting + Corpus Sweep');
  const origKatex = sb.window.katex;
  try {
    for (const katexMode of [undefined, { renderToString() { throw new Error('Simulated KaTeX error'); } }]) {
      sb.window.katex = katexMode;
      const xssPayloads = [
        '<img src=x onerror=alert(1)>',
        '<script>alert(1)</script>',
        '<svg onload=alert(1)>',
        '$<script>alert(1)</script>$',
        '$$<img src=x onerror=alert(1)>$$',
        '\u0000<script>alert(1)</script>',
        '@@MATHBLOCK_0@@'
      ];
      for (const payload of xssPayloads) {
        const out = U.renderMixed(payload);
        rep.assert('T5-02', !/<(?:script|img|svg)\b/i.test(out), `XSS tag leaked from renderMixed(${JSON.stringify(payload)}): ${out}`);
        rep.assert('T5-02', !out.includes('\u0000'), `NUL char leaked in renderMixed(${JSON.stringify(payload)})`);
      }

      const nestedTexSamples = [
        '\\overline{\\frac{a}{b}}',
        '\\mathbf{x^{2}}',
        '\\overrightarrow{A_{1}B_{1}}',
        '\\bar{x^{2}}',
        '\\text{Area of } \\frac{1}{2}',
        '\\binom{\\frac{4}{2}}{2}',
        '|{-2}|',
        '\\text{A & B}',
        '\\underset{\\sim}{\\mathbf{a}}',
        '\\frac{\\binom{4}{2}}{\\binom{9}{2}}'
      ];
      for (const tex of nestedTexSamples) {
        const html = U.renderTex(tex, false);
        rep.assert('T5-02', !RAW_TEX_CMD_RE.test(html), `fallbackTexToHtml leaked TeX command on ${tex}: ${html}`);
        rep.assert('T5-02', !/[{}]/.test(html), `fallbackTexToHtml leaked braces {} on ${tex}: ${html}`);
      }
    }

    sb.window.katex = undefined;
    const codeIso1 = U.renderMixed('`a*b` and `c*d`');
    rep.assert(
      'T5-02',
      !/<em\b/i.test(codeIso1) && codeIso1.includes('<code class="m-code">a*b</code>') && codeIso1.includes('<code class="m-code">c*d</code>'),
      `Inline code cross-corruption in renderMixed('\`a*b\` and \`c*d\`'): ${codeIso1}`
    );

    const codeIso2 = U.renderMixed('`**notbold**` and `x_1`');
    rep.assert(
      'T5-02',
      !/<strong\b/i.test(codeIso2) && codeIso2.includes('<code class="m-code">**notbold**</code>') && codeIso2.includes('<code class="m-code">x_1</code>'),
      `Inline code bold corruption in renderMixed('\`**notbold**\` and \`x_1\`'): ${codeIso2}`
    );

    const normalMd = U.renderMixed('**bold** and *italic* and `x^2`');
    rep.assert(
      'T5-02',
      normalMd.includes('<strong>bold</strong>') && normalMd.includes('<em>italic</em>') && normalMd.includes('<code class="m-code">x^2</code>'),
      `Normal markdown broken: ${normalMd}`
    );

    // Full offline corpus sweep across chapters, teacherClinic, masterBank, blitzBank, and 20 default solvers
    const sweepDatasets = [
      ['chapters', App.chapters],
      ['teacherClinic', App.teacherClinic],
      ['masterBank', App.masterBank],
      ['blitzBank', App.blitzBank]
    ];
    for (const [name, data] of sweepDatasets) {
      walkCorpusStrings(data, name, (str, p) => {
        if (name === 'teacherClinic') {
          rep.assert('T5-02', !/<br\b/i.test(str), `Raw <br> found in ${p}`);
        }
        if (p.endsWith('.id') || p.endsWith('.code') || p.endsWith('.badge') || p.endsWith('.answerType') || p.endsWith('.placeholder') || p.endsWith('.expected')) {
          return;
        }
        const isRawTexField = /\.(?:tex|displayAnswerTex)(?:\.(?:bm|en))?$/.test(p);
        const rendered = isRawTexField ? U.renderTex(str, true) : U.renderMixed(str);
        rep.assert('T5-02', !RAW_TEX_CMD_RE.test(rendered), `Offline fallback leaked raw TeX in ${p}: ${rendered.slice(0, 100)}`);
        rep.assert('T5-02', !rendered.includes('@@MATHBLOCK') && !rendered.includes('\u0000'), `Internal marker leaked in ${p}`);
      });
    }

    for (const ch of chapters) {
      for (const solver of ch.solvers || []) {
        const defs = {};
        for (const inp of solver.inputs || []) defs[inp.id] = inp.default;
        for (const lang of ['bm', 'en']) {
          const res = solver.solve(defs, lang);
          for (const rt of [res.problemTex, res.finalTex, ...(res.steps || []).map((s) => s.tex)]) {
            const h = U.renderTex(rt, true);
            rep.assert('T5-02', !RAW_TEX_CMD_RE.test(h), `Solver ${solver.id} (${lang}) leaked raw TeX offline: ${h}`);
          }
          for (const mt of [...(res.steps || []).flatMap((s) => [s.title, s.why]), res.trapWarning].filter(Boolean)) {
            const h = U.renderMixed(mt);
            rep.assert('T5-02', !RAW_TEX_CMD_RE.test(h), `Solver ${solver.id} (${lang}) prose leaked raw TeX offline: ${h}`);
          }
        }
      }
    }
  } finally {
    sb.window.katex = origKatex;
  }

  // T5-03: All 20 Solvers Whitespace, Empty-String, Overflow & Non-Integer Matrix
  rep.define('T5-03', 'All 20 Solvers Whitespace, Empty-String, Overflow & Non-Integer Matrix');
  const invalidKeywordsRe = /(tidak sah|invalid|undefined|tak tertakrif|tidak wujud|does not exist|tiada penyelesaian|tiada punca|tiada pembahagi|tiada rantau|no real|no solution|no bisector|no positive region|infinite solutions|penyelesaian tak terhingga|coincide|bertindih|benar untuk semua|true for all|infeasible|had berangka|numerical limit)/i;

  const allSolvers = chapters.flatMap((c) => (c.solvers || []).map((s) => ({ chId: c.id, solver: s })));
  for (const { solver } of allSolvers) {
    const defs = {};
    for (const inp of solver.inputs || []) defs[inp.id] = inp.default;

    for (const inp of solver.inputs || []) {
      for (const lang of ['bm', 'en']) {
        const ctx = `${solver.id}:${inp.id}:ws:${lang}`;
        let wsRes;
        try {
          wsRes = solver.solve({ ...defs, [inp.id]: '   ' }, lang);
        } catch (err) {
          rep.fail('T5-03', `Solver threw on whitespace (${ctx})`, err.message);
          continue;
        }
        const wsSer = JSON.stringify(wsRes);
        const wsLeak = findLeakInObj(wsRes, ctx);
        rep.assert('T5-03', !wsLeak, `NaN/Undefined leak on whitespace (${ctx}): ${wsLeak}`);

        if (inp.default !== 0) {
          const zeroRes = solver.solve({ ...defs, [inp.id]: 0 }, lang);
          const wsMsg = `${wsRes.finalTex} ${wsRes.steps?.[0]?.title || ''}`;
          const isExplicitInvalid = invalidKeywordsRe.test(wsMsg);
          rep.assert(
            'T5-03',
            wsSer !== JSON.stringify(zeroRes) || isExplicitInvalid,
            `Whitespace '   ' silently coerced to 0 on ${ctx} (default=${inp.default})`
          );
        }
      }
    }
  }

  // Empty '' on chapters-f5b optional/fallback inputs must use defaults, NOT 0
  const f5bEmptyChecks = [
    ['binomial-normal-solver', ['x', 'mu']],
    ['lp-vertex-optimizer', ['p', 'q']],
    ['kinematics-journey-solver', ['p', 'q']],
    ['trig-double-solver', ['quad']]
  ];
  for (const [sid, keys] of f5bEmptyChecks) {
    const found = allSolvers.find((s) => s.solver.id === sid);
    rep.assert('T5-03', Boolean(found), `Solver ${sid} not found`);
    if (!found) continue;
    const defs = {};
    for (const inp of found.solver.inputs || []) defs[inp.id] = inp.default;
    for (const key of keys) {
      for (const lang of ['bm', 'en']) {
        const emptyRes = found.solver.solve({ ...defs, [key]: '' }, lang);
        const defRes = found.solver.solve(defs, lang);
        rep.assert(
          'T5-03',
          JSON.stringify(emptyRes) === JSON.stringify(defRes),
          `Empty '' on ${sid}.${key} (${lang}) did not use default=${defs[key]}`
        );
      }
    }
  }

  // Specific solver edge cases: log-base-solver, ap-gp-solver, quad-master
  const getSolverById = (id) => allSolvers.find((s) => s.solver.id === id)?.solver;
  const logSolver = getSolverById('log-base-solver');
  const apgpSolver = getSolverById('ap-gp-solver');
  const quadSolver = getSolverById('quad-master');

  for (const lang of ['bm', 'en']) {
    const logRes = logSolver.solve({ a: 1.00001, b: 2 }, lang);
    const step3Tex = logRes.steps?.[2]?.tex || '';
    const logLeak = findLeakInObj(logRes, `log-base-solver:${lang}`);
    rep.assert(
      'T5-03',
      !/\\frac\{[^{}]+\}\{0\}/.test(step3Tex) && !logLeak,
      `log-base-solver(1.00001, 2) emitted division by 0 or leak in Step 3 (${lang}): ${logLeak || step3Tex}`
    );

    const apgpDec = apgpSolver.solve({ mode: 1, a: 2, dr: 3, n: 1.5 }, lang);
    const apgpDecMsg = `${apgpDec.finalTex} ${apgpDec.steps?.[0]?.title || ''}`;
    rep.assert(
      'T5-03',
      invalidKeywordsRe.test(apgpDecMsg),
      `ap-gp-solver must reject non-integer n=1.5 (${lang}): ${apgpDecMsg}`
    );

    for (const ovArgs of [{ mode: 2, a: 3, dr: 2, n: 2000 }, { mode: 2, a: 0, dr: 2, n: 2000 }]) {
      const ovRes = apgpSolver.solve(ovArgs, lang);
      const ovLeak = findLeakInObj(ovRes, `ap-gp-solver:${lang}`);
      rep.assert(
        'T5-03',
        !ovLeak && ovRes.steps.length >= 3,
        `ap-gp-solver overflow (${JSON.stringify(ovArgs)}, ${lang}) leaked Undefined or <3 steps: ${ovLeak}`
      );
    }

    const qOvRes = quadSolver.solve({ a: 1e200, b: 1e200, c: 1 }, lang);
    const qOvLeak = findLeakInObj(qOvRes, `quad-master:${lang}`);
    rep.assert(
      'T5-03',
      !qOvLeak && qOvRes.steps.length >= 3,
      `quad-master(1e200, 1e200, 1) (${lang}) leaked Undefined or <3 steps: ${qOvLeak}`
    );
  }

  // 400-run seeded solver fuzz (20 solvers x 10 seeds x 2 langs)
  sb.window.katex = undefined;
  try {
    for (let si = 0; si < allSolvers.length; si++) {
      const { solver } = allSolvers[si];
      for (let seed = 1; seed <= 10; seed++) {
        const vals = withSeed(seed * 131 + si * 17, () => {
          const out = {};
          for (const inp of solver.inputs || []) {
            const pool = [-12, -3, -0.5, 0, 0.25, 1, 2, 3, 4, 5, 7, 10];
            out[inp.id] = pool[Math.floor(Math.random() * pool.length)];
          }
          return out;
        });
        for (const lang of ['bm', 'en']) {
          const ctx = `fuzz:${solver.id}:s${seed}:${lang}`;
          let res;
          try {
            res = solver.solve(vals, lang);
          } catch (err) {
            rep.fail('T5-03', `Solver threw in fuzz ${ctx}`, err.message);
            continue;
          }
          const fuzzLeak = findLeakInObj(res, ctx);
          rep.assert('T5-03', !fuzzLeak, `Fuzz leak in ${ctx}: ${fuzzLeak}`);
          for (const rt of [res.problemTex, res.finalTex, ...(res.steps || []).map((s) => s.tex)]) {
            const h = U.renderTex(rt, true);
            rep.assert('T5-03', !RAW_TEX_CMD_RE.test(h), `Fuzz offline TeX leak in ${ctx}: ${h}`);
          }
        }
      }
    }
  } finally {
    sb.window.katex = origKatex;
  }

  // T5-04: diagnostic-coach.js Extreme Overflow, Malformed Fuzz & Coach XSS
  rep.define('T5-04', 'diagnostic-coach.js Extreme Overflow, Malformed Fuzz & Coach XSS');
  const ch1 = chapters[0];
  const extremeInputs = [
    '9'.repeat(155) + 'x^2 + ' + '9'.repeat(155) + 'x + 1 = 0',
    '1, ' + '1' + '0'.repeat(80) + ', ' + '1' + '0'.repeat(160),
    'd/dx(x^)',
    'int(x^2 + 2x + 1 dx)',
    'd/dx((x+1))',
    '1, 2, 4, 8, ',
    'f(x) = 0x + 5',
    '2x^2 + 3x = 5'
  ];
  for (const inp of extremeInputs) {
    for (const lang of ['bm', 'en']) {
      let reply;
      try {
        reply = await App.coach.askSmartTutor(inp, ch1, lang);
      } catch (err) {
        rep.fail('T5-04', `askSmartTutor threw on "${inp.slice(0, 40)}" (${lang})`, err.message);
        continue;
      }
      rep.assert('T5-04', typeof reply === 'string' && reply.trim().length > 0, `Empty reply for "${inp.slice(0, 40)}"`);
      rep.assert('T5-04', !hasJsLeak(reply, false) && !hasUndefinedOverflow(reply), `NaN/Undefined leak in askSmartTutor("${inp.slice(0, 40)}")`);
      const mErrs = checkMathStringIntegrity(reply);
      rep.assert('T5-04', mErrs.length === 0, `${mErrs[0]} in askSmartTutor("${inp.slice(0, 40)}")`);
    }
  }

  const sampleQ = withSeed(42, () => ch1.generateQuestion(1, 'en'), sb);
  const coachXssInputs = [
    '<img src=x onerror=alert(1)>',
    '$<script>alert(1)</script>$',
    '5$',
    '2**bold**'
  ];
  for (const uTxt of coachXssInputs) {
    for (const lang of ['bm', 'en']) {
      let cRes;
      try {
        cRes = App.coach.coachOnQuestion(uTxt, sampleQ, ch1, uTxt, lang);
      } catch (err) {
        rep.fail('T5-04', `coachOnQuestion threw on ${JSON.stringify(uTxt)} (${lang})`, err.message);
        continue;
      }
      const html = U.renderMixed(cRes?.reply || '');
      rep.assert('T5-04', !/<(?:script|img|svg)\b/i.test(html), `coachOnQuestion XSS tag leaked for ${JSON.stringify(uTxt)} (${lang}): ${html}`);
    }
  }

  // T5-05: confetti-gamify.js, visualLabs, App State Resilience & Pair Trap Sweep
  rep.define('T5-05', 'confetti-gamify.js, visualLabs, App State Resilience & Pair Trap Sweep');
  const corruptPayloads = [
    'not-json',
    'null',
    '123',
    '[]',
    '{"radar":null,"quests":null,"xp":"abc","lang":"fr","labsExplored":null,"postersViewed":null}',
    '{"xp":-50,"streak":"-5","theme":"neon","mastery":{"f4-c1":999,"f4-c2":"bad"}}'
  ];
  for (const raw of corruptPayloads) {
    sb.localStorage.setItem('addmath_mudah_state_v1', raw);
    const st = App.gamify.loadState();
    const validPlain = (o) => Boolean(o && typeof o === 'object' && !Array.isArray(o));
    rep.assert(
      'T5-05',
      validPlain(st.labsExplored) && validPlain(st.mastery) && validPlain(st.masterBankDone) && validPlain(st.postersViewed),
      `loadState() returned non-object nested map for ${raw}`
    );
    rep.assert(
      'T5-05',
      validPlain(st.radar) && ['P', 'K', 'J', 'ok'].every((k) => Number.isFinite(st.radar[k]) && st.radar[k] >= 0),
      `loadState() radar invalid for ${raw}: ${JSON.stringify(st.radar)}`
    );
    rep.assert(
      'T5-05',
      validPlain(st.quests) && ['lab', 'solve3', 'kbat1'].every((k) => typeof st.quests[k] === 'boolean'),
      `loadState() quests invalid for ${raw}: ${JSON.stringify(st.quests)}`
    );
    rep.assert('T5-05', Number.isFinite(st.xp) && st.xp >= 0, `loadState() xp invalid for ${raw}: ${st.xp}`);
    rep.assert('T5-05', st.lang === 'bm' || st.lang === 'en', `loadState() lang invalid for ${raw}: ${st.lang}`);
    rep.assert('T5-05', st.theme === 'light' || st.theme === 'dark', `loadState() theme invalid for ${raw}: ${st.theme}`);

    const rank = App.gamify.getRankInfo(st.xp, st.lang);
    rep.assert('T5-05', Number.isFinite(rank.level) && rank.level >= 1, `getRankInfo level invalid for ${raw}`);

    // Full App boot in isolated VM with DOMContentLoaded listener capture
    const bootListeners = {};
    const domNodes = new Map();
    const makeBootEl = (id) => {
      if (id && domNodes.has(id)) return domNodes.get(id);
      const el = {
        id: id || '',
        style: {},
        classList: { toggle: () => {}, add: () => {}, remove: () => {}, contains: () => false },
        addEventListener: () => {},
        getAttribute: () => null,
        setAttribute: () => {},
        dataset: {},
        value: '',
        innerHTML: '',
        textContent: '',
        offsetWidth: 0,
        scrollHeight: 0,
        scrollTop: 0,
        scrollIntoView: () => {},
        focus: () => {},
        click: () => {}
      };
      if (id) domNodes.set(id, el);
      return el;
    };
    const bootEnv = loadAppInVm({ onLine: false });
    bootEnv.sb.localStorage.setItem('addmath_mudah_state_v1', raw);
    // Re-run confetti-gamify.js + app.js against hooked DOM & window.addEventListener
    bootEnv.sb.window.addEventListener = (evt, fn) => {
      bootListeners[evt] = fn;
    };
    bootEnv.sb.document.getElementById = makeBootEl;
    let bootErr = null;
    try {
      const fs = await import('node:fs');
      const vm = await import('node:vm');
      vm.default.runInContext(fs.default.readFileSync(path.join(bootEnv.root, 'js/app.js'), 'utf8'), bootEnv.sb, { filename: 'js/app.js' });
      if (typeof bootListeners.DOMContentLoaded === 'function') {
        bootListeners.DOMContentLoaded();
      }
    } catch (err) {
      bootErr = err;
    }
    rep.assert('T5-05', bootErr === null, `App boot threw on corrupt localStorage ${raw}: ${bootErr?.message}`);
    rep.assert(
      'T5-05',
      (domNodes.get('main-view')?.innerHTML || '').length > 100,
      `App boot rendered empty #main-view on corrupt localStorage ${raw}`
    );
  }
  sb.localStorage.clear();

  // 18 visualLabs across min, max, default, {} x bm/en x light/dark
  const mockCanvas = createMockCanvas();
  for (const ch of chapters) {
    const lab = App.visualLabs[ch.id];
    const minVals = {};
    const maxVals = {};
    const defVals = {};
    for (const c of lab.controls || []) {
      minVals[c.id] = c.min;
      maxVals[c.id] = c.max;
      defVals[c.id] = c.default;
    }
    for (const [presetName, vals] of [['min', minVals], ['max', maxVals], ['default', defVals], ['empty', {}]]) {
      for (const lang of ['bm', 'en']) {
        for (const isDark of [false, true]) {
          let info;
          try {
            info = lab.render(mockCanvas, vals, lang, isDark);
          } catch (err) {
            rep.fail('T5-05', `visualLab ${ch.id} threw on ${presetName} (${lang}, dark=${isDark})`, err.message);
            continue;
          }
          rep.assert(
            'T5-05',
            typeof info === 'string' && info.trim().length > 0 && !/\b(NaN|undefined|Infinity)\b/.test(info),
            `visualLab ${ch.id} bad readout on ${presetName} (${lang}, dark=${isDark}): ${info}`
          );
        }
      }
    }
  }

  // 18 x 3 x 30 x 2 = 3,240 generated questions: guidedSteps[last] + pair trap collision sweep
  for (const ch of chapters) {
    for (const tier of [1, 2, 3]) {
      for (let seed = 1; seed <= 30; seed++) {
        for (const lang of ['bm', 'en']) {
          const ctx = `${ch.id}:T${tier}:s${seed}:${lang}`;
          const q = withSeed(seed * 1009 + ch.num * 37 + tier * 11, () => ch.generateQuestion(tier, lang), sb);
          const gSteps = q.guidedSteps || [];
          if (q.answerType !== 'pair' && gSteps.length > 0) {
            const lastExpected = String(gSteps[gSteps.length - 1].expected);
            const gRes = U.evaluateAnswer(q, lastExpected, lang);
            rep.assert(
              'T5-05',
              gRes.correct === true,
              `guidedSteps[last].expected=${lastExpected} mismatches evaluateAnswer (${ctx}, correctValue=${q.correctValue})`
            );
          }
          if (q.answerType === 'pair') {
            for (const tr of q.traps || []) {
              if (Array.isArray(tr.value) && tr.value.length >= 2) {
                const trRes = U.evaluateAnswer(q, `${tr.value[0]}, ${tr.value[1]}`, lang);
                rep.assert(
                  'T5-05',
                  trRes.correct === false && trRes.trapHit === true,
                  `Pair array trap [${tr.value.join(', ')}] collided or missed trapHit (${ctx})`
                );
              } else if (tr.value !== null && tr.value !== undefined && tr.value !== '') {
                const tv = Number(tr.value);
                const [c1, c2] = q.correctValue || [];
                const tol = q.tolerance !== undefined ? q.tolerance : 0.05;
                const noElemCol =
                  Number.isFinite(tv) &&
                  Math.abs(tv - c1) > Math.max(tol, Math.abs(c1) * 0.005) &&
                  Math.abs(tv - c2) > Math.max(tol, Math.abs(c2) * 0.005);
                const trRes = U.evaluateAnswer(q, `${tr.value}, 999999`, lang);
                rep.assert(
                  'T5-05',
                  noElemCol && trRes.correct === false && trRes.trapHit === true,
                  `Pair scalar trap ${tr.value} collided or missed trapHit (${ctx})`
                );
              }
            }
          }
        }
      }
    }
  }

  // T5-06: tests/ Self-Check Oracle Invariants
  rep.define('T5-06', 'tests/ Self-Check Oracle Invariants');
  rep.assert('T5-06', checkMathStringIntegrity('Standard normal \\Phi(z)').length > 0, 'checkMathStringIntegrity must flag raw \\Phi');
  rep.assert('T5-06', checkPlainTextBoundary('Find \\theta').length > 0, 'checkPlainTextBoundary must flag raw \\theta');
  rep.assert('T5-06', checkPlainTextBoundary('Use \\frac12').length > 0, 'checkPlainTextBoundary must flag raw \\frac12');
  rep.assert('T5-06', hasJsLeak('the value is undefined') === true, 'hasJsLeak must catch "the value is undefined"');
  rep.assert('T5-06', hasJsLeak('x = undefined') === true, 'hasJsLeak must catch "x = undefined"');
  rep.assert('T5-06', hasJsLeak('12NaN') === true, 'hasJsLeak must catch "12NaN"');
  rep.assert('T5-06', hasJsLeak('the gradient is undefined') === false, 'hasJsLeak must allow "the gradient is undefined"');
  rep.assert('T5-06', hasJsLeak('null vector', true) === false, 'hasJsLeak must allow "null vector"');
  rep.assert('T5-06', hasUndefinedOverflow('T_{2000} = Undefined') === true, 'hasUndefinedOverflow must catch "Undefined"');

  const parsed5 = parseCliArgs(['--tier=5', '--strict']);
  rep.assert('T5-06', parsed5.strict === true && parsed5.tiers?.length === 1 && parsed5.tiers[0] === 5, 'parseCliArgs(["--tier=5", "--strict"]) failed');
  for (const badTierArg of ['--tier=0', '--tier=6']) {
    let threw = false;
    try {
      parseCliArgs([badTierArg]);
    } catch (_) {
      threw = true;
    }
    rep.assert('T5-06', threw, `parseCliArgs([${badTierArg}]) must throw`);
  }

  return rep.summarize();
}

const isMain = process.argv[1] && path.resolve(process.argv[1]) === path.resolve(fileURLToPath(import.meta.url));
if (isMain) {
  const { strict } = parseCliArgs();
  const summary = await runTier5({ strict });
  process.exit(summary.ok ? 0 : 1);
}
