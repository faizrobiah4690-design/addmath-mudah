/**
 * AddMath Mudah — Enjin Kepintaran Intent, Penjana Langkah Dinamik & Diagnostik Sokratik (BM / EN)
 */
window.AddMathApp = window.AddMathApp || {};

(function (App) {
  'use strict';
  const U = App.utils;

  // Classify student's natural language intent (supports BM, English & Manglish)
  function detectIntent(rawText) {
    const s = String(rawText || '').toLowerCase().trim();
    if (!s) return 'stuck_start';

    if (/[x]\s*(\^2|²)/i.test(s)) return 'solve_quadratic';
    if (/\|[^|]+x[^|]*\|\s*=/i.test(s)) return 'solve_modulus';
    if (/f\s*\(\s*x\s*\)\s*=/i.test(s)) return 'solve_function';
    if (/^-?\d+(\.\d+)?\s*,\s*-?\d+(\.\d+)?\s*,\s*-?\d+(\.\d+)?/.test(s)) return 'solve_sequence';

    if (/(susah|stress|putus asa|tak pandai|lemah|bodoh|give up|too hard|takut|pening kepala)/i.test(s)) {
      return 'motivation';
    }
    if (/(jana|step|langkah|jalan kerja|cara kira|cara jawab|tunjuk|show|working|solve|selesaikan)/i.test(s)) {
      return 'generate_steps';
    }
    if (/(tak tahu nak mula|macam mana nak mula|nak mula|how to start|where to start|how do i start|blur|tak faham soalan|nak buat apa dulu)/i.test(s)) {
      return 'stuck_start';
    }
    if (/(rumus|formula|petua|hukum mana|which rule|which formula|pakai apa)/i.test(s)) {
      return 'formula_confusion';
    }
    if (/(kenapa salah|why was i wrong|saya dapat|jawapan saya|i got|why wrong|tanda|negatif|positif|silap kat mana|sangkut|sign|negative|positive|wrong)/i.test(s)) {
      return 'diagnose_wrong';
    }
    if (/(analogi|cara ingat|mudah ingat|mnemonik|mnemonic|memory trick|mental model|explain like|klinik cikgu)/i.test(s)) {
      return 'mental_model';
    }
    if (/(kenapa|why|apa maksud|beza|difference|konsep|concept|explain|terangkan)/i.test(s)) {
      return 'why_concept';
    }
    return 'generate_steps';
  }

  const STRICT_NUM_RE = /^[+-]?(?:\d+\.?\d*|\.\d+)$/;

  function parseStrictNum(str) {
    const s = String(str || '').trim();
    if (!STRICT_NUM_RE.test(s)) return NaN;
    const n = Number(s);
    return Number.isFinite(n) ? n : NaN;
  }

  function parseLiveCoeff(str, def) {
    if (!str || str === '+') return def;
    if (str === '-') return -def;
    return parseStrictNum(str);
  }

  // Live Quadratic Solver: e.g. "2x^2 - 7x + 3 = 0"
  function trySolveLiveQuadratic(text, lang) {
    const cleaned = text.replace(/−/g, '-').replace(/²/g, '^2').replace(/\s+/g, '').replace(/=0$/, '');
    const m = cleaned.match(/^([+-]?(?:\d+\.?\d*|\.\d+)?)x\^2([+-](?:\d+\.?\d*|\.\d+)?x)?([+-](?:\d+\.?\d*|\.\d+))?$/i);
    if (!m) return null;
    const a = parseLiveCoeff(m[1], 1);
    const b = m[2] ? parseLiveCoeff(m[2].replace(/x/i, ''), 1) : 0;
    const c = m[3] ? parseStrictNum(m[3]) : 0;
    if (!Number.isFinite(a) || a === 0 || !Number.isFinite(b) || !Number.isFinite(c)) return null;

    const rawDisc = b * b - 4 * a * c;
    const disc = Math.abs(rawDisc) < 1e-10 ? 0 : rawDisc;
    const h = -b / (2 * a);
    const k = a * h * h + b * h + c;
    const sor = -b / a;
    const por = c / a;
    if (!Number.isFinite(b * b) || !Number.isFinite(4 * a * c) || !Number.isFinite(disc) || !Number.isFinite(h) || !Number.isFinite(k) || !Number.isFinite(sor) || !Number.isFinite(por)) {
      return lang === 'bm'
        ? `**Had Berangka Terlampaui:** Pekali persamaan kuadratik ini terlalu besar ($> 10^{308}$) untuk dikira secara terhingga.`
        : `**Numerical Limit Exceeded:** The coefficients in this quadratic equation are too large ($> 10^{308}$) for finite evaluation.`;
    }
    let rootsStr;
    if (disc > 0) {
      const r1 = (-b - Math.sqrt(disc)) / (2 * a);
      const r2 = (-b + Math.sqrt(disc)) / (2 * a);
      if (!Number.isFinite(r1) || !Number.isFinite(r2)) {
        return lang === 'bm'
          ? `**Had Berangka Terlampaui:** Punca persamaan ini melebihi had nombor nyata ($> 10^{308}$).`
          : `**Numerical Limit Exceeded:** The roots of this equation exceed finite floating-point limits ($> 10^{308}$).`;
      }
      rootsStr = `$x_1 = ${U.roundStr(r1)},\\; x_2 = ${U.roundStr(r2)}$`;
    } else if (disc === 0) {
      const r = U.roundStr(-b / (2 * a));
      rootsStr = `$x_1 = ${r},\\; x_2 = ${r}$`;
    } else {
      rootsStr = lang === 'bm' ? 'Tiada punca nyata ($\\Delta < 0$)' : 'No real roots ($\\Delta < 0$)';
    }

    return lang === 'bm'
      ? `**Penyelesaian Persamaan Kuadratik** bagi $${U.polyTex([{ c: a, p: 2 }, { c: b, p: 1 }, { c: c, p: 0 }])} = 0$:\n` +
        `1. **[P1] Pembezalayan (*Discriminant*):** $\\Delta = (${b})^2 - 4(${a})(${c}) = ${U.roundStr(disc)}$\n` +
        `2. **[K1] Hasil Tambah & Darab Punca (HTP & HDP):** $\\alpha + \\beta = ${U.roundStr(sor)}$, $\\alpha\\beta = ${U.roundStr(por)}$\n` +
        `3. **[J1] Punca:** ${rootsStr}\n` +
        `4. **Titik Pusingan (Verteks):** $(${U.roundStr(h)},\\; ${U.roundStr(k)})$`
      : `**Dynamic Quadratic Solution** for $${U.polyTex([{ c: a, p: 2 }, { c: b, p: 1 }, { c: c, p: 0 }])} = 0$:\n` +
        `1. **[P1] Discriminant:** $\\Delta = (${b})^2 - 4(${a})(${c}) = ${U.roundStr(disc)}$\n` +
        `2. **[K1] SOR & POR:** $\\alpha + \\beta = ${U.roundStr(sor)}$, $\\alpha\\beta = ${U.roundStr(por)}$\n` +
        `3. **[J1] Roots:** ${rootsStr}\n` +
        `4. **Turning Point (Vertex):** $(${U.roundStr(h)},\\; ${U.roundStr(k)})$`;
  }

  // Live Modulus Equation Solver: e.g. "|2x - 5| = 9"
  function trySolveLiveModulus(text, lang) {
    const cleaned = text.replace(/−/g, '-').replace(/\s+/g, '');
    const m = cleaned.match(/^\|([+-]?(?:\d+\.?\d*|\.\d+)?)x([+-](?:\d+\.?\d*|\.\d+))?\|=([+-]?(?:\d+\.?\d*|\.\d+))$/i);
    if (!m) return null;
    const a = parseLiveCoeff(m[1], 1);
    const b = m[2] ? parseStrictNum(m[2]) : 0;
    const k = parseStrictNum(m[3]);
    if (!Number.isFinite(a) || a === 0 || !Number.isFinite(b) || !Number.isFinite(k)) return null;
    if (k < 0) return lang === 'bm' ? 'Tiada penyelesaian nyata kerana nilai mutlak tidak boleh negatif ($k < 0$).' : 'No real solution because absolute value cannot be negative ($k < 0$).';
    const x1 = (k - b) / a;
    const x2 = (-k - b) / a;
    const inner = U.polyTex([{ c: a, p: 1 }, { c: b, p: 0 }]);
    const axStr = a === 1 ? 'x' : (a === -1 ? '-x' : `${a}x`);
    return lang === 'bm'
      ? `**Penyelesaian Nilai Mutlak (Modulus)** bagi $|${inner}| = ${k}$:\n` +
        `1. **[P1] Pecahkan kepada dua kes:** $${inner} = ${k}$ atau $${inner} = ${-k}$\n` +
        `2. **[K1] Kes 1:** $${axStr} = ${U.roundStr(k - b)} \\implies x = ${U.roundStr(x1)}$\n` +
        `3. **[J1] Kes 2:** $${axStr} = ${U.roundStr(-k - b)} \\implies x = ${U.roundStr(x2)}$`
      : `**Modulus Step-by-Step Solution** for $|${inner}| = ${k}$:\n` +
        `1. **[P1] Split into two branches:** $${inner} = ${k}$ or $${inner} = ${-k}$\n` +
        `2. **[K1] Branch 1:** $${axStr} = ${U.roundStr(k - b)} \\implies x = ${U.roundStr(x1)}$\n` +
        `3. **[J1] Branch 2:** $${axStr} = ${U.roundStr(-k - b)} \\implies x = ${U.roundStr(x2)}$`;
  }

  // Live Function Inverse Solver: e.g. "f(x) = 3x - 5"
  function trySolveLiveFunction(text, lang) {
    const cleaned = text.replace(/−/g, '-').replace(/\s+/g, '');
    const m = cleaned.match(/^f\(x\)=([+-]?(?:\d+\.?\d*|\.\d+)?)x([+-](?:\d+\.?\d*|\.\d+))?$/i);
    if (!m) return null;
    const a = parseLiveCoeff(m[1], 1);
    const b = m[2] ? parseStrictNum(m[2]) : 0;
    if (!Number.isFinite(a) || a === 0 || !Number.isFinite(b)) return null;
    const signB = -b >= 0 ? '+ ' + Math.abs(b) : '- ' + Math.abs(b);
    const ax = a === 1 ? 'x' : (a === -1 ? '-x' : `${a}x`);
    const rhsY = b === 0 ? 'y' : `y ${signB}`;
    const rhsX = b === 0 ? 'x' : `x ${signB}`;
    const isoX = a === 1 ? rhsY : (a === -1 ? U.polyTex([{ c: -1, p: 1 }, { c: b, p: 0 }], 'y') : `\\frac{${rhsY}}{${a}}`);
    const invX = a === 1 ? rhsX : (a === -1 ? U.polyTex([{ c: -1, p: 1 }, { c: b, p: 0 }], 'x') : `\\frac{${rhsX}}{${a}}`);
    const fxTex = U.polyTex([{ c: a, p: 1 }, { c: b, p: 0 }]);
    return lang === 'bm'
      ? `**Janaan Langkah Fungsi Songsang** bagi $f(x) = ${fxTex}$:\n` +
        `1. **[P1]** Biar $y = ${fxTex}$\n` +
        `2. **[K1]** Asingkan $x$: $${ax} = ${rhsY} \\implies x = ${isoX}$\n` +
        `3. **[J1]** Fungsi songsang: $$f^{-1}(x) = ${invX}$$`
      : `**Generated Inverse Function Steps** for $f(x) = ${fxTex}$:\n` +
        `1. **[P1]** Let $y = ${fxTex}$\n` +
        `2. **[K1]** Isolate $x$: $${ax} = ${rhsY} \\implies x = ${isoX}$\n` +
        `3. **[J1]** Inverse function: $$f^{-1}(x) = ${invX}$$`;
  }

  // Live Sequence Detector (AP / GP): e.g. "12, 6, 3" or "4, 9, 14"
  function trySolveLiveSequence(text, lang) {
    const parts = String(text || '').replace(/−/g, '-').split(',').map((p) => p.trim());
    if (parts.length < 3 || parts.some((p) => !STRICT_NUM_RE.test(p))) return null;
    const nums = parts.map(Number);
    if (nums.some((n) => !Number.isFinite(n))) return null;

    const t1 = nums[0];
    const t2 = nums[1];
    const d = t2 - t1;
    const apTol = 1e-6 * Math.max(1, Math.abs(d));
    const isAP = nums.slice(2).every((val, idx) => Math.abs((val - nums[idx + 1]) - d) < apTol);

    const allNonZero = nums.every((n) => n !== 0);
    const r = allNonZero ? t2 / t1 : NaN;
    const gpTol = 1e-6 * Math.max(1, Math.abs(r));
    const isGP = allNonZero && Number.isFinite(r) && nums.slice(2).every((val, idx) => Math.abs((val / nums[idx + 1]) - r) < gpTol);
    const t1Fmt = t1 < 0 ? `(${t1})` : `${t1}`;

    if (isAP) {
      const t10 = t1 + 9 * d;
      const s10 = 5 * (2 * t1 + 9 * d);
      if (!Number.isFinite(d) || !Number.isFinite(t10) || !Number.isFinite(s10)) {
        return lang === 'bm'
          ? `**Pengesanan Automatik: Janjang Aritmetik (JA)**\n1. **[P1]** Sebutan pertama $a = ${t1}$\n2. **[J1]** Nilai $d$, $T_{10}$, atau $S_{10}$ melebihi had nombor nyata ($> 10^{308}$).`
          : `**Auto-Detected: Arithmetic Progression (AP)**\n1. **[P1]** First term $a = ${t1}$\n2. **[J1]** Values $d$, $T_{10}$, or $S_{10}$ exceed finite floating-point limits ($> 10^{308}$).`;
      }
      return lang === 'bm'
        ? `**Pengesanan Automatik: Janjang Aritmetik (JA)**\n` +
          `1. **[P1]** Sebutan pertama $a = ${t1}$, beza sepunya $d = ${t2} - ${t1Fmt} = ${U.roundStr(d)}$\n` +
          `2. **[K1]** Rumus sebutan ke-$n$: $T_n = ${t1} + (n - 1)(${U.roundStr(d)})$\n` +
          `3. **[J1]** Contoh nilai: $T_{10} = ${U.roundStr(t10)}$ dan $S_{10} = ${U.roundStr(s10)}$`
        : `**Auto-Detected: Arithmetic Progression (AP)**\n` +
          `1. **[P1]** First term $a = ${t1}$, common difference $d = ${t2} - ${t1Fmt} = ${U.roundStr(d)}$\n` +
          `2. **[K1]** General $n$-th term: $T_n = ${t1} + (n - 1)(${U.roundStr(d)})$\n` +
          `3. **[J1]** Sample evaluation: $T_{10} = ${U.roundStr(t10)}$ and $S_{10} = ${U.roundStr(s10)}$`;
    }
    if (isGP) {
      const t6 = t1 * Math.pow(r, 5);
      const sInfVal = Math.abs(r) < 1 ? t1 / (1 - r) : null;
      const sInfLine = Math.abs(r) < 1
        ? (Number.isFinite(sInfVal) ? `$\\implies S_\\infty = \\frac{${t1}}{1 - (${U.roundStr(r)})} = ${U.roundStr(sInfVal)}$` : (lang === 'bm' ? '(Nilai $S_\\infty$ melebihi had $> 10^{308}$)' : '($S_\\infty$ exceeds limit $> 10^{308}$)'))
        : (lang === 'bm' ? '(Tiada $S_\\infty$ kerana $|r| \\ge 1$)' : '(No $S_\\infty$ since $|r| \\ge 1$)');
      const t6Str = Number.isFinite(t6)
        ? `${U.roundStr(t6)}`
        : (lang === 'bm' ? '\\text{Melebihi had } (> 10^{308})' : '\\text{Exceeds limit } (> 10^{308})');
      return lang === 'bm'
        ? `**Janjang Geometri (JG)**\n` +
          `1. **[P1]** Sebutan pertama $a = ${t1}$, nisbah sepunya $r = \\frac{${t2}}{${t1Fmt}} = ${U.roundStr(r)}$\n` +
          `2. **[K1]** Sebutan ke-6: $T_6 = ${t1Fmt}(${U.roundStr(r)})^5 = ${t6Str}$\n` +
          `3. **[J1]** Hasil tambah ketakterhinggaan ($S_\\infty$): ${sInfLine}`
        : `**Auto-Detected: Geometric Progression (GP)**\n` +
          `1. **[P1]** First term $a = ${t1}$, common ratio $r = \\frac{${t2}}{${t1Fmt}} = ${U.roundStr(r)}$\n` +
          `2. **[K1]** 6th term: $T_6 = ${t1Fmt}(${U.roundStr(r)})^5 = ${t6Str}$\n` +
          `3. **[J1]** Sum to infinity: ${sInfLine}`;
    }
    return null;
  }

  // Live Polynomial Calculus Solver: e.g. "d/dx(3x^3 - 5x^2 + 4x - 2)" or "int(6x^2 - 4x + 5)"
  function trySolveLiveCalculus(text, lang) {
    const raw = String(text || '').trim();
    const isDiff = /^(d\/dx|bezakan|differentiate)\b/i.test(raw);
    const isInt = /^(?:(?:int|kamirkan|integrate)\b|∫)/i.test(raw);
    if (!isDiff && !isInt) return null;

    let body = raw
      .replace(/^(d\/dx|bezakan|differentiate|int|∫|kamirkan|integrate)/i, '')
      .replace(/dx$/i, '')
      .trim();
    if (body.startsWith('(') && body.endsWith(')')) body = body.slice(1, -1);
    body = body.replace(/−/g, '-').replace(/²/g, '^2').replace(/³/g, '^3').replace(/\s+/g, '');
    if (!body || /[+\-^]$/.test(body)) return null;

    const tokens = body.match(/([+-]?(?:[^^+\-]|\^[+-]?)+)/g);
    if (!tokens || tokens.join('') !== body) return null;

    const terms = [];
    for (let idx = 0; idx < tokens.length; idx++) {
      const tk = tokens[idx];
      if (idx > 0 && !/^[+-]/.test(tk)) return null;
      const m = tk.match(/^([+-]?(?:\d+\.?\d*|\.\d+)?)x(?:\^([+-]?\d+))?$/i);
      if (m) {
        const c = parseLiveCoeff(m[1], 1);
        const p = m[2] !== undefined ? parseInt(m[2], 10) : 1;
        if (!Number.isFinite(c) || !Number.isFinite(p)) return null;
        terms.push({ c, p });
      } else {
        const num = parseStrictNum(tk);
        if (!Number.isFinite(num)) return null;
        terms.push({ c: num, p: 0 });
      }
    }

    const origTex = U.polyTex(terms);
    if (isDiff) {
      const dTerms = terms.filter((t) => Math.abs(t.c) >= 1e-9 && t.p !== 0).map((t) => ({ c: U.round(t.c * t.p, 4), p: t.p - 1 }));
      const dTex = dTerms.length ? U.polyTex(dTerms) : '0';
      return lang === 'bm'
        ? `**Langkah Pembezaan** bagi $y = ${origTex}$:\n` +
          `1. **[P1] Petua Kuasa:** $\\frac{d}{dx}(ax^n) = anx^{n-1}$ (pemalar menjadi $0$)\n` +
          `2. **[J1] Terbitan Pertama:** $$\\frac{dy}{dx} = ${dTex}$$`
        : `**Live Symbolic Differentiation** for $y = ${origTex}$:\n` +
          `1. **[P1] Power Rule:** $\\frac{d}{dx}(ax^n) = anx^{n-1}$ (constants vanish to $0$)\n` +
          `2. **[J1] First Derivative:** $$\\frac{dy}{dx} = ${dTex}$$`;
    }
    const nonZeroTerms = terms.filter((t) => Math.abs(t.c) >= 1e-9);
    const iParts = nonZeroTerms.map((t) => {
      if (t.p === -1) {
        const c = U.round(t.c, 4);
        if (c === 1) return '\\ln|x|';
        if (c === -1) return '-\\ln|x|';
        return `${U.roundStr(c)}\\ln|x|`;
      }
      const np = t.p + 1;
      const nc = t.c / np;
      const coeffStr = Number.isInteger(nc) ? (nc === 1 ? '' : (nc === -1 ? '-' : String(nc))) : U.fracTex(t.c, np);
      return np === 1 ? `${coeffStr}x` : `${coeffStr}x^{${np}}`;
    });
    const joined = iParts.length ? iParts.join(' + ').replace(/\+\s*-/g, '- ') : '';
    const intResult = joined ? `${joined} + c` : 'c';
    return lang === 'bm'
      ? `**Pengamiran Tak Tentu Langsung** bagi $\\int (${origTex})\\,dx$:\n` +
        `1. **[P1] Petua Songsang Kuasa:** Tambah kuasa dengan $1$ dan bahagi kuasa baru\n` +
        `2. **[J1] Hasil Kamiran (Wajib tulis $+c$!):** $$\\int (${origTex})\\,dx = ${intResult}$$`
      : `**Live Indefinite Integration** for $\\int (${origTex})\\,dx$:\n` +
        `1. **[P1] Reverse Power Rule:** Add $1$ to each exponent and divide by new power\n` +
        `2. **[J1] Result (Always include $+c$!):** $$\\int (${origTex})\\,dx = ${intResult}$$`;
  }

  function resolveIntentMeta(val, lang) {
    if (!val) return '';
    if (typeof val === 'object') {
      if (lang === 'en') return val.en ? String(val.en).trim() : '';
      return U.t(val, lang);
    }
    // Legacy chapters (pre-M2..M5 upgrade) pass plain BM strings in intentMeta
    if (lang === 'en') return '';
    return String(val);
  }

  const META_MATH_FUNCS = new Set([
    'sin', 'cos', 'tan', 'sec', 'csc', 'cot',
    'log', 'ln', 'lg', 'lim', 'mod', 'max', 'min',
    'exp', 'abs', 'rad', 'deg'
  ]);

  function normalizeUnicodeTex(str) {
    return str
      .replace(/⁻¹/g, '^{-1}')
      .replace(/⁰/g, '^{0}')
      .replace(/¹/g, '^{1}')
      .replace(/²/g, '^{2}')
      .replace(/³/g, '^{3}')
      .replace(/−/g, '-')
      .replace(/→/g, '\\to ')
      .replace(/←/g, '\\leftarrow ')
      .replace(/⟹/g, '\\implies ')
      .replace(/⟺/g, '\\iff ')
      .replace(/≤/g, '\\le ')
      .replace(/≥/g, '\\ge ')
      .replace(/≠/g, '\\ne ')
      .replace(/≈/g, '\\approx ')
      .replace(/×/g, '\\times ')
      .replace(/÷/g, '\\div ')
      .replace(/±/g, '\\pm ')
      .replace(/°/g, '^\\circ')
      .replace(/α/g, '\\alpha ')
      .replace(/β/g, '\\beta ')
      .replace(/θ/g, '\\theta ')
      .replace(/π/g, '\\pi ')
      .replace(/μ/g, '\\mu ')
      .replace(/σ/g, '\\sigma ')
      .replace(/Δ/g, '\\Delta ')
      .replace(/(^|[^\\])%/g, '$1\\%')
      .replace(/\s{2,}/g, ' ')
      .trim();
  }

  function formatSafeMetaMath(str) {
    if (!str) return '-';
    const s = String(str).trim();
    if (!s) return '-';
    if (s.includes('$')) return s;
    const hasLatexCmd = /\\(?:[a-zA-Z]+|%)/.test(s);
    if (hasLatexCmd) {
      return '$' + normalizeUnicodeTex(s) + '$';
    }
    const hasUnsafeCharOrUnicode = /[⁰¹²³⁴⁵⁶⁷⁸⁹⁻₀-₉ₐₙᵢᵣ≥≤≠≈⟹⟺→←√∞±×÷°&%−αβθπμσΔ]/.test(s);
    const words = s.match(/\b[a-zA-Z]*[a-z]{2,}[a-zA-Z]*\b/g) || [];
    const hasProseWord = words.some((w) => {
      const lw = w.toLowerCase();
      if (META_MATH_FUNCS.has(lw)) return false;
      if (lw.length >= 3) return true;
      return /^(and|or|is|in|at|to|of|by|on|if|as|no|so|di|ke)$/.test(lw);
    });
    if (hasUnsafeCharOrUnicode || hasProseWord) {
      return '`' + s + '`';
    }
    return '$' + s + '$';
  }

  // Context-Aware Socratic Coach for the ACTIVE Practice Question!
  function coachOnQuestion(userText, question, chapter, lastStudentAnswer, lang) {
    const l = lang || App.lang || 'bm';
    const q = question || {};
    const chapId = chapter ? chapter.id : '';
    const chapTitle = chapter ? U.t(chapter.title, l) : (l === 'bm' ? 'Matematik Tambahan' : 'Additional Mathematics');
    const formatStepTex = (texVal) => {
      const rawTex = U.t(texVal, l).trim();
      if (!rawTex) return '-';
      if (/^\$\$[\s\S]+\$\$$/.test(rawTex) || /^\$[^$\n]+\$$/.test(rawTex)) return rawTex;
      const stripped = rawTex.replace(/^\$+|\$+$/g, '').trim();
      return stripped ? `$${stripped}$` : '-';
    };
    const intent = detectIntent(userText);
    const meta = q.intentMeta || {};
    const gSteps = q.guidedSteps || [];
    const firstHint = U.t(q.hints && q.hints[0], l);
    const firstGuided = gSteps[0] ? U.t(gSteps[0].prompt, l) : firstHint;
    const firstStep = (q.steps && q.steps[0]) || { badge: 'P1', title: '', tex: '', why: '' };
    const fallbackTex = formatStepTex(firstStep.tex);
    const metaGiven = resolveIntentMeta(meta.given, l);
    const metaRule = resolveIntentMeta(meta.conceptRule, l);
    const metaGoal = resolveIntentMeta(meta.goal, l);
    const givenDisplay = metaGiven ? formatSafeMetaMath(metaGiven) : fallbackTex;
    const ruleDisplay = metaRule || U.t(firstStep.why, l) || firstHint || fallbackTex;
    const goalDisplay = metaGoal || U.t(firstStep.title, l) || U.t(q.subtopic, l);

    const numInMsgMatch = String(userText || '').match(/(-?\d+(?:\/\d+|\.\d+)?)/);
    const candidateWrong = lastStudentAnswer || (numInMsgMatch ? numInMsgMatch[1] : '');

    // Dynamically construct step-by-step guided plan WITHOUT exposing only the final answer prematurely, OR showing all setup steps clearly!
    if (intent === 'generate_steps') {
      const stepsList = (q.steps || []).filter(Boolean);
      const stepLines = stepsList.map((st, idx) => {
        const isLast = idx === stepsList.length - 1;
        const stTitle = U.t(st.title, l);
        const stWhy = U.t(st.why, l);
        if (isLast && stepsList.length > 1) {
          return `${idx + 1}. **[${st.badge}] ${stTitle}:** ${l === 'bm' ? 'Permudahkan langkah di atas untuk mendapat jawapan akhir! *(Klik "Jana Skema Penuh SPM" di atas jika mahu semak angka akhir)*' : 'Simplify the expression above to get the final answer! *(Click "Generate Full SPM Working" above to reveal the final number)*'}`;
        }
        return `${idx + 1}. **[${st.badge}] ${stTitle}:** ${formatStepTex(st.tex)} — *${stWhy}*`;
      }).join('\n');

      return {
        tag: l === 'bm' ? 'Pelan Langkah demi Langkah' : 'Step-by-Step Working Plan',
        category: 'K',
        openGuided: true,
        reply: (l === 'bm'
          ? `Berikut ialah **pelan langkah demi langkah** khusus untuk nombor dalam soalan ini:\n\n${stepLines}\n\nKotak **Bimbingan Interaktif** di atas juga telah dibuka supaya awak boleh cuba kira setiap langkah!`
          : `Here is the **step-by-step working plan** tailored to the exact numbers in this question:\n\n${stepLines}\n\nI've also opened the **Interactive Step Box** above so you can verify each step live!`)
      };
    }

    if (intent === 'motivation') {
      return {
        tag: l === 'bm' ? 'Semangat & Strategi' : 'Mindset & Strategy',
        category: 'mindset',
        reply: l === 'bm'
          ? `Jangan risau! Rahsia menguasai AddMath ialah **pecahkan soalan kepada langkah-langkah kecil**.\n\n- **Langkah permulaan:** ${givenDisplay}\n- **Langkah kecil pertama:** ${firstGuided}`
          : `Don't stress! The secret to mastering AddMath is **breaking the problem into small steps**.\n\n- **Starting setup:** ${givenDisplay}\n- **First micro-step:** ${firstGuided}`
      };
    }

    if (intent === 'stuck_start') {
      return {
        tag: l === 'bm' ? 'Cara Mulakan Soalan Ini' : 'How to Start This Question',
        category: 'P',
        openGuided: true,
        reply: l === 'bm'
          ? `Jom kita mulakan langkah pertama bersama-sama:\n` +
            `- **Maklumat diberi:** ${givenDisplay}\n` +
            `- **Apa yang dicari:** ${goalDisplay}\n\n` +
            `**Langkah 1:** ${firstGuided}`
          : `Let's kick off Step 1 together:\n` +
            `- **Key setup:** ${givenDisplay}\n` +
            `- **Our target:** ${goalDisplay}\n\n` +
            `**Step 1:** ${firstGuided}`
      };
    }

    if (intent === 'formula_confusion') {
      return {
        tag: l === 'bm' ? 'Formula Yang Perlu Diguna [P]' : 'Formula Selection [P]',
        category: 'P',
        reply: l === 'bm'
          ? `Untuk subtopik **${U.t(q.subtopic, 'bm')}**, rumus utama yang perlu digunakan ialah:\n` +
            `- **Rumus / Konsep Utama:** ${ruleDisplay}\n` +
            `- **Gantian Awal:** ${fallbackTex}\n\n` +
            `Cuba kira nilai daripada gantian di atas!`
          : `For **${U.t(q.subtopic, 'en')}**, the key governing formula is:\n` +
            `- **Key Principle:** ${ruleDisplay}\n` +
            `- **Initial Substitution:** ${fallbackTex}\n\n` +
            `Try evaluating the substitution above!`
      };
    }

    if (intent === 'diagnose_wrong') {
      if (candidateWrong) {
        const evalRes = U.evaluateAnswer(q, candidateWrong, l);
        if (evalRes.correct) {
          return {
            tag: l === 'bm' ? 'Semakan: Jawapan Betul!' : 'Check: Correct Answer!',
            category: 'ok',
            reply: l === 'bm'
              ? `Sebenarnya nilai **${candidateWrong}** itu sudah **TEPAT**! Masukkan dalam kotak jawapan utama dan klik **Semak Jawapan** untuk dapat XP awak!`
              : `Your value **${candidateWrong}** is actually **100% CORRECT**! Enter it in the main answer box and click **Check Answer** to claim your XP!`
          };
        }
        if (evalRes.trapHit) {
          return {
            tag: l === 'bm' ? 'Punca Jawapan Tersasar' : 'Misconception Root-Cause Found',
            category: 'K',
            openGuided: true,
            reply: `${evalRes.feedback}\n\n**${l === 'bm' ? 'Langkah pembetulan' : 'Next corrective step'}:** ${firstGuided}`
          };
        }
        return {
          tag: l === 'bm' ? 'Semakan Kiraan Awak' : 'Diagnosing Your Attempt',
          category: 'K',
          openGuided: true,
          reply: l === 'bm'
            ? `Nilai **${candidateWrong}** belum tepat. Jom semak satu persatu supaya kita nampak di baris mana kiraan tersasar!\n\n**Semakan Langkah 1:** ${firstGuided}`
            : `Your value **${candidateWrong}** isn't quite right yet. Let's check each intermediate value in the Step Box above so we catch exactly which line drifted!\n\n**Step 1 Check:** ${firstGuided}`
        };
      }
      return {
        tag: l === 'bm' ? 'Semakan Langkah Kerja [K]' : 'Step-by-Step Verification [K]',
        category: 'K',
        openGuided: true,
        reply: l === 'bm'
          ? `Taip jawapan yang awak dapat di dalam kotak jawapan dahulu (atau cuba langkah satu persatu dalam kotak **Bimbingan Interaktif** di atas) supaya saya boleh kesan di mana punca silapnya!`
          : `Enter the value you got into the answer box first (or test each step inside the **Interactive Step Box** above) so I can pinpoint the exact cause of the error!`
      };
    }

    // Mental model / Guru Cemerlang memory hook ('mental_model')
    const clinic = App.teacherClinic && chapId && App.teacherClinic[chapId];
    if (intent === 'mental_model' && clinic && clinic.mentalModels && clinic.mentalModels.length) {
      const m0 = clinic.mentalModels[0];
      const m1 = clinic.mentalModels[1] || m0;
      return {
        tag: l === 'bm' ? '🩺 Analogi & Mnemonik Cikgu Pakar' : '🩺 Teacher Memory Trick & Analogy',
        category: 'P',
        reply: l === 'bm'
          ? `**${m0.icon} ${U.t(m0.title, 'bm')}**\n${U.t(m0.desc, 'bm')}\n\n` +
            (m1 !== m0 ? `**${m1.icon} ${U.t(m1.title, 'bm')}**\n${U.t(m1.desc, 'bm')}\n\n` : '') +
            `👉 **Aplikasi terus pada soalan ini:** ${firstGuided}`
          : `**${m0.icon} ${U.t(m0.title, 'en')}**\n${U.t(m0.desc, 'en')}\n\n` +
            (m1 !== m0 ? `**${m1.icon} ${U.t(m1.title, 'en')}**\n${U.t(m1.desc, 'en')}\n\n` : '') +
            `👉 **Apply directly to this question:** ${firstGuided}`
      };
    }

    // Concept explanation ('why_concept') — explain clearly using chapter & subtopic context!
    const subName = q.subtopic ? U.t(q.subtopic, l) : chapTitle;
    const rxTip = clinic && clinic.rxFix
      ? (l === 'bm' ? `\n- ⚠️ **Elakkan Silap Biasa:** Jangan buat ${U.t(clinic.rxFix.wrong, 'bm')}` : `\n- ⚠️ **Avoid Common Trap:** Never do ${U.t(clinic.rxFix.wrong, 'en')}`)
      : '';
    return {
      tag: l === 'bm' ? 'Penerangan Konsep Jelas' : 'Clear Concept Explanation',
      category: 'P',
      reply: l === 'bm'
        ? `**Konsep Di Sebalik Soalan Ini (${subName}):**\n` +
          `- Persediaan utama: ${givenDisplay} untuk mencari **${goalDisplay}**.\n` +
          `- Prinsip matematik utamanya ialah **${ruleDisplay}**.${rxTip}\n\n` +
          `Cuba langkah pertama ini: ${firstGuided}`
        : `**Concept Behind This Question (${subName}):**\n` +
          `- Key setup: ${givenDisplay} to find **${goalDisplay}**.\n` +
          `- Core principle: **${ruleDisplay}**.${rxTip}\n\n` +
          `Start with this first check: ${firstGuided}`
    };
  }

  // Standalone Smart Tutor Responder (Tab "Cikgu AI" + Live Symbolic Parsers + Optional Gemini API)
  async function askSmartTutor(userMessage, activeChapter, lang) {
    const l = lang || App.lang || 'bm';
    const msg = String(userMessage || '').trim();

    // 1. Live dynamic math solvers (100% computed on-the-fly from student's own input!)
    const quadOut = trySolveLiveQuadratic(msg, l);
    if (quadOut) return quadOut;

    const modOut = trySolveLiveModulus(msg, l);
    if (modOut) return modOut;

    const fnOut = trySolveLiveFunction(msg, l);
    if (fnOut) return fnOut;

    const seqOut = trySolveLiveSequence(msg, l);
    if (seqOut) return seqOut;

    const calcOut = trySolveLiveCalculus(msg, l);
    if (calcOut) return calcOut;

    const chTitle = activeChapter
      ? U.t(activeChapter.title, l)
      : (l === 'bm' ? 'Matematik Tambahan' : 'Additional Mathematics');

    // 2. Optional Gemini API Key if configured
    const apiKey = localStorage.getItem('addmath_gemini_key');
    if (apiKey && navigator.onLine) {
      try {
        const sysPrompt = l === 'bm'
          ? 'Anda ialah Cikgu Pintar Matematik Tambahan KSSM SPM Malaysia. Fahami intent pelajar, terangkan konsep dengan mudah menggunakan LaTeX ($...$), dan jana bimbingan langkah demi langkah mengikut markah P, K, J.'
          : 'You are an expert Malaysian KSSM SPM Additional Mathematics Tutor. Understand student intent, use LaTeX ($...$), and generate clear step-by-step guidance with P, K, J marks.';
        const promptText = l === 'bm'
          ? `[Topik: ${chTitle}] Soalan pelajar: ${msg}`
          : `[Topic: ${chTitle}] Student question: ${msg}`;
        const resp = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${encodeURIComponent(apiKey)}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            systemInstruction: { parts: [{ text: sysPrompt }] },
            contents: [{ role: 'user', parts: [{ text: promptText }] }]
          })
        });
        if (resp.ok) {
          const data = await resp.json();
          const aiText = data?.candidates?.[0]?.content?.parts?.[0]?.text;
          if (aiText) return aiText;
        }
      } catch (_) {}
    }

    // 3. Built-in KSSM Topic Knowledge & Intent Matcher
    const lower = msg.toLowerCase();
    if (/(songsang|inverse)/i.test(lower)) {
      return l === 'bm'
        ? `**Konsep Fungsi Songsang ($f^{-1}$):**\nBayangkan $f$ memetakan objek $x \\to y$. Fungsi songsang $f^{-1}$ membalikkan anak panah itu daripada $y \\to x$!\n\n- **Syarat wujud:** $f$ mesti fungsi **satu-ke-satu**.\n- **3 Langkah Mudah:**\n  1. Tulis $y = f(x)$\n  2. Asingkan $x$ dalam sebutan $y$\n  3. Tukar simbol $y$ kepada $x$.\n\n*Cuba taip sebarang fungsi seperti \`f(x) = 5x - 8\` di sini untuk saya kirakan langkahnya!*`
        : `**Inverse Functions ($f^{-1}$):**\nIf $f$ maps $x \\to y$, the inverse $f^{-1}$ reverses that mapping $y \\to x$!\n\n- **Existence rule:** $f$ must be **one-to-one**.\n- **3 Easy Steps:**\n  1. Let $y = f(x)$\n  2. Isolate $x$ in terms of $y$\n  3. Replace $y$ with $x$.\n\n*Try typing any function like \`f(x) = 5x - 8\` right here and watch me solve it live!*`;
    }

    if (/(gubahan|composite|gf|fg)/i.test(lower)) {
      return l === 'bm'
        ? `**Rahsia Fungsi Gubahan $gf(x)$:**\nBaca dari **kanan ke kiri** (dalam ke luar)!\n- Dalam $gf(x) = g(f(x))$, fungsi **$f$ bertindak dahulu**, kemudian hasilnya dimasukkan ke dalam setiap $x$ bagi fungsi **$g$**.\n- **Perangkap SPM:** Jangan tertukar $gf(x)$ dengan $fg(x)$!`
        : `**Secret to Composite Functions $gf(x)$:**\nWork **inside-out** (right to left)!\n- In $gf(x) = g(f(x))$, **$f$ acts first**, then plug its output into every $x$ inside **$g$**.\n- **SPM Trap:** Never swap $gf(x)$ with $fg(x)$!`;
    }

    if (/(kuadratik|quadratic|punca|roots|sor|por|htp|hdp|pembezalayan|discriminant)/i.test(lower)) {
      return l === 'bm'
        ? `**Peta Pintar Fungsi Kuadratik ($ax^2 + bx + c = 0$):**\n1. **Sifat Punca ($\\Delta = b^2 - 4ac$):** $\\Delta > 0$ (2 punca berbeza), $\\Delta = 0$ (2 punca sama), $\\Delta < 0$ (tiada punca nyata).\n2. **HTP & HDP:** $\\alpha + \\beta = -\\frac{b}{a}$ dan $\\alpha\\beta = \\frac{c}{a}$.\n3. **Verteks:** Bentuk $a(x-h)^2 + k$ terus memberi titik pusingan $(h, k)$.\n\n*Taip sebarang persamaan seperti \`3x^2 - 10x + 3 = 0\` untuk pengiraan penuh!*`
        : `**Quadratic Mastery Cheat-Map ($ax^2 + bx + c = 0$):**\n1. **Nature of Roots ($\\Delta = b^2 - 4ac$):** $\\Delta > 0$ (2 distinct roots), $\\Delta = 0$ (equal roots), $\\Delta < 0$ (no real roots).\n2. **SOR & POR:** $\\alpha + \\beta = -\\frac{b}{a}$ and $\\alpha\\beta = \\frac{c}{a}$.\n3. **Vertex:** Form $a(x-h)^2 + k$ gives turning point $(h, k)$.\n\n*Type any equation like \`3x^2 - 10x + 3 = 0\` for live step-by-step calculation!*`;
    }

    if (/(janjang|progression|aritmetik|geometri|ketakterhinggaan|infinity)/i.test(lower)) {
      return l === 'bm'
        ? `**Cara Bezakan JA vs JG:**\n- **Janjang Aritmetik (JA):** Beza sepunya malar $d = T_2 - T_1$, $T_n = a + (n-1)d$.\n- **Janjang Geometri (JG):** Nisbah sepunya malar $r = T_2 / T_1$, $T_n = ar^{n-1}$, dan jika $|r| < 1$, $S_\\infty = \\frac{a}{1-r}$.\n\n*Cuba taip sebarang jujukan nombor seperti \`18, 6, 2\` atau \`5, 9, 13\` untuk saya analisis secara langsung!*`
        : `**AP vs GP Quick Guide:**\n- **Arithmetic (AP):** Constant difference $d = T_2 - T_1$, $T_n = a + (n-1)d$.\n- **Geometric (GP):** Constant ratio $r = T_2 / T_1$, $T_n = ar^{n-1}$, and for $|r| < 1$, $S_\\infty = \\frac{a}{1-r}$.\n\n*Try typing any sequence like \`18, 6, 2\` or \`5, 9, 13\` and watch me analyze it live!*`;
    }

    const activeClinic = activeChapter && App.teacherClinic && App.teacherClinic[activeChapter.id];
    if (activeClinic && /(analogi|cara ingat|mudah ingat|mnemonik|mnemonic|memory|klinik|kata kunci|trigger|sakit kepala|tak faham)/i.test(lower)) {
      const mmText = (activeClinic.mentalModels || []).map((m) => `- ${m.icon} **${U.t(m.title, l)}:** ${U.t(m.desc, l)}`).join('\n\n');
      const trText = (activeClinic.triggers || []).slice(0, 2).map((tr) => `- 🔑 *${U.t(tr.cue, l)}* $\\rightarrow$ ${U.t(tr.action, l)}`).join('\n');
      return l === 'bm'
        ? `**🩺 Klinik Cikgu Pakar — ${chTitle}:**\n\n${mmText}\n\n**Terjemahan Pantas Ayat Peperiksaan:**\n${trText}`
        : `**🩺 Teacher's Pain-Killer Clinic — ${chTitle}:**\n\n${mmText}\n\n**Exam-Phrase Trigger Decoder:**\n${trText}`;
    }
    if (/(kesilapan|lazim|mistake|trap|perangkap|contoh soalan|skim|skema|markah|k1|n1)/i.test(lower)) {
      const bankList = (activeChapter && App.masterBank && App.masterBank[activeChapter.id]) || [];
      if (bankList.length) {
        const sampleItems = bankList.slice(0, 3).map((it) => {
          const mTxt = ((it.mistakes && (it.mistakes[l] || it.mistakes.bm)) || [])[0] || '';
          const sTxt = it.scheme && it.scheme[0] ? `[${it.scheme[0].badge}] ${U.t(it.scheme[0], l)}` : '';
          return `- **Soalan ${it.code} (${U.t(it.topic, l)}):**\n  ⚠️ *${l === 'bm' ? 'Kesilapan Lazim' : 'Common Mistake'}:* ${mTxt}\n  ✅ *${l === 'bm' ? 'Langkah Utama' : 'Key Step'}:* ${sTxt}`;
        }).join('\n\n');
        return l === 'bm'
          ? `**Analisis Kesilapan Lazim & Skema Pemarkahan SPM — ${chTitle}:**\n\n${sampleItems}\n\n💡 *Buka tab **📋 Contoh SPM & Kesilapan (10)** dalam menu Belajar untuk melihat kesemua 10 soalan peperiksaan, kesilapan lazim & skema penuh K1/N1 bab ini!*`
          : `**SPM Common Mistakes & Marking Scheme — ${chTitle}:**\n\n${sampleItems}\n\n💡 *Open the **📋 SPM Examples & Mistakes (10)** sub-tab inside Learn to explore all 10 exam questions, common mistakes & K1/N1 schemes for this chapter!*`;
      }
    }

    if (/(kalkulus|beza|differentiate|dy\/dx|kamir|integrate|tangen|pusingan)/i.test(lower)) {
      return l === 'bm'
        ? `**Peta Pantas Kalkulus SPM (Pembezaan & Pengamiran):**\n` +
          `- **Pembezaan ($dy/dx$):** Kecerunan tangen; titik pusingan apabila $dy/dx = 0$ ($d^2y/dx^2 > 0$ minimum, $< 0$ maksimum).\n` +
          `- **Pengamiran ($\\int y\\,dx$):** Songsangan pembezaan (+c untuk tak tentu); luas bawah lengkung $= \\int_a^b |y|\\,dx$; isi padu kisaran $= \\pi\\int_a^b y^2\\,dx$.\n\n` +
          `*Cuba taip \`d/dx(3x^3 - 5x^2 + 4x)\` atau \`int(6x^2 - 4x + 5)\` untuk pengiraan langsung!*`
        : `**SPM Calculus Cheat-Sheet:**\n` +
          `- **Differentiation ($dy/dx$):** Tangent gradient; turning points at $dy/dx = 0$ ($d^2y/dx^2 > 0$ min, $< 0$ max).\n` +
          `- **Integration ($\\int y\\,dx$):** Anti-derivative (+c for indefinite); area $= \\int_a^b |y|\\,dx$; volume $= \\pi\\int_a^b y^2\\,dx$.\n\n` +
          `*Try typing \`d/dx(3x^3 - 5x^2 + 4x)\` or \`int(6x^2 - 4x + 5)\` for live symbolic steps!*`;
    }

    if (/(kinematik|zarah|halaju|pecutan|sesaran|velocity|displacement|acceleration)/i.test(lower)) {
      return l === 'bm'
        ? `**Jambatan Kinematik ($s \\leftrightarrow v \\leftrightarrow a$):**\n` +
          `- **Bezakan** ikut masa $t$: $s \\xrightarrow{d/dt} v \\xrightarrow{d/dt} a$\n` +
          `- **Kamirkan** ikut masa $t$: $a \\xrightarrow{\\int dt} v \\xrightarrow{\\int dt} s$\n` +
          `- **Perangkap Jumlah Jarak:** Semak bila zarah berhenti/berpusing arah ($v = 0$) dahulu, dan jumlahkan jarak pergi serta patah balik!`
        : `**Kinematics Bridge ($s \\leftrightarrow v \\leftrightarrow a$):**\n` +
          `- **Differentiate** w.r.t. $t$: $s \\to v \\to a$; **Integrate** w.r.t. $t$: $a \\to v \\to s$.\n` +
          `- **Total Distance Trap:** Always solve $v = 0$ for turnaround time inside $[0, T]$ and sum each leg's absolute distance!`;
    }

    if (/(binomial|normal|kebarangkalian|skor-z|z-score|pilih atur|gabungan|npr|ncr)/i.test(lower)) {
      return l === 'bm'
        ? `**Panduan Pantas Statistik & Kebarangkalian T5:**\n` +
          `- **$\\,{}^nP_r$ vs $\\,{}^nC_r$:** Susunan/pangkat penting (kod/jawatan) $\\to \\,{}^nP_r$; pilih kumpulan/jawatankuasa biasa $\\to \\,{}^nC_r$.\n` +
          `- **Binomial $B(n,p)$:** Kiraan nombor bulat (diskret); $P(X=r) = \\,{}^nC_r p^r q^{n-r}$, $\\mu = np$, $\\sigma = \\sqrt{npq}$.\n` +
          `- **Normal $N(\\mu, \\sigma^2)$:** Ukuran berterusan (selanjar); ingat nombor kedua ialah varians $\\sigma^2$, jadi bahagi dengan $\\sigma = \\sqrt{\\sigma^2}$ dalam $Z = \\frac{X-\\mu}{\\sigma}$!`
        : `**Form 5 Combinatorics & Distributions Guide:**\n` +
          `- **$\\,{}^nP_r$ vs $\\,{}^nC_r$:** Order matters $\\to \\,{}^nP_r$; unordered committee $\\to \\,{}^nC_r$.\n` +
          `- **Binomial $B(n,p)$:** $P(X=r) = \\,{}^nC_r p^r q^{n-r}$, $\\mu = np$, $\\sigma = \\sqrt{npq}$.\n` +
          `- **Normal $N(\\mu, \\sigma^2)$:** Watch $\\sigma^2$! Standardize using $\\sigma = \\sqrt{\\sigma^2}$ in $Z = \\frac{X-\\mu}{\\sigma}$.`;
    }

    return l === 'bm'
      ? `Saya boleh mengira dan menjana langkah kerja secara langsung! Cuba taip:\n` +
        `- Persamaan kuadratik: \`2x^2 - 5x - 3 = 0\`\n` +
        `- Kalkulus pembezaan / pengamiran: \`d/dx(3x^3 - 5x^2 + 4x)\` atau \`int(6x^2 - 4x + 5)\`\n` +
        `- Nilai mutlak / fungsi: \`|2x - 4| = 10\` atau \`f(x) = 4x - 7\`\n` +
        `- Jujukan janjang: \`24, 12, 6\` atau \`4, 11, 18\`\n` +
        `- Atau tanya sebarang konsep berkaitan **${chTitle}**!`
      : `I can calculate and generate live working steps! Try typing:\n` +
        `- A quadratic: \`2x^2 - 5x - 3 = 0\`\n` +
        `- Calculus derivative / integral: \`d/dx(3x^3 - 5x^2 + 4x)\` or \`int(6x^2 - 4x + 5)\`\n` +
        `- Modulus / function: \`|2x - 4| = 10\` or \`f(x) = 4x - 7\`\n` +
        `- Progression sequence: \`24, 12, 6\` or \`4, 11, 18\`\n` +
        `- Or ask any concept question about **${chTitle}**!`;
  }

  App.coach = {
    detectIntent,
    coachOnQuestion,
    askSmartTutor
  };
})(window.AddMathApp);
