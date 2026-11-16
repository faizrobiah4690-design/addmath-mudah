/**
 * AddMath Mudah — Bank Soalan Master SPM (Fasa 3: Tingkatan 5 Bab 1–4 • 40 Soalan Penuh)
 * Setiap soalan lengkap dengan: Pernyataan Format SPM, Kesilapan Lazim Murid & Skim Pemarkahan (K1 / N1) dalam BM & EN.
 */
window.AddMathApp = window.AddMathApp || {};
window.AddMathApp.masterBank = window.AddMathApp.masterBank || {};

(function (App) {
  'use strict';

  Object.assign(App.masterBank, {
    // =========================================================================
    // TINGKATAN 5 BAB 1: SUKATAN MEMBULAT (10 SOALAN)
    // =========================================================================
    'f5-c1': [
      {
        code: '1.1', marks: 3,
        topic: { bm: 'Penukaran Darjah ke Radian & Panjang Lengkok Minor', en: 'Degrees to Radians & Minor Arc Length' },
        q: {
          bm: 'Sebuah bulatan berjejari $6\\text{ cm}$ mempunyai sudut refleks (major) pada pusat bernilai $240^\\circ$. Cari sudut sektor minor dalam radian (sebutan $\\pi$) dan panjang lengkok minor. [3m]',
          en: 'A circle of radius $6\\text{ cm}$ has a reflex (major) central angle of $240^\\circ$. Find the minor sector angle in radians (in terms of $\\pi$) and the minor arc length. [3m]'
        },
        mistakes: {
          bm: ['Menggunakan sudut major $240^\\circ$ bukannya sudut minor $360^\\circ - 240^\\circ = 120^\\circ$, atau memasukkan nilai darjah terus ke dalam $s = r\\theta$.'],
          en: ['Using major angle $240^\\circ$ instead of minor angle $120^\\circ$, or substituting degrees directly into $s = r\\theta$.']
        },
        scheme: [
          { badge: 'N1', bm: 'Sudut minor $= 120^\\circ \\times \\frac{\\pi}{180^\\circ} = \\frac{2}{3}\\pi\\text{ rad}$.', en: 'Minor angle $= \\frac{2}{3}\\pi\\text{ rad}$.' },
          { badge: 'K1', bm: '$s = r\\theta = 6\\left(\\frac{2}{3}\\pi\\right)$.', en: '$s = 6\\left(\\frac{2}{3}\\pi\\right)$.' },
          { badge: 'N1', bm: '$s = 4\\pi \\approx 12.57\\text{ cm}$.', en: '$s = 4\\pi \\approx 12.57\\text{ cm}$.' }
        ]
      },
      {
        code: '1.2', marks: 4,
        topic: { bm: 'Perimeter Tembereng Bulatan', en: 'Perimeter of a Circular Segment' },
        q: {
          bm: 'Sebuah sektor $OAB$ berjejari $10\\text{ cm}$ mencangkum sudut $1.2\\text{ rad}$ di pusat $O$. Hitung perimeter bagi tembereng berlorek yang dibatasi oleh perentas $AB$ dan lengkok $AB$. [4m]',
          en: 'Sector $OAB$ of radius $10\\text{ cm}$ subtends an angle of $1.2\\text{ rad}$ at centre $O$. Calculate the perimeter of the segment bounded by chord $AB$ and arc $AB$. [4m]'
        },
        mistakes: {
          bm: ['Kalkulator dibiarkan dalam mod **DEG** semasa mengira $\\cos(1.2\\text{ rad})$ atau $\\sin(0.6\\text{ rad})$, atau menambah $2r$ seolah-olah perimeter sektor.'],
          en: ['Leaving calculator in **DEG** mode when evaluating $\\cos(1.2\\text{ rad})$, or adding $2r$ as if finding sector perimeter.']
        },
        scheme: [
          { badge: 'K1', bm: 'Lengkok $AB = 10(1.2) = 12\\text{ cm}$.', en: 'Arc $AB = 10(1.2) = 12\\text{ cm}$.' },
          { badge: 'K1', bm: 'Perentas $AB = 2(10)\\sin(0.6\\text{ rad}) = 11.29\\text{ cm}$ (atau $\\sqrt{10^2 + 10^2 - 200\\cos 1.2}$).', en: 'Chord $AB = 20\\sin(0.6\\text{ rad}) = 11.29\\text{ cm}$.' },
          { badge: 'N1', bm: 'Perimeter tembereng $= 12 + 11.29 = 23.29\\text{ cm}$.', en: 'Segment perimeter $= 23.29\\text{ cm}$.' }
        ]
      },
      {
        code: '1.3', marks: 4,
        topic: { bm: 'Luas Tembereng Bulatan', en: 'Area of a Circular Segment' },
        q: {
          bm: 'Diberi sektor bulatan berjejari $8\\text{ cm}$ dengan sudut pusat $\\frac{\\pi}{3}\\text{ rad}$. Hitung luas tembereng minornya. [4m]',
          en: 'A circular sector has radius $8\\text{ cm}$ and central angle $\\frac{\\pi}{3}\\text{ rad}$. Calculate the area of its minor segment. [4m]'
        },
        mistakes: {
          bm: ['Berhenti selepas mengira luas sektor $\\frac{1}{2}r^2\\theta$ tanpa menolak luas segi tiga $\\frac{1}{2}r^2\\sin\\theta$.'],
          en: ['Computing sector area $\\frac{1}{2}r^2\\theta$ without subtracting triangle area $\\frac{1}{2}r^2\\sin\\theta$.']
        },
        scheme: [
          { badge: 'K1', bm: '$\\text{Luas Tembereng} = \\frac{1}{2}(8)^2\\left(\\frac{\\pi}{3} - \\sin\\frac{\\pi}{3}\\right) = 32(1.0472 - 0.8660)$.', en: '$\\text{Area} = \\frac{1}{2}(8)^2\\left(\\frac{\\pi}{3} - \\sin\\frac{\\pi}{3}\\right)$.' },
          { badge: 'N1', bm: '$5.80\\text{ cm}^2$.', en: '$5.80\\text{ cm}^2$.' }
        ]
      },
      {
        code: '1.4', marks: 4,
        topic: { bm: 'Luas Rantau Antara Dua Sektor Sepusat', en: 'Area Between Two Concentric Sectors' },
        q: {
          bm: 'Dua sektor bulatan sepusat mempunyai jejari $r = 5\\text{ cm}$ dan $R = 9\\text{ cm}$ serta berkongsi sudut pusat $0.8\\text{ rad}$. Hitung luas rantau di antara kedua-dua lengkok itu. [4m]',
          en: 'Two concentric sectors have radii $r = 5\\text{ cm}$ and $R = 9\\text{ cm}$ with central angle $0.8\\text{ rad}$. Find the area between the two arcs. [4m]'
        },
        mistakes: {
          bm: ['Menolak jejari dahulu sebelum mengkuasadua: menulis $\\frac{1}{2}(9 - 5)^2(0.8) = 6.4$ bukannya $\\frac{1}{2}(9^2 - 5^2)(0.8) = 22.4$!'],
          en: ['Writing $\\frac{1}{2}(R - r)^2\\theta$ instead of $\\frac{1}{2}(R^2 - r^2)\\theta$!']
        },
        scheme: [
          { badge: 'K1', bm: '$\\text{Luas} = \\frac{1}{2}(9)^2(0.8) - \\frac{1}{2}(5)^2(0.8) = 32.4 - 10.0$.', en: '$\\text{Area} = \\frac{1}{2}(0.8)(81 - 25)$.' },
          { badge: 'N1', bm: '$22.4\\text{ cm}^2$.', en: '$22.4\\text{ cm}^2$.' }
        ]
      },
      {
        code: '1.5', marks: 5,
        topic: { bm: 'Panjang Tali (*Belt*) Mengelilingi Dua Roda Takal (*Pulley*)', en: 'Belt Length Around Two Pulleys' },
        q: {
          bm: 'Dua roda takal (*pulley*) berjejari $R = 12\\text{ cm}$ dan $r = 4\\text{ cm}$ mempunyai jarak antara pusat $16\\text{ cm}$. Sudut sentuhan tali (*belt*) pada takal besar ialah $4.189\\text{ rad}$ dan pada takal kecil ialah $2.094\\text{ rad}$. Hitung jumlah panjang tali yang tegang mengelilingi kedua-dua takal itu. [5m]',
          en: 'Two pulleys of radii $R = 12\\text{ cm}$ and $r = 4\\text{ cm}$ have centres $16\\text{ cm}$ apart. Belt contact angles are $4.189\\text{ rad}$ and $2.094\\text{ rad}$. Find the total taut belt length. [5m]'
        },
        mistakes: {
          bm: ['Hanya menjumlahkan dua lengkok bulatan dan terlupa menambah **dua bahagian tangen lurus** di antara kedua-dua takal.'],
          en: ['Summing only the two circular arcs and forgetting the **two straight tangent segments**.']
        },
        scheme: [
          { badge: 'K1', bm: 'Jumlah lengkok $= 12(4.189) + 4(2.094) = 50.268 + 8.376 = 58.644\\text{ cm}$.', en: 'Arcs $= 50.268 + 8.376 = 58.644\\text{ cm}$.' },
          { badge: 'K1', bm: 'Satu tangen lurus $= \\sqrt{16^2 - (12 - 4)^2} = \\sqrt{192} = 13.856\\text{ cm}$.', en: 'One straight tangent $= \\sqrt{16^2 - 8^2} = 13.856\\text{ cm}$.' },
          { badge: 'N1', bm: 'Jumlah panjang tali $= 58.644 + 2(13.856) = 86.36\\text{ cm}$.', en: 'Total belt length $= 86.36\\text{ cm}$.' }
        ]
      },
      {
        code: '1.6', marks: 4,
        topic: { bm: 'Mencari Sudut & Perimeter daripada Luas Sektor', en: 'Finding Angle & Perimeter from Sector Area' },
        q: {
          bm: 'Sebuah sektor bulatan berjejari $4\\text{ cm}$ mempunyai luas $24\\text{ cm}^2$. Cari nilai sudut pusat $\\theta$ dalam radian dan perimeter sektor tersebut. [4m]',
          en: 'A circular sector of radius $4\\text{ cm}$ has area $24\\text{ cm}^2$. Find central angle $\\theta$ in radians and the perimeter of the sector. [4m]'
        },
        mistakes: {
          bm: ['Menyatakan perimeter sektor sebagai panjang lengkok $s = 12\\text{ cm}$ sahaja tanpa menambah kedua-dua jejari $2r = 8\\text{ cm}$.'],
          en: ['Giving arc length $12\\text{ cm}$ as the sector perimeter without adding $2r = 8\\text{ cm}$.']
        },
        scheme: [
          { badge: 'K1', bm: '$\\frac{1}{2}(4)^2\\theta = 24 \\implies 8\\theta = 24$.', en: '$\\frac{1}{2}(16)\\theta = 24$.' },
          { badge: 'N1', bm: '$\\theta = 3\\text{ rad}$; $\\;\\text{Perimeter} = 4(3) + 2(4) = 20\\text{ cm}$.', en: '$\\theta = 3\\text{ rad}$; $\\;\\text{Perimeter} = 20\\text{ cm}$.' }
        ]
      },
      {
        code: '1.7', marks: 4,
        topic: { bm: 'Keratan Rentas Air di Dalam Paip Silinder', en: 'Water Cross-Sectional Area Inside a Pipe' },
        q: {
          bm: 'Keratan rentas sebatang paip berbentuk bulatan berjejari $10\\text{ cm}$. Kedalaman maksimum air di dasar paip ialah $5\\text{ cm}$. Hitung luas keratan rentas air tersebut. [4m]',
          en: 'A circular pipe has radius $10\\text{ cm}$. Water at the bottom has maximum depth $5\\text{ cm}$. Find the cross-sectional area of the water. [4m]'
        },
        mistakes: {
          bm: ['Mengambil jarak pusat ke permukaan air sebagai $10\\text{ cm}$ bukannya $10 - 5 = 5\\text{ cm}$ semasa mencari separuh sudut pusat.'],
          en: ['Failing to compute distance from centre to water surface as $10 - 5 = 5\\text{ cm}$.']
        },
        scheme: [
          { badge: 'K1', bm: '$\\cos\\left(\\frac{\\theta}{2}\\right) = \\frac{5}{10} = 0.5 \\implies \\frac{\\theta}{2} = \\frac{\\pi}{3} \\implies \\theta = \\frac{2\\pi}{3}\\text{ rad}$.', en: '$\\cos(\\theta/2) = 0.5 \\implies \\theta = \\frac{2\\pi}{3}\\text{ rad}$.' },
          { badge: 'K1', bm: '$\\text{Luas} = \\frac{1}{2}(10)^2\\left(\\frac{2\\pi}{3} - \\sin\\frac{2\\pi}{3}\\right)$.', en: '$\\text{Area} = 50\\left(\\frac{2\\pi}{3} - \\sin\\frac{2\\pi}{3}\\right)$.' },
          { badge: 'N1', bm: '$61.42\\text{ cm}^2$ (atau $61.43\\text{ cm}^2$ bagi $\\pi = 3.142$).', en: '$61.42\\text{ cm}^2$ (or $61.43\\text{ cm}^2$ using $\\pi = 3.142$).' }
        ]
      },
      {
        code: '1.8', marks: 3,
        topic: { bm: 'Kenapa Hanya Diameter Membahagi Dua Sama Luas Bulatan?', en: 'Chord Bisecting Circle Area Reasoning' },
        q: {
          bm: 'Terangkan secara matematik mengapa hanya perentas yang merupakan diameter boleh membahagi dua sama luas sebuah bulatan, dan nyatakan sudut pusat semibulatan itu dalam radian. [3m]',
          en: 'Explain mathematically why only a diameter chord bisects the area of a circle, and state the semicircle central angle in radians. [3m]'
        },
        mistakes: {
          bm: ['Memberi jawapan dalam darjah ($180^\\circ$) sedangkan soalan meminta sebutan radian ($\\pi\\text{ rad}$).'],
          en: ['Answering $180^\\circ$ instead of $\\pi\\text{ rad}$.']
        },
        scheme: [
          { badge: 'K1', bm: 'Bagi separuh luas bulatan: $\\frac{1}{2}r^2(\\theta - \\sin\\theta) = \\frac{1}{2}\\pi r^2 \\implies \\theta - \\sin\\theta = \\pi$.', en: 'Setting segment area $= \\frac{1}{2}\\pi r^2$ gives $\\theta - \\sin\\theta = \\pi$.' },
          { badge: 'N1', bm: 'Dipenuhi apabila $\\sin\\theta = 0 \\implies \\theta = \\pi\\text{ rad}$ (iaitu perentas melalui pusat sebagai diameter).', en: 'Satisfied uniquely at $\\theta = \\pi\\text{ rad}$ (diameter through centre).' }
        ]
      },
      {
        code: '1.9', marks: 4,
        topic: { bm: 'Rantau Berlorek Sektor di Dalam Segi Tiga Sama Sisi', en: 'Sector Inside an Equilateral Triangle' },
        q: {
          bm: 'Segi tiga sama sisi $ABC$ mempunyai sisi $12\\text{ cm}$. Sebuah sektor berpusat di $A$ berjejari $6\\text{ cm}$ dilukis di dalam segi tiga itu. Hitung perimeter rantau di dalam $\\triangle ABC$ tetapi di luar sektor tersebut. [4m]',
          en: 'Equilateral triangle $ABC$ has side $12\\text{ cm}$. A sector centred at $A$ with radius $6\\text{ cm}$ is drawn inside it. Find the perimeter of the region inside $\\triangle ABC$ outside the sector. [4m]'
        },
        mistakes: {
          bm: ['Menjumlahkan sisi penuh $AB = 12$ dan $AC = 12$ tanpa menolak bahagian jejari sektor $6\\text{ cm}$ pada kedua-dua sisi itu.'],
          en: ['Adding full sides $12 + 12$ instead of the remaining segments $6 + 6$.']
        },
        scheme: [
          { badge: 'K1', bm: 'Sudut $\\angle BAC = 60^\\circ = \\frac{\\pi}{3}\\text{ rad}$; panjang lengkok $= 6\\left(\\frac{\\pi}{3}\\right) = 2\\pi \\approx 6.283\\text{ cm}$.', en: 'Arc $= 6(\\pi/3) = 6.283\\text{ cm}$.' },
          { badge: 'N1', bm: 'Perimeter $= 6.283 + (12 - 6) + (12 - 6) + 12 = 30.28\\text{ cm}$.', en: 'Perimeter $= 6.283 + 6 + 6 + 12 = 30.28\\text{ cm}$.' }
        ]
      },
      {
        code: '1.10', marks: 4,
        topic: { bm: 'Seni Bina Kubah Dua Lengkok Simetri', en: 'Symmetric Twin-Arc Dome Design' },
        q: {
          bm: 'Kerangka sebuah pintu gerbang terdiri daripada dua lengkok sektor yang kongruen dan simetri, masing-masing berjejari $8\\text{ m}$ dan sudut pusat $0.75\\text{ rad}$. Hitung jumlah panjang lengkok gerbang dan jumlah luas kedua-dua sektor. [4m]',
          en: 'An arch consists of two congruent symmetric sector arcs, each of radius $8\\text{ m}$ and central angle $0.75\\text{ rad}$. Find the total arc length and combined sector area. [4m]'
        },
        mistakes: {
          bm: ['Mengira bagi satu lengkok sahaja dan terlupa mendarab dengan $2$ untuk kedua-dua belah gerbang simetri.'],
          en: ['Computing for only one side and forgetting to multiply by $2$.']
        },
        scheme: [
          { badge: 'K1', bm: 'Jumlah lengkok $= 2 \\times 8(0.75) = 12\\text{ m}$.', en: 'Total arc $= 2 \\times 8(0.75) = 12\\text{ m}$.' },
          { badge: 'N1', bm: 'Jumlah luas sektor $= 2 \\times \\frac{1}{2}(8)^2(0.75) = 48\\text{ m}^2$.', en: 'Combined sector area $= 48\\text{ m}^2$.' }
        ]
      }
    ],

    // =========================================================================
    // TINGKATAN 5 BAB 2: PEMBEZAAN (10 SOALAN)
    // =========================================================================
    'f5-c2': [
      {
        code: '2.1', marks: 4,
        topic: { bm: 'Pembezaan daripada Prinsip Pertama', en: 'Differentiation from First Principles' },
        q: {
          bm: 'Cari $\\frac{dy}{dx}$ bagi $y = 3x^2 - 5x$ dengan menggunakan prinsip pertama. [4m]',
          en: 'Find $\\frac{dy}{dx}$ for $y = 3x^2 - 5x$ from first principles. [4m]'
        },
        mistakes: {
          bm: ['Terus menggunakan petua kuasa tanpa menunjukkan perubahan kecil $\\delta y$ dan langkah had $\\lim_{\\delta x \\to 0}$ (markah sifar untuk prinsip pertama!), atau membuang simbol $\\lim$ terlalu awal.'],
          en: ['Using power rule directly without $\\delta y / \\delta x$ and $\\lim_{\\delta x \\to 0}$ (earns zero for first principles!).']
        },
        scheme: [
          { badge: 'K1', bm: '$y + \\delta y = 3(x + \\delta x)^2 - 5(x + \\delta x) \\implies \\delta y = 6x\\delta x + 3(\\delta x)^2 - 5\\delta x$.', en: '$\\delta y = 6x\\delta x + 3(\\delta x)^2 - 5\\delta x$.' },
          { badge: 'K1', bm: '$\\frac{dy}{dx} = \\lim_{\\delta x \\to 0} \\frac{6x\\delta x + 3(\\delta x)^2 - 5\\delta x}{\\delta x} = \\lim_{\\delta x \\to 0} (6x + 3\\delta x - 5)$.', en: '$\\frac{dy}{dx} = \\lim_{\\delta x \\to 0}(6x + 3\\delta x - 5)$.' },
          { badge: 'N1', bm: '$\\frac{dy}{dx} = 6x - 5$.', en: '$\\frac{dy}{dx} = 6x - 5$.' }
        ]
      },
      {
        code: '2.2', marks: 3,
        topic: { bm: 'Gabungan Petua Hasil Darab & Petua Rantai', en: 'Combined Product Rule & Chain Rule' },
        q: {
          bm: 'Bezakan $y = (2x - 3)(x^2 + 4)^3$ terhadap $x$ dan permudahkan jawapan dalam bentuk faktor termudah. [3m]',
          en: 'Differentiate $y = (2x - 3)(x^2 + 4)^3$ with respect to $x$ in factored form. [3m]'
        },
        mistakes: {
          bm: ['Lupa mendarab hasil beza sebutan dalam kurungan ($2x$) semasa membezakan $(x^2 + 4)^3$.'],
          en: ['Forgetting inner derivative $2x$ when differentiating $(x^2 + 4)^3$.']
        },
        scheme: [
          { badge: 'K1', bm: '$\\frac{dy}{dx} = (2x - 3)\\cdot 3(x^2 + 4)^2(2x) + (x^2 + 4)^3(2)$.', en: '$\\frac{dy}{dx} = 6x(2x - 3)(x^2 + 4)^2 + 2(x^2 + 4)^3$.' },
          { badge: 'N1', bm: '$2(x^2 + 4)^2[3x(2x - 3) + (x^2 + 4)] = 2(x^2 + 4)^2(7x^2 - 9x + 4)$.', en: '$2(x^2 + 4)^2(7x^2 - 9x + 4)$.' }
        ]
      },
      {
        code: '2.3', marks: 3,
        topic: { bm: 'Petua Hasil Bahagi pada Nilai Tertentu', en: 'Quotient Rule Evaluated at a Point' },
        q: {
          bm: 'Diberi $y = \\frac{3x + 1}{2x - 5}$, cari nilai $\\frac{dy}{dx}$ apabila $x = 2$. [3m]',
          en: 'Given $y = \\frac{3x + 1}{2x - 5}$, find the value of $\\frac{dy}{dx}$ when $x = 2$. [3m]'
        },
        mistakes: {
          bm: ['Terbalik urutan pengangka Petua Hasil Bahagi: menulis $uv\' - vu\'$ bukannya $vu\' - uv\'$ lalu mendapat tanda yang berlawanan ($+17$).'],
          en: ['Reversing the numerator into $uv\' - vu\'$ instead of $vu\' - uv\'$, getting $+17$ instead of $-17$.']
        },
        scheme: [
          { badge: 'K1', bm: '$\\frac{dy}{dx} = \\frac{(2x - 5)(3) - (3x + 1)(2)}{(2x - 5)^2} = \\frac{-17}{(2x - 5)^2}$.', en: '$\\frac{dy}{dx} = \\frac{-17}{(2x - 5)^2}$.' },
          { badge: 'N1', bm: 'Apabila $x = 2$: $\\frac{dy}{dx} = \\frac{-17}{(-1)^2} = -17$.', en: 'At $x = 2$: $\\frac{dy}{dx} = -17$.' }
        ]
      },
      {
        code: '2.4', marks: 4,
        topic: { bm: 'Persamaan Garis Normal kepada Lengkung', en: 'Equation of Normal to a Curve' },
        q: {
          bm: 'Cari persamaan garis normal kepada lengkung $y = x^3 - 4x + 2$ pada titik di mana $x = 2$. [4m]',
          en: 'Find the equation of the normal to the curve $y = x^3 - 4x + 2$ at the point where $x = 2$. [4m]'
        },
        mistakes: {
          bm: ['Menggunakan kecerunan tangen $m_T = 8$ secara terus tanpa menukarnya kepada kecerunan normal $m_N = -\\frac{1}{8}$.'],
          en: ['Using tangent gradient $m_T = 8$ instead of normal gradient $m_N = -\\frac{1}{8}$.']
        },
        scheme: [
          { badge: 'K1', bm: 'Pada $x = 2$, $y = 8 - 8 + 2 = 2$; $\\;\\frac{dy}{dx} = 3x^2 - 4 \\implies m_T = 8 \\implies m_N = -\\frac{1}{8}$.', en: 'Point $(2, 2)$, $m_T = 8 \\implies m_N = -\\frac{1}{8}$.' },
          { badge: 'N1', bm: '$y - 2 = -\\frac{1}{8}(x - 2) \\implies x + 8y - 18 = 0$.', en: '$x + 8y - 18 = 0$.' }
        ]
      },
      {
        code: '2.5', marks: 5,
        topic: { bm: 'Titik Pegun & Sifat Titik Pusingan ($\\frac{d^2y}{dx^2}$)', en: 'Stationary Points & Second-Derivative Nature Test' },
        q: {
          bm: 'Cari koordinat titik-titik pegun bagi lengkung $y = 2x^3 - 9x^2 + 12x + 1$ dan tentukan sifat setiap titik pegun tersebut. [5m]',
          en: 'Find the coordinates of the stationary points of $y = 2x^3 - 9x^2 + 12x + 1$ and determine their nature. [5m]'
        },
        mistakes: {
          bm: ['Terbalik tafsiran terbitan kedua: menyangka $\\frac{d^2y}{dx^2} > 0$ ialah maksimum sedangkan $> 0$ bermaksud lengkung senyum $\\cup$ (**titik minimum**)!'],
          en: ['Reversing the second-derivative test: thinking $\\frac{d^2y}{dx^2} > 0$ is maximum when it is **minimum**!']
        },
        scheme: [
          { badge: 'K1', bm: '$\\frac{dy}{dx} = 6x^2 - 18x + 12 = 0 \\implies 6(x - 1)(x - 2) = 0 \\implies x = 1, 2$.', en: '$6(x - 1)(x - 2) = 0 \\implies x = 1, 2$.' },
          { badge: 'N1', bm: 'Titik pegun ialah $(1, 6)$ dan $(2, 5)$.', en: 'Stationary points $(1, 6)$ and $(2, 5)$.' },
          { badge: 'K1', bm: '$\\frac{d^2y}{dx^2} = 12x - 18$: pada $x = 1,\\; y\'\' = -6 < 0$; pada $x = 2,\\; y\'\' = +6 > 0$.', en: '$y\'\'(1) = -6 < 0$; $\\;y\'\'(2) = +6 > 0$.' },
          { badge: 'N1', bm: '$(1, 6)$ ialah titik maksimum; $(2, 5)$ ialah titik minimum.', en: '$(1, 6)$ is maximum; $(2, 5)$ is minimum.' }
        ]
      },
      {
        code: '2.6', marks: 4,
        topic: { bm: 'Kadar Perubahan Berkaitan Belon Sfera', en: 'Related Rates of Change for a Spherical Balloon' },
        q: {
          bm: 'Sebiji belon sfera diisi udara pada kadar malar $20\\pi\\text{ cm}^3\\text{ s}^{-1}$. Cari kadar perubahan jejari belon pada ketika jejarinya ialah $5\\text{ cm}$. (Isi padu sfera $V = \\frac{4}{3}\\pi r^3$). [4m]',
          en: 'A spherical balloon is inflated at $20\\pi\\text{ cm}^3\\text{ s}^{-1}$. Find the rate of change of its radius when $r = 5\\text{ cm}$ ($V = \\frac{4}{3}\\pi r^3$). [4m]'
        },
        mistakes: {
          bm: ['Mendarab $\\frac{dV}{dt} \\times \\frac{dV}{dr}$ bukannya membahagi $\\frac{dr}{dt} = \\frac{dV/dt}{dV/dr}$.'],
          en: ['Multiplying $\\frac{dV}{dt} \\times \\frac{dV}{dr}$ instead of dividing $\\frac{dr}{dt} = \\frac{dV/dt}{dV/dr}$.']
        },
        scheme: [
          { badge: 'K1', bm: '$\\frac{dV}{dr} = 4\\pi r^2$; pada $r = 5$, $\\frac{dV}{dr} = 100\\pi$.', en: 'At $r = 5$, $\\frac{dV}{dr} = 4\\pi(25) = 100\\pi$.' },
          { badge: 'K1', bm: '$\\frac{dr}{dt} = \\frac{dr}{dV} \\times \\frac{dV}{dt} = \\frac{1}{100\\pi} \\times 20\\pi$.', en: '$\\frac{dr}{dt} = \\frac{20\\pi}{100\\pi}$.' },
          { badge: 'N1', bm: '$0.2\\text{ cm s}^{-1}$ (atau $\\frac{1}{5}\\text{ cm s}^{-1}$).', en: '$0.2\\text{ cm s}^{-1}$.' }
        ]
      },
      {
        code: '2.7', marks: 4,
        topic: { bm: 'Perubahan Kecil dan Penghampiran ($\\delta y \\approx \\frac{dy}{dx}\\delta x$)', en: 'Small Changes & Approximation' },
        q: {
          bm: 'Diberi $y = 3x^2 - 4x$, cari perubahan hampir bagi $y$ apabila $x$ menyusut daripada $5$ kepada $4.98$. [4m]',
          en: 'Given $y = 3x^2 - 4x$, find the approximate change in $y$ when $x$ decreases from $5$ to $4.98$. [4m]'
        },
        mistakes: {
          bm: ['Menggunakan $\\delta x = +0.02$ sedangkan $x$ menyusut ($4.98 - 5 = -0.02$), atau mengira nilai tepat kalkulator bukannya kaedah kalkulus.'],
          en: ['Using $\\delta x = +0.02$ instead of $-0.02$ for a decrease in $x$.']
        },
        scheme: [
          { badge: 'K1', bm: '$\\frac{dy}{dx} = 6x - 4$; pada $x = 5$, $\\frac{dy}{dx} = 26$, dan $\\delta x = 4.98 - 5 = -0.02$.', en: 'At $x = 5$, $\\frac{dy}{dx} = 26$ and $\\delta x = -0.02$.' },
          { badge: 'N1', bm: '$\\delta y \\approx 26(-0.02) = -0.52$.', en: '$\\delta y \\approx -0.52$.' }
        ]
      },
      {
        code: '2.8', marks: 5,
        topic: { bm: 'Pengoptimuman Isi Padu Maksimum Kotak Terbuka', en: 'Optimization: Maximum Volume of an Open Box' },
        q: {
          bm: 'Sekeping kadbod segi empat sama bersisi $24\\text{ cm}$ dipotong empat bucu segi empat sama bersisi $x\\text{ cm}$ lalu dilipat membentuk kotak terbuka. Cari nilai $x$ supaya isi padu kotak adalah maksimum. [5m]',
          en: 'Squares of side $x\\text{ cm}$ are cut from the four corners of a $24\\text{ cm} \\times 24\\text{ cm}$ sheet and folded into an open box. Find $x$ that maximizes volume. [5m]'
        },
        mistakes: {
          bm: ['Menulis lebar tapak kotak sebagai $24 - x$ bukannya $24 - 2x$ (kerana kedua-dua hujung kiri dan kanan dipotong $x$), atau gagal menolak $x = 12$.'],
          en: ['Writing base width as $24 - x$ instead of $24 - 2x$, or failing to reject $x = 12$.']
        },
        scheme: [
          { badge: 'K1', bm: '$V = x(24 - 2x)^2 = 4x^3 - 96x^2 + 576x$.', en: '$V = 4x^3 - 96x^2 + 576x$.' },
          { badge: 'K1', bm: '$\\frac{dV}{dx} = 12x^2 - 192x + 576 = 0 \\implies 12(x - 4)(x - 12) = 0$.', en: '$12(x - 4)(x - 12) = 0$.' },
          { badge: 'N1', bm: 'Tolak $x = 12$ (kerana $24 - 2(12) = 0$); pada $x = 4$, $\\frac{d^2V}{dx^2} = 24(4) - 192 = -96 < 0$, maka $x = 4\\text{ cm}$.', en: '$x = 4\\text{ cm}$ (since $V\'\'(4) = -96 < 0$).' }
        ]
      },
      {
        code: '2.9', marks: 4,
        topic: { bm: 'Kadar Perubahan Aras Air dalam Bekas Kon', en: 'Rate of Change of Water Depth in a Cone' },
        q: {
          bm: 'Sebuah bekas kon terbalik mempunyai jejari atas $6\\text{ cm}$ dan tinggi $18\\text{ cm}$. Air dituang masuk pada kadar $12\\pi\\text{ cm}^3\\text{ s}^{-1}$. Cari kadar kenaikan aras air $\\frac{dh}{dt}$ apabila kedalaman air $h = 9\\text{ cm}$. ($V = \\frac{1}{3}\\pi r^2 h$). [4m]',
          en: 'An inverted cone of top radius $6\\text{ cm}$ and height $18\\text{ cm}$ is filled at $12\\pi\\text{ cm}^3\\text{ s}^{-1}$. Find $\\frac{dh}{dt}$ when depth $h = 9\\text{ cm}$. [4m]'
        },
        mistakes: {
          bm: ['Membezakan $V = \\frac{1}{3}\\pi r^2 h$ dengan menganggap $r$ malar tanpa menggantikan nisbah segi tiga serupa $\\frac{r}{h} = \\frac{6}{18} \\implies r = \\frac{h}{3}$ terlebih dahulu!'],
          en: ['Treating $r$ as constant instead of substituting similar-triangles ratio $r = \\frac{h}{3}$ before differentiating!']
        },
        scheme: [
          { badge: 'K1', bm: 'Segi tiga serupa: $r = \\frac{h}{3} \\implies V = \\frac{1}{3}\\pi\\left(\\frac{h}{3}\\right)^2 h = \\frac{\\pi}{27}h^3$.', en: '$r = \\frac{h}{3} \\implies V = \\frac{\\pi}{27}h^3$.' },
          { badge: 'K1', bm: '$\\frac{dV}{dh} = \\frac{\\pi}{9}h^2$; pada $h = 9$, $\\frac{dV}{dh} = 9\\pi$.', en: 'At $h = 9$, $\\frac{dV}{dh} = 9\\pi$.' },
          { badge: 'N1', bm: '$\\frac{dh}{dt} = \\frac{12\\pi}{9\\pi} = \\frac{4}{3}\\text{ cm s}^{-1}$ ($1.333\\text{ cm s}^{-1}$).', en: '$\\frac{dh}{dt} = \\frac{4}{3}\\text{ cm s}^{-1}$.' }
        ]
      },
      {
        code: '2.10', marks: 3,
        topic: { bm: 'Pengayaan Petua Rantai Fungsi Gubahan', en: 'Chain Rule Composite Function Enrichment' },
        q: {
          bm: 'Menggunakan petua rantai $\\frac{dy}{dx} = \\frac{dy}{du} \\cdot \\frac{du}{dx}$ (diberi $\\frac{d}{du}(\\sin u) = \\cos u$), cari $\\frac{dy}{dx}$ bagi $y = 3\\sin(2x^2 + 1)$. [3m]',
          en: 'Using the chain rule $\\frac{dy}{dx} = \\frac{dy}{du}\\cdot\\frac{du}{dx}$ (given $\\frac{d}{du}(\\sin u) = \\cos u$), find $\\frac{dy}{dx}$ for $y = 3\\sin(2x^2 + 1)$. [3m]'
        },
        mistakes: {
          bm: ['Menulis $3\\cos(2x^2 + 1)$ sahaja dan terlupa mendarab terbitan ungkapan dalaman $\\frac{du}{dx} = 4x$.'],
          en: ['Writing $3\\cos(2x^2 + 1)$ and forgetting to multiply by inner derivative $\\frac{du}{dx} = 4x$.']
        },
        scheme: [
          { badge: 'K1', bm: 'Biar $u = 2x^2 + 1 \\implies \\frac{du}{dx} = 4x$ dan $\\frac{dy}{du} = 3\\cos u$.', en: 'Let $u = 2x^2 + 1 \\implies \\frac{du}{dx} = 4x$ and $\\frac{dy}{du} = 3\\cos u$.' },
          { badge: 'N1', bm: '$\\frac{dy}{dx} = 3\\cos(2x^2 + 1) \\cdot 4x = 12x\\cos(2x^2 + 1)$.', en: '$\\frac{dy}{dx} = 12x\\cos(2x^2 + 1)$.' }
        ]
      }
    ],

    // =========================================================================
    // TINGKATAN 5 BAB 3: PENGAMIRAN (10 SOALAN)
    // =========================================================================
    'f5-c3': [
      {
        code: '3.1', marks: 3,
        topic: { bm: 'Kamiran Tak Tentu Ungkapan Linear Berkuasa', en: 'Indefinite Integral of Linear Power $(ax+b)^n$' },
        q: {
          bm: 'Cari kamiran tak tentu $\\int (3x - 2)^4\\,dx$. [3m]',
          en: 'Find the indefinite integral $\\int (3x - 2)^4\\,dx$. [3m]'
        },
        mistakes: {
          bm: ['Lupa membahagikan dengan pekali dalaman $a = 3$, atau tertinggal pemalar kamiran $+c$ lalu hilang markah akhir!'],
          en: ['Forgetting to divide by inner coefficient $a = 3$, or omitting $+c$!']
        },
        scheme: [
          { badge: 'K1', bm: '$\\frac{(3x - 2)^{4+1}}{(4+1)(3)} + c$.', en: '$\\frac{(3x - 2)^5}{5 \\times 3} + c$.' },
          { badge: 'N1', bm: '$\\frac{(3x - 2)^5}{15} + c$.', en: '$\\frac{(3x - 2)^5}{15} + c$.' }
        ]
      },
      {
        code: '3.2', marks: 4,
        topic: { bm: 'Mencari Persamaan Lengkung daripada Fungsi Kecerunan', en: 'Finding Curve Equation from Gradient Function' },
        q: {
          bm: 'Fungsi kecerunan suatu lengkung diberi oleh $\\frac{dy}{dx} = 4x - 3$. Jika lengkung itu melalui titik $P(2, 5)$, cari persamaan lengkung tersebut. [4m]',
          en: 'A curve has gradient function $\\frac{dy}{dx} = 4x - 3$ and passes through $P(2, 5)$. Find the equation of the curve. [4m]'
        },
        mistakes: {
          bm: ['Tidak meletakkan $+c$ selepas mengamirkan $\\frac{dy}{dx}$ lalu gagal menggunakan maklumat titik $P(2, 5)$.'],
          en: ['Omitting $+c$ when integrating, thus ignoring the condition through $P(2, 5)$.']
        },
        scheme: [
          { badge: 'K1', bm: '$y = \\int (4x - 3)\\,dx = 2x^2 - 3x + c$.', en: '$y = 2x^2 - 3x + c$.' },
          { badge: 'K1', bm: 'Ganti $(2, 5)$: $5 = 2(4) - 3(2) + c \\implies c = 3$.', en: 'Substitute $(2, 5) \\implies c = 3$.' },
          { badge: 'N1', bm: '$y = 2x^2 - 3x + 3$.', en: '$y = 2x^2 - 3x + 3$.' }
        ]
      },
      {
        code: '3.3', marks: 4,
        topic: { bm: 'Luas Rantau di Bawah Lengkung dengan Paksi-$x$', en: 'Area Bounded by a Curve and the $x$-Axis' },
        q: {
          bm: 'Hitung luas rantau yang dibatasi oleh lengkung $y = 6x - x^2$ dan paksi-$x$. [4m]',
          en: 'Calculate the area of the region bounded by the curve $y = 6x - x^2$ and the $x$-axis. [4m]'
        },
        mistakes: {
          bm: ['Gagal mencari had pintasan-$x$ terlebih dahulu dengan menyelesaikan $6x - x^2 = 0$.'],
          en: ['Failing to find the $x$-intercepts $x = 0$ and $x = 6$ first.']
        },
        scheme: [
          { badge: 'K1', bm: 'Pintasan-$x$: $x(6 - x) = 0 \\implies x = 0,\\; 6$.', en: 'Limits: $x = 0,\\; 6$.' },
          { badge: 'K1', bm: '$\\text{Luas} = \\int_0^6 (6x - x^2)\\,dx = \\left[3x^2 - \\frac{x^3}{3}\\right]_0^6 = 108 - 72$.', en: '$\\left[3x^2 - \\frac{x^3}{3}\\right]_0^6 = 108 - 72$.' },
          { badge: 'N1', bm: '$36\\text{ unit}^2$.', en: '$36\\text{ unit}^2$.' }
        ]
      },
      {
        code: '3.4', marks: 4,
        topic: { bm: 'Luas Rantau Bersempadan Paksi-$y$ ($\\int x\\,dy$)', en: 'Area Bounded by the $y$-Axis ($\\int x\\,dy$)' },
        q: {
          bm: 'Cari luas rantau yang dibatasi oleh lengkung $x = y^2 + 1$, paksi-$y$, garis $y = 1$, dan garis $y = 3$. [4m]',
          en: 'Find the area bounded by the curve $x = y^2 + 1$, the $y$-axis, $y = 1$, and $y = 3$. [4m]'
        },
        mistakes: {
          bm: ['Cuba mengamirkan terhadap $dx$ sedangkan sempadan adalah pada paksi-$y$, sepatutnya menggunakan $\\int_1^3 x\\,dy$.'],
          en: ['Attempting $\\int y\\,dx$ instead of integrating with respect to $y$: $\\int_1^3 x\\,dy$.']
        },
        scheme: [
          { badge: 'K1', bm: '$\\text{Luas} = \\int_1^3 (y^2 + 1)\\,dy = \\left[\\frac{y^3}{3} + y\\right]_1^3$.', en: '$\\int_1^3 (y^2 + 1)\\,dy = \\left[\\frac{y^3}{3} + y\\right]_1^3$.' },
          { badge: 'N1', bm: '$(9 + 3) - \\left(\\frac{1}{3} + 1\\right) = \\frac{32}{3}\\text{ unit}^2$ ($10.67\\text{ unit}^2$).', en: '$\\frac{32}{3}\\text{ unit}^2$.' }
        ]
      },
      {
        code: '3.5', marks: 4,
        topic: { bm: 'Isi Padu Kisaran $360^\\circ$ Mengelilingi Paksi-$x$', en: 'Volume of Revolution $360^\\circ$ About the $x$-Axis' },
        q: {
          bm: 'Rantau yang dibatasi oleh lengkung $y = \\sqrt{2x}$, paksi-$x$, dan garis $x = 4$ dikisarkan $360^\\circ$ mengelilingi paksi-$x$. Cari isi padu janaan dalam sebutan $\\pi$. [4m]',
          en: 'The region bounded by $y = \\sqrt{2x}$, the $x$-axis, and $x = 4$ is rotated $360^\\circ$ about the $x$-axis. Find the volume generated in terms of $\\pi$. [4m]'
        },
        mistakes: {
          bm: ['Tertinggal faktor $\\pi$, atau terlupa mengkuasaduakan $y$ dalam rumus $V = \\pi\\int y^2\\,dx$.'],
          en: ['Forgetting $\\pi$, or integrating $y$ instead of $y^2$ in $V = \\pi\\int y^2\\,dx$.']
        },
        scheme: [
          { badge: 'K1', bm: '$V = \\pi\\int_0^4 (\\sqrt{2x})^2\\,dx = \\pi\\int_0^4 2x\\,dx = \\pi[x^2]_0^4$.', en: '$V = \\pi\\int_0^4 2x\\,dx = \\pi[x^2]_0^4$.' },
          { badge: 'N1', bm: '$16\\pi\\text{ unit}^3$.', en: '$16\\pi\\text{ unit}^3$.' }
        ]
      },
      {
        code: '3.6', marks: 5,
        topic: { bm: 'Luas Rantau di Antara Garis Lurus dan Lengkung', en: 'Area Enclosed Between a Line and a Curve' },
        q: {
          bm: 'Cari luas rantau tertutup yang dibatasi oleh lengkung $y = x^2$ dan garis lurus $y = 2x$. [5m]',
          en: 'Find the area of the closed region bounded by the curve $y = x^2$ and the line $y = 2x$. [5m]'
        },
        mistakes: {
          bm: ['Menolak fungsi atas daripada fungsi bawah ($x^2 - 2x$) tanpa mengambil nilai mutlak, atau tersilap titik persilangan.'],
          en: ['Subtracting top from bottom without modulus, or miscalculating intersection limits.']
        },
        scheme: [
          { badge: 'K1', bm: 'Persilangan: $x^2 = 2x \\implies x(x - 2) = 0 \\implies x = 0,\\; 2$.', en: 'Intersections: $x = 0,\\; 2$.' },
          { badge: 'K1', bm: '$\\text{Luas} = \\int_0^2 (2x - x^2)\\,dx = \\left[x^2 - \\frac{x^3}{3}\\right]_0^2$.', en: '$\\int_0^2 (2x - x^2)\\,dx = \\left[x^2 - \\frac{x^3}{3}\\right]_0^2$.' },
          { badge: 'N1', bm: '$4 - \\frac{8}{3} = \\frac{4}{3}\\text{ unit}^2$.', en: '$\\frac{4}{3}\\text{ unit}^2$.' }
        ]
      },
      {
        code: '3.7', marks: 4,
        topic: { bm: 'Isi Padu Kisaran $360^\\circ$ Mengelilingi Paksi-$y$', en: 'Volume of Revolution $360^\\circ$ About the $y$-Axis' },
        q: {
          bm: 'Rantau pada sukuan pertama yang dibatasi oleh $y = x^2$, paksi-$y$, dan garis $y = 4$ dikisarkan $360^\\circ$ mengelilingi paksi-$y$. Cari isi padu janaan dalam sebutan $\\pi$. [4m]',
          en: 'The first-quadrant region bounded by $y = x^2$, the $y$-axis, and $y = 4$ is rotated $360^\\circ$ about the $y$-axis. Find the volume in terms of $\\pi$. [4m]'
        },
        mistakes: {
          bm: ['Mengamirkan $\\pi\\int_0^4 (x^2)^2\\,dy$ bukannya menukar perkara rumus kepada $x^2 = y$ untuk $V = \\pi\\int_0^4 x^2\\,dy$.'],
          en: ['Squaring $y$ again instead of substituting $x^2 = y$ directly into $V = \\pi\\int_0^4 x^2\\,dy$.']
        },
        scheme: [
          { badge: 'K1', bm: '$V = \\pi\\int_0^4 x^2\\,dy = \\pi\\int_0^4 y\\,dy = \\pi\\left[\\frac{y^2}{2}\\right]_0^4$.', en: '$V = \\pi\\int_0^4 y\\,dy = \\pi\\left[\\frac{y^2}{2}\\right]_0^4$.' },
          { badge: 'N1', bm: '$8\\pi\\text{ unit}^3$.', en: '$8\\pi\\text{ unit}^3$.' }
        ]
      },
      {
        code: '3.8', marks: 3,
        topic: { bm: 'Sifat Operasi & Gabungan Had Kamiran Tentu', en: 'Additivity & Linearity Properties of Definite Integrals' },
        q: {
          bm: 'Diberi $\\int_1^5 f(x)\\,dx = 8$ dan $\\int_1^3 f(x)\\,dx = 3$, cari nilai bagi $\\int_3^5 [2f(x) - 1]\\,dx$. [3m]',
          en: 'Given $\\int_1^5 f(x)\\,dx = 8$ and $\\int_1^3 f(x)\\,dx = 3$, evaluate $\\int_3^5 [2f(x) - 1]\\,dx$. [3m]'
        },
        mistakes: {
          bm: ['Menolak nombor $1$ begitu sahaja ($2(5) - 1 = 9$) tanpa mengamirkan pemalar $1$ terhadap $x$ pada selang $[3, 5]$ iaitu $[x]_3^5 = 2$!'],
          en: ['Subtracting $1$ directly ($10 - 1 = 9$) instead of integrating $\\int_3^5 1\\,dx = 5 - 3 = 2$!']
        },
        scheme: [
          { badge: 'K1', bm: '$\\int_3^5 f(x)\\,dx = 8 - 3 = 5$; maka $2(5) - [x]_3^5 = 10 - (5 - 3)$.', en: '$2(8 - 3) - [x]_3^5 = 10 - 2$.' },
          { badge: 'N1', bm: '$8$.', en: '$8$.' }
        ]
      },
      {
        code: '3.9', marks: 3,
        topic: { bm: 'Pengayaan Kamiran Salingan & Logaritma Asli', en: 'Reciprocal Integral Enrichment' },
        q: {
          bm: 'Diberi $\\frac{d}{dx}(\\ln x) = \\frac{1}{x}$ bagi $x > 0$, nilaikan $\\int_1^4 \\frac{3}{x}\\,dx$ dalam sebutan $\\ln$. [3m]',
          en: 'Given $\\frac{d}{dx}(\\ln x) = \\frac{1}{x}$ for $x > 0$, evaluate $\\int_1^4 \\frac{3}{x}\\,dx$ in terms of $\\ln$. [3m]'
        },
        mistakes: {
          bm: ['Cuba menggunakan petua kuasa pada $3x^{-1}$ lalu mendapat pembahagian sifar $\\frac{3x^0}{0}$.'],
          en: ['Applying power rule to $3x^{-1}$ and dividing by zero ($\\frac{3x^0}{0}$).']
        },
        scheme: [
          { badge: 'K1', bm: '$[3\\ln x]_1^4 = 3\\ln 4 - 3\\ln 1$.', en: '$[3\\ln x]_1^4 = 3\\ln 4 - 0$.' },
          { badge: 'N1', bm: '$3\\ln 4$ (atau $6\\ln 2$ atau $\\ln 64$).', en: '$3\\ln 4$ (or $\\ln 64$).' }
        ]
      },
      {
        code: '3.10', marks: 4,
        topic: { bm: 'Luas Rantau di Bawah Paksi-$x$ (Nilai Mutlak)', en: 'Area Below the $x$-Axis (Absolute Value)' },
        q: {
          bm: 'Hitung luas rantau yang dibatasi oleh lengkung $y = x^2 - 4$, paksi-$x$, garis $x = 0$, dan garis $x = 2$. [4m]',
          en: 'Calculate the area bounded by $y = x^2 - 4$, the $x$-axis, $x = 0$, and $x = 2$. [4m]'
        },
        mistakes: {
          bm: ['Meninggalkan jawapan akhir luas sebagai nilai negatif $-\\frac{16}{3}$ kerana rantau berada di bawah paksi-$x$.'],
          en: ['Leaving the final area negative ($-\\frac{16}{3}$) because the curve lies below the $x$-axis.']
        },
        scheme: [
          { badge: 'K1', bm: '$\\int_0^2 (x^2 - 4)\\,dx = \\left[\\frac{x^3}{3} - 4x\\right]_0^2 = \\frac{8}{3} - 8 = -\\frac{16}{3}$.', en: '$\\int_0^2 (x^2 - 4)\\,dx = -\\frac{16}{3}$.' },
          { badge: 'N1', bm: '$\\text{Luas} = \\left|-\\frac{16}{3}\\right| = \\frac{16}{3}\\text{ unit}^2$ ($5.333\\text{ unit}^2$).', en: '$\\text{Area} = \\frac{16}{3}\\text{ unit}^2$.' }
        ]
      }
    ],

    // =========================================================================
    // TINGKATAN 5 BAB 4: PILIH ATUR DAN GABUNGAN (10 SOALAN)
    // =========================================================================
    'f5-c4': [
      {
        code: '4.1', marks: 4,
        topic: { bm: 'Pilih Atur dengan Syarat Duduk Bersebelahan', en: 'Permutations with Adjacent / Grouped Objects' },
        q: {
          bm: 'Cari bilangan cara menyusun $4$ orang murid lelaki dan $2$ orang murid perempuan dalam satu barisan jika kedua-dua murid perempuan mesti duduk bersebelahan. [4m]',
          en: 'Find the number of ways to arrange $4$ boys and $2$ girls in a row if the $2$ girls must sit next to each other. [4m]'
        },
        mistakes: {
          bm: ['Mengikat $2$ perempuan sebagai $1$ blok lalu mengira $5! = 120$ sahaja tanpa mendarab susunan dalaman $2!$ bagi kedua-dua perempuan itu.'],
          en: ['Computing $5! = 120$ for the grouped block while forgetting the internal $2!$ swap of the two girls.']
        },
        scheme: [
          { badge: 'K1', bm: 'Ikat $2$ perempuan sebagai $1$ unit $\\implies 5$ unit disusun dalam $5!$ cara, darab susunan dalaman $2!$.', en: '$5! \\times 2!$.' },
          { badge: 'N1', bm: '$120 \\times 2 = 240$ cara.', en: '$240$ ways.' }
        ]
      },
      {
        code: '4.2', marks: 3,
        topic: { bm: 'Pilih Atur Perkataan dengan Huruf Sama Berulang', en: 'Permutations of Letters with Identical Objects' },
        q: {
          bm: 'Cari bilangan susunan berbeza menggunakan semua huruf daripada perkataan $\\text{"KEJAYAAN"}$. [3m]',
          en: 'Find the number of distinct arrangements of all letters in the word $\\text{"KEJAYAAN"}$. [3m]'
        },
        mistakes: {
          bm: ['Menulis $8! = 40320$ tanpa membahagikan dengan $3!$ bagi $3$ huruf $\\text{A}$ yang sama (berulang).'],
          en: ['Writing $8!$ without dividing by $3!$ for the $3$ identical letter $\\text{A}$\'s.']
        },
        scheme: [
          { badge: 'K1', bm: '$8$ huruf dengan $3$ huruf $\\text{A}$ yang sama (berulang): $\\frac{8!}{3!}$.', en: '$\\frac{8!}{3!}$.' },
          { badge: 'N1', bm: '$6720$ susunan.', en: '$6720$ arrangements.' }
        ]
      },
      {
        code: '4.3', marks: 4,
        topic: { bm: 'Kod Empat Digit Genap Tanpa Ulangan', en: 'Four-Digit Even Codes Without Repetition' },
        q: {
          bm: 'Berapakah bilangan kod $4$-digit bernombor genap yang boleh dibentuk daripada digit-digit $\\{1, 2, 3, 5, 7, 8\\}$ tanpa ulangan digit? [4m]',
          en: 'How many $4$-digit even codes can be formed from digits $\\{1, 2, 3, 5, 7, 8\\}$ without repetition? [4m]'
        },
        mistakes: {
          bm: ['Mengisi tempat pertama dahulu sebelum mengunci tempat terakhir yang bersyarat genap ($\\{2, 8\\}$).'],
          en: ['Filling the first slot before locking the restricted last digit ($\\{2, 8\\}$).']
        },
        scheme: [
          { badge: 'K1', bm: 'Digit terakhir genap ada $2$ pilihan ($2$ atau $8$); baki $3$ tempat diisi daripada $5$ digit: $^5P_3 \\times 2$.', en: '$^5P_3 \\times 2 = 60 \\times 2$.' },
          { badge: 'N1', bm: '$120$ kod.', en: '$120$ codes.' }
        ]
      },
      {
        code: '4.4', marks: 4,
        topic: { bm: 'Gabungan Pemilihan Jawatankuasa Bersyarat Tepat', en: 'Committee Selection with Exact Subgroup Count' },
        q: {
          bm: 'Sebuah jawatankuasa terdiri daripada $5$ orang ahli hendak dipilih daripada $6$ orang guru dan $5$ orang pengawas. Cari bilangan cara pemilihan jika jawatankuasa mesti mengandungi tepat $3$ orang guru. [4m]',
          en: 'A committee of $5$ is chosen from $6$ teachers and $5$ prefects. Find the number of ways if it must contain exactly $3$ teachers. [4m]'
        },
        mistakes: {
          bm: ['Menggunakan pilih atur $^nP_r$ sedangkan pemilihan ahli jawatankuasa tanpa jawatan tidak mementingkan susunan/pangkat ($^nC_r$), atau menambah $^6C_3 + \\,^5C_2$ bukannya mendarab.'],
          en: ['Using $^nP_r$ instead of $^nC_r$, or adding $^6C_3 + \\,^5C_2$ instead of multiplying.']
        },
        scheme: [
          { badge: 'K1', bm: 'Pilih $3$ guru dan $2$ pengawas: $^6C_3 \\times \\,^5C_2 = 20 \\times 10$.', en: '$^6C_3 \\times \\,^5C_2 = 20 \\times 10$.' },
          { badge: 'N1', bm: '$200$ cara.', en: '$200$ ways.' }
        ]
      },
      {
        code: '4.5', marks: 4,
        topic: { bm: 'Gabungan Bersyarat "Sekurang-kurangnya"', en: 'Combinations with "At Least" Condition' },
        q: {
          bm: 'Satu pasukan debat $4$ orang dipilih daripada $5$ murid lelaki dan $4$ murid perempuan. Cari bilangan cara pemilihan jika sekurang-kurangnya $3$ orang murid perempuan mesti dipilih. [4m]',
          en: 'A debate team of $4$ is chosen from $5$ boys and $4$ girls. Find the number of ways if at least $3$ girls must be selected. [4m]'
        },
        mistakes: {
          bm: ['Hanya mengira kes tepat $3$ perempuan dan terlupa menambah kes $4$ perempuan ($0$ lelaki).'],
          en: ['Counting only $3$ girls and forgetting the $4$-girls ($0$-boys) case.']
        },
        scheme: [
          { badge: 'K1', bm: 'Kes 1 ($3$P, $1$L) $+$ Kes 2 ($4$P, $0$L) $= \\,^4C_3 \\times \\,^5C_1 + \\,^4C_4 \\times \\,^5C_0 = 20 + 1$.', en: '$^4C_3\\,^5C_1 + \\,^4C_4\\,^5C_0 = 20 + 1$.' },
          { badge: 'N1', bm: '$21$ cara.', en: '$21$ ways.' }
        ]
      },
      {
        code: '4.6', marks: 3,
        topic: { bm: 'Pilih Atur Membulat Meja Bulat', en: 'Circular Permutations Around a Round Table' },
        q: {
          bm: 'Cari bilangan cara menyusun $6$ orang tetamu duduk mengelilingi sebuah meja bulat. [3m]',
          en: 'Find the number of ways to seat $6$ guests around a circular table. [3m]'
        },
        mistakes: {
          bm: ['Mengira $6! = 720$ seperti susunan sebaris tanpa menetapkan satu kedudukan rujukan $(n - 1)!$.'],
          en: ['Computing $6! = 720$ instead of $(6 - 1)!$ for rotational equivalence.']
        },
        scheme: [
          { badge: 'K1', bm: '$(6 - 1)! = 5!$.', en: '$(6 - 1)! = 5!$.' },
          { badge: 'N1', bm: '$120$ cara.', en: '$120$ ways.' }
        ]
      },
      {
        code: '4.7', marks: 4,
        topic: { bm: 'Pilih Atur Membulat dengan Syarat Duduk Bersama', en: 'Circular Permutation with Adjacent Pair' },
        q: {
          bm: 'Enam orang rakan duduk mengelilingi meja bulat. Cari bilangan susunan jika dua orang sahabat karib tertentu mesti duduk bersebelahan. [4m]',
          en: 'Six friends sit around a round table. Find the number of arrangements if two specific best friends must sit next to each other. [4m]'
        },
        mistakes: {
          bm: ['Menulis $(5 - 1)! = 24$ sahaja tanpa mendarab pertukaran tempat $2!$ bagi dua sahabat karib tersebut.'],
          en: ['Writing $(5 - 1)! = 24$ without multiplying by $2!$ for the adjacent pair.']
        },
        scheme: [
          { badge: 'K1', bm: 'Ikat $2$ sahabat menjadi $1$ kumpulan $\\implies 5$ kumpulan disusun membulat: $(5 - 1)! \\times 2! = 4! \\times 2!$.', en: '$(5 - 1)! \\times 2! = 24 \\times 2$.' },
          { badge: 'N1', bm: '$48$ susunan.', en: '$48$ arrangements.' }
        ]
      },
      {
        code: '4.8', marks: 4,
        topic: { bm: 'Nombor Empat Digit Lebih Besar daripada $5000$', en: 'Four-Digit Numbers Greater Than $5000$' },
        q: {
          bm: 'Berapakah bilangan nombor $4$-digit yang lebih besar daripada $5000$ boleh dibentuk daripada digit $\\{2, 4, 5, 7, 9\\}$ tanpa ulangan? [4m]',
          en: 'How many $4$-digit numbers greater than $5000$ can be formed from digits $\\{2, 4, 5, 7, 9\\}$ without repetition? [4m]'
        },
        mistakes: {
          bm: ['Tidak memasukkan digit $5$ sebagai pilihan sah bagi tempat ribu (sebarang nombor bermula $5$ daripada set ini seperti $5247$ memang $> 5000$!).'],
          en: ['Excluding leading digit $5$ when any $4$-digit number starting with $5, 7,$ or $9$ here exceeds $5000$.']
        },
        scheme: [
          { badge: 'K1', bm: 'Digit pertama ada $3$ pilihan ($\\{5, 7, 9\\}$); baki $3$ tempat dipilih daripada $4$ digit: $3 \\times \\,^4P_3$.', en: '$3 \\times \\,^4P_3 = 3 \\times 24$.' },
          { badge: 'N1', bm: '$72$ nombor.', en: '$72$ numbers.' }
        ]
      },
      {
        code: '4.9', marks: 4,
        topic: { bm: 'Gabungan Geometri: Garis Lurus & Segi Tiga daripada Titik Bulatan', en: 'Geometric Combinations: Lines & Triangles from Points' },
        q: {
          bm: 'Lapan titik berbeza ditandakan pada lilitan sebuah bulatan. Cari bilangan (a) garis lurus (perentas), dan (b) segi tiga yang boleh dibentuk dengan menyambungkan titik-titik itu. [4m]',
          en: 'Eight distinct points lie on the circumference of a circle. Find the number of (a) straight lines, and (b) triangles formed by joining the points. [4m]'
        },
        mistakes: {
          bm: ['Menggunakan $^8P_2$ dan $^8P_3$ lalu mengira garis $AB$ dan $BA$ sebagai dua garis berbeza!'],
          en: ['Using $^8P_2$ and $^8P_3$, double-counting line $AB$ and $BA$!']
        },
        scheme: [
          { badge: 'K1', bm: '(a) Garis lurus $= \\,^8C_2$; $\\;$(b) Segi tiga $= \\,^8C_3$.', en: '(a) $^8C_2$; $\\;$(b) $^8C_3$.' },
          { badge: 'N1', bm: '(a) $28$ garis lurus; $\\;$(b) $56$ segi tiga.', en: '(a) $28$ lines; $\\;$(b) $56$ triangles.' }
        ]
      },
      {
        code: '4.10', marks: 4,
        topic: { bm: 'Kaedah Pelengkap Objek Tidak Bersebelahan', en: 'Complement / Gap Method for Separated Objects' },
        q: {
          bm: '$5$ buah buku Matematik berbeza dan $2$ buah buku Sains berbeza disusun sebaris di atas rak. Cari bilangan susunan jika kedua-dua buku Sains **tidak boleh** bersebelahan. [4m]',
          en: '$5$ distinct Math books and $2$ distinct Science books are arranged in a row. Find the number of ways if the $2$ Science books **must not** be adjacent. [4m]'
        },
        mistakes: {
          bm: ['Menolak $6!$ sahaja daripada $7!$ tanpa mendarab $2!$ pada kes buku Sains bersebelahan ($7! - 6! \\times 2!$).'],
          en: ['Subtracting $6!$ instead of $6! \\times 2!$ from total $7!$.']
        },
        scheme: [
          { badge: 'K1', bm: 'Jumlah semua susunan tolak kes Sains bersebelahan: $7! - (6! \\times 2!) = 5040 - 1440$ (atau kaedah selang: $5! \\times \\,^6P_2$).', en: '$7! - 6!\\times 2! = 5040 - 1440$.' },
          { badge: 'N1', bm: '$3600$ susunan.', en: '$3600$ arrangements.' }
        ]
      }
    ]
  });
})(window.AddMathApp);
