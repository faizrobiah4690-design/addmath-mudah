/**
 * AddMath Mudah — Bank Soalan Master SPM (Fasa 1: Tingkatan 4 Bab 1–5 • 50 Soalan Penuh)
 * Setiap soalan lengkap dengan: Pernyataan Format SPM, Kesilapan Lazim Murid & Skim Pemarkahan (K1 / N1) dalam BM & EN.
 */
window.AddMathApp = window.AddMathApp || {};
window.AddMathApp.masterBank = window.AddMathApp.masterBank || {};

(function (App) {
  'use strict';

  Object.assign(App.masterBank, {
    // =========================================================================
    // TINGKATAN 4 BAB 1: FUNGSI (10 SOALAN)
    // =========================================================================
    'f4-c1': [
      {
        code: '1.1', marks: 3,
        topic: { bm: 'Tatatanda dan Jenis Hubungan Fungsi', en: 'Function Notation & Relation Types' },
        q: {
          bm: 'Hubungan antara set $P = \\{-2, -1, 0, 1, 2\\}$ dan set $Q = \\{0, 1, 4\\}$ ditakrifkan oleh $f: x \\mapsto x^2$.\n(a) Nyatakan jenis hubungan tersebut. [1m]\n(b) Nyatakan julat hubungan tersebut. [1m]\n(c) Tulis fungsi dalam tatatanda fungsi yang memetakan elemen set $Q$ kepada nombor positif dalam set $P$. [1m]',
          en: 'The relation between set $P = \\{-2, -1, 0, 1, 2\\}$ and set $Q = \\{0, 1, 4\\}$ is defined by $f: x \\mapsto x^2$.\n(a) State the type of relation. [1m]\n(b) State the range of the relation. [1m]\n(c) Using function notation, write a function mapping elements in $Q$ to positive numbers in $P$. [1m]'
        },
        mistakes: {
          bm: ['Menjawab jenis hubungan sebagai "fungsi" dan bukannya **hubungan banyak kepada satu**.', 'Menulis julat tanpa tanda set $\\{\\;\\}$ atau memasukkan unsur luar kodomain.', 'Menulis $\\pm\\sqrt{x}$ sedangkan soalan menghadkan kepada nombor positif sahaja.'],
          en: ['Answering "function" instead of **many-to-one relation**.', 'Writing the range without curly braces $\\{\\;\\}$.', 'Writing $\\pm\\sqrt{x}$ when restricted to positive outputs only.']
        },
        scheme: [
          { badge: 'N1', bm: '(a) Hubungan banyak kepada satu (*Many-to-one relation*).', en: '(a) Many-to-one relation.' },
          { badge: 'N1', bm: '(b) $\\text{Julat} = \\{0, 1, 4\\}$.', en: '(b) $\\text{Range} = \\{0, 1, 4\\}$.' },
          { badge: 'N1', bm: '(c) $g: x \\mapsto \\sqrt{x}$ atau $g(x) = \\sqrt{x}$ bagi $x \\in Q$.', en: '(c) $g: x \\mapsto \\sqrt{x}$ or $g(x) = \\sqrt{x}$ for $x \\in Q$.' }
        ]
      },
      {
        code: '1.2', marks: 3,
        topic: { bm: 'Domain dan Julat Fungsi Nilai Mutlak', en: 'Domain & Range of Modulus Function' },
        q: {
          bm: 'Diberi fungsi $f(x) = |2x - 5|$ untuk domain $-1 \\le x \\le 4$.\n(a) Cari nilai $f(-1)$ dan $f(4)$. [1m]\n(b) Tentukan julat bagi fungsi $f(x)$ dalam domain tersebut. [2m]',
          en: 'Given $f(x) = |2x - 5|$ for domain $-1 \\le x \\le 4$.\n(a) Find $f(-1)$ and $f(4)$. [1m]\n(b) Determine the range of $f(x)$ for the given domain. [2m]'
        },
        mistakes: {
          bm: ['Menggantikan hujung domain sahaja lalu menulis $3 \\le f(x) \\le 7$, terlupa bucu pantulan pada $x = 2.5$ di mana $f(2.5) = 0$.', 'Menulis julat menggunakan huruf $x$ bukannya $f(x)$ atau $y$.'],
          en: ['Testing endpoints only and writing $3 \\le f(x) \\le 7$, missing the vertex at $x = 2.5$ where $f(2.5) = 0$.', 'Writing range using $x$ instead of $f(x)$.']
        },
        scheme: [
          { badge: 'N1', bm: '(a) $f(-1) = |-7| = 7$; $\\;f(4) = |3| = 3$.', en: '(a) $f(-1) = |-7| = 7$; $\\;f(4) = |3| = 3$.' },
          { badge: 'K1', bm: '(b) Bucu pada $2x - 5 = 0 \\implies x = 2.5 \\in [-1, 4]$, maka nilai minimum $f(2.5) = 0$ dan maksimum $= 7$.', en: '(b) Vertex at $2x - 5 = 0 \\implies x = 2.5 \\in [-1, 4]$, giving minimum $f(2.5) = 0$ and maximum $= 7$.' },
          { badge: 'N1', bm: 'Julat: $0 \\le f(x) \\le 7$.', en: 'Range: $0 \\le f(x) \\le 7$.' }
        ]
      },
      {
        code: '1.3', marks: 3,
        topic: { bm: 'Fungsi Gubahan Dua Fungsi', en: 'Composite of Two Functions' },
        q: {
          bm: 'Diberi $f(x) = 3x - 2$ dan $g(x) = \\frac{4}{x-1},\\; x \\ne 1$.\n(a) Cari ungkapan fungsi gubahan $fg(x)$. [2m]\n(b) Cari nilai $x$ apabila $fg(x) = 10$. [1m]',
          en: 'Given $f(x) = 3x - 2$ and $g(x) = \\frac{4}{x-1},\\; x \\ne 1$.\n(a) Find the composite function $fg(x)$. [2m]\n(b) Find $x$ when $fg(x) = 10$. [1m]'
        },
        mistakes: {
          bm: ['Mendarab $f(x) \\times g(x)$ bukannya menggantikan $f(g(x))$.', 'Tersilap tanda semasa menyamakan penyebut: menulis $\\frac{10 - 2x}{x - 1}$ bukannya $\\frac{14 - 2x}{x - 1}$.'],
          en: ['Multiplying $f(x) \\times g(x)$ instead of substituting $f(g(x))$.', 'Sign error when combining denominators: writing $\\frac{10 - 2x}{x - 1}$ instead of $\\frac{14 - 2x}{x - 1}$.']
        },
        scheme: [
          { badge: 'K1', bm: '(a) $fg(x) = 3\\left(\\frac{4}{x-1}\\right) - 2 = \\frac{12 - 2(x-1)}{x-1}$', en: '(a) $fg(x) = 3\\left(\\frac{4}{x-1}\\right) - 2 = \\frac{12 - 2(x-1)}{x-1}$' },
          { badge: 'N1', bm: '$fg(x) = \\frac{14 - 2x}{x - 1},\\; x \\ne 1$.', en: '$fg(x) = \\frac{14 - 2x}{x - 1},\\; x \\ne 1$.' },
          { badge: 'N1', bm: '(b) $\\frac{14 - 2x}{x - 1} = 10 \\implies 14 - 2x = 10x - 10 \\implies 12x = 24 \\implies x = 2$.', en: '(b) $\\frac{14 - 2x}{x - 1} = 10 \\implies 14 - 2x = 10x - 10 \\implies 12x = 24 \\implies x = 2$.' }
        ]
      },
      {
        code: '1.4', marks: 3,
        topic: { bm: 'Menentukan Fungsi Luar f(x)', en: 'Finding Outer Function f(x)' },
        q: {
          bm: 'Diberi $g(x) = 2x + 3$ dan fungsi gubahan $fg(x) = 4x^2 + 12x + 5$. Cari fungsi $f(x)$. [3m]',
          en: 'Given $g(x) = 2x + 3$ and $fg(x) = 4x^2 + 12x + 5$. Find the function $f(x)$. [3m]'
        },
        mistakes: {
          bm: ['Mengembangkan $\\left(\\frac{u-3}{2}\\right)^2$ tanpa mengkuasadua penyebut $2^2 = 4$.', 'Kekeliruan menukar semula pemboleh ubah gantian $u$ kepada $x$.'],
          en: ['Expanding $\\left(\\frac{u-3}{2}\\right)^2$ without squaring denominator $2^2 = 4$.', 'Confusion when replacing dummy variable $u$ back with $x$.']
        },
        scheme: [
          { badge: 'K1', bm: 'Biarkan $u = 2x + 3 \\implies x = \\frac{u - 3}{2}$.', en: 'Let $u = 2x + 3 \\implies x = \\frac{u - 3}{2}$.' },
          { badge: 'K1', bm: '$f(u) = 4\\left(\\frac{u-3}{2}\\right)^2 + 12\\left(\\frac{u-3}{2}\\right) + 5 = (u^2 - 6u + 9) + (6u - 18) + 5$', en: '$f(u) = 4\\left(\\frac{u-3}{2}\\right)^2 + 12\\left(\\frac{u-3}{2}\\right) + 5 = (u^2 - 6u + 9) + (6u - 18) + 5$' },
          { badge: 'N1', bm: '$f(u) = u^2 - 4 \\implies f(x) = x^2 - 4$.', en: '$f(u) = u^2 - 4 \\implies f(x) = x^2 - 4$.' }
        ]
      },
      {
        code: '1.5', marks: 3,
        topic: { bm: 'Menentukan Fungsi Dalam g(x)', en: 'Finding Inner Function g(x)' },
        q: {
          bm: 'Diberi $f(x) = 5x - 4$ dan $fg(x) = \\frac{3}{x+2},\\; x \\ne -2$. Cari fungsi $g(x)$. [3m]',
          en: 'Given $f(x) = 5x - 4$ and $fg(x) = \\frac{3}{x+2},\\; x \\ne -2$. Find $g(x)$. [3m]'
        },
        mistakes: {
          bm: ['Mengguna kaedah songsang rumit sedangkan boleh ganti terus $f(g(x)) = 5g(x) - 4$.', 'Kesilapan membahagi pecahan dengan $5$ (mendarab pengangka bukannya penyebut).'],
          en: ['Overcomplicating instead of direct substitution $f(g(x)) = 5g(x) - 4$.', 'Dividing fraction by $5$ incorrectly.']
        },
        scheme: [
          { badge: 'K1', bm: '$5g(x) - 4 = \\frac{3}{x+2}$', en: '$5g(x) - 4 = \\frac{3}{x+2}$' },
          { badge: 'K1', bm: '$5g(x) = \\frac{3 + 4(x+2)}{x+2} = \\frac{4x + 11}{x+2}$', en: '$5g(x) = \\frac{3 + 4(x+2)}{x+2} = \\frac{4x + 11}{x+2}$' },
          { badge: 'N1', bm: '$g(x) = \\frac{4x + 11}{5(x+2)},\\; x \\ne -2$.', en: '$g(x) = \\frac{4x + 11}{5(x+2)},\\; x \\ne -2$.' }
        ]
      },
      {
        code: '1.6', marks: 3,
        topic: { bm: 'Fungsi Songsang Pecahan Algebra', en: 'Inverse of Rational Function' },
        q: {
          bm: 'Diberi $f(x) = \\frac{2x+1}{x-3},\\; x \\ne 3$.\n(a) Cari fungsi songsang $f^{-1}(x)$. [2m]\n(b) Nyatakan nilai $x$ apabila $f^{-1}(x)$ tidak tertakrif. [1m]',
          en: 'Given $f(x) = \\frac{2x+1}{x-3},\\; x \\ne 3$.\n(a) Find the inverse function $f^{-1}(x)$. [2m]\n(b) State the value of $x$ for which $f^{-1}(x)$ is undefined. [1m]'
        },
        mistakes: {
          bm: ['Mengelirukan fungsi songsang $f^{-1}(x)$ dengan salingan $\\frac{x-3}{2x+1}$!', 'Gagal mengumpul dan memfaktorkan $y$ daripada $2y + 1 = x(y - 3)$.'],
          en: ['Confusing inverse $f^{-1}(x)$ with reciprocal $\\frac{x-3}{2x+1}$!', 'Failing to collect and factor out $y$ from $2y + 1 = x(y - 3)$.']
        },
        scheme: [
          { badge: 'K1', bm: '(a) Biar $y = f^{-1}(x) \\implies \\frac{2y+1}{y-3} = x \\implies 2y + 1 = xy - 3x \\implies y(x - 2) = 3x + 1$.', en: '(a) Let $y = f^{-1}(x) \\implies \\frac{2y+1}{y-3} = x \\implies y(x - 2) = 3x + 1$.' },
          { badge: 'N1', bm: '$f^{-1}(x) = \\frac{3x + 1}{x - 2},\\; x \\ne 2$.', en: '$f^{-1}(x) = \\frac{3x + 1}{x - 2},\\; x \\ne 2$.' },
          { badge: 'N1', bm: '(b) Tidak tertakrif apabila $x - 2 = 0 \\implies x = 2$.', en: '(b) Undefined when $x - 2 = 0 \\implies x = 2$.' }
        ]
      },
      {
        code: '1.7', marks: 2,
        topic: { bm: 'Ujian Garis Mengufuk & Kewujudan Songsang', en: 'Horizontal Line Test & Inverse Existence' },
        q: {
          bm: '(a) Terangkan mengapa $f(x) = x^2 - 4x + 5,\\; x \\in \\mathbb{R}$ tidak mempunyai fungsi songsang. [1m]\n(b) Nyatakan satu domain terhad supaya $f^{-1}(x)$ wujud. [1m]',
          en: '(a) Explain why $f(x) = x^2 - 4x + 5,\\; x \\in \\mathbb{R}$ has no inverse function. [1m]\n(b) State a suitable restricted domain so that $f^{-1}(x)$ exists. [1m]'
        },
        mistakes: {
          bm: ['Menyebut Ujian Garis Mencancang (*Vertical Line Test*) bukannya **Ujian Garis Mengufuk**.', 'Memilih domain yang merentasi paksi simetri $x = 2$.'],
          en: ['Citing Vertical Line Test instead of **Horizontal Line Test**.', 'Choosing a domain spanning both sides of axis of symmetry $x = 2$.']
        },
        scheme: [
          { badge: 'N1', bm: '(a) Fungsi banyak-ke-satu (garis mengufuk memotong graf lebih daripada 1 titik), maka bukan satu-ke-satu.', en: '(a) Many-to-one function (horizontal line cuts graph at more than 1 point), not one-to-one.' },
          { badge: 'N1', bm: '(b) Paksi simetri $x = 2$; domain terhad: $x \\ge 2$ (atau $x \\le 2$).', en: '(b) Axis of symmetry $x = 2$; restricted domain: $x \\ge 2$ (or $x \\le 2$).' }
        ]
      },
      {
        code: '1.8', marks: 4,
        topic: { bm: 'Lakaran Graf Fungsi Nilai Mutlak', en: 'Sketching Modulus Function Graph' },
        q: {
          bm: 'Lakar graf $f(x) = |3 - 2x|$ untuk domain $-1 \\le x \\le 3$. Nyatakan koordinat bucu dan julat fungsi. [4m]',
          en: 'Sketch $f(x) = |3 - 2x|$ for $-1 \\le x \\le 3$. State the vertex coordinates and range of the function. [4m]'
        },
        mistakes: {
          bm: ['Melukis garis lurus menembusi bawah paksi-$x$ tanpa memantulkannya ke atas.', 'Tidak melabel bucu $(1.5, 0)$ dan titik hujung $(-1, 5)$ serta $(3, 3)$.'],
          en: ['Drawing a straight line below the $x$-axis without V-reflection.', 'Omitting vertex $(1.5, 0)$ and endpoints $(-1, 5), (3, 3)$.']
        },
        scheme: [
          { badge: 'K1', bm: 'Bucu pada paksi-$x$: $3 - 2x = 0 \\implies (1.5, 0)$.', en: 'Vertex on $x$-axis: $3 - 2x = 0 \\implies (1.5, 0)$.' },
          { badge: 'K1', bm: 'Titik hujung $(-1, 5)$, $(3, 3)$ dan pintasan-$y$ $(0, 3)$.', en: 'Endpoints $(-1, 5)$, $(3, 3)$ and $y$-intercept $(0, 3)$.' },
          { badge: 'N1', bm: 'Lakaran bentuk V tepat & julat $0 \\le f(x) \\le 5$.', en: 'Correct V-shaped graph & range $0 \\le f(x) \\le 5$.' }
        ]
      },
      {
        code: '1.9', marks: 4,
        topic: { bm: 'Fungsi Gubahan Berulang fⁿ(x)', en: 'Iterated Composite Functions fⁿ(x)' },
        q: {
          bm: 'Diberi $f(x) = \\frac{x}{x+1},\\; x \\ne -1$.\n(a) Cari ungkapan $f^2(x)$ dan $f^3(x)$. [2m]\n(b) Seterusnya, deduksikan ungkapan $f^{30}(x)$. [2m]',
          en: 'Given $f(x) = \\frac{x}{x+1},\\; x \\ne -1$.\n(a) Find $f^2(x)$ and $f^3(x)$. [2m]\n(b) Hence deduce an expression for $f^{30}(x)$. [2m]'
        },
        mistakes: {
          bm: ['Mendarab $\\left(\\frac{x}{x+1}\\right)^2$ bukannya menggantikan fungsi ke dalam dirinya sendiri.', 'Cuai mempermudah pecahan bertingkat pada $f^2(x)$.'],
          en: ['Squaring the fraction instead of composing $f(f(x))$.', 'Algebraic slip simplifying compound fractions in $f^2(x)$.']
        },
        scheme: [
          { badge: 'K1', bm: '(a) $f^2(x) = \\frac{\\frac{x}{x+1}}{\\frac{x}{x+1}+1} = \\frac{x}{2x+1}$; $\\;f^3(x) = \\frac{x}{3x+1}$.', en: '(a) $f^2(x) = \\frac{x}{2x+1}$ and $f^3(x) = \\frac{x}{3x+1}$.' },
          { badge: 'K1', bm: '(b) Pola induktif: $f^n(x) = \\frac{x}{nx+1}$.', en: '(b) Pattern recognition: $f^n(x) = \\frac{x}{nx+1}$.' },
          { badge: 'N1', bm: '$f^{30}(x) = \\frac{x}{30x+1},\\; x \\ne -\\frac{1}{30}$.', en: '$f^{30}(x) = \\frac{x}{30x+1},\\; x \\ne -\\frac{1}{30}$.' }
        ]
      },
      {
        code: '1.10', marks: 4,
        topic: { bm: 'Masalah Kontekstual Diskaun & Kupon', en: 'Contextual Discount & Voucher Modeling' },
        q: {
          bm: 'Kedai menawarkan diskaun 20% diwakili $d(x) = 0.8x$ dan kupon tunai RM15 diwakili $c(x) = x - 15$.\n(a) Tulis fungsi gubahan jika diskaun 20% digunakan **sebelum** kupon tunai. [2m]\n(b) Jika harga asal RM120, hitung harga akhir. [2m]',
          en: 'A store offers a 20% discount $d(x) = 0.8x$ and an RM15 cash voucher $c(x) = x - 15$.\n(a) Find the composite function if the 20% discount is applied **before** the voucher. [2m]\n(b) Find the final price for an item originally priced at RM120. [2m]'
        },
        mistakes: {
          bm: ['Tertukar urutan fungsi: menulis $dc(x)$ sedangkan diskaun bertindak dahulu (sebelah dalam) iaitu $cd(x) = c(d(x))$!'],
          en: ['Reversing composition order: writing $dc(x)$ instead of $cd(x) = c(d(x))$ when discount acts first!']
        },
        scheme: [
          { badge: 'K1', bm: '(a) Diskaun dahulu kemudian kupon $\\implies cd(x) = c(0.8x)$', en: '(a) Discount first then voucher $\\implies cd(x) = c(0.8x)$' },
          { badge: 'N1', bm: '$cd(x) = 0.8x - 15$.', en: '$cd(x) = 0.8x - 15$.' },
          { badge: 'N1', bm: '(b) $cd(120) = 0.8(120) - 15 = 96 - 15 = \\text{RM }81.00$.', en: '(b) $cd(120) = 0.8(120) - 15 = 96 - 15 = \\text{RM }81.00$.' }
        ]
      }
    ],

    // =========================================================================
    // TINGKATAN 4 BAB 2: FUNGSI KUADRATIK (10 SOALAN)
    // =========================================================================
    'f4-c2': [
      {
        code: '2.1', marks: 3,
        topic: { bm: 'Rumus Kuadratik', en: 'Quadratic Formula' },
        q: { bm: 'Selesaikan persamaan kuadratik $3x^2 - 7x + 2 = 0$. [3m]', en: 'Solve the quadratic equation $3x^2 - 7x + 2 = 0$. [3m]' },
        mistakes: {
          bm: ['Kesilapan tanda pada $-b$: menulis $-7$ bukannya $-(-7) = +7$.', 'Meletakkan pembahagi $2a$ di bawah punca kuasa sahaja bukannya keseluruhan pengangka.'],
          en: ['Sign error on $-b$: writing $-7$ instead of $-(-7) = +7$.', 'Dividing only the square-root term by $2a$ instead of the entire numerator.']
        },
        scheme: [
          { badge: 'K1', bm: '$x = \\frac{-(-7) \\pm \\sqrt{(-7)^2 - 4(3)(2)}}{2(3)}$', en: '$x = \\frac{-(-7) \\pm \\sqrt{(-7)^2 - 4(3)(2)}}{2(3)}$' },
          { badge: 'K1', bm: '$x = \\frac{7 \\pm \\sqrt{25}}{6} = \\frac{7 \\pm 5}{6}$', en: '$x = \\frac{7 \\pm \\sqrt{25}}{6} = \\frac{7 \\pm 5}{6}$' },
          { badge: 'N1', bm: '$x = 2$ atau $x = \\frac{1}{3}$.', en: '$x = 2$ or $x = \\frac{1}{3}$.' }
        ]
      },
      {
        code: '2.2', marks: 3,
        topic: { bm: 'Syarat Pembezalayan Dua Punca Berbeza', en: 'Discriminant Condition for Distinct Roots' },
        q: { bm: 'Persamaan $x^2 + 2kx + (k + 6) = 0$ mempunyai dua punca nyata dan berbeza. Cari julat nilai $k$. [3m]', en: 'The equation $x^2 + 2kx + (k + 6) = 0$ has two distinct real roots. Find the range of values of $k$. [3m]' },
        mistakes: {
          bm: ['Mengguna $\\ge 0$ bukannya $> 0$ bagi dua punca **berbeza**.', 'Mengambil satu rantau tengah sahaja bukannya dua rantau luar bagi $(k-3)(k+2) > 0$.'],
          en: ['Using $\\ge 0$ instead of strict $> 0$ for **distinct** roots.', 'Failing to take the two outer regions for $(k-3)(k+2) > 0$.']
        },
        scheme: [
          { badge: 'K1', bm: '$b^2 - 4ac > 0 \\implies (2k)^2 - 4(1)(k + 6) > 0$', en: '$b^2 - 4ac > 0 \\implies (2k)^2 - 4(1)(k + 6) > 0$' },
          { badge: 'K1', bm: '$4k^2 - 4k - 24 > 0 \\implies (k - 3)(k + 2) > 0$', en: '$4k^2 - 4k - 24 > 0 \\implies (k - 3)(k + 2) > 0$' },
          { badge: 'N1', bm: '$k < -2$ atau $k > 3$.', en: '$k < -2$ or $k > 3$.' }
        ]
      },
      {
        code: '2.3', marks: 4,
        topic: { bm: 'Garis Lurus Tangen kepada Parabola', en: 'Straight Line Tangent to a Parabola' },
        q: { bm: 'Garis lurus $y = 2x + c$ menyentuh lengkung $y = x^2 - 4x + 7$ pada satu titik.\n(a) Cari nilai $c$. [3m]\n(b) Cari koordinat titik sentuhan tersebut. [1m]', en: 'The line $y = 2x + c$ touches the curve $y = x^2 - 4x + 7$ at one point.\n(a) Find $c$. [3m]\n(b) Find the coordinates of the point of contact. [1m]' },
        mistakes: {
          bm: ['Lupa menyusun persamaan kepada bentuk am $ax^2 + bx + k = 0$ sebelum mengambil $a, b, c$.', 'Mengguna $b^2 - 4ac > 0$ bukannya $= 0$ untuk tangen.'],
          en: ['Forgetting to rearrange into standard form $= 0$ before reading $a, b, c$.', 'Using $b^2 - 4ac > 0$ instead of $= 0$ for tangency.']
        },
        scheme: [
          { badge: 'K1', bm: '(a) $x^2 - 4x + 7 = 2x + c \\implies x^2 - 6x + (7 - c) = 0$', en: '(a) $x^2 - 4x + 7 = 2x + c \\implies x^2 - 6x + (7 - c) = 0$' },
          { badge: 'K1', bm: 'Menyentuh $\\implies (-6)^2 - 4(1)(7 - c) = 0 \\implies 8 + 4c = 0$', en: 'Touches $\\implies (-6)^2 - 4(1)(7 - c) = 0 \\implies 8 + 4c = 0$' },
          { badge: 'N1', bm: '$c = -2$; $\\;$ (b) $(x - 3)^2 = 0 \\implies x = 3,\\; y = 4 \\implies (3, 4)$.', en: '$c = -2$; $\\;$ (b) $(x - 3)^2 = 0 \\implies x = 3,\\; y = 4 \\implies (3, 4)$.' }
        ]
      },
      {
        code: '2.4', marks: 3,
        topic: { bm: 'Hasil Tambah dan Hasil Darab Punca (HTP & HDP)', en: 'Sum and Product of Roots (SOR & POR)' },
        q: { bm: 'Diberi $\\alpha$ dan $\\beta$ ialah punca bagi $2x^2 - 5x - 4 = 0$. Tanpa menyelesaikan persamaan, cari nilai $\\frac{1}{\\alpha} + \\frac{1}{\\beta}$. [3m]', en: 'Given $\\alpha$ and $\\beta$ are roots of $2x^2 - 5x - 4 = 0$. Without solving the equation, find $\\frac{1}{\\alpha} + \\frac{1}{\\beta}$. [3m]' },
        mistakes: {
          bm: ['Menyelesaikan punca perpuluhan (melanggar arahan "tanpa menyelesaikan").', 'Salah algebra pecahan: menganggap $\\frac{1}{\\alpha} + \\frac{1}{\\beta} = \\frac{1}{\\alpha + \\beta}$!'],
          en: ['Computing decimal roots directly (violating "without solving").', 'Illegal fraction addition: writing $\\frac{1}{\\alpha} + \\frac{1}{\\beta} = \\frac{1}{\\alpha + \\beta}$!']
        },
        scheme: [
          { badge: 'K1', bm: '$\\alpha + \\beta = \\frac{5}{2}$ dan $\\alpha\\beta = -2$.', en: '$\\alpha + \\beta = \\frac{5}{2}$ and $\\alpha\\beta = -2$.' },
          { badge: 'K1', bm: '$\\frac{1}{\\alpha} + \\frac{1}{\\beta} = \\frac{\\alpha + \\beta}{\\alpha\\beta} = \\frac{5/2}{-2}$', en: '$\\frac{1}{\\alpha} + \\frac{1}{\\beta} = \\frac{\\alpha + \\beta}{\\alpha\\beta} = \\frac{5/2}{-2}$' },
          { badge: 'N1', bm: '$= -\\frac{5}{4}$.', en: '$= -\\frac{5}{4}$.' }
        ]
      },
      {
        code: '2.5', marks: 4,
        topic: { bm: 'Membentuk Persamaan Kuadratik Baharu', en: 'Forming a New Quadratic Equation' },
        q: { bm: 'Diberi $\\alpha$ dan $\\beta$ ialah punca bagi $x^2 - 4x + 1 = 0$. Bentuk persamaan kuadratik baharu dengan punca $2\\alpha$ dan $2\\beta$. [4m]', en: 'Given $\\alpha, \\beta$ are roots of $x^2 - 4x + 1 = 0$. Form a quadratic equation with roots $2\\alpha$ and $2\\beta$. [4m]' },
        mistakes: {
          bm: ['Tertinggal "$= 0$" pada jawapan akhir (ungkapan bukannya persamaan!).', 'Mengira $\\text{HDP} = (2\\alpha)(2\\beta) = 2\\alpha\\beta$ bukannya $4\\alpha\\beta$.'],
          en: ['Omitting "$= 0$" at the end.', 'Computing $\\text{POR} = (2\\alpha)(2\\beta) = 2\\alpha\\beta$ instead of $4\\alpha\\beta$.']
        },
        scheme: [
          { badge: 'K1', bm: 'Asal: $\\alpha + \\beta = 4,\\; \\alpha\\beta = 1 \\implies \\text{HTP}_{\\text{baru}} = 2(4) = 8$.', en: 'Original: $\\alpha + \\beta = 4,\\; \\alpha\\beta = 1 \\implies \\text{SOR}_{\\text{new}} = 2(4) = 8$.' },
          { badge: 'K1', bm: '$\\text{HDP}_{\\text{baru}} = 4\\alpha\\beta = 4(1) = 4$.', en: '$\\text{POR}_{\\text{new}} = 4\\alpha\\beta = 4(1) = 4$.' },
          { badge: 'N1', bm: '$x^2 - 8x + 4 = 0$.', en: '$x^2 - 8x + 4 = 0$.' }
        ]
      },
      {
        code: '2.6', marks: 3,
        topic: { bm: 'Penyempurnaan Kuasa Dua (Bentuk Verteks)', en: 'Completing the Square (Vertex Form)' },
        q: { bm: 'Ungkapkan $f(x) = 2x^2 - 8x + 5$ dalam bentuk verteks $f(x) = a(x - h)^2 + k$. [3m]', en: 'Express $f(x) = 2x^2 - 8x + 5$ in vertex form $f(x) = a(x - h)^2 + k$. [3m]' },
        mistakes: {
          bm: ['Lupa memfaktorkan $2$ keluar daripada dua sebutan pertama.', 'Lupa mendarab $(-2)^2 = 4$ dengan faktor luar $2$ semasa mengeluarkannya dari kurungan.'],
          en: ['Forgetting to factor $2$ out of the first two terms.', 'Forgetting to multiply $-4$ by the outer factor $2$ when expanding brackets.']
        },
        scheme: [
          { badge: 'K1', bm: '$f(x) = 2[x^2 - 4x] + 5 = 2[(x - 2)^2 - 4] + 5$', en: '$f(x) = 2[x^2 - 4x] + 5 = 2[(x - 2)^2 - 4] + 5$' },
          { badge: 'N1', bm: '$f(x) = 2(x - 2)^2 - 8 + 5 = 2(x - 2)^2 - 3$.', en: '$f(x) = 2(x - 2)^2 - 8 + 5 = 2(x - 2)^2 - 3$.' }
        ]
      },
      {
        code: '2.7', marks: 2,
        topic: { bm: 'Paksi Simetri dan Titik Optimum', en: 'Axis of Symmetry & Optimum Point' },
        q: { bm: 'Diberi $f(x) = -3(x + 4)^2 + 11$. Nyatakan:\n(a) Nilai maksimum $f(x)$ dan nilai $x$ sepadan. [1m]\n(b) Persamaan paksi simetri. [1m]', en: 'Given $f(x) = -3(x + 4)^2 + 11$. State:\n(a) Maximum value of $f(x)$ and corresponding $x$. [1m]\n(b) Equation of the axis of symmetry. [1m]' },
        mistakes: {
          bm: ['Menulis paksi simetri sebagai nombor "$-4$" sahaja tanpa persamaan garis "$x = -4$".', 'Tersilap tanda pada $(x + 4)$ dengan menulis $x = +4$.'],
          en: ['Writing "$-4$" instead of the line equation "$x = -4$".', 'Sign error on $(x + 4)$, writing $x = +4$.']
        },
        scheme: [
          { badge: 'N1', bm: '(a) Nilai maksimum $= 11$ apabila $x = -4$.', en: '(a) Maximum value $= 11$ at $x = -4$.' },
          { badge: 'N1', bm: '(b) Paksi simetri: $x = -4$.', en: '(b) Axis of symmetry: $x = -4$.' }
        ]
      },
      {
        code: '2.8', marks: 3,
        topic: { bm: 'Ketaksamaan Kuadratik Bukan Sifar', en: 'Non-Zero Quadratic Inequality' },
        q: { bm: 'Cari julat nilai $x$ bagi ketaksamaan $(2x - 1)(x + 3) \\ge 7$. [3m]', en: 'Find the range of values of $x$ for $(2x - 1)(x + 3) \\ge 7$. [3m]' },
        mistakes: {
          bm: ['Terus memisah $2x - 1 \\ge 7$ dan $x + 3 \\ge 7$! Sifat hasil darab sifar hanya sah apabila sebelah kanan $= 0$.'],
          en: ['Splitting $2x - 1 \\ge 7$ directly! You MUST expand and make RHS $= 0$ first.']
        },
        scheme: [
          { badge: 'K1', bm: 'Kembangkan: $2x^2 + 5x - 3 \\ge 7 \\implies 2x^2 + 5x - 10 \\ge 0$.', en: 'Expand: $2x^2 + 5x - 3 \\ge 7 \\implies 2x^2 + 5x - 10 \\ge 0$.' },
          { badge: 'K1', bm: 'Punca sempadan: $x = \\frac{-5 \\pm \\sqrt{105}}{4}$.', en: 'Boundary roots: $x = \\frac{-5 \\pm \\sqrt{105}}{4}$.' },
          { badge: 'N1', bm: '$x \\le \\frac{-5 - \\sqrt{105}}{4}$ atau $x \\ge \\frac{-5 + \\sqrt{105}}{4}$.', en: '$x \\le \\frac{-5 - \\sqrt{105}}{4}$ or $x \\ge \\frac{-5 + \\sqrt{105}}{4}$.' }
        ]
      },
      {
        code: '2.9', marks: 3,
        topic: { bm: 'Graf Sentiasa Di Atas Paksi-x', en: 'Curve Always Above the x-Axis' },
        q: { bm: 'Fungsi $f(x) = x^2 + 2px + (3p + 4)$ sentiasa berada di atas paksi-$x$. Cari julat nilai $p$. [3m]', en: 'The function $f(x) = x^2 + 2px + (3p + 4)$ lies entirely above the $x$-axis. Find the range of $p$. [3m]' },
        mistakes: {
          bm: ['Menganggap "di atas paksi-$x$" bermaksud $b^2 - 4ac > 0$! Tidak memotong paksi-$x$ bermaksud **tiada punca nyata ($b^2 - 4ac < 0$)**.'],
          en: ['Writing $b^2 - 4ac > 0$! Never touching the $x$-axis means **no real roots ($b^2 - 4ac < 0$)**.']
        },
        scheme: [
          { badge: 'K1', bm: '$a = 1 > 0$ dan $b^2 - 4ac < 0 \\implies (2p)^2 - 4(1)(3p + 4) < 0$.', en: '$a = 1 > 0$ and $b^2 - 4ac < 0 \\implies (2p)^2 - 4(1)(3p + 4) < 0$.' },
          { badge: 'K1', bm: '$p^2 - 3p - 4 < 0 \\implies (p - 4)(p + 1) < 0$.', en: '$p^2 - 3p - 4 < 0 \\implies (p - 4)(p + 1) < 0$.' },
          { badge: 'N1', bm: '$-1 < p < 4$.', en: '$-1 < p < 4$.' }
        ]
      },
      {
        code: '2.10', marks: 4,
        topic: { bm: 'Pengoptimuman Luas Kandang Kontekstual', en: 'Contextual Enclosure Area Optimization' },
        q: { bm: 'Sebatang dawai $60\\text{ m}$ digunakan untuk memagar kandang segi empat tepat di tepi dinding batu (satu sisi dinding tidak perlu pagar). Cari luas maksimum kandang. [4m]', en: 'A $60\\text{ m}$ wire fences a rectangular enclosure against a stone wall (wall side needs no wire). Find the maximum area. [4m]' },
        mistakes: {
          bm: ['Menulis perimeter dawai sebagai $2x + 2y = 60$ bukannya $2x + y = 60$ (kerana hanya 3 sisi berpagar).'],
          en: ['Writing $2x + 2y = 60$ instead of $2x + y = 60$ (only 3 sides use wire).']
        },
        scheme: [
          { badge: 'K1', bm: '$2x + y = 60 \\implies y = 60 - 2x$.', en: '$2x + y = 60 \\implies y = 60 - 2x$.' },
          { badge: 'K1', bm: '$A = x(60 - 2x) = -2(x - 15)^2 + 450$.', en: '$A = x(60 - 2x) = -2(x - 15)^2 + 450$.' },
          { badge: 'N1', bm: 'Luas maksimum $= 450\\text{ m}^2$ (pada $x = 15\\text{ m}$).', en: 'Maximum area $= 450\\text{ m}^2$ (at $x = 15\\text{ m}$).' }
        ]
      }
    ],

    // =========================================================================
    // TINGKATAN 4 BAB 3: SISTEM PERSAMAAN (10 SOALAN)
    // =========================================================================
    'f4-c3': [
      {
        code: '3.1', marks: 5,
        topic: { bm: 'Sistem Tiga Persamaan Linear', en: 'System of Three Linear Equations' },
        q: { bm: 'Selesaikan sistem persamaan serentak:\n$x + 2y - z = 2$, $\\;2x - y + 3z = 9$, $\\;3x + 3y + z = 10$. [5m]', en: 'Solve the linear system:\n$x + 2y - z = 2$, $\\;2x - y + 3z = 9$, $\\;3x + 3y + z = 10$. [5m]' },
        mistakes: {
          bm: ['Menghapuskan pemboleh ubah berbeza daripada dua pasangan persamaan (contoh: hapus $z$, kemudian hapus $y$), menyebabkan masih tinggal 3 pemboleh ubah!'],
          en: ['Eliminating different variables across the two pairs instead of the SAME variable!']
        },
        scheme: [
          { badge: 'K1', bm: 'Hapuskan $z$: $3(1) + (2) \\implies 5x + 5y = 15 \\implies x + y = 3$ --- (4).', en: 'Eliminate $z$: $3(1) + (2) \\implies x + y = 3$ --- (4).' },
          { badge: 'K1', bm: '$(1) + (3) \\implies 4x + 5y = 12$ --- (5).', en: '$(1) + (3) \\implies 4x + 5y = 12$ --- (5).' },
          { badge: 'K1', bm: 'Ganti $y = 3 - x$ ke (5): $4x + 5(3 - x) = 12 \\implies x = 3$.', en: 'Substitute $y = 3 - x$ into (5): $x = 3$.' },
          { badge: 'N1', bm: '$x = 3,\\; y = 0,\\; z = 1$.', en: '$x = 3,\\; y = 0,\\; z = 1$.' }
        ]
      },
      {
        code: '3.2', marks: 5,
        topic: { bm: 'Persamaan Serentak Linear & Tak Linear', en: 'Simultaneous Linear & Non-Linear Equations' },
        q: { bm: 'Selesaikan persamaan serentak $2x + y = 1$ dan $2x^2 + xy - y^2 = -4$ (betul kepada 3 tempat perpuluhan). [5m]', en: 'Solve simultaneously $2x + y = 1$ and $2x^2 + xy - y^2 = -4$ (to 3 d.p.). [5m]' },
        mistakes: {
          bm: ['Cuai tanda negatif di hadapan kurungan semasa mengembang $-(1 - 2x)^2 = -(1 - 4x + 4x^2)$.'],
          en: ['Failing to distribute the minus sign across every term of $-(1 - 2x)^2$.']
        },
        scheme: [
          { badge: 'K1', bm: '$y = 1 - 2x \\implies 2x^2 + x(1 - 2x) - (1 - 2x)^2 = -4$.', en: '$y = 1 - 2x \\implies 2x^2 + x(1 - 2x) - (1 - 2x)^2 = -4$.' },
          { badge: 'K1', bm: '$4x^2 - 5x - 3 = 0 \\implies x = \\frac{5 \\pm \\sqrt{73}}{8}$.', en: '$4x^2 - 5x - 3 = 0 \\implies x = \\frac{5 \\pm \\sqrt{73}}{8}$.' },
          { badge: 'N1', bm: '$(1.693, -2.386)$ dan $(-0.443, 1.886)$.', en: '$(1.693, -2.386)$ and $(-0.443, 1.886)$.' }
        ]
      },
      {
        code: '3.3', marks: 5,
        topic: { bm: 'Persamaan Serentak Melibatkan Pecahan', en: 'Simultaneous Equations with Algebraic Fractions' },
        q: { bm: 'Selesaikan persamaan serentak $x - 2y = 3$ dan $\\frac{2}{x} + \\frac{3}{y} = 2$ (3 t.p.). [5m]', en: 'Solve simultaneously $x - 2y = 3$ and $\\frac{2}{x} + \\frac{3}{y} = 2$ (to 3 d.p.). [5m]' },
        mistakes: {
          bm: ['Menjumlahkan pengangka dan penyebut secara haram: $\\frac{2}{x} + \\frac{3}{y} = \\frac{5}{x+y}$!'],
          en: ['Adding numerators and denominators illegally: $\\frac{2}{x} + \\frac{3}{y} = \\frac{5}{x+y}$!']
        },
        scheme: [
          { badge: 'K1', bm: 'Darab $xy$: $2y + 3x = 2xy$; ganti $x = 3 + 2y$.', en: 'Multiply by $xy$: $2y + 3x = 2xy$; substitute $x = 3 + 2y$.' },
          { badge: 'K1', bm: '$2y + 3(3 + 2y) = 2(3 + 2y)y \\implies 4y^2 - 2y - 9 = 0$.', en: '$4y^2 - 2y - 9 = 0$.' },
          { badge: 'N1', bm: '$(6.542, 1.771)$ dan $(0.458, -1.271)$.', en: '$(6.542, 1.771)$ and $(0.458, -1.271)$.' }
        ]
      },
      {
        code: '3.4', marks: 5,
        topic: { bm: 'Pemodelan Segi Tiga Tegak (Pythagoras)', en: 'Right-Triangle Perimeter & Pythagoras' },
        q: { bm: 'Sebuah segi tiga bersudut tegak mempunyai hipotenus $13\\text{ cm}$ dan perimeter $30\\text{ cm}$. Cari panjang dua sisi berserenjang. [5m]', en: 'A right-angled triangle has hypotenuse $13\\text{ cm}$ and perimeter $30\\text{ cm}$. Find the lengths of the two perpendicular legs. [5m]' },
        mistakes: {
          bm: ['Menulis $x + y = 30$ (terlupa menolak hipotenus $13$ daripada jumlah perimeter!).'],
          en: ['Writing $x + y = 30$ instead of subtracting hypotenuse $13$ first!']
        },
        scheme: [
          { badge: 'K1', bm: '$x + y + 13 = 30 \\implies y = 17 - x$ dan $x^2 + y^2 = 169$.', en: '$x + y + 13 = 30 \\implies y = 17 - x$ and $x^2 + y^2 = 169$.' },
          { badge: 'K1', bm: '$x^2 + (17 - x)^2 = 169 \\implies x^2 - 17x + 60 = 0 \\implies (x - 12)(x - 5) = 0$.', en: '$x^2 - 17x + 60 = 0 \\implies (x - 12)(x - 5) = 0$.' },
          { badge: 'N1', bm: 'Panjang sisi ialah $5\\text{ cm}$ dan $12\\text{ cm}$.', en: 'Lengths are $5\\text{ cm}$ and $12\\text{ cm}$.' }
        ]
      },
      {
        code: '3.5', marks: 4,
        topic: { bm: 'Pemodelan Kewangan Tiga Pemboleh Ubah', en: '3-Variable Financial Word Problem' },
        q: { bm: 'Ahmad membeli 2 pen, 1 buku, 3 pemadam (RM11). Ali membeli 1 pen, 2 buku, 1 pemadam (RM9). Muthu membeli 3 pen, 1 buku, 2 pemadam (RM12). Cari harga setiap satu. [4m]', en: 'Ahmad buys 2 pens, 1 book, 3 erasers (RM11). Ali buys 1 pen, 2 books, 1 eraser (RM9). Muthu buys 3 pens, 1 book, 2 erasers (RM12). Find the price of each item. [4m]' },
        mistakes: { bm: ['Kesilapan tanda semasa menolak persamaan untuk penghapusan.'], en: ['Sign error while subtracting equations during elimination.'] },
        scheme: [
          { badge: 'K1', bm: '$2p + b + 3e = 11$, $\\;p + 2b + e = 9$, $\\;3p + b + 2e = 12$.', en: '$2p + b + 3e = 11$, $\\;p + 2b + e = 9$, $\\;3p + b + 2e = 12$.' },
          { badge: 'K1', bm: 'Tolak (3)−(1): $p - e = 1$; hapus $b$ daripada (1)&(2): $3p + 5e = 13$.', en: '(3)−(1): $p - e = 1$; eliminate $b$ from (1)&(2): $3p + 5e = 13$.' },
          { badge: 'N1', bm: 'Pen $= \\text{RM }2.25$, Buku $= \\text{RM }2.75$, Pemadam $= \\text{RM }1.25$.', en: 'Pen $= \\text{RM }2.25$, Book $= \\text{RM }2.75$, Eraser $= \\text{RM }1.25$.' }
        ]
      },
      {
        code: '3.6', marks: 3,
        topic: { bm: 'Tiada Penyelesaian vs Infiniti Penyelesaian', en: 'No Solution vs Infinite Solutions' },
        q: { bm: 'Diberi sistem $x + 2y - z = 4$, $\\;2x + 4y - 2z = 8$, $\\;3x + 6y - 3z = k$. Cari nilai $k$ supaya sistem mempunyai infiniti penyelesaian, dan terangkan jika $k \\ne 12$. [3m]', en: 'Given $x + 2y - z = 4$, $\\;2x + 4y - 2z = 8$, $\\;3x + 6y - 3z = k$. Find $k$ for infinite solutions, and explain what happens if $k \\ne 12$. [3m]' },
        mistakes: { bm: ['Mengelirukan satah selari berasingan ($0 = c \\ne 0$, tiada penyelesaian) dengan satah bertindih ($0 = 0$, infiniti penyelesaian).'], en: ['Confusing parallel distinct planes (no solution) with coincident planes (infinite solutions).'] },
        scheme: [
          { badge: 'N1', bm: 'Persamaan 3 ialah gandaan $3\\times$ persamaan 1 apabila $k = 3(4) = 12$ (infiniti penyelesaian).', en: 'Infinite solutions when $k = 3(4) = 12$ (coincident planes).' },
          { badge: 'N1', bm: 'Jika $k \\ne 12$, satah selari tetapi tidak bersilang $\\implies$ tiada penyelesaian.', en: 'If $k \\ne 12$, planes are parallel and non-intersecting $\\implies$ no solution.' }
        ]
      },
      {
        code: '3.7', marks: 4,
        topic: { bm: 'Persilangan Garis Lurus & Bulatan', en: 'Line & Circle Intersection' },
        q: { bm: 'Selesaikan persamaan serentak $x - y = 1$ dan $x^2 + y^2 = 25$. [4m]', en: 'Solve simultaneously $x - y = 1$ and $x^2 + y^2 = 25$. [4m]' },
        mistakes: { bm: ['Hanya menyenaraikan satu pasangan $(x, y)$ atau salah memadankan $x_1$ dengan $y_2$.'], en: ['Listing only one pair or mismatching $x_1$ with $y_2$.'] },
        scheme: [
          { badge: 'K1', bm: '$x = y + 1 \\implies (y + 1)^2 + y^2 = 25 \\implies y^2 + y - 12 = 0$.', en: '$x = y + 1 \\implies (y + 1)^2 + y^2 = 25 \\implies y^2 + y - 12 = 0$.' },
          { badge: 'K1', bm: '$(y + 4)(y - 3) = 0 \\implies y = -4$ atau $y = 3$.', en: '$(y + 4)(y - 3) = 0 \\implies y = -4$ or $y = 3$.' },
          { badge: 'N1', bm: '$(-3, -4)$ dan $(4, 3)$.', en: '$(-3, -4)$ and $(4, 3)$.' }
        ]
      },
      {
        code: '3.8', marks: 4,
        topic: { bm: 'Sistem Serentak Melibatkan Indeks', en: 'Simultaneous Equations Involving Indices' },
        q: { bm: 'Selesaikan persamaan serentak $2^x \\times 4^y = 16$ dan $3^{2x - y} = 27$. [4m]', en: 'Solve simultaneously $2^x \\times 4^y = 16$ and $3^{2x - y} = 27$. [4m]' },
        mistakes: { bm: ['Menyamakan kuasa sebelum menukar $4^y = 2^{2y}$ kepada asas sepunya $2$.'], en: ['Equating exponents before converting $4^y = 2^{2y}$ to base $2$.'] },
        scheme: [
          { badge: 'K1', bm: '$2^{x + 2y} = 2^4 \\implies x + 2y = 4$; $\\;3^{2x - y} = 3^3 \\implies 2x - y = 3$.', en: '$x + 2y = 4$ and $2x - y = 3$.' },
          { badge: 'K1', bm: 'Ganti $y = 2x - 3$: $x + 2(2x - 3) = 4 \\implies 5x = 10$.', en: 'Substitute $y = 2x - 3$: $5x = 10$.' },
          { badge: 'N1', bm: '$x = 2,\\; y = 1$.', en: '$x = 2,\\; y = 1$.' }
        ]
      },
      {
        code: '3.9', marks: 4,
        topic: { bm: 'Perimeter & Luas Kolam Segi Empat Tepat', en: 'Perimeter & Area of Rectangular Pool' },
        q: { bm: 'Sebuah kolam renang segi empat tepat mempunyai perimeter $50\\text{ m}$ dan luas $150\\text{ m}^2$. Cari panjang dan lebar kolam. [4m]', en: 'A rectangular pool has perimeter $50\\text{ m}$ and area $150\\text{ m}^2$. Find its length and width. [4m]' },
        mistakes: { bm: ['Menulis perimeter sebagai $x + y = 50$ bukannya $2x + 2y = 50$.'], en: ['Writing perimeter as $x + y = 50$ instead of $2x + 2y = 50$.'] },
        scheme: [
          { badge: 'K1', bm: '$2x + 2y = 50 \\implies y = 25 - x$.', en: '$2x + 2y = 50 \\implies y = 25 - x$.' },
          { badge: 'K1', bm: '$x(25 - x) = 150 \\implies x^2 - 25x + 150 = 0 \\implies (x - 15)(x - 10) = 0$.', en: '$x^2 - 25x + 150 = 0 \\implies (x - 15)(x - 10) = 0$.' },
          { badge: 'N1', bm: 'Panjang $= 15\\text{ m}$, lebar $= 10\\text{ m}$.', en: 'Length $= 15\\text{ m}$, width $= 10\\text{ m}$.' }
        ]
      },
      {
        code: '3.10', marks: 4,
        topic: { bm: 'Syarat Garis Tidak Menyilang Lengkung', en: 'Line Not Intersecting a Curve' },
        q: { bm: 'Garis lurus $y = mx - 5$ tidak menyilang lengkung $y = x^2 - 2x - 1$. Cari julat nilai $m$. [4m]', en: 'The line $y = mx - 5$ does not intersect the curve $y = x^2 - 2x - 1$. Find the range of $m$. [4m]' },
        mistakes: { bm: ['Mengguna $b^2 - 4ac > 0$ sedangkan tidak bersilang memerlukan $b^2 - 4ac < 0$.'], en: ['Using $b^2 - 4ac > 0$ instead of $b^2 - 4ac < 0$ for non-intersection.'] },
        scheme: [
          { badge: 'K1', bm: '$x^2 - 2x - 1 = mx - 5 \\implies x^2 - (m + 2)x + 4 = 0$.', en: '$x^2 - (m + 2)x + 4 = 0$.' },
          { badge: 'K1', bm: '$b^2 - 4ac < 0 \\implies (m + 2)^2 - 16 < 0 \\implies (m - 2)(m + 6) < 0$.', en: '$(m + 2)^2 - 16 < 0 \\implies (m - 2)(m + 6) < 0$.' },
          { badge: 'N1', bm: '$-6 < m < 2$.', en: '$-6 < m < 2$.' }
        ]
      }
    ],

    // =========================================================================
    // TINGKATAN 4 BAB 4: INDEKS, SURD & LOGARITMA (10 SOALAN)
    // =========================================================================
    'f4-c4': [
      {
        code: '4.1', marks: 3,
        topic: { bm: 'Persamaan Indeks Asas Sepunya', en: 'Common-Base Index Equation' },
        q: { bm: 'Selesaikan persamaan $8^{2x-1} = \\frac{1}{32^{x+2}}$. [3m]', en: 'Solve $8^{2x-1} = \\frac{1}{32^{x+2}}$. [3m]' },
        mistakes: { bm: ['Lupa kurungan tanda negatif pada keseluruhan eksponen penyebut: menulis $-5x + 10$ bukannya $-5(x + 2) = -5x - 10$.'], en: ['Failing to negate the entire exponent: writing $-5x + 10$ instead of $-5(x + 2) = -5x - 10$.'] },
        scheme: [
          { badge: 'K1', bm: '$(2^3)^{2x-1} = (2^5)^{-(x+2)} \\implies 2^{6x-3} = 2^{-5x-10}$.', en: '$2^{6x-3} = 2^{-5x-10}$.' },
          { badge: 'N1', bm: '$6x - 3 = -5x - 10 \\implies 11x = -7 \\implies x = -\\frac{7}{11}$.', en: '$6x - 3 = -5x - 10 \\implies x = -\\frac{7}{11}$.' }
        ]
      },
      {
        code: '4.2', marks: 4,
        topic: { bm: 'Persamaan Indeks Membawa kepada Kuadratik', en: 'Index Equation Reducible to Quadratic' },
        q: { bm: 'Selesaikan persamaan $3^{2x+1} - 10(3^x) + 3 = 0$. [4m]', en: 'Solve $3^{2x+1} - 10(3^x) + 3 = 0$. [4m]' },
        mistakes: { bm: ['Menganggap $3^{2x+1} = (3^x)^2 + 3$, sedangkan $3^{2x+1} = 3^1 \\cdot (3^x)^2 = 3u^2$!'], en: ['Writing $3^{2x+1} = (3^x)^2 + 3$ instead of $3 \\cdot (3^x)^2$!'] },
        scheme: [
          { badge: 'K1', bm: 'Biar $u = 3^x$: $3u^2 - 10u + 3 = 0 \\implies (3u - 1)(u - 3) = 0$.', en: 'Let $u = 3^x$: $(3u - 1)(u - 3) = 0$.' },
          { badge: 'K1', bm: '$3^x = \\frac{1}{3} = 3^{-1}$ atau $3^x = 3^1$.', en: '$3^x = 3^{-1}$ or $3^x = 3^1$.' },
          { badge: 'N1', bm: '$x = -1$ atau $x = 1$.', en: '$x = -1$ or $x = 1$.' }
        ]
      },
      {
        code: '4.3', marks: 3,
        topic: { bm: 'Menisbahkan Penyebut Konjugat Surd', en: 'Rationalizing Surd Denominator' },
        q: { bm: 'Permudahkan $\\frac{3\\sqrt{2} - 1}{2\\sqrt{2} + 3}$ kepada bentuk $a + b\\sqrt{2}$. [3m]', en: 'Simplify $\\frac{3\\sqrt{2} - 1}{2\\sqrt{2} + 3}$ in the form $a + b\\sqrt{2}$. [3m]' },
        mistakes: { bm: ['Salah mengira $(2\\sqrt{2})^2 = 4$ sedangkan $(2\\sqrt{2})^2 = 4 \\times 2 = 8$!'], en: ['Computing $(2\\sqrt{2})^2 = 4$ instead of $4 \\times 2 = 8$!'] },
        scheme: [
          { badge: 'K1', bm: 'Darab konjugat: $\\frac{(3\\sqrt{2}-1)(2\\sqrt{2}-3)}{(2\\sqrt{2}+3)(2\\sqrt{2}-3)} = \\frac{12 - 9\\sqrt{2} - 2\\sqrt{2} + 3}{8 - 9}$.', en: 'Multiply by conjugate $(2\\sqrt{2}-3)$: $\\frac{15 - 11\\sqrt{2}}{8 - 9}$.' },
          { badge: 'N1', bm: '$\\frac{15 - 11\\sqrt{2}}{-1} = -15 + 11\\sqrt{2}$.', en: '$-15 + 11\\sqrt{2}$.' }
        ]
      },
      {
        code: '4.4', marks: 4,
        topic: { bm: 'Persamaan Melibatkan Surd', en: 'Solving Surd Equations' },
        q: { bm: 'Selesaikan persamaan $\\sqrt{2x + 5} - \\sqrt{x - 1} = 2$. [4m]', en: 'Solve $\\sqrt{2x + 5} - \\sqrt{x - 1} = 2$. [4m]' },
        mistakes: { bm: ['Mengkuasadua terus tanpa mengasingkan satu surd dahulu, atau lupa menyemak punca palsu (*extraneous roots*).'], en: ['Squaring without isolating one surd first, or skipping the extraneous-root check.'] },
        scheme: [
          { badge: 'K1', bm: '$\\sqrt{2x+5} = 2 + \\sqrt{x-1} \\implies 2x + 5 = 4 + 4\\sqrt{x-1} + x - 1$.', en: '$\\sqrt{2x+5} = 2 + \\sqrt{x-1} \\implies x + 2 = 4\\sqrt{x-1}$.' },
          { badge: 'K1', bm: '$(x + 2)^2 = 16(x - 1) \\implies x^2 - 12x + 20 = 0 \\implies (x - 2)(x - 10) = 0$.', en: '$(x + 2)^2 = 16(x - 1) \\implies (x - 2)(x - 10) = 0$.' },
          { badge: 'N1', bm: 'Kedua-dua memenuhi persamaan asal: $x = 2,\\; x = 10$.', en: 'Both satisfy original equation: $x = 2,\\; x = 10$.' }
        ]
      },
      {
        code: '4.5', marks: 3,
        topic: { bm: 'Ungkapan Hukum Logaritma', en: 'Logarithm Laws Expression' },
        q: { bm: 'Diberi $\\log_a 2 = p$ dan $\\log_a 3 = q$. Ungkapkan $\\log_a\\left(\\frac{18}{a^3}\\right)$ dalam sebutan $p$ dan $q$. [3m]', en: 'Given $\\log_a 2 = p$ and $\\log_a 3 = q$, express $\\log_a\\left(\\frac{18}{a^3}\\right)$ in terms of $p$ and $q$. [3m]' },
        mistakes: { bm: ['Menganggap $\\log_a(a^3) = 1$ bukannya $3\\log_a a = 3$.'], en: ['Writing $\\log_a(a^3) = 1$ instead of $3\\log_a a = 3$.'] },
        scheme: [
          { badge: 'K1', bm: '$\\log_a(2 \\times 3^2) - \\log_a(a^3) = \\log_a 2 + 2\\log_a 3 - 3$.', en: '$\\log_a 2 + 2\\log_a 3 - 3$.' },
          { badge: 'N1', bm: '$= p + 2q - 3$.', en: '$= p + 2q - 3$.' }
        ]
      },
      {
        code: '4.6', marks: 4,
        topic: { bm: 'Penukaran Asas Logaritma', en: 'Change of Base of Logarithms' },
        q: { bm: 'Selesaikan persamaan $\\log_2 x + \\log_4 x = 6$. [4m]', en: 'Solve $\\log_2 x + \\log_4 x = 6$. [4m]' },
        mistakes: { bm: ['Menjumlahkan logaritma berbeza asas secara terus tanpa menukar asas $4$ kepada asas $2$.'], en: ['Combining logs of different bases directly without change-of-base.'] },
        scheme: [
          { badge: 'K1', bm: '$\\log_4 x = \\frac{\\log_2 x}{\\log_2 4} = \\frac{1}{2}\\log_2 x$.', en: '$\\log_4 x = \\frac{\\log_2 x}{2}$.' },
          { badge: 'K1', bm: '$\\frac{3}{2}\\log_2 x = 6 \\implies \\log_2 x = 4$.', en: '$\\frac{3}{2}\\log_2 x = 6 \\implies \\log_2 x = 4$.' },
          { badge: 'N1', bm: '$x = 2^4 = 16$.', en: '$x = 2^4 = 16$.' }
        ]
      },
      {
        code: '4.7', marks: 4,
        topic: { bm: 'Persamaan Logaritma Kuadratik', en: 'Quadratic Logarithmic Equation' },
        q: { bm: 'Selesaikan $(\\log_3 x)^2 - 2\\log_3(x^2) - 5 = 0$. [4m]', en: 'Solve $(\\log_3 x)^2 - 2\\log_3(x^2) - 5 = 0$. [4m]' },
        mistakes: { bm: ['Mengelirukan $(\\log_3 x)^2$ dengan $\\log_3(x^2) = 2\\log_3 x$! Kedua-duanya TIDAK sama.'], en: ['Confusing $(\\log_3 x)^2$ with $\\log_3(x^2) = 2\\log_3 x$!'] },
        scheme: [
          { badge: 'K1', bm: 'Biar $y = \\log_3 x$: $y^2 - 4y - 5 = 0 \\implies (y - 5)(y + 1) = 0$.', en: 'Let $y = \\log_3 x$: $(y - 5)(y + 1) = 0$.' },
          { badge: 'N1', bm: '$x = 3^5 = 243$ atau $x = 3^{-1} = \\frac{1}{3}$.', en: '$x = 243$ or $x = \\frac{1}{3}$.' }
        ]
      },
      {
        code: '4.8', marks: 3,
        topic: { bm: 'Logaritma Asli (ln)', en: 'Natural Logarithm (ln)' },
        q: { bm: 'Selesaikan $e^{2x - 1} = 7$ betul kepada 3 tempat perpuluhan. [3m]', en: 'Solve $e^{2x - 1} = 7$ correct to 3 decimal places. [3m]' },
        mistakes: { bm: ['Terlupa bahawa $\\ln e = 1$, atau mengambil $\\log_{10} e$ secara cuai.'], en: ['Forgetting $\\ln e = 1$.'] },
        scheme: [
          { badge: 'K1', bm: 'Ambil $\\ln$: $(2x - 1)\\ln e = \\ln 7 \\implies 2x = 1 + \\ln 7$.', en: 'Take $\\ln$: $2x - 1 = \\ln 7 \\implies 2x = 1 + \\ln 7$.' },
          { badge: 'N1', bm: '$x = \\frac{1 + 1.9459}{2} = 1.473$.', en: '$x = 1.473$.' }
        ]
      },
      {
        code: '4.9', marks: 3,
        topic: { bm: 'Permudahan Sebutan Surd Serupa', en: 'Simplifying Like Surds' },
        q: { bm: 'Permudahkan $\\sqrt{48} - 3\\sqrt{12} + \\sqrt{75}$ kepada bentuk $k\\sqrt{3}$. [3m]', en: 'Simplify $\\sqrt{48} - 3\\sqrt{12} + \\sqrt{75}$ into the form $k\\sqrt{3}$. [3m]' },
        mistakes: { bm: ['Salah memfaktorkan kuasa dua sempurna seperti $\\sqrt{48} = \\sqrt{16 \\times 3} = 4\\sqrt{3}$.'], en: ['Arithmetic slip extracting square factors such as $\\sqrt{48} = 4\\sqrt{3}$.'] },
        scheme: [
          { badge: 'K1', bm: '$4\\sqrt{3} - 3(2\\sqrt{3}) + 5\\sqrt{3} = (4 - 6 + 5)\\sqrt{3}$.', en: '$4\\sqrt{3} - 6\\sqrt{3} + 5\\sqrt{3}$.' },
          { badge: 'N1', bm: '$= 3\\sqrt{3}$ ($k = 3$).', en: '$= 3\\sqrt{3}$ ($k = 3$).' }
        ]
      },
      {
        code: '4.10', marks: 4,
        topic: { bm: 'Pertumbuhan Eksponen Bakteria', en: 'Exponential Bacterial Growth' },
        q: { bm: 'Bilangan bakteria selepas $t$ jam ialah $N(t) = 500e^{0.35t}$. Cari masa apabila $N(t) > 10\\,000$. [4m]', en: 'Bacteria count after $t$ hours is $N(t) = 500e^{0.35t}$. Find $t$ when $N(t) > 10\\,000$. [4m]' },
        mistakes: { bm: ['Mengambil $\\ln$ sebelum membahagikan $10\\,000$ dengan $500$ terlebih dahulu!'], en: ['Taking $\\ln$ before dividing $10\\,000$ by $500$ to isolate $e^{0.35t}$!'] },
        scheme: [
          { badge: 'K1', bm: '$e^{0.35t} > \\frac{10000}{500} = 20 \\implies 0.35t > \\ln 20$.', en: '$e^{0.35t} > 20 \\implies 0.35t > \\ln 20$.' },
          { badge: 'N1', bm: '$t > \\frac{2.9957}{0.35} \\implies t > 8.56\\text{ jam}$.', en: '$t > 8.56\\text{ hours}$.' }
        ]
      }
    ],

    // =========================================================================
    // TINGKATAN 4 BAB 5: JANJANG (10 SOALAN)
    // =========================================================================
    'f4-c5': [
      {
        code: '5.1', marks: 3,
        topic: { bm: 'Sebutan ke-n Janjang Aritmetik (JA)', en: 'n-th Term of Arithmetic Progression (AP)' },
        q: { bm: 'Bagi suatu JA, $T_4 = 17$ dan $T_9 = 37$. Cari sebutan pertama $a$ dan beza sepunya $d$. [3m]', en: 'In an AP, $T_4 = 17$ and $T_9 = 37$. Find first term $a$ and common difference $d$. [3m]' },
        mistakes: { bm: ['Menulis $T_n = a + nd$ bukannya $a + (n - 1)d$.'], en: ['Writing $T_n = a + nd$ instead of $a + (n - 1)d$.'] },
        scheme: [
          { badge: 'K1', bm: '$a + 3d = 17$ dan $a + 8d = 37 \\implies 5d = 20$.', en: '$a + 3d = 17$ and $a + 8d = 37 \\implies 5d = 20$.' },
          { badge: 'N1', bm: '$d = 4,\\; a = 5$.', en: '$d = 4,\\; a = 5$.' }
        ]
      },
      {
        code: '5.2', marks: 3,
        topic: { bm: 'Hasil Tambah Sebutan ke-6 hingga ke-15', en: 'Sum from 6th Term to 15th Term' },
        q: { bm: 'Bagi JA $7, 11, 15, \\dots$, cari hasil tambah daripada sebutan ke-6 hingga ke-15. [3m]', en: 'For the AP $7, 11, 15, \\dots$, find the sum from the 6th term to the 15th term inclusive. [3m]' },
        mistakes: { bm: ['Mengira $S_{15} - S_6$ (tertolak sekali sebutan $T_6$!) bukannya **$S_{15} - S_5$**.'], en: ['Computing $S_{15} - S_6$ (excluding $T_6$!) instead of **$S_{15} - S_5$**.'] },
        scheme: [
          { badge: 'K1', bm: '$a = 7,\\; d = 4$; Jumlah $= S_{15} - S_5 = 525 - 75$.', en: '$a = 7,\\; d = 4$; Sum $= S_{15} - S_5 = 525 - 75$.' },
          { badge: 'N1', bm: '$= 450$.', en: '$= 450$.' }
        ]
      },
      {
        code: '5.3', marks: 3,
        topic: { bm: 'Bilangan Sebutan Minimum Sₙ > k', en: 'Minimum Number of Terms for Sₙ > k' },
        q: { bm: 'Bagi JA $3, 8, 13, \\dots$, cari nilai integer terkecil $n$ supaya $S_n > 400$. [3m]', en: 'For AP $3, 8, 13, \\dots$, find the smallest integer $n$ such that $S_n > 400$. [3m]' },
        mistakes: { bm: ['Meninggalkan $n$ dalam perpuluhan ($12.55$) atau membundar ke bawah ($12$) yang gagal melepasi $400$.'], en: ['Leaving $n = 12.55$ as a decimal instead of rounding up to the next integer $13$.'] },
        scheme: [
          { badge: 'K1', bm: '$\\frac{n}{2}[6 + (n-1)5] > 400 \\implies 5n^2 + n - 800 > 0 \\implies n > 12.55$.', en: '$5n^2 + n - 800 > 0 \\implies n > 12.55$.' },
          { badge: 'N1', bm: '$n_{\\min} = 13$.', en: '$n_{\\min} = 13$.' }
        ]
      },
      {
        code: '5.4', marks: 3,
        topic: { bm: 'Sebutan ke-n Janjang Geometri (JG)', en: 'n-th Term of Geometric Progression (GP)' },
        q: { bm: 'Bagi suatu JG, $T_2 = \\frac{3}{2}$ dan $T_5 = \\frac{3}{16}$. Cari $a$ dan $r$. [3m]', en: 'In a GP, $T_2 = \\frac{3}{2}$ and $T_5 = \\frac{3}{16}$. Find $a$ and $r$. [3m]' },
        mistakes: { bm: ['Menolak kedua-dua persamaan seperti JA bukannya **membahagi** $\\frac{ar^4}{ar} = r^3$.'], en: ['Subtracting equations like an AP instead of **dividing** $\\frac{ar^4}{ar} = r^3$.'] },
        scheme: [
          { badge: 'K1', bm: '$\\frac{ar^4}{ar} = \\frac{3/16}{3/2} \\implies r^3 = \\frac{1}{8} \\implies r = \\frac{1}{2}$.', en: '$r^3 = \\frac{1}{8} \\implies r = \\frac{1}{2}$.' },
          { badge: 'N1', bm: '$a = 3,\\; r = \\frac{1}{2}$.', en: '$a = 3,\\; r = \\frac{1}{2}$.' }
        ]
      },
      {
        code: '5.5', marks: 3,
        topic: { bm: 'Hasil Tambah JG dengan Nisbah Negatif', en: 'GP Sum with Negative Common Ratio' },
        q: { bm: 'Cari hasil tambah $8$ sebutan pertama bagi JG $4, -8, 16, -32, \\dots$. [3m]', en: 'Find the sum of the first $8$ terms of the GP $4, -8, 16, -32, \\dots$. [3m]' },
        mistakes: { bm: ['Lupa kurungan pada kalkulator: menaip $-2^8 = -256$ bukannya $(-2)^8 = +256$!'], en: ['Omitting brackets around $-2$: evaluating $-2^8 = -256$ instead of $(-2)^8 = +256$!'] },
        scheme: [
          { badge: 'K1', bm: '$a = 4,\\; r = -2 \\implies S_8 = \\frac{4[1 - (-2)^8]}{1 - (-2)} = \\frac{4(1 - 256)}{3}$.', en: '$S_8 = \\frac{4[1 - (-2)^8]}{1 - (-2)} = \\frac{4(-255)}{3}$.' },
          { badge: 'N1', bm: '$S_8 = -340$.', en: '$S_8 = -340$.' }
        ]
      },
      {
        code: '5.6', marks: 3,
        topic: { bm: 'Hasil Tambah Ketakterhinggaan S∞', en: 'Sum to Infinity S∞' },
        q: { bm: 'Bagi JG $18, 6, 2, \\dots$, nyatakan syarat kewujudan $S_\\infty$ dan hitung nilainya. [3m]', en: 'For GP $18, 6, 2, \\dots$, state the convergence condition for $S_\\infty$ and find its value. [3m]' },
        mistakes: { bm: ['Menulis syarat sebagai $r < 1$ sahaja bukannya **$|r| < 1$** (iaitu $-1 < r < 1$).'], en: ['Writing $r < 1$ instead of **$|r| < 1$** ($-1 < r < 1$).'] },
        scheme: [
          { badge: 'N1', bm: 'Syarat wujud: $|r| < 1$ (dipenuhi kerana $r = \\frac{1}{3}$).', en: 'Condition: $|r| < 1$ (satisfied since $r = \\frac{1}{3}$).' },
          { badge: 'N1', bm: '$S_\\infty = \\frac{18}{1 - 1/3} = 27$.', en: '$S_\\infty = \\frac{18}{2/3} = 27$.' }
        ]
      },
      {
        code: '5.7', marks: 3,
        topic: { bm: 'Perpuluhan Berulang kepada Pecahan', en: 'Recurring Decimal to Simplest Fraction' },
        q: { bm: 'Tukarkan $0.272727\\dots$ kepada pecahan termudah menggunakan konsep $S_\\infty$. [3m]', en: 'Express $0.272727\\dots$ as a fraction in lowest terms using $S_\\infty$. [3m]' },
        mistakes: { bm: ['Mengambil $r = 0.1$ sedangkan ulangan **dua digit** ($0.27 + 0.0027 + \\dots$) mempunyai $r = 0.01$!'], en: ['Using $r = 0.1$ instead of $r = 0.01$ for a 2-digit repeating block!'] },
        scheme: [
          { badge: 'K1', bm: '$a = 0.27,\\; r = 0.01 \\implies S_\\infty = \\frac{0.27}{1 - 0.01} = \\frac{27}{99}$.', en: '$a = 0.27,\\; r = 0.01 \\implies S_\\infty = \\frac{27}{99}$.' },
          { badge: 'N1', bm: '$= \\frac{3}{11}$.', en: '$= \\frac{3}{11}$.' }
        ]
      },
      {
        code: '5.8', marks: 3,
        topic: { bm: 'Tiga Sebutan Berturutan JG', en: 'Three Consecutive Terms of a GP' },
        q: { bm: 'Diberi $x - 1,\\; x + 2,\\; 3x$ ialah tiga sebutan berturutan JG bernilai positif. Cari $x$. [3m]', en: 'Given $x - 1,\\; x + 2,\\; 3x$ are three positive consecutive terms of a GP. Find $x$. [3m]' },
        mistakes: { bm: ['Mengguna beza sepunya JA ($T_2 - T_1 = T_3 - T_2$) bukannya nisbah sepunya JG ($\\frac{T_2}{T_1} = \\frac{T_3}{T_2}$).'], en: ['Using AP difference instead of GP ratio $\\frac{T_2}{T_1} = \\frac{T_3}{T_2}$.'] },
        scheme: [
          { badge: 'K1', bm: '$\\frac{x+2}{x-1} = \\frac{3x}{x+2} \\implies 2x^2 - 7x - 4 = 0 \\implies (2x + 1)(x - 4) = 0$.', en: '$(x+2)^2 = 3x(x-1) \\implies (2x + 1)(x - 4) = 0$.' },
          { badge: 'N1', bm: 'Oleh sebab sebutan positif, $x = 4$ ($x = -0.5$ ditolak).', en: 'Since terms are positive, $x = 4$ ($x = -0.5$ rejected).' }
        ]
      },
      {
        code: '5.9', marks: 3,
        topic: { bm: 'Mencari Tₙ daripada Ungkapan Sₙ', en: 'Finding Tₙ from Cumulative Sum Sₙ' },
        q: { bm: 'Diberi $S_n = 2n^2 + 3n$. Cari sebutan pertama $T_1$ dan ungkapan $T_n$. [3m]', en: 'Given $S_n = 2n^2 + 3n$. Find $T_1$ and an expression for $T_n$. [3m]' },
        mistakes: { bm: ['Membahagi $T_n = \\frac{S_n}{n}$! Wajib guna hubungan $T_n = S_n - S_{n-1}$.'], en: ['Dividing $S_n / n$ instead of using $T_n = S_n - S_{n-1}$.'] },
        scheme: [
          { badge: 'N1', bm: '$T_1 = S_1 = 2(1)^2 + 3(1) = 5$.', en: '$T_1 = S_1 = 5$.' },
          { badge: 'K1', bm: '$T_n = (2n^2 + 3n) - [2(n-1)^2 + 3(n-1)]$.', en: '$T_n = (2n^2 + 3n) - [2(n-1)^2 + 3(n-1)]$.' },
          { badge: 'N1', bm: '$T_n = 4n + 1$.', en: '$T_n = 4n + 1$.' }
        ]
      },
      {
        code: '5.10', marks: 4,
        topic: { bm: 'Simpanan Tahunan Kompaun JG', en: 'Annual Savings Compound GP' },
        q: { bm: 'Siti menyimpan RM1,000 pada tahun pertama. Setiap tahun berikutnya simpanannya bertambah 10% daripada tahun sebelumnya. Cari jumlah simpanan selepas 6 tahun. [4m]', en: 'Siti saves RM1,000 in year 1, increasing her annual deposit by 10% each year. Find total savings after 6 years. [4m]' },
        mistakes: { bm: ['Mengambil $r = 0.10$ bukannya **$r = 1 + 0.10 = 1.10$**!'], en: ['Using $r = 0.10$ instead of **$r = 1.10$**!'] },
        scheme: [
          { badge: 'K1', bm: 'JG dengan $a = 1000,\\; r = 1.10$: $S_6 = \\frac{1000(1.10^6 - 1)}{1.10 - 1}$.', en: 'GP with $a = 1000,\\; r = 1.10$: $S_6 = \\frac{1000(1.10^6 - 1)}{0.10}$.' },
          { badge: 'N1', bm: '$S_6 = \\text{RM }7\\,715.61$.', en: '$S_6 = \\text{RM }7\\,715.61$.' }
        ]
      }
    ]
  });
})(window.AddMathApp);
