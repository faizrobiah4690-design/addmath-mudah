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
    if (!Number.isFinite(r)) return val.toExponential(3);
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

  function parseStudentAtom(atom) {
    const a = String(atom || '').trim();
    if (!a) return NaN;
    if (/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i.test(a)) {
      const n = Number(a);
      return Number.isFinite(n) ? n : NaN;
    }
    const sm = a.match(/^([+-]?)\s*sqrt\(([^)]+)\)$/i);
    if (sm) {
      const inner = sm[2].trim();
      if (!/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i.test(inner)) return NaN;
      const v = Number(inner);
      if (!Number.isFinite(v) || v < 0) return NaN;
      return (sm[1] === '-' ? -1 : 1) * Math.sqrt(v);
    }
    return NaN;
  }

  // Parse student numeric expression (supports fractions like -3/4, pi, sqrt(2), sqrt(2)/2)
  function parseStudentNumber(raw) {
    if (raw === null || raw === undefined) return NaN;
    let s = String(raw).trim().replace(/−/g, '-');
    if (!s) return NaN;

    // Strip at most ONE trailing '%' (reject '5%0', '50%%', '%50', '%')
    if (s.includes('%')) {
      if (!/^[^%]+%$/.test(s)) return NaN;
      s = s.slice(0, -1).trim();
      if (!s) return NaN;
    }

    // Validate comma grouping (only strip ',' when matching valid thousands groups like 1,000 or 1,234.56)
    if (s.includes(',')) {
      const parts = s.split('/');
      if (parts.length > 2) return NaN;
      const validCommaNumRe = /^[+-]?\d{1,3}(?:,\d{3})+(?:\.\d+)?$/;
      const cleanParts = parts.map((p) => {
        const tp = p.trim();
        if (!tp.includes(',')) return tp;
        return validCommaNumRe.test(tp) ? tp.replace(/,/g, '') : null;
      });
      if (cleanParts.some((p) => p === null)) return NaN;
      s = cleanParts.join('/');
    }

    s = s
      .replace(/(^|[^0-9.a-zA-Z])π(?![0-9.a-zA-Z])/gi, '$1' + String(Math.PI))
      .replace(/\bpi\b/gi, String(Math.PI))
      .trim();
    if (!s) return NaN;
    if (s.includes('/')) {
      const parts = s.split('/');
      if (parts.length !== 2) return NaN;
      const num = parseStudentAtom(parts[0]);
      const den = parseStudentAtom(parts[1]);
      if (!Number.isFinite(num) || !Number.isFinite(den) || den === 0) return NaN;
      const q = num / den;
      return Number.isFinite(q) ? q : NaN;
    }
    return parseStudentAtom(s);
  }

  // Smart Answer Evaluator + SPM Trap Detector
  function evaluateAnswer(question, userInput, lang) {
    const l = lang || App.lang || 'bm';
    const raw = (userInput === null || userInput === undefined) ? '' : String(userInput).trim();
    if (!raw) {
      return {
        correct: false,
        empty: true,
        feedback: l === 'bm' ? 'Sila masukkan jawapan anda terlebih dahulu.' : 'Please enter your answer first.'
      };
    }

    if (question.answerType === 'choice') {
      const cleanedChoice = String(raw).replace(/[).]/g, '').trim();
      const isOk = cleanedChoice === String(question.correctValue);
      if (!isOk && Array.isArray(question.traps)) {
        for (const trap of question.traps) {
          if (cleanedChoice === String(trap.value)) {
            return {
              correct: false,
              trapHit: true,
              feedback: t(trap.message, l)
            };
          }
        }
      }
      return {
        correct: isOk,
        feedback: isOk
          ? (l === 'bm' ? 'Tepat sekali! Konsep awak sangat kukuh.' : 'Spot on! Your conceptual understanding is solid.')
          : (l === 'bm' ? 'Kurang tepat. Cuba semak semula kata kunci soalan atau klik "Bimbing Langkah demi Langkah".' : 'Not quite right. Re-check the key condition or click "Guide Me Step-by-Step".')
      };
    }

    const tol = question.tolerance !== undefined ? question.tolerance : 0.05;

    if (question.answerType === 'pair') {
      // Expect two numbers separated primarily by comma, semicolon, 'or', 'dan', 'and' (fallback to whitespace)
      const primaryParts = raw.split(/[,;]|(?:\bor\b)|(?:\bdan\b)|(?:\band\b)/i).map(p => p.trim()).filter(Boolean);
      const parts = primaryParts.length >= 2
        ? primaryParts
        : (primaryParts.length === 1 ? primaryParts[0].split(/\s+/).map(p => p.trim()).filter(Boolean) : []);
      if (parts.length < 2) {
        return {
          correct: false,
          feedback: l === 'bm'
            ? 'Soalan ini mempunyai 2 nilai jawapan. Sila pisahkan dengan koma (contoh: 2, -5).'
            : 'This question requires 2 values. Separate them with a comma (e.g., 2, -5).'
        };
      }
      if (parts.length > 2) {
        return {
          correct: false,
          feedback: l === 'bm'
            ? 'Soalan ini memerlukan tepat 2 nilai sahaja (contoh: 2, -5).'
            : 'This question requires exactly 2 values (e.g., 2, -5).'
        };
      }
      const u1 = parseStudentNumber(parts[0]);
      const u2 = parseStudentNumber(parts[1]);
      if (!Number.isFinite(u1) || !Number.isFinite(u2)) {
        return {
          correct: false,
          feedback: l === 'bm'
            ? 'Format nombor tidak dikenali. Masukkan dua nombor sah dipisahkan dengan koma (contoh: 2, -5).'
            : 'Number format not recognized. Enter two valid numbers separated by a comma (e.g., 2, -5).'
        };
      }
      const [c1, c2] = question.correctValue;
      const ordered = question.orderedPair === true;
      const tol1 = Math.max(tol, Math.abs(c1) * 0.005);
      const tol2 = Math.max(tol, Math.abs(c2) * 0.005);
      const matchDirect = Math.abs(u1 - c1) <= tol1 && Math.abs(u2 - c2) <= tol2;
      const matchSwapped = !ordered && Math.abs(u1 - c2) <= tol2 && Math.abs(u2 - c1) <= tol1;
      if (matchDirect || matchSwapped) {
        return {
          correct: true,
          feedback: l === 'bm'
            ? 'Syabas! Kedua-dua nilai tepat mengikut skema SPM!'
            : 'Excellent! Both values match the SPM marking scheme!'
        };
      }
      if (ordered && Math.abs(u1 - c2) <= tol2 && Math.abs(u2 - c1) <= tol1) {
        return {
          correct: false,
          trapHit: true,
          feedback: l === 'bm'
            ? 'Hampir tepat! Nilai awak betul tetapi tertukar susunan koordinat (x, y).'
            : 'Almost there! Your values are right, but the ordered pair (x, y) is swapped.'
        };
      }
      // Check question-specific traps for pair (both [t1, t2] pairs and scalar traps)
      if (Array.isArray(question.traps)) {
        for (const trap of question.traps) {
          if (Array.isArray(trap.value) && trap.value.length >= 2) {
            const t1 = Number(trap.value[0]);
            const t2 = Number(trap.value[1]);
            if (Number.isFinite(t1) && Number.isFinite(t2)) {
              const trapTol1 = Math.max(tol, Math.abs(t1) * 0.01);
              const trapTol2 = Math.max(tol, Math.abs(t2) * 0.01);
              const hitDirect = Math.abs(u1 - t1) <= trapTol1 && Math.abs(u2 - t2) <= trapTol2;
              const hitSwapped = !ordered && Math.abs(u1 - t2) <= trapTol2 && Math.abs(u2 - t1) <= trapTol1;
              if (hitDirect || hitSwapped) {
                return {
                  correct: false,
                  trapHit: true,
                  feedback: t(trap.message, l)
                };
              }
            }
          } else if (trap.value !== null && trap.value !== undefined && trap.value !== '') {
            const trapVal = Number(trap.value);
            if (Number.isFinite(trapVal)) {
              const trapTol = Math.max(tol, Math.abs(trapVal) * 0.01);
              if (Math.abs(u1 - trapVal) <= trapTol || Math.abs(u2 - trapVal) <= trapTol) {
                return {
                  correct: false,
                  trapHit: true,
                  feedback: t(trap.message, l)
                };
              }
            }
          }
        }
      }
      // Check sign error on pair (direct and unordered swapped)
      const signFlipDirect = Math.abs(u1 + c1) <= tol1 && Math.abs(u2 + c2) <= tol2;
      const signFlipSwapped = !ordered && Math.abs(u1 + c2) <= tol2 && Math.abs(u2 + c1) <= tol1;
      if (signFlipDirect || signFlipSwapped) {
        return {
          correct: false,
          trapHit: true,
          feedback: l === 'bm'
            ? 'Cuai Tanda (+/-): Nilai angka awak betul, tetapi tanda positif/negatif terbalik! Semak semula pemfaktoran (x - a)(x - b) = 0.'
            : 'Sign Diagnosis (+/-): Your magnitudes are right, but the signs are inverted! Check your factorization (x - a)(x - b) = 0.'
        };
      }
      return {
        correct: false,
        feedback: l === 'bm'
          ? 'Jawapan belum tepat. Klik "Bimbing Langkah demi Langkah" untuk semak jalan kerja awak.'
          : 'Not quite accurate yet. Click "Guide Me Step-by-Step" to check your working.'
      };
    }

    // Single numerical value
    const val = parseStudentNumber(raw);
    if (!Number.isFinite(val)) {
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
        if (trap.value === null || trap.value === undefined || trap.value === '') continue;
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
          ? 'Cuai Tanda (+/-): Angka awak sudah betul, tetapi tanda positif/negatif terbalik! Semak semula tanda semasa ganti nilai.'
          : 'Sign Error Detected (+/-): Your magnitude is right, but the positive/negative sign is flipped! Re-check signs during substitution.'
      };
    }

    return {
      correct: false,
      feedback: l === 'bm'
        ? 'Jawapan belum tepat. Cuba semak langkah kiraan atau tekan "Bimbing Langkah demi Langkah".'
        : 'Not quite right yet. Check your calculation steps or click "Guide Me Step-by-Step".'
    };
  }

  // Offline-capable LaTeX Math Renderer (uses KaTeX if loaded, else rich semantic HTML math fallback)
  function fallbackTexToHtml(tex) {
    if (!tex) return '';
    // Stage 1: Escape raw < and > before injecting HTML tags
    let s = String(tex)
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');

    // Stage 2: Expand \begin{cases}, \begin{*matrix}, and remaining line breaks \\
    s = s.replace(/\\begin\{cases\}([\s\S]*?)\\end\{cases\}/g, (_, body) => {
      const rows = body.split(/\\\\/)
        .map(r => r.replace(/(^|[^\\])&(?!lt;|gt;|amp;|#\d+;)/g, '$1, ').trim())
        .filter(Boolean);
      return '&#123; <span class="m-cases" style="display:inline-flex;flex-direction:column;vertical-align:middle;text-align:left;">' +
        rows.map(r => '<span>' + r + '</span>').join('') +
        '</span>';
    });
    s = s.replace(/\\begin\{(p|b|v|V)?matrix\}([\s\S]*?)\\end\{\1?matrix\}/g, (_, kind, body) => {
      const lBr = kind === 'b' ? '[' : (kind === 'v' || kind === 'V' ? '|' : '(');
      const rBr = kind === 'b' ? ']' : (kind === 'v' || kind === 'V' ? '|' : ')');
      const rows = body.split(/\\\\/).map(r => {
        const cols = r.replace(/\\&/g, '\u0001AMP\u0001')
          .split(/&(?!lt;|gt;|amp;|#\d+;)/)
          .map(c => c.replace(/\u0001AMP\u0001/g, '\\&').trim());
        return '<span>' + cols.join(' &nbsp; ') + '</span>';
      }).filter(Boolean);
      return lBr + '<span class="m-matrix" style="display:inline-flex;flex-direction:column;vertical-align:middle;text-align:center;">' +
        rows.join('') +
        '</span>' + rBr;
    });
    s = s.replace(/\\\\/g, ' ');

    // Stage 3: Handle \not, escaped punctuation (\&, \{, \}), and TeX spacing
    s = s
      .replace(/\\not\s*&lt;/g, '&#8814;')
      .replace(/\\not\s*&gt;/g, '&#8815;')
      .replace(/\\not\s*=/g, '&ne;')
      .replace(/\\not(?![a-zA-Z])/g, '&#172;')
      .replace(/\\&/g, '&amp;')
      .replace(/\\\{/g, '&#123;')
      .replace(/\\\}/g, '&#125;')
      .replace(/\\qquad(?![a-zA-Z])|\\quad(?![a-zA-Z])/g, ' ')
      .replace(/\\[,;: ]/g, ' ')
      .replace(/\\!/g, '');

    // Stage 4: Expand leaf brace wrappers (multi-pass so nested \underset{\sim}{\mathbf{a}} or \xrightarrow{\text{...}} resolve cleanly)
    function applyTexBraceWrappers(str) {
      return str
        .replace(/\\phantom\{[^{}]*\}/g, '&#9633;')
        .replace(/\\mathbb\{([^{}]*)\}/g, (_, ch) => {
          const map = { R: '&#8477;', Z: '&#8484;', N: '&#8469;', Q: '&#8474;' };
          return map[ch] || ch;
        })
        .replace(/\\hat\{\\mathbf\{([^{}]*)\}\}/g, '<strong>$1&#770;</strong>')
        .replace(/\\text\{([^{}]*)\}/g, '<span class="m-txt">$1</span>')
        .replace(/\\mathbf\{([^{}]*)\}/g, '<strong>$1</strong>')
        .replace(/\\overrightarrow\{([^{}]*)\}/g, '<span class="m-vec">$1&#8407;</span>')
        .replace(/\\vec\{([^{}]*)\}/g, '<span class="m-vec">$1&#8407;</span>')
        .replace(/\\hat\{([^{}]*)\}/g, '$1&#770;')
        .replace(/\\bar\{([^{}]*)\}/g, '<span style="text-decoration:overline">$1</span>')
        .replace(/\\overline\{([^{}]*)\}/g, '<span style="text-decoration:overline">$1</span>')
        .replace(/\\underset\{(?:\\sim|&sim;)\}\{([^{}]*)\}/g, '<span style="text-decoration:underline">$1</span>')
        .replace(/\\underset\{([^{}]*)\}\{([^{}]*)\}/g, '$2')
        .replace(/\\xrightarrow(?:\[[^\]]*\])?\{([^{}]*)\}/g, '&#8594;<sup>$1</sup> ');
    }

    for (let pass = 0; pass < 3; pass++) {
      const prev = s;
      s = applyTexBraceWrappers(s);
      if (s === prev) break;
    }

    // Stage 5: Convert delimiters, Greek letters, symbols, operators (before function names) with (?![a-zA-Z]) boundaries
    s = s
      .replace(/\\left\.|\\right\./g, '')
      .replace(/\\(?:left|right|Big|big)(?![a-zA-Z])/g, '')
      .replace(/\\alpha(?![a-zA-Z])/g, '&alpha;')
      .replace(/\\beta(?![a-zA-Z])/g, '&beta;')
      .replace(/\\theta(?![a-zA-Z])/g, '&theta;')
      .replace(/\\Delta(?![a-zA-Z])/g, '&Delta;')
      .replace(/\\delta(?![a-zA-Z])/g, '&delta;')
      .replace(/\\pi(?![a-zA-Z])/g, '&pi;')
      .replace(/\\mu(?![a-zA-Z])/g, '&mu;')
      .replace(/\\sigma(?![a-zA-Z])/g, '&sigma;')
      .replace(/\\lambda(?![a-zA-Z])/g, '&lambda;')
      .replace(/\\Phi(?![a-zA-Z])/g, '&Phi;')
      .replace(/\\checkmark(?![a-zA-Z])/g, '&#10003;')
      .replace(/\\infty(?![a-zA-Z])/g, '&infin;')
      .replace(/\\int(?![a-zA-Z])/g, '&int;')
      .replace(/\\sum(?![a-zA-Z])/g, '&sum;')
      .replace(/\\pm(?![a-zA-Z])/g, '&plusmn;')
      .replace(/\\mp(?![a-zA-Z])/g, '&#8723;')
      .replace(/\\times(?![a-zA-Z])/g, '&times;')
      .replace(/\\div(?![a-zA-Z])/g, '&divide;')
      .replace(/\\cdot(?![a-zA-Z])/g, '&middot;')
      .replace(/\\cdots(?![a-zA-Z])/g, '&#8943;')
      .replace(/\\dots(?![a-zA-Z])/g, '&hellip;')
      .replace(/\\(?:le|leq)(?![a-zA-Z])/g, '&le;')
      .replace(/\\(?:ge|geq)(?![a-zA-Z])/g, '&ge;')
      .replace(/\\(?:ne|neq)(?![a-zA-Z])/g, '&ne;')
      .replace(/\\approx(?![a-zA-Z])/g, '&approx;')
      .replace(/\\(?:implies|Rightarrow)(?![a-zA-Z])/g, '&rArr;')
      .replace(/\\iff(?![a-zA-Z])/g, '&hArr;')
      .replace(/\\leftrightarrow(?![a-zA-Z])/g, '&harr;')
      .replace(/\\(?:to|rightarrow)(?![a-zA-Z])/g, '&rarr;')
      .replace(/\\mapsto(?![a-zA-Z])/g, '&#8614;')
      .replace(/\\subseteq(?![a-zA-Z])/g, '&sube;')
      .replace(/\\in(?![a-zA-Z])/g, '&isin;')
      .replace(/\\cup(?![a-zA-Z])/g, '&cup;')
      .replace(/\\cap(?![a-zA-Z])/g, '&cap;')
      .replace(/\\circ(?![a-zA-Z])/g, '&deg;')
      .replace(/\\therefore(?![a-zA-Z])/g, '&there4;')
      .replace(/\\because(?![a-zA-Z])/g, '&becaus;')
      .replace(/\\mid(?![a-zA-Z])/g, '&#8739;')
      .replace(/\\cong(?![a-zA-Z])/g, '&cong;')
      .replace(/\\sim(?![a-zA-Z])/g, '&sim;')
      .replace(/\\parallel(?![a-zA-Z])/g, '&#8741;')
      .replace(/\\perp(?![a-zA-Z])/g, '&perp;')
      .replace(/\\angle(?![a-zA-Z])/g, '&ang;')
      .replace(/\\triangle(?![a-zA-Z])/g, '&#9651;')
      .replace(/\\searrow(?![a-zA-Z])/g, '&#8600;')
      .replace(/\\swarrow(?![a-zA-Z])/g, '&#8601;')
      .replace(/\\(sin|cos|tan|sec|csc|cot|log|ln|lim|max|min)(?![a-zA-Z])/g, '$1');

    // Stage 6: Strip empty {} anchors, resolve single-char ^/_ & entity ^/_, and run bottom-up nesting loop
    s = s
      .replace(/\{\}/g, '')
      .replace(/\^(&deg;)/g, '$1')
      .replace(/\^(&[a-zA-Z0-9#]+;)/g, '<sup>$1</sup>')
      .replace(/_(&[a-zA-Z0-9#]+;)/g, '<sub>$1</sub>')
      .replace(/\^([0-9a-zA-Z+-])/g, '<sup>$1</sup>')
      .replace(/_([0-9a-zA-Z])/g, '<sub>$1</sub>');

    for (let pass = 0; pass < 8; pass++) {
      const prev = s;
      s = applyTexBraceWrappers(s)
        .replace(/\\sqrt\[([^\]]+)\]\{([^{}]*)\}/g, '<sup>$1</sup>&radic;<span class="m-rad">($2)</span>')
        .replace(/\\sqrt\{([^{}]*)\}/g, '&radic;<span class="m-rad">($1)</span>')
        .replace(/\^\{([^{}]*)\}/g, '<sup>$1</sup>')
        .replace(/_\{([^{}]*)\}/g, '<sub>$1</sub>')
        .replace(/\\frac\{([^{}]*)\}\{([^{}]*)\}/g, '<span class="m-frac"><span class="m-num">$1</span><span class="m-den">$2</span></span>')
        .replace(/\\binom\{([^{}]*)\}\{([^{}]*)\}/g, '(<span class="m-frac"><span class="m-num" style="border-bottom:none">$1</span><span class="m-den">$2</span></span>)');
      if (s === prev) break;
    }

    // Strip residual non-command grouping braces (e.g. |{-2}| -> |-2|) while preserving unknown \cmd{...}
    for (let pass = 0; pass < 4; pass++) {
      const prev = s;
      s = s.replace(/(^|[^\\a-zA-Z])\{([^{}]*)\}/g, '$1$2');
      if (s === prev) break;
    }

    return '<span class="math-fallback">' + s + '</span>';
  }

  // Pre-sanitize TeX so prefix superscripts (^nC_r, \,^5P_3) and unescaped '&' inside \text{...} never trigger KaTeX errors
  function sanitizeTex(rawTex) {
    if (!rawTex) return '';
    let s = String(rawTex);
    // 1. Escape unescaped '&' inside \text{...}
    s = s.replace(/\\text\{([^}]*)\}/g, (_, inner) => '\\text{' + inner.replace(/(^|[^\\])&/g, '$1\\&') + '}');
    // 2. Escape standalone '&' if there is no \begin{...} matrix/aligned environment
    if (!/\\begin\{/.test(s)) {
      s = s.replace(/(^|[^\\])&/g, '$1\\&');
    }
    // 3. Anchor prefix superscripts for nPr / nCr (e.g. \,^nC_r, ^5P_3, \frac{^4C_2}{^9C_2} -> {}^nC_r)
    s = s.replace(/\\,\s*\^(\{[0-9a-zA-Z+-]+\}|[0-9a-zA-Z]+)/g, '\\,{}^$1');
    s = s.replace(/(^|[{\s(=+\-:,;/])\^(\{[0-9a-zA-Z+-]+\}|[0-9a-zA-Z]+)(?=[PC])/g, '$1{}^$2');
    return s;
  }

  function renderTex(tex, displayMode = false) {
    if (!tex) return '';
    const clean = sanitizeTex(tex);
    if (window.katex && typeof window.katex.renderToString === 'function') {
      try {
        return window.katex.renderToString(clean, {
          displayMode: displayMode,
          throwOnError: false,
          strict: false
        });
      } catch (e) {
        return fallbackTexToHtml(clean);
      }
    }
    return fallbackTexToHtml(clean);
  }

  // Render mixed text containing $$...$$, $...$, **bold**, *italic*, and `code` into clean HTML
  function renderMixed(text) {
    if (text === null || text === undefined || text === '') return '';
    let str = String(text).replace(/\u0000/g, '');
    const mathBlocks = [];

    // 1. Temporarily extract display math $$...$$ and inline math $...$ so escaping/markdown never corrupts math
    str = str.replace(/\$\$([\s\S]+?)\$\$/g, (_, m) => {
      const idx = mathBlocks.length;
      mathBlocks.push(renderTex(m.trim(), true));
      return '\u0000M' + idx + '\u0000';
    });
    str = str.replace(/\$([^$\n]+?)\$/g, (_, m) => {
      const idx = mathBlocks.length;
      mathBlocks.push(renderTex(m.trim(), false));
      return '\u0000M' + idx + '\u0000';
    });

    // 2. Escape all raw HTML outside math blocks (zero HTML passthrough / XSS safe)
    str = str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');

    // 3. Extract inline `code` before bold/italic so markdown never crosses or corrupts <code> tags
    const codeBlocks = [];
    str = str.replace(/`([^`\n]+)`/g, (_, code) => {
      const idx = codeBlocks.length;
      codeBlocks.push('<code class="m-code">' + code + '</code>');
      return '\u0000C' + idx + '\u0000';
    });

    // 4. Convert bold/italic markdown (**bold**, *italic*)
    str = str
      .replace(/\*\*([\s\S]+?)\*\*/g, '<strong>$1</strong>')
      .replace(/(^|[^*])\*([^*\n]+)\*(?!\*)/g, '$1<em>$2</em>');

    // 5. Restore inline code and rendered math blocks
    str = str
      .replace(/\u0000C(\d+)\u0000/g, (_, i) => codeBlocks[Number(i)] || '')
      .replace(/\u0000M(\d+)\u0000/g, (_, i) => mathBlocks[Number(i)] || '');
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
