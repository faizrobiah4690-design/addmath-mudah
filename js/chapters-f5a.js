/**
 * AddMath Mudah — Fasa 3: Tingkatan 5 Bab 1 hingga Bab 4 (Lengkap & Dwibahasa BM / EN)
 * Bab 1: Sukatan Membulat | Bab 2: Pembezaan | Bab 3: Pengamiran | Bab 4: Pilih Atur & Gabungan
 */
window.AddMathApp = window.AddMathApp || {};
window.AddMathApp.chapters = window.AddMathApp.chapters || [];

(function (App) {
  'use strict';
  const U = App.utils;

  const f5Stage3 = [
    // =========================================================================
    // FORM 5 CHAPTER 1: CIRCULAR MEASURE / SUKATAN MEMBULAT
    // =========================================================================
    {
      id: 'f5-c1',
      stage: 3,
      unlocked: true,
      form: 5,
      num: 1,
      code: { bm: 'T5 • Bab 1', en: 'F5 • Ch 1' },
      icon: 'rθ',
      color: '#f97316',
      category: 'geometri',
      title: { bm: 'Sukatan Membulat', en: 'Circular Measure' },
      subtitle: {
        bm: 'Radian, panjang lengkok s = rθ, perimeter sektor, luas sektor & luas tembereng berlorek',
        en: 'Radians, arc length s = rθ, sector perimeter, sector area & shaded segment area'
      },
      spmWeight: { bm: 'Kertas 1 & Kertas 2 (7–10 markah)', en: 'Paper 1 & Paper 2 (7–10 marks)' },
      concepts: [
        {
          title: { bm: '1. Radian & Panjang Lengkok s = rθ', en: '1. Radians & Arc Length s = rθ' },
          body: {
            bm: 'Satu **radian ($1\\text{ rad}$)** ialah sudut pusat bulatan apabila panjang lengkok sama dengan jejari ($s = r$). Semua rumus sukatan membulat **WAJIB menggunakan $\\theta$ dalam radian**!',
            en: 'One **radian ($1\\text{ rad}$)** is the central angle subtended when arc length equals radius ($s = r$). Every circular measure formula **MUST use $\\theta$ in radians**!'
          },
          formulas: [
            { label: { bm: 'Penukaran Darjah ↔ Radian', en: 'Degree ↔ Radian Conversion' }, tex: '\\pi\\text{ rad} = 180^\\circ \\implies \\text{rad} = \\text{darjah} \\times \\frac{\\pi}{180^\\circ}' },
            { label: { bm: 'Panjang Lengkok, Perentas & Perimeter Sektor', en: 'Arc Length, Chord & Sector Perimeter' }, tex: 's = r\\theta, \\qquad \\text{Perentas } AB = 2r\\sin\\left(\\frac{\\theta}{2}\\right), \\qquad P_{\\text{sektor}} = 2r + r\\theta' }
          ],
          tip: {
            bm: 'Gunakan nilai π yang dinyatakan oleh soalan (contohnya π = 3.142) supaya markah jawapan akhir [J1] tepat ke 4 angka bererti!',
            en: 'Use the exact π value stated in the question (e.g. π = 3.142) so your [J1] accuracy mark matches the SPM scheme!'
          }
        },
        {
          title: { bm: '2. Luas Sektor & Luas Tembereng Berlorek', en: '2. Area of Sector & Shaded Segment' },
          body: {
            bm: 'Luas tembereng berlorek diperoleh dengan menolak luas segi tiga $\\triangle OAB$ daripada luas sektor $OAB$. Semasa menekan $\\sin\\theta$, pastikan kalkulator berada dalam **mod RAD**!',
            en: 'A circular segment area is Sector Area minus Triangle $\\triangle OAB$ Area. When pressing $\\sin\\theta$, ensure your calculator is in **RAD mode**!'
          },
          formulas: [
            { label: { bm: 'Luas Sektor Bulatan', en: 'Area of Circular Sector' }, tex: 'A_{\\text{sektor}} = \\frac{1}{2}r^2\\theta' },
            { label: { bm: 'Luas Tembereng (θ dalam Radian)', en: 'Area of Segment (θ in Radians)' }, tex: 'A_{\\text{temb}} = \\frac{1}{2}r^2\\theta - \\frac{1}{2}r^2\\sin\\theta = \\frac{1}{2}r^2(\\theta - \\sin\\theta)' }
          ],
          tip: {
            bm: 'Jika kalkulator kekal mod DEG, tukar θ radian kepada darjah dahulu hanya untuk bahagian sin(θ°), tetapi KEKALKAN θ radian bagi sebutan ½r²θ!',
            en: 'If keeping DEG mode, convert θ to degrees ONLY inside sin(θ°), while keeping θ in radians for ½r²θ!'
          }
        }
      ],
      traps: [
        {
          title: { bm: 'Perangkap Mod Kalkulator DEG vs RAD', en: 'Calculator DEG vs RAD Mode Trap' },
          desc: {
            bm: 'Menekan sin(1.2) dalam mod Darjah memberi 0.0209, sedangkan dalam mod Radian sin(1.2 rad) = 0.9320! Ini kesilapan paling kerap dalam SPM.',
            en: 'Evaluating sin(1.2) in Degree mode gives 0.0209 instead of sin(1.2 rad) = 0.9320!'
          }
        }
      ],
      solvers: [
        {
          id: 'circular-sector-solver',
          title: { bm: 'Solver Sektor, Perentas & Tembereng Bulatan', en: 'Sector, Chord & Segment Master Solver' },
          desc: {
            bm: 'Masukkan jejari r dan sudut pusat θ (dalam radian) untuk menjana panjang lengkok, perimeter, luas sektor & luas tembereng.',
            en: 'Enter radius r and angle θ (in radians) to compute arc length, chord, sector area & shaded segment area.'
          },
          inputs: [
            { id: 'r', label: { bm: 'Jejari r (cm)', en: 'Radius r (cm)' }, default: 10 },
            { id: 'theta', label: { bm: 'Sudut θ (rad)', en: 'Angle θ (rad)' }, default: 1.4 }
          ],
          solve: function (v, lang) {
            const r = Math.max(0.5, Math.abs(Number(v.r) || 8));
            const th = Math.max(0.1, Math.min(6.2, Math.abs(Number(v.theta) || 1.2)));
            const s = r * th;
            const chord = 2 * r * Math.sin(th / 2);
            const areaSec = 0.5 * r * r * th;
            const areaSeg = 0.5 * r * r * (th - Math.sin(th));
            return {
              problemTex: `r = ${r}\\text{ cm}, \\quad \\theta = ${th}\\text{ rad}`,
              steps: [
                { badge: 'P1', title: lang === 'bm' ? 'Langkah 1: Panjang lengkok & perentas' : 'Step 1: Arc length & chord', tex: `s = (${r})(${th}) = ${U.roundStr(s, 3)}\\text{ cm}, \\quad \\text{Perentas} = 2(${r})\\sin(${U.roundStr(th / 2, 3)}) = ${U.roundStr(chord, 3)}\\text{ cm}`, why: lang === 'bm' ? 'Guna s = rθ dan petua trigonometri segi tiga sama kaki.' : 'Use s = rθ and isosceles triangle trigonometry.' },
                { badge: 'K1', title: lang === 'bm' ? 'Langkah 2: Luas sektor OAB' : 'Step 2: Sector OAB area', tex: `A_{\\text{sektor}} = \\frac{1}{2}(${r})^2(${th}) = ${U.roundStr(areaSec, 3)}\\text{ cm}^2`, why: lang === 'bm' ? 'Guna rumus ½r²θ (θ dalam radian).' : 'Apply ½r²θ with θ in radians.' },
                { badge: 'J1', title: lang === 'bm' ? 'Langkah 3: Luas tembereng berlorek' : 'Step 3: Shaded segment area', tex: `A_{\\text{temb}} = \\frac{1}{2}(${r})^2(${th} - \\sin ${th}) = ${U.roundStr(areaSeg, 3)}\\text{ cm}^2`, why: lang === 'bm' ? 'Pastikan sin θ dikira dalam mod RAD!' : 'Ensure sin θ is evaluated in RAD mode!' }
              ],
              finalTex: `s = ${U.roundStr(s, 2)}\\text{ cm},\\; A_{\\text{sektor}} = ${U.roundStr(areaSec, 2)}\\text{ cm}^2,\\; A_{\\text{temb}} = ${U.roundStr(areaSeg, 2)}\\text{ cm}^2`
            };
          }
        }
      ],
      generateQuestion: function (tier, lang) {
        if (tier === 1) {
          const r = U.randInt(6, 14);
          const th = U.pick([0.8, 1.2, 1.5, 2.0, 2.5]);
          const perim = U.round(2 * r + r * th, 2);
          return {
            tier: 1, tpLabel: 'TP1–TP2', subtopic: { bm: '1.2 Panjang Lengkok & Perimeter Sektor', en: '1.2 Arc Length & Sector Perimeter' }, marks: 3,
            prompt: lang === 'bm'
              ? `Sebuah sektor bulatan mempunyai jejari $r = ${r}\\text{ cm}$ dan sudut pusat $\\theta = ${th}\\text{ rad}$. Cari **perimeter penuh** sektor itu (dalam $\\text{cm}$).`
              : `A circular sector has radius $r = ${r}\\text{ cm}$ and central angle $\\theta = ${th}\\text{ rad}$. Find the **total perimeter** of the sector (in $\\text{cm}$).`,
            answerType: 'number', correctValue: perim, displayAnswerTex: `${perim}\\text{ cm}`,
            intentMeta: { given: `r = ${r}, \\theta = ${th}\\text{ rad}`, goal: 'Cari perimeter sektor (2r + s)', conceptRule: 's = rθ, Perimeter = 2r + rθ' },
            guidedSteps: [
              { prompt: { bm: `Kira panjang lengkok $s = r\\theta = (${r})(${th})$:`, en: `Compute arc length $s = r\\theta = (${r})(${th})$:` }, expected: U.round(r * th, 2), hint: { bm: `Darab ${r} dengan ${th}.`, en: `Multiply ${r} by ${th}.` } },
              { prompt: { bm: `Tambahkan dua jejari ($2r = ${2 * r}$) kepada panjang lengkok untuk perimeter sektor:`, en: `Add two radii ($2r = ${2 * r}$) to the arc length for full perimeter:` }, expected: perim, hint: { bm: `Kira ${2 * r} + ${U.round(r * th, 2)}.`, en: `Compute ${2 * r} + ${U.round(r * th, 2)}.` } }
            ],
            traps: [
              { value: U.round(r * th, 2), message: { bm: 'Perangkap [K]: Itu baru panjang lengkok s! Perimeter sektor wajib ditambah dengan 2 jejari (2r + s).', en: 'Trap [K]: That is only arc length s! Sector perimeter includes both straight radii (2r + s).' } }
            ],
            hints: [lang === 'bm' ? 'Kira s = rθ dahulu, kemudian tambah 2r.' : 'Find s = rθ first, then add 2r.'],
            steps: [
              { badge: 'P1', title: lang === 'bm' ? 'Panjang lengkok' : 'Arc length', tex: `s = (${r})(${th}) = ${U.roundStr(r * th, 2)}\\text{ cm}`, why: 's = rθ.' },
              { badge: 'J1', title: lang === 'bm' ? 'Perimeter sektor' : 'Sector perimeter', tex: `P = 2(${r}) + ${U.roundStr(r * th, 2)} = ${perim}\\text{ cm}`, why: 'Jumlah 2 jejari + lengkok.' }
            ]
          };
        }
        if (tier === 2) {
          const r = U.pick([8, 10, 12]);
          const deg = U.pick([60, 90, 120, 150]);
          const piUsed = 3.142;
          const th = (deg * piUsed) / 180;
          const area = U.round(0.5 * r * r * th, 2);
          return {
            tier: 2, tpLabel: 'TP3–TP4', subtopic: { bm: '1.3 Penukaran Radian & Luas Sektor', en: '1.3 Radian Conversion & Sector Area' }, marks: 4,
            prompt: lang === 'bm'
              ? `Sebuah sektor bulatan berjejari $${r}\\text{ cm}$ mencangkum sudut pusat $${deg}^\\circ$. Menggunakan $\\pi = 3.142$, cari **luas sektor** itu kepada 2 tempat perpuluhan.`
              : `A circular sector of radius $${r}\\text{ cm}$ subtends a central angle of $${deg}^\\circ$. Using $\\pi = 3.142$, find the **area of the sector** to 2 decimal places.`,
            answerType: 'number', tolerance: 0.15, correctValue: area, displayAnswerTex: `${area}\\text{ cm}^2`,
            intentMeta: { given: `r = ${r}, \\theta = ${deg}^\\circ, \\pi = 3.142`, goal: 'Tukar ke radian & kira luas sektor', conceptRule: 'θ(rad) = θ° × (3.142/180), A = ½r²θ' },
            guidedSteps: [
              { prompt: { bm: `Tukar $${deg}^\\circ$ kepada radian menggunakan $\\frac{${deg} \\times 3.142}{180}$ (3 t.p.):`, en: `Convert $${deg}^\\circ$ to radians via $\\frac{${deg} \\times 3.142}{180}$ (3 d.p.):` }, expected: U.round(th, 3), hint: { bm: `Kira (${deg} × 3.142) / 180.`, en: `Evaluate (${deg} × 3.142) / 180.` } },
              { prompt: { bm: `Kira luas sektor $A = \\frac{1}{2}(${r})^2(${U.roundStr(th, 4)})$ (2 t.p.):`, en: `Compute sector area $A = \\frac{1}{2}(${r})^2(${U.roundStr(th, 4)})$ (2 d.p.):` }, expected: area, hint: { bm: `Darab ${0.5 * r * r} dengan ${U.roundStr(th, 4)}.`, en: `Multiply ${0.5 * r * r} by ${U.roundStr(th, 4)}.` } }
            ],
            traps: [
              { value: U.round(0.5 * r * r * deg, 2), message: { bm: 'Perangkap [P]: Anda menggantikan darjah terus ke dalam ½r²θ! Wajib tukar darjah kepada radian dahulu.', en: 'Trap [P]: You plugged degrees straight into ½r²θ! Convert to radians first.' } }
            ],
            hints: [lang === 'bm' ? 'Tukar darjah kepada radian dahulu.' : 'Convert degrees to radians first.'],
            steps: [
              { badge: 'P1', title: lang === 'bm' ? 'Tukar sudut kepada radian' : 'Convert angle to radians', tex: `\\theta = ${deg}^\\circ \\times \\frac{3.142}{180^\\circ} = ${U.roundStr(th, 4)}\\text{ rad}`, why: 'π rad = 180°.' },
              { badge: 'K1', title: lang === 'bm' ? 'Ganti ke dalam rumus luas sektor' : 'Substitute into sector area', tex: `A = \\frac{1}{2}(${r})^2(${U.roundStr(th, 4)})`, why: 'A = ½r²θ.' },
              { badge: 'J1', title: lang === 'bm' ? 'Luas sektor' : 'Sector area', tex: `A = ${area}\\text{ cm}^2`, why: 'Bundarkan ke 2 t.p.' }
            ]
          };
        }
        // Tier 3 KBAT: Shaded segment area
        const r = U.pick([10, 12, 14]);
        const th = U.pick([1.2, 1.5, 1.8, 2.0]);
        const seg = U.round(0.5 * r * r * (th - Math.sin(th)), 2);
        const degTrap = U.round(0.5 * r * r * (th - Math.sin((th * Math.PI) / 180)), 2);
        return {
          tier: 3, tpLabel: 'TP5–TP6 (KBAT)', subtopic: { bm: '1.4 Aplikasi Luas Tembereng Berlorek', en: '1.4 Shaded Circular Segment Area' }, marks: 4,
          prompt: lang === 'bm'
            ? `Dalam sebuah bulatan berjejari $${r}\\text{ cm}$, satu perentas $AB$ mencangkum sudut pusat $\\theta = ${th}\\text{ rad}$ di pusat $O$. Cari **luas tembereng berlorek** yang dibatasi oleh perentas $AB$ dan lengkok minor $AB$ (bundarkan kepada 2 tempat perpuluhan).`
            : `In a circle of radius $${r}\\text{ cm}$, chord $AB$ subtends a central angle $\\theta = ${th}\\text{ rad}$ at centre $O$. Find the **area of the minor segment** bounded by chord $AB$ and arc $AB$ (to 2 d.p.).`,
          answerType: 'number', tolerance: 0.15, correctValue: seg, displayAnswerTex: `${seg}\\text{ cm}^2`,
          intentMeta: { given: `r = ${r}, \\theta = ${th}\\text{ rad}`, goal: 'Cari luas tembereng ½r²(θ − sin θ)', conceptRule: 'A_temb = ½r²(θ − sin θ) dengan kalkulator dalam mod RAD' },
          guidedSteps: [
            { prompt: { bm: `Pastikan mod **RAD**! Kira nilai $(\\theta - \\sin\\theta) = ${th} - \\sin(${th})$ (3 t.p.):`, en: `In **RAD** mode, evaluate $(\\theta - \\sin\\theta) = ${th} - \\sin(${th})$ (3 d.p.):` }, expected: U.round(th - Math.sin(th), 3), hint: { bm: `sin(${th} rad) ≈ ${U.roundStr(Math.sin(th), 3)}.`, en: `sin(${th} rad) ≈ ${U.roundStr(Math.sin(th), 3)}.` } },
            { prompt: { bm: `Darabkan dengan $\\frac{1}{2}r^2 = ${0.5 * r * r}$ untuk luas tembereng (2 t.p.):`, en: `Multiply by $\\frac{1}{2}r^2 = ${0.5 * r * r}$ for segment area (2 d.p.):` }, expected: seg, hint: { bm: `Kira ${0.5 * r * r} × ${U.roundStr(th - Math.sin(th), 4)}.`, en: `Multiply ${0.5 * r * r} by ${U.roundStr(th - Math.sin(th), 4)}.` } }
          ],
          traps: [
            { value: degTrap, message: { bm: 'Perangkap Klasik SPM [K]: Kalkulator anda berada dalam mod DARJAH (DEG) semasa menekan sin(θ)! Tukar ke mod RAD.', en: 'Classic SPM Trap [K]: Your calculator was in DEGREE mode when evaluating sin(θ)! Switch to RAD mode.' } }
          ],
          hints: [lang === 'bm' ? 'Guna ½r²(θ − sin θ) dalam mod RAD.' : 'Use ½r²(θ − sin θ) in RAD mode.'],
          steps: [
            { badge: 'P1', title: lang === 'bm' ? 'Luas sektor OAB' : 'Area of sector OAB', tex: `A_{\\text{sektor}} = \\frac{1}{2}(${r})^2(${th}) = ${U.roundStr(0.5 * r * r * th, 3)}`, why: '½r²θ.' },
            { badge: 'K1', title: lang === 'bm' ? 'Tolak luas segi tiga OAB (mod RAD)' : 'Subtract triangle OAB (RAD mode)', tex: `A_{\\text{temb}} = \\frac{1}{2}(${r})^2(${th} - \\sin ${th})`, why: 'sin θ dalam mod radian.' },
            { badge: 'J1', title: lang === 'bm' ? 'Luas tembereng berlorek' : 'Shaded segment area', tex: `A_{\\text{temb}} = ${seg}\\text{ cm}^2`, why: '2 tempat perpuluhan.' }
          ]
        };
      }
    },

    // =========================================================================
    // FORM 5 CHAPTER 2: DIFFERENTIATION / PEMBEZAAN
    // =========================================================================
    {
      id: 'f5-c2',
      stage: 3,
      unlocked: true,
      form: 5,
      num: 2,
      code: { bm: 'T5 • Bab 2', en: 'F5 • Ch 2' },
      icon: 'dy/dx',
      color: '#ef4444',
      category: 'kalkulus',
      title: { bm: 'Pembezaan', en: 'Differentiation' },
      subtitle: {
        bm: 'Petua kuasa/hasil darab/bahagi/rantai, tangen & normal, titik pusingan & kadar perubahan',
        en: 'Power/product/quotient/chain rules, tangents & normals, turning points & connected rates'
      },
      spmWeight: { bm: 'Topik Gergasi SPM! K1 & K2 (12–18 markah)', en: 'Heavyweight SPM Topic! P1 & P2 (12–18 marks)' },
      concepts: [
        {
          title: { bm: '1. Petua Pembezaan (Kuasa, Rantai, Hasil Darab & Bahagi)', en: '1. Differentiation Rules (Power, Chain, Product & Quotient)' },
          body: {
            bm: 'Terbitan pertama $\\frac{dy}{dx}$ mewakili **fungsi kecerunan tangen** pada sebarang titik di atas lengkung $y = f(x)$.',
            en: 'The first derivative $\\frac{dy}{dx}$ represents the **gradient function of the tangent** at any point along $y = f(x)$.'
          },
          formulas: [
            { label: { bm: 'Petua Kuasa & Petua Rantai Komposit', en: 'Power Rule & Composite Chain Rule' }, tex: '\\frac{d}{dx}(ax^n) = anx^{n-1}, \\qquad \\frac{d}{dx}(ax+b)^n = n(ax+b)^{n-1} \\cdot a' },
            { label: { bm: 'Petua Hasil Darab & Hasil Bahagi', en: 'Product & Quotient Rules' }, tex: '\\frac{d}{dx}(uv) = u\\frac{dv}{dx} + v\\frac{du}{dx}, \\qquad \\frac{d}{dx}\\left(\\frac{u}{v}\\right) = \\frac{v\\frac{du}{dx} - u\\frac{dv}{dx}}{v^2}' }
          ],
          tip: {
            bm: 'Jangan lupa darabkan pembezaan sebutan dalam kurungan (· a) semasa menggunakan Petua Rantai!',
            en: 'Never forget to multiply by the inner derivative (· a) when applying the Chain Rule!'
          }
        },
        {
          title: { bm: '2. Tangen/Normal, Titik Pusingan & Kadar Perubahan', en: '2. Tangents/Normals, Turning Points & Rates of Change' },
          body: {
            bm: 'Pada titik pegun/pusingan, kecerunan tangen ialah sifar ($\\frac{dy}{dx} = 0$). Gunakan terbitan kedua $\\frac{d^2y}{dx^2}$ untuk menguji sifat maksimum atau minimum!',
            en: 'At stationary/turning points, $\\frac{dy}{dx} = 0$. Use the second derivative $\\frac{d^2y}{dx^2}$ to classify maximum vs minimum!'
          },
          formulas: [
            { label: { bm: 'Ujian Terbitan Kedua', en: 'Second Derivative Test' }, tex: '\\frac{dy}{dx} = 0: \\quad \\frac{d^2y}{dx^2} > 0 \\text{ (Minimum } \\cup\\text{)}, \\quad \\frac{d^2y}{dx^2} < 0 \\text{ (Maksimum } \\cap\\text{)}' },
            { label: { bm: 'Kadar Perubahan & Perubahan Kecil', en: 'Connected Rates & Small Changes' }, tex: '\\frac{dy}{dt} = \\frac{dy}{dx} \\times \\frac{dx}{dt}, \\qquad \\delta y \\approx \\frac{dy}{dx} \\times \\delta x' }
          ],
          tip: {
            bm: 'Garis normal berserenjang dengan tangen: m_normal = −1 / m_tangen!',
            en: 'The normal line is perpendicular to the tangent: m_normal = −1 / m_tangent!'
          }
        }
      ],
      traps: [
        {
          title: { bm: 'Terbalik Tanda Ujian Terbitan Kedua', en: 'Reversing the Second Derivative Sign' },
          desc: {
            bm: 'd²y/dx² POSITIF (> 0) bermaksud lengkung senyum (∪) iaitu titik MINIMUM, manakala d²y/dx² NEGATIF (< 0) ialah titik MAKSIMUM!',
            en: 'Positive d²y/dx² (> 0) means concave up (∪) = MINIMUM point; negative (< 0) = MAXIMUM point!'
          }
        }
      ],
      solvers: [
        {
          id: 'diff-tangent-solver',
          title: { bm: 'Solver Pembezaan, Tangen, Normal & Titik Pegun', en: 'Cubic Derivative, Tangent & Normal Solver' },
          desc: {
            bm: 'Bagi y = ax³ + bx² + cx + d pada x = x₀, jana dy/dx, d²y/dx², persamaan tangen & kecerunan normal.',
            en: 'For y = ax³ + bx² + cx + d at x = x₀, generate dy/dx, d²y/dx², tangent equation & normal gradient.'
          },
          inputs: [
            { id: 'a', label: 'a (x³)', default: 1 },
            { id: 'b', label: 'b (x²)', default: -3 },
            { id: 'c', label: 'c (x)', default: 2 },
            { id: 'x0', label: { bm: 'Pada x₀', en: 'At x₀' }, default: 2 }
          ],
          solve: function (v, lang) {
            const a = Number(v.a) || 0, b = Number(v.b) || 0, c = Number(v.c) || 0, x0 = Number(v.x0) || 0;
            const y0 = a * x0 * x0 * x0 + b * x0 * x0 + c * x0;
            const mTan = 3 * a * x0 * x0 + 2 * b * x0 + c;
            const d2y = 6 * a * x0 + 2 * b;
            const cTan = y0 - mTan * x0;
            const polyStr = U.polyTex([{ c: a, p: 3 }, { c: b, p: 2 }, { c: c, p: 1 }]);
            const d1Str = U.polyTex([{ c: 3 * a, p: 2 }, { c: 2 * b, p: 1 }, { c: c, p: 0 }]);
            return {
              problemTex: `y = ${polyStr} \\quad \\text{pada } x = ${x0}`,
              steps: [
                { badge: 'P1', title: lang === 'bm' ? 'Langkah 1: Bezakan terhadap x' : 'Step 1: Differentiate w.r.t. x', tex: `\\frac{dy}{dx} = ${d1Str}, \\qquad \\frac{d^2y}{dx^2} = ${U.polyTex([{ c: 6 * a, p: 1 }, { c: 2 * b, p: 0 }])}`, why: lang === 'bm' ? 'Guna petua kuasa nxⁿ⁻¹.' : 'Apply power rule nxⁿ⁻¹.' },
                { badge: 'K1', title: lang === 'bm' ? 'Langkah 2: Nilaikan y₀ dan kecerunan tangen m_T' : 'Step 2: Evaluate y₀ and tangent gradient m_T', tex: `y(${x0}) = ${U.roundStr(y0)}, \\qquad m_T = \\left.\\frac{dy}{dx}\\right|_{x=${x0}} = ${U.roundStr(mTan)}`, why: lang === 'bm' ? 'Gantikan x = x₀ ke dalam dy/dx.' : 'Substitute x = x₀ into dy/dx.' },
                { badge: 'J1', title: lang === 'bm' ? 'Langkah 3: Persamaan Tangen' : 'Step 3: Tangent Line Equation', tex: `y - (${U.roundStr(y0)}) = ${U.roundStr(mTan)}(x - ${x0}) \\implies y = ${U.roundStr(mTan)}x ${U.signedNum(U.round(cTan, 3))}`, why: mTan !== 0 ? `m_{\\text{normal}} = ${U.roundStr(-1 / mTan, 3)}` : 'Tangen mengufuk (titik pegun!).' }
              ],
              finalTex: `m_T = ${U.roundStr(mTan)},\\; \\text{Tangen: } y = ${U.roundStr(mTan)}x ${U.signedNum(U.round(cTan, 3))},\\; \\frac{d^2y}{dx^2}(${x0}) = ${U.roundStr(d2y)}`
            };
          }
        }
      ],
      generateQuestion: function (tier, lang) {
        if (tier === 1) {
          const a = U.randInt(2, 4);
          const b = U.randInt(-5, 5, true);
          const x0 = U.pick([1, 2, -1]);
          const grad = 2 * a * x0 + b;
          const poly = U.polyTex([{ c: a, p: 2 }, { c: b, p: 1 }, { c: 3, p: 0 }]);
          return {
            tier: 1, tpLabel: 'TP1–TP2', subtopic: { bm: '2.2 Kecerunan Tangen pada Suatu Titik', en: '2.2 Gradient of Tangent at a Point' }, marks: 3,
            prompt: lang === 'bm'
              ? `Cari **kecerunan tangen** kepada lengkung $y = ${poly}$ pada titik dengan $x = ${x0}$.`
              : `Find the **gradient of the tangent** to the curve $y = ${poly}$ at the point where $x = ${x0}$.`,
            answerType: 'number', correctValue: grad, displayAnswerTex: `m_T = ${grad}`,
            intentMeta: { given: `y = ${poly}, x = ${x0}`, goal: 'Cari nilai dy/dx apabila x = ' + x0, conceptRule: 'd/dx(ax² + bx + c) = 2ax + b' },
            guidedSteps: [
              { prompt: { bm: `Apakah pekali bagi $x$ dalam $\\frac{dy}{dx}$ selepas membezakan $${a}x^2$?`, en: `What is the coefficient of $x$ in $\\frac{dy}{dx}$ after differentiating $${a}x^2$?` }, expected: 2 * a, hint: { bm: `Darab kuasa 2 dengan ${a}.`, en: `Multiply power 2 by ${a}.` } },
              { prompt: { bm: `Gantikan $x = ${x0}$ ke dalam $\\frac{dy}{dx} = ${2 * a}x ${U.signedNum(b)}$:`, en: `Substitute $x = ${x0}$ into $\\frac{dy}{dx} = ${2 * a}x ${U.signedNum(b)}$:` }, expected: grad, hint: { bm: `Kira ${2 * a}(${x0}) + (${b}).`, en: `Compute ${2 * a}(${x0}) + (${b}).` } }
            ],
            traps: [
              { value: a * x0 * x0 + b * x0 + 3, message: { bm: 'Perangkap [P]: Itu nilai koordinat-y asal, bukan kecerunan dy/dx! Bezakan dahulu.', en: 'Trap [P]: That is the y-coordinate, not the derivative dy/dx!' } }
            ],
            hints: [lang === 'bm' ? 'Bezakan y untuk dapat dy/dx = 2ax + b, kemudian ganti x.' : 'Differentiate y to get dy/dx = 2ax + b, then substitute x.'],
            steps: [
              { badge: 'P1', title: lang === 'bm' ? 'Bezakan y terhadap x' : 'Differentiate y w.r.t. x', tex: `\\frac{dy}{dx} = ${2 * a}x ${U.signedNum(b)}`, why: 'Petua kuasa.' },
              { badge: 'J1', title: lang === 'bm' ? 'Gantikan x = ' + x0 : 'Substitute x = ' + x0, tex: `m_T = ${2 * a}(${x0}) + (${b}) = ${grad}`, why: 'Kecerunan tangen.' }
            ]
          };
        }
        if (tier === 2) {
          // Turning point of quadratic/cubic or Chain rule at x=1: y = (ax + b)^3
          const a = U.randInt(2, 4);
          const xStar = U.randInt(-3, 4, true);
          const b = -2 * a * xStar;
          const c = U.randInt(1, 9);
          const yMin = a * xStar * xStar + b * xStar + c;
          const poly = U.polyTex([{ c: a, p: 2 }, { c: b, p: 1 }, { c: c, p: 0 }]);
          return {
            tier: 2, tpLabel: 'TP3–TP4', subtopic: { bm: '2.4 Titik Pusingan (dy/dx = 0)', en: '2.4 Turning Points (dy/dx = 0)' }, marks: 4,
            prompt: lang === 'bm'
              ? `Cari **nilai minimum bagi $y$** untuk lengkung $y = ${poly}$ menggunakan kaedah pembezaan.`
              : `Find the **minimum value of $y$** for the curve $y = ${poly}$ using differentiation.`,
            answerType: 'number', correctValue: yMin, displayAnswerTex: `y_{\\min} = ${yMin} \\quad (\\text{pada } x = ${xStar})`,
            intentMeta: { given: `y = ${poly}`, goal: 'Selesaikan dy/dx = 0 untuk x, kemudian cari nilai minimum y', conceptRule: 'Pada titik pusingan, dy/dx = 0' },
            guidedSteps: [
              { prompt: { bm: `Tetapkan $\\frac{dy}{dx} = ${2 * a}x ${U.signedNum(b)} = 0$. Apakah nilai $x$?`, en: `Set $\\frac{dy}{dx} = ${2 * a}x ${U.signedNum(b)} = 0$. What is $x$?` }, expected: xStar, hint: { bm: `Selesaikan ${2 * a}x = ${-b}.`, en: `Solve ${2 * a}x = ${-b}.` } },
              { prompt: { bm: `Gantikan $x = ${xStar}$ ke dalam persamaan asal $y = ${poly}$ untuk nilai minimum $y$:`, en: `Substitute $x = ${xStar}$ back into $y = ${poly}$ for minimum $y$:` }, expected: yMin, hint: { bm: `Kira ${a}(${xStar})² + (${b})(${xStar}) + ${c}.`, en: `Compute ${a}(${xStar})² + (${b})(${xStar}) + ${c}.` } }
            ],
            traps: [
              { value: xStar, message: { bm: 'Perangkap [J]: Itu nilai x pada titik minimum! Soalan meminta nilai minimum bagi y.', en: 'Trap [J]: That is the x-coordinate! Substitute x back into y to get minimum y.' } }
            ],
            hints: [lang === 'bm' ? 'Tetapkan dy/dx = 0 untuk cari x, kemudian ganti ke dalam y.' : 'Set dy/dx = 0 for x, then substitute into y.'],
            steps: [
              { badge: 'P1', title: lang === 'bm' ? 'Syarat titik pegun dy/dx = 0' : 'Stationary condition dy/dx = 0', tex: `\\frac{dy}{dx} = ${2 * a}x ${U.signedNum(b)} = 0 \\implies x = ${xStar}`, why: 'Kecerunan sifar pada titik pusingan.' },
              { badge: 'J1', title: lang === 'bm' ? 'Nilai minimum y' : 'Minimum value of y', tex: `y_{\\min} = ${a}(${xStar})^2 + (${b})(${xStar}) + ${c} = ${yMin}`, why: 'd²y/dx² = ' + (2 * a) + ' > 0 mengesahkan minimum.' }
            ]
          };
        }
        // Tier 3 KBAT: Connected rates of change! Volume/Area of circle or cube expanding
        // Area A = pi r^2 or Cube V = x^3 -> let's use V = x^3 or Area of square/circle in terms of pi or exact number!
        // Let's use y = k x^3 or Cube V = x^3 so answer is exact clean integer/decimal without pi ambiguity!
        const xVal = U.randInt(2, 5);
        const dxdt = U.pick([0.2, 0.5, 1.5, 2]);
        const dVdx = 3 * xVal * xVal;
        const dVdt = U.round(dVdx * dxdt, 3);
        return {
          tier: 3, tpLabel: 'TP5–TP6 (KBAT)', subtopic: { bm: '2.4 Kadar Perubahan Terhubung (Petua Rantai)', en: '2.4 Connected Rates of Change (Chain Rule)' }, marks: 4,
          prompt: lang === 'bm'
            ? `Sebuah kiub logam mengembang apabila dipanaskan supaya panjang sisinya $x\\text{ cm}$ bertambah pada kadar tetap $${dxdt}\\text{ cm s}^{-1}$. Cari **kadar perubahan isi padu** kiub itu ($\\text{cm}^3\\text{ s}^{-1}$) pada ketika $x = ${xVal}\\text{ cm}$.`
            : `A metal cube expands when heated such that its side length $x\\text{ cm}$ increases at a constant rate of $${dxdt}\\text{ cm s}^{-1}$. Find the **rate of change of its volume** ($\\text{cm}^3\\text{ s}^{-1}$) at the instant when $x = ${xVal}\\text{ cm}$.`,
          answerType: 'number', correctValue: dVdt, displayAnswerTex: `\\frac{dV}{dt} = ${dVdt}\\text{ cm}^3\\text{ s}^{-1}`,
          intentMeta: { given: `V = x^3, \\frac{dx}{dt} = ${dxdt}, x = ${xVal}`, goal: 'Cari dV/dt menggunakan Petua Rantai', conceptRule: 'dV/dt = (dV/dx) × (dx/dt)' },
          guidedSteps: [
            { prompt: { bm: `Isi padu kiub ialah $V = x^3$, maka $\\frac{dV}{dx} = 3x^2$. Nilaikan $\\frac{dV}{dx}$ apabila $x = ${xVal}$:`, en: `Cube volume is $V = x^3$, so $\\frac{dV}{dx} = 3x^2$. Evaluate $\\frac{dV}{dx}$ at $x = ${xVal}$:` }, expected: dVdx, hint: { bm: `Kira 3 × (${xVal})².`, en: `Compute 3 × (${xVal})².` } },
            { prompt: { bm: `Guna Petua Rantai $\\frac{dV}{dt} = \\frac{dV}{dx} \\times \\frac{dx}{dt} = ${dVdx} \\times ${dxdt}$:`, en: `Apply Chain Rule $\\frac{dV}{dt} = \\frac{dV}{dx} \\times \\frac{dx}{dt} = ${dVdx} \\times ${dxdt}$:` }, expected: dVdt, hint: { bm: `Darab ${dVdx} dengan ${dxdt}.`, en: `Multiply ${dVdx} by ${dxdt}.` } }
          ],
          traps: [
            { value: dVdx, message: { bm: 'Perangkap [K]: Itu baru dV/dx! Jangan lupa darabkan dengan kadar dx/dt mengikut Petua Rantai.', en: 'Trap [K]: That is only dV/dx! Multiply by dx/dt using the Chain Rule.' } }
          ],
          hints: [lang === 'bm' ? 'Tulis V = x³, cari dV/dx = 3x², kemudian darab dx/dt.' : 'Write V = x³, find dV/dx = 3x², then multiply by dx/dt.'],
          steps: [
            { badge: 'P1', title: lang === 'bm' ? 'Bezakan isi padu V = x³' : 'Differentiate volume V = x³', tex: `\\frac{dV}{dx} = 3x^2 \\implies \\left.\\frac{dV}{dx}\\right|_{x=${xVal}} = 3(${xVal})^2 = ${dVdx}`, why: 'Kadar perubahan V terhadap x.' },
            { badge: 'K1', title: lang === 'bm' ? 'Bina hubungan Petua Rantai' : 'Set up Chain Rule', tex: `\\frac{dV}{dt} = \\frac{dV}{dx} \\times \\frac{dx}{dt} = ${dVdx} \\times ${dxdt}`, why: 'dx saling mansuh secara berantai.' },
            { badge: 'J1', title: lang === 'bm' ? 'Kadar perubahan isi padu' : 'Rate of change of volume', tex: `\\frac{dV}{dt} = ${dVdt}\\text{ cm}^3\\text{ s}^{-1}`, why: 'Nilai tepat.' }
          ]
        };
      }
    },

    // =========================================================================
    // FORM 5 CHAPTER 3: INTEGRATION / PENGAMIRAN
    // =========================================================================
    {
      id: 'f5-c3',
      stage: 3,
      unlocked: true,
      form: 5,
      num: 3,
      code: { bm: 'T5 • Bab 3', en: 'F5 • Ch 3' },
      icon: '∫dx',
      color: '#dc2626',
      category: 'kalkulus',
      title: { bm: 'Pengamiran', en: 'Integration' },
      subtitle: {
        bm: 'Songsangan pembezaan, kamiran tak tentu (+c), kamiran tentu, luas bawah lengkung & isi padu kisaran',
        en: 'Reverse differentiation, indefinite (+c), definite integrals, area under curve & volume of revolution'
      },
      spmWeight: { bm: 'Topik Gergasi SPM! K1 & K2 (12–16 markah)', en: 'Heavyweight SPM Topic! P1 & P2 (12–16 marks)' },
      concepts: [
        {
          title: { bm: '1. Pengamiran sebagai Songsangan Pembezaan & Pemalar +c', en: '1. Integration as Anti-Differentiation & Constant +c' },
          body: {
            bm: 'Jika $\\frac{dy}{dx} = f\'(x)$, maka $y = \\int f\'(x)\\,dx$. Bagi **kamiran tak tentu**, tambah kuasa dengan 1, bahagi dengan kuasa baru, dan **wajib tulis $+ c$**! Jika diberi satu titik $(x_1, y_1)$ pada lengkung, gantikan titik tersebut untuk mencari nilai $c$.',
            en: 'If $\\frac{dy}{dx} = f\'(x)$, then $y = \\int f\'(x)\\,dx$. For **indefinite integrals**, add 1 to the power, divide by the new power, and **always include $+ c$**!'
          },
          formulas: [
            { label: { bm: 'Kamiran Tak Tentu Polinomial & Komposit', en: 'Polynomial & Linear Composite Integrals' }, tex: '\\int ax^n\\,dx = \\frac{ax^{n+1}}{n+1} + c \\;(n \\ne -1), \\qquad \\int (ax+b)^n\\,dx = \\frac{(ax+b)^{n+1}}{a(n+1)} + c' }
          ],
          tip: {
            bm: 'Perhatikan beza: Pembezaan DARAB pekali dalaman a, manakala Pengamiran BAHAGI dengan pekali dalaman a!',
            en: 'Contrast: Differentiation MULTIPLIES by inner coefficient a, whereas Integration DIVIDES by inner coefficient a!'
          }
        },
        {
          title: { bm: '2. Kamiran Tentu, Luas Rantau & Isi Padu Kisaran 360°', en: '2. Definite Integrals, Area & 360° Volume of Revolution' },
          body: {
            bm: 'Kamiran tentu $\\int_a^b f(x)\\,dx = F(b) - F(a)$ memberi nilai berangka tanpa $+c$. Rantau di **bawah paksi-$x$** menghasilkan nilai kamiran negatif — ambil nilai mutlak $|\\int y\\,dx|$ untuk luas fizikal!',
            en: 'Definite integrals $\\int_a^b f(x)\\,dx = F(b) - F(a)$ evaluate to a number. Regions **below the $x$-axis** yield negative integrals — wrap in modulus $|\\int y\\,dx|$ for physical area!'
          },
          formulas: [
            { label: { bm: 'Sifat Songsangan Had & Penambahan', en: 'Limit Reversal & Additivity' }, tex: '\\int_b^a f(x)\\,dx = -\\int_a^b f(x)\\,dx, \\qquad \\int_a^c f(x)\\,dx = \\int_a^b f(x)\\,dx + \\int_b^c f(x)\\,dx' },
            { label: { bm: 'Luas Rantau & Isi Padu Kisaran 360°', en: 'Bounded Area & 360° Volume of Revolution' }, tex: 'A_x = \\int_a^b |y|\\,dx, \\qquad V_x = \\pi\\int_a^b y^2\\,dx, \\qquad V_y = \\pi\\int_c^d x^2\\,dy' }
          ],
          tip: {
            bm: 'Jangan terlupa pemalar π di hadapan rumus isi padu kisaran V = π ∫ y² dx!',
            en: 'Never forget the factor π in front of volume of revolution V = π ∫ y² dx!'
          }
        }
      ],
      traps: [
        {
          title: { bm: 'Tertinggal Pemalar +c atau Lupa Kuasa Dua dalam Isi Padu', en: 'Omitting +c or Forgetting y² in Volume' },
          desc: {
            bm: 'Tanpa +c dalam kamiran tak tentu, markah akhir hilang. Bagi isi padu kisaran paksi-x, kamirkan y² (bukan y sahaja!).',
            en: 'Omitting +c in indefinite integrals loses accuracy marks. For volume about x-axis, integrate y², NOT y!'
          }
        }
      ],
      solvers: [
        {
          id: 'definite-integral-solver',
          title: { bm: 'Solver Kamiran Tentu & Luas Bawah Lengkung', en: 'Definite Integral & Area Under Curve Solver' },
          desc: {
            bm: 'Nilaikan ∫ dari a ke b bagi (px² + qx + r) dx secara langkah demi langkah.',
            en: 'Evaluate ∫ from a to b of (px² + qx + r) dx step-by-step.'
          },
          inputs: [
            { id: 'p', label: 'p (x²)', default: 3 },
            { id: 'q', label: 'q (x)', default: -4 },
            { id: 'r', label: 'r', default: 2 },
            { id: 'a', label: { bm: 'Had bawah a', en: 'Lower limit a' }, default: 1 },
            { id: 'b', label: { bm: 'Had atas b', en: 'Upper limit b' }, default: 3 }
          ],
          solve: function (v, lang) {
            const p = Number(v.p) || 0, q = Number(v.q) || 0, r = Number(v.r) || 0;
            const a = Number(v.a) || 0, b = Number(v.b) || 0;
            const F = (x) => (p / 3) * x * x * x + (q / 2) * x * x + r * x;
            const Fb = F(b), Fa = F(a);
            const val = Fb - Fa;
            const expr = U.polyTex([{ c: p, p: 2 }, { c: q, p: 1 }, { c: r, p: 0 }]);
            return {
              problemTex: `\\int_{${a}}^{${b}} \\left(${expr}\\right)\\,dx`,
              steps: [
                { badge: 'P1', title: lang === 'bm' ? 'Langkah 1: Cari antiterbitan F(x)' : 'Step 1: Find antiderivative F(x)', tex: `\\left[ \\frac{${p}}{3}x^3 + \\frac{${q}}{2}x^2 + (${r})x \\right]_{${a}}^{${b}}`, why: lang === 'bm' ? 'Tambah kuasa 1 dan bahagi kuasa baru.' : 'Increase power by 1 and divide by new power.' },
                { badge: 'K1', title: lang === 'bm' ? 'Langkah 2: Gantikan had atas F(b) − had bawah F(a)' : 'Step 2: Upper limit F(b) − lower limit F(a)', tex: `F(${b}) - F(${a}) = (${U.roundStr(Fb, 4)}) - (${U.roundStr(Fa, 4)})`, why: lang === 'bm' ? 'Teorem Asas Kalkulus.' : 'Fundamental Theorem of Calculus.' },
                { badge: 'J1', title: lang === 'bm' ? 'Langkah 3: Nilai kamiran tentu' : 'Step 3: Definite integral value', tex: `= ${U.roundStr(val, 4)}`, why: val < 0 ? (lang === 'bm' ? 'Nilai negatif menunjukkan bersih rantau berada di bawah paksi-x (Luas = |nilai|).' : 'Negative sign indicates net region below x-axis.') : (lang === 'bm' ? 'Nilai tepat.' : 'Exact value.') }
              ],
              finalTex: `\\int_{${a}}^{${b}} (${expr})\\,dx = ${U.roundStr(val, 3)}`
            };
          }
        }
      ],
      generateQuestion: function (tier, lang) {
        if (tier === 1) {
          // Recover curve equation y at x=2 given dy/dx = 2ax + b and passing through (1, y1)
          const a = U.randInt(1, 4);
          const b = U.randInt(-4, 6, true);
          const cConst = U.randInt(-5, 7, true);
          const yAt1 = a + b + cConst;
          const yAt2 = 4 * a + 2 * b + cConst;
          const dydx = U.polyTex([{ c: 2 * a, p: 1 }, { c: b, p: 0 }]);
          return {
            tier: 1, tpLabel: 'TP1–TP2', subtopic: { bm: '3.2 Mencari Persamaan Lengkung daripada dy/dx', en: '3.2 Recovering Curve Equation from dy/dx' }, marks: 3,
            prompt: lang === 'bm'
              ? `Fungsi kecerunan suatu lengkung ialah $\\frac{dy}{dx} = ${dydx}$. Diberi lengkung itu melalui titik $(1, ${yAt1})$, cari nilai **$y$ apabila $x = 2$**.`
              : `The gradient function of a curve is $\\frac{dy}{dx} = ${dydx}$. Given that the curve passes through $(1, ${yAt1})$, find the value of **$y$ when $x = 2$**.`,
            answerType: 'number', correctValue: yAt2, displayAnswerTex: `y = ${yAt2} \\quad (c = ${cConst})`,
            intentMeta: { given: `dy/dx = ${dydx}, \\text{melalui }(1, ${yAt1})`, goal: 'Kamirkan untuk cari c, kemudian cari y(2)', conceptRule: 'y = ∫(dy/dx)dx = ax² + bx + c' },
            guidedSteps: [
              { prompt: { bm: `Kamirkan untuk dapat $y = ${a}x^2 ${U.signedNum(b)}x + c$. Gantikan $(1, ${yAt1})$ untuk mencari pemalar **$c$**:`, en: `Integrate to get $y = ${a}x^2 ${U.signedNum(b)}x + c$. Substitute $(1, ${yAt1})$ to find **$c$**:` }, expected: cConst, hint: { bm: `${yAt1} = ${a}(1)² + (${b})(1) + c.`, en: `${yAt1} = ${a}(1)² + (${b})(1) + c.` } },
              { prompt: { bm: `Sekarang gantikan $x = 2$ dan $c = ${cConst}$ ke dalam $y = ${a}x^2 ${U.signedNum(b)}x + c$:`, en: `Now substitute $x = 2$ and $c = ${cConst}$ into $y = ${a}x^2 ${U.signedNum(b)}x + c$:` }, expected: yAt2, hint: { bm: `Kira ${a}(4) + (${b})(2) + (${cConst}).`, en: `Compute ${a}(4) + (${b})(2) + (${cConst}).` } }
            ],
            traps: [
              { value: 4 * a + 2 * b, message: { bm: 'Perangkap [P]: Anda terlupa menambah pemalar pengamiran +c!', en: 'Trap [P]: You forgot the constant of integration +c!' } }
            ],
            hints: [lang === 'bm' ? 'Kamirkan dahulu dan guna (1, y₁) untuk cari c.' : 'Integrate first and use (1, y₁) to find c.'],
            steps: [
              { badge: 'P1', title: lang === 'bm' ? 'Kamirkan fungsi kecerunan' : 'Integrate gradient function', tex: `y = \\int (${dydx})\\,dx = ${a}x^2 ${U.signedNum(b)}x + c`, why: 'Jangan tinggal +c!' },
              { badge: 'K1', title: lang === 'bm' ? 'Cari c menggunakan (1, ' + yAt1 + ')' : 'Find c using (1, ' + yAt1 + ')', tex: `${yAt1} = ${a}(1)^2 + (${b})(1) + c \\implies c = ${cConst}`, why: 'Gantikan koordinat titik.' },
              { badge: 'J1', title: lang === 'bm' ? 'Nilaikan pada x = 2' : 'Evaluate at x = 2', tex: `y(2) = ${a}(2)^2 + (${b})(2) + (${cConst}) = ${yAt2}`, why: 'Nilai tepat.' }
            ]
          };
        }
        if (tier === 2) {
          // Definite integral property: given int_1^5 f(x) dx = K, find int_1^5 [m f(x) + k] dx
          const intF = U.randInt(4, 12);
          const m = U.pick([2, 3, -2]);
          const k = U.randInt(2, 6);
          const a = 1, b = 5;
          const ans = m * intF + k * (b - a);
          return {
            tier: 2, tpLabel: 'TP3–TP4', subtopic: { bm: '3.3 Sifat Operasi Kamiran Tentu', en: '3.3 Operational Properties of Definite Integrals' }, marks: 3,
            prompt: lang === 'bm'
              ? `Diberi $\\int_{${a}}^{${b}} f(x)\\,dx = ${intF}$, cari nilai bagi $$\\int_{${a}}^{${b}} \\left[${m}f(x) + ${k}\\right]\\,dx$$.`
              : `Given that $\\int_{${a}}^{${b}} f(x)\\,dx = ${intF}$, find the value of $$\\int_{${a}}^{${b}} \\left[${m}f(x) + ${k}\\right]\\,dx$$.`,
            answerType: 'number', correctValue: ans, displayAnswerTex: `${ans}`,
            intentMeta: { given: `\\int_1^5 f(x)\\,dx = ${intF}`, goal: 'Pecahkan kamiran linear dan kamirkan pemalar k terhadap x!', conceptRule: '∫_a^b k dx = k(b − a), BUKAN k sahaja!' },
            guidedSteps: [
              { prompt: { bm: `Apakah nilai $\\int_{${a}}^{${b}} ${k}\\,dx = [${k}x]_{${a}}^{${b}}$?`, en: `What is $\\int_{${a}}^{${b}} ${k}\\,dx = [${k}x]_{${a}}^{${b}}$?` }, expected: k * (b - a), hint: { bm: `Kira ${k} × (${b} − ${a}).`, en: `Compute ${k} × (${b} − ${a}).` } },
              { prompt: { bm: `Jumlahkan ${m}(${intF}) + ${k * (b - a)}:`, en: `Add ${m}(${intF}) + ${k * (b - a)}:` }, expected: ans, hint: { bm: `Kira ${m * intF} + ${k * (b - a)}.`, en: `Compute ${m * intF} + ${k * (b - a)}.` } }
            ],
            traps: [
              { value: m * intF + k, message: { bm: `Perangkap Klasik SPM [K]: Pemalar ${k} berada di DALAM kamiran! ∫₁⁵ ${k} dx = ${k}(5 − 1) = ${4 * k}, bukan ${k}!`, en: `Classic SPM Trap [K]: Constant ${k} is INSIDE the integral! ∫₁⁵ ${k} dx = ${k}(5 − 1) = ${4 * k}, not ${k}!` } }
            ],
            hints: [lang === 'bm' ? 'Pecahkan kepada m∫f(x)dx + ∫k dx. Ingat ∫_a^b k dx = k(b−a)!' : 'Split into m∫f(x)dx + ∫k dx. Remember ∫_a^b k dx = k(b−a)!'],
            steps: [
              { badge: 'P1', title: lang === 'bm' ? 'Asingkan sebutan kamiran' : 'Split integral terms', tex: `${m}\\int_{${a}}^{${b}} f(x)\\,dx + \\int_{${a}}^{${b}} ${k}\\,dx`, why: 'Sifat kelinearan kamiran.' },
              { badge: 'K1', title: lang === 'bm' ? 'Kamirkan pemalar k' : 'Integrate constant k', tex: `= ${m}(${intF}) + [${k}x]_{${a}}^{${b}} = ${m * intF} + ${k}(${b} - ${a})`, why: 'Pemalar k didarab lebar selang (b − a).' },
              { badge: 'J1', title: lang === 'bm' ? 'Jumlah akhir' : 'Final value', tex: `= ${ans}`, why: 'Tepat.' }
            ]
          };
        }
        // Tier 3 KBAT: Area bounded by parabola y = k^2 - x^2 above x-axis from 0 to k (or -k to k)
        const k = U.pick([2, 3, 4]);
        // Area bounded by y = 3(k^2 - x^2) and x-axis in first quadrant (x >= 0, y >= 0): int_0^k (3k^2 - 3x^2) dx = [3k^2 x - x^3]_0^k = 2k^3 (clean integer!)
        const area = 2 * k * k * k;
        const curveTex = `${3 * k * k} - 3x^2`;
        return {
          tier: 3, tpLabel: 'TP5–TP6 (KBAT)', subtopic: { bm: '3.3 Luas Rantau Dibatasi Lengkung & Paksi', en: '3.3 Area Bounded by a Curve & Axes' }, marks: 5,
          prompt: lang === 'bm'
            ? `Cari **luas rantau berlorek** pada sukuan pertama ($x \\ge 0,\\; y \\ge 0$) yang dibatasi oleh lengkung $y = ${curveTex}$, paksi-$x$, dan paksi-$y$.`
            : `Find the **area of the region** in the first quadrant ($x \\ge 0,\\; y \\ge 0$) bounded by the curve $y = ${curveTex}$, the $x$-axis, and the $y$-axis.`,
          answerType: 'number', correctValue: area, displayAnswerTex: `${area}\\text{ unit}^2`,
          intentMeta: { given: `y = ${curveTex}, x \\ge 0, y \\ge 0`, goal: 'Cari pintasan-x dahulu sebagai had atas b, kemudian kamirkan dari 0 ke b', conceptRule: 'Pintasan-x apabila y = 0; Luas = ∫₀ᵇ y dx' },
          guidedSteps: [
            { prompt: { bm: `Cari pintasan-$x$ positif dengan menyelesaikan $${curveTex} = 0$:`, en: `Find the positive $x$-intercept by solving $${curveTex} = 0$:` }, expected: k, hint: { bm: `3x² = ${3 * k * k} ⇒ x² = ${k * k}.`, en: `3x² = ${3 * k * k} ⇒ x² = ${k * k}.` } },
            { prompt: { bm: `Nilaikan $\\int_0^{${k}} (${curveTex})\\,dx = \\left[${3 * k * k}x - x^3\\right]_0^{${k}}$:`, en: `Evaluate $\\int_0^{${k}} (${curveTex})\\,dx = \\left[${3 * k * k}x - x^3\\right]_0^{${k}}$:` }, expected: area, hint: { bm: `Kira ${3 * k * k}(${k}) − (${k})³.`, en: `Compute ${3 * k * k}(${k}) − (${k})³.` } }
          ],
          traps: [
            { value: 4 * k * k * k, message: { bm: `Perangkap [P]: Anda mengamirkan dari −${k} ke ${k}! Soalan menyatakan sukuan pertama (x ≥ 0), jadi had bawah ialah 0.`, en: `Trap [P]: You integrated from −${k} to ${k}! First quadrant restricts x ≥ 0.` } }
          ],
          hints: [lang === 'bm' ? 'Cari pintasan-x dahulu (y = 0), kemudian kamirkan dari 0 hingga pintasan-x.' : 'Find x-intercept first (y = 0), then integrate from 0 to x-intercept.'],
          steps: [
            { badge: 'P1', title: lang === 'bm' ? 'Cari pintasan-x (y = 0)' : 'Find x-intercept (y = 0)', tex: `${curveTex} = 0 \\implies x^2 = ${k * k} \\implies x = ${k}\\;(x \\ge 0)`, why: 'Had atas pengamiran.' },
            { badge: 'K1', title: lang === 'bm' ? 'Kamirkan dari 0 ke ' + k : 'Integrate from 0 to ' + k, tex: `A = \\int_0^{${k}} (${curveTex})\\,dx = \\left[${3 * k * k}x - x^3\\right]_0^{${k}}`, why: 'Luas bawah lengkung.' },
            { badge: 'J1', title: lang === 'bm' ? 'Luas rantau' : 'Bounded area', tex: `A = ${3 * k * k * k} - ${k * k * k} = ${area}\\text{ unit}^2`, why: 'Jawapan akhir.' }
          ]
        };
      }
    },

    // =========================================================================
    // FORM 5 CHAPTER 4: PERMUTATIONS & COMBINATIONS / PILIH ATUR & GABUNGAN
    // =========================================================================
    {
      id: 'f5-c4',
      stage: 3,
      unlocked: true,
      form: 5,
      num: 4,
      code: { bm: 'T5 • Bab 4', en: 'F5 • Ch 4' },
      icon: 'ⁿCᵣ',
      color: '#a855f7',
      category: 'statistik',
      title: { bm: 'Pilih Atur dan Gabungan', en: 'Permutations & Combinations' },
      subtitle: {
        bm: 'Petua pendaraban, faktorial n!, pilih atur ⁿPᵣ (tertib penting) & gabungan ⁿCᵣ (jawatankuasa)',
        en: 'Multiplication rule, n!, permutations ⁿPᵣ (order matters) & combinations ⁿCᵣ (committees)'
      },
      spmWeight: { bm: 'Kertas 1 & Kertas 2 (6–8 markah)', en: 'Paper 1 & Paper 2 (6–8 marks)' },
      concepts: [
        {
          title: { bm: '1. Pilih Atur ⁿPᵣ — Apabila SUSUNAN / TERTIB Penting!', en: '1. Permutations ⁿPᵣ — When ORDER Matters!' },
          body: {
            bm: 'Gunakan **Pilih Atur (${}^nP_r$)** apabila menyusun huruf, kod kata laluan, nombor digit, atau kedudukan barisan gambar. Ingat takrifan penting: **$0! = 1$**!',
            en: 'Use **Permutations (${}^nP_r$)** when arranging letters, passwords, multi-digit numbers, or seating positions. Remember **$0! = 1$**!'
          },
          formulas: [
            { label: { bm: 'Pilih Atur Linear & Objek Secaman', en: 'Linear Permutations & Identical Objects' }, tex: '{}^nP_r = \\frac{n!}{(n-r)!}, \\qquad \\text{Huruf berulang} = \\frac{n!}{a!\\,b!\\,\\dots}' },
            { label: { bm: 'Susunan Membulat vs Gelang Boleh Terbalik', en: 'Circular vs Flippable Ring/Necklace' }, tex: '\\text{Meja Bulat} = (n-1)!, \\qquad \\text{Gelang/Rantai} = \\frac{(n-1)!}{2}' }
          ],
          tip: {
            bm: 'Syarat "MESTI BERSEBELAHAN": Ikatkan kumpulan itu sebagai 1 blok besar dahulu, kemudian darabkan susunan dalaman blok itu!',
            en: '"MUST BE TOGETHER": Tie the group into 1 super-block first, then multiply by internal arrangements inside the block!'
          }
        },
        {
          title: { bm: '2. Gabungan ⁿCᵣ — Pemilihan Tanpa Mengira Tertib', en: '2. Combinations ⁿCᵣ — Unordered Team/Committee Selection' },
          body: {
            bm: 'Gunakan **Gabungan (${}^nC_r$)** apabila memilih ahli jawatankuasa, pasukan sukan, atau kumpulan objek tanpa jawatan khusus. Kata kunci **"DAN"** = darab ($\\times$); kata kunci **"ATAU"** (kes berasingan) = tambah ($+$).',
            en: 'Use **Combinations (${}^nC_r$)** when choosing committees or teams without specific ranks. **"AND"** = multiply ($\\times$); **"OR"** (mutually exclusive cases) = add ($+$).'
          },
          formulas: [
            { label: { bm: 'Rumus Gabungan', en: 'Combination Formula' }, tex: '{}^nC_r = \\frac{n!}{(n-r)!\\,r!} = {}^nC_{n-r}' }
          ],
          tip: {
            bm: 'Syarat "BERPISAH": Susun objek lain dahulu, kemudian selitkan objek yang perlu dipisahkan ke dalam ruang kosong (celah) di antaranya!',
            en: '"SEPARATED": Arrange unrestricted items first, then slot separated items into the empty gaps between them!'
          }
        }
      ],
      traps: [
        {
          title: { bm: 'Tertukar ⁿPᵣ dengan ⁿCᵣ', en: 'Confusing ⁿPᵣ with ⁿCᵣ' },
          desc: {
            bm: 'Memilih 3 ahli jawatankuasa biasa ialah ⁿC₃, tetapi memilih Pengerusi, Setiausaha & Bendahari ialah ⁿP₃ kerana jawatan berbeza!',
            en: 'Choosing 3 general members is ⁿC₃, whereas choosing President, Secretary & Treasurer is ⁿP₃ because roles differ!'
          }
        }
      ],
      solvers: [
        {
          id: 'perm-comb-solver',
          title: { bm: 'Kalkulator Pintar n!, ⁿPᵣ, ⁿCᵣ & Bulatan', en: 'Smart n!, ⁿPᵣ, ⁿCᵣ & Circular Calculator' },
          desc: {
            bm: 'Bandingkan bilangan susunan pilih atur ⁿPᵣ dan pemilihan gabungan ⁿCᵣ bagi sebarang n dan r.',
            en: 'Compare ordered permutations ⁿPᵣ and unordered combinations ⁿCᵣ for any n and r.'
          },
          inputs: [
            { id: 'n', label: { bm: 'Jumlah objek n (1–15)', en: 'Total items n (1–15)' }, default: 8 },
            { id: 'r', label: { bm: 'Bilangan dipilih r', en: 'Chosen count r' }, default: 3 }
          ],
          solve: function (v, lang) {
            const n = Math.min(15, Math.max(1, Math.round(Number(v.n) || 6)));
            const r = Math.min(n, Math.max(0, Math.round(Number(v.r) || 2)));
            const npr = U.nPr(n, r);
            const ncr = U.nCr(n, r);
            const circ = U.factorial(n - 1);
            return {
              problemTex: `n = ${n}, \\quad r = ${r}`,
              steps: [
                { badge: 'P1', title: lang === 'bm' ? 'Pilih Atur Linear ⁿPᵣ (Tertib Penting)' : 'Linear Permutations ⁿPᵣ (Order Matters)', tex: `^{${n}}P_{${r}} = \\frac{${n}!}{(${n}-${r})!} = ${npr}`, why: lang === 'bm' ? 'Digunakan untuk kod, barisan & jawatan khusus.' : 'Used for codes, queues & ranked roles.' },
                { badge: 'K1', title: lang === 'bm' ? 'Gabungan ⁿCᵣ (Tertib Tidak Penting)' : 'Combinations ⁿCᵣ (Order Irrelevant)', tex: `^{${n}}C_{${r}} = \\frac{^{${n}}P_{${r}}}{${r}!} = \\frac{${npr}}{${U.factorial(r)}} = ${ncr}`, why: lang === 'bm' ? 'Dibahagi dengan r! untuk membuang pertindihan susunan.' : 'Divided by r! to remove duplicate orderings.' },
                { badge: 'J1', title: lang === 'bm' ? 'Susunan Meja Bulat Semua n Objek' : 'Circular Arrangement of All n Items', tex: `(${n}-1)! = ${n - 1}! = ${circ}`, why: lang === 'bm' ? 'Satu kedudukan ditetapkan sebagai rujukan putaran.' : 'One seat fixed against rotational symmetry.' }
              ],
              finalTex: `^{${n}}P_{${r}} = ${npr}, \\quad ^{${n}}C_{${r}} = ${ncr}, \\quad (${n}-1)! = ${circ}`
            };
          }
        }
      ],
      generateQuestion: function (tier, lang) {
        if (tier === 1) {
          const n = U.randInt(6, 9);
          const r = U.randInt(3, 4);
          const ans = U.nPr(n, r);
          return {
            tier: 1, tpLabel: 'TP1–TP2', subtopic: { bm: '4.1 Pilih Atur Kod Tanpa Ulangan', en: '4.1 Permutations Without Repetition' }, marks: 2,
            prompt: lang === 'bm'
              ? `Berapakah bilangan kod kata laluan **$${r}$ huruf berbeza** yang boleh dibentuk daripada $${n}$ huruf berlainan tanpa ulangan?`
              : `How many **$ ${r}$-letter password codes** can be formed from $${n}$ distinct letters without repetition?`,
            answerType: 'number', correctValue: ans, displayAnswerTex: `^{${n}}P_{${r}} = ${ans}`,
            intentMeta: { given: `n = ${n}, r = ${r}, \\text{kod huruf (tertib penting)}`, goal: 'Kira ⁿPᵣ', conceptRule: 'Kod kata laluan mementingkan tertib → guna ⁿPᵣ' },
            guidedSteps: [
              { prompt: { bm: `Berapakah pilihan untuk huruf pertama dan kedua digabungkan ($${n} \\times ${n - 1}$)?`, en: `How many choices for the first two positions ($${n} \\times ${n - 1}$)?` }, expected: n * (n - 1), hint: { bm: `Darab ${n} dengan ${n - 1}.`, en: `Multiply ${n} by ${n - 1}.` } },
              { prompt: { bm: `Lengkapkan pendaraban bagi kesemua $${r}$ tempat ($^{${n}}P_{${r}}$):`, en: `Complete the product for all $${r}$ slots ($^{${n}}P_{${r}}$):` }, expected: ans, hint: { bm: `Kira ${n}! / (${n}−${r})!.`, en: `Compute ${n}! / (${n}−${r})!.` } }
            ],
            traps: [
              { value: U.nCr(n, r), message: { bm: 'Perangkap [P]: Anda menggunakan ⁿCᵣ! Bagi kod kata laluan, susunan ABC ≠ CBA, jadi wajib guna ⁿPᵣ.', en: 'Trap [P]: You used ⁿCᵣ! Password order matters (ABC ≠ CBA), so use ⁿPᵣ.' } }
            ],
            hints: [lang === 'bm' ? 'Susunan huruf penting dalam kata laluan, guna ⁿPᵣ.' : 'Order matters in passwords, use ⁿPᵣ.'],
            steps: [
              { badge: 'P1', title: lang === 'bm' ? 'Kenal pasti pilih atur' : 'Identify permutation', tex: `\\text{Bilangan kod} = \\,^{${n}}P_{${r}}`, why: 'Tertib huruf penting.' },
              { badge: 'J1', title: lang === 'bm' ? 'Nilaikan' : 'Evaluate', tex: `^{${n}}P_{${r}} = ${ans}`, why: 'Tepat.' }
            ]
          };
        }
        if (tier === 2) {
          // Grouped together permutation: n total items, k must sit together -> (n - k + 1)! * k!
          const n = U.randInt(5, 7);
          const k = U.pick([2, 3]);
          const units = n - k + 1;
          const ans = U.factorial(units) * U.factorial(k);
          return {
            tier: 2, tpLabel: 'TP3–TP4', subtopic: { bm: '4.1 Pilih Atur Bersyarat (Mesti Bersebelahan)', en: '4.1 Conditional Permutations (Grouped Together)' }, marks: 3,
            prompt: lang === 'bm'
              ? `$${n}$ buah buku berbeza hendak disusun sebaris di atas rak. Cari bilangan cara susunan jika **$${k}$ buah buku Matematik tertentu mesti sentiasa bersebelahan**.`
              : `$${n}$ distinct books are arranged in a row on a shelf. Find the number of arrangements if **$${k}$ specific Mathematics books must always be next to each other**.`,
            answerType: 'number', correctValue: ans, displayAnswerTex: `${units}! \\times ${k}! = ${ans}`,
            intentMeta: { given: `n = ${n} \\text{ buku}, k = ${k} \\text{ diikat bersama}`, goal: 'Kira (n − k + 1)! × k!', conceptRule: 'Ikat kumpulan jadi 1 blok → susun blok × susunan dalaman blok' },
            guidedSteps: [
              { prompt: { bm: `Ikat $${k}$ buku Matematik menjadi $1$ blok. Berapakah jumlah blok/objek luar yang perlu disusun ($${n} - ${k} + 1$)?`, en: `Tie the $${k}$ Math books into $1$ block. How many outer units are arranged ($${n} - ${k} + 1$)?` }, expected: units, hint: { bm: `${n - k} buku lain + 1 blok ikatan.`, en: `${n - k} other books + 1 tied block.` } },
              { prompt: { bm: `Darabkan susunan luar ($${units}!$) dengan susunan dalaman blok ($${k}!$):`, en: `Multiply outer arrangements ($${units}!$) by internal block arrangements ($${k}!$):` }, expected: ans, hint: { bm: `Kira ${U.factorial(units)} × ${U.factorial(k)}.`, en: `Compute ${U.factorial(units)} × ${U.factorial(k)}.` } }
            ],
            traps: [
              { value: U.factorial(units), message: { bm: `Perangkap [K]: Anda terlupa mendarab $${k}!$ bagi susunan dalaman buku Matematik di dalam ikatan tersebut!`, en: `Trap [K]: You forgot to multiply by $${k}!$ for internal arrangements inside the tied block!` } }
            ],
            hints: [lang === 'bm' ? 'Ikat jadi 1 blok: kira (n−k+1)! kemudian darab k!.' : 'Tie into 1 block: compute (n−k+1)! then multiply by k!.'],
            steps: [
              { badge: 'P1', title: lang === 'bm' ? 'Susunan blok luar' : 'Outer block arrangements', tex: `(${n} - ${k} + 1)! = ${units}! = ${U.factorial(units)}`, why: 'Kumpulan dianggap 1 unit.' },
              { badge: 'K1', title: lang === 'bm' ? 'Darab susunan dalaman' : 'Multiply internal arrangements', tex: `${U.factorial(units)} \\times ${k}! = ${U.factorial(units)} \\times ${U.factorial(k)}`, why: 'Buku dalam blok boleh bertukar tempat.' },
              { badge: 'J1', title: lang === 'bm' ? 'Jumlah cara susunan' : 'Total arrangements', tex: `= ${ans}`, why: 'Jawapan akhir.' }
            ]
          };
        }
        // Tier 3 KBAT: Committee selection with "at least" condition!
        // Choose 4 members from m men (e.g. 5) and w women (e.g. 4) with AT LEAST 2 women
        const m = U.pick([5, 6]);
        const w = U.pick([4, 5]);
        // Committee of 4, at least 3 women: Case 1 (3W, 1M) + Case 2 (4W, 0M)
        const c1 = U.nCr(w, 3) * U.nCr(m, 1);
        const c2 = U.nCr(w, 4) * U.nCr(m, 0);
        const total = c1 + c2;
        return {
          tier: 3, tpLabel: 'TP5–TP6 (KBAT)', subtopic: { bm: '4.2 Gabungan Bersyarat ("Sekurang-kurangnya")', en: '4.2 Conditional Combinations ("At Least" Cases)' }, marks: 4,
          prompt: lang === 'bm'
            ? `Satu jawatankuasa seramai **$4$ orang** hendak dipilih daripada **$${m}$ lelaki** dan **$${w}$ perempuan**. Cari bilangan cara pemilihan jika jawatankuasa itu mesti mengandungi **sekurang-kurangnya $3$ orang perempuan**.`
            : `A committee of **$4$ members** is to be chosen from **$${m}$ men** and **$${w}$ women**. Find the number of ways if the committee must include **at least $3$ women**.`,
          answerType: 'number', correctValue: total, displayAnswerTex: `${c1} + ${c2} = ${total}`,
          intentMeta: { given: `${m}\\text{ L}, ${w}\\text{ P}, \\text{pilih }4, \\text{P} \\ge 3`, goal: 'Jumlahkan Kes (3P, 1L) + Kes (4P, 0L)', conceptRule: 'Pecahkan kes saling eksklusif: (ⁿC₃ × ᵐC₁) + (ⁿC₄ × ᵐC₀)' },
          guidedSteps: [
            { prompt: { bm: `Kira Kes 1 (**3 Perempuan DAN 1 Lelaki**): $^{${w}}C_3 \\times \\,^{${m}}C_1$:`, en: `Compute Case 1 (**3 Women AND 1 Man**): $^{${w}}C_3 \\times \\,^{${m}}C_1$:` }, expected: c1, hint: { bm: `Kira ${U.nCr(w, 3)} × ${m}.`, en: `Compute ${U.nCr(w, 3)} × ${m}.` } },
            { prompt: { bm: `Tambahkan Kes 2 (**4 Perempuan DAN 0 Lelaki**, iaitu $^{${w}}C_4 = ${c2}$) kepada Kes 1:`, en: `Add Case 2 (**4 Women AND 0 Men**, which is $^{${w}}C_4 = ${c2}$) to Case 1:` }, expected: total, hint: { bm: `Kira ${c1} + ${c2}.`, en: `Compute ${c1} + ${c2}.` } }
          ],
          traps: [
            { value: c1, message: { bm: 'Perangkap [P]: "Sekurang-kurangnya 3 perempuan" bermaksud 3 perempuan ATAU 4 perempuan! Anda tertinggal kes 4 perempuan.', en: 'Trap [P]: "At least 3 women" includes BOTH 3 women OR 4 women! Add Case 2.' } },
            { value: U.nCr(w, 3) * U.nCr(m + w - 3, 1), message: { bm: 'Perangkap [K]: Jangan pilih 3 perempuan dahulu kemudian darab baki campuran — itu menyebabkan kiraan bertindih! Pecahkan mengikut kes tepat.', en: 'Trap [K]: Picking 3 women then multiplying from the mixed pool double-counts! Split into exact disjoint cases.' } }
          ],
          hints: [lang === 'bm' ? 'Senaraikan 2 kes: (3P, 1L) + (4P, 0L).' : 'Split into 2 disjoint cases: (3W, 1M) + (4W, 0M).'],
          steps: [
            { badge: 'P1', title: lang === 'bm' ? 'Kes 1: 3 Perempuan & 1 Lelaki' : 'Case 1: 3 Women & 1 Man', tex: `^{${w}}C_3 \\times \\,^{${m}}C_1 = ${U.nCr(w, 3)} \\times ${m} = ${c1}`, why: 'Kata kunci DAN → darab.' },
            { badge: 'K1', title: lang === 'bm' ? 'Kes 2: 4 Perempuan & 0 Lelaki' : 'Case 2: 4 Women & 0 Men', tex: `^{${w}}C_4 \\times \\,^{${m}}C_0 = ${c2} \\times 1 = ${c2}`, why: 'Kes semua perempuan.' },
            { badge: 'J1', title: lang === 'bm' ? 'Jumlahkan kedua-dua kes' : 'Sum mutually exclusive cases', tex: `${c1} + ${c2} = ${total}`, why: 'Kata kunci ATAU → tambah.' }
          ]
        };
      }
    }
  ];

  App.chapters.push(...f5Stage3);
})(window.AddMathApp);
