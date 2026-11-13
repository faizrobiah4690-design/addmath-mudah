/**
 * AddMath Mudah — Bank Soalan Master SPM (Fasa 2: Tingkatan 4 Bab 6–10 • 50 Soalan Penuh)
 * Setiap soalan lengkap dengan: Pernyataan Format SPM, Kesilapan Lazim Murid & Skim Pemarkahan (K1 / N1) dalam BM & EN.
 */
window.AddMathApp = window.AddMathApp || {};
window.AddMathApp.masterBank = window.AddMathApp.masterBank || {};

(function (App) {
  'use strict';

  Object.assign(App.masterBank, {
    // =========================================================================
    // TINGKATAN 4 BAB 6: HUKUM LINEAR (10 SOALAN)
    // =========================================================================
    'f4-c6': [
      {
        code: '6.1', marks: 3,
        topic: { bm: 'Penukaran Hubungan Eksponen kepada Bentuk Linear', en: 'Linearizing Exponential Relations' },
        q: {
          bm: 'Tukarkan persamaan tak linear $y = ab^x$, dengan keadaan $a$ dan $b$ ialah pemalar, kepada bentuk linear $Y = mX + c$. Nyatakan $Y$, $X$, kecerunan $m$, dan pintasan-$Y$ iaitu $c$. [3m]',
          en: 'Convert the non-linear equation $y = ab^x$, where $a$ and $b$ are constants, into the linear form $Y = mX + c$. State $Y$, $X$, gradient $m$, and $Y$-intercept $c$. [3m]'
        },
        mistakes: {
          bm: ['Membawa eksponen $x$ ke hadapan keseluruhan hasil darab: menulis $\\log_{10}(ab^x) = x\\log_{10}(ab)$ bukannya memecahkan $\\log_{10} a + x\\log_{10} b$ dahulu.'],
          en: ['Bringing $x$ in front of the entire product: writing $\\log_{10}(ab^x) = x\\log_{10}(ab)$ instead of splitting $\\log_{10} a + x\\log_{10} b$ first.']
        },
        scheme: [
          { badge: 'K1', bm: 'Ambil $\\log_{10}$ kedua-dua belah: $\\log_{10} y = \\log_{10}(ab^x) = \\log_{10} a + (\\log_{10} b)x$.', en: 'Take $\\log_{10}$ on both sides: $\\log_{10} y = (\\log_{10} b)x + \\log_{10} a$.' },
          { badge: 'N1', bm: '$Y = \\log_{10} y$, $\\;X = x$.', en: '$Y = \\log_{10} y$, $\\;X = x$.' },
          { badge: 'N1', bm: '$m = \\log_{10} b$, $\\;c = \\log_{10} a$.', en: '$m = \\log_{10} b$, $\\;c = \\log_{10} a$.' }
        ]
      },
      {
        code: '6.2', marks: 3,
        topic: { bm: 'Penukaran Persamaan Pecahan kepada Bentuk Linear', en: 'Linearizing Fractional Equations' },
        q: {
          bm: 'Tunjukkan bagaimana persamaan $y = \\frac{p}{x} + qx$ boleh menghasilkan garis lurus apabila $xy$ diplotkan melawan $x^2$, dan nyatakan kecerunan serta pintasan mencancang. [3m]',
          en: 'Show how $y = \\frac{p}{x} + qx$ yields a straight line when $xy$ is plotted against $x^2$, and state its gradient and vertical intercept. [3m]'
        },
        mistakes: {
          bm: ['Mendarab hanya satu sebutan di sebelah kanan dengan $x$ lalu menulis $xy = p + qx$ bukannya $xy = p + qx^2$.'],
          en: ['Multiplying only one RHS term by $x$ and writing $xy = p + qx$ instead of $xy = p + qx^2$.']
        },
        scheme: [
          { badge: 'K1', bm: 'Darab semua sebutan dengan $x$: $xy = qx^2 + p$.', en: 'Multiply every term by $x$: $xy = qx^2 + p$.' },
          { badge: 'N1', bm: 'Bandingkan $Y = mX + c$ dengan $Y = xy$ dan $X = x^2$: kecerunan $m = q$, pintasan mencancang $c = p$.', en: 'With $Y = xy$ and $X = x^2$: gradient $m = q$, vertical intercept $c = p$.' }
        ]
      },
      {
        code: '6.3', marks: 4,
        topic: { bm: 'Mencari Pemalar daripada Dua Titik Graf Penyudahan Linear', en: 'Finding Constants from Two Points on a Linearized Graph' },
        q: {
          bm: 'Pemboleh ubah $x$ dan $y$ dihubungkan oleh $y = hx^2 + kx$. Graf garis lurus $\\frac{y}{x}$ melawan $x$ melalui titik $(2, 7)$ dan $(6, 15)$. Cari nilai pemalar $h$ dan $k$. [4m]',
          en: 'Variables $x$ and $y$ are related by $y = hx^2 + kx$. A straight-line graph of $\\frac{y}{x}$ against $x$ passes through $(2, 7)$ and $(6, 15)$. Find constants $h$ and $k$. [4m]'
        },
        mistakes: {
          bm: ['Tertukar kedudukan kecerunan $h$ dengan pintasan-$Y$ iaitu $k$, atau menggantikan $y = 7$ terus ke dalam persamaan asal sedangkan paksi mencancang ialah $\\frac{y}{x}$.'],
          en: ['Swapping gradient $h$ with intercept $k$, or substituting $y = 7$ directly instead of $\\frac{y}{x} = 7$.']
        },
        scheme: [
          { badge: 'K1', bm: 'Bahagi dengan $x$: $\\frac{y}{x} = hx + k$, maka $m = h$ dan $c = k$.', en: 'Divide by $x$: $\\frac{y}{x} = hx + k$, so $m = h$ and $c = k$.' },
          { badge: 'K1', bm: '$h = \\frac{15 - 7}{6 - 2} = \\frac{8}{4} = 2$.', en: '$h = \\frac{15 - 7}{6 - 2} = 2$.' },
          { badge: 'N1', bm: 'Ganti $(2, 7)$: $7 = 2(2) + k \\implies h = 2,\\; k = 3$.', en: 'Substitute $(2, 7)$: $7 = 2(2) + k \\implies h = 2,\\; k = 3$.' }
        ]
      },
      {
        code: '6.4', marks: 3,
        topic: { bm: 'Membina Semula Persamaan Tak Linear daripada Logaritma', en: 'Reconstructing Non-Linear Equation from Log Graph' },
        q: {
          bm: 'Graf garis lurus $\\log_{10} y$ melawan $\\log_{10} x$ mempunyai persamaan $\\log_{10} y = -2\\log_{10} x + 3$. Ungkapkan $y$ dalam sebutan $x$ dan cari nilai $y$ apabila $x = 10$. [3m]',
          en: 'A straight-line graph of $\\log_{10} y$ against $\\log_{10} x$ has equation $\\log_{10} y = -2\\log_{10} x + 3$. Express $y$ in terms of $x$ and find $y$ when $x = 10$. [3m]'
        },
        mistakes: {
          bm: ['Membuang simbol $\\log_{10}$ secara terus lalu menulis $y = -2x + 3$ atau gagal menukar $3 = \\log_{10} 1000$.'],
          en: ['Dropping $\\log_{10}$ term-by-term to write $y = -2x + 3$, or forgetting $3 = \\log_{10} 1000$.']
        },
        scheme: [
          { badge: 'K1', bm: '$\\log_{10} y = \\log_{10}(x^{-2}) + \\log_{10}(10^3) = \\log_{10}\\left(\\frac{1000}{x^2}\\right)$.', en: '$\\log_{10} y = \\log_{10}\\left(\\frac{1000}{x^2}\\right)$.' },
          { badge: 'N1', bm: '$y = \\frac{1000}{x^2}$; apabila $x = 10$, $y = \\frac{1000}{100} = 10$.', en: '$y = \\frac{1000}{x^2}$; at $x = 10$, $y = 10$.' }
        ]
      },
      {
        code: '6.5', marks: 3,
        topic: { bm: 'Mengesan Titik Terpencil pada Garis Penyudahan Terbaik', en: 'Detecting an Outlier on a Line of Best Fit' },
        q: {
          bm: 'Set data linear $(X, Y)$ direkodkan sebagai $(1, 3.1),\\; (2, 5.0),\\; (3, 6.9),\\; (4, 10.2),\\; (5, 11.0)$. Kenal pasti satu titik terpencil (*outlier*) yang salah direkod dan anggarkan nilai sebenar $Y$ bagi titik itu. [3m]',
          en: 'Linear data $(X, Y)$ is recorded as $(1, 3.1),\\; (2, 5.0),\\; (3, 6.9),\\; (4, 10.2),\\; (5, 11.0)$. Identify the wrongly recorded outlier and estimate its true $Y$ value. [3m]'
        },
        mistakes: {
          bm: ['Memilih titik hujung $(5, 11.0)$ semata-mata kerana nilainya paling besar tanpa menyemak pertambahan malar $\\Delta Y$.'],
          en: ['Picking endpoint $(5, 11.0)$ just because it is largest without checking the constant step $\\Delta Y$.']
        },
        scheme: [
          { badge: 'N1', bm: 'Titik salah rekod ialah $(4, 10.2)$.', en: 'The outlier is $(4, 10.2)$.' },
          { badge: 'K1', bm: 'Kecerunan seragam $m \\approx 1.9$ setiap pertambahan $1$ unit $X$: $Y(4) \\approx 6.9 + 1.9$.', en: 'Uniform gradient $m \\approx 1.9$ per unit $X$: $Y(4) \\approx 6.9 + 1.9$.' },
          { badge: 'N1', bm: 'Anggaran nilai sebenar $Y = 8.8$ (julat diterima $8.75 - 8.95$).', en: 'Estimated true $Y = 8.8$ (accept $8.75 - 8.95$).' }
        ]
      },
      {
        code: '6.6', marks: 3,
        topic: { bm: 'Penyudahan Linear Melibatkan Pembahagian Eksponen', en: 'Linearizing Reciprocal Exponential Functions' },
        q: {
          bm: 'Tunjukkan bahawa $y = \\frac{k}{p^x}$ boleh dijelmakan kepada garis lurus apabila $\\log_{10} y$ diplotkan melawan $x$. Nyatakan kecerunan dan pintasan mencancang. [3m]',
          en: 'Show that $y = \\frac{k}{p^x}$ forms a straight line when $\\log_{10} y$ is plotted against $x$. State its gradient and vertical intercept. [3m]'
        },
        mistakes: {
          bm: ['Tertinggal tanda negatif pada kecerunan kerana menggunakan hukum tambah bukannya hukum tolak bagi pembahagian logaritma.'],
          en: ['Omitting the negative sign on the gradient by adding instead of subtracting logs of a quotient.']
        },
        scheme: [
          { badge: 'K1', bm: '$\\log_{10} y = \\log_{10} k - \\log_{10}(p^x) = (-\\log_{10} p)x + \\log_{10} k$.', en: '$\\log_{10} y = (-\\log_{10} p)x + \\log_{10} k$.' },
          { badge: 'N1', bm: 'Kecerunan $m = -\\log_{10} p$, pintasan mencancang $c = \\log_{10} k$.', en: 'Gradient $m = -\\log_{10} p$, vertical intercept $c = \\log_{10} k$.' }
        ]
      },
      {
        code: '6.7', marks: 4,
        topic: { bm: 'Plot Salingan $\\frac{1}{y}$ Melawan $\\frac{1}{x}$', en: 'Reciprocal Plot $\\frac{1}{y}$ Against $\\frac{1}{x}$' },
        q: {
          bm: 'Diberi $\\frac{a}{y} + \\frac{b}{x} = 1$. Graf $\\frac{1}{y}$ melawan $\\frac{1}{x}$ ialah garis lurus yang melalui $(1, 3)$ dan $(4, 9)$. Cari nilai pemalar $a$ dan $b$. [4m]',
          en: 'Given $\\frac{a}{y} + \\frac{b}{x} = 1$. The graph of $\\frac{1}{y}$ against $\\frac{1}{x}$ passes through $(1, 3)$ and $(4, 9)$. Find constants $a$ and $b$. [4m]'
        },
        mistakes: {
          bm: ['Lupa membahagikan semua sebutan dengan $a$ untuk menjadikan pekali $\\frac{1}{y}$ sama dengan $1$ terlebih dahulu.'],
          en: ['Forgetting to divide every term by $a$ to make the coefficient of $\\frac{1}{y}$ equal to $1$ first.']
        },
        scheme: [
          { badge: 'K1', bm: '$\\frac{1}{y} = -\\frac{b}{a}\\left(\\frac{1}{x}\\right) + \\frac{1}{a}$.', en: '$\\frac{1}{y} = -\\frac{b}{a}\\left(\\frac{1}{x}\\right) + \\frac{1}{a}$.' },
          { badge: 'K1', bm: '$m = \\frac{9 - 3}{4 - 1} = 2$ dan $3 = 2(1) + c \\implies c = 1$.', en: '$m = 2$ and $c = 1$.' },
          { badge: 'N1', bm: '$\\frac{1}{a} = 1 \\implies a = 1$; $\\;-\\frac{b}{1} = 2 \\implies b = -2$.', en: '$a = 1,\\; b = -2$.' }
        ]
      },
      {
        code: '6.8', marks: 4,
        topic: { bm: 'Ungkapan $y$ daripada Graf $y\\sqrt{x}$ Melawan $x^2$', en: 'Expressing $y$ from a Graph of $y\\sqrt{x}$ vs $x^2$' },
        q: {
          bm: 'Graf garis lurus $y\\sqrt{x}$ melawan $x^2$ mempunyai kecerunan $-1.5$ dan pintasan-$Y$ bernilai $12$. Ungkapkan $y$ dalam sebutan $x$. [4m]',
          en: 'A straight-line graph of $y\\sqrt{x}$ against $x^2$ has gradient $-1.5$ and $Y$-intercept $12$. Express $y$ in terms of $x$. [4m]'
        },
        mistakes: {
          bm: ['Tersilap hukum indeks semasa membahagi $x^2$ dengan $\\sqrt{x} = x^{1/2}$: menulis $x^4$ bukannya $x^{3/2} = x\\sqrt{x}$.'],
          en: ['Index slip dividing $x^2$ by $\\sqrt{x}$: writing $x^4$ instead of $x^{3/2} = x\\sqrt{x}$.']
        },
        scheme: [
          { badge: 'K1', bm: 'Bentuk linear: $y\\sqrt{x} = -1.5x^2 + 12$.', en: 'Linear equation: $y\\sqrt{x} = -1.5x^2 + 12$.' },
          { badge: 'K1', bm: 'Bahagi setiap sebutan dengan $\\sqrt{x}$: $y = -\\frac{3}{2}\\left(\\frac{x^2}{x^{1/2}}\\right) + \\frac{12}{\\sqrt{x}}$.', en: 'Divide every term by $\\sqrt{x}$.' },
          { badge: 'N1', bm: '$y = -\\frac{3}{2}x\\sqrt{x} + \\frac{12}{\\sqrt{x}}$ (atau $y = -1.5x^{3/2} + 12x^{-1/2}$).', en: '$y = -\\frac{3}{2}x\\sqrt{x} + \\frac{12}{\\sqrt{x}}$.' }
        ]
      },
      {
        code: '6.9', marks: 3,
        topic: { bm: 'Hukum Kuasa $y = 5x^n$ pada Paksi Logaritma', en: 'Power Law $y = 5x^n$ on Log-Log Axes' },
        q: {
          bm: 'Persamaan $y = 5x^n$ menghasilkan garis lurus berkecerunan $3$ apabila $\\log_{10} y$ diplotkan melawan $\\log_{10} x$. Cari nilai $n$ dan pintasan mencancang graf tersebut. [3m]',
          en: 'The equation $y = 5x^n$ yields a straight line of gradient $3$ when $\\log_{10} y$ is plotted against $\\log_{10} x$. Find $n$ and the vertical intercept. [3m]'
        },
        mistakes: {
          bm: ['Menyatakan pintasan mencancang terus sebagai $5$ dan bukannya $\\log_{10} 5 \\approx 0.6990$.'],
          en: ['Stating the vertical intercept as $5$ instead of $\\log_{10} 5 \\approx 0.6990$.']
        },
        scheme: [
          { badge: 'K1', bm: '$\\log_{10} y = n\\log_{10} x + \\log_{10} 5$.', en: '$\\log_{10} y = n\\log_{10} x + \\log_{10} 5$.' },
          { badge: 'N1', bm: 'Nilai $n = 3$; pintasan mencancang $c = \\log_{10} 5 \\approx 0.6990$.', en: '$n = 3$; vertical intercept $c = \\log_{10} 5 \\approx 0.6990$.' }
        ]
      },
      {
        code: '6.10', marks: 4,
        topic: { bm: 'Aplikasi Hukum Kuasa Dua Songsang Keamatan Cahaya', en: 'Inverse-Square Law Application in Physics' },
        q: {
          bm: 'Keamatan cahaya $I$ pada jarak $d\\text{ m}$ diberi oleh $I = \\frac{k}{d^2}$. Eksperimen mendapati apabila $d = 2,\\; I = 25$ dan apabila $d = 5,\\; I = 4$. Nyatakan paksi-paksi linear yang menghasilkan garis lurus melalui asalan, dan cari nilai $k$. [4m]',
          en: 'Light intensity $I$ at distance $d\\text{ m}$ obeys $I = \\frac{k}{d^2}$. Given $I = 25$ at $d = 2$ and $I = 4$ at $d = 5$, state the axes that give a line through the origin and find $k$. [4m]'
        },
        mistakes: {
          bm: ['Mencadangkan plot $I$ melawan $d^2$ (yang masih melengkung hiperbola) bukannya $I$ melawan $\\frac{1}{d^2}$.'],
          en: ['Suggesting plotting $I$ against $d^2$ (still curved) instead of $I$ against $\\frac{1}{d^2}$.']
        },
        scheme: [
          { badge: 'K1', bm: 'Tulis $I = k\\left(\\frac{1}{d^2}\\right) + 0$: plot paksi-$Y = I$ melawan paksi-$X = \\frac{1}{d^2}$ (melalui asalan kerana $c = 0$).', en: 'Plot $Y = I$ against $X = \\frac{1}{d^2}$ (passes through origin since $c = 0$).' },
          { badge: 'N1', bm: 'Kecerunan $k = \\frac{25 - 4}{\\frac{1}{4} - \\frac{1}{25}} = \\frac{21}{0.21} = 100$.', en: 'Gradient $k = \\frac{25}{0.25} = 100$.' }
        ]
      }
    ],

    // =========================================================================
    // TINGKATAN 4 BAB 7: GEOMETRI KOORDINAT (10 SOALAN)
    // =========================================================================
    'f4-c7': [
      {
        code: '7.1', marks: 3,
        topic: { bm: 'Pembahagian Tembereng Garis Mengikut Nisbah $m : n$', en: 'Internal Division of a Line Segment in Ratio $m : n$' },
        q: {
          bm: 'Titik $P$ membahagikan tembereng garis yang menyambungkan $A(-2, 3)$ dan $B(8, -2)$ secara dalaman dengan nisbah $AP : PB = 2 : 3$. Cari koordinat titik $P$. [3m]',
          en: 'Point $P$ divides the line segment joining $A(-2, 3)$ and $B(8, -2)$ internally in the ratio $AP : PB = 2 : 3$. Find the coordinates of $P$. [3m]'
        },
        mistakes: {
          bm: ['Tidak mendarab silang nisbah: mendarab $m = 2$ dengan koordinat $A$ dan $n = 3$ dengan koordinat $B$ secara terus.'],
          en: ['Forgetting to cross-multiply the ratio weights: multiplying $2$ with $A$ and $3$ with $B$ directly.']
        },
        scheme: [
          { badge: 'K1', bm: '$P = \\left(\\frac{3(-2) + 2(8)}{2 + 3},\\; \\frac{3(3) + 2(-2)}{2 + 3}\\right) = \\left(\\frac{10}{5},\\; \\frac{5}{5}\\right)$.', en: '$P = \\left(\\frac{3(-2) + 2(8)}{5},\\; \\frac{3(3) + 2(-2)}{5}\\right)$.' },
          { badge: 'N1', bm: '$P(2, 1)$.', en: '$P(2, 1)$.' }
        ]
      },
      {
        code: '7.2', marks: 3,
        topic: { bm: 'Persamaan Garis Lurus Serenjang', en: 'Equation of a Perpendicular Line' },
        q: {
          bm: 'Garis lurus $L_1$ mempunyai persamaan $2x + 3y = 6$. Garis lurus $L_2$ berserenjang dengan $L_1$ dan melalui titik $(4, -1)$. Cari persamaan $L_2$. [3m]',
          en: 'Line $L_1$ has equation $2x + 3y = 6$. Line $L_2$ is perpendicular to $L_1$ and passes through $(4, -1)$. Find the equation of $L_2$. [3m]'
        },
        mistakes: {
          bm: ['Membaca kecerunan $L_1$ terus sebagai $2$ tanpa menyusun kepada bentuk $y = -\\frac{2}{3}x + 2$ terlebih dahulu.'],
          en: ['Reading the gradient of $L_1$ as $2$ without rearranging into $y = -\\frac{2}{3}x + 2$ first.']
        },
        scheme: [
          { badge: 'K1', bm: '$y = -\\frac{2}{3}x + 2 \\implies m_1 = -\\frac{2}{3}$; syarat $m_1 m_2 = -1 \\implies m_2 = \\frac{3}{2}$.', en: '$m_1 = -\\frac{2}{3} \\implies m_2 = \\frac{3}{2}$.' },
          { badge: 'N1', bm: '$y - (-1) = \\frac{3}{2}(x - 4) \\implies y = \\frac{3}{2}x - 7$ (atau $3x - 2y - 14 = 0$).', en: '$y = \\frac{3}{2}x - 7$ (or $3x - 2y - 14 = 0$).' }
        ]
      },
      {
        code: '7.3', marks: 4,
        topic: { bm: 'Pembahagi Dua Sama Serenjang', en: 'Perpendicular Bisector of a Line Segment' },
        q: {
          bm: 'Cari persamaan pembahagi dua sama serenjang bagi tembereng garis yang menyambungkan titik $P(-1, 5)$ dan $Q(3, 1)$. [4m]',
          en: 'Find the equation of the perpendicular bisector of the line segment joining $P(-1, 5)$ and $Q(3, 1)$. [4m]'
        },
        mistakes: {
          bm: ['Menggantikan titik hujung $P$ atau $Q$ ke dalam persamaan garis serenjang dan bukannya titik tengah $M$.'],
          en: ['Substituting endpoint $P$ or $Q$ into the perpendicular line instead of midpoint $M$.']
        },
        scheme: [
          { badge: 'K1', bm: 'Titik tengah $M = \\left(\\frac{-1+3}{2},\\; \\frac{5+1}{2}\\right) = (1, 3)$.', en: 'Midpoint $M = (1, 3)$.' },
          { badge: 'K1', bm: '$m_{PQ} = \\frac{1 - 5}{3 - (-1)} = -1 \\implies m_\\perp = 1$.', en: '$m_{PQ} = -1 \\implies m_\\perp = 1$.' },
          { badge: 'N1', bm: '$y - 3 = 1(x - 1) \\implies y = x + 2$.', en: '$y = x + 2$.' }
        ]
      },
      {
        code: '7.4', marks: 3,
        topic: { bm: 'Luas Segi Tiga Menggunakan Rumus Tali Kasut', en: 'Area of Triangle via Shoelace Formula' },
        q: {
          bm: 'Hitung luas segi tiga dengan bucu-bucu $A(1, 4)$, $B(-2, -1)$, dan $C(3, -2)$. [3m]',
          en: 'Calculate the area of the triangle with vertices $A(1, 4)$, $B(-2, -1)$, and $C(3, -2)$. [3m]'
        },
        mistakes: {
          bm: ['Lupa mengulang koordinat bucu pertama $A(1, 4)$ pada lajur terakhir susunan tali kasut, atau meninggalkan jawapan luas bertanda negatif.'],
          en: ['Forgetting to repeat starting vertex $A(1, 4)$ at the end of the shoelace array, or leaving a negative area.']
        },
        scheme: [
          { badge: 'K1', bm: '$\\text{Luas} = \\frac{1}{2}\\left|(1(-1) + (-2)(-2) + 3(4)) - (4(-2) + (-1)(3) + (-2)(1))\\right| = \\frac{1}{2}|15 - (-13)|$.', en: '$\\text{Area} = \\frac{1}{2}|15 - (-13)| = \\frac{1}{2}|28|$.' },
          { badge: 'N1', bm: '$14\\text{ unit}^2$.', en: '$14\\text{ unit}^2$.' }
        ]
      },
      {
        code: '7.5', marks: 3,
        topic: { bm: 'Syarat Ketaksegarian / Segaris Tiga Titik', en: 'Collinearity of Three Points' },
        q: {
          bm: 'Diberi titik $P(1, k)$, $Q(3, 5)$, dan $R(7, 13)$ adalah segaris. Cari nilai $k$. [3m]',
          en: 'Given points $P(1, k)$, $Q(3, 5)$, and $R(7, 13)$ are collinear. Find the value of $k$. [3m]'
        },
        mistakes: {
          bm: ['Tersilap tanda semasa mengembangkan rumus luas sifar, sedangkan menyamakan kecerunan $m_{PQ} = m_{QR}$ jauh lebih pantas dan selamat.'],
          en: ['Sign error expanding zero-area determinant instead of equating gradients $m_{PQ} = m_{QR}$.']
        },
        scheme: [
          { badge: 'K1', bm: '$m_{QR} = \\frac{13 - 5}{7 - 3} = 2$; oleh sebab segaris, $\\frac{5 - k}{3 - 1} = 2$.', en: '$m_{QR} = 2 = \\frac{5 - k}{3 - 1}$.' },
          { badge: 'N1', bm: '$5 - k = 4 \\implies k = 1$.', en: '$k = 1$.' }
        ]
      },
      {
        code: '7.6', marks: 3,
        topic: { bm: 'Persamaan Lokus Jarak Malar (Bulatan)', en: 'Equation of Constant-Distance Locus (Circle)' },
        q: {
          bm: 'Titik $P(x, y)$ bergerak dengan keadaan jaraknya dari titik tetap $A(2, -3)$ sentiasa $5\\text{ unit}$. Cari persamaan lokus bagi $P$. [3m]',
          en: 'Point $P(x, y)$ moves such that its distance from fixed point $A(2, -3)$ is always $5\\text{ units}$. Find the equation of the locus of $P$. [3m]'
        },
        mistakes: {
          bm: ['Lupa mengkuasaduakan jejari di sebelah kanan: menulis $(x - 2)^2 + (y + 3)^2 = 5$ bukannya $25$, atau silap tanda $(y - 3)^2$.'],
          en: ['Forgetting to square the radius: writing $= 5$ instead of $= 25$, or writing $(y - 3)^2$ instead of $(y + 3)^2$.']
        },
        scheme: [
          { badge: 'K1', bm: '$(x - 2)^2 + (y - (-3))^2 = 5^2 \\implies (x - 2)^2 + (y + 3)^2 = 25$.', en: '$(x - 2)^2 + (y + 3)^2 = 25$.' },
          { badge: 'N1', bm: '$x^2 + y^2 - 4x + 6y - 12 = 0$.', en: '$x^2 + y^2 - 4x + 6y - 12 = 0$.' }
        ]
      },
      {
        code: '7.7', marks: 4,
        topic: { bm: 'Persamaan Lokus Nisbah Jarak $PA : PB = 2 : 1$', en: 'Locus of Distance Ratio $PA : PB = 2 : 1$' },
        q: {
          bm: 'Titik $P(x, y)$ bergerak dengan keadaan nisbah jaraknya dari $A(-1, 2)$ dan $B(2, -1)$ ialah $PA : PB = 2 : 1$. Cari persamaan lokus bagi $P$. [4m]',
          en: 'Point $P(x, y)$ moves such that its distances from $A(-1, 2)$ and $B(2, -1)$ satisfy $PA : PB = 2 : 1$. Find the locus of $P$. [4m]'
        },
        mistakes: {
          bm: ['Lupa mengkuasaduakan pemalar nisbah $2$ semasa membuang punca kuasa dua: menulis $PA^2 = 2PB^2$ bukannya $PA^2 = 4PB^2$!'],
          en: ['Forgetting to square the ratio factor $2$ when squaring both sides: writing $PA^2 = 2PB^2$ instead of $PA^2 = 4PB^2$!']
        },
        scheme: [
          { badge: 'K1', bm: '$PA = 2PB \\implies PA^2 = 4PB^2$: $(x + 1)^2 + (y - 2)^2 = 4[(x - 2)^2 + (y + 1)^2]$.', en: '$(x + 1)^2 + (y - 2)^2 = 4[(x - 2)^2 + (y + 1)^2]$.' },
          { badge: 'K1', bm: '$x^2 + 2x + 1 + y^2 - 4y + 4 = 4x^2 - 16x + 16 + 4y^2 + 8y + 4$.', en: 'Expand both sides cleanly.' },
          { badge: 'N1', bm: '$3x^2 + 3y^2 - 18x + 12y + 15 = 0 \\implies x^2 + y^2 - 6x + 4y + 5 = 0$.', en: '$x^2 + y^2 - 6x + 4y + 5 = 0$.' }
        ]
      },
      {
        code: '7.8', marks: 3,
        topic: { bm: 'Titik Persilangan Dua Garis Lurus', en: 'Intersection Point of Two Straight Lines' },
        q: {
          bm: 'Cari koordinat titik persilangan bagi garis lurus $3x - 2y = 8$ dan $x + 4y = -2$. [3m]',
          en: 'Find the coordinates of the intersection of lines $3x - 2y = 8$ and $x + 4y = -2$. [3m]'
        },
        mistakes: {
          bm: ['Kecuaian tanda semasa menggantikan $x = -2 - 4y$ ke dalam $3x - 2y = 8$.'],
          en: ['Sign slip when substituting $x = -2 - 4y$ into $3x - 2y = 8$.']
        },
        scheme: [
          { badge: 'K1', bm: 'Ganti $x = -2 - 4y$: $3(-2 - 4y) - 2y = 8 \\implies -14y = 14 \\implies y = -1$.', en: '$3(-2 - 4y) - 2y = 8 \\implies y = -1$.' },
          { badge: 'N1', bm: '$x = -2 - 4(-1) = 2 \\implies (2, -1)$.', en: 'Intersection $(2, -1)$.' }
        ]
      },
      {
        code: '7.9', marks: 4,
        topic: { bm: 'Jarak Terpendek dari Titik ke Garis Lurus', en: 'Shortest Distance from a Point to a Line' },
        q: {
          bm: 'Cari jarak terpendek dari titik $A(3, 5)$ ke garis lurus $y = 2x - 6$. [4m]',
          en: 'Find the shortest distance from point $A(3, 5)$ to the line $y = 2x - 6$. [4m]'
        },
        mistakes: {
          bm: ['Mengira jarak ke pintasan-$y$ $(0, -6)$ bukannya mencari kaki serenjang pada garis $y = 2x - 6$.'],
          en: ['Computing distance to $(0, -6)$ instead of the foot of the perpendicular on $y = 2x - 6$.']
        },
        scheme: [
          { badge: 'K1', bm: 'Garis serenjang melalui $A(3,5)$ berkecerunan $-\\frac{1}{2}$: $y - 5 = -\\frac{1}{2}(x - 3) \\implies x + 2y = 13$.', en: 'Perpendicular line through $A(3,5)$: $x + 2y = 13$.' },
          { badge: 'K1', bm: 'Silangkan dengan $y = 2x - 6$: $x + 2(2x - 6) = 13 \\implies 5x = 25 \\implies$ kaki serenjang $(5, 4)$.', en: 'Foot of perpendicular is $(5, 4)$.' },
          { badge: 'N1', bm: '$d = \\sqrt{(5 - 3)^2 + (4 - 5)^2} = \\sqrt{5} \\approx 2.236\\text{ unit}$.', en: '$d = \\sqrt{5} \\approx 2.236\\text{ units}$.' }
        ]
      },
      {
        code: '7.10', marks: 4,
        topic: { bm: 'Luas Poligon Berskala Sebenar ($\\text{m}^2$)', en: 'Scaled Polygon Area in Real Units ($\\text{m}^2$)' },
        q: {
          bm: 'Pelan sebuah taman mempunyai bucu-bucu $P(2, 1)$, $Q(8, 3)$, $R(6, 7)$, dan $S(0, 5)$ mengikut susunan lawan jam. Jika $1\\text{ unit}$ pada paksi mewakili $10\\text{ m}$, hitung luas sebenar taman dalam $\\text{m}^2$. [4m]',
          en: 'A park plan has vertices $P(2, 1)$, $Q(8, 3)$, $R(6, 7)$, and $S(0, 5)$ in anticlockwise order. Given $1\\text{ unit} = 10\\text{ m}$, find the actual park area in $\\text{m}^2$. [4m]'
        },
        mistakes: {
          bm: ['Mendarab luas unit grid dengan faktor skala linear $10$ sahaja dan bukannya faktor skala luas $10^2 = 100$!'],
          en: ['Multiplying the grid area by linear scale $10$ instead of area scale factor $10^2 = 100$!']
        },
        scheme: [
          { badge: 'K1', bm: 'Luas grid $= \\frac{1}{2}|(6 + 56 + 30 + 0) - (8 + 18 + 0 + 10)| = \\frac{1}{2}|92 - 36| = 28\\text{ unit}^2$.', en: 'Grid area $= \\frac{1}{2}|92 - 36| = 28\\text{ unit}^2$.' },
          { badge: 'N1', bm: 'Luas sebenar $= 28 \\times 10^2 = 2800\\text{ m}^2$.', en: 'Actual area $= 28 \\times 100 = 2800\\text{ m}^2$.' }
        ]
      }
    ],

    // =========================================================================
    // TINGKATAN 4 BAB 8: VEKTOR (10 SOALAN)
    // =========================================================================
    'f4-c8': [
      {
        code: '8.1', marks: 3,
        topic: { bm: 'Magnitud dan Vektor Unit', en: 'Magnitude & Unit Vector' },
        q: {
          bm: 'Diberi vektor $\\mathbf{a} = 6\\mathbf{i} - 8\\mathbf{j}$, cari magnitud $|\\mathbf{a}|$ dan vektor unit dalam arah $\\mathbf{a}$. [3m]',
          en: 'Given vector $\\mathbf{a} = 6\\mathbf{i} - 8\\mathbf{j}$, find the magnitude $|\\mathbf{a}|$ and the unit vector in the direction of $\\mathbf{a}$. [3m]'
        },
        mistakes: {
          bm: ['Menekan kalkulator $-8^2 = -64$ tanpa kurungan $(-8)^2 = +64$ di bawah punca kuasa dua.'],
          en: ['Typing $-8^2 = -64$ without brackets instead of $(-8)^2 = +64$ inside the square root.']
        },
        scheme: [
          { badge: 'N1', bm: '$|\\mathbf{a}| = \\sqrt{6^2 + (-8)^2} = \\sqrt{100} = 10$.', en: '$|\\mathbf{a}| = \\sqrt{36 + 64} = 10$.' },
          { badge: 'K1', bm: '$\\hat{\\mathbf{a}} = \\frac{\\mathbf{a}}{|\\mathbf{a}|} = \\frac{6\\mathbf{i} - 8\\mathbf{j}}{10}$.', en: '$\\hat{\\mathbf{a}} = \\frac{6\\mathbf{i} - 8\\mathbf{j}}{10}$.' },
          { badge: 'N1', bm: '$\\hat{\\mathbf{a}} = \\frac{3}{5}\\mathbf{i} - \\frac{4}{5}\\mathbf{j}$ (atau $0.6\\mathbf{i} - 0.8\\mathbf{j}$).', en: '$\\hat{\\mathbf{a}} = \\frac{3}{5}\\mathbf{i} - \\frac{4}{5}\\mathbf{j}$.' }
        ]
      },
      {
        code: '8.2', marks: 3,
        topic: { bm: 'Syarat Dua Vektor Selari', en: 'Condition for Two Parallel Vectors' },
        q: {
          bm: 'Diberi vektor $\\mathbf{u} = 4\\mathbf{i} + k\\mathbf{j}$ dan $\\mathbf{v} = -6\\mathbf{i} + 9\\mathbf{j}$ adalah selari. Cari nilai pemalar $k$. [3m]',
          en: 'Given vectors $\\mathbf{u} = 4\\mathbf{i} + k\\mathbf{j}$ and $\\mathbf{v} = -6\\mathbf{i} + 9\\mathbf{j}$ are parallel. Find constant $k$. [3m]'
        },
        mistakes: {
          bm: ['Menganggap selari bermaksud magnitud sama, atau tersilap tanda semasa membandingkan perkadaran komponen.'],
          en: ['Assuming parallel means equal magnitude, or losing the minus sign when equating component ratios.']
        },
        scheme: [
          { badge: 'K1', bm: '$\\mathbf{u} = \\lambda\\mathbf{v} \\implies 4 = -6\\lambda \\implies \\lambda = -\\frac{2}{3}$ (atau $\\frac{4}{-6} = \\frac{k}{9}$).', en: '$\\frac{4}{-6} = \\frac{k}{9}$.' },
          { badge: 'N1', bm: '$k = 9\\left(-\\frac{2}{3}\\right) = -6$.', en: '$k = -6$.' }
        ]
      },
      {
        code: '8.3', marks: 3,
        topic: { bm: 'Membuktikan Tiga Titik Segaris Menggunakan Vektor', en: 'Proving Collinearity Using Vectors' },
        q: {
          bm: 'Diberi vektor kedudukan $\\vec{OA} = 2\\mathbf{a} + \\mathbf{b}$, $\\vec{OB} = 5\\mathbf{a} + 4\\mathbf{b}$, dan $\\vec{OC} = 11\\mathbf{a} + 10\\mathbf{b}$. Tunjukkan bahawa titik $A$, $B$, dan $C$ adalah segaris. [3m]',
          en: 'Given position vectors $\\vec{OA} = 2\\mathbf{a} + \\mathbf{b}$, $\\vec{OB} = 5\\mathbf{a} + 4\\mathbf{b}$, and $\\vec{OC} = 11\\mathbf{a} + 10\\mathbf{b}$. Show that $A$, $B$, and $C$ are collinear. [3m]'
        },
        mistakes: {
          bm: ['Menambah $\\vec{OA} + \\vec{OB}$ untuk mencari $\\vec{AB}$ bukannya $\\vec{OB} - \\vec{OA}$, atau lupa menyatakan titik sepunya $B$ dalam kesimpulan.'],
          en: ['Adding $\\vec{OA} + \\vec{OB}$ instead of $\\vec{OB} - \\vec{OA}$, or failing to mention the common point $B$.']
        },
        scheme: [
          { badge: 'K1', bm: '$\\vec{AB} = \\vec{OB} - \\vec{OA} = 3\\mathbf{a} + 3\\mathbf{b} = 3(\\mathbf{a} + \\mathbf{b})$; $\\;\\vec{BC} = \\vec{OC} - \\vec{OB} = 6(\\mathbf{a} + \\mathbf{b})$.', en: '$\\vec{AB} = 3(\\mathbf{a} + \\mathbf{b})$ and $\\vec{BC} = 6(\\mathbf{a} + \\mathbf{b})$.' },
          { badge: 'N1', bm: 'Oleh sebab $\\vec{BC} = 2\\vec{AB}$ dan titik $B$ ialah titik sepunya, maka $A$, $B$, dan $C$ adalah segaris.', en: 'Since $\\vec{BC} = 2\\vec{AB}$ with common point $B$, $A$, $B$, and $C$ are collinear.' }
        ]
      },
      {
        code: '8.4', marks: 4,
        topic: { bm: 'Hukum Segi Tiga & Pembahagian Nisbah Vektor', en: 'Triangle Law & Ratio Division of Vectors' },
        q: {
          bm: 'Dalam $\\triangle OAB$, $\\vec{OA} = \\mathbf{a}$ dan $\\vec{OB} = \\mathbf{b}$. Titik $C$ terletak pada garis lurus $AB$ dengan keadaan $AC : CB = 1 : 2$. Ungkapkan $\\vec{OC}$ dalam sebutan $\\mathbf{a}$ dan $\\mathbf{b}$. [4m]',
          en: 'In $\\triangle OAB$, $\\vec{OA} = \\mathbf{a}$ and $\\vec{OB} = \\mathbf{b}$. Point $C$ lies on $AB$ such that $AC : CB = 1 : 2$. Express $\\vec{OC}$ in terms of $\\mathbf{a}$ and $\\mathbf{b}$. [4m]'
        },
        mistakes: {
          bm: ['Menulis $\\vec{AC} = \\frac{1}{2}\\vec{AB}$ sedangkan jumlah bahagian penuh ialah $1 + 2 = 3$, maka $\\vec{AC} = \\frac{1}{3}\\vec{AB}$.'],
          en: ['Writing $\\vec{AC} = \\frac{1}{2}\\vec{AB}$ instead of $\\frac{1}{1+2}\\vec{AB} = \\frac{1}{3}\\vec{AB}$.']
        },
        scheme: [
          { badge: 'K1', bm: '$\\vec{AB} = \\vec{AO} + \\vec{OB} = -\\mathbf{a} + \\mathbf{b}$.', en: '$\\vec{AB} = \\mathbf{b} - \\mathbf{a}$.' },
          { badge: 'K1', bm: '$\\vec{OC} = \\vec{OA} + \\vec{AC} = \\mathbf{a} + \\frac{1}{3}(\\mathbf{b} - \\mathbf{a})$.', en: '$\\vec{OC} = \\mathbf{a} + \\frac{1}{3}(\\mathbf{b} - \\mathbf{a})$.' },
          { badge: 'N1', bm: '$\\vec{OC} = \\frac{2}{3}\\mathbf{a} + \\frac{1}{3}\\mathbf{b}$.', en: '$\\vec{OC} = \\frac{2}{3}\\mathbf{a} + \\frac{1}{3}\\mathbf{b}$.' }
        ]
      },
      {
        code: '8.5', marks: 4,
        topic: { bm: 'Perbandingan Pekali Dua Vektor Tak Selari', en: 'Equating Coefficients of Non-Parallel Vectors' },
        q: {
          bm: 'Diberi vektor tak sifar $\\mathbf{x}$ dan $\\mathbf{y}$ adalah tidak selari. Jika $(2h - 1)\\mathbf{x} + 4\\mathbf{y} = 5\\mathbf{x} + (k + 2)\\mathbf{y}$, cari nilai pemalar $h$ dan $k$. [4m]',
          en: 'Non-zero vectors $\\mathbf{x}$ and $\\mathbf{y}$ are non-parallel. Given $(2h - 1)\\mathbf{x} + 4\\mathbf{y} = 5\\mathbf{x} + (k + 2)\\mathbf{y}$, find constants $h$ and $k$. [4m]'
        },
        mistakes: {
          bm: ['Mencampuradukkan pekali $\\mathbf{x}$ dan $\\mathbf{y}$ dalam satu persamaan tunggal bukannya menyamakan pekali sepadan secara berasingan.'],
          en: ['Mixing $\\mathbf{x}$ and $\\mathbf{y}$ coefficients in one equation instead of equating corresponding components separately.']
        },
        scheme: [
          { badge: 'K1', bm: 'Bandingkan pekali $\\mathbf{x}$ dan $\\mathbf{y}$: $2h - 1 = 5$ dan $4 = k + 2$.', en: 'Equate coefficients: $2h - 1 = 5$ and $4 = k + 2$.' },
          { badge: 'N1', bm: '$h = 3$ dan $k = 2$.', en: '$h = 3$ and $k = 2$.' }
        ]
      },
      {
        code: '8.6', marks: 4,
        topic: { bm: 'Halaju Paduan Bot & Arus Sungai', en: 'Resultant Velocity of a Boat in a Current' },
        q: {
          bm: 'Sebuah bot bergerak dengan halaju $\\mathbf{v}_b = (8\\mathbf{i} + 6\\mathbf{j})\\text{ m s}^{-1}$ merentasi sungai yang mempunyai halaju arus $\\mathbf{v}_a = (4\\mathbf{i} - 2\\mathbf{j})\\text{ m s}^{-1}$. Cari vektor halaju paduan bot dan laju sebenar bot. [4m]',
          en: 'A boat moves with velocity $\\mathbf{v}_b = (8\\mathbf{i} + 6\\mathbf{j})\\text{ m s}^{-1}$ in a river current $\\mathbf{v}_a = (4\\mathbf{i} - 2\\mathbf{j})\\text{ m s}^{-1}$. Find the resultant velocity vector and actual speed of the boat. [4m]'
        },
        mistakes: {
          bm: ['Keliru antara halaju (kuantiti vektor berarah) dengan laju (magnitud skalar bagi halaju paduan).'],
          en: ['Confusing velocity (vector) with speed (scalar magnitude of resultant velocity).']
        },
        scheme: [
          { badge: 'K1', bm: '$\\mathbf{v} = \\mathbf{v}_b + \\mathbf{v}_a = (8 + 4)\\mathbf{i} + (6 - 2)\\mathbf{j} = (12\\mathbf{i} + 4\\mathbf{j})\\text{ m s}^{-1}$.', en: 'Resultant velocity $\\mathbf{v} = (12\\mathbf{i} + 4\\mathbf{j})\\text{ m s}^{-1}$.' },
          { badge: 'N1', bm: 'Laju $= |\\mathbf{v}| = \\sqrt{12^2 + 4^2} = \\sqrt{160} \\approx 12.65\\text{ m s}^{-1}$.', en: 'Speed $= \\sqrt{160} \\approx 12.65\\text{ m s}^{-1}$.' }
        ]
      },
      {
        code: '8.7', marks: 3,
        topic: { bm: 'Operasi Vektor Lajur dan Magnitud', en: 'Column Vector Arithmetic & Magnitude' },
        q: {
          bm: 'Diberi $\\mathbf{p} = \\binom{3}{-4}$ dan $\\mathbf{q} = \\binom{-1}{2}$, ungkapkan $2\\mathbf{p} - 3\\mathbf{q}$ sebagai vektor lajur dan hitung magnitudnya. [3m]',
          en: 'Given $\\mathbf{p} = \\binom{3}{-4}$ and $\\mathbf{q} = \\binom{-1}{2}$, express $2\\mathbf{p} - 3\\mathbf{q}$ as a column vector and find its magnitude. [3m]'
        },
        mistakes: {
          bm: ['Kecuaian tanda menolak nombor negatif: menulis $6 - 3 = 3$ bukannya $6 - (-3) = 9$.'],
          en: ['Sign slip subtracting negative component: writing $6 - 3 = 3$ instead of $6 - (-3) = 9$.']
        },
        scheme: [
          { badge: 'K1', bm: '$2\\binom{3}{-4} - 3\\binom{-1}{2} = \\binom{6 - (-3)}{-8 - 6} = \\binom{9}{-14}$.', en: '$2\\mathbf{p} - 3\\mathbf{q} = \\binom{9}{-14}$.' },
          { badge: 'N1', bm: 'Magnitud $= \\sqrt{9^2 + (-14)^2} = \\sqrt{277} \\approx 16.64\\text{ unit}$.', en: 'Magnitude $= \\sqrt{277} \\approx 16.64\\text{ units}$.' }
        ]
      },
      {
        code: '8.8', marks: 3,
        topic: { bm: 'Laluan Vektor Poligon Tertutup', en: 'Polygon Path Vector Addition' },
        q: {
          bm: 'Dalam sisi empat $PQRS$, diberi $\\vec{PQ} = \\mathbf{u}$, $\\vec{QR} = \\mathbf{v}$, dan $\\vec{PS} = \\mathbf{w}$. Ungkapkan $\\vec{SR}$ dalam sebutan $\\mathbf{u}$, $\\mathbf{v}$, dan $\\mathbf{w}$. [3m]',
          en: 'In quadrilateral $PQRS$, $\\vec{PQ} = \\mathbf{u}$, $\\vec{QR} = \\mathbf{v}$, and $\\vec{PS} = \\mathbf{w}$. Express $\\vec{SR}$ in terms of $\\mathbf{u}$, $\\mathbf{v}$, and $\\mathbf{w}$. [3m]'
        },
        mistakes: {
          bm: ['Tidak menukar tanda vektor songsang $\\vec{SP} = -\\vec{PS} = -\\mathbf{w}$ semasa membina rantaian dari $S$ ke $R$.'],
          en: ['Failing to negate $\\vec{SP} = -\\vec{PS} = -\\mathbf{w}$ along the path from $S$ to $R$.']
        },
        scheme: [
          { badge: 'K1', bm: '$\\vec{SR} = \\vec{SP} + \\vec{PQ} + \\vec{QR} = -\\vec{PS} + \\vec{PQ} + \\vec{QR}$.', en: '$\\vec{SR} = \\vec{SP} + \\vec{PQ} + \\vec{QR}$.' },
          { badge: 'N1', bm: '$\\vec{SR} = -\\mathbf{w} + \\mathbf{u} + \\mathbf{v} = \\mathbf{u} + \\mathbf{v} - \\mathbf{w}$.', en: '$\\vec{SR} = \\mathbf{u} + \\mathbf{v} - \\mathbf{w}$.' }
        ]
      },
      {
        code: '8.9', marks: 3,
        topic: { bm: 'Membina Vektor Selari Bermagnitud Tertentu & Arah Bertentangan', en: 'Constructing an Opposite Parallel Vector of Given Magnitude' },
        q: {
          bm: 'Diberi $\\mathbf{a} = 3\\mathbf{i} + 4\\mathbf{j}$. Cari vektor $\\mathbf{b}$ yang selari dengan $\\mathbf{a}$, mempunyai magnitud $25\\text{ unit}$, dan bertentangan arah dengan $\\mathbf{a}$. [3m]',
          en: 'Given $\\mathbf{a} = 3\\mathbf{i} + 4\\mathbf{j}$, find vector $\\mathbf{b}$ parallel to $\\mathbf{a}$ with magnitude $25\\text{ units}$ in the opposite direction. [3m]'
        },
        mistakes: {
          bm: ['Mendarab $\\mathbf{a}$ terus dengan $25$ tanpa membahagi magnitud asal $|\\mathbf{a}| = 5$, atau tertinggal tanda negatif bagi arah bertentangan.'],
          en: ['Multiplying $\\mathbf{a}$ by $25$ without dividing by $|\\mathbf{a}| = 5$, or omitting the minus sign for opposite direction.']
        },
        scheme: [
          { badge: 'K1', bm: '$|\\mathbf{a}| = 5 \\implies \\hat{\\mathbf{a}} = \\frac{3\\mathbf{i} + 4\\mathbf{j}}{5}$.', en: '$\\hat{\\mathbf{a}} = \\frac{3\\mathbf{i} + 4\\mathbf{j}}{5}$.' },
          { badge: 'N1', bm: '$\\mathbf{b} = -25\\hat{\\mathbf{a}} = -15\\mathbf{i} - 20\\mathbf{j}$.', en: '$\\mathbf{b} = -15\\mathbf{i} - 20\\mathbf{j}$.' }
        ]
      },
      {
        code: '8.10', marks: 4,
        topic: { bm: 'Bearing Tiga Digit Halaju Paduan Kapal Terbang', en: 'Three-Digit Bearing of Aircraft Resultant Velocity' },
        q: {
          bm: 'Sebuah kapal terbang menghala ke Utara dengan kelajuan $200\\text{ km j}^{-1}$, manakala angin bertiup dari Barat ke Timur dengan kelajuan $50\\text{ km j}^{-1}$. Hitung bearing gerakan sebenar kapal terbang. [4m]',
          en: 'An aircraft heads due North at $200\\text{ km h}^{-1}$ while wind blows due East at $50\\text{ km h}^{-1}$. Calculate the three-digit bearing of its resultant path. [4m]'
        },
        mistakes: {
          bm: ['Mengukur sudut dari paksi Timur bukannya dari Utara ikut arah jam, atau tidak menulis format bearing tiga digit ($014.04^\\circ$).'],
          en: ['Measuring angle from East instead of clockwise from North, or omitting the leading zero in bearing format ($014.04^\\circ$).']
        },
        scheme: [
          { badge: 'K1', bm: 'Vektor paduan $= 50\\mathbf{i} + 200\\mathbf{j}$; sudut dari Utara: $\\tan\\theta = \\frac{50}{200} = 0.25$.', en: 'Angle clockwise from North: $\\tan\\theta = \\frac{50}{200} = 0.25$.' },
          { badge: 'N1', bm: '$\\theta = 14.04^\\circ \\implies \\text{Bearing} = 014.04^\\circ$ (atau $014^\\circ$).', en: 'Bearing $= 014.04^\\circ$.' }
        ]
      }
    ],

    // =========================================================================
    // TINGKATAN 4 BAB 9: PENYELESAIAN SEGI TIGA (10 SOALAN)
    // =========================================================================
    'f4-c9': [
      {
        code: '9.1', marks: 4,
        topic: { bm: 'Kes Berambiguiti Petua Sinus (SSA)', en: 'Ambiguous Case of the Sine Rule (SSA)' },
        q: {
          bm: 'Dalam $\\triangle ABC$, diberi $\\angle BAC = 35^\\circ$, $AB = 9\\text{ cm}$, dan $BC = 6\\text{ cm}$. Tunjukkan bahawa kes berambiguiti wujud dan cari dua nilai yang mungkin bagi $\\angle ACB$. [4m]',
          en: 'In $\\triangle ABC$, $\\angle BAC = 35^\\circ$, $AB = 9\\text{ cm}$, and $BC = 6\\text{ cm}$. Show that the ambiguous case exists and find the two possible values of $\\angle ACB$. [4m]'
        },
        mistakes: {
          bm: ['Hanya memberikan jawapan sudut tirus kalkulator ($59.36^\\circ$) dan terlupa sudut cakah pelengkap $180^\\circ - 59.36^\\circ = 120.64^\\circ$.'],
          en: ['Giving only the acute calculator angle ($59.36^\\circ$) and missing the obtuse supplement $180^\\circ - 59.36^\\circ = 120.64^\\circ$.']
        },
        scheme: [
          { badge: 'N1', bm: 'Tinggi tegak $h = 9\\sin 35^\\circ = 5.162\\text{ cm}$. Oleh sebab $5.162 < 6 < 9$ ($h < a < c$), dua segi tiga berbeza wujud.', en: 'Perpendicular height $h = 9\\sin 35^\\circ = 5.162\\text{ cm}$; since $h < 6 < 9$, ambiguous case exists.' },
          { badge: 'K1', bm: '$\\frac{\\sin\\angle ACB}{9} = \\frac{\\sin 35^\\circ}{6} \\implies \\sin\\angle ACB = 0.8604$.', en: '$\\sin\\angle ACB = \\frac{9\\sin 35^\\circ}{6} = 0.8604$.' },
          { badge: 'N1', bm: '$\\angle ACB = 59.36^\\circ$ atau $180^\\circ - 59.36^\\circ = 120.64^\\circ$.', en: '$\\angle ACB = 59.36^\\circ$ or $120.64^\\circ$.' }
        ]
      },
      {
        code: '9.2', marks: 3,
        topic: { bm: 'Petua Kosinus bagi Sudut Cakah (SAS)', en: 'Cosine Rule with an Obtuse Included Angle (SAS)' },
        q: {
          bm: 'Dalam $\\triangle PQR$, diberi $PQ = 7\\text{ cm}$, $PR = 10\\text{ cm}$, dan $\\angle QPR = 115^\\circ$. Hitung panjang sisi $QR$. [3m]',
          en: 'In $\\triangle PQR$, $PQ = 7\\text{ cm}$, $PR = 10\\text{ cm}$, and $\\angle QPR = 115^\\circ$. Calculate the length of $QR$. [3m]'
        },
        mistakes: {
          bm: ['Tersilap menolak $2(7)(10)\\cos 115^\\circ$ seolah-olah positif sedangkan $\\cos 115^\\circ = -0.4226$ menjadikan sebutan itu tambah!'],
          en: ['Sign error on $-2bc\\cos 115^\\circ$: forgetting $\\cos 115^\\circ < 0$ makes the term positive!']
        },
        scheme: [
          { badge: 'K1', bm: '$QR^2 = 7^2 + 10^2 - 2(7)(10)\\cos 115^\\circ = 149 - (-59.167) = 208.167$.', en: '$QR^2 = 49 + 100 - 140\\cos 115^\\circ = 208.167$.' },
          { badge: 'N1', bm: '$QR = \\sqrt{208.167} = 14.43\\text{ cm}$.', en: '$QR = 14.43\\text{ cm}$.' }
        ]
      },
      {
        code: '9.3', marks: 3,
        topic: { bm: 'Luas Segi Tiga Menggunakan Sudut Kandung', en: 'Area of Triangle Using Included Angle' },
        q: {
          bm: 'Diberi $XY = 8\\text{ cm}$, $YZ = 11\\text{ cm}$, dan sudut kandung $\\angle XYZ = 64^\\circ$. Hitung luas $\\triangle XYZ$. [3m]',
          en: 'Given $XY = 8\\text{ cm}$, $YZ = 11\\text{ cm}$, and included angle $\\angle XYZ = 64^\\circ$, find the area of $\\triangle XYZ$. [3m]'
        },
        mistakes: {
          bm: ['Menggunakan $\\cos 64^\\circ$ dan bukannya $\\sin 64^\\circ$ dalam rumus luas $\\frac{1}{2}ab\\sin C$.'],
          en: ['Using $\\cos 64^\\circ$ instead of $\\sin 64^\\circ$ in $\\frac{1}{2}ab\\sin C$.']
        },
        scheme: [
          { badge: 'K1', bm: '$\\text{Luas} = \\frac{1}{2}(8)(11)\\sin 64^\\circ$.', en: '$\\text{Area} = \\frac{1}{2}(8)(11)\\sin 64^\\circ$.' },
          { badge: 'N1', bm: '$39.55\\text{ cm}^2$.', en: '$39.55\\text{ cm}^2$.' }
        ]
      },
      {
        code: '9.4', marks: 3,
        topic: { bm: 'Rumus Heron Apabila Tiga Sisi Diberi (SSS)', en: 'Heron\'s Formula Given Three Sides (SSS)' },
        q: {
          bm: 'Sebuah segi tiga mempunyai panjang sisi $5\\text{ cm}$, $7\\text{ cm}$, dan $8\\text{ cm}$. Hitung luasnya menggunakan Rumus Heron. [3m]',
          en: 'A triangle has sides $5\\text{ cm}$, $7\\text{ cm}$, and $8\\text{ cm}$. Calculate its area using Heron\'s Formula. [3m]'
        },
        mistakes: {
          bm: ['Menggunakan perimeter penuh $20$ sebagai $s$ tanpa membahagikannya dengan $2$ untuk mendapatkan semi-perimeter $s = 10$.'],
          en: ['Using full perimeter $20$ instead of semi-perimeter $s = \\frac{5+7+8}{2} = 10$.']
        },
        scheme: [
          { badge: 'K1', bm: '$s = \\frac{5 + 7 + 8}{2} = 10$; $\\;\\text{Luas} = \\sqrt{10(10 - 5)(10 - 7)(10 - 8)} = \\sqrt{300}$.', en: '$s = 10$; $\\;\\text{Area} = \\sqrt{10(5)(3)(2)} = \\sqrt{300}$.' },
          { badge: 'N1', bm: '$17.32\\text{ cm}^2$ (atau $10\\sqrt{3}\\text{ cm}^2$).', en: '$17.32\\text{ cm}^2$.' }
        ]
      },
      {
        code: '9.5', marks: 5,
        topic: { bm: 'Geometri Tiga Dimensi: Piramid Tegak', en: '3D Geometry: Right Rectangular Pyramid' },
        q: {
          bm: 'Sebuah piramid tegak mempunyai tapak segi empat tepat $ABCD$ berukuran $8\\text{ cm} \\times 6\\text{ cm}$. Puncak $V$ berada $12\\text{ cm}$ tegak di atas pusat tapak $M$. Cari panjang tepi condong $VA$ dan sudut antara $VA$ dengan tapak $ABCD$. [5m]',
          en: 'A right pyramid has a rectangular base $ABCD$ measuring $8\\text{ cm} \\times 6\\text{ cm}$. Apex $V$ is $12\\text{ cm}$ vertically above center $M$. Find slant edge $VA$ and the angle between $VA$ and base $ABCD$. [5m]'
        },
        mistakes: {
          bm: ['Mengambil jarak $MA = 4\\text{ cm}$ (separuh sisi) bukannya separuh pepenjuru tapak $\\frac{1}{2}\\sqrt{8^2 + 6^2} = 5\\text{ cm}$.'],
          en: ['Taking $MA = 4\\text{ cm}$ (half a side) instead of half the base diagonal $\\frac{1}{2}\\sqrt{8^2 + 6^2} = 5\\text{ cm}$.']
        },
        scheme: [
          { badge: 'K1', bm: 'Pepenjuru $AC = \\sqrt{8^2 + 6^2} = 10\\text{ cm} \\implies MA = 5\\text{ cm}$.', en: '$AC = 10\\text{ cm} \\implies MA = 5\\text{ cm}$.' },
          { badge: 'N1', bm: '$VA = \\sqrt{12^2 + 5^2} = \\sqrt{169} = 13\\text{ cm}$.', en: '$VA = 13\\text{ cm}$.' },
          { badge: 'K1', bm: '$\\tan\\angle VAM = \\frac{12}{5} = 2.4$.', en: '$\\tan\\angle VAM = \\frac{12}{5} = 2.4$.' },
          { badge: 'N1', bm: '$\\angle VAM = 67.38^\\circ$.', en: '$\\angle VAM = 67.38^\\circ$.' }
        ]
      },
      {
        code: '9.6', marks: 3,
        topic: { bm: 'Mencari Sudut Terbesar dalam Segi Tiga', en: 'Finding the Largest Angle in a Triangle' },
        q: {
          bm: 'Sebuah segi tiga mempunyai sisi-sisi $4\\text{ cm}$, $6\\text{ cm}$, dan $8\\text{ cm}$. Hitung sudut terbesar dalam segi tiga tersebut. [3m]',
          en: 'A triangle has sides $4\\text{ cm}$, $6\\text{ cm}$, and $8\\text{ cm}$. Calculate the largest angle in the triangle. [3m]'
        },
        mistakes: {
          bm: ['Tidak menyedari sudut terbesar sentiasa bertentangan dengan sisi paling panjang ($8\\text{ cm}$), lalu mengira sudut yang salah.'],
          en: ['Not targeting the angle opposite the longest side ($8\\text{ cm}$).']
        },
        scheme: [
          { badge: 'K1', bm: '$\\cos\\theta = \\frac{4^2 + 6^2 - 8^2}{2(4)(6)} = \\frac{-12}{48} = -0.25$.', en: '$\\cos\\theta = \\frac{16 + 36 - 64}{48} = -0.25$.' },
          { badge: 'N1', bm: '$\\theta = 104.48^\\circ$.', en: '$\\theta = 104.48^\\circ$.' }
        ]
      },
      {
        code: '9.7', marks: 4,
        topic: { bm: 'Gabungan Petua Kosinus & Petua Sinus pada Sisi Empat', en: 'Combined Cosine & Sine Rules in a Quadrilateral' },
        q: {
          bm: 'Dalam sisi empat $ABCD$, diberi $AB = 6\\text{ cm}$, $AD = 5\\text{ cm}$, $\\angle BAD = 60^\\circ$, $BC = 7\\text{ cm}$, dan $\\angle BDC = 40^\\circ$ (tirus). Cari panjang pepenjuru $BD$ dan sudut tirus $\\angle BCD$. [4m]',
          en: 'In quadrilateral $ABCD$, $AB = 6\\text{ cm}$, $AD = 5\\text{ cm}$, $\\angle BAD = 60^\\circ$, $BC = 7\\text{ cm}$, and $\\angle BDC = 40^\\circ$. Find diagonal $BD$ and acute angle $\\angle BCD$. [4m]'
        },
        mistakes: {
          bm: ['Cuba menggunakan Petua Sinus pada $\\triangle ABD$ walaupun tiada pasangan sisi-sudut bertentangan yang lengkap.'],
          en: ['Attempting the Sine Rule in $\\triangle ABD$ without an opposite side-angle pair.']
        },
        scheme: [
          { badge: 'K1', bm: '$BD^2 = 6^2 + 5^2 - 2(6)(5)\\cos 60^\\circ = 31 \\implies BD = \\sqrt{31} \\approx 5.568\\text{ cm}$.', en: '$BD = \\sqrt{31} \\approx 5.568\\text{ cm}$.' },
          { badge: 'K1', bm: 'Dalam $\\triangle BCD$: $\\frac{\\sin\\angle BCD}{5.568} = \\frac{\\sin 40^\\circ}{7} \\implies \\sin\\angle BCD = 0.5113$.', en: '$\\sin\\angle BCD = \\frac{5.568\\sin 40^\\circ}{7} = 0.5113$.' },
          { badge: 'N1', bm: '$\\angle BCD = 30.75^\\circ$.', en: '$\\angle BCD = 30.75^\\circ$.' }
        ]
      },
      {
        code: '9.8', marks: 4,
        topic: { bm: 'Sudut Antara Pepenjuru Ruang Kuboid dengan Tapak', en: 'Angle Between Cuboid Space Diagonal and Base' },
        q: {
          bm: 'Sebuah kuboid mempunyai tapak mengufuk $ABCD$ berukuran $10\\text{ cm} \\times 6\\text{ cm}$ dan tinggi tegak $AE = 4\\text{ cm}$ ($E$ tegak di atas $A$). Hitung sudut antara garis $EC$ dengan satah tapak $ABCD$. [4m]',
          en: 'A cuboid has horizontal base $ABCD$ ($10\\text{ cm} \\times 6\\text{ cm}$) and vertical height $AE = 4\\text{ cm}$ ($E$ above $A$). Find the angle between $EC$ and base $ABCD$. [4m]'
        },
        mistakes: {
          bm: ['Salah memilih unjuran ortogon bagi $EC$ pada tapak sebagai $AB$ atau $BC$ bukannya pepenjuru tapak $AC$.'],
          en: ['Identifying the orthogonal projection of $EC$ on the base as $AB$ or $BC$ instead of diagonal $AC$.']
        },
        scheme: [
          { badge: 'K1', bm: 'Unjuran ortogon ialah $AC = \\sqrt{10^2 + 6^2} = \\sqrt{136} \\approx 11.662\\text{ cm}$.', en: 'Base diagonal $AC = \\sqrt{136} \\approx 11.662\\text{ cm}$.' },
          { badge: 'N1', bm: '$\\tan\\angle ECA = \\frac{4}{\\sqrt{136}} \\implies \\angle ECA = 18.93^\\circ$.', en: '$\\angle ECA = 18.93^\\circ$.' }
        ]
      },
      {
        code: '9.9', marks: 4,
        topic: { bm: 'Jumlah Luas Tanah Sisi Empat Tak Sekata', en: 'Total Area of an Irregular Quadrilateral Plot' },
        q: {
          bm: 'Sebidang tanah sisi empat $PQRS$ dibahagikan oleh pepenjuru $PR = 12\\text{ m}$. Diberi luas $\\triangle PQR = 45\\text{ m}^2$, $RS = 8\\text{ m}$, dan $\\angle PRS = 50^\\circ$. Hitung jumlah luas tanah $PQRS$. [4m]',
          en: 'Quadrilateral plot $PQRS$ is split by diagonal $PR = 12\\text{ m}$. Given area of $\\triangle PQR = 45\\text{ m}^2$, $RS = 8\\text{ m}$, and $\\angle PRS = 50^\\circ$, find the total area of $PQRS$. [4m]'
        },
        mistakes: {
          bm: ['Cuba mengira keseluruhan sisi empat serentak tanpa mengira luas $\\triangle PRS$ dan menambahkannya kepada $45\\text{ m}^2$.'],
          en: ['Not computing $\\triangle PRS$ separately and adding it to $45\\text{ m}^2$.']
        },
        scheme: [
          { badge: 'K1', bm: 'Luas $\\triangle PRS = \\frac{1}{2}(12)(8)\\sin 50^\\circ = 36.77\\text{ m}^2$.', en: 'Area of $\\triangle PRS = \\frac{1}{2}(12)(8)\\sin 50^\\circ = 36.77\\text{ m}^2$.' },
          { badge: 'N1', bm: 'Jumlah luas $= 45 + 36.77 = 81.77\\text{ m}^2$.', en: 'Total area $= 81.77\\text{ m}^2$.' }
        ]
      },
      {
        code: '9.10', marks: 4,
        topic: { bm: 'Jarak Tegak Terpendek Bucu ke Sisi Bertentangan', en: 'Shortest Perpendicular Distance from Vertex to Opposite Side' },
        q: {
          bm: 'Dalam $\\triangle ABC$, diberi $AB = 13\\text{ cm}$, $BC = 14\\text{ cm}$, dan $AC = 15\\text{ cm}$. Hitung jarak terpendek dari bucu $B$ ke sisi $AC$. [4m]',
          en: 'In $\\triangle ABC$, $AB = 13\\text{ cm}$, $BC = 14\\text{ cm}$, and $AC = 15\\text{ cm}$. Calculate the shortest distance from vertex $B$ to side $AC$. [4m]'
        },
        mistakes: {
          bm: ['Mengandaikan garis tinggi dari $B$ membahagi dua sama sisi $AC = 15\\text{ cm}$ kepada $7.5\\text{ cm}$, yang palsu kerana segi tiga ini bukan kaki sama!'],
          en: ['Assuming the altitude from $B$ bisects $AC = 15\\text{ cm}$ into $7.5\\text{ cm}$, which fails for a scalene triangle!']
        },
        scheme: [
          { badge: 'K1', bm: 'Semi-perimeter $s = \\frac{13+14+15}{2} = 21$; Rumus Heron: $\\text{Luas} = \\sqrt{21(8)(7)(6)} = 84\\text{ cm}^2$.', en: 'Heron\'s Formula with $s = 21$: $\\text{Area} = 84\\text{ cm}^2$.' },
          { badge: 'N1', bm: '$\\frac{1}{2}(15)h = 84 \\implies h = \\frac{168}{15} = 11.2\\text{ cm}$.', en: '$\\frac{1}{2}(15)h = 84 \\implies h = 11.2\\text{ cm}$.' }
        ]
      }
    ],

    // =========================================================================
    // TINGKATAN 4 BAB 10: NOMBOR INDEKS (10 SOALAN)
    // =========================================================================
    'f4-c10': [
      {
        code: '10.1', marks: 2,
        topic: { bm: 'Pengiraan Asas Indeks Harga', en: 'Basic Price Index Calculation' },
        q: {
          bm: 'Harga sekilogram beras meningkat daripada $\\text{RM }3.20$ pada tahun $2020$ kepada $\\text{RM }4.00$ pada tahun $2024$. Hitung indeks harga beras pada tahun $2024$ berasaskan tahun $2020$. [2m]',
          en: 'The price of $1\\text{ kg}$ of rice rose from $\\text{RM }3.20$ in $2020$ to $\\text{RM }4.00$ in $2024$. Calculate the price index in $2024$ based on $2020$. [2m]'
        },
        mistakes: {
          bm: ['Menyongsangkan pecahan dengan meletakkan harga tahun asas di pengangka: $\\frac{3.20}{4.00} \\times 100 = 80$.'],
          en: ['Inverting the fraction by putting the base-year price on top: $\\frac{3.20}{4.00} \\times 100 = 80$.']
        },
        scheme: [
          { badge: 'K1', bm: '$I_{24/20} = \\frac{Q_{2024}}{Q_{2020}} \\times 100 = \\frac{4.00}{3.20} \\times 100$.', en: '$I_{24/20} = \\frac{4.00}{3.20} \\times 100$.' },
          { badge: 'N1', bm: '$I_{24/20} = 125$.', en: '$I_{24/20} = 125$.' }
        ]
      },
      {
        code: '10.2', marks: 3,
        topic: { bm: 'Mencari Harga Tahun Asas daripada Indeks Harga', en: 'Finding Base-Year Price from Price Index' },
        q: {
          bm: 'Indeks harga sebuah beg sekolah pada tahun $2023$ berasaskan tahun $2019$ ialah $115$. Jika harganya pada tahun $2023$ ialah $\\text{RM }69.00$, cari harganya pada tahun $2019$. [3m]',
          en: 'The price index of a school bag in $2023$ based on $2019$ is $115$. Given its price in $2023$ is $\\text{RM }69.00$, find its price in $2019$. [3m]'
        },
        mistakes: {
          bm: ['Menolak $15\\%$ terus daripada $\\text{RM }69.00$ ($69 \\times 0.85 = \\text{RM }58.65$) bukannya membahagi dengan $1.15$!'],
          en: ['Subtracting $15\\%$ of $\\text{RM }69.00$ ($69 \\times 0.85 = \\text{RM }58.65$) instead of dividing by $1.15$!']
        },
        scheme: [
          { badge: 'K1', bm: '$\\frac{69.00}{P_{2019}} \\times 100 = 115 \\implies P_{2019} = \\frac{6900}{115}$.', en: '$P_{2019} = \\frac{69.00 \\times 100}{115}$.' },
          { badge: 'N1', bm: '$\\text{RM }60.00$.', en: '$\\text{RM }60.00$.' }
        ]
      },
      {
        code: '10.3', marks: 4,
        topic: { bm: 'Indeks Gubahan dengan Pemberat Sudut Carta Pai', en: 'Composite Index Using Pie Chart Sector Angles' },
        q: {
          bm: 'Empat bahan $A, B, C, D$ mempunyai indeks harga $120, 140, 110, 130$ dan diwakili pada carta pai dengan sudut sektor masing-masing $90^\\circ, 120^\\circ, 100^\\circ$, dan $50^\\circ$. Hitung indeks gubahan $\\bar{I}$. [4m]',
          en: 'Four ingredients $A, B, C, D$ have price indices $120, 140, 110, 130$ and pie-chart angles $90^\\circ, 120^\\circ, 100^\\circ$, and $50^\\circ$. Calculate the composite index $\\bar{I}$. [4m]'
        },
        mistakes: {
          bm: ['Membahagikan hasil tambah dengan bilangan bahan ($4$) dan bukannya jumlah pemberat sudut bulatan penuh ($360^\\circ$).'],
          en: ['Dividing by the number of items ($4$) instead of the sum of angle weights ($360^\\circ$).']
        },
        scheme: [
          { badge: 'K1', bm: '$\\bar{I} = \\frac{120(90) + 140(120) + 110(100) + 130(50)}{90 + 120 + 100 + 50} = \\frac{45100}{360}$.', en: '$\\bar{I} = \\frac{45100}{360}$.' },
          { badge: 'N1', bm: '$\\bar{I} = 125.28$.', en: '$\\bar{I} = 125.28$.' }
        ]
      },
      {
        code: '10.4', marks: 4,
        topic: { bm: 'Petua Rantai Penukaran Tahun Asas Indeks', en: 'Chain Rule for Shifting Base Year' },
        q: {
          bm: 'Diberi indeks harga suatu komoditi pada tahun $2020$ berasaskan $2018$ ialah $120$, dan pada tahun $2023$ berasaskan $2020$ ialah $125$. Cari indeks harga pada tahun $2023$ berasaskan $2018$, serta harganya pada $2023$ jika harganya pada $2018$ ialah $\\text{RM }40.00$. [4m]',
          en: 'Given $I_{20/18} = 120$ and $I_{23/20} = 125$, find $I_{23/18}$ and the price in $2023$ if the $2018$ price was $\\text{RM }40.00$. [4m]'
        },
        mistakes: {
          bm: ['Menambah peratus kenaikan secara terus ($20\\% + 25\\% = 45\\% \\implies 145$) bukannya mendarab rantai $\\frac{120 \\times 125}{100} = 150$.'],
          en: ['Adding percentage increases ($20\\% + 25\\% = 45\\% \\implies 145$) instead of chaining $\\frac{120 \\times 125}{100} = 150$.']
        },
        scheme: [
          { badge: 'K1', bm: '$I_{23/18} = \\frac{I_{23/20} \\times I_{20/18}}{100} = \\frac{125 \\times 120}{100}$.', en: '$I_{23/18} = \\frac{125 \\times 120}{100}$.' },
          { badge: 'N1', bm: '$I_{23/18} = 150$; $\\;P_{2023} = 40.00 \\times \\frac{150}{100} = \\text{RM }60.00$.', en: '$I_{23/18} = 150$; $\\;P_{2023} = \\text{RM }60.00$.' }
        ]
      },
      {
        code: '10.5', marks: 4,
        topic: { bm: 'Mencari Pemberat $k$ yang Tidak Diketahui', en: 'Finding an Unknown Weight $k$ from Composite Index' },
        q: {
          bm: 'Tiga komponen $P, Q, R$ mempunyai indeks harga $110, 130, 140$ dan pemberat $3, k, 2$ masing-masing. Jika indeks gubahan ialah $126$, cari nilai $k$. [4m]',
          en: 'Three components $P, Q, R$ have indices $110, 130, 140$ and weights $3, k, 2$. Given the composite index is $126$, find $k$. [4m]'
        },
        mistakes: {
          bm: ['Tertinggal pemboleh ubah $k$ pada penyebut jumlah pemberat $\\sum w_i = 3 + k + 2 = 5 + k$.'],
          en: ['Forgetting to include $k$ in the denominator sum of weights $\\sum w_i = 5 + k$.']
        },
        scheme: [
          { badge: 'K1', bm: '$\\frac{110(3) + 130k + 140(2)}{3 + k + 2} = 126 \\implies \\frac{610 + 130k}{5 + k} = 126$.', en: '$\\frac{610 + 130k}{5 + k} = 126$.' },
          { badge: 'N1', bm: '$610 + 130k = 630 + 126k \\implies 4k = 20 \\implies k = 5$.', en: '$4k = 20 \\implies k = 5$.' }
        ]
      },
      {
        code: '10.6', marks: 3,
        topic: { bm: 'Kenaikan Diikuti Penurunan Peratus Berantai', en: 'Successive Percentage Increase and Decrease' },
        q: {
          bm: 'Kos pengeluaran suatu alatan meningkat $10\\%$ dari tahun $2021$ ke $2022$, kemudian menyusut $5\\%$ dari tahun $2022$ ke $2023$. Cari indeks kos pada tahun $2023$ berasaskan $2021$. [3m]',
          en: 'Production cost rose $10\\%$ from $2021$ to $2022$, then dropped $5\\%$ from $2022$ to $2023$. Find the cost index in $2023$ based on $2021$. [3m]'
        },
        mistakes: {
          bm: ['Menolak peratus secara naif ($+10\\% - 5\\% = +5\\% \\implies 105$) tanpa mengambil kira asas tahun $2022$ yang berbeza.'],
          en: ['Naively computing $10\\% - 5\\% = 5\\% \\implies 105$ instead of chaining $110$ and $95$.']
        },
        scheme: [
          { badge: 'K1', bm: '$I_{22/21} = 110$ dan $I_{23/22} = 95 \\implies I_{23/21} = \\frac{110 \\times 95}{100}$.', en: '$I_{23/21} = \\frac{110 \\times 95}{100}$.' },
          { badge: 'N1', bm: '$I_{23/21} = 104.5$.', en: '$I_{23/21} = 104.5$.' }
        ]
      },
      {
        code: '10.7', marks: 4,
        topic: { bm: 'Indeks Gubahan Berdasarkan Nisbah Kuantiti', en: 'Composite Index Using Ratio Weights' },
        q: {
          bm: 'Sebuah kedai roti mencampurkan tepung, gula, dan mentega mengikut nisbah $5 : 3 : 2$. Indeks harga ketiga-tiga bahan ialah $115$, $125$, dan $105$. Hitung indeks gubahan kos bahan. [4m]',
          en: 'A bakery mixes flour, sugar, and butter in ratio $5 : 3 : 2$. Their price indices are $115$, $125$, and $105$. Calculate the composite index. [4m]'
        },
        mistakes: {
          bm: ['Salah menjumlahkan pemberat nisbah $5 + 3 + 2 = 10$ atau tersalah padan pemberat dengan indeks bahan.'],
          en: ['Miscounting total weight $5 + 3 + 2 = 10$ or mismatching weights with indices.']
        },
        scheme: [
          { badge: 'K1', bm: '$\\bar{I} = \\frac{115(5) + 125(3) + 105(2)}{5 + 3 + 2} = \\frac{575 + 375 + 210}{10}$.', en: '$\\bar{I} = \\frac{1160}{10}$.' },
          { badge: 'N1', bm: '$\\bar{I} = 116$.', en: '$\\bar{I} = 116$.' }
        ]
      },
      {
        code: '10.8', marks: 3,
        topic: { bm: 'Aplikasi Indeks Gubahan kepada Jumlah Kos Jualan', en: 'Applying Composite Index to Total Cost' },
        q: {
          bm: 'Indeks gubahan kos pembuatan sebuah kek pada tahun $2024$ berasaskan $2020$ ialah $132$. Jika kos pembuatan sebiji kek pada tahun $2024$ ialah $\\text{RM }39.60$, cari kosnya pada tahun $2020$. [3m]',
          en: 'The composite cost index of making a cake in $2024$ based on $2020$ is $132$. Given the $2024$ cost is $\\text{RM }39.60$, find its cost in $2020$. [3m]'
        },
        mistakes: {
          bm: ['Mendarab $39.60 \\times 1.32$ seolah-olah mencari kos masa hadapan, sedangkan tahun $2020$ ialah penyebut tahun asas.'],
          en: ['Multiplying $39.60 \\times 1.32$ instead of dividing to find the base-year $2020$ cost.']
        },
        scheme: [
          { badge: 'K1', bm: '$\\frac{39.60}{C_{2020}} \\times 100 = 132 \\implies C_{2020} = \\frac{3960}{132}$.', en: '$C_{2020} = \\frac{39.60 \\times 100}{132}$.' },
          { badge: 'N1', bm: '$\\text{RM }30.00$.', en: '$\\text{RM }30.00$.' }
        ]
      },
      {
        code: '10.9', marks: 4,
        topic: { bm: 'Pemberat Peratus Perbelanjaan Bulanan', en: 'Percentage Expenditure Weights' },
        q: {
          bm: 'Perbelanjaan sebuah keluarga terdiri daripada Makanan ($40\\%$), Pengangkutan ($30\\%$), Utiliti ($15\\%$), dan Lain-lain ($15\\%$) dengan indeks harga masing-masing $120, 110, 140$, dan $100$. Hitung indeks gubahan perbelanjaan. [4m]',
          en: 'A family\'s budget is Food ($40\\%$), Transport ($30\\%$), Utilities ($15\\%$), and Others ($15\\%$) with price indices $120, 110, 140$, and $100$. Find the composite index. [4m]'
        },
        mistakes: {
          bm: ['Lupa membahagikan hasil darab peratus dengan jumlah keseluruhan peratus iaitu $100$.'],
          en: ['Forgetting to divide the weighted sum by total percentage $100$.']
        },
        scheme: [
          { badge: 'K1', bm: '$\\bar{I} = \\frac{120(40) + 110(30) + 140(15) + 100(15)}{100} = \\frac{11700}{100}$.', en: '$\\bar{I} = \\frac{11700}{100}$.' },
          { badge: 'N1', bm: '$\\bar{I} = 117$.', en: '$\\bar{I} = 117$.' }
        ]
      },
      {
        code: '10.10', marks: 4,
        topic: { bm: 'Mencari Indeks Harga Satu Bahan daripada Indeks Gubahan', en: 'Finding a Single Item\'s Index from Composite Index' },
        q: {
          bm: 'Indeks gubahan bagi empat bahan $A, B, C, D$ ialah $128$. Diberi pasangan $(I_i, w_i)$ bagi $A(120, 2)$, $B(130, 3)$, $C(140, 1)$, dan $D(I_D, 4)$. Cari nilai $I_D$. [4m]',
          en: 'The composite index for items $A, B, C, D$ is $128$. Given $(I_i, w_i)$ pairs $A(120, 2)$, $B(130, 3)$, $C(140, 1)$, and $D(I_D, 4)$, find $I_D$. [4m]'
        },
        mistakes: {
          bm: ['Kecuaian algebra semasa mengasingkan sebutan $4I_D$ selepas mendarab silang jumlah pemberat $10$.'],
          en: ['Algebraic slip isolating $4I_D$ after multiplying by total weight $10$.']
        },
        scheme: [
          { badge: 'K1', bm: '$\\frac{120(2) + 130(3) + 140(1) + 4I_D}{2 + 3 + 1 + 4} = 128 \\implies \\frac{770 + 4I_D}{10} = 128$.', en: '$\\frac{770 + 4I_D}{10} = 128$.' },
          { badge: 'N1', bm: '$4I_D = 1280 - 770 = 510 \\implies I_D = 127.5$.', en: '$I_D = 127.5$.' }
        ]
      }
    ]
  });
})(window.AddMathApp);
