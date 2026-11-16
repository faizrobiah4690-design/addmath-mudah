/**
 * AddMath Mudah — Klinik Cikgu Pakar & Poster Infografik Visual (Tingkatan 5: Bab 1–8)
 * Dirangka khas dari perspektif Guru Cemerlang Matematik Tambahan KSSM untuk merawat
 * "sakit kepala" sebenar pelajar Tingkatan 5: kejutan Kalkulus, keliru Pilih Atur vs Gabungan,
 * perangkap sisihan piawai Normal, tanda sukuan Trigonometri, Pengaturcaraan Linear & Kinematik.
 *
 * Struktur modular: menyambung terus pendaftaran App.teacherClinic['f5-c1' .. 'f5-c8'].
 */
window.AddMathApp = window.AddMathApp || {};
window.AddMathApp.teacherClinic = window.AddMathApp.teacherClinic || {};

(function (App) {
  'use strict';

  const F5_CLINIC = {
    'f5-c1': {
      poster: 'assets/posters/f5-c1.jpg',
      posterTitle: {
        bm: 'Poster Visual Bab 1: Sukatan Membulat (Radian, Panjang Lengkok, Luas Sektor & Tembereng)',
        en: 'Chapter 1 Visual Poster: Circular Measure (Radians, Arc Length, Sector & Segment Area)'
      },
      vocabBridge: {
        bm: 'Kamus Istilah Poster: Circular Measure = Sukatan Membulat • Arc Length = Panjang Lengkok ($s$) • Sector = Sektor • Shaded Segment = Tembereng Berlorek • Chord = Perentas',
        en: 'Key KSSM Terms: Radian ($\\text{rad}$) • Minor/Major Sector = Sektor Minor/Major • Chord = Perentas • Perimeter of Shaded Region = Perimeter Rantau Berlorek'
      },
      painSummary: {
        bm: 'Tiga perangkap maut pelajar: terlupa tukar sudut darjah ke radian dalam rumus $s = r\\theta$, tersilap mod kalkulator [D] vs [R] semasa tekan $\\sin\\theta$, dan tertinggal jejari $2r$ apabila kira perimeter sektor!',
        en: 'Three classic traps: plugging degrees directly into $s = r\\theta$, leaving the calculator in Degree [D] mode when evaluating $\\sin\\theta$ in radians, and forgetting $+2r$ or the chord when finding perimeter!'
      },
      mentalModels: [
        {
          icon: '🍕',
          tag: { bm: 'Analogi Sepotong Piza (Kerak = Jejari)', en: 'Pizza Slice Model (Crust = Radius)' },
          title: { bm: 'Apa Sebenarnya $1\\text{ radian}$? Kerak Piza = Jejari!', en: 'What Is $1\\text{ radian}$? Crust Equals Radius!' },
          desc: {
            bm: 'Bayangkan sepotong piza di mana panjang **kerak melengkung ($s$)** sama panjang tepat dengan **tepi potongannya ($r$)** — bukaan sudut itu ialah **$1\\text{ rad} \\approx 57.3^\\circ$**! Separuh bulatan penuh ialah $\\pi\\text{ rad} = 180^\\circ$, manakala satu pusingan penuh ialah $2\\pi\\text{ rad} = 360^\\circ$.',
            en: 'Picture a pizza slice whose **curved crust ($s$)** equals its **straight side ($r$)** — that angle is **$1\\text{ rad} \\approx 57.3^\\circ$**! Half a circle is $\\pi\\text{ rad} = 180^\\circ$ and a full turn is $2\\pi\\text{ rad} = 360^\\circ$.'
          }
        },
        {
          icon: '🚧',
          tag: { bm: 'Mnemonik: Jalan Keliling Pagar', en: 'Hook: Walk the Full Fence' },
          title: { bm: 'Perimeter Rantau Berlorek ≠ Panjang Lengkok Semata-mata!', en: 'Perimeter of Shaded Region ≠ Arc Length Alone!' },
          desc: {
            bm: 'Bayangkan semut berjalan memagari **seluruh sempadan rantau berlorek** sehingga kembali ke titik mula! Bagi sektor penuh: $\\text{Perimeter} = s + 2r$. Bagi tembereng berlorek: $\\text{Perimeter} = \\text{Lengkok } s + \\text{Perentas } AB$ (cari perentas guna petua kosinus atau $2r\\sin\\frac{\\theta}{2}$).',
            en: 'Imagine an ant walking around **every boundary edge** of the shaded region back to its start! Full sector perimeter $= s + 2r$. Segment perimeter $= \\text{Arc } s + \\text{Chord } AB$ (find chord via Cosine Rule or $2r\\sin\\frac{\\theta}{2}$).'
          }
        },
        {
          icon: '🍉',
          tag: { bm: 'Formula Potong Tembikai', en: 'Watermelon Cut Model' },
          title: { bm: 'Luas Tembereng = Sektor Penuh Tolak Segi Tiga!', en: 'Area of Segment = Sector Minus Triangle!' },
          desc: {
            bm: 'Jangan hafal rumus baru yang pelik! Ambil keseluruhan **Sektor Piza** ($\\frac{1}{2}r^2\\theta$) dan potong buang **Isi Segi Tiga** ($\\frac{1}{2}r^2\\sin\\theta$): $$A_{\\text{tembereng}} = \\frac{1}{2}r^2(\\theta - \\sin\\theta)$$',
            en: 'Take the whole **Sector slice** ($\\frac{1}{2}r^2\\theta$) and slice off the **Triangle** ($\\frac{1}{2}r^2\\sin\\theta$): $$A_{\\text{segment}} = \\frac{1}{2}r^2(\\theta - \\sin\\theta)$$'
          }
        },
        {
          icon: '🧮',
          tag: { bm: 'SOP Semakan Kalkulator 2-Saat', en: '2-Second Calculator Check' },
          title: { bm: 'Wajib Jeling Huruf [D] atau [R] Atas Skrin Kalkulator!', en: 'Always Check [D] vs [R] Before Pressing Sin/Cos!' },
          desc: {
            bm: 'Rumus $s = r\\theta$ dan $A = \\frac{1}{2}r^2\\theta$ **WAJIB guna $\\theta$ dalam radian**. Tetapi apabila menekan $\\sin\\theta$ atau $\\cos\\theta$: jika $\\theta$ dalam radian (contoh $1.4\\text{ rad}$), skrin kalkulator mesti **[R]** (atau tukar sudut ke darjah dahulu baru tekan $\\sin$ dalam mod **[D]**)!',
            en: 'Formulas $s = r\\theta$ and $A = \\frac{1}{2}r^2\\theta$ **strictly require $\\theta$ in radians**. When pressing $\\sin\\theta$ or $\\cos\\theta$ for radian angles, ensure your calculator shows **[R]** (or convert $\\theta$ to degrees first if staying in **[D]** mode)!'
          }
        }
      ],
      triggers: [
        {
          cue: { bm: 'Soalan beri sudut dalam darjah (contoh $120^\\circ$) dan minta panjang lengkok atau luas sektor', en: 'Question gives angle in degrees (e.g. $120^\\circ$) and asks for arc length or sector area' },
          action: { bm: 'Langkah pertama wajib tukar ke radian dahulu: $\\theta = 120^\\circ \\times \\frac{\\pi}{180^\\circ}$ (guna nilai $\\pi = 3.142$ seperti diarahkan kertas SPM!).', en: 'Step 1 MUST convert to radians: $\\theta = 120^\\circ \\times \\frac{\\pi}{180^\\circ}$ (use $\\pi = 3.142$ whenever specified by the SPM question!).' }
        },
        {
          cue: { bm: 'Soalan sebut: "Cari luas sektor major / lengkok major OAB"', en: 'Exam says: "Find the area of the major sector / major arc OAB"' },
          action: { bm: 'Sudut major ialah bahagian besar di luar sudut tirus! Tolak daripada satu pusingan penuh: $\\theta_{\\text{major}} = 2\\pi - \\theta_{\\text{minor}}$.', en: 'Major means the reflex angle! Subtract the acute/obtuse angle from a full circle: $\\theta_{\\text{major}} = 2\\pi - \\theta_{\\text{minor}}$.' }
        },
        {
          cue: { bm: 'Gambar rajah menunjukkan tangen menyentuh bulatan pada titik $A$ dan $B$ dari titik luar $P$', en: 'Diagram shows two tangents from external point $P$ touching circle at $A$ and $B$' },
          action: { bm: 'Lukis jejari $OA$ dan $OB$: sudut tangen sentiasa **$90^\\circ$**! Gunakan segi tiga bersudut tegak $\\triangle OAP$ ($\\tan, \\cos, \\text{Pythagoras}$) untuk cari jejari, panjang tangen $PA$, dan sudut $\\angle AOB$.', en: 'Radius meets tangent at **$90^\\circ$**! Split into two congruent right-angled triangles $\\triangle OAP$ to find $PA$ and $\\angle AOB$ via $\\tan$ or $\\cos$.' }
        },
        {
          cue: { bm: 'Soalan minta: "Cari perimeter rantau berlorek" yang dibatasi lengkok dan garis lurus', en: 'Exam asks: "Find the perimeter of the shaded region" bounded by arcs and straight lines' },
          action: { bm: 'Tandakan setiap sisi sempadan berlorek dengan jari (1, 2, 3...), kira panjang setiap satu secara berasingan, kemudian jumlahkan kesemuanya pada baris akhir.', en: 'Trace every boundary segment of the shaded region (1, 2, 3...), calculate each length separately, then sum them cleanly at the end.' }
        }
      ],
      rxFix: {
        wrong: { bm: 'Mengira $s = 8 \\times 60 = 480\\text{ cm}$ dengan memasukkan $60^\\circ$ terus ke dalam $s = r\\theta$, atau menekan $\\sin(1.25)$ dalam mod [D].', en: 'Writing $s = 8 \\times 60 = 480\\text{ cm}$ using degrees in $s = r\\theta$, or evaluating $\\sin(1.25\\text{ rad})$ while calculator is in [D] mode.' },
        right: { bm: 'Tukar $60^\\circ \\times \\frac{3.142}{180^\\circ} = 1.0473\\text{ rad} \\Rightarrow s = 8(1.0473) = 8.379\\text{ cm}$, dan pastikan kalkulator dalam mod [R] apabila mengira $\\sin(1.25\\text{ rad}) = 0.9490$.', en: 'Convert $60^\\circ$ to $1.0473\\text{ rad}$ first ($s = 8(1.0473) = 8.379\\text{ cm}$), and switch calculator to [R] mode so $\\sin(1.25\\text{ rad}) = 0.9490$.' }
      }
    },

    'f5-c2': {
      poster: 'assets/posters/f5-c2.jpg',
      posterTitle: {
        bm: 'Poster Visual Bab 2: Pembezaan (Petua Pembezaan, Tangen/Normal, Kadar Perubahan & Pengoptimuman)',
        en: 'Chapter 2 Visual Poster: Differentiation (Rules, Tangents/Normals, Rates of Change & Optimization)'
      },
      vocabBridge: {
        bm: 'Kamus Istilah Poster: Power/Product/Quotient/Chain Rule = Petua Kuasa/Hasil Darab/Hasil Bahagi/Rantai • Turning/Stationary Point = Titik Pusingan/Pegun • Small Changes = Perubahan Kecil',
        en: 'Key KSSM Terms: First Principles = Prinsip Pertama • Gradient of Normal = Kecerunan Normal ($m_N$) • Second Derivative = Terbitan Kedua ($\\frac{d^2y}{dx^2}$)'
      },
      painSummary: {
        bm: 'Pelajar sering terlupa darab hasil beza sebutan dalam kurungan semasa guna Petua Rantai, terbalik susunan pengangka dalam Petua Hasil Bahagi, dan buntu menyambung rumus Petua Rantai bagi soalan Kadar Perubahan Berkaitan (*Connected Rates of Change*)!',
        en: 'Students frequently forget to multiply by the inner derivative in the Chain Rule, swap the numerator order in the Quotient Rule, and freeze on Connected Rates of Change word problems!'
      },
      mentalModels: [
        {
          icon: '🧅',
          tag: { bm: 'Analogi Kupas Bawang Berlapis', en: 'Peeling Onion Layers' },
          title: { bm: 'Petua Rantai = Beza Kulit Luar $\\times$ Beza Isi Dalam!', en: 'Chain Rule = Outer Derivative $\\times$ Inner Derivative!' },
          desc: {
            bm: 'Bagi $y = (3x^2 - 5)^4$, jangan kembangkan kurungan! **Langkah 1 (Kulit Luar)**: turunkan kuasa $4$ ke depan, kurangkan kuasa jadi $3 \\rightarrow 4(3x^2 - 5)^3$. **Langkah 2 (Isi Dalam)**: WAJIB darab dengan hasil beza isi dalam $(6x)$! Jawapan: $24x(3x^2 - 5)^3$.',
            en: 'For $y = (3x^2 - 5)^4$, peel outside-in! **Outer layer**: $4(3x^2 - 5)^3$. **Inner layer**: multiply by the derivative of the bracket $(6x)$ $\\rightarrow 24x(3x^2 - 5)^3$.'
          }
        },
        {
          icon: '🛡️',
          tag: { bm: 'Mnemonik: Bawah Mula Dahulu!', en: 'Hook: Bottom Starts First!' },
          title: { bm: 'Petua Hasil Darab vs Hasil Bahagi Tanpa Tertukar Tanda', en: 'Product Rule vs Quotient Rule Without Sign Slips' },
          desc: {
            bm: 'Apabila $x$ bertemu $x$: **Darab ($y = uv$)** $\\rightarrow u v\' + v u\'$. **Bahagi ($y = \\frac{u}{v}$)** mempunyai tanda TOLAK, jadi urutan wajib tepat — ingat **"Bawah ($v$) Mula Dahulu!"**: $$\\frac{dy}{dx} = \\frac{v u\' - u v\'}{v^2}$$ Jika sebutan mudah seperti $\\frac{4}{x^3}$, naikkan sahaja jadi $4x^{-3}$ (jauh lebih pantas!).',
            en: 'For $y = \\frac{u}{v}$, subtraction order is critical — remember **"Bottom ($v$) Starts First!"**: $$\\frac{dy}{dx} = \\frac{v u\' - u v\'}{v^2}$$ Tip: if the numerator is just a constant like $\\frac{4}{x^3}$, rewrite as $4x^{-3}$ and use Power Rule!'
          }
        },
        {
          icon: '⛰️',
          tag: { bm: 'Ujian Emosi Terbitan Kedua', en: 'Second Derivative Smile/Frown Test' },
          title: { bm: 'Titik Pegun $\\frac{dy}{dx} = 0$, Kemudian Semak Maksimum vs Minimum!', en: 'Stationary Point $\\frac{dy}{dx} = 0$, Then Test Max vs Min!' },
          desc: {
            bm: 'Di puncak bukit atau dasar lembah, kecerunan tangen mendatar jadi **$\\frac{dy}{dx} = 0$**. Untuk tentukan jenis titik: kira $\\frac{d^2y}{dx^2}$. Jika **$> 0$ (Positif = Senyum $\\cup$)** $\\rightarrow$ **Titik Minimum**! Jika **$< 0$ (Negatif = Masam $\\cap$)** $\\rightarrow$ **Titik Maksimum**! (Terbalik daripada sangkaan ramai!).',
            en: 'At a peak or valley, slope is flat so **$\\frac{dy}{dx} = 0$**. Plug $x$ into $\\frac{d^2y}{dx^2}$: if **$> 0$ (Positive = Smile $\\cup$)** $\\rightarrow$ **Minimum point**! If **$< 0$ (Negative = Frown $\\cap$)** $\\rightarrow$ **Maximum point**!'
          }
        },
        {
          icon: '🌉',
          tag: { bm: 'Jambatan Domino Kadar Perubahan', en: 'Domino Bridge for Rates' },
          title: { bm: 'Perkataan "Kadar" = Per Masa ($dt$ Di Bawah)!', en: 'Word "Rate" = Per Time ($dt$ at the Bottom)!' },
          desc: {
            bm: 'Apabila soalan sebut *"jejari bertambah pada kadar $0.2\\text{ cm s}^{-1}$"*, tulis simbol terus: $\\frac{dr}{dt} = +0.2$ (jika menyusut/bocor, letak tanda negatif!). Nak cari kadar luas $\\frac{dA}{dt}$? Bina jambatan: $$\\frac{dA}{dt} = \\frac{dA}{dr} \\times \\frac{dr}{dt}$$ supaya $dr$ atas-bawah boleh potong!',
            en: '"Radius increases at $0.2\\text{ cm s}^{-1}$" means $\\frac{dr}{dt} = +0.2$ (negative if shrinking/leaking!). Need $\\frac{dA}{dt}$? Build the chain bridge: $$\\frac{dA}{dt} = \\frac{dA}{dr} \\times \\frac{dr}{dt}$$ so $dr$ cancels diagonally!'
          }
        }
      ],
      triggers: [
        {
          cue: { bm: 'Soalan minta: "Cari persamaan garis normal kepada lengkung pada titik $P(x_1, y_1)$"', en: 'Exam asks: "Find the equation of the normal to the curve at $P(x_1, y_1)$"' },
          action: { bm: 'Kira $m_T = \\frac{dy}{dx}$ pada $x_1$, kemudian **songsang & tukar tanda** untuk kecerunan normal: $m_N = -\\frac{1}{m_T}$, sebelum masuk ke $y - y_1 = m_N(x - x_1)$.', en: 'Evaluate tangent slope $m_T = \\frac{dy}{dx}$ at $x_1$, **flip and negate** for normal slope $m_N = -\\frac{1}{m_T}$, then use $y - y_1 = m_N(x - x_1)$.' }
        },
        {
          cue: { bm: 'Soalan Pengoptimuman Kertas 2: diberi jumlah panjang dawai / luas permukaan tetap, diminta luas/isi padu maksimum', en: 'Paper 2 Optimization: given fixed wire length / surface area, asked to maximize area/volume' },
          action: { bm: 'Bina 2 persamaan: gunakan syarat tetap yang diberi (seperti jumlah panjang dawai / luas permukaan) untuk jadikan $y$ atau $h$ perkara rumus, gantikan ke dalam rumus sasaran supaya tinggal **1 pemboleh ubah sahaja**, kemudian selesaikan $\\frac{dV}{dx} = 0$!', en: 'Write 2 equations: isolate $y$ or $h$ from the fixed constraint, substitute into the target formula so only **one variable** remains, then solve $\\frac{dV}{dx} = 0$!' }
        },
        {
          cue: { bm: 'Soalan sebut: "Cari nilai hampir / anggaran perubahan kecil apabila $x$ berubah daripada $4$ kepada $3.98$"', en: 'Exam says: "Estimate the small change / approximate value as $x$ changes from $4$ to $3.98$"' },
          action: { bm: 'Tetapkan nilai cantik $x = 4$ dan perubahan kecil $\\delta x = 3.98 - 4 = -0.02$. Kira $\\delta y \\approx \\frac{dy}{dx}\\Big|_{x=4} \\times \\delta x$, dan nilai baharu $\\approx y_{\\text{asal}} + \\delta y$.', en: 'Set clean $x = 4$ and $\\delta x = 3.98 - 4 = -0.02$. Compute $\\delta y \\approx \\frac{dy}{dx}\\Big|_{x=4} \\times \\delta x$, then New Value $\\approx y_{\\text{old}} + \\delta y$.' }
        },
        {
          cue: { bm: 'Soalan minta: "Beza daripada prinsip pertama (first principles)"', en: 'Exam asks: "Differentiate from first principles"' },
          action: { bm: 'Wajib tunjuk langkah $\\lim_{\\delta x \\to 0} \\frac{f(x + \\delta x) - f(x)}{\\delta x}$ penuh sehingga $\\delta x$ dipotong — guna petua kuasa biasa hanya untuk semak jawapan akhir!', en: 'You MUST show the full $\\lim_{\\delta x \\to 0} \\frac{f(x + \\delta x) - f(x)}{\\delta x}$ expansion — use Power Rule beforehand so you already know the exact target answer!' }
        }
      ],
      rxFix: {
        wrong: { bm: 'Membezakan $y = \\frac{1}{(2x + 1)^3}$ sebagai $\\frac{1}{3(2x + 1)^2(2)}$ (membezakan penyebut di bawah pecahan secara terus!).', en: 'Differentiating $y = \\frac{1}{(2x + 1)^3}$ by differentiating the denominator in place as $\\frac{1}{3(2x + 1)^2(2)}$.' },
        right: { bm: 'Naikkan kurungan ke atas dengan kuasa negatif dahulu: $y = (2x + 1)^{-3} \\Rightarrow \\frac{dy}{dx} = -3(2x + 1)^{-4}(2) = -\\frac{6}{(2x + 1)^4}$.', en: 'Rewrite with a negative index first: $y = (2x + 1)^{-3} \\Rightarrow \\frac{dy}{dx} = -3(2x + 1)^{-4}(2) = -\\frac{6}{(2x + 1)^4}$.' }
      }
    },

    'f5-c3': {
      poster: 'assets/posters/f5-c3.jpg',
      posterTitle: {
        bm: 'Poster Visual Bab 3: Pengamiran (Kamiran Tak Tentu, Kamiran Tentu, Luas Rantau & Isi Padu Kisar)',
        en: 'Chapter 3 Visual Poster: Integration (Indefinite/Definite Integrals, Shaded Area & Volume of Revolution)'
      },
      vocabBridge: {
        bm: 'Kamus Istilah Poster: Indefinite Integral = Kamiran Tak Tentu ($+ c$) • Definite Integral = Kamiran Tentu • Reversing Limits = Songsang Had • Volume of Revolution ($360^\\circ$) = Isi Padu Dijana Kisaran $360^\\circ$',
        en: 'Key KSSM Terms: Constant of Integration ($+ c$) = Pemalar Pengamiran • Bounded by $x$-axis / $y$-axis = Dibatasi Paksi-$x$ / Paksi-$y$'
      },
      painSummary: {
        bm: 'Pelajar selalu hilang 1 markah percuma kerana tertinggal $+ c$, tertukar rumus luas $\\int y\\,dx$ dengan isi padu $\\pi\\int y^2\\,dx$ (terlupa huruf $\\pi$ atau terlupa kuasa dua!), dan terus tolak lengkung dengan garis tanpa potong ikut titik persilangan.',
        en: 'Students lose easy marks by forgetting $+ c$ on indefinite integrals, omitting $\\pi$ or squaring $y^2$ in volume of revolution, and integrating straight across a curve-line corner instead of splitting at the intersection!'
      },
      mentalModels: [
        {
          icon: '⏪',
          tag: { bm: 'Butang Undur Pembezaan', en: 'Rewind Button of Differentiation' },
          title: { bm: 'Tambah Kuasa $+1$, Bahagi Kuasa Baru & Wajib Letak $+ c$!', en: 'Power $+1$, Divide by New Power & Never Forget $+ c$!' },
          desc: {
            bm: 'Pembezaan darab kuasa lalu tolak $1$; Pengamiran pula **songsangkannya**: tambah kuasa $+1$, kemudian bahagi kuasa baharu itu! Bagi kurungan linear $\\int (ax + b)^n\\,dx = \\frac{(ax + b)^{n+1}}{(n + 1)(a)} + c$ — jangan lupa **bahagi pekali $x$ iaitu $a$**! Dan selagi tiada nombor had di cangkuk $\\int$, **WAJIB tulis $+ c$**!',
            en: 'Integration rewinds differentiation: increase power by $1$, divide by the new power! For $\\int (ax + b)^n\\,dx = \\frac{(ax + b)^{n+1}}{(n + 1)(a)} + c$, remember to **divide by $a$** (coefficient of $x$) and ALWAYS include **$+ c$** when there are no limits!'
          }
        },
        {
          icon: '🧭',
          tag: { bm: 'Kompas Paksi: Ikut Paksi, Ikut dx atau dy!', en: 'Axis Compass: Match Limits to dx or dy!' },
          title: { bm: 'Ke Paksi-$x$ Guna $\\int y\\,dx$; Ke Paksi-$y$ Guna $\\int x\\,dy$!', en: 'To $x$-Axis Use $\\int y\\,dx$; To $y$-Axis Use $\\int x\\,dy$!' },
          desc: {
            bm: 'Lihat ke paksi mana rantau berlorek bersandar! Jika bersandar pada **paksi-$x$** (had $x_1 \\to x_2$): $\\text{Luas} = \\int_{x_1}^{x_2} y\\,dx$. Jika bersandar pada **paksi-$y$** (had $y_1 \\to y_2$): tukar persamaan jadi $x = \\dots$ dahulu, kemudian $\\text{Luas} = \\int_{y_1}^{y_2} x\\,dy$. Jika rantau berada di **bawah paksi-$x$**, letakkan modulus $|\\text{nilai}|$ supaya luas positif!',
            en: 'Match everything to the target axis! Against the **$x$-axis**: limits are $x$-values and $\\text{Area} = \\int_{x_1}^{x_2} y\\,dx$. Against the **$y$-axis**: rearrange for $x$ first and use $\\int_{y_1}^{y_2} x\\,dy$. Take $|\\text{value}|$ for regions below the $x$-axis!'
          }
        },
        {
          icon: '🏺',
          tag: { bm: 'Analogi Mesin Tembikar Berputar 360°', en: '360° Pottery Wheel Model' },
          title: { bm: 'Isi Padu Kisaran = Potong Kepingan Cakera Bulat $\\pi r^2$!', en: 'Volume of Revolution = Stacking Circular Discs $\\pi r^2$!' },
          desc: {
            bm: 'Apabila rantau diputarkan $360^\\circ$ mengelilingi paksi-$x$, setiap hirisan membentuk cakera bulat berjejari $r = y$, jadi luas keratan ialah $\\pi y^2$! Sebab itu rumusnya **WAJIB ada $\\pi$ dan kuasa dua**: $$V_x = \\pi \\int_a^b y^2\\,dx \\quad \\text{dan} \\quad V_y = \\pi \\int_c^d x^2\\,dy$$',
            en: 'Rotating $360^\\circ$ around the $x$-axis sweeps out circular discs of radius $r = y$ and area $\\pi y^2$! That is why **both $\\pi$ and squaring** are mandatory: $$V_x = \\pi \\int_a^b y^2\\,dx \\quad \\text{and} \\quad V_y = \\pi \\int_c^d x^2\\,dy$$'
          }
        },
        {
          icon: '🍰',
          tag: { bm: 'Taktik Jimat Masa Garis Lurus', en: 'Straight-Line Shortcut' },
          title: { bm: 'Garis Lurus Tak Payah Kamir — Guna Segi Tiga / Trapezium!', en: 'Never Integrate a Straight Line — Use Triangle / Trapezium!' },
          desc: {
            bm: 'Bagi rantau berlorek antara lengkung dan garis lurus, jangan buang masa mengamir persamaan garis lurus! Kira luas di bawah garis lurus guna rumus mudah **Segi Tiga ($\\frac{1}{2} \\times \\text{tapak} \\times \\text{tinggi}$)** atau **Trapezium ($\\frac{1}{2}(a + b)h$)**, kemudian tolak atau tambah dengan kamiran lengkung!',
            en: 'When a shaded region is bounded by a curve and a straight line, save time and avoid algebra mistakes: compute the straight-line portion as a simple **Triangle** or **Trapezium**, then add/subtract the curve integral!'
          }
        }
      ],
      triggers: [
        {
          cue: { bm: 'Soalan sebut: "Kecerunan lengkung pada sebarang titik diberi oleh $\\frac{dy}{dx} = 6x - 4$ dan lengkung melalui $(2, 5)$"', en: 'Exam says: "Gradient function is $\\frac{dy}{dx} = 6x - 4$ and curve passes through $(2, 5)$"' },
          action: { bm: 'Kamirkan untuk dapat $y = \\int (6x - 4)\\,dx = 3x^2 - 4x + c$, kemudian gantikan $(2, 5)$ terus untuk mencari nilai tepat $c$!', en: 'Integrate to get $y = 3x^2 - 4x + c$, then substitute $(2, 5)$ to solve for $c$ and write the full equation!' }
        },
        {
          cue: { bm: 'Soalan sifat kamiran: diberi $\\int_1^5 f(x)\\,dx = 8$, diminta cari $\\int_5^1 [2f(x) + 3]\\,dx$', en: 'Definite integral property: given $\\int_1^5 f(x)\\,dx = 8$, find $\\int_5^1 [2f(x) + 3]\\,dx$' },
          action: { bm: 'Perhatikan had terbalik ($\\int_5^1 f(x)\\,dx = -8$) dan **WAJIB kamirkan pemalar $3$** menjadi $[3x]_5^1 = 3(1 - 5) = -12$ (jangan tambah $+3$ mentah-mentah!).', en: 'Spot the reversed limits ($\\int_5^1 f(x)\\,dx = -8$) and **integrate the constant $3$** properly as $[3x]_5^1 = 3(1 - 5) = -12$ (never just add $+3$!).' }
        },
        {
          cue: { bm: 'Soalan "Seterusnya (Hence)": bahagian (a) suruh bezakan $\\frac{d}{dx}[x\\sqrt{2x+1}]$, bahagian (b) suruh cari $\\int \\dots\\,dx$', en: '"Hence" question: part (a) differentiates $F(x)$, part (b) asks to integrate a related expression' },
          action: { bm: 'JANGAN cuba kamir ikut rumus biasa! Terbalikkan sahaja keputusan bahagian (a): jika $\\frac{d}{dx}[F(x)] = k \\cdot g(x)$, maka $\\int g(x)\\,dx = \\frac{1}{k}F(x) + c$!', en: 'NEVER integrate from scratch! Reverse part (a) directly: if $\\frac{d}{dx}[F(x)] = k \\cdot g(x)$, then $\\int g(x)\\,dx = \\frac{1}{k}F(x) + c$!' }
        }
      ],
      rxFix: {
        wrong: { bm: 'Mengira isi padu kisaran bagi $y = x^2 + 1$ sebagai $\\int_0^2 (x^2 + 1)\\,dx$ (tiada $\\pi$ dan tiada kuasa dua) atau mengkuasadua sebagai $x^4 + 1$ sahaja.', en: 'Writing volume of $y = x^2 + 1$ as $\\int_0^2 (x^2 + 1)\\,dx$ (missing $\\pi$ and square) or expanding $(x^2 + 1)^2$ wrongly as $x^4 + 1$.' },
        right: { bm: 'Tulis $V = \\pi \\int_0^2 (x^2 + 1)^2\\,dx = \\pi \\int_0^2 (x^4 + 2x^2 + 1)\\,dx$ — kembangkan kurungan kuasa dua dengan sebutan tengah $2ab$ penuh sebelum mengamir!', en: 'Write $V = \\pi \\int_0^2 (x^2 + 1)^2\\,dx = \\pi \\int_0^2 (x^4 + 2x^2 + 1)\\,dx$ — expand $(a+b)^2 = a^2 + 2ab + b^2$ fully before integrating!' }
      }
    },

    'f5-c4': {
      poster: 'assets/posters/f5-c4.jpg',
      posterTitle: {
        bm: 'Poster Visual Bab 4: Pilih Atur & Gabungan (Susunan Penting vs Pemilihan Kumpulan)',
        en: 'Chapter 4 Visual Poster: Permutations & Combinations (Order Matters vs Group Selection)'
      },
      vocabBridge: {
        bm: 'Kamus Istilah Poster: Permutation = Pilih Atur (${}^nP_r$, Susunan Penting) • Combination = Gabungan (${}^nC_r$, Kumpulan Tanpa Pangkat) • Mutually Exclusive = Kes Berasingan / Saling Eksklusif (Tak Berlaku Serentak $\\rightarrow$ Tambah $+$)',
        en: 'Key KSSM Terms: Arrangement in a Row = Susunan Sebaris • Identical Objects = Huruf/Objek Sama Berulang • Together vs Separated = Bersama lwn Berasingan'
      },
      painSummary: {
        bm: 'Pelajar paling kerap tersalah tekan ${}^nP_r$ sedangkan soalan minta jawatankuasa (${}^nC_r$), keliru bila perlu DARAB ($\\times$) lawan TAMBAH ($+$), dan lupa mendarab susunan dalaman apabila mengikat objek bersama!',
        en: 'Students constantly mix up ${}^nP_r$ and ${}^nC_r$, confuse when to MULTIPLY ($\\times$) vs ADD ($+$), and forget internal arrangements ($r!$) when tying objects together!'
      },
      mentalModels: [
        {
          icon: '🏅',
          tag: { bm: 'Ujian 3 Saat: P = Pangkat/PIN, C = Campur!', en: '3-Second Test: P = Position/PIN, C = Committee!' },
          title: { bm: 'Tukar Kedudukan Dua Orang: Berbeza atau Sama?', en: 'Swap Two Chosen Items: Does the Outcome Change?' },
          desc: {
            bm: 'Tanya satu soalan sahaja: *"Jika Ali dan Abu bertukar tempat, adakah keputusannya berubah?"* **YA** (Kod laluan, angka, beratur ambil gambar, Pengerusi & Setiausaha) $\\rightarrow$ **Pilih Atur ${}^nP_r$**! **TIDAK** (Pilih 4 ahli jawatankuasa biasa, pilih 3 perisa aiskrim, pasukan debat) $\\rightarrow$ **Gabungan ${}^nC_r$**!',
            en: 'Ask one question: *"If Ali and Abu swap places, is it a different result?"* **YES** (PIN codes, digits, photo line-up, President & Secretary) $\\rightarrow$ **Permutation ${}^nP_r$**! **NO** (committee, team, pizza toppings) $\\rightarrow$ **Combination ${}^nC_r$**!'
          }
        },
        {
          icon: '🔀',
          tag: { bm: 'Mnemonik: DAN = Darab, ATAU = Tambah', en: 'Hook: AND = Multiply, OR = Add' },
          title: { bm: 'Kerja Belum Siap = DARAB ($\\times$); Kes Berbeza = TAMBAH ($+$)!', en: 'Unfinished Stages = MULTIPLY ($\\times$); Separate Cases = ADD ($+$)!' },
          desc: {
            bm: 'Jika misi **belum lengkap** (pilih 2 lelaki **DAN** 3 perempuan untuk cukupkan 5 ahli), **DARAB**: ${}^5C_2 \\times {}^6C_3$. Apabila satu kes sudah lengkap dan anda beralih ke **kes alternatif lain** (Kes 1: 3P 2L **ATAU** Kes 2: 4P 1L), barulah **TAMBAH** hasil setiap kes!',
            en: 'While building **one complete team/code** (pick 2 boys **AND** 3 girls), **MULTIPLY**: ${}^5C_2 \\times {}^6C_3$. Only **ADD** when summing **mutually exclusive completed cases** (Case 1 **OR** Case 2)!'
          }
        },
        {
          icon: '🪢',
          tag: { bm: 'Taktik Ikat Guni vs Selit Celah', en: 'Tie-in-a-Sack vs Gap Method' },
          title: { bm: 'Mesti Bersama = Ikat 1 Guni; Mesti Berasingan = Selit Celah!', en: 'Together = Tie as 1 Unit; Separated = Slot into Gaps!' },
          desc: {
            bm: '**Mesti Bersama**: ikat kumpulan itu jadi **1 blok besar**, susun bersama objek lain, kemudian **WAJIB darab susunan dalaman guni ($k!$)**! **Mesti Berasingan**: untuk $2$ objek berasingan, guna $\\text{Jumlah Semua} - \\text{Bersama}$. Jika **$\\ge 3$ objek tiada dua bersebelahan**, susun objek lain dahulu dan selitkan ke dalam celah kosong (${}^{\\text{celah}}P_r$)!',
            en: '**Together**: bundle them as **1 super-block**, permute all blocks, then **multiply by internal $k!$**. **Separated**: for $2$ items, use $\\text{Total} - \\text{Together}$; for **$3+$ items all separated**, arrange the other items first and slot into the gaps (${}^{\\text{gaps}}P_r$)!'
          }
        },
        {
          icon: '🔐',
          tag: { bm: 'Peraturan VIP: Isi Syarat Ketat Dahulu!', en: 'VIP Rule: Fill Restricted Slots First!' },
          title: { bm: 'Nombor Genap / Lebih Besar Daripada $5000$: Kunci Kotak Syarat Dulu!', en: 'Even Numbers / $> 5000$: Lock Restricted Digits First!' },
          desc: {
            bm: 'Lukis kotak kosong `_ _ _ _`. Isi kotak paling cerewet dahulu (contoh digit terakhir mesti genap, dan digit pertama $> 5$). **AMARAN**: Jika ada digit **bertindan** dalam kedua-dua syarat (contoh digit `6` dan `8` ialah $> 5$ DAN juga genap!), wajib **pecahkan kepada 2 kes berasingan** supaya tiada digit diguna dua kali!',
            en: 'Draw slot boxes `_ _ _ _` and fill restricted positions first. **CRITICAL**: If a digit satisfies **both** the first-slot and last-slot conditions (e.g. `6` is both $> 5$ and even), **split into separate cases** immediately!'
          }
        }
      ],
      triggers: [
        {
          cue: { bm: 'Soalan sebut: "Cari bilangan susunan huruf bagi perkataan dengan huruf berulang seperti MATEMATIK / BANANA"', en: 'Exam says: "Arrange all letters of a word with repeated letters like BANANA"' },
          action: { bm: 'Bahagikan faktorial jumlah huruf dengan faktorial setiap huruf sama yang berulang: bagi `BANANA` ($6$ huruf: tiga `A`, dua `N`) $\\rightarrow \\frac{6!}{3!\\,2!} = 60$.', en: 'Divide total factorial by the factorials of identical repeats: for `BANANA` ($6$ letters: three `A`s, two `N`s) $\\rightarrow \\frac{6!}{3!\\,2!} = 60$.' }
        },
        {
          cue: { bm: 'Soalan jawatankuasa: "Pilih 5 ahli supaya sekurang-kurangnya 3 orang ialah perempuan"', en: 'Committee question: "Choose 5 members with at least 3 girls"' },
          action: { bm: 'Senaraikan kes yang sah secara teratur (Kes 1: $3P, 2L$; Kes 2: $4P, 1L$; Kes 3: $5P, 0L$), darab dalam setiap baris, dan jumlahkan semua baris di akhir.', en: 'List all valid compositions cleanly (3G 2B, 4G 1B, 5G 0B), multiply inside each case, then add the cases at the end.' }
        },
        {
          cue: { bm: 'Soalan sebut: "Pasangan suami isteri Encik Tan dan Puan Tan mesti dipilih bersama atau kedua-duanya tidak dipilih"', en: 'Exam says: "Couple Mr & Mrs Tan must either both be in the committee or neither"' },
          action: { bm: 'Pecah 2 kes: **Kes 1 (Kedua-dua masuk)**: tinggal pilih $(r - 2)$ orang daripada baki calon. **Kes 2 (Kedua-dua ditolak)**: pilih $r$ orang terus daripada baki calon!', en: 'Split 2 cases: **Case 1 (Both included)**: choose $(r - 2)$ from remaining people. **Case 2 (Both excluded)**: choose all $r$ from remaining people!' }
        }
      ],
      rxFix: {
        wrong: { bm: 'Menolak $\\text{Semua} - \\text{Semua Bersama}$ untuk mencari "3 huruf vokal mesti berasingan semua" (sebab kes 2 vokal rapat + 1 jauh masih tertinggal!).', en: 'Computing $\\text{Total} - \\text{All 3 Together}$ when asked for "no two of the 3 vowels are adjacent" (this misses cases where 2 vowels touch and 1 is apart!).' },
        right: { bm: 'Bagi $3$ atau lebih objek berasingan, guna **Kaedah Celah (Gap Method)**: susun $k$ konsonan dahulu ($k!$), kemudian selit $3$ vokal ke dalam $(k + 1)$ celah kosong: $k! \\times {}^{k+1}P_3$!', en: 'For $3+$ separated objects, always use the **Gap Method**: arrange the $k$ consonants ($k!$), then slot the $3$ vowels into the $(k + 1)$ spaces: $k! \\times {}^{k+1}P_3$!' }
      }
    },

    'f5-c5': {
      poster: 'assets/posters/f5-c5.jpg',
      posterTitle: {
        bm: 'Poster Visual Bab 5: Taburan Kebarangkalian (Taburan Binomial & Taburan Normal)',
        en: 'Chapter 5 Visual Poster: Probability Distributions (Discrete Binomial & Continuous Standard Normal)'
      },
      vocabBridge: {
        bm: 'Kamus Istilah Poster: Discrete = Kiraan Nombor Bulat (Diskret) • Continuous = Ukuran Berterusan (Selanjar) • Variance = Varians ($\\sigma^2 = npq$) • Standardize Z-Score = Tukar ke Skor-$Z$ Piawai',
        en: 'Key KSSM Terms: Random Variable = Pemboleh Ubah Rawak ($X$) • Standard Deviation = Sisihan Piawai ($\\sigma$) • Upper Tail Table = Jadual Kawasan Kanan $P(Z > z)$'
      },
      painSummary: {
        bm: 'Dua kesilapan paling mahal: membahagi dengan varians $\\sigma^2$ (bukannya sisihan piawai $\\sigma$!) semasa menukar $Z = \\frac{X - \\mu}{\\sigma}$ daripada tatatanda $X \\sim N(\\mu, \\sigma^2)$, serta salah tanda positif/negatif $z$ semasa baca songsang jadual Normal!',
        en: 'Two costly mistakes: dividing by variance $\\sigma^2$ instead of standard deviation $\\sigma$ when given $X \\sim N(\\mu, \\sigma^2)$, and forgetting a negative sign on $z$ when $P(X > k) > 0.5$ or $P(X < k) < 0.5$!'
      },
      mentalModels: [
        {
          icon: '🎯',
          tag: { bm: 'Kompas Binomial vs Normal', en: 'Binomial vs Normal Compass' },
          title: { bm: 'Boleh Bilang Jari ($0, 1, 2\\dots$) = Binomial; Boleh Ukur Perpuluhan = Normal!', en: 'Countable Trials = Binomial; Measurable Scale = Normal!' },
          desc: {
            bm: '**Binomial $X \\sim B(n, p)$**: bilangan percubaan tetap $n$, hanya 2 kesudahan (**Berjaya $p$** atau **Gagal $q = 1 - p$**): $$P(X = r) = {}^nC_r\\,p^r q^{n-r}, \\quad \\mu = np, \\quad \\sigma = \\sqrt{npq}$$ **Normal $X \\sim N(\\mu, \\sigma^2)$**: ukuran selanjar (tinggi, jisim, masa) berbentuk loceng simetri dengan jumlah luas $= 1$.',
            en: '**Binomial $X \\sim B(n, p)$**: fixed trials $n$ with Success $p$ and Failure $q = 1 - p$: $$P(X = r) = {}^nC_r\\,p^r q^{n-r}, \\quad \\mu = np, \\quad \\sigma = \\sqrt{npq}$$ **Normal $X \\sim N(\\mu, \\sigma^2)$**: continuous measurements (mass, height) under a symmetric bell curve of total area $1$.'
          }
        },
        {
          icon: '🚨',
          tag: { bm: 'Perangkap #1 SPM: Tatatanda Varians!', en: 'SPM Trap #1: Variance Notation!' },
          title: { bm: 'Dalam $X \\sim N(50, 16)$, Nombor Kedua Itu $\\sigma^2 = 16$, Jadi $\\sigma = 4$!', en: 'In $X \\sim N(50, 16)$, the Second Number Is $\\sigma^2 = 16$, So $\\sigma = 4$!' },
          desc: {
            bm: 'Ini perangkap kegemaran penggubal soalan! Tatatanda rasmi $N(\\mu, \\sigma^2)$ meletakkan **varians** di belakang. Sebelum guna $Z = \\frac{X - \\mu}{\\sigma}$, puncakuasakan dahulu $\\sigma = \\sqrt{16} = 4$! Jika ditulis $N(50, 4^2)$, barulah $\\sigma = 4$ sedia diguna.',
            en: 'Standard notation $N(\\mu, \\sigma^2)$ lists **variance** second! In $N(50, 16)$, ALWAYS take the square root $\\sigma = \\sqrt{16} = 4$ before computing $Z = \\frac{X - \\mu}{\\sigma}$!'
          }
        },
        {
          icon: '🔔',
          tag: { bm: 'Wajib Lakar Loceng Kecil 3-Saat!', en: '3-Second Mini Bell Sketch!' },
          title: { bm: 'Lorekkan Ekor Loceng Sebelum Baca Jadual $P(Z > z)$!', en: 'Shade the Bell Curve Tail Before Touching the $Z$-Table!' },
          desc: {
            bm: 'Separuh kiri $= 0.5$ dan separuh kanan $= 0.5$! Jadual SPM memberi **luas ekor kecil di hujung kanan** $P(Z > z)$. Jika lorekan anda **melebihi separuh loceng ($> 0.5$)**, tolak daripada $1$ untuk cari ekor kecil! Dan semasa cari nilai $k$: jika garis $k$ berada di **sebelah kiri min $0$**, nilai skor-$z$ anda **WAJIB bertanda negatif ($-z$)**!',
            en: 'Each half of the bell has area $0.5$! Always sketch a tiny bell with $0$ in the middle and shade the region: if $k$ sits to the **left of the mean**, your $z$-score **MUST be negative ($-z$)**!'
          }
        },
        {
          icon: '⚡',
          tag: { bm: 'Jalan Pintas Pelengkap Binomial', en: 'Binomial Complement Shortcut' },
          title: { bm: '"Sekurang-kurangnya $1$" = $1 - P(X = 0)$!', en: '"At Least $1$" = $1 - P(X = 0)$!' },
          desc: {
            bm: 'Jika $n = 10$ dan diminta $P(X \\ge 1)$, jangan kira $P(1) + P(2) + \\dots + P(10)$ sampai habis masa! Gunakan pelengkap: **tiada langsung berjaya** ialah $P(X = 0) = q^n$, jadi $P(X \\ge 1) = 1 - P(X = 0)$ dalam satu baris sahaja!',
            en: 'For $n = 10$, never add $P(1) + \\dots + P(10)$! Subtract the unwanted case from $1$: $P(X \\ge 1) = 1 - P(X = 0) = 1 - q^n$ in one quick step!'
          }
        }
      ],
      triggers: [
        {
          cue: { bm: 'Soalan Binomial berhati-hati simbol: "$X > 2$" berbanding "$X \\ge 2$" (diskret!)', en: 'Binomial strict vs inclusive inequality: "$X > 2$" vs "$X \\ge 2$" (discrete!)' },
          action: { bm: 'Bagi nombor bulat diskret, **"$X > 2$" bermula pada $X = 3$** ($1 - P(0) - P(1) - P(2)$), manakala **"$X \\ge 2$" termasuk $X = 2$** ($1 - P(0) - P(1)$)!', en: 'For discrete counts, **"$X > 2$" starts at $3$** ($1 - P(0) - P(1) - P(2)$), whereas **"$X \\ge 2$" includes $2$** ($1 - P(0) - P(1)$)!' }
        },
        {
          cue: { bm: 'Soalan Normal songsang: "Diberi $P(X > k) = 0.7881$, cari nilai $k$"', en: 'Inverse Normal question: "Given $P(X > k) = 0.7881$, find $k$"' },
          action: { bm: 'Kerana kawasan kanan $> 0.5$, garis $k$ mesti di **sebelah kiri min** ($z$ negatif)! Cari ekor kecil $1 - 0.7881 = 0.2119$ dalam jadual ($0.80$), letak tanda negatif **$z = -0.80$**, kemudian selesaikan $\\frac{k - \\mu}{\\sigma} = -0.80$.', en: 'Since right-tail area $> 0.5$, $k$ lies **left of the mean**! Look up $1 - 0.7881 = 0.2119 \\Rightarrow 0.80$, attach the minus sign **$z = -0.80$**, then solve $\\frac{k - \\mu}{\\sigma} = -0.80$.' }
        },
        {
          cue: { bm: 'Gabungan Normal $\\rightarrow$ Binomial di hujung Kertas 2: selepas dapat kebarangkalian satu buah oren gred A ialah $0.25$, "8 biji dipilih secara rawak..."', en: 'Paper 2 Normal-to-Binomial switch: after finding 1 fruit has probability $0.25$, "8 fruits are chosen at random..."' },
          action: { bm: 'Tukar gear terus daripada Normal kepada **Binomial**! Jadikan kebarangkalian Normal tadi sebagai $p = 0.25$ dan saiz sampel baharu sebagai $n = 8$ dalam $Y \\sim B(8, 0.25)$!', en: 'Switch gears immediately from Normal to **Binomial**! Use the Normal probability just found as $p = 0.25$ with $n = 8$ in $Y \\sim B(8, 0.25)$!' }
        }
      ],
      rxFix: {
        wrong: { bm: 'Bagi $X \\sim N(120, 25)$, menulis $Z = \\frac{130 - 120}{25} = 0.4$ (membahagi dengan varians $25$).', en: 'For $X \\sim N(120, 25)$, writing $Z = \\frac{130 - 120}{25} = 0.4$ (dividing by variance $25$).' },
        right: { bm: 'Kenal pasti $\\sigma^2 = 25 \\Rightarrow \\sigma = 5$ dahulu, maka $Z = \\frac{130 - 120}{5} = 2.0$.', en: 'Extract $\\sigma = \\sqrt{25} = 5$ first, giving $Z = \\frac{130 - 120}{5} = 2.0$.' }
      }
    },

    'f5-c6': {
      poster: 'assets/posters/f5-c6.jpg',
      posterTitle: {
        bm: 'Poster Visual Bab 6: Fungsi Trigonometri (Sukuan ASTC, Graf, Identiti & Persamaan)',
        en: 'Chapter 6 Visual Poster: Trigonometric Functions (ASTC Quadrants, Graphs, Identities & Equations)'
      },
      vocabBridge: {
        bm: 'Kamus Istilah Poster: Reference Angle = Sudut Rujukan ($\\alpha$) • Reciprocal = Fungsi Salingan ($\\csc, \\sec, \\cot$) • Compound/Double Angle = Sudut Majmuk/Sudut Berganda',
        en: 'Key KSSM Terms: Amplitude = Amplitud ($|a|$) • Number of Cycles = Bilangan Kitaran ($b$) • Prove the Identity = Buktikan Identiti ($\\text{LHS} = \\text{RHS}$)'
      },
      painSummary: {
        bm: 'Pelajar sering tertukar pasangan $\\sec$ dan $\\csc$, tertinggal separuh jawapan kerana tidak menggandakan julat domain bagi $\\sin 2x$, dan memotong $\\sin x$ pada kedua-dua belah persamaan sehingga punca $\\sin x = 0$ hilang!',
        en: 'Students confuse $\\sec$ with $\\csc$, lose half the roots of $\\sin 2x = k$ by forgetting to expand the domain to $720^\\circ$ first, and cancel $\\sin x$ across an equation instead of factoring!'
      },
      mentalModels: [
        {
          icon: '🧭',
          tag: { bm: 'Mnemonik: Saya Tahu Cikgu Baik (ASTC) + Huruf Ke-3!', en: 'Hook: Add Sugar To Coffee + 3rd Letter Rule!' },
          title: { bm: 'Kompas Sukuan & Rahsia Huruf Ketiga Fungsi Salingan', en: 'Quadrant Compass & 3rd-Letter Reciprocal Secret' },
          desc: {
            bm: 'Sukuan I–IV: **A**ll (**S**emua $+$), **S**in (**S**aya), **T**an (**T**ahu), **C**os (**C**ikgu)! Untuk fungsi salingan, tengok **huruf ke-3**: `co`**s**`ec` $\\rightarrow \\frac{1}{\\sin}$, `se`**c** $\\rightarrow \\frac{1}{\\cos}$, `co`**t** $\\rightarrow \\frac{1}{\\tan}$! Sudut rujukan $\\alpha$ pula **sentiasa diukur daripada paksi-$x$ mendatar** ($180^\\circ - \\alpha$, $180^\\circ + \\alpha$, $360^\\circ - \\alpha$).',
            en: 'Quadrants I–IV: **A**ll, **S**in, **T**an, **C**os positive! For reciprocals, check the **3rd letter**: `co`**s**`ec` $= \\frac{1}{\\sin}$, `se`**c** $= \\frac{1}{\\cos}$, `co`**t** $= \\frac{1}{\\tan}$! Reference angle $\\alpha$ is ALWAYS measured from the horizontal $x$-axis.'
          }
        },
        {
          icon: '🌊',
          tag: { bm: 'Kod Graf: y = a sin(bx) + c', en: 'Graph Decoder: y = a sin(bx) + c' },
          title: { bm: '$a$ = Tinggi Ombak, $b$ = Bilangan Kitaran, $c$ = Lif Naik/Turun!', en: '$a$ = Wave Height, $b$ = Cycles, $c$ = Elevator Shift!' },
          desc: {
            bm: 'Bagi $y = a\\sin(bx) + c$ dalam julat $0 \\le x \\le 2\\pi$: **$|a|$** ialah amplitud dari garis tengah, **$b$** ialah bilangan ombak lengkap dalam $2\\pi$ (kala $= \\frac{2\\pi}{b}$), dan **$+c$** mengangkat seluruh paksi tengah ke $y = c$ (maksimum $= c + |a|$, minimum $= c - |a|$)! Jika ada modulus $|\\dots|$, pantulkan lembah negatif ke atas!',
            en: 'For $y = a\\sin(bx) + c$ on $[0, 2\\pi]$: **$|a|$** is amplitude, **$b$** is the number of full cycles in $2\\pi$, and **$+c$** shifts the midline to $y = c$ (max $= c + |a|$, min $= c - |a|$). Modulus $|\\dots|$ bounces negative troughs upward!'
          }
        },
        {
          icon: '🔓',
          tag: { bm: 'SOP 5 Langkah Persamaan Sudut Berganda', en: '5-Step Double-Angle Equation SOP' },
          title: { bm: 'Gandakan Julat Domain DAHULU Sebelum Bahagi $2$!', en: 'Expand the Domain Range BEFORE Dividing by $2$!' },
          desc: {
            bm: 'Jika $0^\\circ \\le x \\le 360^\\circ$ dan persamaan mempunyai **$2x$**, langkah pertama tulis **$0^\\circ \\le 2x \\le 720^\\circ$**! **(1)** Tentukan sukuan ikut tanda $+/-$. **(2)** Tekan $\\sin^{-1}|k|$ (**abaikan tanda negatif!**) untuk dapat sudut rujukan $\\alpha$. **(3)** Senaraikan sudut dalam pusingan 1 & pusingan 2 ($+360^\\circ$). **(4)** Akhir sekali baru bahagi semua dengan $2$!',
            en: 'When $0^\\circ \\le x \\le 360^\\circ$ and solving for **$2x$**, first expand to **$0^\\circ \\le 2x \\le 720^\\circ$**! Find acute reference angle $\\alpha$ using $|k|$, list solutions in both turns (up to $720^\\circ$), and ONLY divide by $2$ on the very last line!'
          }
        },
        {
          icon: '🧩',
          tag: { bm: 'Strategi Bukti Identiti Tanpa Pening', en: 'Stress-Free Identity Proof Strategy' },
          title: { bm: 'Pilih Sebelah Paling Rumit & Tukar Semua Jadi $\\sin$ / $\\cos$!', en: 'Pick the Messier Side & Convert to $\\sin$ / $\\cos$!' },
          desc: {
            bm: 'Jangan pindah sebutan merentas tanda $=$ semasa membuktikan identiti! Mulakan daripada sebelah yang lebih kompleks (biasanya `LHS`), tukar $\\tan = \\frac{\\sin}{\\cos}$, samakan penyebut pecahan, dan gunakan tiga identiti induk: $\\sin^2 x + \\cos^2 x = 1$, $1 + \\tan^2 x = \\sec^2 x$, serta $\\cos 2x$ (pilih antara $3$ wajah ikut sasaran `RHS`!).',
            en: 'Never cross-multiply across $=$ when proving an identity! Start with the more complex side (`LHS`), rewrite in terms of $\\sin$ and $\\cos$, combine fractions, and pick the $\\cos 2x$ form ($2\\cos^2 x - 1$ or $1 - 2\\sin^2 x$) that cancels the `$1$` cleanly!'
          }
        }
      ],
      triggers: [
        {
          cue: { bm: 'Diberi $\\sin A = \\frac{3}{5}$ ($A$ sudut cakah) dan $\\cos B = -\\frac{12}{13}$ ($B$ sudut refleks), cari $\\tan(A + B)$ tanpa kalkulator', en: 'Given $\\sin A = \\frac{3}{5}$ ($A$ obtuse) and $\\cos B = -\\frac{12}{13}$ ($B$ reflex), find $\\tan(A + B)$ without calculator' },
          action: { bm: 'Lukis **2 segi tiga bersudut tegak berasingan** dalam sukuan masing-masing (Sukuan II untuk $A$, Sukuan III untuk $B$), lengkapkan sisi Pythagoras dengan **tanda $+/-$ ikut ASTC**, baru masuk rumus sudut majmuk!', en: 'Draw **two separate right triangles** in their correct quadrants (Q2 for obtuse $A$, Q3 for reflex $B$), attach ASTC signs to every ratio, then substitute into the compound-angle formula!' }
        },
        {
          cue: { bm: 'Soalan graf Kertas 2: selepas melakar $y = |2\\cos 2x| + 1$, diminta "cari bilangan penyelesaian bagi $|2\\cos 2x| = 1 - \\frac{x}{\\pi}$"', en: 'Paper 2 graph follow-up: after sketching $y = f(x)$, asked "find the number of solutions of..."' },
          action: { bm: 'Ubah suai persamaan baharu supaya **sebelah kiri SAMA TEPAT dengan persamaan graf yang sudah dilakar**! Kemudian lukis garis lurus sebelah kanan pada paksi yang sama dan **bilang titik persilangan** sahaja!', en: 'Rearrange the given equation until its **LHS matches your sketched graph** exactly! Plot the straight-line RHS on the same axes and simply **count the intersection points**!' }
        },
        {
          cue: { bm: 'Persamaan berbentuk $2\\sin x\\cos x = \\sin x$', en: 'Equation of the form $2\\sin x\\cos x = \\sin x$' },
          action: { bm: '**DILARANG potong $\\sin x$!** Pindah ke kiri dan faktorkan: $\\sin x(2\\cos x - 1) = 0 \\Rightarrow \\sin x = 0$ ATAU $\\cos x = \\frac{1}{2}$ supaya punca $0^\\circ, 180^\\circ, 360^\\circ$ tidak tercicir!', en: '**NEVER divide out $\\sin x$!** Move to one side and factor: $\\sin x(2\\cos x - 1) = 0 \\Rightarrow \\sin x = 0$ OR $\\cos x = \\frac{1}{2}$ so you keep all boundary roots!' }
        }
      ],
      rxFix: {
        wrong: { bm: 'Menekan $\\sin^{-1}(-0.5) = -30^\\circ$ pada kalkulator lalu terus keliru menentukan sukuan.', en: 'Typing $\\sin^{-1}(-0.5) = -30^\\circ$ into the calculator and getting lost with negative angles.' },
        right: { bm: 'Tanda negatif hanya beritahu **Sukuan III & IV**! Tekan $\\sin^{-1}(+0.5) = 30^\\circ$ untuk sudut rujukan $\\alpha$, maka $x = 180^\\circ + 30^\\circ = 210^\\circ$ dan $360^\\circ - 30^\\circ = 330^\\circ$.', en: 'Use the minus sign ONLY to pick **Quadrants III & IV**! Press $\\sin^{-1}(+0.5) = 30^\\circ$ for reference $\\alpha$, giving $x = 210^\\circ$ and $330^\\circ$ cleanly.' }
      }
    },

    'f5-c7': {
      poster: 'assets/posters/f5-c7.jpg',
      posterTitle: {
        bm: 'Poster Visual Bab 7: Pengaturcaraan Linear (Bina Ketaksamaan, Rantau R & Garis Pencari Optimum)',
        en: 'Chapter 7 Visual Poster: Linear Programming (Constraint Translation, Feasible Region R & Optimal Search Line)'
      },
      vocabBridge: {
        bm: 'Kamus Istilah Poster: Feasible Region = Rantau Berlorek $R$ (Memenuhi Semua Syarat) • Constraint = Syarat Had (Kekangan) • Objective Function = Fungsi Sasaran / Objektif ($k = ax + by$) • Optimal Vertex = Bucu Optimum',
        en: 'Key KSSM Terms: Solid vs Dashed Line = Garis Padu ($\\le, \\ge$) lwn Garis Putus-putus ($<, >$) • Integer Point = Koordinat Integer $(x, y)$'
      },
      painSummary: {
        bm: 'Pelajar kerap terbalik simbol $\\le$ dan $\\ge$ bagi ayat nisbah atau "melebihi sekurang-kurangnya", melukis garis padu bagi ketaksamaan ketat $<$, dan mengambil koordinat perpuluhan sedangkan $x, y$ mewakili bilangan manusia/kerusi!',
        en: 'Students reverse $\\le$ vs $\\ge$ on tricky phrases like "exceeds by at least", draw solid lines for strict $<$ inequalities, and pick non-integer decimal vertices when $x, y$ represent people or chairs!'
      },
      mentalModels: [
        {
          icon: '📖',
          tag: { bm: 'Kamus Terjemahan 5 Ayat Emas SPM', en: '5 Golden SPM Inequality Phrases' },
          title: { bm: 'Tukar Ayat Cerita Kepada Ketaksamaan Tanpa Ragu-ragu!', en: 'Translate Word Constraints to Inequalities Instantly!' },
          desc: {
            bm: 'Hafal 5 pasangan ini: **(1)** *"tidak melebihi / selebih-lebihnya / maksimum"* $\\rightarrow \\le$. **(2)** *"sekurang-kurangnya / tidak kurang daripada / minimum"* $\\rightarrow \\ge$. **(3)** *"kurang daripada"* $\\rightarrow <$ (**garis putus-putus!**). **(4)** *"$y$ melebihi $x$ sebanyak sekurang-kurangnya $k$"* $\\rightarrow y - x \\ge k$. **(5)** *"nisbah $y$ kepada $x$ selebih-lebihnya $3:2$"* $\\rightarrow \\frac{y}{x} \\le \\frac{3}{2} \\Rightarrow 2y \\le 3x$!',
            en: 'Master these 5 cues: **(1)** *"at most / does not exceed / maximum"* $\\rightarrow \\le$. **(2)** *"at least / minimum"* $\\rightarrow \\ge$. **(3)** *"less than / more than"* $\\rightarrow <, >$ (**dashed line!**). **(4)** *"$y$ exceeds $x$ by at least $k$"* $\\rightarrow y - x \\ge k$. **(5)** *"ratio of $y$ to $x$ is at most $3:2$"* $\\rightarrow 2y \\le 3x$!'
          }
        },
        {
          icon: '🧭',
          tag: { bm: 'Kompas Lorekan Rantau R (Atas vs Bawah)', en: 'Shading Compass (Above vs Below)' },
          title: { bm: 'Pastikan Pekali $y$ POSITIF Dahulu Sebelum Lorek!', en: 'Make the $y$-Coefficient POSITIVE Before Shading!' },
          desc: {
            bm: 'Selagi sebutan $y$ di sebelah kiri bertanda **positif** (contoh $+2y \\ge \\dots$): tanda **$> / \\ge$ bermaksud lorek ATAS** garis, manakala **$< / \\le$ bermaksud lorek BAWAH** garis! Bagi garis tegak $x \\ge a$, lorek sebelah kanan. Jangan lupa semak garis **padu ($\\le, \\ge$)** lawan **putus-putus ($<, >$)** dan labelkan huruf **$R$** besar di tengah rantau bertindih!',
            en: 'Once the $y$-term on the LHS is **positive**: **$> / \\ge$ shades ABOVE** the line, and **$< / \\le$ shades BELOW** the line! Always use **solid lines for $\\le, \\ge$**, **dashed lines for $<, >$**, and label **$R$** clearly!'
          }
        },
        {
          icon: '📏',
          tag: { bm: 'Taktik Pembaris Gelongsor GSTK (LCM)', en: 'LCM Sliding Ruler Technique' },
          title: { bm: 'Lukis Garis Pencari $ax + by = \\text{GSTK}(a, b)$ & Tolak Pembaris!', en: 'Plot Search Line $ax + by = \\text{LCM}(a, b)$ & Slide Parallel!' },
          desc: {
            bm: 'Untuk optimumkan $k = 3x + 5y$: pilih nilai cubaan cantik menggunakan **GSTK** bagi $3$ dan $5$ iaitu $15$ ($3x + 5y = 15$ memotong $(5, 0)$ dan $(0, 3)$ dengan tepat!). Letakkan pembaris selari dengan garis putus-putus itu dan gelongsorkan merentas rantau $R$: **titik terakhir disentuh ke atas = Maksimum**, **titik paling bawah = Minimum**!',
            en: 'To optimize $k = 3x + 5y$: pick $k = \\text{LCM}(3, 5) = 15$ so $3x + 5y = 15$ hits clean intercepts $(5, 0)$ and $(0, 3)$! Place your ruler on that dashed search line and slide it parallel across $R$ to spot the last vertex touched (Max) or lowest vertex (Min)!'
          }
        },
        {
          icon: '🪑',
          tag: { bm: 'Semakan Realiti: Manusia Tak Boleh 12.5 Orang!', en: 'Reality Check: No Half-Humans or Half-Buses!' },
          title: { bm: 'Wajib Pilih Titik Integer Dalam Rantau $R$ & Jauhi Garis Putus-putus!', en: 'Pick Integer Grid Points Inside $R$ & Avoid Dashed Borders!' },
          desc: {
            bm: 'Jika $x$ dan $y$ ialah bilangan pelajar, van, atau kek, bucu perpuluhan seperti $(14.5, 21.2)$ atau titik tepat di atas **garis putus-putus** adalah **TIDAK SAH**! Pilih koordinat **nombor bulat $(x, y)$ terdekat yang berada betul-betul di dalam $R$**, dan uji semua bucu calon dalam $k = ax + by$ untuk pengesahan 100%!',
            en: 'When $x$ and $y$ count discrete items (students, buses, cakes), decimal intersections or points sitting ON a **dashed boundary line** are **invalid**! Pick the closest **integer $(x, y)$ point strictly valid inside $R$** and verify by plugging candidates into $k = ax + by$!'
          }
        }
      ],
      triggers: [
        {
          cue: { bm: 'Permulaan Kertas 2 Bahagian B (10 markah): "Tulis tiga ketaksamaan selain $x \\ge 0$ dan $y \\ge 0$ yang memenuhi semua kekangan"', en: 'Paper 2 Section B opener (10 marks): "Write three inequalities, other than $x \\ge 0$ and $y \\ge 0$, that satisfy all constraints"' },
          action: { bm: 'Semak 3 kali ketiga-tiga ketaksamaan ini sebelum melukis graf — jika satu simbol terbalik di bahagian (a), seluruh rantau $R$ dan jawapan (c) akan terjejas! Guna ujian nombor mudah untuk pastikan logik ayat betul.', en: 'Triple-check your 3 inequalities in part (a) with a quick test number before touching graph paper — every remaining mark in (b) and (c) depends on getting (a) right!' }
        },
        {
          cue: { bm: 'Soalan sebut: "Bilangan peserta kursus $Y$ adalah selebih-lebihnya dua kali bilangan peserta kursus $X$"', en: 'Exam says: "The number of participants in course $Y$ is at most twice the number in course $X$"' },
          action: { bm: 'Tulis mengikut urutan perkataan sebiji-sebiji: $y \\le 2x$! (Jika ragu-ragu, uji $x = 10$: dua kali ialah $20$, "selebih-lebihnya $20$" bermaksud $y$ boleh jadi $15 \\le 20$ ✅).', en: 'Write word-for-word: $y \\le 2x$! (Sanity check with $x = 10$: twice $x$ is $20$, "at most $20$" means $y = 15$ works $\\rightarrow 15 \\le 20$ ✅).' }
        },
        {
          cue: { bm: 'Bahagian akhir memberi syarat tambahan baharu: "Jika yuran pendaftaran kursus $X$ dinaikkan kepada RM...", cari keuntungan maksimum', en: 'Final sub-question introduces an extra constraint or updated profit formula' },
          action: { bm: 'Kenal pasti kesemua bucu integer yang sah dalam rantau $R$, masukkan setiap $(x, y)$ ke dalam fungsi objektif $k = ax + by$, dan nyatakan kedua-dua **titik optimum $(x, y)$** serta **nilai maksimum $k$**!', en: 'Test all valid integer vertices around the optimal corner of $R$ in $k = ax + by$ to confirm the true winner, and clearly state the maximum/minimum value $k$!' }
        }
      ],
      rxFix: {
        wrong: { bm: 'Menterjemah "$y$ melebihi $x$ sebanyak sekurang-kurangnya $10$" sebagai $x - y \\ge 10$ atau $y + 10 \\ge x$.', en: 'Translating "$y$ exceeds $x$ by at least $10$" as $x - y \\ge 10$ or $y + 10 \\ge x$.' },
        right: { bm: 'Siapa "melebihi" adalah lebih besar, jadi tolak yang kecil daripada yang besar: $y - x \\ge 10$ (atau $y \\ge x + 10$).', en: 'The quantity that "exceeds" is larger, so subtract smaller from larger: $y - x \\ge 10$ (equivalently $y \\ge x + 10$).' }
      }
    },

    'f5-c8': {
      poster: 'assets/posters/f5-c8.jpg',
      posterTitle: {
        bm: 'Poster Visual Bab 8: Kinematik Gerakan Linear (Aliran Kalkulus S-V-A, Rehat Seketika & Jumlah Jarak)',
        en: 'Chapter 8 Visual Poster: Kinematics of Linear Motion (S-V-A Calculus Flow, Instantaneous Rest & Total Distance)'
      },
      vocabBridge: {
        bm: 'Kamus Istilah Poster: Displacement = Sesaran ($s$) • Velocity = Halaju ($v$) • Acceleration = Pecutan ($a$) • Instantaneous Rest = Berhenti Seketika ($v = 0$) • Fixed Point $O$ = Titik Tetap $O$',
        en: 'Key KSSM Terms: Initially ($t = 0$) = Pada Mulanya • Passes Through $O$ ($s = 0$) = Melalui $O$ • Reverses Direction ($v = 0$) = Berpatah Balik'
      },
      painSummary: {
        bm: 'Perangkap #1 Kertas 2 Pilihan: mengira "jumlah jarak dalam $5$ saat pertama" dengan menggantikan $t = 5$ terus ke dalam rumus sesaran $s(5)$ tanpa menyemak pusingan U ($v = 0$), serta lupa mencari pemalar $+ c$ semasa mengamir $a \\to v \\to s$!',
        en: 'Paper 2 killer trap: plugging $t = 5$ directly into $s(t)$ when asked for "total distance in the first $5$ seconds" — missing the U-turn where $v = 0$ — and forgetting $+ c$ when integrating $a \\to v \\to s$!'
      },
      mentalModels: [
        {
          icon: '🚦',
          tag: { bm: 'Lebuh Raya Dua Hala S - V - A', en: 'Two-Way S - V - A Highway' },
          title: { bm: 'Turun ($s \\to v \\to a$) = BEZAKAN; Naik ($a \\to v \\to s$) = KAMIRKAN!', en: 'Down ($s \\to v \\to a$) = DIFFERENTIATE; Up ($a \\to v \\to s$) = INTEGRATE!' },
          desc: {
            bm: 'Hafal susunan **S – V – A**: $$s \\xrightarrow{\\;d/dt\\;} v \\xrightarrow{\\;d/dt\\;} a \\qquad \\text{dan} \\qquad a \\xrightarrow{\\;\\int dt\\;} v \\xrightarrow{\\;\\int dt\\;} s$$ **AMARAN**: Setiap kali naik tangga guna $\\int dt$, **WAJIB letak $+ c$** dan guna maklumat masa mula $t = 0$ (contoh *"melalui $O$ pada mulanya"* $\\Rightarrow t = 0, s = 0$) untuk cari nilai $c$ dahulu!',
            en: 'Memorize **S – V – A**: differentiate going down ($v = \\frac{ds}{dt},\\; a = \\frac{dv}{dt}$) and integrate going up ($v = \\int a\\,dt,\\; s = \\int v\\,dt$). Every integration step **MUST include $+ c$**, solved immediately using initial conditions at $t = 0$!'
          }
        },
        {
          icon: '🗣️',
          tag: { bm: 'Kamus 5 Kod Rahsia Ayat Kinematik', en: '5 Physics-to-Algebra Codewords' },
          title: { bm: 'Setiap Frasa Fizik Ialah Satu Persamaan Matematik Tersembunyi!', en: 'Every Motion Phrase Translates Directly to an Equation!' },
          desc: {
            bm: 'Terjemah serta-merta: **(1)** *"pada mulanya / awalnya"* $\\rightarrow t = 0$. **(2)** *"melalui / kembali ke titik tetap $O$"* $\\rightarrow s = 0$. **(3)** *"berhenti seketika / pegun / menukar arah gerakan"* $\\rightarrow v = 0$. **(4)** *"halaju maksimum / minimum / seragam"* $\\rightarrow a = 0$. **(5)** *"bergerak ke kanan"* $\\rightarrow v > 0$ (*ke kiri* $\\rightarrow v < 0$).',
            en: 'Decode instantly: **(1)** *"initially"* $\\rightarrow t = 0$. **(2)** *"passes / returns to $O$"* $\\rightarrow s = 0$. **(3)** *"instantaneous rest / reverses direction"* $\\rightarrow v = 0$. **(4)** *"maximum / minimum / uniform velocity"* $\\rightarrow a = 0$. **(5)** *"moves right"* $\\rightarrow v > 0$ (*left* $\\rightarrow v < 0$).'
          }
        },
        {
          icon: '🔄',
          tag: { bm: 'Raja Soalan: Jarak lwn Sesaran (U-Turn!)', en: 'Boss Battle: Total Distance vs Displacement!' },
          title: { bm: 'Kira Jumlah Jarak? WAJIB Semak Pusingan U ($v = 0$) Dahulu!', en: 'Finding Total Distance? ALWAYS Check U-Turns ($v = 0$) First!' },
          desc: {
            bm: 'Jika anda berjalan $10\\text{ m}$ ke depan lalu patah balik $10\\text{ m}$ ke $O$, **sesaran $= 0\\text{ m}$**, tetapi kaki anda penat berjalan **jumlah jarak $= 20\\text{ m}$**! Untuk jumlah jarak dari $t = 0$ hingga $t = T$: **(1)** Selesaikan $v = 0$ (katakan pusing pada $t = 2$). **(2)** Kira posisi $s(0), s(2), s(T)$. **(3)** Jumlahkan jarak mutlak setiap segmen: $|s(2) - s(0)| + |s(T) - s(2)|$!',
            en: 'Walking $10\\text{ m}$ out and $10\\text{ m}$ back gives **displacement $= 0\\text{ m}$**, but **total distance $= 20\\text{ m}$**! For total distance on $[0, T]$: **(1)** Solve $v = 0$ inside $(0, T)$ (say $t = 2$). **(2)** Find $s(0), s(2), s(T)$. **(3)** Sum segment lengths: $|s(2) - s(0)| + |s(T) - s(2)|$!'
          }
        },
        {
          icon: '📈',
          tag: { bm: 'Baca Graf Halaju-Masa v-t Dengan Sekali Pandang', en: 'Read Velocity-Time v-t Graphs at a Glance' },
          title: { bm: 'Kecerunan Graf $v$-$t$ = Pecutan; Luas Bawah Graf $v$-$t$ = Jarak!', en: 'Slope of $v$-$t$ = Acceleration; Area Under $v$-$t$ = Distance!' },
          desc: {
            bm: 'Pada graf halaju-masa ($v$ lawan $t$): titik memotong paksi-$t$ ialah masa **pusingan U ($v = 0$)**; puncak/lembah melengkung ialah masa **halaju maksimum / minimum ($a = 0$)**; kawasan di **atas paksi-$t$** ialah gerakan ke kanan, manakala kawasan di **bawah paksi-$t$** ialah gerakan patah balik ke kiri!',
            en: 'On a $v$-$t$ graph: $t$-intercepts mark **U-turns ($v = 0$)**; turning points mark **max/min velocity ($a = 0$)**; area **above** the $t$-axis is forward travel and area **below** is backward travel (sum $|\\text{both areas}|$ for total distance!).'
          }
        }
      ],
      triggers: [
        {
          cue: { bm: 'Soalan sebut: "Cari julat masa dalam saat apabila zarah bergerak ke kiri"', en: 'Exam says: "Find the range of values of $t$ when the particle moves to the left"' },
          action: { bm: 'Bina ketaksamaan kuadratik **$v < 0$**, lakar lengkung senyum untuk tentukan julat $t$, dan potong sebarang bahagian negatif kerana masa mesti **$t \\ge 0$**!', en: 'Solve the inequality **$v < 0$** via a quick parabola sketch, and clip any negative time since physical time requires **$t \\ge 0$**!' }
        },
        {
          cue: { bm: 'Soalan sebut: "Cari sesaran zarah apabila halajunya adalah maksimum"', en: 'Exam says: "Find the displacement of the particle when its velocity is maximum"' },
          action: { bm: 'Jangan samakan $v = 0$! Halaju maksimum berlaku apabila **pecutan sifar ($a = \\frac{dv}{dt} = 0$)** — cari masa $t$ daripada $a = 0$, kemudian gantikan nilai $t$ itu ke dalam rumus sesaran **$s(t)$**!', en: 'Do NOT set $v = 0$! Maximum velocity occurs when **acceleration is zero ($a = \\frac{dv}{dt} = 0$)** — find $t$ from $a = 0$, then substitute that $t$ into **$s(t)$**!' }
        },
        {
          cue: { bm: 'Soalan sebut: "Zarah melalui titik tetap $O$ dengan halaju awal $12\\text{ m s}^{-1}$ dan pecutan $a = 6 - 4t$"', en: 'Exam says: "Particle passes through $O$ with initial velocity $12\\text{ m s}^{-1}$ and $a = 6 - 4t$"' },
          action: { bm: 'Tulis dua syarat awal di tepi kertas dahulu: pada $t = 0$, **$v = 12$** (jadi pemalar pertama $c_1 = 12$) dan **$s = 0$** (jadi pemalar kedua $c_2 = 0$) semasa mengamir dua kali!', en: 'Write both $t = 0$ conditions in the margin first: **$v(0) = 12$** (gives $c_1 = 12$ in $v$) and **$s(0) = 0$** (gives $c_2 = 0$ in $s$) as you integrate twice!' }
        }
      ],
      rxFix: {
        wrong: { bm: 'Bagi $s = t^2 - 4t$, menjawab jumlah jarak dalam $5$ saat pertama ialah $s(5) = 5^2 - 4(5) = 5\\text{ m}$.', en: 'For $s = t^2 - 4t$, claiming total distance in the first $5$ seconds is $s(5) = 25 - 20 = 5\\text{ m}$.' },
        right: { bm: 'Semak $v = 2t - 4 = 0 \\Rightarrow t = 2\\text{ s}$ (pusing U!). Kira $s(0) = 0$, $s(2) = -4$, $s(5) = 5$. Jumlah jarak $= |-4 - 0| + |5 - (-4)| = 4 + 9 = 13\\text{ m}$!', en: 'Solve $v = 2t - 4 = 0 \\Rightarrow t = 2\\text{ s}$ (U-turn!). Evaluate $s(0) = 0$, $s(2) = -4$, $s(5) = 5$. Total distance $= |-4 - 0| + |5 - (-4)| = 4 + 9 = 13\\text{ m}$!' }
      }
    }
  };

  Object.keys(F5_CLINIC).forEach(function (k) {
    App.teacherClinic[k] = F5_CLINIC[k];
  });
})(window.AddMathApp);
