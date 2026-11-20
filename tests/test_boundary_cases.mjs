import path from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  parseCliArgs,
  loadAppInVm,
  createReporter,
  checkMathStringIntegrity,
  checkRawTexBoundary,
  hasJsLeak
} from './lib/loader.mjs';

function findJsLeakInValue(node, prefix = 'res') {
  if (typeof node === 'string') {
    return hasJsLeak(node, false) ? `${prefix}: ${node.slice(0, 60)}` : null;
  }
  if (typeof node === 'number' && Number.isNaN(node)) {
    return `${prefix}: NaN`;
  }
  if (!node || typeof node !== 'object') return null;
  if (Array.isArray(node)) {
    for (let i = 0; i < node.length; i++) {
      const hit = findJsLeakInValue(node[i], `${prefix}[${i}]`);
      if (hit) return hit;
    }
    return null;
  }
  for (const [k, v] of Object.entries(node)) {
    const hit = findJsLeakInValue(v, `${prefix}.${k}`);
    if (hit) return hit;
  }
  return null;
}

export async function runTier2({ strict = false } = {}) {
  const rep = createReporter('Tier 2: Boundary & Corner Cases (Solvers, Evaluator, Renderer, Filters, Tutor)', { strict });
  const env = loadAppInVm({ onLine: false });
  const { App, U, sb } = env;
  const chapters = App.chapters;

  function getSolver(solverId) {
    for (const ch of chapters) {
      for (const s of ch.solvers || []) {
        if (s.id === solverId) return { ch, solver: s };
      }
    }
    return null;
  }

  function defaultInputs(solver) {
    const out = {};
    for (const inp of solver.inputs || []) out[inp.id] = inp.default;
    return out;
  }

  // T2-01: All 20 Solvers Domain Boundary Inputs
  rep.define('T2-01', 'All 20 Chapter Solvers Domain Boundary & Zero-Coercion Matrix');
  const boundarySuite = [
    {
      id: 'comp-inv-linear',
      cases: [
        { name: 'all_zero', vals: { a: 0, b: 0, c: 0, d: 0, k: 0 }, zeroCheck: { key: 'k', val: 0 }, expectInvalidMsg: true },
        { name: 'a_zero', vals: { a: 0, b: 3, c: 2, d: 1, k: 5 } },
        { name: 'c_zero', vals: { a: 2, b: -3, c: 0, d: 4, k: 5 } }
      ]
    },
    {
      id: 'abs-eq-solver',
      cases: [
        { name: 'k_zero', vals: { a: 2, b: -6, k: 0 }, zeroCheck: { key: 'k', val: 0 } },
        { name: 'k_negative', vals: { a: 2, b: -5, k: -5 }, expectInvalidMsg: true },
        { name: 'a_zero', vals: { a: 0, b: 5, k: 5 }, expectInvalidMsg: true }
      ]
    },
    {
      id: 'quad-master',
      cases: [
        { name: 'a_zero', vals: { a: 0, b: 4, c: -8 }, expectInvalidMsg: true },
        { name: 'b_zero_c_zero', vals: { a: 1, b: 0, c: 0 }, zeroCheck: { key: 'b', val: 0 } },
        { name: 'disc_neg', vals: { a: 1, b: 2, c: 5 } },
        { name: 'disc_zero', vals: { a: 1, b: -4, c: 4 } },
        { name: 'a_neg', vals: { a: -3, b: 6, c: -3 } }
      ]
    },
    {
      id: 'sys-3x3',
      cases: [
        {
          name: 'unique_1_2_3',
          vals: { a1: 1, b1: 1, c1: 1, d1: 6, a2: 2, b2: -1, c2: 1, d2: 3, a3: 1, b3: 2, c3: -1, d3: 2 },
          strictCheck: (res) => ({
            ok: /1.*2.*3/.test(res.finalTex) && !/Hapuskan z daripada pasangan/.test(res.steps?.[0]?.tex || ''),
            msg: `sys-3x3 must solve (1,2,3) dynamically without static placeholder (got: ${res.finalTex})`
          })
        },
        {
          name: 'singular',
          vals: { a1: 1, b1: 1, c1: 1, d1: 1, a2: 2, b2: 2, c2: 2, d2: 2, a3: 1, b3: -1, c3: 1, d3: 0 },
          expectInvalidMsg: true
        },
        {
          name: 'inconsistent',
          vals: { a1: 1, b1: 1, c1: 1, d1: 1, a2: 1, b2: 1, c2: 1, d2: 2, a3: 1, b3: -1, c3: 1, d3: 0 },
          expectInvalidMsg: true
        }
      ]
    },
    {
      id: 'surd-rationalizer',
      cases: [
        { name: 'b_zero', vals: { k: 10, a: 3, b: 0 }, zeroCheck: { key: 'b', val: 0 }, expectInvalidMsg: true },
        { name: 'b_neg', vals: { k: 10, a: 3, b: -2 }, expectInvalidMsg: true },
        { name: 'zero_denom', vals: { k: 14, a: -2, b: 4 }, expectInvalidMsg: true },
        { name: 'b_perfect_sq', vals: { k: 10, a: 3, b: 4 } }
      ]
    },
    {
      id: 'log-base-solver',
      cases: [
        { name: 'base_one', vals: { a: 1, b: 16 }, expectInvalidMsg: true },
        { name: 'base_nonpos', vals: { a: -2, b: 16 }, expectInvalidMsg: true },
        { name: 'arg_nonpos', vals: { a: 2, b: 0 }, zeroCheck: { key: 'b', val: 0 }, expectInvalidMsg: true },
        { name: 'arg_one', vals: { a: 5, b: 1 } }
      ]
    },
    {
      id: 'ap-gp-solver',
      cases: [
        { name: 'mode_zero', vals: { mode: 0, a: 8, dr: 2, n: 5 }, zeroCheck: { key: 'mode', val: 0 } },
        { name: 'ap_d_zero', vals: { mode: 1, a: 5, dr: 0, n: 6 }, zeroCheck: { key: 'dr', val: 0 } },
        { name: 'gp_r_one', vals: { mode: 2, a: 5, dr: 1, n: 6 } },
        { name: 'gp_r_neg_half', vals: { mode: 2, a: 16, dr: -0.5, n: 5 } },
        { name: 'gp_r_two', vals: { mode: 2, a: 3, dr: 2, n: 5 } },
        { name: 'n_one', vals: { mode: 1, a: 4, dr: 3, n: 1 } }
      ]
    },
    {
      id: 'lin-law-solver',
      cases: [
        { name: 'vertical_x1_eq_x2', vals: { x1: 3, y1: 1, x2: 3, y2: 5 }, expectInvalidMsg: true },
        { name: 'horizontal_y1_eq_y2', vals: { x1: 1, y1: 4, x2: 5, y2: 4 } },
        { name: 'negative_coords', vals: { x1: -4, y1: -2, x2: -1, y2: 7 } }
      ]
    },
    {
      id: 'coord-geom-solver',
      cases: [
        { name: 'm_zero', vals: { x1: 1, y1: 2, x2: 7, y2: 10, m: 0, n: 2 }, zeroCheck: { key: 'm', val: 0 } },
        { name: 'coincident_pts', vals: { x1: 2, y1: 3, x2: 2, y2: 3, m: 1, n: 2 }, expectInvalidMsg: true },
        { name: 'horizontal_perp_undef', vals: { x1: 1, y1: 4, x2: 7, y2: 4, m: 1, n: 2 } },
        { name: 'm_plus_n_zero', vals: { x1: 1, y1: 2, x2: 7, y2: 10, m: 1, n: -1 }, expectInvalidMsg: true }
      ]
    },
    {
      id: 'vec-cartesian',
      cases: [
        { name: 'zero_vector', vals: { ax: 0, ay: 0, bx: 3, by: 4 }, zeroCheck: { key: 'ax', val: 0 } },
        { name: 'orthogonal', vals: { ax: 2, ay: 3, bx: -3, by: 2 } }
      ]
    },
    {
      id: 'sas-triangle-solver',
      cases: [
        { name: 'b_zero', vals: { b: 0, c: 11, A: 60 }, zeroCheck: { key: 'b', val: 0 }, expectInvalidMsg: true },
        { name: 'A_zero', vals: { b: 8, c: 11, A: 0 }, zeroCheck: { key: 'A', val: 0 }, expectInvalidMsg: true },
        { name: 'A_180', vals: { b: 8, c: 11, A: 180 }, expectInvalidMsg: true },
        { name: 'A_90', vals: { b: 6, c: 8, A: 90 } }
      ]
    },
    {
      id: 'comp-index-solver',
      cases: [
        { name: 'all_zero_weights', vals: { i1: 120, w1: 0, i2: 110, w2: 0, i3: 135, w3: 0 }, expectInvalidMsg: true },
        { name: 'price_decrease', vals: { i1: 85, w1: 2, i2: 90, w2: 3, i3: 95, w3: 5 } }
      ]
    },
    {
      id: 'circular-sector-solver',
      cases: [
        { name: 'r_nonpos', vals: { r: 0, theta: 1.2 }, zeroCheck: { key: 'r', val: 0 }, expectInvalidMsg: true },
        { name: 'theta_gt_2pi', vals: { r: 8, theta: 7.0 }, expectInvalidMsg: true },
        { name: 'semicircle', vals: { r: 10, theta: 3.1416 } }
      ]
    },
    {
      id: 'diff-tangent-solver',
      cases: [
        { name: 'const_zero_grad', vals: { a: 0, b: 0, c: 5, x0: 0 }, zeroCheck: { key: 'x0', val: 0 } },
        { name: 'x0_zero', vals: { a: 2, b: -4, c: 1, x0: 0 } }
      ]
    },
    {
      id: 'definite-integral-solver',
      cases: [
        {
          name: 'clean_poly_1_0_0',
          vals: { p: 1, q: 0, r: 0, a: 0, b: 2 },
          strictCheck: (res) => {
            const tex = [res.problemTex, res.finalTex, ...res.steps.map((s) => s.tex)].join(' ');
            const bad = /(^|[^0-9._])(0x\^|1x\^)/.test(tex);
            return { ok: !bad, msg: `definite-integral-solver emitted 1x^/0x^ artifact: ${tex}` };
          }
        },
        { name: 'a_eq_b', vals: { p: 3, q: -4, r: 2, a: 2, b: 2 } },
        { name: 'a_gt_b', vals: { p: 3, q: 0, r: 0, a: 3, b: 1 } }
      ]
    },
    {
      id: 'perm-comb-solver',
      cases: [
        { name: 'r_zero', vals: { n: 8, r: 0 }, zeroCheck: { key: 'r', val: 0 } },
        { name: 'r_eq_n', vals: { n: 6, r: 6 } },
        { name: 'r_gt_n', vals: { n: 5, r: 7 }, expectInvalidMsg: true },
        { name: 'n_neg', vals: { n: -3, r: 2 }, expectInvalidMsg: true }
      ]
    },
    {
      id: 'binomial-normal-solver',
      cases: [
        { name: 'sd_zero', vals: { x: 68, mu: 60, sd: 0 }, zeroCheck: { key: 'sd', val: 0 }, expectInvalidMsg: true },
        { name: 'x_eq_mu', vals: { x: 60, mu: 60, sd: 5 } },
        { name: 'extreme_tail', vals: { x: 80, mu: 60, sd: 5 } }
      ]
    },
    {
      id: 'trig-double-solver',
      cases: [
        { name: 'opp_zero', vals: { opp: 0, hyp: 5, quad: 2 }, zeroCheck: { key: 'opp', val: 0 }, expectInvalidMsg: true },
        { name: 'opp_ge_hyp', vals: { opp: 5, hyp: 5, quad: 2 }, expectInvalidMsg: true },
        { name: 'quad_3', vals: { opp: 3, hyp: 5, quad: 3 } },
        { name: 'quad_4', vals: { opp: 5, hyp: 13, quad: 4 } }
      ]
    },
    {
      id: 'lp-vertex-optimizer',
      cases: [
        { name: 'S_zero', vals: { S: 0, M: 80, p: 30, q: 20 }, zeroCheck: { key: 'S', val: 0 }, expectInvalidMsg: true },
        {
          name: 'S_gt_M',
          vals: { S: 90, M: 60, p: 30, q: 20 },
          strictCheck: (res) => ({
            ok: /bertindih|redundant/i.test(res.trapWarning || ''),
            msg: `Expected redundancy constraint warning when S > M (got: ${res.trapWarning})`
          })
        },
        { name: 'p0_q0', vals: { S: 40, M: 80, p: 0, q: 0 } }
      ]
    },
    {
      id: 'kinematics-journey-solver',
      cases: [
        {
          name: 'p1_clean_tex',
          vals: { p: 1, q: 6, T: 5 },
          strictCheck: (res) => {
            const tex = [res.problemTex, res.finalTex, ...res.steps.map((s) => s.tex)].join(' ');
            const bad = /(^|[^0-9._])(0t\^|1t\^)/.test(tex);
            return { ok: !bad, msg: `kinematics-journey-solver emitted 0t^/1t^ artifact: ${tex}` };
          }
        },
        { name: 'p_zero', vals: { p: 0, q: 6, T: 5 }, zeroCheck: { key: 'p', val: 0 } },
        { name: 'T_nonpos', vals: { p: 2, q: 6, T: 0 }, zeroCheck: { key: 'T', val: 0 }, expectInvalidMsg: true },
        { name: 'turnaround_outside', vals: { p: 2, q: 12, T: 2 } },
        { name: 'turnaround_inside', vals: { p: 2, q: 6, T: 5 } }
      ]
    }
  ];

  // Verify all 20 solvers are covered in boundarySuite
  const allSolverIds = chapters.flatMap((c) => (c.solvers || []).map((s) => s.id));
  rep.assert('T2-01', boundarySuite.length === allSolverIds.length, `Boundary suite covers ${boundarySuite.length}/${allSolverIds.length} solvers`);

  const invalidKeywordsRe = /(tidak sah|invalid|undefined|tak tertakrif|tidak wujud|does not exist|tiada penyelesaian|tiada punca|tiada pembahagi|tiada rantau|no real|no solution|no bisector|no positive region|infinite solutions|penyelesaian tak terhingga|coincide|bertindih|benar untuk semua|true for all|infeasible|a = 0 memberi persamaan linear|a = 0 yields a linear equation)/i;

  for (const spec of boundarySuite) {
    const found = getSolver(spec.id);
    rep.assert('T2-01', Boolean(found), `Solver ${spec.id} not found`);
    if (!found) continue;
    const { solver } = found;
    const defs = defaultInputs(solver);

    for (const bc of spec.cases) {
      for (const lang of ['bm', 'en']) {
        const ctx = `${spec.id}:${bc.name}:${lang}`;
        let res;
        try {
          res = solver.solve(bc.vals, lang);
        } catch (err) {
          rep.fail('T2-01', `Solver threw on ${ctx}`, err.message);
          continue;
        }
        rep.assert('T2-01', Boolean(res && res.problemTex && res.finalTex && Array.isArray(res.steps)), `Invalid output shape on ${ctx}`);
        if (!res) continue;

        const serialized = JSON.stringify(res);
        const jsLeak = findJsLeakInValue(res, ctx);
        rep.assert('T2-01', !jsLeak, `NaN/undefined in ${ctx}${jsLeak ? ` (${jsLeak})` : ''}`);
        const noSumInf = serialized.replace(/Sum to Infinity/gi, '');
        rep.assert('T2-01', !/\bInfinity\b/.test(noSumInf), `Unexpected Infinity in ${ctx}`);

        for (const rt of [res.problemTex, res.finalTex, ...res.steps.map((s) => s.tex)]) {
          const rErrs = checkRawTexBoundary(rt);
          rep.assert('T2-01', rErrs.length === 0, `${rErrs[0]} in ${ctx}`);
        }
        for (const mt of [...res.steps.flatMap((s) => [s.title, s.why]), res.trapWarning].filter(Boolean)) {
          const mErrs = checkMathStringIntegrity(mt);
          rep.assert('T2-01', mErrs.length === 0, `${mErrs[0]} in ${ctx}`);
        }

        // Strict zero-coercion check: passing 0 as a single-key override must NOT silently produce identical output to defaults when default !== 0
        if (bc.zeroCheck && defs[bc.zeroCheck.key] !== bc.zeroCheck.val) {
          const defRes = solver.solve(defs, lang);
          const singleZeroRes = solver.solve({ ...defs, [bc.zeroCheck.key]: bc.zeroCheck.val }, lang);
          const coerced = JSON.stringify(singleZeroRes) === JSON.stringify(defRes);
          rep.assertStrict(
            'T2-01',
            !coerced,
            `|| zero-coercion suspected when ${bc.zeroCheck.key}=${bc.zeroCheck.val} (output identical to default ${bc.zeroCheck.key}=${defs[bc.zeroCheck.key]})`,
            ctx
          );
        }

        // Strict explicit domain error check
        if (bc.expectInvalidMsg) {
          const primaryMsg = `${res.finalTex} ${res.steps?.[0]?.title || ''}`;
          rep.assertStrict('T2-01', invalidKeywordsRe.test(primaryMsg), `Missing explicit domain error message on invalid input`, ctx);
        }

        if (bc.strictCheck) {
          const sc = bc.strictCheck(res);
          rep.assertStrict('T2-01', sc.ok, sc.msg, ctx);
        }
      }
    }
  }

  // T2-02: evaluateAnswer & parseStudentNumber Corner Matrix
  rep.define('T2-02', 'U.evaluateAnswer & U.parseStudentNumber Corner Matrix');
  const numCases = [
    ['-3/4', -0.75],
    ['−3/4', -0.75],
    [' 12 / 8 ', 1.5],
    ['pi', Math.PI],
    ['π', Math.PI],
    ['sqrt(2)', Math.SQRT2],
    ['1,000', 1000],
    ['25%', 25],
    ['-0', 0]
  ];
  for (const [raw, exp] of numCases) {
    const got = U.parseStudentNumber(raw);
    rep.assert('T2-02', Number.isFinite(got) && Math.abs(got - exp) < 1e-9, `parseStudentNumber("${raw}")=${got}, expected ${exp}`);
  }
  for (const bad of ['', '   ', null, undefined, 'abc', '1/0', 'sqrt(-4)', 'NaN']) {
    const got = U.parseStudentNumber(bad);
    rep.assert('T2-02', Number.isNaN(got), `Expected NaN for parseStudentNumber(${JSON.stringify(bad)}), got ${got}`);
  }

  // Empty inputs
  for (const emptyIn of ['', '   ']) {
    const res = U.evaluateAnswer({ answerType: 'number', correctValue: 5 }, emptyIn, 'en');
    rep.assert('T2-02', res.correct === false && res.empty === true, `Expected empty=true for ${JSON.stringify(emptyIn)}`);
  }

  // Choice handling
  const choiceQ = {
    answerType: 'choice',
    correctValue: '1',
    traps: [{ value: '2', message: { bm: 'Salah pilihan', en: 'Trap option 2' } }]
  };
  rep.assert('T2-02', U.evaluateAnswer(choiceQ, '1', 'en').correct === true, 'choice "1"');
  rep.assert('T2-02', U.evaluateAnswer(choiceQ, '1)', 'en').correct === true, 'choice "1)"');
  rep.assert('T2-02', U.evaluateAnswer(choiceQ, '1.', 'en').correct === true, 'choice "1."');
  const choiceTrap = U.evaluateAnswer(choiceQ, '2', 'en');
  rep.assert('T2-02', choiceTrap.correct === false && choiceTrap.trapHit === true && choiceTrap.feedback === 'Trap option 2', 'choice trap hit');

  // Pair handling (unordered vs ordered)
  const pairUnordered = { answerType: 'pair', correctValue: [2, -5], orderedPair: false, tolerance: 0.05 };
  for (const sep of ['2, -5', '2 or -5', '2 dan -5', '2 and -5', '2; -5', '2 -5', '-5, 2']) {
    rep.assert('T2-02', U.evaluateAnswer(pairUnordered, sep, 'en').correct === true, `unordered pair "${sep}"`);
  }
  const singleForPair = U.evaluateAnswer(pairUnordered, '2', 'en');
  rep.assert('T2-02', singleForPair.correct === false && /2 values/i.test(singleForPair.feedback), 'single value on pair prompts for 2 values');
  const signInvPair = U.evaluateAnswer(pairUnordered, '-2, 5', 'en');
  rep.assert('T2-02', signInvPair.correct === false && signInvPair.trapHit === true, 'sign-inverted pair triggers trapHit');

  const pairOrdered = { answerType: 'pair', correctValue: [2, -5], orderedPair: true, tolerance: 0.05 };
  const swappedOrd = U.evaluateAnswer(pairOrdered, '-5, 2', 'en');
  rep.assert('T2-02', swappedOrd.correct === false && swappedOrd.trapHit === true && /swapped/i.test(swappedOrd.feedback), 'orderedPair swapped triggers trapHit');

  // Tolerance scaling & trap priority before generic sign-flip
  const bigTargetQ = { answerType: 'number', correctValue: 100, tolerance: 0.05 };
  rep.assert('T2-02', U.evaluateAnswer(bigTargetQ, '100.4', 'en').correct === true, 'dynamicTol at 100 accepts 100.4');
  rep.assert('T2-02', U.evaluateAnswer(bigTargetQ, '100.6', 'en').correct === false, 'dynamicTol at 100 rejects 100.6');
  const zeroTargetQ = { answerType: 'number', correctValue: 0, tolerance: 0.05 };
  rep.assert('T2-02', U.evaluateAnswer(zeroTargetQ, '-0', 'en').correct === true, '-0 matches 0');
  rep.assert('T2-02', U.evaluateAnswer(zeroTargetQ, '0.04', 'en').correct === true, '0.04 within tol of 0');

  const trapBeforeSignQ = {
    answerType: 'number',
    correctValue: 5,
    tolerance: 0.05,
    traps: [{ value: -5, message: { bm: 'Perangkap khusus', en: 'Specific negative trap' } }]
  };
  const trapPrioRes = U.evaluateAnswer(trapBeforeSignQ, '-5', 'en');
  rep.assert(
    'T2-02',
    trapPrioRes.trapHit === true && trapPrioRes.feedback === 'Specific negative trap',
    'Specific trap must trigger before generic sign-error message'
  );

  // Strict regression probes for U.evaluateAnswer (pair) and U.parseStudentNumber (js/math-utils.js:215-326)
  const extraPairRes = U.evaluateAnswer(pairUnordered, '2, -5, 999', 'en');
  rep.assertStrict(
    'T2-02',
    extraPairRes.correct === false,
    'evaluateAnswer(pair) must reject extra 3rd value "2, -5, 999" (js/math-utils.js:279)'
  );
  const unordSignRes = U.evaluateAnswer(pairUnordered, '5, -2', 'en');
  rep.assertStrict(
    'T2-02',
    unordSignRes.correct === false && unordSignRes.trapHit === true,
    'evaluateAnswer(pair, unordered) must detect sign-inverted "5, -2" as trapHit (js/math-utils.js:311)'
  );
  const sqrtGarbage = U.parseStudentNumber('sqrt(2abc)');
  rep.assertStrict(
    'T2-02',
    Number.isNaN(sqrtGarbage),
    `parseStudentNumber("sqrt(2abc)") must return NaN, got ${sqrtGarbage} (js/math-utils.js:230)`
  );
  const coefSqrt = U.parseStudentNumber('2sqrt(3)');
  rep.assertStrict(
    'T2-02',
    Number.isNaN(coefSqrt),
    `parseStudentNumber("2sqrt(3)") must return NaN rather than string concatenation, got ${coefSqrt}`
  );
  const sqrtDiv = U.parseStudentNumber('sqrt(2)/2');
  rep.assertStrict(
    'T2-02',
    Number.isFinite(sqrtDiv) && Math.abs(sqrtDiv - Math.SQRT1_2) < 1e-9,
    `parseStudentNumber("sqrt(2)/2") should equal Math.SQRT1_2, got ${sqrtDiv}`
  );

  // T2-03: Offline fallbackTexToHtml, sanitizeTex & XSS Check
  rep.define('T2-03', 'Offline fallbackTexToHtml, sanitizeTex, renderMixed & XSS Check');
  const origKatex = sb.window.katex;
  sb.window.katex = undefined;
  try {
    const texSamples = [
      ['\\frac{\\frac{1}{2}}{3}', 'nested frac'],
      ['\\sqrt[3]{8}', 'cube root'],
      ['\\vec{a} + \\hat{\\mathbf{i}} + \\bar{X}', 'vectors/hats'],
      ['\\alpha \\beta \\theta \\Delta \\pi \\mu \\sigma \\lambda \\infty \\le \\ge \\ne \\implies \\iff \\checkmark', 'symbols'],
      ['^5P_3 + \\frac{^4C_2}{^9C_2}', 'prefix superscript nPr/nCr'],
      ['\\text{A & B}', 'ampersand inside text'],
      ['\\begin{cases} x & x > 0 \\end{cases}', 'begin cases']
    ];
    for (const [tex, label] of texSamples) {
      const html = U.renderTex(tex, false);
      rep.assert('T2-03', html.includes('math-fallback') && !html.includes('@@MATHBLOCK'), `Fallback render failed for ${label}: ${html}`);
    }

    // Known baseline bug in fallbackTexToHtml: \frac runs before \sqrt / ^{} / _{} so nested braces inside \frac leak raw \frac
    const unitVecHtml = U.renderTex('\\frac{x\\mathbf{i} + y\\mathbf{j}}{\\sqrt{x^2 + y^2}}', false);
    rep.assertStrict(
      'T2-03',
      !/\\frac\b/.test(unitVecHtml),
      'fallbackTexToHtml leaks literal \\frac when denominator contains \\sqrt{...} (js/math-utils.js:396 runs before :399)',
      unitVecHtml
    );
    const fracPowHtml = U.renderTex('\\frac{1}{x^{2}}', false);
    rep.assertStrict(
      'T2-03',
      !/\\frac\b/.test(fracPowHtml),
      'fallbackTexToHtml leaks literal \\frac when denominator contains ^{...} (js/math-utils.js:396 runs before :401)',
      fracPowHtml
    );

    const mixedInput = '$$\\frac{1}{2}$$ and $2 * 3 = 6$ with `x^2` and **bold** and *italic*';
    const mixedOut = U.renderMixed(mixedInput);
    rep.assert('T2-03', !mixedOut.includes('@@MATHBLOCK'), 'renderMixed leaked @@MATHBLOCK');
    rep.assert('T2-03', mixedOut.includes('<strong>bold</strong>') && mixedOut.includes('<em>italic</em>') && mixedOut.includes('<code class="m-code">x^2</code>'), 'renderMixed markdown failed');
    rep.assert('T2-03', !/2\s*<em>\s*3/.test(mixedOut), 'Markdown italic corrupted * inside math block $2 * 3$');

    // Multiline $...$ should NOT be parsed as inline math
    const multilineDollar = '$a +\n b$';
    const multiOut = U.renderMixed(multilineDollar);
    rep.assert('T2-03', !multiOut.includes('math-fallback'), 'Multiline single $...$ should not be parsed as inline math');

    // XSS / HTML injection vector check on user-echo paths (U.renderMixed)
    const xssPayload = '<img src=x onerror=alert(1)> <script>alert(1)</script>';
    const xssOut = U.renderMixed(xssPayload);
    rep.assertStrict(
      'T2-03',
      !/<img\b|<script\b/i.test(xssOut),
      'U.renderMixed passes unescaped HTML/XSS tags (affects user-echo tutorMessages & customEqResult)',
      xssOut
    );
  } finally {
    sb.window.katex = origKatex;
  }

  // T2-04: Master Bank & Formula Vault Filter Edge Cases
  rep.define('T2-04', 'Master Bank & Formula Vault Filter Edge Cases');
  const filterQueries = ['', 'zzzz_no_match_999', 'a+b', '(x-1)', '[1]', '$', '\\', '"quote"', '<script>alert(1)</script>'];
  for (const kwRaw of filterQueries) {
    const kw = kwRaw.trim().toLowerCase();
    const safeAttr = kwRaw.replace(/"/g, '&quot;');
    rep.assert('T2-04', !safeAttr.includes('"'), `Attribute escaping failed for ${kwRaw}`);

    for (const ch of chapters) {
      const bank = App.masterBank[ch.id] || [];
      let bankRes;
      try {
        bankRes = kw
          ? bank.filter((it) => {
              const mistakesText = ((it.mistakes && (it.mistakes.en || it.mistakes.bm)) || []).join(' ');
              const hay = `${it.code} ${U.t(it.topic, 'en')} ${U.t(it.q, 'en')} ${mistakesText}`.toLowerCase();
              return hay.includes(kw);
            })
          : bank;
      } catch (err) {
        rep.fail('T2-04', `Bank filter threw on "${kwRaw}" (${ch.id})`, err.message);
        continue;
      }
      if (kwRaw === '') rep.assert('T2-04', bankRes.length === 10, `Empty filter should return 10 items on ${ch.id}`);
      if (kwRaw === 'zzzz_no_match_999') rep.assert('T2-04', bankRes.length === 0, `Non-matching query returned items on ${ch.id}`);
    }

    let vaultRes;
    try {
      vaultRes = kw
        ? chapters.filter((c) => {
            const hay = `${U.t(c.code, 'en')} ${U.t(c.title, 'en')} ${(c.concepts || []).flatMap((s) => s.formulas || []).map((f) => U.t(f.label, 'en') + ' ' + U.t(f.tex, 'en')).join(' ')}`.toLowerCase();
            return hay.includes(kw);
          })
        : chapters;
    } catch (err) {
      rep.fail('T2-04', `Vault filter threw on "${kwRaw}"`, err.message);
      continue;
    }
    if (kwRaw === '') rep.assert('T2-04', vaultRes.length === 18, 'Empty vault filter should return 18 chapters');
    if (kwRaw === 'zzzz_no_match_999') rep.assert('T2-04', vaultRes.length === 0, 'Non-matching vault query should return 0 chapters');
  }

  // T2-05: Free-Form Coach & Tutor Offline Parsers (askSmartTutor)
  rep.define('T2-05', 'App.coach.askSmartTutor Offline Symbolic Parser Boundaries');
  const ch1 = chapters[0];
  const tutorCases = [
    { q: '', lang: 'bm', check: (r) => r.length > 20 },
    { q: '   ', lang: 'en', check: (r) => r.length > 20 },
    { q: 'x^2 - 9 = 0', lang: 'en', check: (r) => r.includes('-3') && r.includes('3') },
    { q: '-x^2 + 4x = 0', lang: 'en', check: (r) => r.includes('0') && r.includes('4') },
    { q: '2x^2 + 6x = 0', lang: 'bm', check: (r) => r.includes('-3') && r.includes('0') },
    { q: 'x^2 + 2x + 5 = 0', lang: 'en', check: (r) => /No real roots/i.test(r) },
    { q: 'x² - 4 = 0', lang: 'en', check: (r) => r.includes('-2') && r.includes('2') },
    { q: '|2x - 4| = 0', lang: 'en', check: (r) => r.includes('2') },
    { q: '|2x - 4| = -3', lang: 'en', check: (r) => /No real solution/i.test(r) },
    { q: 'd/dx(5)', lang: 'en', check: (r) => r.includes('= 0') },
    { q: 'int(1/x)', lang: 'bm', check: (r) => r.length > 20 },
    { q: 'int(x^-1)', lang: 'en', check: (r) => r.includes('\\ln|x|') && r.includes('+ c') },
    { q: 'int(3x^2 - 2x + 1)', lang: 'en', check: (r) => r.includes('+ c') },
    { q: '5, 5, 5', lang: 'en', check: (r) => /Arithmetic Progression/i.test(r) && r.includes('d = 5 - 5 = 0') },
    { q: '16, -8, 4', lang: 'en', check: (r) => /Geometric Progression/i.test(r) && r.includes('-0.5') },
    { q: '1, 2, 5', lang: 'en', check: (r) => !/Arithmetic Progression|Geometric Progression/i.test(r) },
    {
      q: '1, 2, 4, 7',
      lang: 'en',
      strictOnly: true,
      check: (r) => !/Arithmetic Progression|Geometric Progression/i.test(r),
      strictMsg: 'trySolveLiveSequence only checks first 3 terms [t1,t2,t3] and misclassifies "1, 2, 4, 7" as GP'
    },
    { q: 'saya tak faham langsung bab ni', lang: 'bm', check: (r) => r.length > 20 }
  ];

  for (const tc of tutorCases) {
    let reply;
    try {
      reply = await App.coach.askSmartTutor(tc.q, ch1, tc.lang);
    } catch (err) {
      rep.fail('T2-05', `askSmartTutor threw on "${tc.q}" (${tc.lang})`, err.message);
      continue;
    }
    rep.assert('T2-05', typeof reply === 'string' && reply.trim().length > 0, `Empty reply on "${tc.q}"`);
    rep.assert('T2-05', !hasJsLeak(reply, false), `NaN/undefined in askSmartTutor("${tc.q}"): ${reply}`);
    const mErrs = checkMathStringIntegrity(reply);
    rep.assert('T2-05', mErrs.length === 0, `${mErrs[0]} in askSmartTutor("${tc.q}")`);
    if (tc.strictOnly) {
      rep.assertStrict('T2-05', tc.check(reply), tc.strictMsg);
    } else {
      rep.assert('T2-05', tc.check(reply), `Unexpected output for askSmartTutor("${tc.q}"): ${reply.slice(0, 120)}`);
    }
  }

  // Strict regression probe for malformed decimal coefficient in live quadratic solver (js/diagnostic-coach.js:47-57)
  const badDecReply = await App.coach.askSmartTutor('x^2 + .x = 0', ch1, 'en');
  rep.assert('T2-05', typeof badDecReply === 'string' && badDecReply.trim().length > 0, 'Empty reply on "x^2 + .x = 0"');
  rep.assertStrict(
    'T2-05',
    !hasJsLeak(badDecReply, false) && !/\bUndefined\b/.test(badDecReply),
    'trySolveLiveQuadratic leaks NaN/Undefined on malformed decimal "x^2 + .x = 0" (js/diagnostic-coach.js:47-57)',
    badDecReply.slice(0, 100)
  );

  return rep.summarize();
}

const isMain = process.argv[1] && path.resolve(process.argv[1]) === path.resolve(fileURLToPath(import.meta.url));
if (isMain) {
  const { strict } = parseCliArgs();
  const summary = await runTier2({ strict });
  process.exit(summary.ok ? 0 : 1);
}
