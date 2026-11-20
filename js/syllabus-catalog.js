/**
 * AddMath Mudah — Katalog Penuh 18 Bab KSSM (100% Aktif!) & Bank Cabaran Kilat 60s (T4 & T5)
 */
window.AddMathApp = window.AddMathApp || {};

(function (App) {
  'use strict';

  // All 18 KSSM Chapters (Form 4 Ch 1–10 & Form 5 Ch 1–8) are now 100% UNLOCKED & ACTIVE!
  App.upcomingStages = [];

  // Full Form 4 & Form 5 60s Concept Blitz Bank (22 High-Yield SPM Reflex Questions!)
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
      q: { bm: 'Syarat wujudnya Hasil Tambah Ketakterhinggaan S∞ bagi JG (Janjang Geometri) ialah:', en: 'Sum to Infinity S∞ of a GP (Geometric Progression) exists when:' },
      options: { bm: ['|r| < 1', 'r > 1', 'r = 1'], en: ['|r| < 1', 'r > 1', 'r = 1'] },
      ans: 0
    },
    {
      q: { bm: 'Bagaimanakah mencari sebutan ke-n (Tₙ) daripada hasil tambah Sₙ?', en: 'How do you find the n-th term Tₙ from cumulative sum Sₙ?' },
      options: { bm: ['Sₙ + Sₙ₋₁', 'Sₙ − Sₙ₋₁', 'Sₙ / n'], en: ['Sₙ + Sₙ₋₁', 'Sₙ − Sₙ₋₁', 'Sₙ / n'] },
      ans: 1
    },
    {
      q: { bm: 'Bagi dua garis yang BERSERENJANG, hasil darab kecerunan m₁m₂ ialah:', en: 'For two PERPENDICULAR lines, the product of gradients m₁m₂ is:' },
      options: { bm: ['1', '0', '−1'], en: ['1', '0', '−1'] },
      ans: 2
    },
    {
      q: { bm: 'Magnitud vektor r = 3i − 4j ialah:', en: 'The magnitude of vector r = 3i − 4j is:' },
      options: { bm: ['5', '7', '−1'], en: ['5', '7', '−1'] },
      ans: 0
    },
    {
      q: { bm: 'Petua manakah sesuai apabila diberi 3 sisi (SSS) bagi sebuah segi tiga?', en: 'Which rule solves a triangle when given all 3 sides (SSS)?' },
      options: { bm: ['Petua Sinus', 'Petua Kosinus', 'Teorem Pythagoras'], en: ['Sine Rule', 'Cosine Rule', 'Pythagoras Theorem'] },
      ans: 1
    },
    {
      q: { bm: 'Rumus Indeks Gubahan Ī (dengan pemberat wᵢ) ialah:', en: 'The Weighted Composite Index Ī formula (with weights wᵢ) is:' },
      options: { bm: ['∑Iᵢ / n', '∑(Iᵢ wᵢ) / ∑wᵢ', '∑(Iᵢ wᵢ) / 100'], en: ['∑Iᵢ / n', '∑(Iᵢ wᵢ) / ∑wᵢ', '∑(Iᵢ wᵢ) / 100'] },
      ans: 1
    },
    {
      q: { bm: 'Dalam rumus luas sektor A = ½r²θ, sudut θ MESTI dalam unit:', en: 'In sector area A = ½r²θ, angle θ MUST be measured in:' },
      options: { bm: ['Darjah (°)', 'Radian (rad)', 'Sentimeter'], en: ['Degrees (°)', 'Radians (rad)', 'Centimetres'] },
      ans: 1
    },
    {
      q: { bm: 'Pada titik maksimum suatu lengkung, dy/dx = 0 dan d²y/dx² ialah:', en: 'At a local MAXIMUM point of a curve, dy/dx = 0 and d²y/dx² is:' },
      options: { bm: ['Negatif (< 0)', 'Positif (> 0)', 'Tak tertakrif'], en: ['Negative (< 0)', 'Positive (> 0)', 'Undefined'] },
      ans: 0
    },
    {
      q: { bm: 'Apakah hasil kamiran tak tentu ∫ (2x + 1)³ dx?', en: 'What is the indefinite integral ∫ (2x + 1)³ dx?' },
      options: { bm: ['(2x+1)⁴ / 4 + c', '(2x+1)⁴ / 8 + c', '6(2x+1)² + c'], en: ['(2x+1)⁴ / 4 + c', '(2x+1)⁴ / 8 + c', '6(2x+1)² + c'] },
      ans: 1
    },
    {
      q: { bm: 'Rumus isi padu kisaran 360° mengelilingi paksi-x ialah:', en: 'The volume of 360° revolution about the x-axis is:' },
      options: { bm: ['∫ y² dx', 'π ∫ y dx', 'π ∫ y² dx'], en: ['∫ y² dx', 'π ∫ y dx', 'π ∫ y² dx'] },
      ans: 2
    },
    {
      q: { bm: 'Nilai bagi 0! (sifar faktorial) ialah:', en: 'The exact value of 0! (zero factorial) is:' },
      options: { bm: ['0', '1', 'Tak tertakrif'], en: ['0', '1', 'Undefined'] },
      ans: 1
    },
    {
      q: { bm: 'Memilih 4 ahli jawatankuasa tanpa jawatan daripada 10 orang menggunakan:', en: 'Choosing 4 unranked committee members out of 10 people uses:' },
      options: { bm: ['¹⁰C₄', '¹⁰P₄', '10! / 4!'], en: ['¹⁰C₄', '¹⁰P₄', '10! / 4!'] },
      ans: 0
    },
    {
      q: { bm: 'Jika X ~ N(60, 25), apakah nilai sisihan piawai σ?', en: 'If X ~ N(60, 25), what is the standard deviation σ?' },
      options: { bm: ['25', '5', '60'], en: ['25', '5', '60'] },
      ans: 1
    },
    {
      q: { bm: 'Dalam Sukuan II (90° < θ < 180°), nisbah trigonometri manakah POSITIF?', en: 'In Quadrant II (90° < θ < 180°), which trig ratio is POSITIVE?' },
      options: { bm: ['sin θ', 'kos θ', 'tan θ'], en: ['sin θ', 'cos θ', 'tan θ'] },
      ans: 0
    },
    {
      q: { bm: 'Identiti sudut berganda bagi sin 2A ialah:', en: 'The double-angle identity for sin 2A is:' },
      options: { bm: ['2 sin A', 'sin²A − kos²A', '2 sin A kos A'], en: ['2 sin A', 'sin²A − cos²A', '2 sin A cos A'] },
      ans: 2
    },
    {
      q: { bm: 'Dalam Pengaturcaraan Linear, "y sekurang-kurangnya 3 kali x" bermaksud:', en: 'In Linear Programming, "y is at least 3 times x" translates to:' },
      options: { bm: ['y ≤ 3x', 'y ≥ 3x', 'x ≥ 3y'], en: ['y ≤ 3x', 'y ≥ 3x', 'x ≥ 3y'] },
      ans: 1
    },
    {
      q: { bm: 'Dalam Kinematik, zarah berhenti seketika / menukar arah apabila:', en: 'In Kinematics, a particle is instantaneously at rest / changes direction when:' },
      options: { bm: ['s = 0', 'v = 0', 'a = 0'], en: ['s = 0', 'v = 0', 'a = 0'] },
      ans: 1
    }
  ];
})(window.AddMathApp);
