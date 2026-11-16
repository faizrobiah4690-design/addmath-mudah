/**
 * AddMath Mudah — Klinik Cikgu Pakar & Poster Infografik Visual (Tingkatan 4: Bab 1–10)
 * Dirangka khas dari perspektif Guru Cemerlang Matematik Tambahan KSSM untuk merawat
 * "sakit kepala" sebenar pelajar: kabur konsep, kaku bila baca ayat soalan, dan kecuaian algebra.
 *
 * Struktur modular: App.teacherClinic[chapterId] — sedia disambung terus dengan teacher-clinic-f5.js.
 */
window.AddMathApp = window.AddMathApp || {};
window.AddMathApp.teacherClinic = window.AddMathApp.teacherClinic || {};

(function (App) {
  'use strict';

  const F4_CLINIC = {
    'f4-c1': {
      poster: 'assets/posters/f4-c1.jpg',
      posterTitle: {
        bm: 'Poster Visual Bab 1: Menguasai Fungsi (Hubungan, Domain, Gubahan & Songsang)',
        en: 'Chapter 1 Visual Poster: Mastering Functions (Mappings, Domain, Composite & Inverse)'
      },
      vocabBridge: {
        bm: 'Kamus Istilah Poster: Object = Objek • Image = Imej • One-to-One = Satu-ke-Satu • Many-to-One = Banyak-ke-Satu • Range = Julat • Vertical Line Test = Ujian Garis Mencancang (Garis Menegak)',
        en: 'Key KSSM Terms: Object (input x) • Image (output y) • Domain (input set) • Codomain (target set) • Range (actual images only)'
      },
      painSummary: {
        bm: 'Pelajar selalu keliru kenapa "Banyak-ke-Satu" dikira fungsi, terbalik urutan semasa kira $fg(x)$, dan terlupa pantul bahagian negatif graf modulus $|f(x)|$.',
        en: 'Students often confuse why "Many-to-One" is still a valid function, evaluate $fg(x)$ in the wrong order, and forget to reflect negative parts of $|f(x)|$.'
      },
      mentalModels: [
        {
          icon: '🥤',
          tag: { bm: 'Analogi Mesin Air Tin', en: 'Vending Machine Model' },
          title: { bm: 'Kenapa Banyak-ke-Satu Masih Fungsi?', en: 'Why Many-to-One Is Still a Function' },
          desc: {
            bm: 'Bayangkan **butang = Objek** dan **tin air keluar = Imej**. Jika 2 butang berbeza keluarkan air Milo yang sama (**Banyak-ke-Satu**), mesin itu normal (**SAH Fungsi** ✅). Tetapi jika tekan **1 butang** keluar 2 tin berbeza serentak (**Satu-ke-Banyak**), mesin itu rosak (**BUKAN Fungsi** ❌)!',
            en: 'Think of **buttons = Objects** and **drinks dispensed = Images**. Two buttons giving Milo (**Many-to-One**) is normal (**Valid Function** ✅). Pressing **one button** and getting two conflicting drinks (**One-to-Many**) means a broken machine (**NOT a Function** ❌)!'
          }
        },
        {
          icon: '🏭',
          tag: { bm: 'Mnemonik: Dalam-Ke-Luar', en: 'Hook: Inside-Out Assembly' },
          title: { bm: 'Fungsi Gubahan $fg(x)$ = Kilang Dua Mesin', en: 'Composite $fg(x)$ = Two-Stage Factory' },
          desc: {
            bm: 'Jangan baca kiri ke kanan macam darab! Dalam $fg(x)$, huruf **$g$ paling rapat dengan $x$**, jadi $x$ masuk mesin $g$ dahulu, kemudian hasilnya disuap ke dalam mesin $f$: $fg(x) = f[g(x)]$. Ingat: **$fg$ BUKAN darab $f \\times g$**!',
            en: 'Never treat $fg(x)$ as multiplication! Since **$g$ hugs $x$ closest**, feed $x$ into machine $g$ first, then feed that output into machine $f$: $fg(x) = f[g(x)]$.'
          }
        },
        {
          icon: '✌️',
          tag: { bm: 'Mnemonik: V for Victory', en: 'Hook: V for Victory Bounce' },
          title: { bm: 'Fungsi Nilai Mutlak $|f(x)|$ = Lantai Pantulan Positif', en: 'Modulus $|f(x)|$ = Positive Bounce Floor' },
          desc: {
            bm: 'Paksi-$x$ bertindak seperti cermin lantai! Lukis garis asal dahulu, kemudian semua bahagian negatif di **bawah paksi-$x$ dilantunkan ke atas** membentuk huruf **V**. Semasa selesaikan $|ax + b| = k$, wajib pecah dua kes: $+k$ **dan** $-k$!',
            en: 'Sketch the inner graph first, then **reflect every negative part below the $x$-axis upward** into a **V-shape**. When solving $|ax + b| = k$, always split into two branches: $+k$ **and** $-k$!'
          }
        },
        {
          icon: '🪞',
          tag: { bm: 'Mnemonik: Butang Undo & Cermin', en: 'Hook: Undo Button & Mirror' },
          title: { bm: 'Fungsi Songsang $f^{-1}(x)$ = Perjalanan Patah Balik', en: 'Inverse $f^{-1}(x)$ = Mathematical Undo' },
          desc: {
            bm: 'Jika $f$ membawa anda dari **Rumah ($x$) ke Sekolah ($y$)**, maka $f^{-1}$ membawa anda patah balik dari **Sekolah ($y$) ke Rumah ($x$)**! Graf $f^{-1}$ ialah pantulan cermin pada garis $y = x$, dan hanya wujud bagi fungsi **Satu-ke-Satu**.',
            en: 'If $f$ takes you from **Home ($x$) to School ($y$)**, $f^{-1}$ takes you back from **School ($y$) to Home ($x$)**! Its graph reflects across $y = x$, and $f^{-1}(x) \\neq \\frac{1}{f(x)}$.'
          }
        }
      ],
      triggers: [
        {
          cue: { bm: 'Soalan sebut: "Nyatakan julat (range) bagi hubungan/graf"', en: 'Exam says: "State the range of the relation/graph"' },
          action: { bm: 'Senaraikan HANYA unsur kodomain yang **benar-benar kena anak panah** (atau julat nilai $y$ minimum hingga maksimum pada graf).', en: 'List ONLY codomain elements **actually hit by arrows** (or the min-to-max $y$-values covered by the graph).' }
        },
        {
          cue: { bm: 'Soalan sebut: "Cari nilai $x$ apabila fungsi $f(x) = \\frac{a}{bx - c}$ tidak tertakrif"', en: 'Exam says: "Find $x$ where $f(x) = \\frac{a}{bx - c}$ is undefined"' },
          action: { bm: 'Terus samakan **penyebut dengan sifar**: $bx - c = 0 \\Rightarrow x = \\frac{c}{b}$.', en: 'Immediately set the **denominator to zero**: $bx - c = 0 \\Rightarrow x = \\frac{c}{b}$.' }
        },
        {
          cue: { bm: 'Diberi $f(x)$ dan $fg(x)$, disuruh cari fungsi dalam $g(x)$', en: 'Given $f(x)$ and $fg(x)$, asked to find inner $g(x)$' },
          action: { bm: 'Gantikan tempat $x$ dalam rumus $f(x)$ dengan huruf $g(x)$ penuh, samakan dengan $fg(x)$, kemudian pindah algebra untuk jadikan $g(x)$ perkara rumus.', en: 'Substitute $g(x)$ directly into every $x$ of $f(x)$, equate to $fg(x)$, and isolate $g(x)$.' }
        },
        {
          cue: { bm: 'Soalan sebut: "Fungsi $f$ memetakan kepada dirinya sendiri / $f^2(x) = x$"', en: 'Exam says: "Function maps onto itself / $f^2(x) = x$"' },
          action: { bm: 'Gunakan sifat emas: jika $ff(x) = x$, maka **$f(x) = f^{-1}(x)$**! Cari $f^{-1}(x)$ dan bandingkan pekali terus.', en: 'Use the shortcut: if $ff(x) = x$, then **$f(x) = f^{-1}(x)$**! Find $f^{-1}(x)$ and compare coefficients.' }
        }
      ],
      rxFix: {
        wrong: { bm: '$f^{-1}(x) = \\frac{1}{f(x)}$ atau $fg(2)$ dikira sebagai $f(2) \\times g(2)$.', en: 'Writing $f^{-1}(x) = \\frac{1}{f(x)}$ or computing $fg(2)$ as $f(2) \\times g(2)$.' },
        right: { bm: 'Biar $y = f(x)$, ungkapkan $x$ dalam sebutan $y$ untuk dapat $f^{-1}(x)$; dan kira $g(2)$ dahulu sebelum masuk ke $f[g(2)]$.', en: 'Let $y = f(x)$ and rearrange for $x$ to find $f^{-1}(x)$; for $fg(2)$, compute inner $g(2)$ first, then $f(\\text{ans})$.' }
      }
    },

    'f4-c2': {
      poster: 'assets/posters/f4-c2.jpg',
      posterTitle: {
        bm: 'Poster Visual Bab 2: Rahsia Fungsi Kuadratik (Bentuk Graf, Pembezalayan b² − 4ac & Ketaksamaan)',
        en: 'Chapter 2 Visual Poster: Quadratic Functions Decoded (Curve Shape, Discriminant & Inequalities)'
      },
      vocabBridge: {
        bm: 'Kamus Istilah Poster: Smile/Frown = Senyum (Minimum) / Masam (Maksimum) • Discriminant = Pembezalayan ($b^2 - 4ac$) • Distinct Roots = Punca Berbeza • Sum/Product of Roots = Hasil Tambah/Darab Punca',
        en: 'Key KSSM Terms: Vertex = Titik Pusingan • Axis of Symmetry = Paksi Simetri • Completing the Square = Penyempurnaan Kuasa Dua'
      },
      painSummary: {
        bm: 'Pelajar sering tersilap tanda semasa penyempurnaan kuasa dua apabila $a \\neq 1$, dan menulis jawapan ketaksamaan $x > 2, x > 5$ tanpa melakar lengkung!',
        en: 'Students frequently drop signs when completing the square with $a \\neq 1$, and guess inequality signs blindly without sketching the parabola!'
      },
      mentalModels: [
        {
          icon: '😊',
          tag: { bm: 'Mnemonik: Senyum vs Masam', en: 'Hook: Smile vs Frown' },
          title: { bm: 'Nilai $a$ Menentukan Emosi Lengkung!', en: 'Coefficient $a$ Shapes the Curve' },
          desc: {
            bm: 'Jika **$a > 0$ (Positif = Senyum $\\cup$)**, lengkung mempunyai **Titik Minimum** di bawah. Jika **$a < 0$ (Negatif = Masam $\\cap$)**, lengkung mempunyai **Titik Maksimum** di puncak!',
            en: 'When **$a > 0$ (Positive = Smile $\\cup$)**, the vertex at the bottom is a **Minimum point**. When **$a < 0$ (Negative = Frown $\\cap$)**, the peak is a **Maximum point**!'
          }
        },
        {
          icon: '🔍',
          tag: { bm: 'Radar Pengesan Punca', en: 'Root Detector Radar' },
          title: { bm: 'Pembezalayan (*Discriminant*) $D = b^2 - 4ac$ Tanpa Perlu Kira $x$', en: 'Discriminant $D = b^2 - 4ac$ Detects Intersection' },
          desc: {
            bm: '**$D > 0$**: Memotong paksi-$x$ pada **2 titik berbeza**. **$D = 0$**: Menyentuh paksi-$x$ pada **1 titik (tangen / punca sama)**. **$D < 0$**: Terapung sepenuhnya (**tiada punca nyata**). Hati-hati: *"mempunyai punca nyata"* bermaksud **$D \\ge 0$**!',
            en: '**$D > 0$**: Cuts $x$-axis at **2 distinct points**. **$D = 0$**: Touches at **1 point (tangent / equal roots)**. **$D < 0$**: Floats with **no real roots**. Watch out: *"has real roots"* means **$D \\ge 0$**!'
          }
        },
        {
          icon: '🥪',
          tag: { bm: 'Peraturan Sandwich vs Pagar Luar', en: 'Sandwich vs Outside Rule' },
          title: { bm: 'Ketaksamaan Kuadratik Wajib Lakar Lengkung Senyum!', en: 'Solve Quadratic Inequalities via Quick Sketch' },
          desc: {
            bm: 'Pastikan pekali $x^2$ positif dahulu! Bagi $(x - p)(x - q) < 0$ (bawah paksi-$x$), jawapan **terkepit di tengah**: $p < x < q$. Bagi $(x - p)(x - q) > 0$ (atas paksi-$x$), jawapan **berpecah ke luar**: $x < p$ **atau** $x > q$.',
            en: 'Make sure the $x^2$ term is positive first! For $(x - p)(x - q) < 0$, $x$ stays **between the roots**: $p < x < q$. For $(x - p)(x - q) > 0$, $x$ goes **outside the roots**: $x < p$ **or** $x > q$.'
          }
        },
        {
          icon: '🔑',
          tag: { bm: 'Rumus Bentuk Verteks', en: 'Vertex Form Decoder' },
          title: { bm: 'Bentuk $f(x) = a(x - h)^2 + k$ Baca Terus Puncak!', en: 'Read Vertex $(h, k)$ Instantly' },
          desc: {
            bm: 'Dalam kurungan **tukar tanda** ($x - h = 0 \\Rightarrow x = h$, itulah paksi simetri!), di luar kurungan **kekal tanda** ($y = k$, nilai optimum!). Contoh: $2(x + 3)^2 - 7 \\rightarrow$ titik minimum $(-3, -7)$.',
            en: 'Inside the bracket **flip the sign** ($x = h$ is the axis of symmetry); outside the bracket **keep the sign** ($y = k$ is the min/max value). So $2(x + 3)^2 - 7$ has vertex $(-3, -7)$!'
          }
        }
      ],
      triggers: [
        {
          cue: { bm: 'Soalan sebut: "Garis lurus $y = mx + c$ ialah tangen kepada lengkung"', en: 'Exam says: "Line $y = mx + c$ is a tangent to the curve"' },
          action: { bm: 'Gantikan $y = mx + c$ ke dalam persamaan lengkung, susun bentuk am $Ax^2 + Bx + C = 0$, kemudian tulis **$B^2 - 4AC = 0$**.', en: 'Substitute the line into the curve, rearrange into $Ax^2 + Bx + C = 0$, and apply **$B^2 - 4AC = 0$**.' }
        },
        {
          cue: { bm: 'Soalan sebut: "Fungsi kuadratik sentiasa positif bagi semua nilai $x$"', en: 'Exam says: "Quadratic function is always positive for all $x$"' },
          action: { bm: 'Lengkung senyum terapung di atas paksi-$x$! Tulis dua syarat: **$a > 0$** dan **$b^2 - 4ac < 0$**.', en: 'Smiling curve floating above $x$-axis! Apply **$a > 0$** and **$b^2 - 4ac < 0$**.' }
        },
        {
          cue: { bm: 'Diberi punca $\\alpha, \\beta$ dan disuruh bina persamaan baharu dengan punca $2\\alpha, 2\\beta$', en: 'Given roots $\\alpha, \\beta$, asked to form new equation with roots $2\\alpha, 2\\beta$' },
          action: { bm: 'Jangan cari nilai perpuluhan $\\alpha$! Cari $\\alpha + \\beta = -\\frac{b}{a}$ dan $\\alpha\\beta = \\frac{c}{a}$, kemudian masuk ke **$x^2 - (\\text{HTP})x + (\\text{HDP}) = 0$**.', en: 'Do NOT solve for decimal $\\alpha$! Compute $\\alpha + \\beta = -\\frac{b}{a}$ and $\\alpha\\beta = \\frac{c}{a}$, then plug into **$x^2 - (\\text{SOR})x + (\\text{POR}) = 0$**.' }
        },
        {
          cue: { bm: 'Soalan sebut: "Ungkapkan $f(x) = -2x^2 + 8x - 5$ dalam bentuk $a(x - h)^2 + k$"', en: 'Exam says: "Express $f(x) = -2x^2 + 8x - 5$ in vertex form"' },
          action: { bm: 'Faktorkan $-2$ daripada dua sebutan pertama dahulu: $-2[x^2 - 4x] - 5$, tambah & tolak $(-2)^2$ di dalam kurungan besar, baru darab keluar $-2$!', en: 'Factor $-2$ out of the $x^2$ and $x$ terms FIRST: $-2[x^2 - 4x] - 5$, complete the square inside `[...]`, then distribute $-2$ carefully!' }
        }
      ],
      rxFix: {
        wrong: { bm: '$x^2 - 5x + 6 > 0 \\Rightarrow x > 2, x > 3$ (main teka tanda tanpa lakaran).', en: '$x^2 - 5x + 6 > 0 \\Rightarrow x > 2, x > 3$ (guessing inequality direction without sketching).' },
        right: { bm: 'Faktorkan $(x - 2)(x - 3) > 0$, lakar lengkung $\\cup$ memotong $2$ dan $3$, lorek atas paksi-$x$: **$x < 2$ atau $x > 3$**.', en: 'Factor $(x - 2)(x - 3) > 0$, sketch $\\cup$ crossing $2$ and $3$, shade above $x$-axis: **$x < 2$ or $x > 3$**.' }
      }
    },

    'f4-c3': {
      poster: 'assets/posters/f4-c3.jpg',
      posterTitle: {
        bm: 'Poster Visual Bab 3: Sistem Persamaan (3 Pemboleh Ubah Satah 3D & Serentak Tak Linear)',
        en: 'Chapter 3 Visual Poster: Systems of Equations (3D Planes & Non-Linear Simultaneous)'
      },
      vocabBridge: {
        bm: 'Kamus Istilah Poster: Planes = Satah Rata 3D • Unique Solution = 1 Titik Persilangan Unik • Infinite Solutions = Bersilang Sepanjang 1 Garis • No Solution = Satah Selari Tak Bertemu',
        en: 'Key KSSM Scope: 3.1 Linear Systems in 3 Variables ($x, y, z$) • 3.2 One Linear + One Non-Linear Equation'
      },
      painSummary: {
        bm: 'Dalam sistem 3 pemboleh ubah, pelajar sesat kerana menghapuskan huruf berbeza pada langkah kedua! Dalam persamaan tak linear pula, pelajar selalu salah kembang $(2y - 3)^2 = 4y^2 + 9$.',
        en: 'In 3-variable systems, students get lost by eliminating a different variable in the second pair! In non-linear systems, expanding $(2y - 3)^2$ as $4y^2 + 9$ destroys every mark after it.'
      },
      mentalModels: [
        {
          icon: '📐',
          tag: { bm: 'Visual 3 Keping Satah Kertas', en: '3D Paper Planes Model' },
          title: { bm: 'Kenapa Ada 3 Jenis Jawapan Sistem Linear 3D?', en: 'Visualizing the 3 Solution Outcomes in 3D' },
          desc: {
            bm: 'Persamaan $ax + by + cz = d$ ialah sekeping **satah rata 3D**. Tiga satah boleh bertemu di **1 bucu tajam** (Penyelesaian Unik), bertemu di sepanjang **1 tulang garis buku** ($0 = 0$, Penyelesaian Tak Terhingga), atau **selari langsung tak bersentuh** ($0 = 5$, Tiada Penyelesaian).',
            en: 'Each $ax + by + cz = d$ is a flat **3D plane**. Three planes can meet at **one corner point** (Unique), along **one spine line** ($0 = 0$, Infinite Solutions), or **never meet** ($0 = 5$, No Solution).'
          }
        },
        {
          icon: '🔻',
          tag: { bm: 'Strategi Corong 3 → 2 → 1', en: '3 → 2 → 1 Funnel Strategy' },
          title: { bm: 'Kunci Anti-Sesat: Hapuskan Huruf Yang SAMA Dua Kali!', en: 'Anti-Lost Rule: Eliminate the SAME Variable Twice!' },
          desc: {
            bm: 'Pilih **SATU mangsa paling senang** (contohnya $z$). Hapuskan $z$ daripada pasangan **(1) & (2)** untuk dapat Persamaan **(4)**, dan wajib hapuskan **$z$ juga** daripada pasangan **(2) & (3)** untuk dapat Persamaan **(5)**! Kini tinggal 2 huruf sahaja.',
            en: 'Pick **ONE easiest target** (say $z$). Eliminate $z$ from **(1) & (2)** to get **(4)**, and eliminate **the exact same $z$** from **(2) & (3)** to get **(5)**! Now solve **(4) & (5)** like Form 2 math.'
          }
        },
        {
          icon: '💣',
          tag: { bm: 'Perisai Kertas 2 (7 Markah)', en: 'Paper 2 7-Mark Shield' },
          title: { bm: 'Persamaan Serentak Linear + Tak Linear: Tulis Dua Kurungan!', en: 'Linear + Non-Linear: Write Double Brackets!' },
          desc: {
            bm: 'Apabila ganti $x = 5 - 2y$ ke dalam $x^2$, **JANGAN congak di kepala**! Tulis $(5 - 2y)(5 - 2y) = 25 - 20y + 4y^2$ supaya sebutan tengah $-20y$ tidak tercicir, dan jangan lupa cari pasangan $x$ bagi setiap nilai $y$!',
            en: 'When substituting $x = 5 - 2y$ into $x^2$, **NEVER expand in your head**! Write $(5 - 2y)(5 - 2y) = 25 - 20y + 4y^2$ so the middle term $-20y$ is never lost, and pair each $x$ with its matching $y$!'
          }
        }
      ],
      triggers: [
        {
          cue: { bm: 'Diberi satu persamaan linear ($2x + y = 7$) dan satu persamaan ada $x^2, y^2,$ atau $xy$', en: 'Given one linear ($2x + y = 7$) and one equation with $x^2, y^2,$ or $xy$' },
          action: { bm: 'Wajib guna **Kaedah Penggantian**! Jadikan pemboleh ubah berpekali $1$ (di sini $y = 7 - 2x$) sebagai perkara rumus supaya tiada pecahan!', en: 'Always use **Substitution**! Isolate the variable with coefficient $1$ ($y = 7 - 2x$) so you avoid messy fractions!' }
        },
        {
          cue: { bm: 'Semasa selesaikan sistem 3 pemboleh ubah, tiba-tiba dapat $0 = 0$', en: 'While solving a 3-variable system, all variables cancel to $0 = 0$' },
          action: { bm: 'Jangan panik! Itu bermaksud **penyelesaian tak terhingga** (bersilang pada satu garis). Biarkan $z = t$ dan ungkapkan $x, y$ dalam sebutan $t$.', en: 'Don\'t panic! $0 = 0$ means **infinitely many solutions** along a line. Let $z = t$ and express $x, y$ in terms of $t$.' }
        },
        {
          cue: { bm: 'Semasa selesaikan sistem 3 pemboleh ubah, dapat pernyataan palsu seperti $0 = -4$', en: 'Variables cancel out leaving a false statement like $0 = -4$' },
          action: { bm: 'Simpulkan terus: sistem tidak konsisten dan mempunyai **tiada penyelesaian** (satah tidak bersilang).', en: 'Conclude immediately: the system is inconsistent and has **no solution**.' }
        }
      ],
      rxFix: {
        wrong: { bm: '$(3 - 2y)^2 = 9 - 4y^2$ atau berhenti selepas dapat nilai $y_1, y_2$ tanpa mengira $x_1, x_2$.', en: 'Expanding $(3 - 2y)^2 = 9 - 4y^2$ or stopping after finding $y_1, y_2$ without computing $x_1, x_2$.' },
        right: { bm: '$(3 - 2y)(3 - 2y) = 9 - 12y + 4y^2$, dan tulis pasangan akhir dengan jelas: apabila $y = y_1, x = x_1$; apabila $y = y_2, x = x_2$.', en: '$(3 - 2y)(3 - 2y) = 9 - 12y + 4y^2$, and state both coordinate pairs $(x_1, y_1)$ and $(x_2, y_2)$ clearly.' }
      }
    },

    'f4-c4': {
      poster: 'assets/posters/f4-c4.jpg',
      posterTitle: {
        bm: 'Poster Visual Bab 4: Panduan Lengkap Indeks, Surd & Logaritma',
        en: 'Chapter 4 Visual Poster: Complete Guide to Indices, Surds & Logarithms'
      },
      vocabBridge: {
        bm: 'Kamus Istilah Poster: Base = Asas • Index/Exponent = Indeks/Kuasa • Conjugate Surds = Surd Konjugat • Rationalize Denominator = Nisbahkan Penyebut • Change of Base = Tukar Asas',
        en: 'Core Trio Connection: $a^x = y \\iff \\sqrt[x]{y} = a \\iff \\log_a y = x$ ($a > 0, a \\neq 1$)'
      },
      painSummary: {
        bm: 'Pelajar sering mencipta "hukum palsu" seperti $\\log_a(x + y) = \\log_a x + \\log_a y$, menggabungkan logaritma berlainan asas secara terus, dan terlupa uji semula jawapan untuk buang jawapan tak sah (*extraneous root*) apabila kuasa duakan persamaan surd!',
        en: 'Students invent fake laws like $\\log_a(x + y) = \\log_a x + \\log_a y$, combine logs of different bases directly, and forget to reject extraneous roots in surd equations!'
      },
      mentalModels: [
        {
          icon: '🔄',
          tag: { bm: 'Terjemahan 1 Saat', en: '1-Second Translation' },
          title: { bm: 'Logaritma Cuma Tanya: "Kuasa Berapa?"', en: 'Logarithm Simply Asks: "What Power?"' },
          desc: {
            bm: 'Bila nampak $\\log_2 8 = x$, tanya diri sendiri: **"2 kuasa berapa dapat 8?"** Jawapannya $3$! Untuk tukar $y = a^x$ kepada bentuk log, ingat: **Asas kekal jadi Asas** ($a^x = y \\iff \\log_a y = x$).',
            en: 'When you see $\\log_2 8 = x$, ask: **"2 to what power gives 8?"** Answer: $3$! When converting $a^x = y \\iff \\log_a y = x$, remember: **the Base stays the Base**!'
          }
        },
        {
          icon: '🧩',
          tag: { bm: 'Pasangan Kembar Konjugat', en: 'Conjugate Twin Trick' },
          title: { bm: 'Hapuskan Surd Di Bawah Dengan Beza Dua Kuasa Dua!', en: 'Eliminate Denominator Surds via Conjugate Pairs' },
          desc: {
            bm: 'Penyebut tak suka ada punca $\\sqrt{\\phantom{x}}$! Jika bawah ialah $(a + \\sqrt{b})$, darab atas dan bawah dengan kembar berlawanan tanda **$(a - \\sqrt{b})$** supaya penyebut bertukar bersih menjadi **$a^2 - b$**!',
            en: 'Never leave a surd in the denominator! Multiply top and bottom of $\\frac{k}{a + \\sqrt{b}}$ by its conjugate **$(a - \\sqrt{b})$** so the bottom cleans up to **$a^2 - b$**!'
          }
        },
        {
          icon: '🌉',
          tag: { bm: 'Jambatan Tukar Asas', en: 'Change-of-Base Bridge' },
          title: { bm: 'Asas Tak Sama? Jangan Gabung — Tukar Asas Dulu!', en: 'Different Log Bases? Build a Bridge First!' },
          desc: {
            bm: 'Hukum $\\log_a m + \\log_a n = \\log_a(mn)$ **wajib mempunyai asas $a$ yang sama**! Jika jumpa $\\log_2 x + \\log_4 x = 6$, tukarkan $\\log_4 x = \\frac{\\log_2 x}{\\log_2 4} = \\frac{\\log_2 x}{2}$ dahulu (atas pergi atas, asas pergi bawah!).',
            en: 'Log laws ONLY work when bases match! In $\\log_2 x + \\log_4 x = 6$, convert $\\log_4 x = \\frac{\\log_2 x}{\\log_2 4} = \\frac{\\log_2 x}{2}$ first ("argument up top, old base down below").'
          }
        }
      ],
      triggers: [
        {
          cue: { bm: 'Persamaan indeks bentuk tambah/tolak seperti $3^{2x} - 4(3^x) + 3 = 0$', en: 'Index equation with $+$ or $-$ between powers like $3^{2x} - 4(3^x) + 3 = 0$' },
          action: { bm: 'Jangan ambil log terus! Tulis $(3^x)^2 - 4(3^x) + 3 = 0$, gantikan **$u = 3^x$**, selesaikan kuadratik dalam $u$, kemudian cari $x$.', en: 'Cannot equate indices across $+$! Rewrite as $(3^x)^2 - 4(3^x) + 3 = 0$, substitute **$u = 3^x$**, solve quadratic, then solve for $x$.' }
        },
        {
          cue: { bm: 'Persamaan surd seperti $\\sqrt{2x + 3} = x$', en: 'Surd equation like $\\sqrt{2x + 3} = x$' },
          action: { bm: 'Asingkan surd seorang diri di satu sebelah, kuasa duakan kedua-dua belah, dan **WAJIB uji semula jawapan $x$ ke dalam persamaan asal** (tolak jawapan tak sah / *extraneous root*!).', en: 'Isolate the surd on one side, square both sides, and **ALWAYS test every root back in the original equation** to reject extraneous roots!' }
        },
        {
          cue: { bm: 'Persamaan eksponen asas berbeza yang tak boleh disamakan asasnya: $5^x = 7^{x-1}$', en: 'Exponential equation with incompatible bases like $5^x = 7^{x-1}$' },
          action: { bm: 'Ambil $\\log_{10}$ di kedua-dua belah: $x\\log_{10} 5 = (x - 1)\\log_{10} 7$, kembangkan dan kumpulkan sebutan $x$ di sebelah kiri.', en: 'Take $\\log_{10}$ on both sides: $x\\log_{10} 5 = (x - 1)\\log_{10} 7$, expand, and group all $x$ terms on one side.' }
        }
      ],
      rxFix: {
        wrong: { bm: '$\\log_a(x + y) = \\log_a x + \\log_a y$ atau $\\frac{\\log_2 8}{\\log_2 4} = \\log_2(8 - 4)$.', en: 'Writing $\\log_a(x + y) = \\log_a x + \\log_a y$ or $\\frac{\\log_2 8}{\\log_2 4} = \\log_2(8 - 4)$.' },
        right: { bm: 'Tiada hukum kembang untuk $\\log_a(x + y)$! Ingat: $\\log_a x + \\log_a y = \\log_a(xy)$ dan $\\log_a x - \\log_a y = \\log_a\\!\\left(\\frac{x}{y}\\right)$.', en: '$\\log_a(x + y)$ cannot be split! Only $\\log_a(xy) = \\log_a x + \\log_a y$ and $\\log_a\\!\\left(\\frac{x}{y}\\right) = \\log_a x - \\log_a y$.' }
      }
    },

    'f4-c5': {
      poster: 'assets/posters/f4-c5.jpg',
      posterTitle: {
        bm: 'Poster Visual Bab 5: Janjang Aritmetik (JA) vs Janjang Geometri (JG)',
        en: 'Chapter 5 Visual Poster: Progressions — Arithmetic (AP) vs Geometric (GP)'
      },
      vocabBridge: {
        bm: 'Kamus Istilah Poster: Constant Difference = Beza Sepunya ($d$) • Constant Ratio = Nisbah Sepunya ($r$) • $n$-th Term = Sebutan ke-$n$ ($T_n$) • Sum to Infinity = Hasil Tambah Ketakterhinggaan ($S_\\infty$)',
        en: 'Core Formulas: AP ($+d$) vs GP ($\\times r$) • Only GP with $|r| < 1$ has a Sum to Infinity $S_\\infty = \\frac{a}{1 - r}$'
      },
      painSummary: {
        bm: 'Sakit paling besar pelajar ialah keliru bila perlu guna rumus $T_n$ berbanding $S_n$ dalam soalan ayat harian, serta salah guna $S_n$ apabila soalan minta "jumlah dari sebutan ke-5 hingga ke-10"!',
        en: 'Students\' #1 pain in word problems is mixing up $T_n$ (single $n$-th term) vs $S_n$ (cumulative total of first $n$ terms), and computing "sum from 5th to 10th term" as $S_{10} - S_5$ instead of $S_{10} - S_4$!'
      },
      mentalModels: [
        {
          icon: '🪜',
          tag: { bm: 'Tangga (+d) vs Gandakan (×r)', en: 'Staircase (+d) vs Doubling (×r)' },
          title: { bm: 'Uji 3 Sebutan Pertama Sebelum Pilih Rumus!', en: 'Test the First 3 Terms Before Touching Any Formula!' },
          desc: {
            bm: 'Jangan main agak! Semak **Tolak** ($T_2 - T_1 = T_3 - T_2 \\rightarrow$ **JA / AP**, guna $d$) atau **Bahagi** ($\\frac{T_2}{T_1} = \\frac{T_3}{T_2} \\rightarrow$ **JG / GP**, guna $r$). Salah pilih janjang = 0 markah keseluruhan soalan!',
            en: 'Always test first: constant difference $T_2 - T_1 = T_3 - T_2$ means **AP ($d$)**; constant ratio $\\frac{T_2}{T_1} = \\frac{T_3}{T_2}$ means **GP ($r$)**.'
          }
        },
        {
          icon: '🎯',
          tag: { bm: 'Ubat Keliru Tn vs Sn', en: 'Tn vs Sn Cure' },
          title: { bm: 'Simpanan "Pada Bulan Ke-12" ($T_{12}$) vs "Jumlah Selepas 12 Bulan" ($S_{12}$)', en: '"In the 12th Month" ($T_{12}$) vs "Total After 12 Months" ($S_{12}$)' },
          desc: {
            bm: '**$T_n$** ialah nilai pada **satu kotak tunggal ke-$n$ sahaja**. **$S_n$** ialah jumlah kesemua kotak dari kotak **ke-1 hingga ke-$n$**. Maka hasil tambah dari sebutan ke-5 hingga ke-10 ialah **$S_{10} - S_4$** (tolak 4 kotak pertama supaya kotak ke-5 kekal!).',
            en: '**$T_n$** is a **single $n$-th bucket**; **$S_n$** is the **cumulative sum from bucket 1 to $n$**. So the sum from the 5th to 10th term is **$S_{10} - S_4$** (keep the 5th term in!).'
          }
        },
        {
          icon: '♾️',
          tag: { bm: 'Perpuluhan Berulang = JG!', en: 'Recurring Decimal = GP!' },
          title: { bm: 'Hasil Tambah Ketakterhinggaan $S_\\infty = \\frac{a}{1 - r}$', en: 'Sum to Infinity Converges Only When $|r| < 1$' },
          desc: {
            bm: 'Jika nisbah $|r| < 1$ (contohnya $r = \\frac{1}{2}$ atau $-0.3$), saiz sebutan mengecil menuju sifar lalu jumlah keseluruhannya menghampiri nilai tetap $S_\\infty = \\frac{a}{1 - r}$. Gunakan ini untuk tukar perpuluhan berulang seperti $0.272727\\dots = 0.27 + 0.0027 + \\dots$ kepada pecahan tepat!',
            en: 'When $|r| < 1$, terms shrink toward zero so the infinite sum converges to $S_\\infty = \\frac{a}{1 - r}$. Break recurring decimals like $0.2727\\dots = 0.27 + 0.0027 + \\dots$ into a GP!'
          }
        }
      ],
      triggers: [
        {
          cue: { bm: 'Diberi ungkapan $S_n = 3n^2 + 5n$ sahaja, diminta cari sebutan ke-$n$ atau $T_6$', en: 'Given a formula for $S_n = 3n^2 + 5n$, asked to find $T_6$ or $a$ and $d$' },
          action: { bm: 'Guna senjata rahsia: **$a = T_1 = S_1$** dan **$T_6 = S_6 - S_5$**! Selesai dalam 15 saat tanpa perlu rumus panjang!', en: 'Use the golden identity: **$a = T_1 = S_1$** and **$T_6 = S_6 - S_5$**! Done in 15 seconds!' }
        },
        {
          cue: { bm: 'Soalan sebut: "Tiga sebutan berturutan $p, q, s$ membentuk JA / JG"', en: 'Exam says: "Three consecutive terms $p, q, s$ form an AP / GP"' },
          action: { bm: 'Bagi **JA**: tulis $q - p = s - q \\Rightarrow 2q = p + s$. Bagi **JG**: tulis $\\frac{q}{p} = \\frac{s}{q} \\Rightarrow q^2 = ps$.', en: 'For **AP**: write $q - p = s - q \\Rightarrow 2q = p + s$. For **GP**: write $\\frac{q}{p} = \\frac{s}{q} \\Rightarrow q^2 = ps$.' }
        },
        {
          cue: { bm: 'Soalan sebut: "Cari bilangan sebutan minimum supaya hasil tambah melebihi 1000"', en: 'Exam says: "Find minimum number of terms for the sum to exceed 1000"' },
          action: { bm: 'Bina ketaksamaan $S_n > 1000$, selesaikan untuk $n$ (guna $\\log_{10}$ jika JG — hati-hati tanda ketaksamaan terbalik apabila bahagi dengan $\\log_{10}(0.8)$ yang negatif!), dan bundarkan ke integer **atas**.', en: 'Solve $S_n > 1000$ (watch out: dividing by $\\log_{10} r$ when $0 < r < 1$ **flips** the inequality sign because $\\log_{10} r < 0$!), then round UP to the next integer.' }
        }
      ],
      rxFix: {
        wrong: { bm: 'Hasil tambah sebutan ke-4 hingga ke-9 dikira sebagai $S_9 - S_4$.', en: 'Computing sum from the 4th to 9th term as $S_9 - S_4$ (accidentally deleting $T_4$).' },
        right: { bm: 'Tolak sehingga sebutan **sebelumnya** sahaja: $T_4 + T_5 + \\dots + T_9 = S_9 - S_3$.', en: 'Subtract only up to the **preceding** term: $T_4 + \\dots + T_9 = S_9 - S_3$.' }
      }
    },

    'f4-c6': {
      poster: 'assets/posters/f4-c6.jpg',
      posterTitle: {
        bm: 'Poster Visual Bab 6: Hukum Linear — Meluruskan Lengkung Kepada Y = mX + c',
        en: 'Chapter 6 Visual Poster: Linear Law — Turning Curves into Straight Lines Y = mX + c'
      },
      vocabBridge: {
        bm: 'Kamus Istilah Poster: Linearization = Tukar ke Bentuk Linear • Line of Best Fit = Garis Penyuaian Terbaik (Garis Paling Seimbang) • Gradient = Kecerunan ($m$) • Y-intercept = Pintasan-$Y$ ($c$)',
        en: 'Golden Rule: Capital $Y$ and $X$ may contain variables $x, y$ ONLY — constants ($a, b, p, q$) belong exclusively inside $m$ and $c$!'
      },
      painSummary: {
        bm: 'Pelajar sering membiarkan pemalar tak diketahui ($p$ atau $q$) melekat pada paksi $X$, salah baca pintasan-$Y$ apabila graf tidak bermula dari $X = 0$, dan terlupa $\\log_{10} c = 2 \\Rightarrow c = 10^2 = 100$!',
        en: 'Students accidentally leave unknown constants ($p, q$) attached to $X$, misread the $Y$-intercept when the $X$-axis doesn\'t start at $0$, and write $\\log_{10} c = 2 \\Rightarrow c = 2$ instead of $10^2 = 100$!'
      },
      mentalModels: [
        {
          icon: '👔',
          tag: { bm: 'Analogi Seterika Lengkung', en: 'Curve-Ironing Model' },
          title: { bm: 'Kenapa Kita Tukar $y, x$ Kepada Huruf Besar $Y = mX + c$?', en: 'Why Transform Into Capital $Y = mX + c$?' },
          desc: {
            bm: 'Melukis lengkung tepat dengan tangan sangat sukar, tetapi melukis **garis lurus menggunakan pembaris** sangat tepat! Sebaik sahaja lengkung diluruskan kepada $Y = mX + c$, **kecerunan $m$** dan **pintasan $c$** terus membongkar nilai pemalar tersembunyi!',
            en: 'Freehand curves are hard to fit accurately, whereas a **straight ruler line** is super precise! Once linearized to $Y = mX + c$, the **gradient $m$** and **$Y$-intercept $c$** unlock the hidden constants.'
          }
        },
        {
          icon: '🛠️',
          tag: { bm: '2 Cara Tukar Jadi Garis Lurus', en: '2 Transformation Weapons' },
          title: { bm: 'Bila Guna Bahagi Algebra vs Bila Guna $\\log_{10}$?', en: 'Algebraic Division vs Logarithmic Transformation' },
          desc: {
            bm: '1️⃣ **Ada tanda $+$ atau $-$ polinomial** (seperti $y = ax^2 + bx$): darab atau bahagi seluruh persamaan dengan $x$ atau $x^2$ ($\\frac{y}{x} = ax + b$).<br>2️⃣ **Satu sebutan hasil darab berkuasa** (seperti $y = ab^x$ atau $y = px^n$): ambil **$\\log_{10}$ di kedua-dua belah** ($\\log_{10} y = (\\log_{10} b)x + \\log_{10} a$)!',
            en: '1️⃣ **Polynomial terms separated by $+ / -$** ($y = ax^2 + bx$): divide/multiply through by $x$ ($\\frac{y}{x} = ax + b$).<br>2️⃣ **Product with variable in power** ($y = ab^x$ or $y = px^n$): take **$\\log_{10}$ on both sides**!'
          }
        },
        {
          icon: '📏',
          tag: { bm: 'Peraturan Kertas Graf Kertas 2', en: 'Paper 2 Graph Paper Rules' },
          title: { bm: 'Garis Penyuaian Terbaik (*Line of Best Fit*) = Seimbang Atas & Bawah!', en: 'Line of Best Fit = Balanced Points!' },
          desc: {
            bm: 'Dalam Kertas 2 (10 markah!), bina jadual nilai $X$ dan $Y$ kepada **2 tempat perpuluhan**, plot pangkah halus $\\times$, dan lukis **1 garis lurus panjang** melalui seberapa banyak titik dengan baki titik seimbang di kiri/kanan garis.',
            en: 'In Paper 2 (10 marks!), tabulate $X$ and $Y$ to **2 d.p.**, plot neat $\\times$ crosses, and draw **one single straight ruler line** balancing any slightly scattered points evenly on both sides.'
          }
        }
      ],
      triggers: [
        {
          cue: { bm: 'Graf linear diberi dengan paksi menegak $\\frac{y}{x^2}$ dan paksi mengufuk (mendatar) $\\frac{1}{x}$', en: 'Linear graph given with vertical axis $\\frac{y}{x^2}$ and horizontal axis $\\frac{1}{x}$' },
          action: { bm: 'Jangan mula daripada persamaan lengkung dahulu jika mengelirukan — tulis terus **$\\frac{y}{x^2} = m\\left(\\frac{1}{x}\\right) + c$**, cari $m$ dan $c$ daripada graf, baru darab $x^2$ untuk padankan persamaan asal!', en: 'Write the straight-line template **$\\frac{y}{x^2} = m\\left(\\frac{1}{x}\\right) + c$** directly from the given axes, find $m$ and $c$ first, then multiply by $x^2$ to compare!' }
        },
        {
          cue: { bm: 'Pintasan pada paksi-$Y$ diperoleh sebagai $\\log_{10} p = 1.301$', en: '$Y$-intercept gives $\\log_{10} p = 1.301$' },
          action: { bm: 'Tekan antilog pada kalkulator (**SHIFT + log**): $p = 10^{1.301} = 20.00$!', en: 'Apply antilog (**SHIFT + log**): $p = 10^{1.301} = 20.00$!' }
        },
        {
          cue: { bm: 'Paksi mengufuk (mendatar) kertas graf bermula pada $X = 2$ (bukan $X = 0$!)', en: 'Horizontal axis on the graph starts at $X = 2$ instead of $X = 0$' },
          action: { bm: '**JANGAN baca titik potong garis menegak tepi sebagai $c$**! Kira kecerunan $m$ dahulu, kemudian ganti satu titik $(X_1, Y_1)$ pada garis ke dalam $Y_1 = mX_1 + c$ untuk kira $c$ sebenar!', en: '**NEVER read the left border intersection as $c$** when $X \\neq 0$! Find gradient $m$ first, then substitute a point $(X_1, Y_1)$ on the line into $Y_1 = mX_1 + c$!' }
        }
      ],
      rxFix: {
        wrong: { bm: 'Daripada $xy = px^2 + q$, menulis $y = px + \\frac{q}{x}$ lalu memilih $Y = y, X = x$ (masih ada $\\frac{q}{x}$ tak linear!).', en: 'Turning $xy = px^2 + q$ into $y = px + \\frac{q}{x}$ where the last term still contains $x$!' },
        right: { bm: 'Kekalkan $Y = xy$ dan $X = x^2$ (terus linear $xy = p(x^2) + q$!), atau bahagi $x^2$: $\\frac{y}{x} = q\\left(\\frac{1}{x^2}\\right) + p$.', en: 'Either plot $Y = xy$ against $X = x^2$ directly, or divide by $x^2$ to get $\\frac{y}{x} = q\\left(\\frac{1}{x^2}\\right) + p$.' }
      }
    },

    'f4-c7': {
      poster: 'assets/posters/f4-c7.jpg',
      posterTitle: {
        bm: 'Poster Visual Bab 7: Geometri Koordinat (Pembahagi Tembereng, Tali Kasut & Lokus)',
        en: 'Chapter 7 Visual Poster: Mastering Coordinate Geometry (Divisor, Shoelace Area & Locus)'
      },
      vocabBridge: {
        bm: 'Kamus Istilah Poster: Divisor of a Line = Pembahagi Tembereng Garis ($m:n$) • Midpoint = Titik Tengah ($1:1$) • Shoelace Formula = Rumus Luas Tali Kasut • Locus = Lokus Titik Bergerak $P(x, y)$',
        en: 'Parallel vs Perpendicular: Parallel $m_1 = m_2$ • Perpendicular $m_1 m_2 = -1$ (negative reciprocal!)'
      },
      painSummary: {
        bm: 'Tiga kesilapan paling kerap: mendarab nisbah $m$ dengan titik bersebelahan sendiri (sepatutnya darab silang!), terlupa ulang koordinat pertama di hujung matriks luas poligon, dan tertinggal modulus $|\\dots|$.',
        en: 'Top 3 student traps: multiplying ratio $m$ with the adjacent endpoint instead of cross-multiplying, forgetting to repeat $(x_1, y_1)$ at the end of the Shoelace matrix, and forgetting $m_1 m_2 = -1$ for perpendicular bisectors.'
      },
      mentalModels: [
        {
          icon: '⚔️',
          tag: { bm: 'Mnemonik: Darab Silang Jauh', en: 'Hook: Cross-Multiply Opposite' },
          title: { bm: 'Pembahagi Tembereng $m : n$ — Silangkan Ke Seberang!', en: 'Line Divisor $m : n$ — Cross Over to Opposite Ends!' },
          desc: {
            bm: 'Lukis tembereng garis kecil dahulu! Nisbah $m$ di sebelah $A(x_1, y_1)$ mesti **menyilang darab $B(x_2, y_2)$ di seberang sana**, dan $n$ menyilang darab $A$: $P = \\left(\\frac{nx_1 + mx_2}{m + n}, \\frac{ny_1 + my_2}{m + n}\\right)$. Bila $m = n = 1$, jadilah Titik Tengah!',
            en: 'Always sketch the segment first! Ratio $m$ near $A(x_1, y_1)$ reaches across to multiply **$B(x_2, y_2)$**, while $n$ multiplies **$A(x_1, y_1)$**: $P = \\left(\\frac{nx_1 + mx_2}{m + n}, \\frac{ny_1 + my_2}{m + n}\\right)$.'
          }
        },
        {
          icon: '👟',
          tag: { bm: 'Rumus Tali Kasut (Shoelace)', en: 'Shoelace Polygon Matrix' },
          title: { bm: 'Wajib Tutup Semula Poligon Dengan Bucu Pertama!', en: 'Close the Polygon Loop by Repeating Vertex 1!' },
          desc: {
            bm: 'Susun bucu mengikut tertib keliling poligon, dan **WAJIB tulis semula $(x_1, y_1)$ di lajur paling hujung**! Kira $\\frac{1}{2} |(\\text{Hasil darab } \\searrow) - (\\text{Hasil darab } \\swarrow)|$. Jika diberi nilai luas dan diminta cari koordinat $k$, buka modulus kepada **dua kes $\\pm$**!',
            en: 'List vertices in order around the perimeter and **MUST repeat $(x_1, y_1)$ at the end**! Compute $\\frac{1}{2}|(\\sum \\searrow) - (\\sum \\swarrow)|$. When finding an unknown coordinate $k$ from a given area, split $|\\dots|$ into **both $+$ and $-$ cases**!'
          }
        },
        {
          icon: '👣',
          tag: { bm: 'Lokus = Jejak Kaki P(x, y)', en: 'Locus = Footprints of P(x, y)' },
          title: { bm: 'Tukar Ayat Jarak Kepada Pythagoras & Kuasa Duakan!', en: 'Translate Distance Rules Directly into Pythagoras!' },
          desc: {
            bm: 'Biarkan titik bergerak ialah $P(x, y)$. Jika soalan sebut $PA = 2PB$, tulis terus $\\sqrt{(x - x_A)^2 + (y - y_A)^2} = 2\\sqrt{(x - x_B)^2 + (y - y_B)^2}$, kemudian kuasa duakan kedua-dua belah (**jangan lupa kuasa duakan nombor $2$ menjadi $4$**!).',
            en: 'Let the moving point be $P(x, y)$. If $PA = 2PB$, square both sides to get $PA^2 = 4PB^2$ (**don\'t forget $2^2 = 4$**!), then expand and simplify cleanly.'
          }
        }
      ],
      triggers: [
        {
          cue: { bm: 'Soalan sebut: "Cari persamaan pembahagi dua sama serenjang bagi garis $AB$"', en: 'Exam says: "Find the equation of the perpendicular bisector of $AB$"' },
          action: { bm: '3 langkah tetap: (1) Cari **Titik Tengah $M$** bagi $AB$, (2) Cari kecerunan $m_{AB}$, kemudian tukar kepada **$m_\\perp = -\\frac{1}{m_{AB}}$**, (3) Guna $y - y_M = m_\\perp(x - x_M)$.', en: '3 fixed steps: (1) Find **Midpoint $M$** of $AB$, (2) Find $m_{AB}$ and flip to **$m_\\perp = -\\frac{1}{m_{AB}}$**, (3) Apply $y - y_M = m_\\perp(x - x_M)$.' }
        },
        {
          cue: { bm: 'Soalan sebut: "Garis lurus memotong paksi-$x$ pada $a$ dan paksi-$y$ pada $b$"', en: 'Exam says: "Line has $x$-intercept $a$ and $y$-intercept $b$"' },
          action: { bm: 'Guna terus **Bentuk Pintasan**: $\\frac{x}{a} + \\frac{y}{b} = 1$, dan kecerunannya ialah $m = -\\frac{b}{a}$!', en: 'Use **Intercept Form** instantly: $\\frac{x}{a} + \\frac{y}{b} = 1$, with gradient $m = -\\frac{b}{a}$!' }
        },
        {
          cue: { bm: 'Soalan sebut: "Lokus $P$ bergerak supaya $\\angle APB = 90^\\circ$ (atau jarak dari $C$ sentiasa $r$)"', en: 'Exam says: "Point $P$ moves such that $\\angle APB = 90^\\circ$"' },
          action: { bm: 'Guna sifat serenjang $m_{PA} \\times m_{PB} = -1$ (iaitu $\\frac{y - y_A}{x - x_A} \\cdot \\frac{y - y_B}{x - x_B} = -1$) atau Pythagoras $PA^2 + PB^2 = AB^2$ — hasilnya ialah persamaan bulatan berdiameter $AB$!', en: 'Apply $m_{PA} \\cdot m_{PB} = -1$ or $PA^2 + PB^2 = AB^2$ to obtain the circle with diameter $AB$!' }
        }
      ],
      rxFix: {
        wrong: { bm: 'Dalam $PA : PB = 2 : 3$, menulis $PA^2 = \\frac{2}{3}PB^2$ (terlupa kuasa duakan nisbah!).', en: 'From $PA : PB = 2 : 3$, writing $PA^2 = \\frac{2}{3}PB^2$ without squaring the ratio!' },
        right: { bm: 'Darab silang dahulu: $3PA = 2PB \\Rightarrow$ kuasa duakan penuh menjadi **$9PA^2 = 4PB^2$**!', en: 'Cross-multiply first: $3PA = 2PB \\Rightarrow$ square everything cleanly to get **$9PA^2 = 4PB^2$**!' }
      }
    },

    'f4-c8': {
      poster: 'assets/posters/f4-c8.jpg',
      posterTitle: {
        bm: 'Poster Visual Bab 8: Asas Vektor — Arah, Magnitud, Hukum Segi Tiga & Vektor Unit',
        en: 'Chapter 8 Visual Poster: Vector Essentials — Direction, Magnitude, Geometric Laws & Unit Vectors'
      },
      vocabBridge: {
        bm: 'Kamus Istilah Poster: Scalar = Skalar (Magnitud sahaja) • Vector = Vektor (Magnitud + Arah) • Parallel = Selari ($\\vec{a} = k\\vec{b}$) • Collinear = Segaris • Resultant Vector = Vektor Paduan • Unit Vector = Vektor Unit ($\\hat{r}$)',
        en: 'Handwriting Rule in SPM: Printed bold $\\mathbf{a}$ MUST be written with a wavy underline $\\underset{\\sim}{a}$ (or arrow $\\overrightarrow{AB}$) on exam paper!'
      },
      painSummary: {
        bm: 'Pelajar hilang markah percuma kerana tertinggal tanda vektor $\\underset{\\sim}{a}$, terbalik tanda apabila patah balik arah anak panah ($\\overrightarrow{AO} = -\\overrightarrow{OA}$), dan gagal membuktikan "Segaris" kerana tidak menulis titik sepunya!',
        en: 'Students lose easy marks by omitting vector notation, forgetting to flip the sign when reversing direction ($\\overrightarrow{AO} = -\\overrightarrow{OA}$), and omitting the common point when proving collinearity!'
      },
      mentalModels: [
        {
          icon: '🧭',
          tag: { bm: 'Domino Huruf Tengah', en: 'Middle-Letter Domino Rule' },
          title: { bm: 'Hukum Segi Tiga Tanpa Perlu Hafal: Cantumkan Huruf Tengah!', en: 'Triangle Law Made Effortless: Match the Middle Letter!' },
          desc: {
            bm: 'Nak cari $\\overrightarrow{AB}$? Pilih mana-mana titik persinggahan $O$ yang diketahui: **$\\overrightarrow{AB} = \\overrightarrow{AO} + \\overrightarrow{OB}$** (nampak tak huruf tengah **$O$ bertemu $O$**?). Ingat: $\\overrightarrow{AO}$ ialah lawan arah $\\overrightarrow{OA}$, jadi **$\\overrightarrow{AO} = -\\overrightarrow{OA}$**!',
            en: 'Need $\\overrightarrow{AB}$? Route through any known point $O$: **$\\overrightarrow{AB} = \\overrightarrow{AO} + \\overrightarrow{OB}$** (the two middle $O$s kiss and merge!). Remember reversing direction flips the sign: **$\\overrightarrow{AO} = -\\overrightarrow{OA}$**.'
          }
        },
        {
          icon: '🛤️',
          tag: { bm: 'Selari vs Segaris', en: 'Parallel vs Collinear' },
          title: { bm: 'Segaris = Selari + Ada 1 Titik Sepunya!', en: 'Collinear = Parallel + One Shared Point!' },
          desc: {
            bm: 'Dua landasan kereta api adalah **Selari** ($\\overrightarrow{AB} = k\\overrightarrow{CD}$). Tetapi tiga tiang lampu $A, B, C$ berada pada satu garis lurus (**Segaris**) jika **$\\overrightarrow{AB} = k\\overrightarrow{BC}$ DAN titik $B$ ialah titik sepunya** — wajib tulis kedua-duanya untuk markah penuh!',
            en: 'Parallel vectors satisfy $\\overrightarrow{AB} = k\\overrightarrow{CD}$. For points $A, B, C$ to be **Collinear**, show **$\\overrightarrow{AB} = k\\overrightarrow{BC}$** AND explicitly state **"parallel with common point $B$"**!'
          }
        },
        {
          icon: '1️⃣',
          tag: { bm: 'Resipi Vektor Unit', en: 'Unit Vector Recipe' },
          title: { bm: 'Vektor Unit $\\hat{r}$ = Bahagikan Vektor Dengan Panjangnya Sendiri!', en: 'Unit Vector $\\hat{r}$ = Divide Vector by Its Own Length!' },
          desc: {
            bm: 'Jika $\\vec{r} = x\\vec{i} + y\\vec{j}$, panjangnya ialah $|\\vec{r}| = \\sqrt{x^2 + y^2}$ (Pythagoras!). Maka vektor sepanjang **1 unit** dalam arah $\\vec{r}$ ialah **$\\hat{r} = \\frac{x\\vec{i} + y\\vec{j}}{\\sqrt{x^2 + y^2}}$**.',
            en: 'For $\\vec{r} = x\\vec{i} + y\\vec{j}$, its magnitude is $|\\vec{r}| = \\sqrt{x^2 + y^2}$. Dividing $\\vec{r}$ by its own length shrinks/scales it to length $1$: **$\\hat{r} = \\frac{\\vec{r}}{|\\vec{r}|}$**.'
          }
        }
      ],
      triggers: [
        {
          cue: { bm: 'Kertas 2: Dua ungkapan berbeza diberi bagi titik persilangan $X$, diminta cari pemalar $h$ dan $k$', en: 'Paper 2: Two expressions for intersection point $X$ with scalars $h$ and $k$' },
          action: { bm: 'Ungkapkan $\\overrightarrow{OX}$ melalui **dua jalan berbeza** dalam sebutan vektor tak selari $\\underset{\\sim}{a}$ dan $\\underset{\\sim}{b}$, samakan kedua-duanya, kemudian **bandingkan pekali $\\underset{\\sim}{a}$ dan pekali $\\underset{\\sim}{b}$** secara serentak!', en: 'Express $\\overrightarrow{OX}$ via **two different paths** in terms of non-parallel $\\vec{a}$ and $\\vec{b}$, equate them, and **equate coefficients of $\\vec{a}$ and $\\vec{b}$** simultaneously!' }
        },
        {
          cue: { bm: 'Soalan sebut: "Diberi $\\vec{u}$ dan $\\vec{v}$ adalah selari, cari nilai $m$"', en: 'Exam says: "Given $\\vec{u}$ and $\\vec{v}$ are parallel, find $m$"' },
          action: { bm: 'Tulis $\\vec{u} = \\lambda\\vec{v}$ (atau guna jalan pintas nisbah komponen: $\\frac{x_1}{x_2} = \\frac{y_1}{y_2}$) dan selesaikan terus!', en: 'Set $\\vec{u} = \\lambda\\vec{v}$ (or equate component ratios $\\frac{x_1}{x_2} = \\frac{y_1}{y_2}$) and solve!' }
        },
        {
          cue: { bm: 'Soalan sebut: "Vektor $\\vec{p}$ adalah segaris / selari dengan paksi-$x$"', en: 'Exam says: "Vector $\\vec{p}$ is parallel to the $x$-axis"' },
          action: { bm: 'Selari dengan paksi-$x$ bermaksud tiada pergerakan menegak — samakan **komponen $\\vec{j}$ (nilai $y$) dengan $0$**! (Jika selari paksi-$y$, samakan komponen $\\vec{i}$ dengan $0$).', en: 'Parallel to the $x$-axis means zero vertical component — set the **$\\vec{j}$ coefficient to $0$**! (Parallel to $y$-axis $\\Rightarrow \\vec{i}$ coefficient $= 0$).' }
        }
      ],
      rxFix: {
        wrong: { bm: 'Mengira $|3\\vec{i} - 4\\vec{j}| = \\sqrt{3^2 - 4^2} = \\sqrt{-7}$ (tolak kuasa dua negatif!).', en: 'Computing $|3\\vec{i} - 4\\vec{j}| = \\sqrt{3^2 - 4^2}$ (subtracting instead of adding squares!).' },
        right: { bm: 'Magnitud sentiasa tambah kuasa dua: $|3\\vec{i} - 4\\vec{j}| = \\sqrt{3^2 + (-4)^2} = \\sqrt{9 + 16} = 5$.', en: 'Magnitude ALWAYS sums squares: $|3\\vec{i} - 4\\vec{j}| = \\sqrt{3^2 + (-4)^2} = \\sqrt{25} = 5$.' }
      }
    },

    'f4-c9': {
      poster: 'assets/posters/f4-c9.jpg',
      posterTitle: {
        bm: 'Poster Visual Bab 9: Penyelesaian Segi Tiga (Petua Sinus, Kosinus, Kes 2 Segi Tiga / Ambiguous Case & Luas)',
        en: 'Chapter 9 Visual Poster: Solution of Triangles (Sine Rule, Cosine Rule, Ambiguous Case & Area)'
      },
      vocabBridge: {
        bm: 'Kamus Istilah Poster: Opposite Pairs = Pasangan Sisi-Sudut Bertentangan • Included Angle (SAS) = Sudut Kandung (Kepit) • Ambiguous Case = Kes Berambiguiti (2 Segi Tiga Mungkin) • Acute / Obtuse = Tirus / Cakah',
        en: 'Calculator Alert: Make sure your calculator top screen shows `[D]` (Degrees), NOT `[R]` (Radians), throughout Chapter 9!'
      },
      painSummary: {
        bm: 'Pelajar sering tersalah guna Petua Sinus pada segi tiga SAS, terlupa tekan punca kuasa dua $\\sqrt{\\phantom{x}}$ pada hujung Petua Kosinus, dan terlepas segi tiga kedua (sudut cakah $180^\\circ - \\theta$) dalam Kes Berambiguiti (*Ambiguous Case* — 2 segi tiga mungkin)!',
        en: 'Students try to force Sine Rule onto SAS triangles, forget $\\sqrt{\\phantom{x}}$ at the end of Cosine Rule, and miss the obtuse angle $180^\\circ - \\theta$ in the SSA Ambiguous Case!'
      },
      mentalModels: [
        {
          icon: '🎯',
          tag: { bm: 'Kompas Pilih Rumus 3 Saat', en: '3-Second Rule Selector' },
          title: { bm: 'Pasangan Bertentangan = Sinus! Kepit SAS / 3 Sisi = Kosinus!', en: 'Opposite Pair = Sine Rule! Sandwich SAS / 3 Sides = Cosine Rule!' },
          desc: {
            bm: 'Lukis anak panah dari sudut yang diketahui ke sisi di hadapannya. **Ada sekurang-kurangnya 1 pasangan lengkap Sisi ↔ Sudut Bertentangan?** → Guna **Petua Sinus**! **Tiada pasangan lengkap** (2 sisi kepit 1 sudut di tengah **SAS**, atau diberi **3 sisi SSS**)? → Wajib guna **Petua Kosinus**!',
            en: 'Have a complete **side + opposite angle pair**? → **Sine Rule**! Have **2 sides sandwiching an included angle (SAS)** or **all 3 sides (SSS)** with zero opposite pair? → **Cosine Rule**!'
          }
        },
        {
          icon: '🪃',
          tag: { bm: 'Hayunan 2 Segi Tiga (Ambiguous Case SSA)', en: 'Swinging Gate Ambiguous Case' },
          title: { bm: 'Kenapa Satu Data Boleh Hasilkan 2 Segi Tiga Berbeza?', en: 'Why SSA Can Swing Into Two Valid Triangles' },
          desc: {
            bm: 'Dalam kes **SSA** (diberi sudut tirus $A$, sisi sebelah $b$, dan sisi bertentangan $a$ yang **lebih pendek daripada $b$** tetapi cukup panjang untuk cecah tapak), sisi $a$ boleh berayun ke luar (sudut tirus $\\theta$) atau **berayun ke dalam** membentuk **sudut cakah $180^\\circ - \\theta$**!',
            en: 'When given acute $\\angle A$, adjacent side $b$, and a shorter opposite side $a$ ($b\\sin A < a < b$), side $a$ swings like a gate to hit the base twice — once forming acute $\\theta$, and once inward forming **obtuse $180^\\circ - \\theta$**!'
          }
        },
        {
          icon: '📐',
          tag: { bm: 'Luas Tanpa Tinggi Tegak', en: 'Area Without Height' },
          title: { bm: 'Sudut Mesti DIKEPIT Oleh Dua Sisi ($\\frac{1}{2}ab\\sin C$)!', en: 'Angle Must Be SANDWICHED Between the Two Sides!' },
          desc: {
            bm: 'Jangan darab sebarang dua sisi! Dalam $\\text{Luas} = \\frac{1}{2}ab\\sin C$, huruf semuanya berbeza ($a, b,$ dan sudut $C$ tepat di celah-celah antara $a$ dan $b$). Jika hanya 3 sisi diketahui tanpa sebarang sudut, guna **Rumus Heron**: $s = \\frac{a+b+c}{2}$, $\\text{Luas} = \\sqrt{s(s-a)(s-b)(s-c)}$.',
            en: 'In $\\text{Area} = \\frac{1}{2}ab\\sin C$, notice all three letters are distinct ($a, b,$ and angle $C$ sandwiched right between them!). If only 3 sides are known, use **Heron\'s Formula**.'
          }
        }
      ],
      triggers: [
        {
          cue: { bm: 'Kertas 2: "Lakar $\\triangle A\'BC$ yang mempunyai bentuk berbeza daripada $\\triangle ABC$ dengan $A\'B = AB$, $BC$, dan $\\angle ACB$ kekal sama"', en: 'Paper 2: "Sketch $\\triangle A\'BC$ different in shape from $\\triangle ABC$ with $A\'B = AB$, $BC$, and $\\angle ACB$ unchanged"' },
          action: { bm: 'Ayunkan sisi bertentangan dengan sudut tetap ($\\angle ACB$) ke dalam supaya terbentuk segi tiga sama kaki kecil $\\triangle ABA\'$, maka **$\\angle BA\'C = 180^\\circ - \\angle BAC$**!', en: 'Swing the side opposite the fixed angle $\\angle ACB$ inward to form an isosceles $\\triangle ABA\'$, giving obtuse **$\\angle BA\'C = 180^\\circ - \\angle BAC$**!' }
        },
        {
          cue: { bm: 'Soalan sebut: "Cari sudut terbesar dalam segi tiga bersisi $5\\text{ cm}, 8\\text{ cm}, 11\\text{ cm}$"', en: 'Exam says: "Find the largest angle in the triangle with sides $5, 8, 11$"' },
          action: { bm: '**Sudut terbesar sentiasa bertentangan dengan sisi terpanjang ($11\\text{ cm}$)**! Guna Petua Kosinus: $\\cos \\theta = \\frac{5^2 + 8^2 - 11^2}{2(5)(8)}$ (nilai kosinus negatif = sudut cakah $> 90^\\circ$!).', en: '**The largest angle ALWAYS faces the longest side ($11$)**! Apply $\\cos \\theta = \\frac{5^2 + 8^2 - 11^2}{2(5)(8)}$ (negative cosine automatically confirms an obtuse angle!).' }
        },
        {
          cue: { bm: 'Soalan minta "jarak terdekat dari bucu $B$ ke garis lurus $AC$"', en: 'Exam asks for "the shortest distance from vertex $B$ to line $AC$"' },
          action: { bm: 'Jarak terdekat ialah **tinggi tegak $h$ ($90^\\circ$)**! Samakan luas segi tiga yang sudah dikira dengan $\\frac{1}{2} \\times AC \\times h$ untuk terus dapat $h$!', en: 'Shortest distance = **perpendicular height $h$**! Equate the triangle\'s known Area to $\\frac{1}{2} \\times AC \\times h$ and solve for $h$ in one line!' }
        }
      ],
      rxFix: {
        wrong: { bm: 'Dapat $a^2 = 52.4$ daripada Petua Kosinus lalu terus tulis jawapan akhir $a = 52.4\\text{ cm}$, atau bundar awal kepada 1 t.p.', en: 'Writing $a = 52.4$ without taking $\\sqrt{52.4}$, or rounding intermediate sines/cosines to 2 d.p. prematurely.' },
        right: { bm: 'Simpan sekurang-kurangnya **4 angka bererti / 4 t.p.** semasa pengiraan tengah, dan jangan lupa punca kuasa dua akhir $a = \\sqrt{52.4} = 7.239\\text{ cm}$!', en: 'Keep at least **4 s.f. / 4 d.p.** in all intermediate steps, and always take the square root $a = \\sqrt{52.4} = 7.239\\text{ cm}$!' }
      }
    },

    'f4-c10': {
      poster: 'assets/posters/f4-c10.jpg',
      posterTitle: {
        bm: 'Poster Visual Bab 10: Nombor Indeks, Indeks Gubahan & Kaedah Bibir ("Lips Method")',
        en: 'Chapter 10 Visual Poster: Index Numbers, Weighted Composite Index & The "Lips" Chain Rule'
      },
      vocabBridge: {
        bm: 'Kamus Istilah Poster: Base Year = Tahun Asas ($Q_0$, Indeks = $100$) • Composite Index = Indeks Gubahan ($\\bar{I}$) • Weightage = Pemberat ($w$) • Chain Rule / Lips Method = Petua Rantai / Kaedah Bibir',
        en: 'SPM Paper 2 Favourite: Guaranteed 10-mark Section B question — one of the easiest chapters to score 10/10!'
      },
      painSummary: {
        bm: 'Pelajar terbalikkan $Q_0$ dan $Q_1$, menulis indeks $20$ apabila harga naik $20\\%$ (sepatutnya $120$!), atau keliru mendarab/membahagi apabila menukar tahun asas antara 3 tahun!',
        en: 'Students swap $Q_0$ and $Q_1$, write $I = 20$ instead of $120$ for a $20\\%$ price increase, or get confused chaining indices across 3 different years!'
      },
      mentalModels: [
        {
          icon: '💯',
          tag: { bm: 'Penanda Aras 100', en: 'Benchmark 100 Rule' },
          title: { bm: 'Tahun Asas Sentiasa 100: Naik Tambah, Susut Tolak Daripada 100!', en: 'Base Year Is Always 100: Add Increases, Subtract Decreases!' },
          desc: {
            bm: 'Anggap Tahun Asas bernilai **$100$**. Harga **meningkat $25\\%$** $\\rightarrow I = 100 + 25 = \\mathbf{125}$. Harga **menyusut $15\\%$** $\\rightarrow I = 100 - 15 = \\mathbf{85}$. Sebaliknya, jika $I = 92$, bermaksud harga **menyusut $8\\%$**!',
            en: 'Base year always starts at **$100$**. Up $25\\% \\rightarrow I = \\mathbf{125}$. Down $15\\% \\rightarrow I = \\mathbf{85}$. Conversely, $I = 92$ means an **$8\\%$ decrease**!'
          }
        },
        {
          icon: '👄',
          tag: { bm: 'Mnemonik: Kaedah Bibir (Lips Method)', en: 'Hook: The "Lips" Method' },
          title: { bm: 'Rantaian 3 Tahun Tanpa Hafal Rumus Rumit!', en: '3-Year Index Chaining Without Memorization!' },
          desc: {
            bm: 'Susun tahun mengikut urutan masa: **$2020 \\xrightarrow{a} 2022 \\xrightarrow{b} 2024$** dan lengkung besar di bawah **$2020 \\xrightarrow{c} 2024$** (bentuk bibir!). Rumusnya sentiasa: **$\\text{Bibir Bawah } (c) = \\frac{\\text{Atas Kiri } (a) \\times \\text{Atas Kanan } (b)}{100}$**!',
            en: 'Line up the years chronologically: **$2020 \\xrightarrow{a} 2022 \\xrightarrow{b} 2024$** with the overall arc **$2020 \\xrightarrow{c} 2024$** underneath (forming lips!). Always: **$\\text{Bottom Arc } c = \\frac{a \\times b}{100}$**!'
          }
        },
        {
          icon: '⚖️',
          tag: { bm: 'Dacing Pemberat Gubahan', en: 'Weighted Scale Model' },
          title: { bm: 'Indeks Gubahan $\\bar{I} = \\frac{\\sum I_i w_i}{\\sum w_i}$ — Jangan Lupa Bahagi Jumlah Pemberat!', en: 'Composite Index $\\bar{I} = \\frac{\\sum I_i w_i}{\\sum w_i}$ — Sum the Weights!' },
          desc: {
            bm: 'Pemberat $w$ boleh diberi sebagai **peratus** ($\\sum w = 100$), **sudut carta pai** ($\\sum w = 360$), atau **nisbah** ($2:3:5 \\Rightarrow \\sum w = 10$). Jika satu sudut/peratus tidak diberi, tolakkan daripada $360^\\circ$ atau $100\\%$ dahulu!',
            en: 'Weights $w$ can come from **percentages** ($\\sum w = 100$), **pie chart angles** ($\\sum w = 360$), or **ratios**. If one sector is missing, subtract the others from $360^\\circ$ or $100\\%$ first!'
          }
        }
      ],
      triggers: [
        {
          cue: { bm: 'Soalan sebut: "Indeks harga bahan A pada tahun 2024 berasaskan tahun 2021 ialah 135"', en: 'Exam says: "Price index in 2024 based on 2021 is 135"' },
          action: { bm: 'Perkataan selepas **"berasaskan"** sentiasa duduk di **bawah (penyebut)**: $\\frac{P_{2024}}{P_{2021}} \\times 100 = 135$.', en: 'Whatever year follows **"based on"** ALWAYS goes in the **denominator**: $\\frac{P_{2024}}{P_{2021}} \\times 100 = 135$.' }
        },
        {
          cue: { bm: 'Diberi $I_{2022/2020} = 120$ dan $I_{2024/2020} = 150$, diminta cari $I_{2024/2022}$', en: 'Given $I_{2022/2020} = 120$ and $I_{2024/2020} = 150$, asked to find $I_{2024/2022}$' },
          action: { bm: 'Lukis Kaedah Bibir ($a = 120$, $b = I_{2024/2022}$, $c = 150$): $150 = \\frac{120 \\times b}{100} \\Rightarrow b = \\frac{150 \\times 100}{120} = 125$!', en: 'Draw the Lips diagram ($a = 120$, $b = ?$, $c = 150$): $150 = \\frac{120 \\times b}{100} \\Rightarrow b = 125$!' }
        },
        {
          cue: { bm: 'Bahagian akhir Kertas 2: "Kos seunit produk pada tahun 2020 ialah RM45. Cari harga jualan pada 2024 supaya untung 20%"', en: 'Paper 2 finale: "Cost in 2020 is RM45. Find selling price in 2024 to make a 20% profit"' },
          action: { bm: 'Kira **kos 2024** menggunakan indeks gubahan $\\bar{I}$ dahulu ($\\frac{C_{2024}}{45} \\times 100 = \\bar{I}$), kemudian darabkan kos 2024 dengan **$1.20$** untuk tambah untung $20\\%$!', en: 'First compute the **2024 cost** via $\\bar{I}$ ($C_{2024} = 45 \\times \\frac{\\bar{I}}{100}$), then multiply by **$1.20$** for the $20\\%$ profit margin!' }
        }
      ],
      rxFix: {
        wrong: { bm: 'Mencari purata mudah $\\frac{I_1 + I_2 + I_3}{3}$ walaupun pemberat berbeza, atau menulis $I = 15$ bagi kenaikan $15\\%$.', en: 'Taking an unweighted average $\\frac{I_1 + I_2 + I_3}{3}$ when weights differ, or writing $I = 15$ for a $15\\%$ rise.' },
        right: { bm: 'Darab setiap indeks dengan pemberatnya $\\bar{I} = \\frac{\\sum I_i w_i}{\\sum w_i}$, dan guna $I = 100 + 15 = 115$ bagi kenaikan $15\\%$.', en: 'Always weight each item via $\\bar{I} = \\frac{\\sum I_i w_i}{\\sum w_i}$, and use $I = 100 + 15 = 115$ for a $15\\%$ increase.' }
      }
    }
  };

  Object.keys(F4_CLINIC).forEach(function (k) {
    App.teacherClinic[k] = F4_CLINIC[k];
  });
})(window.AddMathApp);
