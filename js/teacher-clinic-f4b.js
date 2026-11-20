/**
 * AddMath Mudah — Klinik Cikgu Pakar & Poster Infografik Visual (Tingkatan 4: Bab 6–10)
 * Dirangka khas dari perspektif Guru Cemerlang Matematik Tambahan KSSM untuk merawat
 * "sakit kepala" sebenar pelajar: kabur konsep, kaku bila baca ayat soalan, dan kecuaian algebra.
 *
 * Struktur modular: App.teacherClinic[chapterId] — disambung terus dengan teacher-clinic-f4a.js & f5a/f5b.
 */
window.AddMathApp = window.AddMathApp || {};
window.AddMathApp.teacherClinic = window.AddMathApp.teacherClinic || {};

(function (App) {
  'use strict';

  const F4B_CLINIC = {
    'f4-c6': {
      poster: 'assets/posters/f4-c6.jpg',
      posterTitle: {
        bm: 'Poster Visual Bab 6: Hukum Linear — Meluruskan Lengkung Kepada Y = mX + c',
        en: 'Chapter 6 Visual Poster: Linear Law — Turning Curves into Straight Lines Y = mX + c'
      },
      vocabBridge: {
        bm: '**Kamus Istilah KSSM/DLP:** *Linearization* = Pelinearan ($Y = mX + c$) • *Non-Linear Relation* = Hubungan Tak Linear • *Line of Best Fit* = Garis Penyuaian Terbaik • *Gradient* = Kecerunan ($m$) • *Vertical Intercept* = Pintasan-$Y$ ($c$) • *Outlier* = Titik Terpencil',
        en: '**KSSM/DLP Glossary:** Pelinearan = *Linearization* ($Y = mX + c$) • Hubungan Tak Linear = *Non-Linear Relation* • Garis Penyuaian Terbaik = *Line of Best Fit* • Kecerunan = *Gradient* ($m$) • Pintasan-$Y$ = *Vertical Intercept* ($c$) • Titik Terpencil = *Outlier*'
      },
      painSummary: {
        bm: 'Pelajar sering membiarkan pemalar tak diketahui ($p, q$) melekat pada paksi $X$ atau $Y$ (**Peraturan Emas:** $Y$ dan $X$ hanya boleh mengandungi pemboleh ubah $x, y$ SAHAJA — pemalar wajib duduk dalam $m$ dan $c$!), salah baca pintasan-$Y$ apabila graf tidak bermula dari $X = 0$, tersilap membuang $\\log_{10}$ terus tanpa antilog ($\\log_{10} c = 2 \\implies c = 10^2 = 100$), serta kaku apabila perlu membina semula $y$ daripada graf garis lurus.',
        en: 'Students often leave unknown constants ($p, q$) inside $X$ or $Y$ (**Golden Rule:** $Y$ and $X$ may contain variables $x, y$ ONLY — constants belong exclusively inside $m$ and $c$!), misread the $Y$-intercept when the $X$-axis does not start at $0$, drop $\\log_{10}$ without taking antilog ($\\log_{10} c = 2 \\implies c = 10^2 = 100$), and freeze when reversing a straight-line graph back into $y$.'
      },
      mentalModels: [
        {
          icon: '👔',
          tag: { bm: 'Analogi Seterika Lengkung (T3 → T4)', en: 'Curve-Ironing Model (F3 → F4)' },
          title: { bm: 'Kenapa Kita Tukar $y, x$ Kepada Huruf Besar $Y = mX + c$?', en: 'Why Transform Curves Into Capital $Y = mX + c$?' },
          desc: {
            bm: 'Ingat semula garis lurus Tingkatan 3 $y = mx + c$: $m$ ialah kecerunan dan $c$ ialah nilai apabila $x = 0$. Melukis lengkung bebas dengan tangan tidak tepat, jadi kita "seterika" lengkung supaya menjadi garis pembaris **$Y = mX + c$**!\n**Peraturan Emas:** kotak huruf besar $Y$ dan $X$ hanya pegang **$x, y$ sahaja**, manakala $m$ dan $c$ pegang **pemalar sahaja**!',
            en: 'Recall Form 3 straight lines $y = mx + c$: $m$ is gradient and $c$ is the value at $x = 0$. Freehand curves are inaccurate, so we "iron" the curve flat into a straight ruler line **$Y = mX + c$**!\n**Golden Rule:** capital boxes $Y$ and $X$ hold **variables $x, y$ ONLY**, while $m$ and $c$ hold **constants ONLY**!'
          }
        },
        {
          icon: '🛠️',
          tag: { bm: '2 Senjata Tukar Garis Lurus', en: '2 Linearization Weapons' },
          title: { bm: 'Bila Bahagi Algebra vs Bila Guna $\\log_{10}$?', en: 'Algebraic Division vs Logarithmic Transformation' },
          desc: {
            bm: '1️⃣ **Ada tanda $+$ atau $-$ polinomial** (seperti $y = ax^2 + bx$): darab atau bahagi semua sebutan dengan $x$ atau $x^2$ supaya satu sebutan jadi pemalar bebas ($\\frac{y}{x} = ax + b$).\n2️⃣ **Satu hasil darab berkuasa** ($y = ab^x$ atau $y = px^n$): ambil **$\\log_{10}$ kedua-dua belah** $\\implies \\log_{10} y = (\\log_{10} b)x + \\log_{10} a$ atau $\\log_{10} y = n\\log_{10} x + \\log_{10} p$!',
            en: '1️⃣ **Terms separated by $+$ or $-$** (like $y = ax^2 + bx$): divide or multiply every term by $x$ or $x^2$ to isolate one pure constant ($\\frac{y}{x} = ax + b$).\n2️⃣ **Single product with a power** ($y = ab^x$ or $y = px^n$): take **$\\log_{10}$ on both sides** $\\implies \\log_{10} y = (\\log_{10} b)x + \\log_{10} a$ or $\\log_{10} y = n\\log_{10} x + \\log_{10} p$!'
          }
        },
        {
          icon: '🔁',
          tag: { bm: 'Hukum Linear Songsang (Graf → y)', en: 'Reverse Linear Law (Graph → y)' },
          title: { bm: 'Dari Graf Garis Lurus Patah Balik Kepada Persamaan $y$!', en: 'Reconstruct Original $y$ From a Straight-Line Graph!' },
          desc: {
            bm: 'Ikut 3 langkah terbalik ini:\n1️⃣ Baca kecerunan $m$ dan pintasan $c$ ke dalam $Y = mX + c$.\n2️⃣ Gantikan $Y$ dan $X$ dengan label paksi graf (cth: $\\frac{y}{\\sqrt{x}}$ dan $x^2$, atau $\\log_{10} y$ dan $\\log_{10} x$).\n3️⃣ Asingkan $y$: darab silang penyebut, atau tukar $c = \\log_{10}(10^c)$ supaya $y = 10^c \\cdot x^m$!',
            en: 'Follow these 3 reverse steps:\n1️⃣ Plug gradient $m$ and intercept $c$ into $Y = mX + c$.\n2️⃣ Replace $Y$ and $X$ with the exact graph axis labels (e.g., $\\frac{y}{\\sqrt{x}}$ and $x^2$, or $\\log_{10} y$ and $\\log_{10} x$).\n3️⃣ Isolate $y$: clear denominators, or convert $c = \\log_{10}(10^c)$ so $y = 10^c \\cdot x^m$!'
          }
        },
        {
          icon: '📏',
          tag: { bm: 'Peraturan Kertas Graf Kertas 2', en: 'Paper 2 Graph Paper Rules' },
          title: { bm: 'Garis Penyuaian Terbaik = Seimbang & Kesan Titik Terpencil!', en: 'Line of Best Fit = Balanced Points & Spot Outliers!' },
          desc: {
            bm: 'Jadualkan nilai $X$ dan $Y$ kepada **2 tempat perpuluhan**, plot pangkah halus $\\times$, lukis **1 garis lurus panjang** yang seimbang di atas dan bawah garis, abaikan titik terpencil yang jauh menyimpang, dan kira $m$ guna **dua titik di atas garis yang dilukis** (bukan titik jadual terkeluar)!',
            en: 'Tabulate $X$ and $Y$ to **2 decimal places**, plot neat $\\times$ crosses, draw **one single ruler line** balancing points above and below, ignore any clear outlier point, and compute $m$ using **two points lying ON the drawn line** (not off-line raw table points)!'
          }
        }
      ],
      triggers: [
        {
          cue: { bm: 'Graf linear diberi dengan paksi menegak y/x² dan paksi mengufuk 1/x', en: 'Linear graph given with vertical axis y/x² and horizontal axis 1/x' },
          action: { bm: 'Jangan keliru — tulis terus templat paksi **$\\frac{y}{x^2} = m\\left(\\frac{1}{x}\\right) + c$**, cari $m$ dan $c$ daripada dua titik pada graf, kemudian darab semua sebutan dengan $x^2$ untuk mengasingkan $y$!', en: 'Write the axis template directly as **$\\frac{y}{x^2} = m\\left(\\frac{1}{x}\\right) + c$**, compute $m$ and $c$ from two points on the line, then multiply every term by $x^2$ to isolate $y$!' }
        },
        {
          cue: { bm: 'Pintasan pada paksi-Y diperoleh sebagai log₁₀ p = 1.301', en: 'Vertical Y-intercept is read as log₁₀ p = 1.301' },
          action: { bm: 'Gunakan antilog pada kalkulator (**SHIFT + log**): $p = 10^{1.301} = 20.00$ (jangan tinggalkan jawapan $p = 1.301$!).', en: 'Apply base-$10$ antilog on your calculator (**SHIFT + log**): $p = 10^{1.301} = 20.00$ (never leave the answer as $p = 1.301$!).' }
        },
        {
          cue: { bm: 'Paksi mengufuk kertas graf bermula pada X = 2 (bukan X = 0)', en: 'Horizontal axis on the graph starts at X = 2 instead of X = 0' },
          action: { bm: '**JANGAN baca tepi kiri graf sebagai $c$**! Kira kecerunan $m = \\frac{Y_2 - Y_1}{X_2 - X_1}$ dahulu, kemudian ganti satu titik $(X_1, Y_1)$ pada garis ke dalam $c = Y_1 - mX_1$!', en: '**NEVER read the left border intersection as $c$** when $X \\neq 0$! Find gradient $m = \\frac{Y_2 - Y_1}{X_2 - X_1}$ first, then substitute a point $(X_1, Y_1)$ on the line into $c = Y_1 - mX_1$!' }
        },
        {
          cue: { bm: 'Graf garis lurus log₁₀ y melawan log₁₀ x mempunyai kecerunan 3 dan pintasan-Y bernilai 2', en: 'Straight-line graph of log₁₀ y against log₁₀ x has gradient 3 and Y-intercept 2' },
          action: { bm: 'Tulis $\\log_{10} y = 3\\log_{10} x + 2$, tukar $3\\log_{10} x = \\log_{10}(x^3)$ dan $2 = \\log_{10}(10^2) = \\log_{10} 100$, kemudian gabungkan: $\\log_{10} y = \\log_{10}(100x^3) \\implies y = 100x^3$!', en: 'Write $\\log_{10} y = 3\\log_{10} x + 2$, rewrite $3\\log_{10} x = \\log_{10}(x^3)$ and $2 = \\log_{10}(10^2) = \\log_{10} 100$, then combine logs: $\\log_{10} y = \\log_{10}(100x^3) \\implies y = 100x^3$!' }
        }
      ],
      rxFix: {
        wrong: { bm: 'menukar $xy = px^2 + q$ kepada $y = px + \\frac{q}{x}$ lalu memilih $Y = y, X = x$ (masih ada $x$ di dalam sebutan $\\frac{q}{x}$!).', en: 'turning $xy = px^2 + q$ into $y = px + \\frac{q}{x}$ and choosing $Y = y, X = x$ (the term $\\frac{q}{x}$ still contains $x$!).' },
        right: { bm: 'Kekalkan $Y = xy$ melawan $X = x^2$ terus ($xy = p(x^2) + q$), atau bahagi $x^2$ supaya menjadi $\\frac{y}{x} = q\\left(\\frac{1}{x^2}\\right) + p$.', en: 'Plot $Y = xy$ against $X = x^2$ directly ($xy = p(x^2) + q$), or divide every term by $x^2$ to get $\\frac{y}{x} = q\\left(\\frac{1}{x^2}\\right) + p$.' }
      }
    },

    'f4-c7': {
      poster: 'assets/posters/f4-c7.jpg',
      posterTitle: {
        bm: 'Poster Visual Bab 7: Geometri Koordinat (Pembahagi Tembereng, Tali Kasut & Lokus)',
        en: 'Chapter 7 Visual Poster: Mastering Coordinate Geometry (Divisor, Shoelace Area & Locus)'
      },
      vocabBridge: {
        bm: '**Kamus Istilah KSSM/DLP:** *Divisor of a Segment* = Pembahagi Tembereng Garis ($m:n$) • *Parallel / Perpendicular* = Selari ($m_1 = m_2$) / Serenjang ($m_1 m_2 = -1$) • *Perpendicular Bisector* = Pembahagi Dua Sama Serenjang • *Collinear* = Segaris • *Shoelace Formula* = Rumus Tali Kasut • *Locus* = Lokus $P(x, y)$',
        en: '**KSSM/DLP Glossary:** Pembahagi Tembereng Garis = *Divisor of a Segment* ($m:n$) • Selari / Serenjang = *Parallel* ($m_1 = m_2$) / *Perpendicular* ($m_1 m_2 = -1$) • Pembahagi Dua Sama Serenjang = *Perpendicular Bisector* • Segaris = *Collinear* • Rumus Tali Kasut = *Shoelace Formula* • Lokus = *Locus* $P(x, y)$'
      },
      painSummary: {
        bm: 'Empat kesilapan paling kerap: mendarab nisbah $m$ dengan titik bersebelahan sendiri (sepatutnya darab silang!), membaca kecerunan terus daripada $ax + by = c$ tanpa menyusun kepada $y = mx + c$ sebelum mencari $m_\\perp = -\\frac{1}{m}$, terlupa ulang bucu pertama atau modulus $|\\dots|$ dalam Rumus Tali Kasut, dan terlupa mengkuasaduakan angka nisbah dalam soalan lokus!',
        en: 'Top 4 student traps: multiplying ratio $m$ with the adjacent endpoint instead of cross-multiplying, reading gradient from $ax + by = c$ without rearranging to $y = mx + c$ before flipping $m_\\perp = -\\frac{1}{m}$, forgetting to repeat $(x_1, y_1)$ or $|\\dots|$ in the Shoelace matrix, and forgetting to square ratio multipliers in locus equations!'
      },
      mentalModels: [
        {
          icon: '⚔️',
          tag: { bm: 'Mnemonik: Darab Silang Jauh', en: 'Hook: Cross-Multiply Opposite' },
          title: { bm: 'Pembahagi Tembereng $m : n$ — Silangkan Ke Seberang!', en: 'Line Divisor $m : n$ — Cross Over to Opposite Ends!' },
          desc: {
            bm: 'Lukis tembereng $A$—$P$—$B$ dahulu! Nisbah $m$ di sebelah $A(x_1, y_1)$ mesti **menyilang darab $B(x_2, y_2)$ di seberang sana**, dan $n$ menyilang darab $A$: $P = \\left(\\frac{nx_1 + mx_2}{m + n},\\; \\frac{ny_1 + my_2}{m + n}\\right)$. Bila $m = n = 1$, inilah rumus Titik Tengah Tingkatan 2!',
            en: 'Always sketch segment $A$—$P$—$B$ first! Ratio $m$ next to $A(x_1, y_1)$ reaches across to multiply **$B(x_2, y_2)$**, while $n$ multiplies **$A(x_1, y_1)$**: $P = \\left(\\frac{nx_1 + mx_2}{m + n},\\; \\frac{ny_1 + my_2}{m + n}\\right)$. When $m = n = 1$, this is the Form 2 Midpoint!'
          }
        },
        {
          icon: '📐',
          tag: { bm: 'Selari vs Serenjang (T2 → T4)', en: 'Parallel vs Perpendicular (F2 → F4)' },
          title: { bm: 'Garis Selari $m_1 = m_2$ vs Serenjang $m_1 m_2 = -1$ (Songsang + Tukar Tanda!)', en: 'Parallel $m_1 = m_2$ vs Perpendicular $m_1 m_2 = -1$ (Flip + Negate!)' },
          desc: {
            bm: 'Dari kecerunan Tingkatan 2 ($m = \\frac{y_2-y_1}{x_2-x_1}$): garis **Selari** seperti rel kereta api berkongsi kecerunan sama ($m_1 = m_2$). Garis **Serenjang** bertemu pada sudut $90^\\circ$ ($m_1 m_2 = -1$, iaitu **songsangkan pecahan DAN tukar tanda**, cth: $\\frac{2}{3} \\to -\\frac{3}{2}$). Sentiasa susun $ax + by = c$ kepada $y = mx + c$ dahulu!',
            en: 'From Form 2 gradient ($m = \\frac{y_2-y_1}{x_2-x_1}$): **Parallel** railway tracks share identical steepness ($m_1 = m_2$). **Perpendicular** lines meet at $90^\\circ$ ($m_1 m_2 = -1$: **flip the fraction AND flip the sign**, e.g. $\\frac{2}{3} \\to -\\frac{3}{2}$). Always rearrange $ax + by = c$ into $y = mx + c$ first!'
          }
        },
        {
          icon: '👟',
          tag: { bm: 'Rumus Tali Kasut (Shoelace)', en: 'Shoelace Polygon Matrix' },
          title: { bm: 'Wajib Tutup Semula Poligon Dengan Bucu Pertama!', en: 'Close the Polygon Loop by Repeating Vertex 1!' },
          desc: {
            bm: 'Susun bucu mengikut tertib keliling poligon, dan **WAJIB tulis semula $(x_1, y_1)$ di lajur paling hujung**! Kira $\\frac{1}{2} |(\\sum \\searrow) - (\\sum \\swarrow)|$. Jika diberi nilai luas dan diminta cari koordinat $k$, buka modulus $|\\dots|$ kepada **dua kes $\\pm$**!',
            en: 'Order vertices sequentially around the perimeter and **MUST repeat $(x_1, y_1)$ at the end**! Compute $\\frac{1}{2}|(\\sum \\searrow) - (\\sum \\swarrow)|$. When solving for an unknown coordinate $k$ from a given area, split $|\\dots|$ into **both $+$ and $-$ cases**!'
          }
        },
        {
          icon: '👣',
          tag: { bm: 'Lokus = Jejak Kaki P(x, y)', en: 'Locus = Footprints of P(x, y)' },
          title: { bm: 'Tukar Ayat Jarak Kepada Pythagoras & Kuasa Duakan Kedua Belah!', en: 'Translate Distance Rules Into Pythagoras & Square Both Sides!' },
          desc: {
            bm: 'Biarkan titik bergerak ialah $P(x, y)$. Jika $PA = 2PB$, tulis jarak Tingkatan 2: $\\sqrt{(x - x_A)^2 + (y - y_A)^2} = 2\\sqrt{(x - x_B)^2 + (y - y_B)^2}$, kemudian kuasa duakan **kedua-dua belah** menjadi $PA^2 = 4PB^2$ (**$2^2 = 4$, bukan $2$!**) dan kembangkan $(x - a)^2 = x^2 - 2ax + a^2$.',
            en: 'Let the moving point be $P(x, y)$. For $PA = 2PB$, write the Form 2 distance rule $\\sqrt{(x - x_A)^2 + (y - y_A)^2} = 2\\sqrt{(x - x_B)^2 + (y - y_B)^2}$, then square **both sides** to get $PA^2 = 4PB^2$ (**$2^2 = 4$, never $2$!**) and expand $(x - a)^2 = x^2 - 2ax + a^2$ carefully.'
          }
        }
      ],
      triggers: [
        {
          cue: { bm: 'Soalan sebut: Cari persamaan pembahagi dua sama serenjang bagi garis AB', en: 'Exam says: Find the equation of the perpendicular bisector of segment AB' },
          action: { bm: '3 langkah tetap: (1) Cari **Titik Tengah $M$** bagi $AB$, (2) Kira kecerunan $m_{AB}$ dan tukar kepada **$m_\\perp = -\\frac{1}{m_{AB}}$**, (3) Gantikan ke dalam $y - y_M = m_\\perp(x - x_M)$.', en: '3 fixed steps: (1) Find **Midpoint $M$** of $AB$, (2) Compute $m_{AB}$ and flip-negate to **$m_\\perp = -\\frac{1}{m_{AB}}$**, (3) Apply $y - y_M = m_\\perp(x - x_M)$.' }
        },
        {
          cue: { bm: 'Soalan sebut: Garis lurus memotong paksi-x pada a dan paksi-y pada b', en: 'Exam says: Straight line has x-intercept a and y-intercept b' },
          action: { bm: 'Guna terus **Bentuk Pintasan**: $\\frac{x}{a} + \\frac{y}{b} = 1$, dengan pintasan-$(a, 0)$ dan $(0, b)$ serta kecerunan $m = -\\frac{b}{a}$!', en: 'Use **Intercept Form** instantly: $\\frac{x}{a} + \\frac{y}{b} = 1$, passing through $(a, 0)$ and $(0, b)$ with gradient $m = -\\frac{b}{a}$!' }
        },
        {
          cue: { bm: 'Soalan sebut: Lokus P bergerak supaya ∠APB = 90° (atau jarak dari C sentiasa r)', en: 'Exam says: Point P moves such that ∠APB = 90° (or distance from C is always r)' },
          action: { bm: 'Bagi $\\angle APB = 90^\\circ$, guna serenjang $m_{PA} \\times m_{PB} = -1$, iaitu $\\frac{y - y_A}{x - x_A} \\cdot \\frac{y - y_B}{x - x_B} = -1$ (atau $PA^2 + PB^2 = AB^2$)! Bagi jarak malar $r$, guna $(x - x_C)^2 + (y - y_C)^2 = r^2$.', en: 'For $\\angle APB = 90^\\circ$, apply perpendicular gradients $m_{PA} \\cdot m_{PB} = -1$, i.e. $\\frac{y - y_A}{x - x_A} \\cdot \\frac{y - y_B}{x - x_B} = -1$ (or Pythagoras $PA^2 + PB^2 = AB^2$)! For constant distance $r$, use $(x - x_C)^2 + (y - y_C)^2 = r^2$.' }
        },
        {
          cue: { bm: 'Soalan sebut: Buktikan titik A, B, dan C adalah segaris (collinear)', en: 'Exam says: Show that points A, B, and C are collinear' },
          action: { bm: 'Cara terpantas: buktikan **$m_{AB} = m_{BC}$** (kecerunan sama dengan titik sepunya $B$!), ATAU tunjukkan **Luas Segi Tiga $ABC = 0$** menggunakan Rumus Tali Kasut!', en: 'Fastest exam method: prove **$m_{AB} = m_{BC}$** (equal gradients sharing common point $B$!), OR show **Shoelace Triangle Area $= 0$** using the determinant!' }
        }
      ],
      rxFix: {
        wrong: { bm: 'menukar $PA : PB = 2 : 3$ kepada $PA^2 = \\frac{2}{3}PB^2$ tanpa mengkuasaduakan nombor nisbah.', en: 'rewriting $PA : PB = 2 : 3$ as $PA^2 = \\frac{2}{3}PB^2$ without squaring the ratio numbers.' },
        right: { bm: 'Darab silang dahulu: $3PA = 2PB \\implies$ kuasa duakan penuh pada kedua-dua belah menjadi **$9PA^2 = 4PB^2$**!', en: 'Cross-multiply first: $3PA = 2PB \\implies$ square everything on both sides cleanly to get **$9PA^2 = 4PB^2$**!' }
      }
    },

    'f4-c8': {
      poster: 'assets/posters/f4-c8.jpg',
      posterTitle: {
        bm: 'Poster Visual Bab 8: Asas Vektor — Arah, Magnitud, Hukum Segi Tiga & Vektor Unit',
        en: 'Chapter 8 Visual Poster: Vector Essentials — Direction, Magnitude, Geometric Laws & Unit Vectors'
      },
      vocabBridge: {
        bm: '**Kamus Istilah KSSM/DLP:** *Scalar* = Skalar (Magnitud sahaja) • *Vector* = Vektor (Magnitud + Arah) • *Column Vector* = Vektor Lajur $\\binom{x}{y}$ • *Parallel* = Selari ($\\mathbf{a} = k\\mathbf{b}$) • *Collinear* = Segaris • *Resultant Vector* = Vektor Paduan • *Unit Vector* = Vektor Unit ($\\hat{\\mathbf{r}}$)',
        en: '**KSSM/DLP Glossary:** Skalar = *Scalar* (Magnitude only) • Vektor = *Vector* (Magnitude + Direction) • Vektor Lajur = *Column Vector* $\\binom{x}{y}$ • Selari = *Parallel* ($\\mathbf{a} = k\\mathbf{b}$) • Segaris = *Collinear* • Vektor Paduan = *Resultant Vector* • Vektor Unit = *Unit Vector* ($\\hat{\\mathbf{r}}$)'
      },
      painSummary: {
        bm: 'Pelajar hilang markah percuma kerana tertinggal tanda vektor di atas kertas peperiksaan (**Peraturan Tulisan Tangan SPM:** huruf tebal bercetak $\\mathbf{a}$ WAJIB ditulis dengan garis beralun di bawah $\\underset{\\sim}{a}$ atau anak panah $\\overrightarrow{AB}$!), terbalik tanda apabila patah balik arah ($\\overrightarrow{AO} = -\\overrightarrow{OA}$), tersilap nisbah bahagian ($AC:CB = 1:2 \\implies \\frac{1}{3}$, bukan $\\frac{1}{2}$), dan lupa menyatakan titik sepunya bagi "Segaris".',
        en: 'Students lose easy marks by omitting vector notation on exam paper (**SPM Handwriting Rule:** printed bold $\\mathbf{a}$ MUST be written with a wavy underline $\\underset{\\sim}{a}$ or arrow $\\overrightarrow{AB}$!), forgetting to flip signs when reversing direction ($\\overrightarrow{AO} = -\\overrightarrow{OA}$), misreading segment ratios ($AC:CB = 1:2 \\implies \\frac{1}{3}$, not $\\frac{1}{2}$), and omitting the common point when proving collinearity.'
      },
      mentalModels: [
        {
          icon: '🧭',
          tag: { bm: 'Skalar vs Vektor & Domino Tengah', en: 'Scalar vs Vector & Domino Rule' },
          title: { bm: 'Beza Skalar vs Vektor & Hukum Segi Tiga (Cantum Huruf Tengah!)', en: 'Scalar vs Vector & Triangle Law (Match the Middle Letter!)' },
          desc: {
            bm: '**Skalar** = jarak sahaja ("5 km"); **Vektor** = jarak + arah ("5 km ke Timur Laut").\nNak cari $\\overrightarrow{AB}$? Lalu melalui asalan $O$: **$\\overrightarrow{AB} = \\overrightarrow{AO} + \\overrightarrow{OB} = \\overrightarrow{OB} - \\overrightarrow{OA}$** (Hujung tolak Mula!). Ingat: patah balik tukar tanda (**$\\overrightarrow{AO} = -\\overrightarrow{OA}$**).',
            en: '**Scalar** = size only ("5 km"); **Vector** = size + direction ("5 km North-East").\nTo find $\\overrightarrow{AB}$, route via origin $O$: **$\\overrightarrow{AB} = \\overrightarrow{AO} + \\overrightarrow{OB} = \\overrightarrow{OB} - \\overrightarrow{OA}$** (Head minus Tail!). Reversing any arrow flips its sign (**$\\overrightarrow{AO} = -\\overrightarrow{OA}$**).'
          }
        },
        {
          icon: '🛤️',
          tag: { bm: 'Selari vs Segaris', en: 'Parallel vs Collinear' },
          title: { bm: 'Segaris = Selari + Ada 1 Titik Sepunya!', en: 'Collinear = Parallel + One Shared Point!' },
          desc: {
            bm: 'Dua landasan kereta api adalah **Selari** ($\\overrightarrow{AB} = k\\overrightarrow{CD}$). Tetapi tiga tiang lampu $A, B, C$ berada pada satu garis lurus (**Segaris**) hanya jika **$\\overrightarrow{AB} = k\\overrightarrow{BC}$ DAN kedua-duanya berkongsi titik sepunya $B$** — wajib tulis kedua-duanya!',
            en: 'Two train tracks are **Parallel** ($\\overrightarrow{AB} = k\\overrightarrow{CD}$). Three lamp posts $A, B, C$ lie on one straight road (**Collinear**) only when **$\\overrightarrow{AB} = k\\overrightarrow{BC}$ AND they share the common point $B$** — state BOTH for full marks!'
          }
        },
        {
          icon: '🪜',
          tag: { bm: 'Vektor Lajur = Koordinat Lif', en: 'Column Vector = Elevator Grid' },
          title: { bm: 'Vektor Lajur $\\binom{x}{y} = x\\mathbf{i} + y\\mathbf{j}$ — Atas mengufuk, Bawah mencancang!', en: 'Column Vector $\\binom{x}{y} = x\\mathbf{i} + y\\mathbf{j}$ — Top Horizontal, Bottom Vertical!' },
          desc: {
            bm: 'Baris atas ($x$) = gerak kanan/kiri ($\\mathbf{i}$); baris bawah ($y$) = gerak atas/bawah ($\\mathbf{j}$). Apabila mendarab skalar $k\\binom{x}{y} = \\binom{kx}{ky}$, darab **kedua-dua baris**! Tolak baris atas dengan atas, bawah dengan bawah (kurungkan negatif: $6 - (-3) = 9$).',
            en: 'Top row ($x$) = right/left step ($\\mathbf{i}$); bottom row ($y$) = up/down step ($\\mathbf{j}$). Scalar $k\\binom{x}{y} = \\binom{kx}{ky}$ multiplies **BOTH rows**! Subtract top-from-top and bottom-from-bottom carefully ($6 - (-3) = 9$).'
          }
        },
        {
          icon: '1️⃣',
          tag: { bm: 'Resipi Vektor Unit', en: 'Unit Vector Recipe' },
          title: { bm: 'Vektor Unit $\\hat{\\mathbf{r}}$ = Bahagi Vektor Dengan Panjangnya Sendiri!', en: 'Unit Vector $\\hat{\\mathbf{r}}$ = Divide Vector by Its Own Length!' },
          desc: {
            bm: 'Jika $\\mathbf{r} = x\\mathbf{i} + y\\mathbf{j}$, panjangnya ialah $|\\mathbf{r}| = \\sqrt{x^2 + y^2}$ (pasangan Pythagoras: $(3,4,5), (5,12,13)$). Maka vektor unit sepanjang $1$ unit dalam arah $\\mathbf{r}$ ialah **$\\hat{\\mathbf{r}} = \\frac{x\\mathbf{i} + y\\mathbf{j}}{\\sqrt{x^2 + y^2}}$**.',
            en: 'For $\\mathbf{r} = x\\mathbf{i} + y\\mathbf{j}$, its magnitude is $|\\mathbf{r}| = \\sqrt{x^2 + y^2}$ (Pythagorean triples: $(3,4,5), (5,12,13)$). Dividing by its length gives the unit vector of length $1$ in the same direction: **$\\hat{\\mathbf{r}} = \\frac{x\\mathbf{i} + y\\mathbf{j}}{\\sqrt{x^2 + y^2}}$**.'
          }
        }
      ],
      triggers: [
        {
          cue: { bm: 'Kertas 2: Dua ungkapan berbeza diberi bagi titik persilangan X dengan pemalar h dan k', en: 'Paper 2: Two expressions for intersection point X with constants h and k' },
          action: { bm: 'Ungkapkan $\\overrightarrow{OX}$ melalui **dua laluan berbeza** dalam sebutan vektor tak selari $\\underset{\\sim}{a}$ dan $\\underset{\\sim}{b}$, samakan kedua-duanya, lalu **bandingkan pekali $\\underset{\\sim}{a}$ dan pekali $\\underset{\\sim}{b}$** secara serentak!', en: 'Express $\\overrightarrow{OX}$ via **two different paths** in terms of non-parallel $\\mathbf{a}$ and $\\mathbf{b}$ (write $\\underset{\\sim}{a}, \\underset{\\sim}{b}$ on exam paper), equate them, and **compare coefficients of $\\mathbf{a}$ and $\\mathbf{b}$** simultaneously!' }
        },
        {
          cue: { bm: 'Soalan sebut: Diberi u dan v adalah selari, cari nilai m', en: 'Exam says: Given vectors u and v are parallel, find m' },
          action: { bm: 'Tulis $\\mathbf{u} = \\lambda\\mathbf{v}$ (atau guna nisbah komponen $\\frac{x_1}{x_2} = \\frac{y_1}{y_2}$) dan selesaikan terus!', en: 'Write $\\mathbf{u} = \\lambda\\mathbf{v}$ (or equate component ratios $\\frac{x_1}{x_2} = \\frac{y_1}{y_2}$) and solve directly!' }
        },
        {
          cue: { bm: 'Soalan sebut: Vektor p adalah selari dengan paksi-x (atau paksi-y)', en: 'Exam says: Vector p is parallel to the x-axis (or y-axis)' },
          action: { bm: 'Selari paksi-$x$ bermakna tiada pergerakan mencancang — samakan **komponen $\\mathbf{j}$ dengan $0$**! Jika selari paksi-$y$, samakan **komponen $\\mathbf{i}$ dengan $0$**.', en: 'Parallel to the $x$-axis means zero vertical movement — set the **$\\mathbf{j}$-coefficient to $0$**! If parallel to the $y$-axis, set the **$\\mathbf{i}$-coefficient to $0$**.' }
        },
        {
          cue: { bm: 'Titik C terletak pada garis lurus AB dengan keadaan AC : CB = 1 : 2', en: 'Point C lies on straight line AB such that AC : CB = 1 : 2' },
          action: { bm: 'Jumlah bahagian penuh ialah $1 + 2 = 3$ (JANGAN guna $\\frac{1}{2}$!). Tulis $\\overrightarrow{AC} = \\frac{1}{3}\\overrightarrow{AB}$, kemudian $\\overrightarrow{OC} = \\overrightarrow{OA} + \\frac{1}{3}(\\overrightarrow{OB} - \\overrightarrow{OA})$!', en: 'Total parts $= 1 + 2 = 3$ (NEVER use $\\frac{1}{2}$!). Write $\\overrightarrow{AC} = \\frac{1}{3}\\overrightarrow{AB}$, then $\\overrightarrow{OC} = \\overrightarrow{OA} + \\frac{1}{3}(\\overrightarrow{OB} - \\overrightarrow{OA})$!' }
        }
      ],
      rxFix: {
        wrong: { bm: 'mengira $|3\\mathbf{i} - 4\\mathbf{j}| = \\sqrt{3^2 - 4^2} = \\sqrt{-7}$ (menolak kuasa dua nombor negatif!).', en: 'computing $|3\\mathbf{i} - 4\\mathbf{j}| = \\sqrt{3^2 - 4^2} = \\sqrt{-7}$ (subtracting instead of adding squares!).' },
        right: { bm: 'Magnitud sentiasa **tambah** kuasa dua dengan kurungan: $|3\\mathbf{i} - 4\\mathbf{j}| = \\sqrt{3^2 + (-4)^2} = \\sqrt{9 + 16} = 5$.', en: 'Magnitude ALWAYS **adds** bracketed squares: $|3\\mathbf{i} - 4\\mathbf{j}| = \\sqrt{3^2 + (-4)^2} = \\sqrt{9 + 16} = 5$.' }
      }
    },

    'f4-c9': {
      poster: 'assets/posters/f4-c9.jpg',
      posterTitle: {
        bm: 'Poster Visual Bab 9: Penyelesaian Segi Tiga (Petua Sinus, Kosinus, Kes 2 Segi Tiga / Ambiguous Case & Luas)',
        en: 'Chapter 9 Visual Poster: Solution of Triangles (Sine Rule, Cosine Rule, Ambiguous Case & Area)'
      },
      vocabBridge: {
        bm: '**Kamus Istilah KSSM/DLP:** *Sine / Cosine Rule* = Petua Sinus / Kosinus • *Opposite Pair* = Pasangan Sisi-Sudut Bertentangan • *Included Angle (SAS)* = Sudut Kandung (Kepit) • *Ambiguous Case* = Kes Berambiguiti (2 Segi Tiga Mungkin) • *Acute / Obtuse* = Tirus / Cakah • *Orthogonal Projection* = Unjuran Ortogon',
        en: '**KSSM/DLP Glossary:** Petua Sinus / Kosinus = *Sine / Cosine Rule* • Pasangan Sisi-Sudut Bertentangan = *Opposite Pair* • Sudut Kandung = *Included Angle (SAS)* • Kes Berambiguiti = *Ambiguous Case* (2 Possible Triangles) • Tirus / Cakah = *Acute / Obtuse* • Unjuran Ortogon = *Orthogonal Projection*'
      },
      painSummary: {
        bm: '**Amaran Kalkulator:** pastikan paparan atas menunjukkan `[D]` (*Degrees*), BUKAN `[R]` (*Radians*)! Pelajar sering memaksa Petua Sinus pada segi tiga SAS, terlupa menekan punca kuasa dua $\\sqrt{\\phantom{x}}$ di hujung Petua Kosinus, terlepas sudut cakah $180^\\circ - \\theta$ dalam Kes Berambiguiti (*Ambiguous Case* SSA), dan tersilap memilih garis bayang-bayang tapak dalam soalan 3D.',
        en: '**Calculator Alert:** always verify your calculator top screen displays `[D]` (Degrees), NOT `[R]` (Radians)! Students also force the Sine Rule onto SAS triangles, forget $\\sqrt{\\phantom{x}}$ at the end of the Cosine Rule, miss the second obtuse angle $180^\\circ - \\theta$ in the SSA Ambiguous Case, and pick the wrong base shadow edge in 3D geometry.'
      },
      mentalModels: [
        {
          icon: '🎯',
          tag: { bm: 'Kompas Pilih Rumus (T3 → T4)', en: '3-Second Rule Selector (F3 → F4)' },
          title: { bm: 'Pasangan Bertentangan = Sinus! Kepit SAS / 3 Sisi = Kosinus!', en: 'Opposite Pair = Sine Rule! Sandwich SAS / 3 Sides = Cosine Rule!' },
          desc: {
            bm: 'SOHCAHTOA & Pythagoras Tingkatan 3 hanya untuk segi tiga bersudut $90^\\circ$. Untuk sebarang segi tiga (sisi $a$ bertentangan $\\angle A$), lukis anak panah dari sudut ke sisi hadapannya: **ada 1 pasangan lengkap?** $\\implies$ **Petua Sinus**! **Tiada pasangan lengkap** (2 sisi kepit 1 sudut **SAS**, atau **3 sisi SSS**)? $\\implies$ **Petua Kosinus**!',
            en: 'Form 3 SOHCAHTOA & Pythagoras only work for $90^\\circ$ triangles. For any triangle ($a$ opposite $\\angle A$), draw an arrow from each known angle to its opposite side: **got 1 complete pair?** $\\implies$ **Sine Rule**! **No complete pair** (2 sides sandwiching 1 angle **SAS**, or **3 sides SSS**)? $\\implies$ **Cosine Rule**!'
          }
        },
        {
          icon: '🪃',
          tag: { bm: 'Hayunan 2 Segi Tiga (SSA)', en: 'Swinging Gate Ambiguous Case (SSA)' },
          title: { bm: 'Kenapa Satu Data Boleh Hasilkan 2 Segi Tiga Berbeza?', en: 'Why SSA Can Swing Into Two Valid Triangles' },
          desc: {
            bm: 'Dalam kes **SSA** (diberi sudut tirus $A$, sisi sebelah $b$, dan sisi bertentangan $a$ dengan syarat **$b\\sin A < a < b$**), sisi $a$ berayun seperti pintu pagar untuk menyentuh tapak dua kali: sekali membentuk sudut tirus $B_1$, dan sekali berayun ke dalam membentuk **sudut cakah $B_2 = 180^\\circ - B_1$**!',
            en: 'In the **SSA** case (given acute $\\angle A$, adjacent side $b$, and shorter opposite side $a$ satisfying **$b\\sin A < a < b$**), side $a$ swings like a gate to hit the base twice: once forming acute $B_1$, and once swinging inward to form **obtuse $B_2 = 180^\\circ - B_1$**!'
          }
        },
        {
          icon: '📐',
          tag: { bm: 'Luas SAS & Rumus Heron', en: 'SAS Area & Heron Formula' },
          title: { bm: 'Sudut Mesti DIKEPIT Dua Sisi ($\\frac{1}{2}ab\\sin C$), atau Guna Heron (SSS)!', en: 'Angle Must Be SANDWICHED ($\\frac{1}{2}ab\\sin C$), or Use Heron (SSS)!' },
          desc: {
            bm: 'Dalam $\\text{Luas} = \\frac{1}{2}ab\\sin C$, semua huruf berbeza ($a, b,$ dan sudut $C$ diapit di antara $a$ dan $b$). Apabila hanya 3 sisi diketahui tanpa sudut, guna **Rumus Heron**: $s = \\frac{a+b+c}{2}$, $\\text{Luas} = \\sqrt{s(s-a)(s-b)(s-c)}$.',
            en: 'In $\\text{Area} = \\frac{1}{2}ab\\sin C$, all three letters are distinct ($a, b,$ and angle $C$ sandwiched right between them!). When only 3 sides are given without any angle, apply **Heron\'s Formula**: $s = \\frac{a+b+c}{2}$, $\\text{Area} = \\sqrt{s(s-a)(s-b)(s-c)}$.'
          }
        },
        {
          icon: '🔦',
          tag: { bm: 'Unjuran Ortogon 3D = Bayang Matahari', en: '3D Orthogonal Projection = Noon Shadow' },
          title: { bm: 'Cari Sudut Garis & Tapak 3D: Jatuhkan Bayang Tegak Ke Bawah!', en: '3D Line-to-Plane Angle: Drop a Straight Noon Shadow!' },
          desc: {
            bm: 'Suluh lampu tegak dari atas ke tapak $ABCD$: bayang-bayang tepi condong $VA$ (piramid) atau $EC$ (kuboid) jatuh di atas **pepenjuru tapak** $MA$ atau $AC$ (BUKAN sisi tepi!), membentuk segi tiga bersudut $90^\\circ$ supaya Pythagoras T3 + $\\tan\\theta = \\frac{\\text{tinggi tegak}}{\\text{bayang tapak}}$ terus menyelesaikannya!',
            en: 'Shine a torch straight down onto base $ABCD$: the shadow of slant edge $VA$ (pyramid) or $EC$ (cuboid) falls along the **base diagonal** $MA$ or $AC$ (NOT a side edge!), forming a flat $90^\\circ$ right triangle solved by Form 3 Pythagoras + $\\tan\\theta = \\frac{\\text{vertical height}}{\\text{base shadow}}$!'
          }
        }
      ],
      triggers: [
        {
          cue: { bm: 'Kertas 2: Lakar ΔA\'BC yang berbeza bentuk daripada ΔABC dengan A\'B = AB, BC, dan ∠ACB kekal sama', en: 'Paper 2: Sketch ΔA\'BC different in shape from ΔABC with A\'B = AB, BC, and ∠ACB unchanged' },
          action: { bm: 'Ayunkan sisi bertentangan sudut tetap ($\\angle ACB$) ke dalam supaya terbentuk segi tiga sama kaki kecil $\\triangle ABA\'$, maka sudut cakah baharu ialah **$\\angle BA\'C = 180^\\circ - \\angle BAC$**!', en: 'Swing the side opposite the fixed angle $\\angle ACB$ inward to form an isosceles triangle $\\triangle ABA\'$, so the new obtuse angle is **$\\angle BA\'C = 180^\\circ - \\angle BAC$**!' }
        },
        {
          cue: { bm: 'Soalan sebut: Cari sudut terbesar dalam segi tiga bersisi 5 cm, 8 cm, 11 cm', en: 'Exam says: Find the largest angle in a triangle with sides 5 cm, 8 cm, 11 cm' },
          action: { bm: '**Sudut terbesar sentiasa menghadap sisi terpanjang ($11\\text{ cm}$)**! Guna Petua Kosinus: $\\cos \\theta = \\frac{5^2 + 8^2 - 11^2}{2(5)(8)}$ (nilai kosinus negatif mengesahkan sudut cakah $> 90^\\circ$!).', en: '**The largest angle ALWAYS faces the longest side ($11\\text{ cm}$)**! Apply Cosine Rule: $\\cos \\theta = \\frac{5^2 + 8^2 - 11^2}{2(5)(8)}$ (a negative cosine confirms an obtuse angle $> 90^\\circ$!).' }
        },
        {
          cue: { bm: 'Soalan minta jarak terdekat dari bucu B ke garis lurus AC', en: 'Exam asks for the shortest distance from vertex B to line AC' },
          action: { bm: 'Jarak terdekat ialah **tinggi tegak $h$ ($90^\\circ$)**! Samakan luas segi tiga dengan $\\frac{1}{2} \\times AC \\times h$ untuk mencari $h$ dalam satu baris.', en: 'Shortest distance = **perpendicular height $h$ ($90^\\circ$)**! Equate the triangle\'s known Area to $\\frac{1}{2} \\times AC \\times h$ and solve for $h$ directly.' }
        },
        {
          cue: { bm: 'Soalan 3D piramid atau kuboid: Cari sudut antara garis condong EC (atau VA) dengan satah tapak ABCD', en: '3D pyramid or cuboid: Find the angle between slant line EC (or VA) and base plane ABCD' },
          action: { bm: 'Jatuhkan garis tegak dari puncak ke tapak ($E \\to A$ atau $V \\to M$) untuk kenal pasti bayang pepenjuru ($AC$ atau $MA$), kira pepenjuru itu dengan Pythagoras tapak, kemudian guna $\\tan\\theta = \\frac{\\text{tinggi tegak}}{\\text{pepenjuru tapak}}$!', en: 'Drop a perpendicular from the top vertex to the base ($E \\to A$ or $V \\to M$) to trace the shadow diagonal ($AC$ or $MA$), find that diagonal via Pythagoras on the base, then use $\\tan\\theta = \\frac{\\text{vertical height}}{\\text{base diagonal}}$!' }
        }
      ],
      rxFix: {
        wrong: { bm: 'mendapat $a^2 = 52.4$ lalu terus menulis $a = 52.4\\text{ cm}$ tanpa punca kuasa dua, atau membundar awal nilai tengah kepada 1–2 t.p.', en: 'getting $a^2 = 52.4$ and writing $a = 52.4\\text{ cm}$ without taking $\\sqrt{52.4}$, or rounding intermediate values to 1–2 d.p. prematurely.' },
        right: { bm: 'Simpan sekurang-kurangnya **4 angka bererti / 4 t.p.** semasa pengiraan tengah, dan jangan lupa punca kuasa dua akhir $a = \\sqrt{52.4} = 7.239\\text{ cm}$!', en: 'Keep at least **4 s.f. / 4 d.p.** in all intermediate steps, and always take the final square root $a = \\sqrt{52.4} = 7.239\\text{ cm}$!' }
      }
    },

    'f4-c10': {
      poster: 'assets/posters/f4-c10.jpg',
      posterTitle: {
        bm: 'Poster Visual Bab 10: Nombor Indeks, Indeks Gubahan & Kaedah Bibir ("Lips Method")',
        en: 'Chapter 10 Visual Poster: Index Numbers, Weighted Composite Index & The "Lips" Chain Rule'
      },
      vocabBridge: {
        bm: '**Kamus Istilah KSSM/DLP:** *Base Year* = Tahun Asas ($Q_0$, Indeks $= 100$) • *Current Year* = Tahun Semasa ($Q_1$) • *Price Index* = Indeks Harga ($I$) • *Composite Index* = Indeks Gubahan ($\\bar{I}$) • *Weightage* = Pemberat ($w$) • *Chain Rule / Lips Method* = Petua Rantai / Kaedah Bibir',
        en: '**KSSM/DLP Glossary:** Tahun Asas = *Base Year* ($Q_0$, Index $= 100$) • Tahun Semasa = *Current Year* ($Q_1$) • Indeks Harga = *Price Index* ($I$) • Indeks Gubahan = *Composite Index* ($\\bar{I}$) • Pemberat = *Weightage* ($w$) • Petua Rantai / Kaedah Bibir = *Chain Rule / Lips Method*'
      },
      painSummary: {
        bm: 'Bab ini ialah **soalan kegemaran Kertas 2 Bahagian C (10 markah mudah 10/10)**, tetapi pelajar kehilangan markah kerana terbalikkan $Q_0$ dan $Q_1$, menulis indeks $I = 20$ bagi kenaikan $20\\%$ (sepatutnya $120$!), menolak $15\\%$ terus ketika mencari harga tahun asas bukannya membahagi $1.15$, dan menambah peratus secara naif merentasi 3 tahun!',
        en: 'This is a **guaranteed 10-mark Paper 2 Section C favourite**, yet students drop marks by swapping $Q_0$ and $Q_1$, writing $I = 20$ instead of $120$ for a $20\\%$ rise, subtracting $15\\%$ directly instead of dividing by $1.15$ when recovering a base-year price, and adding percentages naively across 3 years!'
      },
      mentalModels: [
        {
          icon: '💯',
          tag: { bm: 'Penanda Aras 100 (T1 → T4)', en: 'Benchmark 100 Rule (F1 → F4)' },
          title: { bm: 'Tahun Asas Sentiasa 100: Naik Tambah, Susut Tolak Daripada 100!', en: 'Base Year Is Always 100: Add Increases, Subtract Decreases!' },
          desc: {
            bm: 'Daripada peratus Tingkatan 1–2: anggap Tahun Asas bernilai **$100$** (tiada simbol `%` pada nombor indeks!). Harga **naik $25\\%$** $\\implies I = 100 + 25 = \\mathbf{125}$. Harga **susut $15\\%$** $\\implies I = 100 - 15 = \\mathbf{85}$. Sebaliknya, $I = 92$ bermaksud harga **susut $8\\%$**!',
            en: 'From Form 1–2 percentages: treat the Base Year as **$100$** (never write `%` on an index number!). Up **$25\\%$** $\\implies I = 100 + 25 = \\mathbf{125}$. Down **$15\\%$** $\\implies I = 100 - 15 = \\mathbf{85}$. Conversely, $I = 92$ means an **$8\\%$ decrease**!'
          }
        },
        {
          icon: '👄',
          tag: { bm: 'Mnemonik: Kaedah Bibir (Lips Method)', en: 'Hook: The Lips Method' },
          title: { bm: 'Rantaian 3 Tahun Tanpa Hafal Rumus Rumit!', en: '3-Year Index Chaining Without Memorization!' },
          desc: {
            bm: 'Susun tahun mengikut urutan masa: **$2020 \\xrightarrow{a} 2022 \\xrightarrow{b} 2024$** dengan lengkung besar di bawah **$2020 \\xrightarrow{c} 2024$** (bentuk bibir!). Rumusnya sentiasa: **$\\text{Bibir Bawah } c = \\frac{a \\times b}{100}$**!',
            en: 'Line up the years chronologically: **$2020 \\xrightarrow{a} 2022 \\xrightarrow{b} 2024$** with the overall arc **$2020 \\xrightarrow{c} 2024$** underneath (forming lips!). Always use: **$\\text{Bottom Arc } c = \\frac{a \\times b}{100}$**!'
          }
        },
        {
          icon: '⚖️',
          tag: { bm: 'Dacing Pemberat Gubahan', en: 'Weighted Scale Model' },
          title: { bm: 'Indeks Gubahan $\\bar{I} = \\frac{\\sum I_i w_i}{\\sum w_i}$ — Jangan Lupa Pemberat Di Penyebut!', en: 'Composite Index $\\bar{I} = \\frac{\\sum I_i w_i}{\\sum w_i}$ — Keep All Weights Below!' },
          desc: {
            bm: 'Pemberat $w$ boleh diberi sebagai **peratus** ($\\sum w = 100$), **sudut carta pai** ($\\sum w = 360^\\circ$), atau **nisbah** ($2:3:5 \\implies \\sum w = 10$). Jika ada satu pemberat tak diketahui $k$, kekalkan $k$ di **pengangka DAN penyebut $\\sum w_i$**!',
            en: 'Weights $w$ can be **percentages** ($\\sum w = 100$), **pie chart angles** ($\\sum w = 360^\\circ$), or **ratios** ($2:3:5 \\implies \\sum w = 10$). If one weight $k$ is unknown, keep $k$ in **BOTH the numerator AND the denominator $\\sum w_i$**!'
          }
        },
        {
          icon: '⏪',
          tag: { bm: 'Cari Harga Tahun Asas (Patah Balik)', en: 'Reverse Base-Year Price Recovery' },
          title: { bm: 'Jangan Tolak Peratus Terus — Guna $\\frac{Q_1}{Q_0} \\times 100 = I$!', en: 'Never Subtract Percentage Directly — Plug Into $\\frac{Q_1}{Q_0} \\times 100 = I$!' },
          desc: {
            bm: 'Jika harga $2023$ ialah $\\text{RM }69$ dengan $I = 115$, **JANGAN** kira $69 \\times 0.85$! Ke hadapan ke $Q_1$ darab $\\frac{I}{100}$; patah balik ke harga asas $Q_0$ wajib **bahagi** $\\frac{I}{100}$: $\\frac{69}{P_0} \\times 100 = 115 \\implies P_0 = \\frac{6900}{115} = \\text{RM }60.00$.',
            en: 'If the $2023$ price is $\\text{RM }69$ with $I = 115$, **NEVER** subtract $15\\%$ ($69 \\times 0.85$)! Forward to $Q_1$ multiplies by $\\frac{I}{100}$; backward to base $Q_0$ **divides** by $\\frac{I}{100}$: $\\frac{69}{P_0} \\times 100 = 115 \\implies P_0 = \\frac{6900}{115} = \\text{RM }60.00$.'
          }
        }
      ],
      triggers: [
        {
          cue: { bm: 'Soalan sebut: Indeks harga bahan A pada tahun 2024 berasaskan tahun 2021 ialah 135', en: 'Exam says: Price index of item A in 2024 based on 2021 is 135' },
          action: { bm: 'Tahun selepas perkataan **"berasaskan"** sentiasa duduk di **penyebut (bawah)**: $\\frac{P_{2024}}{P_{2021}} \\times 100 = 135$.', en: 'Whatever year follows **"based on"** ALWAYS sits in the **denominator (bottom)**: $\\frac{P_{2024}}{P_{2021}} \\times 100 = 135$.' }
        },
        {
          cue: { bm: 'Diberi I₂₀₂₂/₂₀₂₀ = 120 dan I₂₀₂₄/₂₀₂₀ = 150, diminta cari I₂₀₂₄/₂₀₂₂', en: 'Given I₂₀₂₂/₂₀₂₀ = 120 and I₂₀₂₄/₂₀₂₀ = 150, asked to find I₂₀₂₄/₂₀₂₂' },
          action: { bm: 'Lukis Kaedah Bibir ($a = 120$, $b = I_{2024/2022}$, $c = 150$): $150 = \\frac{120 \\times b}{100} \\implies b = \\frac{150 \\times 100}{120} = 125$!', en: 'Draw the Lips diagram ($a = 120$, $b = I_{2024/2022}$, $c = 150$): $150 = \\frac{120 \\times b}{100} \\implies b = \\frac{150 \\times 100}{120} = 125$!' }
        },
        {
          cue: { bm: 'Harga pada tahun 2023 ialah RM69 dengan indeks 115 berasaskan tahun 2019. Cari harga pada tahun 2019', en: 'Price in 2023 is RM69 with index 115 based on 2019. Find the base-year price in 2019' },
          action: { bm: 'Jangan kira $69 \\times 0.85$! Tulis $\\frac{69}{P_{2019}} \\times 100 = 115 \\implies P_{2019} = \\frac{69 \\times 100}{115} = \\text{RM }60.00$.', en: 'Do NOT calculate $69 \\times 0.85$! Write $\\frac{69}{P_{2019}} \\times 100 = 115 \\implies P_{2019} = \\frac{69 \\times 100}{115} = \\text{RM }60.00$.' }
        },
        {
          cue: { bm: 'Bahagian akhir Kertas 2: Kos seunit pada tahun 2020 ialah RM45. Cari harga jualan pada 2024 supaya untung 20%', en: 'Paper 2 finale: Cost in 2020 is RM45. Find selling price in 2024 to make a 20% profit' },
          action: { bm: 'Kira **kos 2024** menggunakan indeks gubahan $\\bar{I}$ dahulu ($C_{2024} = 45 \\times \\frac{\\bar{I}}{100}$), kemudian darabkan kos 2024 dengan **$1.20$** untuk tambah margin untung $20\\%$ (jangan tambah $20$ kepada $\\bar{I}$)!', en: 'First compute the **2024 cost** via composite index $\\bar{I}$ ($C_{2024} = 45 \\times \\frac{\\bar{I}}{100}$), then multiply by **$1.20$** for the $20\\%$ profit margin (never add $20$ to $\\bar{I}$!).' }
        }
      ],
      rxFix: {
        wrong: { bm: 'mengira purata mudah $\\frac{I_1 + I_2 + I_3}{3}$ apabila pemberat berbeza, atau menulis $I = 15$ bagi kenaikan $15\\%$.', en: 'taking an unweighted average $\\frac{I_1 + I_2 + I_3}{3}$ when weights differ, or writing $I = 15$ for a $15\\%$ price rise.' },
        right: { bm: 'Darab setiap indeks dengan pemberatnya $\\bar{I} = \\frac{\\sum I_i w_i}{\\sum w_i}$, dan gunakan $I = 100 + 15 = 115$ bagi kenaikan $15\\%$.', en: 'Always weight each item via $\\bar{I} = \\frac{\\sum I_i w_i}{\\sum w_i}$, and use $I = 100 + 15 = 115$ for a $15\\%$ increase.' }
      }
    }
  };

  Object.keys(F4B_CLINIC).forEach(function (k) {
    App.teacherClinic[k] = F4B_CLINIC[k];
  });
})(window.AddMathApp);
