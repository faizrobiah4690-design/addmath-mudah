/**
 * AddMath Mudah — Klinik Cikgu Pakar & Poster Infografik Visual (Tingkatan 5: Bab 1–4)
 * Dirangka khas dari perspektif Guru Cemerlang Matematik Tambahan KSSM untuk merawat
 * "sakit kepala" sebenar pelajar Tingkatan 5: kejutan Kalkulus, keliru Pilih Atur vs Gabungan,
 * perangkap sisihan piawai Normal, tanda sukuan Trigonometri, Pengaturcaraan Linear & Kinematik.
 *
 * Struktur modular: menyambung terus pendaftaran App.teacherClinic['f5-c1' .. 'f5-c4'].
 */
window.AddMathApp = window.AddMathApp || {};
window.AddMathApp.teacherClinic = window.AddMathApp.teacherClinic || {};

(function (App) {
  'use strict';

  const F5A_CLINIC = {
    'f5-c1': {
      poster: 'assets/posters/f5-c1.jpg',
      posterTitle: {
        bm: 'Poster Visual Bab 1: Sukatan Membulat (Radian, Panjang Lengkok, Luas Sektor & Tembereng)',
        en: 'Chapter 1 Visual Poster: Circular Measure (Radians, Arc Length, Sector & Segment Area)'
      },
      vocabBridge: {
        bm: 'Kamus Istilah KSSM ↔ DLP: Sukatan Membulat = Circular Measure • Radian ($\\text{rad}$) = Radian • Panjang Lengkok ($s$) = Arc Length • Sektor Minor / Major = Minor / Major Sector • Perentas = Chord • Tembereng Berlorek = Shaded Segment • Perimeter Rantau Berlorek = Perimeter of Shaded Region',
        en: 'KSSM ↔ DLP Glossary: Circular Measure = Sukatan Membulat • Radian ($\\text{rad}$) = Radian • Arc Length ($s$) = Panjang Lengkok • Minor / Major Sector = Sektor Minor / Major • Chord = Perentas • Shaded Segment = Tembereng Berlorek • Perimeter of Shaded Region = Perimeter Rantau Berlorek'
      },
      painSummary: {
        bm: 'Tiga perangkap maut pelajar: terlupa tukar sudut darjah ke radian dalam rumus $s = r\\theta$ dan $A = \\frac{1}{2}r^2\\theta$, tersilap mod kalkulator [D] vs [R] semasa tekan $\\sin\\theta$, dan tertinggal $2r$ atau panjang perentas apabila mengira perimeter rantau berlorek!',
        en: 'Three classic traps: plugging degrees directly into $s = r\\theta$ and $A = \\frac{1}{2}r^2\\theta$, leaving the calculator in Degree [D] mode when evaluating $\\sin\\theta$ in radians, and forgetting $+2r$ or the chord when finding the perimeter of a shaded region!'
      },
      mentalModels: [
        {
          icon: '🍕',
          tag: { bm: 'Pecahan Bulatan & Analogi Kerak Piza', en: 'Circle Fraction & Pizza Crust Model' },
          title: { bm: 'Kenapa $s = r\\theta$ & $A = \\frac{1}{2}r^2\\theta$? Asalnya Pecahan Bulatan Tingkatan 2!', en: 'Why $s = r\\theta$ & $A = \\frac{1}{2}r^2\\theta$? Form 2 Circle Fractions!' },
          desc: {
            bm: 'Bayangkan sepotong piza yang **kerak melengkungnya ($s$)** sama panjang dengan **jejari ($r$)** — sudut itu ialah **$1\\text{ rad} \\approx 57.3^\\circ$**, maka satu bulatan penuh $= 2\\pi\\text{ rad} = 360^\\circ$. Apabila sudut ialah pecahan $\\frac{\\theta}{2\\pi}$ daripada bulatan penuh: panjang lengkok $= \\frac{\\theta}{2\\pi}(2\\pi r) = r\\theta$, dan luas sektor $= \\frac{\\theta}{2\\pi}(\\pi r^2) = \\frac{1}{2}r^2\\theta$!',
            en: 'Picture a pizza slice whose **curved crust ($s$)** equals its **radius ($r$)** — that angle is **$1\\text{ rad} \\approx 57.3^\\circ$**, so a full turn $= 2\\pi\\text{ rad} = 360^\\circ$. As a fraction $\\frac{\\theta}{2\\pi}$ of a full circle: arc length $= \\frac{\\theta}{2\\pi}(2\\pi r) = r\\theta$, and sector area $= \\frac{\\theta}{2\\pi}(\\pi r^2) = \\frac{1}{2}r^2\\theta$!'
          }
        },
        {
          icon: '🚧',
          tag: { bm: 'Mnemonik: Jalan Keliling Pagar', en: 'Hook: Walk the Full Fence' },
          title: { bm: 'Perimeter Rantau Berlorek ≠ Panjang Lengkok Semata-mata!', en: 'Perimeter of Shaded Region ≠ Arc Length Alone!' },
          desc: {
            bm: 'Bayangkan semut berjalan memagari **seluruh sempadan luar rantau berlorek** sehingga kembali ke titik mula! Bagi sektor penuh: $\\text{Perimeter} = s + 2r$. Bagi tembereng berlorek: $\\text{Perimeter} = \\text{Lengkok } s + \\text{Perentas } AB$ (cari perentas guna Petua Kosinus $AB^2 = 2r^2(1 - \\cos\\theta)$ atau $AB = 2r\\sin\\frac{\\theta}{2}$).',
            en: 'Imagine an ant walking around **every outer boundary edge** of the shaded region back to its start! Full sector perimeter $= s + 2r$. Shaded segment perimeter $= \\text{Arc } s + \\text{Chord } AB$ (find the chord using the Cosine Rule $AB^2 = 2r^2(1 - \\cos\\theta)$ or $AB = 2r\\sin\\frac{\\theta}{2}$).'
          }
        },
        {
          icon: '🍉',
          tag: { bm: 'Formula Potong Tembikai', en: 'Watermelon Cut Model' },
          title: { bm: 'Luas Tembereng = Sektor Penuh Tolak Segi Tiga!', en: 'Area of Segment = Sector Minus Triangle!' },
          desc: {
            bm: 'Jangan hafal rumus baharu secara membabi buta! Ambil keseluruhan **Sektor Piza** ($\\frac{1}{2}r^2\\theta$) dan potong buang **Isi Segi Tiga** ($\\frac{1}{2}r^2\\sin\\theta$): $$A_{\\text{tembereng}} = \\frac{1}{2}r^2(\\theta - \\sin\\theta)$$ Bagi dua sektor sepusat pula, tolak sektor besar dengan sektor kecil: $\\frac{1}{2}(R^2 - r^2)\\theta$.',
            en: 'Do not memorize blindly! Take the whole **Sector slice** ($\\frac{1}{2}r^2\\theta$) and slice off the **Triangle** ($\\frac{1}{2}r^2\\sin\\theta$): $$A_{\\text{segment}} = \\frac{1}{2}r^2(\\theta - \\sin\\theta)$$ For two concentric sectors, subtract outer minus inner sector: $\\frac{1}{2}(R^2 - r^2)\\theta$.'
          }
        },
        {
          icon: '🧮',
          tag: { bm: 'SOP Semakan Kalkulator 2-Saat', en: '2-Second Calculator Check' },
          title: { bm: 'Wajib Jeling Huruf [D] atau [R] Atas Skrin Kalkulator!', en: 'Always Check [D] vs [R] Before Pressing Sin/Cos!' },
          desc: {
            bm: 'Rumus $s = r\\theta$ dan $A = \\frac{1}{2}r^2\\theta$ **WAJIB guna $\\theta$ dalam radian**. Tetapi apabila menekan $\\sin\\theta$ atau $\\cos\\theta$: jika $\\theta$ dalam radian (contoh $1.4\\text{ rad}$), skrin kalkulator mesti **[R]** (atau tukar sudut ke darjah dahulu baru tekan $\\sin$ dalam mod **[D]**)!',
            en: 'Formulas $s = r\\theta$ and $A = \\frac{1}{2}r^2\\theta$ **strictly require $\\theta$ in radians**. When pressing $\\sin\\theta$ or $\\cos\\theta$ for radian angles (e.g. $1.4\\text{ rad}$), ensure your calculator displays **[R]** (or convert $\\theta$ to degrees first if staying in **[D]** mode)!'
          }
        }
      ],
      triggers: [
        {
          cue: { bm: 'Soalan beri sudut dalam darjah (contoh $120^\\circ$) dan minta panjang lengkok atau luas sektor', en: 'Question gives angle in degrees (e.g. $120^\\circ$) and asks for arc length or sector area' },
          action: { bm: 'Langkah pertama wajib tukar ke radian dahulu: $\\theta = 120^\\circ \\times \\frac{\\pi}{180^\\circ}$ (guna nilai $\\pi = 3.142$ seperti diarahkan kertas SPM!).', en: 'Step 1 MUST convert degrees to radians first: $\\theta = 120^\\circ \\times \\frac{\\pi}{180^\\circ}$ (use $\\pi = 3.142$ whenever specified in the SPM question!).' }
        },
        {
          cue: { bm: 'Soalan sebut: "Cari luas sektor major / lengkok major OAB"', en: 'Exam says: "Find the area of the major sector / major arc OAB"' },
          action: { bm: 'Sudut major ialah bahagian besar di luar sudut minor! Tolak daripada satu pusingan penuh: $\\theta_{\\text{major}} = 2\\pi - \\theta_{\\text{minor}}$ (atau $360^\\circ - \\theta^\\circ$ sebelum tukar ke radian).', en: 'Major means the larger reflex angle! Subtract the minor angle from one full circle: $\\theta_{\\text{major}} = 2\\pi - \\theta_{\\text{minor}}$ (or $360^\\circ - \\theta^\\circ$ before converting to radians).' }
        },
        {
          cue: { bm: 'Gambar rajah menunjukkan tangen menyentuh bulatan pada titik $A$ dan $B$ dari titik luar $P$', en: 'Diagram shows two tangents from external point $P$ touching circle at $A$ and $B$' },
          action: { bm: 'Lukis jejari $OA$ dan $OB$: sudut antara jejari dengan tangen sentiasa **$90^\\circ$**! Gunakan segi tiga bersudut tegak $\\triangle OAP$ ($\\tan, \\cos$, Teorem Pythagoras) untuk mencari jejari $r$, panjang tangen $PA$, dan sudut $\\angle AOB$.', en: 'Draw radii $OA$ and $OB$: radius meets tangent at **$90^\\circ$**! Use the right-angled triangles $\\triangle OAP$ ($\\tan, \\cos$, and Pythagoras theorem) to find radius $r$, tangent length $PA$, and central angle $\\angle AOB$.' }
        },
        {
          cue: { bm: 'Soalan minta: "Cari perimeter rantau berlorek" atau panjang perentas $AB$ apabila sudut pusat $\\theta$ diberi', en: 'Exam asks: "Find the perimeter of the shaded region" or chord length $AB$ given central angle $\\theta$' },
          action: { bm: 'Tandakan setiap sisi sempadan dengan jari (1, 2, 3...), kira setiap lengkok ($s = r\\theta$) dan setiap garis lurus secara berasingan — untuk perentas $AB$, pilih sama ada **Petua Kosinus** $AB^2 = 2r^2(1 - \\cos\\theta)$ atau formula separuh sudut $AB = 2r\\sin\\frac{\\theta}{2}$ — kemudian jumlahkan semuanya!', en: 'Trace every boundary edge with your finger (1, 2, 3...), calculate each arc ($s = r\\theta$) and straight segment separately — for chord $AB$, use either **Cosine Rule** $AB^2 = 2r^2(1 - \\cos\\theta)$ or half-angle $AB = 2r\\sin\\frac{\\theta}{2}$ — then sum them all!' }
        }
      ],
      rxFix: {
        wrong: { bm: 'Mengira $s = 8 \\times 60 = 480\\text{ cm}$ dengan memasukkan $60^\\circ$ terus ke dalam $s = r\\theta$, atau menekan $\\sin(1.25)$ dalam mod [D].', en: 'Writing $s = 8 \\times 60 = 480\\text{ cm}$ by plugging $60^\\circ$ straight into $s = r\\theta$, or evaluating $\\sin(1.25\\text{ rad})$ in [D] mode.' },
        right: { bm: 'Tukar $60^\\circ \\times \\frac{3.142}{180^\\circ} = 1.0473\\text{ rad} \\Rightarrow s = 8(1.0473) = 8.379\\text{ cm}$, dan pastikan kalkulator dalam mod [R] apabila mengira $\\sin(1.25\\text{ rad}) = 0.9490$.', en: 'Convert $60^\\circ \\times \\frac{3.142}{180^\\circ} = 1.0473\\text{ rad}$ first ($s = 8(1.0473) = 8.379\\text{ cm}$), and ensure calculator is in [R] mode so $\\sin(1.25\\text{ rad}) = 0.9490$.' }
      }
    },

    'f5-c2': {
      poster: 'assets/posters/f5-c2.jpg',
      posterTitle: {
        bm: 'Poster Visual Bab 2: Pembezaan (Petua Pembezaan, Tangen/Normal, Kadar Perubahan & Pengoptimuman)',
        en: 'Chapter 2 Visual Poster: Differentiation (Rules, Tangents/Normals, Rates of Change & Optimization)'
      },
      vocabBridge: {
        bm: 'Kamus Istilah KSSM ↔ DLP: Prinsip Pertama = First Principles • Terbitan Pertama / Kedua ($\\frac{dy}{dx}, \\frac{d^2y}{dx^2}$) = First / Second Derivative • Petua Kuasa / Hasil Darab / Hasil Bahagi / Rantai = Power / Product / Quotient / Chain Rule • Tangen & Normal ($m_T, m_N$) = Tangent & Normal • Titik Pusingan / Pegun = Turning / Stationary Point • Kadar Perubahan Berkaitan = Connected Rates of Change • Perubahan Kecil = Small Changes',
        en: 'KSSM ↔ DLP Glossary: First Principles = Prinsip Pertama • First / Second Derivative ($\\frac{dy}{dx}, \\frac{d^2y}{dx^2}$) = Terbitan Pertama / Kedua • Power / Product / Quotient / Chain Rule = Petua Kuasa / Hasil Darab / Hasil Bahagi / Rantai • Tangent & Normal ($m_T, m_N$) = Tangen & Normal • Turning / Stationary Point = Titik Pusingan / Pegun • Connected Rates of Change = Kadar Perubahan Berkaitan • Small Changes = Perubahan Kecil'
      },
      painSummary: {
        bm: 'Asasnya mudah: pembezaan ialah kecerunan garis lurus $m = \\frac{\\Delta y}{\\Delta x}$ yang dizum rapat sehingga $\\delta x \\to 0$! Pelajar sering lemah apabila lupa menulis semula pecahan/punca kepada bentuk indeks, terlupa hasil beza isi dalam Petua Rantai, terbalik susunan Petua Hasil Bahagi, dan buntu menyambung Kadar Perubahan Berkaitan!',
        en: 'The core idea is simple: differentiation is just the straight-line gradient $m = \\frac{\\Delta y}{\\Delta x}$ zoomed in as $\\delta x \\to 0$! Students struggle when they skip rewriting fractions/surds as indices, forget the inner derivative in Chain Rule, swap Quotient Rule order, or freeze on Connected Rates of Change!'
      },
      mentalModels: [
        {
          icon: '🧅',
          tag: { bm: 'Jambatan Kecerunan & Bawang Berlapis', en: 'Gradient Bridge & Peeling Onion' },
          title: { bm: 'Dari Kecerunan $m = \\frac{\\Delta y}{\\Delta x}$ ke Petua Rantai: Luar $\\times$ Dalam!', en: 'From Gradient $m = \\frac{\\Delta y}{\\Delta x}$ to Chain Rule: Outer $\\times$ Inner!' },
          desc: {
            bm: 'Pada garis lurus, kecerunan tetap $m = \\frac{y_2-y_1}{x_2-x_1}$; pada lengkung, zum rapat ($\\lim_{\\delta x \\to 0}$) memberi $\\frac{dy}{dx}$ (Prinsip Pertama). Untuk $y = (3x^2 - 5)^4$, jangan kembangkan kurungan! **Kulit Luar**: turunkan kuasa $4$, tolak $1$ jadi $4(3x^2 - 5)^3$. **Isi Dalam**: darab beza isi dalam $(6x) \\rightarrow 24x(3x^2 - 5)^3$.',
            en: 'On a straight line, slope is constant $m = \\frac{y_2-y_1}{x_2-x_1}$; on a curve, zooming in ($\\lim_{\\delta x \\to 0}$) gives $\\frac{dy}{dx}$ (First Principles). For $y = (3x^2 - 5)^4$, do not expand the bracket! **Outer layer**: bring down $4$, subtract $1$ to get $4(3x^2 - 5)^3$. **Inner layer**: multiply by the bracket derivative $(6x) \\rightarrow 24x(3x^2 - 5)^3$.'
          }
        },
        {
          icon: '🛡️',
          tag: { bm: 'Mnemonik: Bawah Mula Dahulu!', en: 'Hook: Bottom Starts First!' },
          title: { bm: 'Petua Hasil Darab vs Hasil Bahagi Tanpa Tertukar Tanda', en: 'Product Rule vs Quotient Rule Without Sign Slips' },
          desc: {
            bm: 'Apabila dua ungkapan $x$ bertemu: **Hasil Darab ($y = uv$)** guna tambah $\\frac{dy}{dx} = u v\' + v u\'$. **Hasil Bahagi ($y = \\frac{u}{v}$)** ada tanda TOLAK, jadi ingat **"Bawah ($v$) Mula Dahulu!"**: $$\\frac{dy}{dx} = \\frac{v u\' - u v\'}{v^2}$$ Jika pengangka cuma pemalar seperti $\\frac{4}{x^3}$, naikkan jadi $4x^{-3}$ dahulu (jauh lebih pantas!).',
            en: 'When two $x$-blocks meet: **Product Rule ($y = uv$)** adds them as $\\frac{dy}{dx} = u v\' + v u\'$. **Quotient Rule ($y = \\frac{u}{v}$)** subtracts, so order matters — remember **"Bottom ($v$) Starts First!"**: $$\\frac{dy}{dx} = \\frac{v u\' - u v\'}{v^2}$$ Tip: if the numerator is just a constant like $\\frac{4}{x^3}$, rewrite as $4x^{-3}$ first and use Power Rule!'
          }
        },
        {
          icon: '⛰️',
          tag: { bm: 'Ujian Emosi Terbitan Kedua', en: 'Second Derivative Smile/Frown Test' },
          title: { bm: 'Titik Pegun $\\frac{dy}{dx} = 0$, Kemudian Semak Maksimum vs Minimum!', en: 'Stationary Point $\\frac{dy}{dx} = 0$, Then Test Max vs Min!' },
          desc: {
            bm: 'Di puncak bukit atau dasar lembah, kecerunan tangen mendatar jadi **$\\frac{dy}{dx} = 0$**. Untuk tentukan jenis titik: gantikan nilai $x$ ke dalam $\\frac{d^2y}{dx^2}$. Jika **$> 0$ (Positif = Senyum $\\cup$)** $\\rightarrow$ **Titik Minimum**! Jika **$< 0$ (Negatif = Masam $\\cap$)** $\\rightarrow$ **Titik Maksimum**! (Terbalik daripada sangkaan ramai!).',
            en: 'At a peak or valley, the tangent slope is flat so **$\\frac{dy}{dx} = 0$**. Substitute $x$ into $\\frac{d^2y}{dx^2}$ to classify: if **$> 0$ (Positive = Smile $\\cup$)** $\\rightarrow$ **Minimum point**! If **$< 0$ (Negative = Frown $\\cap$)** $\\rightarrow$ **Maximum point**! (Opposite of what most beginners guess!).'
          }
        },
        {
          icon: '🌉',
          tag: { bm: 'Jambatan Domino Kadar Perubahan', en: 'Domino Bridge for Rates' },
          title: { bm: 'Perkataan "Kadar" = Per Masa ($dt$ Di Bawah)!', en: 'Word "Rate" = Per Time ($dt$ at the Bottom)!' },
          desc: {
            bm: 'Apabila soalan sebut *"jejari bertambah pada kadar $0.2\\text{ cm s}^{-1}$"*, tulis simbol terus: $\\frac{dr}{dt} = +0.2$ (jika menyusut/bocor, letak tanda negatif!). Nak cari kadar luas $\\frac{dA}{dt}$? Bina jambatan rantai: $$\\frac{dA}{dt} = \\frac{dA}{dr} \\times \\frac{dr}{dt}$$ supaya $dr$ atas-bawah boleh dipotong!',
            en: 'When a question says *"radius increases at $0.2\\text{ cm s}^{-1}$"*, translate immediately: $\\frac{dr}{dt} = +0.2$ (use negative if shrinking/leaking!). Need $\\frac{dA}{dt}$? Build the chain bridge: $$\\frac{dA}{dt} = \\frac{dA}{dr} \\times \\frac{dr}{dt}$$ so $dr$ cancels diagonally!'
          }
        }
      ],
      triggers: [
        {
          cue: { bm: 'Soalan ada pecahan atau punca kuasa seperti $y = \\frac{4}{x^2} + 6\\sqrt{x}$ atau $\\frac{1}{(2x+1)^3}$', en: 'Expression has fractions or surds such as $y = \\frac{4}{x^2} + 6\\sqrt{x}$ or $\\frac{1}{(2x+1)^3}$' },
          action: { bm: 'JANGAN terus bezakan di penyebut! Langkah 1 wajib tulis semula sebagai kuasa indeks negatif/pecahan ($4x^{-2} + 6x^{1/2}$ atau $(2x+1)^{-3}$) sebelum guna Petua Kuasa / Rantai.', en: 'NEVER differentiate the denominator in place! Step 1 MUST rewrite into negative/fractional index form ($4x^{-2} + 6x^{1/2}$ or $(2x+1)^{-3}$) before applying Power or Chain Rule.' }
        },
        {
          cue: { bm: 'Soalan minta: "Cari persamaan garis normal kepada lengkung pada titik $P(x_1, y_1)$"', en: 'Exam asks: "Find the equation of the normal to the curve at $P(x_1, y_1)$"' },
          action: { bm: 'Kira $m_T = \\frac{dy}{dx}$ pada $x_1$, kemudian **songsang & tukar tanda** untuk kecerunan normal: $m_N = -\\frac{1}{m_T}$, sebelum masuk ke $y - y_1 = m_N(x - x_1)$.', en: 'Evaluate tangent slope $m_T = \\frac{dy}{dx}$ at $x_1$, then **flip and negate** for normal slope $m_N = -\\frac{1}{m_T}$, before substituting into $y - y_1 = m_N(x - x_1)$.' }
        },
        {
          cue: { bm: 'Soalan Pengoptimuman Kertas 2: diberi jumlah panjang dawai / luas permukaan tetap, diminta luas/isi padu maksimum', en: 'Paper 2 Optimization: given fixed wire length / surface area, asked to maximize area/volume' },
          action: { bm: 'Bina 2 persamaan: gunakan syarat tetap yang diberi (panjang dawai / luas permukaan) untuk jadikan $y$ atau $h$ perkara rumus, gantikan ke dalam rumus sasaran supaya tinggal **1 pemboleh ubah sahaja**, kemudian selesaikan $\\frac{dV}{dx} = 0$ dan uji terbitan kedua!', en: 'Build 2 equations: use the fixed constraint (wire length / surface area) to isolate $y$ or $h$, substitute into the target formula so only **one variable** remains, then solve $\\frac{dV}{dx} = 0$ and verify with the second derivative!' }
        },
        {
          cue: { bm: 'Soalan sebut: "Cari nilai hampir / anggaran perubahan kecil apabila $x$ berubah daripada $4$ kepada $3.98$"', en: 'Exam says: "Estimate the small change / approximate value as $x$ changes from $4$ to $3.98$"' },
          action: { bm: 'Tetapkan nilai cantik $x = 4$ dan perubahan kecil $\\delta x = 3.98 - 4 = -0.02$. Kira $\\delta y \\approx \\frac{dy}{dx}\\Big|_{x=4} \\times \\delta x$, dan nilai baharu $\\approx y_{\\text{asal}} + \\delta y$.', en: 'Set the clean base value $x = 4$ and small change $\\delta x = 3.98 - 4 = -0.02$. Compute $\\delta y \\approx \\frac{dy}{dx}\\Big|_{x=4} \\times \\delta x$, then New Value $\\approx y_{\\text{old}} + \\delta y$.' }
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
        bm: 'Kamus Istilah KSSM ↔ DLP: Kamiran Tak Tentu = Indefinite Integral • Pemalar Pengamiran ($+ c$) = Constant of Integration • Kamiran Tentu = Definite Integral • Songsang Had = Reversing Limits • Dibatasi Paksi-$x$ / Paksi-$y$ = Bounded by $x$-axis / $y$-axis • Isi Padu Kisaran ($360^\\circ$) = Volume of Revolution ($360^\\circ$)',
        en: 'KSSM ↔ DLP Glossary: Indefinite Integral = Kamiran Tak Tentu • Constant of Integration ($+ c$) = Pemalar Pengamiran • Definite Integral = Kamiran Tentu • Reversing Limits = Songsang Had • Bounded by $x$-axis / $y$-axis = Dibatasi Paksi-$x$ / Paksi-$y$ • Volume of Revolution ($360^\\circ$) = Isi Padu Kisaran ($360^\\circ$)'
      },
      painSummary: {
        bm: 'Pelajar selalu hilang 1 markah percuma kerana tertinggal $+ c$, tertukar rumus luas $\\int y\\,dx$ dengan isi padu $\\pi\\int y^2\\,dx$ (terlupa huruf $\\pi$ atau terlupa kuasa dua!), dan terus menolak lengkung dengan garis tanpa mencari titik persilangan terlebih dahulu.',
        en: 'Students lose easy marks by forgetting $+ c$ on indefinite integrals, mixing up area $\\int y\\,dx$ with volume $\\pi\\int y^2\\,dx$ (omitting $\\pi$ or squaring $y^2$), and subtracting a curve and line without finding their intersection limits first!'
      },
      mentalModels: [
        {
          icon: '⏪',
          tag: { bm: 'Butang Undur Pembezaan', en: 'Rewind Button of Differentiation' },
          title: { bm: 'Tambah Kuasa $+1$, Bahagi Kuasa Baru & Wajib Letak $+ c$!', en: 'Power $+1$, Divide by New Power & Never Forget $+ c$!' },
          desc: {
            bm: 'Pembezaan darab kuasa lalu tolak $1$; Pengamiran pula **songsangkannya**: tambah kuasa $+1$, kemudian bahagi kuasa baharu itu! Bagi kurungan linear $\\int (ax + b)^n\\,dx = \\frac{(ax + b)^{n+1}}{(n + 1)(a)} + c$ — jangan lupa **bahagi pekali $x$ iaitu $a$**! Dan selagi tiada nombor had di cangkuk $\\int$, **WAJIB tulis $+ c$** (gantikan titik $(x_1, y_1)$ untuk cari $c$)!',
            en: 'Integration rewinds differentiation: increase the power by $1$, then divide by the new power! For $\\int (ax + b)^n\\,dx = \\frac{(ax + b)^{n+1}}{(n + 1)(a)} + c$, remember to **divide by $a$** (coefficient of $x$)! Whenever there are no limits on $\\int$, **ALWAYS write $+ c$** (and substitute a given point $(x_1, y_1)$ to solve for $c$)!'
          }
        },
        {
          icon: '🧭',
          tag: { bm: 'Kompas Paksi: Ikut Paksi, Ikut dx atau dy!', en: 'Axis Compass: Match Limits to dx or dy!' },
          title: { bm: 'Ke Paksi-$x$ Guna $\\int y\\,dx$; Ke Paksi-$y$ Guna $\\int x\\,dy$!', en: 'To $x$-Axis Use $\\int y\\,dx$; To $y$-Axis Use $\\int x\\,dy$!' },
          desc: {
            bm: 'Lihat ke paksi mana rantau berlorek bersandar! Jika bersandar pada **paksi-$x$** (had $x_1 \\to x_2$): $\\text{Luas} = \\int_{x_1}^{x_2} y\\,dx$. Jika bersandar pada **paksi-$y$** (had $y_1 \\to y_2$): susun semula persamaan supaya jadi $x = \\dots$ dahulu, kemudian $\\text{Luas} = \\int_{y_1}^{y_2} x\\,dy$. Jika rantau di **bawah paksi-$x$**, ambil modulus $|\\text{nilai}|$ supaya luas positif!',
            en: 'Check which axis the shaded region rests against! Against the **$x$-axis** (limits $x_1 \\to x_2$): use $\\text{Area} = \\int_{x_1}^{x_2} y\\,dx$. Against the **$y$-axis** (limits $y_1 \\to y_2$): rearrange the equation into $x = \\dots$ first, then use $\\text{Area} = \\int_{y_1}^{y_2} x\\,dy$. If the region lies **below the $x$-axis**, wrap in modulus $|\\text{value}|$ so area stays positive!'
          }
        },
        {
          icon: '🏺',
          tag: { bm: 'Analogi Mesin Tembikar 360°', en: '360° Pottery Wheel Model' },
          title: { bm: 'Isi Padu Kisaran = Potong Kepingan Cakera Bulat $\\pi r^2$!', en: 'Volume of Revolution = Stacking Circular Discs $\\pi r^2$!' },
          desc: {
            bm: 'Apabila rantau diputarkan $360^\\circ$ mengelilingi paksi-$x$, setiap hirisan membentuk cakera bulat berjejari $r = y$, jadi luas keratan ialah $\\pi y^2$! Sebab itu rumusnya **WAJIB ada $\\pi$ dan kuasa dua**: $$V_x = \\pi \\int_a^b y^2\\,dx \\quad \\text{dan} \\quad V_y = \\pi \\int_c^d x^2\\,dy$$',
            en: 'Rotating $360^\\circ$ around the $x$-axis sweeps out circular discs of radius $r = y$ and cross-section area $\\pi y^2$! That is why **both $\\pi$ and squaring** are mandatory: $$V_x = \\pi \\int_a^b y^2\\,dx \\quad \\text{and} \\quad V_y = \\pi \\int_c^d x^2\\,dy$$'
          }
        },
        {
          icon: '🍰',
          tag: { bm: 'Taktik Jimat Masa Garis Lurus', en: 'Straight-Line Shortcut' },
          title: { bm: 'Garis Lurus Tak Payah Kamir — Guna Segi Tiga / Trapezium!', en: 'Never Integrate a Straight Line — Use Triangle / Trapezium!' },
          desc: {
            bm: 'Bagi rantau berlorek antara lengkung dan garis lurus, jangan buang masa mengamir persamaan garis lurus! Kira luas di bawah garis lurus guna rumus mudah **Segi Tiga ($\\frac{1}{2} \\times \\text{tapak} \\times \\text{tinggi}$)** atau **Trapezium ($\\frac{1}{2}(a + b)h$)**, kemudian tolak atau tambah dengan kamiran lengkung!',
            en: 'When a shaded region lies between a curve and a straight line, save time and avoid algebra errors: compute the straight-line portion using **Triangle ($\\frac{1}{2} \\times \\text{base} \\times \\text{height}$)** or **Trapezium ($\\frac{1}{2}(a + b)h$)**, then add or subtract the curve integral!'
          }
        }
      ],
      triggers: [
        {
          cue: { bm: 'Soalan sebut: "Kecerunan lengkung pada sebarang titik diberi oleh $\\frac{dy}{dx} = 6x - 4$ dan lengkung melalui $(2, 5)$"', en: 'Exam says: "Gradient function is $\\frac{dy}{dx} = 6x - 4$ and curve passes through $(2, 5)$"' },
          action: { bm: 'Kamirkan untuk dapat $y = \\int (6x - 4)\\,dx = 3x^2 - 4x + c$, kemudian gantikan $(2, 5)$ terus untuk mencari nilai tepat $c$!', en: 'Integrate to get $y = 3x^2 - 4x + c$, then substitute $(2, 5)$ to solve for $c$ and write the full curve equation!' }
        },
        {
          cue: { bm: 'Soalan sifat kamiran: diberi $\\int_1^5 f(x)\\,dx = 8$, diminta cari $\\int_5^1 [2f(x) + 3]\\,dx$', en: 'Definite integral property: given $\\int_1^5 f(x)\\,dx = 8$, find $\\int_5^1 [2f(x) + 3]\\,dx$' },
          action: { bm: 'Perhatikan had terbalik ($\\int_5^1 f(x)\\,dx = -8$) dan **WAJIB kamirkan pemalar $3$** menjadi $[3x]_5^1 = 3(1 - 5) = -12$ (jangan tambah $+3$ mentah-mentah!).', en: 'Spot the reversed limits ($\\int_5^1 f(x)\\,dx = -8$) and **integrate the constant $3$** properly as $[3x]_5^1 = 3(1 - 5) = -12$ (never just add $+3$!).' }
        },
        {
          cue: { bm: 'Soalan "Seterusnya (Hence)": bahagian (a) suruh bezakan $\\frac{d}{dx}[x\\sqrt{2x+1}]$, bahagian (b) suruh cari $\\int \\dots\\,dx$', en: '"Hence" question: part (a) asks to differentiate $\\frac{d}{dx}[x\\sqrt{2x+1}]$, part (b) asks to integrate a related expression' },
          action: { bm: 'JANGAN cuba kamir ikut rumus biasa! Terbalikkan sahaja keputusan bahagian (a): jika $\\frac{d}{dx}[F(x)] = k \\cdot g(x)$, maka $\\int g(x)\\,dx = \\frac{1}{k}F(x) + c$!', en: 'NEVER integrate from scratch! Reverse part (a) directly: if $\\frac{d}{dx}[F(x)] = k \\cdot g(x)$, then $\\int g(x)\\,dx = \\frac{1}{k}F(x) + c$!' }
        },
        {
          cue: { bm: 'Soalan minta: "Cari luas rantau berlorek di antara lengkung dan garis lurus / antara dua lengkung"', en: 'Exam asks: "Find the area of the shaded region between a curve and a straight line / between two curves"' },
          action: { bm: 'Langkah 1: Selesaikan persamaan serentak ($y_1 = y_2$) untuk mencari titik persilangan $(a, b)$. Langkah 2: Semak fungsi mana di atas dan kamirkan $\\int_a^b (y_{\\text{atas}} - y_{\\text{bawah}})\\,dx$ (atau tolak luas segi tiga/trapezium garis lurus)!', en: 'Step 1: Solve simultaneous equations ($y_1 = y_2$) to find the intersection limits $a$ and $b$. Step 2: Check which graph is on top and integrate $\\int_a^b (y_{\\text{top}} - y_{\\text{bottom}})\\,dx$ (or subtract the straight-line triangle/trapezium area)!' }
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
        bm: 'Kamus Istilah KSSM ↔ DLP: Pilih Atur (${}^nP_r$) = Permutation • Gabungan (${}^nC_r$) = Combination • Saling Eksklusif = Mutually Exclusive • Susunan Sebaris / Membulat = Linear / Circular Arrangement • Objek Sama Berulang = Identical Objects • Mesti Bersama = Must Be Together • Berasingan / Tidak Bersebelahan = Separated / Not Adjacent',
        en: 'KSSM ↔ DLP Glossary: Permutation (${}^nP_r$) = Pilih Atur • Combination (${}^nC_r$) = Gabungan • Mutually Exclusive = Saling Eksklusif • Linear / Circular Arrangement = Susunan Sebaris / Membulat • Identical Objects = Objek Sama Berulang • Must Be Together = Mesti Bersama • Separated / Not Adjacent = Berasingan / Tidak Bersebelahan'
      },
      painSummary: {
        bm: 'Sebelum menghafal rumus ${}^nP_r$, ingat asasnya ialah petua kotak tempat `_ _ _ _` (darab bilangan pilihan setiap kotak)! Pelajar paling kerap tertukar ${}^nP_r$ dengan ${}^nC_r$, keliru bila perlu DARAB ($\\times$) lawan TAMBAH ($+$), dan lupa mendarab susunan dalaman ($k!$) apabila mengikat objek bersama!',
        en: 'Before memorizing ${}^nP_r$, remember it comes from simple slot boxes `_ _ _ _` (multiplying choices at each slot)! Students constantly mix up ${}^nP_r$ and ${}^nC_r$, confuse when to MULTIPLY ($\\times$) vs ADD ($+$), and forget internal arrangements ($k!$) when tying objects together!'
      },
      mentalModels: [
        {
          icon: '🏅',
          tag: { bm: 'Kotak Tempat & Ujian 3 Saat P vs C', en: 'Slot-Box Bridge & 3-Second P vs C Test' },
          title: { bm: 'Kotak `_ _ _ _` = ${}^nP_r$; Tukar Tempat: Berbeza atau Sama?', en: 'Slot Boxes `_ _ _ _` = ${}^nP_r$; Swap Two Items: Different or Same?' },
          desc: {
            bm: 'Untuk menyusun $3$ tempat daripada $5$ pilihan: kotak `_ _ _` memberi $5 \\times 4 \\times 3 = {}^5P_3$. Tanya satu soalan: *"Jika Ali dan Abu bertukar tempat, adakah hasilnya berubah?"* **YA** (Kod PIN, angka, beratur, Pengerusi & Setiausaha) $\\rightarrow$ **Pilih Atur ${}^nP_r$**! **TIDAK** (Pilih 4 ahli jawatankuasa biasa, pasukan debat) $\\rightarrow$ **Gabungan ${}^nC_r = \\frac{{}^nP_r}{r!}$**!',
            en: 'Picking $3$ positions from $5$ choices via slot boxes `_ _ _` gives $5 \\times 4 \\times 3 = {}^5P_3$. Ask one question: *"If Ali and Abu swap places, is it a different outcome?"* **YES** (PIN codes, digits, line-up, President & Secretary) $\\rightarrow$ **Permutation ${}^nP_r$**! **NO** (committee, team, toppings) $\\rightarrow$ **Combination ${}^nC_r = \\frac{{}^nP_r}{r!}$**!'
          }
        },
        {
          icon: '🔀',
          tag: { bm: 'Mnemonik: DAN = Darab, ATAU = Tambah', en: 'Hook: AND = Multiply, OR = Add' },
          title: { bm: 'Kerja Belum Siap = DARAB ($\\times$); Kes Berbeza = TAMBAH ($+$)!', en: 'Unfinished Stages = MULTIPLY ($\\times$); Separate Cases = ADD ($+$)!' },
          desc: {
            bm: 'Jika misi **belum lengkap** (pilih 2 lelaki **DAN** 3 perempuan untuk cukupkan 5 ahli), **DARAB**: ${}^5C_2 \\times {}^6C_3$. Apabila satu kes sudah lengkap dan anda beralih ke **kes alternatif lain** (Kes 1: 3P 2L **ATAU** Kes 2: 4P 1L), barulah **TAMBAH** hasil setiap kes!',
            en: 'While building **one complete team/code** (pick 2 boys **AND** 3 girls to reach 5 members), **MULTIPLY**: ${}^5C_2 \\times {}^6C_3$. Only **ADD** when summing **mutually exclusive completed cases** (Case 1: 3G 2B **OR** Case 2: 4G 1B)!'
          }
        },
        {
          icon: '🪢',
          tag: { bm: 'Taktik Ikat Guni vs Selit Celah', en: 'Tie-in-a-Sack vs Gap Method' },
          title: { bm: 'Mesti Bersama = Ikat 1 Guni; Mesti Berasingan = Selit Celah!', en: 'Together = Tie as 1 Unit; Separated = Slot into Gaps!' },
          desc: {
            bm: '**Mesti Bersama**: ikat kumpulan itu jadi **1 blok besar**, susun bersama objek lain, kemudian **WAJIB darab susunan dalaman guni ($k!$)**! **Mesti Berasingan**: untuk $2$ objek berasingan, guna $\\text{Jumlah Semua} - \\text{Bersama}$. Jika **$\\ge 3$ objek tiada dua bersebelahan**, susun objek lain dahulu dan selitkan ke dalam celah kosong (${}^{\\text{celah}}P_r$)!',
            en: '**Together**: bundle them into **1 super-block**, permute all blocks together, then **MUST multiply by internal $k!$**. **Separated**: for $2$ items, use $\\text{Total} - \\text{Together}$; for **$3+$ items all separated**, arrange the other items first and slot into the empty gaps (${}^{\\text{gaps}}P_r$)!'
          }
        },
        {
          icon: '🔐',
          tag: { bm: 'Peraturan VIP: Isi Syarat Ketat Dahulu!', en: 'VIP Rule: Fill Restricted Slots First!' },
          title: { bm: 'Nombor Genap / Lebih Besar Daripada $5000$: Kunci Kotak Syarat Dulu!', en: 'Even Numbers / $> 5000$: Lock Restricted Digits First!' },
          desc: {
            bm: 'Lukis kotak kosong `_ _ _ _`. Isi kotak paling cerewet dahulu (contoh digit terakhir genap, digit pertama $> 5$), dan ingat baki digit berkurang bila **tiada ulangan**! **AMARAN**: Jika ada digit **bertindan** dalam kedua-dua syarat (contoh `6` dan `8` ialah $> 5$ DAN juga genap!), wajib **pecahkan kepada 2 kes berasingan** supaya tiada digit diguna dua kali!',
            en: 'Draw empty slots `_ _ _ _`. Lock the strictest slots first (e.g., last digit even, first digit $> 5$), and reduce remaining choices since **no repetition** is allowed! **WARNING**: If any digit satisfies **both** the first-slot and last-slot conditions (e.g. `6` and `8` are both $> 5$ AND even!), **split into 2 separate cases** so no digit is reused twice!'
          }
        }
      ],
      triggers: [
        {
          cue: { bm: 'Soalan sebut: "Cari bilangan susunan huruf bagi perkataan dengan huruf berulang seperti MATEMATIK / BANANA"', en: 'Exam says: "Find the number of arrangements of letters in a word with repeated letters like BANANA"' },
          action: { bm: 'Bahagikan faktorial jumlah huruf dengan faktorial setiap huruf sama yang berulang: bagi `BANANA` ($6$ huruf: tiga `A`, dua `N`) $\\rightarrow \\frac{6!}{3!\\,2!} = 60$.', en: 'Divide the total factorial by the factorials of each identical repeated letter: for `BANANA` ($6$ letters: three `A`s, two `N`s) $\\rightarrow \\frac{6!}{3!\\,2!} = 60$.' }
        },
        {
          cue: { bm: 'Soalan jawatankuasa: "Pilih 5 ahli supaya sekurang-kurangnya 3 orang ialah perempuan"', en: 'Committee question: "Choose 5 members such that at least 3 of them are girls"' },
          action: { bm: 'Senaraikan kes yang sah secara teratur (Kes 1: $3P, 2L$; Kes 2: $4P, 1L$; Kes 3: $5P, 0L$), darab dalam setiap baris, dan jumlahkan semua baris di akhir.', en: 'List all valid cases systematically (Case 1: $3G, 2B$; Case 2: $4G, 1B$; Case 3: $5G, 0B$), multiply inside each row, then add all rows at the end.' }
        },
        {
          cue: { bm: 'Soalan sebut: "Pasangan suami isteri Encik Tan dan Puan Tan mesti dipilih bersama atau kedua-duanya tidak dipilih"', en: 'Exam says: "Couple Mr and Mrs Tan must either both be selected or neither is selected"' },
          action: { bm: 'Pecah 2 kes: **Kes 1 (Kedua-dua masuk)**: tinggal pilih $(r - 2)$ orang daripada baki calon. **Kes 2 (Kedua-dua ditolak)**: pilih $r$ orang terus daripada baki calon!', en: 'Split into 2 cases: **Case 1 (Both included)**: choose $(r - 2)$ from remaining candidates. **Case 2 (Both excluded)**: choose all $r$ directly from remaining candidates!' }
        },
        {
          cue: { bm: 'Soalan kod digit bersyarat berganda: "Bentuk nombor 4-digit genap yang lebih besar daripada $5000$ daripada $\\{2, 3, 5, 6, 8\\}$"', en: 'Double-restricted digit code: "Form a 4-digit even number greater than $5000$ from $\\{2, 3, 5, 6, 8\\}$"' },
          action: { bm: 'Lukis `_ _ _ _`, kemudian semak pertindihan (`6, 8` ialah $>5$ DAN genap!). Pecah kepada **Kes 1 (akhir `2`)**: $3 \\times 3 \\times 2 \\times 1 = 18$, dan **Kes 2 (akhir `6` atau `8`)**: $2 \\times 3 \\times 2 \\times 2 = 24 \\Rightarrow 18 + 24 = 42$!', en: 'Draw `_ _ _ _`, then spot overlapping digits (`6, 8` are $>5$ AND even!). Split into **Case 1 (ends `2`)**: $3 \\times 3 \\times 2 \\times 1 = 18$, and **Case 2 (ends `6` or `8`)**: $2 \\times 3 \\times 2 \\times 2 = 24 \\Rightarrow 18 + 24 = 42$!' }
        }
      ],
      rxFix: {
        wrong: { bm: 'Menolak $\\text{Semua} - \\text{Semua Bersama}$ untuk mencari "3 huruf vokal mesti berasingan semua" (sebab kes 2 vokal rapat + 1 jauh masih tertinggal!).', en: 'Computing $\\text{Total} - \\text{All 3 Together}$ when asked for "no two of the 3 vowels are adjacent" (this misses cases where 2 vowels touch and 1 is apart!).' },
        right: { bm: 'Bagi $3$ atau lebih objek berasingan, guna **Kaedah Celah (Gap Method)**: susun $k$ konsonan dahulu ($k!$), kemudian selit $3$ vokal ke dalam $(k + 1)$ celah kosong: $k! \\times {}^{k+1}P_3$!', en: 'For $3+$ separated objects, always use the **Gap Method**: arrange the $k$ consonants ($k!$), then slot the $3$ vowels into the $(k + 1)$ spaces: $k! \\times {}^{k+1}P_3$!' }
      }
    }
  };

  Object.keys(F5A_CLINIC).forEach(function (k) {
    App.teacherClinic[k] = F5A_CLINIC[k];
  });
})(window.AddMathApp);
