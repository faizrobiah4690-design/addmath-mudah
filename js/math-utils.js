/**
 * AddMath Mudah — Core Mathematical & Pedagogical Engine Utilities
 * Supports KSSM Tingkatan 4 & Tingkatan 5 (DLP Bilingual: BM / EN)
 */
window.AddMathApp = window.AddMathApp || {};

(function (App) {
  'use strict';

  // Bilingual string resolver
  function t(val, lang) {
    if (val === null || val === undefined) return '';
    if (typeof val === 'string' || typeof val === 'number') return String(val);
    const l = lang || App.lang || 'bm';
    return val[l] !== undefined ? val[l] : (val.bm !== undefined ? val.bm : Object.values(val)[0] || '');
  }

  // Greatest Common Divisor
  function gcd(a, b) {
    a = Math.abs(Math.round(a));
    b = Math.abs(Math.round(b));
    while (b) {
      const temp = b;
      b = a % b;
      a = temp;
    }
    return a || 1;
  }

  // Format exact rational number p/q as LaTeX
  function fracTex(num, den) {
    if (den === 0) return '\\text{Undefined}';
    if (num === 0) return '0';
    // Handle decimals if passed accidentally
    if (!Number.isInteger(num) || !Number.isInteger(den)) {
      const ratio = num / den;
      return roundStr(ratio, 4);
    }
    const sign = (num < 0) ^ (den < 0) ? '-' : '';
    const n = Math.abs(num);
    const d = Math.abs(den);
    const g = gcd(n, d);
    const sn = n / g;
    const sd = d / g;
    if (sd === 1) return sign + sn;
    return sign + '\\frac{' + sn + '}{' + sd + '}';
  }

  // Round to n decimal places cleanly (strip trailing zeros)
  function round(val, dp = 4) {
    const factor = Math.pow(10, dp);
    return Math.round((val + Number.EPSILON) * factor) / factor;
  }

  function roundStr(val, dp = 4) {
    if (!Number.isFinite(val)) return 'Undefined';
    const r = round(val, dp);
    if (Object.is(r, -0)) return '0';
    return String(r);
  }

  // Format signed term for polynomials, e.g. + 3x, - 5
  function signedNum(n, isFirst = false) {
    if (n === 0) return isFirst ? '0' : '';
    const abs = round(Math.abs(n), 4);
    if (isFirst) return n < 0 ? '-' + abs : String(abs);
    return n < 0 ? ' - ' + abs : ' + ' + abs;
  }

  function polyTex(coeffs, varName = 'x') {
    // coeffs from highest degree to constant: [{c, p}]
    const parts = [];
    coeffs.forEach((term) => {
      const c = round(term.c, 4);
      const p = term.p;
      if (Math.abs(c) < 1e-9) return;
      const isFirst = parts.length === 0;
      const absC = Math.abs(c);
      let sign = '';
      if (isFirst) {
        sign = c < 0 ? '-' : '';
      } else {
        sign = c < 0 ? ' - ' : ' + ';
      }
      let coeffPart = (absC === 1 && p !== 0) ? '' : String(absC);
      let varPart = '';
      if (p === 1) varPart = varName;
      else if (p !== 0) varPart = varName + '^{' + p + '}';
      parts.push(sign + coeffPart + varPart);
    });
    return parts.length ? parts.join('') : '0';
  }

  // Factorial, nPr, nCr
  function factorial(n) {
    n = Math.round(n);
    if (n < 0) return NaN;
    if (n <= 1) return 1;
    let res = 1;
    for (let i = 2; i <= Math.min(n, 170); i++) res *= i;
    return res;
  }

  function nPr(n, r) {
    n = Math.round(n);
    r = Math.round(r);
    if (r < 0 || n < 0 || r > n) return 0;
    let res = 1;
    for (let i = 0; i < r; i++) res *= (n - i);
    return res;
  }

  function nCr(n, r) {
    n = Math.round(n);
    r = Math.round(r);
    if (r < 0 || n < 0 || r > n) return 0;
    r = Math.min(r, n - r);
    let res = 1;
    for (let i = 1; i <= r; i++) {
      res = (res * (n - r + i)) / i;
    }
    return Math.round(res);
  }

  // Standard Normal Distribution CDF Phi(z) — Abramowitz & Stegun (error < 7.5e-8)
  function normalCDF(z) {
    const sign = z < 0 ? -1 : 1;
    const x = Math.abs(z) / Math.sqrt(2);
    const tVal = 1 / (1 + 0.3275911 * x);
    const a1 = 0.254829592;
    const a2 = -0.284496736;
    const a3 = 1.421413741;
    const a4 = -1.453152027;
    const a5 = 1.061405429;
    const erf = 1 - (((((a5 * tVal + a4) * tVal) + a3) * tVal + a2) * tVal + a1) * tVal * Math.exp(-x * x);
    return 0.5 * (1 + sign * erf);
  }

  function normalPDF(z) {
    return (1 / Math.sqrt(2 * Math.PI)) * Math.exp(-0.5 * z * z);
  }

  // Inverse Normal CDF (Beasley-Springer-Moro / rational approx)
  function invNormalCDF(p) {
    if (p <= 0 || p >= 1) return NaN;
    const a = [-3.969683028665376e+01, 2.209460984245205e+02, -2.759285104469687e+02, 1.383577518672690e+02, -3.066479806614716e+01, 2.506628277459239e+00];
    const b = [-5.447609879822406e+01, 1.615858368580409e+02, -1.556989798598866e+02, 6.680131188771972e+01, -1.328068155288572e+01];
    const c = [-7.784894002430293e-03, -3.223964580411365e-01, -2.400758277161838e+00, -2.549732539343734e+00, 4.374664141464968e+00, 2.938163982698783e+00];
    const d = [7.784695709041462e-03, 3.224671290700398e-01, 2.445134137142996e+00, 3.754408661907416e+00];
    const pLow = 0.02425;
    const pHigh = 1 - pLow;
    let q, r;
    if (p < pLow) {
      q = Math.sqrt(-2 * Math.log(p));
      return (((((c[0] * q + c[1]) * q + c[2]) * q + c[3]) * q + c[4]) * q + c[5]) /
        ((((d[0] * q + d[1]) * q + d[2]) * q + d[3]) * q + 1);
    } else if (p <= pHigh) {
      q = p - 0.5;
      r = q * q;
      return (((((a[0] * r + a[1]) * r + a[2]) * r + a[3]) * r + a[4]) * r + a[5]) * q /
        (((((b[0] * r + b[1]) * r + b[2]) * r + b[3]) * r + b[4]) * r + 1);
    } else {
      q = Math.sqrt(-2 * Math.log(1 - p));
      return -(((((c[0] * q + c[1]) * q + c[2]) * q + c[3]) * q + c[4]) * q + c[5]) /
        ((((d[0] * q + d[1]) * q + d[2]) * q + d[3]) * q + 1);
    }
  }

  // Solve 3x3 Linear System via Gaussian Elimination with partial pivoting
  function solve3x3(matrix, rhs) {
    const A = matrix.map((row, i) => [...row, rhs[i]]);
    const n = 3;
    for (let col = 0; col < n; col++) {
      let maxRow = col;
      for (let row = col + 1; row < n; row++) {
        if (Math.abs(A[row][col]) > Math.abs(A[maxRow][col])) maxRow = row;
      }
      if (Math.abs(A[maxRow][col]) < 1e-10) {
        return { unique: false };
      }
      [A[col], A[maxRow]] = [A[maxRow], A[col]];
      for (let row = col + 1; row < n; row++) {
        const factor = A[row][col] / A[col][col];
        for (let j = col; j <= n; j++) {
          A[row][j] -= factor * A[col][j];
        }
      }
    }
    const sol = [0, 0, 0];
    for (let i = n - 1; i >= 0; i--) {
      let sum = A[i][n];
      for (let j = i + 1; j < n; j++) sum -= A[i][j] * sol[j];
      sol[i] = sum / A[i][i];
    }
    return { unique: true, x: sol[0], y: sol[1], z: sol[2] };
  }

  // Random integer inclusive, optionally excluding 0
  function randInt(min, max, nonZero = false) {
    let val;
    let guard = 0;
    do {
      val = Math.floor(Math.random() * (max - min + 1)) + min;
      guard++;
    } while (nonZero && val === 0 && guard < 50);
    if (nonZero && val === 0) return 1;
    return val;
  }

  function pick(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  // Parse student numeric expression (supports fractions like -3/4, pi, sqrt(2))
  function parseStudentNumber(raw) {
    if (raw === null || raw === undefined) return NaN;
    let s = String(raw).trim()
      .replace(/,/g, '')
      .replace(/−/g, '-')
      .replace(/π/gi, String(Math.PI))
      .replace(/\bpi\b/gi, String(Math.PI))
      .replace(/%/g, '');
    if (!s) return NaN;
    // Simple fraction a/b
    if (/^[+-]?\d+(\.\d+)?\s*\/\s*[+-]?\d+(\.\d+)?$/.test(s)) {
      const parts = s.split('/');
      const den = parseFloat(parts[1]);
      if (den === 0) return NaN;
      return parseFloat(parts[0]) / den;
    }
    // sqrt(x)
    s = s.replace(/sqrt\(([^)]+)\)/gi, (_, inner) => {
      const v = parseFloat(inner);
      return Number.isFinite(v) && v >= 0 ? String(Math.sqrt(v)) : 'NaN';
    });
    const num = Number(s);
    return Number.isFinite(num) ? num : NaN;
  }

  // Smart Answer Evaluator + SPM Trap Detector
  function evaluateAnswer(question, userInput, lang) {
    const l = lang || App.lang || 'bm';
    const raw = String(userInput || '').trim();
    if (!raw) {
      return {
        correct: false,
        empty: true,
        feedback: l === 'bm' ? 'Sila masukkan jawapan anda terlebih dahulu.' : 'Please enter your answer first.'
      };
    }

    if (question.answerType === 'choice') {
      const isOk = String(raw) === String(question.correctValue);
      return {
        correct: isOk,
        feedback: isOk
          ? (l === 'bm' ? 'Tepat sekali! Konsep anda sangat kukuh.' : 'Spot on! Your conceptual understanding is solid.')
          : (l === 'bm' ? 'Kurang tepat. Cuba semak semula syarat konsep atau buka Petunjuk.' : 'Not quite right. Re-check the conceptual condition or view a Hint.')
      };
    }

    const tol = question.tolerance !== undefined ? question.tolerance : 0.05;

    if (question.answerType === 'pair') {
      // Expect two numbers separated by comma, 'or', 'dan', space, semicolon
      const parts = raw.split(/[,;]|(?:\bor\b)|(?:\bdan\b)|(?:\band\b)|\s+/i).map(p => p.trim()).filter(Boolean);
      if (parts.length < 2) {
        return {
          correct: false,
          feedback: l === 'bm'
            ? 'Soalan ini mempunyai 2 nilai jawapan. Sila pisahkan dengan koma (contoh: 2, -5).'
            : 'This question requires 2 values. Separate them with a comma (e.g., 2, -5).'
        };
      }
      const u1 = parseStudentNumber(parts[0]);
      const u2 = parseStudentNumber(parts[1]);
      const [c1, c2] = question.correctValue;
      const ordered = question.orderedPair === true;
      const matchDirect = Math.abs(u1 - c1) <= tol && Math.abs(u2 - c2) <= tol;
      const matchSwapped = !ordered && Math.abs(u1 - c2) <= tol && Math.abs(u2 - c1) <= tol;
      if (matchDirect || matchSwapped) {
        return {
          correct: true,
          feedback: l === 'bm'
            ? 'Syabas! Kedua-dua nilai tepat mengikut skema SPM!'
            : 'Excellent! Both values match the SPM marking scheme!'
        };
      }
      if (ordered && Math.abs(u1 - c2) <= tol && Math.abs(u2 - c1) <= tol) {
        return {
          correct: false,
          trapHit: true,
          feedback: l === 'bm'
            ? 'Hampir tepat! Nilai anda betul tetapi tertukar susunan pasangan tertib (x, y).'
            : 'Almost there! Your values are right, but the ordered pair (x, y) is swapped.'
        };
      }
      // Check sign error on pair
      if (Math.abs(u1 + c1) <= tol && Math.abs(u2 + c2) <= tol) {
        return {
          correct: false,
          trapHit: true,
          feedback: l === 'bm'
            ? 'Diagnostik Tanda (+/-): Nilai magnitud anda betul, tetapi tanda positif/negatif terbalik! Semak pemfaktoran (x - a)(x - b) = 0.'
            : 'Sign Diagnosis (+/-): Your magnitudes are right, but the signs are inverted! Check your factorization (x - a)(x - b) = 0.'
        };
      }
      return {
        correct: false,
        feedback: l === 'bm'
          ? 'Jawapan belum tepat. Klik "Petunjuk Langkah" untuk semak jalan kerja anda.'
          : 'Not quite accurate yet. Click "Step Hint" to check your working.'
      };
    }

    // Single numerical value
    const val = parseStudentNumber(raw);
    if (Number.isNaN(val)) {
      return {
        correct: false,
        feedback: l === 'bm'
          ? 'Format nombor tidak dikenali. Masukkan perpuluhan (cth: 3.25) atau pecahan (cth: 13/4).'
          : 'Number format not recognized. Enter a decimal (e.g., 3.25) or fraction (e.g., 13/4).'
      };
    }

    const target = Number(question.correctValue);
    const dynamicTol = Math.max(tol, Math.abs(target) * 0.005);

    if (Math.abs(val - target) <= dynamicTol) {
      return {
        correct: true,
        feedback: l === 'bm'
          ? 'Tepat 100%! Markah penuh [J1/A1] milik anda!'
          : '100% Accurate! Full [J1/A1] marks earned!'
      };
    }

    // Check question-specific traps first!
    if (Array.isArray(question.traps)) {
      for (const trap of question.traps) {
        const trapVal = Number(trap.value);
        if (Number.isFinite(trapVal) && Math.abs(val - trapVal) <= Math.max(tol, Math.abs(trapVal) * 0.01)) {
          return {
            correct: false,
            trapHit: true,
            feedback: t(trap.message, l)
          };
        }
      }
    }

    // Generic sign error check
    if (Math.abs(target) > 1e-6 && Math.abs(val + target) <= dynamicTol) {
      return {
        correct: false,
        trapHit: true,
        feedback: l === 'bm'
          ? 'Diagnostik Kesilapan Tanda (+/-): Angka anda sudah betul, tetapi tanda positif/negatif tersilap! Semak semula tanda dalam langkah gantian.'
          : 'Sign Error Detected (+/-): Your magnitude is right, but the positive/negative sign is flipped! Re-check signs during substitution.'
      };
    }

    return {
      correct: false,
      feedback: l === 'bm'
        ? 'Jawapan belum tepat. Cuba semak langkah pengiraan atau tekan "Petunjuk Langkah" untuk bimbingan.'
        : 'Not quite right yet. Check your calculation steps or click "Step Hint" for guided help.'
    };
  }

  // Offline-capable LaTeX Math Renderer (uses KaTeX if loaded, else rich semantic HTML math fallback)
  function fallbackTexToHtml(tex) {
    if (!tex) return '';
    let s = String(tex);
    // Clean basic LaTeX commands into readable HTML math
    s = s
      .replace(/\\text\{([^}]*)\}/g, '<span class="m-txt">$1</span>')
      .replace(/\\mathbf\{([^}]*)\}/g, '<strong>$1</strong>')
      .replace(/\\vec\{([^}]*)\}/g, '<span class="m-vec">$1&#8407;</span>')
      .replace(/\\hat\{\\mathbf\{([^}]*)\}\}/g, '<strong>$1&#770;</strong>')
      .replace(/\\hat\{([^}]*)\}/g, '$1&#770;')
      .replace(/\\bar\{([^}]*)\}/g, '<span style="text-decoration:overline">$1</span>')
      .replace(/\\frac\{([^{}]+)\}\{([^{}]+)\}/g, '<span class="m-frac"><span class="m-num">$1</span><span class="m-den">$2</span></span>')
      .replace(/\\frac\{([^{}]+)\}\{([^{}]+)\}/g, '<span class="m-frac"><span class="m-num">$1</span><span class="m-den">$2</span></span>')
      .replace(/\\sqrt\[([^\]]+)\]\{([^}]+)\}/g, '<sup>$1</sup>&radic;<span class="m-rad">($2)</span>')
      .replace(/\\sqrt\{([^}]+)\}/g, '&radic;<span class="m-rad">($1)</span>')
      .replace(/\^\{([^}]+)\}/g, '<sup>$1</sup>')
      .replace(/\^([0-9a-zA-Z+-])/g, '<sup>$1</sup>')
      .replace(/_\{([^}]+)\}/g, '<sub>$1</sub>')
      .replace(/_([0-9a-zA-Z])/g, '<sub>$1</sub>')
      .replace(/\\alpha/g, '&alpha;')
      .replace(/\\beta/g, '&beta;')
      .replace(/\\theta/g, '&theta;')
      .replace(/\\Delta/g, '&Delta;')
      .replace(/\\delta/g, '&delta;')
      .replace(/\\pi/g, '&pi;')
      .replace(/\\mu/g, '&mu;')
      .replace(/\\sigma/g, '&sigma;')
      .replace(/\\lambda/g, '&lambda;')
      .replace(/\\infty/g, '&infin;')
      .replace(/\\int/g, '&int;')
      .replace(/\\sum/g, '&sum;')
      .replace(/\\pm/g, '&plusmn;')
      .replace(/\\mp/g, '&#8723;')
      .replace(/\\times/g, '&times;')
      .replace(/\\div/g, '&divide;')
      .replace(/\\le|\\leq/g, '&le;')
      .replace(/\\ge|\\geq/g, '&ge;')
      .replace(/\\ne|\\neq/g, '&ne;')
      .replace(/\\approx/g, '&approx;')
      .replace(/\\implies/g, '&rArr;')
      .replace(/\\iff/g, '&hArr;')
      .replace(/\\to|\\rightarrow/g, '&rarr;')
      .replace(/\\mapsto/g, '&#8614;')
      .replace(/\\subseteq/g, '&sube;')
      .replace(/\\in/g, '&isin;')
      .replace(/\\cup/g, '&cup;')
      .replace(/\\cap/g, '&cap;')
      .replace(/\\circ/g, '&deg;')
      .replace(/\\left|\\right/g, '')
      .replace(/\\quad|\\qquad|\\,|\\;/g, ' ')
      .replace(/\\sin/g, 'sin')
      .replace(/\\cos/g, 'cos')
      .replace(/\\tan/g, 'tan')
      .replace(/\\sec/g, 'sec')
      .replace(/\\csc/g, 'csc')
      .replace(/\\cot/g, 'cot')
      .replace(/\\log/g, 'log')
      .replace(/\\ln/g, 'ln')
      .replace(/\\lim/g, 'lim');
    return '<span class="math-fallback">' + s + '</span>';
  }

  function renderTex(tex, displayMode = false) {
    if (!tex) return '';
    if (window.katex && typeof window.katex.renderToString === 'function') {
      try {
        return window.katex.renderToString(String(tex), {
          displayMode: displayMode,
          throwOnError: false,
          strict: false
        });
      } catch (e) {
        return fallbackTexToHtml(tex);
      }
    }
    return fallbackTexToHtml(tex);
  }

  // Render mixed text containing $$...$$, $...$, **bold**, *italic*, and `code` into clean HTML
  function renderMixed(text) {
    if (!text) return '';
    let str = String(text);
    const mathBlocks = [];

    // 1. Temporarily extract display math $$...$$ and inline math $...$ so markdown never corrupts math
    str = str.replace(/\$\$([\s\S]+?)\$\$/g, (_, m) => {
      const idx = mathBlocks.length;
      mathBlocks.push(renderTex(m.trim(), true));
      return '@@MATHBLOCK_' + idx + '@@';
    });
    str = str.replace(/\$([^$\n]+?)\$/g, (_, m) => {
      const idx = mathBlocks.length;
      mathBlocks.push(renderTex(m.trim(), false));
      return '@@MATHBLOCK_' + idx + '@@';
    });

    // 2. Convert inline markdown (`code`, **bold**, *italic*)
    str = str
      .replace(/`([^`\n]+)`/g, '<code class="m-code">$1</code>')
      .replace(/\*\*([\s\S]+?)\*\*/g, '<strong>$1</strong>')
      .replace(/(^|[^*])\*([^*\n]+)\*(?!\*)/g, '$1<em>$2</em>');

    // 3. Restore rendered math blocks
    str = str.replace(/@@MATHBLOCK_(\d+)@@/g, (_, i) => mathBlocks[Number(i)] || '');
    return str;
  }

  App.utils = {
    t,
    gcd,
    fracTex,
    round,
    roundStr,
    signedNum,
    polyTex,
    factorial,
    nPr,
    nCr,
    normalCDF,
    normalPDF,
    invNormalCDF,
    solve3x3,
    randInt,
    pick,
    parseStudentNumber,
    evaluateAnswer,
    renderTex,
    renderMixed
  };
})(window.AddMathApp);
