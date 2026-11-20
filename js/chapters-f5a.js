/**
 * AddMath Mudah — Fasa 3: Tingkatan 5 Bab 1 hingga Bab 4 (Lengkap & Dwibahasa BM / EN)
 * Bab 1: Sukatan Membulat | Bab 2: Pembezaan | Bab 3: Pengamiran | Bab 4: Pilih Atur & Gabungan
 */
window.AddMathApp = window.AddMathApp || {};
window.AddMathApp.chapters = window.AddMathApp.chapters || [];

(function (App) {
  'use strict';
  const U = App.utils;

  const finiteNum = (val, fallback) => {
    if (val === null || val === undefined || String(val).trim() === '') return fallback;
    const n = Number(val);
    return Number.isFinite(n) ? n : fallback;
  };

  function antiderivPolyTex(p, q, r) {
    const specs = [
      { num: p, den: 3, pow: 3 },
      { num: q, den: 2, pow: 2 },
      { num: r, den: 1, pow: 1 }
    ];
    const parts = [];
    specs.forEach(({ num, den, pow }) => {
      if (!Number.isFinite(num) || Math.abs(num) < 1e-9) return;
      const val = num / den;
      const isFirst = parts.length === 0;
      const sign = val < 0 ? (isFirst ? '-' : ' - ') : (isFirst ? '' : ' + ');
      const absNum = Math.abs(num);
      const absVal = Math.abs(val);
      let coeffStr = '';
      if (Number.isInteger(num) && Number.isInteger(den)) {
        const g = U.gcd(absNum, den);
        const sn = absNum / g;
        const sd = den / g;
        coeffStr = sd === 1 ? (sn === 1 ? '' : String(sn)) : `\\frac{${sn}}{${sd}}`;
      } else {
        coeffStr = Math.abs(U.round(absVal, 4) - 1) < 1e-9 ? '' : U.roundStr(absVal, 4);
      }
      const varPart = pow === 1 ? 'x' : `x^{${pow}}`;
      parts.push(sign + coeffStr + varPart);
    });
    return parts.length ? parts.join('') : '0';
  }

  function formatSignedTermVal(val, isFirst) {
    const absStr = U.roundStr(Math.abs(val), 4);
    if (isFirst) return val < 0 ? `-${absStr}` : absStr;
    return val < 0 ? ` - ${absStr}` : ` + ${absStr}`;
  }

  function evalAntiderivSubTex(p, q, r, xVal) {
    const specs = [
      { num: p, den: 3, pow: 3 },
      { num: q, den: 2, pow: 2 },
      { num: r, den: 1, pow: 1 }
    ];
    const subParts = [];
    const valParts = [];
    let total = 0;
    specs.forEach(({ num, den, pow }) => {
      if (!Number.isFinite(num) || Math.abs(num) < 1e-9) return;
      const coeff = num / den;
      const termVal = coeff * Math.pow(xVal, pow);
      total += termVal;
      const isFirst = subParts.length === 0;
      const sign = coeff < 0 ? (isFirst ? '-' : ' - ') : (isFirst ? '' : ' + ');
      const absNum = Math.abs(num);
      const absCoeff = Math.abs(coeff);
      let coeffStr = '';
      if (Number.isInteger(num) && Number.isInteger(den)) {
        const g = U.gcd(absNum, den);
        const sn = absNum / g;
        const sd = den / g;
        coeffStr = sd === 1 ? (sn === 1 ? '' : String(sn)) : `\\frac{${sn}}{${sd}}`;
      } else {
        coeffStr = Math.abs(U.round(absCoeff, 4) - 1) < 1e-9 ? '' : U.roundStr(absCoeff, 4);
      }
      const xStr = U.roundStr(xVal, 4);
      const xPart = pow === 1 ? `(${xStr})` : `(${xStr})^{${pow}}`;
      subParts.push(sign + coeffStr + xPart);
      valParts.push(formatSignedTermVal(termVal, valParts.length === 0));
    });
    if (!subParts.length) return '0';
    const subExpr = subParts.join('');
    const valExpr = valParts.join('');
    const totalStr = U.roundStr(total, 4);
    return valParts.length === 1 && valExpr === totalStr
      ? `${subExpr} = ${totalStr}`
      : `${subExpr} = ${valExpr} = ${totalStr}`;
  }

  const f5Stage3 = [
    // =========================================================================
    // FORM 5 CHAPTER 1: CIRCULAR MEASURE / SUKATAN MEMBULAT
    // =========================================================================
    {
      id: 'f5-c1',
      stage: 3,
      unlocked: true,
      form: 5,
      num: 1,
      code: { bm: 'T5 • Bab 1', en: 'F5 • Ch 1' },
      icon: 'rθ',
      color: '#f97316',
      category: 'geometri',
      title: { bm: 'Sukatan Membulat', en: 'Circular Measure' },
      subtitle: {
        bm: 'Radian, panjang lengkok s = rθ, perimeter sektor, luas sektor, tembereng, perentas & tangen',
        en: 'Radians, arc length s = rθ, sector perimeter, sector & segment area, chords & tangents'
      },
      spmWeight: { bm: 'Kertas 1 & Kertas 2 (7–10 markah)', en: 'Paper 1 & Paper 2 (7–10 marks)' },
      concepts: [
        {
          title: { bm: '1. Radian, Penukaran Sudut & Panjang Lengkok s = rθ', en: '1. Radians, Angle Conversion & Arc Length s = rθ' },
          prereq: {
            bm: 'Ingat semula lilitan bulatan Tingkatan 2: $C = 2\\pi r$, dan panjang lengkok ialah pecahan $\\frac{\\theta^\\circ}{360^\\circ} \\times 2\\pi r$.\n🍕 **Analogi Sepotong Piza**: Bayangkan sepotong piza yang **kerak melengkungnya ($s$)** sama panjang tepat dengan **sisi lurusnya ($r$)**. Bukaan sudut di pusat itu ialah **$1\\text{ rad} \\approx 57.3^\\circ$**! Separuh bulatan penuh ($180^\\circ$) ialah $\\pi\\text{ rad}$, manakala satu pusingan penuh ($360^\\circ$) ialah $2\\pi\\text{ rad}$.',
            en: 'Recall Form 2 circumference: $C = 2\\pi r$, where an arc is the fraction $\\frac{\\theta^\\circ}{360^\\circ} \\times 2\\pi r$.\n🍕 **Pizza Slice Analogy**: Imagine a pizza slice whose **curved crust ($s$)** is the exact same length as its **straight side ($r$)**. That centre angle is **$1\\text{ rad} \\approx 57.3^\\circ$**! Half a circle ($180^\\circ$) equals $\\pi\\text{ rad}$, and a full circle ($360^\\circ$) equals $2\\pi\\text{ rad}$.'
          },
          body: {
            bm: 'Apabila $\\theta$ diukur dalam radian, pecahan bulatan menjadi $\\frac{\\theta}{2\\pi}$, maka lilitan $\\frac{\\theta}{2\\pi} \\times 2\\pi r$ terus memotong $2\\pi$ dan tinggal rumus ringkas **$s = r\\theta$**! Sebab itulah **semua rumus sukatan membulat WAJIB menggunakan $\\theta$ dalam radian**.\n📌 **Kamus KSSM/DLP**: **Lengkok Minor / Major** (*Minor / Major Arc*) ialah lengkok kecil vs lengkok besar ($\\theta_{\\text{major}} = 2\\pi - \\theta_{\\text{minor}}$); **Perentas** (*Chord*) ialah garis lurus yang menyambungkan dua titik pada lilitan; **Perimeter Sektor** mestilah mengira **semua sempadan luar**: lengkok $s$ tambah **dua jejari ($2r$)**!',
            en: 'When $\\theta$ is measured in radians, the circle fraction is $\\frac{\\theta}{2\\pi}$, so $\\frac{\\theta}{2\\pi} \\times 2\\pi r$ cancels $2\\pi$ cleanly to give **$s = r\\theta$**! That is why **every circular measure formula MUST use $\\theta$ in radians**.\n📌 **KSSM/DLP Terms**: **Minor / Major Arc** is the shorter vs longer arc ($\\theta_{\\text{major}} = 2\\pi - \\theta_{\\text{minor}}$); **Chord** is the straight line joining two points on the circumference; **Sector Perimeter** must trace **every outer edge**: arc $s$ plus **both straight radii ($2r$)**!'
          },
          firstStep: {
            bm: '1. Semak sama ada sudut diberi dalam **darjah ($^\\circ$)** atau **radian ($\\text{rad}$)**.\n2. Jika dalam darjah, tukar dahulu: $\\theta = \\theta^\\circ \\times \\frac{\\pi}{180^\\circ}$ (guna nilai $\\pi = 3.142$ jika soalan nyatakan!).\n3. Untuk **perimeter**, lakar dan surih setiap sempadan dengan jari: $P_{\\text{sektor}} = s + 2r$ (sektor) atau $P_{\\text{temb}} = s + AB$ (tembereng).',
            en: '1. Check whether the angle is given in **degrees ($^\\circ$)** or **radians ($\\text{rad}$)**.\n2. If in degrees, convert first: $\\theta = \\theta^\\circ \\times \\frac{\\pi}{180^\\circ}$ (use $\\pi = 3.142$ whenever stated in the question!).\n3. For **perimeter**, sketch and trace every outer boundary with your finger: $P_{\\text{sector}} = s + 2r$ (sector) or $P_{\\text{seg}} = s + AB$ (segment).'
          },
          formulas: [
            {
              label: { bm: 'Penukaran Darjah ↔ Radian', en: 'Degree ↔ Radian Conversion' },
              tex: {
                bm: '\\pi\\text{ rad} = 180^\\circ \\implies \\text{rad} = \\text{darjah} \\times \\frac{\\pi}{180^\\circ}',
                en: '\\pi\\text{ rad} = 180^\\circ \\implies \\text{rad} = \\text{degrees} \\times \\frac{\\pi}{180^\\circ}'
              }
            },
            {
              label: { bm: 'Panjang Lengkok, Perentas & Perimeter Sektor', en: 'Arc Length, Chord & Sector Perimeter' },
              tex: {
                bm: 's = r\\theta, \\qquad \\text{Perentas } AB = 2r\\sin\\left(\\frac{\\theta}{2}\\right), \\qquad P_{\\text{sektor}} = 2r + r\\theta',
                en: 's = r\\theta, \\qquad \\text{Chord } AB = 2r\\sin\\left(\\frac{\\theta}{2}\\right), \\qquad P_{\\text{sector}} = 2r + r\\theta'
              }
            }
          ],
          workedExample: {
            title: { bm: 'Contoh Dibimbing: Sektor Minor daripada Sudut Refleks', en: 'Worked Example: Minor Sector from a Reflex Angle' },
            problem: {
              bm: 'Sebuah sektor minor $OAB$ berjejari $r = 10\\text{ cm}$ mempunyai sudut refleks (major) pada pusat $O$ bernilai $240^\\circ$. Menggunakan $\\pi = 3.142$, cari **perimeter sektor minor $OAB$**.',
              en: 'A minor sector $OAB$ of radius $r = 10\\text{ cm}$ has a reflex (major) angle of $240^\\circ$ at centre $O$. Using $\\pi = 3.142$, find the **perimeter of the minor sector $OAB$**.'
            },
            steps: [
              {
                label: { bm: 'Langkah 1: Cari sudut sektor minor dalam darjah', en: 'Step 1: Find the minor sector angle in degrees' },
                tex: '\\theta^\\circ = 360^\\circ - 240^\\circ = 120^\\circ',
                why: { bm: 'Satu bulatan penuh ialah $360^\\circ$, dan sektor minor menggunakan sudut yang kurang daripada $180^\\circ$.', en: 'A full circle is $360^\\circ$, and the minor sector uses the smaller angle ($< 180^\\circ$).' }
              },
              {
                label: { bm: 'Langkah 2: Tukar $120^\\circ$ kepada radian ($\\pi = 3.142$)', en: 'Step 2: Convert $120^\\circ$ to radians ($\\pi = 3.142$)' },
                tex: '\\theta = 120^\\circ \\times \\frac{3.142}{180^\\circ} = 2.0947\\text{ rad}',
                why: { bm: 'Rumus $s = r\\theta$ hanya sah apabila $\\theta$ dalam radian.', en: 'The formula $s = r\\theta$ only works when $\\theta$ is in radians.' }
              },
              {
                label: { bm: 'Langkah 3: Kira panjang lengkok minor $s$', en: 'Step 3: Compute the minor arc length $s$' },
                tex: 's = r\\theta = 10(2.0947) = 20.947\\text{ cm}',
                why: { bm: 'Simpan sekurang-kurangnya $4$ angka bererti pada langkah pertengahan supaya pembundaran akhir tepat.', en: 'Keep at least $4$ significant figures in intermediate steps to avoid rounding drift.' }
              },
              {
                label: { bm: 'Langkah 4: Jumlahkan lengkok dan kedua-dua jejari', en: 'Step 4: Sum the arc and both radii' },
                tex: 'P = s + 2r = 20.947 + 2(10) = 20.947 + 20 = 40.95\\text{ cm}',
                why: { bm: 'Sektor $OAB$ dibatasi oleh lengkok $AB$ serta jejari $OA$ dan jejari $OB$.', en: 'Sector $OAB$ is enclosed by arc $AB$ plus straight radii $OA$ and $OB$.' }
              }
            ],
            trap: {
              bm: 'Jangan masukkan $240^\\circ$ atau $120$ terus ke dalam $s = r\\theta$, dan jangan berhenti pada $s = 20.95\\text{ cm}$ tanpa menambah $+ 2r = 20$!',
              en: 'Never plug $240^\\circ$ or $120$ straight into $s = r\\theta$, and never stop at $s = 20.95\\text{ cm}$ without adding $+ 2r = 20$!'
            }
          },
          tip: {
            bm: 'Gunakan nilai π yang dinyatakan oleh soalan (contohnya π = 3.142) supaya markah jawapan akhir [J1] tepat ke 4 angka bererti!',
            en: 'Use the exact π value stated in the question (e.g. π = 3.142) so your [J1] accuracy mark matches the SPM scheme!'
          }
        },
        {
          title: { bm: '2. Luas Sektor, Sektor Sepusat & Tembereng Berlorek', en: '2. Area of Sector, Concentric Sectors & Shaded Segment' },
          prereq: {
            bm: 'Daripada luas bulatan $\\pi r^2$, pecahan sektor memberi $\\frac{\\theta}{2\\pi} \\times \\pi r^2 = \\frac{1}{2}r^2\\theta$. Daripada bab Penyelesaian Segi Tiga pula, luas $\\triangle OAB = \\frac{1}{2}ab\\sin C = \\frac{1}{2}r^2\\sin\\theta$.\n🍉 **Model Potong Tembikai**: Tembereng berlorek ialah **hujung sepotong tembikai** selepas bahagian segi tiga $\\triangle OAB$ dipotong buang!',
            en: 'From circle area $\\pi r^2$, a sector fraction gives $\\frac{\\theta}{2\\pi} \\times \\pi r^2 = \\frac{1}{2}r^2\\theta$. From Solution of Triangles, $\\triangle OAB$ has area $\\frac{1}{2}ab\\sin C = \\frac{1}{2}r^2\\sin\\theta$.\n🍉 **Watermelon Slice Model**: A shaded segment is just the **curved rind tip** left after slicing off triangle $\\triangle OAB$!'
          },
          body: {
            bm: 'Untuk mencari luas tembereng berlorek, kira **Luas Sektor** ($\\frac{1}{2}r^2\\theta$) tolak **Luas Segi Tiga** ($\\frac{1}{2}r^2\\sin\\theta$).\n💍 **Sektor Sepusat (Cincin)**: Jika ada dua lengkok sepusat berjejari besar $R$ dan kecil $r$, tolak luas sektor besar dengan sektor kecil: $\\frac{1}{2}R^2\\theta - \\frac{1}{2}r^2\\theta = \\frac{1}{2}(R^2 - r^2)\\theta$ (**BUKAN** $(R - r)^2$!).\n🧮 **Amaran Mod [R]**: Apabila menekan $\\sin\\theta$ untuk sudut radian, skrin kalkulator **WAJIB menunjukkan [R]**!',
            en: 'To find a shaded segment area, compute **Sector Area** ($\\frac{1}{2}r^2\\theta$) minus **Triangle Area** ($\\frac{1}{2}r^2\\sin\\theta$).\n💍 **Concentric Sectors (Annulus)**: For two concentric arcs of outer radius $R$ and inner radius $r$, subtract outer minus inner sector: $\\frac{1}{2}R^2\\theta - \\frac{1}{2}r^2\\theta = \\frac{1}{2}(R^2 - r^2)\\theta$ (**NOT** $(R - r)^2$!).\n🧮 **[R] Mode Rule**: When evaluating $\\sin\\theta$ for a radian angle, your calculator screen **MUST show [R]**!'
          },
          firstStep: {
            bm: '1. Kenal pasti bentuk soalan: **Sektor penuh** (bentuk kipas), **Tembereng** (hujung melengkung sahaja), atau **Dua Sektor Sepusat**.\n2. Jeling skrin kalkulator — pastikan mod **[R]** sebelum menekan $\\sin\\theta$.\n3. Kira luas sektor dan luas segi tiga dalam baris berasingan dahulu sebelum menolak.',
            en: '1. Identify the shape: **Full Sector** (pie wedge), **Segment** (curved cap only), or **Concentric Sectors**.\n2. Check your calculator screen — ensure **[R]** mode before pressing $\\sin\\theta$.\n3. Calculate Sector Area and Triangle Area on separate lines first, then subtract.'
          },
          formulas: [
            {
              label: { bm: 'Luas Sektor & Luas Sektor Sepusat', en: 'Area of Sector & Concentric Sectors' },
              tex: {
                bm: 'A_{\\text{sektor}} = \\frac{1}{2}r^2\\theta, \\qquad A_{\\text{sepusat}} = \\frac{1}{2}(R^2 - r^2)\\theta',
                en: 'A_{\\text{sector}} = \\frac{1}{2}r^2\\theta, \\qquad A_{\\text{concentric}} = \\frac{1}{2}(R^2 - r^2)\\theta'
              }
            },
            {
              label: { bm: 'Luas Tembereng (θ dalam Radian)', en: 'Area of Segment (θ in Radians)' },
              tex: {
                bm: 'A_{\\text{temb}} = \\frac{1}{2}r^2\\theta - \\frac{1}{2}r^2\\sin\\theta = \\frac{1}{2}r^2(\\theta - \\sin\\theta)',
                en: 'A_{\\text{seg}} = \\frac{1}{2}r^2\\theta - \\frac{1}{2}r^2\\sin\\theta = \\frac{1}{2}r^2(\\theta - \\sin\\theta)'
              }
            }
          ],
          workedExample: {
            title: { bm: 'Contoh Dibimbing: Perimeter & Luas Tembereng Berlorek', en: 'Worked Example: Segment Perimeter & Area' },
            problem: {
              bm: 'Satu perentas $AB$ dalam bulatan berjejari $r = 8\\text{ cm}$ mencangkum sudut pusat $\\theta = 1.2\\text{ rad}$ di $O$. Cari (a) perimeter dan (b) luas tembereng minor $AB$.',
              en: 'A chord $AB$ in a circle of radius $r = 8\\text{ cm}$ subtends a central angle $\\theta = 1.2\\text{ rad}$ at $O$. Find (a) the perimeter and (b) the area of the minor segment $AB$.'
            },
            steps: [
              {
                label: { bm: 'Langkah 1: Kira panjang lengkok $AB$', en: 'Step 1: Compute arc length $AB$' },
                tex: 's = r\\theta = 8(1.2) = 9.6\\text{ cm}',
                why: { bm: 'Lengkok $AB$ membentuk bahagian melengkung tembereng.', en: 'Arc $AB$ forms the curved boundary of the segment.' }
              },
              {
                label: { bm: 'Langkah 2: Kira perentas $AB$ dan perimeter tembereng', en: 'Step 2: Compute chord $AB$ and segment perimeter' },
                tex: 'AB = 2(8)\\sin(0.6\\text{ rad}) = 16(0.56464) = 9.034\\text{ cm} \\implies P = 9.6 + 9.034 = 18.63\\text{ cm}',
                why: { bm: 'Garis serenjang dari pusat $O$ membahagi dua sama $\\triangle OAB$ menjadi sudut $0.6\\text{ rad}$; tekan $\\sin(0.6)$ dalam mod [R].', en: 'A perpendicular from $O$ bisects isosceles $\\triangle OAB$ into $0.6\\text{ rad}$; evaluate $\\sin(0.6)$ in [R] mode.' }
              },
              {
                label: { bm: 'Langkah 3: Kira luas sektor penuh $OAB$', en: 'Step 3: Compute full sector area $OAB$' },
                tex: {
                  bm: 'A_{\\text{sektor}} = \\frac{1}{2}(8)^2(1.2) = 32(1.2) = 38.4\\text{ cm}^2',
                  en: 'A_{\\text{sector}} = \\frac{1}{2}(8)^2(1.2) = 32(1.2) = 38.4\\text{ cm}^2'
                },
                why: { bm: 'Mula dengan keluasan keseluruhan potongan piza $OAB$.', en: 'Start with the entire pizza-wedge area $OAB$.' }
              },
              {
                label: { bm: 'Langkah 4: Kira luas segi tiga $\\triangle OAB$ (mod [R])', en: 'Step 4: Compute triangle $\\triangle OAB$ area ([R] mode)' },
                tex: 'A_{\\triangle OAB} = \\frac{1}{2}(8)^2\\sin(1.2\\text{ rad}) = 32(0.93204) = 29.8253\\text{ cm}^2',
                why: { bm: 'Sudut $1.2$ ialah dalam radian, maka $\\sin(1.2\\text{ rad}) \\approx 0.93204$.', en: 'Angle $1.2$ is in radians, so $\\sin(1.2\\text{ rad}) \\approx 0.93204$.' }
              },
              {
                label: { bm: 'Langkah 5: Tolak luas segi tiga daripada luas sektor', en: 'Step 5: Subtract triangle area from sector area' },
                tex: {
                  bm: 'A_{\\text{temb}} = 38.4 - 29.8253 = 8.5747 \\approx 8.57\\text{ cm}^2',
                  en: 'A_{\\text{seg}} = 38.4 - 29.8253 = 8.5747 \\approx 8.57\\text{ cm}^2'
                },
                why: { bm: 'Bundarkan hanya pada jawapan akhir kepada 2 tempat perpuluhan ($8.5747 \\to 8.57$).', en: 'Round only at the final step to 2 decimal places ($8.5747 \\to 8.57$).' }
              }
            ],
            trap: {
              bm: 'Menekan $\\sin(1.2)$ dalam mod DEG memberi $0.0209$ (jawapan palsu $37.73\\text{ cm}^2$), dan membundarkan terlalu awal kepada $8.58$ menghilangkan ketepatan!',
              en: 'Pressing $\\sin(1.2)$ in DEG mode gives $0.0209$ (false area $37.73\\text{ cm}^2$), and premature rounding spoils the 2 d.p. value $8.57$!'
            }
          },
          tip: {
            bm: 'Jika kalkulator kekal mod DEG, tukar θ radian kepada darjah dahulu hanya untuk bahagian sin(θ°), tetapi KEKALKAN θ radian bagi sebutan ½r²θ!',
            en: 'If keeping DEG mode, convert θ to degrees ONLY inside sin(θ°), while keeping θ in radians for ½r²θ!'
          }
        },
        {
          title: { bm: '3. Perentas, Tangen kepada Bulatan & Sektor Major', en: '3. Chords, Tangents to a Circle & Major Sectors' },
          prereq: {
            bm: 'Ingat semula teorem bulatan Tingkatan 3: **jejari sentiasa berserenjang ($90^\\circ$) dengan garis tangen** di titik sentuhan, dan dua tangen dari satu titik luar $P$ adalah sama panjang ($PA = PB$). Ingat juga Teorem Pythagoras ($c^2 = a^2 + b^2$) dan Petua Kosinus ($c^2 = a^2 + b^2 - 2ab\\cos C$).',
            en: 'Recall Form 3 circle theorems: a **radius is always perpendicular ($90^\\circ$) to a tangent** at the point of contact, and two tangents from an external point $P$ are equal ($PA = PB$). Also recall Pythagoras theorem and the Cosine Rule ($c^2 = a^2 + b^2 - 2ab\\cos C$).'
          },
          body: {
            bm: '1️⃣ **Perentas dengan Petua Kosinus**: Dalam $\\triangle OAB$, dua sisi ialah jejari $r$, maka $AB^2 = r^2 + r^2 - 2r^2\\cos\\theta = 2r^2(1 - \\cos\\theta)$ — sangat berguna untuk mencari $\\theta$ jika panjang perentas $AB$ diberi!\n2️⃣ **Layang-layang Tangen $OAPB$**: Garis $OP$ membahagi dua sama layang-layang kepada dua segi tiga bersudut tegak kongruen $\\triangle OAP$ dan $\\triangle OBP$ ($\\angle OAP = 90^\\circ$). Gunakan $\\cos\\alpha = \\frac{r}{OP}$ atau $\\tan\\alpha = \\frac{PA}{r}$ untuk mencari sudut $\\alpha = \\angle AOP$, lalu $\\angle AOB = 2\\alpha$.\n3️⃣ **Sektor Major**: Sudut di luar sektor minor ialah $\\theta_{\\text{major}} = 2\\pi - \\theta_{\\text{minor}}$.',
            en: '1️⃣ **Chord via Cosine Rule**: In $\\triangle OAB$, both equal sides are radius $r$, giving $AB^2 = r^2 + r^2 - 2r^2\\cos\\theta = 2r^2(1 - \\cos\\theta)$ — ideal for finding $\\theta$ when chord $AB$ is given!\n2️⃣ **Tangent Kite $OAPB$**: Line $OP$ splits the kite into two congruent right-angled triangles $\\triangle OAP$ and $\\triangle OBP$ ($\\angle OAP = 90^\\circ$). Use $\\cos\\alpha = \\frac{r}{OP}$ or $\\tan\\alpha = \\frac{PA}{r}$ to find $\\alpha = \\angle AOP$, then $\\angle AOB = 2\\alpha$.\n3️⃣ **Major Sector**: The reflex angle outside the minor sector is $\\theta_{\\text{major}} = 2\\pi - \\theta_{\\text{minor}}$.'
          },
          firstStep: {
            bm: '1. Lukis jejari $OA$ dan $OB$ ke titik sentuhan tangen, dan tanda kotak sudut tepat **$90^\\circ$**.\n2. Bahagikan layang-layang $OAPB$ kepada dua segi tiga bersudut tegak $\\triangle OAP$ dan cari panjang $PA$ guna Pythagoras.\n3. Tukar kalkulator ke mod **[R]** untuk cari $\\alpha = \\angle AOP$ dalam radian, kemudian darab $2$ untuk $\\angle AOB$.',
            en: '1. Draw radii $OA$ and $OB$ to the tangent contact points and mark the **$90^\\circ$** right-angle box.\n2. Split kite $OAPB$ into two right triangles $\\triangle OAP$ and find $PA$ using Pythagoras.\n3. Switch calculator to **[R]** mode to find $\\alpha = \\angle AOP$ in radians, then double it for $\\angle AOB$.'
          },
          formulas: [
            {
              label: { bm: 'Petua Kosinus Perentas & Sudut Major', en: 'Chord Cosine Rule & Major Angle' },
              tex: {
                bm: '\\text{Perentas } AB^2 = 2r^2(1 - \\cos\\theta), \\qquad \\theta_{\\text{major}} = 2\\pi - \\theta_{\\text{minor}}',
                en: '\\text{Chord } AB^2 = 2r^2(1 - \\cos\\theta), \\qquad \\theta_{\\text{major}} = 2\\pi - \\theta_{\\text{minor}}'
              }
            },
            {
              label: { bm: 'Segi Tiga Bersudut Tegak Tangen △OAP', en: 'Tangent Right Triangle △OAP' },
              tex: {
                bm: 'OP^2 = r^2 + PA^2, \\qquad \\cos(\\angle AOP) = \\frac{r}{OP}, \\qquad \\angle AOB = 2\\angle AOP',
                en: 'OP^2 = r^2 + PA^2, \\qquad \\cos(\\angle AOP) = \\frac{r}{OP}, \\qquad \\angle AOB = 2\\angle AOP'
              }
            }
          ],
          workedExample: {
            title: { bm: 'Contoh Dibimbing: Rantau Berlorek Antara Dua Tangen & Bulatan', en: 'Worked Example: Shaded Region Between Two Tangents & Circle' },
            problem: {
              bm: 'Dua garis tangen $PA$ dan $PB$ dari titik luar $P$ menyentuh sebuah bulatan berpusat $O$ dan berjejari $6\\text{ cm}$ di $A$ dan $B$. Diberi $OP = 10\\text{ cm}$, cari luas rantau berlorek di luar bulatan tetapi di dalam layang-layang $OAPB$.',
              en: 'Two tangents $PA$ and $PB$ from an external point $P$ touch a circle of centre $O$ and radius $6\\text{ cm}$ at $A$ and $B$. Given $OP = 10\\text{ cm}$, find the shaded area outside the circle and inside kite $OAPB$.'
            },
            steps: [
              {
                label: { bm: 'Langkah 1: Cari panjang tangen $PA$ dalam $\\triangle OAP$ ($\\angle OAP = 90^\\circ$)', en: 'Step 1: Find tangent length $PA$ in right $\\triangle OAP$ ($\\angle OAP = 90^\\circ$)' },
                tex: 'PA = \\sqrt{OP^2 - OA^2} = \\sqrt{10^2 - 6^2} = \\sqrt{100 - 36} = \\sqrt{64} = 8\\text{ cm}',
                why: { bm: 'Jejari $OA$ berserenjang dengan tangen $PA$, maka $OP$ ialah hipotenus.', en: 'Radius $OA$ is perpendicular to tangent $PA$, making $OP$ the hypotenuse.' }
              },
              {
                label: { bm: 'Langkah 2: Kira sudut pusat $\\angle AOB$ dalam radian (mod [R])', en: 'Step 2: Find central angle $\\angle AOB$ in radians ([R] mode)' },
                tex: '\\cos(\\angle AOP) = \\frac{6}{10} = 0.6 \\implies \\angle AOP = 0.9273\\text{ rad} \\implies \\angle AOB = 2(0.9273) = 1.8546\\text{ rad}',
                why: { bm: '$\\triangle OAP \\cong \\triangle OBP$, jadi $\\angle AOB$ ialah dua kali $\\angle AOP$.', en: '$\\triangle OAP \\cong \\triangle OBP$, so $\\angle AOB$ is twice $\\angle AOP$.' }
              },
              {
                label: { bm: 'Langkah 3: Kira luas layang-layang $OAPB$ dan sektor minor $OAB$', en: 'Step 3: Compute kite $OAPB$ area and minor sector $OAB$ area' },
                tex: {
                  bm: 'A_{\\text{layang-layang}} = 2 \\times \\frac{1}{2}(6)(8) = 48\\text{ cm}^2, \\qquad A_{\\text{sektor}} = \\frac{1}{2}(6)^2(1.8546) = 33.3828\\text{ cm}^2',
                  en: 'A_{\\text{kite}} = 2 \\times \\frac{1}{2}(6)(8) = 48\\text{ cm}^2, \\qquad A_{\\text{sector}} = \\frac{1}{2}(6)^2(1.8546) = 33.3828\\text{ cm}^2'
                },
                why: { bm: 'Layang-layang terdiri daripada dua segi tiga bersudut tegak berjejari $6\\text{ cm}$ dan tinggi $8\\text{ cm}$.', en: 'The kite consists of two congruent right triangles of base $6\\text{ cm}$ and height $8\\text{ cm}$.' }
              },
              {
                label: { bm: 'Langkah 4: Tolak luas sektor daripada luas layang-layang', en: 'Step 4: Subtract minor sector area from kite area' },
                tex: {
                  bm: 'A_{\\text{berlorek}} = 48 - 33.3828 = 14.62\\text{ cm}^2',
                  en: 'A_{\\text{shaded}} = 48 - 33.3828 = 14.62\\text{ cm}^2'
                },
                why: { bm: 'Rantau berlorek ialah bahagian layang-layang yang berada di luar lengkok bulatan.', en: 'The shaded region is the part of kite $OAPB$ outside the circle.' }
              }
            ],
            trap: {
              bm: 'Ramai pelajar terlupa menggandakan sudut $\\angle AOP$ kepada $\\angle AOB = 2\\angle AOP$, atau menggunakan $OP = 10$ sebagai tinggi segi tiga bukannya sisi tangen $PA = 8$!',
              en: 'Many students forget to double $\\angle AOP$ to get $\\angle AOB = 2\\angle AOP$, or wrongly use hypotenuse $OP = 10$ as triangle height instead of tangent $PA = 8$!'
            }
          },
          tip: {
            bm: 'Soalan SPM sering minta sudut/luas sektor major pula selepas itu: gunakan θ_major = 2π − 1.8546 = 4.4286 rad!',
            en: 'SPM questions often follow up with the major sector: simply use θ_major = 2π − 1.8546 = 4.4286 rad!'
          }
        }
      ],
      traps: [
        {
          title: { bm: 'Perangkap Mod Kalkulator DEG vs RAD', en: 'Calculator DEG vs RAD Mode Trap' },
          desc: {
            bm: 'Menekan $\\sin(1.2)$ dalam mod Darjah [D] memberi $0.0209$, sedangkan dalam mod Radian [R] nilai sebenar ialah $\\sin(1.2\\text{ rad}) = 0.9320$! Begitu juga, memasukkan darjah terus ke dalam $s = r\\theta$ atau $\\frac{1}{2}r^2\\theta$ tanpa darab $\\frac{\\pi}{180^\\circ}$ adalah salah.',
            en: 'Evaluating $\\sin(1.2)$ in Degree [D] mode gives $0.0209$ instead of $\\sin(1.2\\text{ rad}) = 0.9320$ in [R] mode! Likewise, plugging degrees directly into $s = r\\theta$ or $\\frac{1}{2}r^2\\theta$ without multiplying by $\\frac{\\pi}{180^\\circ}$ is invalid.'
          }
        },
        {
          title: { bm: 'Keliru Panjang Lengkok vs Perimeter Sektor vs Perimeter Tembereng', en: 'Confusing Arc Length vs Sector Perimeter vs Segment Perimeter' },
          desc: {
            bm: 'Panjang lengkok ialah $s = r\\theta$ sahaja; **Perimeter sektor** wajib tambah dua jejari ($s + 2r$); **Perimeter tembereng** wajib tambah perentas lurus ($s + \\text{Perentas } AB$), BUKAN $s + 2r$!',
            en: 'Arc length is $s = r\\theta$ alone; **Sector perimeter** adds both straight radii ($s + 2r$); **Segment perimeter** adds the straight chord ($s + \\text{Chord } AB$), NOT $s + 2r$!'
          }
        },
        {
          title: { bm: 'Salah Tolak Sektor Sepusat & Sudut Major', en: 'Concentric Sector Squaring & Major Angle Trap' },
          desc: {
            bm: 'Luas antara dua sektor sepusat ialah $\\frac{1}{2}(R^2 - r^2)\\theta$, **BUKAN** $\\frac{1}{2}(R - r)^2\\theta$! Untuk sektor major pula, pastikan sudut pusat ialah $2\\pi - \\theta_{\\text{minor}}$, bukan $\\theta_{\\text{minor}}$.',
            en: 'Area between two concentric sectors is $\\frac{1}{2}(R^2 - r^2)\\theta$, **NOT** $\\frac{1}{2}(R - r)^2\\theta$! For a major sector, always use the reflex angle $2\\pi - \\theta_{\\text{minor}}$, not $\\theta_{\\text{minor}}$.'
          }
        }
      ],
      solvers: [
        {
          id: 'circular-sector-solver',
          title: { bm: 'Solver Sektor, Perentas & Tembereng Bulatan', en: 'Sector, Chord & Segment Master Solver' },
          desc: {
            bm: 'Masukkan jejari r dan sudut pusat θ (dalam radian) untuk menjana panjang lengkok, perentas, perimeter, luas sektor & luas tembereng.',
            en: 'Enter radius r and angle θ (in radians) to compute arc length, chord, perimeter, sector area & shaded segment area.'
          },
          inputs: [
            { id: 'r', label: { bm: 'Jejari r (cm)', en: 'Radius r (cm)' }, default: 10 },
            { id: 'theta', label: { bm: 'Sudut θ (rad)', en: 'Angle θ (rad)' }, default: 1.4 }
          ],
          solve: function (v, lang) {
            const rawR = (v.r === null || v.r === undefined || String(v.r).trim() === '') ? 10 : Number(v.r);
            const rawTh = (v.theta === null || v.theta === undefined || String(v.theta).trim() === '') ? 1.4 : Number(v.theta);
            if (!Number.isFinite(rawR) || !Number.isFinite(rawTh) || rawR <= 0 || rawTh <= 0 || rawTh > 2 * Math.PI) {
              const rDisp = Number.isFinite(rawR) ? U.roundStr(rawR, 4) : '\\text{?}';
              const thDisp = Number.isFinite(rawTh) ? U.roundStr(rawTh, 4) : '\\text{?}';
              return {
                problemTex: `r = ${rDisp}\\text{ cm}, \\quad \\theta = ${thDisp}\\text{ rad}`,
                steps: [
                  {
                    badge: 'P1',
                    title: lang === 'bm' ? 'Langkah 1: Semak syarat domain jejari r dan sudut θ' : 'Step 1: Check domain conditions for radius r and angle θ',
                    tex: `${!Number.isFinite(rawR) || rawR <= 0 ? `r = ${rDisp} \\le 0` : `r = ${rDisp} > 0`}, \\quad ${!Number.isFinite(rawTh) || rawTh <= 0 || rawTh > 2 * Math.PI ? `\\theta = ${thDisp}` : `\\theta = ${thDisp}`} \\; (\\text{${lang === 'bm' ? 'Input tidak sah' : 'Invalid input'}})`,
                    why: lang === 'bm'
                      ? 'Untuk sebuah sektor bulatan yang sah, jejari mestilah positif ($r > 0$) dan sudut pusat mesti berada dalam satu putaran penuh ($0 < \\theta \\le 2\\pi \\approx 6.2832\\text{ rad}$).'
                      : 'For a valid circular sector, radius must be strictly positive ($r > 0$) and the central angle must lie within one full circle ($0 < \\theta \\le 2\\pi \\approx 6.2832\\text{ rad}$).'
                  },
                  {
                    badge: 'K1',
                    title: lang === 'bm' ? 'Langkah 2: Mengapa nilai di luar domain ditolak' : 'Step 2: Why out-of-domain values fail geometrically',
                    tex: `r > 0 \\text{ ${lang === 'bm' ? 'dan' : 'and'} } 0 < \\theta \\le 2\\pi`,
                    why: lang === 'bm'
                      ? 'Jejari $r \\le 0$ tidak membentuk bulatan fizikal, manakala $\\theta \\le 0$ atau $\\theta > 2\\pi$ melebihi $360^\\circ$ dan tidak mentakrifkan satu sektor tunggal.'
                      : 'A radius $r \\le 0$ cannot form a physical circle, while $\\theta \\le 0$ or $\\theta > 2\\pi$ exceeds $360^\\circ$ and cannot define a single sector.'
                  },
                  {
                    badge: 'J1',
                    title: lang === 'bm' ? 'Langkah 3: Masukkan nilai domain yang sah' : 'Step 3: Enter valid in-domain inputs',
                    tex: `\\text{${lang === 'bm' ? 'Domain sah: ' : 'Valid domain: '}} r > 0, \\; 0 < \\theta \\le 2\\pi\\text{ rad}`,
                    why: lang === 'bm'
                      ? 'Cuba masukkan nilai positif seperti $r = 10\\text{ cm}$ dan $\\theta = 1.4\\text{ rad}$ (atau tukar darjah kepada radian dengan $\\times \\frac{\\pi}{180^\\circ}$).'
                      : 'Enter positive values such as $r = 10\\text{ cm}$ and $\\theta = 1.4\\text{ rad}$ (or convert degrees to radians via $\\times \\frac{\\pi}{180^\\circ}$).'
                  }
                ],
                finalTex: lang === 'bm'
                  ? '\\text{Input tidak sah: mesti } r > 0 \\text{ dan } 0 < \\theta \\le 2\\pi\\text{ rad}'
                  : '\\text{Invalid input: must satisfy } r > 0 \\text{ and } 0 < \\theta \\le 2\\pi\\text{ rad}',
                trapWarning: lang === 'bm'
                  ? 'Amaran Domain [P]: Jejari $r$ mesti positif ($r > 0$) dan sudut radian mesti dalam julat $0 < \\theta \\le 2\\pi$ ($\\approx 6.283\\text{ rad}$)!'
                  : 'Domain Warning [P]: Radius $r$ must be positive ($r > 0$) and angle $\\theta$ in radians must satisfy $0 < \\theta \\le 2\\pi$ ($\\approx 6.283\\text{ rad}$)!'
              };
            }
            const r = rawR;
            const th = rawTh;
            const s = r * th;
            const pSec = 2 * r + s;
            const sinHalf = Math.sin(th / 2);
            const chord = 2 * r * sinHalf;
            const areaSec = 0.5 * r * r * th;
            const sinTh = Math.sin(th);
            const areaTri = 0.5 * r * r * sinTh;
            const areaSeg = areaSec - areaTri;
            const chordWord = lang === 'bm' ? 'Perentas' : 'Chord';
            const secSub = lang === 'bm' ? 'sektor' : 'sector';
            const segSub = lang === 'bm' ? 'temb' : 'seg';
            return {
              problemTex: `r = ${U.roundStr(r, 4)}\\text{ cm}, \\quad \\theta = ${U.roundStr(th, 4)}\\text{ rad}`,
              steps: [
                {
                  badge: 'P1',
                  title: lang === 'bm' ? 'Langkah 1: Panjang lengkok, perimeter sektor & perentas' : 'Step 1: Arc length, sector perimeter & chord',
                  tex: `s = (${U.roundStr(r, 4)})(${U.roundStr(th, 4)}) = ${U.roundStr(s, 3)}\\text{ cm}, \\quad P_{\\text{${secSub}}} = 2(${U.roundStr(r, 4)}) + ${U.roundStr(s, 3)} = ${U.roundStr(pSec, 3)}\\text{ cm}, \\quad \\text{${chordWord}} = 2(${U.roundStr(r, 4)})\\sin(${U.roundStr(th / 2, 3)}) = ${U.roundStr(chord, 3)}\\text{ cm}`,
                  why: lang === 'bm' ? 'Guna s = rθ, tambah 2r untuk perimeter sektor, dan 2r sin(θ/2) (mod RAD) untuk perentas.' : 'Use s = rθ, add 2r for sector perimeter, and 2r sin(θ/2) (RAD mode) for the chord.'
                },
                {
                  badge: 'K1',
                  title: lang === 'bm' ? 'Langkah 2: Luas sektor OAB & luas segi tiga △OAB' : 'Step 2: Sector OAB area & triangle △OAB area',
                  tex: `A_{\\text{${secSub}}} = \\frac{1}{2}(${U.roundStr(r, 4)})^2(${U.roundStr(th, 4)}) = ${U.roundStr(areaSec, 4)}\\text{ cm}^2, \\quad A_{\\triangle} = \\frac{1}{2}(${U.roundStr(r, 4)})^2(${U.roundStr(sinTh, 4)}) = ${U.roundStr(areaTri, 4)}\\text{ cm}^2`,
                  why: lang === 'bm' ? `Nilai sin(${U.roundStr(th, 4)} rad) ≈ ${U.roundStr(sinTh, 4)} dikira dalam mod RAD.` : `Evaluate sin(${U.roundStr(th, 4)} rad) ≈ ${U.roundStr(sinTh, 4)} in RAD mode.`
                },
                {
                  badge: 'J1',
                  title: lang === 'bm' ? 'Langkah 3: Luas tembereng berlorek' : 'Step 3: Shaded segment area',
                  tex: `A_{\\text{${segSub}}} = ${U.roundStr(areaSec, 4)} - (${U.roundStr(areaTri, 4)}) = ${U.roundStr(areaSeg, 3)}\\text{ cm}^2`,
                  why: lang === 'bm' ? 'Tolak luas segi tiga daripada luas sektor penuh.' : 'Subtract the triangle area from the full sector area.'
                }
              ],
              finalTex: `s = ${U.roundStr(s, 2)}\\text{ cm},\\; P_{\\text{${secSub}}} = ${U.roundStr(pSec, 2)}\\text{ cm},\\; A_{\\text{${secSub}}} = ${U.roundStr(areaSec, 2)}\\text{ cm}^2,\\; A_{\\text{${segSub}}} = ${U.roundStr(areaSeg, 2)}\\text{ cm}^2`,
              trapWarning: lang === 'bm'
                ? 'Semak skrin kalkulator mesti mod [R] semasa menekan sin(θ), bukan mod [D]!'
                : 'Verify your calculator is in [R] mode when evaluating sin(θ), NOT [D] mode!'
            };
          }
        }
      ],
      generateQuestion: function (tier, lang) {
        if (tier === 1) {
          const r = U.randInt(6, 14);
          const th = U.pick([0.8, 1.2, 1.5, 2.0, 2.5]);
          const arc = U.round(r * th, 2);
          const perim = U.round(2 * r + r * th, 2);
          const trap1 = arc;
          const trap2 = U.round(r + arc, 2);
          return {
            tier: 1, tpLabel: 'TP1–TP2', subtopic: { bm: '1.2 Panjang Lengkok & Perimeter Sektor', en: '1.2 Arc Length & Sector Perimeter' }, marks: 3,
            prompt: lang === 'bm'
              ? `Sebuah sektor bulatan mempunyai jejari $r = ${r}\\text{ cm}$ dan sudut pusat $\\theta = ${th}\\text{ rad}$. Cari **perimeter penuh** sektor itu (dalam $\\text{cm}$).`
              : `A circular sector has radius $r = ${r}\\text{ cm}$ and central angle $\\theta = ${th}\\text{ rad}$. Find the **total perimeter** of the sector (in $\\text{cm}$).`,
            answerType: 'number', correctValue: perim, displayAnswerTex: `${perim}\\text{ cm}`,
            intentMeta: {
              given: { bm: `$r = ${r}\\text{ cm},\\; \\theta = ${th}\\text{ rad}$`, en: `$r = ${r}\\text{ cm},\\; \\theta = ${th}\\text{ rad}$` },
              goal: { bm: 'Cari perimeter penuh sektor ($2r + s$)', en: 'Find the total perimeter of the sector ($2r + s$)' },
              conceptRule: { bm: 'Lengkok $s = r\\theta$, maka Perimeter sektor $= 2r + r\\theta$', en: 'Arc $s = r\\theta$, so Sector Perimeter $= 2r + r\\theta$' }
            },
            guidedSteps: [
              { prompt: { bm: `Kira panjang lengkok $s = r\\theta = (${r})(${th})$:`, en: `Compute arc length $s = r\\theta = (${r})(${th})$:` }, expected: arc, hint: { bm: `Darab ${r} dengan ${th}.`, en: `Multiply ${r} by ${th}.` } },
              { prompt: { bm: `Tambahkan dua jejari ($2r = ${2 * r}$) kepada panjang lengkok untuk perimeter sektor:`, en: `Add two radii ($2r = ${2 * r}$) to the arc length for full perimeter:` }, expected: perim, hint: { bm: `Kira ${2 * r} + ${arc}.`, en: `Compute ${2 * r} + ${arc}.` } }
            ],
            traps: [
              { value: trap1, message: { bm: 'Perangkap [K]: Itu baru panjang lengkok s! Perimeter sektor wajib ditambah dengan 2 jejari (2r + s).', en: 'Trap [K]: That is only arc length s! Sector perimeter includes both straight radii (2r + s).' } },
              { value: trap2, message: { bm: 'Perangkap [P]: Anda hanya menambah SATU jejari (r + s)! Sektor dibatasi oleh DUA jejari lurus (2r + s).', en: 'Trap [P]: You added only ONE radius (r + s)! A sector has TWO straight radii (2r + s).' } }
            ],
            hints: [
              { bm: 'Kira panjang lengkok s = rθ dahulu kerana θ sudah dalam radian.', en: 'Compute arc length s = rθ first since θ is already in radians.' },
              { bm: 'Perimeter penuh bermaksud jalan mengelilingi seluruh sektor: 2 jejari lurus + 1 lengkok (2r + s).', en: 'Total perimeter means walking all edges of the sector: 2 straight radii + 1 arc (2r + s).' }
            ],
            steps: [
              { badge: 'P1', title: lang === 'bm' ? 'Panjang lengkok' : 'Arc length', tex: `s = (${r})(${th}) = ${U.roundStr(arc, 2)}\\text{ cm}`, why: lang === 'bm' ? 'Guna s = rθ kerana θ sudah berada dalam unit radian.' : 'Use s = rθ directly because θ is already in radians.' },
              { badge: 'J1', title: lang === 'bm' ? 'Perimeter sektor' : 'Sector perimeter', tex: `P = 2(${r}) + ${U.roundStr(arc, 2)} = ${2 * r} + ${U.roundStr(arc, 2)} = ${perim}\\text{ cm}`, why: lang === 'bm' ? 'Perimeter sektor meliputi dua jejari lurus (2r) dan lengkok (s).' : 'Sector perimeter sums both straight radii (2r) and the curved arc (s).' }
            ]
          };
        }
        if (tier === 2) {
          const r = U.pick([8, 10, 12]);
          const deg = U.pick([60, 90, 120, 150]);
          const piUsed = 3.142;
          const th = (deg * piUsed) / 180;
          const thStr = U.roundStr(th, 4);
          const halfR2 = 0.5 * r * r;
          const area = U.round(halfR2 * th, 2);
          const degTrap = U.round(halfR2 * deg, 2);
          const arcTrap = U.round(r * th, 2);
          const traps = [
            { value: degTrap, message: { bm: 'Perangkap [P]: Anda menggantikan darjah terus ke dalam ½r²θ! Wajib tukar darjah kepada radian dahulu.', en: 'Trap [P]: You plugged degrees straight into ½r²θ! Convert to radians first.' } }
          ];
          if (Math.abs(arcTrap - area) > 0.5) {
            traps.push({ value: arcTrap, message: { bm: 'Perangkap [K]: Itu nilai panjang lengkok (rθ)! Soalan meminta luas sektor (½r²θ).', en: 'Trap [K]: That is arc length (rθ)! The question asks for sector area (½r²θ).' } });
          }
          return {
            tier: 2, tpLabel: 'TP3–TP4', subtopic: { bm: '1.3 Penukaran Radian & Luas Sektor', en: '1.3 Radian Conversion & Sector Area' }, marks: 4,
            prompt: lang === 'bm'
              ? `Sebuah sektor bulatan berjejari $${r}\\text{ cm}$ mempunyai sudut pusat $${deg}^\\circ$. Menggunakan $\\pi = 3.142$, cari **luas sektor** itu kepada 2 tempat perpuluhan.`
              : `A circular sector of radius $${r}\\text{ cm}$ subtends a central angle of $${deg}^\\circ$. Using $\\pi = 3.142$, find the **area of the sector** to 2 decimal places.`,
            answerType: 'number', tolerance: 0.15, correctValue: area, displayAnswerTex: `${area}\\text{ cm}^2`,
            intentMeta: {
              given: { bm: `$r = ${r}\\text{ cm},\\; \\theta = ${deg}^\\circ,\\; \\pi = 3.142$`, en: `$r = ${r}\\text{ cm},\\; \\theta = ${deg}^\\circ,\\; \\pi = 3.142$` },
              goal: { bm: 'Tukar sudut ke radian & kira luas sektor', en: 'Convert angle to radians & find sector area' },
              conceptRule: { bm: '$\\theta\\text{ (rad)} = \\theta^\\circ \\times \\frac{3.142}{180^\\circ}$, $A = \\frac{1}{2}r^2\\theta$', en: '$\\theta\\text{ (rad)} = \\theta^\\circ \\times \\frac{3.142}{180^\\circ}$, $A = \\frac{1}{2}r^2\\theta$' }
            },
            guidedSteps: [
              { prompt: { bm: `Tukar $${deg}^\\circ$ kepada radian menggunakan $\\frac{${deg} \\times 3.142}{180}$ (3 t.p.):`, en: `Convert $${deg}^\\circ$ to radians via $\\frac{${deg} \\times 3.142}{180}$ (3 d.p.):` }, expected: U.round(th, 3), hint: { bm: `Kira (${deg} × 3.142) / 180.`, en: `Evaluate (${deg} × 3.142) / 180.` } },
              { prompt: { bm: `Kira luas sektor $A = \\frac{1}{2}(${r})^2(${thStr})$ (2 t.p.):`, en: `Compute sector area $A = \\frac{1}{2}(${r})^2(${thStr})$ (2 d.p.):` }, expected: area, hint: { bm: `Darab ${halfR2} dengan ${thStr}.`, en: `Multiply ${halfR2} by ${thStr}.` } }
            ],
            traps,
            hints: [
              { bm: `Langkah 1: Tukar ${deg}° ke radian dengan mendarab (3.142 / 180).`, en: `Step 1: Convert ${deg}° to radians by multiplying by (3.142 / 180).` },
              { bm: 'Langkah 2: Gantikan nilai radian itu ke dalam rumus luas sektor A = ½r²θ.', en: 'Step 2: Substitute the radian angle into the sector area formula A = ½r²θ.' }
            ],
            steps: [
              { badge: 'P1', title: lang === 'bm' ? 'Tukar sudut kepada radian' : 'Convert angle to radians', tex: `\\theta = ${deg}^\\circ \\times \\frac{3.142}{180^\\circ} = ${thStr}\\text{ rad}`, why: lang === 'bm' ? 'π rad = 180°; wajib guna θ dalam radian.' : 'π rad = 180°; θ must be in radians first.' },
              { badge: 'K1', title: lang === 'bm' ? 'Ganti ke dalam rumus luas sektor' : 'Substitute into sector area', tex: `A = \\frac{1}{2}(${r})^2(${thStr}) = ${halfR2} \\times ${thStr}`, why: lang === 'bm' ? 'Permudahkan ½r² dahulu sebelum darab dengan θ.' : 'Simplify ½r² first before multiplying by θ.' },
              { badge: 'J1', title: lang === 'bm' ? 'Luas sektor' : 'Sector area', tex: `A = ${area}\\text{ cm}^2`, why: lang === 'bm' ? 'Bundarkan kepada 2 tempat perpuluhan.' : 'Rounded to 2 decimal places.' }
            ]
          };
        }
        // Tier 3 KBAT: Shaded segment area
        const r = U.pick([10, 12, 14]);
        const th = U.pick([1.2, 1.5, 1.8, 2.0]);
        const halfR2 = 0.5 * r * r;
        const areaSec = U.round(halfR2 * th, 3);
        const sinVal = U.round(Math.sin(th), 4);
        const areaTri = U.round(halfR2 * Math.sin(th), 3);
        const seg = U.round(halfR2 * (th - Math.sin(th)), 2);
        const degTrap = U.round(halfR2 * (th - Math.sin((th * Math.PI) / 180)), 2);
        const secOnlyTrap = U.round(halfR2 * th, 2);
        const secWord = lang === 'bm' ? 'sektor' : 'sector';
        const segWord = lang === 'bm' ? 'temb' : 'seg';
        return {
          tier: 3, tpLabel: 'TP5–TP6 (KBAT)', subtopic: { bm: '1.4 Aplikasi Luas Tembereng Berlorek', en: '1.4 Shaded Circular Segment Area' }, marks: 4,
          prompt: lang === 'bm'
            ? `Dalam sebuah bulatan berjejari $${r}\\text{ cm}$, satu perentas $AB$ membentuk sudut pusat $\\theta = ${th}\\text{ rad}$ di pusat $O$. Cari **luas tembereng berlorek** yang dibatasi oleh perentas $AB$ dan lengkok minor $AB$ (bundarkan kepada 2 tempat perpuluhan).`
            : `In a circle of radius $${r}\\text{ cm}$, chord $AB$ subtends a central angle $\\theta = ${th}\\text{ rad}$ at centre $O$. Find the **area of the minor segment** bounded by chord $AB$ and arc $AB$ (to 2 d.p.).`,
          answerType: 'number', tolerance: 0.15, correctValue: seg, displayAnswerTex: `${seg}\\text{ cm}^2`,
          intentMeta: {
            given: { bm: `$r = ${r}\\text{ cm},\\; \\theta = ${th}\\text{ rad}$`, en: `$r = ${r}\\text{ cm},\\; \\theta = ${th}\\text{ rad}$` },
            goal: { bm: 'Cari luas tembereng $\\frac{1}{2}r^2(\\theta - \\sin\\theta)$', en: 'Find segment area $\\frac{1}{2}r^2(\\theta - \\sin\\theta)$' },
            conceptRule: { bm: '$A_{\\text{temb}} = \\frac{1}{2}r^2\\theta - \\frac{1}{2}r^2\\sin\\theta$ dengan kalkulator dalam mod [R]', en: '$A_{\\text{seg}} = \\frac{1}{2}r^2\\theta - \\frac{1}{2}r^2\\sin\\theta$ with calculator in [R] mode' }
          },
          guidedSteps: [
            { prompt: { bm: `Pastikan mod **RAD**! Kira nilai $(\\theta - \\sin\\theta) = ${th} - \\sin(${th})$ (3 t.p.):`, en: `In **RAD** mode, evaluate $(\\theta - \\sin\\theta) = ${th} - \\sin(${th})$ (3 d.p.):` }, expected: U.round(th - Math.sin(th), 3), hint: { bm: `sin(${th} rad) ≈ ${U.roundStr(Math.sin(th), 3)}.`, en: `sin(${th} rad) ≈ ${U.roundStr(Math.sin(th), 3)}.` } },
            { prompt: { bm: `Darabkan dengan $\\frac{1}{2}r^2 = ${halfR2}$ untuk luas tembereng (2 t.p.):`, en: `Multiply by $\\frac{1}{2}r^2 = ${halfR2}$ for segment area (2 d.p.):` }, expected: seg, hint: { bm: `Kira ${halfR2} × ${U.roundStr(th - Math.sin(th), 4)}.`, en: `Multiply ${halfR2} by ${U.roundStr(th - Math.sin(th), 4)}.` } }
          ],
          traps: [
            { value: degTrap, message: { bm: 'Perangkap Klasik SPM [K]: Kalkulator anda berada dalam mod DARJAH (DEG) semasa menekan sin(θ)! Tukar ke mod RAD.', en: 'Classic SPM Trap [K]: Your calculator was in DEGREE mode when evaluating sin(θ)! Switch to RAD mode.' } },
            { value: secOnlyTrap, message: { bm: 'Perangkap [P]: Itu luas sektor penuh (½r²θ)! Anda perlu menolak luas segi tiga ½r²sin(θ).', en: 'Trap [P]: That is the full sector area (½r²θ)! Subtract triangle area ½r²sin(θ) to get the segment.' } }
          ],
          hints: [
            { bm: 'Luas tembereng = Luas sektor (½r²θ) − Luas segi tiga (½r² sin θ).', en: 'Segment area = Sector area (½r²θ) − Triangle area (½r² sin θ).' },
            { bm: 'Jeling skrin kalkulator untuk pastikan mod [R] aktif sebelum tekan sin(' + th + ').', en: 'Check your calculator screen is in [R] mode before evaluating sin(' + th + ').' }
          ],
          steps: [
            { badge: 'P1', title: lang === 'bm' ? 'Luas sektor OAB' : 'Area of sector OAB', tex: `A_{\\text{${secWord}}} = \\frac{1}{2}(${r})^2(${th}) = ${U.roundStr(areaSec, 3)}\\text{ cm}^2`, why: lang === 'bm' ? 'Kira keseluruhan sektor OAB dengan ½r²θ.' : 'Compute the full sector OAB area using ½r²θ.' },
            { badge: 'K1', title: lang === 'bm' ? 'Kira luas segi tiga △OAB (mod RAD)' : 'Compute triangle △OAB area (RAD mode)', tex: `A_{\\triangle OAB} = \\frac{1}{2}(${r})^2\\sin(${th}) = ${halfR2}(${U.roundStr(sinVal, 4)}) = ${U.roundStr(areaTri, 3)}\\text{ cm}^2`, why: lang === 'bm' ? `Nilai sin(${th} rad) ≈ ${U.roundStr(sinVal, 4)} mesti dikira dalam mod RAD.` : `Evaluate sin(${th} rad) ≈ ${U.roundStr(sinVal, 4)} in RAD mode.` },
            { badge: 'J1', title: lang === 'bm' ? 'Tolak untuk luas tembereng berlorek' : 'Subtract for shaded segment area', tex: `A_{\\text{${segWord}}} = ${U.roundStr(areaSec, 3)} - ${U.roundStr(areaTri, 3)} = ${seg}\\text{ cm}^2`, why: lang === 'bm' ? 'Bundarkan jawapan akhir kepada 2 tempat perpuluhan.' : 'Round final answer to 2 decimal places.' }
          ]
        };
      }
    },

    // =========================================================================
    // FORM 5 CHAPTER 2: DIFFERENTIATION / PEMBEZAAN
    // =========================================================================
    {
      id: 'f5-c2',
      stage: 3,
      unlocked: true,
      form: 5,
      num: 2,
      code: { bm: 'T5 • Bab 2', en: 'F5 • Ch 2' },
      icon: 'dy/dx',
      color: '#ef4444',
      category: 'kalkulus',
      title: { bm: 'Pembezaan', en: 'Differentiation' },
      subtitle: {
        bm: 'Prinsip pertama, petua pembezaan, tangen & normal, titik pusingan, pengoptimuman & kadar perubahan',
        en: 'First principles, differentiation rules, tangents & normals, turning points, optimization & rates'
      },
      spmWeight: { bm: 'Topik Gergasi SPM! K1 & K2 (12–18 markah)', en: 'Heavyweight SPM Topic! P1 & P2 (12–18 marks)' },
      concepts: [
        {
          title: { bm: '1. Prinsip Pertama, Penulisan Indeks & Petua Kuasa', en: '1. First Principles, Index Rewriting & Power Rule' },
          prereq: {
            bm: 'Ingat kecerunan garis lurus Tingkatan 2/3: $m = \\frac{y_2 - y_1}{x_2 - x_1}$ ("naik bahagi lari"). Pada lengkung, kecerunan sentiasa berubah pada setiap titik.\n🔍 **Analogi Zum Kanta**: Jika anda zum sangat rapat ke satu titik pada lengkung sehingga jarak mengufuk $\\delta x \\to 0$, lengkung itu kelihatan seperti garis lurus! Kecerunan garis lurus itulah **terbitan pertama $\\frac{dy}{dx}$**.',
            en: 'Recall Form 2/3 straight-line gradient: $m = \\frac{y_2 - y_1}{x_2 - x_1}$ ("rise over run"). On a curve, the slope changes at every point.\n🔍 **Zoom-In Analogy**: If you zoom closely into one point on a curve until the horizontal step $\\delta x \\to 0$, the curve looks straight! That zoomed-in slope is the **first derivative $\\frac{dy}{dx}$**.'
          },
          body: {
            bm: '1️⃣ **Prinsip Pertama**: Apabila soalan menyebut *"guna prinsip pertama"*, wajib kembangkan $\\delta y = f(x + \\delta x) - f(x)$, faktorkan $\\delta x$, potong $\\delta x$, baru ambil had $\\lim_{\\delta x \\to 0}$.\n2️⃣ **Petua Kuasa**: Bawa kuasa turun ke depan untuk didarab, kemudian tolak $1$ daripada kuasa asal ($\\frac{d}{dx}(ax^n) = anx^{n-1}$). Sebarang pemalar tanpa $x$ menjadi **$0$**.\n3️⃣ **WAJIB Tukar Bentuk Indeks Dahulu!**: Sebelum membezakan pecahan atau punca kuasa, naikkan semua $x$ ke pengangka: $\\frac{a}{x^n} = ax^{-n}$, $\\sqrt{x} = x^{1/2}$, $\\frac{1}{\\sqrt{x}} = x^{-1/2}$, dan $\\frac{1}{(2x+1)^3} = (2x+1)^{-3}$.',
            en: '1️⃣ **First Principles**: When asked for *"first principles"*, you MUST expand $\\delta y = f(x + \\delta x) - f(x)$, factor and cancel $\\delta x$, then take $\\lim_{\\delta x \\to 0}$.\n2️⃣ **Power Rule**: Bring the power down to multiply the coefficient, then subtract $1$ from the power ($\\frac{d}{dx}(ax^n) = anx^{n-1}$). Any standalone constant differentiates to **$0$**.\n3️⃣ **ALWAYS Rewrite Indices First!**: Before differentiating fractions or surds, bring every $x$ up to the numerator: $\\frac{a}{x^n} = ax^{-n}$, $\\sqrt{x} = x^{1/2}$, $\\frac{1}{\\sqrt{x}} = x^{-1/2}$, and $\\frac{1}{(2x+1)^3} = (2x+1)^{-3}$.'
          },
          firstStep: {
            bm: '1. Alihkan semua $x$ di bawah pecahan ke atas dengan kuasa negatif ($x^{-n}$), dan tukar $\\sqrt{x}$ kepada $x^{1/2}$.\n2. Guna Petua Kuasa pada setiap sebutan satu demi satu: **darab kuasa lama, kemudian kuasa tolak $1$**.\n3. Pemalar tunggal (seperti $+5$ atau $-7$) terus jadi **$0$**, dan tukar balik kuasa negatif ke pecahan di baris akhir jika perlu.',
            en: '1. Move every $x$ in denominators up using negative powers ($x^{-n}$), and rewrite $\\sqrt{x}$ as $x^{1/2}$.\n2. Apply Power Rule term-by-term: **multiply by old power, then subtract $1$ from power**.\n3. Standalone constants (like $+5$ or $-7$) vanish to **$0$**, and convert negative powers back to fractions at the end if neat.'
          },
          formulas: [
            {
              label: { bm: 'Prinsip Pertama & Petua Kuasa', en: 'First Principles & Power Rule' },
              tex: '\\frac{dy}{dx} = \\lim_{\\delta x \\to 0} \\frac{\\delta y}{\\delta x}, \\qquad \\frac{d}{dx}(ax^n) = anx^{n-1}'
            },
            {
              label: { bm: 'Penulisan Semula Indeks Sebelum Pembezaan', en: 'Index Rewrites Before Differentiating' },
              tex: '\\frac{a}{x^n} = ax^{-n}, \\qquad \\sqrt{x} = x^{1/2}, \\qquad \\frac{1}{\\sqrt{x}} = x^{-1/2}'
            }
          ],
          workedExample: {
            title: { bm: 'Contoh Dibimbing: Pembezaan Pecahan & Punca Kuasa', en: 'Worked Example: Differentiating Fractions & Surds' },
            problem: {
              bm: 'Cari $\\frac{dy}{dx}$ bagi $y = \\frac{4}{x^2} + 6\\sqrt{x} - 5$.',
              en: 'Find $\\frac{dy}{dx}$ for $y = \\frac{4}{x^2} + 6\\sqrt{x} - 5$.'
            },
            steps: [
              {
                label: { bm: 'Langkah 1: Tukar semua sebutan kepada bentuk indeks $ax^n$', en: 'Step 1: Rewrite every term in index form $ax^n$' },
                tex: 'y = 4x^{-2} + 6x^{1/2} - 5',
                why: { bm: 'Petua Kuasa hanya boleh diguna selepas $x$ berada di atas dan bukan di bawah tanda punca.', en: 'Power Rule only works once $x$ is in the numerator with an explicit fractional/negative exponent.' }
              },
              {
                label: { bm: 'Langkah 2: Turunkan kuasa dan tolak $1$ daripada setiap kuasa', en: 'Step 2: Bring down powers and subtract $1$ from each exponent' },
                tex: '\\frac{dy}{dx} = 4(-2)x^{-2-1} + 6\\left(\\frac{1}{2}\\right)x^{\\frac{1}{2}-1} - 0',
                why: { bm: 'Pemalar $-5$ mempunyai terbitan $0$, manakala $-2 - 1 = -3$ dan $\\frac{1}{2} - 1 = -\\frac{1}{2}$.', en: 'Constant $-5$ vanishes to $0$, while $-2 - 1 = -3$ and $\\frac{1}{2} - 1 = -\\frac{1}{2}$.' }
              },
              {
                label: { bm: 'Langkah 3: Permudahkan pekali dan tulis semula dalam bentuk positif', en: 'Step 3: Simplify coefficients and rewrite with positive powers' },
                tex: '\\frac{dy}{dx} = -8x^{-3} + 3x^{-1/2} = -\\frac{8}{x^3} + \\frac{3}{\\sqrt{x}}',
                why: { bm: 'Kuasa negatif $x^{-3}$ turun balik ke penyebut menjadi $\\frac{1}{x^3}$.', en: 'Negative exponent $x^{-3}$ moves back down to the denominator as $\\frac{1}{x^3}$.' }
              }
            ],
            trap: {
              bm: 'Kesilapan paling kerap ialah menulis $\\frac{d}{dx}(\\frac{4}{x^2}) = \\frac{4}{2x}$ (membezakan penyebut di bawah!) atau menulis $-2 - 1 = -1$ bukannya $-3$.',
              en: 'Most common mistake: differentiating the denominator directly as $\\frac{4}{2x}$, or computing $-2 - 1 = -1$ instead of $-3$.'
            }
          },
          tip: {
            bm: 'Untuk soalan Prinsip Pertama, guna Petua Kuasa dalam kepala dahulu supaya anda tahu jawapan akhir yang mesti dicapai!',
            en: 'On First Principles questions, check the answer mentally with Power Rule first so you know your exact target!'
          }
        },
        {
          title: { bm: '2. Petua Rantai, Hasil Darab & Hasil Bahagi', en: '2. Chain, Product & Quotient Rules' },
          prereq: {
            bm: 'Ingat struktur **fungsi gubahan $f(g(x))$** dari Tingkatan 4: ada lapisan luar dan lapisan dalam.\n🧅 **Analogi Kupas Bawang**: Untuk membezakan fungsi berkuasa seperti $(ax + b)^n$, kupas dari **kulit luar dahulu**, kemudian darab dengan **isi di dalam**! Untuk hasil darab atau bahagi dua ungkapan $x$, labelkan $u$ dan $v$ dahulu supaya tanda tidak bercampur.',
            en: 'Recall Form 4 **composite functions $f(g(x))$**: there is an outer shell and an inner core.\n🧅 **Peeling an Onion Analogy**: To differentiate $(ax + b)^n$, differentiate the **outer layer first**, then multiply by the **inner derivative**! For products or quotients of two $x$-blocks, label $u$ and $v$ in a side column first so signs never tangle.'
          },
          body: {
            bm: 'Gunakan **Jadual Keputusan 3-Saat**:\n• **Satu kurungan berkuasa** $(ax + b)^n \\implies$ **Petua Rantai**: beza luar $\\times$ beza dalam.\n• **Dua blok $x$ didarab** ($u \\cdot v$) $\\implies$ **Petua Hasil Darab**: $u v\' + v u\'$ (tanda tambah!).\n• **Dua blok $x$ dibahagi** ($\\frac{u}{v}$) $\\implies$ **Petua Hasil Bahagi**: ingat **"Bawah ($v$) Mula Dahulu!"** $\\frac{v u\' - u v\'}{v^2}$ (tanda tolak!).\n💡 Jika pengangka cuma nombor seperti $\\frac{1}{(2x+1)^3}$, naikkan jadi $(2x+1)^{-3}$ dan guna Petua Rantai sahaja!',
            en: 'Use the **3-Second Decision Table**:\n• **Single bracket to a power** $(ax + b)^n \\implies$ **Chain Rule**: outer derivative $\\times$ inner derivative.\n• **Two $x$-blocks multiplied** ($u \\cdot v$) $\\implies$ **Product Rule**: $u v\' + v u\'$ (plus sign!).\n• **Two $x$-blocks divided** ($\\frac{u}{v}$) $\\implies$ **Quotient Rule**: remember **"Bottom ($v$) Starts First!"** $\\frac{v u\' - u v\'}{v^2}$ (minus sign!).\n💡 If the numerator is just a constant like $\\frac{1}{(2x+1)^3}$, rewrite as $(2x+1)^{-3}$ and use Chain Rule directly!'
          },
          firstStep: {
            bm: '1. Kira berapa blok $x$ yang didarab atau dibahagi ($u$ dan $v$).\n2. Tulis di tepi kertas: $u = \\dots, u\' = \\dots$ dan $v = \\dots, v\' = \\dots$ sebelum masuk rumus.\n3. Jika ada kurungan berkuasa sama seperti $(x^2+4)^2$, faktorkan faktor sepunya dahulu.',
            en: '1. Count how many $x$-blocks are multiplied or divided ($u$ and $v$).\n2. Write a side column first: $u = \\dots, u\' = \\dots$ and $v = \\dots, v\' = \\dots$ before plugging into the formula.\n3. Factor out common bracket powers cleanly instead of expanding huge polynomials.'
          },
          formulas: [
            {
              label: { bm: 'Petua Rantai Komposit', en: 'Composite Chain Rule' },
              tex: '\\frac{d}{dx}(ax+b)^n = n(ax+b)^{n-1} \\cdot a, \\qquad \\frac{dy}{dx} = \\frac{dy}{du} \\cdot \\frac{du}{dx}'
            },
            {
              label: { bm: 'Petua Hasil Darab & Petua Hasil Bahagi', en: 'Product Rule & Quotient Rule' },
              tex: '\\frac{d}{dx}(uv) = u\\frac{dv}{dx} + v\\frac{du}{dx}, \\qquad \\frac{d}{dx}\\left(\\frac{u}{v}\\right) = \\frac{v\\frac{du}{dx} - u\\frac{dv}{dx}}{v^2}'
            }
          ],
          workedExample: {
            title: { bm: 'Contoh Dibimbing: Petua Rantai & Petua Hasil Bahagi', en: 'Worked Example: Chain Rule & Quotient Rule' },
            problem: {
              bm: 'Bezakan terhadap $x$: (a) $y = (3x - 2)^4$, dan (b) $y = \\frac{2x}{x + 1}$.',
              en: 'Differentiate with respect to $x$: (a) $y = (3x - 2)^4$, and (b) $y = \\frac{2x}{x + 1}$.'
            },
            steps: [
              {
                label: { bm: '(a) Petua Rantai: kulit luar darab isi dalam', en: '(a) Chain Rule: outer derivative times inner derivative' },
                tex: '\\frac{dy}{dx} = 4(3x - 2)^{4-1} \\cdot \\frac{d}{dx}(3x - 2) = 4(3x - 2)^3(3) = 12(3x - 2)^3',
                why: { bm: 'Kulit luar turunkan $4$; isi dalam $(3x - 2)$ apabila dibezakan memberi $3$.', en: 'Outer power brings down $4$; inner bracket $(3x - 2)$ differentiates to $3$.' }
              },
              {
                label: { bm: '(b) Label $u, v, u\', v\'$ dahulu untuk Petua Hasil Bahagi', en: '(b) List $u, v, u\', v\'$ first for Quotient Rule' },
                tex: 'u = 2x \\implies u\' = 2; \\qquad v = x + 1 \\implies v\' = 1',
                why: { bm: 'Menyenaraikan $u\'$ dan $v\'$ di tepi mengelakkan tersilap tanda semasa mengganti.', en: 'Listing $u\'$ and $v\'$ separately prevents sign slips during substitution.' }
              },
              {
                label: { bm: '(b) Masuk rumus $\\frac{vu\' - uv\'}{v^2}$ dan permudahkan pengangka', en: '(b) Plug into $\\frac{vu\' - uv\'}{v^2}$ and simplify numerator' },
                tex: '\\frac{dy}{dx} = \\frac{(x + 1)(2) - (2x)(1)}{(x + 1)^2} = \\frac{2x + 2 - 2x}{(x + 1)^2} = \\frac{2}{(x + 1)^2}',
                why: { bm: 'Bawah ($v = x+1$) mesti mula dahulu; jangan kembangkan $(x+1)^2$ di penyebut.', en: 'Bottom ($v = x+1$) starts first; keep $(x+1)^2$ factored in the denominator.' }
              }
            ],
            trap: {
              bm: 'Dalam (a), lupa darab $3$ memberi $4(3x-2)^3$ (hilang markah!). Dalam (b), membalikkan pengangka kepada $uv\' - vu\'$ menukar jawapan menjadi $-\\frac{2}{(x+1)^2}$.',
              en: 'In (a), forgetting the inner $3$ gives $4(3x-2)^3$. In (b), swapping the numerator to $uv\' - vu\'$ flips the sign to $-\\frac{2}{(x+1)^2}$.'
            }
          },
          tip: {
            bm: 'Jangan lupa darabkan pembezaan isi dalam kurungan apabila menggunakan Petua Rantai!',
            en: 'Never forget to multiply by the inner derivative when applying the Chain Rule!'
          }
        },
        {
          title: { bm: '3. Tangen, Normal, Titik Pusingan, Pengoptimuman & Kadar Perubahan', en: '3. Tangents, Normals, Turning Points, Optimization & Rates' },
          prereq: {
            bm: 'Ingat Geometri Koordinat Tingkatan 4: dua garis berserenjang memenuhi **$m_1 m_2 = -1$** ($m_N = -\\frac{1}{m_T}$). Di puncak bukit atau dasar lembah, garis tangen adalah mendatar ($m = 0$). Perkataan **"kadar"** pula sentiasa bermaksud **per masa ($dt$ di bawah)**.',
            en: 'Recall Form 4 Coordinate Geometry: perpendicular lines satisfy **$m_1 m_2 = -1$** ($m_N = -\\frac{1}{m_T}$). At the top of a hill or bottom of a valley, the tangent is flat ($m = 0$). The word **"rate"** always means **per unit time ($dt$ in the denominator)**.'
          },
          body: {
            bm: '1️⃣ **Tangen & Normal**: Cari $y_0$ $\\to$ cari $m_T = \\frac{dy}{dx}\\big|_{x_0}$ $\\to$ bagi normal tukar kepada $m_N = -\\frac{1}{m_T}$ $\\to$ masuk ke $y - y_0 = m(x - x_0)$.\n2️⃣ **Titik Pusingan**: Selesaikan $\\frac{dy}{dx} = 0$, kemudian uji **$\\frac{d^2y}{dx^2} > 0$ (Senyum $\\cup$ = Minimum)** vs **$\\frac{d^2y}{dx^2} < 0$ (Masam $\\cap$ = Maksimum)**.\n3️⃣ **Pengoptimuman Kertas 2**: Tulis **2 persamaan** — guna syarat tetap (dawai/luas) untuk hapuskan pemboleh ubah kedua sebelum menyelesaikan $\\frac{dV}{dx} = 0$!\n4️⃣ **Kadar Perubahan & Perubahan Kecil**: Sambung rantai domino $\\frac{dy}{dt} = \\frac{dy}{dx} \\times \\frac{dx}{dt}$ dan penghampiran $\\delta y \\approx \\frac{dy}{dx} \\times \\delta x$.',
            en: '1️⃣ **Tangent & Normal**: Find $y_0$ $\\to$ evaluate $m_T = \\frac{dy}{dx}\\big|_{x_0}$ $\\to$ for normal flip and negate $m_N = -\\frac{1}{m_T}$ $\\to$ plug into $y - y_0 = m(x - x_0)$.\n2️⃣ **Turning Points**: Solve $\\frac{dy}{dx} = 0$, then check **$\\frac{d^2y}{dx^2} > 0$ (Smile $\\cup$ = Minimum)** vs **$\\frac{d^2y}{dx^2} < 0$ (Frown $\\cap$ = Maximum)**.\n3️⃣ **Paper 2 Optimization**: Write **2 equations** — isolate one variable from the fixed constraint and substitute into the target formula BEFORE solving $\\frac{dV}{dx} = 0$!\n4️⃣ **Connected Rates & Small Changes**: Link $\\frac{dy}{dt} = \\frac{dy}{dx} \\times \\frac{dx}{dt}$ and $\\delta y \\approx \\frac{dy}{dx} \\times \\delta x$.'
          },
          firstStep: {
            bm: '1. Jika soalan hanya beri $x_0$, cari koordinat $y_0$ daripada persamaan lengkung asal **terlebih dahulu**.\n2. Kira $\\frac{dy}{dx}$: ganti $x_0$ untuk kecerunan tangen, atau tetapkan $= 0$ untuk titik pusingan.\n3. Untuk Pengoptimuman, hapuskan huruf kedua menggunakan syarat tetap sebelum membezakan!',
            en: '1. If only $x_0$ is given, compute $y_0$ from the original curve equation **first**.\n2. Find $\\frac{dy}{dx}$: plug in $x_0$ for tangent gradient, or set $= 0$ for turning points.\n3. For Optimization, eliminate the second variable using the constraint equation before differentiating!'
          },
          formulas: [
            {
              label: { bm: 'Ujian Terbitan Kedua & Garis Tangen/Normal', en: 'Second Derivative Test & Tangent/Normal' },
              tex: {
                bm: '\\frac{dy}{dx} = 0: \\; \\frac{d^2y}{dx^2} > 0 \\text{ (Minimum } \\cup\\text{)}, \\; \\frac{d^2y}{dx^2} < 0 \\text{ (Maksimum } \\cap\\text{)}; \\qquad m_N = -\\frac{1}{m_T}',
                en: '\\frac{dy}{dx} = 0: \\; \\frac{d^2y}{dx^2} > 0 \\text{ (Minimum } \\cup\\text{)}, \\; \\frac{d^2y}{dx^2} < 0 \\text{ (Maximum } \\cap\\text{)}; \\qquad m_N = -\\frac{1}{m_T}'
              }
            },
            {
              label: { bm: 'Kadar Perubahan Berkaitan & Perubahan Kecil', en: 'Connected Rates & Small Changes' },
              tex: '\\frac{dy}{dt} = \\frac{dy}{dx} \\times \\frac{dx}{dt}, \\qquad \\delta y \\approx \\frac{dy}{dx} \\times \\delta x'
            }
          ],
          workedExample: {
            title: { bm: 'Contoh Dibimbing: Garis Normal & Titik Minimum Lengkung', en: 'Worked Example: Normal Line & Minimum Turning Point' },
            problem: {
              bm: 'Diberi lengkung $y = x^2 - 4x + 7$. Cari (a) persamaan garis normal di $P(3, 4)$, dan (b) koordinat titik pusingan serta sahkan sifatnya.',
              en: 'Given the curve $y = x^2 - 4x + 7$, find (a) the equation of the normal at $P(3, 4)$, and (b) the turning point and verify its nature.'
            },
            steps: [
              {
                label: { bm: 'Langkah 1: Cari fungsi kecerunan $\\frac{dy}{dx}$', en: 'Step 1: Find the gradient function $\\frac{dy}{dx}$' },
                tex: '\\frac{dy}{dx} = 2x - 4',
                why: { bm: 'Satu fungsi kecerunan ini digunakan untuk kedua-dua bahagian (a) dan (b).', en: 'This single gradient function drives both parts (a) and (b).' }
              },
              {
                label: { bm: '(a) Kira $m_T$ pada $x = 3$, tukar ke $m_N$, dan bina persamaan normal', en: '(a) Find $m_T$ at $x = 3$, flip/negate for $m_N$, and write the normal' },
                tex: 'm_T = 2(3) - 4 = 2 \\implies m_N = -\\frac{1}{2} \\implies y - 4 = -\\frac{1}{2}(x - 3) \\implies y = -\\frac{1}{2}x + \\frac{11}{2}',
                why: { bm: 'Normal berserenjang dengan tangen ($m_T \\cdot m_N = -1$).', en: 'The normal is perpendicular to the tangent ($m_T \\cdot m_N = -1$).' }
              },
              {
                label: { bm: '(b) Selesaikan $\\frac{dy}{dx} = 0$ untuk titik pusingan dan uji dengan $\\frac{d^2y}{dx^2}$', en: '(b) Solve $\\frac{dy}{dx} = 0$ for turning point and test with $\\frac{d^2y}{dx^2}$' },
                tex: '2x - 4 = 0 \\implies x = 2,\\; y = 2^2 - 4(2) + 7 = 3; \\qquad \\frac{d^2y}{dx^2} = 2 > 0 \\implies (2, 3)\\text{ Min}',
                why: { bm: 'Ganti $x = 2$ ke dalam persamaan asal $y$ untuk koordinat-$y$; $\\frac{d^2y}{dx^2} = 2 > 0$ mengesahkan titik minimum.', en: 'Plug $x = 2$ back into the original curve for $y$; $\\frac{d^2y}{dx^2} = 2 > 0$ confirms minimum.' }
              }
            ],
            trap: {
              bm: 'Jangan gantikan $x = 2$ ke dalam $\\frac{dy}{dx}$ (akan dapat $0$!), dan jangan guna $m_T = 2$ terus untuk persamaan garis normal.',
              en: 'Never substitute $x = 2$ into $\\frac{dy}{dx}$ (gives $0$!), and never use $m_T = 2$ directly as the normal gradient.'
            }
          },
          tip: {
            bm: 'Bagi soalan perubahan kecil, nilai menyusut (contoh 4 → 3.98) memberi δx NEGATIF (−0.02)!',
            en: 'For small changes, a decrease (e.g. 4 → 3.98) gives a NEGATIVE δx (−0.02)!'
          }
        }
      ],
      traps: [
        {
          title: { bm: 'Terbalik Tanda Ujian Terbitan Kedua', en: 'Reversing the Second Derivative Sign' },
          desc: {
            bm: '$\\frac{d^2y}{dx^2} > 0$ (positif) bermaksud lengkung senyum ($\\cup$) iaitu **titik MINIMUM**, manakala $\\frac{d^2y}{dx^2} < 0$ (negatif) ialah **titik MAKSIMUM**!',
            en: 'Positive $\\frac{d^2y}{dx^2} > 0$ means concave up ($\\cup$) = **MINIMUM point**; negative $\\frac{d^2y}{dx^2} < 0$ = **MAXIMUM point**!'
          }
        },
        {
          title: { bm: 'Lupa Tukar Indeks Negatif & Lupa Beza Isi Dalam', en: 'Forgetting Negative-Index Rewrite or Inner Derivative' },
          desc: {
            bm: 'Jangan bezakan penyebut di bawah pecahan (tukar $\\frac{1}{(2x+1)^3} = (2x+1)^{-3}$ dahulu), sentiasa darab hasil beza isi dalam Petua Rantai, dan ingat **Bawah ($v$) Mula Dahulu** ($\\frac{vu\' - uv\'}{v^2}$) dalam Petua Hasil Bahagi!',
            en: 'Never differentiate a denominator in place (rewrite $\\frac{1}{(2x+1)^3} = (2x+1)^{-3}$ first), always multiply by the inner derivative in Chain Rule, and remember **Bottom ($v$) Starts First** ($\\frac{vu\' - uv\'}{v^2}$) in Quotient Rule!'
          }
        },
        {
          title: { bm: 'Guna Kecerunan Tangen untuk Normal atau Berhenti pada Nilai x', en: 'Using Tangent Slope for Normal or Stopping at x' },
          desc: {
            bm: 'Kecerunan normal ialah $m_N = -\\frac{1}{m_T}$ (songsang dan tukar tanda!). Apabila mencari nilai maksimum/minimum $y$, jangan berhenti selepas mendapat nilai $x$ — gantikan $x$ semula ke dalam persamaan asal $y$!',
            en: 'Normal slope is $m_N = -\\frac{1}{m_T}$ (flip and negate!). When asked for the maximum/minimum value of $y$, do not stop at $x$ — substitute $x$ back into the original curve equation for $y$!'
          }
        }
      ],
      solvers: [
        {
          id: 'diff-tangent-solver',
          title: { bm: 'Solver Pembezaan, Tangen, Normal & Titik Pegun', en: 'Cubic Derivative, Tangent & Normal Solver' },
          desc: {
            bm: 'Bagi y = ax³ + bx² + cx pada x = x₀, jana dy/dx, d²y/dx², persamaan tangen & kecerunan normal.',
            en: 'For y = ax³ + bx² + cx at x = x₀, generate dy/dx, d²y/dx², tangent equation & normal gradient.'
          },
          inputs: [
            { id: 'a', label: 'a (x³)', default: 1 },
            { id: 'b', label: 'b (x²)', default: -3 },
            { id: 'c', label: 'c (x)', default: 2 },
            { id: 'x0', label: { bm: 'Pada x₀', en: 'At x₀' }, default: 2 }
          ],
          solve: function (v, lang) {
            const a = finiteNum(v.a, 1);
            const b = finiteNum(v.b, -3);
            const c = finiteNum(v.c, 2);
            const x0 = finiteNum(v.x0, 2);
            const y0 = a * x0 * x0 * x0 + b * x0 * x0 + c * x0;
            const mTan = 3 * a * x0 * x0 + 2 * b * x0 + c;
            const d2y = 6 * a * x0 + 2 * b;
            const cTan = y0 - mTan * x0;
            const polyStr = U.polyTex([{ c: a, p: 3 }, { c: b, p: 2 }, { c: c, p: 1 }]);
            const d1Str = U.polyTex([{ c: 3 * a, p: 2 }, { c: 2 * b, p: 1 }, { c: c, p: 0 }]);
            const d2Str = U.polyTex([{ c: 6 * a, p: 1 }, { c: 2 * b, p: 0 }]);
            const tanPoly = U.polyTex([{ c: mTan, p: 1 }, { c: U.round(cTan, 3), p: 0 }]);
            const t1y = a * x0 * x0 * x0;
            const t2y = b * x0 * x0;
            const t3y = c * x0;
            const yArith = `${U.roundStr(a, 4)}(${U.roundStr(x0, 4)})^3 + (${U.roundStr(b, 4)})(${U.roundStr(x0, 4)})^2 + (${U.roundStr(c, 4)})(${U.roundStr(x0, 4)}) = ${U.roundStr(t1y, 4)}${formatSignedTermVal(t2y, false)}${formatSignedTermVal(t3y, false)} = ${U.roundStr(y0, 4)}`;
            const m1 = 3 * a * x0 * x0;
            const m2 = 2 * b * x0;
            const mArith = `${U.roundStr(3 * a, 4)}(${U.roundStr(x0, 4)})^2 + (${U.roundStr(2 * b, 4)})(${U.roundStr(x0, 4)}) + (${U.roundStr(c, 4)}) = ${U.roundStr(m1, 4)}${formatSignedTermVal(m2, false)}${formatSignedTermVal(c, false)} = ${U.roundStr(mTan, 4)}`;
            const mNormExact = (Math.abs(mTan) > 1e-9 && Number.isInteger(mTan)) ? U.fracTex(-1, mTan) : (Math.abs(mTan) > 1e-9 ? U.roundStr(-1 / mTan, 3) : null);
            const atWord = lang === 'bm' ? 'pada' : 'at';
            const tanWord = lang === 'bm' ? 'Tangen' : 'Tangent';
            const mTanRounded = U.round(mTan, 4);
            const mTanTerm = U.polyTex([{ c: mTanRounded, p: 1 }]);
            const x0Sub = Math.abs(mTanRounded) < 1e-9 ? '' : `y = ${mTanTerm}${formatSignedTermVal(-mTan * x0, false)}${formatSignedTermVal(y0, false)} \\implies `;
            return {
              problemTex: `y = ${polyStr} \\quad \\text{${atWord} } x = ${U.roundStr(x0, 4)}`,
              steps: [
                {
                  badge: 'P1',
                  title: lang === 'bm' ? 'Langkah 1: Bezakan terhadap x' : 'Step 1: Differentiate w.r.t. x',
                  tex: `\\frac{dy}{dx} = ${d1Str}, \\qquad \\frac{d^2y}{dx^2} = ${d2Str}`,
                  why: lang === 'bm' ? 'Guna petua kuasa nxⁿ⁻¹ bagi setiap sebutan.' : 'Apply power rule nxⁿ⁻¹ to each term.'
                },
                {
                  badge: 'K1',
                  title: lang === 'bm' ? 'Langkah 2: Gantikan x₀ untuk $y_0$ dan $m_T$' : 'Step 2: Substitute x₀ for $y_0$ and $m_T$',
                  tex: `y(${U.roundStr(x0, 4)}) = ${yArith}; \\qquad m_T = ${mArith}`,
                  why: lang === 'bm' ? 'Gantikan x = x₀ ke dalam persamaan asal y untuk koordinat-y dan ke dalam dy/dx untuk kecerunan tangen.' : 'Substitute x = x₀ into original y for the y-coordinate and into dy/dx for the tangent slope.'
                },
                {
                  badge: 'J1',
                  title: lang === 'bm' ? 'Langkah 3: Persamaan Tangen & Kecerunan Normal' : 'Step 3: Tangent Equation & Normal Gradient',
                  tex: `y - (${U.roundStr(y0, 4)}) = ${U.roundStr(mTan, 4)}(x - (${U.roundStr(x0, 4)})) \\implies ${x0Sub}y = ${tanPoly}`,
                  why: mNormExact
                    ? (lang === 'bm'
                        ? `Bagi garis normal yang berserenjang: $m_N = -\\frac{1}{m_T} = ${mNormExact}$ (≈ $${U.roundStr(-1 / mTan, 3)}$).`
                        : `For the perpendicular normal line: $m_N = -\\frac{1}{m_T} = ${mNormExact}$ (≈ $${U.roundStr(-1 / mTan, 3)}$).`)
                    : (lang === 'bm' ? 'Kecerunan sifar: tangen mengufuk (titik pegun!), maka normal ialah garis mencancang $x = ' + U.roundStr(x0, 4) + '$.' : 'Zero gradient: horizontal tangent (stationary point!), so normal is vertical $x = ' + U.roundStr(x0, 4) + '$.')
                }
              ],
              finalTex: `m_T = ${U.roundStr(mTan, 4)},\\; \\text{${tanWord}: } y = ${tanPoly},\\; \\frac{d^2y}{dx^2}(${U.roundStr(x0, 4)}) = ${U.roundStr(d2y, 4)}`,
              trapWarning: lang === 'bm'
                ? 'Jangan guna m_T terus untuk garis normal (m_N = -1/m_T), dan jangan gantikan x₀ ke dalam dy/dx untuk mencari y₀!'
                : 'Do not use m_T directly for the normal (m_N = -1/m_T), and never plug x₀ into dy/dx to find y₀!'
            };
          }
        }
      ],
      generateQuestion: function (tier, lang) {
        if (tier === 1) {
          const a = U.randInt(2, 4);
          const b = U.randInt(-5, 5, true);
          const x0 = U.pick([1, 2, -1]);
          const grad = 2 * a * x0 + b;
          const poly = U.polyTex([{ c: a, p: 2 }, { c: b, p: 1 }, { c: 7, p: 0 }]);
          const dydx = U.polyTex([{ c: 2 * a, p: 1 }, { c: b, p: 0 }]);
          const yTrap = a * x0 * x0 + b * x0 + 7;
          const noTwoTrap = a * x0 + b;
          const traps = [
            { value: yTrap, message: { bm: 'Perangkap [P]: Itu nilai koordinat-y asal, bukan kecerunan dy/dx! Bezakan dahulu.', en: 'Trap [P]: That is the y-coordinate, not the derivative dy/dx! Differentiate first.' } }
          ];
          if (Math.abs(noTwoTrap - grad) > 0.5 && Math.abs(noTwoTrap - yTrap) > 0.5) {
            traps.push({ value: noTwoTrap, message: { bm: `Perangkap [K]: Anda terlupa mendarab kuasa 2 dengan ${a} semasa membezakan ${a}x²!`, en: `Trap [K]: You forgot to multiply power 2 by ${a} when differentiating ${a}x²!` } });
          }
          return {
            tier: 1, tpLabel: 'TP1–TP2', subtopic: { bm: '2.2 Kecerunan Tangen pada Suatu Titik', en: '2.2 Gradient of Tangent at a Point' }, marks: 3,
            prompt: lang === 'bm'
              ? `Cari **kecerunan tangen** kepada lengkung $y = ${poly}$ pada titik dengan $x = ${x0}$.`
              : `Find the **gradient of the tangent** to the curve $y = ${poly}$ at the point where $x = ${x0}$.`,
            answerType: 'number', correctValue: grad, displayAnswerTex: `m_T = ${grad}`,
            intentMeta: {
              given: { bm: `$y = ${poly},\\; x = ${x0}$`, en: `$y = ${poly},\\; x = ${x0}$` },
              goal: { bm: `Cari kecerunan tangen $\\frac{dy}{dx}$ apabila $x = ${x0}$`, en: `Find the tangent gradient $\\frac{dy}{dx}$ at $x = ${x0}$` },
              conceptRule: { bm: '$\\frac{d}{dx}(ax^2 + bx + c) = 2ax + b$', en: '$\\frac{d}{dx}(ax^2 + bx + c) = 2ax + b$' }
            },
            guidedSteps: [
              { prompt: { bm: `Apakah pekali bagi $x$ dalam $\\frac{dy}{dx}$ selepas membezakan $${a}x^2$?`, en: `What is the coefficient of $x$ in $\\frac{dy}{dx}$ after differentiating $${a}x^2$?` }, expected: 2 * a, hint: { bm: `Darab kuasa 2 dengan ${a}.`, en: `Multiply power 2 by ${a}.` } },
              { prompt: { bm: `Gantikan $x = ${x0}$ ke dalam $\\frac{dy}{dx} = ${dydx}$:`, en: `Substitute $x = ${x0}$ into $\\frac{dy}{dx} = ${dydx}$:` }, expected: grad, hint: { bm: `Kira ${2 * a}(${x0}) + (${b}).`, en: `Compute ${2 * a}(${x0}) + (${b}).` } }
            ],
            traps,
            hints: [
              { bm: 'Langkah 1: Bezakan y = ax² + bx + 7 untuk mendapat dy/dx = 2ax + b (pemalar 7 menjadi 0).', en: 'Step 1: Differentiate y = ax² + bx + 7 to get dy/dx = 2ax + b (constant 7 becomes 0).' },
              { bm: `Langkah 2: Gantikan x = ${x0} ke dalam dy/dx, BUKAN ke dalam persamaan asal y.`, en: `Step 2: Substitute x = ${x0} into dy/dx, NOT into the original y equation.` }
            ],
            steps: [
              { badge: 'P1', title: lang === 'bm' ? 'Bezakan y terhadap x' : 'Differentiate y w.r.t. x', tex: `\\frac{dy}{dx} = ${dydx}`, why: lang === 'bm' ? 'Guna petua kuasa: darab kuasa 2 dengan ' + a + ' dan tolak 1 daripada kuasa; pemalar 7 hilang menjadi 0.' : 'Apply power rule: multiply power 2 by ' + a + ' and subtract 1; constant 7 differentiates to 0.' },
              { badge: 'J1', title: lang === 'bm' ? 'Gantikan x = ' + x0 : 'Substitute x = ' + x0, tex: `m_T = ${2 * a}(${x0})${formatSignedTermVal(b, false)} = ${2 * a * x0}${formatSignedTermVal(b, false)} = ${grad}`, why: lang === 'bm' ? 'Nilai dy/dx pada x = ' + x0 + ' ialah kecerunan tangen.' : 'Evaluating dy/dx at x = ' + x0 + ' gives the tangent gradient.' }
            ]
          };
        }
        if (tier === 2) {
          const a = U.randInt(2, 4);
          const xStar = U.randInt(-3, 4, true);
          const b = -2 * a * xStar;
          let c = U.randInt(1, 9);
          let yMin = a * xStar * xStar + b * xStar + c;
          while (Math.abs(yMin - xStar) <= 0.5 || Math.abs(yMin + xStar) <= 0.5) {
            c += 2;
            yMin = a * xStar * xStar + b * xStar + c;
          }
          const poly = U.polyTex([{ c: a, p: 2 }, { c: b, p: 1 }, { c: c, p: 0 }]);
          const dydx = U.polyTex([{ c: 2 * a, p: 1 }, { c: b, p: 0 }]);
          const t1Val = a * xStar * xStar;
          const t2Val = b * xStar;
          return {
            tier: 2, tpLabel: 'TP3–TP4', subtopic: { bm: '2.4 Titik Pusingan (dy/dx = 0)', en: '2.4 Turning Points (dy/dx = 0)' }, marks: 4,
            prompt: lang === 'bm'
              ? `Cari **nilai minimum bagi $y$** untuk lengkung $y = ${poly}$ menggunakan kaedah pembezaan.`
              : `Find the **minimum value of $y$** for the curve $y = ${poly}$ using differentiation.`,
            answerType: 'number', correctValue: yMin, displayAnswerTex: `y_{\\min} = ${yMin} \\quad (\\text{${lang === 'bm' ? 'pada' : 'at'} } x = ${xStar})`,
            intentMeta: {
              given: { bm: `$y = ${poly}$`, en: `$y = ${poly}$` },
              goal: { bm: 'Selesaikan $\\frac{dy}{dx} = 0$ untuk $x$, kemudian cari nilai minimum $y$', en: 'Solve $\\frac{dy}{dx} = 0$ for $x$, then substitute back for minimum $y$' },
              conceptRule: { bm: 'Pada titik pusingan, $\\frac{dy}{dx} = 0$ dan $\\frac{d^2y}{dx^2} > 0$ mengesahkan minimum', en: 'At turning points, $\\frac{dy}{dx} = 0$ and $\\frac{d^2y}{dx^2} > 0$ confirms minimum' }
            },
            guidedSteps: [
              { prompt: { bm: `Tetapkan $\\frac{dy}{dx} = ${dydx} = 0$. Apakah nilai $x$?`, en: `Set $\\frac{dy}{dx} = ${dydx} = 0$. What is $x$?` }, expected: xStar, hint: { bm: `Selesaikan ${2 * a}x = ${-b}.`, en: `Solve ${2 * a}x = ${-b}.` } },
              { prompt: { bm: `Gantikan $x = ${xStar}$ ke dalam persamaan asal $y = ${poly}$ untuk nilai minimum $y$:`, en: `Substitute $x = ${xStar}$ back into $y = ${poly}$ for minimum $y$:` }, expected: yMin, hint: { bm: `Kira ${a}(${xStar})² + (${b})(${xStar}) + ${c}.`, en: `Compute ${a}(${xStar})² + (${b})(${xStar}) + ${c}.` } }
            ],
            traps: [
              { value: xStar, message: { bm: 'Perangkap [J]: Itu nilai x pada titik minimum! Soalan meminta nilai minimum bagi y.', en: 'Trap [J]: That is the x-coordinate! Substitute x back into y to get minimum y.' } },
              { value: -xStar, message: { bm: 'Perangkap [K]: Tersilap tanda semasa memindahkan pemalar ke sebelah kanan persamaan!', en: 'Trap [K]: Sign flip error when moving the constant term to the other side!' } }
            ],
            hints: [
              { bm: 'Langkah 1: Bezakan y dan tetapkan dy/dx = 0 untuk mencari koordinat-x titik pusingan.', en: 'Step 1: Differentiate y and set dy/dx = 0 to locate the turning point x-value.' },
              { bm: 'Langkah 2: Gantikan nilai x itu ke dalam persamaan asal y (bukan dy/dx) untuk nilai minimum y.', en: 'Step 2: Substitute that x-value into the original curve y (not dy/dx) to find minimum y.' }
            ],
            steps: [
              { badge: 'P1', title: lang === 'bm' ? 'Syarat titik pegun dy/dx = 0' : 'Stationary condition dy/dx = 0', tex: `\\frac{dy}{dx} = ${dydx} = 0 \\implies ${2 * a}x = ${-b} \\implies x = ${xStar}`, why: lang === 'bm' ? 'Di titik minimum, tangen adalah mendatar jadi kecerunan dy/dx = 0.' : 'At a turning point, the tangent is flat so dy/dx = 0.' },
              { badge: 'K1', title: lang === 'bm' ? 'Ganti x ke dalam persamaan asal y' : 'Substitute x into original y', tex: `y_{\\min} = ${a}(${xStar})^2 + (${b})(${xStar}) + ${c} = ${t1Val}${formatSignedTermVal(t2Val, false)} + ${c}`, why: lang === 'bm' ? 'Hitung setiap sebutan berhati-hati sebelum menjumlahkan.' : 'Evaluate each term carefully before summing.' },
              { badge: 'J1', title: lang === 'bm' ? 'Nilai minimum y' : 'Minimum value of y', tex: `y_{\\min} = ${yMin}`, why: lang === 'bm' ? `d²y/dx² = ${2 * a} > 0 (lengkung senyum ∪) mengesahkan titik minimum.` : `d²y/dx² = ${2 * a} > 0 (concave up ∪) confirms a minimum point.` }
            ]
          };
        }
        // Tier 3 KBAT: Connected rates of change!
        const xVal = U.randInt(2, 5);
        const dxdt = U.pick([0.2, 0.5, 1.5, 2]);
        const dVdx = 3 * xVal * xVal;
        const dVdt = U.round(dVdx * dxdt, 3);
        const missThreeTrap = U.round(xVal * xVal * dxdt, 3);
        const traps = [
          { value: dVdx, message: { bm: 'Perangkap [K]: Itu baru dV/dx! Jangan lupa darabkan dengan kadar dx/dt mengikut Petua Rantai.', en: 'Trap [K]: That is only dV/dx! Multiply by dx/dt using the Chain Rule.' } }
        ];
        if (Math.abs(missThreeTrap - dVdt) > 0.05 && Math.abs(missThreeTrap - dVdx) > 0.05) {
          traps.push({ value: missThreeTrap, message: { bm: 'Perangkap [P]: Anda terlupa pekali 3 dalam dV/dx = 3x² semasa membezakan V = x³!', en: 'Trap [P]: You forgot the factor 3 in dV/dx = 3x² when differentiating V = x³!' } });
        }
        return {
          tier: 3, tpLabel: 'TP5–TP6 (KBAT)', subtopic: { bm: '2.4 Kadar Perubahan Berkaitan (Petua Rantai)', en: '2.4 Connected Rates of Change (Chain Rule)' }, marks: 4,
          prompt: lang === 'bm'
            ? `Sebuah kiub logam mengembang apabila dipanaskan supaya panjang sisinya $x\\text{ cm}$ bertambah pada kadar tetap $${dxdt}\\text{ cm s}^{-1}$. Cari **kadar perubahan isi padu** kiub itu ($\\text{cm}^3\\text{ s}^{-1}$) pada ketika $x = ${xVal}\\text{ cm}$.`
            : `A metal cube expands when heated such that its side length $x\\text{ cm}$ increases at a constant rate of $${dxdt}\\text{ cm s}^{-1}$. Find the **rate of change of its volume** ($\\text{cm}^3\\text{ s}^{-1}$) at the instant when $x = ${xVal}\\text{ cm}$.`,
          answerType: 'number', correctValue: dVdt, displayAnswerTex: `\\frac{dV}{dt} = ${dVdt}\\text{ cm}^3\\text{ s}^{-1}`,
          intentMeta: {
            given: { bm: `$V = x^3,\\; \\frac{dx}{dt} = ${dxdt},\\; x = ${xVal}$`, en: `$V = x^3,\\; \\frac{dx}{dt} = ${dxdt},\\; x = ${xVal}$` },
            goal: { bm: 'Cari kadar isi padu $\\frac{dV}{dt}$ menggunakan Petua Rantai', en: 'Find volume rate $\\frac{dV}{dt}$ using the Chain Rule' },
            conceptRule: { bm: '$\\frac{dV}{dt} = \\frac{dV}{dx} \\times \\frac{dx}{dt}$ dengan $V = x^3$', en: '$\\frac{dV}{dt} = \\frac{dV}{dx} \\times \\frac{dx}{dt}$ with $V = x^3$' }
          },
          guidedSteps: [
            { prompt: { bm: `Isi padu kiub ialah $V = x^3$, maka $\\frac{dV}{dx} = 3x^2$. Nilaikan $\\frac{dV}{dx}$ apabila $x = ${xVal}$:`, en: `Cube volume is $V = x^3$, so $\\frac{dV}{dx} = 3x^2$. Evaluate $\\frac{dV}{dx}$ at $x = ${xVal}$:` }, expected: dVdx, hint: { bm: `Kira 3 × (${xVal})².`, en: `Compute 3 × (${xVal})².` } },
            { prompt: { bm: `Guna Petua Rantai $\\frac{dV}{dt} = \\frac{dV}{dx} \\times \\frac{dx}{dt} = ${dVdx} \\times ${dxdt}$:`, en: `Apply Chain Rule $\\frac{dV}{dt} = \\frac{dV}{dx} \\times \\frac{dx}{dt} = ${dVdx} \\times ${dxdt}$:` }, expected: dVdt, hint: { bm: `Darab ${dVdx} dengan ${dxdt}.`, en: `Multiply ${dVdx} by ${dxdt}.` } }
          ],
          traps,
          hints: [
            { bm: 'Tulis rumus isi padu kiub V = x³ dahulu dan bezakan terhadap x untuk dV/dx = 3x² (ganti x selepas membezakan!).', en: 'Write cube volume V = x³ first and differentiate w.r.t. x to get dV/dx = 3x² (plug x AFTER differentiating!).' },
            { bm: 'Sambungkan rantai: dV/dt = (dV/dx) × (dx/dt).', en: 'Connect the chain: dV/dt = (dV/dx) × (dx/dt).' }
          ],
          steps: [
            { badge: 'P1', title: lang === 'bm' ? 'Bezakan isi padu V = x³' : 'Differentiate volume V = x³', tex: `V = x^3 \\implies \\frac{dV}{dx} = 3x^2 \\implies \\left.\\frac{dV}{dx}\\right|_{x=${xVal}} = 3(${xVal})^2 = 3(${xVal * xVal}) = ${dVdx}`, why: lang === 'bm' ? 'Bezakan V terhadap x dahulu sebelum menggantikan x = ' + xVal + '.' : 'Differentiate V w.r.t. x before substituting x = ' + xVal + '.' },
            { badge: 'K1', title: lang === 'bm' ? 'Bina hubungan Petua Rantai' : 'Set up Chain Rule', tex: `\\frac{dV}{dt} = \\frac{dV}{dx} \\times \\frac{dx}{dt} = ${dVdx} \\times ${dxdt}`, why: lang === 'bm' ? 'Pemboleh ubah dx saling mansuh secara berantai untuk menghubungkan dx/dt kepada dV/dt.' : 'dx cancels diagonally in the chain bridge linking dx/dt to dV/dt.' },
            { badge: 'J1', title: lang === 'bm' ? 'Kadar perubahan isi padu' : 'Rate of change of volume', tex: `\\frac{dV}{dt} = ${dVdt}\\text{ cm}^3\\text{ s}^{-1}`, why: lang === 'bm' ? 'Nilai kadar perubahan isi padu pada ketika x = ' + xVal + ' cm.' : 'Exact rate of change of volume at the instant x = ' + xVal + ' cm.' }
          ]
        };
      }
    },

    // =========================================================================
    // FORM 5 CHAPTER 3: INTEGRATION / PENGAMIRAN
    // =========================================================================
    {
      id: 'f5-c3',
      stage: 3,
      unlocked: true,
      form: 5,
      num: 3,
      code: { bm: 'T5 • Bab 3', en: 'F5 • Ch 3' },
      icon: '∫dx',
      color: '#dc2626',
      category: 'kalkulus',
      title: { bm: 'Pengamiran', en: 'Integration' },
      subtitle: {
        bm: 'Songsangan pembezaan, +c & persamaan lengkung, kamiran tentu, luas antara lengkung & isi padu kisaran',
        en: 'Reverse differentiation, +c & curve recovery, definite integrals, area between curves & volume'
      },
      spmWeight: { bm: 'Topik Gergasi SPM! K1 & K2 (12–16 markah)', en: 'Heavyweight SPM Topic! P1 & P2 (12–16 marks)' },
      concepts: [
        {
          title: { bm: '1. Kamiran Tak Tentu (+c), Persamaan Lengkung & Taktik "Seterusnya"', en: '1. Indefinite Integrals (+c), Curve Recovery & "Hence" Strategy' },
          prereq: {
            bm: '⏪ **Analogi Butang Undur (*Rewind*)**: Perhatikan $\\frac{d}{dx}(x^3 + 5) = 3x^2$ dan $\\frac{d}{dx}(x^3 - 9) = 3x^2$. Semasa pembezaan, nombor pemalar ($+5$ atau $-9$) lesap menjadi $0$! Jadi apabila anda tekan butang undur (Pengamiran) daripada $3x^2$, anda **WAJIB meletakkan $+ c$** untuk memulihkan pemalar yang hilang itu.',
            en: '⏪ **Rewind Button Analogy**: Notice $\\frac{d}{dx}(x^3 + 5) = 3x^2$ and $\\frac{d}{dx}(x^3 - 9) = 3x^2$. Differentiation erases constants ($+5$ or $-9$) to $0$! So when you hit rewind (Integration) on $3x^2$, you **MUST add $+ c$** to restore the lost constant.'
          },
          body: {
            bm: 'Jika $\\frac{dy}{dx} = f\'(x)$, maka $y = \\int f\'(x)\\,dx$. Untuk polinomial, **tambah kuasa $+1$, bahagi kuasa baharu, dan tulis $+ c$**! Jika satu titik $(x_1, y_1)$ pada lengkung diberi, gantikan titik tersebut untuk mencari nilai tepat **$c$**.\nBagi kurungan linear $\\int (ax + b)^n\\,dx = \\frac{(ax + b)^{n+1}}{a(n + 1)} + c$, ingat **BAHAGI pekali $a$** (terbalik daripada pembezaan yang DARAB $a$!).\n⚡ **Taktik "Seterusnya" (*Hence*) SPM**: Jika bahagian (a) suruh bezakan $F(x)$ dan dapat $k \\cdot g(x)$, bahagian (b) minta $\\int g(x)\\,dx$ — JANGAN kamir dari mula! Terbalikkan sahaja keputusan (a): $\\int g(x)\\,dx = \\frac{1}{k}F(x) + c$.',
            en: 'If $\\frac{dy}{dx} = f\'(x)$, then $y = \\int f\'(x)\\,dx$. For polynomials, **increase the power by $1$, divide by the new power, and always write $+ c$**! Whenever a point $(x_1, y_1)$ on the curve is given, substitute it into $y$ to solve for **$c$**.\nFor linear brackets $\\int (ax + b)^n\\,dx = \\frac{(ax + b)^{n+1}}{a(n + 1)} + c$, **DIVIDE by $a$** (opposite of differentiation which MULTIPLIES by $a$!).\n⚡ **SPM "Hence" Strategy**: If part (a) differentiates $F(x)$ to get $k \\cdot g(x)$ and part (b) asks for $\\int g(x)\\,dx$, NEVER integrate from scratch! Reverse part (a) directly: $\\int g(x)\\,dx = \\frac{1}{k}F(x) + c$.'
          },
          firstStep: {
            bm: '1. Kembangkan kurungan atau tukar $\\frac{1}{x^n} = x^{-n}$ dahulu sebelum mengamir (tiada petua hasil darab dalam pengamiran SPM!).\n2. Naikkan kuasa $+1$, bahagi kuasa baharu.\n3. Terus tulis **$+ c$**; jika ada koordinat $(x_1, y_1)$, gantikan masuk untuk dapatkan nilai $c$.',
            en: '1. Expand brackets or rewrite $\\frac{1}{x^n} = x^{-n}$ BEFORE integrating (there is no product/quotient rule in SPM integration!).\n2. Add $1$ to the power, divide by the new power.\n3. Write **$+ c$** immediately; if a point $(x_1, y_1)$ is given, plug it in to solve for $c$.'
          },
          formulas: [
            {
              label: { bm: 'Kamiran Tak Tentu Polinomial & Komposit', en: 'Polynomial & Linear Composite Integrals' },
              tex: '\\int ax^n\\,dx = \\frac{ax^{n+1}}{n+1} + c \\;(n \\ne -1), \\qquad \\int (ax+b)^n\\,dx = \\frac{(ax+b)^{n+1}}{a(n+1)} + c'
            },
            {
              label: { bm: 'Taktik "Seterusnya" (Songsangan Terus)', en: '"Hence" Strategy (Direct Reversal)' },
              tex: '\\frac{d}{dx}[F(x)] = k\\,g(x) \\implies \\int g(x)\\,dx = \\frac{1}{k}F(x) + c'
            }
          ],
          workedExample: {
            title: { bm: 'Contoh Dibimbing: Pemulihan Persamaan Lengkung & Kurungan Linear', en: 'Worked Example: Curve Recovery & Linear Bracket' },
            problem: {
              bm: '(a) Diberi $\\frac{dy}{dx} = 6x^2 - 4x + 1$ dan lengkung melalui $(1, 5)$, cari persamaan lengkung itu. (b) Cari $\\int (2x - 3)^4\\,dx$.',
              en: '(a) Given $\\frac{dy}{dx} = 6x^2 - 4x + 1$ and the curve passes through $(1, 5)$, find the equation of the curve. (b) Find $\\int (2x - 3)^4\\,dx$.'
            },
            steps: [
              {
                label: { bm: '(a) Langkah 1: Kamirkan $\\frac{dy}{dx}$ dan wajib sertakan $+ c$', en: '(a) Step 1: Integrate $\\frac{dy}{dx}$ and include $+ c$' },
                tex: 'y = \\int (6x^2 - 4x + 1)\\,dx = \\frac{6x^3}{3} - \\frac{4x^2}{2} + x + c = 2x^3 - 2x^2 + x + c',
                why: { bm: 'Kamiran bagi pemalar $1$ ialah $1x = x$, dan $+ c$ wajib ditulis.', en: 'Integrating constant $1$ gives $1x = x$, and $+ c$ is mandatory.' }
              },
              {
                label: { bm: '(a) Langkah 2: Gantikan $(1, 5)$ untuk mencari $c$', en: '(a) Step 2: Substitute $(1, 5)$ to solve for $c$' },
                tex: '5 = 2(1)^3 - 2(1)^2 + (1) + c \\implies 5 = 2 - 2 + 1 + c \\implies c = 4 \\implies y = 2x^3 - 2x^2 + x + 4',
                why: { bm: 'Titik $(1, 5)$ berada di atas lengkung, jadi $x=1$ dan $y=5$ memenuhi persamaan lengkung.', en: 'Point $(1, 5)$ lies on the curve, so $x=1, y=5$ satisfies its equation.' }
              },
              {
                label: { bm: '(b) Kamiran kurungan linear $(2x - 3)^4$', en: '(b) Integrate linear bracket $(2x - 3)^4$' },
                tex: '\\int (2x - 3)^4\\,dx = \\frac{(2x - 3)^{4+1}}{2(4+1)} + c = \\frac{(2x - 3)^5}{10} + c',
                why: { bm: 'Bahagi dengan kuasa baharu $5$ DAN pekali $x$ iaitu $a = 2$ ($2 \\times 5 = 10$).', en: 'Divide by both the new power $5$ AND the coefficient of $x$, $a = 2$ ($2 \\times 5 = 10$).' }
              }
            ],
            trap: {
              bm: 'Dalam (a), tertinggal $+ c$ atau mengamir $1$ sebagai $0$ merosakkan persamaan; dalam (b), lupa membahagi $a = 2$ memberi $\\frac{(2x-3)^5}{5} + c$.',
              en: 'In (a), omitting $+ c$ or integrating $1$ to $0$ breaks the curve; in (b), forgetting to divide by $a = 2$ gives $\\frac{(2x-3)^5}{5} + c$.'
            }
          },
          tip: {
            bm: 'Perhatikan beza: Pembezaan DARAB pekali dalaman a, manakala Pengamiran BAHAGI dengan pekali dalaman a!',
            en: 'Contrast: Differentiation MULTIPLIES by inner coefficient a, whereas Integration DIVIDES by inner coefficient a!'
          }
        },
        {
          title: { bm: '2. Kamiran Tentu & Luas Rantau (Paksi-x, Paksi-y & Antara Dua Lengkung)', en: '2. Definite Integrals & Bounded Area (x-axis, y-axis & Between Two Curves)' },
          prereq: {
            bm: 'Bayangkan menyusun ratusan segi empat tepat nipis menegak dari $x = a$ ke $x = b$ — jumlah luasnya ialah kamiran tentu $\\int_a^b f(x)\\,dx = F(b) - F(a)$ (pemalar $+c$ saling hapus kerana $c - c = 0$).',
            en: 'Picture stacking hundreds of thin vertical rectangles from $x = a$ to $x = b$ — their total area is the definite integral $\\int_a^b f(x)\\,dx = F(b) - F(a)$ (here $+c$ cancels since $c - c = 0$).'
          },
          body: {
            bm: '🧭 **Kompas Paksi**: Jika rantau bersandar pada **paksi-$x$** $\\implies \\int_{x_1}^{x_2} y\\,dx$; jika bersandar pada **paksi-$y$** $\\implies$ susun semula kepada $x = \\dots$ dan guna $\\int_{y_1}^{y_2} x\\,dy$. Jika rantau berada di **bawah paksi-$x$**, ambil nilai mutlak $|\\int y\\,dx|$!\n✂️ **Luas Antara Dua Lengkung / Lengkung & Garis**: Cari titik persilangan $a, b$ dahulu ($y_1 = y_2$), kemudian kamirkan **graf atas tolak graf bawah**: $\\int_a^b (y_{\\text{atas}} - y_{\\text{bawah}})\\,dx$! Bagi garis lurus, boleh juga guna luas Segi Tiga atau Trapezium.',
            en: '🧭 **Axis Compass**: Against the **$x$-axis** $\\implies \\int_{x_1}^{x_2} y\\,dx$; against the **$y$-axis** $\\implies$ rearrange to $x = \\dots$ and use $\\int_{y_1}^{y_2} x\\,dy$. For regions **below the $x$-axis**, take the modulus $|\\int y\\,dx|$!\n✂️ **Area Between Two Curves / Curve & Line**: Solve intersections $a, b$ first ($y_1 = y_2$), then integrate **top graph minus bottom graph**: $\\int_a^b (y_{\\text{top}} - y_{\\text{bottom}})\\,dx$! For straight lines, Triangle/Trapezium formulas also work.'
          },
          firstStep: {
            bm: '1. Cari had kamiran ($x$-pintasan apabila $y = 0$, atau titik persilangan $y_1 = y_2$) **dahulu**.\n2. Kenal pasti graf mana di atas ($y_{\\text{atas}}$) dan di bawah ($y_{\\text{bawah}}$) dengan menguji satu titik tengah.\n3. Jika ada nilai pemalar $\\int_a^b k\\,dx$, kamirkan menjadi $k(b - a)$, bukan $k$!',
            en: '1. Find the integration limits ($x$-intercepts at $y = 0$, or intersections $y_1 = y_2$) **first**.\n2. Check which graph is on top ($y_{\\text{top}}$) vs bottom ($y_{\\text{bottom}}$) using a test point inside the interval.\n3. For any constant $\\int_a^b k\\,dx$, integrate it to $k(b - a)$, never leave it as $k$!'
          },
          formulas: [
            {
              label: { bm: 'Sifat Songsangan Had & Penambahan', en: 'Limit Reversal & Additivity' },
              tex: '\\int_b^a f(x)\\,dx = -\\int_a^b f(x)\\,dx, \\qquad \\int_a^c f(x)\\,dx = \\int_a^b f(x)\\,dx + \\int_b^c f(x)\\,dx'
            },
            {
              label: { bm: 'Luas Rantau & Luas Antara Dua Lengkung', en: 'Bounded Area & Area Between Two Curves' },
              tex: {
                bm: 'A_x = \\int_a^b |y|\\,dx, \\qquad A_y = \\int_c^d |x|\\,dy, \\qquad A = \\int_a^b (y_{\\text{atas}} - y_{\\text{bawah}})\\,dx',
                en: 'A_x = \\int_a^b |y|\\,dx, \\qquad A_y = \\int_c^d |x|\\,dy, \\qquad A = \\int_a^b (y_{\\text{top}} - y_{\\text{bottom}})\\,dx'
              }
            }
          ],
          workedExample: {
            title: { bm: 'Contoh Dibimbing: Luas Antara Lengkung $y = x^2$ & Garis $y = 2x$', en: 'Worked Example: Area Between Curve $y = x^2$ & Line $y = 2x$' },
            problem: {
              bm: 'Cari luas rantau tertutup yang dibatasi oleh lengkung $y = x^2$ dan garis lurus $y = 2x$.',
              en: 'Find the area of the closed region bounded by the curve $y = x^2$ and the straight line $y = 2x$.'
            },
            steps: [
              {
                label: { bm: 'Langkah 1: Cari titik persilangan ($y_1 = y_2$)', en: 'Step 1: Find intersections ($y_1 = y_2$)' },
                tex: 'x^2 = 2x \\implies x^2 - 2x = 0 \\implies x(x - 2) = 0 \\implies x = 0,\\; x = 2',
                why: { bm: 'Jangan bahagi dengan $x$ terus nanti akar $x = 0$ hilang! Faktorkan $x(x - 2) = 0$.', en: 'Never divide by $x$ or you lose the root $x = 0$! Factor $x(x - 2) = 0$.' }
              },
              {
                label: { bm: 'Langkah 2: Semak fungsi atas pada $x = 1$ dan susun kamiran', en: 'Step 2: Check top function at $x = 1$ and set up integral' },
                tex: {
                  bm: '\\text{Pada } x = 1: 2(1) = 2 > 1^2 = 1 \\implies A = \\int_0^2 (2x - x^2)\\,dx = \\left[x^2 - \\frac{x^3}{3}\\right]_0^2',
                  en: '\\text{At } x = 1: 2(1) = 2 > 1^2 = 1 \\implies A = \\int_0^2 (2x - x^2)\\,dx = \\left[x^2 - \\frac{x^3}{3}\\right]_0^2'
                },
                why: { bm: 'Garis $y = 2x$ berada di atas lengkung $y = x^2$ dalam selang $[0, 2]$, jadi tolak $(2x - x^2)$.', en: 'Line $y = 2x$ sits above curve $y = x^2$ on $[0, 2]$, so integrate $(2x - x^2)$.' }
              },
              {
                label: { bm: 'Langkah 3: Gantikan had atas dan had bawah', en: 'Step 3: Substitute upper and lower limits' },
                tex: 'A = \\left(2^2 - \\frac{2^3}{3}\\right) - (0 - 0) = 4 - \\frac{8}{3} = \\frac{12}{3} - \\frac{8}{3} = \\frac{4}{3}\\text{ unit}^2',
                why: { bm: 'Kira had atas tolak had bawah dan tukar kepada pecahan sepunya.', en: 'Evaluate upper limit minus lower limit with a common denominator.' }
              }
            ],
            trap: {
              bm: 'Membahagi $x^2 = 2x$ dengan $x$ menyebabkan had $x = 0$ hilang! Dan pastikan menolak (Atas − Bawah) supaya luas tidak menjadi negatif.',
              en: 'Dividing $x^2 = 2x$ by $x$ loses limit $x = 0$! Also always subtract (Top − Bottom) so area stays positive.'
            }
          },
          tip: {
            bm: 'Untuk rantau antara lengkung dan garis lurus, anda juga boleh mengira luas garis lurus menggunakan rumus Segi Tiga atau Trapezium!',
            en: 'For a region between a curve and a straight line, you can also compute the straight-line part using Triangle or Trapezium area!'
          }
        },
        {
          title: { bm: '3. Isi Padu Kisaran 360° & Isi Padu Berongga', en: '3. 360° Volume of Revolution & Hollow Washer Volume' },
          prereq: {
            bm: '🏺 **Analogi Mesin Tembikar**: Apabila suatu lengkung diputarkan $360^\\circ$ mengelilingi paksi-$x$, setiap hirisan nipis membentuk **cakera bulat** berjejari $r = y$. Luas bulatan ialah $\\pi r^2 = \\pi y^2$ — itulah sebabnya rumus isi padu kisaran **WAJIB ada $\\pi$ dan kuasa dua**!',
            en: '🏺 **Pottery Wheel Analogy**: Spinning a curve $360^\\circ$ around the $x$-axis sweeps out thin **circular discs** of radius $r = y$. Each disc has area $\\pi r^2 = \\pi y^2$ — which is why revolution volume **MUST have both $\\pi$ and a square**!'
          },
          body: {
            bm: 'Putaran $360^\\circ$ mengelilingi paksi-$x$ memberi $V_x = \\pi\\int_a^b y^2\\,dx$; mengelilingi paksi-$y$ memberi $V_y = \\pi\\int_c^d x^2\\,dy$.\n🍩 **Isi Padu Berongga (Antara Dua Lengkung)**: Jika rantau antara dua graf diputarkan $360^\\circ$, tolak isi padu luar dengan isi padu dalam: $V = \\pi\\int_a^b (y_{\\text{luar}}^2 - y_{\\text{dalam}}^2)\\,dx$ (**BUKAN** $\\pi\\int (y_1 - y_2)^2\\,dx$!).',
            en: 'Rotating $360^\\circ$ about the $x$-axis gives $V_x = \\pi\\int_a^b y^2\\,dx$; about the $y$-axis gives $V_y = \\pi\\int_c^d x^2\\,dy$.\n🍩 **Hollow Washer Volume (Between Two Curves)**: When a region between two graphs rotates $360^\\circ$, subtract outer minus inner volume: $V = \\pi\\int_a^b (y_{\\text{outer}}^2 - y_{\\text{inner}}^2)\\,dx$ (**NOT** $\\pi\\int (y_1 - y_2)^2\\,dx$!).'
          },
          firstStep: {
            bm: '1. Pastikan paksi putaran (paksi-$x \\implies y^2\\,dx$; paksi-$y \\implies x^2\\,dy$).\n2. Tulis $\\pi$ di hadapan tanda kamiran supaya tidak tertinggal.\n3. Kembangkan kuasa dua $(a + b)^2 = a^2 + 2ab + b^2$ sepenuhnya **sebelum** mengamir!',
            en: '1. Match the axis of rotation ($x$-axis $\\implies y^2\\,dx$; $y$-axis $\\implies x^2\\,dy$).\n2. Write $\\pi$ in front of the integral sign immediately so you never drop it.\n3. Expand $(a + b)^2 = a^2 + 2ab + b^2$ completely **before** integrating!'
          },
          formulas: [
            {
              label: { bm: 'Isi Padu Kisaran 360° (Paksi-x & Paksi-y)', en: '360° Volume of Revolution (x-Axis & y-Axis)' },
              tex: 'V_x = \\pi\\int_a^b y^2\\,dx, \\qquad V_y = \\pi\\int_c^d x^2\\,dy'
            },
            {
              label: { bm: 'Isi Padu Berongga (Antara Dua Lengkung)', en: 'Hollow Washer Volume (Between Two Curves)' },
              tex: {
                bm: 'V = \\pi\\int_a^b \\left(y_{\\text{luar}}^2 - y_{\\text{dalam}}^2\\right)\\,dx',
                en: 'V = \\pi\\int_a^b \\left(y_{\\text{outer}}^2 - y_{\\text{inner}}^2\\right)\\,dx'
              }
            }
          ],
          workedExample: {
            title: { bm: 'Contoh Dibimbing: Isi Padu Kisaran $y = x + 1$', en: 'Worked Example: Volume of Revolution for $y = x + 1$' },
            problem: {
              bm: 'Rantau yang dibatasi oleh garis $y = x + 1$, paksi-$x$, $x = 0$, dan $x = 2$ dikisarkan $360^\\circ$ mengelilingi paksi-$x$. Cari isi padu janaan dalam sebutan $\\pi$.',
              en: 'The region bounded by $y = x + 1$, the $x$-axis, $x = 0$, and $x = 2$ is rotated $360^\\circ$ about the $x$-axis. Find the volume generated in terms of $\\pi$.'
            },
            steps: [
              {
                label: { bm: 'Langkah 1: Sediakan rumus $V = \\pi\\int y^2\\,dx$ dan kembangkan $(x + 1)^2$', en: 'Step 1: Set up $V = \\pi\\int y^2\\,dx$ and expand $(x + 1)^2$' },
                tex: 'V = \\pi\\int_0^2 (x + 1)^2\\,dx = \\pi\\int_0^2 (x^2 + 2x + 1)\\,dx',
                why: { bm: 'Kembangkan $(x + 1)^2 = x^2 + 2x + 1$ penuh (dengan sebutan tengah $2x$!) sebelum mengamir.', en: 'Expand $(x + 1)^2 = x^2 + 2x + 1$ completely (including the middle $2x$!) before integrating.' }
              },
              {
                label: { bm: 'Langkah 2: Kamirkan setiap sebutan dan gantikan had $0$ dan $2$', en: 'Step 2: Integrate term-by-term and substitute limits $0$ and $2$' },
                tex: 'V = \\pi\\left[\\frac{x^3}{3} + x^2 + x\\right]_0^2 = \\pi\\left(\\left(\\frac{2^3}{3} + 2^2 + 2\\right) - 0\\right) = \\pi\\left(\\frac{8}{3} + 6\\right)',
                why: { bm: 'Gantikan had atas $x = 2$ dahulu, kemudian tolak nilai pada had bawah $x = 0$.', en: 'Substitute upper limit $x = 2$ first, then subtract the lower limit $x = 0$.' }
              },
              {
                label: { bm: 'Langkah 3: Permudahkan pecahan dalam sebutan $\\pi$', en: 'Step 3: Simplify the fraction in terms of $\\pi$' },
                tex: 'V = \\pi\\left(\\frac{8}{3} + \\frac{18}{3}\\right) = \\frac{26}{3}\\pi\\text{ unit}^3',
                why: { bm: 'Kekalkan $\\pi$ dalam jawapan akhir seperti yang diminta soalan.', en: 'Leave $\\pi$ exact as requested by the question.' }
              }
            ],
            trap: {
              bm: 'Mengembangkan $(x + 1)^2$ sebagai $x^2 + 1$ sahaja, atau meninggalkan $\\pi$, adalah punca kehilangan markah paling kerap!',
              en: 'Expanding $(x + 1)^2$ wrongly as $x^2 + 1$, or dropping $\\pi$ from the answer, are the top mark-losers!'
            }
          },
          tip: {
            bm: 'Bagi putaran paksi-y, jika persamaan diberi sebagai y = x², tukar terus x² = y dan kamirkan π ∫ y dy (jangan kuasa dua jadi y²!).',
            en: 'For y-axis rotation, if given y = x², substitute x² = y directly into π ∫ y dy (do NOT square it again to y²!).'
          }
        }
      ],
      traps: [
        {
          title: { bm: 'Tertinggal Pemalar +c dalam Kamiran Tak Tentu', en: 'Omitting +c in Indefinite Integrals' },
          desc: {
            bm: 'Tanpa $+ c$ dalam kamiran tak tentu, anda kehilangan markah ketepatan DAN gagal menggunakan titik $(x_1, y_1)$ untuk memulihkan persamaan lengkung!',
            en: 'Omitting $+ c$ in indefinite integrals loses accuracy marks AND makes it impossible to recover a curve equation from a point $(x_1, y_1)$!'
          }
        },
        {
          title: { bm: 'Kamiran Pemalar Tentu & Songsangan Had', en: 'Integrating a Constant & Reversing Limits' },
          desc: {
            bm: '$\\int_a^b k\\,dx = [kx]_a^b = k(b - a)$, **BUKAN** $k$ sahaja! Juga ingat menyongsangkan had menukar tanda kamiran: $\\int_b^a f(x)\\,dx = -\\int_a^b f(x)\\,dx$.',
            en: '$\\int_a^b k\\,dx = [kx]_a^b = k(b - a)$, **NOT** $k$ alone! Also remember reversing limits flips the sign: $\\int_b^a f(x)\\,dx = -\\int_a^b f(x)\\,dx$.'
          }
        },
        {
          title: { bm: 'Luas Negatif Bawah Paksi-x & Silap Isi Padu Kisaran', en: 'Negative Area Below x-Axis & Volume Squaring Errors' },
          desc: {
            bm: 'Luas fizikal sentiasa positif — ambil $|\\int y\\,dx|$ jika rantau berada di bawah paksi-$x$. Bagi isi padu kisaran $V_x = \\pi\\int y^2\\,dx$, wajib ada $\\pi$ dan wajib kembangkan $(a+b)^2 = a^2 + 2ab + b^2$ penuh!',
            en: 'Physical area is always positive — take $|\\int y\\,dx|$ for regions below the $x$-axis. For revolution volume $V_x = \\pi\\int y^2\\,dx$, include $\\pi$ and expand $(a+b)^2 = a^2 + 2ab + b^2$ fully!'
          }
        }
      ],
      solvers: [
        {
          id: 'definite-integral-solver',
          title: { bm: 'Solver Kamiran Tentu & Luas Bawah Lengkung', en: 'Definite Integral & Area Under Curve Solver' },
          desc: {
            bm: 'Nilaikan ∫ dari a ke b bagi (px² + qx + r) dx secara langkah demi langkah.',
            en: 'Evaluate ∫ from a to b of (px² + qx + r) dx step-by-step.'
          },
          inputs: [
            { id: 'p', label: 'p (x²)', default: 3 },
            { id: 'q', label: 'q (x)', default: -4 },
            { id: 'r', label: 'r', default: 2 },
            { id: 'a', label: { bm: 'Had bawah a', en: 'Lower limit a' }, default: 1 },
            { id: 'b', label: { bm: 'Had atas b', en: 'Upper limit b' }, default: 3 }
          ],
          solve: function (v, lang) {
            const p = finiteNum(v.p, 3);
            const q = finiteNum(v.q, -4);
            const r = finiteNum(v.r, 2);
            const a = finiteNum(v.a, 1);
            const b = finiteNum(v.b, 3);
            const F = (x) => (p / 3) * x * x * x + (q / 2) * x * x + r * x;
            const Fb = F(b);
            const Fa = F(a);
            const val = Fb - Fa;
            const expr = U.polyTex([{ c: p, p: 2 }, { c: q, p: 1 }, { c: r, p: 0 }]);
            const antiTex = antiderivPolyTex(p, q, r);
            const fbTex = evalAntiderivSubTex(p, q, r, b);
            const faTex = evalAntiderivSubTex(p, q, r, a);
            return {
              problemTex: `\\int_{${U.roundStr(a, 4)}}^{${U.roundStr(b, 4)}} \\left(${expr}\\right)\\,dx`,
              steps: [
                {
                  badge: 'P1',
                  title: lang === 'bm' ? 'Langkah 1: Kamirkan setiap sebutan F(x)' : 'Step 1: Integrate each term F(x)',
                  tex: `\\left[ ${antiTex} \\right]_{${U.roundStr(a, 4)}}^{${U.roundStr(b, 4)}}`,
                  why: lang === 'bm' ? 'Tambah kuasa 1 dan bahagi kuasa baharu (tanpa +c kerana kamiran tentu).' : 'Increase each power by 1 and divide by the new power (no +c in definite integrals).'
                },
                {
                  badge: 'K1',
                  title: lang === 'bm' ? 'Langkah 2: Gantikan had atas F(b) dan had bawah F(a)' : 'Step 2: Evaluate upper F(b) and lower F(a)',
                  tex: `F(${U.roundStr(b, 4)}) = ${fbTex}; \\qquad F(${U.roundStr(a, 4)}) = ${faTex} \\implies F(${U.roundStr(b, 4)}) - F(${U.roundStr(a, 4)}) = (${U.roundStr(Fb, 4)}) - (${U.roundStr(Fa, 4)})`,
                  why: lang === 'bm' ? 'Teorem Asas Kalkulus: gantikan had atas dahulu, kemudian tolak gantian had bawah.' : 'Fundamental Theorem of Calculus: substitute upper limit first, then subtract lower limit.'
                },
                {
                  badge: 'J1',
                  title: lang === 'bm' ? 'Langkah 3: Nilai kamiran tentu' : 'Step 3: Definite integral value',
                  tex: `= ${U.roundStr(val, 4)}`,
                  why: a > b
                    ? (lang === 'bm'
                        ? 'Had songsang $a > b$: ingat $\\int_a^b f(x)\\,dx = -\\int_b^a f(x)\\,dx$ yang menyongsangkan tanda kamiran (atau gabungan rantau di bawah paksi-$x$).'
                        : 'Reversed limits $a > b$: recall $\\int_a^b f(x)\\,dx = -\\int_b^a f(x)\\,dx$, which flips the sign of the integral (in addition to any net region below the $x$-axis).')
                    : (val < 0
                        ? (lang === 'bm' ? 'Nilai negatif menunjukkan sebahagian besar rantau berada di bawah paksi-$x$ (Luas $= |\\text{nilai}|$).' : 'Negative sign indicates net region lies below the $x$-axis (Area $= |\\text{value}|$).')
                        : (lang === 'bm' ? 'Nilai tepat kamiran tentu.' : 'Exact definite integral value.'))
                }
              ],
              finalTex: `\\int_{${U.roundStr(a, 4)}}^{${U.roundStr(b, 4)}} (${expr})\\,dx = ${U.roundStr(val, 4)}`,
              trapWarning: lang === 'bm'
                ? 'Sentiasa letakkan kurungan pada F(a) apabila menolak (F(b) - F(a)) supaya tanda negatif tidak tersilap!'
                : 'Always wrap F(a) in parentheses when subtracting F(b) - F(a) so negative signs do not flip!'
            };
          }
        }
      ],
      generateQuestion: function (tier, lang) {
        if (tier === 1) {
          const a = U.randInt(1, 4);
          const b = U.randInt(-4, 6, true);
          const cConst = U.randInt(-5, 7, true);
          const yAt1 = a + b + cConst;
          const yAt2 = 4 * a + 2 * b + cConst;
          const dydx = U.polyTex([{ c: 2 * a, p: 1 }, { c: b, p: 0 }]);
          const quadNoC = U.polyTex([{ c: a, p: 2 }, { c: b, p: 1 }]);
          const sumAB = a + b;
          const noCTrap = 4 * a + 2 * b;
          const traps = [
            { value: noCTrap, message: { bm: 'Perangkap [P]: Anda terlupa menambah pemalar pengamiran +c!', en: 'Trap [P]: You forgot the constant of integration +c!' } }
          ];
          const cOnlyTrap = (Math.abs(cConst - yAt2) > 0.5 && Math.abs(cConst - noCTrap) > 0.5)
            ? cConst
            : (2 * a + b + cConst);
          if (Math.abs(cOnlyTrap - yAt2) > 0.5 && Math.abs(cOnlyTrap - noCTrap) > 0.5) {
            traps.push({
              value: cOnlyTrap,
              message: cOnlyTrap === cConst
                ? { bm: 'Perangkap [J]: Itu baru nilai pemalar c! Soalan meminta nilai y apabila x = 2.', en: 'Trap [J]: That is only the constant c! Substitute x = 2 back into y to get the final answer.' }
                : { bm: 'Perangkap [K]: Semak semula gantian x = 2 (iaitu 2² = 4) dalam sebutan x²!', en: 'Trap [K]: Re-check substituting x = 2 (where 2² = 4) into the x² term!' }
            });
          }
          return {
            tier: 1, tpLabel: 'TP1–TP2', subtopic: { bm: '3.2 Mencari Persamaan Lengkung daripada dy/dx', en: '3.2 Recovering Curve Equation from dy/dx' }, marks: 3,
            prompt: lang === 'bm'
              ? `Fungsi kecerunan suatu lengkung ialah $\\frac{dy}{dx} = ${dydx}$. Diberi lengkung itu melalui titik $(1, ${yAt1})$, cari nilai **$y$ apabila $x = 2$**.`
              : `The gradient function of a curve is $\\frac{dy}{dx} = ${dydx}$. Given that the curve passes through $(1, ${yAt1})$, find the value of **$y$ when $x = 2$**.`,
            answerType: 'number', correctValue: yAt2, displayAnswerTex: `y = ${yAt2} \\quad (c = ${cConst})`,
            intentMeta: {
              given: { bm: `$\\frac{dy}{dx} = ${dydx},\\; \\text{melalui }(1, ${yAt1})$`, en: `$\\frac{dy}{dx} = ${dydx},\\; \\text{passes through }(1, ${yAt1})$` },
              goal: { bm: 'Kamirkan untuk cari $c$, kemudian cari $y(2)$', en: 'Integrate to solve for $c$, then find $y(2)$' },
              conceptRule: { bm: '$y = \\int \\frac{dy}{dx}\\,dx = ax^2 + bx + c$', en: '$y = \\int \\frac{dy}{dx}\\,dx = ax^2 + bx + c$' }
            },
            guidedSteps: [
              { prompt: { bm: `Kamirkan untuk dapat $y = ${quadNoC} + c$. Gantikan $(1, ${yAt1})$ untuk mencari pemalar **$c$**:`, en: `Integrate to get $y = ${quadNoC} + c$. Substitute $(1, ${yAt1})$ to find **$c$**:` }, expected: cConst, hint: { bm: `${yAt1} = ${a}(1)² + (${b})(1) + c.`, en: `${yAt1} = ${a}(1)² + (${b})(1) + c.` } },
              { prompt: { bm: `Sekarang gantikan $x = 2$ dan $c = ${cConst}$ ke dalam $y = ${quadNoC} + c$:`, en: `Now substitute $x = 2$ and $c = ${cConst}$ into $y = ${quadNoC} + c$:` }, expected: yAt2, hint: { bm: `Kira ${a}(4) + (${b})(2) + (${cConst}).`, en: `Compute ${a}(4) + (${b})(2) + (${cConst}).` } }
            ],
            traps,
            hints: [
              { bm: 'Langkah 1: Kamirkan dy/dx dan wajib tulis + c, kemudian ganti titik (1, ' + yAt1 + ') untuk mencari c.', en: 'Step 1: Integrate dy/dx with + c, then substitute (1, ' + yAt1 + ') to solve for c.' },
              { bm: 'Langkah 2: Masukkan nilai c ke dalam persamaan y dan gantikan x = 2.', en: 'Step 2: Plug c back into the curve equation y and evaluate at x = 2.' }
            ],
            steps: [
              { badge: 'P1', title: lang === 'bm' ? 'Kamirkan fungsi kecerunan' : 'Integrate gradient function', tex: `y = \\int (${dydx})\\,dx = ${quadNoC} + c`, why: lang === 'bm' ? 'Tambah kuasa +1, bahagi kuasa baru, dan wajib tulis pemalar +c.' : 'Add 1 to power, divide by new power, and always include +c.' },
              { badge: 'K1', title: lang === 'bm' ? 'Cari c menggunakan (1, ' + yAt1 + ')' : 'Find c using (1, ' + yAt1 + ')', tex: `${yAt1} = ${a}(1)^2 + (${b})(1) + c \\implies ${yAt1} = ${sumAB} + c \\implies c = ${cConst}`, why: lang === 'bm' ? 'Gantikan x = 1, y = ' + yAt1 + ' untuk menentukan nilai tepat c.' : 'Substitute x = 1, y = ' + yAt1 + ' to pin down c.' },
              { badge: 'J1', title: lang === 'bm' ? 'Nilaikan pada x = 2' : 'Evaluate at x = 2', tex: `y(2) = ${a}(2)^2 + (${b})(2)${formatSignedTermVal(cConst, false)} = ${4 * a}${formatSignedTermVal(2 * b, false)}${formatSignedTermVal(cConst, false)} = ${yAt2}`, why: lang === 'bm' ? 'Gantikan x = 2 ke dalam persamaan lengkung yang lengkap.' : 'Substitute x = 2 into the recovered curve equation.' }
            ]
          };
        }
        if (tier === 2) {
          const intF = U.randInt(4, 12);
          const m = U.pick([2, 3, -2]);
          const k = U.randInt(2, 6);
          const a = 1;
          const b = 5;
          const mIntF = m * intF;
          const kSpan = k * (b - a);
          const ans = mIntF + kSpan;
          const missSpanTrap = mIntF + k;
          const missMTrap = intF + kSpan;
          const traps = [
            { value: missSpanTrap, message: { bm: `Perangkap Klasik SPM [K]: Pemalar ${k} berada di DALAM kamiran! ∫₁⁵ ${k} dx = ${k}(5 − 1) = ${kSpan}, bukan ${k}!`, en: `Classic SPM Trap [K]: Constant ${k} is INSIDE the integral! ∫₁⁵ ${k} dx = ${k}(5 − 1) = ${kSpan}, not ${k}!` } }
          ];
          if (Math.abs(missMTrap - ans) > 0.5 && Math.abs(missMTrap - missSpanTrap) > 0.5) {
            traps.push({ value: missMTrap, message: { bm: `Perangkap [P]: Anda terlupa mendarab $\\int_1^5 f(x)\\,dx = ${intF}$ dengan pekali ${m}!`, en: `Trap [P]: You forgot to multiply $\\int_1^5 f(x)\\,dx = ${intF}$ by coefficient ${m}!` } });
          }
          return {
            tier: 2, tpLabel: 'TP3–TP4', subtopic: { bm: '3.3 Sifat Operasi Kamiran Tentu', en: '3.3 Operational Properties of Definite Integrals' }, marks: 3,
            prompt: lang === 'bm'
              ? `Diberi $\\int_{${a}}^{${b}} f(x)\\,dx = ${intF}$, cari nilai bagi $\\int_{${a}}^{${b}} \\left[${m}f(x) + ${k}\\right]\\,dx$.`
              : `Given that $\\int_{${a}}^{${b}} f(x)\\,dx = ${intF}$, find the value of $\\int_{${a}}^{${b}} \\left[${m}f(x) + ${k}\\right]\\,dx$.`,
            answerType: 'number', correctValue: ans, displayAnswerTex: `${ans}`,
            intentMeta: {
              given: { bm: `$\\int_1^5 f(x)\\,dx = ${intF}$`, en: `$\\int_1^5 f(x)\\,dx = ${intF}$` },
              goal: { bm: 'Pecahkan kamiran linear dan kamirkan pemalar $k$ terhadap $x$', en: 'Split the integral linearly and integrate constant $k$ w.r.t. $x$' },
              conceptRule: { bm: '$\\int_a^b k\\,dx = k(b - a)$, BUKAN $k$ sahaja', en: '$\\int_a^b k\\,dx = k(b - a)$, NOT $k$ alone' }
            },
            guidedSteps: [
              { prompt: { bm: `Apakah nilai $\\int_{${a}}^{${b}} ${k}\\,dx = [${k}x]_{${a}}^{${b}}$?`, en: `What is $\\int_{${a}}^{${b}} ${k}\\,dx = [${k}x]_{${a}}^{${b}}$?` }, expected: kSpan, hint: { bm: `Kira ${k} × (${b} − ${a}).`, en: `Compute ${k} × (${b} − ${a}).` } },
              { prompt: { bm: `Jumlahkan ${m}(${intF}) + ${kSpan}:`, en: `Add ${m}(${intF}) + ${kSpan}:` }, expected: ans, hint: { bm: `Kira ${mIntF} + ${kSpan}.`, en: `Compute ${mIntF} + ${kSpan}.` } }
            ],
            traps,
            hints: [
              { bm: `Asingkan kepada ${m}∫₁⁵ f(x)dx + ∫₁⁵ ${k} dx menggunakan sifat kelinearan.`, en: `Split into ${m}∫₁⁵ f(x)dx + ∫₁⁵ ${k} dx using linearity.` },
              { bm: `Jangan tambah ${k} begitu sahaja — kamirkan pemalar ${k} menjadi [${k}x]₁⁵ = ${k}(5 − 1)!`, en: `Never just add ${k} — integrate the constant ${k} as [${k}x]₁⁵ = ${k}(5 − 1)!` }
            ],
            steps: [
              { badge: 'P1', title: lang === 'bm' ? 'Asingkan sebutan kamiran' : 'Split integral terms', tex: `${m}\\int_{${a}}^{${b}} f(x)\\,dx + \\int_{${a}}^{${b}} ${k}\\,dx`, why: lang === 'bm' ? 'Sifat kelinearan membolehkan setiap sebutan dikamirkan berasingan.' : 'Linearity lets each term be integrated separately.' },
              { badge: 'K1', title: lang === 'bm' ? 'Kamirkan pemalar k dan gantikan nilai' : 'Integrate constant k and substitute', tex: `= ${m}(${intF}) + [${k}x]_{${a}}^{${b}} = ${mIntF} + ${k}(${b} - ${a}) = ${mIntF} + ${kSpan}`, why: lang === 'bm' ? 'Pemalar k menjadi kx, lalu darab dengan lebar selang (5 − 1) = 4.' : 'Constant k integrates to kx, multiplied by interval width (5 − 1) = 4.' },
              { badge: 'J1', title: lang === 'bm' ? 'Jumlah akhir' : 'Final value', tex: `= ${ans}`, why: lang === 'bm' ? 'Jumlah tepat kedua-dua bahagian.' : 'Exact sum of both parts.' }
            ]
          };
        }
        // Tier 3 KBAT: Area bounded by parabola y = 3k^2 - 3x^2 in first quadrant
        const k = U.pick([2, 3, 4]);
        const area = 2 * k * k * k;
        const curveTex = `${3 * k * k} - 3x^2`;
        return {
          tier: 3, tpLabel: 'TP5–TP6 (KBAT)', subtopic: { bm: '3.3 Luas Rantau Dibatasi Lengkung & Paksi', en: '3.3 Area Bounded by a Curve & Axes' }, marks: 5,
          prompt: lang === 'bm'
            ? `Cari **luas rantau berlorek** pada sukuan pertama ($x \\ge 0,\\; y \\ge 0$) yang dibatasi oleh lengkung $y = ${curveTex}$, paksi-$x$, dan paksi-$y$.`
            : `Find the **area of the region** in the first quadrant ($x \\ge 0,\\; y \\ge 0$) bounded by the curve $y = ${curveTex}$, the $x$-axis, and the $y$-axis.`,
          answerType: 'number', correctValue: area, displayAnswerTex: `${area}\\text{ unit}^2`,
          intentMeta: {
            given: { bm: `$y = ${curveTex},\\; x \\ge 0,\\; y \\ge 0$`, en: `$y = ${curveTex},\\; x \\ge 0,\\; y \\ge 0$` },
            goal: { bm: 'Cari pintasan-$x$ sebagai had atas $b$, kemudian kamirkan dari $0$ ke $b$', en: 'Find the $x$-intercept as upper limit $b$, then integrate from $0$ to $b$' },
            conceptRule: { bm: 'Pintasan-$x$ apabila $y = 0$; Luas $= \\int_0^b y\\,dx$', en: '$x$-intercept occurs at $y = 0$; Area $= \\int_0^b y\\,dx$' }
          },
          guidedSteps: [
            { prompt: { bm: `Cari pintasan-$x$ positif dengan menyelesaikan $${curveTex} = 0$:`, en: `Find the positive $x$-intercept by solving $${curveTex} = 0$:` }, expected: k, hint: { bm: `3x² = ${3 * k * k} ⇒ x² = ${k * k}.`, en: `3x² = ${3 * k * k} ⇒ x² = ${k * k}.` } },
            { prompt: { bm: `Nilaikan $\\int_0^{${k}} (${curveTex})\\,dx = \\left[${3 * k * k}x - x^3\\right]_0^{${k}}$:`, en: `Evaluate $\\int_0^{${k}} (${curveTex})\\,dx = \\left[${3 * k * k}x - x^3\\right]_0^{${k}}$:` }, expected: area, hint: { bm: `Kira ${3 * k * k}(${k}) − (${k})³.`, en: `Compute ${3 * k * k}(${k}) − (${k})³.` } }
          ],
          traps: [
            { value: 4 * k * k * k, message: { bm: `Perangkap [P]: Anda mengamirkan dari −${k} ke ${k}! Soalan menyatakan sukuan pertama (x ≥ 0), jadi had bawah ialah 0.`, en: `Trap [P]: You integrated from −${k} to ${k}! First quadrant restricts x ≥ 0, so the lower limit is 0.` } },
            { value: 3 * k * k * k, message: { bm: 'Perangkap [K]: Anda terlupa menolak sebutan x³ selepas menggantikan had atas!', en: 'Trap [K]: You forgot to subtract the x³ term when substituting the upper limit!' } }
          ],
          hints: [
            { bm: 'Sukuan pertama bermula pada paksi-y (x = 0) dan berakhir pada pintasan-x positif (cari dengan menetapkan y = 0).', en: 'The first quadrant starts at the y-axis (x = 0) and ends at the positive x-intercept (set y = 0).' },
            { bm: 'Kamirkan y terhadap x dari 0 hingga x = ' + k + ': antiterbitan ialah ' + (3 * k * k) + 'x − x³.', en: 'Integrate y w.r.t. x from 0 to x = ' + k + ': antiderivative is ' + (3 * k * k) + 'x − x³.' }
          ],
          steps: [
            { badge: 'P1', title: lang === 'bm' ? 'Cari pintasan-x (y = 0)' : 'Find x-intercept (y = 0)', tex: `${curveTex} = 0 \\implies 3x^2 = ${3 * k * k} \\implies x^2 = ${k * k} \\implies x = ${k}\\;(x \\ge 0)`, why: lang === 'bm' ? 'Sukuan pertama mengehadkan x ≥ 0, jadi had ialah dari x = 0 hingga x = ' + k + '.' : 'First quadrant restricts x ≥ 0, giving integration limits from 0 to ' + k + '.' },
            { badge: 'K1', title: lang === 'bm' ? 'Kamirkan dari 0 ke ' + k : 'Integrate from 0 to ' + k, tex: `A = \\int_0^{${k}} (${curveTex})\\,dx = \\left[${3 * k * k}x - x^3\\right]_0^{${k}}`, why: lang === 'bm' ? 'Kamiran 3x² ialah 3x³/3 = x³.' : 'The integral of 3x² is 3x³/3 = x³.' },
            { badge: 'J1', title: lang === 'bm' ? 'Gantikan had dan dapatkan luas' : 'Substitute limits for bounded area', tex: `A = \\left[${3 * k * k}(${k}) - (${k})^3\\right] - [0] = ${3 * k * k * k} - ${k * k * k} = ${area}\\text{ unit}^2`, why: lang === 'bm' ? 'Gantikan had atas tolak had bawah 0.' : 'Evaluate upper limit minus lower limit 0.' }
          ]
        };
      }
    },

    // =========================================================================
    // FORM 5 CHAPTER 4: PERMUTATIONS & COMBINATIONS / PILIH ATUR & GABUNGAN
    // =========================================================================
    {
      id: 'f5-c4',
      stage: 3,
      unlocked: true,
      form: 5,
      num: 4,
      code: { bm: 'T5 • Bab 4', en: 'F5 • Ch 4' },
      icon: 'ⁿCᵣ',
      color: '#a855f7',
      category: 'statistik',
      title: { bm: 'Pilih Atur dan Gabungan', en: 'Permutations & Combinations' },
      subtitle: {
        bm: 'Petua pendaraban, kotak tempat, pilih atur ⁿPᵣ, huruf berulang, meja bulat & gabungan ⁿCᵣ',
        en: 'Multiplication rule, slot boxes, permutations ⁿPᵣ, identical objects, circular & combinations ⁿCᵣ'
      },
      spmWeight: { bm: 'Kertas 1 & Kertas 2 (6–8 markah)', en: 'Paper 1 & Paper 2 (6–8 marks)' },
      concepts: [
        {
          title: { bm: '1. Petua Pendaraban, Kotak Tempat (_ _ _ _) & Pilih Atur ⁿPᵣ', en: '1. Multiplication Rule, Slot-Box Method & Permutations ⁿPᵣ' },
          prereq: {
            bm: '👕 **Analogi Padanan Baju**: Jika anda ada $3$ helai baju dan $2$ helai seluar, jumlah pasangan berbeza ialah $3 \\times 2 = 6$. Itulah **Petua Pendaraban**! Untuk menyusun kod PIN $3$-digit daripada $5$ angka tanpa ulangan, lukis kotak tempat `_ _ _` dan isi pilihan menurun: $5 \\times 4 \\times 3 = 60$. Itulah asal rumus **${}^5P_3$**!',
            en: '👕 **Outfit Pairing Analogy**: With $3$ shirts and $2$ pairs of pants, total outfits $= 3 \\times 2 = 6$. That is the **Multiplication Rule**! To form a $3$-digit PIN from $5$ digits without repeats, draw slot boxes `_ _ _` and multiply decreasing choices: $5 \\times 4 \\times 3 = 60$. That is literally **${}^5P_3$**!'
          },
          body: {
            bm: 'Gunakan **Pilih Atur (${}^nP_r$)** apabila **SUSUNAN PENTING** (ujian tukar tempat: jika `AB ≠ BA`, seperti kod PIN, nombor 4-digit, beratur, atau jawatan Pengerusi/Setiausaha). Ingat takrifan khas **$0! = 1$**!\n🔐 **Peraturan VIP (Isi Kotak Bersyarat Dahulu)**: Sentiasa kunci kotak yang paling ketat syaratnya dahulu (contoh digit terakhir genap, digit pertama $> 5$).\n⚠️ **Pecah Kes Digit Bertindan**: Jika ada digit memenuhi **kedua-dua syarat serentak** (contoh `6` dan `8` adalah $> 5$ DAN juga genap!), wajib **pecahkan kepada 2 kes berasingan** supaya tiada digit diguna dua kali!',
            en: 'Use **Permutations (${}^nP_r$)** whenever **ORDER MATTERS** (swap test: if `AB ≠ BA`, such as PIN codes, 4-digit numbers, photo lines, or ranked roles like President/Secretary). Remember **$0! = 1$**!\n🔐 **VIP Slot Rule (Restricted Slots First)**: Always lock the strictest slots before filling the rest (e.g. last digit even, first digit $> 5$).\n⚠️ **Overlapping-Digit Case Split**: If any digit satisfies **both restrictions at once** (e.g. `6` and `8` are both $> 5$ AND even!), you MUST **split into separate cases** so no digit is counted twice!'
          },
          firstStep: {
            bm: '1. Lukis kotak tempat kosong `_ _ _ _` mengikut panjang kod atau barisan.\n2. Isi kotak yang ada syarat paling ketat **terlebih dahulu**.\n3. Jika satu digit layak masuk ke dua kotak bersyarat, pecah kepada kes berasingan dan **tambah** di akhir!',
            en: '1. Draw empty slot boxes `_ _ _ _` matching the code or row length.\n2. Fill the strictest restricted slots **first**.\n3. If any digit qualifies for two restricted slots at once, split into separate cases and **add** them at the end!'
          },
          formulas: [
            {
              label: { bm: 'Pilih Atur Linear & Petua Kotak Tempat', en: 'Linear Permutations & Slot-Box Product' },
              tex: '{}^nP_r = \\frac{n!}{(n-r)!} = n(n-1)(n-2)\\cdots(n-r+1), \\qquad 0! = 1'
            }
          ],
          workedExample: {
            title: { bm: 'Contoh Dibimbing: Kod 4-Digit Genap > 5000 (Digit Bertindan)', en: 'Worked Example: 4-Digit Even Numbers > 5000 (Overlapping Digits)' },
            problem: {
              bm: 'Berapakah bilangan nombor $4$-digit **genap** yang **lebih besar daripada $5000$** boleh dibentuk daripada digit $\\{2, 3, 5, 6, 8\\}$ tanpa ulangan?',
              en: 'How many **even** $4$-digit numbers **greater than $5000$** can be formed from the digits $\\{2, 3, 5, 6, 8\\}$ without repetition?'
            },
            steps: [
              {
                label: { bm: 'Langkah 1: Kesan digit bertindan (`6` dan `8` ialah $>5$ DAN genap!)', en: 'Step 1: Spot overlapping digits (`6` and `8` are both $>5$ AND even!)' },
                tex: {
                  bm: '\\text{Pertama } \\in \\{5, 6, 8\\}, \\quad \\text{Akhir } \\in \\{2, 6, 8\\} \\implies \\text{Pecah ikut Digit Akhir: } \\{2\\} \\text{ vs } \\{6, 8\\}',
                  en: '\\text{First } \\in \\{5, 6, 8\\}, \\quad \\text{Last } \\in \\{2, 6, 8\\} \\implies \\text{Split by Last Digit: } \\{2\\} \\text{ vs } \\{6, 8\\}'
                },
                why: { bm: 'Jika `6` atau `8` diletak di belakang, pilihan depan berkurang daripada $3$ kepada $2$! Jadi wajib pecah 2 kes.', en: 'If `6` or `8` takes the last slot, the first slot drops from $3$ choices to $2$! So we must split into 2 cases.' }
              },
              {
                label: { bm: 'Langkah 2: Kes 1 — Digit terakhir ialah `2`', en: 'Step 2: Case 1 — Last digit is `2`' },
                tex: {
                  bm: '\\text{Kes 1: } 3 \\times 3 \\times 2 \\times 1 = 18',
                  en: '\\text{Case 1: } 3 \\times 3 \\times 2 \\times 1 = 18'
                },
                why: { bm: 'Akhir ada $1$ pilihan (`2`); depan masih ada semua $3$ pilihan (`5, 6, 8`); baki $5 - 2 = 3$ digit isi 2 kotak tengah ($3 \\times 2$).', en: 'Last slot has $1$ choice (`2`); first slot still has all $3$ choices (`5, 6, 8`); remaining $3$ digits fill middle 2 slots ($3 \\times 2$).' }
              },
              {
                label: { bm: 'Langkah 3: Kes 2 — Digit terakhir ialah `6` atau `8`', en: 'Step 3: Case 2 — Last digit is `6` or `8`' },
                tex: {
                  bm: '\\text{Kes 2: } 2 \\times 3 \\times 2 \\times 2 = 24 \\implies \\text{Jumlah} = 18 + 24 = 42',
                  en: '\\text{Case 2: } 2 \\times 3 \\times 2 \\times 2 = 24 \\implies \\text{Total} = 18 + 24 = 42'
                },
                why: { bm: 'Akhir ada $2$ pilihan (`6, 8`); depan tinggal $2$ pilihan (sebab 1 daripada `{6, 8}` sudah dipakai di belakang); tengah $3 \\times 2$; jumlah $= 18 + 24$.', en: 'Last slot has $2$ choices (`6, 8`); first slot drops to $2$ choices; middle $3 \\times 2$; total $= 18 + 24$.' }
              }
            ],
            trap: {
              bm: 'Mengira terus $3 \\times 3 \\times 2 \\times 3 = 54$ adalah SALAH kerana ia membenarkan digit `6` atau `8` muncul di depan dan di belakang serentak!',
              en: 'Multiplying blindly as $3 \\times 3 \\times 2 \\times 3 = 54$ is WRONG because it lets `6` or `8` appear in both the first and last slots simultaneously!'
            }
          },
          tip: {
            bm: 'Sentiasa semak apakah syarat pada digit pertama dan digit terakhir mempunyai unsur bertindan sebelum mendarab kotak tempat!',
            en: 'Always check whether the first and last slot conditions share overlapping digits before multiplying slot boxes!'
          }
        },
        {
          title: { bm: '2. Objek Sama Berulang, Susunan Membulat & Syarat Bersama/Berasingan', en: '2. Identical Objects, Circular Arrangements & Together/Separated Rules' },
          prereq: {
            bm: 'Jika anda menukar kedudukan dua huruf `A` yang sama dalam `BANANA`, perkataannya tetap sama! Maka kita bahagi dengan bilangan pertukaran yang kelihatan serupa ($3!$). Di meja bulat pula, memusingkan semua tetamu sekali kerusi memberi susunan relatif yang sama — jadi kita tetapkan $1$ orang sebagai sauh rujukan: $(n - 1)!$.',
            en: 'Swapping two identical letter `A`s inside `BANANA` produces the exact same word! So we divide out identical swaps ($3!$). Around a round table, rotating everyone by one chair gives the same relative seating — so we anchor $1$ guest: $(n - 1)!$.'
          },
          body: {
            bm: '• **Huruf Sama Berulang**: $\\frac{n!}{a!\\,b!\\dots}$ (bahagi faktorial bagi setiap huruf yang berulang).\n• **Meja Bulat vs Gelang**: Meja bulat $= (n - 1)!$; Gelang/Rantai yang boleh diterbalikkan $= \\frac{(n - 1)!}{2}$.\n• **Mesti Bersama**: Ikat $k$ objek sebagai **1 blok besar** $\\implies (n - k + 1)! \\times k!$ (jangan lupa $k!$ di dalam blok!).\n• **2 Berasingan vs $\\ge 3$ Berasingan**: Untuk **2 objek** tidak bersebelahan, guna pelengkap $\\text{Jumlah} - \\text{Bersama}$. Tetapi untuk **$\\ge 3$ objek tiada dua bersebelahan**, WAJIB guna **Kaedah Celah (*Gap Method*)**: susun $k$ objek lain dahulu ($k!$), kemudian selit $m$ objek ke dalam $(k + 1)$ celah: $k! \\times {}^{k+1}P_m$!',
            en: '• **Identical Objects**: $\\frac{n!}{a!\\,b!\\dots}$ (divide by factorial of each repeated letter).\n• **Circular vs Bracelet**: Round table $= (n - 1)!$; Flippable bracelet/necklace $= \\frac{(n - 1)!}{2}$.\n• **Must Be Together**: Tie $k$ items into **1 super-block** $\\implies (n - k + 1)! \\times k!$ (never drop internal $k!$!).\n• **2 Separated vs $\\ge 3$ Separated**: For **2 items** apart, use complement $\\text{Total} - \\text{Together}$. For **$\\ge 3$ items with no two adjacent**, you MUST use the **Gap Method**: arrange the $k$ other items first ($k!$), then slot the $m$ items into the $(k + 1)$ gaps: $k! \\times {}^{k+1}P_m$!'
          },
          firstStep: {
            bm: '1. Kira ulangan setiap huruf jika menyusun perkataan.\n2. Jika "mesti bersama", ikat jadi **1 blok** $(n - k + 1)!$ dan **darab $k!$**.\n3. Jika $\\ge 3$ objek mesti berasingan semua, susun objek lain dahulu dan bilang celah $(k + 1)$ (termasuk hujung kiri dan kanan!).',
            en: '1. Tally repeated letters first when arranging words.\n2. For "must be together", tie into **1 block** $(n - k + 1)!$ and **multiply by $k!$**.\n3. When $\\ge 3$ items must all be separated, arrange the other $k$ items first and count $(k + 1)$ gaps (including both ends!).'
          },
          formulas: [
            {
              label: { bm: 'Huruf Sama Berulang & Susunan Membulat', en: 'Identical Objects & Circular Arrangements' },
              tex: {
                bm: '\\text{Huruf berulang} = \\frac{n!}{a!\\,b!\\,\\dots}, \\qquad \\text{Meja Bulat} = (n-1)!, \\qquad \\text{Gelang/Rantai} = \\frac{(n-1)!}{2}',
                en: '\\text{Identical objects} = \\frac{n!}{a!\\,b!\\,\\dots}, \\qquad \\text{Circular} = (n-1)!, \\qquad \\text{Bracelet/Ring} = \\frac{(n-1)!}{2}'
              }
            },
            {
              label: { bm: 'Mesti Bersama & Kaedah Celah (≥ 3 Berasingan)', en: 'Together Super-Block & Gap Method (≥ 3 Separated)' },
              tex: {
                bm: '\\text{Bersama} = (n - k + 1)! \\times k!, \\qquad \\text{Kaedah Celah} = k! \\times {}^{k+1}P_m',
                en: '\\text{Together} = (n - k + 1)! \\times k!, \\qquad \\text{Gap Method} = k! \\times {}^{k+1}P_m'
              }
            }
          ],
          workedExample: {
            title: { bm: 'Contoh Dibimbing: Huruf Berulang BANANA & Kaedah Celah', en: 'Worked Example: Repeated Letters BANANA & Gap Method' },
            problem: {
              bm: '(a) Cari bilangan susunan berbeza semua huruf perkataan `BANANA`. (b) Cari bilangan susunan sebaris $4$ konsonan dan $3$ vokal berbeza jika **tiada dua vokal bersebelahan**.',
              en: '(a) Find the number of distinct arrangements of all letters in `BANANA`. (b) Find the number of ways to arrange $4$ distinct consonants and $3$ distinct vowels in a row if **no two vowels are adjacent**.'
            },
            steps: [
              {
                label: { bm: '(a) Kira huruf sama berulang dalam `BANANA`', en: '(a) Count identical repeated letters in `BANANA`' },
                tex: '\\frac{6!}{3!\\,2!} = \\frac{720}{6 \\times 2} = \\frac{720}{12} = 60',
                why: { bm: 'Jumlah $6$ huruf: tiga `A` ($3!$), dua `N` ($2!$), satu `B`.', en: 'Total $6$ letters: three `A`s ($3!$), two `N`s ($2!$), one `B`.' }
              },
              {
                label: { bm: '(b) Susun $4$ konsonan dahulu untuk membina $5$ celah kosong', en: '(b) Arrange $4$ consonants first to create $5$ gaps' },
                tex: '4! = 24 \\quad (\\text{\\_ C \\_ C \\_ C \\_ C \\_})',
                why: { bm: '$k = 4$ konsonan mencipta $k + 1 = 5$ celah kosong yang memisahkan setiap vokal.', en: '$k = 4$ consonants create $k + 1 = 5$ separated slots (including both ends).' }
              },
              {
                label: { bm: '(b) Selit $3$ vokal ke dalam $5$ celah dan darabkan', en: '(b) Slot $3$ vowels into the $5$ gaps and multiply' },
                tex: '4! \\times {}^{5}P_3 = 24 \\times (5 \\times 4 \\times 3) = 24 \\times 60 = 1440',
                why: { bm: 'Kaedah Celah memastikan ketiga-tiga vokal dipisahkan oleh sekurang-kurangnya satu konsonan.', en: 'The Gap Method guarantees all $3$ vowels are separated by at least one consonant.' }
              }
            ],
            trap: {
              bm: 'Dalam (b), mengira $\\text{Jumlah} - \\text{Semua 3 Vokal Bersama} = 7! - 5!3! = 4320$ adalah SALAH kerana ia masih membenarkan 2 vokal duduk bersebelahan!',
              en: 'In (b), computing $\\text{Total} - \\text{All 3 Vowels Together} = 7! - 5!3! = 4320$ is WRONG because it still allows 2 vowels to sit next to each other!'
            }
          },
          tip: {
            bm: 'Untuk meja bulat, hanya bahagi 2 jika objek itu fizikal dan boleh diterbalikkan seperti gelang manik atau rantai kunci — orang duduk di meja bulat TIDAK boleh diterbalikkan!',
            en: 'For circular arrangements, only divide by 2 for flippable physical objects like bracelets/necklaces — seated guests around a table CANNOT be flipped upside down!'
          }
        },
        {
          title: { bm: '3. Gabungan ⁿCᵣ, Kes "DAN/ATAU" & Pemilihan Jawatankuasa', en: '3. Combinations ⁿCᵣ, AND/OR Cases & Committee Selection' },
          prereq: {
            bm: '🤔 **Kenapa ${}^nC_r = \\frac{{}^nP_r}{r!}$?** Jika anda pilih $3$ orang (`Ali, Bala, Chong`) menjadi ahli jawatankuasa biasa, susunan `Ali-Bala-Chong`, `Bala-Ali-Chong`, dan $6$ ($3!$) cara menamakan kumpulan yang sama semuanya membentuk **1 jawatankuasa yang sama**! Jadi kita bahagi ${}^nP_r$ dengan $r!$ untuk membuang pertindihan susunan.',
            en: '🤔 **Why ${}^nC_r = \\frac{{}^nP_r}{r!}$?** Choosing $3$ people (`Ali, Bala, Chong`) for an unranked committee gives $3! = 6$ ways to list the exact same group — all $6$ count as **1 single committee**! So we divide ${}^nP_r$ by $r!$ to strip out duplicate orderings.'
          },
          body: {
            bm: 'Gunakan **Gabungan (${}^nC_r$)** apabila memilih jawatankuasa, pasukan sukan, atau titik pada bulatan tanpa jawatan khusus.\n🔀 **Hukum "DAN" vs "ATAU"**:\n• **"DAN" ($\\times$)**: Kerja belum selesai — mesti pilih subkumpulan A **DAN** subkumpulan B serentak untuk melengkapkan pasukan.\n• **"ATAU" ($+$)**: Kes berasingan (*saling eksklusif*) seperti syarat **"sekurang-kurangnya"** atau pasangan suami isteri **"kedua-dua masuk atau kedua-dua ditolak"** — hitung setiap kes lengkap lalu **TAMBAH**.',
            en: 'Use **Combinations (${}^nC_r$)** when selecting committees, teams, or geometric points without specific ranks.\n🔀 **"AND" vs "OR" Rule**:\n• **"AND" ($\\times$)**: Stages of **one team** — pick subgroup A **AND** subgroup B together to finish the committee.\n• **"OR" ($+$)**: Disjoint (*mutually exclusive*) cases such as **"at least"** or a couple **"both in or both out"** — compute each complete case then **ADD**.'
          },
          firstStep: {
            bm: '1. Uji dengan soalan: *"Jika 2 orang terpilih bertukar tempat, adakah kumpulan itu berbeza?"* Tidak $\\implies {}^nC_r$.\n2. Senaraikan semua pecahan kes yang sah (contoh `2P 2L`, `3P 1L`, `4P 0L`) dalam baris tersusun.\n3. Darab dalam satu baris (**DAN**), tambah antara baris (**ATAU**).',
            en: '1. Ask: *"If 2 chosen members swap, is it a different team?"* No $\\implies {}^nC_r$.\n2. List every valid group breakdown (e.g. `2G 2B`, `3G 1B`, `4G 0B`) in neat rows.\n3. Multiply within each row (**AND**), add across rows (**OR**).'
          },
          formulas: [
            {
              label: { bm: 'Rumus Gabungan & Hubungan dengan Pilih Atur', en: 'Combination Formula & Link to Permutations' },
              tex: '{}^nC_r = \\frac{{}^nP_r}{r!} = \\frac{n!}{(n-r)!\\,r!} = {}^nC_{n-r}, \\qquad {}^nC_0 = {}^nC_n = 1'
            }
          ],
          workedExample: {
            title: { bm: 'Contoh Dibimbing: Jawatankuasa dengan Syarat "Sekurang-kurangnya"', en: 'Worked Example: Committee with "At Least" Condition' },
            problem: {
              bm: 'Satu jawatankuasa seramai $4$ orang hendak dipilih daripada $5$ lelaki dan $4$ perempuan. Cari bilangan cara jika sekurang-kurangnya $2$ orang perempuan mesti dipilih.',
              en: 'A committee of $4$ is chosen from $5$ boys and $4$ girls. Find the number of ways if at least $2$ girls must be selected.'
            },
            steps: [
              {
                label: { bm: 'Langkah 1: Senaraikan semua kes sah ("sekurang-kurangnya $2$ perempuan")', en: 'Step 1: List all valid disjoint cases ("at least $2$ girls")' },
                tex: {
                  bm: '\\text{Kes 1: } (2\\text{P}, 2\\text{L}); \\quad \\text{Kes 2: } (3\\text{P}, 1\\text{L}); \\quad \\text{Kes 3: } (4\\text{P}, 0\\text{L})',
                  en: '\\text{Case 1: } (2G, 2B); \\quad \\text{Case 2: } (3G, 1B); \\quad \\text{Case 3: } (4G, 0B)'
                },
                why: { bm: 'Jumlah ahli sentiasa $4$, maka bilangan perempuan boleh jadi $2$, $3$, atau $4$.', en: 'Total size is fixed at $4$, so girls can be $2$, $3$, or $4$.' }
              },
              {
                label: { bm: 'Langkah 2: Kira setiap kes (DAN = darab)', en: 'Step 2: Evaluate each case (AND = multiply)' },
                tex: {
                  bm: '\\text{Kes 1: } {}^4C_2 \\times {}^5C_2 = 6 \\times 10 = 60; \\quad \\text{Kes 2: } {}^4C_3 \\times {}^5C_1 = 4 \\times 5 = 20; \\quad \\text{Kes 3: } {}^4C_4 \\times {}^5C_0 = 1 \\times 1 = 1',
                  en: '\\text{Case 1: } {}^4C_2 \\times {}^5C_2 = 6 \\times 10 = 60; \\quad \\text{Case 2: } {}^4C_3 \\times {}^5C_1 = 4 \\times 5 = 20; \\quad \\text{Case 3: } {}^4C_4 \\times {}^5C_0 = 1 \\times 1 = 1'
                },
                why: { bm: 'Setiap kes memerlukan pelajar perempuan DAN pelajar lelaki untuk mencukupkan $4$ ahli.', en: 'Each row needs girls AND boys together to complete the $4$-member team.' }
              },
              {
                label: { bm: 'Langkah 3: Jumlahkan semua kes (ATAU = tambah)', en: 'Step 3: Sum all cases (OR = add)' },
                tex: '60 + 20 + 1 = 81',
                why: { bm: 'Kes 1, Kes 2, dan Kes 3 tidak boleh berlaku serentak (saling eksklusif).', en: 'Cases 1, 2, and 3 are mutually exclusive alternatives.' }
              }
            ],
            trap: {
              bm: 'Jangan pilih $2$ perempuan (${}^4C_2$) dahulu lalu pilih $2$ baki daripada campuran $7$ orang (${}^7C_2$) kerana $6 \\times 21 = 126$ mengira pasukan yang sama berkali-kali!',
              en: 'Never pick $2$ girls (${}^4C_2$) first and multiply by ${}^7C_2$ from the mixed pool — $6 \\times 21 = 126$ double-counts teams with 3 or 4 girls!'
            }
          },
          tip: {
            bm: 'Gunakan sifat simetri ⁿCᵣ = ⁿCₙ₋ᵣ untuk kiraan pantas: contohnya ¹⁰C₈ = ¹⁰C₂ = (10 × 9) / 2 = 45!',
            en: 'Use symmetry ⁿCᵣ = ⁿCₙ₋ᵣ for quick mental math: e.g. ¹⁰C₈ = ¹⁰C₂ = (10 × 9) / 2 = 45!'
          }
        }
      ],
      traps: [
        {
          title: { bm: 'Tertukar ⁿPᵣ dengan ⁿCᵣ', en: 'Confusing ⁿPᵣ with ⁿCᵣ' },
          desc: {
            bm: 'Memilih $3$ ahli jawatankuasa biasa ialah ${}^nC_3$, tetapi memilih Pengerusi, Setiausaha & Bendahari ialah ${}^nP_3$ kerana jawatan/susunan berbeza!',
            en: 'Choosing $3$ general committee members is ${}^nC_3$, whereas choosing President, Secretary & Treasurer is ${}^nP_3$ because roles differ!'
          }
        },
        {
          title: { bm: 'Lupa k! Dalaman & Silap Pelengkap ≥ 3 Berasingan', en: 'Dropping Internal k! & Misusing Complement for ≥ 3 Separated' },
          desc: {
            bm: 'Apabila mengikat $k$ objek bersama, jangan lupa darab $k!$ untuk susunan dalaman blok! Dan apabila **$\\ge 3$ objek mesti berasingan semua**, jangan tolak $\\text{Jumlah} - \\text{Semua Bersama}$ — wajib guna **Kaedah Celah ($k! \\times {}^{k+1}P_m$)**!',
            en: 'When tying $k$ items together, never forget internal $k!$ swaps! And when **$\\ge 3$ items must all be separated**, do NOT subtract $\\text{Total} - \\text{All Together}$ — always use the **Gap Method ($k! \\times {}^{k+1}P_m$)**!'
          }
        },
        {
          title: { bm: 'Kiraan Bertindih Digit Bersyarat & Kumpulan Campuran', en: 'Double-Counting Overlapping Digits & Mixed Pools' },
          desc: {
            bm: 'Jika digit (seperti `6, 8`) memenuhi kedua-dua syarat depan dan belakang, pecahkan kepada kes berasingan! Dalam jawatankuasa "sekurang-kurangnya", senaraikan setiap pecahan kes tepat bukannya mendarab baki kolam campuran.',
            en: 'If digits (like `6, 8`) satisfy both first-slot and last-slot restrictions, split into separate cases! In "at least" committees, list exact disjoint splits instead of multiplying from a mixed leftover pool.'
          }
        }
      ],
      solvers: [
        {
          id: 'perm-comb-solver',
          title: { bm: 'Kalkulator Pintar n!, ⁿPᵣ, ⁿCᵣ & Bulatan', en: 'Smart n!, ⁿPᵣ, ⁿCᵣ & Circular Calculator' },
          desc: {
            bm: 'Bandingkan bilangan susunan pilih atur ⁿPᵣ dan pemilihan gabungan ⁿCᵣ bagi sebarang n dan r.',
            en: 'Compare ordered permutations ⁿPᵣ and unordered combinations ⁿCᵣ for any n and r.'
          },
          inputs: [
            { id: 'n', label: { bm: 'Jumlah objek n (1–15)', en: 'Total items n (1–15)' }, default: 8 },
            { id: 'r', label: { bm: 'Bilangan dipilih r', en: 'Chosen count r' }, default: 3 }
          ],
          solve: function (v, lang) {
            const rawN = (v.n === null || v.n === undefined || String(v.n).trim() === '') ? 8 : Number(v.n);
            const rawR = (v.r === null || v.r === undefined || String(v.r).trim() === '') ? 3 : Number(v.r);
            const validIntegers = Number.isFinite(rawN) && Number.isFinite(rawR) && Number.isInteger(rawN) && Number.isInteger(rawR);
            if (!validIntegers || rawN < 1 || rawN > 15 || rawR < 0 || rawR > rawN) {
              const nDisp = Number.isFinite(rawN) ? U.roundStr(rawN, 4) : '\\text{?}';
              const rDisp = Number.isFinite(rawR) ? U.roundStr(rawR, 4) : '\\text{?}';
              return {
                problemTex: `n = ${nDisp}, \\quad r = ${rDisp}`,
                steps: [
                  {
                    badge: 'P1',
                    title: lang === 'bm' ? 'Langkah 1: Semak syarat domain integer n dan r' : 'Step 1: Check integer domain conditions for n and r',
                    tex: `n = ${nDisp}, \\quad r = ${rDisp} \\; (\\text{${lang === 'bm' ? 'Input tidak sah' : 'Invalid input'}})`,
                    why: lang === 'bm'
                      ? 'Untuk ${}^nP_r$ dan ${}^nC_r$, kedua-dua $n$ dan $r$ mestilah integer dengan $1 \\le n \\le 15$ dan $0 \\le r \\le n$.'
                      : 'For ${}^nP_r$ and ${}^nC_r$, both $n$ and $r$ must be integers satisfying $1 \\le n \\le 15$ and $0 \\le r \\le n$.'
                  },
                  {
                    badge: 'K1',
                    title: lang === 'bm' ? 'Langkah 2: Mengapa nilai di luar domain tidak sah' : 'Step 2: Why out-of-domain counts are invalid',
                    tex: `n \\ge 1, \\quad 0 \\le r \\le n \\quad (${lang === 'bm' ? '\\text{integer, } n \\le 15' : '\\text{integers, } n \\le 15'})`,
                    why: lang === 'bm'
                      ? 'Anda tidak boleh memilih $r > n$ objek daripada hanya $n$ objek, menggunakan bilangan negatif ($n < 1$ atau $r < 0$), atau memilih pecahan objek.'
                      : 'You cannot choose $r > n$ items from only $n$ items, use negative counts ($n < 1$ or $r < 0$), or pick a non-integer count.'
                  },
                  {
                    badge: 'J1',
                    title: lang === 'bm' ? 'Langkah 3: Masukkan pasangan integer yang sah' : 'Step 3: Enter valid integer counts',
                    tex: `\\text{${lang === 'bm' ? 'Domain sah: ' : 'Valid domain: '}} 1 \\le n \\le 15, \\; 0 \\le r \\le n`,
                    why: lang === 'bm'
                      ? 'Contoh sah: $n = 8, r = 3$ atau $n = 6, r = 6$ atau $n = 8, r = 0$.'
                      : 'Valid examples: $n = 8, r = 3$, $n = 6, r = 6$, or $n = 8, r = 0$.'
                  }
                ],
                finalTex: lang === 'bm'
                  ? '\\text{Input tidak sah: mesti integer } 1 \\le n \\le 15 \\text{ dan } 0 \\le r \\le n'
                  : '\\text{Invalid input: must be integers } 1 \\le n \\le 15 \\text{ and } 0 \\le r \\le n',
                trapWarning: lang === 'bm'
                  ? 'Amaran Domain [P]: Bilangan objek $n$ dan $r$ mesti integer dengan $n \\ge 1$ dan $0 \\le r \\le n$ (tidak boleh $r > n$ atau negatif)!'
                  : 'Domain Warning [P]: Counts $n$ and $r$ must be integers with $n \\ge 1$ and $0 \\le r \\le n$ (cannot have $r > n$ or negative counts)!'
              };
            }
            const n = rawN;
            const r = rawR;
            const npr = U.nPr(n, r);
            const ncr = U.nCr(n, r);
            const circ = U.factorial(n - 1);
            let nprChain = '';
            if (r === 0) {
              nprChain = `{}^{${n}}P_{0} = \\frac{${n}!}{${n}!} = 1`;
            } else if (r === 1) {
              nprChain = `{}^{${n}}P_{1} = \\frac{${n}!}{(${n}-1)!} = ${n}`;
            } else if (r <= 5) {
              const factors = Array.from({ length: r }, (_, idx) => n - idx).join(' \\times ');
              nprChain = `{}^{${n}}P_{${r}} = \\frac{${n}!}{(${n}-${r})!} = ${factors} = ${npr}`;
            } else {
              nprChain = `{}^{${n}}P_{${r}} = \\frac{${n}!}{${n - r}!} = \\frac{${U.factorial(n)}}{${U.factorial(n - r)}} = ${npr}`;
            }
            return {
              problemTex: `n = ${n}, \\quad r = ${r}`,
              steps: [
                {
                  badge: 'P1',
                  title: lang === 'bm' ? 'Pilih Atur Linear ⁿPᵣ (Susunan Penting)' : 'Linear Permutations ⁿPᵣ (Order Matters)',
                  tex: nprChain,
                  why: lang === 'bm' ? 'Setiap kotak tempat berkurang 1 pilihan (digunakan untuk kod, barisan & jawatan khusus).' : 'Each successive slot has 1 fewer choice (used for codes, queues & ranked roles).'
                },
                {
                  badge: 'K1',
                  title: lang === 'bm' ? 'Gabungan ⁿCᵣ (Susunan Tidak Penting)' : 'Combinations ⁿCᵣ (Order Irrelevant)',
                  tex: `{}^{${n}}C_{${r}} = \\frac{{}^{${n}}P_{${r}}}{${r}!} = \\frac{${npr}}{${U.factorial(r)}} = ${ncr}`,
                  why: lang === 'bm' ? 'Dibahagi dengan r! untuk membuang pertindihan susunan kumpulan yang sama.' : 'Divided by r! to remove duplicate orderings of the exact same group.'
                },
                {
                  badge: 'J1',
                  title: lang === 'bm' ? 'Susunan Meja Bulat Semua n Objek' : 'Circular Arrangement of All n Items',
                  tex: `(${n}-1)! = ${n - 1}! = ${circ}`,
                  why: lang === 'bm' ? 'Satu kedudukan ditetapkan sebagai sauh rujukan putaran (ingat 0! = 1).' : 'One seat is anchored against rotational symmetry (remember 0! = 1).'
                }
              ],
              finalTex: `{}^{${n}}P_{${r}} = ${npr}, \\quad {}^{${n}}C_{${r}} = ${ncr}, \\quad (${n}-1)! = ${circ}`,
              trapWarning: lang === 'bm'
                ? 'Jangan guna ⁿPᵣ untuk memilih ahli jawatankuasa tanpa pangkat, dan jangan guna n! untuk meja bulat!'
                : 'Do not use ⁿPᵣ for unranked committees, and do not use linear n! for round-table seating!'
            };
          }
        }
      ],
      generateQuestion: function (tier, lang) {
        if (tier === 1) {
          const n = U.randInt(6, 9);
          const r = U.randInt(3, 4);
          const ans = U.nPr(n, r);
          const ncrTrap = U.nCr(n, r);
          const repTrap = Math.pow(n, r);
          const slotFactors = Array.from({ length: r }, (_, idx) => n - idx).join(' \\times ');
          return {
            tier: 1, tpLabel: 'TP1–TP2', subtopic: { bm: '4.1 Pilih Atur Kod Tanpa Ulangan', en: '4.1 Permutations Without Repetition' }, marks: 2,
            prompt: lang === 'bm'
              ? `Berapakah bilangan kod kata laluan **$${r}$ huruf berbeza** yang boleh dibentuk daripada $${n}$ huruf berlainan tanpa ulangan?`
              : `How many **$${r}$-letter password codes** can be formed from $${n}$ distinct letters without repetition?`,
            answerType: 'number', correctValue: ans, displayAnswerTex: `{}^{${n}}P_{${r}} = ${ans}`,
            intentMeta: {
              given: { bm: `$n = ${n},\\; r = ${r}$, kod huruf tanpa ulangan`, en: `$n = ${n},\\; r = ${r}$, letter codes without repetition` },
              goal: { bm: `Kira bilangan kod pilih atur ${'$'}{}^{${n}}P_{${r}}${'$'}`, en: `Compute the number of permutation codes ${'$'}{}^{${n}}P_{${r}}${'$'}` },
              conceptRule: { bm: 'Kod kata laluan mementingkan susunan ($\\text{ABC} \\neq \\text{CBA}$) $\\to$ guna ${}^nP_r$', en: 'Password order matters ($\\text{ABC} \\neq \\text{CBA}$) $\\to$ use ${}^nP_r$' }
            },
            guidedSteps: [
              { prompt: { bm: `Berapakah pilihan untuk huruf pertama dan kedua digabungkan ($${n} \\times ${n - 1}$)?`, en: `How many choices for the first two positions ($${n} \\times ${n - 1}$)?` }, expected: n * (n - 1), hint: { bm: `Darab ${n} dengan ${n - 1}.`, en: `Multiply ${n} by ${n - 1}.` } },
              { prompt: { bm: `Lengkapkan pendaraban bagi kesemua $${r}$ tempat ($^{${n}}P_{${r}}$):`, en: `Complete the product for all $${r}$ slots ($^{${n}}P_{${r}}$):` }, expected: ans, hint: { bm: `Kira ${n}! / (${n}−${r})!.`, en: `Compute ${n}! / (${n}−${r})!.` } }
            ],
            traps: [
              { value: ncrTrap, message: { bm: 'Perangkap [P]: Anda menggunakan ⁿCᵣ! Bagi kod kata laluan, susunan ABC ≠ CBA, jadi wajib guna ⁿPᵣ.', en: 'Trap [P]: You used ⁿCᵣ! Password order matters (ABC ≠ CBA), so use ⁿPᵣ.' } },
              { value: repTrap, message: { bm: `Perangkap [K]: Itu jawapan dengan ulangan (${n}^${r})! Soalan menyatakan TANPA ulangan, jadi pilihan berkurang setiap kotak.`, en: `Trap [K]: That allows repetition (${n}^${r})! Without repetition, available letters decrease by 1 at each slot.` } }
            ],
            hints: [
              { bm: 'Susunan huruf penting dalam kata laluan (ABC ≠ CBA), maka guna Pilih Atur ⁿPᵣ.', en: 'Letter order matters in passwords (ABC ≠ CBA), so use Permutations ⁿPᵣ.' },
              { bm: `Guna kotak tempat (${r} kotak): mula dengan ${n}, darab menurun satu demi satu tanpa ulangan.`, en: `Use ${r} slot boxes: start with ${n} choices and decrease by 1 per slot without repetition.` }
            ],
            steps: [
              { badge: 'P1', title: lang === 'bm' ? 'Kenal pasti pilih atur & kotak tempat' : 'Identify permutation & slot boxes', tex: `\\text{${lang === 'bm' ? 'Bilangan kod' : 'Number of codes'}} = {}^{${n}}P_{${r}} = \\frac{${n}!}{(${n}-${r})!}`, why: lang === 'bm' ? 'Susunan huruf berbeza menghasilkan kod berbeza, maka guna ⁿPᵣ.' : 'Different letter orderings produce different codes, so use ⁿPᵣ.' },
              { badge: 'K1', title: lang === 'bm' ? 'Kembangkan pendaraban kotak tempat' : 'Expand slot-box product', tex: `= ${slotFactors}`, why: lang === 'bm' ? 'Setiap tempat berikutnya berkurang 1 pilihan kerana tiada ulangan.' : 'Each next slot loses 1 choice because no repetition is allowed.' },
              { badge: 'J1', title: lang === 'bm' ? 'Nilaikan jumlah kod' : 'Evaluate total codes', tex: `{}^{${n}}P_{${r}} = ${ans}`, why: lang === 'bm' ? 'Bilangan kod tepat.' : 'Exact number of codes.' }
            ]
          };
        }
        if (tier === 2) {
          const n = U.randInt(5, 7);
          const k = U.pick([2, 3]);
          const units = n - k + 1;
          const ans = U.factorial(units) * U.factorial(k);
          const noInternalTrap = U.factorial(units);
          const dropBlockUnitTrap = U.factorial(n - k) * U.factorial(k);
          return {
            tier: 2, tpLabel: 'TP3–TP4', subtopic: { bm: '4.1 Pilih Atur Bersyarat (Mesti Bersebelahan)', en: '4.1 Conditional Permutations (Grouped Together)' }, marks: 3,
            prompt: lang === 'bm'
              ? `$${n}$ buah buku berbeza hendak disusun sebaris di atas rak. Cari bilangan cara susunan jika **$${k}$ buah buku Matematik tertentu mesti sentiasa bersebelahan**.`
              : `$${n}$ distinct books are arranged in a row on a shelf. Find the number of arrangements if **$${k}$ specific Mathematics books must always be next to each other**.`,
            answerType: 'number', correctValue: ans, displayAnswerTex: `${units}! \\times ${k}! = ${ans}`,
            intentMeta: {
              given: { bm: `$n = ${n}$ buku, $k = ${k}$ diikat bersama`, en: `$n = ${n}$ books, $k = ${k}$ tied together` },
              goal: { bm: 'Kira $(n - k + 1)! \\times k!$', en: 'Compute $(n - k + 1)! \\times k!$' },
              conceptRule: { bm: 'Ikat kumpulan jadi $1$ blok $\\to$ susun blok $\\times$ susunan dalaman blok', en: 'Tie group as $1$ super-block $\\to$ outer block swaps $\\times$ internal swaps' }
            },
            guidedSteps: [
              { prompt: { bm: `Ikat $${k}$ buku Matematik menjadi $1$ blok. Berapakah jumlah blok/objek luar yang perlu disusun ($${n} - ${k} + 1$)?`, en: `Tie the $${k}$ Math books into $1$ block. How many outer units are arranged ($${n} - ${k} + 1$)?` }, expected: units, hint: { bm: `${n - k} buku lain + 1 blok ikatan.`, en: `${n - k} other books + 1 tied block.` } },
              { prompt: { bm: `Darabkan susunan luar ($${units}!$) dengan susunan dalaman blok ($${k}!$):`, en: `Multiply outer arrangements ($${units}!$) by internal block arrangements ($${k}!$):` }, expected: ans, hint: { bm: `Kira ${U.factorial(units)} × ${U.factorial(k)}.`, en: `Compute ${U.factorial(units)} × ${U.factorial(k)}.` } }
            ],
            traps: [
              { value: noInternalTrap, message: { bm: `Perangkap [K]: Anda terlupa mendarab $${k}!$ bagi susunan dalaman buku Matematik di dalam ikatan tersebut!`, en: `Trap [K]: You forgot to multiply by $${k}!$ for internal arrangements inside the tied block!` } },
              { value: dropBlockUnitTrap, message: { bm: `Perangkap [P]: Anda mengira $(${n} - ${k})! \\times ${k}!$, terlupa bahawa blok ikatan itu sendiri ialah $1$ unit ($${n - k} + 1 = ${units}$)!`, en: `Trap [P]: You computed $(${n} - ${k})! \\times ${k}!$, forgetting the tied block counts as $1$ outer unit ($${n - k} + 1 = ${units}$)!` } }
            ],
            hints: [
              { bm: `Ikat ${k} buku Matematik jadi 1 guni: terdapat ${n - k} buku lain + 1 guni = ${units} unit luar.`, en: `Tie the ${k} Math books into 1 super-block: ${n - k} other books + 1 block = ${units} outer units.` },
              { bm: `Susun ${units}! unit luar, kemudian DARAB ${k}! bagi pertukaran tempat di dalam blok ikatan.`, en: `Permute the ${units}! outer units, then MULTIPLY by ${k}! for swaps inside the tied block.` }
            ],
            steps: [
              { badge: 'P1', title: lang === 'bm' ? 'Susunan blok luar' : 'Outer block arrangements', tex: `(${n} - ${k} + 1)! = ${units}! = ${U.factorial(units)}`, why: lang === 'bm' ? `Terdapat ${n - k} buku tunggal dan 1 blok ikatan (${k} buku), kesemuanya ${units} unit luar.` : `There are ${n - k} single books plus 1 tied block (${k} books), making ${units} outer units in total.` },
              { badge: 'K1', title: lang === 'bm' ? 'Darab susunan dalaman' : 'Multiply internal arrangements', tex: `${U.factorial(units)} \\times ${k}! = ${U.factorial(units)} \\times ${U.factorial(k)}`, why: lang === 'bm' ? 'Buku Matematik di dalam blok ikatan juga boleh bertukar tempat dalam ' + k + '! cara.' : 'The distinct Math books inside the tied block can also swap in ' + k + '! ways.' },
              { badge: 'J1', title: lang === 'bm' ? 'Jumlah cara susunan' : 'Total arrangements', tex: `= ${ans}`, why: lang === 'bm' ? 'Darab kedua-dua peringkat bebas untuk jumlah cara.' : 'Multiply both independent stages for total ways.' }
            ]
          };
        }
        // Tier 3 KBAT: Committee selection with "at least" condition!
        const m = U.pick([5, 6]);
        const w = U.pick([4, 5]);
        const c1 = U.nCr(w, 3) * U.nCr(m, 1);
        const c2 = U.nCr(w, 4) * U.nCr(m, 0);
        const total = c1 + c2;
        return {
          tier: 3, tpLabel: 'TP5–TP6 (KBAT)', subtopic: { bm: '4.2 Gabungan Bersyarat ("Sekurang-kurangnya")', en: '4.2 Conditional Combinations ("At Least" Cases)' }, marks: 4,
          prompt: lang === 'bm'
            ? `Satu jawatankuasa seramai **$4$ orang** hendak dipilih daripada **$${m}$ lelaki** dan **$${w}$ perempuan**. Cari bilangan cara pemilihan jika jawatankuasa itu mesti mengandungi **sekurang-kurangnya $3$ orang perempuan**.`
            : `A committee of **$4$ members** is to be chosen from **$${m}$ men** and **$${w}$ women**. Find the number of ways if the committee must include **at least $3$ women**.`,
          answerType: 'number', correctValue: total, displayAnswerTex: `${c1} + ${c2} = ${total}`,
          intentMeta: {
            given: { bm: `$${m}$ L, $${w}$ P, pilih $4$ ahli, $\\text{P} \\ge 3$`, en: `$${m}$ M, $${w}$ W, choose $4$ members, $\\text{W} \\ge 3$` },
            goal: { bm: 'Jumlahkan Kes ($3$P, $1$L) $+$ Kes ($4$P, $0$L)', en: 'Sum Case ($3$W, $1$M) $+$ Case ($4$W, $0$M)' },
            conceptRule: { bm: 'Pecahkan kes berasingan: $({}^{w}C_3 \\times {}^{m}C_1) + ({}^{w}C_4 \\times {}^{m}C_0)$', en: 'Split disjoint cases: $({}^{w}C_3 \\times {}^{m}C_1) + ({}^{w}C_4 \\times {}^{m}C_0)$' }
          },
          guidedSteps: [
            { prompt: { bm: `Kira Kes 1 (**3 Perempuan DAN 1 Lelaki**): $\\,{}^{${w}}C_3 \\times {}^{${m}}C_1$:`, en: `Compute Case 1 (**3 Women AND 1 Man**): $\\,{}^{${w}}C_3 \\times {}^{${m}}C_1$:` }, expected: c1, hint: { bm: `Kira ${U.nCr(w, 3)} × ${m}.`, en: `Compute ${U.nCr(w, 3)} × ${m}.` } },
            { prompt: { bm: `Tambahkan Kes 2 (**4 Perempuan DAN 0 Lelaki**, iaitu $\\,{}^{${w}}C_4 = ${c2}$) kepada Kes 1:`, en: `Add Case 2 (**4 Women AND 0 Men**, which is $\\,{}^{${w}}C_4 = ${c2}$) to Case 1:` }, expected: total, hint: { bm: `Kira ${c1} + ${c2}.`, en: `Compute ${c1} + ${c2}.` } }
          ],
          traps: [
            { value: c1, message: { bm: 'Perangkap [P]: "Sekurang-kurangnya 3 perempuan" bermaksud 3 perempuan ATAU 4 perempuan! Anda tertinggal kes 4 perempuan.', en: 'Trap [P]: "At least 3 women" includes BOTH 3 women OR 4 women! Add Case 2.' } },
            { value: U.nCr(w, 3) * U.nCr(m + w - 3, 1), message: { bm: 'Perangkap [K]: Jangan pilih 3 perempuan dahulu kemudian darab baki campuran — itu menyebabkan kiraan bertindih! Pecahkan mengikut kes berasingan.', en: 'Trap [K]: Picking 3 women then multiplying from the mixed pool double-counts! Split into exact disjoint cases.' } }
          ],
          hints: [
            { bm: 'Pilih ahli jawatankuasa tanpa jawatan khusus menggunakan Gabungan ⁿCᵣ.', en: 'Committee selection without ranked positions uses Combinations ⁿCᵣ.' },
            { bm: 'Senaraikan 2 kes berasingan: (3P, 1L) ATAU (4P, 0L), darab dalam setiap kes, lalu tambah kedua-duanya.', en: 'List 2 disjoint cases: (3W, 1M) OR (4W, 0M), multiply within each case, then add both.' }
          ],
          steps: [
            { badge: 'P1', title: lang === 'bm' ? 'Kes 1: 3 Perempuan & 1 Lelaki' : 'Case 1: 3 Women & 1 Man', tex: `{}^{${w}}C_3 \\times {}^{${m}}C_1 = ${U.nCr(w, 3)} \\times ${m} = ${c1}`, why: lang === 'bm' ? 'Kata kunci DAN bermaksud darab pilihan kedua-dua jantina.' : 'Keyword AND means multiply the choices from both groups.' },
            { badge: 'K1', title: lang === 'bm' ? 'Kes 2: 4 Perempuan & 0 Lelaki' : 'Case 2: 4 Women & 0 Men', tex: `{}^{${w}}C_4 \\times {}^{${m}}C_0 = ${c2} \\times 1 = ${c2}`, why: lang === 'bm' ? `Kes semua perempuan: ${m}C₀ = 1 kerana hanya ada 1 cara untuk tidak memilih sesiapa.` : `All-women case: ${m}C₀ = 1 because there is only 1 way to choose zero men.` },
            { badge: 'J1', title: lang === 'bm' ? 'Jumlahkan kedua-dua kes' : 'Sum mutually exclusive cases', tex: `${c1} + ${c2} = ${total}`, why: lang === 'bm' ? 'Kata kunci ATAU (kes saling eksklusif) bermaksud tambah.' : 'Keyword OR (mutually exclusive cases) means add.' }
          ]
        };
      }
    }
  ];

  App.chapters.push(...f5Stage3);
})(window.AddMathApp);
