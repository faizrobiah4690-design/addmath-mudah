/**
 * AddMath Mudah — Fasa 1: Tingkatan 4 Bab 1 hingga Bab 5 (Mendalam & Lengkap)
 * Dilengkapi Micro-Checkpoints (guidedSteps), Meta Intent Diagnostik & Dwibahasa (BM / EN)
 */
window.AddMathApp = window.AddMathApp || {};
window.AddMathApp.chapters = [];

(function (App) {
  'use strict';
  const U = App.utils;

  // Safe numeric parser that preserves 0 (never uses || fallback)
  function numOr(val, def) {
    if (val === null || val === undefined || String(val).trim() === '') return def;
    const n = Number(val);
    return Number.isFinite(n) ? n : def;
  }

  function strictNum(val) {
    if (val === null || val === undefined || String(val).trim() === '') return NaN;
    const n = Number(val);
    return Number.isFinite(n) ? n : NaN;
  }

  function z0(x) {
    return Math.abs(x) < 1e-9 ? 0 : x;
  }

  // Clean linear equation TeX formatter: handles 0 and ±1 coefficients properly
  function linEqTex(coeffs, vars, rhs) {
    const parts = [];
    for (let i = 0; i < coeffs.length; i++) {
      const c = z0(coeffs[i]);
      if (c === 0) continue;
      const isFirst = parts.length === 0;
      const absC = Math.abs(c);
      const sign = isFirst ? (c < 0 ? '-' : '') : (c < 0 ? ' - ' : ' + ');
      const coeffStr = absC === 1 ? '' : U.roundStr(absC, 4);
      parts.push(sign + coeffStr + vars[i]);
    }
    const lhs = parts.length ? parts.join('') : '0';
    return `${lhs} = ${U.roundStr(z0(rhs), 4)}`;
  }

  const f4Stage1 = [
    // =========================================================================
    // FORM 4 CHAPTER 1: FUNCTIONS / FUNGSI
    // =========================================================================
    {
      id: 'f4-c1',
      stage: 1,
      unlocked: true,
      form: 4,
      num: 1,
      code: { bm: 'T4 • Bab 1', en: 'F4 • Ch 1' },
      icon: 'ƒ(x)',
      color: '#6366f1',
      category: 'algebra',
      title: { bm: 'Fungsi', en: 'Functions' },
      subtitle: {
        bm: 'Hubungan, fungsi nilai mutlak |f(x)|, fungsi gubahan gf(x) & fungsi songsang f⁻¹(x)',
        en: 'Relations, absolute value |f(x)|, composite gf(x) & inverse functions f⁻¹(x)'
      },
      spmWeight: { bm: 'Kertas 1 (Wajib) & Kertas 2 Bhg A', en: 'Paper 1 (Core) & Paper 2 Sec A' },
      concepts: [
        {
          title: { bm: '1. Hubungan, Domain, Kodomain, Julat & Syarat Domain', en: '1. Relations, Domain, Codomain, Range & Domain Restrictions' },
          prereq: {
            bm: 'Ingat persamaan linear Tingkatan 2/3 seperti $y = 2x + 1$? Awak masukkan satu nombor $x$ (input), kira, dan keluar satu jawapan $y$ (output). Dalam Add Math, kita cuma menukar nama $y$ menjadi $f(x)$!\n\nBayangkan **mesin air layan diri**: tekan satu butang ($x$), keluar satu air ($y$). Mesin dianggap berfungsi dengan betul jika:\n• Tekan butang A → keluar Milo, tekan butang B → keluar Milo (banyak-ke-satu: masih OK!).\n• Tetapi jika tekan butang A → tiba-tiba keluar DUA air berbeza serentak (satu-ke-banyak), mesin itu **rosak** — itu **BUKAN fungsi**!',
            en: 'Remember Form 2/3 linear equations like $y = 2x + 1$? You put in a number $x$ (input), do the rule, and get out $y$ (output). In Add Math, we simply rename $y$ to $f(x)$!\n\nThink of a **vending machine**: press one button ($x$), get one drink ($y$). The machine works properly if:\n• Button A gives Milo and Button B also gives Milo (many-to-one: still a valid function!).\n• If Button A shoots out TWO different drinks at once (one-to-many), the machine is **broken** — it is **NOT a function**!'
          },
          body: {
            bm: 'Kenali 4 istilah teras sebelum menyentuh soalan SPM:\n• **Objek ($x$)**: nilai input di sebelah kiri (kumpulan asalnya ialah **Domain**).\n• **Imej ($y$ atau $f(x)$)**: nilai output yang terhasil.\n• **Kodomain**: seluruh set sasaran di sebelah kanan (walaupun ada ahli yang tidak dipilih anak panah).\n• **Julat**: HANYA imej yang benar-benar terkena anak panah (**subset** kepada kodomain).\n\nUntuk menguji graf, gunakan **Ujian Garis Mencancang** ($x = k$): jika garis menegak menyilang graf **paling banyak 1 titik**, ia ialah fungsi.\n\n**Sekatan Domain (Soalan Wajib Kertas 1!)**:\n• Jika ada pecahan $\\frac{a}{D(x)}$, penyebut **tidak boleh sifar** ($D(x) \\ne 0$).\n• Jika ada punca kuasa dua $\\sqrt{u}$, bahagian dalam **mesti $\\ge 0$** ($u \\ge 0$).',
            en: 'Master these 4 core terms before tackling SPM questions:\n• **Object ($x$)**: the input on the left (the full input set is the **Domain**).\n• **Image ($y$ or $f(x)$)**: the output produced by the rule.\n• **Codomain**: the entire target set on the right (even elements with no incoming arrow).\n• **Range**: ONLY the actual hit outputs (a **subset** of the codomain).\n\nOn a graph, use the **Vertical Line Test** ($x = k$): if any vertical line cuts the graph **at most once**, it is a function.\n\n**Domain Restrictions (Paper 1 Favourite!)**:\n• For a fraction $\\frac{a}{D(x)}$, the denominator **cannot be zero** ($D(x) \\ne 0$).\n• For a square root $\\sqrt{u}$, the inside **must be non-negative** ($u \\ge 0$).'
          },
          firstStep: {
            bm: '1. **Semak gambar rajah anak panah**: Kira berapa anak panah keluar daripada setiap objek $x$. Jika setiap $x$ keluar tepat 1 anak panah → **Fungsi**.\n2. **Soalan tanya nilai $x$ yang "tidak tertakrif" dalam pecahan $\\frac{a}{bx - c}$**: Jangan sentuh pengangka! Terus tulis **penyebut $= 0$**, iaitu $bx - c = 0$, lalu selesaikan $x$.\n3. **Diberi domain diskret $\\{x_1, x_2, x_3\\}$**: Gantikan satu demi satu ke dalam $f(x)$ untuk menyenaraikan **Julat**.',
            en: '1. **Check arrow diagrams**: Count arrows leaving each object $x$. Every $x$ has exactly 1 outgoing arrow → **Function**.\n2. **Asked for the "undefined" $x$ in $\\frac{a}{bx - c}$**: Ignore the numerator! Immediately set **denominator $= 0$**, i.e. $bx - c = 0$, and solve for $x$.\n3. **Given a discrete domain $\\{x_1, x_2, x_3\\}$**: Plug each number one by one into $f(x)$ to list the **Range**.'
          },
          formulas: [
            { label: { bm: 'Tatanda Fungsi', en: 'Function Notation' }, tex: 'f : x \\mapsto ax + b \\iff f(x) = ax + b' },
            {
              label: { bm: 'Julat (Subset Kodomain)', en: 'Range (Subset of Codomain)' },
              tex: {
                bm: '\\text{Julat} = \\{y \\in Y \\mid y = f(x) \\text{ bagi } x \\in X\\}',
                en: '\\text{Range} = \\{y \\in Y \\mid y = f(x) \\text{ for } x \\in X\\}'
              }
            },
            {
              label: { bm: 'Sekatan Domain Pecahan & Punca', en: 'Fraction & Root Domain Restrictions' },
              tex: {
                bm: '\\frac{a}{D(x)} \\implies D(x) \\ne 0, \\qquad \\sqrt{u} \\implies u \\ge 0',
                en: '\\frac{a}{D(x)} \\implies D(x) \\ne 0, \\qquad \\sqrt{u} \\implies u \\ge 0'
              }
            }
          ],
          workedExample: {
            title: { bm: 'Contoh Terpandu: Nilai Tidak Tertakrif & Julat', en: 'Worked Example: Undefined Value & Range' },
            problem: {
              bm: 'Diberi $f(x) = \\frac{6}{2x - 4}$. (a) Nyatakan nilai $x$ yang menyebabkan $f(x)$ tidak tertakrif. (b) Cari julat bagi domain $\\{0, 1, 3\\}$.',
              en: 'Given $f(x) = \\frac{6}{2x - 4}$. (a) State the value of $x$ where $f(x)$ is undefined. (b) Find the range for the domain $\\{0, 1, 3\\}$.'
            },
            steps: [
              {
                label: { bm: 'Tetapkan penyebut sama dengan sifar untuk bahagian (a)', en: 'Set the denominator equal to zero for part (a)' },
                tex: '2x - 4 = 0',
                why: {
                  bm: 'Pembahagian dengan sifar ($6 \\div 0$) adalah mustahil, jadi $f(x)$ tidak tertakrif apabila penyebut bernilai $0$.',
                  en: 'Division by zero ($6 \\div 0$) is impossible, so $f(x)$ is undefined whenever the denominator equals $0$.'
                }
              },
              {
                label: { bm: 'Selesaikan persamaan linear untuk $x$', en: 'Solve the linear equation for $x$' },
                tex: '2x = 4 \\implies x = 2',
                why: {
                  bm: 'Pindahkan $-4$ ke kanan menjadi $+4$, kemudian bahagikan dengan $2$. Jadi syarat domain ialah $x \\ne 2$.',
                  en: 'Move $-4$ to the right as $+4$, then divide by $2$. So the domain restriction is $x \\ne 2$.'
                }
              },
              {
                label: { bm: 'Gantikan setiap objek dalam domain $\\{0, 1, 3\\}$ untuk bahagian (b)', en: 'Substitute every object from $\\{0, 1, 3\\}$ for part (b)' },
                tex: 'f(0) = \\frac{6}{2(0)-4} = -\\frac{3}{2}, \\quad f(1) = \\frac{6}{2(1)-4} = -3, \\quad f(3) = \\frac{6}{2(3)-4} = 3',
                why: {
                  bm: 'Setiap objek $x$ dimasukkan menggantikan huruf $x$ untuk mencari imej masing-masing.',
                  en: 'Each object $x$ replaces the variable $x$ to compute its corresponding image.'
                }
              },
              {
                label: { bm: 'Senaraikan set Julat tanpa ulangan', en: 'List the Range as a set' },
                tex: {
                  bm: '\\text{Julat} = \\left\\{-3,\\; -\\frac{3}{2},\\; 3\\right\\}',
                  en: '\\text{Range} = \\left\\{-3,\\; -\\frac{3}{2},\\; 3\\right\\}'
                },
                why: {
                  bm: 'Julat ialah himpunan semua imej yang dihasilkan oleh domain yang diberi.',
                  en: 'The range is the set of all output images produced by the given domain.'
                }
              }
            ],
            trap: {
              bm: 'Jangan keliru antara $f(x)$ tidak tertakrif (penyebut $= 0$) dengan $f(x) = 0$! Pengangka $6$ tidak boleh menjadi $0$.',
              en: 'Never confuse $f(x)$ undefined (denominator $= 0$) with $f(x) = 0$! Here numerator $6$ can never be $0$.'
            }
          },
          tip: {
            bm: 'Ingat! Satu objek TIDAK BOLEH ada dua imej (satu-ke-banyak bukan fungsi), tetapi dua objek berkongsi satu imej (banyak-ke-satu) ADALAH fungsi yang sah.',
            en: 'Remember! One object can NEVER map to two images (one-to-many is NOT a function), whereas two objects sharing one image (many-to-one) IS a valid function.'
          }
        },
        {
          title: { bm: '2. Fungsi Nilai Mutlak |f(x)| & Julat Graf V', en: '2. Absolute Value Functions |f(x)| & V-Graph Range' },
          prereq: {
            bm: 'Bayangkan awak berjalan dari tiang bendera (titik $0$). Jika awak berjalan $5\\text{ m}$ ke kanan ($+5$) atau $5\\text{ m}$ ke kiri ($-5$), jarak sebenar yang awak tempuh tetap **$5\\text{ m}$** (tidak pernah negatif!).\n\nPalang nilai mutlak $|\\dots|$ berfungsi seperti pengukur jarak itu: **kira semua di dalam dahulu**, kemudian jika jawapannya negatif, buang tanda negatif supaya menjadi positif!',
            en: 'Imagine walking away from a flagpole (point $0$). Whether you walk $5\\text{ m}$ right ($+5$) or $5\\text{ m}$ left ($-5$), the distance you walked is still **$5\\text{ m}$** (distance is never negative!).\n\nAbsolute value bars $|\\dots|$ work just like that distance meter: **evaluate everything inside first**, then if the result is negative, drop the minus sign!'
          },
          body: {
            bm: 'Secara graf, mana-mana bahagian garis $y = f(x)$ yang berada **di bawah paksi-$x$** ($y < 0$) dipantulkan ke atas paksi-$x$, membentuk bucu **V** yang menyentuh paksi-$x$ pada titik di mana $f(x) = 0$.\n\n**Cara cepat mencari Julat $y = |ax + b|$ pada domain $p \\le x \\le q$**:\n1. Cari titik bucu $x_0$ dengan menyelesaikan $ax + b = 0$.\n2. Jika $x_0$ berada **di dalam** selang $[p, q]$, nilai minimum graf ialah **$0$** (di bucu V!), bukan nilai hujung terkecil.\n3. Kira nilai di kedua-dua hujung $|ap + b|$ dan $|aq + b|$ untuk mendapat nilai maksimum.',
            en: 'Graphically, any part of $y = f(x)$ **below the $x$-axis** ($y < 0$) bounces upwards across the $x$-axis, creating a **V-shape** whose sharp corner touches the $x$-axis where $f(x) = 0$.\n\n**Quick way to find the Range of $y = |ax + b|$ on domain $p \\le x \\le q$**:\n1. Find the V-vertex $x_0$ by solving $ax + b = 0$.\n2. If $x_0$ lies **inside** $[p, q]$, the minimum value is **$0$** (at the V-corner!), NOT the smaller endpoint.\n3. Evaluate both endpoints $|ap + b|$ and $|aq + b|$ to get the maximum value.'
          },
          firstStep: {
            bm: '1. **Menilai $|f(x)|$**: Kira nilai di dalam palang $|\\dots|$ sehingga habis SEBELUM menukar tanda.\n2. **Menyelesaikan persamaan $|ax + b| = k$ ($k > 0$)**: Terus pecahkan kepada **DUA cabang**: $ax + b = k$ dan $ax + b = -k$. (Jika $k < 0$, terus jawab tiada penyelesaian!).\n3. **Mencari julat pada $[p, q]$**: Selesaikan $ax + b = 0$ dahulu untuk semak sama ada bucu $0$ berada dalam selang.',
            en: '1. **Evaluating $|f(x)|$**: Finish all arithmetic inside $|\\dots|$ BEFORE flipping the sign.\n2. **Solving $|ax + b| = k$ ($k > 0$)**: Immediately split into **TWO branches**: $ax + b = k$ and $ax + b = -k$. (If $k < 0$, stop — no real solution!)\n3. **Finding range on $[p, q]$**: Solve $ax + b = 0$ first to check whether the $0$-vertex falls inside the interval.'
          },
          formulas: [
            { label: { bm: 'Takrif Cebis demi Cebis', en: 'Piecewise Definition' }, tex: '|f(x)| = \\begin{cases} f(x), & f(x) \\ge 0 \\\\ -f(x), & f(x) < 0 \\end{cases}' },
            {
              label: { bm: 'Pecahan Dua Cabang', en: 'Two-Branch Solving Rule' },
              tex: {
                bm: '|ax + b| = k \\implies ax + b = k \\quad \\text{atau} \\quad ax + b = -k \\quad (k \\ge 0)',
                en: '|ax + b| = k \\implies ax + b = k \\quad \\text{or} \\quad ax + b = -k \\quad (k \\ge 0)'
              }
            }
          ],
          workedExample: {
            title: { bm: 'Contoh Terpandu: Selesaikan |2x − 5| = 9 & Julat Graf V', en: 'Worked Example: Solve |2x − 5| = 9 & V-Graph Range' },
            problem: {
              bm: 'Diberi $f(x) = |2x - 5|$. (a) Cari nilai-nilai $x$ apabila $f(x) = 9$. (b) Nyatakan julat bagi $f(x)$ untuk domain $-1 \\le x \\le 4$.',
              en: 'Given $f(x) = |2x - 5|$. (a) Find the values of $x$ when $f(x) = 9$. (b) State the range of $f(x)$ for the domain $-1 \\le x \\le 4$.'
            },
            steps: [
              {
                label: { bm: 'Pecahkan $|2x - 5| = 9$ kepada cabang $+9$ dan $-9$', en: 'Split $|2x - 5| = 9$ into $+9$ and $-9$ branches' },
                tex: {
                  bm: '2x - 5 = 9 \\quad \\text{atau} \\quad 2x - 5 = -9',
                  en: '2x - 5 = 9 \\quad \\text{or} \\quad 2x - 5 = -9'
                },
                why: {
                  bm: 'Kedua-dua $+9$ dan $-9$ mempunyai nilai mutlak $9$, maka ungkapan di dalam boleh sama dengan salah satu daripadanya.',
                  en: 'Both $+9$ and $-9$ have absolute value $9$, so the inside expression can equal either one.'
                }
              },
              {
                label: { bm: 'Selesaikan kedua-dua persamaan linear dengan teliti', en: 'Solve both linear equations step by step' },
                tex: '2x = 9 + 5 = 14 \\implies x = 7; \\qquad 2x = -9 + 5 = -4 \\implies x = -2',
                why: {
                  bm: 'Pindahkan $-5$ menjadi $+5$ pada kedua-dua cabang sebelum membahagi dengan $2$.',
                  en: 'Add $5$ to both sides in each branch before dividing by $2$.'
                }
              },
              {
                label: { bm: 'Untuk julat pada $-1 \\le x \\le 4$, cari bucu V dahulu', en: 'For the range on $-1 \\le x \\le 4$, locate the V-vertex first' },
                tex: '2x - 5 = 0 \\implies x = 2.5 \\in [-1, 4] \\implies f(2.5) = 0',
                why: {
                  bm: 'Oleh sebab $x = 2.5$ berada di antara $-1$ dan $4$, graf mencecah paksi-$x$ ($y = 0$) di dalam domain!',
                  en: 'Because $x = 2.5$ lies between $-1$ and $4$, the graph hits the $x$-axis ($y = 0$) inside the domain!'
                }
              },
              {
                label: { bm: 'Kira kedua-dua hujung untuk mendapat nilai maksimum & julat', en: 'Evaluate both endpoints to find the maximum & range' },
                tex: 'f(-1) = |2(-1)-5| = |-7| = 7, \\quad f(4) = |2(4)-5| = 3 \\implies 0 \\le f(x) \\le 7',
                why: {
                  bm: 'Titik terendah ialah $0$ (bucu V) dan titik tertinggi ialah $7$ (di $x = -1$).',
                  en: 'The lowest point is $0$ (at the V-vertex) and the highest point is $7$ (at $x = -1$).'
                }
              }
            ],
            trap: {
              bm: 'Ramai pelajar hanya memasukkan hujung $x = -1$ dan $x = 4$ lalu menulis $3 \\le f(x) \\le 7$! Itu SALAH kerana mereka terlupa graf V turun ke $0$ di $x = 2.5$.',
              en: 'Many students only plug in endpoints $x = -1$ and $x = 4$ and write $3 \\le f(x) \\le 7$! That is WRONG because the V-graph drops down to $0$ at $x = 2.5$.'
            }
          },
          tip: {
            bm: 'Apabila menyelesaikan $|ax + b| = k$ ($k > 0$), WAJIB tulis kedua-dua kes: $ax + b = k$ ATAU $ax + b = -k$. Jangan buang tanda mutlak untuk satu kes sahaja!',
            en: 'When solving $|ax + b| = k$ ($k > 0$), ALWAYS split into TWO branches: $ax + b = k$ OR $ax + b = -k$. Never drop the bars for just one branch!'
          }
        },
        {
          title: { bm: '3. Fungsi Gubahan gf(x), Fungsi Dalam/Luar & fⁿ(x)', en: '3. Composite Functions gf(x), Inner/Outer & fⁿ(x)' },
          prereq: {
            bm: 'Bayangkan proses dua mesin di kilang (atau diskaun + baucar di kedai): mesin pertama membungkus barang, mesin kedua menampal harga. Urutan penting!\n\nDalam $gf(x) = g(f(x))$, huruf yang **paling dekat dengan $x$** ($f$) bertindak **DAHULU**, kemudian hasilnya disuap masuk ke dalam $g$. Ingat: $gf(x)$ ialah "fungsi dalam fungsi", BUKAN darab $g(x) \\times f(x)$!',
            en: 'Think of a two-stage factory assembly line: Machine 1 builds the toy ($f$), then Machine 2 paints it ($g$). Order matters!\n\nIn $gf(x) = g(f(x))$, the letter **closest to $x$** ($f$) acts **FIRST**, and its output is fed into $g$. Warning: $gf(x)$ means "function inside function", NEVER multiplication $g(x) \\times f(x)$!'
          },
          body: {
            bm: 'Tiga kemahiran SPM dalam fungsi gubahan:\n1. **Cari gubahan terus**: Tulis $gf(x) = g(f(x))$ dan gantikan setiap $x$ dalam $g$ dengan seluruh ungkapan $f(x)$.\n2. **Cari fungsi dalam $g(x)$** (diberi $f$ dan $fg$): Gantikan setiap $x$ dalam $f$ dengan $g(x)$, samakan dengan $fg(x)$, dan asingkan $g(x)$.\n3. **Cari fungsi luar $f(x)$** (diberi $g$ dan $fg$): Gunakan **kaedah penggantian $u = g(x)$**, ungkapkan $x$ dalam sebutan $u$, masukkan ke dalam $fg(x)$, kemudian tukar $u \\to x$.\n4. **Gubahan berulang $f^n(x)$**: $f^2(x) = f(f(x))$, $f^3(x) = f(f^2(x))$. Ia BUKAN kuasa dua $[f(x)]^2$!',
            en: 'Three essential SPM skills for composite functions:\n1. **Direct composition**: Rewrite $gf(x) = g(f(x))$ and replace every $x$ inside $g$ with the entire expression $f(x)$.\n2. **Find inner $g(x)$** (given $f$ and $fg$): Replace every $x$ in $f$ with $g(x)$, equate to $fg(x)$, and isolate $g(x)$.\n3. **Find outer $f(x)$** (given $g$ and $fg$): Use **substitution $u = g(x)$**, solve for $x$ in terms of $u$, plug into $fg(x)$, then rename $u \\to x$.\n4. **Iterated functions $f^n(x)$**: $f^2(x) = f(f(x))$, $f^3(x) = f(f^2(x))$. It is NEVER the square $[f(x)]^2$!'
          },
          firstStep: {
            bm: '1. Sentiasa tulis tanda kurungan dahulu: ubah $gf(x)$ kepada **$g(f(x))$** supaya awak nampak mana fungsi luar dan mana fungsi dalam.\n2. **Hilang fungsi dalam?** Masukkan $g(x)$ ke dalam acuan $f$ dan selesaikan algebra biasa.\n3. **Hilang fungsi luar?** Buat $u = \\text{fungsi dalam}$, cari $x = \\dots$, masukkan ke sebelah kanan, dan kembangkan dengan kurungan.',
            en: '1. Always add brackets first: rewrite $gf(x)$ as **$g(f(x))$** so outer and inner are unmistakable.\n2. **Missing inner $g(x)$?** Plug $g(x)$ into the template of $f$ and solve for $g(x)$.\n3. **Missing outer $f(x)$?** Let $u = \\text{inner function}$, express $x$ in terms of $u$, substitute into the RHS, and expand carefully.'
          },
          formulas: [
            {
              label: { bm: 'Takrif & Kewujudan Gubahan', en: 'Composite Definition & Existence' },
              tex: {
                bm: 'gf(x) = g(f(x)), \\qquad \\text{Julat } f \\subseteq \\text{Domain } g',
                en: 'gf(x) = g(f(x)), \\qquad \\text{Range } f \\subseteq \\text{Domain } g'
              }
            },
            { label: { bm: 'Gubahan Berulang fⁿ(x)', en: 'Iterated Composites fⁿ(x)' }, tex: 'f^2(x) = f(f(x)), \\qquad f^3(x) = f(f^2(x))' }
          ],
          workedExample: {
            title: { bm: 'Contoh Terpandu: Cari Fungsi Luar f(x) daripada fg(x)', en: 'Worked Example: Find Outer Function f(x) from fg(x)' },
            problem: {
              bm: 'Diberi $g(x) = 2x + 3$ dan $fg(x) = 4x^2 + 12x + 5$. Cari ungkapan bagi fungsi luar $f(x)$.',
              en: 'Given $g(x) = 2x + 3$ and $fg(x) = 4x^2 + 12x + 5$, find the outer function $f(x)$.'
            },
            steps: [
              {
                label: { bm: 'Tulis $fg(x)$ dalam bentuk $f(g(x))$ dan tetapkan $u = g(x)$', en: 'Write $fg(x)$ as $f(g(x))$ and let $u = g(x)$' },
                tex: 'f(2x + 3) = 4x^2 + 12x + 5, \\qquad u = 2x + 3',
                why: {
                  bm: 'Kita mahu menukar bahagian dalam kurungan $2x + 3$ menjadi satu pemboleh ubah tunggal $u$.',
                  en: 'We want to turn the expression inside brackets $(2x + 3)$ into a single variable $u$.'
                }
              },
              {
                label: { bm: 'Ungkapkan $x$ dalam sebutan $u$', en: 'Express $x$ in terms of $u$' },
                tex: 'u - 3 = 2x \\implies x = \\frac{u - 3}{2}',
                why: {
                  bm: 'Asingkan $x$ supaya setiap huruf $x$ di sebelah kanan dapat diganti dengan $u$.',
                  en: 'Isolate $x$ so every $x$ on the right-hand side can be replaced using $u$.'
                }
              },
              {
                label: { bm: 'Gantikan $x = \\frac{u - 3}{2}$ ke dalam RHS dan kembangkan penuh', en: 'Substitute $x = \\frac{u - 3}{2}$ into RHS and expand completely' },
                tex: 'f(u) = 4\\left(\\frac{u - 3}{2}\\right)^2 + 12\\left(\\frac{u - 3}{2}\\right) + 5 = 4\\left(\\frac{u^2 - 6u + 9}{4}\\right) + 6(u - 3) + 5',
                why: {
                  bm: 'Ingat kuasa dua meliputi pengangka DAN penyebut: $(u-3)^2 = u^2 - 6u + 9$ dan $2^2 = 4$!',
                  en: 'Remember to square BOTH numerator and denominator: $(u-3)^2 = u^2 - 6u + 9$ and $2^2 = 4$!'
                }
              },
              {
                label: { bm: 'Potong pekali dan permudahkan, kemudian tukar $u \\to x$', en: 'Cancel, simplify, and rename $u \\to x$' },
                tex: 'f(u) = (u^2 - 6u + 9) + (6u - 18) + 5 = u^2 - 4 \\implies f(x) = x^2 - 4',
                why: {
                  bm: '$4$ memotong $4$, $-6u + 6u = 0$, dan $9 - 18 + 5 = -4$. Akhir sekali tukar simbol $u$ kepada $x$.',
                  en: '$4$ cancels $4$, $-6u + 6u = 0$, and $9 - 18 + 5 = -4$. Finally replace dummy variable $u$ with $x$.'
                }
              }
            ],
            trap: {
              bm: 'Jangan keliru $f^2(x)$ dengan $[f(x)]^2$! Jika $f(x) = x^2 - 4$, maka $f^2(x) = f(x^2 - 4) = (x^2 - 4)^2 - 4$, BUKAN $(x^2 - 4)^2$.',
              en: 'Never confuse $f^2(x)$ with $[f(x)]^2$! For $f(x) = x^2 - 4$, $f^2(x) = f(x^2 - 4) = (x^2 - 4)^2 - 4$, NOT $(x^2 - 4)^2$.'
            }
          },
          tip: {
            bm: 'Selepas mencari $f(x)$, buat semakan pantas 5 saat dengan memasukkan $g(x)$ ke dalam jawapan $f(x)$ awak untuk memastikan ia memberi semula $fg(x)$!',
            en: 'After finding $f(x)$, do a 5-second sanity check by plugging $g(x)$ back into your $f(x)$ to confirm you get $fg(x)$!'
          }
        },
        {
          title: { bm: '4. Fungsi Songsang f⁻¹(x), Songsang Pecahan & Domain Terhad', en: '4. Inverse Functions f⁻¹(x), Rational Inverses & Restricted Domains' },
          prereq: {
            bm: 'Bayangkan butang **"Undo"** (buat semula) atau perjalanan pulang dari sekolah ke rumah: fungsi $f$ membawa awak dari rumah ($x$) ke sekolah ($y$), jadi fungsi songsang $f^{-1}$ membawa awak **berpatah balik** dari sekolah ($y$) ke rumah ($x$).\n\n**Amaran keras**: Simbol $-1$ pada $f^{-1}(x)$ bermaksud **"songsang/undur"**, ia BUKAN kuasa negatif dan **BUKAN $\\frac{1}{f(x)}$**!',
            en: 'Think of an **"Undo" button** or the return trip home from school: $f$ takes you from home ($x$) to school ($y$), so the inverse $f^{-1}$ takes you **backwards** from school ($y$) to home ($x$).\n\n**Critical warning**: The $-1$ in $f^{-1}(x)$ means **"undo"**, it is NOT a power and **NEVER $\\frac{1}{f(x)}$**!'
          },
          body: {
            bm: 'Ciri-ciri utama fungsi songsang yang wajib diingat:\n• **Syarat kewujudan**: $f^{-1}$ hanya wujud jika $f$ ialah **satu-ke-satu** (lulus **Ujian Garis Mengufuk** — garis melintang $y = k$ memotong graf paling banyak 1 kali). Fungsi kuadratik (bentuk U) gagal ujian ini, jadi domainnya perlu **dihadkan** di paksi simetri ($x \\ge h$ atau $x \\le h$) supaya menjadi satu-ke-satu.\n• **Pantulan graf**: Graf $y = f^{-1}(x)$ ialah pantulan graf $y = f(x)$ pada garis **$y = x$**.\n• **Tukar tempat**: $\\text{Domain } f^{-1} = \\text{Julat } f$ dan $\\text{Julat } f^{-1} = \\text{Domain } f$.',
            en: 'Core inverse properties to remember:\n• **When does $f^{-1}$ exist?** Only if $f$ is **one-to-one** (passes the **Horizontal Line Test** — any horizontal line $y = k$ cuts the graph at most once). Quadratics (U-shape) fail this, so we must **restrict the domain** at the axis of symmetry ($x \\ge h$ or $x \\le h$) to make them one-to-one.\n• **Graph mirror**: $y = f^{-1}(x)$ is the reflection of $y = f(x)$ across the line **$y = x$**.\n• **Swap roles**: $\\text{Domain } f^{-1} = \\text{Range } f$ and $\\text{Range } f^{-1} = \\text{Domain } f$.'
          },
          firstStep: {
            bm: '1. Tulis $y = f(x)$ (atau gunakan identiti $f(f^{-1}(x)) = x$ dengan biar $y = f^{-1}(x)$).\n2. Susun semula untuk **mengasingkan $x$** seorang diri di sebelah kiri. (Jika pecahan, darab silang dahulu dan kumpulkan semua sebutan $x$ pada satu sisi!)\n3. Tukarkan $y \\to x$, tulis $f^{-1}(x) = \\dots$, dan nyatakan **syarat penyebut $\\ne 0$** jika berbentuk pecahan.',
            en: '1. Write $y = f(x)$ (or use $f(f^{-1}(x)) = x$ by letting $y = f^{-1}(x)$).\n2. Rearrange algebraically to **isolate $x$** alone on one side. (For fractions, cross-multiply first, then group all $x$-terms on one side!)\n3. Replace $y \\to x$, write $f^{-1}(x) = \\dots$, and state the **denominator $\\ne 0$** restriction if fractional.'
          },
          formulas: [
            {
              label: { bm: 'Sifat Songsang & Pertukaran Domain', en: 'Inverse Property & Domain Swap' },
              tex: {
                bm: 'f(x) = y \\iff f^{-1}(y) = x, \\qquad \\text{Domain } f^{-1} = \\text{Julat } f',
                en: 'f(x) = y \\iff f^{-1}(y) = x, \\qquad \\text{Domain } f^{-1} = \\text{Range } f'
              }
            },
            { label: { bm: 'Identiti Pembatalan', en: 'Cancellation Identity' }, tex: 'ff^{-1}(x) = f^{-1}f(x) = x' }
          ],
          workedExample: {
            title: { bm: 'Contoh Terpandu: Fungsi Songsang Pecahan', en: 'Worked Example: Rational Inverse Function' },
            problem: {
              bm: 'Diberi $f(x) = \\frac{2x + 1}{x - 3}, \\; x \\ne 3$. Cari $f^{-1}(x)$ dan nyatakan nilai $x$ yang tidak tertakrif.',
              en: 'Given $f(x) = \\frac{2x + 1}{x - 3}, \\; x \\ne 3$, find $f^{-1}(x)$ and state the excluded value of $x$.'
            },
            steps: [
              {
                label: { bm: 'Biar $y = f(x)$ dan darab silang penyebut $(x - 3)$', en: 'Let $y = f(x)$ and multiply both sides by $(x - 3)$' },
                tex: 'y = \\frac{2x + 1}{x - 3} \\implies y(x - 3) = 2x + 1',
                why: {
                  bm: 'Menghapuskan pecahan dari awal menjadikan penyusunan semula jauh lebih mudah.',
                  en: 'Clearing the fraction right away makes rearranging much easier.'
                }
              },
              {
                label: { bm: 'Kembangkan kurungan di sebelah kiri', en: 'Expand the bracket on the left-hand side' },
                tex: 'xy - 3y = 2x + 1',
                why: {
                  bm: 'Buka kurungan supaya kita dapat melihat setiap sebutan yang mengandungi $x$.',
                  en: 'Expand so we can spot every term containing $x$.'
                }
              },
              {
                label: { bm: 'Kumpulkan semua sebutan $x$ ke kiri, bukan-$x$ ke kanan', en: 'Group all $x$-terms on the left, non-$x$ terms on the right' },
                tex: 'xy - 2x = 3y + 1',
                why: {
                  bm: '$2x$ pindah ke kiri menjadi $-2x$, dan $-3y$ pindah ke kanan menjadi $+3y$.',
                  en: '$2x$ moves left as $-2x$, while $-3y$ moves right as $+3y$.'
                }
              },
              {
                label: { bm: 'Faktorkan $x$ keluar, kemudian bahagi dengan $(y - 2)$', en: 'Factor out $x$, then divide by $(y - 2)$' },
                tex: 'x(y - 2) = 3y + 1 \\implies x = \\frac{3y + 1}{y - 2}',
                why: {
                  bm: 'Pemfaktoran menggabungkan dua $x$ menjadi satu $x$ sahaja.',
                  en: 'Factoring combines two $x$ terms into a single $x$.'
                }
              },
              {
                label: { bm: 'Tukar $y \\to x$ dan nyatakan syarat penyebut $\\ne 0$', en: 'Swap $y \\to x$ and state denominator $\\ne 0$' },
                tex: 'f^{-1}(x) = \\frac{3x + 1}{x - 2}, \\quad x \\ne 2',
                why: {
                  bm: 'Penyebut $x - 2 = 0 \\implies x = 2$ mesti dikecualikan supaya pecahan sentiasa tertakrif.',
                  en: 'Setting denominator $x - 2 = 0 \\implies x = 2$ must be excluded so the fraction stays defined.'
                }
              }
            ],
            trap: {
              bm: 'Jangan sesekali menterbalikkan pecahan menjadi $\\frac{x - 3}{2x + 1}$! Itu ialah salingan $\\frac{1}{f(x)}$, BUKAN songsang $f^{-1}(x)$.',
              en: 'NEVER flip the fraction upside down to $\\frac{x - 3}{2x + 1}$! That is the reciprocal $\\frac{1}{f(x)}$, NOT the inverse $f^{-1}(x)$.'
            }
          },
          tip: {
            bm: 'Untuk mencari nilai $f^{-1}(k)$ tanpa mencari formula $f^{-1}(x)$ penuh, gunakan sahaja $f(x) = k$ dan terus selesaikan untuk $x$!',
            en: 'To find a single value $f^{-1}(k)$ quickly without deriving the full inverse formula, just set $f(x) = k$ and solve for $x$!'
          }
        }
      ],
      traps: [
        {
          title: { bm: 'Tertukar Urutan gf(x) dengan fg(x)', en: 'Swapping Order of gf(x) vs fg(x)' },
          desc: {
            bm: 'Bagi $gf(x)$, gantikan $f(x)$ ke dalam $g(x)$, bukan sebaliknya! Secara umum $gf(x) \\ne fg(x)$.',
            en: 'For $gf(x)$, substitute $f(x)$ inside $g(x)$, never the reverse! Generally $gf(x) \\ne fg(x)$.'
          }
        },
        {
          title: { bm: 'Terlupa Cabang Negatif dalam |f(x)| = k', en: 'Forgetting the Negative Branch in |f(x)| = k' },
          desc: {
            bm: 'Pelajar sering menulis $ax + b = k$ sahaja dan hilang separuh markah kerana tertinggal $ax + b = -k$.',
            en: 'Students often write $ax + b = k$ only, losing half the marks by omitting $ax + b = -k$.'
          }
        },
        {
          title: { bm: 'Menyangka f⁻¹(x) Sama Dengan Salingan 1/f(x)', en: 'Confusing Inverse f⁻¹(x) with Reciprocal 1/f(x)' },
          desc: {
            bm: 'Tanda $-1$ pada $f^{-1}(x)$ bermaksud fungsi songsang (terbalikkan $x \\leftrightarrow y$), BUKAN $1 \\div f(x)$!',
            en: 'The $-1$ superscript in $f^{-1}(x)$ means inverse mapping (swap $x \\leftrightarrow y$), NEVER $1 \\div f(x)$!'
          }
        },
        {
          title: { bm: 'Keliru f²(x) dengan [f(x)]² & Julat Modulus', en: 'Confusing f²(x) with [f(x)]² & Missing V-Vertex in Modulus Range' },
          desc: {
            bm: '$f^2(x)$ bermaksud gubahan $f(f(x))$, bukan kuasadua $[f(x)]^2$. Selain itu, untuk julat $|ax+b|$ pada $[p,q]$, sentiasa semak sama ada bucu $ax+b=0$ jatuh di dalam $[p,q]$!',
            en: '$f^2(x)$ means composite $f(f(x))$, not squaring $[f(x)]^2$. Also, for modulus range on $[p,q]$, always check if the vertex $ax+b=0$ falls inside $[p,q]$!'
          }
        }
      ],
      solvers: [
        {
          id: 'comp-inv-linear',
          title: { bm: 'Solver Fungsi Gubahan & Songsang Linear', en: 'Composite & Inverse Function Solver' },
          desc: {
            bm: 'Kira gf(x), fg(x), f⁻¹(x) dan nilaikan pada x = k bagi f(x) = ax + b dan g(x) = cx + d.',
            en: 'Compute gf(x), fg(x), f⁻¹(x) and evaluate at x = k for f(x) = ax + b and g(x) = cx + d.'
          },
          inputs: [
            { id: 'a', label: { bm: 'Pekali a dalam f(x) = ax + b', en: 'Coeff a in f(x) = ax + b' }, default: 2 },
            { id: 'b', label: { bm: 'Pemalar b dalam f(x) = ax + b', en: 'Constant b in f(x) = ax + b' }, default: -3 },
            { id: 'c', label: { bm: 'Pekali c dalam g(x) = cx + d', en: 'Coeff c in g(x) = cx + d' }, default: 4 },
            { id: 'd', label: { bm: 'Pemalar d dalam g(x) = cx + d', en: 'Constant d in g(x) = cx + d' }, default: 1 },
            { id: 'k', label: { bm: 'Nilai uji x = k', en: 'Test value x = k' }, default: 5 }
          ],
          solve: function (v, lang) {
            const a = numOr(v.a, 2);
            const b = numOr(v.b, -3);
            const c = numOr(v.c, 4);
            const d = numOr(v.d, 1);
            const k = numOr(v.k, 5);
            const fTex = U.polyTex([{ c: a, p: 1 }, { c: b, p: 0 }]);
            const gTex = U.polyTex([{ c: c, p: 1 }, { c: d, p: 0 }]);
            const gfA = z0(c * a);
            const gfB = z0(c * b + d);
            const fgA = z0(a * c);
            const fgB = z0(a * d + b);
            const gfTex = U.polyTex([{ c: gfA, p: 1 }, { c: gfB, p: 0 }]);
            const fgTex = U.polyTex([{ c: fgA, p: 1 }, { c: fgB, p: 0 }]);
            const gfk = z0(gfA * k + gfB);

            const gfExpand = c === 0
              ? `gf(x) = ${d}`
              : (d === 0
                  ? `gf(x) = ${c}(${fTex}) = ${gfTex}`
                  : (c * b === 0
                      ? `gf(x) = ${c}(${fTex})${U.signedNum(d)} = ${gfTex}`
                      : `gf(x) = ${c}(${fTex})${U.signedNum(d)} = ${U.polyTex([{ c: c * a, p: 1 }, { c: c * b, p: 0 }])}${U.signedNum(d)} = ${gfTex}`));
            const fgExpand = a === 0
              ? `fg(x) = ${b}`
              : (b === 0
                  ? `fg(x) = ${a}(${gTex}) = ${fgTex}`
                  : (a * d === 0
                      ? `fg(x) = ${a}(${gTex})${U.signedNum(b)} = ${fgTex}`
                      : `fg(x) = ${a}(${gTex})${U.signedNum(b)} = ${U.polyTex([{ c: a * c, p: 1 }, { c: a * d, p: 0 }])}${U.signedNum(b)} = ${fgTex}`));

            if (a === 0) {
              return {
                problemTex: `f(x) = ${fTex}, \\quad g(x) = ${gTex}`,
                steps: [
                  {
                    badge: 'K1',
                    title: lang === 'bm' ? 'Langkah 1: Kira Fungsi Gubahan gf(x) & fg(x)' : 'Step 1: Find Composite gf(x) & fg(x)',
                    tex: `${gfExpand}, \\qquad ${fgExpand}`,
                    why: lang === 'bm' ? 'Oleh sebab f(x) ialah pemalar, gantikan terus ke dalam g dan sebaliknya.' : 'Since f(x) is constant, substitute directly into g and vice versa.'
                  },
                  {
                    badge: 'J1',
                    title: lang === 'bm' ? `Langkah 2: Nilaikan gf(${k})` : `Step 2: Evaluate gf(${k})`,
                    tex: `gf(${k}) = ${U.roundStr(gfk)}`,
                    why: lang === 'bm' ? 'Pemalar tidak berubah dengan nilai x.' : 'A constant function gives the same output for any x.'
                  },
                  {
                    badge: 'P1',
                    title: lang === 'bm' ? 'Langkah 3: Semak Kewujudan f⁻¹(x)' : 'Step 3: Check Inverse Existence f⁻¹(x)',
                    tex: lang === 'bm' ? `a = 0 \\implies f(x) = ${b} \\text{ (banyak-ke-satu)} \\implies f^{-1}(x) \\text{ tidak wujud}` : `a = 0 \\implies f(x) = ${b} \\text{ (many-to-one)} \\implies f^{-1}(x) \\text{ does not exist}`,
                    why: lang === 'bm' ? 'Fungsi pemalar gagal Ujian Garis Mengufuk kerana semua x memetakan kepada nilai y yang sama.' : 'A constant function fails the Horizontal Line Test since all x map to the same y.'
                  }
                ],
                finalTex: lang === 'bm'
                  ? `gf(x) = ${gfTex}, \\quad f^{-1}(x) \\text{ tidak wujud (a = 0)}`
                  : `gf(x) = ${gfTex}, \\quad f^{-1}(x) \\text{ does not exist (a = 0)}`,
                trapWarning: lang === 'bm'
                  ? 'Fungsi songsang hanya wujud jika fungsi itu satu-ke-satu ($a \\ne 0$).'
                  : 'An inverse function exists only when $f$ is one-to-one ($a \\ne 0$).'
              };
            }

            const invK = (k - b) / a;
            const numPart = b === 0 ? 'x' : `x ${U.signedNum(-b)}`;
            let invTex;
            if (a === 1) invTex = numPart;
            else if (a === -1) invTex = b === 0 ? '-x' : `-x ${U.signedNum(b)}`;
            else invTex = `\\frac{${numPart}}{${a}}`;

            const ySide = b === 0 ? 'y' : `y ${U.signedNum(-b)}`;
            const axTerm = a === 1 ? 'x' : (a === -1 ? '-x' : `${U.roundStr(a)}x`);
            const isExactInv = Number.isInteger(k - b) && Number.isInteger(a);
            const invFracTex = isExactInv ? U.fracTex(k - b, a) : U.roundStr(invK, 4);
            const isTerminatingSame = isExactInv && Math.abs(invK - Number(invK.toFixed(4))) < 1e-12;
            const invEvalTex = !isExactInv
              ? `f^{-1}(${k}) = \\frac{${U.roundStr(k - b)}}{${U.roundStr(a)}} = ${U.roundStr(invK, 4)}`
              : (invFracTex === U.roundStr(invK, 4)
                  ? `f^{-1}(${k}) = ${invFracTex}`
                  : `f^{-1}(${k}) = ${invFracTex} ${isTerminatingSame ? '=' : '\\approx'} ${U.roundStr(invK, 4)}`);

            return {
              problemTex: `f(x) = ${fTex}, \\quad g(x) = ${gTex}`,
              steps: [
                {
                  badge: 'K1',
                  title: lang === 'bm' ? 'Langkah 1: Kembangkan Fungsi Gubahan gf(x) & fg(x)' : 'Step 1: Expand Composite gf(x) & fg(x)',
                  tex: `${gfExpand} \\\\ ${fgExpand}`,
                  why: lang === 'bm' ? 'Kembangkan kurungan dahulu sebelum menggabungkan pemalar; urutan berbeza memberi hasil berbeza.' : 'Expand brackets first before combining constants; swapping order changes the constant term.'
                },
                {
                  badge: 'J1',
                  title: lang === 'bm' ? `Langkah 2: Nilaikan gf(${k})` : `Step 2: Evaluate gf(${k})`,
                  tex: `gf(${k}) = ${U.roundStr(gfA)}(${k})${U.signedNum(gfB)} = ${U.roundStr(gfk)}`,
                  why: lang === 'bm' ? `Gantikan x = ${k} ke dalam ungkapan gf(x).` : `Substitute x = ${k} into gf(x).`
                },
                {
                  badge: 'K1',
                  title: lang === 'bm' ? 'Langkah 3: Terbitkan Fungsi Songsang f⁻¹(x)' : 'Step 3: Derive Inverse Function f⁻¹(x)',
                  tex: `y = ${fTex} \\implies ${axTerm} = ${ySide} \\implies f^{-1}(x) = ${invTex}`,
                  why: lang === 'bm' ? 'Biar y = f(x), pindah pemalar b, bahagi dengan a untuk asingkan x, kemudian tukar y kepada x.' : 'Set y = f(x), move constant b, divide by a to isolate x, then replace y with x.'
                },
                {
                  badge: 'J1',
                  title: lang === 'bm' ? `Langkah 4: Nilaikan f⁻¹(${k})` : `Step 4: Evaluate f⁻¹(${k})`,
                  tex: invEvalTex,
                  why: lang === 'bm' ? `Semak: f(${U.roundStr(invK, 4)}) memberi semula ${k}!` : `Check: f(${U.roundStr(invK, 4)}) maps right back to ${k}!`
                }
              ],
              finalTex: `gf(x) = ${gfTex}, \\quad f^{-1}(x) = ${invTex}`,
              trapWarning: lang === 'bm'
                ? 'Ingat: $f^{-1}(x)$ BUKAN $\\frac{1}{f(x)}$! Indeks $-1$ pada fungsi bermaksud pemetaan songsang.'
                : 'Remember: $f^{-1}(x)$ is NOT $\\frac{1}{f(x)}$! The $-1$ superscript denotes inverse mapping.'
            };
          }
        },
        {
          id: 'abs-eq-solver',
          title: { bm: 'Solver Persamaan Nilai Mutlak |ax + b| = k', en: 'Absolute Value Equation Solver |ax + b| = k' },
          desc: {
            bm: 'Selesaikan persamaan modulus |ax + b| = k dengan memecahkan kepada dua cabang.',
            en: 'Solve modulus equation |ax + b| = k by splitting into positive and negative branches.'
          },
          inputs: [
            { id: 'a', label: { bm: 'Pekali a (a ≠ 0)', en: 'Coeff a (a ≠ 0)' }, default: 2 },
            { id: 'b', label: { bm: 'Pemalar b', en: 'Constant b' }, default: -5 },
            { id: 'k', label: { bm: 'Nilai kanan k (k ≥ 0)', en: 'RHS value k (k ≥ 0)' }, default: 9 }
          ],
          solve: function (v, lang) {
            const a = numOr(v.a, 2);
            const b = numOr(v.b, -5);
            const k = strictNum(v.k);
            if (!Number.isFinite(k)) {
              return {
                problemTex: lang === 'bm' ? '\\text{Input k tidak sah}' : '\\text{Invalid input k}',
                steps: [{ badge: 'P1', title: lang === 'bm' ? 'Masukkan nombor sah bagi k' : 'Enter a valid number for k', tex: lang === 'bm' ? '\\text{Nilai } k \\text{ mesti nombor nyata}' : 'k \\text{ must be a real number}', why: lang === 'bm' ? 'Ruangan k kosong atau bukan nombor.' : 'k is empty or non-numeric.' }],
                finalTex: lang === 'bm' ? '\\text{Input Tidak Sah}' : '\\text{Invalid Input}'
              };
            }
            const inner = U.polyTex([{ c: a, p: 1 }, { c: b, p: 0 }]);
            if (a === 0) {
              const holds = Math.abs(Math.abs(b) - k) < 1e-9;
              return {
                problemTex: `|${U.roundStr(b)}| = ${U.roundStr(k)}`,
                steps: [
                  {
                    badge: 'P1',
                    title: lang === 'bm' ? 'Semak pekali a = 0' : 'Check coefficient a = 0',
                    tex: `a = 0 \\implies |${U.roundStr(b)}| = ${U.roundStr(Math.abs(b))} ${holds ? '=' : '\\ne'} ${U.roundStr(k)}`,
                    why: lang === 'bm' ? 'Apabila a = 0, tiada pemboleh ubah x dalam persamaan (masukkan a ≠ 0).' : 'When a = 0, x disappears from the equation (enter a ≠ 0).'
                  }
                ],
                finalTex: holds
                  ? (lang === 'bm' ? '\\text{Benar untuk semua } x' : '\\text{True for all } x')
                  : (lang === 'bm' ? '\\text{Tiada Penyelesaian Nyata}' : '\\text{No Real Solution}')
              };
            }
            if (k < 0) {
              return {
                problemTex: `|${inner}| = ${k}`,
                steps: [
                  {
                    badge: 'P1',
                    title: lang === 'bm' ? 'Semak sifat nilai mutlak' : 'Check modulus non-negativity',
                    tex: lang === 'bm'
                      ? `|${inner}| \\ge 0 \\text{ sentiasa, tetapi } k = ${k} < 0`
                      : `|${inner}| \\ge 0 \\text{ always, yet } k = ${k} < 0`,
                    why: lang === 'bm' ? 'Nilai mutlak tidak mungkin bernilai negatif.' : 'Absolute value can never equal a negative number.'
                  }
                ],
                finalTex: lang === 'bm' ? '\\text{Tiada Penyelesaian Nyata}' : '\\text{No Real Solution}'
              };
            }
            const axTerm = a === 1 ? 'x' : (a === -1 ? '-x' : `${U.roundStr(a)}x`);
            if (k === 0) {
              const x0 = z0(-b / a);
              const x0Tex = Number.isInteger(-b) && Number.isInteger(a) ? U.fracTex(-b, a) : U.roundStr(x0);
              return {
                problemTex: `|${inner}| = 0`,
                steps: [
                  { badge: 'P1', title: lang === 'bm' ? 'Langkah 1: Nilai mutlak sifar hanya ada satu kes' : 'Step 1: Zero modulus gives one branch', tex: `${inner} = 0`, why: lang === 'bm' ? 'Hanya nombor 0 mempunyai magnitud 0 (+0 dan −0 adalah sama).' : 'Only 0 has magnitude 0 (+0 and −0 are identical).' },
                  { badge: 'K1', title: lang === 'bm' ? 'Langkah 2: Pindah pemalar & bahagi' : 'Step 2: Move constant & divide', tex: `${axTerm} = ${U.roundStr(z0(-b))} \\implies x = ${x0Tex}`, why: lang === 'bm' ? 'Asingkan x.' : 'Isolate x.' }
                ],
                finalTex: `x = ${U.roundStr(x0)}`
              };
            }
            const rhs1 = z0(k - b);
            const rhs2 = z0(-k - b);
            const x1 = z0(rhs1 / a);
            const x2 = z0(rhs2 / a);
            const x1Tex = Number.isInteger(rhs1) && Number.isInteger(a) ? U.fracTex(rhs1, a) : U.roundStr(x1);
            const x2Tex = Number.isInteger(rhs2) && Number.isInteger(a) ? U.fracTex(rhs2, a) : U.roundStr(x2);
            const orTex = lang === 'bm' ? '\\text{atau}' : '\\text{or}';
            const step2Tex = b === 0
              ? (a === 1
                  ? `x = ${U.roundStr(x1)}; \\qquad x = ${U.roundStr(x2)}`
                  : `${axTerm} = ${k} \\implies x = ${x1Tex}; \\qquad ${axTerm} = ${-k} \\implies x = ${x2Tex}`)
              : (a === 1
                  ? `x = ${k}${U.signedNum(-b)} = ${U.roundStr(x1)}; \\qquad x = ${-k}${U.signedNum(-b)} = ${U.roundStr(x2)}`
                  : `${axTerm} = ${k}${U.signedNum(-b)} = ${U.roundStr(rhs1)} \\implies x = ${x1Tex}; \\qquad ${axTerm} = ${-k}${U.signedNum(-b)} = ${U.roundStr(rhs2)} \\implies x = ${x2Tex}`);
            return {
              problemTex: `|${inner}| = ${k}`,
              steps: [
                {
                  badge: 'P1',
                  title: lang === 'bm' ? 'Langkah 1: Pecahkan kepada dua kes' : 'Step 1: Split into two branches',
                  tex: `${inner} = ${k} \\quad ${orTex} \\quad ${inner} = ${-k}`,
                  why: lang === 'bm' ? 'Kedua-dua +k dan −k mempunyai magnitud |k| yang sama.' : 'Both +k and −k have absolute value k.'
                },
                {
                  badge: 'K1',
                  title: lang === 'bm' ? 'Langkah 2: Pindah b dan bahagikan dengan a' : 'Step 2: Move b and divide by a',
                  tex: step2Tex,
                  why: lang === 'bm' ? 'Pindahkan pemalar b ke sebelah kanan terlebih dahulu, kemudian bahagi dengan pekali x.' : 'Move constant b to the right side first, then divide by the coefficient of x.'
                },
                {
                  badge: 'J1',
                  title: lang === 'bm' ? 'Langkah 3: Nyatakan kedua-dua punca' : 'Step 3: State both solutions',
                  tex: `x = ${U.roundStr(x1)}, \\quad x = ${U.roundStr(x2)}`,
                  why: lang === 'bm' ? 'Garis mengufuk y = k memotong graf V pada dua titik.' : 'Horizontal line y = k intersects the V-graph at two points.'
                }
              ],
              finalTex: `x = ${U.roundStr(x1)} \\; ${orTex} \\; x = ${U.roundStr(x2)}`,
              trapWarning: lang === 'bm'
                ? 'Jangan tertinggal cabang negatif ($= -k$)!'
                : 'Never forget the negative branch ($= -k$)!'
            };
          }
        }
      ],
      generateQuestion: function (tier, lang) {
        if (tier === 1) {
          const variant = U.pick([1, 2]);
          if (variant === 1) {
            const a = U.pick([2, 3, 4, -2]);
            let b = U.randInt(-8, 8, true);
            const xAns = U.randInt(-5, 7, true);
            let y0 = a * xAns + b;
            let wrongDirect = a * y0 + b;
            let guard = 0;
            while ((y0 === xAns || wrongDirect === xAns || b === 0) && guard < 20) {
              b = U.randInt(-9, 9, true);
              y0 = a * xAns + b;
              wrongDirect = a * y0 + b;
              guard++;
            }
            const fTex = U.polyTex([{ c: a, p: 1 }, { c: b, p: 0 }]);
            return {
              tier: 1,
              tpLabel: 'TP1–TP2',
              subtopic: { bm: '1.4 Fungsi Songsang', en: '1.4 Inverse Functions' },
              marks: 2,
              prompt: lang === 'bm'
                ? `Diberi fungsi $f : x \\mapsto ${fTex}$. Cari nilai bagi $f^{-1}(${y0})$.`
                : `Given the function $f : x \\mapsto ${fTex}$, find the value of $f^{-1}(${y0})$.`,
              answerType: 'number',
              correctValue: xAns,
              displayAnswerTex: `f^{-1}(${y0}) = ${xAns}`,
              intentMeta: {
                given: { bm: `$f(x) = ${fTex}$, imej $= ${y0}$`, en: `$f(x) = ${fTex}$, image $= ${y0}$` },
                goal: { bm: `Cari objek asal $x$ supaya $f(x) = ${y0}$`, en: `Find original object $x$ such that $f(x) = ${y0}$` },
                conceptRule: { bm: '$f^{-1}(y) = x \\iff f(x) = y$', en: '$f^{-1}(y) = x \\iff f(x) = y$' }
              },
              guidedSteps: [
                {
                  prompt: {
                    bm: `Jika $f^{-1}(${y0}) = x$, apakah nilai bagi $f(x)$, iaitu nombor di sebelah kanan persamaan $${fTex} = \\;?$`,
                    en: `If $f^{-1}(${y0}) = x$, what number should we equate $${fTex}$ to?`
                  },
                  expected: y0,
                  hint: { bm: `Imej ialah ${y0}, jadi samakan f(x) dengan ${y0}.`, en: `The image is ${y0}, so set f(x) = ${y0}.` }
                },
                {
                  prompt: {
                    bm: `Sekarang dalam $${a}x ${U.signedNum(b)} = ${y0}$, apakah nilai bagi $${a}x$ selepas memindahkan $${U.signedNum(b)}$?`,
                    en: `Now in $${a}x ${U.signedNum(b)} = ${y0}$, what is $${a}x$ after moving $${U.signedNum(b)}$?`
                  },
                  expected: y0 - b,
                  hint: { bm: `Kira ${y0} − (${b}) = ${y0 - b}.`, en: `Compute ${y0} − (${b}) = ${y0 - b}.` }
                },
                {
                  prompt: {
                    bm: `Akhir sekali, bahagikan dengan $${a}$ untuk mendapatkan nilai $x$:`,
                    en: `Finally, divide by $${a}$ to get $x$:`
                  },
                  expected: xAns,
                  hint: { bm: `${y0 - b} ÷ (${a}) = ${xAns}.`, en: `${y0 - b} ÷ (${a}) = ${xAns}.` }
                }
              ],
              traps: [
                {
                  value: wrongDirect,
                  message: {
                    bm: `Diagnostik Konsep [P]: Anda mengira $f(${y0}) = ${wrongDirect}$! Ingat, $f^{-1}(${y0})$ mencari OBJEK asal $x$ yang menghasilkan imej $${y0}$, bukan menggantikan $${y0}$ terus ke dalam $x$.`,
                    en: `Concept Diagnosis [P]: You computed $f(${y0}) = ${wrongDirect}$! Remember, $f^{-1}(${y0})$ asks for the original OBJECT $x$ whose image is $${y0}$, not plugging $${y0}$ into $x$.`
                  }
                }
              ],
              hints: [
                lang === 'bm' ? `Gunakan sifat songsang: jika $f^{-1}(${y0}) = x$, maka $f(x) = ${y0}$.` : `Use the inverse property: if $f^{-1}(${y0}) = x$, then $f(x) = ${y0}$.`,
                lang === 'bm' ? `Selesaikan $${a}x ${U.signedNum(b)} = ${y0}$ dengan memindahkan $${b}$ dahulu, kemudian bahagi dengan $${a}$.` : `Solve $${a}x ${U.signedNum(b)} = ${y0}$ by moving $${b}$ first, then dividing by $${a}$.`
              ],
              steps: [
                { badge: 'P1', title: lang === 'bm' ? 'Gunakan sifat songsang' : 'Apply inverse property', tex: `f(x) = ${y0} \\implies ${fTex} = ${y0}`, why: lang === 'bm' ? 'f⁻¹ memetakan imej kembali kepada objek asalnya.' : 'f⁻¹ maps the image back to its original object.' },
                { badge: 'K1', title: lang === 'bm' ? 'Pindahkan pemalar ke sebelah kanan' : 'Move constant to the right-hand side', tex: `${a}x = ${y0} ${U.signedNum(-b)} = ${y0 - b}`, why: lang === 'bm' ? `Songsangkan operasi ${U.signedNum(b)} pada kedua-dua belah.` : `Undo ${U.signedNum(b)} on both sides.` },
                { badge: 'J1', title: lang === 'bm' ? 'Bahagi untuk mendapatkan objek x' : 'Divide to isolate object x', tex: `x = \\frac{${y0 - b}}{${a}} = ${xAns}`, why: lang === 'bm' ? `Semakan: f(${xAns}) = ${a}(${xAns}) ${U.signedNum(b)} = ${y0}.` : `Check: f(${xAns}) = ${a}(${xAns}) ${U.signedNum(b)} = ${y0}.` }
              ]
            };
          } else {
            const a = U.pick([2, 3, 4]);
            const b = U.randInt(13, 25);
            const x0 = U.randInt(1, 3);
            const prod = a * x0;
            const rawInside = prod - b;
            const ans = Math.abs(rawInside);
            return {
              tier: 1,
              tpLabel: 'TP1–TP2',
              subtopic: { bm: '1.2 Fungsi Nilai Mutlak', en: '1.2 Absolute Value Functions' },
              marks: 2,
              prompt: lang === 'bm'
                ? `Diberi fungsi nilai mutlak $f(x) = |${a}x - ${b}|$. Cari imej bagi objek $x = ${x0}$.`
                : `Given the absolute value function $f(x) = |${a}x - ${b}|$, find the image of object $x = ${x0}$.`,
              answerType: 'number',
              correctValue: ans,
              displayAnswerTex: `f(${x0}) = |${rawInside}| = ${ans}`,
              intentMeta: {
                given: { bm: `$f(x) = |${a}x - ${b}|$, objek $x = ${x0}$`, en: `$f(x) = |${a}x - ${b}|$, object $x = ${x0}$` },
                goal: { bm: `Nilaikan $|${a}(${x0}) - ${b}|$`, en: `Evaluate $|${a}(${x0}) - ${b}|$` },
                conceptRule: { bm: '$|u| \\ge 0$ sentiasa bukan negatif', en: '$|u| \\ge 0$ is always non-negative' }
              },
              guidedSteps: [
                {
                  prompt: { bm: `Kira dahulu nilai di dalam palang modulus: $${a}(${x0}) - ${b} = \\;?$`, en: `First compute the value inside the modulus bars: $${a}(${x0}) - ${b} = \\;?$ ` },
                  expected: rawInside,
                  hint: { bm: `${prod} − ${b} = ${rawInside}.`, en: `${prod} − ${b} = ${rawInside}.` }
                },
                {
                  prompt: { bm: `Sekarang ambil nilai mutlak $|${rawInside}|$. Apakah hasilnya?`, en: `Now take the absolute value $|${rawInside}|$. What do you get?` },
                  expected: ans,
                  hint: { bm: `Nilai mutlak menukar tanda negatif kepada positif: ${ans}.`, en: `Modulus turns negative magnitude positive: ${ans}.` }
                }
              ],
              traps: [
                {
                  value: rawInside,
                  message: {
                    bm: `Diagnostik Konsep [P]: Anda mendapat $${rawInside}$ dan terlupa palang nilai mutlak $|\\dots|$! Nilai mutlak sentiasa bukan negatif ($+${ans}$).`,
                    en: `Concept Diagnosis [P]: You got $${rawInside}$ and forgot the modulus bars $|\\dots|$! Absolute value is always non-negative ($+${ans}$).`
                  }
                }
              ],
              hints: [
                lang === 'bm' ? `Gantikan $x = ${x0}$ ke dalam bahagian dalam: $${a}(${x0}) - ${b} = ${rawInside}$.` : `Substitute $x = ${x0}$ inside first: $${a}(${x0}) - ${b} = ${rawInside}$.`,
                lang === 'bm' ? `Ingat $|${rawInside}| = ${ans}$ kerana nilai mutlak sentiasa bukan negatif.` : `Recall $|${rawInside}| = ${ans}$ because modulus drops the minus sign.`
              ],
              steps: [
                { badge: 'P1', title: lang === 'bm' ? 'Gantikan objek x ke dalam modulus' : 'Substitute object x inside modulus', tex: `f(${x0}) = |${a}(${x0}) - ${b}|`, why: lang === 'bm' ? 'Masukkan input x terlebih dahulu.' : 'Plug in the input x first.' },
                { badge: 'K1', title: lang === 'bm' ? 'Permudahkan ungkapan di dalam' : 'Evaluate the inner expression', tex: `f(${x0}) = |${prod} - ${b}| = |${rawInside}|`, why: lang === 'bm' ? 'Selesaikan semua kiraan di dalam sebelum membuang tanda negatif.' : 'Finish all arithmetic inside the bars before taking the magnitude.' },
                { badge: 'J1', title: lang === 'bm' ? 'Ambil magnitud positif' : 'Take non-negative magnitude', tex: `f(${x0}) = ${ans}`, why: lang === 'bm' ? 'Takrif $|{-n}| = n$.' : 'Definition $|{-n}| = n$.' }
              ]
            };
          }
        } else if (tier === 2) {
          const variant = U.pick([1, 2]);
          if (variant === 1) {
            const a = U.pick([2, 3, -2]);
            const b = U.randInt(-4, 4, true);
            let c = U.randInt(-6, 6, true);
            const k = U.randInt(-3, 4, true);
            const fk = a * k + b;
            let gfk = fk * fk + c;
            let fgk = a * (k * k + c) + b;
            let guard = 0;
            while ((fgk === gfk || c === 0) && guard < 20) {
              c++;
              gfk = fk * fk + c;
              fgk = a * (k * k + c) + b;
              guard++;
            }
            const fTex = U.polyTex([{ c: a, p: 1 }, { c: b, p: 0 }]);
            const gTex = U.polyTex([{ c: 1, p: 2 }, { c: c, p: 0 }]);
            return {
              tier: 2,
              tpLabel: 'TP3–TP4',
              subtopic: { bm: '1.3 Fungsi Gubahan', en: '1.3 Composite Functions' },
              marks: 3,
              prompt: lang === 'bm'
                ? `Diberi $f(x) = ${fTex}$ dan $g(x) = ${gTex}$. Cari nilai bagi fungsi gubahan $gf(${k})$.`
                : `Given $f(x) = ${fTex}$ and $g(x) = ${gTex}$, find the value of the composite function $gf(${k})$.`,
              answerType: 'number',
              correctValue: gfk,
              displayAnswerTex: `gf(${k}) = ${gfk}`,
              intentMeta: {
                given: { bm: `$f(x) = ${fTex}$, $g(x) = ${gTex}$, $x = ${k}$`, en: `$f(x) = ${fTex}$, $g(x) = ${gTex}$, $x = ${k}$` },
                goal: { bm: `Kira $f(${k})$ dahulu, kemudian masukkan ke dalam $g$`, en: `Evaluate $f(${k})$ first, then plug into $g$` },
                conceptRule: { bm: '$gf(x) = g(f(x))$ — bergerak dari dalam ke luar!', en: '$gf(x) = g(f(x))$ — work from inside out!' }
              },
              guidedSteps: [
                {
                  prompt: { bm: `Dalam $gf(${k}) = g(f(${k}))$, fungsi manakah bertindak dahulu? Kira nilai $f(${k})$:`, en: `In $gf(${k}) = g(f(${k}))$, inner $f$ acts first. Calculate $f(${k})$:` },
                  expected: fk,
                  hint: { bm: `f(${k}) = ${a}(${k}) ${U.signedNum(b)} = ${fk}.`, en: `f(${k}) = ${a}(${k}) ${U.signedNum(b)} = ${fk}.` }
                },
                {
                  prompt: { bm: `Bagus! Sekarang masukkan $${fk}$ ke dalam $g(x) = ${gTex}$, iaitu kira $g(${fk})$:`, en: `Great! Now feed $${fk}$ into $g(x) = ${gTex}$, i.e. compute $g(${fk})$:` },
                  expected: gfk,
                  hint: { bm: `(${fk})² ${U.signedNum(c)} = ${fk * fk} ${U.signedNum(c)} = ${gfk}.`, en: `(${fk})² ${U.signedNum(c)} = ${fk * fk} ${U.signedNum(c)} = ${gfk}.` }
                }
              ],
              traps: [
                {
                  value: fgk,
                  message: {
                    bm: `Diagnostik Kaedah [K]: Anda mengira $fg(${k}) = ${fgk}$ (urutan terbalik!). Dalam $gf(${k})$, huruf kanan $f$ bekerja dahulu pada $${k}$, kemudian hasilnya masuk ke $g$.`,
                    en: `Method Diagnosis [K]: You computed $fg(${k}) = ${fgk}$ (reversed order!). In $gf(${k})$, inner $f$ acts on $${k}$ first, then $g$ acts on that output.`
                  }
                }
              ],
              hints: [
                lang === 'bm' ? `Langkah 1: Nilaikan fungsi dalam $f(${k}) = ${a}(${k}) ${U.signedNum(b)}$.` : `Step 1: Evaluate inner $f(${k}) = ${a}(${k}) ${U.signedNum(b)}$.`,
                lang === 'bm' ? `Langkah 2: Gantikan hasil $f(${k}) = ${fk}$ ke dalam $g(x) = ${gTex}$.` : `Step 2: Substitute $f(${k}) = ${fk}$ into $g(x) = ${gTex}$.`
              ],
              steps: [
                { badge: 'K1', title: lang === 'bm' ? 'Kira fungsi dalam f dahulu' : 'Evaluate inner f first', tex: `f(${k}) = ${a}(${k}) ${U.signedNum(b)} = ${a * k} ${U.signedNum(b)} = ${fk}`, why: lang === 'bm' ? 'Fungsi yang paling dekat dengan x bertindak dahulu.' : 'The function closest to x operates first.' },
                { badge: 'K1', title: lang === 'bm' ? 'Masukkan ke dalam fungsi luar g' : 'Feed result into outer g', tex: `gf(${k}) = g(${fk}) = (${fk})^2 ${U.signedNum(c)} = ${fk * fk} ${U.signedNum(c)}`, why: lang === 'bm' ? 'Gantikan x dalam g(x) dengan hasil f(k).' : 'Replace x in g(x) with the output of f(k).' },
                { badge: 'J1', title: lang === 'bm' ? 'Permudahkan jawapan akhir' : 'Simplify final value', tex: `gf(${k}) = ${gfk}`, why: lang === 'bm' ? 'Gabungkan nilai kuasa dua dengan pemalar.' : 'Combine the squared term and constant.' }
              ]
            };
          } else {
            const x1 = U.randInt(3, 8);
            const x2 = U.randInt(-6, 1);
            const b = x1 + x2;
            const k = x1 - x2;
            const lhsTex = U.polyTex([{ c: 2, p: 1 }, { c: -b, p: 0 }]);
            const orTex = lang === 'bm' ? '\\text{atau}' : '\\text{or}';
            return {
              tier: 2,
              tpLabel: 'TP3–TP4',
              subtopic: { bm: '1.2 Persamaan Nilai Mutlak', en: '1.2 Modulus Equations' },
              marks: 3,
              prompt: lang === 'bm'
                ? `Selesaikan persamaan nilai mutlak $|${lhsTex}| = ${k}$. Nyatakan kedua-dua nilai $x$ (pisahkan dengan koma).`
                : `Solve the absolute value equation $|${lhsTex}| = ${k}$. Enter both values of $x$ (separated by a comma).`,
              answerType: 'pair',
              orderedPair: false,
              placeholder: { bm: 'Contoh: 5, -2', en: 'e.g. 5, -2' },
              correctValue: [x1, x2],
              displayAnswerTex: `x = ${x1}, \\quad x = ${x2}`,
              intentMeta: {
                given: { bm: `$|${lhsTex}| = ${k}$`, en: `$|${lhsTex}| = ${k}$` },
                goal: { bm: 'Pecahkan kepada $+k$ dan $-k$ untuk cari 2 nilai $x$', en: 'Split into $+k$ and $-k$ to find both $x$ values' },
                conceptRule: { bm: '$|U| = k \\implies U = k$ atau $U = -k$', en: '$|U| = k \\implies U = k$ or $U = -k$' }
              },
              guidedSteps: [
                {
                  prompt: { bm: `Cabang Positif: Selesaikan $${lhsTex} = ${k}$. Apakah nilai $x$ pertama?`, en: `Positive Branch: Solve $${lhsTex} = ${k}$. What is the first $x$?` },
                  expected: x1,
                  hint: { bm: `2x = ${k + b} ⟹ x = ${x1}.`, en: `2x = ${k + b} ⟹ x = ${x1}.` }
                },
                {
                  prompt: { bm: `Cabang Negatif: Selesaikan $${lhsTex} = -${k}$. Apakah nilai $x$ kedua?`, en: `Negative Branch: Solve $${lhsTex} = -${k}$. What is the second $x$?` },
                  expected: x2,
                  hint: { bm: `2x = ${-k + b} ⟹ x = ${x2}.`, en: `2x = ${-k + b} ⟹ x = ${x2}.` }
                }
              ],
              traps: [
                {
                  value: 2 * x1,
                  message: {
                    bm: `Diagnostik Algebra [K]: $${2 * x1}$ ialah nilai $2x = ${k + b}$, belum dibahagi dengan $2$! Jawapan yang betul ialah $x = ${x1}$ dan $x = ${x2}$.`,
                    en: `Algebra Diagnosis [K]: $${2 * x1}$ is $2x = ${k + b}$ before dividing by $2$! Divide both branches by $2$ to get $x = ${x1}$ and $x = ${x2}$.`
                  }
                }
              ],
              hints: [
                lang === 'bm' ? `Pecahkan kepada DUA persamaan: $${lhsTex} = ${k}$ dan $${lhsTex} = -${k}$.` : `Split into TWO equations: $${lhsTex} = ${k}$ and $${lhsTex} = -${k}$.`,
                lang === 'bm' ? `Selesaikan setiap persamaan untuk mendapatkan $x = ${x1}$ dan $x = ${x2}$.` : `Solve each branch to obtain $x = ${x1}$ and $x = ${x2}$.`
              ],
              steps: [
                { badge: 'P1', title: lang === 'bm' ? 'Pecahkan dua cabang modulus' : 'Split modulus into two cases', tex: `${lhsTex} = ${k} \\quad ${orTex} \\quad ${lhsTex} = -${k}`, why: lang === 'bm' ? 'Takrif nilai mutlak: kedua-dua +k dan −k memberi nilai mutlak k.' : 'Definition of modulus: both +k and −k have magnitude k.' },
                { badge: 'K1', title: lang === 'bm' ? 'Selesaikan setiap cabang secara berasingan' : 'Solve each linear branch separately', tex: `2x = ${k + b} \\implies x = ${x1}; \\qquad 2x = ${-k + b} \\implies x = ${x2}`, why: lang === 'bm' ? 'Pindahkan pemalar terlebih dahulu sebelum membahagi dengan 2.' : 'Move the constant term first before dividing by 2.' },
                { badge: 'J1', title: lang === 'bm' ? 'Nyatakan kedua-dua punca' : 'State both valid roots', tex: `x = ${x1}, \\quad x = ${x2}`, why: lang === 'bm' ? 'Kedua-dua punca memenuhi persamaan asal.' : 'Both roots satisfy the original equation.' }
              ]
            };
          }
        } else {
          const p = U.pick([2, 3, -2, -3]);
          const A = U.pick([1, 2]);
          let B = U.randInt(-5, 5, true);
          const C = U.randInt(-6, 6);
          const m = U.randInt(1, 6);
          const xTarget = m - p;
          let ans = A * xTarget * xTarget + B * xTarget + C;
          let wrongSubM = A * m * m + B * m + C;
          let guard = 0;
          while ((wrongSubM === ans || B === 0) && guard < 20) {
            B++;
            ans = A * xTarget * xTarget + B * xTarget + C;
            wrongSubM = A * m * m + B * m + C;
            guard++;
          }
          const fTex = U.polyTex([{ c: 1, p: 1 }, { c: p, p: 0 }]);
          const gfTex = U.polyTex([{ c: A, p: 2 }, { c: B, p: 1 }, { c: C, p: 0 }]);
          const sqTerm = A * xTarget * xTarget;
          const linTerm = B * xTarget;
          return {
            tier: 3,
            tpLabel: 'TP5–TP6 (KBAT)',
            subtopic: { bm: '1.3 Mencari Fungsi Luar daripada Gubahan', en: '1.3 Finding Outer Function from Composite' },
            marks: 4,
            prompt: lang === 'bm'
              ? `Diberi fungsi $f(x) = ${fTex}$ dan fungsi gubahan $gf(x) = ${gfTex}$. Cari nilai bagi fungsi luar $g(${m})$.`
              : `Given $f(x) = ${fTex}$ and composite function $gf(x) = ${gfTex}$, find the value of the outer function $g(${m})$.`,
            answerType: 'number',
            correctValue: ans,
            displayAnswerTex: `g(${m}) = ${ans}`,
            intentMeta: {
              given: { bm: `$f(x) = ${fTex}$, $g(f(x)) = ${gfTex}$`, en: `$f(x) = ${fTex}$, $g(f(x)) = ${gfTex}$` },
              goal: { bm: `Cari $g(${m})$ dengan mencari $x$ supaya $f(x) = ${m}$`, en: `Find $g(${m})$ by solving $f(x) = ${m}$ for $x$` },
              conceptRule: { bm: 'Biar $f(x) = m$, cari $x$, kemudian gantikan $x$ ke dalam $gf(x)$', en: 'Set $f(x) = m$, solve for $x$, then plug $x$ into $gf(x)$' }
            },
            guidedSteps: [
              {
                prompt: { bm: `Kita tahu $g(${fTex}) = ${gfTex}$ dan kita mahu $g(${m})$. Samakan dalam kurungan $${fTex} = ${m}$ — apakah nilai $x$?`, en: `Since $g(${fTex}) = ${gfTex}$ and we want $g(${m})$, solve $${fTex} = ${m}$ for $x$:` },
                expected: xTarget,
                hint: { bm: `x ${U.signedNum(p)} = ${m} ⟹ x = ${xTarget}.`, en: `x ${U.signedNum(p)} = ${m} ⟹ x = ${xTarget}.` }
              },
              {
                prompt: { bm: `Hebat! Sekarang gantikan $x = ${xTarget}$ ke dalam $${gfTex}$ untuk mendapat $g(${m})$:`, en: `Awesome! Now substitute $x = ${xTarget}$ into $${gfTex}$ to get $g(${m})$:` },
                expected: ans,
                hint: { bm: `${A}(${xTarget})² ${U.signedNum(B)}(${xTarget}) ${U.signedNum(C)} = ${ans}.`, en: `${A}(${xTarget})² ${U.signedNum(B)}(${xTarget}) ${U.signedNum(C)} = ${ans}.` }
              }
            ],
            traps: [
              {
                value: wrongSubM,
                message: {
                  bm: `Diagnostik Konsep KBAT [P]: Anda menggantikan $x = ${m}$ terus ke dalam $gf(x)$ (dapat $gf(${m}) = ${wrongSubM}$)! Ingat: kita mahu $g(${m})$, jadi bahagian dalam $f(x)$ mesti bernilai $${m}$ dahulu.`,
                  en: `HOTS Concept Diagnosis [P]: You plugged $x = ${m}$ directly into $gf(x)$ (getting $gf(${m}) = ${wrongSubM}$)! We want $g(${m})$, so set inner $f(x) = ${m}$ first.`
                }
              }
            ],
            hints: [
              lang === 'bm' ? `Tulis semula $gf(x)$ sebagai $g(${fTex}) = ${gfTex}$.` : `Rewrite $gf(x)$ as $g(${fTex}) = ${gfTex}$.`,
              lang === 'bm' ? `Supaya dalam kurungan menjadi $${m}$, tetapkan $${fTex} = ${m} \\implies x = ${xTarget}$, kemudian gantikan $x = ${xTarget}$ ke sebelah kanan!` : `Set $${fTex} = ${m} \\implies x = ${xTarget}$, then plug $x = ${xTarget}$ into the RHS!`
            ],
            steps: [
              { badge: 'P1', title: lang === 'bm' ? 'Tulis dalam bentuk g(f(x))' : 'Write as g(f(x))', tex: `g(${fTex}) = ${gfTex}`, why: lang === 'bm' ? 'Takrif fungsi gubahan membolehkan kita memadankan input kurungan.' : 'Writing g(f(x)) lets us match the bracket input.' },
              { badge: 'K1', title: lang === 'bm' ? `Cari x apabila f(x) = ${m}` : `Find x when f(x) = ${m}`, tex: `${fTex} = ${m} \\implies x = ${m} ${U.signedNum(-p)} = ${xTarget}`, why: lang === 'bm' ? `Apabila x = ${xTarget}, nilai f(x) betul-betul menjadi ${m}.` : `When x = ${xTarget}, the inner f(x) equals ${m}.` },
              { badge: 'J1', title: lang === 'bm' ? `Gantikan x = ${xTarget} ke sebelah kanan` : `Substitute x = ${xTarget} into RHS`, tex: `g(${m}) = ${A}(${xTarget})^2 ${U.signedNum(B)}(${xTarget}) ${U.signedNum(C)} = ${sqTerm} ${U.signedNum(linTerm)} ${U.signedNum(C)} = ${ans}`, why: lang === 'bm' ? 'Kira setiap sebutan dengan berhati-hati untuk mendapatkan jawapan akhir.' : 'Evaluate each term carefully to obtain the exact output.' }
            ]
          };
        }
      }
    },

    // =========================================================================
    // FORM 4 CHAPTER 2: QUADRATIC FUNCTIONS / FUNGSI KUADRATIK
    // =========================================================================
    {
      id: 'f4-c2',
      stage: 1,
      unlocked: true,
      form: 4,
      num: 2,
      code: { bm: 'T4 • Bab 2', en: 'F4 • Ch 2' },
      icon: 'x²',
      color: '#8b5cf6',
      category: 'algebra',
      title: { bm: 'Fungsi Kuadratik', en: 'Quadratic Functions' },
      subtitle: {
        bm: 'HTP/HDP, pembezalayan b²−4ac, bentuk verteks a(x−h)²+k & ketaksamaan kuadratik',
        en: 'SOR/POR, discriminant b²−4ac, vertex form a(x−h)²+k & quadratic inequalities'
      },
      spmWeight: { bm: 'Kertas 1 & Kertas 2 (Topik Teras)', en: 'Paper 1 & Paper 2 (High-Yield Core)' },
      concepts: [
        {
          title: { bm: '1. Asas Kuadratik, Pemfaktoran & HTP/HDP (α, β)', en: '1. Quadratic Basics, Factorization & SOR/POR (α, β)' },
          prereq: {
            bm: 'Ingat pemfaktoran Tingkatan 2/3? Persamaan kuadratik sentiasa mempunyai kuasa tertinggi $x^2$ dan ditulis dalam bentuk am **$ax^2 + bx + c = 0$** ($a \\ne 0$). Kita boleh mencari puncanya dengan pemfaktoran kurungan atau **Rumus Kuadratik** $x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$.\n\n**Dari mana datangnya $-\\frac{b}{a}$ dan $\\frac{c}{a}$?** Jika punca ialah $\\alpha$ dan $\\beta$, maka $(x - \\alpha)(x - \\beta) = 0 \\implies x^2 - (\\alpha + \\beta)x + \\alpha\\beta = 0$. Bandingkan dengan $x^2 + \\frac{b}{a}x + \\frac{c}{a} = 0$, terus dapat $\\alpha + \\beta = -\\frac{b}{a}$ dan $\\alpha\\beta = \\frac{c}{a}$!',
            en: 'Remember Form 2/3 factorization? Every quadratic equation has highest power $x^2$ and is written in standard form **$ax^2 + bx + c = 0$** ($a \\ne 0$). You can solve it by bracket factorization or the **Quadratic Formula** $x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$.\n\n**Where do $-\\frac{b}{a}$ and $\\frac{c}{a}$ come from?** If the roots are $\\alpha$ and $\\beta$, then $(x - \\alpha)(x - \\beta) = 0 \\implies x^2 - (\\alpha + \\beta)x + \\alpha\\beta = 0$. Comparing with $x^2 + \\frac{b}{a}x + \\frac{c}{a} = 0$ immediately gives $\\alpha + \\beta = -\\frac{b}{a}$ and $\\alpha\\beta = \\frac{c}{a}$!'
          },
          body: {
            bm: 'Dalam SPM, soalan jarang menyuruh awak mencari nilai $\\alpha$ dan $\\beta$ satu persatu (sering kali nombor perpuluhan!). Sebaliknya, gunakan dua pintasan emas ini:\n• **Hasil Tambah Punca (HTP / SOR)**: $\\alpha + \\beta = -\\frac{b}{a}$ (perhatikan tanda **negatif**!).\n• **Hasil Darab Punca (HDP / POR)**: $\\alpha\\beta = \\frac{c}{a}$.\n• **Membina persamaan baharu** daripada punca baharu: $x^2 - (\\text{HTP}_{\\text{baharu}})x + (\\text{HDP}_{\\text{baharu}}) = 0$.\n• **Identiti simetri wajib hafal**: $\\alpha^2 + \\beta^2 = (\\alpha + \\beta)^2 - 2\\alpha\\beta$ dan $\\frac{1}{\\alpha} + \\frac{1}{\\beta} = \\frac{\\alpha + \\beta}{\\alpha\\beta}$.',
            en: 'In SPM, you almost never solve for $\\alpha$ and $\\beta$ individually (they are often ugly decimals!). Instead, use these two golden shortcuts:\n• **Sum of Roots (SOR)**: $\\alpha + \\beta = -\\frac{b}{a}$ (watch the **minus** sign!).\n• **Product of Roots (POR)**: $\\alpha\\beta = \\frac{c}{a}$.\n• **Reconstructing a new equation** from new roots: $x^2 - (\\text{SOR}_{\\text{new}})x + (\\text{POR}_{\\text{new}}) = 0$.\n• **Must-know symmetric identities**: $\\alpha^2 + \\beta^2 = (\\alpha + \\beta)^2 - 2\\alpha\\beta$ and $\\frac{1}{\\alpha} + \\frac{1}{\\beta} = \\frac{\\alpha + \\beta}{\\alpha\\beta}$.'
          },
          firstStep: {
            bm: '1. **Susun dahulu kepada $ax^2 + bx + c = 0$** (sebelah kanan mesti $= 0$ sebelum membaca $a, b, c$!).\n2. **Tulis $\\alpha + \\beta = -\\frac{b}{a}$ dan $\\alpha\\beta = \\frac{c}{a}$** di baris atas jawapan awak walaupun belum tahu langkah seterusnya (sudah dapat markah Kaedah!).\n3. **Tukar ungkapan sasaran** kepada gabungan $(\\alpha + \\beta)$ dan $\\alpha\\beta$.',
            en: '1. **Rearrange to $ax^2 + bx + c = 0$ first** (RHS must be $= 0$ before reading $a, b, c$!).\n2. **Write down $\\alpha + \\beta = -\\frac{b}{a}$ and $\\alpha\\beta = \\frac{c}{a}$** at the top of your working right away.\n3. **Rewrite the target expression** using only $(\\alpha + \\beta)$ and $\\alpha\\beta$.'
          },
          formulas: [
            { label: { bm: 'Rumus Kuadratik', en: 'Quadratic Formula' }, tex: 'x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}' },
            { label: { bm: 'HTP & HDP', en: 'SOR & POR' }, tex: '\\text{SOR} = \\alpha + \\beta = -\\frac{b}{a}, \\qquad \\text{POR} = \\alpha\\beta = \\frac{c}{a}' },
            { label: { bm: 'Membina Persamaan Baharu', en: 'Equation Reconstruction' }, tex: 'x^2 - (\\text{SOR})x + (\\text{POR}) = 0' },
            { label: { bm: 'Identiti Simetri', en: 'Symmetric Identities' }, tex: '\\alpha^2 + \\beta^2 = (\\alpha+\\beta)^2 - 2\\alpha\\beta, \\quad \\frac{1}{\\alpha}+\\frac{1}{\\beta} = \\frac{\\alpha+\\beta}{\\alpha\\beta}' }
          ],
          workedExample: {
            title: { bm: 'Contoh Terpandu: Identiti Simetri & Persamaan Baharu', en: 'Worked Example: Symmetric Identity & New Quadratic' },
            problem: {
              bm: 'Diberi $2x^2 - 5x - 4 = 0$ mempunyai punca $\\alpha$ dan $\\beta$. (a) Cari nilai $\\frac{1}{\\alpha} + \\frac{1}{\\beta}$. (b) Bentuk persamaan kuadratik baharu dengan punca $2\\alpha$ dan $2\\beta$.',
              en: 'Given $2x^2 - 5x - 4 = 0$ has roots $\\alpha$ and $\\beta$. (a) Find $\\frac{1}{\\alpha} + \\frac{1}{\\beta}$. (b) Form a new quadratic equation with roots $2\\alpha$ and $2\\beta$.'
            },
            steps: [
              {
                label: { bm: 'Kenal pasti $a, b, c$ dan kira HTP ($\\alpha+\\beta$) serta HDP ($\\alpha\\beta$)', en: 'Identify $a, b, c$ and find SOR ($\\alpha+\\beta$) and POR ($\\alpha\\beta$)' },
                tex: 'a = 2,\\; b = -5,\\; c = -4 \\implies \\alpha + \\beta = -\\frac{-5}{2} = \\frac{5}{2}, \\quad \\alpha\\beta = \\frac{-4}{2} = -2',
                why: {
                  bm: 'Negatif bertemu negatif pada $-\\frac{-5}{2}$ menjadi $+\\frac{5}{2}$.',
                  en: 'Double negative in $-\\frac{-5}{2}$ turns positive $+\\frac{5}{2}$.'
                }
              },
              {
                label: { bm: 'Samakan penyebut bagi $\\frac{1}{\\alpha} + \\frac{1}{\\beta}$ untuk bahagian (a)', en: 'Combine fractions for $\\frac{1}{\\alpha} + \\frac{1}{\\beta}$ in part (a)' },
                tex: '\\frac{1}{\\alpha} + \\frac{1}{\\beta} = \\frac{\\beta + \\alpha}{\\alpha\\beta} = \\frac{5/2}{-2} = -\\frac{5}{4}',
                why: {
                  bm: 'Menyamakan penyebut menghasilkan HTP di pengangka dan HDP di penyebut — tidak perlu mencari nilai $\\alpha$ atau $\\beta$!',
                  en: 'Common denominator puts SOR on top and POR on bottom — no need to find $\\alpha$ or $\\beta$!'
                }
              },
              {
                label: { bm: 'Kira $\\text{HTP}_{\\text{baharu}}$ dan $\\text{HDP}_{\\text{baharu}}$ bagi punca $2\\alpha$ dan $2\\beta$', en: 'Compute $\\text{SOR}_{\\text{new}}$ and $\\text{POR}_{\\text{new}}$ for roots $2\\alpha$ and $2\\beta$' },
                tex: {
                  bm: '\\text{HTP}_{\\text{baharu}} = 2\\alpha + 2\\beta = 2(\\alpha + \\beta) = 2\\left(\\frac{5}{2}\\right) = 5, \\quad \\text{HDP}_{\\text{baharu}} = (2\\alpha)(2\\beta) = 4\\alpha\\beta = 4(-2) = -8',
                  en: '\\text{SOR}_{\\text{new}} = 2\\alpha + 2\\beta = 2(\\alpha + \\beta) = 2\\left(\\frac{5}{2}\\right) = 5, \\quad \\text{POR}_{\\text{new}} = (2\\alpha)(2\\beta) = 4\\alpha\\beta = 4(-2) = -8'
                },
                why: {
                  bm: 'Perhatikan $(2\\alpha)(2\\beta) = 4\\alpha\\beta$, BUKAN $2\\alpha\\beta$!',
                  en: 'Notice $(2\\alpha)(2\\beta) = 4\\alpha\\beta$, NOT $2\\alpha\\beta$!'
                }
              },
              {
                label: { bm: 'Masukkan ke dalam acuan persamaan dan tulis $= 0$', en: 'Plug into the template and include $= 0$' },
                tex: 'x^2 - 5x + (-8) = 0 \\implies x^2 - 5x - 8 = 0',
                why: {
                  bm: 'Gunakan $x^2 - (\\text{SOR})x + (\\text{POR}) = 0$ dan pastikan tanda $= 0$ ditulis.',
                  en: 'Use $x^2 - (\\text{SOR})x + (\\text{POR}) = 0$ and always keep $= 0$.'
                }
              }
            ],
            trap: {
              bm: 'Jangan tertinggal tanda negatif pada $-\\frac{b}{a}$ dan jangan lupa menulis $= 0$ di hujung persamaan baharu!',
              en: 'Never drop the minus sign in $-\\frac{b}{a}$, and never forget to write $= 0$ at the end of the new equation!'
            }
          },
          tip: {
            bm: 'Hati-hati tanda NEGATIF pada $-\\frac{b}{a}$ dan di hadapan (SOR) dalam $x^2 - (\\text{SOR})x + (\\text{POR}) = 0$!',
            en: 'Watch the MINUS sign in $-\\frac{b}{a}$ and in front of (SOR) inside $x^2 - (\\text{SOR})x + (\\text{POR}) = 0$!'
          }
        },
        {
          title: { bm: '2. Pembezalayan Δ = b² − 4ac & Sifat Punca', en: '2. Discriminant Δ = b² − 4ac & Nature of Roots' },
          prereq: {
            bm: 'Tengok bahagian dalam punca kuasa dua pada Rumus Kuadratik $x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$. Ungkapan **$b^2 - 4ac$** itulah Pembezalayan ($\\Delta$):\n• Jika $\\Delta > 0$ (nombor positif): $\\pm \\sqrt{\\Delta}$ memberi **2 jawapan berbeza**.\n• Jika $\\Delta = 0$: $\\pm \\sqrt{0} = 0$, tinggal $-\\frac{b}{2a}$ sahaja (**1 titik sentuhan / 2 punca sama**).\n• Jika $\\Delta < 0$ (nombor negatif): $\\sqrt{\\text{negatif}}$ **tiada punca nyata**!',
            en: 'Look inside the square root of the Quadratic Formula $x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$. That inside piece **$b^2 - 4ac$** is the Discriminant ($\\Delta$):\n• If $\\Delta > 0$ (positive): $\\pm \\sqrt{\\Delta}$ produces **2 distinct roots**.\n• If $\\Delta = 0$: $\\pm \\sqrt{0} = 0$, leaving just $-\\frac{b}{2a}$ (**1 tangent touch / 2 equal roots**).\n• If $\\Delta < 0$ (negative): $\\sqrt{\\text{negative}}$ gives **no real roots**!'
          },
          body: {
            bm: 'Kaitkan $\\Delta$ dengan gambar graf (garis lurus bertemu lengkung, atau lengkung bertemu paksi-$x$):\n• **$\\Delta > 0$**: bersilang pada **2 titik berbeza**.\n• **$\\Delta = 0$**: **menyentuh / tangen** (2 punca nyata yang **sama**).\n• **$\\Delta < 0$**: **tidak bersilang** / tiada punca nyata.\n• **$\\Delta \\ge 0$**: "mempunyai punca nyata" atau "bersilang" (tanpa perkataan "berbeza" atau "tangen").\n• **Sentiasa positif / negatif**: lengkung tidak menyentuh paksi-$x$, jadi **$\\Delta < 0$** (dengan $a > 0$ untuk sentiasa positif, atau $a < 0$ untuk sentiasa negatif).',
            en: 'Connect $\\Delta$ to how curves and lines meet:\n• **$\\Delta > 0$**: intersects at **2 distinct points**.\n• **$\\Delta = 0$**: **tangent / touches** at 1 point (2 **equal** real roots).\n• **$\\Delta < 0$**: **does not intersect** / no real roots.\n• **$\\Delta \\ge 0$**: "has real roots" or "intersects" (without specifying distinct or tangent).\n• **Always positive / always negative**: curve never touches the $x$-axis, so **$\\Delta < 0$** (with $a > 0$ for always positive, or $a < 0$ for always negative).'
          },
          firstStep: {
            bm: '1. Jika diberi satu lengkung $y = \\dots$ dan satu garis $y = \\dots$, **samakan kedua-duanya** dahulu dan pindahkan SEMUA sebutan ke sebelah kiri sehingga **RHS $= 0$**.\n2. **Kumpulkan pekali $x^2$, $x$, dan pemalar** dengan kurungan kemas: $a = (\\dots)$, $b = (\\dots)$, $c = (\\dots)$.\n3. **Baca kata kunci soalan** untuk memilih tanda $>$, $=$, $<$, atau $\\ge$, kemudian masukkan ke dalam $b^2 - 4ac$.',
            en: '1. Given a curve $y = \\dots$ and a line $y = \\dots$, **equate them first** and move ALL terms to the left so **RHS $= 0$**.\n2. **Group the coefficients of $x^2$, $x$, and constant** cleanly: $a = (\\dots)$, $b = (\\dots)$, $c = (\\dots)$.\n3. **Match the keyword** to pick $>$, $=$, $<$, or $\\ge$, then substitute into $b^2 - 4ac$.'
          },
          formulas: [
            {
              label: { bm: 'Dua Punca Nyata Berbeza', en: 'Two Distinct Real Roots' },
              tex: { bm: 'b^2 - 4ac > 0 \\quad (\\text{2 titik persilangan})', en: 'b^2 - 4ac > 0 \\quad (\\text{2 intersection points})' }
            },
            {
              label: { bm: 'Dua Punca Sama / Tangen', en: 'Two Equal Roots / Tangent' },
              tex: { bm: 'b^2 - 4ac = 0 \\quad (\\text{menyentuh 1 titik})', en: 'b^2 - 4ac = 0 \\quad (\\text{touches at 1 point})' }
            },
            {
              label: { bm: 'Tiada Punca Nyata / Tak Bersilang', en: 'No Real Roots / No Intersection' },
              tex: { bm: 'b^2 - 4ac < 0 \\quad (\\text{tidak menyentuh})', en: 'b^2 - 4ac < 0 \\quad (\\text{never intersects})' }
            },
            {
              label: { bm: 'Wujud Punca Nyata', en: 'Real Roots Exist' },
              tex: { bm: 'b^2 - 4ac \\ge 0 \\quad (\\text{berbeza atau sama})', en: 'b^2 - 4ac \\ge 0 \\quad (\\text{distinct or equal})' }
            }
          ],
          workedExample: {
            title: { bm: 'Contoh Terpandu: Garis Tangen kepada Lengkung', en: 'Worked Example: Tangent Line to a Curve' },
            problem: {
              bm: 'Garis lurus $y = 2x + c$ ialah tangen kepada lengkung $y = x^2 - 4x + 7$. Cari nilai pemalar $c$.',
              en: 'The straight line $y = 2x + c$ is tangent to the curve $y = x^2 - 4x + 7$. Find the value of constant $c$.'
            },
            steps: [
              {
                label: { bm: 'Samakan garis dan lengkung, lalu susun kepada $= 0$', en: 'Equate line and curve, then rearrange to $= 0$' },
                tex: 'x^2 - 4x + 7 = 2x + c \\implies x^2 - 6x + (7 - c) = 0',
                why: {
                  bm: 'Kita MESTI memindahkan semua sebutan ke satu sisi ($= 0$) sebelum mengenal pasti $a, b, c$.',
                  en: 'We MUST move every term to one side ($= 0$) before reading $a, b, c$.'
                }
              },
              {
                label: { bm: 'Kenal pasti $a, b, C$ dan gunakan syarat tangen ($\\Delta = 0$)', en: 'Identify $a, b, C$ and apply tangent condition ($\\Delta = 0$)' },
                tex: 'a = 1, \\; b = -6, \\; C = 7 - c; \\qquad b^2 - 4aC = 0',
                why: {
                  bm: 'Kata kunci "tangen" bermaksud menyentuh pada 1 titik sahaja, iaitu $\\Delta = 0$.',
                  en: 'The keyword "tangent" means touching at exactly 1 point, so $\\Delta = 0$.'
                }
              },
              {
                label: { bm: 'Gantikan dengan kurungan dan kembangkan dengan teliti', en: 'Substitute with brackets and expand carefully' },
                tex: '(-6)^2 - 4(1)(7 - c) = 0 \\implies 36 - 28 + 4c = 0',
                why: {
                  bm: '$-4 \\times (-c) = +4c$ (awas dua tanda negatif!), dan $(-6)^2 = +36$.',
                  en: '$-4 \\times (-c) = +4c$ (watch the double negative!), and $(-6)^2 = +36$.'
                }
              },
              {
                label: { bm: 'Permudahkan dan selesaikan untuk $c$', en: 'Simplify and solve for $c$' },
                tex: '8 + 4c = 0 \\implies 4c = -8 \\implies c = -2',
                why: {
                  bm: 'Pindahkan $8$ menjadi $-8$, lalu bahagi dengan $4$.',
                  en: 'Move $8$ to the right as $-8$, then divide by $4$.'
                }
              }
            ],
            trap: {
              bm: 'Jangan baca $b = -4$ dan $c = 7$ terus daripada $y = x^2 - 4x + 7$! Awak wajib gabungkan dengan $2x + c$ dahulu.',
              en: 'Never read $b = -4$ and $c = 7$ straight off $y = x^2 - 4x + 7$! You must combine it with $2x + c$ first.'
            }
          },
          tip: {
            bm: 'Jika soalan sebut "mempunyai punca nyata" tanpa perkataan "berbeza", WAJIB guna $b^2 - 4ac \\ge 0$ (ada tanda sama dengan)!',
            en: 'If a problem says "has real roots" without "distinct", ALWAYS use $b^2 - 4ac \\ge 0$ (include equal to)!'
          }
        },
        {
          title: { bm: '3. Bentuk Verteks a(x − h)² + k & Lakaran Graf', en: '3. Vertex Form a(x − h)² + k & Sketching Parabolas' },
          prereq: {
            bm: 'Bayangkan **ramp papan selaju berbentuk $\\cup$** ($a > 0$, ada titik paling rendah = **minimum**) berbanding **lontaran bola berbentuk $\\cap$** ($a < 0$, ada puncak paling tinggi = **maksimum**).\n\nKenapa bentuk $f(x) = a(x - h)^2 + k$ begitu hebat? Kerana sebarang nombor kuasa dua $(x - h)^2$ sentiasa $\\ge 0$ dan mencapai nilai terkecilnya $0$ tepat apabila $x = h$! Pada saat itu, baki $f(x)$ ialah $k$, memberi titik pusingan **$(h, k)$** terus.',
            en: 'Picture a **U-shaped skateboard ramp $\\cup$** ($a > 0$, lowest bottom = **minimum**) versus a **thrown ball arc $\\cap$** ($a < 0$, highest peak = **maximum**).\n\nWhy is $f(x) = a(x - h)^2 + k$ so powerful? Because any square $(x - h)^2$ is always $\\ge 0$ and hits its smallest value $0$ right when $x = h$! At that moment, $f(x)$ reduces to $k$, giving the turning point **$(h, k)$** immediately.'
          },
          body: {
            bm: 'Untuk menukar $f(x) = ax^2 + bx + c$ ($a \\ne 1$) kepada bentuk verteks melalui **Penyempurnaan Kuasa Dua**, awak MESTI mengeluarkan faktor $a$ daripada $ax^2 + bx$ dahulu (biarkan $+c$ di luar!).\n\n**Senarai Semak 4-Langkah Melakar Graf Kuadratik**:\n1. **Bentuk**: $a > 0 \\implies \\cup$ (min); $a < 0 \\implies \\cap$ (maks).\n2. **Verteks & Paksi Simetri**: $(h, k)$ dan garis putus-putus $x = h$. (Awas: $(x + 2)^2$ bermakna $h = -2$!)\n3. **Pintasan-$y$**: Gantikan $x = 0$ untuk dapat $(0, c)$.\n4. **Pintasan-$x$** (jika $\\Delta \\ge 0$): Selesaikan $f(x) = 0$.',
            en: 'To convert $f(x) = ax^2 + bx + c$ ($a \\ne 1$) into vertex form via **Completing the Square**, you MUST factor $a$ out of $ax^2 + bx$ first (leave $+c$ outside!).\n\n**4-Step Parabola Sketching Checklist**:\n1. **Shape**: $a > 0 \\implies \\cup$ (min); $a < 0 \\implies \\cap$ (max).\n2. **Vertex & Axis of Symmetry**: $(h, k)$ and dashed line $x = h$. (Watch out: $(x + 2)^2$ means $h = -2$!)\n3. **$y$-intercept**: Set $x = 0$ to get $(0, c)$.\n4. **$x$-intercepts** (if $\\Delta \\ge 0$): Solve $f(x) = 0$.'
          },
          firstStep: {
            bm: '1. **Faktorkan $a$ daripada dua sebutan pertama sahaja**: tulis $a\\left[x^2 + \\frac{b}{a}x\\right] + c$.\n2. **Separuhkan pekali $x$ baharu** ($p = \\frac{b}{a}$), kemudian tambah dan tolak $\\left(\\frac{p}{2}\\right)^2$ di dalam kurungan siku `[...]`.\n3. **Darab $a$ dengan sebutan tolak $-\\left(\\frac{p}{2}\\right)^2$** semasa membuka kurungan siku, barulah gabungkan dengan $+c$!',
            en: '1. **Factor $a$ out of the first two terms ONLY**: write $a\\left[x^2 + \\frac{b}{a}x\\right] + c$.\n2. **Halve the new $x$-coefficient** ($p = \\frac{b}{a}$), then add and subtract $\\left(\\frac{p}{2}\\right)^2$ inside the square brackets `[...]`.\n3. **Multiply $a$ by the subtracted $-\\left(\\frac{p}{2}\\right)^2$** when opening `[...]`, then combine with $+c$!'
          },
          formulas: [
            { label: { bm: 'Bentuk Verteks', en: 'Vertex Form' }, tex: 'f(x) = a(x - h)^2 + k, \\quad h = -\\frac{b}{2a}, \\quad k = f(h)' },
            {
              label: { bm: 'Titik Pusingan & Pintasan', en: 'Turning Point & Intercepts' },
              tex: {
                bm: '\\text{Verteks} = (h, k), \\quad \\text{Paksi Simetri: } x = h, \\quad \\text{Pintasan-}y = (0, c)',
                en: '\\text{Vertex} = (h, k), \\quad \\text{Axis of Symmetry: } x = h, \\quad y\\text{-intercept} = (0, c)'
              }
            }
          ],
          workedExample: {
            title: { bm: 'Contoh Terpandu: Penyempurnaan Kuasa Dua (a ≠ 1) & Lakaran', en: 'Worked Example: Completing the Square (a ≠ 1) & Sketch Info' },
            problem: {
              bm: 'Ungkapkan $f(x) = 2x^2 - 8x + 5$ dalam bentuk $a(x - h)^2 + k$, kemudian nyatakan titik minimum, paksi simetri, dan pintasan-$y$ untuk melakar grafnya.',
              en: 'Express $f(x) = 2x^2 - 8x + 5$ in the form $a(x - h)^2 + k$, then state its minimum point, axis of symmetry, and $y$-intercept for sketching.'
            },
            steps: [
              {
                label: { bm: 'Faktorkan $a = 2$ keluar daripada $2x^2 - 8x$ sahaja', en: 'Factor $a = 2$ out of $2x^2 - 8x$ only' },
                tex: 'f(x) = 2[x^2 - 4x] + 5',
                why: {
                  bm: 'Tinggalkan $+5$ di luar kurungan siku supaya lebih kemas dan bebas ralat pecahan.',
                  en: 'Keep $+5$ outside the brackets to avoid messy fractions inside.'
                }
              },
              {
                label: { bm: 'Separuh daripada $-4$ ialah $-2$: tambah dan tolak $(-2)^2$ di dalam `[...]`', en: 'Half of $-4$ is $-2$: add and subtract $(-2)^2$ inside `[...]`' },
                tex: 'f(x) = 2[x^2 - 4x + (-2)^2 - (-2)^2] + 5 = 2[(x - 2)^2 - 4] + 5',
                why: {
                  bm: 'Tiga sebutan pertama $x^2 - 4x + 4$ bergabung tepat menjadi $(x - 2)^2$, manakala $-4$ kekal di dalam kurungan siku.',
                  en: 'The first three terms $x^2 - 4x + 4$ collapse into $(x - 2)^2$, while $-4$ stays inside the bracket.'
                }
              },
              {
                label: { bm: 'Kembangkan $2$ ke luar dan ringkaskan pemalar', en: 'Distribute the outer $2$ and simplify the constant' },
                tex: 'f(x) = 2(x - 2)^2 + 2(-4) + 5 = 2(x - 2)^2 - 8 + 5 = 2(x - 2)^2 - 3',
                why: {
                  bm: 'Langkah genting: pekali $2$ di luar mesti mendarab $-4$ menjadi $-8$ sebelum ditambah dengan $+5$!',
                  en: 'Critical step: the outer $2$ must multiply $-4$ to give $-8$ before adding $+5$!'
                }
              },
              {
                label: { bm: 'Baca butiran lakaran graf daripada bentuk verteks', en: 'Read the graph sketching features from vertex form' },
                tex: {
                  bm: 'a = 2 > 0 \\;(\\cup), \\quad \\text{Verteks Minimum } (2, -3), \\quad \\text{Paksi } x = 2, \\quad \\text{Pintasan-}y = (0, 5)',
                  en: 'a = 2 > 0 \\;(\\cup), \\quad \\text{Minimum Vertex } (2, -3), \\quad \\text{Axis } x = 2, \\quad y\\text{-intercept} = (0, 5)'
                },
                why: {
                  bm: '$(x - 2)^2 = 0$ apabila $x = 2$, memberi nilai minimum $-3$. Pintasan-$y$ diperoleh daripada $f(0) = 5$.',
                  en: '$(x - 2)^2 = 0$ at $x = 2$, giving minimum value $-3$. $y$-intercept comes from $f(0) = 5$.'
                }
              }
            ],
            trap: {
              bm: 'Jangan tulis $2[(x - 2)^2 - 4] + 5 = 2(x - 2)^2 - 4 + 5$! Awak WAJIB mendarab $2 \\times (-4) = -8$.',
              en: 'Never write $2[(x - 2)^2 - 4] + 5 = 2(x - 2)^2 - 4 + 5$! You MUST multiply $2 \\times (-4) = -8$.'
            }
          },
          tip: {
            bm: 'Sentiasa semak tanda $h$: jika bentuknya $3(x + 4)^2 - 7$, tulis sebagai $3(x - (-4))^2 - 7$, maka verteks ialah $(-4, -7)$!',
            en: 'Always double-check the sign of $h$: for $3(x + 4)^2 - 7$, rewrite as $3(x - (-4))^2 - 7$, so the vertex is $(-4, -7)$!'
          }
        },
        {
          title: { bm: '4. Ketaksamaan Kuadratik', en: '4. Quadratic Inequalities' },
          prereq: {
            bm: 'Dalam Tingkatan 1, ketaksamaan linear $2x - 6 > 0$ terus memberi $x > 3$. Tetapi bagi kuadratik seperti $(x - 2)(x - 3) > 0$, awak **TIDAK BOLEH** terus menulis $x > 2, x > 3$ (kerana negatif darab negatif pun positif!).\n\nSebaliknya, lukis sahaja **lengkung senyum $\\cup$** memotong paksi-$x$ pada $2$ dan $3$: bahagian **di atas** paksi-$x$ ialah $> 0$, dan bahagian **di bawah** paksi-$x$ ialah $< 0$!',
            en: 'In Form 1, linear $2x - 6 > 0$ gives $x > 3$ directly. But for quadratics like $(x - 2)(x - 3) > 0$, you **CANNOT** split into $x > 2, x > 3$ (because negative $\\times$ negative is also positive!).\n\nInstead, sketch a quick **smiley curve $\\cup$** cutting the $x$-axis at $2$ and $3$: the region **above** the $x$-axis is $> 0$, and the region **below** the $x$-axis is $< 0$!'
          },
          body: {
            bm: 'Pastikan pekali $x^2$ sentiasa **positif ($a > 0$)** dahulu (jika negatif, darab seluruh ketaksamaan dengan $-1$ dan **terbalikkan tanda** ketaksamaan!). Dengan lengkung $\\cup$ dan punca $p < q$:\n• **Kurang daripada sifar ($< 0$ atau $\\le 0$)**: lorek kawasan **di bawah** paksi-$x$ → **1 julat di dalam** ($p < x < q$ atau $p \\le x \\le q$).\n• **Lebih daripada sifar ($> 0$ atau $\\ge 0$)**: lorek kawasan **di atas** paksi-$x$ → **2 sayap di luar** ($x < p$ atau $x > q$).',
            en: 'First make sure the $x^2$ coefficient is **positive ($a > 0$)** (if negative, multiply through by $-1$ and **flip the inequality sign**!). With a $\\cup$ curve and roots $p < q$:\n• **Less than zero ($< 0$ or $\\le 0$)**: shade **below** the $x$-axis → **1 middle sandwich interval** ($p < x < q$ or $p \\le x \\le q$).\n• **Greater than zero ($> 0$ or $\\ge 0$)**: shade **above** the $x$-axis → **2 outer wings** ($x < p$ or $x > q$).'
          },
          firstStep: {
            bm: '1. Kembangkan semua kurungan dan pindahkan semua sebutan supaya **RHS $= 0$** (pastikan pekali $x^2$ positif).\n2. **Faktorkan** (atau guna rumus kuadratik) untuk mendapat dua punca sempadan $p < q$.\n3. **Lakar lengkung $\\cup$ ringkas** melalui $p$ dan $q$, lorek bahagian bawah ($< 0$) atau atas ($> 0$), lalu tulis julat $x$.',
            en: '1. Expand brackets and move all terms so **RHS $= 0$** (keep the $x^2$ coefficient positive).\n2. **Factorize** (or use the formula) to find the two boundary roots $p < q$.\n3. **Sketch a quick $\\cup$ curve** through $p$ and $q$, shade below ($< 0$) or above ($> 0$), then write the interval.'
          },
          formulas: [
            {
              label: { bm: 'Kawasan Dalam vs Luar (p < q)', en: 'Inside vs Outside Regions (p < q)' },
              tex: {
                bm: '(x-p)(x-q) < 0 \\implies p < x < q, \\qquad (x-p)(x-q) > 0 \\implies x < p \\text{ atau } x > q',
                en: '(x-p)(x-q) < 0 \\implies p < x < q, \\qquad (x-p)(x-q) > 0 \\implies x < p \\text{ or } x > q'
              }
            }
          ],
          workedExample: {
            title: { bm: 'Contoh Terpandu: Selesaikan (2x − 1)(x + 3) ≥ 15', en: 'Worked Example: Solve (2x − 1)(x + 3) ≥ 15' },
            problem: {
              bm: 'Cari julat nilai $x$ yang memenuhi ketaksamaan kuadratik $(2x - 1)(x + 3) \\ge 15$.',
              en: 'Find the range of values of $x$ satisfying the quadratic inequality $(2x - 1)(x + 3) \\ge 15$.'
            },
            steps: [
              {
                label: { bm: 'Kembangkan kurungan dan pindahkan $15$ supaya RHS $= 0$', en: 'Expand brackets and move $15$ so RHS $= 0$' },
                tex: '2x^2 + 6x - x - 3 \\ge 15 \\implies 2x^2 + 5x - 3 - 15 \\ge 0 \\implies 2x^2 + 5x - 18 \\ge 0',
                why: {
                  bm: 'Kita WAJIB menjadikan sebelah kanan $0$ sebelum memfaktorkan.',
                  en: 'We MUST make the right-hand side $0$ before factorizing.'
                }
              },
              {
                label: { bm: 'Faktorkan ungkapan kuadratik untuk mencari punca sempadan', en: 'Factorize the quadratic to find the boundary roots' },
                tex: '(2x + 9)(x - 2) \\ge 0 \\implies x = -\\frac{9}{2}, \\; x = 2',
                why: {
                  bm: 'Titik $-\\frac{9}{2}$ dan $2$ ialah tempat lengkung memotong paksi-$x$.',
                  en: 'The points $-\\frac{9}{2}$ and $2$ are where the curve cuts the $x$-axis.'
                }
              },
              {
                label: { bm: 'Lakar lengkung $\\cup$ ($a = 2 > 0$) dan pilih kawasan di atas ($\\ge 0$)', en: 'Sketch $\\cup$ curve ($a = 2 > 0$) and pick regions above ($\\ge 0$)' },
                tex: {
                  bm: 'x \\le -\\frac{9}{2} \\quad \\text{atau} \\quad x \\ge 2',
                  en: 'x \\le -\\frac{9}{2} \\quad \\text{or} \\quad x \\ge 2'
                },
                why: {
                  bm: 'Oleh sebab tanda ialah $\\ge 0$, kita mahu dua sayap luar yang berada di atas paksi-$x$ (termasuk titik sempadan).',
                  en: 'Since the sign is $\\ge 0$, we take the two outer wings above the $x$-axis (including the endpoints).'
                }
              }
            ],
            trap: {
              bm: 'Jangan sesekali memecahkan $(2x - 1)(x + 3) \\ge 15$ kepada $2x - 1 \\ge 15$ dan $x + 3 \\ge 15$! Sebelah kanan WAJIB dijadikan $0$ dahulu.',
              en: 'Never split $(2x - 1)(x + 3) \\ge 15$ into $2x - 1 \\ge 15$ and $x + 3 \\ge 15$! You MUST make the RHS equal to $0$ first.'
            }
          },
          tip: {
            bm: 'Ingat akronim mudah (apabila pekali $x^2 > 0$): **K**urang ($< 0$) = **K**awasan Dalam ($p < x < q$); **L**ebih ($> 0$) = **L**uar Kawasan ($x < p$ atau $x > q$)!',
            en: 'Memory hook (when $x^2$ coeff $> 0$): **Less** ($< 0$) = **Inside** ($p < x < q$); **Greater** ($> 0$) = **Outside** ($x < p$ or $x > q$)!'
          }
        }
      ],
      traps: [
        {
          title: { bm: 'Tertinggal Faktor "a" Semasa Penyempurnaan Kuasa Dua', en: 'Forgetting to Factor Out "a" When Completing the Square' },
          desc: {
            bm: 'Bagi $2x^2 - 8x + 5$, keluarkan $2$ dahulu: $2[x^2 - 4x] + 5 = 2[(x-2)^2 - 4] + 5 = 2(x-2)^2 - 3$ (darab $2$ dengan $-4$!).',
            en: 'For $2x^2 - 8x + 5$, factor $2$ out first: $2[(x-2)^2 - 4] + 5 = 2(x-2)^2 - 3$ (remember to multiply $-4$ by $2$!).'
          }
        },
        {
          title: { bm: 'Tertinggal Tanda Negatif dalam HTP = −b/a & Tanda "= 0"', en: 'Dropping the Minus Sign in SOR = −b/a & "= 0" in New Equations' },
          desc: {
            bm: 'Dalam $x^2 - 5x + 3 = 0$, $\\alpha + \\beta = -\\frac{-5}{1} = +5$, bukan $-5$. Apabila membina persamaan baharu, wajib tulis $= 0$ di hujung.',
            en: 'In $x^2 - 5x + 3 = 0$, $\\alpha + \\beta = -\\frac{-5}{1} = +5$, not $-5$. When forming a new equation, always include $= 0$ at the end.'
          }
        },
        {
          title: { bm: 'Memecahkan Ketaksamaan Sebelum RHS = 0 atau Tanpa Lakaran', en: 'Splitting Inequalities Before RHS = 0 or Without Sketching' },
          desc: {
            bm: 'Untuk $(x - 2)(x - 5) > 0$, jangan tulis $x > 2, x > 5$! Lakar graf $\\cup$ pada punca $2$ dan $5$ untuk melihat dua sayap luar: $x < 2$ atau $x > 5$.',
            en: 'For $(x - 2)(x - 5) > 0$, never write $x > 2, x > 5$! Sketch the $\\cup$ curve at roots $2$ and $5$ to see the two outer wings: $x < 2$ or $x > 5$.'
          }
        },
        {
          title: { bm: 'Keliru Antara Δ > 0, Δ ≥ 0 dan Δ < 0', en: 'Mixing Up Δ > 0, Δ ≥ 0, and Δ < 0' },
          desc: {
            bm: '"Punca nyata" bermaksud $\\Delta \\ge 0$ (termasuk $= 0$), "punca nyata berbeza" ialah $\\Delta > 0$, manakala "sentiasa positif" bagi kuadratik ialah $a > 0$ dan $\\Delta < 0$!',
            en: '"Real roots" means $\\Delta \\ge 0$ (includes $= 0$), "distinct real roots" is $\\Delta > 0$, while "always positive" requires $a > 0$ AND $\\Delta < 0$!'
          }
        }
      ],
      solvers: [
        {
          id: 'quad-master',
          title: { bm: 'Penganalisis Lengkap Fungsi Kuadratik ax² + bx + c', en: 'Complete Quadratic Function Analyzer ax² + bx + c' },
          desc: {
            bm: 'Analisis Δ, punca, HTP/HDP, penyempurnaan kuasa dua a(x−h)²+k, verteks & ketaksamaan.',
            en: 'Analyze Δ, roots, SOR/POR, completing the square a(x−h)²+k, vertex & inequalities.'
          },
          inputs: [
            { id: 'a', label: { bm: 'Pekali a (a ≠ 0)', en: 'Coefficient a (a ≠ 0)' }, default: 2 },
            { id: 'b', label: { bm: 'Pekali b', en: 'Coefficient b' }, default: -8 },
            { id: 'c', label: { bm: 'Pemalar c', en: 'Constant c' }, default: 3 }
          ],
          solve: function (v, lang) {
            const a = numOr(v.a, 2);
            const b = numOr(v.b, -8);
            const c = numOr(v.c, 3);
            if (a === 0) {
              const linTex = U.polyTex([{ c: b, p: 1 }, { c: c, p: 0 }]);
              if (b === 0) {
                return {
                  problemTex: `f(x) = ${U.roundStr(c)}`,
                  steps: [{ badge: 'P1', title: lang === 'bm' ? 'Bukan fungsi kuadratik (a = 0)' : 'Not a quadratic function (a = 0)', tex: `a = 0,\\; b = 0 \\implies f(x) = ${U.roundStr(c)}`, why: lang === 'bm' ? 'Fungsi kuadratik memerlukan a ≠ 0.' : 'A quadratic function requires a ≠ 0.' }],
                  finalTex: lang === 'bm' ? `f(x) = ${U.roundStr(c)} \\text{ (Pemalar)}` : `f(x) = ${U.roundStr(c)} \\text{ (Constant)}`
                };
              }
              const rootLin = z0(-c / b);
              return {
                problemTex: `f(x) = ${linTex}`,
                steps: [{ badge: 'P1', title: lang === 'bm' ? 'a = 0 memberi persamaan linear' : 'a = 0 yields a linear equation', tex: `${linTex} = 0 \\implies x = ${U.roundStr(rootLin)}`, why: lang === 'bm' ? 'Tiada sebutan x² kerana a = 0; masukkan a ≠ 0 untuk kuadratik.' : 'No x² term since a = 0; enter a ≠ 0 for a quadratic.' }],
                finalTex: `x = ${U.roundStr(rootLin)}`
              };
            }

            const bSq = b * b;
            const fourAC = 4 * a * c;
            const rawDisc = bSq - fourAC;
            const disc = Math.abs(rawDisc) < 1e-10 ? 0 : rawDisc;
            const h = z0(-b / (2 * a));
            const ahSq = a * h * h;
            const k = z0(ahSq + b * h + c);
            const sor = z0(-b / a);
            const por = z0(c / a);
            const fTex = U.polyTex([{ c: a, p: 2 }, { c: b, p: 1 }, { c: c, p: 0 }]);
            if (!Number.isFinite(bSq) || !Number.isFinite(fourAC) || !Number.isFinite(disc) || !Number.isFinite(h) || !Number.isFinite(ahSq) || !Number.isFinite(k) || !Number.isFinite(sor) || !Number.isFinite(por)) {
              const limMsg = lang === 'bm' ? '\\text{Had berangka terlampaui } (> 10^{308})' : '\\text{Numerical limit exceeded } (> 10^{308})';
              return {
                problemTex: `f(x) = ${fTex}`,
                steps: [
                  {
                    badge: 'P1',
                    title: lang === 'bm' ? 'Langkah 1: Semak magnitud pekali' : 'Step 1: Check coefficient magnitude',
                    tex: `a = ${U.roundStr(a)},\\; b = ${U.roundStr(b)},\\; c = ${U.roundStr(c)}`,
                    why: lang === 'bm' ? 'Pekali terlalu besar menyebabkan kuasa dua b² atau 4ac melebihi had nombor nyata berketepatan berganda (> 10³⁰⁸).' : 'Coefficients are too large, causing b² or 4ac to exceed double-precision floating-point limits (> 10³⁰⁸).'
                  },
                  {
                    badge: 'K1',
                    title: lang === 'bm' ? 'Langkah 2: Mengapa limpahan berlaku' : 'Step 2: Why numerical overflow occurs',
                    tex: '\\Delta = b^2 - 4ac > 10^{308}',
                    why: lang === 'bm' ? 'Nilai perantaraan tidak dapat diwakilkan secara terhingga.' : 'Intermediate arithmetic values cannot be represented finitely.'
                  },
                  {
                    badge: 'J1',
                    title: lang === 'bm' ? 'Langkah 3: Kecilkan skala pekali' : 'Step 3: Scale down coefficients',
                    tex: limMsg,
                    why: lang === 'bm' ? 'Bahagikan semua pekali dengan pemalar sepunya yang besar dan cuba semula.' : 'Divide all coefficients by a common scaling factor and retry.'
                  }
                ],
                finalTex: limMsg
              };
            }
            const nature = disc > 0
              ? (lang === 'bm' ? '2 punca nyata & berbeza' : '2 distinct real roots')
              : (disc === 0 ? (lang === 'bm' ? '2 punca nyata & sama' : '2 equal real roots') : (lang === 'bm' ? 'Tiada punca nyata' : 'No real roots'));

            const aParen = a < 0 ? `(${U.roundStr(a)})` : U.roundStr(a);
            const bParen = b < 0 ? `(${U.roundStr(b)})` : U.roundStr(b);
            const cParen = c < 0 ? `(${U.roundStr(c)})` : U.roundStr(c);
            const aWrap = `(${U.roundStr(a)})`;
            const cWrap = `(${U.roundStr(c)})`;

            let rootTex;
            if (disc > 0) {
              const r1 = z0((-b - Math.sqrt(disc)) / (2 * a));
              const r2 = z0((-b + Math.sqrt(disc)) / (2 * a));
              rootTex = `x = \\frac{-${bParen} \\pm \\sqrt{${U.roundStr(disc)}}}{2${aWrap}} \\implies x_1 = ${U.roundStr(r1)}, \\; x_2 = ${U.roundStr(r2)}`;
            } else if (disc === 0) {
              const r0 = z0(-b / (2 * a));
              rootTex = `x = \\frac{-${bParen} \\pm \\sqrt{0}}{2${aWrap}} = ${U.roundStr(r0)}`;
            } else {
              rootTex = `x = \\frac{-${bParen} \\pm \\sqrt{${U.roundStr(disc)}}}{2${aWrap}} \\implies \\text{${nature}}`;
            }

            const hPart = h === 0 ? 'x^2' : `(x ${U.signedNum(-h)})^2`;
            const aLead = a === 1 ? '' : (a === -1 ? '-' : U.roundStr(a));
            const kTail = k === 0 ? '' : ` ${U.signedNum(k)}`;
            const vertexForm = `${aLead}${hPart}${kTail}`;

            let ctsTex;
            if (b === 0) {
              ctsTex = `f(x) = ${vertexForm}`;
            } else if (a === 1) {
              const pHalf = b / 2;
              const pSq = z0(pHalf * pHalf);
              const pHalfStr = pHalf >= 0 ? `+ ${U.roundStr(pHalf)}` : `- ${U.roundStr(Math.abs(pHalf))}`;
              ctsTex = `f(x) = x^2 ${U.signedNum(b)}x + (${U.roundStr(pHalf)})^2 - (${U.roundStr(pHalf)})^2 ${U.signedNum(c)} = (x ${pHalfStr})^2 - ${U.roundStr(pSq)} ${U.signedNum(c)} = ${vertexForm}`;
            } else {
              const p = z0(b / a);
              const pHalf = z0(p / 2);
              const pSq = z0(pHalf * pHalf);
              const distConst = z0(-a * pSq);
              const innerLin = `x^2 ${U.signedNum(p)}x`;
              const cTail = c === 0 ? '' : ` ${U.signedNum(c)}`;
              ctsTex = [
                `f(x) = ${aLead}[${innerLin}]${cTail}`,
                `= ${aLead}[${innerLin} + (${U.roundStr(pHalf)})^2 - (${U.roundStr(pHalf)})^2]${cTail}`,
                `= ${aLead}[${hPart} - ${U.roundStr(pSq)}]${cTail}`,
                `= ${aLead}${hPart} ${U.signedNum(distConst)}${cTail} = ${vertexForm}`
              ].join(' \\\\ ');
            }

            return {
              problemTex: `f(x) = ${fTex}`,
              steps: [
                {
                  badge: 'P1',
                  title: lang === 'bm' ? 'Langkah 1: Pembezalayan Δ = b² − 4ac' : 'Step 1: Discriminant Δ = b² − 4ac',
                  tex: `\\Delta = ${bParen}^2 - 4${aWrap}${cWrap} = ${U.roundStr(b * b)}${c === 0 ? ' - 0' : U.signedNum(-4 * a * c)} = ${U.roundStr(disc)} \\implies \\text{${nature}}`,
                  why: lang === 'bm' ? 'Menentukan bilangan titik persilangan graf dengan paksi-x.' : 'Determines how many times the parabola crosses the x-axis.'
                },
                {
                  badge: 'K1',
                  title: lang === 'bm' ? 'Langkah 2: HTP, HDP & Rumus Kuadratik' : 'Step 2: SOR, POR & Quadratic Formula',
                  tex: `\\text{SOR} = -\\frac{${bParen}}{${aParen}} = ${U.roundStr(sor)}, \\quad \\text{POR} = \\frac{${cParen}}{${aParen}} = ${U.roundStr(por)} \\\\ ${rootTex}`,
                  why: lang === 'bm' ? 'Gunakan −b/a untuk HTP, c/a untuk HDP, dan rumus kuadratik untuk punca.' : 'Apply −b/a for SOR, c/a for POR, and the quadratic formula for roots.'
                },
                {
                  badge: 'K1',
                  title: lang === 'bm' ? 'Langkah 3: Penyempurnaan Kuasa Dua (Langkah Penuh)' : 'Step 3: Completing the Square (Full Algebra)',
                  tex: ctsTex,
                  why: lang === 'bm' ? 'Keluarkan pekali a dari x² dan x, lengkapkan kuasa dua di dalam kurungan, kemudian darab semula a dengan −h².' : 'Factor a from x² and x, complete the square inside brackets, then distribute a onto −h².'
                },
                {
                  badge: 'J1',
                  title: lang === 'bm' ? 'Langkah 4: Titik Pusingan & Paksi Simetri' : 'Step 4: Turning Point & Axis of Symmetry',
                  tex: lang === 'bm'
                    ? `\\text{Verteks } (${U.roundStr(h)},\\; ${U.roundStr(k)}), \\quad x = ${U.roundStr(h)}`
                    : `\\text{Vertex } (${U.roundStr(h)},\\; ${U.roundStr(k)}), \\quad x = ${U.roundStr(h)}`,
                  why: lang === 'bm'
                    ? (a > 0 ? 'a > 0 memberi lengkung ∪ (titik minimum).' : 'a < 0 memberi lengkung ∩ (titik maksimum).')
                    : (a > 0 ? 'a > 0 gives ∪ curve (minimum point).' : 'a < 0 gives ∩ curve (maximum point).')
                }
              ],
              finalTex: `f(x) = ${vertexForm}, \\quad (${U.roundStr(h)}, ${U.roundStr(k)})`,
              trapWarning: lang === 'bm'
                ? 'Semasa penyempurnaan kuasa dua dengan $a \\ne 1$, sentiasa darab $-h^2$ dengan $a$ sebelum menggabungkan dengan $+c$!'
                : 'When completing the square with $a \\ne 1$, always multiply $-h^2$ by $a$ before combining with $+c$!'
            };
          }
        }
      ],
      generateQuestion: function (tier, lang) {
        if (tier === 1) {
          const variant = U.pick([1, 2]);
          if (variant === 1) {
            const a = U.pick([2, 3, 4]);
            const sor = U.pick([-4, -3, -2.5, -1.5, 1.5, 2, 3, 4]);
            const b = U.round(-a * sor, 4);
            const c = U.randInt(-7, 7, true);
            const eqTex = U.polyTex([{ c: a, p: 2 }, { c: b, p: 1 }, { c: c, p: 0 }]) + ' = 0';
            return {
              tier: 1,
              tpLabel: 'TP1–TP2',
              subtopic: { bm: '2.2 Hasil Tambah Punca (HTP)', en: '2.2 Sum of Roots (SOR)' },
              marks: 2,
              prompt: lang === 'bm'
                ? `Persamaan kuadratik $${eqTex}$ mempunyai punca $\\alpha$ dan $\\beta$. Cari nilai hasil tambah punca, $\\alpha + \\beta$.`
                : `The quadratic equation $${eqTex}$ has roots $\\alpha$ and $\\beta$. Find the sum of roots, $\\alpha + \\beta$.`,
              answerType: 'number',
              correctValue: sor,
              displayAnswerTex: `\\alpha + \\beta = ${U.roundStr(sor)}`,
              intentMeta: {
                given: { bm: `Persamaan $${eqTex}$ dengan $a = ${a},\\; b = ${b},\\; c = ${c}$`, en: `Equation $${eqTex}$ with $a = ${a},\\; b = ${b},\\; c = ${c}$` },
                goal: { bm: 'Cari hasil tambah punca $\\alpha + \\beta = -\\frac{b}{a}$', en: 'Find the sum of roots $\\alpha + \\beta = -\\frac{b}{a}$' },
                conceptRule: { bm: 'HTP $= \\alpha + \\beta = -\\frac{b}{a}$', en: 'SOR $= \\alpha + \\beta = -\\frac{b}{a}$' }
              },
              guidedSteps: [
                { prompt: { bm: `Apakah nilai pekali $b$ dalam persamaan $${eqTex}$ (termasuk tandanya)?`, en: `What is coefficient $b$ in $${eqTex}$ (including sign)?` }, expected: b, hint: { bm: `Pekali bagi x ialah ${b}.`, en: `Coefficient of x is ${b}.` } },
                { prompt: { bm: `Sekarang kira $-\\frac{b}{a} = -\\frac{${b}}{${a}}$:`, en: `Now evaluate $-\\frac{b}{a} = -\\frac{${b}}{${a}}$:` }, expected: sor, hint: { bm: `Hati-hati tanda negatif: ${U.roundStr(sor)}.`, en: `Watch the minus sign: ${U.roundStr(sor)}.` } }
              ],
              traps: [
                { value: b / a, message: { bm: 'Diagnostik Tanda [J]: Anda tertinggal tanda negatif dalam rumus $\\text{HTP} = -\\frac{b}{a}$!', en: 'Sign Diagnosis [J]: You missed the minus sign in $\\text{SOR} = -\\frac{b}{a}$!' } }
              ],
              hints: [
                lang === 'bm' ? `Kenal pasti $a = ${a}$ dan $b = ${b}$ (termasuk tanda negatif jika ada).` : `Identify $a = ${a}$ and $b = ${b}$ (including any negative sign).`,
                lang === 'bm' ? `Gunakan rumus $\\alpha + \\beta = -\\frac{b}{a}$.` : `Use $\\alpha + \\beta = -\\frac{b}{a}$.`
              ],
              steps: [
                { badge: 'P1', title: lang === 'bm' ? 'Baca pekali a dan b' : 'Identify coefficients a and b', tex: `a = ${a}, \\quad b = ${b}`, why: lang === 'bm' ? 'Bandingkan dengan bentuk am ax² + bx + c = 0.' : 'Compare with standard form ax² + bx + c = 0.' },
                { badge: 'K1', title: lang === 'bm' ? 'Gantikan ke dalam rumus HTP' : 'Substitute into SOR formula', tex: `\\alpha + \\beta = -\\frac{${b}}{${a}}`, why: lang === 'bm' ? 'Sentiasa letak tanda negatif di hadapan pecahan −b/a.' : 'Keep the minus sign in front of the fraction −b/a.' },
                { badge: 'J1', title: lang === 'bm' ? 'Permudahkan nilai akhir' : 'Simplify final value', tex: `\\alpha + \\beta = ${U.roundStr(sor)}`, why: lang === 'bm' ? 'Semak pembatalan tanda negatif jika b < 0.' : 'Check sign cancellation if b < 0.' }
              ]
            };
          } else {
            const a = U.pick([2, 3, -2, -3]);
            const h = U.randInt(-5, 5, true);
            let k = U.randInt(-9, 9, true);
            while (k === h || k === 0) k = U.randInt(-9, 9, true);
            const word = a > 0 ? 'minimum' : 'maximum';
            const wordBm = a > 0 ? 'minimum' : 'maksimum';
            const fTex = `${a}(x ${U.signedNum(-h)})^2 ${U.signedNum(k)}`;
            const trapsList = [
              {
                value: h,
                message: {
                  bm: `Diagnostik Konsep [P]: $x = ${h}$ ialah paksi simetri (di mana titik pusingan berlaku), bukannya NILAI ${wordBm} fungsi! Nilai fungsi merujuk kepada $y = k = ${k}$.`,
                  en: `Concept Diagnosis [P]: $x = ${h}$ is where it occurs (axis of symmetry), NOT the ${word} VALUE! Function value means $y = k = ${k}$.`
                }
              }
            ];
            if (-k !== k && -k !== h) {
              trapsList.push({
                value: -k,
                message: {
                  bm: `Diagnostik Tanda [J]: Jangan tukar tanda pemalar luar $k$! Untuk $a(x-h)^2 + k$, nilai ${wordBm} ialah $${k}$ (kekalkan tandanya), bukan $${-k}$.`,
                  en: `Sign Diagnosis [J]: Do not flip the sign of outer constant $k$! In $a(x-h)^2 + k$, the ${word} value is $${k}$ (keep its sign), not $${-k}$.`
                }
              });
            }
            return {
              tier: 1,
              tpLabel: 'TP1–TP2',
              subtopic: { bm: '2.4 Bentuk Verteks', en: '2.4 Vertex Form' },
              marks: 2,
              prompt: lang === 'bm'
                ? `Diberi fungsi kuadratik dalam bentuk verteks $f(x) = ${fTex}$. Nyatakan **nilai ${wordBm}** bagi fungsi itu.`
                : `Given the quadratic function in vertex form $f(x) = ${fTex}$, state the **${word} value** of the function.`,
              answerType: 'number',
              correctValue: k,
              displayAnswerTex: lang === 'bm'
                ? `\\text{Nilai ${wordBm}} = ${k} \\quad (\\text{pada } x = ${h})`
                : `\\text{${word === 'minimum' ? 'Minimum' : 'Maximum'} Value} = ${k} \\quad (\\text{at } x = ${h})`,
              intentMeta: {
                given: { bm: `$f(x) = ${fTex}$`, en: `$f(x) = ${fTex}$` },
                goal: { bm: `Cari nilai ${wordBm} $k$`, en: `Find the ${word} value $k$` },
                conceptRule: { bm: 'Nilai min/maks ialah koordinat-$y$ verteks ($k$), BUKAN $x = h$!', en: 'Min/max value is the $y$-coordinate of vertex ($k$), NOT $x = h$!' }
              },
              guidedSteps: [
                {
                  prompt: { bm: `Bilakah bahagian kuasa dua $(x ${U.signedNum(-h)})^2$ menjadi sifar ($0$)? Apakah nilai $x$ (paksi simetri)?`, en: `When does the squared bracket $(x ${U.signedNum(-h)})^2$ become $0$? What is $x$ (axis of symmetry)?` },
                  expected: h,
                  hint: { bm: `x ${U.signedNum(-h)} = 0 ⟹ x = ${h}.`, en: `x ${U.signedNum(-h)} = 0 ⟹ x = ${h}.` }
                },
                {
                  prompt: { bm: `Apabila $x = ${h}$, bahagian kuasa dua bernilai $0$. Apakah nilai ${wordBm} $f(${h})$ yang tinggal?`, en: `When $x = ${h}$, the squared bracket equals $0$. What ${word} value $f(${h})$ remains?` },
                  expected: k,
                  hint: { bm: `f(${h}) = ${a}(0) ${U.signedNum(k)} = ${k}.`, en: `f(${h}) = ${a}(0) ${U.signedNum(k)} = ${k}.` }
                }
              ],
              traps: trapsList,
              hints: [
                lang === 'bm' ? `Dalam bentuk $a(x - h)^2 + k$, verteks ialah $(h, k) = (${h}, ${k})$.` : `In $a(x - h)^2 + k$, the vertex is $(h, k) = (${h}, ${k})$.`,
                lang === 'bm' ? `Nilai ${wordBm} fungsi merujuk kepada koordinat-$y$ verteks, iaitu $k$ (kekalkan tanda asal $k$).` : `The ${word} value of $f(x)$ is the $y$-coordinate of the vertex, $k$ (keep its sign).`
              ],
              steps: [
                { badge: 'P1', title: lang === 'bm' ? 'Kenal pasti verteks (h, k)' : 'Identify vertex (h, k)', tex: `a = ${a}, \\quad h = ${h}, \\quad k = ${k} \\implies (h, k) = (${h},\\; ${k})`, why: lang === 'bm' ? 'Bandingkan dengan bentuk verteks a(x − h)² + k.' : 'Compare term by term with a(x − h)² + k.' },
                { badge: 'K1', title: lang === 'bm' ? 'Semak tanda a & gantikan x = h' : 'Check sign of a & evaluate at x = h', tex: `f(${h}) = ${a}(${h} ${U.signedNum(-h)})^2 ${U.signedNum(k)} = ${a}(0) ${U.signedNum(k)}`, why: lang === 'bm' ? (a > 0 ? 'Oleh sebab a > 0, graf ∪ mempunyai titik minimum apabila kuasa dua = 0.' : 'Oleh sebab a < 0, graf ∩ mempunyai titik maksimum apabila kuasa dua = 0.') : (a > 0 ? 'Since a > 0, the ∪ graph hits its minimum when the square = 0.' : 'Since a < 0, the ∩ graph hits its maximum when the square = 0.') },
                { badge: 'J1', title: lang === 'bm' ? `Nyatakan nilai ${wordBm}` : `State ${word} value`, tex: lang === 'bm' ? `f_{\\text{${wordBm}}} = ${k}` : `f_{\\text{${word}}} = ${k}`, why: lang === 'bm' ? 'Koordinat-y titik pusingan ialah nilai fungsi.' : 'The y-coordinate of the turning point is the extreme value.' }
              ]
            };
          }
        } else if (tier === 2) {
          const a = U.pick([1, 2, 3]);
          const root = U.pick([2, 3, 4, 5]);
          const c = a * root * root;
          const kAns = 2 * a * root;
          const eqTex = `${a === 1 ? '' : a}x^2 - kx + ${c} = 0`;
          return {
            tier: 2,
            tpLabel: 'TP3–TP4',
            subtopic: { bm: '2.3 Pembezalayan & Sifat Punca', en: '2.3 Discriminant & Nature of Roots' },
            marks: 3,
            prompt: lang === 'bm'
              ? `Persamaan kuadratik $${eqTex}$ mempunyai dua punca nyata yang sama, dengan keadaan $k > 0$. Cari nilai $k$.`
              : `The quadratic equation $${eqTex}$ has two equal real roots, where $k > 0$. Find the value of $k$.`,
            answerType: 'number',
            correctValue: kAns,
            displayAnswerTex: `k = ${kAns}`,
            intentMeta: {
              given: { bm: `$${eqTex}$ dengan $a = ${a},\\; b = -k,\\; c = ${c}$ dan $k > 0$`, en: `$${eqTex}$ with $a = ${a},\\; b = -k,\\; c = ${c}$ and $k > 0$` },
              goal: { bm: 'Cari nilai $k > 0$ apabila $\\Delta = 0$', en: 'Find $k > 0$ when $\\Delta = 0$' },
              conceptRule: { bm: 'Dua punca nyata yang sama $\\implies b^2 - 4ac = 0$', en: 'Two equal real roots $\\implies b^2 - 4ac = 0$' }
            },
            guidedSteps: [
              { prompt: { bm: `Untuk dua punca sama, $b^2 - 4ac = 0$. Kira dahulu nilai $4ac = 4(${a})(${c})$:`, en: `For equal roots, $b^2 - 4ac = 0$. First compute $4ac = 4(${a})(${c})$:` }, expected: 4 * a * c, hint: { bm: `4 × ${a} × ${c} = ${4 * a * c}.`, en: `4 × ${a} × ${c} = ${4 * a * c}.` } },
              { prompt: { bm: `Maka $k^2 = ${4 * a * c}$. Oleh sebab $k > 0$, apakah nilai $k = \\sqrt{${4 * a * c}}$?`, en: `So $k^2 = ${4 * a * c}$. Since $k > 0$, what is $k = \\sqrt{${4 * a * c}}$?` }, expected: kAns, hint: { bm: `√${4 * a * c} = ${kAns}.`, en: `√${4 * a * c} = ${kAns}.` } }
            ],
            traps: [
              { value: kAns * kAns, message: { bm: `Diagnostik Langkah Akhir [J]: $${kAns * kAns}$ ialah nilai $k^2$! Jangan lupa ambil punca kuasa dua untuk mendapatkan $k = ${kAns}$.`, en: `Final Step Diagnosis [J]: $${kAns * kAns}$ is $k^2$! Take the square root to get $k = ${kAns}$.` } },
              { value: -kAns, message: { bm: `Diagnostik Syarat [J]: Soalan menyatakan $k > 0$, jadi tolak nilai negatif $-${kAns}$ dan pilih $k = ${kAns}$.`, en: `Condition Diagnosis [J]: The question states $k > 0$, so reject $-${kAns}$ and choose $k = ${kAns}$.` } }
            ],
            hints: [
              lang === 'bm' ? `Gunakan syarat dua punca sama: $b^2 - 4ac = 0$.` : `Apply the equal-roots condition: $b^2 - 4ac = 0$.`,
              lang === 'bm' ? `$(-k)^2 - 4(${a})(${c}) = 0 \\implies k^2 = ${4 * a * c}$, kemudian ambil punca kuasa dua positif.` : `$(-k)^2 - 4(${a})(${c}) = 0 \\implies k^2 = ${4 * a * c}$, then take the positive square root.`
            ],
            steps: [
              { badge: 'P1', title: lang === 'bm' ? 'Tetapkan syarat dua punca sama' : 'Set equal-roots condition', tex: `b^2 - 4ac = 0`, why: lang === 'bm' ? 'Dua punca sama bermaksud pembezalayan bernilai sifar.' : 'Two equal real roots occur when the discriminant is zero.' },
              { badge: 'K1', title: lang === 'bm' ? 'Gantikan a, b, c ke dalam pembezalayan' : 'Substitute a, b, c into discriminant', tex: `(-k)^2 - 4(${a})(${c}) = 0 \\implies k^2 - ${4 * a * c} = 0`, why: lang === 'bm' ? 'Guna kurungan: (−k)² = k² positif.' : 'Use brackets: (−k)² = +k².' },
              { badge: 'K1', title: lang === 'bm' ? 'Asingkan k²' : 'Isolate k²', tex: `k^2 = ${4 * a * c} \\implies k = \\pm\\sqrt{${4 * a * c}} = \\pm ${kAns}`, why: lang === 'bm' ? 'Punca kuasa dua memberi dua tanda ± sebelum disemak syarat.' : 'Taking square root gives ± before applying the sign condition.' },
              { badge: 'J1', title: lang === 'bm' ? 'Pilih punca positif (k > 0)' : 'Select positive root (k > 0)', tex: `k = ${kAns}`, why: lang === 'bm' ? 'Diberi k > 0, jadi k = −' + kAns + ' ditolak.' : 'Given k > 0, so k = −' + kAns + ' is rejected.' }
            ]
          };
        } else {
          const a = U.pick([1, 2]);
          const b = U.pick([-6, -8, 6, 10]);
          const c = U.pick([-5, -3, 3, 4, 7]);
          const sor = -b / a;
          const por = c / a;
          const ans = sor * sor - 2 * por;
          const eqTex = U.polyTex([{ c: a, p: 2 }, { c: b, p: 1 }, { c: c, p: 0 }]) + ' = 0';
          return {
            tier: 3,
            tpLabel: 'TP5–TP6 (KBAT)',
            subtopic: { bm: '2.2 Ungkapan Simetri Punca α² + β²', en: '2.2 Symmetric Root Expression α² + β²' },
            marks: 4,
            prompt: lang === 'bm'
              ? `Jika $\\alpha$ dan $\\beta$ ialah punca-punca bagi persamaan kuadratik $${eqTex}$, cari nilai tepat bagi $\\alpha^2 + \\beta^2$.`
              : `If $\\alpha$ and $\\beta$ are the roots of the quadratic equation $${eqTex}$, find the exact value of $\\alpha^2 + \\beta^2$.`,
            answerType: 'number',
            correctValue: ans,
            displayAnswerTex: `\\alpha^2 + \\beta^2 = ${U.roundStr(ans)}`,
            intentMeta: {
              given: { bm: `Persamaan $${eqTex}$ dengan punca $\\alpha, \\beta$`, en: `Equation $${eqTex}$ with roots $\\alpha, \\beta$` },
              goal: { bm: 'Cari $\\alpha^2 + \\beta^2 = (\\alpha + \\beta)^2 - 2\\alpha\\beta$', en: 'Find $\\alpha^2 + \\beta^2 = (\\alpha + \\beta)^2 - 2\\alpha\\beta$' },
              conceptRule: { bm: '$\\alpha^2 + \\beta^2 = (\\text{HTP})^2 - 2(\\text{HDP})$', en: '$\\alpha^2 + \\beta^2 = (\\text{SOR})^2 - 2(\\text{POR})$' }
            },
            guidedSteps: [
              { prompt: { bm: `Langkah 1: Cari Hasil Tambah Punca $\\alpha + \\beta = -\\frac{b}{a}$:`, en: `Step 1: Find Sum of Roots $\\alpha + \\beta = -\\frac{b}{a}$:` }, expected: sor, hint: { bm: `−(${b}) / ${a} = ${sor}.`, en: `−(${b}) / ${a} = ${sor}.` } },
              { prompt: { bm: `Langkah 2: Cari Hasil Darab Punca $\\alpha\\beta = \\frac{c}{a}$:`, en: `Step 2: Find Product of Roots $\\alpha\\beta = \\frac{c}{a}$:` }, expected: por, hint: { bm: `${c} / ${a} = ${por}.`, en: `${c} / ${a} = ${por}.` } },
              { prompt: { bm: `Langkah 3: Gunakan identiti $(\\alpha + \\beta)^2 - 2\\alpha\\beta = (${sor})^2 - 2(${por})$:`, en: `Step 3: Evaluate $(\\alpha + \\beta)^2 - 2\\alpha\\beta = (${sor})^2 - 2(${por})$:` }, expected: ans, hint: { bm: `${sor * sor} − (${2 * por}) = ${ans}.`, en: `${sor * sor} − (${2 * por}) = ${ans}.` } }
            ],
            traps: [
              { value: sor * sor, message: { bm: 'Diagnostik Identiti [K]: $(\\alpha + \\beta)^2$ mengembangkan $\\alpha^2 + 2\\alpha\\beta + \\beta^2$, bukannya $\\alpha^2 + \\beta^2$ sahaja! Anda wajib menolak $2\\alpha\\beta$.', en: 'Identity Diagnosis [K]: $(\\alpha + \\beta)^2 = \\alpha^2 + 2\\alpha\\beta + \\beta^2$, so you must subtract $2\\alpha\\beta$!' } },
              { value: sor * sor + 2 * por, message: { bm: 'Diagnostik Tanda [K]: Tolak $2\\alpha\\beta$, bukan tambah $2\\alpha\\beta$! Rumusnya $(\\alpha + \\beta)^2 - 2\\alpha\\beta$.', en: 'Sign Diagnosis [K]: Subtract $2\\alpha\\beta$, do not add! Formula is $(\\alpha + \\beta)^2 - 2\\alpha\\beta$.' } }
            ],
            hints: [
              lang === 'bm' ? `Cari $\\alpha + \\beta = ${sor}$ dan $\\alpha\\beta = ${por}$ dahulu.` : `Find $\\alpha + \\beta = ${sor}$ and $\\alpha\\beta = ${por}$ first.`,
              lang === 'bm' ? `Gunakan $\\alpha^2 + \\beta^2 = (\\alpha + \\beta)^2 - 2\\alpha\\beta$.` : `Apply $\\alpha^2 + \\beta^2 = (\\alpha + \\beta)^2 - 2\\alpha\\beta$.`
            ],
            steps: [
              { badge: 'P1', title: lang === 'bm' ? 'Ekstrak HTP & HDP daripada pekali' : 'Extract SOR & POR from coefficients', tex: `\\alpha + \\beta = -\\frac{${b}}{${a}} = ${sor}, \\quad \\alpha\\beta = \\frac{${c}}{${a}} = ${por}`, why: lang === 'bm' ? 'Gunakan −b/a untuk HTP dan c/a untuk HDP.' : 'Use −b/a for SOR and c/a for POR.' },
              { badge: 'K1', title: lang === 'bm' ? 'Gantikan ke dalam identiti simetri' : 'Substitute into symmetric identity', tex: `\\alpha^2 + \\beta^2 = (\\alpha + \\beta)^2 - 2\\alpha\\beta = (${sor})^2 - 2(${por})`, why: lang === 'bm' ? 'Menolak 2αβ membatalkan sebutan tengah +2αβ dalam (α+β)².' : 'Subtracting 2αβ cancels the +2αβ middle term in (α+β)².' },
              { badge: 'K1', title: lang === 'bm' ? 'Kira kuasa dua dan hasil darab' : 'Evaluate square and product terms', tex: `\\alpha^2 + \\beta^2 = ${sor * sor} ${U.signedNum(-2 * por)}`, why: lang === 'bm' ? 'Perhatikan tanda −2 × (' + por + ') = ' + U.signedNum(-2 * por) + '.' : 'Watch the sign −2 × (' + por + ') = ' + U.signedNum(-2 * por) + '.' },
              { badge: 'J1', title: lang === 'bm' ? 'Jawapan akhir tepat' : 'Final exact value', tex: `\\alpha^2 + \\beta^2 = ${U.roundStr(ans)}`, why: lang === 'bm' ? 'Gabungkan kedua-dua nombor.' : 'Combine the two terms.' }
            ]
          };
        }
      }
    },

    // =========================================================================
    // FORM 4 CHAPTER 3: SYSTEMS OF EQUATIONS / SISTEM PERSAMAAN
    // =========================================================================
    {
      id: 'f4-c3',
      stage: 1,
      unlocked: true,
      form: 4,
      num: 3,
      code: { bm: 'T4 • Bab 3', en: 'F4 • Ch 3' },
      icon: 'x,y,z',
      color: '#ec4899',
      category: 'algebra',
      title: { bm: 'Sistem Persamaan', en: 'Systems of Equations' },
      subtitle: {
        bm: 'Sistem linear 3 pemboleh ubah (satah 3D) & persamaan serentak linear + tak linear',
        en: '3-variable linear systems (3D planes) & simultaneous linear + non-linear equations'
      },
      spmWeight: { bm: 'Kertas 2 Bahagian A (5–7 markah tetap!)', en: 'Paper 2 Section A (Guaranteed 5–7 marks!)' },
      concepts: [
        {
          title: { bm: '1. Sistem Linear Tiga Pemboleh Ubah (x, y, z)', en: '1. Linear Systems in Three Variables (x, y, z)' },
          prereq: {
            bm: 'Ingat persamaan serentak Tingkatan 1/2 dengan dua huruf ($x + y = 5$ dan $x - y = 1$)? Kita tambah atau tolak kedua-dua persamaan untuk **menghapuskan satu huruf** supaya tinggal satu huruf sahaja!\n\nBayangkan tiga orang kawan membeli nasi lemak ($x$), teh tarik ($y$), dan kuih ($z$) di kantin. Dengan 3 resit berbeza, kita cuma mengulangi teknik penghapusan yang sama: **3 huruf $\\rightarrow$ 2 huruf $\\rightarrow$ 1 huruf**!',
            en: 'Remember Form 1/2 simultaneous equations in two letters ($x + y = 5$ and $x - y = 1$)? You add or subtract to **eliminate one letter**, leaving one unknown!\n\nImagine three friends buying different bundles of nasi lemak ($x$), teh tarik ($y$), and kuih ($z$). Three receipts let you find all three prices by repeating that exact same trick: **3 unknowns $\\rightarrow$ 2 unknowns $\\rightarrow$ 1 unknown**!'
          },
          body: {
            bm: 'Strategi utama sistem 3 pemboleh ubah ialah **kecilkan kepada 2 pemboleh ubah dahulu**:\n1. Pilih SATU huruf yang paling senang dihapuskan (contohnya $z$).\n2. Hapuskan huruf **yang sama** itu daripada **dua pasangan berlainan** (contohnya Pers (1)&(2) $\\rightarrow$ Pers (4), dan Pers (2)&(3) $\\rightarrow$ Pers (5)).\n3. Sekarang Pers (4) dan Pers (5) hanya ada $x$ dan $y$ — selesaikan seperti Tingkatan 2!\n4. Akhir sekali, gantikan balik $x$ dan $y$ ke salah satu persamaan asal untuk mendapat $z$.',
            en: 'The golden rule for 3-variable systems is **shrink 3 unknowns down to 2 unknowns first**:\n1. Pick ONE variable that looks easiest to eliminate (e.g. $z$).\n2. Eliminate that **exact same variable** from **two different pairs** (e.g. Eq (1)&(2) $\\rightarrow$ Eq (4), and Eq (2)&(3) $\\rightarrow$ Eq (5)).\n3. Now Eq (4) and Eq (5) only have $x$ and $y$ — solve them like Form 2 simultaneous equations!\n4. Finally, back-substitute $x$ and $y$ into any original equation to find $z$.'
          },
          firstStep: {
            bm: '1. **Labelkan ketiga-tiga persamaan** sebagai **(1), (2), (3)** dengan kemas.\n2. **Imbas pekali $x, y, z$**: pilih huruf yang ada pekali $+1$ atau $-1$ (atau sudah $0$ dalam satu persamaan!) untuk dihapuskan dahulu.\n3. **Semak selepas penghapusan pertama**: pastikan Pers (4) dan Pers (5) mempunyai **dua huruf yang SAMA** sebelum meneruskan.',
            en: '1. **Label the three equations** clearly as **(1), (2), (3)**.\n2. **Scan coefficients of $x, y, z$**: pick the variable with $+1$ or $-1$ (or already $0$ in one equation!) to eliminate first.\n3. **Check after Step 1**: confirm Eq (4) and Eq (5) share the **exact same two letters** before proceeding.'
          },
          formulas: [
            {
              label: { bm: 'Algoritma Penghapusan 3 → 2 → 1', en: '3 → 2 → 1 Elimination Algorithm' },
              tex: {
                bm: '(\\text{Pers 1, 2}) \\xrightarrow{-z} (4), \\quad (\\text{Pers 2, 3}) \\xrightarrow{-z} (5) \\implies \\text{Selesai } x, y \\implies \\text{Ganti balik } z',
                en: '(\\text{Eq 1, 2}) \\xrightarrow{-z} (4), \\quad (\\text{Eq 2, 3}) \\xrightarrow{-z} (5) \\implies \\text{Solve } x, y \\implies \\text{Back-sub } z'
              }
            }
          ],
          workedExample: {
            title: { bm: 'Contoh Terpandu: Selesaikan Sistem 3×3 Langkah demi Langkah', en: 'Worked Example: Solve a 3×3 System Step-by-Step' },
            problem: {
              bm: 'Selesaikan sistem persamaan linear berikut:\n(1) $x + y + z = 6$\n(2) $2x - y + z = 3$\n(3) $x + 2y - z = 2$',
              en: 'Solve the linear system:\n(1) $x + y + z = 6$\n(2) $2x - y + z = 3$\n(3) $x + 2y - z = 2$'
            },
            steps: [
              {
                label: { bm: 'Pilih hapus $z$ (semua pekali $\\pm 1$): tambah Pers (1) + Pers (3)', en: 'Choose to eliminate $z$ (all $\\pm 1$ coeffs): add Eq (1) + Eq (3)' },
                tex: '(x + y + z) + (x + 2y - z) = 6 + 2 \\implies 2x + 3y = 8 \\quad \\text{(4)}',
                why: {
                  bm: '$+z$ dan $-z$ terus terhapus apabila ditambah, menghasilkan Pers (4) dalam $x$ dan $y$ sahaja.',
                  en: '$+z$ and $-z$ cancel immediately on addition, giving Eq (4) in $x$ and $y$ only.'
                }
              },
              {
                label: { bm: 'Hapus $z$ sekali lagi menggunakan pasangan lain: tambah Pers (2) + Pers (3)', en: 'Eliminate $z$ again from a second pair: add Eq (2) + Eq (3)' },
                tex: '(2x - y + z) + (x + 2y - z) = 3 + 2 \\implies 3x + y = 5 \\quad \\text{(5)}',
                why: {
                  bm: 'Kita mesti menghapuskan huruf yang SAMA ($z$) supaya Pers (4) dan Pers (5) kedua-duanya dalam $(x, y)$.',
                  en: 'We must eliminate the SAME letter ($z$) so both Eq (4) and Eq (5) are in $(x, y)$.'
                }
              },
              {
                label: { bm: 'Selesaikan sistem 2×2 (4) & (5): darab Pers (5) dengan $3$ lalu tolak Pers (4)', en: 'Solve 2×2 system (4) & (5): multiply Eq (5) by $3$ then subtract Eq (4)' },
                tex: '(9x + 3y) - (2x + 3y) = 15 - 8 \\implies 7x = 7 \\implies x = 1',
                why: {
                  bm: 'Mendarab Pers (5) dengan $3$ menyamakan pekali $y$ menjadi $+3y$, lalu dihapuskan.',
                  en: 'Multiplying Eq (5) by $3$ matches the $y$-coefficient to $+3y$ so $y$ cancels.'
                }
              },
              {
                label: { bm: 'Gantikan $x = 1$ ke dalam (5) untuk $y$, kemudian ke dalam (1) untuk $z$', en: 'Back-substitute $x = 1$ into (5) for $y$, then into (1) for $z$' },
                tex: '3(1) + y = 5 \\implies y = 2; \\qquad 1 + 2 + z = 6 \\implies z = 3',
                why: {
                  bm: 'Semak dalam Pers (2): $2(1) - 2 + 3 = 3$ tepat!',
                  en: 'Quick check in Eq (2): $2(1) - 2 + 3 = 3$ verified!'
                }
              }
            ],
            trap: {
              bm: 'Jangan hapus $z$ pada pasangan pertama tetapi hapus $x$ pada pasangan kedua — nanti persamaan (4) dan (5) masih ada 3 huruf berlainan!',
              en: 'Never eliminate $z$ in the first pair and $x$ in the second pair — then Eq (4) and Eq (5) will still have 3 different variables!'
            }
          },
          tip: {
            bm: 'Pilih pemboleh ubah yang mempunyai pekali $\\pm 1$ untuk dihapuskan dahulu — jalan kerja jadi jauh lebih pendek!',
            en: 'Pick the variable with coefficient $\\pm 1$ to eliminate first — it cuts algebra mistakes in half!'
          }
        },
        {
          title: { bm: '2. Kes Khas Sistem 3×3: Tak Terhingga (0 = 0) & Tiada Penyelesaian (0 = k)', en: '2. Special 3×3 Cases: Infinite (0 = 0) & No Solution (0 = k)' },
          prereq: {
            bm: 'Bayangkan dua landasan kereta api yang **selari** — tidak pernah bersentuh sampai bila-bila (**Tiada Penyelesaian**). Sebaliknya, jika dua garis atau tiga satah **bertindih pada garis/satah yang sama**, semua titik di sepanjang pertindihan itu ialah jawapan (**Penyelesaian Tak Terhingga**)!',
            en: 'Picture two **parallel** railway tracks — they never meet anywhere (**No Solution**). On the other hand, if two lines or three planes **overlap along the same line/plane**, every single point along the overlap works (**Infinite Solutions**)!'
          },
          body: {
            bm: 'Kadang-kadang semasa penghapusan, **SEMUA pemboleh ubah $(x, y, z)$ terhapus serentak**! Lihat apa yang tinggal pada kedua-dua belah tanda $=$:\n• **Jika tinggal $0 = 0$** (pernyataan yang sentiasa BENAR): sistem mempunyai **Penyelesaian Tak Terhingga** (tiga satah bertemu sepanjang satu garis atau bertindih).\n• **Jika tinggal $0 = k$** dengan $k \\ne 0$, contohnya $0 = 5$ (pernyataan PALSU / mustahil): sistem mempunyai **Tiada Penyelesaian** (satah selari atau membentuk prisma segi tiga).',
            en: 'Sometimes during elimination, **ALL variables $(x, y, z)$ cancel out at once**! Look at what remains on both sides of $=$:\n• **If you get $0 = 0$** (always TRUE): the system has **Infinite Solutions** (planes meet along a common line or coincide).\n• **If you get $0 = k$** with $k \\ne 0$, e.g. $0 = 5$ (FALSE / impossible): the system has **No Solution** (parallel planes or triangular prism).'
          },
          firstStep: {
            bm: '1. Jalankan penghapusan seperti biasa untuk mendapatkan Pers (4) dan Pers (5).\n2. Jika pekali $x$ dan $y$ dalam (4) dan (5) berkadaran (contohnya $3x + 2y = 9$ dan $6x + 4y = 18$), hapus satu lagi huruf.\n3. Terus baca keputusan akhir: **$0 = 0$ $\\rightarrow$ Tak Terhingga**; **$0 =$ nombor bukan sifar $\\rightarrow$ Tiada Penyelesaian**.',
            en: '1. Run elimination as usual to obtain Eq (4) and Eq (5).\n2. If $x$ and $y$ coefficients in (4) and (5) are proportional (e.g. $3x + 2y = 9$ and $6x + 4y = 18$), eliminate once more.\n3. Read the leftover statement: **$0 = 0$ $\\rightarrow$ Infinite Solutions**; **$0 =$ non-zero $\\rightarrow$ No Solution**.'
          },
          formulas: [
            {
              label: { bm: 'Ujian Kes Khas (0 = 0 vs 0 = k)', en: 'Special-Case Test (0 = 0 vs 0 = k)' },
              tex: {
                bm: '0 = 0 \\implies \\text{Penyelesaian Tak Terhingga}, \\qquad 0 = k \\;(k \\ne 0) \\implies \\text{Tiada Penyelesaian}',
                en: '0 = 0 \\implies \\text{Infinite Solutions}, \\qquad 0 = k \\;(k \\ne 0) \\implies \\text{No Solution}'
              }
            }
          ],
          workedExample: {
            title: { bm: 'Contoh Terpandu: Bezakan Sistem 0 = 0 dengan Sistem 0 = k', en: 'Worked Example: Contrast 0 = 0 vs 0 = k Systems' },
            problem: {
              bm: 'Tentukan jenis penyelesaian bagi sistem:\n(1) $x + y + z = 4$, (2) $2x - y + z = 5$, (3) $3x + 2z = 9$.\nKemudian lihat apa yang berlaku jika (3) ditukar kepada $3x + 2z = 11$.',
              en: 'Determine the nature of solutions for:\n(1) $x + y + z = 4$, (2) $2x - y + z = 5$, (3) $3x + 2z = 9$.\nThen see what happens if (3) is changed to $3x + 2z = 11$.'
            },
            steps: [
              {
                label: { bm: 'Hapuskan $y$ daripada (1) + (2) untuk mendapat Pers (4)', en: 'Eliminate $y$ by adding (1) + (2) to get Eq (4)' },
                tex: '(x + y + z) + (2x - y + z) = 4 + 5 \\implies 3x + 2z = 9 \\quad \\text{(4)}',
                why: {
                  bm: 'Pers (3) sudah tiada huruf $y$, jadi kita hanya perlukan Pers (4) tanpa $y$ juga.',
                  en: 'Eq (3) already has no $y$, so eliminating $y$ from (1)+(2) gives a matching pair in $(x, z)$.'
                }
              },
              {
                label: { bm: 'Bandingkan Pers (4) dengan Pers (3) yang asal: $3x + 2z = 9$', en: 'Subtract original Eq (3) $3x + 2z = 9$ from Eq (4)' },
                tex: {
                  bm: '(3x + 2z) - (3x + 2z) = 9 - 9 \\implies 0 = 0 \\; (\\text{Penyelesaian Tak Terhingga})',
                  en: '(3x + 2z) - (3x + 2z) = 9 - 9 \\implies 0 = 0 \\; (\\text{Infinite Solutions})'
                },
                why: {
                  bm: 'Kedua-dua persamaan adalah tepat sama, jadi pernyataan $0 = 0$ sentiasa benar dan ada tak terhingga banyak penyelesaian.',
                  en: 'Both equations are identical, so $0 = 0$ is always true and infinitely many $(x, y, z)$ satisfy all three planes.'
                }
              },
              {
                label: { bm: 'Bandingkan pula jika Pers (3) ditukar kepada $3x + 2z = 11$', en: 'Now subtract the changed Eq (3) $3x + 2z = 11$ from Eq (4)' },
                tex: {
                  bm: '(3x + 2z) - (3x + 2z) = 9 - 11 \\implies 0 = -2 \\; (\\text{Tiada Penyelesaian})',
                  en: '(3x + 2z) - (3x + 2z) = 9 - 11 \\implies 0 = -2 \\; (\\text{No Solution})'
                },
                why: {
                  bm: '$3x + 2z$ tidak mungkin serentak sama dengan $9$ dan $11$! Percanggahan $0 = -2$ membuktikan tiada penyelesaian.',
                  en: '$3x + 2z$ cannot equal both $9$ and $11$ simultaneously! The contradiction $0 = -2$ proves no solution exists.'
                }
              }
            ],
            trap: {
              bm: 'Apabila mendapat $0 = 0$, JANGAN tulis "Tiada Penyelesaian"! $0 = 0$ bermaksud persamaan konsisten dan bertindih (**Penyelesaian Tak Terhingga**).',
              en: 'When you get $0 = 0$, NEVER write "No Solution"! $0 = 0$ means the equations are consistent and overlap (**Infinite Solutions**).'
            }
          },
          tip: {
            bm: 'Ingat perbezaan mudah: $0 = 0$ adalah **BENAR** (banyak jawapan / Tak Terhingga), manakala $0 = 5$ adalah **PALSU** (mustahil / Tiada Penyelesaian)!',
            en: 'Quick memory check: $0 = 0$ is **TRUE** (Infinite Solutions), whereas $0 = 5$ is **FALSE** (No Solution)!'
          }
        },
        {
          title: { bm: '3. Persamaan Serentak: 1 Linear & 1 Tak Linear', en: '3. Simultaneous: 1 Linear & 1 Non-Linear' },
          prereq: {
            bm: 'Ingat persamaan garis lurus $y = mx + c$ dan kembangan pelangi $(a + b)^2 = a^2 + 2ab + b^2$ dari Tingkatan 2/3?\n\nBayangkan mencari tempat sebuah **jambatan lurus** (persamaan linear) melintasi **trek roller-coaster melengkung** (persamaan tak linear). Garis boleh memotong lengkung pada **2 titik**, menyentuh pada **1 titik tangen**, atau **tidak bersilang langsung**!',
            en: 'Remember straight lines $y = mx + c$ and binomial expansion $(a + b)^2 = a^2 + 2ab + b^2$ from Form 2/3?\n\nImagine finding where a **straight bridge** (linear equation) crosses a **curved rollercoaster track** (non-linear equation). A line can cut a curve at **2 points**, touch at **1 tangent point**, or **miss completely**!'
          },
          body: {
            bm: 'Pelan kerja 4-langkah yang sentiasa berjaya untuk Kertas 2 Bahagian A:\n1. **Asingkan huruf paling mudah** daripada persamaan linear — sentiasa pilih huruf dengan pekali $\\pm 1$ untuk mengelakkan pecahan! (Contoh: daripada $x - 2y = 3$, tulis $x = 3 + 2y$, bukan $y = \\frac{x-3}{2}$).\n2. **Gantikan** ke dalam persamaan tak linear dan kembangkan kurungan dengan cermat untuk mendapat $Ax^2 + Bx + C = 0$.\n3. **Selesaikan kuadratik** (pemfaktoran atau rumus kuadratik) untuk mendapat dua nilai, contohnya $x_1$ dan $x_2$.\n4. **Pasangkan setiap nilai dengan betul**: gantikan $x_1$ dan $x_2$ kembali ke persamaan **LINEAR** untuk mendapat pasangan tepat $(x_1, y_1)$ dan $(x_2, y_2)$.',
            en: 'The reliable 4-step Paper 2 Section A game plan:\n1. **Isolate the easiest variable** from the linear equation — always pick a variable with coefficient $\\pm 1$ to avoid ugly fractions! (e.g. from $x - 2y = 3$, write $x = 3 + 2y$, not $y = \\frac{x-3}{2}$).\n2. **Substitute** into the non-linear equation and expand carefully to form $Ax^2 + Bx + C = 0$.\n3. **Solve the quadratic** (factorizing or formula) to obtain two roots, say $x_1$ and $x_2$.\n4. **Pair each root properly**: substitute $x_1$ and $x_2$ back into the **LINEAR** equation to get exact pairs $(x_1, y_1)$ and $(x_2, y_2)$.'
          },
          firstStep: {
            bm: '1. **Kenal pasti persamaan linear** (tiada $x^2$, $y^2$, atau $xy$).\n2. **Pilih huruf berpekali $\\pm 1$** supaya susunan semula bebas pecahan.\n3. **Guna tanda kurungan `(...)`** semasa menggantikan ke dalam kuasa dua atau hasil darab $xy$, supaya tiada sebutan tertinggal!',
            en: '1. **Spot the linear equation** (no $x^2$, $y^2$, or $xy$).\n2. **Pick the variable with coefficient $\\pm 1$** to avoid fractions.\n3. **Use brackets `(...)`** when substituting into squares or $xy$ products so no middle term or sign is lost!'
          },
          formulas: [
            {
              label: { bm: 'Sifat Persilangan Garis-Lengkung', en: 'Line-Curve Intersection' },
              tex: {
                bm: '\\Delta > 0 \\text{ (2 titik persilangan)}, \\quad \\Delta = 0 \\text{ (1 titik / tangen)}, \\quad \\Delta < 0 \\text{ (tak bersilang)}',
                en: '\\Delta > 0 \\text{ (2 intersection points)}, \\quad \\Delta = 0 \\text{ (1 point / tangent)}, \\quad \\Delta < 0 \\text{ (do not intersect)}'
              }
            },
            {
              label: { bm: 'Pasangan Koordinat Tepat', en: 'Exact Coordinate Pairing' },
              tex: {
                bm: 'x_1 \\xrightarrow{\\text{ganti ke linear}} y_1 \\implies (x_1, y_1), \\qquad x_2 \\xrightarrow{\\text{ganti ke linear}} y_2 \\implies (x_2, y_2)',
                en: 'x_1 \\xrightarrow{\\text{sub into linear}} y_1 \\implies (x_1, y_1), \\qquad x_2 \\xrightarrow{\\text{sub into linear}} y_2 \\implies (x_2, y_2)'
              }
            }
          ],
          workedExample: {
            title: { bm: 'Contoh Terpandu: Selesaikan 2x − y = 1 dan x² + y² = 13', en: 'Worked Example: Solve 2x − y = 1 and x² + y² = 13' },
            problem: {
              bm: 'Cari pasangan penyelesaian bagi persamaan serentak $2x - y = 1$ dan $x^2 + y^2 = 13$.',
              en: 'Find the solution pairs of the simultaneous equations $2x - y = 1$ and $x^2 + y^2 = 13$.'
            },
            steps: [
              {
                label: { bm: 'Ungkapkan $y$ daripada persamaan linear $2x - y = 1$', en: 'Isolate $y$ from the linear equation $2x - y = 1$' },
                tex: 'y = 2x - 1',
                why: {
                  bm: 'Pekali $y$ ialah $-1$, jadi mengasingkan $y$ mengelakkan pecahan (berbanding mengasingkan $x = \\frac{1+y}{2}$).',
                  en: '$y$ has coefficient $-1$, so isolating $y$ avoids fractions (unlike $x = \\frac{1+y}{2}$).'
                }
              },
              {
                label: { bm: 'Gantikan $y = 2x - 1$ ke dalam $x^2 + y^2 = 13$ dan kembangkan penuh', en: 'Substitute $y = 2x - 1$ into $x^2 + y^2 = 13$ and expand fully' },
                tex: 'x^2 + (2x - 1)^2 = 13 \\implies x^2 + (4x^2 - 4x + 1) = 13 \\implies 5x^2 - 4x - 12 = 0',
                why: {
                  bm: '$(2x - 1)^2 = (2x)^2 - 2(2x)(1) + 1^2 = 4x^2 - 4x + 1$ — jangan tertinggal $-4x$!',
                  en: '$(2x - 1)^2 = (2x)^2 - 2(2x)(1) + 1^2 = 4x^2 - 4x + 1$ — never drop $-4x$!'
                }
              },
              {
                label: { bm: 'Faktorkan persamaan kuadratik untuk mendapat dua nilai $x$', en: 'Factorize the quadratic to get both $x$ values' },
                tex: '(5x + 6)(x - 2) = 0 \\implies x_1 = -\\frac{6}{5}, \\quad x_2 = 2',
                why: {
                  bm: 'Semak: $5x^2 - 10x + 6x - 12 = 5x^2 - 4x - 12$.',
                  en: 'Check: $5x^2 - 10x + 6x - 12 = 5x^2 - 4x - 12$.'
                }
              },
              {
                label: { bm: 'Gantikan SETIAP $x$ kembali ke dalam $y = 2x - 1$ dan pasangkan', en: 'Plug EACH $x$ back into $y = 2x - 1$ and pair carefully' },
                tex: 'x_1 = -\\frac{6}{5} \\implies y_1 = 2\\left(-\\frac{6}{5}\\right) - 1 = -\\frac{17}{5}; \\qquad x_2 = 2 \\implies y_2 = 2(2) - 1 = 3',
                why: {
                  bm: 'Pasangan jawapan tepat ialah $\\left(-\\frac{6}{5}, -\\frac{17}{5}\\right)$ dan $(2, 3)$.',
                  en: 'The exact paired coordinates are $\\left(-\\frac{6}{5}, -\\frac{17}{5}\\right)$ and $(2, 3)$.'
                }
              }
            ],
            trap: {
              bm: 'Jangan gantikan $x$ balik ke dalam $x^2 + y^2 = 13$! Jika buat begitu, awak dapat $y = \\pm 3$ — termasuk pasangan palsu $(2, -3)$ yang GAGAL dalam $2x - y = 1$!',
              en: 'Never substitute $x$ back into $x^2 + y^2 = 13$! Doing that gives $y = \\pm 3$ — creating a fake pair $(2, -3)$ that FAILS $2x - y = 1$!'
            }
          },
          tip: {
            bm: 'Jangan lupa kembangkan $(mx + c)^2$ sebagai $m^2x^2 + 2mcx + c^2$ (jangan tertinggal sebutan tengah $2mcx$!).',
            en: 'Always expand $(mx + c)^2$ as $m^2x^2 + 2mcx + c^2$ (never drop the middle term $2mcx$!).'
          }
        }
      ],
      traps: [
        {
          title: { bm: 'Tertinggal Sebutan Tengah Semasa Kembang (x + k)²', en: 'Dropping the Middle Term When Expanding (x + k)²' },
          desc: {
            bm: '$(x + 3)^2$ ialah $x^2 + 6x + 9$, BUKAN $x^2 + 9$! Kesilapan ini memusnahkan semua markah akhir.',
            en: '$(x + 3)^2$ is $x^2 + 6x + 9$, NEVER $x^2 + 9$! Dropping $6x$ ruins the entire quadratic.'
          }
        },
        {
          title: { bm: 'Tertukar Pasangan (x₁, y₁) atau Ganti Balik ke Persamaan Tak Linear', en: 'Swapping (x₁, y₁) Pairs or Back-Substituting Into Non-Linear Eq' },
          desc: {
            bm: 'Sentiasa gantikan $x_1$ dan $x_2$ ke dalam persamaan **linear** supaya setiap $x$ berpasangan dengan nilai $y$ yang betul dan tiada punca palsu.',
            en: 'Always substitute $x_1$ and $x_2$ into the **linear** equation so each $x$ pairs with its exact $y$ without generating fake pairs.'
          }
        },
        {
          title: { bm: 'Menghapuskan Pemboleh Ubah Berlainan dalam Sistem 3×3', en: 'Eliminating Different Variables Across Pairs in a 3×3 System' },
          desc: {
            bm: 'Jika anda hapuskan $z$ daripada (1)&(2), anda MESTI hapuskan $z$ juga daripada (2)&(3). Hati-hati juga penolakan tanda negatif seperti $-z - (-z) = 0$ berbanding $-z - (+2z) = -3z$.',
            en: 'If you eliminate $z$ from (1)&(2), you MUST eliminate $z$ from (2)&(3) as well. Also watch signs like $-z - (-z) = 0$ vs $-z - (+2z) = -3z$.'
          }
        }
      ],
      solvers: [
        {
          id: 'sys-3x3',
          title: { bm: 'Solver Sistem Linear 3 Pemboleh Ubah (x, y, z)', en: '3-Variable Linear System Solver (x, y, z)' },
          desc: {
            bm: 'Selesaikan mana-mana sistem 3 persamaan linear secara tepat termasuk kes 0 = 0 & 0 = k.',
            en: 'Solve any 3×3 linear system step-by-step including 0 = 0 & 0 = k cases.'
          },
          inputs: [
            { id: 'a1', label: { bm: 'a₁ (Pers 1: x)', en: 'a₁ (Eq 1: x)' }, default: 1 }, { id: 'b1', label: { bm: 'b₁ (Pers 1: y)', en: 'b₁ (Eq 1: y)' }, default: 2 }, { id: 'c1', label: { bm: 'c₁ (Pers 1: z)', en: 'c₁ (Eq 1: z)' }, default: -1 }, { id: 'd1', label: { bm: 'd₁ (Hasil 1)', en: 'd₁ (RHS 1)' }, default: 3 },
            { id: 'a2', label: { bm: 'a₂ (Pers 2: x)', en: 'a₂ (Eq 2: x)' }, default: 2 }, { id: 'b2', label: { bm: 'b₂ (Pers 2: y)', en: 'b₂ (Eq 2: y)' }, default: -1 }, { id: 'c2', label: { bm: 'c₂ (Pers 2: z)', en: 'c₂ (Eq 2: z)' }, default: 1 }, { id: 'd2', label: { bm: 'd₂ (Hasil 2)', en: 'd₂ (RHS 2)' }, default: 5 },
            { id: 'a3', label: { bm: 'a₃ (Pers 3: x)', en: 'a₃ (Eq 3: x)' }, default: 3 }, { id: 'b3', label: { bm: 'b₃ (Pers 3: y)', en: 'b₃ (Eq 3: y)' }, default: 1 }, { id: 'c3', label: { bm: 'c₃ (Pers 3: z)', en: 'c₃ (Eq 3: z)' }, default: 2 }, { id: 'd3', label: { bm: 'd₃ (Hasil 3)', en: 'd₃ (RHS 3)' }, default: 11 }
          ],
          solve: function (v, lang) {
            const rows = [
              [strictNum(v.a1), strictNum(v.b1), strictNum(v.c1), strictNum(v.d1)],
              [strictNum(v.a2), strictNum(v.b2), strictNum(v.c2), strictNum(v.d2)],
              [strictNum(v.a3), strictNum(v.b3), strictNum(v.c3), strictNum(v.d3)]
            ];
            if (rows.some((r) => r.some((x) => !Number.isFinite(x)))) {
              return {
                problemTex: lang === 'bm' ? '\\text{Input tidak sah}' : '\\text{Invalid input}',
                steps: [{ badge: 'P1', title: lang === 'bm' ? 'Semak semua 12 kotak input' : 'Check all 12 input fields', tex: lang === 'bm' ? '\\text{Semua pekali dan hasil mesti nombor nyata}' : '\\text{All coefficients and RHS values must be real numbers}', why: lang === 'bm' ? 'Satu atau lebih medan kosong atau bukan nombor.' : 'One or more inputs are empty or non-numeric.' }],
                finalTex: lang === 'bm' ? '\\text{Input Tidak Sah}' : '\\text{Invalid Input}'
              };
            }

            const vars = ['x', 'y', 'z'];
            const eqLabel = (num) => `(${num})`;
            const problemTex = `\\begin{cases} ${linEqTex(rows[0].slice(0, 3), vars, rows[0][3])} \\\\ ${linEqTex(rows[1].slice(0, 3), vars, rows[1][3])} \\\\ ${linEqTex(rows[2].slice(0, 3), vars, rows[2][3])} \\end{cases}`;

            function gcdSafe(a, b) {
              a = Math.abs(Math.round(a));
              b = Math.abs(Math.round(b));
              while (b) { const t = b; b = a % b; a = t; }
              return a || 1;
            }

            function combineRows(rA, lblA, rB, lblB, col) {
              const cA = rA[col];
              const cB = rB[col];
              const allInt = rA.every((n) => Number.isInteger(n)) && rB.every((n) => Number.isInteger(n));
              if (allInt) {
                const g = gcdSafe(cA, cB);
                const mA = Math.abs(Math.round(cB)) / g;
                const mB = Math.abs(Math.round(cA)) / g;
                const sameSign = (cA > 0 && cB > 0) || (cA < 0 && cB < 0);
                const eq = rA.map((val, j) => z0(mA * val + (sameSign ? -mB : mB) * rB[j]));
                const lhsPart = mA === 1 ? lblA : `${mA}\\times${lblA}`;
                const rhsPart = mB === 1 ? lblB : `${mB}\\times${lblB}`;
                return { eq, opTex: `${lhsPart} ${sameSign ? '-' : '+'} ${rhsPart}` };
              }
              const factor = -cA / cB;
              const eq = rA.map((val, j) => z0(val + factor * rB[j]));
              const signOp = factor >= 0 ? `+ ${U.roundStr(factor, 4)}` : `- ${U.roundStr(Math.abs(factor), 4)}`;
              return { eq, opTex: `${lblA} ${signOp}\\times${lblB}` };
            }

            for (let i = 0; i < 3; i++) {
              const isZeroCoeffs = z0(rows[i][0]) === 0 && z0(rows[i][1]) === 0 && z0(rows[i][2]) === 0;
              if (isZeroCoeffs && z0(rows[i][3]) !== 0) {
                const remStr = U.roundStr(z0(rows[i][3]));
                return {
                  problemTex,
                  steps: [
                    { badge: 'P1', title: lang === 'bm' ? `Langkah 1: Persamaan (${i + 1}) bercanggah` : `Step 1: Contradiction in Eq (${i + 1})`, tex: `0 = ${remStr} \\; (\\ne 0)`, why: lang === 'bm' ? 'Semua pekali x, y, z ialah sifar tetapi hasil kanan bukan sifar.' : 'All coefficients of x, y, z are zero while RHS is non-zero.' }
                  ],
                  finalTex: lang === 'bm' ? `\\text{Tiada Penyelesaian } (0 = ${remStr})` : `\\text{No Solution } (0 = ${remStr})`
                };
              }
            }

            let elimCol = -1;
            for (const col of [2, 1, 0]) {
              const count = rows.filter((r) => z0(r[col]) !== 0).length;
              if (count >= 2) { elimCol = col; break; }
            }

            if (elimCol === -1) {
              const nonZeroCols = [0, 1, 2].map((col) => rows.findIndex((r) => z0(r[col]) !== 0));
              const isDirectPerVar =
                new Set(nonZeroCols).size === 3 &&
                nonZeroCols.every((ri) => ri !== -1) &&
                rows.every((r) => r.slice(0, 3).filter((c) => z0(c) !== 0).length <= 1) &&
                rows.every((r) => r.slice(0, 3).some((c) => z0(c) !== 0) || z0(r[3]) === 0);

              if (isDirectPerVar) {
                const sol = [0, 1, 2].map((col) => {
                  const ri = nonZeroCols[col];
                  return z0(rows[ri][3] / rows[ri][col]);
                });
                return {
                  problemTex,
                  steps: [
                    { badge: 'K1', title: lang === 'bm' ? 'Langkah 1: Selesaikan setiap persamaan terus' : 'Step 1: Solve each equation directly', tex: `x = ${U.roundStr(sol[0])}, \\quad y = ${U.roundStr(sol[1])}, \\quad z = ${U.roundStr(sol[2])}`, why: lang === 'bm' ? 'Setiap persamaan hanya mengandungi satu pemboleh ubah.' : 'Each equation already contains a single variable.' }
                  ],
                  finalTex: `(x, y, z) = (${U.roundStr(sol[0])},\\; ${U.roundStr(sol[1])},\\; ${U.roundStr(sol[2])})`
                };
              }

              const rref = rows.map((r) => r.slice());
              let pivRow = 0;
              for (let col = 0; col < 3 && pivRow < 3; col++) {
                let best = pivRow;
                for (let r = pivRow + 1; r < 3; r++) {
                  if (Math.abs(rref[r][col]) > Math.abs(rref[best][col])) best = r;
                }
                if (Math.abs(rref[best][col]) < 1e-9) continue;
                if (best !== pivRow) {
                  const tmp = rref[pivRow];
                  rref[pivRow] = rref[best];
                  rref[best] = tmp;
                }
                const pivVal = rref[pivRow][col];
                for (let j = col; j < 4; j++) rref[pivRow][j] = z0(rref[pivRow][j] / pivVal);
                for (let r = 0; r < 3; r++) {
                  if (r === pivRow || Math.abs(rref[r][col]) < 1e-9) continue;
                  const factor = rref[r][col];
                  for (let j = col; j < 4; j++) rref[r][j] = z0(rref[r][j] - factor * rref[pivRow][j]);
                }
                pivRow++;
              }

              const contraRow = rref.find((r) => z0(r[0]) === 0 && z0(r[1]) === 0 && z0(r[2]) === 0 && Math.abs(r[3]) >= 1e-7);
              const rrefTex = rref.map((r) => linEqTex(r.slice(0, 3), vars, r[3])).join(' \\\\ ');
              if (contraRow) {
                const kStr = U.roundStr(z0(contraRow[3]));
                return {
                  problemTex,
                  steps: [
                    {
                      badge: 'P1',
                      title: lang === 'bm' ? 'Langkah 1: Semak ketekalan sistem (RREF)' : 'Step 1: Check system consistency (RREF)',
                      tex: `${rrefTex} \\implies 0 = ${kStr} \\; (\\ne 0)`,
                      why: lang === 'bm' ? `Baris bercanggah 0 = ${kStr} membuktikan tiada penyelesaian.` : `Contradictory row 0 = ${kStr} proves no solution exists.`
                    }
                  ],
                  finalTex: lang === 'bm' ? `\\text{Tiada Penyelesaian } (0 = ${kStr})` : `\\text{No Solution } (0 = ${kStr})`
                };
              }

              if (pivRow < 3) {
                return {
                  problemTex,
                  steps: [
                    {
                      badge: 'P1',
                      title: lang === 'bm' ? 'Langkah 1: Semak ketaksandaran sistem (RREF)' : 'Step 1: Check system dependence (RREF)',
                      tex: rrefTex,
                      why: lang === 'bm' ? `Hanya ${pivRow} persamaan bebas untuk 3 pemboleh ubah tanpa percanggahan (0 = 0), menghasilkan penyelesaian tak terhingga.` : `Only ${pivRow} independent equations for 3 unknowns with no contradiction (0 = 0), yielding infinite solutions.`
                    }
                  ],
                  finalTex: lang === 'bm' ? '\\text{Penyelesaian Tak Terhingga } (0 = 0)' : '\\text{Infinite Solutions } (0 = 0)'
                };
              }

              return {
                problemTex,
                steps: [
                  {
                    badge: 'K1',
                    title: lang === 'bm' ? 'Langkah 1: Pengurangan Baris (RREF)' : 'Step 1: Row Reduction (RREF)',
                    tex: rrefTex,
                    why: lang === 'bm' ? 'Setiap pemboleh ubah diselesaikan daripada bentuk eselon baris terturun.' : 'Each unknown is determined from reduced row echelon form.'
                  }
                ],
                finalTex: `(x, y, z) = (${U.roundStr(rref[0][3])},\\; ${U.roundStr(rref[1][3])},\\; ${U.roundStr(rref[2][3])})`
              };
            }

            let pIdx = -1;
            let bestScore = Infinity;
            for (let i = 0; i < 3; i++) {
              const c = Math.abs(z0(rows[i][elimCol]));
              if (c > 0) {
                const score = c === 1 ? 0 : c;
                if (score < bestScore) { bestScore = score; pIdx = i; }
              }
            }

            const otherIdxs = [0, 1, 2].filter((i) => i !== pIdx);
            const reduced = [];
            const reduceOps = [];
            for (const rIdx of otherIdxs) {
              if (z0(rows[rIdx][elimCol]) === 0) {
                reduced.push(rows[rIdx].slice());
                reduceOps.push(`${eqLabel(rIdx + 1)}`);
              } else {
                const comb = combineRows(rows[rIdx], eqLabel(rIdx + 1), rows[pIdx], eqLabel(pIdx + 1), elimCol);
                reduced.push(comb.eq);
                reduceOps.push(comb.opTex);
              }
            }

            const eq4 = reduced[0];
            const eq5 = reduced[1];
            const remCols = [0, 1, 2].filter((c) => c !== elimCol);
            const uCol = remCols[0];
            const wCol = remCols[1];
            const step1Tex = `${reduceOps[0]} \\to \\text{(4)}: \\; ${linEqTex(eq4.slice(0, 3), vars, eq4[3])} \\\\ ${reduceOps[1]} \\to \\text{(5)}: \\; ${linEqTex(eq5.slice(0, 3), vars, eq5[3])}`;

            for (const [idxNum, eq] of [[4, eq4], [5, eq5]]) {
              if (z0(eq[uCol]) === 0 && z0(eq[wCol]) === 0 && z0(eq[3]) !== 0) {
                const kStr = U.roundStr(z0(eq[3]));
                return {
                  problemTex,
                  steps: [
                    { badge: 'K1', title: lang === 'bm' ? `Langkah 1: Hapuskan ${vars[elimCol]} kepada Persamaan (4) & (5)` : `Step 1: Eliminate ${vars[elimCol]} to form Eq (4) & (5)`, tex: step1Tex, why: lang === 'bm' ? `Hapuskan pemboleh ubah yang sama (${vars[elimCol]}) daripada dua pasangan.` : `Eliminate the same variable (${vars[elimCol]}) from two pairs.` },
                    { badge: 'J1', title: lang === 'bm' ? `Langkah 2: Percanggahan pada (${idxNum})` : `Step 2: Contradiction in Eq (${idxNum})`, tex: `0 = ${kStr} \\; (\\ne 0)`, why: lang === 'bm' ? 'Pernyataan mustahil (0 = bukan sifar) bermakna tiada penyelesaian.' : 'Impossible statement (0 = non-zero) proves no solution exists.' }
                  ],
                  finalTex: lang === 'bm' ? `\\text{Tiada Penyelesaian } (0 = ${kStr})` : `\\text{No Solution } (0 = ${kStr})`
                };
              }
            }

            const det2 = z0(eq4[uCol] * eq5[wCol] - eq5[uCol] * eq4[wCol]);
            if (det2 === 0) {
              let remConst = 0;
              let singTex = '0 = 0';
              const isEq4Zero = z0(eq4[uCol]) === 0 && z0(eq4[wCol]) === 0;
              const isEq5Zero = z0(eq5[uCol]) === 0 && z0(eq5[wCol]) === 0;
              if (isEq4Zero || isEq5Zero) {
                remConst = isEq4Zero ? z0(eq4[3]) : z0(eq5[3]);
                singTex = `0 = ${U.roundStr(remConst)}`;
              } else {
                const elim2 = z0(eq4[wCol]) !== 0 && z0(eq5[wCol]) !== 0 ? wCol : uCol;
                const comb2 = combineRows(eq4, '(4)', eq5, '(5)', elim2);
                remConst = z0(comb2.eq[3]);
                singTex = `${comb2.opTex} \\implies 0 = ${U.roundStr(remConst)}`;
              }
              const isNoSol = Math.abs(remConst) >= 1e-7;
              return {
                problemTex,
                steps: [
                  { badge: 'K1', title: lang === 'bm' ? `Langkah 1: Hapuskan ${vars[elimCol]} kepada Persamaan (4) & (5)` : `Step 1: Eliminate ${vars[elimCol]} to form Eq (4) & (5)`, tex: step1Tex, why: lang === 'bm' ? `Kurangkan sistem 3×3 kepada dua persamaan dalam ${vars[uCol]} dan ${vars[wCol]}.` : `Reduce the 3×3 system to two equations in ${vars[uCol]} and ${vars[wCol]}.` },
                  {
                    badge: 'J1',
                    title: lang === 'bm' ? 'Langkah 2: Uji Kes Khas 2×2 (0 = 0 vs 0 = k)' : 'Step 2: Test 2×2 Special Case (0 = 0 vs 0 = k)',
                    tex: singTex,
                    why: isNoSol
                      ? (lang === 'bm' ? `Penghapusan menghasilkan 0 = ${U.roundStr(remConst)} (palsu/bercanggah) → satah selari atau prisma, Tiada Penyelesaian.` : `Elimination yields 0 = ${U.roundStr(remConst)} (false/contradictory) → parallel/prism planes, No Solution.`)
                      : (lang === 'bm' ? 'Penghapusan menghasilkan 0 = 0 (sentiasa benar) → satah bertindih atau bersilang sepanjang garis, Penyelesaian Tak Terhingga.' : 'Elimination yields 0 = 0 (always true) → coincident/line-intersecting planes, Infinite Solutions.')
                  }
                ],
                finalTex: isNoSol
                  ? (lang === 'bm' ? `\\text{Tiada Penyelesaian } (0 = ${U.roundStr(remConst)})` : `\\text{No Solution } (0 = ${U.roundStr(remConst)})`)
                  : (lang === 'bm' ? '\\text{Penyelesaian Tak Terhingga } (0 = 0)' : '\\text{Infinite Solutions } (0 = 0)')
              };
            }

            let valU, valW, step2Tex;
            if (z0(eq4[wCol]) === 0) {
              valU = z0(eq4[3] / eq4[uCol]);
              valW = z0((eq5[3] - eq5[uCol] * valU) / eq5[wCol]);
              step2Tex = `${linEqTex(eq4.slice(0, 3), vars, eq4[3])} \\implies ${vars[uCol]} = ${U.roundStr(valU)} \\\\ ${vars[wCol]} = ${U.roundStr(valW)}`;
            } else if (z0(eq5[wCol]) === 0) {
              valU = z0(eq5[3] / eq5[uCol]);
              valW = z0((eq4[3] - eq4[uCol] * valU) / eq4[wCol]);
              step2Tex = `${linEqTex(eq5.slice(0, 3), vars, eq5[3])} \\implies ${vars[uCol]} = ${U.roundStr(valU)} \\\\ ${vars[wCol]} = ${U.roundStr(valW)}`;
            } else {
              const comb2 = combineRows(eq4, '(4)', eq5, '(5)', wCol);
              const resEq = comb2.eq;
              valU = z0(resEq[3] / resEq[uCol]);
              valW = z0((eq4[3] - eq4[uCol] * valU) / eq4[wCol]);
              const uLead = z0(eq4[uCol]) === 1 ? '' : (z0(eq4[uCol]) === -1 ? '-' : U.roundStr(z0(eq4[uCol])));
              const wCoef = z0(eq4[wCol]);
              const wMag = Math.abs(wCoef) === 1 ? '' : U.roundStr(Math.abs(wCoef));
              const eq4Sub = `${uLead}(${U.roundStr(valU)}) ${wCoef >= 0 ? '+' : '-'} ${wMag}${vars[wCol]} = ${U.roundStr(eq4[3])}`;
              step2Tex = `${comb2.opTex} \\implies ${linEqTex(resEq.slice(0, 3), vars, resEq[3])} \\implies ${vars[uCol]} = ${U.roundStr(valU)} \\\\ ${eq4Sub} \\implies ${vars[wCol]} = ${U.roundStr(valW)}`;
            }

            const sol = [0, 0, 0];
            sol[uCol] = valU;
            sol[wCol] = valW;
            sol[elimCol] = z0((rows[pIdx][3] - rows[pIdx][uCol] * valU - rows[pIdx][wCol] * valW) / rows[pIdx][elimCol]);

            const pRow = rows[pIdx];
            const pSubParts = [];
            for (let j = 0; j < 3; j++) {
              const c = z0(pRow[j]);
              if (c === 0) continue;
              const isFirst = pSubParts.length === 0;
              const sgn = isFirst ? (c < 0 ? '-' : '') : (c < 0 ? ' - ' : ' + ');
              const mag = Math.abs(c) === 1 ? '' : U.roundStr(Math.abs(c));
              if (j === elimCol) pSubParts.push(`${sgn}${mag}${vars[j]}`);
              else pSubParts.push(`${sgn}${mag}(${U.roundStr(sol[j])})`);
            }
            const step3Tex = `${pSubParts.join('')} = ${U.roundStr(pRow[3])} \\implies ${vars[elimCol]} = ${U.roundStr(sol[elimCol])}`;

            const chkParts = [];
            for (let j = 0; j < 3; j++) {
              const c = z0(rows[0][j]);
              if (c === 0) continue;
              const isFirst = chkParts.length === 0;
              const sgn = isFirst ? (c < 0 ? '-' : '') : (c < 0 ? ' - ' : ' + ');
              const mag = Math.abs(c) === 1 ? '' : U.roundStr(Math.abs(c));
              chkParts.push(`${sgn}${mag}(${U.roundStr(sol[j])})`);
            }
            const chkLhs = chkParts.length ? chkParts.join('') : '0';
            const chkEval = z0(rows[0][0] * sol[0] + rows[0][1] * sol[1] + rows[0][2] * sol[2]);
            const chkLbl = lang === 'bm' ? '\\text{Semak (1): }' : '\\text{Check (1): }';

            return {
              problemTex,
              steps: [
                {
                  badge: 'P1',
                  title: lang === 'bm' ? `Langkah 1: Hapuskan ${vars[elimCol]} untuk membentuk (4) & (5)` : `Step 1: Eliminate ${vars[elimCol]} to form Eq (4) & (5)`,
                  tex: step1Tex,
                  why: lang === 'bm' ? `Pastikan pemboleh ubah yang SAMA (${vars[elimCol]}) dihapuskan supaya (4) dan (5) hanya ada ${vars[uCol]} dan ${vars[wCol]}.` : `Eliminate the SAME variable (${vars[elimCol]}) so Eq (4) and Eq (5) both contain only ${vars[uCol]} and ${vars[wCol]}.`
                },
                {
                  badge: 'K1',
                  title: lang === 'bm' ? `Langkah 2: Selesaikan Sistem 2×2 (4) & (5) bagi ${vars[uCol]} dan ${vars[wCol]}` : `Step 2: Solve 2×2 System (4) & (5) for ${vars[uCol]} and ${vars[wCol]}`,
                  tex: step2Tex,
                  why: lang === 'bm' ? `Hapuskan ${vars[wCol]} antara (4) dan (5), kemudian gantikan balik ke (4).` : `Eliminate ${vars[wCol]} between (4) and (5), then substitute back into (4).`
                },
                {
                  badge: 'K1',
                  title: lang === 'bm' ? `Langkah 3: Gantikan balik ke Pers (${pIdx + 1}) untuk ${vars[elimCol]}` : `Step 3: Back-substitute into Eq (${pIdx + 1}) for ${vars[elimCol]}`,
                  tex: step3Tex,
                  why: lang === 'bm' ? `Masukkan nilai ${vars[uCol]} dan ${vars[wCol]} yang telah diperoleh ke dalam persamaan asal (${pIdx + 1}).` : `Substitute the found values of ${vars[uCol]} and ${vars[wCol]} into original Eq (${pIdx + 1}).`
                },
                {
                  badge: 'J1',
                  title: lang === 'bm' ? 'Langkah 4: Semakan Ketepatan' : 'Step 4: Verification Check',
                  tex: `${chkLbl} ${chkLhs} = ${U.roundStr(chkEval)} \\; \\checkmark`,
                  why: lang === 'bm' ? 'Disahkan memenuhi persamaan asal!' : 'Verified against original Eq (1)!'
                }
              ],
              finalTex: `(x, y, z) = (${U.roundStr(sol[0])},\\; ${U.roundStr(sol[1])},\\; ${U.roundStr(sol[2])})`,
              trapWarning: lang === 'bm'
                ? 'Sentiasa hapus pemboleh ubah yang SAMA daripada kedua-dua pasangan pertama!'
                : 'Always eliminate the EXACT SAME variable from both initial pairs!'
            };
          }
        }
      ],
      generateQuestion: function (tier, lang) {
        if (tier === 1) {
          const x0 = U.randInt(2, 6);
          const y0 = U.randInt(1, 5);
          const sum = x0 + y0;
          const sqDiff = x0 * x0 - y0 * y0;
          const ansDiff = x0 - y0;
          const wrongSub = sqDiff - sum;
          return {
            tier: 1,
            tpLabel: 'TP1–TP2',
            subtopic: { bm: '3.2 Penggantian & Pemfaktoran Serentak', en: '3.2 Simultaneous Substitution' },
            marks: 2,
            prompt: lang === 'bm'
              ? `Diberi $x + y = ${sum}$ dan $x^2 - y^2 = ${sqDiff}$. Cari nilai bagi **$x$**.`
              : `Given $x + y = ${sum}$ and $x^2 - y^2 = ${sqDiff}$, find the value of **$x$**.`,
            answerType: 'number',
            correctValue: x0,
            displayAnswerTex: `x = ${x0} \\quad (x - y = ${ansDiff})`,
            intentMeta: {
              given: { bm: `$x + y = ${sum},\\; x^2 - y^2 = ${sqDiff}$`, en: `$x + y = ${sum},\\; x^2 - y^2 = ${sqDiff}$` },
              goal: { bm: 'Cari nilai $x$ menggunakan beza dua kuasa dua', en: 'Find $x$ using difference of squares' },
              conceptRule: { bm: '$x^2 - y^2 = (x + y)(x - y)$', en: '$x^2 - y^2 = (x + y)(x - y)$' }
            },
            guidedSteps: [
              {
                prompt: { bm: `Oleh sebab $(x + y)(x - y) = ${sqDiff}$ dan $x + y = ${sum}$, cari nilai $x - y = \\frac{${sqDiff}}{${sum}}$:`, en: `Since $(x + y)(x - y) = ${sqDiff}$ and $x + y = ${sum}$, find $x - y = \\frac{${sqDiff}}{${sum}}$:` },
                expected: ansDiff,
                hint: { bm: `${sqDiff} ÷ ${sum} = ${ansDiff}.`, en: `${sqDiff} ÷ ${sum} = ${ansDiff}.` }
              },
              {
                prompt: { bm: `Tambahkan $x + y = ${sum}$ dengan $x - y = ${ansDiff}$ untuk menghapuskan $y$. Apakah nilai $2x$?`, en: `Add $x + y = ${sum}$ and $x - y = ${ansDiff}$ to eliminate $y$. What is $2x$?` },
                expected: 2 * x0,
                hint: { bm: `${sum} + (${ansDiff}) = ${2 * x0}.`, en: `${sum} + (${ansDiff}) = ${2 * x0}.` }
              },
              {
                prompt: { bm: `Bahagikan $2x = ${2 * x0}$ dengan $2$ untuk mendapatkan nilai $x$:`, en: `Divide $2x = ${2 * x0}$ by $2$ to get $x$:` },
                expected: x0,
                hint: { bm: `${2 * x0} ÷ 2 = ${x0}.`, en: `${2 * x0} ÷ 2 = ${x0}.` }
              }
            ],
            traps: [
              {
                value: ansDiff,
                message: {
                  bm: `Diagnostik Sasaran [J]: $${ansDiff}$ ialah nilai $x - y$, bukan nilai $x$! Tambah $x + y = ${sum}$ dan $x - y = ${ansDiff}$ untuk mendapat $2x = ${2 * x0} \\implies x = ${x0}$.`,
                  en: `Target Diagnosis [J]: $${ansDiff}$ is $x - y$, not $x$ yet! Add $x + y = ${sum}$ and $x - y = ${ansDiff}$ to get $2x = ${2 * x0} \\implies x = ${x0}$.`
                }
              },
              {
                value: wrongSub,
                message: {
                  bm: `Diagnostik Operasi [K]: Jangan tolak $${sqDiff} - ${sum}$! Oleh sebab $(x+y)(x-y) = ${sqDiff}$, anda mesti **membahagi** $${sqDiff} \\div ${sum} = ${ansDiff}$.`,
                  en: `Operation Diagnosis [K]: Do not subtract $${sqDiff} - ${sum}$! Since $(x+y)(x-y) = ${sqDiff}$, you must **divide** $${sqDiff} \\div ${sum} = ${ansDiff}$.`
                }
              }
            ],
            hints: [
              lang === 'bm' ? `Faktorkan $x^2 - y^2 = (x + y)(x - y)$ dan bahagikan $${sqDiff}$ dengan $${sum}$ untuk mendapat $x - y$.` : `Factorize $x^2 - y^2 = (x + y)(x - y)$ and divide $${sqDiff}$ by $${sum}$ to find $x - y$.`,
              lang === 'bm' ? `Tambahkan $(x + y) + (x - y) = ${sum} + (${ansDiff}) = ${2 * x0}$, kemudian bahagi dengan $2$.` : `Add $(x + y) + (x - y) = ${sum} + (${ansDiff}) = ${2 * x0}$, then divide by $2$.`
            ],
            steps: [
              { badge: 'P1', title: lang === 'bm' ? 'Faktorkan beza dua kuasa dua' : 'Factor difference of squares', tex: `(x + y)(x - y) = ${sqDiff} \\implies ${sum}(x - y) = ${sqDiff}`, why: lang === 'bm' ? 'Identiti algebra (x+y)(x−y) = x² − y².' : 'Algebraic identity (x+y)(x−y) = x² − y².' },
              { badge: 'K1', title: lang === 'bm' ? 'Bahagi untuk mencari x − y' : 'Divide to find x − y', tex: `x - y = \\frac{${sqDiff}}{${sum}} = ${ansDiff}`, why: lang === 'bm' ? 'Asingkan ungkapan x − y.' : 'Isolate x − y.' },
              { badge: 'J1', title: lang === 'bm' ? 'Tambah kedua-dua persamaan untuk x' : 'Add both linear equations for x', tex: `(x + y) + (x - y) = ${sum} + (${ansDiff}) \\implies 2x = ${2 * x0} \\implies x = ${x0}`, why: lang === 'bm' ? '+y dan −y saling terhapus supaya tinggal x sahaja.' : '+y and −y cancel out, isolating x.' }
            ]
          };
        } else if (tier === 2) {
          const x1 = U.randInt(1, 4);
          let y1 = U.randInt(2, 5);
          while (y1 === x1) y1 = U.randInt(2, 5);
          const k = y1 - x1;
          const R = x1 * x1 + y1 * y1;
          const x2 = -k - x1;
          const C2 = 2 * x1 * x2;
          const C1 = x1 * x2;
          const linRhsTex = U.polyTex([{ c: 1, p: 1 }, { c: k, p: 0 }]);
          const quad2Tex = U.polyTex([{ c: 2, p: 2 }, { c: 2 * k, p: 1 }, { c: C2, p: 0 }]);
          const quad1Tex = U.polyTex([{ c: 1, p: 2 }, { c: k, p: 1 }, { c: C1, p: 0 }]);
          const expandedSqTex = U.polyTex([{ c: 1, p: 2 }, { c: 2 * k, p: 1 }, { c: k * k, p: 0 }]);
          return {
            tier: 2,
            tpLabel: 'TP3–TP4',
            subtopic: { bm: '3.2 Persamaan Serentak Linear & Tak Linear', en: '3.2 Linear & Non-Linear Simultaneous' },
            marks: 5,
            prompt: lang === 'bm'
              ? `Selesaikan persamaan serentak $y - x = ${k}$ dan $x^2 + y^2 = ${R}$. Masukkan kedua-dua nilai $x$ (pisahkan dengan koma).`
              : `Solve the simultaneous equations $y - x = ${k}$ and $x^2 + y^2 = ${R}$. Enter both values of $x$ (separated by a comma).`,
            answerType: 'pair',
            orderedPair: false,
            placeholder: { bm: 'Contoh: 2, -4', en: 'e.g. 2, -4' },
            correctValue: [x1, x2],
            displayAnswerTex: `x = ${x1}, \\quad x = ${x2}`,
            intentMeta: {
              given: { bm: `$y = ${linRhsTex},\\; x^2 + y^2 = ${R}$`, en: `$y = ${linRhsTex},\\; x^2 + y^2 = ${R}$` },
              goal: { bm: 'Cari kedua-dua nilai punca $x$', en: 'Find both root values of $x$' },
              conceptRule: { bm: 'Asingkan $y$ daripada linear, gantikan ke dalam tak linear & faktorkan', en: 'Isolate $y$ from linear eq, substitute into non-linear eq & factorize' }
            },
            guidedSteps: [
              {
                prompt: { bm: `Gantikan $y = ${linRhsTex}$ ke dalam $x^2 + y^2 = ${R}$ memberi $${quad2Tex} = 0$. Bahagikan semua dengan $2$: apakah pemalar akhir $C$ dalam $${U.polyTex([{ c: 1, p: 2 }, { c: k, p: 1 }])} + C = 0$?`, en: `Substituting $y = ${linRhsTex}$ gives $${quad2Tex} = 0$. Dividing by $2$, what is the constant term $C$?` },
                expected: C1,
                hint: { bm: `(${C2}) ÷ 2 = ${C1}.`, en: `(${C2}) ÷ 2 = ${C1}.` }
              },
              {
                prompt: { bm: `Punca pertama bagi $${quad1Tex} = 0$ ialah (pilih punca positif $${x1}$):`, en: `What is the positive root of $${quad1Tex} = 0$?` },
                expected: x1,
                hint: { bm: `Faktorkan kepada (x − ${x1})(x ${U.signedNum(-x2)}) = 0.`, en: `Factorize into (x − ${x1})(x ${U.signedNum(-x2)}) = 0.` }
              },
              {
                prompt: { bm: `Apakah pula punca kedua bagi $(x - ${x1})(x ${U.signedNum(-x2)}) = 0$?`, en: `What is the second root of $(x - ${x1})(x ${U.signedNum(-x2)}) = 0$?` },
                expected: x2,
                hint: { bm: `Samakan faktor kedua dengan sifar: x = ${x2}.`, en: `Set the second factor to zero: x = ${x2}.` }
              }
            ],
            traps: [
              {
                value: -x1,
                message: {
                  bm: `Diagnostik Tanda Faktor [K]: Jika faktor ialah $(x - ${x1})$, puncanya ialah $+${x1}$, bukan $-${x1}$!`,
                  en: `Factor Sign Diagnosis [K]: If a factor is $(x - ${x1})$, the root is $+${x1}$, not $-${x1}$!`
                }
              }
            ],
            hints: [
              lang === 'bm' ? `Tulis $y = ${linRhsTex}$ dan gantikan ke dalam $x^2 + (${linRhsTex})^2 = ${R}$.` : `Write $y = ${linRhsTex}$ and substitute into $x^2 + (${linRhsTex})^2 = ${R}$.`,
              lang === 'bm' ? `Permudahkan kepada $${quad1Tex} = 0$ dan faktorkan untuk mendapat dua nilai $x$.` : `Simplify to $${quad1Tex} = 0$ and factorize for both $x$ values.`
            ],
            steps: [
              { badge: 'P1', title: lang === 'bm' ? 'Ungkapkan y daripada persamaan linear' : 'Isolate y from linear eq', tex: `y = ${linRhsTex}`, why: lang === 'bm' ? 'Pekali y ialah +1, jadi mudah digantikan.' : 'y has coefficient +1, ready for clean substitution.' },
              { badge: 'K1', title: lang === 'bm' ? 'Gantikan & kembangkan (x + k)² dengan penuh' : 'Substitute & expand (x + k)² fully', tex: `x^2 + (${linRhsTex})^2 = ${R} \\implies x^2 + (${expandedSqTex}) = ${R} \\implies ${quad2Tex} = 0`, why: lang === 'bm' ? 'Kembangkan kuasa dua termasuk sebutan tengah 2kx.' : 'Expand the binomial square including the middle term 2kx.' },
              { badge: 'K1', title: lang === 'bm' ? 'Bahagi semua sebutan dengan 2' : 'Divide through by 2', tex: `${quad1Tex} = 0`, why: lang === 'bm' ? 'Memudahkan persamaan kuadratik sebelum pemfaktoran.' : 'Simplifies the quadratic before factoring.' },
              { badge: 'J1', title: lang === 'bm' ? 'Faktorkan untuk kedua-dua nilai x' : 'Factorize for both x values', tex: `(x - ${x1})(x ${U.signedNum(-x2)}) = 0 \\implies x = ${x1},\\; ${x2}`, why: lang === 'bm' ? 'Kedua-dua koordinat-x titik persilangan diperoleh.' : 'Both intersection x-coordinates are found.' }
            ]
          };
        } else {
          const z = U.randInt(3, 7);
          let x = U.randInt(2, 5);
          while (x === z) x = U.randInt(2, 5);
          let y = U.randInt(2, 6);
          while (y === z) y = U.randInt(2, 6);
          const d1 = x + y + z;
          const d2 = 2 * x + y - z;
          const d3 = x - y + 2 * z;
          return {
            tier: 3,
            tpLabel: 'TP5–TP6 (KBAT)',
            subtopic: { bm: '3.1 Pemodelan Sistem Linear 3 Pemboleh Ubah', en: '3.1 3-Variable Linear Modeling' },
            marks: 6,
            prompt: lang === 'bm'
              ? `Tiga pakej komponen elektronik memenuhi sistem persamaan:\n$$x + y + z = ${d1} \\quad \\text{(1)}$$\n$$2x + y - z = ${d2} \\quad \\text{(2)}$$\n$$x - y + 2z = ${d3} \\quad \\text{(3)}$$\nCari nilai bagi **$z$**.`
              : `Three electronic component bundles satisfy:\n$$x + y + z = ${d1} \\quad \\text{(1)}$$\n$$2x + y - z = ${d2} \\quad \\text{(2)}$$\n$$x - y + 2z = ${d3} \\quad \\text{(3)}$$\nFind the value of **$z$**.`,
            answerType: 'number',
            correctValue: z,
            displayAnswerTex: `z = ${z} \\quad (x = ${x},\\; y = ${y})`,
            intentMeta: {
              given: { bm: '3 persamaan linear dalam $x, y, z$', en: '3 linear equations in $x, y, z$' },
              goal: { bm: 'Cari nilai $z$', en: 'Find the value of $z$' },
              conceptRule: { bm: 'Hapuskan $y$ melalui $(1)+(3)$ dan $(2)+(3)$ untuk selesaikan $x, z$', en: 'Eliminate $y$ via $(1)+(3)$ and $(2)+(3)$ to solve $x, z$' }
            },
            guidedSteps: [
              { prompt: { bm: `Tambah Pers (1) dan Pers (3) untuk menghapuskan $y$: $(x+y+z) + (x-y+2z) = 2x + 3z = \\;?$`, en: `Add Eq (1) and Eq (3) to eliminate $y$: $2x + 3z = \\;?$ ` }, expected: d1 + d3, hint: { bm: `${d1} + ${d3} = ${d1 + d3}.`, en: `${d1} + ${d3} = ${d1 + d3}.` } },
              { prompt: { bm: `Tambah Pers (2) dan Pers (3) untuk menghapuskan $y$ lagi: $3x + z = \\;?$`, en: `Add Eq (2) and Eq (3) to eliminate $y$ again: $3x + z = \\;?$ ` }, expected: d2 + d3, hint: { bm: `${d2} + ${d3} = ${d2 + d3}.`, en: `${d2} + ${d3} = ${d2 + d3}.` } },
              { prompt: { bm: `Darab Pers (4) dengan $3$ dan tolak $2\\times$Pers (5): $(6x + 9z) - (6x + 2z) = 3(${d1 + d3}) - 2(${d2 + d3}) = ${7 * z}$. Maka apakah nilai $z$?`, en: `Compute $3\\times$Eq(4) $- 2\\times$Eq(5): $(6x + 9z) - (6x + 2z) = 3(${d1 + d3}) - 2(${d2 + d3}) = ${7 * z}$. What is $z$?` }, expected: z, hint: { bm: `${7 * z} ÷ 7 = ${z}.`, en: `${7 * z} ÷ 7 = ${z}.` } }
            ],
            traps: [
              { value: x, message: { bm: `Diagnostik Sasaran [J]: $${x}$ ialah nilai $x$! Soalan meminta nilai $z$.`, en: `Target Diagnosis [J]: $${x}$ is $x$! The question asks for $z$.` } },
              { value: y, message: { bm: `Diagnostik Sasaran [J]: $${y}$ ialah nilai $y$! Soalan meminta nilai $z$.`, en: `Target Diagnosis [J]: $${y}$ is $y$! The question asks for $z$.` } }
            ],
            hints: [
              lang === 'bm' ? `Perhatikan pekali $y$: $+y, +y, -y$. Tambah (1)+(3) dan (2)+(3) untuk menghapuskan $y$ terus!` : `Notice $y$ has $+y, +y, -y$. Add (1)+(3) and (2)+(3) to eliminate $y$ immediately!`,
              lang === 'bm' ? `Selesaikan $2x + 3z = ${d1 + d3}$ dan $3x + z = ${d2 + d3}$ untuk mendapatkan $z$.` : `Solve $2x + 3z = ${d1 + d3}$ and $3x + z = ${d2 + d3}$ for $z$.`
            ],
            steps: [
              { badge: 'P1', title: lang === 'bm' ? 'Hapuskan y melalui (1)+(3)' : 'Eliminate y via (1)+(3)', tex: `2x + 3z = ${d1} + ${d3} = ${d1 + d3} \\quad \\text{(4)}`, why: lang === 'bm' ? '+y dan −y terhapus, membentuk persamaan (4) dalam x dan z.' : '+y and −y cancel, forming Eq (4) in x and z.' },
              { badge: 'K1', title: lang === 'bm' ? 'Hapuskan y melalui (2)+(3)' : 'Eliminate y via (2)+(3)', tex: `3x + z = ${d2} + ${d3} = ${d2 + d3} \\quad \\text{(5)}`, why: lang === 'bm' ? 'Kekalkan dua huruf yang sama (x dan z).' : 'Keep the same two variables (x and z).' },
              { badge: 'K1', title: lang === 'bm' ? 'Samakan pekali x dengan 3×(4) − 2×(5)' : 'Match x-coeff via 3×(4) − 2×(5)', tex: `(6x + 9z) - (6x + 2z) = 3(${d1 + d3}) - 2(${d2 + d3}) \\implies 7z = ${3 * (d1 + d3)} - ${2 * (d2 + d3)} = ${7 * z}`, why: lang === 'bm' ? '6x − 6x = 0 menghapuskan x.' : '6x − 6x = 0 eliminates x.' },
              { badge: 'J1', title: lang === 'bm' ? 'Bahagikan dengan 7 untuk mencari z' : 'Divide by 7 to solve z', tex: `z = \\frac{${7 * z}}{7} = ${z}`, why: lang === 'bm' ? 'Jawapan tepat bagi z diperoleh.' : 'Exact value of z obtained.' }
            ]
          };
        }
      }
    },

    // =========================================================================
    // FORM 4 CHAPTER 4: INDICES, SURDS & LOGARITHMS
    // =========================================================================
    {
      id: 'f4-c4',
      stage: 1,
      unlocked: true,
      form: 4,
      num: 4,
      code: { bm: 'T4 • Bab 4', en: 'F4 • Ch 4' },
      icon: 'logₐ',
      color: '#f59e0b',
      category: 'algebra',
      title: { bm: 'Indeks, Surd dan Logaritma', en: 'Indices, Surds and Logarithms' },
      subtitle: {
        bm: 'Hukum indeks, nisbahkan surd konjugat & hukum penukaran asas logaritma',
        en: 'Laws of indices, surd conjugate rationalization & logarithm base-change laws'
      },
      spmWeight: { bm: 'Kertas 1 (2–3 soalan wajib)', en: 'Paper 1 (2–3 High-Frequency Questions)' },
      concepts: [
        {
          title: { bm: '1. Hukum Indeks & Persamaan Indeks (Termasuk Gantian u = aˣ)', en: '1. Laws of Indices & Index Equations (u = aˣ Method)' },
          prereq: {
            bm: 'Ingat kuasa dari Tingkatan 3 ($2^3 = 2 \\times 2 \\times 2 = 8$)? Bayangkan melipat sehelai kertas berkali-kali — setiap lipatan menggandakan ketebalan ($\\times 2$).\n\nDari pola bahagi: $2^3 \\div 2^3 = \\frac{8}{8} = 1$, tetapi ikut hukum tolak kuasa ia ialah $2^{3-3} = 2^0$ — sebab itulah **$a^0 = 1$**! Dan $2^{-2} = \\frac{1}{2^2} = \\frac{1}{4}$ (**salingan / pecahan**, BUKAN nombor negatif $-4$!).',
            en: 'Remember powers from Form 3 ($2^3 = 2 \\times 2 \\times 2 = 8$)? Think of folding a sheet of paper repeatedly — each fold multiplies the thickness ($\\times 2$).\n\nFrom division: $2^3 \\div 2^3 = \\frac{8}{8} = 1$, while subtracting powers gives $2^{3-3} = 2^0$ — that is why **$a^0 = 1$**! And $2^{-2} = \\frac{1}{2^2} = \\frac{1}{4}$ (**reciprocal fraction**, NEVER negative $-4$!).'
          },
          body: {
            bm: 'Terdapat DUA jenis persamaan indeks dalam SPM:\n• **Jenis A (Darab / Bahagi sahaja)**: Pecahkan semua asas kepada asas perdana terkecil ($4 = 2^2, 8 = 2^3, 9 = 3^2, 27 = 3^3$), gabungkan menjadi satu kuasa di kiri dan kanan ($a^m = a^n$), lalu samakan indeks ($m = n$).\n• **Jenis B (Ada tanda $+$ atau $-$ di antara sebutan $a^x$)**: Contohnya $3^{2x} - 12(3^x) + 27 = 0$. Awak tidak boleh terus guna $\\log$! Tulis $3^{2x} = (3^x)^2$, biar **$u = 3^x$**, selesaikan kuadratik $u$, kemudian tukar balik ke $3^x$.',
            en: 'There are TWO types of index equations in SPM:\n• **Type A (Multiply / Divide only)**: Break every base down into its smallest prime base ($4 = 2^2, 8 = 2^3, 9 = 3^2, 27 = 3^3$), merge into one power per side ($a^m = a^n$), then equate exponents ($m = n$).\n• **Type B (Has $+$ or $-$ between $a^x$ terms)**: e.g. $3^{2x} - 12(3^x) + 27 = 0$. You cannot take $\\log$ across $+$/$-$! Rewrite $3^{2x} = (3^x)^2$, let **$u = 3^x$**, solve the quadratic in $u$, then convert back to $3^x$.'
          },
          firstStep: {
            bm: '1. **Tukar asas nombor besar kepada asas perdana** ($4 \\rightarrow 2^2, 8 \\rightarrow 2^3, 9 \\rightarrow 3^2, 27 \\rightarrow 3^3, 125 \\rightarrow 5^3$).\n2. **Hanya ada $\\times$ atau $\\div$?** Gabungkan kuasa menggunakan $a^m \\times a^n = a^{m+n}$ dan samakan indeks.\n3. **Ada tambah/tolak antara sebutan $a^x$?** Gunakan penggantian kuadratik **$u = a^x$**!',
            en: '1. **Rewrite composite bases as prime powers** ($4 \\rightarrow 2^2, 8 \\rightarrow 2^3, 9 \\rightarrow 3^2, 27 \\rightarrow 3^3, 125 \\rightarrow 5^3$).\n2. **Only $\\times$ or $\\div$?** Merge exponents via $a^m \\times a^n = a^{m+n}$ and equate powers.\n3. **Terms with $a^x$ are added/subtracted?** Use quadratic substitution **$u = a^x$**!'
          },
          formulas: [
            { label: { bm: 'Hukum Indeks Teras', en: 'Core Index Laws' }, tex: 'a^m \\times a^n = a^{m+n}, \\quad a^m \\div a^n = a^{m-n}, \\quad (a^m)^n = a^{mn}' },
            { label: { bm: 'Indeks Sifar, Negatif & Pecahan', en: 'Zero, Negative & Fractional Indices' }, tex: 'a^0 = 1 \\;(a \\ne 0), \\quad a^{-n} = \\frac{1}{a^n}, \\quad a^{\\frac{m}{n}} = (\\sqrt[n]{a})^m' },
            {
              label: { bm: 'Gantian Kuadratik Indeks', en: 'Quadratic Index Substitution' },
              tex: {
                bm: 'a^{2x} = (a^x)^2 = u^2 \\quad (\\text{di mana } u = a^x)',
                en: 'a^{2x} = (a^x)^2 = u^2 \\quad (\\text{where } u = a^x)'
              }
            }
          ],
          workedExample: {
            title: { bm: 'Contoh Terpandu: Persamaan Indeks Bentuk Kuadratik (u = 3ˣ)', en: 'Worked Example: Quadratic-Type Index Equation (u = 3ˣ)' },
            problem: {
              bm: 'Selesaikan persamaan indeks $3^{2x} - 12(3^x) + 27 = 0$.',
              en: 'Solve the index equation $3^{2x} - 12(3^x) + 27 = 0$.'
            },
            steps: [
              {
                label: { bm: 'Tulis semula $3^{2x}$ sebagai $(3^x)^2$ dan biar $u = 3^x$', en: 'Rewrite $3^{2x}$ as $(3^x)^2$ and let $u = 3^x$' },
                tex: '(3^x)^2 - 12(3^x) + 27 = 0 \\implies u^2 - 12u + 27 = 0',
                why: {
                  bm: 'Oleh sebab $(a^x)^2 = a^{2x}$, ungkapan ini bertukar menjadi persamaan kuadratik biasa dalam $u$.',
                  en: 'Since $(a^x)^2 = a^{2x}$, this becomes a standard quadratic equation in $u$.'
                }
              },
              {
                label: { bm: 'Faktorkan kuadratik dalam $u$ dan cari kedua-dua nilai $u$', en: 'Factorize the quadratic in $u$ to find both $u$ values' },
                tex: {
                  bm: '(u - 3)(u - 9) = 0 \\implies u = 3 \\quad \\text{atau} \\quad u = 9',
                  en: '(u - 3)(u - 9) = 0 \\implies u = 3 \\quad \\text{or} \\quad u = 9'
                },
                why: {
                  bm: 'Kedua-dua $u = 3$ dan $u = 9$ adalah positif (perhatikan: jika $u \\le 0$, ia mesti ditolak kerana $3^x > 0$ sentiasa!).',
                  en: 'Both $u = 3$ and $u = 9$ are positive (note: any $u \\le 0$ must be rejected since $3^x > 0$ always!).'
                }
              },
              {
                label: { bm: 'Gantikan semula $u = 3^x$ dan samakan asas', en: 'Substitute back $u = 3^x$ and match bases' },
                tex: {
                  bm: '3^x = 3^1 \\quad \\text{atau} \\quad 3^x = 3^2',
                  en: '3^x = 3^1 \\quad \\text{or} \\quad 3^x = 3^2'
                },
                why: {
                  bm: 'Tulis $9$ sebagai $3^2$ supaya kedua-dua belah mempunyai asas $3$ yang sama.',
                  en: 'Write $9$ as $3^2$ so both sides share base $3$.'
                }
              },
              {
                label: { bm: 'Samakan indeks untuk mendapat jawapan akhir $x$', en: 'Equate exponents to get the final values of $x$' },
                tex: 'x = 1, \\quad x = 2',
                why: {
                  bm: 'Semak: $3^2 - 12(3) + 27 = 9 - 36 + 27 = 0$ tepat!',
                  en: 'Check: $3^2 - 12(3) + 27 = 9 - 36 + 27 = 0$ verified!'
                }
              }
            ],
            trap: {
              bm: 'Jangan keliru $(3^x)^2 = 3^{x^2}$ (sepatutnya $3^{2x}$!), dan jangan menulis $3^x = 9 \\implies x = 3$ (sepatutnya $3^2 = 9 \\implies x = 2$)!',
              en: 'Never write $(3^x)^2 = 3^{x^2}$ (it is $3^{2x}$!), and never write $3^x = 9 \\implies x = 3$ ($3^2 = 9 \\implies x = 2$!).'
            }
          },
          tip: {
            bm: '$a^0 = 1$ bagi sebarang $a \\ne 0$, dan $a^{-n} = \\frac{1}{a^n}$ (pecahan positif, BUKAN nombor negatif!).',
            en: '$a^0 = 1$ for any $a \\ne 0$, and $a^{-n} = \\frac{1}{a^n}$ (a reciprocal fraction, NOT negative!).'
          }
        },
        {
          title: { bm: '2. Surd, Permudahkan Surd & Konjugat', en: '2. Surds, Simplifying Radicals & Conjugates' },
          prereq: {
            bm: '**Nombor Nisbah vs Tak Nisbah**: $\\sqrt{9} = 3$ dan $0.25 = \\frac{1}{4}$ ialah nombor nisbah (boleh ditulis sebagai pecahan tepat). Sebaliknya, $\\sqrt{2} = 1.4142135\\dots$ tidak pernah tamat atau berulang — itulah **Surd** (nombor tak nisbah dalam bentuk punca)!\n\n**Analogi Stokin Kembar**: Untuk memudahkan $\\sqrt{48}$, cari nombor kuasa dua sempurna terbesar ($4, 9, 16, 25, 36, 49$) yang boleh membahagi $48$. Oleh sebab $48 = 16 \\times 3$, kembar $4 \\times 4$ keluar dari mesin basuh $\\sqrt{\\phantom{x}}$ menjadi satu nombor $4$ di luar: $\\sqrt{48} = 4\\sqrt{3}$!',
            en: '**Rational vs Irrational Numbers**: $\\sqrt{9} = 3$ and $0.25 = \\frac{1}{4}$ are rational (exact fractions). In contrast, $\\sqrt{2} = 1.4142135\\dots$ never ends or repeats — that is a **Surd**!\n\n**Twin Socks Analogy**: To simplify $\\sqrt{48}$, find the largest perfect square ($4, 9, 16, 25, 36, 49$) inside $48$. Since $48 = 16 \\times 3$, the twin pair $4 \\times 4$ comes out of the square-root washing machine as a single $4$: $\\sqrt{48} = 4\\sqrt{3}$!'
          },
          body: {
            bm: 'Tiga kemahiran teras surd:\n• **Tambah/Tolak Surd Serupa**: Permudahkan setiap surd dahulu supaya bahagian dalam $\\sqrt{\\phantom{x}}$ sama, kemudian gabungkan pekali seperti algebra: $4\\sqrt{3} + 2\\sqrt{3} = 6\\sqrt{3}$ (tetapi $\\sqrt{3} + \\sqrt{2}$ TIDAK boleh digabungkan!).\n• **Menisbahkan Penyebut (Konjugat)**: Untuk menghapuskan surd di bawah pecahan $\\frac{k}{a + \\sqrt{b}}$, darab pengangka dan penyebut dengan **konjugat** $a - \\sqrt{b}$ supaya $(a + \\sqrt{b})(a - \\sqrt{b}) = a^2 - b$.\n• **Semakan Punca Palsu (Extraneous Roots)**: Apabila awak mengkuasaduakan kedua-dua belah persamaan surd seperti $\\sqrt{x + 6} = x$, punca negatif palsu boleh muncul! WAJIB uji semua jawapan ke dalam persamaan asal.',
            en: 'Three core surd skills:\n• **Add/Subtract Like Surds**: Simplify every radical first to match the number inside $\\sqrt{\\phantom{x}}$, then combine coefficients just like algebra: $4\\sqrt{3} + 2\\sqrt{3} = 6\\sqrt{3}$ (whereas $\\sqrt{3} + \\sqrt{2}$ CANNOT merge!).\n• **Rationalizing with Conjugates**: To clear a surd from the denominator $\\frac{k}{a + \\sqrt{b}}$, multiply top and bottom by the **conjugate** $a - \\sqrt{b}$ so $(a + \\sqrt{b})(a - \\sqrt{b}) = a^2 - b$.\n• **Extraneous Root Check**: Squaring both sides of a surd equation like $\\sqrt{x + 6} = x$ can invent fake roots! ALWAYS plug each answer back into the original equation (remember $\\sqrt{\\dots} \\ge 0$).'
          },
          firstStep: {
            bm: '1. **Permudahkan surd besar**: Bahagikan nombor dalam $\\sqrt{\\phantom{x}}$ dengan $4, 9, 16, 25, 36, 49$.\n2. **Penyebut ada $a + \\sqrt{b}$?** Darab atas dan bawah dengan konjugat $a - \\sqrt{b}$ (tukar tanda tengah sahaja!).\n3. **Kuasa dua kedua-dua belah persamaan surd?** Selepas mendapat punca, sentiasa ganti balik ke persamaan asal untuk tolak jawapan yang menjadikan sebelah kanan negatif!',
            en: '1. **Simplify big radicals**: Divide the number inside $\\sqrt{\\phantom{x}}$ by $4, 9, 16, 25, 36, 49$.\n2. **Denominator has $a + \\sqrt{b}$?** Multiply top and bottom by conjugate $a - \\sqrt{b}$ (flip the middle sign only!).\n3. **Squared both sides of a surd equation?** Always check each root in the original equation and reject any root making the RHS negative!'
          },
          formulas: [
            { label: { bm: 'Permudahkan & Surd Serupa', en: 'Simplifying & Like Surds' }, tex: '\\sqrt{ab} = \\sqrt{a}\\sqrt{b}, \\quad \\sqrt{48} = \\sqrt{16\\times 3} = 4\\sqrt{3}, \\quad p\\sqrt{c} + q\\sqrt{c} = (p+q)\\sqrt{c}' },
            { label: { bm: 'Penisbahan Konjugat', en: 'Conjugate Rationalization' }, tex: '\\frac{k}{a + \\sqrt{b}} = \\frac{k(a - \\sqrt{b})}{(a + \\sqrt{b})(a - \\sqrt{b})} = \\frac{k(a - \\sqrt{b})}{a^2 - b}' }
          ],
          workedExample: {
            title: { bm: 'Contoh Terpandu: Persamaan Surd & Punca Palsu', en: 'Worked Example: Surd Equation & Extraneous Root Check' },
            problem: {
              bm: 'Selesaikan persamaan surd $\\sqrt{x + 6} = x$.',
              en: 'Solve the surd equation $\\sqrt{x + 6} = x$.'
            },
            steps: [
              {
                label: { bm: 'Kuasa duakan kedua-dua belah untuk menghapuskan $\\sqrt{\\phantom{x}}$', en: 'Square both sides to remove the square root' },
                tex: '(\\sqrt{x + 6})^2 = x^2 \\implies x + 6 = x^2',
                why: {
                  bm: 'Punca kuasa dua sudah diasingkan seorang diri di sebelah kiri, jadi kuasa dua menghapuskannya terus.',
                  en: 'The square root is already isolated on the LHS, so squaring clears it cleanly.'
                }
              },
              {
                label: { bm: 'Susun menjadi bentuk kuadratik $= 0$ dan faktorkan', en: 'Rearrange into quadratic form $= 0$ and factorize' },
                tex: {
                  bm: 'x^2 - x - 6 = 0 \\implies (x - 3)(x + 2) = 0 \\implies x = 3 \\; \\text{atau} \\; x = -2',
                  en: 'x^2 - x - 6 = 0 \\implies (x - 3)(x + 2) = 0 \\implies x = 3 \\; \\text{or} \\; x = -2'
                },
                why: {
                  bm: 'Pindahkan $x + 6$ ke sebelah kanan untuk mengekalkan pekali $x^2$ positif.',
                  en: 'Move $x + 6$ to the right side to keep the $x^2$ coefficient positive.'
                }
              },
              {
                label: { bm: 'Uji kedua-dua nilai dalam persamaan asal $\\sqrt{x + 6} = x$', en: 'Check BOTH values in the original equation $\\sqrt{x + 6} = x$' },
                tex: {
                  bm: 'x = 3: \\; \\sqrt{3+6} = \\sqrt{9} = 3 \\;(\\checkmark); \\qquad x = -2: \\; \\sqrt{-2+6} = \\sqrt{4} = +2 \\ne -2 \\;(\\text{ditolak})',
                  en: 'x = 3: \\; \\sqrt{3+6} = \\sqrt{9} = 3 \\;(\\checkmark); \\qquad x = -2: \\; \\sqrt{-2+6} = \\sqrt{4} = +2 \\ne -2 \\;(\\text{rejected})'
                },
                why: {
                  bm: 'Simbol $\\sqrt{4}$ sentiasa bermaksud punca positif $+2$, bukannya $-2$. Jadi $x = -2$ ialah punca palsu dan mesti ditolak!',
                  en: 'The radical $\\sqrt{4}$ always means the principal positive root $+2$, never $-2$. So $x = -2$ is extraneous and rejected!'
                }
              },
              {
                label: { bm: 'Nyatakan penyelesaian tunggal yang sah', en: 'State the single valid solution' },
                tex: 'x = 3',
                why: {
                  bm: 'Hanya $x = 3$ memenuhi persamaan asal.',
                  en: 'Only $x = 3$ satisfies the original equation.'
                }
              }
            ],
            trap: {
              bm: 'Jangan tulis $\\sqrt{a + b} = \\sqrt{a} + \\sqrt{b}$ (contoh: $\\sqrt{9 + 16} = \\sqrt{25} = 5 \\ne 3 + 4$!), dan jangan lupa menolak $x = -2$ dalam persamaan surd!',
              en: 'Never write $\\sqrt{a + b} = \\sqrt{a} + \\sqrt{b}$ (e.g. $\\sqrt{9 + 16} = 5 \\ne 3 + 4$!), and never forget to reject $x = -2$ in surd equations!'
            }
          },
          tip: {
            bm: 'Sentiasa permudahkan surd dahulu sebelum menambah: $\\sqrt{12} + \\sqrt{27} = 2\\sqrt{3} + 3\\sqrt{3} = 5\\sqrt{3}$!',
            en: 'Always simplify surds first before adding: $\\sqrt{12} + \\sqrt{27} = 2\\sqrt{3} + 3\\sqrt{3} = 5\\sqrt{3}$!'
          }
        },
        {
          title: { bm: '3. Hukum Logaritma, Tukar Asas & ln x', en: '3. Logarithm Laws, Change of Base & ln x' },
          prereq: {
            bm: 'Logaritma hanyalah **songsangan kepada indeks**: soalan "$\\log_{10} 100 = \\;?$" sebenarnya bertanya **"10 kuasa BERAPA menghasilkan 100?"** Jawapannya $2$ kerana $10^2 = 100$!\n\nBayangkan $\\log_a N$ sebagai butang **"Cari Kuasa"**. Perhatikan syarat domain wajib: dalam $\\log_a N$, nombor di dalam log **$N > 0$** sentiasa positif (tidak boleh $0$ atau negatif!), dan asas **$a > 0, a \\ne 1$**.',
            en: 'Logarithms are simply **indices in reverse**: asking "$\\log_{10} 100 = \\;?$" literally asks **"10 to WHAT power gives 100?"** Answer: $2$, because $10^2 = 100$!\n\nThink of $\\log_a N$ as the **"Find the Exponent"** button. Crucial domain rule: in $\\log_a N$, the inside number **$N > 0$** must be strictly positive (never $0$ or negative!), and base **$a > 0, a \\ne 1$**.'
          },
          body: {
            bm: 'Hukum teras logaritma untuk memerah beberapa log menjadi SATU log (atau memecahkan satu log):\n• **Darab $\\leftrightarrow$ Tambah**: $\\log_a(mn) = \\log_a m + \\log_a n$.\n• **Bahagi $\\leftrightarrow$ Tolak**: $\\log_a\\left(\\frac{m}{n}\\right) = \\log_a m - \\log_a n$.\n• **Kuasa turun ke depan**: $\\log_a(m^p) = p\\log_a m$.\n• **Log asli ($\\ln x$)**: $\\ln x = \\log_e x$ dengan $e \\approx 2.71828$, $\\ln e = 1$, $\\ln 1 = 0$.\n• **Tukar Asas**: Apabila asas berbeza bercampur (seperti $\\log_2 x$ dan $\\log_4 x$ atau $\\log_x 2$), tukar semua kepada satu asas yang sama menggunakan $\\log_a b = \\frac{\\log_c b}{\\log_c a}$ dan $\\log_x a = \\frac{1}{\\log_a x}$.',
            en: 'Core logarithm laws to merge multiple logs into ONE log (or split one log apart):\n• **Multiply $\\leftrightarrow$ Add**: $\\log_a(mn) = \\log_a m + \\log_a n$.\n• **Divide $\\leftrightarrow$ Subtract**: $\\log_a\\left(\\frac{m}{n}\\right) = \\log_a m - \\log_a n$.\n• **Power drops to front**: $\\log_a(m^p) = p\\log_a m$.\n• **Natural log ($\\ln x$)**: $\\ln x = \\log_e x$ ($e \\approx 2.71828$), so $\\ln e = 1$ and $\\ln 1 = 0$.\n• **Change of Base**: When different bases mix (like $\\log_2 x$ with $\\log_4 x$ or $\\log_x 2$), convert everything to one matching base using $\\log_a b = \\frac{\\log_c b}{\\log_c a}$ and $\\log_x a = \\frac{1}{\\log_a x}$.'
          },
          firstStep: {
            bm: '1. **Asas berbeza?** Gunakan Rumus Tukar Asas dahulu supaya semua $\\log$ berkongsi asas yang sama.\n2. **Banyak $\\log$ pada satu sisi?** Naikkan pekali di depan menjadi kuasa ($p\\log m \\rightarrow \\log m^p$), lalu gabungkan menjadi SATU $\\log$ (`+ → ×`, `− → ÷`).\n3. **Tinggal $\\log_a(N) = k$?** Tukar ke bentuk indeks **$N = a^k$**, selesaikan $x$, dan **tolak mana-mana $x$ yang membuat bahagian dalam $\\log \\le 0$**!',
            en: '1. **Mixed bases?** Apply Change of Base first so every $\\log$ shares the same base.\n2. **Multiple logs on one side?** Move front numbers up as powers ($p\\log m \\rightarrow \\log m^p$), then merge into ONE $\\log$ (`+ → ×`, `− → ÷`).\n3. **Down to $\\log_a(N) = k$?** Convert to index form **$N = a^k$**, solve for $x$, and **reject any $x$ making any log argument $\\le 0$**!'
          },
          formulas: [
            { label: { bm: 'Hubungan Indeks–Logaritma', en: 'Index–Logarithm Equivalence' }, tex: 'N = a^x \\iff x = \\log_a N, \\qquad \\log_a a = 1, \\quad \\log_a 1 = 0' },
            { label: { bm: 'Hukum Darab, Bahagi & Kuasa', en: 'Product, Quotient & Power Laws' }, tex: '\\log_a(mn) = \\log_a m + \\log_a n, \\quad \\log_a\\left(\\frac{m}{n}\\right) = \\log_a m - \\log_a n, \\quad \\log_a(m^p) = p\\log_a m' },
            { label: { bm: 'Rumus Tukar Asas & ln', en: 'Change of Base & Natural Log' }, tex: '\\log_a b = \\frac{\\log_c b}{\\log_c a} = \\frac{1}{\\log_b a}, \\qquad \\ln x = \\log_e x, \\; \\ln e = 1' }
          ],
          workedExample: {
            title: { bm: 'Contoh Terpandu: Persamaan Logaritma & Tolak Punca Negatif', en: 'Worked Example: Log Equation & Rejecting Invalid Roots' },
            problem: {
              bm: 'Selesaikan persamaan logaritma $\\log_2(x + 2) + \\log_2(x - 1) = 2$.',
              en: 'Solve the logarithmic equation $\\log_2(x + 2) + \\log_2(x - 1) = 2$.'
            },
            steps: [
              {
                label: { bm: 'Gabungkan dua $\\log$ menggunakan Hukum Hasil Darab ($+ \\rightarrow \\times$)', en: 'Merge the two logs using the Product Law ($+ \\rightarrow \\times$)' },
                tex: '\\log_2[(x + 2)(x - 1)] = 2',
                why: {
                  bm: 'Asas kedua-duanya sama ($2$), jadi tambah menjadi darab di dalam satu $\\log_2$.',
                  en: 'Both logs share base $2$, so addition merges into multiplication inside one $\\log_2$.'
                }
              },
              {
                label: { bm: 'Tukar daripada bentuk log kepada bentuk indeks ($N = a^k$)', en: 'Convert from log form to index form ($N = a^k$)' },
                tex: '(x + 2)(x - 1) = 2^2 = 4',
                why: {
                  bm: 'Jangan tulis $= 2$ sahaja! Asas $2$ menolak kuasa $2$ menjadi $2^2 = 4$.',
                  en: 'Do not leave RHS as $2$! Base $2$ raised to power $2$ gives $2^2 = 4$.'
                }
              },
              {
                label: { bm: 'Kembangkan, susun $= 0$, dan faktorkan', en: 'Expand, set $= 0$, and factorize' },
                tex: 'x^2 + x - 2 = 4 \\implies x^2 + x - 6 = 0 \\implies (x - 2)(x + 3) = 0',
                why: {
                  bm: 'Maka calon punca ialah $x = 2$ dan $x = -3$.',
                  en: 'So the candidate roots are $x = 2$ and $x = -3$.'
                }
              },
              {
                label: { bm: 'Semak syarat domain ($N > 0$) untuk kedua-dua punca', en: 'Check the log domain ($N > 0$) for both candidates' },
                tex: {
                  bm: 'x = 2: \\; x-1 = 1 > 0 \\;(\\checkmark); \\qquad x = -3: \\; x-1 = -4 \\le 0 \\;(\\text{ditolak}) \\implies x = 2',
                  en: 'x = 2: \\; x-1 = 1 > 0 \\;(\\checkmark); \\qquad x = -3: \\; x-1 = -4 \\le 0 \\;(\\text{rejected}) \\implies x = 2'
                },
                why: {
                  bm: '$\\log_2(-4)$ tidak tertakrif! Oleh itu $x = -3$ wajib ditolak dan $x = 2$ ialah satu-satunya jawapan.',
                  en: '$\\log_2(-4)$ is undefined! Therefore $x = -3$ must be rejected and $x = 2$ is the only valid answer.'
                }
              }
            ],
            trap: {
              bm: 'Jangan biarkan $x = -3$ sebagai jawapan akhir, dan jangan tulis $\\log_2(x+2)$ sebagai $\\log_2 x + \\log_2 2$!',
              en: 'Never keep $x = -3$ as a final answer, and never split $\\log_2(x+2)$ into $\\log_2 x + \\log_2 2$!'
            }
          },
          tip: {
            bm: 'Apabila diberi persamaan dengan asas $\\log_a x$ dan $\\log_x a$, tukar $\\log_x a = \\frac{1}{\\log_a x}$ dan biar $u = \\log_a x$!',
            en: 'When an equation mixes $\\log_a x$ and $\\log_x a$, rewrite $\\log_x a = \\frac{1}{\\log_a x}$ and let $u = \\log_a x$!'
          }
        }
      ],
      traps: [
        {
          title: { bm: 'Kembangkan log(x + y) atau √(a + b) Secara Salah', en: 'Falsely Expanding log(x + y) or √(a + b)' },
          desc: {
            bm: '$\\log_a(x + y)$ dan $\\sqrt{a + b}$ TIADA rumus pengembangan! Hanya darab di dalam log menjadi tambah: $\\log_a(xy) = \\log_a x + \\log_a y$.',
            en: '$\\log_a(x + y)$ and $\\sqrt{a + b}$ have NO addition-splitting rule! Only multiplication inside log splits into addition: $\\log_a(xy) = \\log_a x + \\log_a y$.'
          }
        },
        {
          title: { bm: 'Menerima Punca Palsu / Negatif dalam Persamaan Surd & Logaritma', en: 'Keeping Extraneous / Invalid Roots in Surd & Log Equations' },
          desc: {
            bm: 'Sentiasa semak semula jawapan ke dalam persamaan asal: nombor di dalam $\\log_a(N)$ wajib $N > 0$, dan $\\sqrt{u} = \\text{RHS}$ wajib $\\text{RHS} \\ge 0$.',
            en: 'Always check candidate roots in the original equation: log arguments require $N > 0$, and $\\sqrt{u} = \\text{RHS}$ requires $\\text{RHS} \\ge 0$.'
          }
        },
        {
          title: { bm: 'Menyangka a⁻ⁿ = −aⁿ atau a⁰ = 0', en: 'Writing a⁻ⁿ = −aⁿ or a⁰ = 0' },
          desc: {
            bm: 'Indeks negatif ialah **pecahan salingan** ($a^{-n} = \\frac{1}{a^n}$), bukan tanda negatif di hadapan! Dan sebarang nombor bukan sifar kuasa sifar ialah $1$ ($a^0 = 1$).',
            en: 'A negative index is a **reciprocal** ($a^{-n} = \\frac{1}{a^n}$), NOT a negative number! And any non-zero base to power zero equals $1$ ($a^0 = 1$).'
          }
        }
      ],
      solvers: [
        {
          id: 'surd-rationalizer',
          title: { bm: 'Kalkulator Menisbahkan Penyebut Surd k / (a + √b)', en: 'Surd Conjugate Rationalizer k / (a + √b)' },
          desc: {
            bm: 'Hapuskan surd pada penyebut k / (a + √b) dengan mendarab pasangan konjugat kepada bentuk p + q√b.',
            en: 'Rationalize k / (a + √b) into exact simplified form p + q√b.'
          },
          inputs: [
            { id: 'k', label: { bm: 'Pengangka k', en: 'Numerator k' }, default: 14 },
            { id: 'a', label: { bm: 'Nombor bulat a', en: 'Integer term a' }, default: 3 },
            { id: 'b', label: { bm: 'Nilai dalam surd b (√b)', en: 'Radicand b in √b' }, default: 2 }
          ],
          solve: function (v, lang) {
            const k = numOr(v.k, 14);
            const a = numOr(v.a, 3);
            const b = strictNum(v.b);
            if (!Number.isFinite(b) || b <= 0) {
              return {
                problemTex: lang === 'bm' ? '\\text{Syarat Surd Nyata: } b > 0' : '\\text{Real Surd Condition: } b > 0',
                steps: [{ badge: 'P1', title: lang === 'bm' ? 'Nilai b tidak sah' : 'Invalid radicand b', tex: `b = ${Number.isFinite(b) ? b : '?'} \\le 0`, why: lang === 'bm' ? 'Nilai di dalam punca kuasa dua (√b) pada penyebut mesti lebih besar daripada 0.' : 'The radicand inside √b in the denominator must be strictly positive (b > 0).' }],
                finalTex: lang === 'bm' ? '\\text{Input Tidak Sah}' : '\\text{Invalid Input}'
              };
            }

            const denom = z0(a * a - b);
            const isPerfSq = Number.isInteger(Math.sqrt(b));
            if (isPerfSq) {
              const sb = Math.sqrt(b);
              const totalDen = z0(a + sb);
              if (totalDen === 0) {
                return {
                  problemTex: `\\frac{${k}}{${a} + \\sqrt{${b}}}`,
                  steps: [{ badge: 'P1', title: lang === 'bm' ? 'Penyebut sifar' : 'Zero denominator', tex: `${a} + \\sqrt{${b}} = ${a} + ${sb} = 0`, why: lang === 'bm' ? 'Pembahagian dengan sifar tidak tertakrif.' : 'Division by zero is undefined.' }],
                  finalTex: lang === 'bm' ? '\\text{Tak Tertakrif}' : '\\text{Undefined}'
                };
              }
              const simp = U.fracTex(k, totalDen);
              return {
                problemTex: `\\frac{${k}}{${a} + \\sqrt{${b}}}`,
                steps: [
                  { badge: 'P1', title: lang === 'bm' ? `Langkah 1: √${b} ialah nombor nisbah (${sb})` : `Step 1: √${b} is already rational (${sb})`, tex: `\\sqrt{${b}} = ${sb} \\implies ${a} + \\sqrt{${b}} = ${a} + ${sb} = ${totalDen}`, why: lang === 'bm' ? `${b} ialah kuasa dua sempurna, jadi tiada surd konjugat diperlukan.` : `${b} is a perfect square, so no conjugate is needed.` },
                  { badge: 'J1', title: lang === 'bm' ? 'Langkah 2: Permudahkan pecahan' : 'Step 2: Simplify fraction', tex: `\\frac{${k}}{${totalDen}} = ${simp}`, why: lang === 'bm' ? 'Ringkaskan pengangka dan penyebut.' : 'Reduce the fraction to lowest terms.' }
                ],
                finalTex: simp
              };
            }

            if (denom === 0) {
              return {
                problemTex: `\\frac{${k}}{${a} + \\sqrt{${b}}}`,
                steps: [{ badge: 'P1', title: lang === 'bm' ? 'Penyebut sifar (a² = b)' : 'Zero denominator (a² = b)', tex: `${a}^2 - ${b} = 0`, why: lang === 'bm' ? 'Pembahagian dengan sifar tidak tertakrif.' : 'Division by zero is undefined.' }],
                finalTex: lang === 'bm' ? '\\text{Tak Tertakrif}' : '\\text{Undefined}'
              };
            }

            if (k === 0) {
              return {
                problemTex: `\\frac{0}{${a === 0 ? `\\sqrt{${b}}` : `${a} + \\sqrt{${b}}`}}`,
                steps: [{ badge: 'J1', title: lang === 'bm' ? 'Pengangka sifar' : 'Zero numerator', tex: `\\frac{0}{${a === 0 ? `\\sqrt{${b}}` : `${a} + \\sqrt{${b}}`}} = 0`, why: lang === 'bm' ? 'Sifar dibahagi sebarang nombor bukan sifar sentiasa 0.' : 'Zero divided by any non-zero denominator equals 0.' }],
                finalTex: '0'
              };
            }

            if (a === 0) {
              const coeffTex = U.fracTex(k, b);
              const surdPart = coeffTex === '1' ? `\\sqrt{${b}}` : (coeffTex === '-1' ? `-\\sqrt{${b}}` : `${coeffTex}\\sqrt{${b}}`);
              let sqOut = 1;
              let remB = b;
              if (Number.isInteger(b) && b > 1) {
                for (let s = Math.floor(Math.sqrt(b)); s >= 2; s--) {
                  if (b % (s * s) === 0) {
                    sqOut = s;
                    remB = b / (s * s);
                    break;
                  }
                }
              }
              let finalSurd = surdPart;
              let step3Tex = surdPart;
              if (sqOut > 1) {
                const simpCoeff = U.fracTex(k * sqOut, b);
                finalSurd = simpCoeff === '1' ? `\\sqrt{${remB}}` : (simpCoeff === '-1' ? `-\\sqrt{${remB}}` : `${simpCoeff}\\sqrt{${remB}}`);
                const midTerm = coeffTex === '1'
                  ? `${sqOut}\\sqrt{${remB}}`
                  : (coeffTex === '-1' ? `-${sqOut}\\sqrt{${remB}}` : `${coeffTex}(${sqOut}\\sqrt{${remB}})`);
                step3Tex = midTerm === finalSurd ? `${surdPart} = ${finalSurd}` : `${surdPart} = ${midTerm} = ${finalSurd}`;
              }
              return {
                problemTex: `\\frac{${k}}{\\sqrt{${b}}}`,
                steps: [
                  { badge: 'P1', title: lang === 'bm' ? 'Langkah 1: Darab atas dan bawah dengan √b' : 'Step 1: Multiply top & bottom by √b', tex: `\\frac{${k}}{\\sqrt{${b}}} \\times \\frac{\\sqrt{${b}}}{\\sqrt{${b}}}`, why: lang === 'bm' ? 'Apabila a = 0, hanya perlu darab dengan √b sendiri.' : 'When a = 0, multiplying by √b clears the radical immediately.' },
                  { badge: 'K1', title: lang === 'bm' ? 'Langkah 2: (√b)² = b' : 'Step 2: Apply (√b)² = b', tex: `\\frac{${k}\\sqrt{${b}}}{${b}}`, why: lang === 'bm' ? 'Penyebut kini menjadi nombor bulat.' : 'The denominator is now rational.' },
                  { badge: 'J1', title: lang === 'bm' ? 'Langkah 3: Ringkaskan pecahan & surd' : 'Step 3: Simplify fraction & surd', tex: step3Tex, why: lang === 'bm' ? 'Permudahkan pekali pecahan dan keluarkan faktor kuasa dua sempurna daripada surd jika ada.' : 'Reduce the fraction coefficient and extract any perfect-square factor from the surd.' }
                ],
                finalTex: finalSurd
              };
            }

            const aParen = a < 0 ? `(${a})` : `${a}`;
            const num1 = z0(k * a);
            const num2Sign = -k >= 0 ? ' + ' : ' - ';
            const num2Mag = Math.abs(k) === 1 ? '' : `${Math.abs(k)}`;
            const numExpanded = `${num1}${num2Sign}${num2Mag}\\sqrt{${b}}`;

            const pVal = z0((k * a) / denom);
            const pTex = U.fracTex(k * a, denom);
            const qNum = -k;
            const qNeg = (qNum < 0) ^ (denom < 0);
            const qAbsTex = U.fracTex(Math.abs(qNum), Math.abs(denom));
            const surdCoeff = qAbsTex === '1' ? '' : qAbsTex;
            const rawSplit = pVal === 0
              ? `${qNeg ? '-' : ''}${surdCoeff}\\sqrt{${b}}`
              : `${pTex} ${qNeg ? '-' : '+'} ${surdCoeff}\\sqrt{${b}}`;

            let sqOut = 1;
            let remB = b;
            if (Number.isInteger(b) && b > 1) {
              for (let s = Math.floor(Math.sqrt(b)); s >= 2; s--) {
                if (b % (s * s) === 0) {
                  sqOut = s;
                  remB = b / (s * s);
                  break;
                }
              }
            }
            let cleanFinal = rawSplit;
            let step3Tex = rawSplit;
            if (sqOut > 1) {
              const qAbsSimpTex = U.fracTex(Math.abs(qNum) * sqOut, Math.abs(denom));
              const simpSurdCoeff = qAbsSimpTex === '1' ? '' : qAbsSimpTex;
              cleanFinal = pVal === 0
                ? `${qNeg ? '-' : ''}${simpSurdCoeff}\\sqrt{${remB}}`
                : `${pTex} ${qNeg ? '-' : '+'} ${simpSurdCoeff}\\sqrt{${remB}}`;
              step3Tex = `${rawSplit} = ${cleanFinal}`;
            }

            return {
              problemTex: `\\frac{${k}}{${a} + \\sqrt{${b}}}`,
              steps: [
                {
                  badge: 'P1',
                  title: lang === 'bm' ? 'Langkah 1: Tentukan pasangan konjugat penyebut' : 'Step 1: Identify conjugate surd',
                  tex: `${a} - \\sqrt{${b}}`,
                  why: lang === 'bm' ? 'Tukar tanda di tengah sahaja (+ menjadi −).' : 'Flip only the middle sign (+ becomes −).'
                },
                {
                  badge: 'K1',
                  title: lang === 'bm' ? 'Langkah 2: Darab atas dan bawah & batalkan sebutan tengah' : 'Step 2: Multiply top & bottom and cancel middle surd terms',
                  tex: `\\frac{${k}(${a} - \\sqrt{${b}})}{(${a} + \\sqrt{${b}})(${a} - \\sqrt{${b}})} = \\frac{${numExpanded}}{${aParen}^2 - ${aParen}\\sqrt{${b}} + ${aParen}\\sqrt{${b}} - (\\sqrt{${b}})^2} = \\frac{${numExpanded}}{${denom}}`,
                  why: lang === 'bm' ? 'Sebutan tengah −a√b + a√b saling terhapus, meninggalkan a² − b tanpa surd di penyebut.' : 'The middle terms −a√b + a√b cancel out, leaving rational a² − b in the denominator.'
                },
                {
                  badge: 'J1',
                  title: lang === 'bm' ? 'Langkah 3: Asingkan kepada bentuk p + q√b' : 'Step 3: Split & simplify to p + q√b',
                  tex: step3Tex,
                  why: lang === 'bm' ? 'Bahagikan kedua-dua sebutan pengangka dengan penyebut dan ringkaskan pecahan serta faktor kuasa dua sempurna surd.' : 'Divide both numerator terms by the denominator, reduce fractions, and extract any perfect-square factor from the surd.'
                }
              ],
              finalTex: cleanFinal,
              trapWarning: lang === 'bm'
                ? 'Sentiasa darab KEDUA-DUA pengangka dan penyebut dengan konjugat $a - \\sqrt{b}$, jangan ubah tanda di bawah sahaja!'
                : 'Always multiply BOTH numerator and denominator by the conjugate $a - \\sqrt{b}$, never only the bottom!'
            };
          }
        },
        {
          id: 'log-base-solver',
          title: { bm: 'Kalkulator Penukaran Asas Logaritma logₐ b', en: 'Logarithm Change of Base Explorer logₐ b' },
          desc: {
            bm: 'Kira nilai tepat logₐ b menggunakan penukaran asas kepada log₁₀ dan ln.',
            en: 'Compute logₐ b step-by-step via Change of Base to log₁₀ and ln.'
          },
          inputs: [
            { id: 'a', label: { bm: 'Asas a (a > 0, a ≠ 1)', en: 'Base a (a > 0, a ≠ 1)' }, default: 4 },
            { id: 'b', label: { bm: 'Nilai N (N > 0)', en: 'Argument N (N > 0)' }, default: 32 }
          ],
          solve: function (v, lang) {
            const a = strictNum(v.a);
            const b = strictNum(v.b);
            if (!Number.isFinite(a) || !Number.isFinite(b) || !(a > 0 && a !== 1 && b > 0)) {
              return {
                problemTex: lang === 'bm' ? '\\text{Syarat: } a > 0,\\; a \\ne 1,\\; N > 0' : '\\text{Condition: } a > 0,\\; a \\ne 1,\\; N > 0',
                steps: [{ badge: 'P1', title: lang === 'bm' ? 'Semak syarat domain logaritma' : 'Check logarithm domain conditions', tex: `a = ${Number.isFinite(a) ? a : '?'}, \\quad N = ${Number.isFinite(b) ? b : '?'}`, why: lang === 'bm' ? 'Asas a mesti positif dan bukan 1; nilai N mesti positif (> 0).' : 'Base a must be positive and ≠ 1; argument N must be strictly positive (> 0).' }],
                finalTex: lang === 'bm' ? '\\text{Input Tidak Sah}' : '\\text{Invalid Input}'
              };
            }
            const logB = Math.log10(b);
            const logA = Math.log10(a);
            const lnB = Math.log(b);
            const lnA = Math.log(a);
            const res = logB / logA;
            if (!Number.isFinite(res) || logA === 0 || lnA === 0) {
              const limMsg = lang === 'bm' ? '\\text{Had berangka terlampaui / asas terlalu hampir dengan 1}' : '\\text{Numerical limit exceeded / base too close to 1}';
              return {
                problemTex: `\\log_{${a}} ${b}`,
                steps: [{ badge: 'P1', title: lang === 'bm' ? 'Semak kejituan asas a ≠ 1' : 'Check base precision a ≠ 1', tex: limMsg, why: lang === 'bm' ? 'Asas terlalu hampir dengan 1 menyebabkan log(a) membundar kepada 0 dalam ketepatan mesin.' : 'Base is too close to 1, causing log(a) to underflow in machine precision.' }],
                finalTex: limMsg
              };
            }
            const isExact4 = (val) => Math.abs(val - U.round(val, 4)) < 1e-10;
            const fmtLogVal = (val) => {
              if (val === 0) return '0';
              if (Math.abs(U.round(val, 4)) < 1e-4) return val.toExponential(3);
              return U.roundStr(val, 4);
            };
            const eqLog = isExact4(logB) && isExact4(logA) ? '=' : '\\approx';
            const eqLn = isExact4(lnB) && isExact4(lnA) ? '=' : '\\approx';
            const eqRes = isExact4(res) ? '=' : '\\approx';
            const chkLbl = lang === 'bm' ? '\\text{Semak: }' : '\\text{Check: }';
            const logBStr = fmtLogVal(logB);
            const logAStr = fmtLogVal(logA);
            const lnBStr = fmtLogVal(lnB);
            const lnAStr = fmtLogVal(lnA);
            const resStr = fmtLogVal(res);
            return {
              problemTex: `\\log_{${a}} ${b}`,
              steps: [
                {
                  badge: 'P1',
                  title: lang === 'bm' ? 'Langkah 1: Gunakan rumus penukaran asas' : 'Step 1: Apply the Change of Base formula',
                  tex: `\\log_{${a}} ${b} = \\frac{\\log_{10} ${b}}{\\log_{10} ${a}} = \\frac{\\ln ${b}}{\\ln ${a}}`,
                  why: lang === 'bm'
                    ? `Nilai N (${b}) diletakkan di pengangka (atas), manakala asas lama a (${a}) diletakkan di penyebut (bawah).`
                    : `Argument N (${b}) goes in the numerator (top), while old base a (${a}) goes in the denominator (bottom).`
                },
                {
                  badge: 'K1',
                  title: lang === 'bm' ? 'Langkah 2: Nilaikan log₁₀ dan ln bagi pengangka dan penyebut' : 'Step 2: Evaluate log₁₀ and ln for numerator and denominator',
                  tex: `\\log_{10} ${b} ${isExact4(logB) ? '=' : '\\approx'} ${logBStr},\\; \\log_{10} ${a} ${isExact4(logA) ? '=' : '\\approx'} ${logAStr}; \\quad \\ln ${b} ${isExact4(lnB) ? '=' : '\\approx'} ${lnBStr},\\; \\ln ${a} ${isExact4(lnA) ? '=' : '\\approx'} ${lnAStr}`,
                  why: lang === 'bm'
                    ? 'Kira nilai log bagi setiap nombor secara berasingan dengan kalkulator sebelum membahagi.'
                    : 'Evaluate each logarithm separately on a scientific calculator before dividing.'
                },
                {
                  badge: 'K1',
                  title: lang === 'bm' ? 'Langkah 3: Bahagikan pengangka dengan penyebut' : 'Step 3: Divide numerator by denominator',
                  tex: `\\frac{\\log_{10} ${b}}{\\log_{10} ${a}} ${eqLog} \\frac{${logBStr}}{${logAStr}} ${eqRes} ${resStr}, \\qquad \\frac{\\ln ${b}}{\\ln ${a}} ${eqLn} \\frac{${lnBStr}}{${lnAStr}} ${eqRes} ${resStr}`,
                  why: lang === 'bm'
                    ? 'Kedua-dua log₁₀ dan ln sentiasa memberi nisbah yang sama tepat.'
                    : 'Both log₁₀ and ln always yield the exact same ratio.'
                },
                {
                  badge: 'J1',
                  title: lang === 'bm' ? 'Langkah 4: Nyatakan jawapan & semak dalam bentuk indeks' : 'Step 4: State final value & verify in index form',
                  tex: `\\log_{${a}} ${b} ${eqRes} ${resStr} \\quad \\left(${chkLbl} ${a}^{${resStr}} ${eqRes} ${b}\\right)`,
                  why: lang === 'bm'
                    ? 'Tukarkan semula kepada bentuk indeks aᵖ = N untuk mengesahkan jawapan.'
                    : 'Convert back into index form aᵖ = N to confirm the result.'
                }
              ],
              finalTex: `\\log_{${a}} ${b} ${eqRes} ${resStr}`,
              trapWarning: lang === 'bm'
                ? 'Ingat: nombor $b$ duduk di ATAS (pengangka) dan asas lama $a$ duduk di BAWAH (penyebut): $\\log_a b = \\frac{\\log b}{\\log a}$!'
                : 'Remember: argument $b$ goes on TOP and old base $a$ goes on the BOTTOM: $\\log_a b = \\frac{\\log b}{\\log a}$!'
            };
          }
        }
      ],
      generateQuestion: function (tier, lang) {
        if (tier === 1) {
          const [base, p] = U.pick([[2, 3], [3, 2], [3, 3], [4, 2], [5, 2]]);
          const target = Math.pow(base, p);
          const xAns = U.randInt(2, 10);
          const b = target - 2 * xAns;
          const innerTex = U.polyTex([{ c: 2, p: 1 }, { c: b, p: 0 }]);
          return {
            tier: 1,
            tpLabel: 'TP1–TP2',
            subtopic: { bm: '4.3 Takrif Logaritma & Indeks', en: '4.3 Log-Index Equivalence' },
            marks: 2,
            prompt: lang === 'bm'
              ? `Selesaikan persamaan logaritma $\\log_{${base}}(${innerTex}) = ${p}$.`
              : `Solve the logarithmic equation $\\log_{${base}}(${innerTex}) = ${p}$.`,
            answerType: 'number',
            correctValue: xAns,
            displayAnswerTex: `x = ${xAns}`,
            intentMeta: {
              given: { bm: `$\\log_{${base}}(${innerTex}) = ${p}$`, en: `$\\log_{${base}}(${innerTex}) = ${p}$` },
              goal: { bm: 'Tukar ke bentuk indeks dan cari nilai $x$', en: 'Convert to index form and find $x$' },
              conceptRule: { bm: '$\\log_a N = p \\iff N = a^p$', en: '$\\log_a N = p \\iff N = a^p$' }
            },
            guidedSteps: [
              { prompt: { bm: `Tukarkan $\\log_{${base}}(${innerTex}) = ${p}$ kepada bentuk indeks: berapakah nilai $${base}^{${p}}$?`, en: `Convert to index form: what is $${base}^{${p}}$?` }, expected: target, hint: { bm: `${base} kuasa ${p} ialah ${target}.`, en: `${base} to the power of ${p} is ${target}.` } },
              { prompt: { bm: `Sekarang selesaikan $2x ${U.signedNum(b)} = ${target}$. Apakah nilai $x$?`, en: `Now solve $2x ${U.signedNum(b)} = ${target}$. What is $x$?` }, expected: xAns, hint: { bm: `2x = ${target - b} ⟹ x = ${xAns}.`, en: `2x = ${target - b} ⟹ x = ${xAns}.` } }
            ],
            traps: [
              { value: (base * p - b) / 2, message: { bm: `Diagnostik Konsep [P]: Anda mendarab $${base} \\times ${p} = ${base * p}$! Ingat: $\\log_{${base}}(N) = ${p}$ bermaksud $N = ${base}^{${p}} = ${target}$ (kuasa, bukan darab!).`, en: `Concept Diagnosis [P]: You multiplied $${base} \\times ${p} = ${base * p}$! Remember $\\log_{${base}}(N) = ${p}$ means $N = ${base}^{${p}} = ${target}$ (exponent, not product!).` } }
            ],
            hints: [
              lang === 'bm' ? `Tukar ke bentuk indeks: $${innerTex} = ${base}^{${p}} = ${target}$.` : `Convert to index form: $${innerTex} = ${base}^{${p}} = ${target}$.`,
              lang === 'bm' ? `Pindahkan $${b}$ dan bahagi dengan $2$ untuk menyelesaikan $2x ${U.signedNum(b)} = ${target}$.` : `Move $${b}$ and divide by $2$ to solve $2x ${U.signedNum(b)} = ${target}$.`
            ],
            steps: [
              { badge: 'P1', title: lang === 'bm' ? 'Tukar daripada log kepada bentuk indeks' : 'Convert log form to index form', tex: `${innerTex} = ${base}^{${p}} = ${target}`, why: lang === 'bm' ? 'Asas log menjadi asas kuasa: log_a(N) = p ⟺ N = aᵖ.' : 'Log base becomes index base: log_a(N) = p ⟺ N = aᵖ.' },
              { badge: 'K1', title: lang === 'bm' ? 'Pindahkan pemalar ke sebelah kanan' : 'Move constant to the right-hand side', tex: `2x = ${target} ${U.signedNum(-b)} = ${target - b}`, why: lang === 'bm' ? 'Asingkan sebutan 2x.' : 'Isolate the 2x term.' },
              { badge: 'J1', title: lang === 'bm' ? 'Bahagi dengan 2 untuk mencari x' : 'Divide by 2 to solve for x', tex: `x = \\frac{${target - b}}{2} = ${xAns}`, why: lang === 'bm' ? `Semak: 2(${xAns}) ${U.signedNum(b)} = ${target} > 0 sah!` : `Check: 2(${xAns}) ${U.signedNum(b)} = ${target} > 0 valid!` }
            ]
          };
        } else if (tier === 2) {
          const a = U.pick([2, 3, 5]);
          const n = U.randInt(2, 6);
          const m = U.randInt(-4, 4, true);
          const xAns = 2 * n - m;
          const a2 = a * a;
          return {
            tier: 2,
            tpLabel: 'TP3–TP4',
            subtopic: { bm: '4.1 Persamaan Indeks Asas Sepunya', en: '4.1 Common-Base Index Equations' },
            marks: 3,
            prompt: lang === 'bm'
              ? `Selesaikan persamaan indeks $${a}^{3x ${U.signedNum(m)}} = ${a2}^{x + ${n}}$.`
              : `Solve the index equation $${a}^{3x ${U.signedNum(m)}} = ${a2}^{x + ${n}}$.`,
            answerType: 'number',
            correctValue: xAns,
            displayAnswerTex: `x = ${xAns}`,
            intentMeta: {
              given: { bm: `$${a}^{3x ${U.signedNum(m)}} = ${a2}^{x + ${n}}$`, en: `$${a}^{3x ${U.signedNum(m)}} = ${a2}^{x + ${n}}$` },
              goal: { bm: `Samakan asas kepada $${a}$ dan selesaikan untuk $x$`, en: `Match both bases to $${a}$ and solve for $x$` },
              conceptRule: { bm: `$(a^2)^{x+n} = a^{2(x+n)} = a^{2x+2n}$`, en: `$(a^2)^{x+n} = a^{2(x+n)} = a^{2x+2n}$` }
            },
            guidedSteps: [
              { prompt: { bm: `Tulis $${a2}$ sebagai kuasa asas $${a}$: $${a2} = ${a}^k$. Apakah nilai $k$?`, en: `Write $${a2}$ as a power of $${a}$: $${a2} = ${a}^k$. What is $k$?` }, expected: 2, hint: { bm: `${a}² = ${a2}, jadi k = 2.`, en: `${a}² = ${a2}, so k = 2.` } },
              { prompt: { bm: `Kembangkan kuasa di sebelah kanan: $2(x + ${n}) = 2x + \\;?$`, en: `Expand the RHS exponent: $2(x + ${n}) = 2x + \\;?$ ` }, expected: 2 * n, hint: { bm: `2 × ${n} = ${2 * n}.`, en: `2 × ${n} = ${2 * n}.` } },
              { prompt: { bm: `Samakan kuasa $3x ${U.signedNum(m)} = 2x + ${2 * n}$. Apakah nilai $x$?`, en: `Equate exponents $3x ${U.signedNum(m)} = 2x + ${2 * n}$. What is $x$?` }, expected: xAns, hint: { bm: `x = ${2 * n} − (${m}) = ${xAns}.`, en: `x = ${2 * n} − (${m}) = ${xAns}.` } }
            ],
            traps: [
              { value: n - m, message: { bm: `Diagnostik Kurungan [K]: Semasa menukar $(${a}^2)^{x + ${n}}$, anda menulis kuasa sebagai $2x + ${n}$ dan terlupa darab $2$ dengan $${n}$! Sepatutnya $2x + ${2 * n}$.`, en: `Bracket Diagnosis [K]: In $(${a}^2)^{x + ${n}}$, distribute $2$ to BOTH terms: $2x + ${2 * n}$, not $2x + ${n}$!` } }
            ],
            hints: [
              lang === 'bm' ? `Tulis $${a2} = ${a}^2$ supaya kedua-dua belah mempunyai asas $${a}$.` : `Rewrite $${a2} = ${a}^2$ so both sides share base $${a}$.`,
              lang === 'bm' ? `Samakan kuasa: $3x ${U.signedNum(m)} = 2(x + ${n}) = 2x + ${2 * n}$.` : `Equate exponents: $3x ${U.signedNum(m)} = 2(x + ${n}) = 2x + ${2 * n}$.`
            ],
            steps: [
              { badge: 'P1', title: lang === 'bm' ? `Tulis ${a2} dengan asas ${a} & kembangkan` : `Rewrite ${a2} in base ${a} & expand`, tex: `${a}^{3x ${U.signedNum(m)}} = (${a}^2)^{x + ${n}} = ${a}^{2x + ${2 * n}}`, why: lang === 'bm' ? 'Gunakan (aᵐ)ⁿ = aᵐⁿ dan darab 2 ke dalam kedua-dua x dan ' + n + '.' : 'Apply (aᵐ)ⁿ = aᵐⁿ and distribute 2 to both x and ' + n + '.' },
              { badge: 'K1', title: lang === 'bm' ? 'Samakan indeks di kedua-dua belah' : 'Equate exponents on both sides', tex: `3x ${U.signedNum(m)} = 2x + ${2 * n} \\implies 3x - 2x = ${2 * n} ${U.signedNum(-m)}`, why: lang === 'bm' ? 'Asas sudah sama, jadi kuasa mesti sama; kumpul x ke kiri.' : 'Bases match so powers must be equal; group x on the left.' },
              { badge: 'J1', title: lang === 'bm' ? 'Selesaikan untuk x' : 'Solve for x', tex: `x = ${xAns}`, why: lang === 'bm' ? 'Permudahkan kedua-dua belah.' : 'Simplify both sides.' }
            ]
          };
        } else {
          const a = U.pick([2, 3, 4]);
          const t = U.pick([1, 2]);
          const logAx = 2 * t;
          const k = 3 * t;
          const xAns = Math.pow(a, logAx);
          const aSq = a * a;
          return {
            tier: 3,
            tpLabel: 'TP5–TP6 (KBAT)',
            subtopic: { bm: '4.3 Persamaan Penukaran Asas Logaritma', en: '4.3 Change-of-Base Equations' },
            marks: 4,
            prompt: lang === 'bm'
              ? `Selesaikan persamaan logaritma berlainan asas:\n$$\\log_{${a}} x + \\log_{${aSq}} x = ${k}$$`
              : `Solve the logarithmic equation with mixed bases:\n$$\\log_{${a}} x + \\log_{${aSq}} x = ${k}$$`,
            answerType: 'number',
            correctValue: xAns,
            displayAnswerTex: `x = ${xAns}`,
            intentMeta: {
              given: { bm: `$\\log_{${a}} x + \\log_{${aSq}} x = ${k}$`, en: `$\\log_{${a}} x + \\log_{${aSq}} x = ${k}$` },
              goal: { bm: `Tukar asas $${aSq}$ kepada asas $${a}$ untuk mencari $x$`, en: `Convert base $${aSq}$ to base $${a}$ and solve for $x$` },
              conceptRule: { bm: `$\\log_{a^2} x = \\frac{\\log_a x}{\\log_a a^2} = \\frac{1}{2}\\log_a x$`, en: `$\\log_{a^2} x = \\frac{\\log_a x}{\\log_a a^2} = \\frac{1}{2}\\log_a x$` }
            },
            guidedSteps: [
              { prompt: { bm: `Tukar asas $\\log_{${aSq}} x = \\frac{\\log_{${a}} x}{\\log_{${a}} ${aSq}}$. Berapakah nilai penyebut $\\log_{${a}} ${aSq}$?`, en: `In $\\log_{${aSq}} x = \\frac{\\log_{${a}} x}{\\log_{${a}} ${aSq}}$, what is $\\log_{${a}} ${aSq}$?` }, expected: 2, hint: { bm: `Kerana ${a}² = ${aSq}, maka log_${a}(${aSq}) = 2.`, en: `Since ${a}² = ${aSq}, log_${a}(${aSq}) = 2.` } },
              { prompt: { bm: `Maka $\\log_{${a}} x + \\frac{1}{2}\\log_{${a}} x = \\frac{3}{2}\\log_{${a}} x = ${k}$. Apakah nilai $\\log_{${a}} x$?`, en: `Then $\\frac{3}{2}\\log_{${a}} x = ${k}$. What is $\\log_{${a}} x$?` }, expected: logAx, hint: { bm: `${k} × (2/3) = ${logAx}.`, en: `${k} × (2/3) = ${logAx}.` } },
              { prompt: { bm: `Akhir sekali, jika $\\log_{${a}} x = ${logAx}$, apakah nilai $x = ${a}^{${logAx}}$?`, en: `Finally, since $\\log_{${a}} x = ${logAx}$, what is $x = ${a}^{${logAx}}$?` }, expected: xAns, hint: { bm: `${a}^${logAx} = ${xAns}.`, en: `${a}^${logAx} = ${xAns}.` } }
            ],
            traps: [
              { value: logAx, message: { bm: `Diagnostik Langkah Akhir [J]: $${logAx}$ ialah nilai $\\log_{${a}}(x)$, belum lagi nilai $x$! Tukarkan kepada $x = ${a}^{${logAx}} = ${xAns}$.`, en: `Final Step Diagnosis [J]: $${logAx}$ is $\\log_{${a}}(x)$, not $x$ yet! Compute $x = ${a}^{${logAx}} = ${xAns}$.` } }
            ],
            hints: [
              lang === 'bm' ? `Tukar $\\log_{${aSq}} x$ kepada asas $${a}$: dapat $\\frac{\\log_{${a}} x}{2}$.` : `Change $\\log_{${aSq}} x$ to base $${a}$: you get $\\frac{\\log_{${a}} x}{2}$.`,
              lang === 'bm' ? `Gabungkan $\\left(1 + \\frac{1}{2}\\right)\\log_{${a}} x = \\frac{3}{2}\\log_{${a}} x = ${k} \\implies \\log_{${a}} x = ${logAx}$.` : `Combine $\\left(1 + \\frac{1}{2}\\right)\\log_{${a}} x = \\frac{3}{2}\\log_{${a}} x = ${k} \\implies \\log_{${a}} x = ${logAx}$.`
            ],
            steps: [
              { badge: 'P1', title: lang === 'bm' ? 'Tukar kepada asas sepunya ' + a : 'Change to common base ' + a, tex: `\\log_{${a}} x + \\frac{\\log_{${a}} x}{\\log_{${a}} ${aSq}} = ${k} \\implies \\log_{${a}} x + \\frac{1}{2}\\log_{${a}} x = ${k}`, why: lang === 'bm' ? `Oleh sebab ${a}² = ${aSq}, maka log_${a}(${aSq}) = 2.` : `Since ${a}² = ${aSq}, log_${a}(${aSq}) = 2.` },
              { badge: 'K1', title: lang === 'bm' ? 'Faktorkan sebutan log_a x' : 'Combine like log_a x terms', tex: `\\left(1 + \\frac{1}{2}\\right)\\log_{${a}} x = \\frac{3}{2}\\log_{${a}} x = ${k}`, why: lang === 'bm' ? 'Jumlahkan pekali 1 + 1/2 = 3/2.' : 'Add the coefficients 1 + 1/2 = 3/2.' },
              { badge: 'K1', title: lang === 'bm' ? 'Asingkan log_a x dengan darab 2/3' : 'Isolate log_a x by multiplying 2/3', tex: `\\log_{${a}} x = ${k} \\times \\frac{2}{3} = ${logAx}`, why: lang === 'bm' ? 'Songsangkan pecahan 3/2 menjadi 2/3 di sebelah kanan.' : 'Multiply both sides by the reciprocal 2/3.' },
              { badge: 'J1', title: lang === 'bm' ? 'Tukar kepada bentuk indeks untuk x' : 'Convert to index form for x', tex: `x = ${a}^{${logAx}} = ${xAns}`, why: lang === 'bm' ? 'log_a(x) = m bermaksud x = a^m.' : 'log_a(x) = m means x = a^m.' }
            ]
          };
        }
      }
    },

    // =========================================================================
    // FORM 4 CHAPTER 5: PROGRESSIONS / JANJANG
    // =========================================================================
    {
      id: 'f4-c5',
      stage: 1,
      unlocked: true,
      form: 4,
      num: 5,
      code: { bm: 'T4 • Bab 5', en: 'F4 • Ch 5' },
      icon: 'Tₙ,Sₙ',
      color: '#10b981',
      category: 'algebra',
      title: { bm: 'Janjang', en: 'Progressions' },
      subtitle: {
        bm: 'Janjang Aritmetik (JA), Janjang Geometri (JG), S∞ & perpuluhan berulang',
        en: 'Arithmetic (AP), Geometric (GP), Sum to Infinity S∞ & recurring decimals'
      },
      spmWeight: { bm: 'Kertas 1 & Kertas 2 (Aplikasi Kewangan & Corak)', en: 'Paper 1 & Paper 2 (Financial & Pattern Modeling)' },
      concepts: [
        {
          title: { bm: '1. Janjang Aritmetik (JA / AP)', en: '1. Arithmetic Progressions (AP)' },
          prereq: {
            bm: 'Ingat topik **Pola & Jujukan** dari Tingkatan 2 (seperti $5, 8, 11, 14, \\dots$ iaitu sentiasa $+3$)? Bayangkan menabung RM10 pada hari ke-1, RM15 pada hari ke-2, RM20 pada hari ke-3 — setiap hari bertambah dengan jumlah tetap $d = +5$!\n\nDalam Add Math, kita ada dua soalan berbeza:\n• **$T_8$**: *"Berapakah simpanan PADA hari ke-8?"* (sebutan tunggal ke-8).\n• **$S_8$**: *"Berapakah JUMLAH tabung selepas 8 hari?"* (hasil tambah $T_1 + T_2 + \\dots + T_8$).',
            en: 'Remember **Patterns & Sequences** from Form 2 (like $5, 8, 11, 14, \\dots$ where you always add $+3$)? Imagine saving RM10 on Day 1, RM15 on Day 2, RM20 on Day 3 — adding the exact same fixed step $d = +5$ each day!\n\nIn Add Math, notice two very different questions:\n• **$T_8$**: *"How much did I save ON Day 8?"* (single 8th term).\n• **$S_8$**: *"What is my TOTAL savings after 8 days?"* (cumulative sum $T_1 + T_2 + \\dots + T_8$).'
          },
          body: {
            bm: '• **Ujian Mengenal Pasti JA**: Kira $T_2 - T_1$ dan $T_3 - T_2$. Jika kedua-duanya SAMA, ia ialah JA dengan beza sepunya $d$ ($d$ boleh jadi negatif jika jujukan makin mengecil!).\n• **Hubungan Emas $T_n = S_n - S_{n-1}$**: Jumlah $n$ hari ($S_n$) tolak jumlah sehingga semalam ($S_{n-1}$) meninggalkan simpanan hari ke-$n$ sahaja ($T_n$)! Untuk sebutan pertama, $T_1 = S_1$.\n• **Hasil Tambah Julat $T_p$ hingga $T_q$**: Gunakan **$S_q - S_{p-1}$** (tolak semua yang SEBELUM $T_p$, bukan $S_p$, supaya $T_p$ tidak terbuang!).',
            en: '• **AP Identification Test**: Compute $T_2 - T_1$ and $T_3 - T_2$. If both match, it is an AP with common difference $d$ ($d$ can be negative if shrinking!).\n• **Golden Relation $T_n = S_n - S_{n-1}$**: Total up to Day $n$ ($S_n$) minus total up to yesterday ($S_{n-1}$) leaves ONLY Day $n$ ($T_n$)! For the first term, $T_1 = S_1$.\n• **Inclusive Range Sum $T_p$ to $T_q$**: Use **$S_q - S_{p-1}$** (subtract everything BEFORE $T_p$, NOT $S_p$, so $T_p$ stays included!).'
          },
          firstStep: {
            bm: '1. **Jalankan ujian JA vs JG dahulu**: Semak $T_2 - T_1 = T_3 - T_2$ (sama = JA) atau $T_2 \\div T_1 = T_3 \\div T_2$ (sama = JG).\n2. **Senaraikan $a = \\dots, \\; d = \\dots$** dan garis kata kunci soalan (*"pada ke-n"* $\\rightarrow T_n$; *"jumlah n pertama"* $\\rightarrow S_n$).\n3. **Diberi rumus $S_n$ dan diminta $T_n$?** Jangan teka! Terus guna $T_n = S_n - S_{n-1}$ (atau $T_1 = S_1$).',
            en: '1. **Run the AP vs GP test first**: Check $T_2 - T_1 = T_3 - T_2$ (equal = AP) or $T_2 \\div T_1 = T_3 \\div T_2$ (equal = GP).\n2. **List $a = \\dots, \\; d = \\dots$** and underline keywords (*"on the n-th"* $\\rightarrow T_n$; *"sum/total of first n"* $\\rightarrow S_n$).\n3. **Given $S_n$ formula and asked for $T_n$?** Immediately compute $T_n = S_n - S_{n-1}$ (and $T_1 = S_1$).'
          },
          formulas: [
            { label: { bm: 'Ujian JA & Sebutan ke-n', en: 'AP Test & n-th Term' }, tex: 'd = T_2 - T_1 = T_3 - T_2, \\qquad T_n = a + (n-1)d' },
            { label: { bm: 'Hasil Tambah S_n & Julat p ke q', en: 'AP Sum S_n & Inclusive Range Sum' }, tex: 'S_n = \\frac{n}{2}[2a + (n-1)d] = \\frac{n}{2}(a + l), \\qquad S_{p \\to q} = S_q - S_{p-1}' },
            { label: { bm: 'Sebutan daripada Hasil Tambah', en: 'Term from Cumulative Sum' }, tex: 'T_n = S_n - S_{n-1} \\;(n \\ge 2), \\qquad T_1 = S_1' }
          ],
          workedExample: {
            title: { bm: 'Contoh Terpandu: Mencari T₆ & d daripada Rumus Sₙ', en: 'Worked Example: Find T₆ & Common Difference d from Sₙ' },
            problem: {
              bm: 'Hasil tambah $n$ sebutan pertama suatu janjang aritmetik ialah $S_n = 2n^2 + 3n$. Cari nilai sebutan ke-6 ($T_6$) dan beza sepunya $d$.',
              en: 'The sum of the first $n$ terms of an AP is $S_n = 2n^2 + 3n$. Find the 6th term ($T_6$) and the common difference $d$.'
            },
            steps: [
              {
                label: { bm: 'Kira $S_6$ dan $S_5$ dengan menggantikan $n = 6$ dan $n = 5$', en: 'Compute $S_6$ and $S_5$ by substituting $n = 6$ and $n = 5$' },
                tex: 'S_6 = 2(6)^2 + 3(6) = 72 + 18 = 90, \\qquad S_5 = 2(5)^2 + 3(5) = 50 + 15 = 65',
                why: {
                  bm: '$S_6$ ialah jumlah 6 sebutan pertama ($T_1+\\dots+T_6$), manakala $S_5$ ialah jumlah 5 sebutan pertama ($T_1+\\dots+T_5$).',
                  en: '$S_6$ is the sum of the first 6 terms ($T_1+\\dots+T_6$), while $S_5$ is the sum of the first 5 terms.'
                }
              },
              {
                label: { bm: 'Tolakkan $S_6 - S_5$ untuk mendapat $T_6$', en: 'Subtract $S_6 - S_5$ to isolate $T_6$' },
                tex: 'T_6 = S_6 - S_5 = 90 - 65 = 25',
                why: {
                  bm: 'Semua sebutan $T_1$ hingga $T_5$ terhapus, hanya tinggal $T_6$.',
                  en: 'All terms $T_1$ through $T_5$ cancel, leaving only $T_6$.'
                }
              },
              {
                label: { bm: 'Untuk mencari $d$, cari $T_1 = S_1$ dan $T_2 = S_2 - S_1$', en: 'To find $d$, compute $T_1 = S_1$ and $T_2 = S_2 - S_1$' },
                tex: 'T_1 = S_1 = 2(1)^2 + 3(1) = 5, \\quad S_2 = 2(2)^2 + 3(2) = 14 \\implies T_2 = 14 - 5 = 9',
                why: {
                  bm: 'Sebutan pertama sentiasa sama dengan $S_1$, manakala sebutan kedua ialah $S_2 - S_1$.',
                  en: 'The first term always equals $S_1$, and the second term is $S_2 - S_1$.'
                }
              },
              {
                label: { bm: 'Kira beza sepunya $d = T_2 - T_1$', en: 'Compute common difference $d = T_2 - T_1$' },
                tex: 'd = 9 - 5 = 4',
                why: {
                  bm: 'Semak dengan rumus $T_6 = a + 5d = 5 + 5(4) = 25$ tepat!',
                  en: 'Verify with $T_6 = a + 5d = 5 + 5(4) = 25$ — matches!'
                }
              }
            ],
            trap: {
              bm: 'Jangan berhenti pada $S_6 = 90$ dan menyangkanya ialah $T_6$! Untuk julat $T_5$ hingga $T_{12}$ pula, sentiasa tolak $S_4$ ($S_{12} - S_4$), bukan $S_5$.',
              en: 'Never stop at $S_6 = 90$ thinking it is $T_6$! And for inclusive range $T_5$ to $T_{12}$, always subtract $S_4$ ($S_{12} - S_4$), never $S_5$.'
            }
          },
          tip: {
            bm: 'Ingat! Untuk jumlah dari $T_5$ hingga $T_{12}$, tolak $S_4$ (bukan $S_5$!) supaya $T_5$ kekal di dalam jumlah.',
            en: 'Remember! For the sum from $T_5$ to $T_{12}$, subtract $S_4$ (never $S_5$!) so $T_5$ remains included.'
          }
        },
        {
          title: { bm: '2. Janjang Geometri (JG / GP), S∞ & Ketaksamaan Log', en: '2. Geometric Progressions (GP), S∞ & Log Inequalities' },
          prereq: {
            bm: 'Bayangkan duit berganda dua setiap hari (RM2, RM4, RM8, RM16) atau **bola getah yang melantun** hingga $0.6$ daripada ketinggian sebelumnya setiap kali jatuh — setiap langkah **DIDARAB** dengan nisbah tetap $r$.\n\nJika bola melantun semakin rendah ($|r| < 1$), lantunannya akhirnya menghampiri $0$. Walaupun melantun sampai infiniti, jumlah semua tinggi lantunannya tetap berhenti pada satu nombor terhingga $S_\\infty = \\frac{a}{1 - r}$!',
            en: 'Imagine money doubling every day (RM2, RM4, RM8, RM16) or a **bouncing ball** reaching $0.6$ of its previous height on each bounce — every step **MULTIPLIES** by a constant ratio $r$.\n\nWhen the bounces shrink ($|r| < 1$), they fade toward $0$. Even over infinitely many bounces, the total distance settles to a finite number $S_\\infty = \\frac{a}{1 - r}$!'
          },
          body: {
            bm: '• **Ujian JG**: Semak $r = \\frac{T_2}{T_1} = \\frac{T_3}{T_2}$. Jangan tertukar $ar^{n-1}$ dengan $(ar)^{n-1}$ — kira **$r^{n-1}$ dahulu** sebelum darab dengan $a$!\n• **Perpuluhan Berulang**: $0.363636\\dots = 0.36 + 0.0036 + \\dots$ ialah JG dengan $a = 0.36, \\; r = 0.01$, jadi $S_\\infty = \\frac{0.36}{1 - 0.01} = \\frac{0.36}{0.99} = \\frac{4}{11}$.\n• **PERANGKAP KETAKSAMAAN LOG ($0 < r < 1$)**: Apabila mencari bilangan sebutan minimum/maksimum $n$ daripada $(0.5)^n < k$, awak mengambil $\\log_{10}$ di kedua-dua belah. Oleh sebab $0 < r < 1$, nilai **$\\log_{10} r$ ialah NEGATIF**! Membahagi dengan nombor negatif **WAJIB menterbalikkan tanda $<$ menjadi $>$**!',
            en: '• **GP Test**: Check $r = \\frac{T_2}{T_1} = \\frac{T_3}{T_2}$. Never compute $ar^{n-1}$ as $(ar)^{n-1}$ — evaluate **$r^{n-1}$ first**, then multiply by $a$!\n• **Recurring Decimals**: $0.363636\\dots = 0.36 + 0.0036 + \\dots$ is a GP with $a = 0.36, \\; r = 0.01$, giving $S_\\infty = \\frac{0.36}{0.99} = \\frac{4}{11}$.\n• **LOG INEQUALITY SIGN-FLIP ($0 < r < 1$)**: When solving $(0.5)^n < k$ for $n$ using $\\log_{10}$, remember that for $0 < r < 1$, **$\\log_{10} r$ is NEGATIVE**! Dividing both sides by a negative number **FLIPS $<$ to $>$**!'
          },
          firstStep: {
            bm: '1. Kira $r = \\frac{T_2}{T_1}$ dan sahkan sama dengan $\\frac{T_3}{T_2}$.\n2. Sebelum guna $S_\\infty = \\frac{a}{1-r}$, semak dahulu sama ada **$|r| < 1$**.\n3. Mencari $n$ dalam ketaksamaan apabila $0 < r < 1$? Ambil $\\log_{10}$ dan **TERBALIKKAN tanda ketaksamaan** sebaik sahaja membahagi dengan $\\log_{10} r$!',
            en: '1. Compute $r = \\frac{T_2}{T_1}$ and verify it matches $\\frac{T_3}{T_2}$.\n2. Before using $S_\\infty = \\frac{a}{1-r}$, confirm **$|r| < 1$**.\n3. Solving an inequality for $n$ when $0 < r < 1$? Take $\\log_{10}$ and **FLIP the inequality sign** the moment you divide by $\\log_{10} r$!'
          },
          formulas: [
            { label: { bm: 'Ujian JG, Sebutan ke-n & S_n', en: 'GP Test, n-th Term & S_n' }, tex: 'r = \\frac{T_2}{T_1} = \\frac{T_3}{T_2}, \\qquad T_n = ar^{n-1}, \\qquad S_n = \\frac{a(1 - r^n)}{1 - r} = \\frac{a(r^n - 1)}{r - 1}' },
            { label: { bm: 'Hasil Tambah Ketakterhinggaan (|r| < 1)', en: 'Sum to Infinity (|r| < 1)' }, tex: 'S_\\infty = \\frac{a}{1 - r}, \\quad -1 < r < 1' },
            { label: { bm: 'Terbalik Tanda Ketaksamaan Log (0 < r < 1)', en: 'Log Inequality Sign-Flip (0 < r < 1)' }, tex: 'r^n < k \\implies n\\log_{10} r < \\log_{10} k \\implies n > \\frac{\\log_{10} k}{\\log_{10} r} \\; (\\because \\log_{10} r < 0)' }
          ],
          workedExample: {
            title: { bm: 'Contoh Terpandu: Ketaksamaan JG & Terbalik Tanda Log', en: 'Worked Example: GP Inequality & Log Sign-Flip' },
            problem: {
              bm: 'Suatu janjang geometri mempunyai $a = 80$ dan $r = 0.5$. Cari nilai integer terkecil $n$ supaya $T_n < 1$.',
              en: 'A geometric progression has $a = 80$ and $r = 0.5$. Find the smallest integer $n$ such that $T_n < 1$.'
            },
            steps: [
              {
                label: { bm: 'Tulis ketaksamaan $T_n < 1$ dan bahagikan dengan $a = 80$', en: 'Set up $T_n < 1$ and divide both sides by $a = 80$' },
                tex: '80(0.5)^{n-1} < 1 \\implies (0.5)^{n-1} < \\frac{1}{80} = 0.0125',
                why: {
                  bm: 'Asingkan sebutan kuasa $(0.5)^{n-1}$ seorang diri sebelum mengambil $\\log_{10}$.',
                  en: 'Isolate the power term $(0.5)^{n-1}$ before taking $\\log_{10}$.'
                }
              },
              {
                label: { bm: 'Ambil $\\log_{10}$ di kedua-dua belah dan turunkan kuasa $(n - 1)$', en: 'Take $\\log_{10}$ on both sides and drop exponent $(n - 1)$' },
                tex: '(n - 1)\\log_{10}(0.5) < \\log_{10}(0.0125)',
                why: {
                  bm: 'Hukum kuasa logaritma $\\log(m^p) = p\\log m$ menurunkan $n - 1$ ke hadapan.',
                  en: 'The log power rule $\\log(m^p) = p\\log m$ brings $n - 1$ down to the front.'
                }
              },
              {
                label: { bm: 'Bahagi dengan $\\log_{10}(0.5) = -0.3010 < 0$ dan TERBALIKKAN $<$ ke $>$', en: 'Divide by $\\log_{10}(0.5) = -0.3010 < 0$ and FLIP $<$ to $>$' },
                tex: 'n - 1 > \\frac{-1.9031}{-0.3010} = 6.322 \\implies n > 7.322',
                why: {
                  bm: 'Oleh sebab $\\log_{10}(0.5)$ adalah NEGATIF, membahagi dengannya wajib membalikkan arah ketaksamaan!',
                  en: 'Because $\\log_{10}(0.5)$ is NEGATIVE, dividing by it flips the inequality direction!'
                }
              },
              {
                label: { bm: 'Pilih integer terkecil yang lebih besar daripada $7.322$', en: 'Choose the smallest integer greater than $7.322$' },
                tex: 'n = 8 \\quad (T_7 = 1.25,\\; T_8 = 0.625 < 1)',
                why: {
                  bm: 'Semakan membuktikan $T_7 = 1.25$ masih belum kurang daripada $1$, hanya $T_8 = 0.625 < 1$.',
                  en: 'Checking verifies $T_7 = 1.25$ is not yet $< 1$; $T_8 = 0.625 < 1$ is the first!'
                }
              }
            ],
            trap: {
              bm: 'Jika awak terlupa membalikkan tanda apabila membahagi dengan $\\log_{10}(0.5)$, awak akan mendapat $n < 7.322 \\implies n = 7$ — jawapan salah yang gagal ujian $T_7 = 1.25 \\not< 1$!',
              en: 'Forgetting to flip the sign when dividing by $\\log_{10}(0.5)$ gives $n < 7.322 \\implies n = 7$ — wrong since $T_7 = 1.25 \\not< 1$!'
            }
          },
          tip: {
            bm: 'Bagi $0.363636\\dots = 0.36 + 0.0036 + \\dots$, ambil $a = 0.36$ dan $r = 0.01$, maka $S_\\infty = \\frac{0.36}{0.99} = \\frac{4}{11}$!',
            en: 'For $0.363636\\dots = 0.36 + 0.0036 + \\dots$, set $a = 0.36$ and $r = 0.01$, giving $S_\\infty = \\frac{0.36}{0.99} = \\frac{4}{11}$!'
          }
        }
      ],
      traps: [
        {
          title: { bm: 'Keliru Antara Tₙ (Sebutan ke-n) dengan Sₙ (Hasil Tambah)', en: 'Confusing Tₙ (n-th Term) with Sₙ (Sum of n Terms)' },
          desc: {
            bm: 'Baca kata kunci soalan dengan teliti: "pada hari ke-8" = $T_8$, manakala "jumlah sepanjang 8 hari" = $S_8$!',
            en: 'Read keywords carefully: "on the 8th day" = $T_8$, whereas "total over 8 days" = $S_8$!'
          }
        },
        {
          title: { bm: 'Menolak S_p Bukan S_{p-1} untuk Hasil Tambah Julat T_p hingga T_q', en: 'Subtracting S_p Instead of S_{p-1} for Inclusive Range Sum T_p to T_q' },
          desc: {
            bm: 'Untuk mencari jumlah dari sebutan ke-$5$ hingga ke-$12$ (termasuk ke-$5$), gunakan $S_{12} - S_4$. Jika anda tolak $S_5$, sebutan $T_5$ akan ikut terbuang!',
            en: 'To sum from the $5$-th to $12$-th term inclusive, compute $S_{12} - S_4$. Subtracting $S_5$ accidentally removes $T_5$!'
          }
        },
        {
          title: { bm: 'Lupa Terbalikkan Tanda Ketaksamaan Apabila log₁₀ r < 0 & Salah Urutan arⁿ⁻¹', en: 'Forgetting Log Inequality Flip (log₁₀ r < 0) & Doing (ar)ⁿ⁻¹' },
          desc: {
            bm: 'Apabila $0 < r < 1$, $\\log_{10} r$ adalah negatif — membahagi dengannya WAJIB membalikkan $<$ / $>$. Juga dalam $ar^{n-1}$, kira kuasa $r^{n-1}$ dahulu sebelum mendarab $a$!',
            en: 'When $0 < r < 1$, $\\log_{10} r < 0$ — dividing by it MUST flip $<$ / $>$. Also in $ar^{n-1}$, compute $r^{n-1}$ first, NEVER $(ar)^{n-1}$!'
          }
        }
      ],
      solvers: [
        {
          id: 'ap-gp-solver',
          title: { bm: 'Kalkulator Pintar JA & JG (Tₙ, Sₙ & S∞)', en: 'Smart AP & GP Explorer (Tₙ, Sₙ & S∞)' },
          desc: {
            bm: 'Kira sebutan ke-n, hasil tambah n sebutan pertama, dan hasil tambah ketakterhinggaan S∞.',
            en: 'Compute n-th term, sum of first n terms, and sum to infinity S∞ step-by-step.'
          },
          inputs: [
            { id: 'mode', label: { bm: 'Jenis (1 = JA / AP, 2 = JG / GP)', en: 'Type (1 = AP, 2 = GP)' }, default: 1 },
            { id: 'a', label: { bm: 'Sebutan pertama a', en: 'First term a' }, default: 8 },
            { id: 'dr', label: { bm: 'Beza d (JA) atau Nisbah r (JG)', en: 'Diff d (AP) or Ratio r (GP)' }, default: 0.5 },
            { id: 'n', label: { bm: 'Bilangan sebutan n', en: 'Number of terms n' }, default: 10 }
          ],
          solve: function (v, lang) {
            const modeVal = strictNum(v.mode);
            if (!Number.isFinite(modeVal) || (modeVal !== 1 && modeVal !== 2)) {
              return {
                problemTex: lang === 'bm'
                  ? `\\text{Jenis tidak sah: mode} = ${Number.isFinite(modeVal) ? modeVal : '?'}`
                  : `\\text{Invalid type: mode} = ${Number.isFinite(modeVal) ? modeVal : '?'}`,
                steps: [
                  {
                    badge: 'P1',
                    title: lang === 'bm' ? 'Semak pilihan jenis janjang (1 atau 2)' : 'Check progression type (1 or 2)',
                    tex: lang === 'bm'
                      ? '\\text{mode} = 1\\;(\\text{JA / AP}) \\quad \\text{atau} \\quad \\text{mode} = 2\\;(\\text{JG / GP})'
                      : '\\text{mode} = 1\\;(\\text{AP}) \\quad \\text{or} \\quad \\text{mode} = 2\\;(\\text{GP})',
                    why: lang === 'bm'
                      ? 'Masukkan 1 untuk Janjang Aritmetik (JA) atau 2 untuk Janjang Geometri (JG).'
                      : 'Enter 1 for Arithmetic Progression (AP) or 2 for Geometric Progression (GP).'
                  }
                ],
                finalTex: lang === 'bm' ? '\\text{Input Tidak Sah}' : '\\text{Invalid Input}'
              };
            }
            const isGP = modeVal === 2;
            const a = strictNum(v.a);
            const dr = strictNum(v.dr);
            const nRaw = strictNum(v.n);
            if (!Number.isFinite(a) || !Number.isFinite(dr) || !Number.isFinite(nRaw) || !Number.isInteger(nRaw) || nRaw < 1) {
              return {
                problemTex: lang === 'bm' ? '\\text{Input tidak sah}' : '\\text{Invalid input}',
                steps: [{ badge: 'P1', title: lang === 'bm' ? 'Semak nilai a, d/r dan integer n ≥ 1' : 'Check a, d/r and integer n ≥ 1', tex: lang === 'bm' ? 'n \\ge 1 \\text{ mesti integer positif}' : 'n \\ge 1 \\text{ must be a positive integer}', why: lang === 'bm' ? 'Bilangan sebutan n mestilah integer positif (≥ 1) serta a dan d/r mesti nombor nyata.' : 'Number of terms n must be a positive integer (≥ 1) and a, d/r must be real numbers.' }],
                finalTex: lang === 'bm' ? '\\text{Input Tidak Sah}' : '\\text{Invalid Input}'
              };
            }
            const addSigned = (x) => (x < 0 ? '- ' + U.roundStr(Math.abs(x)) : '+ ' + U.roundStr(x));
            const chkLbl = lang === 'bm' ? '\\text{Semak: }' : '\\text{Check: }';
            const enOrd = (num) => {
              const m100 = num % 100;
              if (m100 >= 11 && m100 <= 13) return `${num}th`;
              switch (num % 10) {
                case 1: return `${num}st`;
                case 2: return `${num}nd`;
                case 3: return `${num}rd`;
                default: return `${num}th`;
              }
            };
            const overflowReply = () => {
              const limTex = lang === 'bm' ? '\\text{Had berangka terlampaui } (> 10^{308})' : '\\text{Numerical limit exceeded } (> 10^{308})';
              return {
                problemTex: lang === 'bm' ? `\\text{${isGP ? 'JG' : 'JA'}: } a = ${U.roundStr(a)},\\; ${isGP ? 'r' : 'd'} = ${U.roundStr(dr)},\\; n = ${nRaw}` : `\\text{${isGP ? 'GP' : 'AP'}: } a = ${U.roundStr(a)},\\; ${isGP ? 'r' : 'd'} = ${U.roundStr(dr)},\\; n = ${nRaw}`,
                steps: [
                  {
                    badge: 'P1',
                    title: lang === 'bm' ? 'Langkah 1: Semak had magnitud hasil kiraan' : 'Step 1: Check numerical magnitude limit',
                    tex: isGP ? `|r|^{n-1} = |${U.roundStr(dr)}|^{${nRaw - 1}} > 10^{308}` : `|T_{${nRaw}}| \\text{ ${lang === 'bm' ? 'atau' : 'or'} } |S_{${nRaw}}| > 10^{308}`,
                    why: lang === 'bm' ? 'Nilai kuasa atau hasil tambah melebihi had nombor nyata berketepatan berganda (> 10³⁰⁸).' : 'The power or sum exceeds the double-precision floating-point numerical limit (> 10³⁰⁸).'
                  },
                  {
                    badge: 'K1',
                    title: lang === 'bm' ? 'Langkah 2: Mengapa limpahan berlaku' : 'Step 2: Why numerical overflow occurs',
                    tex: isGP ? `T_n = a r^{n-1}, \\quad S_n = \\frac{a(1 - r^n)}{1 - r}` : `T_n = a + (n-1)d, \\quad S_n = \\frac{n}{2}[2a + (n-1)d]`,
                    why: lang === 'bm' ? 'Pertumbuhan terlalu besar untuk diwakilkan secara terhingga.' : 'Growth is too large to be represented as a finite floating-point number.'
                  },
                  {
                    badge: 'J1',
                    title: lang === 'bm' ? 'Langkah 3: Kecilkan nilai n atau parameter' : 'Step 3: Reduce n or parameter magnitude',
                    tex: limTex,
                    why: lang === 'bm' ? 'Gunakan nilai n yang lebih kecil untuk melihat langkah berangka lengkap.' : 'Use a smaller n to inspect full numerical steps.'
                  }
                ],
                finalTex: limTex
              };
            };
            const n = nRaw;
            if (!isGP) {
              const nMinus1 = n - 1;
              const diffProd = z0(nMinus1 * dr);
              const tn = z0(a + diffProd);
              const twoA = z0(2 * a);
              const bracketSum = z0(twoA + diffProd);
              const halfN = n / 2;
              const sn = z0(halfN * bracketSum);
              if (!Number.isFinite(diffProd) || !Number.isFinite(tn) || !Number.isFinite(twoA) || !Number.isFinite(bracketSum) || !Number.isFinite(sn)) {
                return overflowReply();
              }
              return {
                problemTex: lang === 'bm' ? `\\text{JA: } a = ${U.roundStr(a)},\\; d = ${U.roundStr(dr)},\\; n = ${n}` : `\\text{AP: } a = ${U.roundStr(a)},\\; d = ${U.roundStr(dr)},\\; n = ${n}`,
                steps: [
                  {
                    badge: 'P1',
                    title: lang === 'bm' ? 'Langkah 1: Kenal pasti parameter & rumus JA' : 'Step 1: Identify parameters & AP formulas',
                    tex: `a = ${U.roundStr(a)},\\; d = ${U.roundStr(dr)},\\; n = ${n}; \\quad T_n = a + (n-1)d,\\; S_n = \\frac{n}{2}[2a + (n-1)d]`,
                    why: lang === 'bm' ? 'Senaraikan sebutan pertama a, beza sepunya d, dan bilangan sebutan n.' : 'List the first term a, common difference d, and term count n.'
                  },
                  {
                    badge: 'K1',
                    title: lang === 'bm' ? `Langkah 2: Sebutan ke-${n} (Tₙ)` : `Step 2: ${enOrd(n)} Term (Tₙ)`,
                    tex: `T_{${n}} = ${U.roundStr(a)} + (${nMinus1})(${U.roundStr(dr)}) = ${U.roundStr(a)} ${addSigned(diffProd)} = ${U.roundStr(tn)}`,
                    why: lang === 'bm' ? 'Darabkan (n−1) dengan d dahulu sebelum menambah kepada a.' : 'Multiply (n−1) by d first before adding to a.'
                  },
                  {
                    badge: 'K1',
                    title: lang === 'bm' ? 'Langkah 3: Kira ungkapan dalam kurungan Sₙ' : 'Step 3: Evaluate bracket 2a + (n−1)d in Sₙ',
                    tex: `S_{${n}} = \\frac{${n}}{2}[2(${U.roundStr(a)}) + (${nMinus1})(${U.roundStr(dr)})] = ${U.roundStr(halfN)}[${U.roundStr(twoA)} ${addSigned(diffProd)}] = ${U.roundStr(halfN)}(${U.roundStr(bracketSum)})`,
                    why: lang === 'bm' ? 'Kira 2a dan (n−1)d di dalam kurungan siku dahulu sebelum mendarab.' : 'Evaluate 2a and (n−1)d inside the square bracket first before multiplying.'
                  },
                  {
                    badge: 'J1',
                    title: lang === 'bm' ? `Langkah 4: Hasil tambah ${n} sebutan pertama (Sₙ) & semak` : `Step 4: Sum of first ${n} terms (Sₙ) & check`,
                    tex: `S_{${n}} = ${U.roundStr(halfN)}(${U.roundStr(bracketSum)}) = ${U.roundStr(sn)} \\quad \\left(${chkLbl} \\frac{${n}}{2}(${U.roundStr(a)} ${addSigned(tn)}) = ${U.roundStr(sn)}\\right)`,
                    why: lang === 'bm' ? 'Darab dengan n/2 dan sahkan jawapan dengan rumus alternatif Sₙ = (n/2)(a + Tₙ).' : 'Multiply by n/2 and cross-check using Sₙ = (n/2)(a + Tₙ).'
                  }
                ],
                finalTex: `T_{${n}} = ${U.roundStr(tn)}, \\quad S_{${n}} = ${U.roundStr(sn)}`,
                trapWarning: lang === 'bm'
                  ? 'Bezakan $T_n$ (sebutan ke-$n$) daripada $S_n$ (jumlah $n$ sebutan pertama)!'
                  : 'Distinguish $T_n$ (single $n$-th term) from $S_n$ (sum of first $n$ terms)!'
              };
            } else {
              if (dr === 0) {
                const tn = n === 1 ? a : 0;
                return {
                  problemTex: lang === 'bm' ? `\\text{JG: } a = ${U.roundStr(a)},\\; r = 0,\\; n = ${n}` : `\\text{GP: } a = ${U.roundStr(a)},\\; r = 0,\\; n = ${n}`,
                  steps: [
                    { badge: 'P1', title: lang === 'bm' ? 'Langkah 1: Semak nisbah r = 0' : 'Step 1: Check ratio r = 0', tex: `T_1 = ${U.roundStr(a)}, \\quad r = 0`, why: lang === 'bm' ? 'Dalam JG piawai, r ≠ 0; apabila r = 0, setiap sebutan selepas T₁ menjadi 0.' : 'In standard GP, r ≠ 0; when r = 0, every term after T₁ becomes 0.' },
                    { badge: 'K1', title: lang === 'bm' ? `Langkah 2: Nilai sebutan ke-${n} (Tₙ)` : `Step 2: Evaluate ${enOrd(n)} term (Tₙ)`, tex: `T_{${n}} = (${U.roundStr(a)})(0)^{${n - 1}} = ${U.roundStr(tn)}`, why: lang === 'bm' ? 'Hanya sebutan pertama T₁ = a yang bukan sifar apabila r = 0.' : 'Only the first term T₁ = a is non-zero when r = 0.' },
                    { badge: 'J1', title: lang === 'bm' ? `Langkah 3: Hasil tambah Sₙ & S∞` : `Step 3: Evaluate sum Sₙ & S∞`, tex: `S_{${n}} = ${U.roundStr(a)}, \\quad S_\\infty = \\frac{${U.roundStr(a)}}{1 - 0} = ${U.roundStr(a)}`, why: lang === 'bm' ? 'Menjumlahkan semua sebutan memberi a, dan kerana |0| < 1, S∞ = a.' : 'Summing all terms gives a, and since |0| < 1, S∞ = a.' }
                  ],
                  finalTex: `T_{${n}} = ${U.roundStr(tn)}, \\; S_{${n}} = ${U.roundStr(a)}`
                };
              }
              const rPowPrev = z0(Math.pow(dr, n - 1));
              const tn = z0(a * rPowPrev);
              const rPowN = z0(Math.pow(dr, n));
              const oneMinusR = z0(1 - dr);
              const oneMinusRN = z0(1 - rPowN);
              const sn = dr === 1 ? z0(a * n) : z0((a * oneMinusRN) / oneMinusR);
              const hasInf = Math.abs(dr) < 1;
              const sInf = hasInf ? z0(a / oneMinusR) : null;
              if (!Number.isFinite(rPowPrev) || !Number.isFinite(tn) || !Number.isFinite(rPowN) || !Number.isFinite(oneMinusRN) || !Number.isFinite(sn) || (hasInf && !Number.isFinite(sInf))) {
                return overflowReply();
              }
              const fmtGP = (val) => U.roundStr(val, 6);
              const isExact6 = (val) => Math.abs(val - U.round(val, 6)) < 1e-12;
              const eqPowPrev = isExact6(rPowPrev) ? '=' : '\\approx';
              const eqTn = isExact6(rPowPrev) && isExact6(tn) ? '=' : '\\approx';
              const eqPowN = isExact6(rPowN) ? '=' : '\\approx';
              const eqOneMinus = isExact6(rPowN) ? '=' : '\\approx';
              const eqSn = isExact6(rPowN) && isExact6(sn) ? '=' : '\\approx';
              const eqSInf = sInf !== null && isExact6(sInf) ? '=' : '\\approx';
              return {
                problemTex: lang === 'bm' ? `\\text{JG: } a = ${U.roundStr(a)},\\; r = ${U.roundStr(dr)},\\; n = ${n}` : `\\text{GP: } a = ${U.roundStr(a)},\\; r = ${U.roundStr(dr)},\\; n = ${n}`,
                steps: [
                  {
                    badge: 'K1',
                    title: lang === 'bm' ? `Langkah 1: Sebutan ke-${n} (Tₙ)` : `Step 1: ${enOrd(n)} Term (Tₙ)`,
                    tex: `T_{${n}} = (${U.roundStr(a)})(${U.roundStr(dr)})^{${n - 1}} ${eqPowPrev} (${U.roundStr(a)})(${fmtGP(rPowPrev)}) ${eqTn} ${fmtGP(tn)}`,
                    why: lang === 'bm' ? 'Kira kuasa rⁿ⁻¹ dahulu sebelum mendarab dengan a (BUKAN (ar)ⁿ⁻¹!).' : 'Evaluate rⁿ⁻¹ first before multiplying by a (NEVER (ar)ⁿ⁻¹!).'
                  },
                  {
                    badge: 'K1',
                    title: lang === 'bm' ? `Langkah 2: Hasil Tambah (Sₙ)` : `Step 2: Sum of First ${n} Terms (Sₙ)`,
                    tex: dr === 1
                      ? `r = 1 \\implies S_{${n}} = ${n}(${U.roundStr(a)}) = ${fmtGP(sn)}`
                      : `S_{${n}} = \\frac{${U.roundStr(a)}(1 - (${U.roundStr(dr)})^{${n}})}{1 - (${U.roundStr(dr)})} ${eqPowN} \\frac{${U.roundStr(a)}(1 - (${fmtGP(rPowN)}))}{${U.roundStr(oneMinusR)}} ${eqOneMinus} \\frac{${U.roundStr(a)}(${fmtGP(oneMinusRN)})}{${U.roundStr(oneMinusR)}} ${eqSn} ${fmtGP(sn)}`,
                    why: lang === 'bm' ? 'Kira rⁿ, kemudian 1 − rⁿ dan 1 − r secara berasingan.' : 'Compute rⁿ, then 1 − rⁿ and 1 − r cleanly before dividing.'
                  },
                  {
                    badge: 'J1',
                    title: lang === 'bm' ? 'Langkah 3: Semakan S∞' : 'Step 3: Sum to Infinity S∞ Check',
                    tex: hasInf
                      ? `|r| = ${U.roundStr(Math.abs(dr))} < 1 \\implies S_\\infty = \\frac{${U.roundStr(a)}}{1 - (${U.roundStr(dr)})} = \\frac{${U.roundStr(a)}}{${U.roundStr(oneMinusR)}} ${eqSInf} ${fmtGP(sInf)}`
                      : (lang === 'bm' ? `|r| = ${U.roundStr(Math.abs(dr))} \\ge 1 \\implies S_\\infty \\text{ tidak wujud}` : `|r| = ${U.roundStr(Math.abs(dr))} \\ge 1 \\implies S_\\infty \\text{ does not exist}`),
                    why: lang === 'bm' ? 'S∞ hanya menumpu dan wujud apabila −1 < r < 1 (|r| < 1).' : 'S∞ converges and exists only when −1 < r < 1 (|r| < 1).'
                  }
                ],
                finalTex: hasInf ? `T_{${n}} = ${fmtGP(tn)}, \\; S_{${n}} = ${fmtGP(sn)}, \\; S_\\infty = ${fmtGP(sInf)}` : `T_{${n}} = ${fmtGP(tn)}, \\; S_{${n}} = ${fmtGP(sn)}`,
                trapWarning: lang === 'bm'
                  ? 'Awas: dalam $ar^{n-1}$, jangan darab $a \\times r$ dahulu! Dan $S_\\infty$ hanya sah jika $|r| < 1$.'
                  : 'Watch out: in $ar^{n-1}$, never multiply $a \\times r$ first! And $S_\\infty$ is only valid when $|r| < 1$.'
              };
            }
          }
        }
      ],
      generateQuestion: function (tier, lang) {
        if (tier === 1) {
          const r = U.pick([0.5, 0.25, 0.2, -0.5]);
          const a = U.pick([12, 18, 24, 36]);
          const sInf = U.round(a / (1 - r), 4);
          const t2 = U.round(a * r, 4);
          const t3 = U.round(a * r * r, 4);
          const denom = U.round(1 - r, 4);
          return {
            tier: 1,
            tpLabel: 'TP1–TP2',
            subtopic: { bm: '5.2 Hasil Tambah Ketakterhinggaan JG', en: '5.2 GP Sum to Infinity' },
            marks: 2,
            prompt: lang === 'bm'
              ? `Cari hasil tambah ketakterhinggaan, $S_\\infty$, bagi janjang geometri $${a},\\; ${t2},\\; ${t3}, \\dots$`
              : `Find the sum to infinity, $S_\\infty$, of the geometric progression $${a},\\; ${t2},\\; ${t3}, \\dots$`,
            answerType: 'number',
            correctValue: sInf,
            displayAnswerTex: `S_\\infty = ${U.roundStr(sInf)}`,
            intentMeta: {
              given: { bm: `Janjang geometri dengan $a = ${a},\\; T_2 = ${t2},\\; T_3 = ${t3}$`, en: `Geometric progression with $a = ${a},\\; T_2 = ${t2},\\; T_3 = ${t3}$` },
              goal: { bm: 'Cari $S_\\infty = \\frac{a}{1 - r}$', en: 'Find $S_\\infty = \\frac{a}{1 - r}$' },
              conceptRule: { bm: '$r = \\frac{T_2}{T_1}$ dan $S_\\infty = \\frac{a}{1 - r}$ untuk $|r| < 1$', en: '$r = \\frac{T_2}{T_1}$ and $S_\\infty = \\frac{a}{1 - r}$ for $|r| < 1$' }
            },
            guidedSteps: [
              { prompt: { bm: `Cari nisbah sepunya $r = \\frac{T_2}{T_1} = \\frac{${t2}}{${a}}$:`, en: `Find common ratio $r = \\frac{T_2}{T_1} = \\frac{${t2}}{${a}}$:` }, expected: r, hint: { bm: `${t2} ÷ ${a} = ${r}.`, en: `${t2} ÷ ${a} = ${r}.` } },
              { prompt: { bm: `Gantikan ke dalam $S_\\infty = \\frac{${a}}{1 - (${r})}$:`, en: `Evaluate $S_\\infty = \\frac{${a}}{1 - (${r})}$:` }, expected: sInf, hint: { bm: `${a} ÷ ${denom} = ${sInf}.`, en: `${a} ÷ ${denom} = ${sInf}.` } }
            ],
            traps: [
              { value: a / (1 + r), message: { bm: 'Diagnostik Tanda [K]: Rumus ialah $\\frac{a}{1 - r}$, hati-hati dengan tanda penolakan pada penyebut!', en: 'Sign Diagnosis [K]: Formula is $\\frac{a}{1 - r}$, watch the minus sign in the denominator!' } }
            ],
            hints: [
              lang === 'bm' ? `Nisbah sepunya $r = \\frac{${t2}}{${a}} = ${r}$ (sah $|r| < 1$).` : `Common ratio $r = \\frac{${t2}}{${a}} = ${r}$ (valid $|r| < 1$).`,
              lang === 'bm' ? `Kira penyebut $1 - (${r}) = ${denom}$, kemudian bahagi $${a} \\div ${denom}$.` : `Evaluate denominator $1 - (${r}) = ${denom}$, then divide $${a} \\div ${denom}$.`
            ],
            steps: [
              { badge: 'P1', title: lang === 'bm' ? 'Cari nisbah sepunya r' : 'Find common ratio r', tex: `r = \\frac{T_2}{T_1} = \\frac{${t2}}{${a}} = ${r}`, why: lang === 'bm' ? '|r| < 1 disahkan, jadi siri menumpu dan S∞ wujud.' : '|r| < 1 verified, so the series converges and S∞ exists.' },
              { badge: 'K1', title: lang === 'bm' ? 'Nilaikan penyebut 1 − r' : 'Evaluate denominator 1 − r', tex: `1 - r = 1 - (${r}) = ${denom}`, why: lang === 'bm' ? 'Hati-hati tanda jika r negatif: 1 − (−0.5) = 1.5.' : 'Watch double negatives if r < 0: 1 − (−0.5) = 1.5.' },
              { badge: 'J1', title: lang === 'bm' ? 'Kira S∞ = a / (1 − r)' : 'Compute S∞ = a / (1 − r)', tex: `S_\\infty = \\frac{${a}}{${denom}} = ${U.roundStr(sInf)}`, why: lang === 'bm' ? 'Bahagikan sebutan pertama a dengan (1 − r).' : 'Divide first term a by (1 − r).' }
            ]
          };
        } else if (tier === 2) {
          const p = U.pick([2, 3, 4]);
          const q = U.pick([1, 3, 5, -2]);
          const n = U.randInt(5, 9);
          const sn = p * n * n + q * n;
          const snPrev = p * (n - 1) * (n - 1) + q * (n - 1);
          const tn = sn - snPrev;
          const snTex = U.polyTex([{ c: p, p: 2 }, { c: q, p: 1 }], 'n');
          return {
            tier: 2,
            tpLabel: 'TP3–TP4',
            subtopic: { bm: '5.1 Mencari Tₙ daripada Sₙ', en: '5.1 Finding Tₙ from Sₙ' },
            marks: 3,
            prompt: lang === 'bm'
              ? `Hasil tambah $n$ sebutan pertama suatu janjang diberi oleh $S_n = ${snTex}$. Cari sebutan ke-${n}, iaitu $T_{${n}}$.`
              : `The sum of the first $n$ terms of a progression is given by $S_n = ${snTex}$. Find the ${n}-th term, $T_{${n}}$.`,
            answerType: 'number',
            correctValue: tn,
            displayAnswerTex: `T_{${n}} = ${tn}`,
            intentMeta: {
              given: { bm: `$S_n = ${snTex}$`, en: `$S_n = ${snTex}$` },
              goal: { bm: `Cari $T_{${n}} = S_{${n}} - S_{${n - 1}}$`, en: `Find $T_{${n}} = S_{${n}} - S_{${n - 1}}$` },
              conceptRule: { bm: '$T_n = S_n - S_{n-1}$', en: '$T_n = S_n - S_{n-1}$' }
            },
            guidedSteps: [
              { prompt: { bm: `Kira dahulu jumlah sehingga sebutan ke-${n}, iaitu $S_{${n}}$:`, en: `First calculate $S_{${n}}$:` }, expected: sn, hint: { bm: `${p}(${n})² ${U.signedNum(q)}(${n}) = ${sn}.`, en: `${p}(${n})² ${U.signedNum(q)}(${n}) = ${sn}.` } },
              { prompt: { bm: `Sekarang kira jumlah sehingga sebutan sebelumnya, iaitu $S_{${n - 1}}$:`, en: `Now calculate the preceding sum $S_{${n - 1}}$:` }, expected: snPrev, hint: { bm: `${p}(${n - 1})² ${U.signedNum(q)}(${n - 1}) = ${snPrev}.`, en: `${p}(${n - 1})² ${U.signedNum(q)}(${n - 1}) = ${snPrev}.` } },
              { prompt: { bm: `Tolakkan $S_{${n}} - S_{${n - 1}}$ untuk mendapatkan $T_{${n}}$:`, en: `Subtract $S_{${n}} - S_{${n - 1}}$ to isolate $T_{${n}}$:` }, expected: tn, hint: { bm: `${sn} − ${snPrev} = ${tn}.`, en: `${sn} − ${snPrev} = ${tn}.` } }
            ],
            traps: [
              { value: sn, message: { bm: `Diagnostik Konsep SPM [P]: $${sn}$ ialah jumlah terkumpul $S_{${n}}$, bukannya sebutan tunggal $T_{${n}}$! Tolak $S_{${n - 1}}$ ($${snPrev}$) daripada $S_{${n}}$.`, en: `SPM Concept Diagnosis [P]: $${sn}$ is cumulative sum $S_{${n}}$, not single term $T_{${n}}$! Subtract $S_{${n - 1}}$ ($${snPrev}$).` } }
            ],
            hints: [
              lang === 'bm' ? `Gunakan hubungan emas: $T_{${n}} = S_{${n}} - S_{${n - 1}}$.` : `Use the golden relation: $T_{${n}} = S_{${n}} - S_{${n - 1}}$.`,
              lang === 'bm' ? `Kira $S_{${n}} = ${sn}$ dan $S_{${n - 1}} = ${snPrev}$ secara berasingan dahulu.` : `Evaluate $S_{${n}} = ${sn}$ and $S_{${n - 1}} = ${snPrev}$ separately first.`
            ],
            steps: [
              { badge: 'P1', title: lang === 'bm' ? `Gantikan n = ${n} untuk S_${n}` : `Substitute n = ${n} for S_${n}`, tex: `S_{${n}} = ${p}(${n})^2 ${U.signedNum(q)}(${n}) = ${p * n * n} ${U.signedNum(q * n)} = ${sn}`, why: lang === 'bm' ? 'Jumlah ' + n + ' sebutan pertama.' : 'Sum of first ' + n + ' terms.' },
              { badge: 'K1', title: lang === 'bm' ? `Gantikan n = ${n - 1} untuk S_${n - 1}` : `Substitute n = ${n - 1} for S_${n - 1}`, tex: `S_{${n - 1}} = ${p}(${n - 1})^2 ${U.signedNum(q)}(${n - 1}) = ${p * (n - 1) * (n - 1)} ${U.signedNum(q * (n - 1))} = ${snPrev}`, why: lang === 'bm' ? 'Jumlah semua sebutan sebelum ke-' + n + '.' : 'Sum of all terms before the ' + n + '-th term.' },
              { badge: 'J1', title: lang === 'bm' ? `Tolakkan S_${n} − S_${n - 1}` : `Subtract S_${n} − S_${n - 1}`, tex: `T_{${n}} = ${sn} - ${snPrev} = ${tn}`, why: lang === 'bm' ? 'Tₙ = Sₙ − Sₙ₋₁ meninggalkan sebutan tunggal ke-n.' : 'Tₙ = Sₙ − Sₙ₋₁ leaves the single n-th term.' }
            ]
          };
        } else {
          const a = U.randInt(5, 12);
          const d = U.randInt(3, 6);
          const p = U.randInt(5, 8);
          const q = p + U.randInt(5, 8);
          const calcS = (k) => (k / 2) * (2 * a + (k - 1) * d);
          const sq = calcS(q);
          const spMinus1 = calcS(p - 1);
          const sp = calcS(p);
          const ans = sq - spMinus1;
          return {
            tier: 3,
            tpLabel: 'TP5–TP6 (KBAT)',
            subtopic: { bm: '5.1 Hasil Tambah Julat Sebutan S_(p→q)', en: '5.1 Inclusive Range Sum S_(p→q)' },
            marks: 4,
            prompt: lang === 'bm'
              ? `Suatu janjang aritmetik mempunyai sebutan pertama $a = ${a}$ dan beza sepunya $d = ${d}$. Cari hasil tambah semua sebutan dari sebutan ke-$${p}$ hingga sebutan ke-$${q}$ (termasuk kedua-duanya).`
              : `An arithmetic progression has first term $a = ${a}$ and common difference $d = ${d}$. Find the sum of all terms from the $${p}$-th term to the $${q}$-th term inclusive.`,
            answerType: 'number',
            correctValue: ans,
            displayAnswerTex: `S_{${q}} - S_{${p - 1}} = ${ans}`,
            intentMeta: {
              given: { bm: `$a = ${a},\\; d = ${d}$, julat $T_{${p}}$ hingga $T_{${q}}$`, en: `$a = ${a},\\; d = ${d}$, range $T_{${p}}$ to $T_{${q}}$` },
              goal: { bm: `Cari $S_{${q}} - S_{${p - 1}}$`, en: `Find $S_{${q}} - S_{${p - 1}}$` },
              conceptRule: { bm: `Tolak $S_{${p - 1}}$ (BUKAN $S_{${p}}$!) supaya $T_{${p}}$ kekal termasuk`, en: `Subtract $S_{${p - 1}}$ (NOT $S_{${p}}$!) so $T_{${p}}$ stays included` }
            },
            guidedSteps: [
              { prompt: { bm: `Untuk menyimpan $T_{${p}}$ di dalam jumlah, kita mesti menolak $S_k$ daripada $S_{${q}}$. Apakah nilai indeks $k$ itu?`, en: `To keep $T_{${p}}$ included when subtracting $S_k$ from $S_{${q}}$, what must index $k$ be?` }, expected: p - 1, hint: { bm: `Kita buang sebutan sebelum ke-${p}, iaitu k = ${p} − 1 = ${p - 1}.`, en: `Remove terms strictly before ${p}, so k = ${p - 1}.` } },
              { prompt: { bm: `Kira nilai $S_{${q}}$ menggunakan $\\frac{${q}}{2}[2(${a}) + ${q - 1}(${d})]$:`, en: `Compute $S_{${q}} = \\frac{${q}}{2}[2(${a}) + ${q - 1}(${d})]$:` }, expected: sq, hint: { bm: `S_${q} = ${sq}.`, en: `S_${q} = ${sq}.` } },
              { prompt: { bm: `Dengan $S_{${p - 1}} = ${spMinus1}$, kira jawapan akhir $S_{${q}} - S_{${p - 1}}$:`, en: `With $S_{${p - 1}} = ${spMinus1}$, compute $S_{${q}} - S_{${p - 1}}$:` }, expected: ans, hint: { bm: `${sq} − ${spMinus1} = ${ans}.`, en: `${sq} − ${spMinus1} = ${ans}.` } }
            ],
            traps: [
              { value: sq - sp, message: { bm: `Diagnostik Sempadan [P]: Anda mengira $S_{${q}} - S_{${p}} = ${sq - sp}$, yang menyebabkan $T_{${p}}$ ikut terbuang! Anda wajib mengira $S_{${q}} - S_{${p - 1}}$.`, en: `Boundary Diagnosis [P]: You computed $S_{${q}} - S_{${p}} = ${sq - sp}$, accidentally excluding $T_{${p}}$! Compute $S_{${q}} - S_{${p - 1}}$.` } }
            ],
            hints: [
              lang === 'bm' ? `Gunakan $S_{${q}} - S_{${p - 1}}$ supaya sebutan ke-$${p}$ tidak terbuang.` : `Use $S_{${q}} - S_{${p - 1}}$ so term $${p}$ stays included.`,
              lang === 'bm' ? `Kira $S_{${q}} = ${sq}$ dan $S_{${p - 1}} = ${spMinus1}$ dengan rumus $S_n = \\frac{n}{2}[2a + (n-1)d]$.` : `Evaluate $S_{${q}} = ${sq}$ and $S_{${p - 1}} = ${spMinus1}$ using $S_n = \\frac{n}{2}[2a + (n-1)d]$.`
            ],
            steps: [
              { badge: 'P1', title: lang === 'bm' ? 'Tetapkan rumus julat terangkum' : 'Set inclusive range sum formula', tex: `S_{${p} \\to ${q}} = S_{${q}} - S_{${p - 1}}`, why: lang === 'bm' ? `Tolak S_${p - 1} supaya T_${p} kekal di dalam jumlah.` : `Subtract S_${p - 1} so T_${p} stays included.` },
              { badge: 'K1', title: lang === 'bm' ? `Kira S_${q} dengan rumus JA` : `Compute S_${q} using AP formula`, tex: `S_{${q}} = \\frac{${q}}{2}[2(${a}) + (${q - 1})(${d})] = \\frac{${q}}{2}(${2 * a + (q - 1) * d}) = ${sq}`, why: lang === 'bm' ? `Gantikan n = ${q} ke dalam rumus Sₙ.` : `Substitute n = ${q} into the Sₙ formula.` },
              { badge: 'K1', title: lang === 'bm' ? `Kira S_${p - 1} dengan rumus JA` : `Compute S_${p - 1} using AP formula`, tex: `S_{${p - 1}} = \\frac{${p - 1}}{2}[2(${a}) + (${p - 2})(${d})] = \\frac{${p - 1}}{2}(${2 * a + (p - 2) * d}) = ${spMinus1}`, why: lang === 'bm' ? `Gantikan n = ${p - 1} untuk jumlah sebelum T_${p}.` : `Substitute n = ${p - 1} for the sum before T_${p}.` },
              { badge: 'J1', title: lang === 'bm' ? 'Tolakkan untuk hasil tambah julat' : 'Subtract for final range sum', tex: `S_{${p} \\to ${q}} = ${sq} - ${spMinus1} = ${ans}`, why: lang === 'bm' ? `Jawapan tepat bagi julat T_${p} hingga T_${q}.` : `Exact sum from T_${p} to T_${q} inclusive.` }
            ]
          };
        }
      }
    }
  ];

  App.chapters.push(...f4Stage1);
})(window.AddMathApp);
