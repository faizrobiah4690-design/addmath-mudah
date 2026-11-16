/**
 * AddMath Mudah — Bank Soalan Master SPM (Fasa 4: Tingkatan 5 Bab 5–8 • 40 Soalan Penuh)
 * Setiap soalan lengkap dengan: Pernyataan Format SPM, Kesilapan Lazim Murid & Skim Pemarkahan (K1 / N1) dalam BM & EN.
 */
window.AddMathApp = window.AddMathApp || {};
window.AddMathApp.masterBank = window.AddMathApp.masterBank || {};

(function (App) {
  'use strict';

  Object.assign(App.masterBank, {
    // =========================================================================
    // TINGKATAN 5 BAB 5: TABURAN KEBARANGKALIAN (10 SOALAN)
    // =========================================================================
    'f5-c5': [
      {
        code: '5.1', marks: 3,
        topic: { bm: 'Rumus Taburan Binomial $P(X = r)$', en: 'Binomial Probability Formula $P(X = r)$' },
        q: {
          bm: 'Kebarangkalian seorang pemanah mengenai sasaran dalam satu cubaan ialah $0.7$. Jika beliau melepaskan $5$ anak panah secara bebas, cari kebarangkalian tepat $4$ mengenai sasaran. [3m]',
          en: 'The probability an archer hits a target on one shot is $0.7$. In $5$ independent shots, find the probability of hitting the target exactly $4$ times. [3m]'
        },
        mistakes: {
          bm: ['Mendarab $(0.7)^4(0.3)^1$ sahaja tanpa pekali gabungan $^5C_4 = 5$.'],
          en: ['Computing $(0.7)^4(0.3)^1$ while omitting the combination factor $^5C_4 = 5$.']
        },
        scheme: [
          { badge: 'K1', bm: '$X \\sim B(5, 0.7)$: $P(X = 4) = \\,^5C_4 (0.7)^4 (0.3)^1 = 5(0.2401)(0.3)$.', en: '$P(X = 4) = \\,^5C_4 (0.7)^4 (0.3)^1$.' },
          { badge: 'N1', bm: '$0.3602$ (atau $0.36015$).', en: '$0.3602$.' }
        ]
      },
      {
        code: '5.2', marks: 3,
        topic: { bm: 'Min dan Varians Taburan Binomial ($\\mu = np,\\; \\sigma^2 = npq$)', en: 'Mean & Variance of Binomial Distribution' },
        q: {
          bm: 'Suatu pemboleh ubah rawak $X \\sim B(n, p)$ mempunyai min $\\mu = 24$ dan varians $\\sigma^2 = 6$. Cari nilai $p$ dan $n$. [3m]',
          en: 'A random variable $X \\sim B(n, p)$ has mean $\\mu = 24$ and variance $\\sigma^2 = 6$. Find $p$ and $n$. [3m]'
        },
        mistakes: {
          bm: ['Menganggap $6$ sebagai sisihan piawai $\\sigma$ lalu mengkuasaduakannya menjadi $36$, sedangkan soalan sudah menyatakan **varians** $\\sigma^2 = 6$.'],
          en: ['Squaring $6$ into $36$ as if given $\\sigma$, when $6$ is already the variance $\\sigma^2 = npq$.']
        },
        scheme: [
          { badge: 'K1', bm: '$np = 24$ dan $npq = 6 \\implies q = \\frac{6}{24} = 0.25$.', en: '$q = \\frac{npq}{np} = \\frac{6}{24} = 0.25$.' },
          { badge: 'N1', bm: '$p = 1 - 0.25 = 0.75$ dan $n = \\frac{24}{0.75} = 32$.', en: '$p = 0.75,\\; n = 32$.' }
        ]
      },
      {
        code: '5.3', marks: 4,
        topic: { bm: 'Kebarangkalian Pelengkap Binomial $P(X \\ge 1)$', en: 'Binomial Complement Rule $P(X \\ge 1)$' },
        q: {
          bm: 'Kebarangkalian sebiji mentol rosak ialah $0.1$. Jika $4$ biji mentol dipilih secara rawak, cari kebarangkalian sekurang-kurangnya sebiji mentol rosak. [4m]',
          en: 'The probability a bulb is defective is $0.1$. If $4$ bulbs are chosen at random, find the probability that at least $1$ is defective. [4m]'
        },
        mistakes: {
          bm: ['Mengira $P(X = 1)$ sahaja atau menjumlahkan $4$ sebutan secara panjang lebar lalu tersilap tekan kalkulator, bukannya $1 - P(X = 0)$.'],
          en: ['Computing only $P(X = 1)$ instead of using the fast complement $1 - P(X = 0)$.']
        },
        scheme: [
          { badge: 'K1', bm: '$P(X \\ge 1) = 1 - P(X = 0) = 1 - \\,^4C_0(0.1)^0(0.9)^4 = 1 - 0.6561$.', en: '$P(X \\ge 1) = 1 - (0.9)^4 = 1 - 0.6561$.' },
          { badge: 'N1', bm: '$0.3439$.', en: '$0.3439$.' }
        ]
      },
      {
        code: '5.4', marks: 4,
        topic: { bm: 'Menukar kepada Skor-$Z$ Piawai (Taburan Normal)', en: 'Standardizing $Z$-Scores in Normal Distribution' },
        q: {
          bm: 'Jisim buah betik bertaburan secara normal $X \\sim N(55, 8^2)$. Cari (a) $P(X > 67)$, dan (b) $P(47 < X < 63)$. [4m]',
          en: 'Papaya masses follow $X \\sim N(55, 8^2)$. Find (a) $P(X > 67)$, and (b) $P(47 < X < 63)$. [4m]'
        },
        mistakes: {
          bm: ['Membahagi dengan varians $64$ bukannya sisihan piawai $\\sigma = 8$, atau salah menolak ekor simetri bagi $P(-1 < Z < 1)$.'],
          en: ['Dividing by variance $64$ instead of $\\sigma = 8$, or mishandling symmetry for $P(-1 < Z < 1)$.']
        },
        scheme: [
          { badge: 'K1', bm: '(a) $P\\left(Z > \\frac{67 - 55}{8}\\right) = P(Z > 1.5)$.', en: '(a) $P(Z > 1.5)$.' },
          { badge: 'N1', bm: '$0.0668$.', en: '$0.0668$.' },
          { badge: 'K1', bm: '(b) $P(-1 < Z < 1) = 1 - 2P(Z > 1) = 1 - 2(0.1587)$.', en: '(b) $P(-1 < Z < 1) = 1 - 2(0.1587)$.' },
          { badge: 'N1', bm: '$0.6826$.', en: '$0.6826$.' }
        ]
      },
      {
        code: '5.5', marks: 4,
        topic: { bm: 'Bacaan Songsang Jadual Normal Piawai', en: 'Inverse Normal Table Lookup' },
        q: {
          bm: 'Markah ujian Matematik Tambahan bertaburan normal dengan min $\\mu = 62$ dan varians $\\sigma^2 = 100$. Jika $15\\%$ murid terbaik mendapat gred A, cari markah minimum untuk mendapat gred A. [4m]',
          en: 'Test scores follow a normal distribution with mean $\\mu = 62$ and variance $\\sigma^2 = 100$. If the top $15\\%$ receive grade A, find the minimum score for grade A. [4m]'
        },
        mistakes: {
          bm: ['Menggunakan $\\sigma = 100$ tanpa mengambil punca kuasa dua $\\sigma = \\sqrt{100} = 10$!'],
          en: ['Using $100$ instead of $\\sigma = \\sqrt{100} = 10$ in the $Z$-score denominator!']
        },
        scheme: [
          { badge: 'K1', bm: '$\\sigma = \\sqrt{100} = 10$; $\\;P(X > k) = 0.15 \\implies P\\left(Z > \\frac{k - 62}{10}\\right) = 0.15$.', en: '$\\sigma = 10$; $\\;P\\left(Z > \\frac{k - 62}{10}\\right) = 0.15$.' },
          { badge: 'K1', bm: 'Daripada jadual normal: $\\frac{k - 62}{10} = 1.036$.', en: '$\\frac{k - 62}{10} = 1.036$.' },
          { badge: 'N1', bm: '$k = 62 + 10.36 = 72.36$ (atau $72.4$).', en: '$k = 72.36$ (or $72.4$).' }
        ]
      },
      {
        code: '5.6', marks: 3,
        topic: { bm: 'Jumlah Kebarangkalian Pemboleh Ubah Rawak Diskret', en: 'Discrete Random Variable Probability Sum' },
        q: {
          bm: 'Pemboleh ubah rawak diskret $X$ mempunyai jadual kebarangkalian $P(X = 1) = 0.2$, $P(X = 2) = k$, $P(X = 3) = 2k$, dan $P(X = 4) = 0.35$. Cari nilai pemalar $k$. [3m]',
          en: 'A discrete random variable $X$ has $P(X = 1) = 0.2$, $P(X = 2) = k$, $P(X = 3) = 2k$, and $P(X = 4) = 0.35$. Find constant $k$. [3m]'
        },
        mistakes: {
          bm: ['Lupa sifat asas semua taburan kebarangkalian diskret iaitu $\\sum P(X = x_i) = 1$.'],
          en: ['Forgetting that the sum of all discrete probabilities equals $1$.']
        },
        scheme: [
          { badge: 'K1', bm: '$0.2 + k + 2k + 0.35 = 1 \\implies 3k + 0.55 = 1$.', en: '$3k + 0.55 = 1$.' },
          { badge: 'N1', bm: '$3k = 0.45 \\implies k = 0.15$.', en: '$k = 0.15$.' }
        ]
      },
      {
        code: '5.7', marks: 3,
        topic: { bm: 'Min & Sisihan Piawai Sampel Besar Binomial', en: 'Mean & Standard Deviation of a Large Binomial Sample' },
        q: {
          bm: 'Dalam satu kaji selidik terhadap $800$ orang penduduk, kebarangkalian seorang penduduk memakai cermin mata ialah $0.15$. Cari min dan sisihan piawai bilangan pemakai cermin mata. [3m]',
          en: 'In a survey of $800$ residents, the probability a resident wears glasses is $0.15$. Find the mean and standard deviation of glass wearers. [3m]'
        },
        mistakes: {
          bm: ['Berhenti pada varians $npq = 102$ tanpa mengambil punca kuasa dua untuk mendapatkan sisihan piawai $\\sigma = \\sqrt{102}$.'],
          en: ['Leaving variance $npq = 102$ without taking the square root for standard deviation $\\sigma$.']
        },
        scheme: [
          { badge: 'N1', bm: 'Min $\\mu = np = 800(0.15) = 120$.', en: 'Mean $\\mu = 120$.' },
          { badge: 'K1', bm: '$\\sigma = \\sqrt{800(0.15)(0.85)} = \\sqrt{102}$.', en: '$\\sigma = \\sqrt{102}$.' },
          { badge: 'N1', bm: '$\\sigma = 10.10$.', en: '$\\sigma = 10.10$.' }
        ]
      },
      {
        code: '5.8', marks: 3,
        topic: { bm: 'Simetri Kawasan Kiri Taburan Normal Piawai $P(Z < -z)$', en: 'Left-Tail Symmetry of Standard Normal Distribution' },
        q: {
          bm: 'Bagi pemboleh ubah rawak normal piawai $Z \\sim N(0, 1)$, cari nilai $P(Z < -1.85)$. [3m]',
          en: 'For the standard normal variable $Z \\sim N(0, 1)$, find $P(Z < -1.85)$. [3m]'
        },
        mistakes: {
          bm: ['Menolak bacaan jadual kawasan kanan $P(Z > 1.85)$ daripada $1$ ($1 - 0.0322 = 0.9678$) sedangkan $Z < -1.85$ sudah merupakan kawasan kecil di hujung kiri!'],
          en: ['Computing $1 - 0.0322 = 0.9678$ when $Z < -1.85$ is already the small left tail!']
        },
        scheme: [
          { badge: 'K1', bm: 'Guna simetri lengkung loceng: $P(Z < -1.85) = P(Z > 1.85)$.', en: 'By symmetry: $P(Z < -1.85) = P(Z > 1.85)$.' },
          { badge: 'N1', bm: '$0.0322$.', en: '$0.0322$.' }
        ]
      },
      {
        code: '5.9', marks: 4,
        topic: { bm: 'Mengasingkan Saiz Sampel $n$ daripada Pengeluaran Harian', en: 'Distinguishing Sample Size $n$ from Daily Output' },
        q: {
          bm: 'Sebuah kilang menghasilkan $2000$ cip sehari dengan kadar kecacatan $2\\%$. Jika sampel rawak $10$ keping cip diperiksa, cari kebarangkalian tepat $2$ keping cip adalah cacat. [4m]',
          en: 'A factory produces $2000$ chips daily with a $2\\%$ defect rate. If a random sample of $10$ chips is inspected, find the probability that exactly $2$ are defective. [4m]'
        },
        mistakes: {
          bm: ['Terperangkap menggunakan angka pengeluaran kilang $2000$ sebagai $n$ bukannya saiz sampel ujian $n = 10$!'],
          en: ['Using daily output $2000$ as $n$ instead of the inspected sample size $n = 10$!']
        },
        scheme: [
          { badge: 'K1', bm: '$X \\sim B(10, 0.02)$: $P(X = 2) = \\,^{10}C_2 (0.02)^2 (0.98)^8 = 45(0.0004)(0.85076)$.', en: '$P(X = 2) = \\,^{10}C_2 (0.02)^2 (0.98)^8$.' },
          { badge: 'N1', bm: '$0.0153$.', en: '$0.0153$.' }
        ]
      },
      {
        code: '5.10', marks: 4,
        topic: { bm: 'Peratusan Dua Ekor Luar Taburan Normal', en: 'Two-Tailed Percentage Outside an Interval' },
        q: {
          bm: 'Jangka hayat bateri bertaburan normal dengan min $50\\text{ jam}$ dan sisihan piawai $5\\text{ jam}$. Cari peratusan bateri yang mempunyai jangka hayat kurang daripada $42\\text{ jam}$ atau melebihi $58\\text{ jam}$. [4m]',
          en: 'Battery lifespan is normally distributed with mean $50\\text{ h}$ and standard deviation $5\\text{ h}$. Find the percentage lasting less than $42\\text{ h}$ or more than $58\\text{ h}$. [4m]'
        },
        mistakes: {
          bm: ['Memberikan kebarangkalian perpuluhan $0.1096$ tanpa mendarab $100\\%$ sedangkan soalan meminta **peratusan**.'],
          en: ['Leaving the answer as probability $0.1096$ without converting to **percentage** ($10.96\\%$).']
        },
        scheme: [
          { badge: 'K1', bm: '$P(X < 42) + P(X > 58) = P(Z < -1.6) + P(Z > 1.6) = 2(0.0548) = 0.1096$.', en: '$2 \\times P(Z > 1.6) = 2(0.0548) = 0.1096$.' },
          { badge: 'N1', bm: '$10.96\\%$.', en: '$10.96\\%$.' }
        ]
      }
    ],

    // =========================================================================
    // TINGKATAN 5 BAB 6: FUNGSI TRIGONOMETRI (10 SOALAN)
    // =========================================================================
    'f5-c6': [
      {
        code: '6.1', marks: 3,
        topic: { bm: 'Tanda Sukuan II (ASTC) & Fungsi Salingan ($\\sec, \\csc, \\cot$)', en: 'Quadrant II Signs (ASTC) & Reciprocal Ratios' },
        q: {
          bm: 'Diberi $\\tan\\theta = -\\frac{3}{4}$ dan $90^\\circ < \\theta < 180^\\circ$. Tanpa menggunakan kalkulator, cari nilai $\\sin\\theta$ dan $\\sec\\theta$. [3m]',
          en: 'Given $\\tan\\theta = -\\frac{3}{4}$ and $90^\\circ < \\theta < 180^\\circ$, find $\\sin\\theta$ and $\\sec\\theta$ without a calculator. [3m]'
        },
        mistakes: {
          bm: ['Terlupa bahawa dalam Sukuan II, kosinus dan sekan adalah **negatif** ($\\sec\\theta = -\\frac{5}{4}$).'],
          en: ['Writing positive $+\\frac{5}{4}$ for $\\sec\\theta$, forgetting cosine and secant are **negative** in Quadrant II.']
        },
        scheme: [
          { badge: 'K1', bm: 'Segi tiga rujukan $3$-$4$-$5$: hipotenus $= \\sqrt{3^2 + 4^2} = 5$, Sukuan II ($\\sin > 0,\\; \\cos < 0$).', en: 'Hypotenuse $= 5$; in Quadrant II, $\\sin > 0$ and $\\cos < 0$.' },
          { badge: 'N1', bm: '$\\sin\\theta = \\frac{3}{5}$ dan $\\sec\\theta = -\\frac{5}{4}$.', en: '$\\sin\\theta = \\frac{3}{5}$ and $\\sec\\theta = -\\frac{5}{4}$.' }
        ]
      },
      {
        code: '6.2', marks: 6,
        topic: { bm: 'Lakaran Graf Kosinus & Bilangan Penyelesaian Garis Lurus', en: 'Sketching Cosine Graph & Counting Line Intersections' },
        q: {
          bm: '(a) Lakarkan graf $y = 2\\cos 2x$ untuk $0 \\le x \\le \\pi$. [3m]\n(b) Seterusnya, pada paksi yang sama, lakarkan garis lurus yang sesuai untuk mencari bilangan penyelesaian bagi persamaan $2\\pi\\cos 2x = \\pi - x$ dalam julat itu. [3m]',
          en: '(a) Sketch $y = 2\\cos 2x$ for $0 \\le x \\le \\pi$. [3m]\n(b) Hence, draw a suitable straight line on the same axes to state the number of solutions of $2\\pi\\cos 2x = \\pi - x$ in that interval. [3m]'
        },
        mistakes: {
          bm: ['Melukis garis $y = \\pi - x$ secara terus tanpa membahagikan kedua-dua belah persamaan dengan $\\pi$ supaya sebelah kiri sepadan tepat dengan graf $y = 2\\cos 2x$!'],
          en: ['Drawing $y = \\pi - x$ directly without dividing both sides by $\\pi$ to match the sketched curve $y = 2\\cos 2x$!']
        },
        scheme: [
          { badge: 'K1', bm: '(a) Satu kitaran kosinus lengkap pada $[0, \\pi]$ bermula di $(0, 2)$, minimum $(\\frac{\\pi}{2}, -2)$, berakhir di $(\\pi, 2)$.', en: '(a) One full cosine cycle on $[0, \\pi]$ from $(0, 2)$ through $(\\pi/2, -2)$ to $(\\pi, 2)$.' },
          { badge: 'K1', bm: '(b) Bahagi $\\pi$: $2\\cos 2x = 1 - \\frac{x}{\\pi}$; lukis garis lurus $y = 1 - \\frac{x}{\\pi}$ melalui $(0, 1)$ dan $(\\pi, 0)$.', en: '(b) Divide by $\\pi$: $2\\cos 2x = 1 - \\frac{x}{\\pi}$; draw line through $(0, 1)$ and $(\\pi, 0)$.' },
          { badge: 'N1', bm: 'Garis lurus memotong lengkung pada $2$ titik persilangan $\\implies$ bilangan penyelesaian $= 2$.', en: 'Line intersects the curve at $2$ points $\\implies$ number of solutions $= 2$.' }
        ]
      },
      {
        code: '6.3', marks: 4,
        topic: { bm: 'Pembuktian Identiti Sudut Berganda', en: 'Proving a Double-Angle Trigonometric Identity' },
        q: {
          bm: 'Buktikan identiti $\\frac{1 + \\cos 2\\theta}{\\sin 2\\theta} = \\cot\\theta$. [4m]',
          en: 'Prove the identity $\\frac{1 + \\cos 2\\theta}{\\sin 2\\theta} = \\cot\\theta$. [4m]'
        },
        mistakes: {
          bm: ['Memilih bentuk $1 - 2\\sin^2\\theta$ bagi $\\cos 2\\theta$ lalu gagal menghapuskan angka $1$ pada pengangka, sedangkan $2\\cos^2\\theta - 1$ terus membatalkan $+1$!'],
          en: ['Choosing $1 - 2\\sin^2\\theta$ instead of $2\\cos^2\\theta - 1$, failing to cancel the $+1$ in the numerator!']
        },
        scheme: [
          { badge: 'K1', bm: '$\\text{LHS} = \\frac{1 + (2\\cos^2\\theta - 1)}{2\\sin\\theta\\cos\\theta}$.', en: '$\\text{LHS} = \\frac{1 + (2\\cos^2\\theta - 1)}{2\\sin\\theta\\cos\\theta}$.' },
          { badge: 'N1', bm: '$= \\frac{2\\cos^2\\theta}{2\\sin\\theta\\cos\\theta} = \\frac{\\cos\\theta}{\\sin\\theta} = \\cot\\theta = \\text{RHS}$ (Terbukti).', en: '$= \\frac{\\cos\\theta}{\\sin\\theta} = \\cot\\theta = \\text{RHS}$ (Proven).' }
        ]
      },
      {
        code: '6.4', marks: 4,
        topic: { bm: 'Persamaan Trigonometri Kuadratik ($[0^\\circ, 360^\\circ]$)', en: 'Quadratic Trigonometric Equation on $[0^\\circ, 360^\\circ]$' },
        q: {
          bm: 'Selesaikan persamaan $2\\cos^2 x + 3\\sin x - 3 = 0$ bagi $0^\\circ \\le x \\le 360^\\circ$. [4m]',
          en: 'Solve $2\\cos^2 x + 3\\sin x - 3 = 0$ for $0^\\circ \\le x \\le 360^\\circ$. [4m]'
        },
        mistakes: {
          bm: ['Gagal menukar $\\cos^2 x = 1 - \\sin^2 x$, atau tertinggal sudut Sukuan II iaitu $180^\\circ - 30^\\circ = 150^\\circ$.'],
          en: ['Not substituting $\\cos^2 x = 1 - \\sin^2 x$, or missing Quadrant II angle $150^\\circ$.']
        },
        scheme: [
          { badge: 'K1', bm: '$2(1 - \\sin^2 x) + 3\\sin x - 3 = 0 \\implies 2\\sin^2 x - 3\\sin x + 1 = 0$.', en: '$2\\sin^2 x - 3\\sin x + 1 = 0$.' },
          { badge: 'K1', bm: '$(2\\sin x - 1)(\\sin x - 1) = 0 \\implies \\sin x = \\frac{1}{2}$ atau $\\sin x = 1$.', en: '$\\sin x = \\frac{1}{2}$ or $\\sin x = 1$.' },
          { badge: 'N1', bm: '$x = 30^\\circ,\\; 90^\\circ,\\; 150^\\circ$.', en: '$x = 30^\\circ,\\; 90^\\circ,\\; 150^\\circ$.' }
        ]
      },
      {
        code: '6.5', marks: 3,
        topic: { bm: 'Nilai Tepat Sudut Majmuk ($\\sin 75^\\circ$)', en: 'Exact Value via Compound-Angle Formula ($\\sin 75^\\circ$)' },
        q: {
          bm: 'Tanpa menggunakan kalkulator, cari nilai tepat bagi $\\sin 75^\\circ$ dalam bentuk surd menggunakan rumus sudut majmuk $\\sin(45^\\circ + 30^\\circ)$. [3m]',
          en: 'Without using a calculator, find the exact surd value of $\\sin 75^\\circ$ using $\\sin(45^\\circ + 30^\\circ)$. [3m]'
        },
        mistakes: {
          bm: ['Mengagihkan fungsi sinus secara linear: menulis $\\sin(45^\\circ + 30^\\circ) = \\sin 45^\\circ + \\sin 30^\\circ$!'],
          en: ['Distributing sine linearly as $\\sin 45^\\circ + \\sin 30^\\circ$!']
        },
        scheme: [
          { badge: 'K1', bm: '$\\sin 45^\\circ\\cos 30^\\circ + \\cos 45^\\circ\\sin 30^\\circ = \\left(\\frac{\\sqrt{2}}{2}\\right)\\left(\\frac{\\sqrt{3}}{2}\\right) + \\left(\\frac{\\sqrt{2}}{2}\\right)\\left(\\frac{1}{2}\\right)$.', en: '$\\left(\\frac{\\sqrt{2}}{2}\\right)\\left(\\frac{\\sqrt{3}}{2}\\right) + \\left(\\frac{\\sqrt{2}}{2}\\right)\\left(\\frac{1}{2}\\right)$.' },
          { badge: 'N1', bm: '$\\frac{\\sqrt{6} + \\sqrt{2}}{4}$.', en: '$\\frac{\\sqrt{6} + \\sqrt{2}}{4}$.' }
        ]
      },
      {
        code: '6.6', marks: 3,
        topic: { bm: 'Rumus Tangen Sudut Berganda $\\tan 2A$', en: 'Double-Angle Tangent Formula $\\tan 2A$' },
        q: {
          bm: 'Diberi $\\tan A = \\frac{4}{3}$, cari nilai tepat bagi $\\tan 2A$. [3m]',
          en: 'Given $\\tan A = \\frac{4}{3}$, find the exact value of $\\tan 2A$. [3m]'
        },
        mistakes: {
          bm: ['Mendarab $\\tan A$ dengan $2$ secara terus ($\\frac{8}{3}$) tanpa penyebut $1 - \\tan^2 A$.'],
          en: ['Simply doubling $\\tan A$ to $\\frac{8}{3}$ instead of using $\\frac{2\\tan A}{1 - \\tan^2 A}$.']
        },
        scheme: [
          { badge: 'K1', bm: '$\\tan 2A = \\frac{2\\left(\\frac{4}{3}\\right)}{1 - \\left(\\frac{4}{3}\\right)^2} = \\frac{\\frac{8}{3}}{-\\frac{7}{9}}$.', en: '$\\tan 2A = \\frac{8/3}{1 - 16/9} = \\frac{8/3}{-7/9}$.' },
          { badge: 'N1', bm: '$-\\frac{24}{7}$.', en: '$-\\frac{24}{7}$.' }
        ]
      },
      {
        code: '6.7', marks: 4,
        topic: { bm: 'Identiti Melibatkan Sekan & Kosekan Kuasa Dua', en: 'Identity Involving $\\sec^2 x$ and $\\csc^2 x$' },
        q: {
          bm: 'Buktikan bahawa $\\sec^2 x + \\csc^2 x = \\sec^2 x\\csc^2 x$. [4m]',
          en: 'Prove that $\\sec^2 x + \\csc^2 x = \\sec^2 x\\csc^2 x$. [4m]'
        },
        mistakes: {
          bm: ['Gagal menyamakan penyebut pecahan selepas menukar kepada $\\frac{1}{\\cos^2 x} + \\frac{1}{\\sin^2 x}$.'],
          en: ['Failing to combine over a common denominator after converting to $\\frac{1}{\\cos^2 x} + \\frac{1}{\\sin^2 x}$.']
        },
        scheme: [
          { badge: 'K1', bm: '$\\text{LHS} = \\frac{1}{\\cos^2 x} + \\frac{1}{\\sin^2 x} = \\frac{\\sin^2 x + \\cos^2 x}{\\cos^2 x\\sin^2 x}$.', en: '$\\text{LHS} = \\frac{\\sin^2 x + \\cos^2 x}{\\cos^2 x\\sin^2 x}$.' },
          { badge: 'N1', bm: 'Guna $\\sin^2 x + \\cos^2 x = 1$: $= \\frac{1}{\\cos^2 x}\\cdot\\frac{1}{\\sin^2 x} = \\sec^2 x\\csc^2 x = \\text{RHS}$ (Terbukti).', en: '$= \\frac{1}{\\cos^2 x\\sin^2 x} = \\sec^2 x\\csc^2 x = \\text{RHS}$.' }
        ]
      },
      {
        code: '6.8', marks: 4,
        topic: { bm: 'Perangkap Membahagi Faktor Sifar dalam $\\sin 2x = \\cos x$', en: 'Zero-Factor Division Trap in $\\sin 2x = \\cos x$' },
        q: {
          bm: 'Selesaikan persamaan $\\sin 2x = \\cos x$ bagi julat $0 \\le x \\le 2\\pi$ (jawapan dalam sebutan $\\pi$). [4m]',
          en: 'Solve $\\sin 2x = \\cos x$ for $0 \\le x \\le 2\\pi$ (give answers in terms of $\\pi$). [4m]'
        },
        mistakes: {
          bm: ['Membahagikan kedua-dua belah dengan $\\cos x$ lalu kehilangan dua punca sah apabila $\\cos x = 0$ iaitu $\\frac{\\pi}{2}$ dan $\\frac{3\\pi}{2}$!'],
          en: ['Dividing both sides by $\\cos x$ and losing the roots where $\\cos x = 0$ ($\\frac{\\pi}{2}$ and $\\frac{3\\pi}{2}$)!']
        },
        scheme: [
          { badge: 'K1', bm: '$2\\sin x\\cos x - \\cos x = 0 \\implies \\cos x(2\\sin x - 1) = 0$.', en: '$\\cos x(2\\sin x - 1) = 0$.' },
          { badge: 'K1', bm: '$\\cos x = 0 \\implies x = \\frac{\\pi}{2},\\; \\frac{3\\pi}{2}$; $\\;\\sin x = \\frac{1}{2} \\implies x = \\frac{\\pi}{6},\\; \\frac{5\\pi}{6}$.', en: '$\\cos x = 0$ or $\\sin x = \\frac{1}{2}$.' },
          { badge: 'N1', bm: '$x = \\frac{\\pi}{6},\\; \\frac{\\pi}{2},\\; \\frac{5\\pi}{6},\\; \\frac{3\\pi}{2}$.', en: '$x = \\frac{\\pi}{6},\\; \\frac{\\pi}{2},\\; \\frac{5\\pi}{6},\\; \\frac{3\\pi}{2}$.' }
        ]
      },
      {
        code: '6.9', marks: 3,
        topic: { bm: 'Amplitud & Tempoh Graf Nilai Mutlak $y = |\\sin x|$', en: 'Amplitude & Period of Modulus Graph $y = |\\sin x|$' },
        q: {
          bm: 'Nyatakan nilai maksimum, nilai minimum, dan tempoh (dalam radian) bagi fungsi $y = |\\sin x|$ untuk $0 \\le x \\le 2\\pi$. [3m]',
          en: 'State the maximum value, minimum value, and period (in radians) of $y = |\\sin x|$ for $0 \\le x \\le 2\\pi$. [3m]'
        },
        mistakes: {
          bm: ['Menyatakan tempoh masih $2\\pi$ sedangkan pantulan lengkung bawah ke atas menjadikan corak berulang setiap $\\pi\\text{ rad}$!'],
          en: ['Stating the period is $2\\pi$ instead of $\\pi\\text{ rad}$ after the negative lobe reflects upward!']
        },
        scheme: [
          { badge: 'N1', bm: 'Nilai maksimum $= 1$, nilai minimum $= 0$.', en: 'Maximum $= 1$, minimum $= 0$.' },
          { badge: 'N1', bm: 'Tempoh ulangan $= \\pi\\text{ rad}$ (dua lengkungan positif pada $[0, 2\\pi]$).', en: 'Period $= \\pi\\text{ rad}$ (two positive arches on $[0, 2\\pi]$).' }
        ]
      },
      {
        code: '6.10', marks: 4,
        topic: { bm: 'Pemodelan Kedalaman Pasang Surut Air Laut', en: 'Tidal Water Depth Trigonometric Modelling' },
        q: {
          bm: 'Kedalaman air di sebuah jeti dimodelkan oleh $h(t) = 4 + 3\\cos\\left(\\frac{\\pi t}{6}\\right)\\text{ meter}$, dengan $t$ ialah masa dalam jam selepas tengah malam. Cari kedalaman maksimum air dan masa pertama kali air mencapai kedalaman minimum. [4m]',
          en: 'Water depth at a jetty is modelled by $h(t) = 4 + 3\\cos\\left(\\frac{\\pi t}{6}\\right)\\text{ m}$, where $t$ is hours after midnight. Find the maximum depth and the first time minimum depth occurs. [4m]'
        },
        mistakes: {
          bm: ['Lupa bahawa julat fungsi kosinus ialah $[-1, 1]$, lalu menyamakan $\\cos\\left(\\frac{\\pi t}{6}\\right) = 0$ bukannya $-1$ untuk kedalaman minimum.'],
          en: ['Setting $\\cos(\\pi t / 6) = 0$ instead of $-1$ when finding minimum depth.']
        },
        scheme: [
          { badge: 'N1', bm: 'Kedalaman maksimum (apabila $\\cos = +1$): $h_{\\max} = 4 + 3(1) = 7\\text{ m}$.', en: '$h_{\\max} = 4 + 3 = 7\\text{ m}$.' },
          { badge: 'K1', bm: 'Kedalaman minimum berlaku apabila $\\cos\\left(\\frac{\\pi t}{6}\\right) = -1 \\implies \\frac{\\pi t}{6} = \\pi$.', en: 'Minimum when $\\frac{\\pi t}{6} = \\pi$.' },
          { badge: 'N1', bm: '$t = 6\\text{ jam}$ (jam $6:00$ pagi, dengan $h_{\\min} = 1\\text{ m}$).', en: '$t = 6\\text{ hours}$ ($6:00\\text{ a.m.}$).' }
        ]
      }
    ],

    // =========================================================================
    // TINGKATAN 5 BAB 7: PENGATURCARAAN LINEAR (10 SOALAN)
    // =========================================================================
    'f5-c7': [
      {
        code: '7.1', marks: 4,
        topic: { bm: 'Menterjemah Syarat (Kekangan) Perniagaan kepada Ketaksamaan Linear', en: 'Translating Business Constraints into Inequalities' },
        q: {
          bm: 'Sebuah bengkel menghasilkan $x$ buah kerusi kayu dan $y$ buah kerusi plastik sehari berdasarkan syarat-syarat (kekangan) berikut:\nI: Jumlah pengeluaran tidak melebihi $100$ buah.\nII: Bilangan kerusi kayu adalah sekurang-kurangnya separuh daripada kerusi plastik.\nIII: Jumlah kos pengeluaran sekurang-kurangnya $\\text{RM }1600$ (kos seunit kayu $\\text{RM }40$, plastik $\\text{RM }20$).\nTulis tiga ketaksamaan linear selain $x \\ge 0$ dan $y \\ge 0$. [4m]',
          en: 'A workshop makes $x$ wooden chairs and $y$ plastic chairs daily:\nI: Total output does not exceed $100$.\nII: Wooden chairs are at least half the plastic chairs.\nIII: Total cost is at least $\\text{RM }1600$ ($\\text{RM }40$ per wooden, $\\text{RM }20$ per plastic).\nWrite three linear inequalities other than $x \\ge 0, y \\ge 0$. [4m]'
        },
        mistakes: {
          bm: ['Terbalik simbol $\\le$ dan $\\ge$ bagi frasa "tidak melebihi" ($\\le$) dan "sekurang-kurangnya" ($\\ge$), atau menulis $y \\ge \\frac{1}{2}x$ bagi syarat II.'],
          en: ['Reversing $\\le$ and $\\ge$, or writing $y \\ge \\frac{1}{2}x$ instead of $x \\ge \\frac{1}{2}y$ for constraint II.']
        },
        scheme: [
          { badge: 'N1', bm: 'I: $x + y \\le 100$.', en: 'I: $x + y \\le 100$.' },
          { badge: 'N1', bm: 'II: $x \\ge \\frac{1}{2}y$ (atau $y \\le 2x$).', en: 'II: $x \\ge \\frac{1}{2}y$ (or $y \\le 2x$).' },
          { badge: 'K1', bm: 'III: $40x + 20y \\ge 1600 \\implies 2x + y \\ge 80$.', en: 'III: $40x + 20y \\ge 1600 \\implies 2x + y \\ge 80$.' }
        ]
      },
      {
        code: '7.2', marks: 4,
        topic: { bm: 'Keuntungan Maksimum pada Bucu Rantau Berlorek $R$ (*Feasible Region*)', en: 'Maximum Profit at Vertices of Feasible Region $R$' },
        q: {
          bm: 'Rantau berlorek $R$ (rantau yang memenuhi semua syarat) mempunyai bucu-bucu pada $(20, 40)$, $(60, 20)$, dan $(40, 60)$. Cari keuntungan maksimum bagi rumus keuntungan (fungsi objektif) $P = 15x + 25y$ dan nyatakan koordinat titik optimumnya. [4m]',
          en: 'Feasible region $R$ has vertices $(20, 40)$, $(60, 20)$, and $(40, 60)$. Find the maximum profit for $P = 15x + 25y$ and state the optimal point. [4m]'
        },
        mistakes: {
          bm: ['Meneka bucu secara rawak tanpa menguji semua bucu ke dalam rumus keuntungan $P = 15x + 25y$.'],
          en: ['Guessing a vertex visually without testing all vertices in $P = 15x + 25y$.']
        },
        scheme: [
          { badge: 'K1', bm: 'Uji bucu: $P(20, 40) = 1300$; $\\;P(60, 20) = 1400$; $\\;P(40, 60) = 15(40) + 25(60) = 2100$.', en: 'Test vertices: $1300,\\; 1400,\\; 2100$.' },
          { badge: 'N1', bm: 'Keuntungan maksimum $= \\text{RM }2100$ pada titik optimum $(40, 60)$.', en: 'Maximum profit $= \\text{RM }2100$ at $(40, 60)$.' }
        ]
      },
      {
        code: '7.3', marks: 3,
        topic: { bm: 'Julat Nilai $y$ daripada Keratan Tegak Rantau $R$', en: 'Range of $y$ Along a Vertical Slice of Region $R$' },
        q: {
          bm: 'Rantau berlorek $R$ dibatasi oleh $y \\ge x - 10$, $x + y \\le 90$, dan $y \\ge 15$. Jika diberi $x = 30$, cari julat nilai $y$ yang memuaskan rantau $R$. [3m]',
          en: 'Feasible region $R$ is bounded by $y \\ge x - 10$, $x + y \\le 90$, and $y \\ge 15$. Given $x = 30$, find the range of $y$ inside $R$. [3m]'
        },
        mistakes: {
          bm: ['Mengambil had bawah $y = 15$ tanpa menyemak bahawa pada $x = 30$, sempadan $y \\ge 30 - 10 = 20$ adalah lebih ketat!'],
          en: ['Taking $y \\ge 15$ without noticing that at $x = 30$, $y \\ge 30 - 10 = 20$ is tighter!']
        },
        scheme: [
          { badge: 'K1', bm: 'Pada $x = 30$: $y \\ge 20$, $y \\le 90 - 30 = 60$, dan $y \\ge 15$.', en: 'At $x = 30$: $y \\ge 20$ and $y \\le 60$.' },
          { badge: 'N1', bm: '$20 \\le y \\le 60$.', en: '$20 \\le y \\le 60$.' }
        ]
      },
      {
        code: '7.4', marks: 4,
        topic: { bm: 'Mencari Kos Minimum pada Bucu Rantau Berlorek $R$', en: 'Minimizing a Cost Function Over Region $R$' },
        q: {
          bm: 'Bucu-bucu bagi suatu rantau berlorek $R$ ialah $(10, 30)$, $(20, 15)$, dan $(40, 10)$. Cari kos minimum bagi fungsi kos $C = 2x + 3y$. [4m]',
          en: 'The vertices of feasible region $R$ are $(10, 30)$, $(20, 15)$, and $(40, 10)$. Find the minimum cost for $C = 2x + 3y$. [4m]'
        },
        mistakes: {
          bm: ['Memilih titik dengan $x$ paling kecil $(10, 30)$ secara membuta tuli tanpa mengira jumlah gabungan $2x + 3y$.'],
          en: ['Blindly picking smallest $x$ at $(10, 30)$ without evaluating $C = 2x + 3y$ at every vertex.']
        },
        scheme: [
          { badge: 'K1', bm: '$C(10, 30) = 110$; $\\;C(20, 15) = 40 + 45 = 85$; $\\;C(40, 10) = 110$.', en: '$C(10,30)=110,\\; C(20,15)=85,\\; C(40,10)=110$.' },
          { badge: 'N1', bm: 'Kos minimum $= \\text{RM }85$ pada $(20, 15)$.', en: 'Minimum cost $= \\text{RM }85$ at $(20, 15)$.' }
        ]
      },
      {
        code: '7.5', marks: 2,
        topic: { bm: 'Peraturan Garis Padu vs Garis Putus-putus', en: 'Solid vs Dashed Boundary Line Convention' },
        q: {
          bm: 'Nyatakan perbezaan penggunaan garis padu dan garis putus-putus semasa melukis sempadan rantau ketaksamaan pengaturcaraan linear, serta kesannya terhadap pemilihan titik bucu. [2m]',
          en: 'State when to draw a solid line versus a dashed line in linear programming, and how it affects choosing a vertex on that boundary. [2m]'
        },
        mistakes: {
          bm: ['Melukis garis padu untuk ketaksamaan $<$ atau $>$ (tanpa tanda sama dengan), lalu menerima titik di atas garis putus-putus sebagai penyelesaian sah!'],
          en: ['Using a solid line for strict $<$ or $>$, or accepting a point lying on a dashed line!']
        },
        scheme: [
          { badge: 'N1', bm: 'Garis padu untuk $\\le$ atau $\\ge$ (titik pada garis termasuk); garis putus-putus untuk $<$ atau $>$ (titik pada garis tidak termasuk).', en: 'Solid line for $\\le, \\ge$ (included); dashed line for $<, >$ (excluded).' }
        ]
      },
      {
        code: '7.6', marks: 3,
        topic: { bm: 'Kaedah Pembaris Menggelongsor Garis Pencari ($k = ax + by$)', en: 'Sliding Objective Line Method' },
        q: {
          bm: 'Terangkan bagaimana garis pencari (garis objektif) digunakan pada kertas graf untuk mencari nilai maksimum bagi $k = 3x + 4y$ dalam rantau $R$. [3m]',
          en: 'Explain how an objective line is used graphically to find the maximum of $k = 3x + 4y$ in region $R$. [3m]'
        },
        mistakes: {
          bm: ['Melukis garis rujukan dengan kecerunan $+\\frac{3}{4}$ bukannya kecerunan sebenar $-\\frac{3}{4}$.'],
          en: ['Drawing the reference line with positive gradient $+\\frac{3}{4}$ instead of $-\\frac{3}{4}$.']
        },
        scheme: [
          { badge: 'K1', bm: 'Lukis satu garis rujukan $3x + 4y = c$ (contohnya $3x + 4y = 12$ melalui $(4, 0)$ dan $(0, 3)$).', en: 'Draw a reference line $3x + 4y = 12$ (gradient $-\\frac{3}{4}$).' },
          { badge: 'N1', bm: 'Gelongsor pembaris secara selari menjauhi asalan ke arah kanan/atas sehingga menyentuh titik terakhir dalam $R$.', en: 'Slide parallel away from the origin to the last point touching $R$.' }
        ]
      },
      {
        code: '7.7', marks: 3,
        topic: { bm: 'Menterjemah Frasa "Melebihi ... Sebanyak Paling Banyak"', en: 'Translating "Exceeds ... By At Most"' },
        q: {
          bm: 'Bilangan peserta perempuan ($y$) melebihi tiga kali bilangan peserta lelaki ($x$) sebanyak paling banyak $5$ orang (dengan $y > 3x$). Tulis ketaksamaan linear yang mewakili situasi ini. [3m]',
          en: 'The number of female participants ($y$) exceeds three times the male participants ($x$) by at most $5$ (given $y > 3x$). Write the linear inequality. [3m]'
        },
        mistakes: {
          bm: ['Menulis $y - 3x \\ge 5$ kerana terkeliru perkataan "melebihi", sedangkan "paling banyak $5$" mengehadkan beza kepada $\\le 5$!'],
          en: ['Writing $y - 3x \\ge 5$ due to "exceeds", ignoring "at most $5$" which means $\\le 5$!']
        },
        scheme: [
          { badge: 'K1', bm: 'Beza antara $y$ dan $3x$ ialah $y - 3x$.', en: 'Difference is $y - 3x$.' },
          { badge: 'N1', bm: '$y - 3x \\le 5$ (atau $y \\le 3x + 5$).', en: '$y - 3x \\le 5$.' }
        ]
      },
      {
        code: '7.8', marks: 4,
        topic: { bm: 'Syarat Jawapan Nombor Bulat (Integer) bagi Bilangan Objek', en: 'Integer Requirement for Discrete Quantities' },
        q: {
          bm: 'Dalam masalah menyewa $x$ buah bas dan $y$ buah van bagi memaksimumkan kapasiti penumpang, bucu persilangan tertinggi dalam rantau $R$ ialah $(15.2, 22.8)$ di bawah syarat $x + y \\le 38$ dan $2y \\le 3x$. Terangkan cara menentukan pasangan $(x, y)$ sebenar dan beri satu calon titik integer yang sah. [4m]',
          en: 'When hiring $x$ buses and $y$ vans, the highest vertex of $R$ is $(15.2, 22.8)$ subject to $x + y \\le 38$ and $2y \\le 3x$. Explain how to pick the valid optimal solution and state a valid integer point nearby. [4m]'
        },
        mistakes: {
          bm: ['Membundarkan terus kepada $(15, 23)$ secara automatik tanpa menyemak syarat — sedangkan $(15, 23)$ gagal memenuhi $2y \\le 3x$ ($46 > 45$, terkeluar dari rantau $R$)!'],
          en: ['Blindly rounding to $(15, 23)$ without checking constraints — $(15, 23)$ violates $2y \\le 3x$ ($46 > 45$, outside $R$)!']
        },
        scheme: [
          { badge: 'K1', bm: 'Oleh sebab bilangan kenderaan mestilah nombor bulat (integer), titik perpuluhan $(15.2, 22.8)$ tidak boleh diterima terus.', en: 'Vehicle counts must be integers, so $(15.2, 22.8)$ is invalid as-is.' },
          { badge: 'N1', bm: 'Pilih titik nombor bulat terdekat yang **sah di dalam** rantau $R$ (contohnya $(16, 22)$ atau $(15, 22)$) yang memberi kapasiti tertinggi.', en: 'Test nearest integer points **inside** $R$ (e.g. $(16, 22)$ or $(15, 22)$) that maximize capacity.' }
        ]
      },
      {
        code: '7.9', marks: 4,
        topic: { bm: 'Syarat Peratusan daripada Jumlah Keseluruhan', en: 'Percentage of Total Output Constraint' },
        q: {
          bm: 'Sebuah kilang menetapkan bilangan produk gred premium ($x$) mestilah sekurang-kurangnya $20\\%$ daripada jumlah keseluruhan produk ($x + y$). Permudahkan ketaksamaan ini kepada bentuk termudah. [4m]',
          en: 'Premium units ($x$) must be at least $20\\%$ of total units ($x + y$). Write and simplify this linear inequality. [4m]'
        },
        mistakes: {
          bm: ['Menulis $x \\ge 0.2y$ (peratus daripada $y$ sahaja) bukannya $x \\ge 0.2(x + y)$ (peratus daripada **jumlah keseluruhan**)!'],
          en: ['Writing $x \\ge 0.2y$ instead of $x \\ge 0.2(x + y)$!']
        },
        scheme: [
          { badge: 'K1', bm: '$x \\ge \\frac{20}{100}(x + y) \\implies 5x \\ge x + y$.', en: '$x \\ge 0.2(x + y) \\implies 5x \\ge x + y$.' },
          { badge: 'N1', bm: '$4x \\ge y$ (atau $y \\le 4x$).', en: '$y \\le 4x$.' }
        ]
      },
      {
        code: '7.10', marks: 4,
        topic: { bm: 'Analisis Lengkap Keuntungan Optimum Dua Jenis Kek', en: 'Optimal Bakery Profit Analysis' },
        q: {
          bm: 'Sebuah kedai kek mempunyai bucu-bucu rantau pengeluaran harian bagi $x$ biji kek coklat dan $y$ biji kek keju pada $(10, 50)$, $(30, 40)$, dan $(50, 10)$. Jika keuntungan sebiji kek coklat ialah $\\text{RM }8$ dan kek keju ialah $\\text{RM }10$, cari bilangan setiap kek untuk keuntungan maksimum dan nyatakan keuntungan itu. [4m]',
          en: 'A bakery\'s feasible vertices for $x$ chocolate cakes and $y$ cheesecakes are $(10, 50)$, $(30, 40)$, and $(50, 10)$. Profit is $\\text{RM }8$ per chocolate cake and $\\text{RM }10$ per cheesecake. Find the optimal output and maximum profit. [4m]'
        },
        mistakes: {
          bm: ['Tersalah darab harga keuntungan antara $x$ dan $y$ semasa menguji bucu.'],
          en: ['Swapping the profit coefficients of $x$ and $y$ during vertex testing.']
        },
        scheme: [
          { badge: 'K1', bm: '$P = 8x + 10y$: $P(10,50) = 580$; $\\;P(30,40) = 240 + 400 = 640$; $\\;P(50,10) = 500$.', en: '$P(10,50)=580,\\; P(30,40)=640,\\; P(50,10)=500$.' },
          { badge: 'N1', bm: '$30$ kek coklat dan $40$ kek keju; keuntungan maksimum $= \\text{RM }640$.', en: '$30$ chocolate cakes, $40$ cheesecakes; maximum profit $= \\text{RM }640$.' }
        ]
      }
    ],

    // =========================================================================
    // TINGKATAN 5 BAB 8: KINEMATIK GERAKAN LINEAR (10 SOALAN)
    // =========================================================================
    'f5-c8': [
      {
        code: '8.1', marks: 4,
        topic: { bm: 'Halaju Awal dan Masa Zarah Pegun Seketika ($v = 0$)', en: 'Initial Velocity & Instantaneous Rest ($v = 0$)' },
        q: {
          bm: 'Sesaran suatu zarah $s\\text{ meter}$ dari titik tetap $O$ diberi oleh $s = 2t^3 - 9t^2 + 12t$. Cari halaju awal zarah dan nilai-nilai $t$ apabila zarah berhenti seketika. [4m]',
          en: 'Displacement $s\\text{ m}$ from fixed point $O$ is $s = 2t^3 - 9t^2 + 12t$. Find the initial velocity and the times when the particle is instantaneously at rest. [4m]'
        },
        mistakes: {
          bm: ['Menyamakan $s = 0$ untuk mencari masa berhenti seketika, sedangkan berhenti seketika bermaksud **halaju $v = 0$**!'],
          en: ['Setting $s = 0$ instead of **velocity $v = 0$** for instantaneous rest!']
        },
        scheme: [
          { badge: 'K1', bm: '$v = \\frac{ds}{dt} = 6t^2 - 18t + 12$; pada $t = 0$, $v = 12\\text{ m s}^{-1}$.', en: '$v = 6t^2 - 18t + 12$; initial velocity $v(0) = 12\\text{ m s}^{-1}$.' },
          { badge: 'K1', bm: 'Pegun seketika ($v = 0$): $6(t^2 - 3t + 2) = 0 \\implies 6(t - 1)(t - 2) = 0$.', en: '$6(t - 1)(t - 2) = 0$.' },
          { badge: 'N1', bm: '$t = 1\\text{ s}$ dan $t = 2\\text{ s}$.', en: '$t = 1\\text{ s}$ and $t = 2\\text{ s}$.' }
        ]
      },
      {
        code: '8.2', marks: 5,
        topic: { bm: 'Jumlah Jarak dengan Pusingan Arah Gerakan', en: 'Total Distance with Reversal of Motion' },
        q: {
          bm: 'Suatu zarah bergerak melalui titik tetap $O$ pada masa $t = 0$ dengan halaju $v = 3t^2 - 12t + 9\\text{ m s}^{-1}$. Hitung **jumlah jarak** yang dilalui oleh zarah dalam $4\\text{ saat}$ pertama. [5m]',
          en: 'A particle passes through $O$ at $t = 0$ with velocity $v = 3t^2 - 12t + 9\\text{ m s}^{-1}$. Calculate the **total distance** travelled in the first $4\\text{ seconds}$. [5m]'
        },
        mistakes: {
          bm: ['Menggantikan $t = 4$ terus ke dalam $s(4) = 4\\text{ m}$ (itu ialah **sesaran bersih**, bukan jumlah jarak kerana zarah berpusing arah pada $t = 1$ dan $t = 3$)!'],
          en: ['Evaluating net displacement $s(4) = 4\\text{ m}$ directly without splitting at turnaround times $t = 1$ and $t = 3$!']
        },
        scheme: [
          { badge: 'K1', bm: '$s = \\int (3t^2 - 12t + 9)\\,dt = t^3 - 6t^2 + 9t$ ($c = 0$ kerana melalui $O$ pada $t = 0$).', en: '$s = t^3 - 6t^2 + 9t$.' },
          { badge: 'K1', bm: 'Semak $v = 0$: $3(t - 1)(t - 3) = 0 \\implies t = 1,\\; 3$; maka $s(0)=0,\\; s(1)=4,\\; s(3)=0,\\; s(4)=4$.', en: 'Turnarounds at $t = 1, 3$: $s(0)=0,\\; s(1)=4,\\; s(3)=0,\\; s(4)=4$.' },
          { badge: 'N1', bm: 'Jumlah jarak $= |4 - 0| + |0 - 4| + |4 - 0| = 4 + 4 + 4 = 12\\text{ m}$.', en: 'Total distance $= 4 + 4 + 4 = 12\\text{ m}$.' }
        ]
      },
      {
        code: '8.3', marks: 4,
        topic: { bm: 'Pengamiran Pecutan kepada Halaju & Sesaran ($a \\to v \\to s$)', en: 'Integrating Acceleration to Velocity & Displacement' },
        q: {
          bm: 'Suatu zarah bermula di titik tetap $O$ dengan halaju awal $5\\text{ m s}^{-1}$ dan pecutan $a = 6t - 4\\text{ m s}^{-2}$. Cari halaju zarah pada $t = 3\\text{ s}$ dan sesarannya pada $t = 2\\text{ s}$. [4m]',
          en: 'A particle starts from $O$ with initial velocity $5\\text{ m s}^{-1}$ and acceleration $a = 6t - 4\\text{ m s}^{-2}$. Find its velocity at $t = 3\\text{ s}$ and displacement at $t = 2\\text{ s}$. [4m]'
        },
        mistakes: {
          bm: ['Tertinggal pemalar kamiran halaju awal $c_1 = 5$ semasa mengamirkan $a$ untuk mendapatkan $v = 3t^2 - 4t + 5$!'],
          en: ['Forgetting constant of integration $c_1 = 5$ when integrating $a$ to get $v = 3t^2 - 4t + 5$!']
        },
        scheme: [
          { badge: 'K1', bm: '$v = \\int (6t - 4)\\,dt = 3t^2 - 4t + 5 \\implies v(3) = 27 - 12 + 5 = 20\\text{ m s}^{-1}$.', en: '$v = 3t^2 - 4t + 5 \\implies v(3) = 20\\text{ m s}^{-1}$.' },
          { badge: 'K1', bm: '$s = \\int (3t^2 - 4t + 5)\\,dt = t^3 - 2t^2 + 5t$ ($c_2 = 0$).', en: '$s = t^3 - 2t^2 + 5t$.' },
          { badge: 'N1', bm: '$s(2) = 8 - 8 + 10 = 10\\text{ m}$.', en: '$s(2) = 10\\text{ m}$.' }
        ]
      },
      {
        code: '8.4', marks: 4,
        topic: { bm: 'Halaju Maksimum Apabila Pecutan Sifar ($a = 0$)', en: 'Maximum Velocity When Acceleration Is Zero ($a = 0$)' },
        q: {
          bm: 'Halaju suatu zarah diberi oleh $v = 8 + 6t - t^2\\text{ m s}^{-1}$. Cari halaju maksimum zarah tersebut. [4m]',
          en: 'The velocity of a particle is $v = 8 + 6t - t^2\\text{ m s}^{-1}$. Find the maximum velocity of the particle. [4m]'
        },
        mistakes: {
          bm: ['Menyamakan $v = 0$ bukannya menyamakan terbitan halaju (iaitu pecutan $a = \\frac{dv}{dt} = 0$)!'],
          en: ['Setting $v = 0$ instead of setting acceleration $a = \\frac{dv}{dt} = 0$!']
        },
        scheme: [
          { badge: 'K1', bm: 'Pada halaju maksimum, $a = \\frac{dv}{dt} = 6 - 2t = 0 \\implies t = 3\\text{ s}$.', en: '$a = 6 - 2t = 0 \\implies t = 3\\text{ s}$.' },
          { badge: 'N1', bm: '$v_{\\max} = 8 + 6(3) - (3)^2 = 17\\text{ m s}^{-1}$.', en: '$v_{\\max} = 17\\text{ m s}^{-1}$.' }
        ]
      },
      {
        code: '8.5', marks: 4,
        topic: { bm: 'Masa Zarah Kembali ke Titik Tetap $O$ ($s = 0$)', en: 'Times Returning to Fixed Point $O$ ($s = 0$)' },
        q: {
          bm: 'Sesaran suatu zarah diberi oleh $s = t^3 - 4t^2 + 3t\\text{ meter}$. Cari nilai-nilai $t > 0$ apabila zarah kembali melalui $O$, serta halajunya pada ketika itu. [4m]',
          en: 'A particle\'s displacement is $s = t^3 - 4t^2 + 3t\\text{ m}$. Find the times $t > 0$ when it returns to $O$ and its velocity at each time. [4m]'
        },
        mistakes: {
          bm: ['Membezakan terus untuk mencari $v = 0$ sedangkan "melalui titik tetap $O$" bermaksud **sesaran $s = 0$**!'],
          en: ['Solving $v = 0$ instead of setting **displacement $s = 0$** when at $O$!']
        },
        scheme: [
          { badge: 'K1', bm: '$s = 0 \\implies t(t^2 - 4t + 3) = t(t - 1)(t - 3) = 0 \\implies t = 1\\text{ s},\\; 3\\text{ s}$.', en: '$t(t - 1)(t - 3) = 0 \\implies t = 1\\text{ s},\\; 3\\text{ s}$.' },
          { badge: 'N1', bm: '$v = 3t^2 - 8t + 3$: $v(1) = -2\\text{ m s}^{-1}$ dan $v(3) = 6\\text{ m s}^{-1}$.', en: '$v(1) = -2\\text{ m s}^{-1}$ and $v(3) = 6\\text{ m s}^{-1}$.' }
        ]
      },
      {
        code: '8.6', marks: 3,
        topic: { bm: 'Nyahpecutan Malar sehingga Berhenti', en: 'Constant Deceleration Until Stopping' },
        q: {
          bm: 'Sebuah kereta bergerak melalui $O$ dengan halaju $24\\text{ m s}^{-1}$ dan mengalami nyahpecutan malar (diperlahankan pada kadar tetap) $4\\text{ m s}^{-2}$ sehingga berhenti. Cari masa yang diambil untuk berhenti dan jarak breknya. [3m]',
          en: 'A car passes $O$ at $24\\text{ m s}^{-1}$ and decelerates uniformly at $4\\text{ m s}^{-2}$ until stopping. Find the stopping time and braking distance. [3m]'
        },
        mistakes: {
          bm: ['Menulis pecutan sebagai $+4$ bukannya $-4$ bagi **nyahpecutan**.'],
          en: ['Using $a = +4$ instead of $a = -4$ for **deceleration**.']
        },
        scheme: [
          { badge: 'K1', bm: '$v = 24 - 4t = 0 \\implies t = 6\\text{ s}$.', en: '$v = 24 - 4t = 0 \\implies t = 6\\text{ s}$.' },
          { badge: 'N1', bm: '$s = 24(6) - 2(6)^2 = 144 - 72 = 72\\text{ m}$.', en: 'Braking distance $s = 72\\text{ m}$.' }
        ]
      },
      {
        code: '8.7', marks: 4,
        topic: { bm: 'Pertemuan Dua Zarah Bergerak dari Titik Sama', en: 'Collision / Meeting of Two Particles' },
        q: {
          bm: 'Zarah $P$ dan zarah $Q$ berlepas serentak dari titik $O$ pada garis lurus yang sama dengan sesaran $s_P = 2t^2$ dan $s_Q = 3t^2 - 4t$. Cari masa $t > 0$ apabila kedua-dua zarah bertemu semula dan jaraknya dari $O$. [4m]',
          en: 'Particles $P$ and $Q$ leave $O$ simultaneously along the same line with $s_P = 2t^2$ and $s_Q = 3t^2 - 4t$. Find time $t > 0$ when they meet again and their distance from $O$. [4m]'
        },
        mistakes: {
          bm: ['Menyamakan halaju $v_P = v_Q$ sedangkan bertemu pada kedudukan yang sama bermaksud **sesaran sama** ($s_P = s_Q$)!'],
          en: ['Equating velocities $v_P = v_Q$ instead of **displacements** $s_P = s_Q$!']
        },
        scheme: [
          { badge: 'K1', bm: '$s_P = s_Q \\implies 2t^2 = 3t^2 - 4t \\implies t^2 - 4t = t(t - 4) = 0$.', en: '$2t^2 = 3t^2 - 4t \\implies t(t - 4) = 0$.' },
          { badge: 'N1', bm: '$t = 4\\text{ s}$; jarak dari $O = 2(4)^2 = 32\\text{ m}$.', en: '$t = 4\\text{ s}$ at distance $32\\text{ m}$ from $O$.' }
        ]
      },
      {
        code: '8.8', marks: 3,
        topic: { bm: 'Julat Masa Arah Gerakan Positif vs Negatif', en: 'Time Intervals for Motion Right vs Left' },
        q: {
          bm: 'Halaju suatu zarah diberi oleh $v = 10 - 2t\\text{ m s}^{-1}$ (ke kanan diambil sebagai arah positif). Nyatakan julat masa apabila zarah bergerak ke kanan dan apabila ia bergerak ke kiri. [3m]',
          en: 'Velocity is $v = 10 - 2t\\text{ m s}^{-1}$ (rightward positive). State the time intervals when the particle moves to the right and to the left. [3m]'
        },
        mistakes: {
          bm: ['Menulis $t < 5$ tanpa mengehadkan masa fizikal bukan negatif $0 \\le t < 5$.'],
          en: ['Writing $t < 5$ without the physical non-negative bound $0 \\le t < 5$.']
        },
        scheme: [
          { badge: 'N1', bm: 'Ke kanan ($v > 0$): $0 \\le t < 5\\text{ s}$.', en: 'Moving right ($v > 0$): $0 \\le t < 5\\text{ s}$.' },
          { badge: 'N1', bm: 'Ke kiri ($v < 0$): $t > 5\\text{ s}$.', en: 'Moving left ($v < 0$): $t > 5\\text{ s}$.' }
        ]
      },
      {
        code: '8.9', marks: 3,
        topic: { bm: 'Halaju Ketika Pecutan Sifar', en: 'Velocity at the Instant of Zero Acceleration' },
        q: {
          bm: 'Sesaran suatu zarah diberi oleh $s = \\frac{1}{3}t^3 - 3t^2 + 8t\\text{ meter}$. Cari halaju zarah pada ketika pecutannya adalah sifar. [3m]',
          en: 'Displacement is $s = \\frac{1}{3}t^3 - 3t^2 + 8t\\text{ m}$. Find the velocity of the particle when its acceleration is zero. [3m]'
        },
        mistakes: {
          bm: ['Membezakan sekali sahaja lalu menyamakan $v = 0$ bukannya membezakan kali kedua untuk $a = 0$.'],
          en: ['Differentiating only once instead of twice to find $a = 0$.']
        },
        scheme: [
          { badge: 'K1', bm: '$v = t^2 - 6t + 8$ dan $a = \\frac{dv}{dt} = 2t - 6 = 0 \\implies t = 3\\text{ s}$.', en: '$v = t^2 - 6t + 8$, $a = 2t - 6 = 0 \\implies t = 3\\text{ s}$.' },
          { badge: 'N1', bm: '$v(3) = (3)^2 - 6(3) + 8 = -1\\text{ m s}^{-1}$.', en: '$v(3) = -1\\text{ m s}^{-1}$.' }
        ]
      },
      {
        code: '8.10', marks: 4,
        topic: { bm: 'Tinggi Maksimum Roket Air Dilancarkan Tegak Ke Atas', en: 'Maximum Height of a Vertically Launched Rocket' },
        q: {
          bm: 'Sebuah roket air dilancarkan tegak ke atas dari tanah dengan halaju awal $40\\text{ m s}^{-1}$ dan pecutan graviti $a = -10\\text{ m s}^{-2}$. Cari masa untuk mencapai tinggi maksimum dan nilai tinggi maksimum tersebut. [4m]',
          en: 'A water rocket is launched vertically upward from ground level at $40\\text{ m s}^{-1}$ with acceleration $a = -10\\text{ m s}^{-2}$. Find the time to reach maximum height and the maximum height. [4m]'
        },
        mistakes: {
          bm: ['Gagal menyedari bahawa pada puncak tertinggi, halaju seketika roket ialah $v = 0$.'],
          en: ['Failing to set instantaneous velocity $v = 0$ at the highest point.']
        },
        scheme: [
          { badge: 'K1', bm: '$v = -10t + 40 = 0 \\implies t = 4\\text{ s}$.', en: '$v = -10t + 40 = 0 \\implies t = 4\\text{ s}$.' },
          { badge: 'K1', bm: '$s = -5t^2 + 40t \\implies s(4) = -5(16) + 40(4)$.', en: '$s(4) = -5(16) + 160$.' },
          { badge: 'N1', bm: 'Tinggi maksimum $= 80\\text{ m}$.', en: 'Maximum height $= 80\\text{ m}$.' }
        ]
      }
    ]
  });
})(window.AddMathApp);
