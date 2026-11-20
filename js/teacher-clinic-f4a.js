/**
 * AddMath Mudah — Klinik Cikgu Pakar & Poster Infografik Visual (Tingkatan 4: Bab 1–5)
 * Dirangka khas dari perspektif Guru Cemerlang Matematik Tambahan KSSM untuk merawat
 * "sakit kepala" sebenar pelajar: kabur konsep, kaku bila baca ayat soalan, dan kecuaian algebra.
 *
 * Struktur modular: App.teacherClinic[chapterId] — sedia disambung terus dengan teacher-clinic-f4b.js, teacher-clinic-f5a.js, teacher-clinic-f5b.js.
 */
window.AddMathApp = window.AddMathApp || {};
window.AddMathApp.teacherClinic = window.AddMathApp.teacherClinic || {};

(function (App) {
  'use strict';

  const F4A_CLINIC = {
    'f4-c1': {
      poster: 'assets/posters/f4-c1.jpg',
      posterTitle: {
        bm: 'Poster Visual Bab 1: Menguasai Fungsi (Hubungan, Domain, Gubahan & Songsang)',
        en: 'Chapter 1 Visual Poster: Mastering Functions (Mappings, Domain, Composite & Inverse)'
      },
      vocabBridge: {
        bm: '**Kamus Istilah KSSM (BM ↔ EN):** Objek = Object • Imej = Image • Domain = Domain • Kodomain = Codomain • Julat = Range • Fungsi Gubahan = Composite Function • Fungsi Songsang = Inverse Function • Ujian Garis Mengufuk = Horizontal Line Test',
        en: '**KSSM Vocabulary Bridge (EN ↔ BM):** Object = Objek • Image = Imej • Domain = Domain • Codomain = Kodomain • Range = Julat • Composite Function = Fungsi Gubahan • Inverse Function = Fungsi Songsang • Horizontal Line Test = Ujian Garis Mengufuk'
      },
      painSummary: {
        bm: 'Pelajar selalu keliru kenapa "Banyak-ke-Satu" dikira fungsi, terbalik urutan semasa kira $fg(x)$, menyangka $f^{-1}(x) = \\frac{1}{f(x)}$, terlupa pantul bahagian negatif $|f(x)|$, dan lupa menyekat nilai $x$ yang menjadikan penyebut sifar.',
        en: 'Students often confuse why "Many-to-One" is a valid function, reverse the order in $fg(x)$, assume $f^{-1}(x) = \\frac{1}{f(x)}$, forget to reflect negative parts of $|f(x)|$, and omit restrictions where $x$ makes a denominator zero.'
      },
      mentalModels: [
        {
          icon: '🥤',
          tag: { bm: 'Analogi Mesin Air Tin', en: 'Vending Machine Model' },
          title: { bm: 'Kenapa Banyak-ke-Satu Masih Fungsi?', en: 'Why Many-to-One Is Still a Function' },
          desc: {
            bm: 'Bayangkan **butang = Objek** dan **tin air keluar = Imej**. Jika 2 butang berbeza keluarkan air Milo yang sama (**Banyak-ke-Satu**), mesin itu normal (**SAH Fungsi** ✅). Tetapi jika tekan **1 butang** keluar 2 tin berbeza serentak (**Satu-ke-Banyak**), mesin itu rosak (**BUKAN Fungsi** ❌)!',
            en: 'Think of **buttons = Objects** and **drinks dispensed = Images**. If 2 different buttons give Milo (**Many-to-One**), the machine works normally (**Valid Function** ✅). Pressing **1 button** and getting 2 conflicting drinks (**One-to-Many**) means a broken machine (**NOT a Function** ❌)!'
          }
        },
        {
          icon: '🏭',
          tag: { bm: 'Mnemonik: Dalam-Ke-Luar', en: 'Hook: Inside-Out Assembly' },
          title: { bm: 'Fungsi Gubahan $fg(x)$ = Kilang Dua Mesin', en: 'Composite $fg(x)$ = Two-Stage Factory' },
          desc: {
            bm: 'Jangan baca kiri ke kanan seperti darab! Dalam $fg(x)$, huruf **$g$ paling rapat dengan $x$**, jadi $x$ masuk mesin $g$ dahulu, kemudian hasilnya disuap ke dalam mesin $f$: $fg(x) = f[g(x)]$. Ingat: **$fg$ BUKAN darab $f \\times g$**!',
            en: 'Never read left to right like multiplication! In $fg(x)$, **$g$ hugs $x$ closest**, so feed $x$ into machine $g$ first, then feed that output into machine $f$: $fg(x) = f[g(x)]$. Remember: **$fg$ is NEVER $f \\times g$**!'
          }
        },
        {
          icon: '✌️',
          tag: { bm: 'Mnemonik: V for Victory', en: 'Hook: V for Victory Bounce' },
          title: { bm: 'Fungsi Nilai Mutlak $|f(x)|$ = Lantai Pantulan Positif', en: 'Absolute Value $|f(x)|$ = Positive Mirror Bounce Floor' },
          desc: {
            bm: 'Paksi-$x$ bertindak seperti cermin lantai! Lukis graf asal dahulu, kemudian semua bahagian negatif di **bawah paksi-$x$ dilantunkan ke atas** membentuk huruf **V**. Semasa selesaikan $|ax + b| = k$, wajib pecah dua cabang: $+k$ **dan** $-k$!',
            en: 'The $x$-axis acts like a mirror floor! Sketch the inner graph first, then **bounce every negative part below the $x$-axis upward** into a **V-shape**. When solving $|ax + b| = k$, always split into two branches: $+k$ **and** $-k$!'
          }
        },
        {
          icon: '🪞',
          tag: { bm: 'Mnemonik: Butang Undo & Cermin', en: 'Hook: Undo Button & Mirror' },
          title: { bm: 'Fungsi Songsang $f^{-1}(x)$ = Perjalanan Patah Balik', en: 'Inverse Function $f^{-1}(x)$ = Return Trip Back Home' },
          desc: {
            bm: 'Jika $f$ membawa anda dari **Rumah ($x$) ke Sekolah ($y$)**, maka $f^{-1}$ membawa anda patah balik dari **Sekolah ($y$) ke Rumah ($x$)**! Graf $f^{-1}$ ialah pantulan cermin pada garis $y = x$, hanya wujud bagi fungsi **Satu-ke-Satu**, dan **$f^{-1}(x) \\neq \\frac{1}{f(x)}$**!',
            en: 'If $f$ takes you from **Home ($x$) to School ($y$)**, then $f^{-1}$ takes you right back from **School ($y$) to Home ($x$)**! Its graph is a mirror reflection across $y = x$, exists ONLY for **one-to-one** functions, and **$f^{-1}(x) \\neq \\frac{1}{f(x)}$**!'
          }
        }
      ],
      triggers: [
        {
          cue: { bm: 'Soalan sebut: "Nyatakan julat (range) bagi hubungan/graf"', en: 'Exam question says: "State the range of the relation/graph"' },
          action: { bm: 'Senaraikan HANYA unsur kodomain yang **benar-benar kena anak panah** (atau julat nilai $y$ minimum hingga maksimum pada graf).', en: 'List ONLY the codomain elements **actually hit by arrows** (or the minimum-to-maximum $y$-values covered by the graph).' }
        },
        {
          cue: { bm: 'Soalan sebut: "Cari nilai $x$ apabila fungsi $f(x) = \\frac{a}{bx - c}$ tidak tertakrif"', en: 'Exam question says: "Find the value of $x$ where $f(x) = \\frac{a}{bx - c}$ is undefined"' },
          action: { bm: 'Terus samakan **penyebut dengan sifar** (kerana bahagi sifar mustahil): $bx - c = 0 \\Rightarrow x = \\frac{c}{b}$.', en: 'Immediately set the **denominator equal to zero** (division by zero is impossible): $bx - c = 0 \\Rightarrow x = \\frac{c}{b}$.' }
        },
        {
          cue: { bm: 'Diberi fungsi luar $f(x)$ dan gubahan $fg(x)$, disuruh cari fungsi dalam $g(x)$', en: 'Given outer function $f(x)$ and composite $fg(x)$, find inner function $g(x)$' },
          action: { bm: 'Gantikan tempat $x$ dalam rumus $f(x)$ dengan ungkapan $g(x)$ penuh, samakan dengan $fg(x)$, kemudian pindah algebra untuk jadikan $g(x)$ perkara rumus.', en: 'Replace every $x$ inside $f(x)$ with $g(x)$, set the expression equal to $fg(x)$, and rearrange step by step to isolate $g(x)$ algebraically.' }
        },
        {
          cue: { bm: 'Soalan sebut: "Fungsi $f$ memetakan kepada dirinya sendiri / $f^2(x) = x$"', en: 'Exam question says: "The function $f$ maps onto itself / $f^2(x) = x$"' },
          action: { bm: 'Gunakan sifat emas: jika $ff(x) = x$, maka **$f(x) = f^{-1}(x)$**! Cari $f^{-1}(x)$ dan bandingkan pekali terus.', en: 'Use the golden identity: if $ff(x) = x$, then **$f(x) = f^{-1}(x)$**! Derive $f^{-1}(x)$ and compare coefficients directly.' }
        }
      ],
      rxFix: {
        wrong: { bm: '$f^{-1}(x) = \\frac{1}{f(x)}$ atau mengira $fg(2)$ sebagai $f(2) \\times g(2)$.', en: '$f^{-1}(x) = \\frac{1}{f(x)}$ or computing $fg(2)$ as $f(2) \\times g(2)$.' },
        right: { bm: 'Biar $y = f(x)$, ungkapkan $x$ dalam sebutan $y$ untuk dapat $f^{-1}(x)$; dan kira fungsi dalam $g(2)$ dahulu sebelum masuk ke $f[g(2)]$.', en: 'Let $y = f(x)$ and rearrange for $x$ to find $f^{-1}(x)$; for $fg(2)$, compute the inner $g(2)$ first, then feed it into $f[g(2)]$.' }
      }
    },

    'f4-c2': {
      poster: 'assets/posters/f4-c2.jpg',
      posterTitle: {
        bm: 'Poster Visual Bab 2: Rahsia Fungsi Kuadratik (Bentuk Graf, Pembezalayan b² − 4ac & Ketaksamaan)',
        en: 'Chapter 2 Visual Poster: Quadratic Functions Decoded (Curve Shape, Discriminant & Inequalities)'
      },
      vocabBridge: {
        bm: '**Kamus Istilah KSSM (BM ↔ EN):** Titik Pusingan/Verteks = Turning Point/Vertex • Paksi Simetri = Axis of Symmetry • Pembezalayan ($b^2 - 4ac$) = Discriminant ($b^2 - 4ac$) • Punca Nyata Berbeza = Distinct Real Roots • Hasil Tambah Punca (HTP) = Sum of Roots (SOR) • Hasil Darab Punca (HDP) = Product of Roots (POR) • Penyempurnaan Kuasa Dua = Completing the Square',
        en: '**KSSM Vocabulary Bridge (EN ↔ BM):** Turning Point/Vertex = Titik Pusingan/Verteks • Axis of Symmetry = Paksi Simetri • Discriminant ($b^2 - 4ac$) = Pembezalayan ($b^2 - 4ac$) • Distinct Real Roots = Punca Nyata Berbeza • Sum of Roots (SOR) = Hasil Tambah Punca (HTP) • Product of Roots (POR) = Hasil Darab Punca (HDP) • Completing the Square = Penyempurnaan Kuasa Dua'
      },
      painSummary: {
        bm: 'Pelajar sering tersilap tanda semasa penyempurnaan kuasa dua apabila $a \\neq 1$, terlupa tanda negatif dalam $\\alpha + \\beta = -\\frac{b}{a}$, dan meneka jawapan ketaksamaan $x > 2, x > 5$ secara membuta tuli tanpa melakar lengkung!',
        en: 'Students frequently drop signs when completing the square with $a \\neq 1$, forget the minus in $\\alpha + \\beta = -\\frac{b}{a}$, and guess inequality directions blindly as $x > 2, x > 5$ without sketching the parabola!'
      },
      mentalModels: [
        {
          icon: '😊',
          tag: { bm: 'Mnemonik: Senyum vs Masam', en: 'Hook: Smile vs Frown' },
          title: { bm: 'Nilai $a$ Menentukan Emosi Lengkung!', en: 'Coefficient $a$ Shapes the Curve!' },
          desc: {
            bm: 'Jika **$a > 0$ (Positif = Senyum $\\cup$)**, lengkung mempunyai **Titik Minimum** di dasar bawah. Jika **$a < 0$ (Negatif = Masam $\\cap$)**, lengkung mempunyai **Titik Maksimum** di puncak atas!',
            en: 'When **$a > 0$ (Positive = Smile $\\cup$)**, the vertex at the bottom is a **Minimum point**. When **$a < 0$ (Negative = Frown $\\cap$)**, the peak at the top is a **Maximum point**!'
          }
        },
        {
          icon: '🔍',
          tag: { bm: 'Radar Pengesan Punca', en: 'Root Detector Radar' },
          title: { bm: 'Pembezalayan $D = b^2 - 4ac$ Kesan Persilangan Tanpa Kira $x$', en: 'Discriminant $D = b^2 - 4ac$ Detects Intersection Instantly' },
          desc: {
            bm: '**$D > 0$**: Memotong paksi-$x$ pada **2 titik berbeza**. **$D = 0$**: Menyentuh paksi-$x$ pada **1 titik (tangen / punca sama)**. **$D < 0$**: Terapung sepenuhnya (**tiada punca nyata**). Awas: *"mempunyai punca nyata"* bermaksud **$D \\ge 0$**!',
            en: '**$D > 0$**: Cuts the $x$-axis at **2 distinct points**. **$D = 0$**: Touches the $x$-axis at **1 point (tangent / equal roots)**. **$D < 0$**: Floats cleanly (**no real roots**). Watch out: *"has real roots"* means **$D \\ge 0$**!'
          }
        },
        {
          icon: '🥪',
          tag: { bm: 'Peraturan Sandwich vs Pagar Luar', en: 'Sandwich vs Outside Rule' },
          title: { bm: 'Ketaksamaan Kuadratik Wajib Lakar Lengkung Senyum!', en: 'Solve Quadratic Inequalities via Quick Smile Sketch!' },
          desc: {
            bm: 'Pastikan pekali $x^2$ positif dahulu! Bagi $(x - p)(x - q) < 0$ (bawah paksi-$x$), jawapan **terkepit di tengah**: $p < x < q$. Bagi $(x - p)(x - q) > 0$ (atas paksi-$x$), jawapan **berpecah ke luar**: $x < p$ **atau** $x > q$.',
            en: 'Make the $x^2$ coefficient positive first! For $(x - p)(x - q) < 0$ (below $x$-axis), $x$ is **sandwiched between**: $p < x < q$. For $(x - p)(x - q) > 0$ (above $x$-axis), $x$ splits **outside the roots**: $x < p$ **or** $x > q$.'
          }
        },
        {
          icon: '🔑',
          tag: { bm: 'Rumus Bentuk Verteks', en: 'Vertex Form Decoder' },
          title: { bm: 'Bentuk $f(x) = a(x - h)^2 + k$ Baca Terus Puncak!', en: 'Read Vertex $(h, k)$ Instantly From $a(x - h)^2 + k$' },
          desc: {
            bm: 'Dalam kurungan **tukar tanda** ($x - h = 0 \\Rightarrow x = h$, itulah paksi simetri!), di luar kurungan **kekal tanda** ($y = k$, nilai optimum!). Contoh: $2(x + 3)^2 - 7 \\rightarrow$ titik minimum $(-3, -7)$.',
            en: 'Inside the bracket **flip the sign** ($x - h = 0 \\Rightarrow x = h$ is the axis of symmetry); outside the bracket **keep the sign** ($y = k$ is the min/max value!). Example: $2(x + 3)^2 - 7 \\rightarrow$ minimum point $(-3, -7)$.'
          }
        }
      ],
      triggers: [
        {
          cue: { bm: 'Soalan sebut: "Garis lurus $y = mx + c$ ialah tangen kepada lengkung"', en: 'Exam question says: "The straight line $y = mx + c$ is a tangent to the curve"' },
          action: { bm: 'Gantikan $y = mx + c$ ke dalam persamaan lengkung, susun bentuk am $Ax^2 + Bx + C = 0$, kemudian tulis **$B^2 - 4AC = 0$**.', en: 'Substitute $y = mx + c$ into the curve equation, rearrange into $Ax^2 + Bx + C = 0$, then apply **$B^2 - 4AC = 0$**.' }
        },
        {
          cue: { bm: 'Soalan sebut: "Fungsi kuadratik sentiasa positif bagi semua nilai $x$"', en: 'Exam says: "Quadratic function is always positive for all values of $x$"' },
          action: { bm: 'Lengkung senyum terapung di atas paksi-$x$! Tulis dua syarat: **$a > 0$** dan **$b^2 - 4ac < 0$**.', en: 'Smiling curve floating above the $x$-axis! Write two conditions: **$a > 0$** and **$b^2 - 4ac < 0$**.' }
        },
        {
          cue: { bm: 'Diberi punca $\\alpha, \\beta$ dan disuruh bina persamaan baharu dengan punca $2\\alpha, 2\\beta$', en: 'Given roots $\\alpha, \\beta$ and asked to form a new equation with roots $2\\alpha, 2\\beta$' },
          action: { bm: 'Jangan cari nilai perpuluhan $\\alpha$! Cari $\\alpha + \\beta = -\\frac{b}{a}$ dan $\\alpha\\beta = \\frac{c}{a}$, kemudian masuk ke **$x^2 - (\\text{HTP})x + (\\text{HDP}) = 0$**.', en: 'Do NOT solve for decimal $\\alpha$! Find $\\alpha + \\beta = -\\frac{b}{a}$ and $\\alpha\\beta = \\frac{c}{a}$, then plug into **$x^2 - (\\text{SOR})x + (\\text{POR}) = 0$**.' }
        },
        {
          cue: { bm: 'Soalan sebut: "Ungkapkan $f(x) = -2x^2 + 8x - 5$ dalam bentuk $a(x - h)^2 + k$"', en: 'Exam says: "Express $f(x) = -2x^2 + 8x - 5$ in the form $a(x - h)^2 + k$"' },
          action: { bm: 'Faktorkan $-2$ daripada dua sebutan pertama dahulu: $-2[x^2 - 4x] - 5$, tambah & tolak $(-2)^2$ di dalam kurungan besar, baru darab keluar $-2$!', en: 'Factor $-2$ out of the first two terms FIRST: $-2[x^2 - 4x] - 5$, add & subtract $(-2)^2$ inside `[...]`, then distribute $-2$ carefully!' }
        }
      ],
      rxFix: {
        wrong: { bm: '$x^2 - 5x + 6 > 0 \\Rightarrow x > 2, x > 3$ (main teka tanda tanpa lakaran graf).', en: '$x^2 - 5x + 6 > 0 \\Rightarrow x > 2, x > 3$ (guessing inequality direction without a sketch).' },
        right: { bm: 'Faktorkan $(x - 2)(x - 3) > 0$, lakar lengkung $\\cup$ memotong $2$ dan $3$, lorek atas paksi-$x$: **$x < 2$ atau $x > 3$**.', en: 'Factor $(x - 2)(x - 3) > 0$, sketch $\\cup$ crossing $2$ and $3$, shade above the $x$-axis: **$x < 2$ or $x > 3$**.' }
      }
    },

    'f4-c3': {
      poster: 'assets/posters/f4-c3.jpg',
      posterTitle: {
        bm: 'Poster Visual Bab 3: Sistem Persamaan (3 Pemboleh Ubah Satah 3D & Serentak Tak Linear)',
        en: 'Chapter 3 Visual Poster: Systems of Equations (3D Planes & Non-Linear Simultaneous)'
      },
      vocabBridge: {
        bm: '**Kamus Istilah KSSM (BM ↔ EN):** Pemboleh Ubah = Variable • Satah 3D = 3D Plane • Kaedah Penghapusan = Elimination Method • Kaedah Penggantian = Substitution Method • Penyelesaian Unik = Unique Solution • Penyelesaian Tak Terhingga = Infinite Solutions • Tiada Penyelesaian = No Solution',
        en: '**KSSM Vocabulary Bridge (EN ↔ BM):** Variable = Pemboleh Ubah • 3D Plane = Satah 3D • Elimination Method = Kaedah Penghapusan • Substitution Method = Kaedah Penggantian • Unique Solution = Penyelesaian Unik • Infinite Solutions = Penyelesaian Tak Terhingga • No Solution = Tiada Penyelesaian'
      },
      painSummary: {
        bm: 'Dalam sistem 3 pemboleh ubah, pelajar sesat kerana menghapuskan huruf berbeza pada langkah kedua! Dalam persamaan tak linear pula, pelajar selalu salah kembang $(2y - 3)^2 = 4y^2 + 9$ atau tercicir pasangan nilai $(x, y)$.',
        en: 'In 3-variable systems, students get lost by eliminating a different variable in the second pair! In non-linear systems, expanding $(2y - 3)^2$ as $4y^2 + 9$ or forgetting coordinate pairs $(x, y)$ costs major marks.'
      },
      mentalModels: [
        {
          icon: '📐',
          tag: { bm: 'Visual 3 Keping Satah Kertas', en: '3D Paper Planes Model' },
          title: { bm: 'Kenapa Ada 3 Jenis Jawapan Sistem Linear 3D?', en: 'Visualizing the 3 Solution Outcomes in 3D' },
          desc: {
            bm: 'Persamaan $ax + by + cz = d$ ialah sekeping **satah kertas rata 3D**. Tiga satah boleh bertemu di **1 bucu tajam** (Penyelesaian Unik), bertemu di sepanjang **1 tulang garis buku** ($0 = 0$, Penyelesaian Tak Terhingga), atau **selari langsung tak bersentuh** ($0 = 5$, Tiada Penyelesaian).',
            en: 'Each equation $ax + by + cz = d$ represents a flat **sheet of 3D paper plane**. Three planes can meet at **1 sharp corner point** (Unique Solution), meet along **1 book-spine line** ($0 = 0$, Infinite Solutions), or stay **parallel and never touch** ($0 = 5$, No Solution).'
          }
        },
        {
          icon: '🔻',
          tag: { bm: 'Strategi Corong 3 → 2 → 1', en: '3 → 2 → 1 Funnel Strategy' },
          title: { bm: 'Kunci Anti-Sesat: Hapuskan Huruf Yang SAMA Dua Kali!', en: 'Anti-Lost Rule: Eliminate the SAME Variable Twice!' },
          desc: {
            bm: 'Pilih **SATU mangsa paling senang** (contohnya $z$). Hapuskan $z$ daripada pasangan **(1) & (2)** untuk dapat Persamaan **(4)**, dan wajib hapuskan **$z$ juga** daripada pasangan **(2) & (3)** untuk dapat Persamaan **(5)**! Kini tinggal 2 huruf sahaja.',
            en: 'Pick **ONE easiest target** (for example $z$). Eliminate $z$ from pair **(1) & (2)** to get Equation **(4)**, and eliminate **the exact same $z$** from pair **(2) & (3)** to get Equation **(5)**! Now solve **(4) & (5)** like Form 2 math.'
          }
        },
        {
          icon: '💣',
          tag: { bm: 'Perisai Kertas 2 (7 Markah)', en: 'Paper 2 7-Mark Shield' },
          title: { bm: 'Persamaan Serentak Linear + Tak Linear: Tulis Dua Kurungan!', en: 'Linear + Non-Linear Simultaneous: Write Double Brackets!' },
          desc: {
            bm: 'Apabila ganti $x = 5 - 2y$ ke dalam $x^2$, **JANGAN congak di kepala**! Tulis $(5 - 2y)(5 - 2y) = 25 - 20y + 4y^2$ supaya sebutan tengah $-20y$ tidak tercicir, dan jangan lupa cari pasangan $x$ bagi setiap nilai $y$!',
            en: 'When substituting $x = 5 - 2y$ into $x^2$, **NEVER expand in your head**! Write $(5 - 2y)(5 - 2y) = 25 - 20y + 4y^2$ so the middle term $-20y$ is never dropped, and always pair each $x$ with its matching $y$!'
          }
        },
        {
          icon: '🧹',
          tag: { bm: 'Pecahan? Bersihkan Dulu!', en: 'Clear Fractions First!' },
          title: { bm: 'Persamaan Ada $\\frac{2}{x} + \\frac{3}{y} = 2$? Darab Semua Sebutan Dengan $xy$!', en: 'Equation Has $\\frac{2}{x} + \\frac{3}{y} = 2$? Multiply Every Term by $xy$!' },
          desc: {
            bm: 'Bayangkan tukar semua syiling kepada sen sebelum mengira! Apabila jumpa pecahan penyebut $x$ dan $y$, **darabkan setiap sebutan termasuk sebelah kanan ($=$) dengan $xy$** dahulu: $\\frac{2}{x}(xy) + \\frac{3}{y}(xy) = 2(xy) \\Rightarrow 2y + 3x = 2xy$, barulah ganti persamaan linear!',
            en: 'Think of converting all coins to cents before adding! Whenever denominators $x$ and $y$ appear, **multiply every term (including the RHS!) by $xy$** first: $\\frac{2}{x}(xy) + \\frac{3}{y}(xy) = 2(xy) \\Rightarrow 2y + 3x = 2xy$, then substitute the linear equation!'
          }
        }
      ],
      triggers: [
        {
          cue: { bm: 'Diberi satu persamaan linear ($2x + y = 7$) dan satu persamaan ada $x^2, y^2,$ atau $xy$', en: 'Given one linear equation ($2x + y = 7$) and one equation with $x^2, y^2,$ or $xy$' },
          action: { bm: 'Wajib guna **Kaedah Penggantian**! Jadikan pemboleh ubah berpekali $1$ (di sini $y = 7 - 2x$) sebagai perkara rumus supaya tiada pecahan!', en: 'Always use **Substitution**! Isolate the variable with coefficient $1$ (here $y = 7 - 2x$) as the subject so you avoid messy fractions!' }
        },
        {
          cue: { bm: 'Semasa selesaikan sistem 3 pemboleh ubah, tiba-tiba semua huruf lenyap jadi $0 = 0$', en: 'While solving a 3-variable system, all variables cancel out leaving $0 = 0$' },
          action: { bm: 'Jangan panik! $0 = 0$ bermaksud **penyelesaian tak terhingga** (bersilang pada satu garis). Biarkan $z = t$ dan ungkapkan $x, y$ dalam sebutan $t$.', en: 'Don\'t panic! $0 = 0$ means **infinitely many solutions** intersecting along one line. Set parameter $z = t$ and express $x, y$ in terms of $t$.' }
        },
        {
          cue: { bm: 'Semasa selesaikan sistem 3 pemboleh ubah, dapat pernyataan palsu seperti $0 = -4$', en: 'While solving a 3-variable system, variables cancel leaving a false statement like $0 = -4$' },
          action: { bm: 'Simpulkan terus: sistem tidak konsisten dan mempunyai **tiada penyelesaian** (satah selari tidak bersilang).', en: 'Conclude immediately: the system is inconsistent and has **no solution** (the planes are parallel and never intersect).' }
        },
        {
          cue: { bm: 'Diberi persamaan pecahan seperti $\\frac{2}{x} + \\frac{3}{y} = 2$ bersama persamaan linear', en: 'Given a fractional equation like $\\frac{2}{x} + \\frac{3}{y} = 2$ with a linear equation' },
          action: { bm: 'Darab **semua sebutan** (termasuk nombor di kanan!) dengan $xy$ dahulu menjadi $2y + 3x = 2xy$, kemudian baru gantikan ungkapan linear.', en: 'Multiply **every single term** (including the RHS constant!) by $xy$ first to get $2y + 3x = 2xy$, then substitute the linear equation.' }
        }
      ],
      rxFix: {
        wrong: { bm: '$(3 - 2y)^2 = 9 - 4y^2$ atau berhenti selepas dapat nilai $y_1, y_2$ tanpa mengira $x_1, x_2$.', en: '$(3 - 2y)^2 = 9 - 4y^2$ or stopping after finding $y_1, y_2$ without computing $(x_1, x_2)$.' },
        right: { bm: '$(3 - 2y)(3 - 2y) = 9 - 12y + 4y^2$, dan tulis pasangan akhir dengan jelas: $(x_1, y_1)$ dan $(x_2, y_2)$.', en: '$(3 - 2y)(3 - 2y) = 9 - 12y + 4y^2$, and state both coordinate pairs $(x_1, y_1)$ and $(x_2, y_2)$ clearly.' }
      }
    },

    'f4-c4': {
      poster: 'assets/posters/f4-c4.jpg',
      posterTitle: {
        bm: 'Poster Visual Bab 4: Panduan Lengkap Indeks, Surd & Logaritma',
        en: 'Chapter 4 Visual Poster: Complete Guide to Indices, Surds & Logarithms'
      },
      vocabBridge: {
        bm: '**Kamus Istilah KSSM (BM ↔ EN):** Asas = Base • Indeks/Kuasa = Index/Exponent • Surd Konjugat = Conjugate Surds • Nisbahkan Penyebut = Rationalise the Denominator • Logaritma Asli ($\\ln$) = Natural Logarithm ($\\ln$) • Tukar Asas = Change of Base • Punca Tak Sah = Extraneous Root',
        en: '**KSSM Vocabulary Bridge (EN ↔ BM):** Base = Asas • Index/Exponent = Indeks/Kuasa • Conjugate Surds = Surd Konjugat • Rationalise the Denominator = Nisbahkan Penyebut • Natural Logarithm ($\\ln$) = Logaritma Asli ($\\ln$) • Change of Base = Tukar Asas • Extraneous Root = Punca Tak Sah'
      },
      painSummary: {
        bm: 'Pelajar sering mencipta "hukum palsu" seperti $\\log_a(x + y) = \\log_a x + \\log_a y$, menggabungkan logaritma berlainan asas secara terus, dan terlupa uji semula jawapan untuk buang punca tak sah (*extraneous root*) apabila kuasa duakan persamaan surd!',
        en: 'Students often invent fake laws like $\\log_a(x + y) = \\log_a x + \\log_a y$, combine logarithms of different bases directly, and forget to re-test every candidate answer to reject invalid *extraneous roots* after squaring a surd equation!'
      },
      mentalModels: [
        {
          icon: '🔄',
          tag: { bm: 'Terjemahan 1 Saat', en: '1-Second Translation' },
          title: { bm: 'Logaritma Cuma Tanya: "Kuasa Berapa?"', en: 'Logarithm Simply Asks: "What Power?"' },
          desc: {
            bm: 'Bila nampak $\\log_2 8 = x$, tanya diri sendiri: **"2 kuasa berapa dapat 8?"** Jawapannya $3$! Untuk tukar $y = a^x$ kepada bentuk log, ingat: **Asas kekal jadi Asas** ($a^x = y \\iff \\log_a y = x$).',
            en: 'Whenever you see $\\log_2 8 = x$, ask yourself: **"2 to what power gives 8?"** Answer: $3$! When converting $a^x = y \\iff \\log_a y = x$, remember the golden rule: **the Base stays the Base**!'
          }
        },
        {
          icon: '🧩',
          tag: { bm: 'Pasangan Kembar Konjugat', en: 'Conjugate Twin Trick' },
          title: { bm: 'Hapuskan Surd Di Bawah Dengan Beza Dua Kuasa Dua!', en: 'Eliminate Denominator Surds via Conjugate Pairs' },
          desc: {
            bm: 'Penyebut tak suka ada punca $\\sqrt{\\phantom{x}}$! Jika bawah ialah $(a + \\sqrt{b})$, darab atas dan bawah dengan kembar berlawanan tanda **$(a - \\sqrt{b})$** supaya penyebut bertukar bersih menjadi **$a^2 - b$**!',
            en: 'Never leave a surd trapped in the denominator! Multiply top and bottom of $\\frac{k}{a + \\sqrt{b}}$ by its opposite-sign twin **$(a - \\sqrt{b})$** so the denominator cleans up neatly to **$a^2 - b$**!'
          }
        },
        {
          icon: '🌉',
          tag: { bm: 'Jambatan Tukar Asas', en: 'Change-of-Base Bridge' },
          title: { bm: 'Asas Tak Sama? Jangan Gabung — Tukar Asas Dulu!', en: 'Different Log Bases? Do Not Combine — Convert First!' },
          desc: {
            bm: 'Hukum $\\log_a m + \\log_a n = \\log_a(mn)$ **wajib mempunyai asas $a$ yang sama**! Jika jumpa $\\log_2 x + \\log_4 x = 6$, tukarkan $\\log_4 x = \\frac{\\log_2 x}{\\log_2 4} = \\frac{\\log_2 x}{2}$ dahulu (nombor atas pergi atas, asas lama pergi bawah!).',
            en: 'Log laws $\\log_a m + \\log_a n = \\log_a(mn)$ ONLY work when both bases $a$ match! In $\\log_2 x + \\log_4 x = 6$, convert $\\log_4 x = \\frac{\\log_2 x}{\\log_2 4} = \\frac{\\log_2 x}{2}$ first ("argument goes on top, old base goes down below")!'
          }
        },
        {
          icon: '🔗',
          tag: { bm: 'Trio Teras & Pengawal Punca', en: 'Core Trio & Root Bouncer' },
          title: { bm: 'Trio Kuasa-Punca-Log & Ujian Punca Tak Sah (*Extraneous Root*)', en: 'Core Power-Root-Log Trio & Extraneous-Root Reality Check' },
          desc: {
            bm: 'Tiga beradik ini benda yang sama: **$a^x = y \\iff \\sqrt[x]{y} = a \\iff \\log_a y = x$** ($a > 0, a \\neq 1$). Dan ingat: kuasa dua pada persamaan surd seperti pengawal kelab — boleh menyeludup **punca palsu**, jadi **WAJIB semak LHS = RHS** dalam persamaan asal!',
            en: 'These three forms are one family: **$a^x = y \\iff \\sqrt[x]{y} = a \\iff \\log_a y = x$** ($a > 0, a \\neq 1$). Also treat squaring surd equations like a door bouncer — it can sneak in fake roots, so **ALWAYS check LHS = RHS** in the original equation!'
          }
        }
      ],
      triggers: [
        {
          cue: { bm: 'Persamaan indeks bentuk tambah/tolak seperti $3^{2x} - 4(3^x) + 3 = 0$', en: 'Index equation with $+$ or $-$ between powers like $3^{2x} - 4(3^x) + 3 = 0$' },
          action: { bm: 'Jangan ambil log terus! Tulis $(3^x)^2 - 4(3^x) + 3 = 0$, gantikan **$u = 3^x$**, selesaikan kuadratik dalam $u$, kemudian cari $x$.', en: 'Cannot equate indices across $+$! Rewrite as $(3^x)^2 - 4(3^x) + 3 = 0$, substitute **$u = 3^x$**, solve the quadratic in $u$, then solve for $x$.' }
        },
        {
          cue: { bm: 'Persamaan surd seperti $\\sqrt{2x + 3} = x$', en: 'Surd equation like $\\sqrt{2x + 3} = x$' },
          action: { bm: 'Asingkan surd seorang diri di satu sebelah, kuasa duakan kedua-dua belah, dan **WAJIB uji semula jawapan $x$ ke dalam persamaan asal** (tolak punca tak sah / *extraneous root*!).', en: 'Isolate the surd completely on one side, square both sides, and **ALWAYS test every root $x$ back in the original equation** to reject any invalid extraneous root!' }
        },
        {
          cue: { bm: 'Persamaan eksponen asas berbeza yang tak boleh disamakan asasnya: $5^x = 7^{x-1}$', en: 'Exponential equation with different bases that cannot match like $5^x = 7^{x-1}$' },
          action: { bm: 'Ambil $\\log_{10}$ di kedua-dua belah: $x\\log_{10} 5 = (x - 1)\\log_{10} 7$, kembangkan kurungan, dan kumpulkan semua sebutan $x$ di sebelah kiri.', en: 'Take $\\log_{10}$ on both sides: $x\\log_{10} 5 = (x - 1)\\log_{10} 7$, expand the brackets, and group all $x$ terms on the left side.' }
        },
        {
          cue: { bm: 'Soalan sebut: "Permudahkan $\\sqrt{48} - 3\\sqrt{12} + \\sqrt{75}$ tanpa kalkulator"', en: 'Exam says: "Simplify $\\sqrt{48} - 3\\sqrt{12} + \\sqrt{75}$ without calculator"' },
          action: { bm: 'Tarik keluar **nombor kuasa dua sempurna terbesar** ($4, 9, 16, 25, \\dots$) daripada setiap surd (cth: $\\sqrt{16 \\times 3} = 4\\sqrt{3}$) supaya semua berkongsi surd asas yang sama!', en: 'Pull out the **largest perfect square factor** ($4, 9, 16, 25, \\dots$) from each surd (e.g. $\\sqrt{16 \\times 3} = 4\\sqrt{3}$) so every term shares the same base surd!' }
        }
      ],
      rxFix: {
        wrong: { bm: '$\\log_a(x + y) = \\log_a x + \\log_a y$ atau $\\frac{\\log_2 8}{\\log_2 4} = \\log_2(8 - 4)$.', en: '$\\log_a(x + y) = \\log_a x + \\log_a y$ or $\\frac{\\log_2 8}{\\log_2 4} = \\log_2(8 - 4)$.' },
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
        bm: '**Kamus Istilah KSSM (BM ↔ EN):** Janjang Aritmetik (JA) = Arithmetic Progression (AP) • Beza Sepunya ($d$) = Common Difference ($d$) • Janjang Geometri (JG) = Geometric Progression (GP) • Nisbah Sepunya ($r$) = Common Ratio ($r$) • Sebutan ke-$n$ ($T_n$) = $n$-th Term ($T_n$) • Hasil Tambah $n$ Sebutan Pertama ($S_n$) = Sum of First $n$ Terms ($S_n$) • Hasil Tambah Ketakterhinggaan ($S_\\infty$) = Sum to Infinity ($S_\\infty$)',
        en: '**KSSM Vocabulary Bridge (EN ↔ BM):** Arithmetic Progression (AP) = Janjang Aritmetik (JA) • Common Difference ($d$) = Beza Sepunya ($d$) • Geometric Progression (GP) = Janjang Geometri (JG) • Common Ratio ($r$) = Nisbah Sepunya ($r$) • $n$-th Term ($T_n$) = Sebutan ke-$n$ ($T_n$) • Sum of First $n$ Terms ($S_n$) = Hasil Tambah $n$ Sebutan Pertama ($S_n$) • Sum to Infinity ($S_\\infty$) = Hasil Tambah Ketakterhinggaan ($S_\\infty$)'
      },
      painSummary: {
        bm: 'Sakit paling besar pelajar ialah keliru bila perlu guna rumus $T_n$ berbanding $S_n$ dalam soalan ayat harian, serta salah guna $S_n$ apabila soalan minta "jumlah dari sebutan ke-5 hingga ke-10" sebagai $S_{10} - S_5$ dan bukannya $S_{10} - S_4$!',
        en: 'Students\' #1 pain in word problems is mixing up $T_n$ (single $n$-th term) vs $S_n$ (cumulative total of the first $n$ terms), and computing "sum from the 5th to 10th term" wrongly as $S_{10} - S_5$ instead of $S_{10} - S_4$!'
      },
      mentalModels: [
        {
          icon: '🪜',
          tag: { bm: 'Tangga (+d) vs Gandakan (×r)', en: 'Staircase (+d) vs Doubling (×r)' },
          title: { bm: 'Uji 3 Sebutan Pertama Sebelum Pilih Rumus!', en: 'Test the First 3 Terms Before Touching Any Formula!' },
          desc: {
            bm: 'Jangan main agak! Semak **Tolak** ($T_2 - T_1 = T_3 - T_2 \\rightarrow$ **JA / AP**, guna $d$) atau **Bahagi** ($\\frac{T_2}{T_1} = \\frac{T_3}{T_2} \\rightarrow$ **JG / GP**, guna $r$). Salah pilih janjang = 0 markah keseluruhan soalan!',
            en: 'Never guess blindly! Always check **Subtract** ($T_2 - T_1 = T_3 - T_2 \\rightarrow$ **AP**, use $d$) or **Divide** ($\\frac{T_2}{T_1} = \\frac{T_3}{T_2} \\rightarrow$ **GP**, use $r$). Choosing the wrong progression loses every mark on the question!'
          }
        },
        {
          icon: '🎯',
          tag: { bm: 'Ubat Keliru Tn vs Sn', en: 'Tn vs Sn Cure' },
          title: { bm: 'Simpanan "Pada Bulan Ke-12" ($T_{12}$) vs "Jumlah Selepas 12 Bulan" ($S_{12}$)', en: 'Savings "In the 12th Month" ($T_{12}$) vs "Total After 12 Months" ($S_{12}$)' },
          desc: {
            bm: '**$T_n$** ialah nilai pada **satu kotak tunggal ke-$n$ sahaja**. **$S_n$** ialah jumlah kesemua kotak dari kotak **ke-1 hingga ke-$n$**. Maka hasil tambah dari sebutan ke-5 hingga ke-10 ialah **$S_{10} - S_4$** (tolak 4 kotak pertama supaya kotak ke-5 kekal!).',
            en: '**$T_n$** is the value in **one single $n$-th bucket**; **$S_n$** is the **total of all buckets from 1 to $n$**. Therefore, the sum from the 5th to 10th term is **$S_{10} - S_4$** (subtract the first 4 buckets so the 5th bucket stays in!).'
          }
        },
        {
          icon: '♾️',
          tag: { bm: 'Perpuluhan Berulang = JG!', en: 'Recurring Decimal = GP!' },
          title: { bm: 'Hasil Tambah Ketakterhinggaan $S_\\infty = \\frac{a}{1 - r}$', en: 'Sum to Infinity $S_\\infty = \\frac{a}{1 - r}$ (When $|r| < 1$)' },
          desc: {
            bm: 'Jika nisbah $|r| < 1$ (contohnya $r = \\frac{1}{2}$ atau $-0.3$), saiz sebutan mengecil menuju sifar lalu jumlah keseluruhannya menghampiri nilai tetap $S_\\infty = \\frac{a}{1 - r}$. Gunakan ini untuk tukar perpuluhan berulang seperti $0.272727\\dots = 0.27 + 0.0027 + \\dots$ kepada pecahan tepat!',
            en: 'When ratio $|r| < 1$ (such as $r = \\frac{1}{2}$ or $-0.3$), each term shrinks toward zero so the infinite sum converges to a fixed value $S_\\infty = \\frac{a}{1 - r}$. Use this to convert recurring decimals like $0.272727\\dots = 0.27 + 0.0027 + \\dots$ into an exact fraction!'
          }
        },
        {
          icon: '📈',
          tag: { bm: 'Nisbah % & Pusing Tanda Log', en: 'Growth/Decay % & Log Flip' },
          title: { bm: 'JA ($+d$) vs JG ($\\times r$), Nisbah $1 \\pm p\\%$ & Tanda Log Negatif', en: 'AP ($+d$) vs GP ($\\times r$), Ratio $1 \\pm p\\%$ & Negative-Log Flip' },
          desc: {
            bm: 'Ingat teras: **JA ($+d$)** berbanding **JG ($\\times r$)**! Jika nilai **naik $10\\%$** (bola salji membesar), $r = 1 + 0.10 = 1.10$; jika **susut $10\\%$** (baldi bocor), $r = 1 - 0.10 = 0.90$ (**BUKAN $0.10$**!). Dan bila bahagi ketaksamaan dengan $\\log_{10} r$ yang negatif ($0 < r < 1$), **tanda $< / >$ wajib diterbalikkan**!',
            en: 'Keep the core split clear: **AP ($+d$)** vs **GP ($\\times r$)**! When a value **grows by $10\\%$** (snowball effect), $r = 1 + 0.10 = 1.10$; when it **decays by $10\\%$** (leaking bucket), $r = 1 - 0.10 = 0.90$ (**NEVER $0.10$**!). And when dividing an inequality by $\\log_{10} r < 0$ ($0 < r < 1$), **flip the $< / >$ sign**!'
          }
        }
      ],
      triggers: [
        {
          cue: { bm: 'Diberi ungkapan $S_n = 3n^2 + 5n$ sahaja, diminta cari sebutan ke-$6$ ($T_6$) atau $a$ dan $d$', en: 'Given only a sum formula $S_n = 3n^2 + 5n$, asked to find the 6th term ($T_6$) or $a, d$' },
          action: { bm: 'Guna senjata rahsia: **$a = T_1 = S_1$** dan **$T_6 = S_6 - S_5$**! Selesai dalam 15 saat tanpa perlu rumus panjang!', en: 'Use the golden identity: **$a = T_1 = S_1$** and **$T_6 = S_6 - S_5$**! Solved in 15 seconds without needing any long derivation!' }
        },
        {
          cue: { bm: 'Soalan sebut: "Tiga sebutan berturutan $p, q, s$ membentuk JA / JG"', en: 'Exam says: "Three consecutive terms $p, q, s$ form an AP / GP"' },
          action: { bm: 'Bagi **JA**: tulis $q - p = s - q \\Rightarrow 2q = p + s$. Bagi **JG**: tulis $\\frac{q}{p} = \\frac{s}{q} \\Rightarrow q^2 = ps$.', en: 'For **AP**: write $q - p = s - q \\Rightarrow 2q = p + s$. For **GP**: write $\\frac{q}{p} = \\frac{s}{q} \\Rightarrow q^2 = ps$.' }
        },
        {
          cue: { bm: 'Soalan sebut: "Cari bilangan sebutan minimum supaya hasil tambah melebihi 1000"', en: 'Exam says: "Find the minimum number of terms for the sum to exceed 1000"' },
          action: { bm: 'Bina ketaksamaan $S_n > 1000$, selesaikan untuk $n$ (guna $\\log_{10}$ jika JG — hati-hati tanda ketaksamaan terbalik apabila bahagi dengan $\\log_{10}(0.8)$ yang negatif!), lalu bundarkan ke integer **atas**.', en: 'Set up $S_n > 1000$ and solve for $n$ (use $\\log_{10}$ for GP — watch out: dividing by $\\log_{10}(0.8) < 0$ **flips** the inequality sign because $\\log_{10} r$ is negative!), then round UP to the next integer.' }
        },
        {
          cue: { bm: 'Soalan cerita sebut: "Nilai bertambah / menyusut $10\\%$ setiap tahun"', en: 'Word problem says: "Value increases / depreciates by $10\\%$ each year"' },
          action: { bm: 'Guna **JG** dengan **$r = 1 + 0.10 = 1.10$** (bertambah) atau **$r = 1 - 0.10 = 0.90$** (menyusut), **JANGAN guna $r = 0.10$**! Semak sama ada soalan minta nilai tahun ke-$n$ ($T_n$) atau jumlah terkumpul ($S_n$).', en: 'Use **GP** with **$r = 1 + 0.10 = 1.10$** (growth) or **$r = 1 - 0.10 = 0.90$** (decay), **NEVER $r = 0.10$**! Check whether the question asks for the $n$-th year value ($T_n$) or cumulative total ($S_n$).' }
        }
      ],
      rxFix: {
        wrong: { bm: 'hasil tambah sebutan ke-$4$ hingga ke-$9$ dikira sebagai $S_9 - S_4$ (terbuang $T_4$!).', en: 'the sum from the $4$th to $9$th term as $S_9 - S_4$ (accidentally deleting $T_4$!).' },
        right: { bm: 'Tolak sehingga sebutan **sebelumnya** sahaja: $T_4 + T_5 + \\dots + T_9 = S_9 - S_3$.', en: 'Subtract only up to the **preceding** term: $T_4 + T_5 + \\dots + T_9 = S_9 - S_3$.' }
      }
    }
  };

  Object.keys(F4A_CLINIC).forEach(function (k) {
    App.teacherClinic[k] = F4A_CLINIC[k];
  });
})(window.AddMathApp);
