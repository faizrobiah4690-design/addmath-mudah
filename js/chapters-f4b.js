/**
 * AddMath Mudah — Fasa 2: Tingkatan 4 Bab 6 hingga Bab 10 (Lengkap & Dwibahasa BM / EN)
 * Bab 6: Hukum Linear | Bab 7: Geometri Koordinat | Bab 8: Vektor | Bab 9: Penyelesaian Segi Tiga | Bab 10: Nombor Indeks
 */
window.AddMathApp = window.AddMathApp || {};
window.AddMathApp.chapters = window.AddMathApp.chapters || [];

(function (App) {
  'use strict';
  const U = App.utils;

  const f4Stage2 = [
    // =========================================================================
    // FORM 4 CHAPTER 6: LINEAR LAW / HUKUM LINEAR
    // =========================================================================
    {
      id: 'f4-c6',
      stage: 2,
      unlocked: true,
      form: 4,
      num: 6,
      code: { bm: 'T4 • Bab 6', en: 'F4 • Ch 6' },
      icon: 'Y=mX',
      color: '#06b6d4',
      category: 'algebra',
      title: { bm: 'Hukum Linear', en: 'Linear Law' },
      subtitle: {
        bm: 'Penukaran persamaan tak linear kepada Y = mX + C & garis penyuaian terbaik',
        en: 'Data linearization to Y = mX + C & line of best fit extraction'
      },
      spmWeight: { bm: 'Kertas 1 & Kertas 2 Bhg B (10 markah graf!)', en: 'Paper 1 & Paper 2 Sec B (10-mark graph!)' },
      concepts: [
        {
          title: { bm: '1. Penukaran Tak Linear kepada Y = mX + C', en: '1. Reduction of Non-Linear Relations to Y = mX + C' },
          body: {
            bm: 'Ubah suai persamaan lengkung supaya berbentuk garis lurus $Y = mX + C$, dengan keadaan paksi mencancang $Y$ dan paksi mengufuk $X$ mengandungi $x$ dan/atau $y$, manakala kecerunan $m$ dan pintasan-$Y$ ($C$) **wajib bebas daripada $x$ dan $y$** (hanya pemalar!).',
            en: 'Transform non-linear curves into $Y = mX + C$ where axes $Y$ and $X$ contain variables $x, y$, while gradient $m$ and $Y$-intercept $C$ contain **only constants** (never $x$ or $y$!).'
          },
          formulas: [
            { label: { bm: 'Bahagi dengan x (Kuadratik)', en: 'Divide by x (Quadratic)' }, tex: 'y = ax^2 + bx \\xrightarrow{\\div x} \\frac{y}{x} = ax + b \\quad \\left(Y=\\frac{y}{x},\\; X=x,\\; m=a,\\; C=b\\right)' },
            { label: { bm: 'Ambil log₁₀ (Eksponen)', en: 'Apply log₁₀ (Exponential)' }, tex: 'y = ab^x \\implies \\log_{10} y = (\\log_{10} b)x + \\log_{10} a' },
            { label: { bm: 'Ambil log₁₀ (Kuasa)', en: 'Apply log₁₀ (Power)' }, tex: 'y = ax^b \\implies \\log_{10} y = b(\\log_{10} x) + \\log_{10} a' }
          ],
          tip: {
            bm: 'Semak m dan C anda: jika masih ada huruf x atau y di dalam m atau C, penukaran anda BELUM selesai!',
            en: 'Always check m and C: if x or y still appears inside m or C, your reduction is incomplete!'
          }
        },
        {
          title: { bm: '2. Prinsip Garis Penyuaian Terbaik', en: '2. Line of Best Fit Principles' },
          body: {
            bm: 'Lukis garis lurus selanjar yang melalui seberapa banyak titik terplot, dengan titik selebihnya teragih seimbang di kiri dan kanan garis. Untuk mengira $m$, pilih **dua titik di atas garis yang dilukis**, bukan titik mentah jadual yang terkeluar daripada garis!',
            en: 'Draw a smooth straight line passing through as many points as possible with remaining points balanced on both sides. Compute $m$ from **two points lying directly on the drawn line**.'
          },
          formulas: [
            { label: { bm: 'Kecerunan & Pintasan', en: 'Gradient & Intercept' }, tex: 'm = \\frac{Y_2 - Y_1}{X_2 - X_1}, \\qquad C = Y_1 - mX_1' }
          ],
          tip: {
            bm: 'Jika paksi-X tidak bermula pada X = 0 pada kertas graf, jangan baca pintasan pada tepi graf — kira C = Y₁ − mX₁ secara algebra!',
            en: 'If the X-axis does not start at X = 0, do NOT read C off the vertical border — calculate C = Y₁ − mX₁ algebraically!'
          }
        }
      ],
      traps: [
        {
          title: { bm: 'Tertinggal log₁₀ Semasa Mencari Pemalar Asal', en: 'Forgetting Antilog When Recovering Original Constants' },
          desc: {
            bm: 'Jika C = log₁₀ a = 2, maka a = 10² = 100 (bukan a = 2!).',
            en: 'If C = log₁₀ a = 2, then a = 10² = 100 (never leave a = 2!).'
          }
        }
      ],
      solvers: [
        {
          id: 'lin-law-solver',
          title: { bm: 'Solver Garis Penyuaian Terbaik (Dua Titik pada Y = mX + C)', en: 'Line of Best Fit Extractor (Two Points on Y = mX + C)' },
          desc: {
            bm: 'Kira kecerunan m, pintasan-Y (C), dan nilai pemalar asal bagi log₁₀ y = (log₁₀ b)x + log₁₀ a.',
            en: 'Compute gradient m, Y-intercept C, and recover constants for log₁₀ y = (log₁₀ b)x + log₁₀ a.'
          },
          inputs: [
            { id: 'x1', label: 'X₁', default: 1 },
            { id: 'y1', label: 'Y₁', default: 1.3 },
            { id: 'x2', label: 'X₂', default: 5 },
            { id: 'y2', label: 'Y₂', default: 2.5 }
          ],
          solve: function (v, lang) {
            const x1 = Number(v.x1), y1 = Number(v.y1), x2 = Number(v.x2), y2 = Number(v.y2);
            if (x1 === x2) return { problemTex: 'X_1 = X_2', steps: [], finalTex: '\\text{Garis mencancang}' };
            const m = (y2 - y1) / (x2 - x1);
            const C = y1 - m * x1;
            const aVal = Math.pow(10, C);
            const bVal = Math.pow(10, m);
            return {
              problemTex: `A(${x1}, ${y1}), \\; B(${x2}, ${y2}) \\text{ pada graf } \\log_{10} y \\text{ lawan } x`,
              steps: [
                { badge: 'K1', title: lang === 'bm' ? 'Langkah 1: Kira kecerunan m' : 'Step 1: Compute gradient m', tex: `m = \\frac{${y2} - (${y1})}{${x2} - (${x1})} = ${U.roundStr(m, 4)}`, why: lang === 'bm' ? 'Perubahan Y dibahagi perubahan X.' : 'Rise in Y over run in X.' },
                { badge: 'K1', title: lang === 'bm' ? 'Langkah 2: Kira pintasan-Y (C)' : 'Step 2: Compute Y-intercept C', tex: `C = ${y1} - (${U.roundStr(m, 4)})(${x1}) = ${U.roundStr(C, 4)}`, why: lang === 'bm' ? 'Gantikan titik pertama ke dalam Y = mX + C.' : 'Substitute point 1 into Y = mX + C.' },
                { badge: 'J1', title: lang === 'bm' ? 'Langkah 3: Dapatkan a dan b bagi y = abˣ' : 'Step 3: Recover a and b for y = abˣ', tex: `\\log_{10} b = ${U.roundStr(m, 4)} \\implies b = 10^{${U.roundStr(m, 4)}} = ${U.roundStr(bVal, 4)}; \\quad a = 10^{${U.roundStr(C, 4)}} = ${U.roundStr(aVal, 4)}`, why: lang === 'bm' ? 'Ambil antilog asas 10.' : 'Take base-10 antilog.' }
              ],
              finalTex: `m = ${U.roundStr(m, 4)},\\; C = ${U.roundStr(C, 4)} \\implies a = ${U.roundStr(aVal, 3)},\\; b = ${U.roundStr(bVal, 3)}`
            };
          }
        }
      ],
      generateQuestion: function (tier, lang) {
        if (tier === 1) {
          // y = px^2 + qx -> y/x against x has gradient m and intercept C -> find p + q
          const p = U.randInt(2, 7);
          const q = U.randInt(-6, 8, true);
          const x1 = 1, y1 = p * 1 + q;
          const x2 = 4, y2 = p * 4 + q;
          return {
            tier: 1, tpLabel: 'TP1–TP2', subtopic: { bm: '6.1 Kecerunan & Pintasan Y = mX + C', en: '6.1 Gradient & Intercept of Y = mX + C' }, marks: 3,
            prompt: lang === 'bm'
              ? `Pemboleh ubah $x$ dan $y$ dihubungkan oleh $y = px^2 + qx$. Graf garis lurus $\\frac{y}{x}$ melawan $x$ melalui titik $(${x1}, ${y1})$ dan $(${x2}, ${y2})$. Cari nilai pemalar **$p$**.`
              : `Variables $x$ and $y$ are related by $y = px^2 + qx$. The straight-line graph of $\\frac{y}{x}$ against $x$ passes through $(${x1}, ${y1})$ and $(${x2}, ${y2})$. Find the constant **$p$**.`,
            answerType: 'number', correctValue: p, displayAnswerTex: `p = ${p} \\quad (q = ${q})`,
            intentMeta: { given: `y/x = px + q, titik (${x1},${y1}) & (${x2},${y2})`, goal: 'Cari kecerunan p', conceptRule: 'Bahagi x: y/x = px + q, maka p = kecerunan m' },
            guidedSteps: [
              { prompt: { bm: `Apabila $y = px^2 + qx$ dibahagi dengan $x$, kita dapat $\\frac{y}{x} = px + q$. Maka $p$ ialah kecerunan garis! Kira $m = \\frac{${y2} - (${y1})}{${x2} - ${x1}}$:`, en: `Dividing by $x$ gives $\\frac{y}{x} = px + q$, so $p$ is the gradient! Compute $m = \\frac{${y2} - (${y1})}{${x2} - ${x1}}$:` }, expected: p, hint: { bm: `(${y2 - y1}) ÷ 3 = ${p}.`, en: `(${y2 - y1}) ÷ 3 = ${p}.` } }
            ],
            traps: [{ value: q, message: { bm: `Diagnostik Pemalar [P]: ${q} ialah pintasan-Y (q), bukannya kecerunan p!`, en: `Constant Diagnosis [P]: ${q} is Y-intercept q, whereas p is the gradient!` } }],
            hints: [lang === 'bm' ? `Bahagi persamaan dengan $x$: $\\frac{y}{x} = px + q$.` : `Divide by $x$: $\\frac{y}{x} = px + q$.`],
            steps: [
              { badge: 'P1', title: lang === 'bm' ? 'Tukarkan ke bentuk linear' : 'Reduce to linear form', tex: `\\frac{y}{x} = px + q \\implies m = p`, why: lang === 'bm' ? 'Bandingkan dengan Y = mX + C.' : 'Compare with Y = mX + C.' },
              { badge: 'J1', title: lang === 'bm' ? 'Kira kecerunan p' : 'Compute gradient p', tex: `p = \\frac{${y2} - (${y1})}{${x2} - ${x1}} = ${p}`, why: lang === 'bm' ? 'Rumus kecerunan dua titik.' : 'Two-point gradient formula.' }
            ]
          };
        } else if (tier === 2) {
          // y = ab^x -> log_10 y vs x has Y-intercept C -> find a = 10^C
          const cExp = U.pick([2, 3]);
          const aAns = Math.pow(10, cExp);
          const mGrad = U.pick([0.5, 1, 2]);
          return {
            tier: 2, tpLabel: 'TP3–TP4', subtopic: { bm: '6.1 Transformasi Logaritma y = abˣ', en: '6.1 Logarithmic Linearization y = abˣ' }, marks: 4,
            prompt: lang === 'bm'
              ? `Pemboleh ubah $x$ dan $y$ dihubungkan oleh persamaan tak linear $y = ab^x$. Apabila graf $\\log_{10} y$ melawan $x$ diplotkan, garis lurus yang diperoleh mempunyai kecerunan $${mGrad}$ dan pintasan-$Y$ bernilai $${cExp}$. Cari nilai pemalar **$a$**.`
              : `Variables $x$ and $y$ satisfy $y = ab^x$. When $\\log_{10} y$ is plotted against $x$, the straight line has gradient $${mGrad}$ and $Y$-intercept $${cExp}$. Find the exact value of **$a$**.`,
            answerType: 'number', correctValue: aAns, displayAnswerTex: `a = 10^{${cExp}} = ${aAns}`,
            intentMeta: { given: `log₁₀ y = (log₁₀ b)x + log₁₀ a, C = ${cExp}`, goal: `a = 10^${cExp}`, conceptRule: 'Pintasan-Y C = log₁₀ a ⟹ a = 10^C' },
            guidedSteps: [
              { prompt: { bm: `Ambil $\\log_{10}$ pada kedua-dua belah: $\\log_{10} y = (\\log_{10} b)x + \\log_{10} a$. Pintasan-$Y$ ialah $\\log_{10} a = ${cExp}$. Maka berapakah nilai $a = 10^{${cExp}}$?`, en: `Taking $\\log_{10}$ gives $\\log_{10} y = (\\log_{10} b)x + \\log_{10} a$, so $\\log_{10} a = ${cExp}$. What is $a = 10^{${cExp}}$?` }, expected: aAns, hint: { bm: `10 kuasa ${cExp} = ${aAns}.`, en: `10 to the power of ${cExp} = ${aAns}.` } }
            ],
            traps: [{ value: cExp, message: { bm: `Diagnostik Antilog [K]: ${cExp} ialah nilai log₁₀ a, bukannya nilai a! Tukarkan kepada a = 10^${cExp} = ${aAns}.`, en: `Antilog Diagnosis [K]: ${cExp} is log₁₀ a! Take antilog: a = 10^${cExp} = ${aAns}.` } }],
            hints: [lang === 'bm' ? `Tulis $\\log_{10} y = (\\log_{10} b)x + \\log_{10} a$, jadi $\\log_{10} a = ${cExp}$.` : `Write $\\log_{10} y = (\\log_{10} b)x + \\log_{10} a$, so $\\log_{10} a = ${cExp}$.`],
            steps: [
              { badge: 'K1', title: lang === 'bm' ? 'Linearkan dengan log₁₀' : 'Linearize using log₁₀', tex: `\\log_{10} y = (\\log_{10} b)x + \\log_{10} a`, why: lang === 'bm' ? 'Gunakan hukum hasil darab & kuasa logaritma.' : 'Apply log product and power laws.' },
              { badge: 'J1', title: lang === 'bm' ? 'Bandingkan pintasan-Y' : 'Match Y-intercept', tex: `\\log_{10} a = ${cExp} \\implies a = 10^{${cExp}} = ${aAns}`, why: lang === 'bm' ? 'Tukar bentuk log kepada indeks.' : 'Convert from log to index form.' }
            ]
          };
        } else {
          // KBAT: xy = px^2 + q -> divide by x -> y = px + q(1/x) OR divide by x^2 -> y/x = p + q(1/x^2). Let's use y/sqrt(x) or xy = ax + b!
          // xy = ax + b -> y = b(1/x) + a ! Classic trap where gradient is b and intercept is a!
          const aVal = U.randInt(3, 9);
          const bVal = U.pick([4, 6, 8, -4]);
          const X1 = 1, Y1 = bVal * 1 + aVal;
          const X2 = 3, Y2 = bVal * 3 + aVal;
          return {
            tier: 3, tpLabel: 'TP5–TP6 (KBAT)', subtopic: { bm: '6.1 Pemalar Songsang xy = ax + b', en: '6.1 Reciprocal Axis xy = ax + b' }, marks: 4,
            prompt: lang === 'bm'
              ? `Diberi hubungan tak linear $xy = ax + b$. Apabila graf $y$ melawan $\\frac{1}{x}$ diplotkan, garis lurus melalui titik $(${X1}, ${Y1})$ dan $(${X2}, ${Y2})$. Cari nilai bagi **$a$**.`
              : `Given the non-linear relation $xy = ax + b$. When $y$ is plotted against $\\frac{1}{x}$, the straight line passes through $(${X1}, ${Y1})$ and $(${X2}, ${Y2})$. Find the value of **$a$**.`,
            answerType: 'number', correctValue: aVal, displayAnswerTex: `a = ${aVal} \\quad (b = ${bVal})`,
            intentMeta: { given: `xy = ax + b, paksi Y = y, X = 1/x`, goal: 'Susun semula y = b(1/x) + a untuk cari pintasan a', conceptRule: 'Bahagi x: y = b(1/x) + a ⟹ m = b, C = a!' },
            guidedSteps: [
              { prompt: { bm: `Bahagi $xy = ax + b$ dengan $x$ memberi $y = b\\left(\\frac{1}{x}\\right) + a$. Jadi kecerunan garis ialah $b$! Kira kecerunan $b = \\frac{${Y2} - ${Y1}}{${X2} - ${X1}}$:`, en: `Dividing by $x$ gives $y = b\\left(\\frac{1}{x}\\right) + a$, so gradient $m = b$! Compute $b = \\frac{${Y2} - ${Y1}}{${X2} - ${X1}}$:` }, expected: bVal, hint: { bm: `(${Y2 - Y1}) ÷ 2 = ${bVal}.`, en: `(${Y2 - Y1}) ÷ 2 = ${bVal}.` } },
              { prompt: { bm: `Sekarang cari pintasan-$Y$ iaitu $a = Y_1 - bX_1 = ${Y1} - (${bVal})(${X1})$:`, en: `Now find $Y$-intercept $a = Y_1 - bX_1 = ${Y1} - (${bVal})(${X1})$:` }, expected: aVal, hint: { bm: `${Y1} − (${bVal}) = ${aVal}.`, en: `${Y1} − (${bVal}) = ${aVal}.` } }
            ],
            traps: [{ value: bVal, message: { bm: `Perangkap Susunan KBAT [P]! Apabila xy = ax + b dibahagi dengan x, ia menjadi y = a + b(1/x) = b(1/x) + a. Maka kecerunan ialah b (${bVal}), manakala a ialah pintasan-Y (${aVal})!`, en: `HOTS Rearrangement Trap [P]! Dividing xy = ax + b by x gives y = b(1/x) + a, so gradient is b (${bVal}) while a is the Y-intercept (${aVal})!` } }],
            hints: [lang === 'bm' ? `Bahagi dengan $x$: $y = b\\left(\\frac{1}{x}\\right) + a$. Hati-hati: $b$ ialah kecerunan, $a$ ialah pintasan-$Y$!` : `Divide by $x$: $y = b\\left(\\frac{1}{x}\\right) + a$. Watch out: $b$ is gradient, $a$ is $Y$-intercept!`],
            steps: [
              { badge: 'P1', title: lang === 'bm' ? 'Susun ikut paksi X = 1/x' : 'Arrange for X = 1/x', tex: `y = b\\left(\\frac{1}{x}\\right) + a \\implies m = b,\\; C = a`, why: lang === 'bm' ? 'Pekali bagi (1/x) ialah kecerunan.' : 'Coefficient of (1/x) is the gradient.' },
              { badge: 'K1', title: lang === 'bm' ? 'Kira kecerunan b' : 'Calculate gradient b', tex: `b = \\frac{${Y2} - ${Y1}}{${X2} - ${X1}} = ${bVal}`, why: lang === 'bm' ? 'Daripada dua titik pada garis.' : 'From two points on the line.' },
              { badge: 'J1', title: lang === 'bm' ? 'Kira pintasan a' : 'Calculate intercept a', tex: `a = ${Y1} - (${bVal})(${X1}) = ${aVal}`, why: lang === 'bm' ? 'Gantikan ke dalam Y = mX + C.' : 'Substitute into Y = mX + C.' }
            ]
          };
        }
      }
    },

    // =========================================================================
    // FORM 4 CHAPTER 7: COORDINATE GEOMETRY / GEOMETRI KOORDINAT
    // =========================================================================
    {
      id: 'f4-c7',
      stage: 2,
      unlocked: true,
      form: 4,
      num: 7,
      code: { bm: 'T4 • Bab 7', en: 'F4 • Ch 7' },
      icon: '(x,y)',
      color: '#0ea5e9',
      category: 'geometry',
      title: { bm: 'Geometri Koordinat', en: 'Coordinate Geometry' },
      subtitle: {
        bm: 'Pembahagi tembereng m:n, garis selari/serenjang, luas poligon & persamaan lokus',
        en: 'Line divisor m:n, parallel/perpendicular lines, polygon area & equations of loci'
      },
      spmWeight: { bm: 'Kertas 1 & Kertas 2 Bhg B (10 markah)', en: 'Paper 1 & Paper 2 Sec B (10 marks)' },
      concepts: [
        {
          title: { bm: '1. Pembahagi Tembereng Garis & Garis Serenjang', en: '1. Divisor of a Line Segment & Perpendicularity' },
          body: {
            bm: 'Titik $P(x, y)$ yang membahagi tembereng $AB$ dalam nisbah $AP : PB = m : n$ dikira secara darab silang nisbah. Dua garis adalah **serenjang** jika hasil darab kecerunannya ialah $-1$.',
            en: 'Point $P(x, y)$ dividing segment $AB$ in ratio $AP : PB = m : n$ uses cross-weighted coordinates. Two lines are **perpendicular** iff $m_1 m_2 = -1$.'
          },
          formulas: [
            { label: { bm: 'Rumus Nisbah m : n', en: 'Ratio Theorem m : n' }, tex: 'P(x,y) = \\left(\\frac{nx_1 + mx_2}{m+n},\\; \\frac{ny_1 + my_2}{m+n}\\right)' },
            { label: { bm: 'Selari & Serenjang', en: 'Parallel & Perpendicular' }, tex: 'm_1 = m_2 \\;(\\parallel), \\qquad m_1 m_2 = -1 \\;(\\perp)' }
          ],
          tip: {
            bm: 'Darab silang nisbah! Nisbah m (sebelah A) didarab dengan koordinat B(x₂, y₂), manakala n didarab dengan A(x₁, y₁).',
            en: 'Cross-multiply the ratio! Ratio m (near A) multiplies B(x₂, y₂), while n multiplies A(x₁, y₁).'
          }
        },
        {
          title: { bm: '2. Luas Poligon (Rumus Tali Kasut) & Lokus', en: '2. Area of Poligon (Shoelace) & Equations of Loci' },
          body: {
            bm: 'Senaraikan bucu mengikut urutan dan ulang semula bucu pertama di hujung. Bagi lokus titik bergerak $P(x, y)$, gunakan rumus jarak mengikut syarat geometri yang diberi.',
            en: 'List vertices sequentially in order and repeat the first vertex at the end. For locus of moving point $P(x, y)$, translate distance constraints algebraically.'
          },
          formulas: [
            { label: { bm: 'Luas Segi Tiga ABC', en: 'Shoelace Area Formula' }, tex: '\\text{Luas} = \\frac{1}{2}|(x_1y_2 + x_2y_3 + x_3y_1) - (x_2y_1 + x_3y_2 + x_1y_3)|' },
            { label: { bm: 'Lokus Jarak Malar r', en: 'Constant Distance Locus' }, tex: '(x - x_1)^2 + (y - y_1)^2 = r^2' }
          ],
          tip: {
            bm: 'Jika tiga titik A, B, C adalah segaris (collinear), luas segi tiga ABC ialah tepat 0!',
            en: 'Three points A, B, C are collinear if and only if the area of triangle ABC equals 0!'
          }
        }
      ],
      traps: [
        {
          title: { bm: 'Terlupa Ulang Koordinat Pertama dalam Rumus Luas Poligon', en: 'Forgetting to Repeat the Starting Vertex in Shoelace Formula' },
          desc: {
            bm: 'Sentiasa tutup gelung poligon dengan mengulang semula (x₁, y₁) pada lajur terakhir!',
            en: 'Always close the polygon loop by repeating (x₁, y₁) in the final column!'
          }
        }
      ],
      solvers: [
        {
          id: 'coord-geom-solver',
          title: { bm: 'Solver Pembahagi Tembereng m:n & Pembahagi Dua Sama Serenjang', en: 'Segment Divisor m:n & Perpendicular Bisector Solver' },
          desc: {
            bm: 'Kira jarak AB, titik pembahagi P(x,y) nisbah m:n, dan persamaan pembahagi dua sama serenjang.',
            en: 'Compute distance AB, internal divisor P(x,y) for ratio m:n, and perpendicular bisector equation.'
          },
          inputs: [
            { id: 'x1', label: 'A: x₁', default: 1 }, { id: 'y1', label: 'A: y₁', default: 2 },
            { id: 'x2', label: 'B: x₂', default: 7 }, { id: 'y2', label: 'B: y₂', default: 10 },
            { id: 'm', label: { bm: 'Nisbah m', en: 'Ratio m' }, default: 1 },
            { id: 'n', label: { bm: 'Nisbah n', en: 'Ratio n' }, default: 2 }
          ],
          solve: function (v, lang) {
            const x1 = Number(v.x1), y1 = Number(v.y1), x2 = Number(v.x2), y2 = Number(v.y2);
            const m = Math.max(1, Number(v.m) || 1), n = Math.max(1, Number(v.n) || 1);
            const dist = Math.hypot(x2 - x1, y2 - y1);
            const px = (n * x1 + m * x2) / (m + n);
            const py = (n * y1 + m * y2) / (m + n);
            const mx = (x1 + x2) / 2, my = (y1 + y2) / 2;
            let perpTex = '';
            if (y2 === y1) perpTex = `x = ${U.roundStr(mx)}`;
            else if (x2 === x1) perpTex = `y = ${U.roundStr(my)}`;
            else {
              const mAB = (y2 - y1) / (x2 - x1);
              const mPerp = -1 / mAB;
              const cPerp = my - mPerp * mx;
              perpTex = `y = ${U.roundStr(mPerp, 3)}x ${U.signedNum(U.round(cPerp, 3))}`;
            }
            return {
              problemTex: `A(${x1}, ${y1}), \\; B(${x2}, ${y2}), \\; AP : PB = ${m} : ${n}`,
              steps: [
                { badge: 'K1', title: lang === 'bm' ? 'Langkah 1: Jarak AB & Titik Tengah M' : 'Step 1: Distance AB & Midpoint M', tex: `|AB| = \\sqrt{(${x2 - x1})^2 + (${y2 - y1})^2} = ${U.roundStr(dist, 3)}, \\quad M = (${U.roundStr(mx)}, ${U.roundStr(my)})`, why: lang === 'bm' ? 'Rumus Pythagoras & purata koordinat.' : 'Pythagoras distance & midpoint average.' },
                { badge: 'K1', title: lang === 'bm' ? 'Langkah 2: Titik Pembahagi P(x, y)' : 'Step 2: Divisor Point P(x, y)', tex: `P = \\left(\\frac{${n}(${x1}) + ${m}(${x2})}{${m + n}},\\; \\frac{${n}(${y1}) + ${m}(${y2})}{${m + n}}\\right) = (${U.roundStr(px, 3)},\\; ${U.roundStr(py, 3)})`, why: lang === 'bm' ? 'Darab silang nisbah m dan n.' : 'Cross-multiply ratio weights.' },
                { badge: 'J1', title: lang === 'bm' ? 'Langkah 3: Pembahagi Dua Sama Serenjang' : 'Step 3: Perpendicular Bisector', tex: perpTex, why: lang === 'bm' ? 'Melalui titik tengah M dengan m₁m₂ = −1.' : 'Passes through midpoint M with m₁m₂ = −1.' }
              ],
              finalTex: `P = (${U.roundStr(px, 3)},\\; ${U.roundStr(py, 3)}), \\quad \\perp: ${perpTex}`
            };
          }
        }
      ],
      generateQuestion: function (tier, lang) {
        if (tier === 1) {
          // Perpendicular gradient: y = mx + c and y = kx + d -> find k or perpendicular gradient
          const m1 = U.pick([2, -2, 4, -4, 0.5]);
          const m2 = -1 / m1;
          return {
            tier: 1, tpLabel: 'TP1–TP2', subtopic: { bm: '7.2 Garis Lurus Serenjang', en: '7.2 Perpendicular Lines' }, marks: 2,
            prompt: lang === 'bm'
              ? `Garis lurus $L_1$ mempunyai kecerunan $m_1 = ${m1}$. Cari kecerunan garis lurus $L_2$ yang **serenjang** dengan $L_1$.`
              : `Straight line $L_1$ has gradient $m_1 = ${m1}$. Find the gradient of line $L_2$ which is **perpendicular** to $L_1$.`,
            answerType: 'number', correctValue: m2, displayAnswerTex: `m_2 = -\\frac{1}{${m1}} = ${m2}`,
            intentMeta: { given: `m₁ = ${m1}`, goal: 'm₂ supaya m₁m₂ = −1', conceptRule: 'Garis serenjang: m₁ × m₂ = −1' },
            guidedSteps: [
              { prompt: { bm: `Gunakan syarat serenjang $m_1 m_2 = -1$. Bahagikan $-1$ dengan $${m1}$:`, en: `Use $m_1 m_2 = -1$. Compute $-1 \\div (${m1})$:` }, expected: m2, hint: { bm: `−1 / (${m1}) = ${m2}.`, en: `−1 / (${m1}) = ${m2}.` } }
            ],
            traps: [
              { value: 1 / m1, message: { bm: 'Diagnostik Tanda [J]: Anda mengambil salingan 1/m₁ tetapi terlupa tukar tanda negatif! Syaratnya m₁m₂ = −1.', en: 'Sign Diagnosis [J]: You took 1/m₁ without flipping the sign! Perpendicular lines satisfy m₁m₂ = −1.' } },
              { value: m1, message: { bm: 'Diagnostik Konsep [P]: Kecerunan sama (m₁ = m₂) ialah untuk garis SELARI, bukan serenjang!', en: 'Concept Diagnosis [P]: Equal gradients are for PARALLEL lines, not perpendicular!' } }
            ],
            hints: [lang === 'bm' ? `Gunakan rumus $m_1 m_2 = -1$.` : `Use $m_1 m_2 = -1$.`],
            steps: [
              { badge: 'P1', title: lang === 'bm' ? 'Syarat serenjang' : 'Perpendicular condition', tex: `m_1 m_2 = -1`, why: lang === 'bm' ? 'Sudut 90° antara dua garis.' : '90° intersection.' },
              { badge: 'J1', title: lang === 'bm' ? 'Kira m₂' : 'Solve m₂', tex: `m_2 = -\\frac{1}{${m1}} = ${m2}`, why: lang === 'bm' ? 'Salingan negatif.' : 'Negative reciprocal.' }
            ]
          };
        } else if (tier === 2) {
          // Divisor of segment in ratio m:n -> find x-coordinate of P
          const m = U.pick([1, 2]);
          const n = U.pick([2, 3]);
          const sum = m + n;
          const x1 = U.randInt(-4, 2);
          const stepK = U.randInt(2, 5);
          const x2 = x1 + sum * stepK; // guarantees integer px!
          const y1 = U.randInt(1, 5), y2 = y1 + sum * 2;
          const px = (n * x1 + m * x2) / sum;
          const wrongNoCross = (m * x1 + n * x2) / sum;
          return {
            tier: 2, tpLabel: 'TP3–TP4', subtopic: { bm: '7.1 Pembahagi Tembereng Garis m : n', en: '7.1 Divisor of Line Segment m : n' }, marks: 3,
            prompt: lang === 'bm'
              ? `Titik $P(x, y)$ membahagi tembereng garis yang menyambungkan $A(${x1}, ${y1})$ dan $B(${x2}, ${y2})$ secara dalaman dengan nisbah $AP : PB = ${m} : ${n}$. Cari **koordinat-$x$** bagi titik $P$.`
              : `Point $P(x, y)$ divides the line segment joining $A(${x1}, ${y1})$ and $B(${x2}, ${y2})$ internally in the ratio $AP : PB = ${m} : ${n}$. Find the **$x$-coordinate** of point $P$.`,
            answerType: 'number', correctValue: px, displayAnswerTex: `x = ${px}`,
            intentMeta: { given: `A(${x1},${y1}), B(${x2},${y2}), m:n = ${m}:${n}`, goal: 'x = (nx₁ + mx₂)/(m+n)', conceptRule: 'Darab silang nisbah: n darab A, m darab B' },
            guidedSteps: [
              { prompt: { bm: `Darab silang untuk pengangka-$x$: kira $n x_1 + m x_2 = ${n}(${x1}) + ${m}(${x2})$:`, en: `Cross-multiply for the numerator: compute $n x_1 + m x_2 = ${n}(${x1}) + ${m}(${x2})$:` }, expected: n * x1 + m * x2, hint: { bm: `${n * x1} + ${m * x2} = ${n * x1 + m * x2}.`, en: `${n * x1} + ${m * x2} = ${n * x1 + m * x2}.` } },
              { prompt: { bm: `Bahagikan hasil itu dengan jumlah nisbah $m + n = ${sum}$:`, en: `Divide that sum by $m + n = ${sum}$:` }, expected: px, hint: { bm: `${n * x1 + m * x2} ÷ ${sum} = ${px}.`, en: `${n * x1 + m * x2} ÷ ${sum} = ${px}.` } }
            ],
            traps: [
              { value: wrongNoCross, message: { bm: `Diagnostik Darab Silang [K]: Anda mendarab m dengan x₁ tanpa darab silang! Ingat: nisbah m (sebelah A) mesti didarab dengan koordinat B (${x2}).`, en: `Cross-Ratio Diagnosis [K]: You multiplied m by x₁ instead of cross-multiplying! Ratio m must multiply x₂ (${x2}).` } }
            ],
            hints: [lang === 'bm' ? `Gunakan rumus $x = \\frac{nx_1 + mx_2}{m + n}$.` : `Use $x = \\frac{nx_1 + mx_2}{m + n}$.`],
            steps: [
              { badge: 'K1', title: lang === 'bm' ? 'Gantikan ke dalam rumus pembahagi tembereng' : 'Substitute into ratio formula', tex: `x = \\frac{${n}(${x1}) + ${m}(${x2})}{${m} + ${n}}`, why: lang === 'bm' ? 'Darab silang nisbah.' : 'Cross-multiply weights.' },
              { badge: 'J1', title: lang === 'bm' ? 'Permudahkan' : 'Simplify', tex: `x = \\frac{${n * x1 + m * x2}}{${sum}} = ${px}`, why: lang === 'bm' ? 'Koordinat-x titik P.' : 'x-coordinate of P.' }
            ]
          };
        } else {
          // KBAT: Shoelace Area of Triangle ABC
          const x1 = 1, y1 = 2;
          const x2 = U.randInt(5, 8), y2 = U.randInt(1, 3);
          const x3 = U.randInt(2, 5), y3 = U.randInt(6, 9);
          const sumDown = x1 * y2 + x2 * y3 + x3 * y1;
          const sumUp = y1 * x2 + y2 * x3 + y3 * x1;
          const area = 0.5 * Math.abs(sumDown - sumUp);
          return {
            tier: 3, tpLabel: 'TP5–TP6 (KBAT)', subtopic: { bm: '7.3 Luas Poligon (Rumus Tali Kasut)', en: '7.3 Area of Polygon (Shoelace)' }, marks: 4,
            prompt: lang === 'bm'
              ? `Cari luas segi tiga $ABC$ dengan bucu-bucu $A(${x1}, ${y1})$, $B(${x2}, ${y2})$, dan $C(${x3}, ${y3})$.`
              : `Find the area of triangle $ABC$ with vertices $A(${x1}, ${y1})$, $B(${x2}, ${y2})$, and $C(${x3}, ${y3})$.`,
            answerType: 'number', correctValue: area, displayAnswerTex: `\\text{Luas} = ${area}\\text{ unit}^2`,
            intentMeta: { given: `A(${x1},${y1}), B(${x2},${y2}), C(${x3},${y3})`, goal: 'Luas = ½ |Hasil darab bawah − Hasil darab atas|', conceptRule: 'Ulang bucu pertama A pada hujung susunan!' },
            guidedSteps: [
              { prompt: { bm: `Susun bucu $(${x1},${y1}), (${x2},${y2}), (${x3},${y3}), (${x1},${y1})$. Kira jumlah hasil darab pepenjuru ke bawah $(x_1y_2 + x_2y_3 + x_3y_1)$:`, en: `Compute the downward diagonal sum $(x_1y_2 + x_2y_3 + x_3y_1)$:` }, expected: sumDown, hint: { bm: `${x1 * y2} + ${x2 * y3} + ${x3 * y1} = ${sumDown}.`, en: `${x1 * y2} + ${x2 * y3} + ${x3 * y1} = ${sumDown}.` } },
              { prompt: { bm: `Kira jumlah hasil darab pepenjuru ke atas $(y_1x_2 + y_2x_3 + y_3x_1)$:`, en: `Compute the upward diagonal sum $(y_1x_2 + y_2x_3 + y_3x_1)$:` }, expected: sumUp, hint: { bm: `${y1 * x2} + ${y2 * x3} + ${y3 * x1} = ${sumUp}.`, en: `${y1 * x2} + ${y2 * x3} + ${y3 * x1} = ${sumUp}.` } },
              { prompt: { bm: `Akhir sekali, kira $\\frac{1}{2}|${sumDown} - ${sumUp}|$:`, en: `Finally, evaluate $\\frac{1}{2}|${sumDown} - ${sumUp}|$:` }, expected: area, hint: { bm: `½ × ${Math.abs(sumDown - sumUp)} = ${area}.`, en: `½ × ${Math.abs(sumDown - sumUp)} = ${area}.` } }
            ],
            traps: [{ value: area * 2, message: { bm: 'Diagnostik Rumus [K]: Anda terlupa darab dengan 1/2 di hadapan rumus luas tali kasut!', en: 'Formula Diagnosis [K]: You forgot to multiply by 1/2 in front of the Shoelace formula!' } }],
            hints: [lang === 'bm' ? `Ulang bucu pertama $A(${x1}, ${y1})$ di hujung dan jangan lupa darab $\\frac{1}{2}$.` : `Repeat starting vertex $A(${x1}, ${y1})$ at the end and multiply by $\\frac{1}{2}$.`],
            steps: [
              { badge: 'K1', title: lang === 'bm' ? 'Susun rumus tali kasut' : 'Set up Shoelace array', tex: `\\text{Luas} = \\frac{1}{2}|(${sumDown}) - (${sumUp})|`, why: lang === 'bm' ? 'Ulang koordinat A pada hujung.' : 'Repeat vertex A to close triangle.' },
              { badge: 'J1', title: lang === 'bm' ? 'Ambil nilai positif & bahagi 2' : 'Modulus & halve', tex: `\\text{Luas} = \\frac{1}{2}(${Math.abs(sumDown - sumUp)}) = ${area}`, why: lang === 'bm' ? 'Luas sentiasa positif.' : 'Geometric area is positive.' }
            ]
          };
        }
      }
    },

    // =========================================================================
    // FORM 4 CHAPTER 8: VECTORS / VEKTOR
    // =========================================================================
    {
      id: 'f4-c8',
      stage: 2,
      unlocked: true,
      form: 4,
      num: 8,
      code: { bm: 'T4 • Bab 8', en: 'F4 • Ch 8' },
      icon: 'a⃗',
      color: '#3b82f6',
      category: 'geometry',
      title: { bm: 'Vektor', en: 'Vectors' },
      subtitle: {
        bm: 'Hukum segi tiga, vektor selari/segaris & vektor unit satah Cartesan',
        en: 'Triangle law, parallel/collinear vectors & Cartesian unit vectors'
      },
      spmWeight: { bm: 'Kertas 1 & Kertas 2 Bhg B (8–10 markah)', en: 'Paper 1 & Paper 2 Sec B (8–10 marks)' },
      concepts: [
        {
          title: { bm: '1. Hukum Segi Tiga, Selari & Segaris', en: '1. Triangle Law, Parallelism & Collinearity' },
          body: {
            bm: 'Hukum Segi Tiga: $\\vec{AB} + \\vec{BC} = \\vec{AC}$ (huruf tengah $B$ bertemu!). Dua vektor $\\mathbf{a}$ dan $\\mathbf{b}$ adalah **selari** jika $\\mathbf{a} = k\\mathbf{b}$. Tiga titik $A, B, C$ adalah **segaris** jika $\\vec{AB} = k\\vec{BC}$ dan berkongsi titik sepunya $B$.',
            en: 'Triangle Law: $\\vec{AB} + \\vec{BC} = \\vec{AC}$ (inner letter $B$ bridges!). Vectors $\\mathbf{a}, \\mathbf{b}$ are **parallel** iff $\\mathbf{a} = k\\mathbf{b}$. Points $A, B, C$ are **collinear** iff $\\vec{AB} = k\\vec{BC}$ with common point $B$.'
          },
          formulas: [
            { label: { bm: 'Vektor Negatif & Segi Tiga', en: 'Negative & Triangle Law' }, tex: '\\vec{BA} = -\\vec{AB}, \\qquad \\vec{AB} = \\vec{AO} + \\vec{OB} = \\vec{OB} - \\vec{OA}' },
            { label: { bm: 'Kebebasan Linear (Tak Selari)', en: 'Non-Parallel Independence' }, tex: 'h\\mathbf{a} + k\\mathbf{b} = \\mathbf{0} \\implies h = 0 \\text{ dan } k = 0' }
          ],
          tip: {
            bm: 'Ingat pintasan emas: AB⃗ = OB⃗ − OA⃗ ("Hujung tolak Mula")!',
            en: 'Golden shortcut: AB⃗ = OB⃗ − OA⃗ ("Head minus Tail")!'
          }
        },
        {
          title: { bm: '2. Vektor dalam Satah Cartesan (xi + yj)', en: '2. Vectors in the Cartesian Plane (xi + yj)' },
          body: {
            bm: 'Vektor kedudukan $\\vec{OP} = x\\mathbf{i} + y\\mathbf{j}$ mempunyai magnitud $|\\mathbf{r}| = \\sqrt{x^2 + y^2}$. **Vektor unit** $\\hat{\\mathbf{r}}$ mempunyai panjang tepat $1$ unit dalam arah $\\mathbf{r}$.',
            en: 'Position vector $\\vec{OP} = x\\mathbf{i} + y\\mathbf{j}$ has magnitude $|\\mathbf{r}| = \\sqrt{x^2 + y^2}$. **Unit vector** $\\hat{\\mathbf{r}}$ has length exactly $1$ in the direction of $\\mathbf{r}$.'
          },
          formulas: [
            { label: { bm: 'Magnitud & Vektor Unit', en: 'Magnitude & Unit Vector' }, tex: '|\\mathbf{r}| = \\sqrt{x^2 + y^2}, \\qquad \\hat{\\mathbf{r}} = \\frac{x\\mathbf{i} + y\\mathbf{j}}{\\sqrt{x^2 + y^2}}' }
          ],
          tip: {
            bm: 'Pasangan Pythagoras popular dalam SPM: (3,4)→5, (5,12)→13, (6,8)→10, (8,15)→17!',
            en: 'Classic SPM Pythagorean triples: (3,4)→5, (5,12)→13, (6,8)→10, (8,15)→17!'
          }
        }
      ],
      traps: [
        {
          title: { bm: 'Tertukar AB⃗ = OA⃗ − OB⃗', en: 'Writing AB⃗ = OA⃗ − OB⃗ Backwards' },
          desc: {
            bm: 'AB⃗ bergerak dari A ke B: pergi A→O (−OA⃗) diikuti O→B (+OB⃗), jadi wajib OB⃗ − OA⃗!',
            en: 'AB⃗ goes A→O (−OA⃗) then O→B (+OB⃗), so it is ALWAYS OB⃗ − OA⃗!'
          }
        }
      ],
      solvers: [
        {
          id: 'vec-cartesian',
          title: { bm: 'Solver Vektor Cartesan, Magnitud & Vektor Unit', en: 'Cartesian Vector, Magnitude & Unit Vector Solver' },
          desc: {
            bm: 'Kira AB⃗ = OB⃗ − OA⃗, magnitud |AB⃗|, dan vektor unit selari dengan AB⃗.',
            en: 'Compute AB⃗ = OB⃗ − OA⃗, magnitude |AB⃗|, and unit vector in the direction of AB⃗.'
          },
          inputs: [
            { id: 'ax', label: 'OA: x₁', default: 2 }, { id: 'ay', label: 'OA: y₁', default: -1 },
            { id: 'bx', label: 'OB: x₂', default: 5 }, { id: 'by', label: 'OB: y₂', default: 3 }
          ],
          solve: function (v, lang) {
            const dx = Number(v.bx) - Number(v.ax);
            const dy = Number(v.by) - Number(v.ay);
            const magSq = dx * dx + dy * dy;
            const mag = Math.sqrt(magSq);
            return {
              problemTex: `\\vec{OA} = ${v.ax}\\mathbf{i} ${U.signedNum(Number(v.ay))}\\mathbf{j}, \\quad \\vec{OB} = ${v.bx}\\mathbf{i} ${U.signedNum(Number(v.by))}\\mathbf{j}`,
              steps: [
                { badge: 'K1', title: lang === 'bm' ? 'Langkah 1: Cari vektor sesaran AB⃗ = OB⃗ − OA⃗' : 'Step 1: Displacement vector AB⃗ = OB⃗ − OA⃗', tex: `\\vec{AB} = (${v.bx} - (${v.ax}))\\mathbf{i} + (${v.by} - (${v.ay}))\\mathbf{j} = ${dx}\\mathbf{i} ${U.signedNum(dy)}\\mathbf{j}`, why: lang === 'bm' ? 'Hujung tolak Mula.' : 'Head minus Tail.' },
                { badge: 'K1', title: lang === 'bm' ? 'Langkah 2: Magnitud |AB⃗|' : 'Step 2: Magnitude |AB⃗|', tex: `|\\vec{AB}| = \\sqrt{(${dx})^2 + (${dy})^2} = \\sqrt{${magSq}} = ${U.roundStr(mag, 4)}`, why: lang === 'bm' ? 'Teorem Pythagoras.' : 'Pythagoras theorem.' },
                { badge: 'J1', title: lang === 'bm' ? 'Langkah 3: Vektor Unit' : 'Step 3: Unit Vector', tex: `\\hat{\\mathbf{u}} = \\frac{${dx}\\mathbf{i} ${U.signedNum(dy)}\\mathbf{j}}{${U.roundStr(mag, 4)}}`, why: lang === 'bm' ? 'Bahagikan vektor dengan magnitudnya.' : 'Divide vector by its magnitude.' }
              ],
              finalTex: `\\vec{AB} = ${dx}\\mathbf{i} ${U.signedNum(dy)}\\mathbf{j}, \\quad |\\vec{AB}| = ${U.roundStr(mag, 4)}`
            };
          }
        }
      ],
      generateQuestion: function (tier, lang) {
        if (tier === 1) {
          const triples = [[3, 4, 5], [6, 8, 10], [5, 12, 13], [8, 15, 17], [-3, 4, 5], [5, -12, 13]];
          const [vx, vy, mag] = U.pick(triples);
          return {
            tier: 1, tpLabel: 'TP1–TP2', subtopic: { bm: '8.3 Magnitud Vektor Cartesan', en: '8.3 Magnitude of Cartesian Vector' }, marks: 2,
            prompt: lang === 'bm'
              ? `Diberi vektor $\\mathbf{v} = ${vx}\\mathbf{i} ${U.signedNum(vy)}\\mathbf{j}$. Cari magnitud $|\\mathbf{v}|$.`
              : `Given the vector $\\mathbf{v} = ${vx}\\mathbf{i} ${U.signedNum(vy)}\\mathbf{j}$, find its magnitude $|\\mathbf{v}|$.`,
            answerType: 'number', correctValue: mag, displayAnswerTex: `|\\mathbf{v}| = ${mag}`,
            intentMeta: { given: `x = ${vx}, y = ${vy}`, goal: `√(${vx}² + (${vy})²)`, conceptRule: '|r| = √(x² + y²)' },
            guidedSteps: [
              { prompt: { bm: `Kira hasil tambah kuasa dua komponen: $(${vx})^2 + (${vy})^2 = \\;?$`, en: `Compute the sum of squared components: $(${vx})^2 + (${vy})^2 = \\;?$ ` }, expected: mag * mag, hint: { bm: `${vx * vx} + ${vy * vy} = ${mag * mag}.`, en: `${vx * vx} + ${vy * vy} = ${mag * mag}.` } },
              { prompt: { bm: `Ambil punca kuasa dua $\\sqrt{${mag * mag}}$:`, en: `Take the square root $\\sqrt{${mag * mag}}$:` }, expected: mag, hint: { bm: `√${mag * mag} = ${mag}.`, en: `√${mag * mag} = ${mag}.` } }
            ],
            traps: [{ value: mag * mag, message: { bm: `Diagnostik Langkah Akhir [J]: ${mag * mag} ialah x² + y²! Jangan lupa punca kuasa dua untuk mendapat |v| = ${mag}.`, en: `Final Step Diagnosis [J]: ${mag * mag} is x² + y²! Take the square root to get ${mag}.` } }],
            hints: [lang === 'bm' ? `Gunakan $|\\mathbf{v}| = \\sqrt{(${vx})^2 + (${vy})^2}$.` : `Use $|\\mathbf{v}| = \\sqrt{(${vx})^2 + (${vy})^2}$.`],
            steps: [
              { badge: 'K1', title: lang === 'bm' ? 'Rumus magnitud' : 'Magnitude formula', tex: `|\\mathbf{v}| = \\sqrt{(${vx})^2 + (${vy})^2} = \\sqrt{${mag * mag}}`, why: lang === 'bm' ? 'Kuasa dua nombor negatif sentiasa positif!' : 'Square of negative is positive!' },
              { badge: 'J1', title: lang === 'bm' ? 'Nilai tepat' : 'Exact magnitude', tex: `|\\mathbf{v}| = ${mag}`, why: lang === 'bm' ? 'Trirangkap Pythagoras.' : 'Pythagorean triple.' }
            ]
          };
        } else if (tier === 2) {
          // Parallel vectors: p = (a)i + (b)j and q = (k*a)i + m j -> find m
          const a = U.pick([2, 3, 4, -3]);
          const b = U.pick([5, -4, 7]);
          const k = U.pick([2, 3, -2]);
          const qa = k * a;
          const mAns = k * b;
          return {
            tier: 2, tpLabel: 'TP3–TP4', subtopic: { bm: '8.1 Syarat Dua Vektor Selari', en: '8.1 Parallel Vectors Condition' }, marks: 3,
            prompt: lang === 'bm'
              ? `Diberi vektor $\\mathbf{p} = ${a}\\mathbf{i} ${U.signedNum(b)}\\mathbf{j}$ dan $\\mathbf{q} = ${qa}\\mathbf{i} + m\\mathbf{j}$ adalah **selari**. Cari nilai pemalar **$m$**.`
              : `Given that vectors $\\mathbf{p} = ${a}\\mathbf{i} ${U.signedNum(b)}\\mathbf{j}$ and $\\mathbf{q} = ${qa}\\mathbf{i} + m\\mathbf{j}$ are **parallel**, find the constant **$m$**.`,
            answerType: 'number', correctValue: mAns, displayAnswerTex: `m = ${mAns}`,
            intentMeta: { given: `p = ${a}i ${U.signedNum(b)}j, q = ${qa}i + mj`, goal: 'q = k p ⟹ cari k dahulu, kemudian m', conceptRule: 'Vektor selari mempunyai nisbah komponen i dan j yang sama!' },
            guidedSteps: [
              { prompt: { bm: `Oleh sebab $\\mathbf{q} = k\\mathbf{p}$, bandingkan komponen-$\\mathbf{i}$: $${qa} = k(${a})$. Apakah nilai faktor skala $k$?`, en: `Since $\\mathbf{q} = k\\mathbf{p}$, compare $\\mathbf{i}$-components: $${qa} = k(${a})$. What is scalar $k$?` }, expected: k, hint: { bm: `${qa} ÷ (${a}) = ${k}.`, en: `${qa} ÷ (${a}) = ${k}.` } },
              { prompt: { bm: `Sekarang bandingkan komponen-$\\mathbf{j}$: kira $m = k(${b}) = (${k})(${b})$:`, en: `Now compare $\\mathbf{j}$-components: compute $m = (${k})(${b})$:` }, expected: mAns, hint: { bm: `${k} × (${b}) = ${mAns}.`, en: `${k} × (${b}) = ${mAns}.` } }
            ],
            traps: [{ value: -(a * qa) / b, message: { bm: 'Diagnostik Konsep [P]: Anda menggunakan syarat serenjang, sedangkan soalan menyatakan SELARI (nisbah komponen sama)!', en: 'Concept Diagnosis [P]: Parallel vectors have proportional components (q = kp)!' } }],
            hints: [lang === 'bm' ? `Tulis $\\mathbf{q} = k\\mathbf{p}$ dan bandingkan pekali $\\mathbf{i}$ serta $\\mathbf{j}$.` : `Set $\\mathbf{q} = k\\mathbf{p}$ and equate $\\mathbf{i}$ and $\\mathbf{j}$ coefficients.`],
            steps: [
              { badge: 'P1', title: lang === 'bm' ? 'Gunakan hubungan vektor selari' : 'Apply parallel vector relation', tex: `${qa}\\mathbf{i} + m\\mathbf{j} = k(${a}\\mathbf{i} ${U.signedNum(b)}\\mathbf{j})`, why: lang === 'bm' ? 'q = kp.' : 'q = kp.' },
              { badge: 'K1', title: lang === 'bm' ? 'Cari pemalar skala k' : 'Find scalar k', tex: `k = \\frac{${qa}}{${a}} = ${k}`, why: lang === 'bm' ? 'Bandingkan pekali i.' : 'Equate i components.' },
              { badge: 'J1', title: lang === 'bm' ? 'Kira m' : 'Evaluate m', tex: `m = (${k})(${b}) = ${mAns}`, why: lang === 'bm' ? 'Bandingkan pekali j.' : 'Equate j components.' }
            ]
          };
        } else {
          // KBAT: Non-parallel linear independence (2h - 6)a + (k + h)b = 0 -> find k
          const hAns = U.randInt(2, 6);
          const twoH = 2 * hAns;
          const kAns = U.randInt(-7, -2);
          // (2h - twoH)a + (k + c)b = 0 where c = -kAns -> wait: let's couple h and k! (h - hAns)a + (2h + k - target)b = 0!
          const target = 2 * hAns + kAns;
          return {
            tier: 3, tpLabel: 'TP5–TP6 (KBAT)', subtopic: { bm: '8.1 Vektor Tak Selari & Kebebasan Linear', en: '8.1 Non-Parallel Linear Independence' }, marks: 4,
            prompt: lang === 'bm'
              ? `Diberi $\\mathbf{a}$ dan $\\mathbf{b}$ ialah vektor bukan sifar dan **tidak selari**. Jika $(h - ${hAns})\\mathbf{a} + (2h + k ${U.signedNum(-target)})\\mathbf{b} = \\mathbf{0}$, cari nilai pemalar **$k$**.`
              : `Given $\\mathbf{a}$ and $\\mathbf{b}$ are non-zero and **non-parallel** vectors. If $(h - ${hAns})\\mathbf{a} + (2h + k ${U.signedNum(-target)})\\mathbf{b} = \\mathbf{0}$, find the value of **$k$**.`,
            answerType: 'number', correctValue: kAns, displayAnswerTex: `k = ${kAns} \\quad (h = ${hAns})`,
            intentMeta: { given: `(h - ${hAns})a + (2h + k ${U.signedNum(-target)})b = 0`, goal: 'Samakan kedua-dua pekali dengan 0!', conceptRule: 'p a + q b = 0 (tak selari) ⟹ p = 0 DAN q = 0' },
            guidedSteps: [
              { prompt: { bm: `Oleh sebab $\\mathbf{a}$ dan $\\mathbf{b}$ tidak selari, pekali bagi $\\mathbf{a}$ mesti sifar: $h - ${hAns} = 0$. Apakah nilai $h$?`, en: `Since $\\mathbf{a}, \\mathbf{b}$ are non-parallel, the coefficient of $\\mathbf{a}$ must be zero: $h - ${hAns} = 0$. What is $h$?` }, expected: hAns, hint: { bm: `h = ${hAns}.`, en: `h = ${hAns}.` } },
              { prompt: { bm: `Pekali bagi $\\mathbf{b}$ juga mesti sifar: gantikan $h = ${hAns}$ ke dalam $2(${hAns}) + k ${U.signedNum(-target)} = 0$. Apakah nilai $k$?`, en: `Now set the $\\mathbf{b}$-coefficient to zero with $h = ${hAns}$: solve $2(${hAns}) + k ${U.signedNum(-target)} = 0$ for $k$:` }, expected: kAns, hint: { bm: `k = ${target} − ${2 * hAns} = ${kAns}.`, en: `k = ${target} − ${2 * hAns} = ${kAns}.` } }
            ],
            traps: [{ value: hAns, message: { bm: `Diagnostik Sasaran [J]: ${hAns} ialah nilai h! Gantikan h = ${hAns} ke dalam kurungan kedua untuk mencari k.`, en: `Target Diagnosis [J]: ${hAns} is h! Substitute it into the second bracket to find k.` } }],
            hints: [lang === 'bm' ? `Samakan kedua-dua kurungan dengan $0$: $h - ${hAns} = 0$ dan $2h + k ${U.signedNum(-target)} = 0$.` : `Equate both brackets to $0$: $h - ${hAns} = 0$ and $2h + k ${U.signedNum(-target)} = 0$.`],
            steps: [
              { badge: 'P1', title: lang === 'bm' ? 'Prinsip vektor tak selari' : 'Non-parallel zero-vector rule', tex: `h - ${hAns} = 0 \\quad \\text{dan} \\quad 2h + k ${U.signedNum(-target)} = 0`, why: lang === 'bm' ? 'Kedua-dua pekali skalar wajib sifar.' : 'Both scalar coefficients must vanish.' },
              { badge: 'J1', title: lang === 'bm' ? 'Selesaikan h dan k' : 'Solve h and k', tex: `h = ${hAns} \\implies 2(${hAns}) + k ${U.signedNum(-target)} = 0 \\implies k = ${kAns}`, why: lang === 'bm' ? 'Gantikan h untuk mendapatkan k.' : 'Substitute h to obtain k.' }
            ]
          };
        }
      }
    },

    // =========================================================================
    // FORM 4 CHAPTER 9: SOLUTION OF TRIANGLES / PENYELESAIAN SEGI TIGA
    // =========================================================================
    {
      id: 'f4-c9',
      stage: 2,
      unlocked: true,
      form: 4,
      num: 9,
      code: { bm: 'T4 • Bab 9', en: 'F4 • Ch 9' },
      icon: '△',
      color: '#14b8a6',
      category: 'trigonometry',
      title: { bm: 'Penyelesaian Segi Tiga', en: 'Solution of Triangles' },
      subtitle: {
        bm: 'Petua Sinus, kes berambiguiti SSA, Petua Kosinus & Rumus Luas / Heron',
        en: 'Sine Rule, SSA ambiguous case, Cosine Rule & Area / Heron’s Formula'
      },
      spmWeight: { bm: 'Kertas 2 Bahagian C (10 markah pilihan popular!)', en: 'Paper 2 Section C (10-mark favorite!)' },
      concepts: [
        {
          title: { bm: '1. Petua Sinus & Kes Berambiguiti (SSA)', en: '1. The Sine Rule & Ambiguous Case (SSA)' },
          body: {
            bm: 'Gunakan **Petua Sinus** apabila wujud pasangan sisi-sudut bertentangan. **Kes Berambiguiti** berlaku bagi syarat **SSA** apabila sudut tirus $A$ diberi bersama sisi $a, b$ dengan keadaan $b\\sin A < a < b$, menghasilkan **dua segi tiga berbeza**: sudut tirus $B_1$ dan sudut cakah $B_2 = 180^\\circ - B_1$!',
            en: 'Use the **Sine Rule** when an opposite side-angle pair is known. The **Ambiguous Case** arises under **SSA** when acute angle $A$ and sides $b\\sin A < a < b$ produce **two triangles**: acute $B_1$ and obtuse $B_2 = 180^\\circ - B_1$!'
          },
          formulas: [
            { label: { bm: 'Petua Sinus', en: 'Sine Rule' }, tex: '\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C}' },
            { label: { bm: 'Syarat 2 Segi Tiga (SSA)', en: 'Ambiguous Case Condition' }, tex: 'b\\sin A < a < b \\implies B_2 = 180^\\circ - B_1' }
          ],
          tip: {
            bm: 'Jika soalan Kertas 2 menyebut "segi tiga berbeza A\'BC dengan panjang yang sama", itu 100% isyarat Kes Berambiguiti (B₂ = 180° − B₁)!',
            en: 'Whenever Paper 2 mentions "another distinct triangle A\'BC with the same side lengths", that is 100% the Ambiguous Case (B₂ = 180° − B₁)!'
          }
        },
        {
          title: { bm: '2. Petua Kosinus, Luas SAS & Rumus Heron', en: '2. Cosine Rule, SAS Area & Heron’s Formula' },
          body: {
            bm: 'Gunakan **Petua Kosinus** apabila diberi **SAS** (2 sisi + sudut kandung) atau **SSS** (ketiga-tiga sisi). Luas segi tiga dikira melalui $\\frac{1}{2}ab\\sin C$ (SAS) atau **Rumus Heron** (SSS).',
            en: 'Use the **Cosine Rule** for **SAS** (2 sides + included angle) or **SSS** (all 3 sides). Area uses $\\frac{1}{2}ab\\sin C$ or **Heron’s Formula**.'
          },
          formulas: [
            { label: { bm: 'Petua Kosinus', en: 'Cosine Rule' }, tex: 'a^2 = b^2 + c^2 - 2bc\\cos A \\iff \\cos A = \\frac{b^2 + c^2 - a^2}{2bc}' },
            { label: { bm: 'Luas & Rumus Heron', en: 'SAS Area & Heron’s Formula' }, tex: '\\text{Luas} = \\frac{1}{2}ab\\sin C = \\sqrt{s(s-a)(s-b)(s-c)}, \\quad s = \\frac{a+b+c}{2}' }
          ],
          tip: {
            bm: 'Pastikan kalkulator berada dalam MOD DARJAH (DEG) semasa menyelesaikan Bab 9!',
            en: 'Ensure your calculator is in DEGREE MODE (DEG) throughout Chapter 9!'
          }
        }
      ],
      traps: [
        {
          title: { bm: 'Terlupa Sudut Cakah B₂ = 180° − B₁ dalam Kes SSA', en: 'Missing Obtuse Angle B₂ = 180° − B₁ in SSA' },
          desc: {
            bm: 'Kalkulator hanya memaparkan sudut tirus sin⁻¹! Jika segi tiga adalah cakah, tolakkan daripada 180°.',
            en: 'Calculators only return acute sin⁻¹! If the diagram/question specifies an obtuse angle, compute 180° − B₁.'
          }
        }
      ],
      solvers: [
        {
          id: 'sas-triangle-solver',
          title: { bm: 'Solver Segi Tiga SAS (Petua Kosinus & Luas)', en: 'SAS Triangle Solver (Cosine Rule & Area)' },
          desc: {
            bm: 'Masukkan sisi b, sisi c, dan sudut kandung A (°) untuk mencari sisi bertentangan a serta luas segi tiga.',
            en: 'Enter side b, side c, and included angle A (°) to compute opposite side a and triangle area.'
          },
          inputs: [
            { id: 'b', label: { bm: 'Sisi b (cm)', en: 'Side b (cm)' }, default: 8 },
            { id: 'c', label: { bm: 'Sisi c (cm)', en: 'Side c (cm)' }, default: 11 },
            { id: 'A', label: { bm: 'Sudut kandung A (°)', en: 'Included angle A (°)' }, default: 60 }
          ],
          solve: function (v, lang) {
            const b = Math.max(1, Number(v.b) || 8);
            const c = Math.max(1, Number(v.c) || 10);
            const Adeg = Math.min(175, Math.max(5, Number(v.A) || 60));
            const Arad = (Adeg * Math.PI) / 180;
            const aSq = b * b + c * c - 2 * b * c * Math.cos(Arad);
            const a = Math.sqrt(Math.max(0, aSq));
            const area = 0.5 * b * c * Math.sin(Arad);
            return {
              problemTex: `b = ${b}\\text{ cm}, \\; c = ${c}\\text{ cm}, \\; \\angle A = ${Adeg}^\\circ`,
              steps: [
                { badge: 'K1', title: lang === 'bm' ? 'Langkah 1: Gunakan Petua Kosinus (SAS)' : 'Step 1: Apply Cosine Rule (SAS)', tex: `a^2 = ${b}^2 + ${c}^2 - 2(${b})(${c})\\cos ${Adeg}^\\circ = ${U.roundStr(aSq, 4)}`, why: lang === 'bm' ? 'Dua sisi dan sudut kandung diberi.' : 'Two sides and included angle are known.' },
                { badge: 'J1', title: lang === 'bm' ? 'Langkah 2: Panjang sisi a' : 'Step 2: Length of side a', tex: `a = \\sqrt{${U.roundStr(aSq, 4)}} = ${U.roundStr(a, 3)}\\text{ cm}`, why: lang === 'bm' ? 'Ambil punca kuasa dua.' : 'Square root for side length.' },
                { badge: 'J1', title: lang === 'bm' ? 'Langkah 3: Luas Segi Tiga ABC' : 'Step 3: Area of Triangle ABC', tex: `\\text{Luas} = \\frac{1}{2}(${b})(${c})\\sin ${Adeg}^\\circ = ${U.roundStr(area, 3)}\\text{ cm}^2`, why: lang === 'bm' ? 'Rumus ½ bc sin A.' : 'Formula ½ bc sin A.' }
              ],
              finalTex: `a = ${U.roundStr(a, 3)}\\text{ cm}, \\quad \\text{Luas} = ${U.roundStr(area, 3)}\\text{ cm}^2`
            };
          }
        }
      ],
      generateQuestion: function (tier, lang) {
        if (tier === 1) {
          // Area = 1/2 ab sin 30° (exact clean answer since sin 30° = 0.5!)
          const a = U.pick([8, 10, 12, 14]);
          const b = U.pick([6, 8, 10, 12]);
          const area = 0.25 * a * b;
          return {
            tier: 1, tpLabel: 'TP1–TP2', subtopic: { bm: '9.4 Luas Segi Tiga', en: '9.4 Area of a Triangle' }, marks: 2,
            prompt: lang === 'bm'
              ? `Dalam $\\triangle ABC$, diberi $a = ${a}\\text{ cm}$, $b = ${b}\\text{ cm}$, dan sudut kandung $C = 30^\\circ$. Cari luas $\\triangle ABC$ dalam $\\text{cm}^2$.`
              : `In $\\triangle ABC$, given $a = ${a}\\text{ cm}$, $b = ${b}\\text{ cm}$, and included angle $C = 30^\\circ$, find the area of $\\triangle ABC$ in $\\text{cm}^2$.`,
            answerType: 'number', correctValue: area, displayAnswerTex: `\\text{Luas} = ${area}\\text{ cm}^2`,
            intentMeta: { given: `a = ${a}, b = ${b}, C = 30°`, goal: '½ ab sin C', conceptRule: 'Luas = ½ ab sin C (sin 30° = 0.5)' },
            guidedSteps: [
              { prompt: { bm: `Apakah nilai $\\sin 30^\\circ$?`, en: `What is the value of $\\sin 30^\\circ$?` }, expected: 0.5, hint: { bm: `sin 30° = 0.5 (atau 1/2).`, en: `sin 30° = 0.5.` } },
              { prompt: { bm: `Kira $\\frac{1}{2} \\times ${a} \\times ${b} \\times 0.5$:`, en: `Calculate $\\frac{1}{2} \\times ${a} \\times ${b} \\times 0.5$:` }, expected: area, hint: { bm: `0.25 × ${a * b} = ${area}.`, en: `0.25 × ${a * b} = ${area}.` } }
            ],
            hints: [lang === 'bm' ? `Gunakan $\\text{Luas} = \\frac{1}{2}(${a})(${b})\\sin 30^\\circ$.` : `Use $\\text{Area} = \\frac{1}{2}(${a})(${b})\\sin 30^\\circ$.`],
            steps: [
              { badge: 'K1', title: lang === 'bm' ? 'Gantikan ke dalam rumus luas SAS' : 'Substitute into SAS area formula', tex: `\\text{Luas} = \\frac{1}{2}(${a})(${b})\\sin 30^\\circ`, why: lang === 'bm' ? 'C ialah sudut kandung antara a dan b.' : 'C is the included angle.' },
              { badge: 'J1', title: lang === 'bm' ? 'Jawapan tepat' : 'Exact area', tex: `\\text{Luas} = ${area}\\text{ cm}^2`, why: lang === 'bm' ? 'sin 30° = 0.5.' : 'sin 30° = 0.5.' }
            ]
          };
        } else if (tier === 2) {
          // Cosine rule with cos 60° = 0.5! Exact clean integer a^2 = b^2 + c^2 - bc!
          // Note: (8, 5, 60°) -> 64 + 25 - 40 = 49 -> a = 7!! Or (8, 3, 60°) -> 64 + 9 - 24 = 49 -> a = 7! Or (15, 7, 60°) -> 225+49-105=169 -> a=13!
          const combos = [[8, 5, 7], [8, 3, 7], [15, 8, 13], [16, 10, 14]];
          const [b, c, aAns] = U.pick(combos);
          return {
            tier: 2, tpLabel: 'TP3–TP4', subtopic: { bm: '9.3 Petua Kosinus (SAS)', en: '9.3 The Cosine Rule (SAS)' }, marks: 3,
            prompt: lang === 'bm'
              ? `Dalam $\\triangle ABC$, diberi $b = ${b}\\text{ cm}$, $c = ${c}\\text{ cm}$, dan $\\angle A = 60^\\circ$. Cari panjang tepat sisi **$a$** dalam $\\text{cm}$.`
              : `In $\\triangle ABC$, given $b = ${b}\\text{ cm}$, $c = ${c}\\text{ cm}$, and $\\angle A = 60^\\circ$, find the exact length of side **$a$** in $\\text{cm}$.`,
            answerType: 'number', correctValue: aAns, displayAnswerTex: `a = ${aAns}\\text{ cm}`,
            intentMeta: { given: `b = ${b}, c = ${c}, A = 60°`, goal: 'a² = b² + c² − 2bc cos 60°', conceptRule: 'Petua Kosinus (cos 60° = 0.5)' },
            guidedSteps: [
              { prompt: { bm: `Oleh sebab $\\cos 60^\\circ = 0.5$, kira nilai $a^2 = ${b}^2 + ${c}^2 - 2(${b})(${c})(0.5)$:`, en: `Since $\\cos 60^\\circ = 0.5$, compute $a^2 = ${b}^2 + ${c}^2 - 2(${b})(${c})(0.5)$:` }, expected: aAns * aAns, hint: { bm: `${b * b} + ${c * c} − ${b * c} = ${aAns * aAns}.`, en: `${b * b} + ${c * c} − ${b * c} = ${aAns * aAns}.` } },
              { prompt: { bm: `Ambil punca kuasa dua $\\sqrt{${aAns * aAns}}$ untuk mendapat $a$:`, en: `Take $\\sqrt{${aAns * aAns}}$ to get $a$:` }, expected: aAns, hint: { bm: `a = ${aAns}.`, en: `a = ${aAns}.` } }
            ],
            traps: [{ value: aAns * aAns, message: { bm: `Diagnostik Langkah Akhir [J]: ${aAns * aAns} ialah a²! Ambil punca kuasa dua untuk dapat a = ${aAns}.`, en: `Final Step Diagnosis [J]: ${aAns * aAns} is a²! Square root it to get a = ${aAns}.` } }],
            hints: [lang === 'bm' ? `Gunakan $a^2 = b^2 + c^2 - 2bc\\cos 60^\\circ$ dengan $\\cos 60^\\circ = 0.5$.` : `Use $a^2 = b^2 + c^2 - 2bc\\cos 60^\\circ$ with $\\cos 60^\\circ = 0.5$.`],
            steps: [
              { badge: 'K1', title: lang === 'bm' ? 'Gunakan Petua Kosinus' : 'Apply Cosine Rule', tex: `a^2 = ${b}^2 + ${c}^2 - 2(${b})(${c})\\cos 60^\\circ = ${aAns * aAns}`, why: lang === 'bm' ? 'Dua sisi & sudut kandung.' : 'SAS configuration.' },
              { badge: 'J1', title: lang === 'bm' ? 'Punca kuasa dua' : 'Square root', tex: `a = \\sqrt{${aAns * aAns}} = ${aAns}\\text{ cm}`, why: lang === 'bm' ? 'Panjang sisi positif.' : 'Positive length.' }
            ]
          };
        } else {
          // KBAT: Ambiguous Case SSA -> find OBTUSE angle B2!
          const A = 30; // sin 30 = 0.5
          const b = 12; // b sin 30 = 6
          const a = U.pick([8, 9, 10]); // 6 < a < 12 -> guaranteed 2 triangles!
          const sinB = (b * 0.5) / a; // 6 / a
          const B1 = U.round((Math.asin(sinB) * 180) / Math.PI, 2);
          const B2 = U.round(180 - B1, 2);
          return {
            tier: 3, tpLabel: 'TP5–TP6 (KBAT)', subtopic: { bm: '9.2 Kes Berambiguiti Segi Tiga (SSA)', en: '9.2 Ambiguous Case of Triangles (SSA)' }, marks: 5,
            prompt: lang === 'bm'
              ? `Dalam $\\triangle ABC$, diberi $\\angle A = 30^\\circ$, $a = ${a}\\text{ cm}$, dan $b = ${b}\\text{ cm}$. Diberi bahawa $\\angle B$ ialah **sudut cakah**, cari nilai $\\angle B$ dalam darjah (bundarkan kepada 2 tempat perpuluhan).`
              : `In $\\triangle ABC$, $\\angle A = 30^\\circ$, $a = ${a}\\text{ cm}$, and $b = ${b}\\text{ cm}$. Given that $\\angle B$ is **obtuse**, find $\\angle B$ in degrees (to 2 decimal places).`,
            answerType: 'number', tolerance: 0.15, correctValue: B2, displayAnswerTex: `\\angle B = 180^\\circ - ${B1}^\\circ = ${B2}^\\circ`,
            intentMeta: { given: `A = 30°, a = ${a}, b = ${b} (∠B cakah)`, goal: 'Cari B₁ tirus guna Petua Sinus, kemudian B₂ = 180° − B₁', conceptRule: 'Kes Berambiguiti: B_cakah = 180° − B_tirus' },
            guidedSteps: [
              { prompt: { bm: `Gunakan Petua Sinus $\\frac{\\sin B}{${b}} = \\frac{\\sin 30^\\circ}{${a}}$. Cari sudut tirus rujukan $B_1 = \\sin^{-1}\\left(\\frac{6}{${a}}\\right)$ (2 t.p.):`, en: `Using $\\frac{\\sin B}{${b}} = \\frac{\\sin 30^\\circ}{${a}}$, find acute reference angle $B_1 = \\sin^{-1}\\left(\\frac{6}{${a}}\\right)$ (2 d.p.):` }, expected: B1, hint: { bm: `sin⁻¹(${U.roundStr(6 / a, 4)}) = ${B1}°.`, en: `sin⁻¹(${U.roundStr(6 / a, 4)}) = ${B1}°.` } },
              { prompt: { bm: `Oleh sebab $\\angle B$ ialah sudut **cakah**, tolakkan daripada $180^\\circ$: $180^\\circ - ${B1}^\\circ = \\;?$`, en: `Since $\\angle B$ is **obtuse**, compute $180^\\circ - ${B1}^\\circ$:` }, expected: B2, hint: { bm: `180 − ${B1} = ${B2}°.`, en: `180 − ${B1} = ${B2}°.` } }
            ],
            traps: [{ value: B1, message: { bm: `Perangkap Kes Berambiguiti SPM [P]! ${B1}° ialah sudut TIRUS daripada kalkulator. Soalan menyatakan ∠B ialah SUDUT CAKAH, jadi kira 180° − ${B1}° = ${B2}°!`, en: `SPM Ambiguous Case Trap [P]! ${B1}° is the ACUTE angle. For OBTUSE ∠B, compute 180° − ${B1}° = ${B2}°!` } }],
            hints: [lang === 'bm' ? `Cari sudut tirus $B_1 = ${B1}^\\circ$ dahulu, kemudian gunakan $B_2 = 180^\\circ - B_1$.` : `Find acute $B_1 = ${B1}^\\circ$ first, then compute obtuse $B_2 = 180^\\circ - B_1$.`],
            steps: [
              { badge: 'K1', title: lang === 'bm' ? 'Gunakan Petua Sinus' : 'Apply Sine Rule', tex: `\\frac{\\sin B}{${b}} = \\frac{\\sin 30^\\circ}{${a}} \\implies \\sin B = \\frac{6}{${a}}`, why: lang === 'bm' ? 'Pasangan sisi-sudut bertentangan.' : 'Opposite side-angle pairs.' },
              { badge: 'K1', title: lang === 'bm' ? 'Sudut rujukan tirus B₁' : 'Acute reference angle B₁', tex: `B_1 = ${B1}^\\circ`, why: lang === 'bm' ? 'Nilai sukuan pertama.' : 'First quadrant value.' },
              { badge: 'J1', title: lang === 'bm' ? 'Sudut cakah Sukuan II' : 'Obtuse Quadrant II angle', tex: `\\angle B = 180^\\circ - ${B1}^\\circ = ${B2}^\\circ`, why: lang === 'bm' ? 'sin(180° − θ) = sin θ.' : 'sin(180° − θ) = sin θ.' }
            ]
          };
        }
      }
    },

    // =========================================================================
    // FORM 4 CHAPTER 10: INDEX NUMBERS / NOMBOR INDEKS
    // =========================================================================
    {
      id: 'f4-c10',
      stage: 2,
      unlocked: true,
      form: 4,
      num: 10,
      code: { bm: 'T4 • Bab 10', en: 'F4 • Ch 10' },
      icon: 'Ī',
      color: '#84cc16',
      category: 'statistics',
      title: { bm: 'Nombor Indeks', en: 'Index Numbers' },
      subtitle: {
        bm: 'Indeks harga, indeks gubahan berpemberat & indeks berantai tiga tahun',
        en: 'Price index, weighted composite index & 3-period chained indices'
      },
      spmWeight: { bm: 'Kertas 2 Bahagian C (10 markah skor mudah!)', en: 'Paper 2 Section C (10-mark high scorer!)' },
      concepts: [
        {
          title: { bm: '1. Indeks Harga & Indeks Gubahan Berpemberat', en: '1. Price Index & Weighted Composite Index' },
          body: {
            bm: 'Indeks harga $I = \\frac{Q_1}{Q_0}\\times 100$ mengukur peratus perubahan harga tahun semasa ($Q_1$) berbanding tahun asas ($Q_0$). Jika harga naik $15\\%$, maka $I = 115$; jika turun $8\\%$, maka $I = 92$. **Indeks gubahan** $\\bar{I}$ mengambil kira pemberat kepentingan setiap bahan $w_i$.',
            en: 'Price index $I = \\frac{Q_1}{Q_0}\\times 100$ compares current price $Q_1$ against base price $Q_0$. A $15\\%$ rise means $I = 115$; an $8\\%$ drop means $I = 92$. **Composite index** $\\bar{I}$ weights items by $w_i$.'
          },
          formulas: [
            { label: { bm: 'Indeks Harga & Gubahan', en: 'Price & Composite Index' }, tex: 'I = \\frac{Q_1}{Q_0}\\times 100, \\qquad \\bar{I} = \\frac{\\sum I_i w_i}{\\sum w_i}' }
          ],
          tip: {
            bm: 'Pemberat wᵢ boleh diberi dalam bentuk peratus (∑wᵢ = 100), sudut carta pai (∑wᵢ = 360°), atau nisbah!',
            en: 'Weights wᵢ can be percentages (∑wᵢ = 100), pie chart angles (∑wᵢ = 360°), or ratios!'
          }
        },
        {
          title: { bm: '2. Indeks Berantai Tiga Tahun (A → B → C)', en: '2. Chained & Successive Indices (A → B → C)' },
          body: {
            bm: 'Apabila tahun asas berubah merentasi tiga tahun (cth: 2022, 2024, 2026), gunakan pendaraban rantai dibahagi 100!',
            en: 'Across three chronological periods (Base A, Intermediate B, Target C), chain indices via multiplication divided by 100!'
          },
          formulas: [
            { label: { bm: 'Rumus Rantai Indeks', en: 'Chained Index Formula' }, tex: 'I_{A \\to C} = \\frac{I_{A \\to B} \\times I_{B \\to C}}{100}' }
          ],
          tip: {
            bm: 'Jangan sesekali tambah peratus perubahan dua tahun secara terus (cth: naik 20% kemudian naik 10% BUKAN 130, tetapi 120×110/100 = 132)!',
            en: 'Never add successive percentage changes directly (up 20% then up 10% is 120×110/100 = 132, NOT 130)!'
          }
        }
      ],
      traps: [
        {
          title: { bm: 'Tertukar Q₁ dan Q₀ pada Pengangka & Penyebut', en: 'Swapping Current Q₁ and Base Q₀' },
          desc: {
            bm: 'Perkataan selepas "berasaskan tahun..." sentiasa duduk di BAWAH (penyebut Q₀)!',
            en: 'The year stated after "based on the year..." ALWAYS goes in the DENOMINATOR (Q₀)!'
          }
        }
      ],
      solvers: [
        {
          id: 'comp-index-solver',
          title: { bm: 'Kalkulator Indeks Gubahan 3 Bahan & Kos Semasa', en: '3-Item Composite Index & Cost Projector' },
          desc: {
            bm: 'Kira indeks gubahan Ī bagi 3 komponen dengan pemberat w₁, w₂, w₃.',
            en: 'Compute composite index Ī across 3 weighted items.'
          },
          inputs: [
            { id: 'i1', label: 'I₁', default: 120 }, { id: 'w1', label: 'w₁', default: 3 },
            { id: 'i2', label: 'I₂', default: 110 }, { id: 'w2', label: 'w₂', default: 5 },
            { id: 'i3', label: 'I₃', default: 135 }, { id: 'w3', label: 'w₃', default: 2 }
          ],
          solve: function (v, lang) {
            const i1 = Number(v.i1), w1 = Number(v.w1), i2 = Number(v.i2), w2 = Number(v.w2), i3 = Number(v.i3), w3 = Number(v.w3);
            const sumW = w1 + w2 + w3 || 1;
            const sumIW = i1 * w1 + i2 * w2 + i3 * w3;
            const iBar = sumIW / sumW;
            return {
              problemTex: `I = [${i1}, ${i2}, ${i3}], \\quad w = [${w1}, ${w2}, ${w3}]`,
              steps: [
                { badge: 'K1', title: lang === 'bm' ? 'Langkah 1: Kira ∑ Iᵢ wᵢ dan ∑ wᵢ' : 'Step 1: Compute ∑ Iᵢ wᵢ and ∑ wᵢ', tex: `\\sum I_i w_i = (${i1})(${w1}) + (${i2})(${w2}) + (${i3})(${w3}) = ${U.roundStr(sumIW)}, \\quad \\sum w_i = ${U.roundStr(sumW)}`, why: lang === 'bm' ? 'Darab setiap indeks dengan pemberatnya.' : 'Weight each item index.' },
                { badge: 'J1', title: lang === 'bm' ? 'Langkah 2: Bahagikan untuk Indeks Gubahan Ī' : 'Step 2: Composite Index Ī', tex: `\\bar{I} = \\frac{${U.roundStr(sumIW)}}{${U.roundStr(sumW)}} = ${U.roundStr(iBar, 2)}`, why: lang === 'bm' ? 'Purata berpemberat.' : 'Weighted average.' }
              ],
              finalTex: `\\bar{I} = ${U.roundStr(iBar, 2)}`
            };
          }
        }
      ],
      generateQuestion: function (tier, lang) {
        if (tier === 1) {
          const q0 = U.pick([4, 5, 8, 10, 20]);
          const idx = U.pick([115, 120, 125, 130, 140]);
          const q1 = (q0 * idx) / 100;
          return {
            tier: 1, tpLabel: 'TP1–TP2', subtopic: { bm: '10.1 Indeks Harga', en: '10.1 Price Index' }, marks: 2,
            prompt: lang === 'bm'
              ? `Harga sekilogram bahan mentah pada tahun $2022$ ialah $\\text{RM}${q0}$ dan meningkat kepada $\\text{RM}${q1}$ pada tahun $2025$. Cari indeks harga bahan itu pada tahun $2025$ berasaskan tahun $2022$.`
              : `The price per kg of a raw material was $\\text{RM}${q0}$ in $2022$ and rose to $\\text{RM}${q1}$ in $2025$. Find the price index in $2025$ based on $2022$.`,
            answerType: 'number', correctValue: idx, displayAnswerTex: `I = \\frac{${q1}}{${q0}} \\times 100 = ${idx}`,
            intentMeta: { given: `Q₀ (2022) = ${q0}, Q₁ (2025) = ${q1}`, goal: '(Q₁ / Q₀) × 100', conceptRule: 'I = (Q₁ / Q₀) × 100' },
            guidedSteps: [
              { prompt: { bm: `Bahagikan harga semasa dengan harga tahun asas dan darab $100$: $\\frac{${q1}}{${q0}} \\times 100 = \\;?$`, en: `Compute $\\frac{${q1}}{${q0}} \\times 100$:` }, expected: idx, hint: { bm: `${q1 / q0} × 100 = ${idx}.`, en: `${q1 / q0} × 100 = ${idx}.` } }
            ],
            traps: [{ value: q1 / q0, message: { bm: 'Diagnostik Darab 100 [J]: Jangan lupa darab dengan 100 untuk nombor indeks!', en: 'Index Scale Diagnosis [J]: Multiply the ratio by 100 for an index number!' } }],
            hints: [lang === 'bm' ? `Gunakan $I = \\frac{${q1}}{${q0}} \\times 100$.` : `Use $I = \\frac{${q1}}{${q0}} \\times 100$.`],
            steps: [
              { badge: 'K1', title: lang === 'bm' ? 'Gantikan Q₁ dan Q₀' : 'Substitute Q₁ and Q₀', tex: `I = \\frac{${q1}}{${q0}} \\times 100`, why: lang === 'bm' ? 'Tahun asas 2022 di penyebut.' : 'Base year 2022 in denominator.' },
              { badge: 'J1', title: lang === 'bm' ? 'Indeks harga' : 'Price index', tex: `I = ${idx}`, why: lang === 'bm' ? 'Tiada simbol % pada nombor indeks.' : 'Stated without % sign.' }
            ]
          };
        } else if (tier === 2) {
          // Composite index with unknown item index x!
          const w1 = 3, w2 = 5, w3 = 2; // sumW = 10!
          const i1 = 120, i2 = 110;
          const xAns = U.pick([125, 130, 140, 150]);
          const iBar = (i1 * w1 + i2 * w2 + xAns * w3) / 10;
          return {
            tier: 2, tpLabel: 'TP3–TP4', subtopic: { bm: '10.2 Indeks Gubahan Berpemberat', en: '10.2 Weighted Composite Index' }, marks: 4,
            prompt: lang === 'bm'
              ? `Tiga bahan $A, B, C$ mempunyai indeks harga masing-masing $${i1},\\; ${i2},\\; x$ dan pemberat $${w1},\\; ${w2},\\; ${w3}$. Jika indeks gubahan ialah $${iBar}$, cari nilai **$x$**.`
              : `Three items $A, B, C$ have price indices $${i1},\\; ${i2},\\; x$ and weightages $${w1},\\; ${w2},\\; ${w3}$ respectively. Given the composite index is $${iBar}$, find **$x$**.`,
            answerType: 'number', correctValue: xAns, displayAnswerTex: `x = ${xAns}`,
            intentMeta: { given: `I = [${i1}, ${i2}, x], w = [${w1}, ${w2}, ${w3}], Ī = ${iBar}`, goal: '∑Iᵢwᵢ / ∑wᵢ = Ī', conceptRule: 'Jumlah pemberat ∑w = 10' },
            guidedSteps: [
              { prompt: { bm: `Jumlah pemberat ialah $${w1}+${w2}+${w3} = 10$. Maka $\\sum I_i w_i = 10 \\times ${iBar} = \\;?$`, en: `Total weightage is $10$. So $\\sum I_i w_i = 10 \\times ${iBar} = \\;?$ ` }, expected: 10 * iBar, hint: { bm: `10 × ${iBar} = ${10 * iBar}.`, en: `10 × ${iBar} = ${10 * iBar}.` } },
              { prompt: { bm: `Sekarang selesaikan $${i1 * w1} + ${i2 * w2} + ${w3}x = ${10 * iBar}$ untuk mencari $x$:`, en: `Now solve $${i1 * w1} + ${i2 * w2} + ${w3}x = ${10 * iBar}$ for $x$:` }, expected: xAns, hint: { bm: `${w3}x = ${10 * iBar - (i1 * w1 + i2 * w2)} ⟹ x = ${xAns}.`, en: `${w3}x = ${10 * iBar - (i1 * w1 + i2 * w2)} ⟹ x = ${xAns}.` } }
            ],
            hints: [lang === 'bm' ? `Gunakan $\\frac{${i1}(${w1}) + ${i2}(${w2}) + x(${w3})}{${w1}+${w2}+${w3}} = ${iBar}$.` : `Use $\\frac{${i1}(${w1}) + ${i2}(${w2}) + x(${w3})}{10} = ${iBar}$.`],
            steps: [
              { badge: 'K1', title: lang === 'bm' ? 'Bentuk persamaan indeks gubahan' : 'Set up composite index equation', tex: `\\frac{${i1 * w1} + ${i2 * w2} + ${w3}x}{10} = ${iBar}`, why: lang === 'bm' ? 'Rumus Ī = ∑Iw / ∑w.' : 'Formula Ī = ∑Iw / ∑w.' },
              { badge: 'J1', title: lang === 'bm' ? 'Selesaikan x' : 'Solve for x', tex: `${w3}x = ${10 * iBar - (i1 * w1 + i2 * w2)} \\implies x = ${xAns}`, why: lang === 'bm' ? 'Asingkan x.' : 'Isolate x.' }
            ]
          };
        } else {
          // KBAT: Chained index I(2022->2024) = p, rises by r% from 2024 to 2026 -> find I(2022->2026)
          const iAB = U.pick([120, 125, 130]);
          const rise = U.pick([10, 20]);
          const iBC = 100 + rise;
          const ans = (iAB * iBC) / 100;
          const wrongAdd = iAB + rise;
          return {
            tier: 3, tpLabel: 'TP5–TP6 (KBAT)', subtopic: { bm: '10.3 Indeks Berantai Tiga Tempoh', en: '10.3 Chained Indices Across Three Periods' }, marks: 4,
            prompt: lang === 'bm'
              ? `Indeks gubahan kos pengeluaran pada tahun $2024$ berasaskan tahun $2022$ ialah $${iAB}$. Kos itu meningkat lagi sebanyak $${rise}\\%$ dari tahun $2024$ ke tahun $2026$. Cari indeks gubahan pada tahun $2026$ berasaskan tahun $2022$.`
              : `The composite production cost index in $2024$ based on $2022$ was $${iAB}$. The cost increased by another $${rise}\\%$ from $2024$ to $2026$. Find the composite index in $2026$ based on $2022$.`,
            answerType: 'number', correctValue: ans, displayAnswerTex: `I_{2022 \\to 2026} = \\frac{${iAB} \\times ${iBC}}{100} = ${ans}`,
            intentMeta: { given: `I(22→24) = ${iAB}, naik ${rise}% (24→26)`, goal: `(${iAB} × ${iBC}) / 100`, conceptRule: 'I_(A→C) = (I_(A→B) × I_(B→C)) / 100' },
            guidedSteps: [
              { prompt: { bm: `Peningkatan $${rise}\\%$ dari $2024$ ke $2026$ bermakna indeks $I_{2024 \\to 2026} = 100 + ${rise} = \\;?$`, en: `A $${rise}\\%$ increase from $2024$ to $2026$ means $I_{2024 \\to 2026} = 100 + ${rise} = \\;?$ ` }, expected: iBC, hint: { bm: `100 + ${rise} = ${iBC}.`, en: `100 + ${rise} = ${iBC}.` } },
              { prompt: { bm: `Gunakan rumus rantai $\\frac{${iAB} \\times ${iBC}}{100}$:`, en: `Apply the chain formula $\\frac{${iAB} \\times ${iBC}}{100}$:` }, expected: ans, hint: { bm: `${iAB * iBC} ÷ 100 = ${ans}.`, en: `${iAB * iBC} ÷ 100 = ${ans}.` } }
            ],
            traps: [{ value: wrongAdd, message: { bm: `Perangkap Rantai Indeks [P]! Jangan tambah terus ${iAB} + ${rise} = ${wrongAdd}! Peningkatan ${rise}% dikira ke atas nilai 2024, jadi wajib darab (${iAB} × ${iBC}) / 100 = ${ans}.`, en: `Chained Index Trap [P]! Never add ${iAB} + ${rise} = ${wrongAdd}! Multiply (${iAB} × ${iBC}) / 100 = ${ans}.` } }],
            hints: [lang === 'bm' ? `$I_{2024 \\to 2026} = ${iBC}$. Gunakan $\\frac{I_{A \\to B} \\times I_{B \\to C}}{100}$.` : `$I_{2024 \\to 2026} = ${iBC}$. Use $\\frac{I_{A \\to B} \\times I_{B \\to C}}{100}$.`],
            steps: [
              { badge: 'P1', title: lang === 'bm' ? 'Tentukan indeks 2026 berasaskan 2024' : 'Determine 2026 index based on 2024', tex: `I_{2024 \\to 2026} = 100 + ${rise} = ${iBC}`, why: lang === 'bm' ? 'Tahun asas perantaraan = 100.' : 'Intermediate base = 100.' },
              { badge: 'K1', title: lang === 'bm' ? 'Gunakan pendaraban rantai' : 'Apply chain rule', tex: `I_{2022 \\to 2026} = \\frac{${iAB} \\times ${iBC}}{100}`, why: lang === 'bm' ? 'Menghubungkan tahun asas 2022 ke 2026.' : 'Bridges base year 2022 to 2026.' },
              { badge: 'J1', title: lang === 'bm' ? 'Nilai tepat' : 'Final index', tex: `I_{2022 \\to 2026} = ${ans}`, why: lang === 'bm' ? 'Permudahkan.' : 'Simplify.' }
            ]
          };
        }
      }
    }
  ];

  App.chapters.push(...f4Stage2);
})(window.AddMathApp);
