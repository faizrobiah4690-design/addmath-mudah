/**
 * AddMath Mudah — Katalog Penuh 18 Bab KSSM (Fasa 2, 3 & 4 Roadmap + Buku Formula SPM)
 */
window.AddMathApp = window.AddMathApp || {};

(function (App) {
  'use strict';

  // Upcoming Stages (2, 3, 4) structured metadata & official KSSM formulas
  App.upcomingStages = [
    // STAGE 2: FORM 4 CHAPTERS 6-10
    {
      id: 'f4-c6', stage: 2, unlocked: false, form: 4, num: 6,
      code: { bm: 'T4 • Bab 6', en: 'F4 • Ch 6' }, icon: 'Y=mX+C', color: '#06b6d4',
      title: { bm: 'Hukum Linear', en: 'Linear Law' },
      subtitle: { bm: 'Penukaran tak linear kepada Y = mX + C & garis penyuaian terbaik', en: 'Data linearization to Y = mX + C & line of best fit' },
      formulas: [
        { label: { bm: 'Bentuk Linear Piawai', en: 'Standard Linear Form' }, tex: 'Y = mX + C, \\quad m = \\frac{Y_2 - Y_1}{X_2 - X_1}' },
        { label: { bm: 'Transformasi Eksponen', en: 'Exponential Reduction' }, tex: 'y = ab^x \\implies \\log_{10} y = (\\log_{10} b)x + \\log_{10} a' }
      ]
    },
    {
      id: 'f4-c7', stage: 2, unlocked: false, form: 4, num: 7,
      code: { bm: 'T4 • Bab 7', en: 'F4 • Ch 7' }, icon: '(x,y)', color: '#0ea5e9',
      title: { bm: 'Geometri Koordinat', en: 'Coordinate Geometry' },
      subtitle: { bm: 'Pembahagi tembereng m:n, garis serenjang, luas poligon & lokus', en: 'Segment divisor m:n, perpendicular lines, shoelace area & locus' },
      formulas: [
        { label: { bm: 'Pembahagi Tembereng m:n', en: 'Divisor of Line Segment' }, tex: 'P(x,y) = \\left(\\frac{nx_1 + mx_2}{m+n}, \\frac{ny_1 + my_2}{m+n}\\right)' },
        { label: { bm: 'Garis Selari & Serenjang', en: 'Parallel & Perpendicular' }, tex: 'm_1 = m_2 \\text{ (selari)}, \\quad m_1 m_2 = -1 \\text{ (serenjang)}' }
      ]
    },
    {
      id: 'f4-c8', stage: 2, unlocked: false, form: 4, num: 8,
      code: { bm: 'T4 • Bab 8', en: 'F4 • Ch 8' }, icon: 'a⃗', color: '#3b82f6',
      title: { bm: 'Vektor', en: 'Vectors' },
      subtitle: { bm: 'Hukum segi tiga/segi empat selari, segaris & vektor unit Cartesan', en: 'Triangle/parallelogram laws, collinearity & Cartesian unit vectors' },
      formulas: [
        { label: { bm: 'Magnitud & Vektor Unit', en: 'Magnitude & Unit Vector' }, tex: '|\\mathbf{r}| = \\sqrt{x^2 + y^2}, \\quad \\hat{\\mathbf{r}} = \\frac{x\\mathbf{i} + y\\mathbf{j}}{\\sqrt{x^2 + y^2}}' }
      ]
    },
    {
      id: 'f4-c9', stage: 2, unlocked: false, form: 4, num: 9,
      code: { bm: 'T4 • Bab 9', en: 'F4 • Ch 9' }, icon: '△', color: '#14b8a6',
      title: { bm: 'Penyelesaian Segi Tiga', en: 'Solution of Triangles' },
      subtitle: { bm: 'Petua Sinus, kes berambiguiti SSA, Petua Kosinus & Rumus Heron', en: 'Sine Rule, SSA ambiguous case, Cosine Rule & Heron’s Formula' },
      formulas: [
        { label: { bm: 'Petua Sinus & Kosinus', en: 'Sine & Cosine Rules' }, tex: '\\frac{a}{\\sin A} = \\frac{b}{\\sin B}, \\quad a^2 = b^2 + c^2 - 2bc\\cos A' },
        { label: { bm: 'Luas Segi Tiga', en: 'Area of Triangle' }, tex: '\\text{Luas} = \\frac{1}{2}ab\\sin C = \\sqrt{s(s-a)(s-b)(s-c)}' }
      ]
    },
    {
      id: 'f4-c10', stage: 2, unlocked: false, form: 4, num: 10,
      code: { bm: 'T4 • Bab 10', en: 'F4 • Ch 10' }, icon: 'Ī', color: '#84cc16',
      title: { bm: 'Nombor Indeks', en: 'Index Numbers' },
      subtitle: { bm: 'Indeks harga, indeks gubahan berpemberat & indeks berantai', en: 'Price index, weighted composite index & chained indices' },
      formulas: [
        { label: { bm: 'Indeks Harga & Gubahan', en: 'Price & Composite Index' }, tex: 'I = \\frac{Q_1}{Q_0}\\times 100, \\qquad \\bar{I} = \\frac{\\sum I_i w_i}{\\sum w_i}' }
      ]
    },

    // STAGE 3: FORM 5 CHAPTERS 1-4
    {
      id: 'f5-c1', stage: 3, unlocked: false, form: 5, num: 1,
      code: { bm: 'T5 • Bab 1', en: 'F5 • Ch 1' }, icon: 'rθ', color: '#f97316',
      title: { bm: 'Sukatan Membulat', en: 'Circular Measure' },
      subtitle: { bm: 'Radian, panjang lengkok s = rθ, luas sektor & luas tembereng', en: 'Radians, arc length s = rθ, sector area & segment area' },
      formulas: [
        { label: { bm: 'Lengkok & Luas Sektor', en: 'Arc Length & Sector Area' }, tex: '\\pi \\text{ rad} = 180^\\circ, \\quad s = r\\theta, \\quad A = \\frac{1}{2}r^2\\theta' }
      ]
    },
    {
      id: 'f5-c2', stage: 3, unlocked: false, form: 5, num: 2,
      code: { bm: 'T5 • Bab 2', en: 'F5 • Ch 2' }, icon: 'dy/dx', color: '#ef4444',
      title: { bm: 'Pembezaan', en: 'Differentiation' },
      subtitle: { bm: 'Petua hasil darab/bahagi/rantai, tangen/normal, titik pusingan & kadar', en: 'Product/quotient/chain rules, tangents, turning points & rates' },
      formulas: [
        { label: { bm: 'Petua Hasil Darab & Bahagi', en: 'Product & Quotient Rules' }, tex: '\\frac{d}{dx}(uv) = u\\frac{dv}{dx} + v\\frac{du}{dx}, \\quad \\frac{d}{dx}\\left(\\frac{u}{v}\\right) = \\frac{v u\' - u v\'}{v^2}' }
      ]
    },
    {
      id: 'f5-c3', stage: 3, unlocked: false, form: 5, num: 3,
      code: { bm: 'T5 • Bab 3', en: 'F5 • Ch 3' }, icon: '∫dx', color: '#dc2626',
      title: { bm: 'Pengamiran', en: 'Integration' },
      subtitle: { bm: 'Kamiran tak tentu/tentu, luas bawah lengkung & isi padu kisaran', en: 'Indefinite/definite integrals, area under curve & volume of revolution' },
      formulas: [
        { label: { bm: 'Luas & Isi Padu Kisaran', en: 'Area & Volume of Revolution' }, tex: 'A = \\int_a^b y\\,dx, \\qquad V_x = \\pi\\int_a^b y^2\\,dx' }
      ]
    },
    {
      id: 'f5-c4', stage: 3, unlocked: false, form: 5, num: 4,
      code: { bm: 'T5 • Bab 4', en: 'F5 • Ch 4' }, icon: 'ⁿCᵣ', color: '#a855f7',
      title: { bm: 'Pilih Atur dan Gabungan', en: 'Permutations & Combinations' },
      subtitle: { bm: 'Faktorial n!, ⁿPᵣ, susunan membulat, ⁿCᵣ & pemilihan bersyarat', en: 'Factorials n!, ⁿPᵣ, circular arrangements, ⁿCᵣ & constraints' },
      formulas: [
        { label: { bm: 'Pilih Atur & Gabungan', en: 'Permutations & Combinations' }, tex: '^nP_r = \\frac{n!}{(n-r)!}, \\qquad ^nC_r = \\frac{n!}{(n-r)!r!}' }
      ]
    },

    // STAGE 4: FORM 5 CHAPTERS 5-8
    {
      id: 'f5-c5', stage: 4, unlocked: false, form: 5, num: 5,
      code: { bm: 'T5 • Bab 5', en: 'F5 • Ch 5' }, icon: 'N(μ,σ²)', color: '#d946ef',
      title: { bm: 'Taburan Kebarangkalian', en: 'Probability Distributions' },
      subtitle: { bm: 'Taburan Binomial B(n,p) & Taburan Normal Piawai Skor-Z', en: 'Binomial B(n,p) & Standard Normal Z-Score Distribution' },
      formulas: [
        { label: { bm: 'Binomial & Skor-Z Normal', en: 'Binomial & Normal Z-Score' }, tex: 'P(X=r) = \\,^nC_r p^r q^{n-r}, \\qquad Z = \\frac{X - \\mu}{\\sigma}' }
      ]
    },
    {
      id: 'f5-c6', stage: 4, unlocked: false, form: 5, num: 6,
      code: { bm: 'T5 • Bab 6', en: 'F5 • Ch 6' }, icon: 'sin 2A', color: '#7c3aed',
      title: { bm: 'Fungsi Trigonometri', en: 'Trigonometric Functions' },
      subtitle: { bm: 'Suku ASTC, identiti Pythagoras, sudut majmuk/berganda & lakaran gelombang', en: 'ASTC quadrants, identities, compound/double angles & wave sketching' },
      formulas: [
        { label: { bm: 'Identiti & Sudut Berganda', en: 'Identities & Double Angle' }, tex: '\\sin^2 A + \\cos^2 A = 1, \\quad \\sin 2A = 2\\sin A\\cos A' }
      ]
    },
    {
      id: 'f5-c7', stage: 4, unlocked: false, form: 5, num: 7,
      code: { bm: 'T5 • Bab 7', en: 'F5 • Ch 7' }, icon: 'R ≤ k', color: '#059669',
      title: { bm: 'Pengaturcaraan Linear', en: 'Linear Programming' },
      subtitle: { bm: 'Pembentukan kekangan ketaksamaan, rantau tersaur R & pengoptimuman k = ax+by', en: 'Constraint inequalities, feasible region R & optimization k = ax+by' },
      formulas: [
        { label: { bm: 'Fungsi Objektif', en: 'Objective Function' }, tex: 'k = ax + by \\quad (\\text{Uji bucu-bucu rantau } R)' }
      ]
    },
    {
      id: 'f5-c8', stage: 4, unlocked: false, form: 5, num: 8,
      code: { bm: 'T5 • Bab 8', en: 'F5 • Ch 8' }, icon: 's,v,a', color: '#e11d48',
      title: { bm: 'Kinematik Gerakan Linear', en: 'Kinematics of Linear Motion' },
      subtitle: { bm: 'Sesaran s, halaju v = ds/dt, pecutan a = dv/dt & pusingan arah v = 0', en: 'Displacement s, velocity v = ds/dt, acceleration a & turnaround v = 0' },
      formulas: [
        { label: { bm: 'Hubungan Kalkulus Gerakan', en: 'Kinematics Calculus Wheel' }, tex: 'v = \\frac{ds}{dt}, \\quad a = \\frac{dv}{dt}, \\quad s = \\int v\\,dt' }
      ]
    }
  ];

  // Quick 60s Concept Blitz Bank (Stage 1 Gamified Mini-Game!)
  App.blitzBank = [
    {
      q: { bm: 'Hubungan manakah BUKAN suatu fungsi?', en: 'Which relation is NOT a valid function?' },
      options: { bm: ['Satu-ke-satu', 'Banyak-ke-satu', 'Satu-ke-banyak'], en: ['One-to-one', 'Many-to-one', 'One-to-many'] },
      ans: 2
    },
    {
      q: { bm: 'Apakah Hasil Tambah Punca (HTP) bagi ax² + bx + c = 0?', en: 'What is the Sum of Roots (SOR) of ax² + bx + c = 0?' },
      options: { bm: ['b / a', '−b / a', 'c / a'], en: ['b / a', '−b / a', 'c / a'] },
      ans: 1
    },
    {
      q: { bm: 'Syarat bagi dua punca nyata dan SAMA ialah:', en: 'The condition for two EQUAL real roots is:' },
      options: { bm: ['b² − 4ac = 0', 'b² − 4ac > 0', 'b² − 4ac < 0'], en: ['b² − 4ac = 0', 'b² − 4ac > 0', 'b² − 4ac < 0'] },
      ans: 0
    },
    {
      q: { bm: 'Konjugat bagi (3 + √5) ialah:', en: 'The conjugate surd of (3 + √5) is:' },
      options: { bm: ['−3 + √5', '3 − √5', '3 + 5'], en: ['−3 + √5', '3 − √5', '3 + 5'] },
      ans: 1
    },
    {
      q: { bm: 'Nilai bagi logₐ 1 (dengan a > 0, a ≠ 1) ialah:', en: 'The value of logₐ 1 (for a > 0, a ≠ 1) is:' },
      options: { bm: ['1', 'a', '0'], en: ['1', 'a', '0'] },
      ans: 2
    },
    {
      q: { bm: 'Syarat wujudnya Hasil Tambah Ketakterhinggaan S∞ bagi JG ialah:', en: 'Sum to Infinity S∞ of a GP converges if and only if:' },
      options: { bm: ['|r| < 1', 'r > 1', 'r = 1'], en: ['|r| < 1', 'r > 1', 'r = 1'] },
      ans: 0
    },
    {
      q: { bm: 'Bagaimanakah mencari sebutan ke-n (Tₙ) daripada hasil tambah Sₙ?', en: 'How do you find the n-th term Tₙ from cumulative sum Sₙ?' },
      options: { bm: ['Sₙ + Sₙ₋₁', 'Sₙ − Sₙ₋₁', 'Sₙ / n'], en: ['Sₙ + Sₙ₋₁', 'Sₙ − Sₙ₋₁', 'Sₙ / n'] },
      ans: 1
    },
    {
      q: { bm: 'Graf fungsi songsang y = f⁻¹(x) terpantul pada garis:', en: 'The graph of inverse y = f⁻¹(x) is reflected across:' },
      options: { bm: ['Paksi-x', 'Garis y = x', 'Paksi-y'], en: ['The x-axis', 'The line y = x', 'The y-axis'] },
      ans: 1
    },
    {
      q: { bm: 'Bagi f(x) = −2(x − 3)² + 7, titik (3, 7) ialah:', en: 'For f(x) = −2(x − 3)² + 7, vertex (3, 7) is a:' },
      options: { bm: ['Titik maksimum', 'Titik minimum', 'Pintasan-y'], en: ['Maximum point', 'Minimum point', 'y-intercept'] },
      ans: 0
    },
    {
      q: { bm: 'Hukum logaritma yang betul bagi logₐ(xy) ialah:', en: 'The valid logarithm law for logₐ(xy) is:' },
      options: { bm: ['(logₐ x)(logₐ y)', 'logₐ x + logₐ y', 'logₐ(x + y)'], en: ['(logₐ x)(logₐ y)', 'logₐ x + logₐ y', 'logₐ(x + y)'] },
      ans: 1
    }
  ];
})(window.AddMathApp);
