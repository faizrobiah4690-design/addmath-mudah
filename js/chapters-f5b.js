/**
 * AddMath Mudah — Fasa 4: Tingkatan 5 Bab 5 hingga Bab 8 (Lengkap & Dwibahasa BM / EN)
 * Bab 5: Taburan Kebarangkalian | Bab 6: Fungsi Trigonometri | Bab 7: Pengaturcaraan Linear | Bab 8: Kinematik Gerakan Linear
 */
window.AddMathApp = window.AddMathApp || {};
window.AddMathApp.chapters = window.AddMathApp.chapters || [];

(function (App) {
  'use strict';
  const U = App.utils;

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

  function simplifySqrtTex(n) {
    const num = Math.round(n);
    if (num <= 0) return { coeff: 0, rad: 1, tex: '0' };
    let coeff = 1;
    let rem = num;
    for (let f = 2; f * f <= rem; f++) {
      while (rem % (f * f) === 0) {
        coeff *= f;
        rem /= (f * f);
      }
    }
    if (rem === 1) return { coeff, rad: 1, tex: String(coeff) };
    return { coeff, rad: rem, tex: (coeff === 1 ? '' : String(coeff)) + '\\sqrt{' + rem + '}' };
  }

  function exactSurdFracTex(sgn, coeff, rad, den) {
    if (coeff === 0) return '0';
    const absD = Math.abs(Math.round(den));
    const absC = Math.abs(Math.round(coeff));
    const g = U.gcd(absC, absD);
    const sc = absC / g;
    const sd = absD / g;
    const signStr = sgn < 0 ? '-' : '';
    if (sd === 1) {
      const numStr = rad === 1 ? String(sc) : (sc === 1 ? '' : String(sc)) + '\\sqrt{' + rad + '}';
      return signStr + numStr;
    }
    if (rad === 1) return signStr + '\\frac{' + sc + '}{' + sd + '}';
    return signStr + '\\frac{' + sc + '}{' + sd + '}\\sqrt{' + rad + '}';
  }

  const f5Stage4 = [
    // =========================================================================
    // FORM 5 CHAPTER 5: PROBABILITY DISTRIBUTIONS / TABURAN KEBARANGKALIAN
    // =========================================================================
    {
      id: 'f5-c5',
      stage: 4,
      unlocked: true,
      form: 5,
      num: 5,
      code: { bm: 'T5 • Bab 5', en: 'F5 • Ch 5' },
      icon: 'N(μ,σ²)',
      color: '#d946ef',
      category: 'statistik',
      title: { bm: 'Taburan Kebarangkalian', en: 'Probability Distributions' },
      subtitle: {
        bm: 'Taburan Binomial diskret B(n,p) & Taburan Normal selanjar N(μ,σ²) melalui skor-Z',
        en: 'Discrete Binomial B(n,p) & continuous Normal N(μ,σ²) via Z-score standardization'
      },
      spmWeight: { bm: 'Kertas 1 & Kertas 2 Bhg B (8–12 markah)', en: 'Paper 1 & Paper 2 Sec B (8–12 marks)' },
      concepts: [
        {
          title: { bm: '1. Pemboleh Ubah Rawak Diskret (∑P = 1), Tanda > vs ≥ & Binomial vs Normal', en: '1. Discrete Random Variables (∑P = 1), Strict > vs ≥ & Binomial vs Normal' },
          prereq: {
            bm: 'Ingat kebarangkalian asas T2/T4: $P(A) = \\frac{n(A)}{n(S)}$, iaitu pecahan daripada $1$ piza penuh ($100\\%$). Bayangkan bezanya antara **mengira guli sebiji-sebiji** ($0, 1, 2\\dots$ = **diskret**) dengan **menyukat air dalam botol** ($1.42\\text{ L}, 1.425\\text{ L}\\dots$ = **selanjar**).',
            en: 'Remember F2/F4 probability: $P(A) = \\frac{n(A)}{n(S)}$, a fraction out of $1$ whole pizza ($100\\%$). Picture the difference between **counting whole marbles** ($0, 1, 2\\dots$ = **discrete**) and **measuring water in a bottle** ($1.42\\text{ L}, 1.425\\text{ L}\\dots$ = **continuous**).'
          },
          body: {
            bm: 'Dalam jadual kebarangkalian diskret, jumlah semua kebarangkalian wajib tepat $1$ ($\\sum P(X = x_i) = 1$). Untuk ketaksamaan nombor bulat, berhati-hati dengan jurang $1$ unit: **$P(X > 2)$ bermula pada $3$**, manakala **$P(X \\ge 2)$ termasuk $2$**! Cara memilih taburan: bilangan cubaan tetap $n$ dengan $2$ kesudahan $\\to$ **Binomial**; ukuran selanjar (tinggi, jisim, masa) $\\to$ **Normal**.',
            en: 'In a discrete probability table, all probabilities must sum to $1$ ($\\sum P(X = x_i) = 1$). On integers, watch the 1-unit gap: **$P(X > 2)$ starts at $3$**, whereas **$P(X \\ge 2)$ includes $2$**! Quick choice guide: fixed $n$ trials with $2$ outcomes $\\to$ **Binomial**; measured quantities (height, mass, time) $\\to$ **Normal**.'
          },
          firstStep: {
            bm: '1. Semak sama ada $X$ dibilang ($0, 1, 2\\dots \\to$ Diskret/Binomial) atau diukur (cm, kg, s $\\to$ Normal).\n2. Untuk jadual diskret, terus tulis persamaan $\\sum P(X = x_i) = 1$.\n3. Bulatkan simbol ketat ($>, <$) lawan terangkum ($\\ge, \\le$) dan senaraikan nombor bulat yang sah dahulu!',
            en: '1. Check whether $X$ is counted ($0, 1, 2\\dots \\to$ Discrete/Binomial) or measured (cm, kg, s $\\to$ Normal).\n2. For tables, immediately write $\\sum P(X = x_i) = 1$.\n3. Circle strict ($>, <$) vs inclusive ($\\ge, \\le$) signs and list the valid integers before calculating!'
          },
          formulas: [
            { label: { bm: 'Sifat Taburan Kebarangkalian Diskret', en: 'Discrete Distribution Rule' }, tex: '\\sum_{i} P(X = x_i) = 1, \\qquad 0 \\le P(X = x_i) \\le 1' },
            { label: { bm: 'Perbandingan Ketat vs Terangkum (Nombor Bulat)', en: 'Strict vs Inclusive Comparison (Integers)' }, tex: 'P(X > 2) = P(X \\ge 3) = 1 - P(X \\le 2), \\qquad P(X \\ge 2) = 1 - P(X \\le 1)' }
          ],
          workedExample: {
            title: { bm: 'Contoh Terbimbing: Jadual Diskret & Beza > vs ≥', en: 'Worked Example: Discrete Table & > vs ≥' },
            problem: {
              bm: 'Suatu pemboleh ubah rawak diskret $X \\in \\{1, 2, 3, 4\\}$ mempunyai $P(X=1)=0.15$, $P(X=2)=k$, $P(X=3)=2k$, dan $P(X=4)=0.25$. Cari nilai $k$, $P(X > 2)$, dan $P(X \\ge 2)$.',
              en: 'A discrete random variable $X \\in \\{1, 2, 3, 4\\}$ has $P(X=1)=0.15$, $P(X=2)=k$, $P(X=3)=2k$, and $P(X=4)=0.25$. Find $k$, $P(X > 2)$, and $P(X \\ge 2)$.'
            },
            steps: [
              {
                label: { bm: 'Langkah 1: Guna jumlah kebarangkalian = 1', en: 'Step 1: Apply total probability = 1' },
                tex: '0.15 + k + 2k + 0.25 = 1 \\implies 3k + 0.40 = 1',
                why: { bm: 'Jumlah kebarangkalian semua kesudahan dalam jadual mesti $1$; tambah $0.15 + 0.25 = 0.40$ dan $k + 2k = 3k$.', en: 'All table probabilities must sum to $1$; add $0.15 + 0.25 = 0.40$ and $k + 2k = 3k$.' }
              },
              {
                label: { bm: 'Langkah 2: Selesaikan untuk k', en: 'Step 2: Solve for k' },
                tex: '3k = 1 - 0.40 = 0.60 \\implies k = \\frac{0.60}{3} = 0.20',
                why: { bm: 'Tolak $0.40$ dahulu, kemudian bahagi dengan $3$ untuk mencari nilai $k$.', en: 'Subtract $0.40$ first, then divide by $3$ to isolate $k$.' }
              },
              {
                label: { bm: 'Langkah 3: Bandingkan P(X > 2) dan P(X ≥ 2)', en: 'Step 3: Compare P(X > 2) and P(X ≥ 2)' },
                tex: 'P(X > 2) = P(X=3) + P(X=4) = 2(0.20) + 0.25 = 0.40 + 0.25 = 0.65; \\qquad P(X \\ge 2) = P(X=2) + 0.65 = 0.20 + 0.65 = 0.85',
                why: { bm: 'Pada nombor bulat, $X > 2$ hanya merangkumi $\\{3, 4\\}$, manakala $X \\ge 2$ turut memasukkan $X = 2$.', en: 'On integers, $X > 2$ only includes $\\{3, 4\\}$, whereas $X \\ge 2$ also includes $X = 2$.' }
              }
            ],
            trap: {
              bm: 'Ramai pelajar memasukkan $X = 2$ semasa mengira $P(X > 2)$ — tanda $>$ tanpa garis di bawah bermaksud $2$ TIDAK termasuk!',
              en: 'Many students mistakenly include $X = 2$ in $P(X > 2)$ — strict $>$ without the equal bar excludes $2$!'
            }
          },
          tip: {
            bm: 'Sentiasa semak jawapan jadual diskret anda: pastikan setiap nilai kebarangkalian berada antara $0$ hingga $1$ dan jumlahnya tepat $1.00$!',
            en: 'Always verify your discrete table: every probability must lie between $0$ and $1$ and the total must equal $1.00$!'
          }
        },
        {
          title: { bm: '2. Taburan Binomial X ~ B(n, p), Min/Varians & Pelengkap', en: '2. Binomial Distribution X ~ B(n, p), Mean/Variance & Complement' },
          prereq: {
            bm: 'Ingat gambar rajah pokok lambungan syiling: setiap cubaan hanya ada **Berjaya ($p$)** atau **Gagal ($q = 1 - p$)**. Pekali gabungan $\\,^nC_r$ mengira berapa banyak laluan berbeza pada pokok yang menghasilkan tepat $r$ kejayaan daripada $n$ cubaan.',
            en: 'Think of coin-flip tree diagrams: every trial has only **Success ($p$)** or **Failure ($q = 1 - p$)**. The combination $\\,^nC_r$ counts how many distinct tree paths give exactly $r$ successes out of $n$ trials.'
          },
          body: {
            bm: 'Digunakan bagi **$n$ cubaan tak bersandar** yang serupa dengan kebarangkalian berjaya tetap $p$ dan gagal $q = 1 - p$, di mana $r \\in \\{0, 1, 2, \\dots, n\\}$. Rumus min ialah $\\mu = np$ (purata jangkaan) dan sisihan piawai ialah $\\sigma = \\sqrt{npq}$. Untuk soalan *"sekurang-kurangnya $1$"* ($X \\ge 1$), jalan paling pantas ialah pelengkap $1 - P(X = 0)$!',
            en: 'Models **$n$ independent trials** with constant success probability $p$ and failure $q = 1 - p$, where $r \\in \\{0, 1, 2, \\dots, n\\}$. The mean is $\\mu = np$ (expected count) and standard deviation is $\\sigma = \\sqrt{npq}$. For *"at least $1$"* ($X \\ge 1$), use the fast complement $1 - P(X = 0)$!'
          },
          firstStep: {
            bm: '1. Ekstrak nilai $n$ dan $p$ daripada soalan, kemudian terus kira $q = 1 - p$.\n2. Padankan frasa soalan: *"tepat $r$"* $\\to P(X = r)$; *"sekurang-kurangnya $1$"* $\\to 1 - P(X = 0)$.\n3. Pastikan kuasa pada $p$ dan $q$ sentiasa berjumlah $n$ ($r + (n - r) = n$).',
            en: '1. Extract $n$ and $p$ from the question, then immediately compute $q = 1 - p$.\n2. Match the phrase: *"exactly $r$"* $\\to P(X = r)$; *"at least $1$"* $\\to 1 - P(X = 0)$.\n3. Check that the powers on $p$ and $q$ always add up to $n$ ($r + (n - r) = n$).'
          },
          formulas: [
            { label: { bm: 'Kebarangkalian Binomial', en: 'Binomial Probability' }, tex: 'P(X = r) = {}^nC_r\\,p^r\\,q^{n-r}, \\qquad p + q = 1' },
            { label: { bm: 'Min, Varians & Sisihan Piawai', en: 'Mean, Variance & Standard Deviation' }, tex: '\\mu = np, \\qquad \\sigma^2 = npq, \\qquad \\sigma = \\sqrt{npq}' },
            { label: { bm: 'Jalan Pintas Sekurang-kurangnya 1', en: 'At-Least-1 Complement Shortcut' }, tex: 'P(X \\ge 1) = 1 - P(X = 0) = 1 - q^n' }
          ],
          workedExample: {
            title: { bm: 'Contoh Terbimbing: Kiraan Binomial & Pelengkap', en: 'Worked Example: Binomial Probability & Complement' },
            problem: {
              bm: 'Diberi $X \\sim B(4, 0.3)$. Hitung (a) $P(X = 2)$, (b) $P(X \\ge 1)$, serta (c) min $\\mu$ dan sisihan piawai $\\sigma$.',
              en: 'Given $X \\sim B(4, 0.3)$. Calculate (a) $P(X = 2)$, (b) $P(X \\ge 1)$, and (c) mean $\\mu$ and standard deviation $\\sigma$.'
            },
            steps: [
              {
                label: { bm: 'Langkah 1: Kenal pasti n, p, dan q', en: 'Step 1: Identify n, p, and q' },
                tex: 'n = 4, \\quad p = 0.3, \\quad q = 1 - 0.3 = 0.7',
                why: { bm: 'Sentiasa cari kebarangkalian gagal $q = 1 - p$ sebelum memasukkan nilai ke dalam rumus.', en: 'Always compute failure probability $q = 1 - p$ before substituting into formulas.' }
              },
              {
                label: { bm: 'Langkah 2: Kira (a) P(X = 2) dengan langkah penuh', en: 'Step 2: Compute (a) P(X = 2) with full arithmetic' },
                tex: 'P(X = 2) = {}^4C_2 (0.3)^2 (0.7)^{4-2} = 6 \\times 0.09 \\times 0.49 = 0.2646',
                why: { bm: '$\\,^4C_2 = 6$ mengira semua susunan $2$ kejayaan dan $2$ kegagalan.', en: '$\\,^4C_2 = 6$ counts all arrangements of $2$ successes and $2$ failures.' }
              },
              {
                label: { bm: 'Langkah 3: Kira (b) P(X ≥ 1) guna pelengkap', en: 'Step 3: Compute (b) P(X ≥ 1) using complement' },
                tex: 'P(X \\ge 1) = 1 - P(X = 0) = 1 - (0.7)^4 = 1 - 0.2401 = 0.7599',
                why: { bm: 'Mengira $1 - P(X = 0)$ mengelak daripada menjumlahkan $P(1)+P(2)+P(3)+P(4)$.', en: 'Computing $1 - P(X = 0)$ avoids adding $P(1)+P(2)+P(3)+P(4)$ separately.' }
              },
              {
                label: { bm: 'Langkah 4: Kira (c) min dan sisihan piawai', en: 'Step 4: Compute (c) mean and standard deviation' },
                tex: '\\mu = 4(0.3) = 1.2, \\qquad \\sigma = \\sqrt{4(0.3)(0.7)} = \\sqrt{0.84} = 0.9165',
                why: { bm: 'Ambil punca kuasa dua bagi varians $\\sigma^2 = 0.84$ untuk mendapat sisihan piawai $\\sigma$.', en: 'Take the square root of variance $\\sigma^2 = 0.84$ to obtain standard deviation $\\sigma$.' }
              }
            ],
            trap: {
              bm: 'Jangan lupa pekali $\\,^nC_r$ di hadapan $p^r q^{n-r}$, dan jangan berhenti pada $\\sigma^2 = npq$ apabila soalan meminta sisihan piawai $\\sigma$!',
              en: 'Never omit $\\,^nC_r$ in front of $p^r q^{n-r}$, and do not stop at $\\sigma^2 = npq$ when asked for standard deviation $\\sigma$!'
            }
          },
          tip: {
            bm: 'Untuk $P(X \\ge 1)$, jalan paling pantas ialah pelengkap: $1 - P(X = 0) = 1 - q^n$!',
            en: 'For $P(X \\ge 1)$, the fastest shortcut is the complement: $1 - P(X = 0) = 1 - q^n$!'
          }
        },
        {
          title: { bm: '3. Taburan Normal X ~ N(μ, σ²), Skor-Z & Bacaan Songsang Jadual', en: '3. Normal Distribution X ~ N(μ, σ²), Z-Score & Inverse Table Lookup' },
          prereq: {
            bm: 'Ingat min dan sisihan piawai dari Matematik Tingkatan 4! Bayangkan lengkung loceng sebagai bukit simetri dengan jumlah luas tepat $1.0$: separuh kiri mempunyai luas $0.5$ dan separuh kanan mempunyai luas $0.5$.',
            en: 'Recall mean and standard deviation from Form 4 Math! Picture the bell curve as a symmetric hill of total area $1.0$: the left half has area $0.5$ and the right half has area $0.5$.'
          },
          body: {
            bm: 'Dalam tatatanda $X \\sim N(\\mu, \\sigma^2)$, nombor kedua ialah **varians $\\sigma^2$** (punca kuasakan untuk $\\sigma$!). Tukar $X$ kepada skor piawai $Z = \\frac{X - \\mu}{\\sigma}$. Jadual SPM hanya memberi **ekor kanan $P(Z > z)$**. Untuk bacaan songsang mencari $k$:\n- $P(Z > z) < 0.5 \\implies z > 0$ (kanan min), cari $P$ terus dalam jadual.\n- $P(Z > z) > 0.5 \\implies z < 0$ (kiri min), cari ekor kecil $1 - P$ dan **letak tanda negatif ($-$)**.\n- $P(Z < z) < 0.5 \\implies z < 0$ (kiri min), cari $P$ terus dan **letak tanda negatif ($-$)**.\n- $P(Z < z) > 0.5 \\implies z > 0$ (kanan min), cari ekor kecil $1 - P$ dengan tanda $+$.',
            en: 'In notation $X \\sim N(\\mu, \\sigma^2)$, the second number is **variance $\\sigma^2$** (take $\\sqrt{\\sigma^2}$ for $\\sigma$!). Standardize via $Z = \\frac{X - \\mu}{\\sigma}$. The SPM table only lists **upper-right tails $P(Z > z)$**. For inverse lookup of $k$:\n- $P(Z > z) < 0.5 \\implies z > 0$ (right of mean), look up $P$ directly.\n- $P(Z > z) > 0.5 \\implies z < 0$ (left of mean), look up small tail $1 - P$ and **attach a minus ($-$)**.\n- $P(Z < z) < 0.5 \\implies z < 0$ (left of mean), look up $P$ directly and **attach a minus ($-$)**.\n- $P(Z < z) > 0.5 \\implies z > 0$ (right of mean), look up small tail $1 - P$ with $+$ sign.'
          },
          firstStep: {
            bm: '1. Catat $\\mu$ dan puncakuasakan $\\sigma = \\sqrt{\\sigma^2}$ dahulu.\n2. Lakar lengkung loceng kecil dengan $0$ di tengah dan lorekkan kawasan yang diminta.\n3. Jika luas lorekan $> 0.5$, tolak daripada $1$ untuk mendapat ekor kecil; semak sama ada garis sempadan di kiri ($-z$) atau kanan ($+z$) daripada $0$!',
            en: '1. Extract $\\mu$ and take $\\sigma = \\sqrt{\\sigma^2}$ first.\n2. Sketch a tiny bell curve with $0$ at center and shade the required region.\n3. If shaded area $> 0.5$, subtract from $1$ to get the small tail; check whether the boundary sits left ($-z$) or right ($+z$) of $0$!'
          },
          formulas: [
            { label: { bm: 'Pemboleh Ubah Piawai Skor-Z', en: 'Standard Normal Z-Score' }, tex: 'Z = \\frac{X - \\mu}{\\sigma}' },
            { label: { bm: 'Simetri Hujung Lengkung Normal', en: 'Bell Curve Symmetry Rules' }, tex: 'P(Z < -a) = P(Z > a), \\qquad P(Z > -a) = 1 - P(Z > a)' }
          ],
          workedExample: {
            title: { bm: 'Contoh Terbimbing: Skor-Z & Bacaan Songsang', en: 'Worked Example: Z-Score & Inverse Normal Lookup' },
            problem: {
              bm: 'Diberi $X \\sim N(60, 16)$. Cari (a) $P(X > 66)$, dan (b) nilai $k$ jika $P(X > k) = 0.8413$.',
              en: 'Given $X \\sim N(60, 16)$. Find (a) $P(X > 66)$, and (b) the value of $k$ if $P(X > k) = 0.8413$.'
            },
            steps: [
              {
                label: { bm: 'Langkah 1: Ekstrak min dan sisihan piawai', en: 'Step 1: Extract mean and standard deviation' },
                tex: '\\mu = 60, \\qquad \\sigma^2 = 16 \\implies \\sigma = \\sqrt{16} = 4',
                why: { bm: 'Nombor kedua $16$ ialah varians $\\sigma^2$, jadi punca kuasakan kepada $\\sigma = 4$.', en: 'The second entry $16$ is variance $\\sigma^2$, so take the square root to get $\\sigma = 4$.' }
              },
              {
                label: { bm: 'Langkah 2: (a) Piawaikan X = 66 dan baca jadual', en: 'Step 2: (a) Standardize X = 66 and read table' },
                tex: 'Z = \\frac{66 - 60}{4} = \\frac{6}{4} = 1.5 \\implies P(X > 66) = P(Z > 1.5) = 0.0668',
                why: { bm: 'Tolak dahulu ($66 - 60 = 6$), bahagi dengan $4$, lalu baca $1.5$ terus daripada jadual ekor kanan.', en: 'Subtract first ($66 - 60 = 6$), divide by $4$, then read $1.5$ directly from the upper-tail table.' }
              },
              {
                label: { bm: 'Langkah 3: (b) Bacaan songsang bagi P(X > k) = 0.8413 > 0.5', en: 'Step 3: (b) Inverse lookup for P(X > k) = 0.8413 > 0.5' },
                tex: '1 - 0.8413 = 0.1587 \\implies z_0 = 1.0 \\implies z = -1.0',
                why: { bm: 'Luas kanan $0.8413 > 0.5$ bermakna $k$ di sebelah KIRI min ($z$ negatif). Cari ekor kecil $0.1587$ dalam jadual ($1.0$) dan letak tanda negatif.', en: 'Right area $0.8413 > 0.5$ means $k$ sits LEFT of the mean (negative $z$). Look up small tail $0.1587$ ($1.0$) and attach minus sign.' }
              },
              {
                label: { bm: 'Langkah 4: Selesaikan k daripada skor-Z', en: 'Step 4: Solve for k from Z-score' },
                tex: '\\frac{k - 60}{4} = -1.0 \\implies k - 60 = -4 \\implies k = 56',
                why: { bm: 'Darab $4$ dahulu, kemudian tambah $60$. Semak: $56 < 60$, sepadan dengan bahagian kiri min.', en: 'Multiply by $4$ first, then add $60$. Check: $56 < 60$, consistent with being left of the mean.' }
              }
            ],
            trap: {
              bm: 'Menggunakan $z = +1.0$ tanpa tanda negatif apabila $P(X > k) = 0.8413 > 0.5$ memberi jawapan salah $k = 64$!',
              en: 'Using $z = +1.0$ without the minus sign when $P(X > k) = 0.8413 > 0.5$ gives the wrong value $k = 64$!'
            }
          },
          tip: {
            bm: 'Hati-hati tatatanda $N(\\mu, \\sigma^2)$: nombor kedua ialah VARIANS $\\sigma^2$, jadi punca kuasakan dahulu untuk mendapatkan sisihan piawai $\\sigma$!',
            en: 'Watch notation $N(\\mu, \\sigma^2)$: the second number is VARIANCE $\\sigma^2$ — take its square root to get standard deviation $\\sigma$!'
          }
        }
      ],
      traps: [
        {
          title: { bm: 'Mengguna Varians σ² Terus sebagai Pembahagi Skor-Z', en: 'Dividing by Variance σ² Instead of σ in Z-Score' },
          desc: {
            bm: 'Jika $X \\sim N(50, 16)$, maka $\\sigma^2 = 16$ dan sisihan piawai $\\sigma = 4$ (bukan $16$!). Kira $Z = \\frac{X - 50}{4}$.',
            en: 'If $X \\sim N(50, 16)$, then $\\sigma^2 = 16$ so standard deviation $\\sigma = 4$ (NOT $16$!). Compute $Z = \\frac{X - 50}{4}$.'
          }
        },
        {
          title: { bm: 'Keliru Ketat (>) vs Terangkum (≥) atau Lupa Faktor ⁿCᵣ Binomial', en: 'Confusing Strict (>) vs Inclusive (≥) or Omitting ⁿCᵣ in Binomial' },
          desc: {
            bm: 'Bagi pemboleh ubah diskret, $P(X > 2)$ bermula di $X = 3$, bukan $2$! Dan dalam $P(X = r) = {}^nC_r p^r q^{n-r}$, jangan tertinggal pekali gabungan ${}^nC_r$ di hadapan.',
            en: 'For discrete counts, $P(X > 2)$ starts at $X = 3$, not $2$! And in $P(X = r) = {}^nC_r p^r q^{n-r}$, never omit the ${}^nC_r$ combination factor.'
          }
        },
        {
          title: { bm: 'Lupa Tanda Negatif Skor-Z dalam Bacaan Songsang Normal', en: 'Forgetting Negative Z Sign in Inverse Normal Lookup' },
          desc: {
            bm: 'Apabila $P(X > k) > 0.5$ atau $P(X < k) < 0.5$, sempadan $k$ berada di sebelah **kiri** min $\\mu$, maka nilai $z$ mestilah **negatif** ($-z$).',
            en: 'Whenever $P(X > k) > 0.5$ or $P(X < k) < 0.5$, boundary $k$ lies to the **left** of mean $\\mu$, so your $z$-score MUST be **negative** ($-z$).'
          }
        }
      ],
      solvers: [
        {
          id: 'binomial-normal-solver',
          title: { bm: 'Solver Taburan Normal Skor-Z & Kebarangkalian', en: 'Normal Z-Score & Tail Probability Solver' },
          desc: {
            bm: 'Masukkan nilai X, min μ, dan sisihan piawai σ untuk menjana skor-Z, P(Z > z), dan P(Z < z) ikut Jadual Normal SPM.',
            en: 'Enter X, mean μ, and standard deviation σ to compute Z-score, P(Z > z), and P(Z < z) via the SPM Normal Table.'
          },
          inputs: [
            { id: 'x', label: { bm: 'Nilai X', en: 'Value X' }, default: 68 },
            { id: 'mu', label: { bm: 'Min (Purata) μ', en: 'Mean μ' }, default: 60 },
            { id: 'sd', label: { bm: 'Sisihan piawai σ', en: 'Std Dev σ' }, default: 5 }
          ],
          solve: function (v, lang) {
            const x = numOr(v.x, 68);
            const mu = numOr(v.mu, 60);
            const rawSd = strictNum(v.sd);
            if (!Number.isFinite(rawSd) || rawSd <= 0) {
              const badSdStr = Number.isFinite(rawSd) ? U.roundStr(rawSd) : '\\text{?}';
              return {
                problemTex: `X \\sim N(${U.roundStr(mu)},\\; \\sigma^2), \\quad \\sigma = ${badSdStr}, \\quad X = ${U.roundStr(x)}`,
                steps: [
                  {
                    badge: 'P1',
                    title: lang === 'bm' ? 'Langkah 1: Semak syarat sisihan piawai σ > 0' : 'Step 1: Check standard deviation condition σ > 0',
                    tex: `\\sigma = ${badSdStr} \\le 0 \\quad (\\text{${lang === 'bm' ? 'Input tidak sah' : 'Invalid input'}})`,
                    why: lang === 'bm' ? 'Sisihan piawai σ mestilah nombor positif (σ > 0) kerana pembahagian dengan 0 tidak tertakrif dalam Z = (X − μ)/σ.' : 'Standard deviation σ must be strictly positive (σ > 0) because division by 0 is undefined in Z = (X − μ)/σ.'
                  },
                  {
                    badge: 'K1',
                    title: lang === 'bm' ? 'Langkah 2: Ingat punca kuasa varians σ²' : 'Step 2: Recall variance square-root rule',
                    tex: '\\sigma = \\sqrt{\\sigma^2} > 0',
                    why: lang === 'bm' ? 'Dalam tatatanda N(μ, σ²), nilai σ sentiasa positif.' : 'In notation N(μ, σ²), σ is always positive.'
                  },
                  {
                    badge: 'J1',
                    title: lang === 'bm' ? 'Langkah 3: Masukkan nilai σ > 0 yang sah' : 'Step 3: Enter a valid positive σ > 0',
                    tex: 'Z = \\frac{X - \\mu}{\\sigma}, \\quad \\sigma > 0',
                    why: lang === 'bm' ? 'Cuba masukkan σ = 5 atau mana-mana nilai positif.' : 'Try entering σ = 5 or any positive number.'
                  }
                ],
                finalTex: `\\text{${lang === 'bm' ? 'Input tidak sah: sisihan piawai' : 'Invalid input: standard deviation'} } \\sigma > 0`,
                trapWarning: lang === 'bm'
                  ? 'Amaran Domain [P]: Sisihan piawai $\\sigma$ mesti positif ($\\sigma > 0$)! Anda tidak boleh membahagi skor-$Z$ dengan $0$ atau nombor negatif.'
                  : 'Domain Warning [P]: Standard deviation $\\sigma$ must be strictly positive ($\\sigma > 0$)! You cannot divide a $Z$-score by $0$ or a negative number.'
              };
            }
            const sd = rawSd;
            const diff = x - mu;
            const z = diff / sd;
            const zStr = U.roundStr(z, 3);
            const absZStr = U.roundStr(Math.abs(z), 3);
            const pLess = U.normalCDF(z);
            const pGreater = 1 - pLess;
            const pLessStr = U.roundStr(pLess, 4);
            const pGreaterStr = U.roundStr(pGreater, 4);
            const muSub = mu < 0 ? `(${U.roundStr(mu)})` : U.roundStr(mu);
            const steps = [
              {
                badge: 'P1',
                title: lang === 'bm' ? 'Langkah 1: Tukar kepada Skor-Z' : 'Step 1: Standardize to Z-Score',
                tex: `Z = \\frac{${U.roundStr(x)} - ${muSub}}{${U.roundStr(sd)}} = \\frac{${U.roundStr(diff)}}{${U.roundStr(sd)}} = ${zStr}`,
                why: lang === 'bm' ? 'Tolak min dahulu sebelum membahagi dengan sisihan piawai σ.' : 'Subtract mean μ first before dividing by standard deviation σ.'
              }
            ];
            if (z >= 0) {
              steps.push({
                badge: 'K1',
                title: lang === 'bm' ? 'Langkah 2: Baca terus Jadual Hujung Kanan SPM P(Z > z)' : 'Step 2: Read SPM Upper-Tail Table P(Z > z)',
                tex: `P(Z > ${zStr}) = ${pGreaterStr}`,
                why: lang === 'bm' ? 'Untuk z ≥ 0, Jadual Normal SPM terus memberi luas ekor kanan P(Z > z).' : 'For z ≥ 0, the SPM Normal Table directly gives the right-tail area P(Z > z).'
              });
              steps.push({
                badge: 'J1',
                title: lang === 'bm' ? 'Langkah 3: Kira kawasan kiri P(Z < z) = 1 − P(Z > z)' : 'Step 3: Compute left area P(Z < z) = 1 − P(Z > z)',
                tex: `P(Z < ${zStr}) = 1 - ${pGreaterStr} = ${pLessStr}`,
                why: lang === 'bm' ? 'Jumlah luas di bawah lengkung normal ialah 1.' : 'Total area under the normal curve equals 1.'
              });
            } else {
              steps.push({
                badge: 'K1',
                title: lang === 'bm' ? 'Langkah 2: Guna simetri untuk ekor kiri P(Z < z)' : 'Step 2: Use symmetry for left tail P(Z < z)',
                tex: `P(Z < ${zStr}) = P(Z > ${absZStr}) = ${pLessStr}`,
                why: lang === 'bm' ? 'Untuk z < 0, ekor kiri sama luas dengan ekor kanan P(Z > |z|) dalam jadual.' : 'For z < 0, the left tail equals the upper-tail table entry P(Z > |z|) by symmetry.'
              });
              steps.push({
                badge: 'J1',
                title: lang === 'bm' ? 'Langkah 3: Kira kawasan kanan P(Z > z) = 1 − P(Z < z)' : 'Step 3: Compute right area P(Z > z) = 1 − P(Z < z)',
                tex: `P(Z > ${zStr}) = 1 - ${pLessStr} = ${pGreaterStr}`,
                why: lang === 'bm' ? 'Tolak luas ekor kiri daripada jumlah luas 1.' : 'Subtract the left tail from total curve area 1.'
              });
            }
            return {
              problemTex: `X \\sim N(${mu},\\; ${U.roundStr(sd * sd)}), \\quad X = ${x}`,
              steps,
              finalTex: `Z = ${U.roundStr(z, 2)}, \\quad P(X < ${x}) = ${pLessStr}, \\quad P(X > ${x}) = ${pGreaterStr}`
            };
          }
        }
      ],
      generateQuestion: function (tier, lang) {
        if (tier === 1) {
          const cfg = U.pick([
            { n: 25, p: 0.2, sd: 2 },
            { n: 36, p: 0.5, sd: 3 },
            { n: 100, p: 0.2, sd: 4 },
            { n: 400, p: 0.1, sd: 6 },
            { n: 100, p: 0.64, sd: 4.8 }
          ]);
          const qVal = U.round(1 - cfg.p, 2);
          const meanVal = U.round(cfg.n * cfg.p, 2);
          const varVal = U.round(cfg.n * cfg.p * qVal, 2);
          return {
            tier: 1, tpLabel: 'TP1–TP2', subtopic: { bm: '5.2 Min & Sisihan Piawai Taburan Binomial', en: '5.2 Mean & Standard Deviation of Binomial' }, marks: 3,
            prompt: lang === 'bm'
              ? `Pemboleh ubah rawak diskret $X \\sim B(${cfg.n},\\; ${cfg.p})$. Cari **sisihan piawai ($\\sigma$)** bagi taburan ini.`
              : `A discrete random variable follows $X \\sim B(${cfg.n},\\; ${cfg.p})$. Find the **standard deviation ($\\sigma$)** of this distribution.`,
            answerType: 'number', correctValue: cfg.sd, displayAnswerTex: `\\sigma = ${cfg.sd} \\quad (\\mu = ${meanVal},\\; \\sigma^2 = ${varVal})`,
            intentMeta: {
              given: { bm: `$X \\sim B(${cfg.n}, ${cfg.p})$, iaitu $n = ${cfg.n}$, $p = ${cfg.p}$, $q = ${qVal}$`, en: `$X \\sim B(${cfg.n}, ${cfg.p})$, so $n = ${cfg.n}$, $p = ${cfg.p}$, $q = ${qVal}$` },
              goal: { bm: 'Cari sisihan piawai $\\sigma = \\sqrt{npq}$', en: 'Find standard deviation $\\sigma = \\sqrt{npq}$' },
              conceptRule: { bm: 'Kira $q = 1 - p$, varians $\\sigma^2 = npq$, lalu puncakuasakan untuk $\\sigma = \\sqrt{npq}$', en: 'Compute $q = 1 - p$, variance $\\sigma^2 = npq$, then take square root $\\sigma = \\sqrt{npq}$' }
            },
            guidedSteps: [
              { prompt: { bm: `Kira varians $\\sigma^2 = npq = (${cfg.n})(${cfg.p})(${qVal})$:`, en: `Compute variance $\\sigma^2 = npq = (${cfg.n})(${cfg.p})(${qVal})$:` }, expected: varVal, hint: { bm: `Kira dahulu $q = 1 - ${cfg.p} = ${qVal}$, lalu darab $(${cfg.n})(${cfg.p})(${qVal})$.`, en: `First find $q = 1 - ${cfg.p} = ${qVal}$, then multiply $(${cfg.n})(${cfg.p})(${qVal})$.` } },
              { prompt: { bm: `Punca kuasakan varians ($\\sqrt{${varVal}}$) untuk mendapat sisihan piawai $\\sigma$:`, en: `Take square root ($\\sqrt{${varVal}}$) for standard deviation $\\sigma$:` }, expected: cfg.sd, hint: { bm: `Kira $\\sqrt{${varVal}}$.`, en: `Evaluate $\\sqrt{${varVal}}$.` } }
            ],
            traps: [
              { value: varVal, message: { bm: 'Perangkap [J]: Itu ialah varians σ² = npq! Jangan lupa punca kuasakan untuk mendapat sisihan piawai σ.', en: 'Trap [J]: That is variance σ² = npq! Take the square root for standard deviation σ.' } }
            ],
            hints: [
              lang === 'bm' ? `Langkah pertama, cari kebarangkalian gagal $q = 1 - ${cfg.p} = ${qVal}$.` : `First, find failure probability $q = 1 - ${cfg.p} = ${qVal}$.`,
              lang === 'bm' ? 'Kemudian kira varians $\\sigma^2 = npq$ dan ambil punca kuasa dua $\\sigma = \\sqrt{npq}$.' : 'Next compute variance $\\sigma^2 = npq$ and take the square root $\\sigma = \\sqrt{npq}$.'
            ],
            steps: [
              { badge: 'P1', title: lang === 'bm' ? 'Kira q = 1 − p' : 'Find q = 1 − p', tex: `q = 1 - ${cfg.p} = ${qVal}`, why: lang === 'bm' ? 'Kebarangkalian berjaya dan gagal berjumlah 1.' : 'Success and failure probabilities sum to 1.' },
              { badge: 'K1', title: lang === 'bm' ? 'Kira varians npq' : 'Compute variance npq', tex: `\\sigma^2 = (${cfg.n})(${cfg.p})(${qVal}) = ${meanVal}(${qVal}) = ${varVal}`, why: lang === 'bm' ? 'Darab n × p dahulu untuk min, kemudian darab q untuk varians.' : 'Multiply n × p for mean, then multiply by q for variance.' },
              { badge: 'J1', title: lang === 'bm' ? 'Sisihan piawai σ' : 'Standard deviation σ', tex: `\\sigma = \\sqrt{${varVal}} = ${cfg.sd}`, why: lang === 'bm' ? 'Sisihan piawai ialah punca kuasa dua bagi varians.' : 'Standard deviation is the square root of variance.' }
            ]
          };
        }
        if (tier === 2) {
          const n = 5;
          const p = U.pick([0.2, 0.4, 0.5]);
          const r = U.pick([2, 3]);
          const q = U.round(1 - p, 2);
          const nCrVal = U.nCr(n, r);
          const pPow = U.round(Math.pow(p, r), 4);
          const qPow = U.round(Math.pow(q, n - r), 4);
          const prob = U.round(nCrVal * Math.pow(p, r) * Math.pow(q, n - r), 4);
          return {
            tier: 2, tpLabel: 'TP3–TP4', subtopic: { bm: '5.2 Kebarangkalian Binomial P(X = r)', en: '5.2 Binomial Probability P(X = r)' }, marks: 3,
            prompt: lang === 'bm'
              ? `Kebarangkalian seorang pemanah mengenai sasaran dalam satu panahan ialah $${p}$. Jika dia melepaskan **$${n}$ panahan** secara bebas, cari kebarangkalian dia mengenai sasaran **tepat $${r}$ kali** (bundarkan kepada 4 tempat perpuluhan).`
              : `The probability an archer hits the target on any shot is $${p}$. In **$${n}$ independent shots**, find the probability of hitting **exactly $${r}$ times** (to 4 d.p.).`,
            answerType: 'number', tolerance: 0.002, correctValue: prob, displayAnswerTex: `P(X=${r}) = ${prob}`,
            intentMeta: {
              given: { bm: `$n = ${n}$, $p = ${p}$, $q = ${q}$, $r = ${r}$`, en: `$n = ${n}$, $p = ${p}$, $q = ${q}$, $r = ${r}$` },
              goal: { bm: `Kira $P(X = ${r}) = {}^5C_{${r}} p^{${r}} q^{${n - r}}$`, en: `Compute $P(X = ${r}) = {}^5C_{${r}} p^{${r}} q^{${n - r}}$` },
              conceptRule: { bm: 'Guna rumus $P(X = r) = {}^nC_r p^r q^{n-r}$ dengan $q = 1 - p$', en: 'Apply $P(X = r) = {}^nC_r p^r q^{n-r}$ with $q = 1 - p$' }
            },
            guidedSteps: [
              { prompt: { bm: `Berapakah nilai pekali gabungan $\\,{}^{${n}}C_{${r}}$?`, en: `What is the combination coefficient $\\,{}^{${n}}C_{${r}}$?` }, expected: nCrVal, hint: { bm: `⁵C₂ = 10 dan ⁵C₃ = 10.`, en: `⁵C₂ = 10 and ⁵C₃ = 10.` } },
              { prompt: { bm: `Darabkan $\\,{}^{${n}}C_{${r}} \\times (${p})^{${r}} \\times (${q})^{${n - r}}$ (4 t.p.):`, en: `Multiply $\\,{}^{${n}}C_{${r}} \\times (${p})^{${r}} \\times (${q})^{${n - r}}$ (4 d.p.):` }, expected: prob, hint: { bm: `Kira ${nCrVal} × ${U.roundStr(pPow, 4)} × ${U.roundStr(qPow, 4)}.`, en: `Evaluate ${nCrVal} × ${U.roundStr(pPow, 4)} × ${U.roundStr(qPow, 4)}.` } }
            ],
            traps: [
              { value: U.round(Math.pow(p, r) * Math.pow(q, n - r), 4), message: { bm: 'Perangkap [P]: Anda terlupa mendarab pekali gabungan ⁿCᵣ di hadapan!', en: 'Trap [P]: You forgot the ⁿCᵣ combination factor in front!' } }
            ],
            hints: [
              lang === 'bm' ? `Mula dengan $q = 1 - ${p} = ${q}$ dan kenal pasti $n = ${n}, r = ${r}$.` : `Start with $q = 1 - ${p} = ${q}$ and identify $n = ${n}, r = ${r}$.`,
              lang === 'bm' ? 'Guna $P(X = r) = {}^nC_r p^r q^{n-r}$ — jangan lupa faktor gabungan ${}^5C_r$!' : 'Apply $P(X = r) = {}^nC_r p^r q^{n-r}$ — do not omit ${}^5C_r$!'
            ],
            steps: [
              { badge: 'P1', title: lang === 'bm' ? 'Cari kebarangkalian gagal q = 1 − p' : 'Find failure probability q = 1 − p', tex: `q = 1 - ${p} = ${q}`, why: lang === 'bm' ? 'Setiap panahan hanya berjaya (p) atau gagal (q).' : 'Each shot only succeeds (p) or fails (q).' },
              { badge: 'K1', title: lang === 'bm' ? 'Gantikan ke dalam rumus Binomial' : 'Substitute into Binomial formula', tex: `P(X=${r}) = {}^{${n}}C_{${r}}(${p})^{${r}}(${q})^{${n - r}}`, why: lang === 'bm' ? 'ⁿCᵣ mengira bilangan susunan bagi r panahan yang mengena.' : 'ⁿCᵣ counts all arrangements with r hits.' },
              { badge: 'K1', title: lang === 'bm' ? 'Nilaikan setiap faktor' : 'Evaluate each factor', tex: `= ${nCrVal} \\times ${U.roundStr(pPow, 4)} \\times ${U.roundStr(qPow, 4)}`, why: lang === 'bm' ? 'Kira ⁿCᵣ, kuasa p, dan kuasa q secara berasingan sebelum mendarab.' : 'Compute ⁿCᵣ, p^r, and q^(n-r) separately before multiplying.' },
              { badge: 'J1', title: lang === 'bm' ? 'Kebarangkalian tepat (4 t.p.)' : 'Exact probability (4 d.p.)', tex: `= ${prob}`, why: lang === 'bm' ? 'Bundarkan jawapan akhir kepada 4 tempat perpuluhan.' : 'Round final answer to 4 decimal places.' }
            ]
          };
        }
        const mu = U.pick([50, 60, 100]);
        const sd = U.pick([4, 5, 8]);
        const zTarget = U.pick([1.0, 1.25, 1.5]);
        const xCut = mu + zTarget * sd;
        const diff = xCut - mu;
        const pLeft = U.round(U.normalCDF(zTarget), 4);
        const ans = U.round(1 - U.normalCDF(zTarget), 4);
        const varTrapZ = diff / (sd * sd);
        const varTrapAns = U.round(1 - U.normalCDF(varTrapZ), 4);
        return {
          tier: 3, tpLabel: 'TP5–TP6 (KBAT)', subtopic: { bm: '5.3 Taburan Normal N(μ, σ²) & Skor-Z', en: '5.3 Normal Distribution N(μ, σ²) & Z-Score' }, marks: 4,
          prompt: lang === 'bm'
            ? `Markah ujian sekumpulan pelajar bertaburan secara normal mengikut $X \\sim N(${mu},\\; ${sd * sd})$. Cari kebarangkalian seorang pelajar yang dipilih secara rawak mendapat markah **melebihi $${xCut}$**, iaitu $P(X > ${xCut})$ (bundarkan kepada 4 tempat perpuluhan).`
            : `Test scores of students follow a normal distribution $X \\sim N(${mu},\\; ${sd * sd})$. Find the probability that a randomly chosen student scores **more than $${xCut}$**, i.e. $P(X > ${xCut})$ (to 4 d.p.).`,
          answerType: 'number', tolerance: 0.002, correctValue: ans, displayAnswerTex: `P(Z > ${zTarget}) = ${ans}`,
          intentMeta: {
            given: { bm: `$X \\sim N(${mu}, ${sd * sd})$ memberi $\\mu = ${mu}$ dan $\\sigma = \\sqrt{${sd * sd}} = ${sd}$`, en: `$X \\sim N(${mu}, ${sd * sd})$ gives $\\mu = ${mu}$ and $\\sigma = \\sqrt{${sd * sd}} = ${sd}$` },
            goal: { bm: `Tukar $X = ${xCut}$ kepada $Z$ dan cari ekor kanan $P(Z > z)$`, en: `Standardize $X = ${xCut}$ to $Z$ and find upper tail $P(Z > z)$` },
            conceptRule: { bm: 'Ingat $\\sigma = \\sqrt{\\sigma^2}$! Guna $Z = \\frac{X - \\mu}{\\sigma}$', en: 'Remember $\\sigma = \\sqrt{\\sigma^2}$! Use $Z = \\frac{X - \\mu}{\\sigma}$' }
          },
          guidedSteps: [
            { prompt: { bm: `Perhatikan tatatanda $N(${mu}, ${sd * sd})$ memberi $\\sigma^2 = ${sd * sd}$, maka $\\sigma = ${sd}$. Kira skor-$Z = \\frac{${xCut} - ${mu}}{${sd}}$:`, en: `Note $N(${mu}, ${sd * sd})$ gives $\\sigma^2 = ${sd * sd}$, so $\\sigma = ${sd}$. Compute $Z = \\frac{${xCut} - ${mu}}{${sd}}$:` }, expected: zTarget, hint: { bm: `Tolak ${xCut} − ${mu} = ${diff}, lalu bahagi dengan ${sd}.`, en: `Subtract ${xCut} − ${mu} = ${diff}, then divide by ${sd}.` } },
            { prompt: { bm: `Cari kebarangkalian kawasan kanan $P(Z > ${zTarget})$ (4 t.p.):`, en: `Find the right-tail probability $P(Z > ${zTarget})$ (4 d.p.):` }, expected: ans, hint: { bm: `Daripada jadual normal piawai, $P(Z > ${zTarget}) = 1 - ${pLeft}$.`, en: `From the standard normal table, $P(Z > ${zTarget}) = 1 - ${pLeft}$.` } }
          ],
          traps: [
            { value: varTrapAns, message: { bm: `Perangkap Klasik SPM [P]: Dalam N(${mu}, ${sd * sd}), nombor ${sd * sd} ialah VARIANS σ²! Anda mesti membahagi dengan sisihan piawai σ = √${sd * sd} = ${sd}.`, en: `Classic SPM Trap [P]: In N(${mu}, ${sd * sd}), ${sd * sd} is VARIANCE σ²! Divide by σ = √${sd * sd} = ${sd}.` } },
            { value: pLeft, message: { bm: 'Perangkap [K]: Itu ialah luas sebelah kiri P(Z < z)! Bagi P(Z > z), tolak daripada 1.', en: 'Trap [K]: That is left area P(Z < z)! Subtract from 1 for P(Z > z).' } }
          ],
          hints: [
            lang === 'bm' ? `Ambil punca kuasa dua varians dahulu: $\\sigma = \\sqrt{${sd * sd}} = ${sd}$.` : `Take the square root of variance first: $\\sigma = \\sqrt{${sd * sd}} = ${sd}$.`,
            lang === 'bm' ? `Kira $Z = \\frac{${xCut} - ${mu}}{${sd}}$, kemudian baca ekor kanan $P(Z > z)$.` : `Compute $Z = \\frac{${xCut} - ${mu}}{${sd}}$, then read the upper-tail probability $P(Z > z)$.`
          ],
          steps: [
            { badge: 'P1', title: lang === 'bm' ? 'Ekstrak sisihan piawai σ daripada varians' : 'Extract standard deviation σ from variance', tex: `\\sigma^2 = ${sd * sd} \\implies \\sigma = \\sqrt{${sd * sd}} = ${sd}`, why: lang === 'bm' ? 'Elak perangkap membahagi dengan varians σ²!' : 'Avoid the trap of dividing by variance σ²!' },
            { badge: 'K1', title: lang === 'bm' ? 'Tukar X kepada Skor-Z' : 'Standardize X to Z-Score', tex: `Z = \\frac{${xCut} - ${mu}}{${sd}} = \\frac{${diff}}{${sd}} = ${zTarget}`, why: lang === 'bm' ? 'Tolak min dahulu sebelum membahagi dengan σ.' : 'Subtract mean before dividing by σ.' },
            { badge: 'K1', title: lang === 'bm' ? 'Tulis kebarangkalian ekor kanan' : 'Write upper-tail probability', tex: `P(X > ${xCut}) = P(Z > ${zTarget}) = 1 - \\Phi(${zTarget})`, why: lang === 'bm' ? 'Jadual SPM memberi luas di sebelah kanan z.' : 'The SPM upper-tail table gives the area to the right of z.' },
            { badge: 'J1', title: lang === 'bm' ? 'Bacaan Jadual Normal Piawai' : 'Standard Normal Table Result', tex: `= 1 - ${pLeft} = ${ans}`, why: lang === 'bm' ? 'Nilai akhir kepada 4 tempat perpuluhan.' : 'Final value to 4 decimal places.' }
          ]
        };
      }
    },

    // =========================================================================
    // FORM 5 CHAPTER 6: TRIGONOMETRIC FUNCTIONS / FUNGSI TRIGONOMETRI
    // =========================================================================
    {
      id: 'f5-c6',
      stage: 4,
      unlocked: true,
      form: 5,
      num: 6,
      code: { bm: 'T5 • Bab 6', en: 'F5 • Ch 6' },
      icon: 'sin 2A',
      color: '#7c3aed',
      category: 'trigo',
      title: { bm: 'Fungsi Trigonometri', en: 'Trigonometric Functions' },
      subtitle: {
        bm: 'Sukuan ASTC, sec/csc/cot, identiti Pythagoras, sudut majmuk/berganda & lakaran gelombang',
        en: 'ASTC quadrants, sec/csc/cot, Pythagorean identities, compound/double angles & wave graphs'
      },
      spmWeight: { bm: 'Kertas 1 & Kertas 2 (8–12 markah)', en: 'Paper 1 & Paper 2 (8–12 marks)' },
      concepts: [
        {
          title: { bm: '1. Asas T3 SOH-CAH-TOA, Sudut Istimewa (30°, 45°, 60°), Sukuan ASTC & Salingan', en: '1. F3 SOH-CAH-TOA, Special Angles (30°, 45°, 60°), ASTC Quadrants & Reciprocals' },
          prereq: {
            bm: 'Ingat segi tiga bersudut tegak T3: **SOH-CAH-TOA** ($\\sin = \\frac{T}{H}$, $\\cos = \\frac{S}{H}$, $\\tan = \\frac{T}{S}$), Pythagoras $a^2 + b^2 = c^2$, penukaran $\\pi\\text{ rad} = 180^\\circ$, dan nilai tepat sudut istimewa: $\\sin 30^\\circ = \\cos 60^\\circ = \\frac{1}{2}$, $\\sin 45^\\circ = \\cos 45^\\circ = \\frac{1}{2}\\sqrt{2}$, $\\sin 60^\\circ = \\cos 30^\\circ = \\frac{1}{2}\\sqrt{3}$, $\\tan 30^\\circ = \\frac{1}{3}\\sqrt{3}$, $\\tan 45^\\circ = 1$, $\\tan 60^\\circ = \\sqrt{3}$.',
            en: 'Recall F3 right-angled triangles: **SOH-CAH-TOA** ($\\sin = \\frac{O}{H}$, $\\cos = \\frac{A}{H}$, $\\tan = \\frac{O}{A}$), Pythagoras $a^2 + b^2 = c^2$, $\\pi\\text{ rad} = 180^\\circ$, and exact special angles: $\\sin 30^\\circ = \\cos 60^\\circ = \\frac{1}{2}$, $\\sin 45^\\circ = \\cos 45^\\circ = \\frac{1}{2}\\sqrt{2}$, $\\sin 60^\\circ = \\cos 30^\\circ = \\frac{1}{2}\\sqrt{3}$, $\\tan 30^\\circ = \\frac{1}{3}\\sqrt{3}$, $\\tan 45^\\circ = 1$, $\\tan 60^\\circ = \\sqrt{3}$.'
          },
          body: {
            bm: 'Gunakan peraturan sukuan **ASTC** (*All Students Take Calculus* / **S-S-T-K**: **S**emua $+$ di Q1, **S**in $+$ di Q2, **T**an $+$ di Q3, **K**os $+$ di Q4). Untuk fungsi salingan, tengok **huruf ke-3**: `co`**s**`ec` $\\to \\frac{1}{\\sin}$, `se`**c** $\\to \\frac{1}{\\cos}$, `co`**t** $\\to \\frac{1}{\\tan}$. Sudut rujukan $\\alpha$ sentiasa diukur daripada **paksi-$x$ mendatar** ($180^\\circ - \\alpha$, $180^\\circ + \\alpha$, $360^\\circ - \\alpha$).',
            en: 'Use **ASTC** (*Add Sugar To Coffee*): Q1 (**All +**), Q2 (**sin +**), Q3 (**tan +**), Q4 (**cos +**). For reciprocals, check the **3rd letter**: `co`**s**`ec` $= \\frac{1}{\\sin}$, `se`**c** $= \\frac{1}{\\cos}$, `co`**t** $= \\frac{1}{\\tan}$. Reference angle $\\alpha$ is always measured from the **horizontal $x$-axis** ($180^\\circ - \\alpha$, $180^\\circ + \\alpha$, $360^\\circ - \\alpha$).'
          },
          firstStep: {
            bm: '1. Tukar sebarang $\\sec, \\csc, \\cot$ kepada $\\cos, \\sin, \\tan$ menggunakan huruf ke-3.\n2. Kenal pasti sukuan daripada julat sudut ($90^\\circ < \\theta < 180^\\circ \\implies$ Q2) atau pasangan tanda $+ / -$.\n3. Lakar segi tiga bersudut tegak dengan Pythagoras dan letakkan tanda $+/-$ mengikut ASTC!',
            en: '1. Convert any $\\sec, \\csc, \\cot$ to $\\cos, \\sin, \\tan$ using the 3rd-letter rule.\n2. Identify the quadrant from the angle range ($90^\\circ < \\theta < 180^\\circ \\implies$ Q2) or $+/-$ signs.\n3. Draw a right triangle via Pythagoras and attach ASTC $+/-$ signs!'
          },
          formulas: [
            { label: { bm: 'Nisbah Salingan (Peraturan Huruf Ke-3)', en: 'Reciprocal Ratios (3rd-Letter Rule)' }, tex: '\\sec\\theta = \\frac{1}{\\cos\\theta}, \\qquad \\csc\\theta = \\frac{1}{\\sin\\theta}, \\qquad \\cot\\theta = \\frac{1}{\\tan\\theta} = \\frac{\\cos\\theta}{\\sin\\theta}' },
            { label: { bm: 'Sudut Istimewa (30°, 45°, 60°)', en: 'Special Angles (30°, 45°, 60°)' }, tex: '\\sin 30^\\circ = \\frac{1}{2},\\; \\sin 45^\\circ = \\frac{1}{2}\\sqrt{2},\\; \\sin 60^\\circ = \\frac{1}{2}\\sqrt{3},\\; \\tan 30^\\circ = \\frac{1}{3}\\sqrt{3},\\; \\tan 60^\\circ = \\sqrt{3}' }
          ],
          workedExample: {
            title: { bm: 'Contoh Terbimbing: Segi Tiga Sukuan II & Nisbah Salingan', en: 'Worked Example: Quadrant II Triangle & Reciprocal Ratio' },
            problem: {
              bm: 'Diberi $\\tan\\theta = -\\frac{5}{12}$ dan $90^\\circ < \\theta < 180^\\circ$. Tanpa kalkulator, cari nilai tepat $\\sin\\theta$, $\\cos\\theta$, dan $\\sec\\theta$.',
              en: 'Given $\\tan\\theta = -\\frac{5}{12}$ and $90^\\circ < \\theta < 180^\\circ$. Without a calculator, find exact values of $\\sin\\theta$, $\\cos\\theta$, and $\\sec\\theta$.'
            },
            steps: [
              {
                label: { bm: 'Langkah 1: Cari hipotenus guna Teorem Pythagoras', en: 'Step 1: Find hypotenuse via Pythagoras' },
                tex: { bm: '\\text{hip} = \\sqrt{5^2 + 12^2} = \\sqrt{25 + 144} = \\sqrt{169} = 13', en: '\\text{hyp} = \\sqrt{5^2 + 12^2} = \\sqrt{25 + 144} = \\sqrt{169} = 13' },
                why: { bm: 'Abaikan tanda negatif sementara semasa mencari panjang sisi segi tiga.', en: 'Ignore the minus sign temporarily when computing triangle side lengths.' }
              },
              {
                label: { bm: 'Langkah 2: Tentukan tanda Sukuan II (ASTC)', en: 'Step 2: Apply Quadrant II ASTC signs' },
                tex: '\\sin\\theta = +\\frac{5}{13}, \\qquad \\cos\\theta = -\\frac{12}{13}',
                why: { bm: 'Dalam Sukuan II ($90^\\circ < \\theta < 180^\\circ$), hanya $\\sin\\theta > 0$ manakala $\\cos\\theta < 0$.', en: 'In Quadrant II ($90^\\circ < \\theta < 180^\\circ$), only $\\sin\\theta > 0$ while $\\cos\\theta < 0$.' }
              },
              {
                label: { bm: 'Langkah 3: Songsangkan kosinus untuk sekan', en: 'Step 3: Invert cosine for secant' },
                tex: '\\sec\\theta = \\frac{1}{\\cos\\theta} = \\frac{1}{-12/13} = -\\frac{13}{12}',
                why: { bm: 'Huruf ke-3 `se`**c** ialah $\\frac{1}{\\cos}$, jadi $\\sec\\theta$ berkongsi tanda negatif $\\cos\\theta$.', en: 'The 3rd letter of `se`**c** is $\\cos$, so $\\sec\\theta$ keeps the negative sign of $\\cos\\theta$.' }
              }
            ],
            trap: {
              bm: 'Jangan lupa tanda negatif pada $\\sec\\theta = -\\frac{13}{12}$ — menulis $+\\frac{13}{12}$ mengabaikan bahawa kosinus negatif dalam Sukuan II!',
              en: 'Do not drop the minus sign on $\\sec\\theta = -\\frac{13}{12}$ — writing $+\\frac{13}{12}$ forgets that cosine is negative in Quadrant II!'
            }
          },
          tip: {
            bm: 'Sentiasa semak 3 langkah: Segi Tiga Pythagoras $\\to$ Sukuan ASTC $\\to$ Huruf ke-3 Salingan!',
            en: 'Always follow 3 checks: Pythagoras Triangle $\\to$ ASTC Quadrant $\\to$ 3rd-Letter Reciprocal!'
          }
        },
        {
          title: { bm: '2. Identiti Pythagoras, Sudut Majmuk & Peraturan Membukti Identiti', en: '2. Pythagorean Identities, Compound Angles & Identity-Proving Rules' },
          prereq: {
            bm: 'Ingat pecahan algebra ($\\frac{1}{a} + \\frac{1}{b} = \\frac{b + a}{ab}$) dan pemfaktoran beza dua kuasa dua $a^2 - b^2 = (a - b)(a + b)$ — semua bukti identiti trig cuma guna kemahiran pecahan T2 ini!',
            en: 'Recall algebraic fractions ($\\frac{1}{a} + \\frac{1}{b} = \\frac{b + a}{ab}$) and difference of squares $a^2 - b^2 = (a - b)(a + b)$ — trig identity proofs rely on these exact Form 2 fraction tools!'
          },
          body: {
            bm: 'Gunakan $3$ identiti Pythagoras dan rumus **sudut majmuk** ($\\sin(A \\pm B)$, $\\cos(A \\pm B)$, $\\tan(A \\pm B)$). **4 Peraturan Emas Membukti Identiti:** (1) Kerja pada **SATU sebelah sahaja** (`LHS -> RHS`), JANGAN darab silang merentas $=$; (2) Tukar $\\tan, \\sec, \\csc, \\cot$ kepada $\\sin$ dan $\\cos$; (3) Gabung pecahan atas penyebut sepunya; (4) Pilih wajah $\\cos 2A$ ($2\\cos^2 A - 1$ atau $1 - 2\\sin^2 A$) yang terus membatalkan angka $1$.',
            en: 'Combine the $3$ Pythagorean identities with **compound-angle formulas** ($\\sin(A \\pm B)$, $\\cos(A \\pm B)$, $\\tan(A \\pm B)$). **4 Golden Identity-Proving Rules:** (1) Work **ONE side only** (`LHS -> RHS`), NEVER cross-multiply across $=$; (2) Convert $\\tan, \\sec, \\csc, \\cot$ into $\\sin$ and $\\cos$; (3) Merge fractions via common denominator; (4) Pick the $\\cos 2A$ form ($2\\cos^2 A - 1$ or $1 - 2\\sin^2 A$) that cancels $1$ cleanly.'
          },
          firstStep: {
            bm: '1. Pilih sebelah yang lebih rumit (biasanya `LHS`) dan biarkan sebelah satu lagi sebagai sasaran.\n2. Tukar semua $\\tan, \\sec, \\csc, \\cot$ menjadi $\\sin$ dan $\\cos$.\n3. Untuk sudut majmuk seperti $\\cos 15^\\circ$, pecahkan kepada sudut istimewa: $45^\\circ - 30^\\circ$!',
            en: '1. Start from the messier side (usually `LHS`) and keep the other side untouched as your target.\n2. Rewrite all $\\tan, \\sec, \\csc, \\cot$ in terms of $\\sin$ and $\\cos$.\n3. For compound angles like $\\cos 15^\\circ$, split into special angles: $45^\\circ - 30^\\circ$!'
          },
          formulas: [
            { label: { bm: '3 Identiti Asas Pythagoras', en: '3 Core Pythagorean Identities' }, tex: '\\sin^2 A + \\cos^2 A = 1, \\qquad 1 + \\tan^2 A = \\sec^2 A, \\qquad 1 + \\cot^2 A = \\csc^2 A' },
            { label: { bm: 'Rumus Sudut Majmuk Sinus & Kosinus', en: 'Sine & Cosine Compound-Angle Formulas' }, tex: '\\sin(A \\pm B) = \\sin A\\cos B \\pm \\cos A\\sin B, \\qquad \\cos(A \\pm B) = \\cos A\\cos B \\mp \\sin A\\sin B' },
            { label: { bm: 'Rumus Sudut Majmuk Tangen', en: 'Tangent Compound-Angle Formula' }, tex: '\\tan(A \\pm B) = \\frac{\\tan A \\pm \\tan B}{1 \\mp \\tan A\\tan B}' }
          ],
          workedExample: {
            title: { bm: 'Contoh Terbimbing: Nilai Tepat cos 15° & Bukti Identiti', en: 'Worked Example: Exact cos 15° & Proving an Identity' },
            problem: {
              bm: '(a) Cari nilai tepat $\\cos 15^\\circ$ dalam bentuk surd. (b) Buktikan $\\frac{1 - \\cos 2\\theta}{\\sin 2\\theta} = \\tan\\theta$.',
              en: '(a) Find exact $\\cos 15^\\circ$ in surd form. (b) Prove $\\frac{1 - \\cos 2\\theta}{\\sin 2\\theta} = \\tan\\theta$.'
            },
            steps: [
              {
                label: { bm: 'Langkah 1: (a) Pecahkan 15° = 45° − 30° guna cos(A − B)', en: 'Step 1: (a) Split 15° = 45° − 30° using cos(A − B)' },
                tex: '\\cos(45^\\circ - 30^\\circ) = \\cos 45^\\circ\\cos 30^\\circ + \\sin 45^\\circ\\sin 30^\\circ',
                why: { bm: 'Perhatikan tanda di tengah rumus $\\cos(A - B)$ bertukar menjadi $+$ (berlawanan tanda).', en: 'Notice the middle sign in $\\cos(A - B)$ flips to $+$ (opposite sign).' }
              },
              {
                label: { bm: 'Langkah 2: Ganti surd sudut istimewa dan gabung pecahan', en: 'Step 2: Substitute special-angle surds and combine' },
                tex: '= \\left(\\frac{1}{2}\\sqrt{2}\\right)\\left(\\frac{1}{2}\\sqrt{3}\\right) + \\left(\\frac{1}{2}\\sqrt{2}\\right)\\left(\\frac{1}{2}\\right) = \\frac{1}{4}\\sqrt{6} + \\frac{1}{4}\\sqrt{2} = \\frac{1}{4}(\\sqrt{6} + \\sqrt{2})',
                why: { bm: '$\\sqrt{2} \\times \\sqrt{3} = \\sqrt{6}$; $\\sqrt{6}$ dan $\\sqrt{2}$ bukan surd serupa jadi kekal berasingan.', en: '$\\sqrt{2} \\times \\sqrt{3} = \\sqrt{6}$; $\\sqrt{6}$ and $\\sqrt{2}$ are unlike surds so do not add inside the root.' }
              },
              {
                label: { bm: 'Langkah 3: (b) Pilih wajah cos 2θ yang membatalkan 1', en: 'Step 3: (b) Pick the cos 2θ form that cancels 1' },
                tex: '\\text{LHS} = \\frac{1 - (1 - 2\\sin^2\\theta)}{2\\sin\\theta\\cos\\theta} = \\frac{2\\sin^2\\theta}{2\\sin\\theta\\cos\\theta} = \\frac{\\sin\\theta}{\\cos\\theta} = \\tan\\theta = \\text{RHS}',
                why: { bm: 'Menggunakan $\\cos 2\\theta = 1 - 2\\sin^2\\theta$ menjadikan $1 - 1 = 0$, lalu $2\\sin\\theta$ dimansuhkan.', en: 'Using $\\cos 2\\theta = 1 - 2\\sin^2\\theta$ gives $1 - 1 = 0$, leaving $2\\sin\\theta$ to cancel cleanly.' }
              }
            ],
            trap: {
              bm: 'Jangan sesekali menulis $\\cos(45^\\circ - 30^\\circ) = \\cos 45^\\circ - \\cos 30^\\circ$! Kosinus bukan operasi pengagihan linear.',
              en: 'Never write $\\cos(45^\\circ - 30^\\circ) = \\cos 45^\\circ - \\cos 30^\\circ$! Cosine does not distribute linearly.'
            }
          },
          tip: {
            bm: 'Dalam $\\cos(A \\pm B)$, tanda tengah sentiasa BERLAWANAN ($+$ menjadi $-$, $-$ menjadi $+$)!',
            en: 'In $\\cos(A \\pm B)$, the middle sign is always OPPOSITE ($+$ becomes $-$, $-$ becomes $+$)!',
          }
        },
        {
          title: { bm: '3. Rumus Sudut Berganda & Persamaan Trig (Peluasan Domain 0° ≤ 2x ≤ 720°)', en: '3. Double-Angle Formulas & Trig Equations (Domain Expansion 0° ≤ 2x ≤ 720°)' },
          prereq: {
            bm: 'Ingat pemfaktoran kuadratik $ax^2 + bx + c = 0$ dan pengeluaran faktor sepunya $ab - a = a(b - 1) = 0$. Jangan sekali-kali memansuhkan pemboleh ubah dengan membahagi!',
            en: 'Recall quadratic factoring $ax^2 + bx + c = 0$ and common-factor extraction $ab - a = a(b - 1) = 0$. Never divide both sides by a variable factor!'
          },
          body: {
            bm: 'Gunakan rumus sudut berganda $\\sin 2A$, $\\cos 2A$, $\\tan 2A$ untuk menyamakan sudut persamaan. **Peraturan Peluasan Domain:** Jika $0^\\circ \\le x \\le 360^\\circ$ dan sudut ialah $2x$, darab julat dahulu menjadi **$0^\\circ \\le 2x \\le 720^\\circ$** SEBELUM mencari sudut rujukan $\\alpha$ dan sukuan ASTC! Senaraikan pusingan 1 dan pusingan 2 ($+360^\\circ$), kemudian **bahagi dengan $2$ pada baris terakhir**.',
            en: 'Use double-angle formulas $\\sin 2A$, $\\cos 2A$, $\\tan 2A$ to match angles. **Domain Expansion Rule:** If $0^\\circ \\le x \\le 360^\\circ$ and the angle is $2x$, first expand to **$0^\\circ \\le 2x \\le 720^\\circ$** BEFORE finding reference angle $\\alpha$ and ASTC quadrants! List Cycle 1 and Cycle 2 ($+360^\\circ$), then **divide by $2$ on the very last step**.'
          },
          firstStep: {
            bm: '1. Pindahkan semua sebutan ke LHS jika terdapat faktor sepunya ($2\\sin x\\cos x - \\sin x = 0$) — jangan potong $\\sin x$!\n2. Bagi sudut $2x$ atau $3x$, terus tulis julat baharu ($0^\\circ \\le 2x \\le 720^\\circ$).\n3. Tekan $\\sin^{-1}|k|$ (abaikan tanda negatif!) untuk dapat sudut rujukan $\\alpha$ dahulu.',
            en: '1. Move all terms to LHS if there is a common factor ($2\\sin x\\cos x - \\sin x = 0$) — never cancel $\\sin x$!\n2. For angles $2x$ or $3x$, immediately write the expanded range ($0^\\circ \\le 2x \\le 720^\\circ$).\n3. Press $\\sin^{-1}|k|$ (ignore the minus sign!) to get reference angle $\\alpha$ first.'
          },
          formulas: [
            { label: { bm: 'Rumus Sudut Berganda', en: 'Double-Angle Formulas' }, tex: '\\sin 2A = 2\\sin A\\cos A, \\qquad \\cos 2A = \\cos^2 A - \\sin^2 A = 2\\cos^2 A - 1 = 1 - 2\\sin^2 A' },
            { label: { bm: 'Tangen Sudut Berganda', en: 'Double-Angle Tangent' }, tex: '\\tan 2A = \\frac{2\\tan A}{1 - \\tan^2 A}' }
          ],
          workedExample: {
            title: { bm: 'Contoh Terbimbing: Menyelesaikan 2 sin 2x = 1 pada [0°, 360°]', en: 'Worked Example: Solving 2 sin 2x = 1 on [0°, 360°]' },
            problem: {
              bm: 'Selesaikan persamaan $2\\sin 2x = 1$ bagi julat $0^\\circ \\le x \\le 360^\\circ$.',
              en: 'Solve the equation $2\\sin 2x = 1$ for $0^\\circ \\le x \\le 360^\\circ$.'
            },
            steps: [
              {
                label: { bm: 'Langkah 1: Asingkan sin 2x & luaskan julat domain', en: 'Step 1: Isolate sin 2x & expand the domain' },
                tex: '\\sin 2x = \\frac{1}{2}, \\qquad 0^\\circ \\le 2x \\le 720^\\circ',
                why: { bm: 'Oleh sebab $0^\\circ \\le x \\le 360^\\circ$, mendarab $2$ memberi dua pusingan penuh sehingga $720^\\circ$.', en: 'Since $0^\\circ \\le x \\le 360^\\circ$, multiplying by $2$ gives two full cycles up to $720^\\circ$.' }
              },
              {
                label: { bm: 'Langkah 2: Sudut rujukan α & senarai 2 pusingan ASTC', en: 'Step 2: Reference angle α & both ASTC cycles' },
                tex: '\\alpha = \\sin^{-1}\\left(\\frac{1}{2}\\right) = 30^\\circ; \\quad 2x = 30^\\circ,\\; 150^\\circ,\\; (30^\\circ+360^\\circ),\\; (150^\\circ+360^\\circ) = 30^\\circ,\\; 150^\\circ,\\; 390^\\circ,\\; 510^\\circ',
                why: { bm: '$\\sin 2x > 0$ di Sukuan I ($30^\\circ$) dan Sukuan II ($180^\\circ - 30^\\circ = 150^\\circ$); tambah $360^\\circ$ untuk pusingan 2.', en: '$\\sin 2x > 0$ in Q1 ($30^\\circ$) and Q2 ($180^\\circ - 30^\\circ = 150^\\circ$); add $360^\\circ$ for Cycle 2.' }
              },
              {
                label: { bm: 'Langkah 3: Bahagi semua sudut dengan 2 pada akhir kiraan', en: 'Step 3: Divide all angles by 2 at the end' },
                tex: 'x = \\frac{30^\\circ}{2},\\; \\frac{150^\\circ}{2},\\; \\frac{390^\\circ}{2},\\; \\frac{510^\\circ}{2} = 15^\\circ,\\; 75^\\circ,\\; 195^\\circ,\\; 255^\\circ',
                why: { bm: 'Keempat-empat jawapan $x$ berada tepat di dalam $0^\\circ \\le x \\le 360^\\circ$.', en: 'All four values of $x$ fall cleanly inside $0^\\circ \\le x \\le 360^\\circ$.' }
              }
            ],
            trap: {
              bm: 'Ramai pelajar lupa meluaskan domain kepada $720^\\circ$ lalu hanya mendapat $2$ jawapan ($15^\\circ, 75^\\circ$) dan kehilangan separuh markah!',
              en: 'Many students forget to expand the domain to $720^\\circ$, finding only $2$ roots ($15^\\circ, 75^\\circ$) and losing half the marks!'
            }
          },
          tip: {
            bm: 'Jangan sekali-kali memansuhkan $\\sin x$ daripada $\\sin 2x = \\sin x$ dengan membahagi! Faktorkan $\\sin x(2\\cos x - 1) = 0$ supaya punca $\\sin x = 0$ tidak hilang!',
            en: 'Never divide out $\\sin x$ in $\\sin 2x = \\sin x$! Factor $\\sin x(2\\cos x - 1) = 0$ so you never lose the $\\sin x = 0$ roots!'
          }
        },
        {
          title: { bm: '4. Graf Gelombang y = a sin(bx) + c, Graf Modulus & Bilangan Persilangan', en: '4. Wave Graphs y = a sin(bx) + c, Modulus Graphs & Intersections' },
          prereq: {
            bm: 'Ingat persamaan garis lurus $y = mx + c$ dan nilai mutlak $|-k| = +k$ (tanda modulus memantulkan sebarang nilai negatif di bawah paksi-$x$ ke atas menjadi positif).',
            en: 'Recall straight lines $y = mx + c$ and modulus $|-k| = +k$ (absolute value bounces any negative curve below the $x$-axis upward above it).'
          },
          body: {
            bm: 'Bagi gelombang $y = a\\sin(bx) + c$ atau $y = a\\cos(bx) + c$: **amplitud** $= |a|$, **bilangan kitaran** dalam $2\\pi$ ($360^\\circ$) ialah $b$ (kala $= \\frac{2\\pi}{b}$), dan **anjakan mencancang** ialah $c$. Bagi **graf modulus** $y = |a\\sin(bx)|$, semua lembah negatif dipantulkan ke atas ($y_{\\min} = 0$, $y_{\\max} = |a|$, dan kala menjadi separuh iaitu $\\frac{\\pi}{b}$). Bilangan punca persamaan dicari dengan menyamakan LHS dengan graf yang dilakar dan mengira persilangan dengan garis lurus $y = mx + c$.',
            en: 'For $y = a\\sin(bx) + c$ or $y = a\\cos(bx) + c$: **amplitude** $= |a|$, **cycles** in $2\\pi$ ($360^\\circ$) is $b$ (period $= \\frac{2\\pi}{b}$), and **vertical shift** is $c$. For **modulus graphs** $y = |a\\sin(bx)|$, all negative troughs bounce upward ($y_{\\min} = 0$, $y_{\\max} = |a|$, and period halves to $\\frac{\\pi}{b}$). Root counts come from matching LHS to your sketched graph and counting intersections with line $y = mx + c$.'
          },
          firstStep: {
            bm: '1. Kenal pasti $|a|$ (tinggi puncak dari garis tengah), $b$ (bilangan ombak dalam $2\\pi$), dan $+c$ (lif garis tengah).\n2. Jika ada tanda $|\\dots|$ di sekeliling fungsi trig (tanpa $+c$ di luar), lakar gelombang biasa dengan pensel nipis dahulu, kemudian pantulkan semua bahagian bawah paksi-$x$ ke atas!\n3. Untuk bahagian (b) graf SPM, susun persamaan baharu supaya LHS SAMA dengan persamaan graf yang dilakar.',
            en: '1. Read off $|a|$ (wave height), $b$ (cycles in $2\\pi$), and $+c$ (midline shift).\n2. If $|\\dots|$ wraps the trig curve, lightly sketch the normal wave first, then bounce every negative trough above the $x$-axis!\n3. For Paper 2 part (b), rearrange the new equation so LHS matches your sketched curve exactly.'
          },
          formulas: [
            { label: { bm: 'Parameter Gelombang Biasa', en: 'Standard Wave Parameters' }, tex: '\\text{Amp} = |a|, \\quad y_{\\max} = |a| + c, \\quad y_{\\min} = -|a| + c, \\quad T = \\frac{2\\pi}{b}' },
            { label: { bm: 'Graf Modulus y = |a sin(bx)|', en: 'Modulus Graph y = |a sin(bx)|' }, tex: '0 \\le |a\\sin(bx)| \\le |a|, \\qquad y_{\\min} = 0, \\qquad T = \\frac{\\pi}{b}' }
          ],
          workedExample: {
            title: { bm: 'Contoh Terbimbing: Graf Modulus y = |2 sin 2x| & Persilangan', en: 'Worked Example: Modulus Graph y = |2 sin 2x| & Intersections' },
            problem: {
              bm: 'Analisis graf $y = |2\\sin 2x|$ bagi $0 \\le x \\le \\pi$, dan cari bilangan penyelesaian bagi $|2\\sin 2x| = 1$ dalam julat tersebut.',
              en: 'Analyze $y = |2\\sin 2x|$ for $0 \\le x \\le \\pi$, and find the number of solutions of $|2\\sin 2x| = 1$ in that interval.'
            },
            steps: [
              {
                label: { bm: 'Langkah 1: Lakar gelombang asal y = 2 sin 2x pada [0, π]', en: 'Step 1: Sketch base wave y = 2 sin 2x on [0, π]' },
                tex: { bm: 'b = 2 \\implies T_{\\text{asal}} = \\frac{2\\pi}{2} = \\pi \\implies (\\frac{\\pi}{4}, 2),\\; (\\frac{\\pi}{2}, 0),\\; (\\frac{3\\pi}{4}, -2),\\; (\\pi, 0)', en: 'b = 2 \\implies T_{\\text{orig}} = \\frac{2\\pi}{2} = \\pi \\implies (\\frac{\\pi}{4}, 2),\\; (\\frac{\\pi}{2}, 0),\\; (\\frac{3\\pi}{4}, -2),\\; (\\pi, 0)' },
                why: { bm: 'Pada $[0, \\pi]$, gelombang asal melengkapkan $1$ kitaran penuh dengan puncak $+2$ dan lembah $-2$.', en: 'On $[0, \\pi]$, the un-modulused wave completes $1$ full cycle with peak $+2$ and trough $-2$.' }
              },
              {
                label: { bm: 'Langkah 2: Pantulkan bahagian negatif ke atas untuk modulus', en: 'Step 2: Reflect negative trough upward for modulus' },
                tex: '|{-2}| = +2 \\implies y_{\\max} = 2,\\; y_{\\min} = 0,\\; T = \\frac{\\pi}{2}',
                why: { bm: 'Lembah pada $x = \\frac{3\\pi}{4}$ melantun ke $+2$, menghasilkan $2$ lengkungan positif pada $[0, \\pi]$.', en: 'The trough at $x = \\frac{3\\pi}{4}$ bounces to $+2$, forming $2$ positive arches on $[0, \\pi]$.' }
              },
              {
                label: { bm: 'Langkah 3: Bilang persilangan dengan garis mengufuk y = 1', en: 'Step 3: Count intersections with horizontal line y = 1' },
                tex: { bm: '2 \\text{ lengkungan} \\times 2 \\text{ titik} = 4', en: '2 \\text{ arches} \\times 2 \\text{ intersections} = 4' },
                why: { bm: 'Garis $y = 1$ memotong setiap lengkungan setinggi $2$ sebanyak $2$ kali, memberi jumlah $4$ penyelesaian.', en: 'Line $y = 1$ cuts each arch of height $2$ twice, giving $4$ solutions in total.' }
              }
            ],
            trap: {
              bm: 'Jangan nyatakan tempoh graf modulus $y = |\\sin x|$ masih $2\\pi$ atau nilai minimum $-1$ — pantulan modulus menjadikan $y_{\\min} = 0$ dan tempoh separuh!',
              en: 'Do not state the period of $y = |\\sin x|$ is $2\\pi$ or minimum is $-1$ — modulus reflection forces $y_{\\min} = 0$ and halves the period!'
            }
          },
          tip: {
            bm: 'Bilangan penyelesaian persamaan trig pada $[0, 2\\pi]$ boleh disemak pantas dengan mengira titik persilangan antara graf gelombang dan garis lurus!',
            en: 'Count roots of trig equations on $[0, 2\\pi]$ visually by counting intersections between the wave graph and a straight line!'
          }
        }
      ],
      traps: [
        {
          title: { bm: 'Hilang Punca Kerana Membahagi Pemboleh Ubah Trig', en: 'Losing Roots by Dividing Out Trig Expressions' },
          desc: {
            bm: 'Membahagi kedua-dua belah dengan $\\cos\\theta$ menghapuskan punca $\\cos\\theta = 0$ ($90^\\circ, 270^\\circ$). Sentiasa bawa ke sebelah kiri dan faktorkan!',
            en: 'Dividing both sides by $\\cos\\theta$ erases $\\cos\\theta = 0$ ($90^\\circ, 270^\\circ$). Always move terms to one side and factorize!'
          }
        },
        {
          title: { bm: 'Lupa Luaskan Domain 2x atau Tekan sin⁻¹(−k) Terus', en: 'Forgetting 0° ≤ 2x ≤ 720° Expansion or Pressing sin⁻¹(−k)' },
          desc: {
            bm: 'Untuk $\\sin 2x = k$ pada $[0^\\circ, 360^\\circ]$, luaskan julat kepada $0^\\circ \\le 2x \\le 720^\\circ$ sebelum mencari sudut, dan sentiasa tekan $\\sin^{-1}(+|k|)$ untuk sudut rujukan $\\alpha$!',
            en: 'For $\\sin 2x = k$ on $[0^\\circ, 360^\\circ]$, expand to $0^\\circ \\le 2x \\le 720^\\circ$ first, and always press $\\sin^{-1}(+|k|)$ for acute reference angle $\\alpha$!'
          }
        },
        {
          title: { bm: 'Mengagih sin(A + B) = sin A + sin B atau Salah Tempoh Modulus', en: 'Distributing sin(A + B) = sin A + sin B or Wrong Modulus Period' },
          desc: {
            bm: '$\\sin(A + B) \\ne \\sin A + \\sin B$ — wajib guna rumus sudut majmuk! Dan bagi graf modulus $y = |a\\sin(bx)|$, tempoh dibahagi dua menjadi $\\frac{\\pi}{b}$ dengan $y_{\\min} = 0$.',
            en: '$\\sin(A + B) \\ne \\sin A + \\sin B$ — always apply the compound-angle formula! And for modulus graphs $y = |a\\sin(bx)|$, the period halves to $\\frac{\\pi}{b}$ with $y_{\\min} = 0$.'
          }
        }
      ],
      solvers: [
        {
          id: 'trig-double-solver',
          title: { bm: 'Solver Segi Tiga Sukuan ASTC & Sudut Berganda (sin 2A, kos 2A)', en: 'ASTC Quadrant & Double-Angle Exact Solver' },
          desc: {
            bm: 'Diberi |sin A| = p/q dan sukuan A (1–4), jana nilai tepat kos A, tan A, sin 2A & kos 2A.',
            en: 'Given |sin A| = p/q and quadrant (1–4), generate exact cos A, tan A, sin 2A & cos 2A.'
          },
          inputs: [
            { id: 'opp', label: { bm: 'Pengangka |p|', en: 'Numerator |p|' }, default: 3 },
            { id: 'hyp', label: { bm: 'Hipotenus q (>|p|)', en: 'Hypotenuse q (>|p|)' }, default: 5 },
            { id: 'quad', label: { bm: 'Sukuan (1, 2, 3, 4)', en: 'Quadrant (1, 2, 3, 4)' }, default: 2 }
          ],
          solve: function (v, lang) {
            const rawOpp = strictNum(v.opp), rawHyp = strictNum(v.hyp), rawQuadNum = strictNum(v.quad);
            const rawQuad = Number.isFinite(rawQuadNum) ? Math.round(rawQuadNum) : 2;
            const oppFinite = Number.isFinite(rawOpp), hypFinite = Number.isFinite(rawHyp);
            if (!oppFinite || rawOpp <= 0 || !hypFinite || rawHyp <= 0 || rawHyp <= Math.abs(rawOpp)) {
              const badOpp = oppFinite ? rawOpp : 0;
              const badHyp = hypFinite ? rawHyp : 0;
              const oppStr = U.roundStr(badOpp);
              const hypStr = U.roundStr(badHyp);
              const oppSqTex = badOpp < 0 ? `(${oppStr})^2` : `${oppStr}^2`;
              const hypSqTex = badHyp < 0 ? `(${hypStr})^2` : `${hypStr}^2`;
              const diffSqBad = badHyp * badHyp - badOpp * badOpp;
              const invalidLabel = lang === 'bm' ? 'Input tidak sah' : 'Invalid input';
              const nonPosOpp = !oppFinite || badOpp <= 0;
              const nonPosHyp = !hypFinite || badHyp <= 0;

              let step1Tex, step1Why, step2Title, step2Tex, step2Why, trapMsg;
              if (nonPosOpp && nonPosHyp) {
                step1Tex = `p = ${oppStr} \\le 0, \\quad q = ${hypStr} \\le 0 \\quad (\\text{${invalidLabel}})`;
                step1Why = lang === 'bm'
                  ? 'Dalam segi tiga bersudut tegak, kedua-dua sisi tentang p dan hipotenus q mestilah positif (0 < p < q).'
                  : 'In a right triangle, both opposite side p and hypotenuse q must be strictly positive (0 < p < q).';
                step2Title = lang === 'bm' ? 'Langkah 2: Semak kesahan panjang sisi & nisbah |sin A|' : 'Step 2: Check side lengths & |sin A| ratio';
                step2Tex = badHyp === 0
                  ? `p = ${oppStr} \\le 0, \\quad q = 0 \\implies \\frac{p}{q} \\text{ ${lang === 'bm' ? 'tidak tertakrif (bahagi 0)' : 'is undefined (division by 0)'}}`
                  : `p = ${oppStr} \\le 0, \\quad q = ${hypStr} < 0 \\quad (\\text{${lang === 'bm' ? 'panjang sisi mesti positif' : 'side lengths must be positive'}})`;
                step2Why = lang === 'bm'
                  ? 'Panjang sisi segi tiga tidak boleh sifar atau negatif, dan penyebut q tidak boleh 0.'
                  : 'Triangle side lengths cannot be zero or negative, and denominator q cannot be 0.';
                trapMsg = lang === 'bm'
                  ? 'Amaran Domain [P]: Masukkan nilai positif $p > 0$ dan $q > p$ (contohnya $p = 3, q = 5$).'
                  : 'Domain Warning [P]: Enter positive lengths $p > 0$ and $q > p$ (e.g., $p = 3, q = 5$).';
              } else if (nonPosOpp) {
                step1Tex = `p = ${oppStr} \\le 0, \\quad q = ${hypStr} \\quad (\\text{${invalidLabel}: } p \\le 0)`;
                step1Why = lang === 'bm'
                  ? 'Pengangka |p| bagi nisbah |sin A| = p/q mewakili panjang sisi tentang positif, jadi p mesti lebih besar daripada 0 (0 < p < q).'
                  : 'Numerator |p| in |sin A| = p/q represents a positive opposite side length, so p must strictly exceed 0 (0 < p < q).';
                step2Title = lang === 'bm' ? 'Langkah 2: Semak syarat panjang positif & nisbah |sin A|' : 'Step 2: Check positive length & |sin A| ratio';
                step2Tex = badHyp <= Math.abs(badOpp)
                  ? `p = ${oppStr} \\le 0 \\quad \\text{${lang === 'bm' ? 'dan' : 'and'}} \\quad q^2 - p^2 = ${hypSqTex} - ${oppSqTex} = ${U.roundStr(diffSqBad)} \\le 0`
                  : `p = ${oppStr} \\le 0 \\quad (\\text{${lang === 'bm' ? 'sisi tentang mesti positif' : 'opposite side must be positive'} } p > 0)`;
                step2Why = lang === 'bm'
                  ? 'Kerana input mewakili magnitud |sin A| = p/q bagi segi tiga sukatan ASTC, p mestilah positif dan lebih kecil daripada q.'
                  : 'Because the input represents |sin A| = p/q for the ASTC reference triangle, p must be strictly positive and smaller than q.';
                trapMsg = lang === 'bm'
                  ? 'Amaran Domain [P]: Pengangka sisi tentang $p$ mestilah positif ($0 < p < q$, contohnya $p = 3, q = 5$); tanda negatif $\\sin A$ ditentukan oleh sukuan ASTC.'
                  : 'Domain Warning [P]: Opposite side numerator $p$ must be strictly positive ($0 < p < q$, e.g., $p = 3, q = 5$); the sign of $\\sin A$ is set by the ASTC quadrant.';
              } else if (nonPosHyp) {
                step1Tex = `p = ${oppStr}, \\quad q = ${hypStr} \\le 0 \\quad (\\text{${invalidLabel}: } q \\le 0)`;
                step1Why = lang === 'bm'
                  ? 'Hipotenus q ialah panjang sisi terpanjang segi tiga bersudut tegak, maka q mestilah positif (q > p > 0).'
                  : 'Hypotenuse q is the longest side of a right triangle, so q must be strictly positive (q > p > 0).';
                step2Title = lang === 'bm' ? 'Langkah 2: Semak kesahan hipotenus q & nisbah |sin A|' : 'Step 2: Check hypotenuse q & |sin A| ratio';
                step2Tex = badHyp === 0
                  ? `q = 0 \\implies \\frac{p}{q} = \\frac{${oppStr}}{0} \\text{ ${lang === 'bm' ? 'tidak tertakrif (bahagi 0)' : 'is undefined (division by 0)'}}`
                  : `q = ${hypStr} < 0 \\implies q \\le 0 < p \\quad (\\text{${lang === 'bm' ? 'hipotenus tidak boleh negatif' : 'hypotenuse cannot be negative'}})`;
                step2Why = lang === 'bm'
                  ? 'Hipotenus q mesti positif dan lebih besar daripada sisi tentang p supaya 0 < |sin A| < 1.'
                  : 'Hypotenuse q must be positive and strictly exceed opposite side p so 0 < |sin A| < 1.';
                trapMsg = lang === 'bm'
                  ? 'Amaran Domain [P]: Hipotenus $q$ mestilah positif dan lebih besar daripada $p$ ($0 < p < q$, contohnya $p = 3, q = 5$).'
                  : 'Domain Warning [P]: Hypotenuse $q$ must be strictly positive and greater than $p$ ($0 < p < q$, e.g., $p = 3, q = 5$).';
              } else {
                step1Tex = `p = ${oppStr}, \\quad q = ${hypStr} \\implies q \\le p \\quad (\\text{${invalidLabel}})`;
                step1Why = lang === 'bm'
                  ? 'Dalam segi tiga bersudut tegak, hipotenus q mesti lebih panjang daripada sisi tentang p supaya 0 < |sin A| = p/q < 1.'
                  : 'In a right triangle, hypotenuse q must strictly exceed opposite side p so 0 < |sin A| = p/q < 1.';
                step2Title = lang === 'bm' ? 'Langkah 2: Semak Teorem Pythagoras q² − p²' : 'Step 2: Check Pythagoras q² − p²';
                step2Tex = `q^2 - p^2 = ${hypSqTex} - ${oppSqTex} = ${U.roundStr(badHyp * badHyp)} - ${U.roundStr(badOpp * badOpp)} = ${U.roundStr(diffSqBad)} \\le 0`;
                step2Why = lang === 'bm'
                  ? 'Sisi bersebelahan √(q² − p²) memerlukan q² − p² > 0; apabila q ≤ p, segi tiga bersudut tegak mustahil dibina.'
                  : 'Adjacent side √(q² − p²) requires q² − p² > 0; when q ≤ p, no valid right triangle can exist.';
                trapMsg = lang === 'bm'
                  ? 'Amaran Domain [P]: Bagi segi tiga ASTC, pastikan $0 < p < q$ kerana $|\\sin A| < 1$ (contohnya $p = 3, q = 5$).'
                  : 'Domain Warning [P]: For an ASTC right triangle, require $0 < p < q$ since $|\\sin A| < 1$ (e.g., $p = 3, q = 5$).';
              }

              return {
                problemTex: `p = ${oppStr}, \\quad q = ${hypStr}`,
                steps: [
                  {
                    badge: 'P1',
                    title: lang === 'bm' ? 'Langkah 1: Semak syarat sisi segi tiga 0 < p < q' : 'Step 1: Check triangle side condition 0 < p < q',
                    tex: step1Tex,
                    why: step1Why
                  },
                  {
                    badge: 'K1',
                    title: step2Title,
                    tex: step2Tex,
                    why: step2Why
                  },
                  {
                    badge: 'J1',
                    title: lang === 'bm' ? 'Langkah 3: Betulkan input kepada 0 < p < q' : 'Step 3: Adjust inputs to satisfy 0 < p < q',
                    tex: `0 < p < q \\quad (\\text{${lang === 'bm' ? 'cth.' : 'e.g.'} } p = 3,\\; q = 5)`,
                    why: lang === 'bm' ? 'Cuba masukkan pengangka positif lebih kecil daripada hipotenus.' : 'Enter a positive numerator smaller than the hypotenuse.'
                  }
                ],
                finalTex: `\\text{${lang === 'bm' ? 'Input tidak sah: syarat' : 'Invalid input: requires'} } 0 < p < q`,
                trapWarning: trapMsg
              };
            }
            const pAbs = Math.abs(rawOpp);
            const q = Math.abs(rawHyp);
            const validQuad = [1, 2, 3, 4].includes(rawQuad);
            const quad = validQuad ? rawQuad : 2;
            const diffSq = q * q - pAbs * pAbs;
            const adjAbs = Math.sqrt(diffSq);
            const sinSgn = (quad === 1 || quad === 2) ? 1 : -1;
            const cosSgn = (quad === 1 || quad === 4) ? 1 : -1;
            const tanSgn = sinSgn * cosSgn;
            const sinA = (sinSgn * pAbs) / q;
            const cosA = (cosSgn * adjAbs) / q;
            const tanA = sinA / cosA;
            const sin2A = 2 * sinA * cosA;
            const cos2A = cosA * cosA - sinA * sinA;
            const quadWord = lang === 'bm' ? 'Sukuan' : 'Quadrant';
            const adjWord = lang === 'bm' ? 'Sisi bersebelahan' : 'Adjacent side';

            const isIntExact = Number.isInteger(pAbs) && Number.isInteger(q);
            let sinATex, cosATex, tanATex, sin2ATex, cos2ATex, adjTex, pythStepsTex;
            if (isIntExact) {
              const adjS = simplifySqrtTex(diffSq);
              adjTex = adjS.tex;
              pythStepsTex = `\\sqrt{${q}^2 - ${pAbs}^2} = \\sqrt{${q * q} - ${pAbs * pAbs}} = \\sqrt{${diffSq}}${adjS.rad === 1 || adjS.coeff > 1 ? ' = ' + adjS.tex : ''}`;
              sinATex = exactSurdFracTex(sinSgn, pAbs, 1, q);
              cosATex = exactSurdFracTex(cosSgn, adjS.coeff, adjS.rad, q);
              tanATex = exactSurdFracTex(tanSgn, pAbs, adjS.rad, adjS.coeff * adjS.rad);
              sin2ATex = exactSurdFracTex(tanSgn, 2 * pAbs * adjS.coeff, adjS.rad, q * q);
              cos2ATex = U.fracTex(diffSq - pAbs * pAbs, q * q);
            } else {
              adjTex = U.roundStr(adjAbs, 4);
              pythStepsTex = `\\sqrt{${q}^2 - ${pAbs}^2} = \\sqrt{${U.roundStr(diffSq, 4)}} = ${adjTex}`;
              sinATex = U.roundStr(sinA, 4);
              cosATex = U.roundStr(cosA, 4);
              tanATex = U.roundStr(tanA, 4);
              sin2ATex = U.roundStr(sin2A, 4);
              cos2ATex = U.roundStr(cos2A, 4);
            }

            const out = {
              problemTex: `|\\sin A| = \\frac{${pAbs}}{${q}}, \\quad \\text{${quadWord} } ${quad}`,
              steps: [
                {
                  badge: 'P1',
                  title: lang === 'bm' ? 'Langkah 1: Teorem Pythagoras & tanda ASTC' : 'Step 1: Pythagoras & ASTC signs',
                  tex: `\\text{${adjWord}} = ${pythStepsTex} \\implies \\sin A = ${sinATex},\\; \\cos A = ${cosATex},\\; \\tan A = ${tanATex}`,
                  why: lang === 'bm' ? `Sukuan ${quad} menentukan tanda positif/negatif mengikut ASTC.` : `Quadrant ${quad} fixes the +/- signs via ASTC.`
                },
                {
                  badge: 'K1',
                  title: lang === 'bm' ? 'Langkah 2: Kira sin 2A = 2 sin A cos A' : 'Step 2: Compute sin 2A = 2 sin A cos A',
                  tex: isIntExact && sin2ATex !== U.roundStr(sin2A, 4)
                    ? `\\sin 2A = 2\\left(${sinATex}\\right)\\left(${cosATex}\\right) = ${sin2ATex} \\approx ${U.roundStr(sin2A, 4)}`
                    : `\\sin 2A = 2\\left(${sinATex}\\right)\\left(${cosATex}\\right) = ${sin2ATex}`,
                  why: lang === 'bm' ? 'Rumus sudut berganda sinus: darabkan pecahan tepat dahulu.' : 'Sine double-angle identity: multiply the exact fractions first.'
                },
                {
                  badge: 'J1',
                  title: lang === 'bm' ? 'Langkah 3: Kira cos 2A = cos²A − sin²A' : 'Step 3: Compute cos 2A = cos²A − sin²A',
                  tex: isIntExact
                    ? `\\cos 2A = \\frac{${diffSq}}{${q * q}} - \\frac{${pAbs * pAbs}}{${q * q}} = \\frac{${diffSq} - ${pAbs * pAbs}}{${q * q}} = ${cos2ATex}${cos2ATex !== U.roundStr(cos2A, 4) ? ` \\approx ${U.roundStr(cos2A, 4)}` : ''}`
                    : `\\cos 2A = (${cosATex})^2 - (${sinATex})^2 = ${cos2ATex}`,
                  why: lang === 'bm' ? 'Rumus sudut berganda kosinus memberi nilai pecahan tepat.' : 'Cosine double-angle identity yields the exact fraction.'
                }
              ],
              finalTex: `\\tan A = ${tanATex},\\; \\sin 2A = ${sin2ATex},\\; \\cos 2A = ${cos2ATex}`
            };
            if (!validQuad) {
              out.trapWarning = lang === 'bm'
                ? 'Amaran [P]: Sukuan mesti antara $1$ hingga $4$; sistem menggunakan Sukuan $2$ sebagai lalai.'
                : 'Warning [P]: Quadrant must be between $1$ and $4$; defaulted to Quadrant $2$.';
            }
            return out;
          }
        }
      ],
      generateQuestion: function (tier, lang) {
        if (tier === 1) {
          const a = U.pick([-4, -3, 2, 3, 5]);
          const b = U.pick([2, 3, 4]);
          const c = U.randInt(1, 4);
          const absA = Math.abs(a);
          const yMax = absA + c;
          const yMin = -absA + c;
          const traps = [];
          const used = new Set([yMax]);
          const addTrap = (val, message) => {
            if (!used.has(val)) {
              used.add(val);
              traps.push({ value: val, message });
            }
          };
          addTrap(absA, {
            bm: `Perangkap [K]: ${absA} hanyalah amplitud |a|! Anda terlupa menambah anjakan mencancang +${c}.`,
            en: `Trap [K]: ${absA} is only the amplitude |a|! You forgot to add the vertical shift +${c}.`
          });
          if (a < 0) {
            addTrap(yMin, {
              bm: `Perangkap [P]: ${yMin} ialah nilai MINIMUM (a + c = −|a| + c)! Walaupun pekali depan negatif, sin(bx) boleh bernilai −1 menjadikan hasil darab positif dan y_max = |a| + c.`,
              en: `Trap [P]: ${yMin} is the MINIMUM value (a + c = −|a| + c)! Even when a < 0, sin(bx) reaches −1 making the product positive and y_max = |a| + c.`
            });
            addTrap(a, {
              bm: `Perangkap [K]: ${a} ialah pekali bertanda a sahaja! Anda terlupa mengambil amplitud positif |a| = ${absA} dan anjakan +${c}.`,
              en: `Trap [K]: ${a} is only the signed coefficient a! You forgot to take |a| = ${absA} and add the vertical shift +${c}.`
            });
          } else {
            addTrap(yMin, {
              bm: `Perangkap [P]: ${yMin} ialah nilai MINIMUM (−|a| + c), bukan nilai maksimum!`,
              en: `Trap [P]: ${yMin} is the MINIMUM value (−|a| + c), not the maximum!`
            });
          }
          if (traps.length < 2) {
            addTrap(c, {
              bm: `Perangkap [K]: ${c} hanyalah anjakan mencancang c! Anda terlupa menambah amplitud |a| = ${absA}.`,
              en: `Trap [K]: ${c} is only the vertical shift c! You forgot to add the amplitude |a| = ${absA}.`
            });
            addTrap(-absA, {
              bm: `Perangkap [P]: −${absA} ialah nilai terendah tanpa anjakan +${c}; nilai maksimum ialah |a| + c = ${yMax}.`,
              en: `Trap [P]: −${absA} is the negative amplitude without +${c}; the maximum value is |a| + c = ${yMax}.`
            });
          }
          return {
            tier: 1, tpLabel: 'TP1–TP2', subtopic: { bm: '6.3 Amplitud & Nilai Maksimum Gelombang', en: '6.3 Amplitude & Maximum Value of Wave' }, marks: 2,
            prompt: lang === 'bm'
              ? `Diberi fungsi trigonometri $y = ${a}\\sin(${b}x) + ${c}$. Cari **nilai maksimum** bagi $y$.`
              : `Given the trigonometric function $y = ${a}\\sin(${b}x) + ${c}$. Find the **maximum value** of $y$.`,
            answerType: 'number', correctValue: yMax, displayAnswerTex: `y_{\\max} = |${a}| + ${c} = ${yMax}`,
            intentMeta: {
              given: { bm: `Fungsi gelombang $y = ${a}\\sin(${b}x) + ${c}$`, en: `Wave function $y = ${a}\\sin(${b}x) + ${c}$` },
              goal: { bm: 'Cari nilai puncak maksimum $y_{\\max} = |a| + c$', en: 'Find maximum peak value $y_{\\max} = |a| + c$' },
              conceptRule: { bm: 'Amplitud ialah $|a|$ (sentiasa positif!), maka $y_{\\max} = |a| + c$', en: 'Amplitude is $|a|$ (always positive!), so $y_{\\max} = |a| + c$' }
            },
            guidedSteps: [
              { prompt: { bm: `Apakah **amplitud** ($|a|$) bagi gelombang $y = ${a}\\sin(${b}x) + ${c}$?`, en: `What is the **amplitude** ($|a|$) of $y = ${a}\\sin(${b}x) + ${c}$?` }, expected: absA, hint: { bm: `Amplitud sentiasa positif: $|${a}| = ${absA}$.`, en: `Amplitude is always positive: $|${a}| = ${absA}$.` } },
              { prompt: { bm: `Tambahkan anjakan mencancang $+${c}$ kepada amplitud untuk nilai maksimum $y$:`, en: `Add vertical shift $+${c}$ to the amplitude for maximum $y$:` }, expected: yMax, hint: { bm: `Kira ${absA} + ${c}.`, en: `Compute ${absA} + ${c}.` } }
            ],
            traps,
            hints: [
              lang === 'bm' ? `Amplitud gelombang ialah $|a| = |${a}| = ${absA}$ (abaikan tanda negatif jika ada).` : `Wave amplitude is $|a| = |${a}| = ${absA}$ (ignore any minus sign).`,
              lang === 'bm' ? `Nilai maksimum ialah $|a| + c = ${absA} + ${c}$.` : `Maximum value is $|a| + c = ${absA} + ${c}$.`
            ],
            steps: [
              { badge: 'P1', title: lang === 'bm' ? 'Tentukan amplitud |a|' : 'Find amplitude |a|', tex: `|a| = |${a}| = ${absA}`, why: lang === 'bm' ? 'Julat sin(bx) ialah [−1, 1], maka bahagian bergelombang mencapai sehingga +|a|.' : 'The range of sin(bx) is [−1, 1], so the wave term reaches +|a|.' },
              { badge: 'K1', title: lang === 'bm' ? 'Tambah anjakan mencancang c' : 'Add vertical shift c', tex: `y_{\\max} = |a| + c = ${absA} + ${c}`, why: lang === 'bm' ? 'Anjakan +c menaikkan keseluruhan gelombang sebanyak c unit.' : 'The +c shift raises the entire wave by c units.' },
              { badge: 'J1', title: lang === 'bm' ? 'Nilai maksimum y' : 'Maximum value of y', tex: `y_{\\max} = ${yMax}`, why: lang === 'bm' ? 'Puncak tertinggi gelombang.' : 'Highest peak of the wave.' }
            ]
          };
        }
        if (tier === 2) {
          const trip = U.pick([
            { opp: 3, adj: 4, hyp: 5 },
            { opp: 4, adj: 3, hyp: 5 },
            { opp: 5, adj: 12, hyp: 13 }
          ]);
          const hypSq = trip.hyp * trip.hyp;
          const oppSq = trip.opp * trip.opp;
          const adjSq = hypSq - oppSq;
          const sin2A = U.round((-2 * trip.opp * trip.adj) / hypSq, 4);
          return {
            tier: 2, tpLabel: 'TP3–TP4', subtopic: { bm: '6.5 Sudut Berganda & Sukuan ASTC', en: '6.5 Double-Angle & ASTC Quadrant' }, marks: 4,
            prompt: lang === 'bm'
              ? `Diberi $\\sin A = \\frac{${trip.opp}}{${trip.hyp}}$ dan $A$ ialah **sudut cakah** ($90^\\circ < A < 180^\\circ$). Tanpa menggunakan kalkulator untuk mencari sudut $A$, cari nilai bagi **$\\sin 2A$** (boleh beri pecahan atau perpuluhan).`
              : `Given $\\sin A = \\frac{${trip.opp}}{${trip.hyp}}$ where $A$ is an **obtuse angle** ($90^\\circ < A < 180^\\circ$). Find the exact value of **$\\sin 2A$** (fraction or decimal accepted).`,
            answerType: 'number', tolerance: 0.002, correctValue: sin2A, displayAnswerTex: `\\sin 2A = ${U.fracTex(-2 * trip.opp * trip.adj, hypSq)} = ${sin2A}`,
            intentMeta: {
              given: { bm: `$\\sin A = \\frac{${trip.opp}}{${trip.hyp}}$ dengan $A \\in$ Sukuan II ($90^\\circ < A < 180^\\circ$)`, en: `$\\sin A = \\frac{${trip.opp}}{${trip.hyp}}$ with $A \\in$ Quadrant II ($90^\\circ < A < 180^\\circ$)` },
              goal: { bm: 'Cari $\\cos A$ (negatif dalam Q2!) dan kira $\\sin 2A = 2\\sin A\\cos A$', en: 'Find $\\cos A$ (negative in Q2!) and compute $\\sin 2A = 2\\sin A\\cos A$' },
              conceptRule: { bm: 'Guna Pythagoras untuk sisi bersebelahan, tanda negatif dalam Sukuan II, dan $\\sin 2A = 2\\sin A\\cos A$', en: 'Use Pythagoras for adjacent side, minus sign in Q2, and $\\sin 2A = 2\\sin A\\cos A$' }
            },
            guidedSteps: [
              { prompt: { bm: `Oleh sebab $A$ berada dalam Sukuan II, apakah nilai $\\cos A$ (termasuk tanda negatif)?`, en: `Since $A$ lies in Quadrant II, what is $\\cos A$ (including negative sign)?` }, expected: U.round(-trip.adj / trip.hyp, 4), hint: { bm: `Sisi bersebelahan = √(${hypSq} − ${oppSq}) = ${trip.adj}, maka kos A = −${trip.adj}/${trip.hyp}.`, en: `Adjacent side = √(${hypSq} − ${oppSq}) = ${trip.adj}, so cos A = −${trip.adj}/${trip.hyp}.` } },
              { prompt: { bm: `Guna rumus $\\sin 2A = 2\\sin A\\cos A$:`, en: `Evaluate $\\sin 2A = 2\\sin A\\cos A$:` }, expected: sin2A, hint: { bm: `Kira 2 × (${trip.opp}/${trip.hyp}) × (−${trip.adj}/${trip.hyp}).`, en: `Compute 2 × (${trip.opp}/${trip.hyp}) × (−${trip.adj}/${trip.hyp}).` } }
            ],
            traps: [
              { value: Math.abs(sin2A), message: { bm: 'Perangkap ASTC [J]: Sudut cakah berada dalam Sukuan II di mana kos A adalah NEGATIF, maka sin 2A mesti negatif!', en: 'ASTC Trap [J]: Obtuse angle A is in Quadrant II where cos A is NEGATIVE, so sin 2A is negative!' } }
            ],
            hints: [
              lang === 'bm' ? `Cari sisi bersebelahan dengan Pythagoras: $\\sqrt{${trip.hyp}^2 - ${trip.opp}^2} = ${trip.adj}$.` : `Find adjacent side via Pythagoras: $\\sqrt{${trip.hyp}^2 - ${trip.opp}^2} = ${trip.adj}$.`,
              lang === 'bm' ? 'Dalam Sukuan II, kos A bernilai negatif. Kemudian gantikan ke dalam $\\sin 2A = 2\\sin A\\cos A$.' : 'In Q2, cos A is negative. Then substitute into $\\sin 2A = 2\\sin A\\cos A$.'
            ],
            steps: [
              { badge: 'P1', title: lang === 'bm' ? 'Cari sisi bersebelahan & cos A dalam Sukuan II' : 'Find adjacent side & cos A in Quadrant II', tex: `\\text{${lang === 'bm' ? 'seb' : 'adj'}} = \\sqrt{${trip.hyp}^2 - ${trip.opp}^2} = \\sqrt{${hypSq} - ${oppSq}} = \\sqrt{${adjSq}} = ${trip.adj} \\implies \\cos A = -\\frac{${trip.adj}}{${trip.hyp}}`, why: lang === 'bm' ? 'Hanya sin positif dalam Sukuan II, maka cos A bertanda negatif.' : 'Only sin is positive in Quadrant II, so cos A is negative.' },
              { badge: 'K1', title: lang === 'bm' ? 'Ganti ke dalam sin 2A = 2 sin A cos A' : 'Substitute into sin 2A = 2 sin A cos A', tex: `\\sin 2A = 2\\left(\\frac{${trip.opp}}{${trip.hyp}}\\right)\\left(-\\frac{${trip.adj}}{${trip.hyp}}\\right) = \\frac{${-2 * trip.opp * trip.adj}}{${hypSq}}`, why: lang === 'bm' ? 'Darabkan pengangka 2 × opp × (−adj) dan penyebut hyp × hyp.' : 'Multiply numerators 2 × opp × (−adj) and denominators hyp × hyp.' },
              { badge: 'J1', title: lang === 'bm' ? 'Permudahkan kepada pecahan tepat' : 'Simplify to exact fraction', tex: `= ${U.fracTex(-2 * trip.opp * trip.adj, hypSq)}`, why: lang === 'bm' ? 'Ringkaskan pecahan kepada sebutan terendah.' : 'Reduce the fraction to lowest terms.' }
            ]
          };
        }
        const b = U.pick([2, 3]);
        const rootsCount = 2 * b;
        return {
          tier: 3, tpLabel: 'TP5–TP6 (KBAT)', subtopic: { bm: '6.6 Bilangan Penyelesaian Persamaan Trigonometri', en: '6.6 Counting Roots via Wave Sketching' }, marks: 4,
          prompt: lang === 'bm'
            ? `Berapakah **bilangan penyelesaian** bagi persamaan $2\\sin(${b}x) - 1 = 0$ dalam julat $0^\\circ \\le x \\le 360^\\circ$?`
            : `How many **solutions (roots)** does the equation $2\\sin(${b}x) - 1 = 0$ have in the interval $0^\\circ \\le x \\le 360^\\circ$?`,
          answerType: 'number', correctValue: rootsCount, displayAnswerTex: `${rootsCount}\\text{ ${lang === 'bm' ? 'penyelesaian' : 'solutions'}}`,
          intentMeta: {
            given: { bm: `Persamaan $2\\sin(${b}x) - 1 = 0$ pada $0^\\circ \\le x \\le 360^\\circ$`, en: `Equation $2\\sin(${b}x) - 1 = 0$ on $0^\\circ \\le x \\le 360^\\circ$` },
            goal: { bm: `Kira bilangan penyelesaian selepas meluaskan julat $0^\\circ \\le ${b}x \\le ${360 * b}^\\circ$`, en: `Count total solutions after expanding domain $0^\\circ \\le ${b}x \\le ${360 * b}^\\circ$` },
            conceptRule: { bm: `Terdapat $${b}$ kitaran penuh dalam $360^\\circ$; setiap kitaran memotong $y = \\frac{1}{2}$ sebanyak $2$ kali`, en: `There are $${b}$ complete cycles in $360^\\circ$; each cycle crosses $y = \\frac{1}{2}$ twice` }
          },
          guidedSteps: [
            { prompt: { bm: `Berapakah **bilangan kitaran penuh** bagi $y = \\sin(${b}x)$ dalam $0^\\circ \\le x \\le 360^\\circ$?`, en: `How many **complete cycles** does $y = \\sin(${b}x)$ make on $0^\\circ \\le x \\le 360^\\circ$?` }, expected: b, hint: { bm: `Pekali sudut ialah $b = ${b}$, maka julat diluaskan kepada $0^\\circ \\le ${b}x \\le ${360 * b}^\\circ$.`, en: `Angle coefficient is $b = ${b}$, so the domain expands to $0^\\circ \\le ${b}x \\le ${360 * b}^\\circ$.` } },
            { prompt: { bm: `Setiap 1 kitaran gelombang sinus memotong garis mengufuk $y = 0.5$ sebanyak $2$ kali. Berapakah jumlah persilangan bagi $${b}$ kitaran?`, en: `Each sine cycle crosses $y = 0.5$ twice. How many total intersections across $${b}$ cycles?` }, expected: rootsCount, hint: { bm: `Darab ${b} × 2.`, en: `Multiply ${b} × 2.` } }
          ],
          traps: [
            { value: 2, message: { bm: `Perangkap [P]: 2 punca hanya untuk 1 kitaran! Oleh sebab sudut ialah ${b}x, julat 0° ≤ ${b}x ≤ ${360 * b}° mempunyai ${b} kitaran.`, en: `Trap [P]: 2 roots is for 1 cycle! Since angle is ${b}x, 0° ≤ ${b}x ≤ ${360 * b}° spans ${b} cycles.` } }
          ],
          hints: [
            lang === 'bm' ? `Susun semula dahulu: $2\\sin(${b}x) = 1 \\implies \\sin(${b}x) = \\frac{1}{2}$.` : `Rearrange first: $2\\sin(${b}x) = 1 \\implies \\sin(${b}x) = \\frac{1}{2}$.`,
            lang === 'bm' ? `Luaskan julat menjadi $0^\\circ \\le ${b}x \\le ${360 * b}^\\circ$ (${b} kitaran × 2 punca setiap kitaran).` : `Expand domain to $0^\\circ \\le ${b}x \\le ${360 * b}^\\circ$ (${b} cycles × 2 roots per cycle).`
          ],
          steps: [
            { badge: 'P1', title: lang === 'bm' ? 'Susun semula & luaskan domain' : 'Rearrange & expand domain', tex: `2\\sin(${b}x) = 1 \\implies \\sin(${b}x) = \\frac{1}{2}, \\qquad 0^\\circ \\le ${b}x \\le ${360 * b}^\\circ`, why: lang === 'bm' ? 'Asingkan sin(bx) dan darab julat 360° dengan pekali sudut b.' : 'Isolate sin(bx) and multiply 360° by the angle coefficient b.' },
            { badge: 'K1', title: lang === 'bm' ? 'Kira bilangan kitaran dalam 0° ≤ x ≤ 360°' : 'Count cycles in 0° ≤ x ≤ 360°', tex: `\\text{${lang === 'bm' ? 'Bilangan kitaran' : 'Number of cycles'}} = \\frac{${360 * b}^\\circ}{360^\\circ} = ${b}`, why: lang === 'bm' ? 'Setiap kitaran penuh memberi 2 punca positif dalam Sukuan I & II.' : 'Each full cycle produces 2 positive roots in Quadrants I & II.' },
            { badge: 'J1', title: lang === 'bm' ? 'Jumlah penyelesaian' : 'Total number of roots', tex: `${b} \\times 2 = ${rootsCount}`, why: lang === 'bm' ? 'Darab bilangan kitaran dengan 2 punca setiap kitaran.' : 'Multiply the number of cycles by 2 roots per cycle.' }
          ]
        };
      }
    },

    // =========================================================================
    // FORM 5 CHAPTER 7: LINEAR PROGRAMMING / PENGATURCARAAN LINEAR
    // =========================================================================
    {
      id: 'f5-c7',
      stage: 4,
      unlocked: true,
      form: 5,
      num: 7,
      code: { bm: 'T5 • Bab 7', en: 'F5 • Ch 7' },
      icon: 'R ≤ k',
      color: '#059669',
      category: 'aplikasi',
      title: { bm: 'Pengaturcaraan Linear', en: 'Linear Programming' },
      subtitle: {
        bm: 'Menterjemah kekangan ketaksamaan, melorek rantau R (feasible region) & mengoptimumkan k = ax + by',
        en: 'Translating constraint inequalities, shading feasible region R & optimizing k = ax + by'
      },
      spmWeight: { bm: 'Kertas 2 Bhg C Pilihan Popular (10 markah!)', en: 'Paper 2 Sec C Top Scorer (10 marks!)' },
      concepts: [
        {
          title: { bm: '1. Kamus Ketaksamaan, Terjemahan Nisbah & Peratusan', en: '1. Inequality Word Dictionary, Ratio & Percentage Translation' },
          prereq: {
            bm: 'Ingat ketaksamaan linear T1/T3 ($\\le, \\ge, <, >$, di mana tanda terbalik apabila mendarab/membahagi dengan nombor negatif) dan peratusan asas ($40\\% = 0.4 = \\frac{2}{5}$ daripada jumlah).',
            en: 'Recall F1/F3 linear inequalities ($\\le, \\ge, <, >$, where the sign flips when multiplying/dividing by a negative) and basic percentages ($40\\% = 0.4 = \\frac{2}{5}$ of total).'
          },
          body: {
            bm: 'Kunci $10$ markah penuh ialah menterjemah ayat kepada simbol yang tepat: *"selebih-lebihnya / tidak melebihi / maksimum"* $\\to \\le$; *"sekurang-kurangnya / minimum"* $\\to \\ge$; *"kurang/lebih daripada"* $\\to <, >$; *"$y$ melebihi $x$ selebih-lebihnya $k$"* $\\to y - x \\le k$. Untuk **nisbah** ($y:x$ selebih-lebihnya $3:2 \\implies \\frac{y}{x} \\le \\frac{3}{2} \\implies 2y \\le 3x$) dan **peratusan** ($x$ sekurang-kurangnya $40\\%$ daripada jumlah $\\implies x \\ge 0.4(x + y) \\implies 6x \\ge 4y \\implies 3x \\ge 2y$).',
            en: 'Scoring 10/10 starts with translating phrases accurately: *"at most / does not exceed / max"* $\\to \\le$; *"at least / min"* $\\to \\ge$; *"less / more than"* $\\to <, >$; *"$y$ exceeds $x$ by at most $k$"* $\\to y - x \\le k$. For **ratios** ($y:x$ at most $3:2 \\implies \\frac{y}{x} \\le \\frac{3}{2} \\implies 2y \\le 3x$) and **percentages** ($x$ at least $40\\%$ of total $\\implies x \\ge 0.4(x + y) \\implies 6x \\ge 4y \\implies 3x \\ge 2y$).'
          },
          firstStep: {
            bm: '1. Labelkan pemboleh ubah $x$ dan $y$ dengan jelas di atas kertas.\n2. Tukar peratus kepada perpuluhan/pecahan darab $(x + y)$, atau tulis nisbah sebagai pecahan $\\frac{y}{x}$ sebelum darab silang.\n3. Uji ketaksamaan anda dengan nombor contoh ($x = 10, y = 20$) untuk memastikan arah simbol masuk akal!',
            en: '1. Label what $x$ and $y$ stand for clearly.\n2. Multiply percentages by total $(x + y)$, or write ratios as a fraction $\\frac{y}{x}$ before cross-multiplying.\n3. Test your inequality with sample numbers ($x = 10, y = 20$) to confirm the symbol direction!'
          },
          formulas: [
            {
              label: { bm: 'Selebih-lebihnya / Tidak Melebihi (≤)', en: 'At Most / Does Not Exceed (≤)' },
              tex: { bm: 'x + y \\le k \\quad (\\text{Garis padu } \\le)', en: 'x + y \\le k \\quad (\\text{Solid line } \\le)' }
            },
            {
              label: { bm: 'Sekurang-kurangnya (≥) & Ketaksamaan Ketat (<, >)', en: 'At Least (≥) & Strict Inequality (<, >)' },
              tex: { bm: 'x + y \\ge k \\;(\\text{padu}), \\qquad y < 2x \\;(\\text{GARIS PUTUS-PUTUS})', en: 'x + y \\ge k \\;(\\text{solid}), \\qquad y < 2x \\;(\\text{DASHED LINE})' }
            },
            {
              label: { bm: 'Terjemahan Nisbah & Peratusan', en: 'Ratio & Percentage Formulas' },
              tex: '\\frac{y}{x} \\le \\frac{a}{b} \\implies by \\le ax, \\qquad x \\ge \\frac{p}{100}(x + y)'
            }
          ],
          workedExample: {
            title: { bm: 'Contoh Terbimbing: Terjemah Jumlah, Lebihan & Peratusan', en: 'Worked Example: Translating Total, Excess & Percentage' },
            problem: {
              bm: 'Tulis $3$ ketaksamaan bagi: (I) jumlah $(x + y)$ tidak melebihi $80$; (II) $y$ melebihi $x$ selebih-lebihnya $20$; (III) $x$ sekurang-kurangnya $25\\%$ daripada jumlah keseluruhan.',
              en: 'Write $3$ inequalities for: (I) total $(x + y)$ does not exceed $80$; (II) $y$ exceeds $x$ by at most $20$; (III) $x$ is at least $25\\%$ of the total.'
            },
            steps: [
              {
                label: { bm: 'Langkah 1: Syarat (I) dan (II)', en: 'Step 1: Conditions (I) and (II)' },
                tex: 'x + y \\le 80, \\qquad y - x \\le 20',
                why: { bm: '"Tidak melebihi" ialah $\\le$; "$y$ melebihi $x$" bermakna $y > x$, jadi beza $y - x$ dihadkan kepada $\\le 20$.', en: '"Does not exceed" is $\\le$; "$y$ exceeds $x$" means $y > x$, so the gap $y - x$ is capped at $\\le 20$.' }
              },
              {
                label: { bm: 'Langkah 2: Syarat (III) peratusan daripada jumlah (x + y)', en: 'Step 2: Condition (III) percentage of total (x + y)' },
                tex: 'x \\ge 0.25(x + y) \\implies 4x \\ge x + y',
                why: { bm: 'Tukar $25\\% = 0.25 = \\frac{1}{4}$ daripada $(x + y)$, kemudian darab kedua-dua belah dengan $4$.', en: 'Write $25\\% = 0.25 = \\frac{1}{4}$ of $(x + y)$, then multiply both sides by $4$.' }
              },
              {
                label: { bm: 'Langkah 3: Permudahkan bentuk akhir (III)', en: 'Step 3: Simplify final form of (III)' },
                tex: { bm: '4x - x \\ge y \\implies 3x \\ge y \\quad (\\text{atau } y \\le 3x)', en: '4x - x \\ge y \\implies 3x \\ge y \\quad (\\text{or } y \\le 3x)' },
                why: { bm: 'Tolak $x$ daripada kedua-dua belah supaya setiap pemboleh ubah berada di satu sisi.', en: 'Subtract $x$ from both sides to isolate $y \\le 3x$.' }
              }
            ],
            trap: {
              bm: 'Jangan tulis $x \\ge 0.25y$ — "jumlah keseluruhan" ialah $(x + y)$, bukan $y$ seorang diri!',
              en: 'Never write $x \\ge 0.25y$ — "the total" is $(x + y)$, not $y$ alone!'
            }
          },
          tip: {
            bm: 'Sentiasa semak: "$y$ melebihi $x$ selebih-lebihnya $k$" bermaksud $y - x \\le k$!',
            en: 'Watch phrasing: "$y$ exceeds $x$ by at most $k$" translates to $y - x \\le k$!'
          }
        },
        {
          title: { bm: '2. Melorek Rantau R — Peraturan +y Positif & Ujian Titik (0, 0)', en: '2. Shading Feasible Region R — Positive +y Rule & (0, 0) Test Point' },
          prereq: {
            bm: 'Ingat cara memplot garis lurus $y = mx + c$ menggunakan $2$ pintasan mudah: masukkan $x = 0$ untuk pintasan-$y$, dan masukkan $y = 0$ untuk pintasan-$x$, kemudian sambung dua titik itu dengan pembaris.',
            en: 'Recall plotting straight lines $y = mx + c$ using $2$ easy intercepts: plug in $x = 0$ for the $y$-intercept and $y = 0$ for the $x$-intercept, then join both points with a ruler.'
          },
          body: {
            bm: 'Lukis **garis padu** bagi $\\le, \\ge$ dan **garis putus-putus** bagi $<, >$. **Peraturan $+y$ Positif:** pastikan pekali $y$ di sebelah kiri positif, kemudian $\\ge$ lorek **ATAS** dan $\\le$ lorek **BAWAH** (bagi $x \\ge a$, lorek kanan). **Peraturan Titik Ujian $(0, 0)$:** gantikan $(0, 0)$ ke dalam ketaksamaan — jika benar, kekalkan bahagian yang mengandungi $(0, 0)$; jika garis melalui $(0, 0)$, uji titik $(0, 2)$ atau $(2, 0)$!',
            en: 'Draw **solid lines** for $\\le, \\ge$ and **dashed lines** for $<, >$. **Positive-$y$ Rule:** put $y$ on LHS with a $+$ coefficient, then $\\ge$ shades **ABOVE** and $\\le$ shades **BELOW** (for $x \\ge a$, shade right). **$(0, 0)$ Test-Point Rule:** plug $(0, 0)$ into the inequality — if true, keep the side containing $(0, 0)$; if the line passes through $(0, 0)$, test $(0, 2)$ or $(2, 0)$!'
          },
          firstStep: {
            bm: '1. Cari $2$ titik bagi setiap garis ($x = 0$ dan $y = 0$) dan semak sama ada garis padu atau putus-putus.\n2. Gantikan $(0, 0)$ (atau $(0, 2)$ jika melalui asalan) untuk sahkan sebelah lorekan dengan $100\\%$ yakin.\n3. Lorekkan kawasan bertindih semua kekangan dan labelkan huruf **$R$** dengan besar!',
            en: '1. Find $2$ points per line ($x = 0$ and $y = 0$) and check solid vs dashed.\n2. Plug in $(0, 0)$ (or $(0, 2)$ if through origin) to verify the shaded side with $100\\%$ certainty.\n3. Shade the overlapping region satisfying all constraints and label **$R$** clearly!'
          },
          formulas: [
            {
              label: { bm: 'Peraturan +y Positif & Titik Ujian', en: 'Positive +y & Test-Point Rule' },
              tex: { bm: '+by \\ge \\dots \\implies \\text{Atas}, \\quad +by \\le \\dots \\implies \\text{Bawah}, \\quad \\text{Uji }(0,0)', en: '+by \\ge \\dots \\implies \\text{Above}, \\quad +by \\le \\dots \\implies \\text{Below}, \\quad \\text{Test }(0,0)' }
            }
          ],
          workedExample: {
            title: { bm: 'Contoh Terbimbing: Melorek Rantau R Dengan Ujian (0, 0)', en: 'Worked Example: Shading R Using the (0, 0) Test' },
            problem: {
              bm: 'Tentukan arah lorekan dan bucu-bucu rantau $R$ bagi $x + y \\le 6$, $y \\ge x$, $x \\ge 0$, dan $y \\ge 0$.',
              en: 'Determine the shading sides and vertices of region $R$ for $x + y \\le 6$, $y \\ge x$, $x \\ge 0$, and $y \\ge 0$.'
            },
            steps: [
              {
                label: { bm: 'Langkah 1: Uji titik (0, 0) bagi x + y ≤ 6', en: 'Step 1: Test (0, 0) for x + y ≤ 6' },
                tex: { bm: '0 + 0 = 0 \\le 6 \\;(\\text{Benar}) \\implies \\text{Lorek ke arah }(0, 0)', en: '0 + 0 = 0 \\le 6 \\;(\\text{True}) \\implies \\text{Shade toward }(0, 0)' },
                why: { bm: 'Oleh sebab $(0, 0)$ memenuhi $0 \\le 6$, rantau $R$ terletak di sebelah bawah garis menuju $(0, 0)$.', en: 'Since $(0, 0)$ satisfies $0 \\le 6$, region $R$ lies on the side containing $(0, 0)$ (below the line).' }
              },
              {
                label: { bm: 'Langkah 2: Uji (0, 2) bagi y ≥ x (kerana garis melalui asalan)', en: 'Step 2: Test (0, 2) for y ≥ x (since line passes through origin)' },
                tex: { bm: 'y = 2 \\ge x = 0 \\;(\\text{Benar}) \\implies \\text{Lorek atas } y = x', en: 'y = 2 \\ge x = 0 \\;(\\text{True}) \\implies \\text{Shade above } y = x' },
                why: { bm: 'Apabila garis melalui $(0, 0)$, pilih titik di atas paksi-$y$ seperti $(0, 2)$ untuk menentukan bahagian atas.', en: 'When a line passes through $(0, 0)$, test a point on the $y$-axis like $(0, 2)$ to confirm the upper side.' }
              },
              {
                label: { bm: 'Langkah 3: Cari bucu persilangan', en: 'Step 3: Find corner vertices' },
                tex: { bm: 'x + x = 6 \\implies x = 3,\\; y = 3; \\quad \\text{Bucu: } (0,0),\\; (0,6),\\; (3,3)', en: 'x + x = 6 \\implies x = 3,\\; y = 3; \\quad \\text{Vertices: } (0,0),\\; (0,6),\\; (3,3)' },
                why: { bm: 'Dalam Sukuan I ($x, y \\ge 0$), rantau $R$ membentuk segi tiga dengan tiga bucu padu ini.', en: 'In Quadrant I ($x, y \\ge 0$), region $R$ forms a triangle with these three solid vertices.' }
              }
            ],
            trap: {
              bm: 'Jika pekali $y$ negatif seperti $2x - y \\le 4$, JANGAN lorek bawah terus — tukar dahulu kepada $y \\ge 2x - 4$ (atau uji $(0, 0)$: $0 \\le 4$ Benar)!',
              en: 'If the $y$-coefficient is negative like $2x - y \\le 4$, DO NOT shade below — rewrite as $y \\ge 2x - 4$ first (or test $(0, 0)$: $0 \\le 4$ True)!'
            }
          },
          tip: {
            bm: 'Jika garis melalui asalan $(0, 0)$, anda tidak boleh menguji $(0, 0)$ — uji $(0, 2)$ atau $(2, 0)$!',
            en: 'If a line passes through $(0, 0)$, you cannot test $(0, 0)$ — test $(0, 2)$ or $(2, 0)$ instead!'
          }
        },
        {
          title: { bm: '3. Garis Pencari Selari (k = ax + by), Pengujian Bucu & Syarat Integer', en: '3. Parallel Search Line (k = ax + by), Vertex Testing & Integer Points' },
          prereq: {
            bm: 'Ingat kaedah penghapusan dan penggantian bagi $2$ persamaan linear serentak untuk mencari koordinat persilangan $(x, y)$ antara dua garis sempadan.',
            en: 'Recall elimination and substitution for $2$ simultaneous linear equations to find the exact intersection $(x, y)$ of two boundary lines.'
          },
          body: {
            bm: 'Untuk mencari nilai optimum $k = ax + by$: lukis **garis pencari selari** putus-putus $ax + by = \\text{GSTK}(a, b)$ dan gelongsor pembaris selari merentas $R$ (**bucu terakhir disentuh ke luar = Maksimum**, **bucu pertama = Minimum**). Sahkan dengan menggantikan koordinat bucu. Jika $x, y$ ialah bilangan objek fizikal (kerusi, orang, kek), koordinat wajib **integer di dalam $R$** dan bukan di atas garis putus-putus ($<, >$)!',
            en: 'To optimize $k = ax + by$: plot a dashed **parallel search line** $ax + by = \\text{LCM}(a, b)$ and slide a ruler parallel across $R$ (**last vertex touched outward = Max**, **first = Min**). Verify by substituting vertices. When $x, y$ count physical items (chairs, people, cakes), coordinates must be **integers inside $R$**, never on dashed borders ($<, >$)!'
          },
          firstStep: {
            bm: '1. Cari $\\text{GSTK}(a, b)$ bagi garis pencari supaya pintasan $(k/a, 0)$ dan $(0, k/b)$ bernilai bulat.\n2. Selesaikan persamaan serentak dua sempadan untuk bucu persilangan yang tepat.\n3. Gantikan semua bucu calon ke dalam $k = ax + by$ (dan semak syarat integer jika perlu)!',
            en: '1. Pick $\\text{LCM}(a, b)$ for the search line so intercepts $(k/a, 0)$ and $(0, k/b)$ are clean integers.\n2. Solve the two intersecting boundary equations simultaneously for exact $(x, y)$.\n3. Substitute all candidate vertices into $k = ax + by$ (and check integer feasibility if discrete)!'
          },
          formulas: [
            {
              label: { bm: 'Fungsi Objektif & Garis Pencari Selari', en: 'Objective Function & Parallel Search Line' },
              tex: { bm: 'k = ax + by, \\qquad ax + by = \\text{GSTK}(a, b) \\;(\\text{uji semua bucu } \\in R)', en: 'k = ax + by, \\qquad ax + by = \\text{LCM}(a, b) \\;(\\text{test every vertex } \\in R)' }
            }
          ],
          workedExample: {
            title: { bm: 'Contoh Terbimbing: Garis Pencari & Pengesahan Bucu', en: 'Worked Example: Parallel Search Line & Vertex Verification' },
            problem: {
              bm: 'Maksimumkan $k = 40x + 30y$ tertakluk kepada $x + y \\le 50$, $2x + y \\le 80$, dan $x, y \\ge 0$.',
              en: 'Maximize $k = 40x + 30y$ subject to $x + y \\le 50$, $2x + y \\le 80$, and $x, y \\ge 0$.'
            },
            steps: [
              {
                label: { bm: 'Langkah 1: Lukis garis pencari guna GSTK(40, 30) = 1200', en: 'Step 1: Plot search line using LCM(40, 30) = 1200' },
                tex: '40x + 30y = 1200 \\implies (30, 0) \\text{ & } (0, 40)',
                why: { bm: 'Pintasan $(30, 0)$ dan $(0, 40)$ mudah diplot dengan tepat pada kertas graf.', en: 'Intercepts $(30, 0)$ and $(0, 40)$ are clean whole numbers to plot accurately.' }
              },
              {
                label: { bm: 'Langkah 2: Gelongsor selari ke bucu persilangan', en: 'Step 2: Slide parallel to the intersection vertex' },
                tex: '(2x + y) - (x + y) = 80 - 50 \\implies x = 30, \\quad y = 50 - 30 = 20',
                why: { bm: 'Penghapusan $y$ memberi $x = 30$; gantikan ke $x + y = 50$ memberi $y = 20$.', en: 'Eliminating $y$ gives $x = 30$; substituting into $x + y = 50$ gives $y = 20$.' }
              },
              {
                label: { bm: 'Langkah 3: Uji semua bucu dalam k = 40x + 30y', en: 'Step 3: Verify all vertices in k = 40x + 30y' },
                tex: '(0,0)\\to 0,\\; (0,50)\\to 1500,\\; (40,0)\\to 1600,\\; (30,20)\\to 40(30)+30(20) = 1200 + 600 = 1800',
                why: { bm: '$1800$ ialah nilai terbesar, maka maksimum berlaku pada $(30, 20)$.', en: '$1800$ is the highest value, confirming maximum at $(30, 20)$.' }
              }
            ],
            trap: {
              bm: 'Jangan pilih titik di atas garis putus-putus ($<$ atau $>$) atau koordinat perpuluhan bagi objek bilangan bulat!',
              en: 'Never pick points on a dashed line ($<$ or $>$) or decimal coordinates for discrete integer objects!'
            }
          },
          tip: {
            bm: 'Sentiasa nyatakan kedua-dua **nilai optimum $k$** dan **titik koordinat $(x, y)$** dalam jawapan akhir anda!',
            en: 'Always state BOTH the **optimal value $k$** and the **coordinates $(x, y)$** in your final answer!'
          }
        }
      ],
      traps: [
        {
          title: { bm: 'Memilih Koordinat Perpuluhan atau Titik Garis Putus-putus', en: 'Picking Non-Integer Coordinates or Dashed-Border Points' },
          desc: {
            bm: 'Jika bucu persilangan ialah $(12.5, 17.5)$ bagi bilangan meja dan kerusi, anda TIDAK boleh membuat $12.5$ meja! Pilih titik nombor bulat terdekat DI DALAM rantau $R$ dan bukan di atas garis putus-putus ($<, >$).',
            en: 'If lines intersect at $(12.5, 17.5)$ tables and chairs, you cannot make $0.5$ tables! Test nearby integer points strictly INSIDE region $R$ and off dashed ($<, >$) borders.'
          }
        },
        {
          title: { bm: 'Terbalik Simbol ≤ / ≥ dalam Lebihan, Nisbah atau Peratusan', en: 'Reversing ≤ / ≥ in Excess, Ratio or Percentage Constraints' },
          desc: {
            bm: '"$y$ melebihi $x$ selebih-lebihnya $15$" ialah $y - x \\le 15$ (bukan $\\ge$!), dan "$x$ sekurang-kurangnya $20\\%$ daripada jumlah" ialah $x \\ge 0.2(x + y)$ (bukan $0.2y$).',
            en: '"$y$ exceeds $x$ by at most $15$" is $y - x \\le 15$ (not $\\ge$!), and "$x$ is at least $20\\%$ of total" is $x \\ge 0.2(x + y)$ (not $0.2y$).'
          }
        },
        {
          title: { bm: 'Lorek Sebelah Salah Apabila Pekali y Negatif', en: 'Shading Wrong Side When y-Coefficient Is Negative' },
          desc: {
            bm: 'Bagi $2x - y \\le 4$, pekali $y$ ialah $-1$ (negatif!). Tukar kepada $y \\ge 2x - 4$ atau uji $(0, 0)$: $0 \\le 4$ (Benar) supaya anda melorek sebelah yang betul.',
            en: 'For $2x - y \\le 4$, the $y$-coefficient is $-1$ (negative!). Rewrite as $y \\ge 2x - 4$ or test $(0, 0)$: $0 \\le 4$ (True) so you shade the correct side.'
          }
        }
      ],
      solvers: [
        {
          id: 'lp-vertex-optimizer',
          title: { bm: 'Kalkulator Nilai Optimum Bucu Rantau R (k = ax + by)', en: 'Feasible Region Corner Optimizer (k = ax + by)' },
          desc: {
            bm: 'Bagi kekangan x ≥ 0, y ≥ 0, x + y ≤ S, dan 2x + y ≤ M, cari kesemua bucu R dan keuntungan maksimum k = px + qy.',
            en: 'For x ≥ 0, y ≥ 0, x + y ≤ S, and 2x + y ≤ M, find all corner vertices and maximize profit k = px + qy.'
          },
          inputs: [
            { id: 'S', label: { bm: 'Had x + y ≤ S', en: 'Limit x + y ≤ S' }, default: 50 },
            { id: 'M', label: { bm: 'Had 2x + y ≤ M', en: 'Limit 2x + y ≤ M' }, default: 80 },
            { id: 'p', label: { bm: 'Untung x (RM p)', en: 'Profit x (RM p)' }, default: 30 },
            { id: 'q', label: { bm: 'Untung y (RM q)', en: 'Profit y (RM q)' }, default: 20 }
          ],
          solve: function (v, lang) {
            const rawS = strictNum(v.S), rawM = strictNum(v.M);
            const p = numOr(v.p, 30);
            const q = numOr(v.q, 20);
            if (!Number.isFinite(rawS) || rawS <= 0 || !Number.isFinite(rawM) || rawM <= 0) {
              const badS = Number.isFinite(rawS) ? rawS : 0;
              const badM = Number.isFinite(rawM) ? rawM : 0;
              return {
                problemTex: `x + y \\le ${badS},\\; 2x + y \\le ${badM},\\; x,y \\ge 0`,
                steps: [
                  {
                    badge: 'P1',
                    title: lang === 'bm' ? 'Langkah 1: Semak syarat had positif S > 0 dan M > 0' : 'Step 1: Check positive limit condition S > 0 and M > 0',
                    tex: `S = ${badS},\\; M = ${badM} \\quad (\\text{${lang === 'bm' ? 'Input tidak sah' : 'Invalid input'}})`,
                    why: lang === 'bm' ? 'Dengan x ≥ 0 dan y ≥ 0, had S dan M mesti positif (S > 0, M > 0) untuk membentuk rantau R bukan kosong.' : 'With x ≥ 0 and y ≥ 0, limits S and M must be positive (S > 0, M > 0) to form a non-empty region R.'
                  },
                  {
                    badge: 'K1',
                    title: lang === 'bm' ? 'Langkah 2: Semak kesauran pada (0, 0)' : 'Step 2: Check feasibility at (0, 0)',
                    tex: (() => {
                      const tagS = badS < 0 ? (lang === 'bm' ? '\\text{(Palsu)}' : '\\text{(False)}') : (badS === 0 ? (lang === 'bm' ? '\\text{(Titik (0,0) sahaja)}' : '\\text{(Point (0,0) only)}') : (lang === 'bm' ? '\\text{(Benar)}' : '\\text{(True)}'));
                      const tagM = badM < 0 ? (lang === 'bm' ? '\\text{(Palsu)}' : '\\text{(False)}') : (badM === 0 ? (lang === 'bm' ? '\\text{(Titik (0,0) sahaja)}' : '\\text{(Point (0,0) only)}') : (lang === 'bm' ? '\\text{(Benar)}' : '\\text{(True)}'));
                      return `0 + 0 \\le ${badS}\\; ${tagS}, \\quad 2(0) + 0 \\le ${badM}\\; ${tagM}`;
                    })(),
                    why: lang === 'bm' ? 'Jika S ≤ 0 atau M ≤ 0, tiada rantau bernilai positif dapat dilorek.' : 'If S ≤ 0 or M ≤ 0, no positive feasible region exists.'
                  },
                  {
                    badge: 'J1',
                    title: lang === 'bm' ? 'Langkah 3: Masukkan nilai positif S, M > 0' : 'Step 3: Enter positive limits S, M > 0',
                    tex: 'S > 0, \\quad M > 0',
                    why: lang === 'bm' ? 'Cuba masukkan contohnya S = 50 dan M = 80.' : 'Try entering e.g. S = 50 and M = 80.'
                  }
                ],
                finalTex: `\\text{${lang === 'bm' ? 'Input tidak sah: tiada rantau positif bagi' : 'Invalid input: no positive region for'} } S = ${badS},\\; M = ${badM}`,
                trapWarning: lang === 'bm'
                  ? 'Amaran Domain [P]: Had kekangan $S$ dan $M$ mestilah positif ($S > 0, M > 0$) untuk menghasilkan rantau tersaur $R$!'
                  : 'Domain Warning [P]: Constraint limits $S$ and $M$ must be positive ($S > 0, M > 0$) to form a feasible region $R$!'
              };
            }
            const S = rawS;
            const M = rawM;
            const yMaxInt = Math.min(S, M);
            const xMaxInt = Math.min(S, M / 2);
            const candidates = [
              [0, 0],
              [0, yMaxInt],
              [xMaxInt, 0]
            ];
            const ix = M - S;
            const iy = 2 * S - M;
            const hasInteriorIntersect = ix > 0 && iy > 0;
            if (hasInteriorIntersect) {
              candidates.push([ix, iy]);
            }

            let bestPt = candidates[0], bestK = -Infinity;
            const qTerm = q >= 0 ? `+ ${U.roundStr(q)}` : `- ${U.roundStr(Math.abs(q))}`;
            const evalRows = candidates.map(([cx, cy]) => {
              const kv = p * cx + q * cy;
              if (kv > bestK) { bestK = kv; bestPt = [cx, cy]; }
              const pxVal = U.roundStr(p * cx);
              const qyNum = q * cy;
              const qySigned = qyNum >= 0 ? `+ ${U.roundStr(qyNum)}` : `- ${U.roundStr(Math.abs(qyNum))}`;
              return `(${U.roundStr(cx)}, ${U.roundStr(cy)}) \\to ${U.roundStr(p)}(${U.roundStr(cx)}) ${qTerm}(${U.roundStr(cy)}) = ${pxVal} ${qySigned} = ${U.roundStr(kv)}`;
            });
            const atWord = lang === 'bm' ? 'pada' : 'at';
            let step1Tex;
            let trapWarning = '';
            if (hasInteriorIntersect) {
              step1Tex = `(2x + y) - (x + y) = ${M} - ${S} \\implies x = ${U.roundStr(ix)},\\; y = ${S} - ${U.roundStr(ix)} = ${U.roundStr(iy)}; \\quad \\text{${lang === 'bm' ? 'Bucu' : 'Vertices'}}: ` + candidates.map((pt) => `(${U.roundStr(pt[0])}, ${U.roundStr(pt[1])})`).join(',\\; ');
            } else if (S > M) {
              step1Tex = `x + y \\le ${S} \\text{ ${lang === 'bm' ? 'bertindih (tiada persilangan Q1)' : 'redundant / no Q1 intersection'}}; \\quad \\text{${lang === 'bm' ? 'Bucu' : 'Vertices'}}: ` + candidates.map((pt) => `(${U.roundStr(pt[0])}, ${U.roundStr(pt[1])})`).join(',\\; ');
              trapWarning = lang === 'bm'
                ? `Amaran Kekangan [P]: Oleh sebab $S = ${S} > M = ${M}$, kekangan $x + y \\le ${S}$ bertindih (tidak aktif) dan tiada titik persilangan di dalam Sukuan I; bucu $R$ ialah pintasan paksi sahaja.`
                : `Constraint Warning [P]: Since $S = ${S} > M = ${M}$, constraint $x + y \\le ${S}$ is redundant and cannot intersect $2x + y \\le ${M}$ inside Quadrant I (no unique interior corner); vertices of $R$ are axis intercepts only.`;
            } else if (M > 2 * S) {
              step1Tex = `2x + y \\le ${M} \\text{ ${lang === 'bm' ? 'bertindih (tiada persilangan Q1)' : 'redundant / no Q1 intersection'}}; \\quad \\text{${lang === 'bm' ? 'Bucu' : 'Vertices'}}: ` + candidates.map((pt) => `(${U.roundStr(pt[0])}, ${U.roundStr(pt[1])})`).join(',\\; ');
              trapWarning = lang === 'bm'
                ? `Amaran Kekangan [P]: Oleh sebab $M = ${M} > 2S = ${2 * S}$, kekangan $2x + y \\le ${M}$ bertindih dan tiada persilangan di dalam Sukuan I.`
                : `Constraint Warning [P]: Since $M = ${M} > 2S = ${2 * S}$, constraint $2x + y \\le ${M}$ is redundant and cannot intersect $x + y \\le ${S}$ inside Quadrant I.`;
            } else {
              step1Tex = `\\text{${lang === 'bm' ? 'Persilangan pada paksi' : 'Axis-coincident intersection'}}; \\quad \\text{${lang === 'bm' ? 'Bucu' : 'Vertices'}}: ` + candidates.map((pt) => `(${U.roundStr(pt[0])}, ${U.roundStr(pt[1])})`).join(',\\; ');
            }

            const objTex = `${U.roundStr(p)}x ${q >= 0 ? '+ ' + U.roundStr(q) : '- ' + U.roundStr(Math.abs(q))}y`;
            const out = {
              problemTex: `x+y \\le ${S},\\; 2x+y \\le ${M},\\; x,y \\ge 0; \\quad \\max k = ${objTex}`,
              steps: [
                { badge: 'P1', title: lang === 'bm' ? 'Langkah 1: Selesaikan persilangan & senarai bucu unik R' : 'Step 1: Solve intersection & list unique vertices of R', tex: step1Tex, why: lang === 'bm' ? 'Hanya simpan bucu unik di dalam Sukuan I (x ≥ 0, y ≥ 0).' : 'Keep only unique feasible vertices in Quadrant I (x ≥ 0, y ≥ 0).' },
                { badge: 'K1', title: lang === 'bm' ? 'Langkah 2: Uji fungsi objektif k = px + qy pada setiap bucu' : 'Step 2: Evaluate objective k = px + qy at every vertex', tex: evalRows.join(', \\quad '), why: lang === 'bm' ? 'Gantikan setiap (x, y) dan darab sebelum menjumlahkan.' : 'Substitute each (x, y) and multiply before adding.' },
                { badge: 'J1', title: lang === 'bm' ? 'Langkah 3: Titik & nilai optimum' : 'Step 3: Optimal point & maximum k', tex: `k_{\\max} = ${U.roundStr(bestK)} \\quad \\text{${atWord} } (${U.roundStr(bestPt[0])}, ${U.roundStr(bestPt[1])})`, why: lang === 'bm' ? 'Nilai k tertinggi di dalam rantau tersaur R.' : 'Highest objective value inside feasible region R.' }
              ],
              finalTex: `k_{\\max} = \\text{RM }${U.roundStr(bestK)} \\text{ ${atWord} } (${U.roundStr(bestPt[0])}, ${U.roundStr(bestPt[1])})`
            };
            if (trapWarning) out.trapWarning = trapWarning;
            return out;
          }
        }
      ],
      generateQuestion: function (tier, lang) {
        if (tier === 1) {
          const variant = U.pick([
            {
              bm: `Sebuah bengkel menghasilkan $x$ buah meja dan $y$ buah kerusi. Bilangan kerusi adalah **sekurang-kurangnya $2$ kali** bilangan meja. Pilih ketaksamaan yang betul:\n**1)** $y \\ge 2x$   |   **2)** $y \\le 2x$   |   **3)** $x \\ge 2y$`,
              en: `A workshop produces $x$ tables and $y$ chairs. The number of chairs is **at least twice** the number of tables. Choose the correct inequality:\n**1)** $y \\ge 2x$   |   **2)** $y \\le 2x$   |   **3)** $x \\ge 2y$`,
              ans: '1', ansTex: '1)\\; y \\ge 2x', trapVal: 2,
              trapBm: 'Perangkap [P]: y ≤ 2x bermaksud "selebih-lebihnya 2 kali"! "Sekurang-kurangnya" ialah ≥.',
              trapEn: 'Trap [P]: y ≤ 2x means "at most twice"! "At least" requires ≥.',
              ruleBm: '"Sekurang-kurangnya" bermaksud $\\ge$, maka $y \\ge 2x$',
              ruleEn: '"At least" means $\\ge$, so $y \\ge 2x$',
              givenBm: 'Bilangan meja $= x$, kerusi $= y$; kerusi **sekurang-kurangnya $2$ kali** meja',
              givenEn: 'Tables $= x$, chairs $= y$; chairs are **at least twice** tables',
              step1PromptBm: 'Uji nombor contoh: jika bilangan meja $x = 10$, apakah bilangan **minimum** kerusi $y$ yang dibenarkan?',
              step1PromptEn: 'Quick number test: if there are $x = 10$ tables, what is the **minimum** allowed number of chairs $y$?',
              step1Expected: 20,
              step1HintBm: 'Dua kali $10$ ialah $2 \\times 10 = 20$.',
              step1HintEn: 'Twice $10$ is $2 \\times 10 = 20$.',
              stepTex: { bm: '\\text{Kerusi }(y) \\ge 2 \\times \\text{Meja }(x) \\implies y \\ge 2x', en: '\\text{Chairs }(y) \\ge 2 \\times \\text{Tables }(x) \\implies y \\ge 2x' },
              testTex: { bm: 'x = 10 \\implies y \\ge 2(10) = 20 \\;(\\text{Pilihan 1})', en: 'x = 10 \\implies y \\ge 2(10) = 20 \\;(\\text{Option 1})' },
              hint2Bm: 'Susun mengikut ayat: kerusi ($y$) "sekurang-kurangnya" ($\\ge$) dua kali meja ($2x$), lalu padankan dengan ketaksamaan yang sepadan.',
              hint2En: 'Translate word order: chairs ($y$) are "at least" ($\\ge$) twice tables ($2x$), then match the corresponding inequality.'
            },
            {
              bm: `Sebuah kedai kek membuat $x$ biji kek coklat dan $y$ biji kek keju. **Jumlah kedua-dua kek tidak melebihi $60$ biji**. Pilih ketaksamaan yang betul:\n**1)** $x + y \\ge 60$   |   **2)** $x + y \\le 60$   |   **3)** $x + y < 60$`,
              en: `A bakery bakes $x$ chocolate cakes and $y$ cheesecakes. The **total number of cakes does not exceed $60$**. Choose the correct inequality:\n**1)** $x + y \\ge 60$   |   **2)** $x + y \\le 60$   |   **3)** $x + y < 60$`,
              ans: '2', ansTex: '2)\\; x + y \\le 60', trapVal: 3,
              trapBm: 'Perangkap [P]: "Tidak melebihi 60" masih membenarkan nilai tepat 60, jadi wajib guna ≤ (bukan <)!',
              trapEn: 'Trap [P]: "Does not exceed 60" includes 60 itself, so use ≤ (not strict <)!',
              ruleBm: '"Tidak melebihi $60$" termasuk nilai had $60 \\to$ guna $\\le$',
              ruleEn: '"Does not exceed $60$" includes boundary $60 \\to$ use $\\le$',
              givenBm: 'Kek coklat $= x$, kek keju $= y$; **jumlah tidak melebihi $60$**',
              givenEn: 'Chocolate cakes $= x$, cheesecakes $= y$; **total does not exceed $60$**',
              step1PromptBm: 'Uji nombor contoh: jika $x = 25$ kek coklat dibuat, apakah bilangan **maksimum** kek keju $y$ supaya jumlah $\\le 60$?',
              step1PromptEn: 'Quick number test: if $x = 25$ chocolate cakes are made, what is the **maximum** cheesecakes $y$ so total $\\le 60$?',
              step1Expected: 35,
              step1HintBm: 'Kira $60 - 25$.',
              step1HintEn: 'Compute $60 - 25$.',
              stepTex: { bm: 'x + y \\le 60 \\quad (\\text{termasuk } x + y = 60)', en: 'x + y \\le 60 \\quad (\\text{includes } x + y = 60)' },
              testTex: { bm: 'x = 25 \\implies y \\le 60 - 25 = 35 \\;(\\text{Pilihan 2})', en: 'x = 25 \\implies y \\le 60 - 25 = 35 \\;(\\text{Option 2})' },
              hint2Bm: 'Oleh sebab $60$ sendiri dibenarkan ("tidak melebihi"), guna simbol terangkum $\\le$ bukan $<$ antara $x + y$ dan $60$.',
              hint2En: 'Because $60$ itself is allowed ("does not exceed"), use inclusive $\\le$ instead of strict $<$ between $x + y$ and $60$.'
            },
            {
              bm: `Bilangan peserta perempuan ($y$) **melebihi bilangan peserta lelaki ($x$) selebih-lebihnya $15$ orang**. Pilih ketaksamaan yang betul:\n**1)** $y - x \\ge 15$   |   **2)** $x - y \\le 15$   |   **3)** $y - x \\le 15$`,
              en: `The number of female participants ($y$) **exceeds male participants ($x$) by at most $15$**. Choose the correct inequality:\n**1)** $y - x \\ge 15$   |   **2)** $x - y \\le 15$   |   **3)** $y - x \\le 15$`,
              ans: '3', ansTex: '3)\\; y - x \\le 15', trapVal: 1,
              trapBm: 'Perangkap [P]: "Selebih-lebihnya 15" bermaksud beza maksimum ialah 15, jadi y − x ≤ 15!',
              trapEn: 'Trap [P]: "By at most 15" caps the difference at 15, giving y − x ≤ 15!',
              ruleBm: '"$y$ melebihi $x$ selebih-lebihnya $15$" $\\to y - x \\le 15$',
              ruleEn: '"$y$ exceeds $x$ by at most $15$" $\\to y - x \\le 15$',
              givenBm: 'Lelaki $= x$, perempuan $= y$; $y$ **melebihi $x$ selebih-lebihnya $15$**',
              givenEn: 'Males $= x$, females $= y$; $y$ **exceeds $x$ by at most $15$**',
              step1PromptBm: 'Uji nombor contoh: jika terdapat $x = 10$ lelaki, apakah bilangan **maksimum** perempuan $y$ supaya beza $y - x \\le 15$?',
              step1PromptEn: 'Quick number test: if there are $x = 10$ males, what is the **maximum** females $y$ so difference $y - x \\le 15$?',
              step1Expected: 25,
              step1HintBm: 'Tambah $10 + 15$.',
              step1HintEn: 'Add $10 + 15$.',
              stepTex: { bm: '\\text{Lebihan } (y - x) \\le 15 \\implies y - x \\le 15', en: '\\text{Excess } (y - x) \\le 15 \\implies y - x \\le 15' },
              testTex: { bm: 'x = 10 \\implies y \\le 10 + 15 = 25 \\;(\\text{Pilihan 3})', en: 'x = 10 \\implies y \\le 10 + 15 = 25 \\;(\\text{Option 3})' },
              hint2Bm: 'Yang lebih banyak tolak yang kurang memberi $y - x$, dan had maksimum "selebih-lebihnya $15$" bermaksud $\\le 15$.',
              hint2En: 'Larger minus smaller gives $y - x$, and a cap of "by at most $15$" translates to $\\le 15$.'
            }
          ]);
          return {
            tier: 1, tpLabel: 'TP1–TP2', subtopic: { bm: '7.1 Menterjemah Kekangan Ayat kepada Ketaksamaan', en: '7.1 Translating Verbal Constraints to Inequalities' }, marks: 2,
            prompt: lang === 'bm' ? variant.bm : variant.en,
            answerType: 'choice', correctValue: variant.ans, displayAnswerTex: variant.ansTex,
            placeholder: { bm: 'Pilih atau taip 1, 2, atau 3', en: 'Pick or type 1, 2, or 3' },
            intentMeta: {
              given: { bm: variant.givenBm, en: variant.givenEn },
              goal: { bm: 'Terjemahkan kata kunci kekangan kepada simbol $\\le, \\ge, <,$ atau $>$', en: 'Translate the verbal keyword into $\\le, \\ge, <,$ or $>$' },
              conceptRule: { bm: variant.ruleBm, en: variant.ruleEn }
            },
            guidedSteps: [
              { prompt: { bm: variant.step1PromptBm, en: variant.step1PromptEn }, expected: variant.step1Expected, hint: { bm: variant.step1HintBm, en: variant.step1HintEn } },
              { prompt: { bm: `Pilih nombor jawapan yang tepat ($1$, $2$, atau $3$):`, en: `Choose the matching option number ($1$, $2$, or $3$):` }, expected: Number(variant.ans), hint: { bm: variant.hint2Bm, en: variant.hint2En } }
            ],
            traps: [
              { value: variant.trapVal, message: { bm: variant.trapBm, en: variant.trapEn } }
            ],
            hints: [
              lang === 'bm' ? variant.ruleBm : variant.ruleEn,
              lang === 'bm' ? variant.hint2Bm : variant.hint2En
            ],
            steps: [
              { badge: 'P1', title: lang === 'bm' ? 'Kenal pasti pemboleh ubah & kata kunci' : 'Identify variables & keyword rule', tex: lang === 'bm' ? variant.stepTex.bm : variant.stepTex.en, why: lang === 'bm' ? 'Padankan frasa ayat kepada arah simbol yang betul.' : 'Match the verbal phrase to the exact inequality symbol.' },
              { badge: 'K1', title: lang === 'bm' ? 'Sahkan dengan ujian nombor contoh' : 'Verify with sample test number', tex: lang === 'bm' ? variant.testTex.bm : variant.testTex.en, why: lang === 'bm' ? 'Menguji nombor nyata mengesahkan ketaksamaan tidak terbalik.' : 'Testing a sample number confirms the inequality is not reversed.' },
              { badge: 'J1', title: lang === 'bm' ? 'Pilihan ketaksamaan yang tepat' : 'Matching inequality option', tex: variant.ansTex, why: lang === 'bm' ? 'Pilihan ' + variant.ans + ' sepadan sepenuhnya.' : 'Option ' + variant.ans + ' matches completely.' }
            ]
          };
        }
        if (tier === 2) {
          const p = U.pick([15, 20, 25]);
          const q = U.pick([30, 40]);
          const v1 = [10, 40], v2 = [30, 25], v3 = [45, 10];
          const k1 = p * v1[0] + q * v1[1];
          const k2 = p * v2[0] + q * v2[1];
          const k3 = p * v3[0] + q * v3[1];
          const kMax = Math.max(k1, k2, k3);
          const kMin = Math.min(k1, k2, k3);
          const kSwapMax = Math.max(q * v1[0] + p * v1[1], q * v2[0] + p * v2[1], q * v3[0] + p * v3[1]);
          const traps = [
            { value: kMin, message: { bm: `Perangkap [J]: ${kMin} ialah nilai MINIMUM! Soalan meminta keuntungan MAKSIMUM antara ketiga-tiga bucu.`, en: `Trap [J]: ${kMin} is the MINIMUM value! The question asks for MAXIMUM profit across the three vertices.` } }
          ];
          if (Math.abs(kSwapMax - kMax) > 1) {
            traps.push({
              value: kSwapMax,
              message: { bm: `Perangkap [P]: Anda tertukar pekali $x$ dan $y$ (mengira $${q}x + ${p}y$ bukannya $${p}x + ${q}y$)!`, en: `Trap [P]: You swapped the coefficients of $x$ and $y$ (computing $${q}x + ${p}y$ instead of $${p}x + ${q}y$)!` }
            });
          }
          return {
            tier: 2, tpLabel: 'TP3–TP4', subtopic: { bm: '7.1 Mengoptimumkan Fungsi Objektif pada Bucu R', en: '7.1 Optimizing Objective Function at Vertices' }, marks: 3,
            prompt: lang === 'bm'
              ? `Bucu-bucu bagi suatu rantau berlorek $R$ (*feasible region*) ialah $A(10, 40)$, $B(30, 25)$, dan $C(45, 10)$. Cari **keuntungan maksimum** bagi fungsi objektif $k = ${p}x + ${q}y$.`
              : `The vertices of a feasible region $R$ are $A(10, 40)$, $B(30, 25)$, and $C(45, 10)$. Find the **maximum profit** for the objective function $k = ${p}x + ${q}y$.`,
            answerType: 'number', correctValue: kMax, displayAnswerTex: `k_{\\max} = ${kMax}`,
            intentMeta: {
              given: { bm: `Bucu $A(10,40), B(30,25), C(45,10)$ dan fungsi objektif $k = ${p}x + ${q}y$`, en: `Vertices $A(10,40), B(30,25), C(45,10)$ and objective function $k = ${p}x + ${q}y$` },
              goal: { bm: 'Uji ketiga-tiga bucu dan pilih nilai maksimum $k$', en: 'Evaluate all three vertices and pick the maximum value of $k$' },
              conceptRule: { bm: 'Nilai maksimum $k = px + qy$ berlaku pada salah satu bucu rantau $R$', en: 'Maximum $k = px + qy$ occurs at one of the corner vertices of $R$' }
            },
            guidedSteps: [
              { prompt: { bm: `Nilaikan $k$ pada bucu $A(10, 40)$: $${p}(10) + ${q}(40)$:`, en: `Evaluate $k$ at vertex $A(10, 40)$: $${p}(10) + ${q}(40)$:` }, expected: k1, hint: { bm: `Kira ${10 * p} + ${40 * q}.`, en: `Compute ${10 * p} + ${40 * q}.` } },
              { prompt: { bm: `Bandingkan juga $B(30,25) \\to ${k2}$ dan $C(45,10) \\to ${k3}$. Apakah nilai **maksimum** $k$?`, en: `Compare with $B(30,25) \\to ${k2}$ and $C(45,10) \\to ${k3}$. What is **maximum** $k$?` }, expected: kMax, hint: { bm: `Pilih nombor paling besar antara ${k1}, ${k2}, dan ${k3}.`, en: `Pick the largest of ${k1}, ${k2}, and ${k3}.` } }
            ],
            traps,
            hints: [
              lang === 'bm' ? `Gantikan setiap pasangan $(x, y)$ ke dalam $k = ${p}x + ${q}y$ dan darab dahulu sebelum menambah.` : `Substitute each $(x, y)$ into $k = ${p}x + ${q}y$ and multiply before adding.`,
              lang === 'bm' ? 'Bandingkan ketiga-tiga hasil $k_A, k_B, k_C$ dan pilih nilai paling tinggi.' : 'Compare all three values $k_A, k_B, k_C$ and pick the highest.'
            ],
            steps: [
              { badge: 'P1', title: lang === 'bm' ? 'Gantikan bucu A(10, 40) dan B(30, 25)' : 'Substitute vertices A(10, 40) and B(30, 25)', tex: `k_A = ${p}(10) + ${q}(40) = ${10 * p} + ${40 * q} = ${k1}, \\quad k_B = ${p}(30) + ${q}(25) = ${30 * p} + ${25 * q} = ${k2}`, why: lang === 'bm' ? 'Darab pekali p dengan x dan q dengan y sebelum menjumlahkan.' : 'Multiply p by x and q by y before summing.' },
              { badge: 'K1', title: lang === 'bm' ? 'Gantikan bucu C(45, 10)' : 'Substitute vertex C(45, 10)', tex: `k_C = ${p}(45) + ${q}(10) = ${45 * p} + ${10 * q} = ${k3}`, why: lang === 'bm' ? 'Uji bucu ketiga untuk memastikan tiada calon terlepas.' : 'Test the third vertex so no candidate is missed.' },
              { badge: 'J1', title: lang === 'bm' ? 'Bandingkan dan pilih maksimum' : 'Compare and select maximum', tex: `k_{\\max} = ${kMax}`, why: lang === 'bm' ? 'Pilih nilai tertinggi antara k_A, k_B, dan k_C.' : 'Select the highest value among k_A, k_B, and k_C.' }
            ]
          };
        }
        const S = U.pick([40, 50, 60]);
        const M = S + U.pick([20, 30]);
        const ix = M - S, iy = 2 * S - M;
        const p = 50, q = 30;
        const kInt = p * ix + q * iy;
        const maxProfit = Math.max(q * S, p * (M / 2), kInt);
        return {
          tier: 3, tpLabel: 'TP5–TP6 (KBAT)', subtopic: { bm: '7.1 Pemodelan & Pengoptimuman Pengaturcaraan Linear', en: '7.1 Full Linear Programming Optimization' }, marks: 6,
          prompt: lang === 'bm'
            ? `Sebuah kilang menghasilkan $x$ beg gred A dan $y$ beg gred B sehari mengikut kekangan:\n` +
              `- Jumlah beg selebih-lebihnya $${S}$: $x + y \\le ${S}$\n` +
              `- Masa jahitan: $2x + y \\le ${M}$ dengan $x \\ge 0, y \\ge 0$.\n` +
              `Jika keuntungan ialah $\\text{RM }${p}$ bagi seunit gred A dan $\\text{RM }${q}$ bagi seunit gred B, cari **jumlah keuntungan maksimum** sehari (dalam RM).`
            : `A factory makes $x$ Grade-A bags and $y$ Grade-B bags daily subject to:\n` +
              `- Total bags at most $${S}$: $x + y \\le ${S}$\n` +
              `- Sewing hours: $2x + y \\le ${M}$ with $x \\ge 0, y \\ge 0$.\n` +
              `Given profit is $\\text{RM }${p}$ per Grade-A bag and $\\text{RM }${q}$ per Grade-B bag, find the **maximum daily profit** (in RM).`,
          answerType: 'number', correctValue: maxProfit, displayAnswerTex: `\\text{RM }${maxProfit} \\quad \\text{${lang === 'bm' ? 'pada' : 'at'} } (${ix}, ${iy})`,
          intentMeta: {
            given: { bm: `Kekangan $x + y \\le ${S}$, $2x + y \\le ${M}$, $x, y \\ge 0$, dan $k = ${p}x + ${q}y$`, en: `Constraints $x + y \\le ${S}$, $2x + y \\le ${M}$, $x, y \\ge 0$, and $k = ${p}x + ${q}y$` },
            goal: { bm: 'Cari bucu persilangan $(x, y)$ dan maksimumkan keuntungan $k$', en: 'Find the intersection vertex $(x, y)$ and maximize profit $k$' },
            conceptRule: { bm: 'Selesaikan persamaan serentak sempadan, kemudian uji semua bucu $R$ dalam $k = px + qy$', en: 'Solve the intersecting boundary equations, then evaluate all vertices of $R$ in $k = px + qy$' }
          },
          guidedSteps: [
            { prompt: { bm: `Cari koordinat-$x$ bagi persilangan garis $x + y = ${S}$ dan $2x + y = ${M}$:`, en: `Find the $x$-coordinate where $x + y = ${S}$ and $2x + y = ${M}$ intersect:` }, expected: ix, hint: { bm: `Tolak persamaan pertama daripada persamaan kedua: $x = ${M} - ${S}$.`, en: `Subtract eq 1 from eq 2: $x = ${M} - ${S}$.` } },
            { prompt: { bm: `Dengan titik persilangan $(${ix}, ${iy})$, bandingkan keuntungan bucu $(0, ${S})$, $(${M / 2}, 0)$, dan $(${ix}, ${iy})$ bagi $k = ${p}x + ${q}y$ untuk keuntungan maksimum:`, en: `Compare profits at $(0, ${S})$, $(${M / 2}, 0)$, and $(${ix}, ${iy})$ in $k = ${p}x + ${q}y$ for max profit:` }, expected: maxProfit, hint: { bm: `Gantikan $x = ${ix}$ dan $y = ${iy}$ ke dalam $${p}(${ix}) + ${q}(${iy})$ dan bandingkan dengan bucu lain.`, en: `Plug $x = ${ix}$ and $y = ${iy}$ into $${p}(${ix}) + ${q}(${iy})$ and compare with the other two corners.` } }
          ],
          traps: [
            { value: p * (M / 2), message: { bm: `Perangkap [K]: Anda hanya menguji pintasan paksi (${M / 2}, 0)! Bucu persilangan (${ix}, ${iy}) memberi keuntungan lebih tinggi.`, en: `Trap [K]: You only checked intercept (${M / 2}, 0)! Intersection vertex (${ix}, ${iy}) yields higher profit.` } }
          ],
          hints: [
            lang === 'bm' ? `Hapuskan $y$ dengan menolak $(2x + y) - (x + y) = ${M} - ${S}$ untuk mendapat $x$, lalu cari $y = ${S} - x$.` : `Eliminate $y$ via $(2x + y) - (x + y) = ${M} - ${S}$ to get $x$, then find $y = ${S} - x$.`,
            lang === 'bm' ? `Uji $k = ${p}x + ${q}y$ pada $(0, ${S})$, $(${M / 2}, 0)$, dan $(${ix}, ${iy})$ untuk mencari maksimum.` : `Evaluate $k = ${p}x + ${q}y$ at $(0, ${S})$, $(${M / 2}, 0)$, and $(${ix}, ${iy})$ to find the maximum.`
          ],
          steps: [
            { badge: 'P1', title: lang === 'bm' ? 'Cari bucu persilangan sempadan' : 'Find boundary intersection vertex', tex: `(2x+y) - (x+y) = ${M} - ${S} \\implies x = ${ix}, \\quad y = ${S} - ${ix} = ${iy}`, why: lang === 'bm' ? 'Penghapusan y memberi x = M − S, kemudian ganti kembali ke x + y = S.' : 'Eliminating y gives x = M − S, then substitute back into x + y = S.' },
            { badge: 'K1', title: lang === 'bm' ? 'Uji semua bucu pada k = 50x + 30y' : 'Evaluate k = 50x + 30y at all vertices', tex: `(0,${S})\\to ${q * S}, \\quad (${M / 2},0)\\to ${p * (M / 2)}, \\quad (${ix},${iy})\\to ${p}(${ix}) + ${q}(${iy}) = ${p * ix} + ${q * iy} = ${kInt}`, why: lang === 'bm' ? 'Nilaikan setiap bucu rantau R secara menyeluruh.' : 'Evaluate every corner vertex of feasible region R.' },
            { badge: 'J1', title: lang === 'bm' ? 'Keuntungan maksimum' : 'Maximum profit', tex: `\\text{RM }${maxProfit}`, why: lang === 'bm' ? 'Nilai keuntungan terbesar pada bucu optimum.' : 'Highest profit value at the optimal vertex.' }
          ]
        };
      }
    },

    // =========================================================================
    // FORM 5 CHAPTER 8: KINEMATICS OF LINEAR MOTION / KINEMATIK GERAKAN LINEAR
    // =========================================================================
    {
      id: 'f5-c8',
      stage: 4,
      unlocked: true,
      form: 5,
      num: 8,
      code: { bm: 'T5 • Bab 8', en: 'F5 • Ch 8' },
      icon: 's,v,a',
      color: '#e11d48',
      category: 'kalkulus',
      title: { bm: 'Kinematik Gerakan Linear', en: 'Kinematics of Linear Motion' },
      subtitle: {
        bm: 'Sesaran s(t), halaju v = ds/dt, pecutan a = dv/dt, rehat seketika v = 0 & jumlah jarak dilalui',
        en: 'Displacement s(t), velocity v = ds/dt, acceleration a = dv/dt, instantaneous rest v = 0 & total distance'
      },
      spmWeight: { bm: 'Wajib Kertas 2 Bhg C (10 markah penuh!)', en: 'Paper 2 Sec C Classic (10 full marks!)' },
      concepts: [
        {
          title: { bm: '1. Jambatan Graf d-t/v-t, Aliran s ↔ v ↔ a, Nyahpecutan & Domain t ≥ 0', en: '1. d-t/v-t Graph Bridge, s ↔ v ↔ a Flow, Deceleration & t ≥ 0 Domain' },
          prereq: {
            bm: 'Ingat graf jarak-masa ($d$-$t$) dan **graf halaju-masa ($v$-$t$)** daripada Fizik/Matematik T4: **kecerunan** graf $v$-$t$ ialah pecutan $a$, **luas di bawah** graf $v$-$t$ ialah jarak ($\\int |v|\\,dt$), kawasan di **atas** paksi-$t$ ialah gerakan ke kanan ($v > 0$), dan di **bawah** ialah gerakan ke kiri ($v < 0$).',
            en: 'Recall **distance-time ($d$-$t$) and velocity-time ($v$-$t$) graphs** from Form 4 Physics/Math: the **gradient** of a $v$-$t$ graph is acceleration $a$, the **area under** a $v$-$t$ graph is distance ($\\int |v|\\,dt$), above the $t$-axis means moving right ($v > 0$), and below means moving left ($v < 0$).'
          },
          body: {
            bm: 'Hafal tangga **S – V – A**: **bezakan** ($\\frac{d}{dt}$) untuk turun $s \\to v \\to a$, dan **kamirkan** ($\\int dt + c$) untuk naik $a \\to v \\to s$ (sentiasa cari $+c$ guna syarat $t = 0$!). **Tanda Nyahpecutan:** *"nyahpecutan $4\\text{ m s}^{-2}$"* bermaksud **$a = -4$**. **Domain Masa Fizikal $t \\ge 0$:** tolak sebarang punca $t < 0$ dan potong selang negatif (cth. $t < 1.5 \\implies 0 \\le t < 1.5$).',
            en: 'Memorize the **S – V – A** ladder: **differentiate** ($\\frac{d}{dt}$) going down $s \\to v \\to a$, and **integrate** ($\\int dt + c$) going up $a \\to v \\to s$ (always solve $+c$ using $t = 0$!). **Deceleration Sign:** *"deceleration $4\\text{ m s}^{-2}$"* means **$a = -4$**. **Physical Domain $t \\ge 0$:** reject any root $t < 0$ and clip negative intervals (e.g. $t < 1.5 \\implies 0 \\le t < 1.5$).'
          },
          firstStep: {
            bm: '1. Catat fungsi yang diberi ($s, v,$ atau $a$) dan tanda positif/negatif (terutama nyahpecutan $a < 0$).\n2. Jika mengamir $a \\to v$ atau $v \\to s$, tulis $+c_1$ / $+c_2$ serta-merta dan gantikan nilai $t = 0$.\n3. Semak setiap jawapan masa agar memenuhi domain fizikal $t \\ge 0$!',
            en: '1. Identify which function is given ($s, v,$ or $a$) and check signs (especially deceleration $a < 0$).\n2. When integrating $a \\to v$ or $v \\to s$, write $+c_1$ / $+c_2$ immediately and plug in $t = 0$.\n3. Check every time answer against physical time $t \\ge 0$!'
          },
          formulas: [
            {
              label: { bm: 'Pembezaan & Pengamiran Gerakan', en: 'Kinematics Differentiation & Integration' },
              tex: 'v = \\frac{ds}{dt}, \\quad a = \\frac{dv}{dt} = \\frac{d^2s}{dt^2}, \\qquad v = \\int a\\,dt + c_1, \\quad s = \\int v\\,dt + c_2'
            },
            {
              label: { bm: 'Syarat Masa Fizikal & Nyahpecutan', en: 'Physical Time Domain & Deceleration' },
              tex: { bm: 't \\ge 0 \\;(\\text{tolak } t < 0), \\qquad \\text{Nyahpecutan } k \\implies a = -k < 0', en: 't \\ge 0 \\;(\\text{reject } t < 0), \\qquad \\text{Deceleration } k \\implies a = -k < 0' }
            }
          ],
          workedExample: {
            title: { bm: 'Contoh Terbimbing: Kamiran Berganda a → v → s & Julat Pecutan', en: 'Worked Example: Double Integration a → v → s & Time Clipping' },
            problem: {
              bm: 'Suatu zarah melalui titik tetap $O$ ($s = 0$) dengan halaju awal $12\\text{ m s}^{-1}$ dan pecutan $a = 6 - 4t$. Cari fungsi $v(t)$, $s(t)$, dan julat masa apabila zarah memecut ($a > 0$).',
              en: 'A particle passes fixed point $O$ ($s = 0$) with initial velocity $12\\text{ m s}^{-1}$ and acceleration $a = 6 - 4t$. Find $v(t)$, $s(t)$, and the time interval when the particle accelerates ($a > 0$).'
            },
            steps: [
              {
                label: { bm: 'Langkah 1: Kamirkan a kepada v dan cari c₁', en: 'Step 1: Integrate a to v and solve c₁' },
                tex: 'v(t) = \\int (6 - 4t)\\,dt = 6t - 2t^2 + c_1; \\quad v(0) = 12 \\implies c_1 = 12 \\implies v(t) = 12 + 6t - 2t^2',
                why: { bm: 'Halaju awal $12$ pada $t = 0$ memberi $0 - 0 + c_1 = 12$.', en: 'Initial velocity $12$ at $t = 0$ gives $0 - 0 + c_1 = 12$.' }
              },
              {
                label: { bm: 'Langkah 2: Kamirkan v kepada s dan cari c₂', en: 'Step 2: Integrate v to s and solve c₂' },
                tex: 's(t) = \\int (12 + 6t - 2t^2)\\,dt = 12t + 3t^2 - \\frac{2}{3}t^3 + c_2; \\quad s(0) = 0 \\implies c_2 = 0',
                why: { bm: 'Melalui titik tetap $O$ pada $t = 0$ memberi $s(0) = 0$, maka $c_2 = 0$.', en: 'Passing fixed point $O$ at $t = 0$ gives $s(0) = 0$, so $c_2 = 0$.' }
              },
              {
                label: { bm: 'Langkah 3: Julat masa memecut (a > 0) dipotong kepada t ≥ 0', en: 'Step 3: Accelerating interval (a > 0) clipped to t ≥ 0' },
                tex: '6 - 4t > 0 \\implies 6 > 4t \\implies t < 1.5 \\implies 0 \\le t < 1.5\\text{ s}',
                why: { bm: 'Masa tidak boleh negatif, jadi $t < 1.5$ wajib dihadkan oleh $t \\ge 0$.', en: 'Time cannot be negative, so $t < 1.5$ must be clipped at $t \\ge 0$.' }
              }
            ],
            trap: {
              bm: 'Jangan lupa $c_1 = 12$ dalam $v(t)$, dan jangan tulis $t < 1.5$ sahaja tanpa batas bawah $0 \\le t < 1.5$!',
              en: 'Never drop $c_1 = 12$ in $v(t)$, and never write $t < 1.5$ without the lower bound $0 \\le t < 1.5$!'
            }
          },
          tip: {
            bm: 'Semasa mengamirkan $v = \\int a\\,dt$ atau $s = \\int v\\,dt$, sentiasa guna syarat awal pada $t = 0$ untuk mencari pemalar $+c$ sebelum ke langkah seterusnya!',
            en: 'When integrating $v = \\int a\\,dt$ or $s = \\int v\\,dt$, always use initial conditions at $t = 0$ to solve $+c$ before moving on!'
          }
        },
        {
          title: { bm: '2. Kamus 5 Kata Kunci Gerakan (t = 0, s = 0, v = 0, a = 0, v < 0)', en: '2. 5 Motion Trigger Keywords (t = 0, s = 0, v = 0, a = 0, v < 0)' },
          prereq: {
            bm: 'Ingat titik pusingan fungsi ($\\frac{dy}{dx} = 0$) dan lakaran ketaksamaan kuadratik ($(t - 1)(t - 3) < 0$ berada di antara $1$ dan $3$).',
            en: 'Recall turning points ($\\frac{dy}{dx} = 0$) and quadratic inequality sketching ($(t - 1)(t - 3) < 0$ lies between $1$ and $3$).'
          },
          body: {
            bm: 'Setiap frasa soalan kinematik ialah kod matematik terus:\n1. *"Pada mulanya / awalnya"* $\\implies t = 0$.\n2. *"Melalui / kembali ke titik tetap $O$"* $\\implies s = 0$.\n3. *"Berhenti seketika / pegun / berpatah balik"* $\\implies v = 0$.\n4. *"Halaju maksimum / minimum / seragam"* $\\implies a = 0$.\n5. *"Bergerak ke kiri / arah negatif"* $\\implies v < 0$ (kanan $\\implies v > 0$).',
            en: 'Every kinematics phrase translates directly into an equation:\n1. *"Initially"* $\\implies t = 0$.\n2. *"Passes / returns to fixed point $O$"* $\\implies s = 0$.\n3. *"Instantaneous rest / reverses direction"* $\\implies v = 0$.\n4. *"Maximum / minimum / uniform velocity"* $\\implies a = 0$.\n5. *"Moves left / negative direction"* $\\implies v < 0$ (right $\\implies v > 0$).'
          },
          firstStep: {
            bm: '1. Gariskan kata kunci gerakan dalam soalan dan tulis persamaannya di tepi ($t=0$, $s=0$, $v=0$, atau $a=0$).\n2. Selesaikan persamaan tersebut untuk mencari masa $t$ ($t \\ge 0$).\n3. Semak apa yang diminta oleh soalan akhir ($t$, $s$, $v$, atau $a$?) supaya tidak berhenti separuh jalan!',
            en: '1. Underline the motion keyword and write its equation beside it ($t=0$, $s=0$, $v=0$, or $a=0$).\n2. Solve that equation for time $t$ ($t \\ge 0$).\n3. Re-read what the question asks for ($t$, $s$, $v$, or $a$?) so you do not stop halfway!'
          },
          formulas: [
            {
              label: { bm: '5 Terjemahan Wajib SPM', en: '5 Essential SPM Motion Triggers' },
              tex: { bm: '\\text{Awal: } t=0 \\;|\\; \\text{Di } O: s=0 \\;|\\; \\text{Rehat/Pusing: } v=0 \\;|\\; \\text{Halaju maks/min: } a=0 \\;|\\; \\text{Ke kiri: } v<0', en: '\\text{Initial: } t=0 \\;|\\; \\text{At } O: s=0 \\;|\\; \\text{Rest/U-turn: } v=0 \\;|\\; \\text{Max/min } v: a=0 \\;|\\; \\text{Left: } v<0' }
            }
          ],
          workedExample: {
            title: { bm: 'Contoh Terbimbing: Menterjemah v = 0, a = 0, dan v < 0', en: 'Worked Example: Decoding v = 0, a = 0, and v < 0' },
            problem: {
              bm: 'Diberi $s = t^3 - 6t^2 + 9t$. Cari (a) masa zarah berhenti seketika, (b) sesaran apabila halaju minimum, dan (c) julat masa zarah bergerak ke kiri.',
              en: 'Given $s = t^3 - 6t^2 + 9t$. Find (a) times of instantaneous rest, (b) displacement at minimum velocity, and (c) time interval when moving left.'
            },
            steps: [
              {
                label: { bm: 'Langkah 1: (a) Bezakan s kepada v dan selesaikan v = 0', en: 'Step 1: (a) Differentiate s to v and solve v = 0' },
                tex: 'v = \\frac{ds}{dt} = 3t^2 - 12t + 9 = 3(t - 1)(t - 3) = 0 \\implies t = 1\\text{ s},\\; 3\\text{ s}',
                why: { bm: 'Berhenti seketika bermaksud $v = 0$; bahagi $3$ dahulu untuk memfaktorkan dengan mudah.', en: 'Instantaneous rest means $v = 0$; factor out $3$ first to factorize cleanly.' }
              },
              {
                label: { bm: 'Langkah 2: (b) Halaju minimum apabila a = 0, lalu ganti ke s(t)', en: 'Step 2: (b) Minimum velocity when a = 0, then substitute into s(t)' },
                tex: 'a = \\frac{dv}{dt} = 6t - 12 = 0 \\implies t = 2\\text{ s} \\implies s(2) = (2)^3 - 6(2)^2 + 9(2) = 8 - 24 + 18 = 2\\text{ m}',
                why: { bm: 'Halaju minimum berlaku pada $a = 0$, kemudian gantikan $t = 2$ ke dalam $s$, bukan $v$.', en: 'Minimum velocity occurs at $a = 0$; substitute $t = 2$ back into $s$, not $v$.' }
              },
              {
                label: { bm: 'Langkah 3: (c) Bergerak ke kiri apabila v < 0', en: 'Step 3: (c) Moving left when v < 0' },
                tex: '3(t - 1)(t - 3) < 0 \\implies 1 < t < 3\\text{ s}',
                why: { bm: 'Lengkung senyum $v(t)$ berada di bawah paksi-$t$ antara punca $1$ dan $3$.', en: 'The upward parabola $v(t)$ lies below the $t$-axis between roots $1$ and $3$.' }
              }
            ],
            trap: {
              bm: 'Jangan menyamakan $s = 0$ apabila ditanya "berhenti seketika", dan jangan berhenti pada $t = 2\\text{ s}$ jika soalan meminta sesaran $s(2)$!',
              en: 'Never set $s = 0$ for "instantaneous rest", and do not stop at $t = 2\\text{ s}$ when asked for displacement $s(2)$!'
            }
          },
          tip: {
            bm: 'Tulis jadual mini $t=0, s=0, v=0, a=0$ di penjuru kertas soalan sebaik sahaja membaca soalan Kinematik!',
            en: 'Jot the mini code $t=0, s=0, v=0, a=0$ in the margin as soon as you start any Kinematics question!'
          }
        },
        {
          title: { bm: '3. Jumlah Jarak vs Sesaran Bersih (Perangkap Pusingan U v = 0!)', en: '3. Total Distance vs Net Displacement (Turnaround v = 0 Trap!)' },
          prereq: {
            bm: 'Bayangkan anda berjalan $10\\text{ m}$ ke hadapan kemudian patah balik $10\\text{ m}$ ke titik asal: **sesaran bersih $= 0\\text{ m}$**, tetapi kaki anda sudah berjalan **jumlah jarak $= 20\\text{ m}$**!',
            en: 'Imagine walking $10\\text{ m}$ forward then $10\\text{ m}$ back to the start: **net displacement $= 0\\text{ m}$**, yet your feet travelled **total distance $= 20\\text{ m}$**!'
          },
          body: {
            bm: 'Jika zarah menukar arah ($v = 0$) pada masa $t = t_p$ di dalam selang $(0, T)$, anda **TIDAK BOLEH** hanya mengira $s(T)$! Pecahkan selang $[0, T]$ pada setiap $t_p \\in (0, T)$ (tolak $t_p < 0$!), kira kedudukan $s(0), s(t_p), s(T)$, dan jumlahkan jarak mutlak setiap segmen: $|s(t_p) - s(0)| + |s(T) - s(t_p)|$.',
            en: 'If the particle reverses direction ($v = 0$) at $t = t_p$ inside $(0, T)$, you **CANNOT** just evaluate $s(T)$! Split $[0, T]$ at every $t_p \\in (0, T)$ (reject $t_p < 0$!), compute $s(0), s(t_p), s(T)$, and sum the positive segment lengths: $|s(t_p) - s(0)| + |s(T) - s(t_p)|$.'
          },
          firstStep: {
            bm: '1. Selesaikan $v = 0$ dahulu dan tapis hanya punca $t_p$ yang berada di dalam $(0, T)$.\n2. Kira kedudukan $s(0)$, $s(t_p)$, dan $s(T)$.\n3. Lukis garis nombor laluan $s(0) \\to s(t_p) \\to s(T)$ dan tambah nilai mutlak $|\\text{pergi}| + |\\text{balik}|$!',
            en: '1. Solve $v = 0$ first and keep only roots $t_p$ strictly inside $(0, T)$.\n2. Compute positions $s(0)$, $s(t_p)$, and $s(T)$.\n3. Sketch the 1D path $s(0) \\to s(t_p) \\to s(T)$ and add absolute leg lengths $|\\text{out}| + |\\text{back}|$!'
          },
          formulas: [
            {
              label: { bm: 'Rumus Jumlah Jarak Dilalui pada [0, T]', en: 'Total Distance Travelled on [0, T]' },
              tex: { bm: '\\text{Jumlah Jarak} = |s(t_p) - s(0)| + |s(T) - s(t_p)| = \\int_0^{t_p} |v|\\,dt + \\int_{t_p}^T |v|\\,dt', en: '\\text{Total Distance} = |s(t_p) - s(0)| + |s(T) - s(t_p)| = \\int_0^{t_p} |v|\\,dt + \\int_{t_p}^T |v|\\,dt' }
            }
          ],
          workedExample: {
            title: { bm: 'Contoh Terbimbing: Sesaran vs Jumlah Jarak Dengan Pusingan U', en: 'Worked Example: Displacement vs Total Distance With U-Turn' },
            problem: {
              bm: 'Diberi $v = 3t^2 - 12$ dan $s(0) = 0$. Cari sesaran dan jumlah jarak yang dilalui dalam selang $[0, 3]$.',
              en: 'Given $v = 3t^2 - 12$ and $s(0) = 0$. Find the displacement and total distance travelled on $[0, 3]$.'
            },
            steps: [
              {
                label: { bm: 'Langkah 1: Kamirkan v(t) untuk s(t)', en: 'Step 1: Integrate v(t) for s(t)' },
                tex: 's(t) = \\int (3t^2 - 12)\\,dt = t^3 - 12t + c; \\quad s(0) = 0 \\implies c = 0',
                why: { bm: 'Syarat $s(0) = 0$ memansuhkan pemalar kamiran $c$.', en: 'Condition $s(0) = 0$ makes integration constant $c = 0$.' }
              },
              {
                label: { bm: 'Langkah 2: Semak pusingan U (v = 0) dalam (0, 3)', en: 'Step 2: Check U-turns (v = 0) inside (0, 3)' },
                tex: { bm: '3t^2 - 12 = 0 \\implies t^2 = 4 \\implies t = 2\\text{ s} \\;(\\text{tolak } t = -2 < 0)', en: '3t^2 - 12 = 0 \\implies t^2 = 4 \\implies t = 2\\text{ s} \\;(\\text{reject } t = -2 < 0)' },
                why: { bm: 'Oleh sebab $0 < 2 < 3$, zarah berpatah balik pada $t = 2\\text{ s}$ dan kita mesti pecahkan $[0, 3]$ di $t = 2$.', en: 'Since $0 < 2 < 3$, the particle reverses at $t = 2\\text{ s}$ so we must split $[0, 3]$ at $t = 2$.' }
              },
              {
                label: { bm: 'Langkah 3: Nilaikan s(0), s(2), s(3)', en: 'Step 3: Evaluate s(0), s(2), s(3)' },
                tex: 's(0) = 0, \\quad s(2) = 8 - 24 = -16\\text{ m}, \\quad s(3) = 27 - 36 = -9\\text{ m}',
                why: { bm: 'Zarah bergerak ke kiri sejauh $16\\text{ m}$ ke $s = -16$, kemudian berpatah ke kanan ke $s = -9$.', en: 'The particle travels left to $s = -16$, then reverses right to $s = -9$.' }
              },
              {
                label: { bm: 'Langkah 4: Bandingkan sesaran bersih dengan jumlah jarak', en: 'Step 4: Compare net displacement vs total distance' },
                tex: { bm: '\\text{Sesaran} = s(3) = -9\\text{ m}; \\quad \\text{Jumlah Jarak} = |-16 - 0| + |-9 - (-16)| = 16 + 7 = 23\\text{ m}', en: '\\text{Displacement} = s(3) = -9\\text{ m}; \\quad \\text{Total Distance} = |-16 - 0| + |-9 - (-16)| = 16 + 7 = 23\\text{ m}' },
                why: { bm: 'Jarak sentiasa positif: $16\\text{ m}$ ke kiri ditambah $7\\text{ m}$ balik ke kanan $= 23\\text{ m}$.', en: 'Distance is always positive: $16\\text{ m}$ left plus $7\\text{ m}$ right $= 23\\text{ m}$.' }
              }
            ],
            trap: {
              bm: 'Menjawab $|-9| = 9\\text{ m}$ mengabaikan $14\\text{ m}$ perjalanan pergi-balik selepas pusingan U pada $t = 2\\text{ s}$!',
              en: 'Answering $|-9| = 9\\text{ m}$ misses the $14\\text{ m}$ back-and-forth leg created by the U-turn at $t = 2\\text{ s}$!'
            }
          },
          tip: {
            bm: 'Lukis garis nombor ringkas menunjukkan kedudukan $s(0) \\to s(t_p) \\to s(T)$ supaya jumlah jarak jelas di depan mata!',
            en: 'Sketch a quick 1D path diagram $s(0) \\to s(t_p) \\to s(T)$ so total distance is crystal clear!'
          }
        }
      ],
      traps: [
        {
          title: { bm: 'Mengira s(T) Terus sebagai Jumlah Jarak', en: 'Evaluating Net s(T) Instead of Total Distance' },
          desc: {
            bm: 'Jika zarah bergerak dari $O$ ke $+8\\text{ m}$ kemudian patah balik ke $+2\\text{ m}$, sesaran $s(T)$ ialah $2\\text{ m}$ tetapi **JUMLAH JARAK ialah $8 + 6 = 14\\text{ m}$**!',
            en: 'Moving from $O$ to $+8\\text{ m}$ then reversing to $+2\\text{ m}$ gives displacement $2\\text{ m}$, whereas **TOTAL DISTANCE is $8 + 6 = 14\\text{ m}$**!'
          }
        },
        {
          title: { bm: 'Lupa Pemalar +c Semasa Mengamir a → v → s', en: 'Forgetting +c When Integrating a → v → s' },
          desc: {
            bm: 'Setiap kali mengamirkan $a$ ke $v$ atau $v$ ke $s$, wajib tambah $+c$ dan gantikan nilai awal pada $t = 0$ (contoh $v(0) = 12 \\implies c_1 = 12$, bukan $0$!).',
            en: 'Every integration from $a$ to $v$ or $v$ to $s$ requires $+c$ solved at $t = 0$ (e.g. $v(0) = 12 \\implies c_1 = 12$, never assume $0$!).'
          }
        },
        {
          title: { bm: 'Tanda +k untuk Nyahpecutan atau Lupa Had Masa t ≥ 0', en: 'Using +k for Deceleration or Forgetting Physical Domain t ≥ 0' },
          desc: {
            bm: '"Nyahpecutan $4\\text{ m s}^{-2}$" bermaksud $a = -4$ (negatif!), dan sebarang julat masa seperti $t < 5$ wajib dipotong kepada $0 \\le t < 5$ kerana $t \\ge 0$.',
            en: '"Deceleration of $4\\text{ m s}^{-2}$" means $a = -4$ (negative!), and intervals like $t < 5$ must be clipped to $0 \\le t < 5$ since $t \\ge 0$.'
          }
        }
      ],
      solvers: [
        {
          id: 'kinematics-journey-solver',
          title: { bm: 'Solver Perjalanan Zarah, Pusingan Arah (v = 0) & Jumlah Jarak', en: 'Particle Turnaround (v = 0) & Total Distance Solver' },
          desc: {
            bm: 'Bagi v(t) = pt − q (mula di O, s(0) = 0), jana s(t), masa pusingan arah v = 0, sesaran & jumlah jarak dalam T saat pertama.',
            en: 'For v(t) = pt − q (starting at O, s(0) = 0), compute s(t), turnaround time v = 0, net displacement & total distance in first T seconds.'
          },
          inputs: [
            { id: 'p', label: { bm: 'p (dlm v = pt − q)', en: 'p (in v = pt − q)' }, default: 2 },
            { id: 'q', label: 'q', default: 6 },
            { id: 'T', label: { bm: 'Selang masa T (s)', en: 'Time T (s)' }, default: 5 }
          ],
          solve: function (v, lang) {
            const p = numOr(v.p, 2);
            const q = numOr(v.q, 6);
            const rawT = strictNum(v.T);
            if (!Number.isFinite(rawT) || rawT <= 0) {
              const badT = Number.isFinite(rawT) ? rawT : 0;
              return {
                problemTex: `v(t) = ${U.polyTex([{ c: p, p: 1 }, { c: -q, p: 0 }], 't')}, \\quad [0,\\; ${badT}]`,
                steps: [
                  {
                    badge: 'P1',
                    title: lang === 'bm' ? 'Langkah 1: Semak syarat selang masa T > 0' : 'Step 1: Check time interval T > 0',
                    tex: `T = ${badT} \\le 0 \\quad (\\text{${lang === 'bm' ? 'Input tidak sah' : 'Invalid input'}})`,
                    why: lang === 'bm' ? 'Masa fizikal T mesti positif (T > 0) untuk selang [0, T].' : 'Physical time T must be strictly positive (T > 0) for interval [0, T].'
                  },
                  {
                    badge: 'K1',
                    title: lang === 'bm' ? 'Langkah 2: Ingat domain masa fizikal t ≥ 0' : 'Step 2: Recall physical domain t ≥ 0',
                    tex: 't \\in [0,\\; T], \\quad T > 0',
                    why: lang === 'bm' ? 'Gerakan hanya ditakrif bagi masa bukan negatif.' : 'Motion is only defined for non-negative elapsed time.'
                  },
                  {
                    badge: 'J1',
                    title: lang === 'bm' ? 'Langkah 3: Masukkan nilai T > 0' : 'Step 3: Enter a positive value T > 0',
                    tex: `T > 0 \\quad (\\text{${lang === 'bm' ? 'cth.' : 'e.g.'} } T = 5\\text{ s})`,
                    why: lang === 'bm' ? 'Cuba masukkan T = 5 atau mana-mana masa positif.' : 'Try entering T = 5 or any positive time.'
                  }
                ],
                finalTex: `\\text{${lang === 'bm' ? 'Input tidak sah: masa' : 'Invalid input: time'} } T > 0`,
                trapWarning: lang === 'bm'
                  ? 'Amaran Domain [P]: Selang masa $T$ mestilah positif ($T > 0$)!'
                  : 'Domain Warning [P]: Time interval $T$ must be strictly positive ($T > 0$)!'
              };
            }
            const T = rawT;
            const vExpr = U.polyTex([{ c: p, p: 1 }, { c: -q, p: 0 }], 't');
            const sExpr = U.polyTex([{ c: 0.5 * p, p: 2 }, { c: -q, p: 1 }], 't');
            const sFn = (t) => 0.5 * p * t * t - q * t;
            const sT = sFn(T);
            const dispWord = lang === 'bm' ? 'Sesaran' : 'Displacement';
            const distWord = lang === 'bm' ? 'Jumlah Jarak' : 'Total Distance';

            if (p === 0) {
              const distConst = Math.abs(sT);
              const qSignTex = U.polyTex([{ c: -q, p: 1 }], 't');
              const step2Tex = q === 0
                ? `v(t) = 0 \\;(\\text{${lang === 'bm' ? 'zarah pegun sepanjang masa' : 'particle stationary'}}), \\quad s(${T}) = 0\\text{ m}`
                : `v(t) = ${U.roundStr(-q)} \\ne 0 \\;(\\text{${lang === 'bm' ? 'halaju malar, tiada pusingan U' : 'constant velocity, zero acceleration — no U-turn'}}), \\quad s(${T}) = ${U.roundStr(-q)}(${T}) = ${U.roundStr(sT)}\\text{ m}`;
              return {
                problemTex: `v(t) = ${vExpr}, \\quad s(0) = 0, \\quad [0,\\; ${T}]`,
                steps: [
                  {
                    badge: 'P1',
                    title: lang === 'bm' ? 'Langkah 1: Kamirkan halaju malar v(t) untuk s(t)' : 'Step 1: Integrate constant velocity v(t) for s(t)',
                    tex: `s(t) = \\int (${vExpr})\\,dt = ${qSignTex} + c = ${sExpr} \\quad (c = 0)`,
                    why: lang === 'bm' ? 'Apabila p = 0, pecutan ialah sifar (halaju malar) dan s(0) = 0 memberi c = 0.' : 'When p = 0, acceleration is zero (constant velocity) and s(0) = 0 gives c = 0.'
                  },
                  {
                    badge: 'K1',
                    title: lang === 'bm' ? 'Langkah 2: Semak pusingan arah (v = 0)' : 'Step 2: Check turnaround (v = 0)',
                    tex: step2Tex,
                    why: lang === 'bm' ? 'Halaju malar bukan sifar tidak pernah berpusing arah.' : 'A non-zero constant velocity never reverses direction.'
                  },
                  {
                    badge: 'J1',
                    title: lang === 'bm' ? `Langkah 3: Jumlah jarak dalam ${T} saat pertama` : `Step 3: Total distance in first ${T} seconds`,
                    tex: `\\text{${distWord}} = |s(${T}) - s(0)| = |${U.roundStr(sT)}| = ${U.roundStr(distConst)}\\text{ m}`,
                    why: lang === 'bm' ? 'Tiada pusingan U, maka jumlah jarak sama dengan magnitud sesaran.' : 'With no U-turn, total distance equals the magnitude of displacement.'
                  }
                ],
                finalTex: `\\text{${dispWord} } s(${T}) = ${U.roundStr(sT)}\\text{ m}, \\quad \\text{${distWord}} = ${U.roundStr(distConst)}\\text{ m}`,
                trapWarning: lang === 'bm'
                  ? 'Nota Kinematik [P]: $p = 0$ memberi pecutan sifar ($a = 0$, halaju malar $v = ' + U.roundStr(-q) + '$), jadi tiada titik pusingan U tunggal.'
                  : 'Kinematics Note [P]: $p = 0$ gives zero acceleration ($a = 0$, constant velocity $v = ' + U.roundStr(-q) + '$), so there is no turnaround point.'
              };
            }

            const tTurn = q / p;
            const halfP = U.roundStr(0.5 * p);
            const absQStr = Math.abs(q) === 1 ? '' : U.roundStr(Math.abs(q));
            const qTermInt = q === 0 ? '' : (q > 0 ? ` - ${absQStr}t` : ` + ${absQStr}t`);
            const step1Tex = `s(t) = \\int (${vExpr})\\,dt = \\frac{${p}}{2}t^2${qTermInt} + c = ${sExpr} \\quad (c = 0)`;
            const sTSub = q === 0
              ? `${halfP}(${T})^2 = ${U.roundStr(sT)}`
              : `${halfP}(${T})^2 ${q > 0 ? '-' : '+'} ${Math.abs(q)}(${T}) = ${U.roundStr(0.5 * p * T * T)} ${q > 0 ? '-' : '+'} ${U.roundStr(Math.abs(q * T))} = ${U.roundStr(sT)}`;
            const ptTex = U.polyTex([{ c: p, p: 1 }], 't');
            const solveTTex = p === 1
              ? (q === 0 ? `${vExpr} = 0 \\implies t = 0\\text{ s}` : `${vExpr} = 0 \\implies t = ${U.roundStr(tTurn)}\\text{ s}`)
              : p === -1
                ? (q === 0 ? `${vExpr} = 0 \\implies t = 0\\text{ s}` : `${vExpr} = 0 \\implies ${ptTex} = ${U.roundStr(q)} \\implies t = ${U.roundStr(tTurn)}\\text{ s}`)
                : `${vExpr} = 0 \\implies ${ptTex} = ${U.roundStr(q)} \\implies t = \\frac{${U.roundStr(q)}}{${U.roundStr(p)}} = ${U.roundStr(tTurn)}\\text{ s}`;
            const step2Tex = `${solveTTex}, \\qquad s(${T}) = ${sTSub}\\text{ m}`;

            let dist = Math.abs(sT);
            let turnNote = lang === 'bm'
              ? `\\text{Tiada pusingan arah dalam } (0, ${T}) \\implies \\text{Jarak} = |${U.roundStr(sT)}| = ${U.roundStr(dist)}\\text{ m}`
              : `\\text{No turnaround inside } (0, ${T}) \\implies \\text{Distance} = |${U.roundStr(sT)}| = ${U.roundStr(dist)}\\text{ m}`;
            if (tTurn > 0 && tTurn < T) {
              const sTurn = sFn(tTurn);
              const leg1 = Math.abs(sTurn);
              const leg2 = Math.abs(sT - sTurn);
              dist = leg1 + leg2;
              const sTurnStr = U.roundStr(sTurn);
              const sTStr = U.roundStr(sT);
              turnNote = `t_p = ${U.roundStr(tTurn)}\\text{ s},\\; s(t_p) = ${sTurnStr}\\text{ m} \\implies |${sTurnStr}| + |${sTStr} - (${sTurnStr})| = ${U.roundStr(leg1)} + ${U.roundStr(leg2)} = ${U.roundStr(dist)}\\text{ m}`;
            }

            return {
              problemTex: `v(t) = ${vExpr}, \\quad s(0) = 0, \\quad [0,\\; ${T}]`,
              steps: [
                { badge: 'P1', title: lang === 'bm' ? 'Langkah 1: Kamirkan v(t) untuk fungsi sesaran s(t)' : 'Step 1: Integrate v(t) for displacement s(t)', tex: step1Tex, why: lang === 'bm' ? 'Guna petua kuasa kamiran sebutan demi sebutan dan s(0) = 0 memberi c = 0.' : 'Apply reverse power rule term-by-term and s(0) = 0 gives c = 0.' },
                { badge: 'K1', title: lang === 'bm' ? 'Langkah 2: Semak masa rehat seketika / pusingan arah (v = 0)' : 'Step 2: Check turnaround time (v = 0)', tex: step2Tex, why: lang === 'bm' ? 'Pecahkan selang [0, T] jika 0 < t_p < T.' : 'Split interval [0, T] only if 0 < t_p < T.' },
                { badge: 'J1', title: lang === 'bm' ? 'Langkah 3: Jumlah jarak dalam ' + T + ' saat pertama' : 'Step 3: Total distance in first ' + T + ' seconds', tex: turnNote, why: lang === 'bm' ? 'Jumlahkan jarak mutlak pergi dan patah balik!' : 'Sum the absolute forward and return leg distances!' }
              ],
              finalTex: `\\text{${dispWord} } s(${T}) = ${U.roundStr(sT)}\\text{ m}, \\quad \\text{${distWord}} = ${U.roundStr(dist)}\\text{ m}`
            };
          }
        }
      ],
      generateQuestion: function (tier, lang) {
        if (tier === 1) {
          const k = U.randInt(2, 6);
          return {
            tier: 1, tpLabel: 'TP1–TP2', subtopic: { bm: '8.2 Halaju v = ds/dt & Rehat Seketika', en: '8.2 Velocity v = ds/dt & Instantaneous Rest' }, marks: 3,
            prompt: lang === 'bm'
              ? `Suatu zarah bergerak di sepanjang garis lurus supaya sesarannya $s\\text{ m}$ dari titik tetap $O$ diberi oleh $s = t^2 - ${2 * k}t$. Cari masa $t$ (dalam saat) apabila zarah itu **berhenti seketika**.`
              : `A particle moves along a straight line such that its displacement $s\\text{ m}$ from fixed point $O$ is $s = t^2 - ${2 * k}t$. Find the time $t$ (in seconds) when the particle is **instantaneously at rest**.`,
            answerType: 'number', correctValue: k, displayAnswerTex: `t = ${k}\\text{ s}`,
            intentMeta: {
              given: { bm: `Sesaran zarah $s = t^2 - ${2 * k}t$`, en: `Particle displacement $s = t^2 - ${2 * k}t$` },
              goal: { bm: 'Bezakan untuk cari $v = \\frac{ds}{dt}$, kemudian tetapkan $v = 0$', en: 'Differentiate to find $v = \\frac{ds}{dt}$, then solve $v = 0$' },
              conceptRule: { bm: 'Berhenti seketika bermaksud halaju $v = \\frac{ds}{dt} = 0$', en: 'Instantaneous rest means velocity $v = \\frac{ds}{dt} = 0$' }
            },
            guidedSteps: [
              { prompt: { bm: `Bezakan $s = t^2 - ${2 * k}t$ untuk mendapat $v = 2t - C$. Apakah nilai pemalar $C$?`, en: `Differentiate $s = t^2 - ${2 * k}t$ to get $v = 2t - C$. What is $C$?` }, expected: 2 * k, hint: { bm: `Terbitan bagi ${2 * k}t terhadap t ialah ${2 * k}.`, en: `Derivative of ${2 * k}t w.r.t. t is ${2 * k}.` } },
              { prompt: { bm: `Tetapkan $v = 2t - ${2 * k} = 0$. Apakah nilai $t$?`, en: `Set $v = 2t - ${2 * k} = 0$. What is $t$?` }, expected: k, hint: { bm: `Susun menjadi $2t = ${2 * k}$, kemudian bahagi ${2 * k} dengan $2$.`, en: `Rearrange to $2t = ${2 * k}$, then divide ${2 * k} by $2$.` } }
            ],
            traps: [
              { value: 2 * k, message: { bm: 'Perangkap [P]: Anda menetapkan s = 0 (kembali ke O), bukan v = 0 (berhenti seketika)! Bezakan ds/dt dahulu.', en: 'Trap [P]: You solved s = 0 (passing O) instead of v = ds/dt = 0 (at rest)!' } }
            ],
            hints: [
              lang === 'bm' ? 'Berhenti seketika bermaksud halaju $v = \\frac{ds}{dt} = 0$, bukan $s = 0$.' : 'Instantaneously at rest means velocity $v = \\frac{ds}{dt} = 0$, not $s = 0$.',
              lang === 'bm' ? `Bezakan dahulu $v = 2t - ${2 * k}$, kemudian selesaikan $2t = ${2 * k}$.` : `First differentiate $v = 2t - ${2 * k}$, then solve $2t = ${2 * k}$.`
            ],
            steps: [
              { badge: 'P1', title: lang === 'bm' ? 'Bezakan sesaran untuk halaju' : 'Differentiate displacement for velocity', tex: `v = \\frac{ds}{dt} = 2t - ${2 * k}`, why: lang === 'bm' ? 'Halaju ialah terbitan pertama sesaran terhadap masa.' : 'Velocity is the first derivative of displacement w.r.t. time.' },
              { badge: 'K1', title: lang === 'bm' ? 'Tetapkan v = 0 dan susun' : 'Set v = 0 and rearrange', tex: `2t - ${2 * k} = 0 \\implies 2t = ${2 * k}`, why: lang === 'bm' ? 'Pada detik berhenti seketika, halaju adalah sifar.' : 'At instantaneous rest, velocity equals zero.' },
              { badge: 'J1', title: lang === 'bm' ? 'Selesaikan nilai masa t' : 'Solve for time t', tex: `t = \\frac{${2 * k}}{2} = ${k}\\text{ s}`, why: lang === 'bm' ? 'Bahagikan kedua-dua belah dengan 2.' : 'Divide both sides by 2.' }
            ]
          };
        }
        if (tier === 2) {
          const halfC = U.randInt(2, 5);
          const c = 2 * halfC;
          const vMax = halfC * halfC;
          const prodC = c * halfC;
          const sqHalf = halfC * halfC;
          return {
            tier: 2, tpLabel: 'TP3–TP4', subtopic: { bm: '8.3 Halaju Maksimum (Pecutan a = 0)', en: '8.3 Maximum Velocity (Acceleration a = 0)' }, marks: 4,
            prompt: lang === 'bm'
              ? `Halaju suatu zarah, $v\\text{ m s}^{-1}$, diberi oleh $v = ${c}t - t^2$, dengan $t$ ialah masa dalam saat selepas melalui $O$. Cari **halaju maksimum** zarah tersebut.`
              : `The velocity of a particle, $v\\text{ m s}^{-1}$, is given by $v = ${c}t - t^2$, where $t$ is time in seconds after passing $O$. Find the **maximum velocity** of the particle.`,
            answerType: 'number', correctValue: vMax, displayAnswerTex: `v_{\\max} = ${vMax}\\text{ m s}^{-1} \\quad (\\text{${lang === 'bm' ? 'pada' : 'at'} } t = ${halfC}\\text{ s})`,
            intentMeta: {
              given: { bm: `Fungsi halaju $v = ${c}t - t^2$`, en: `Velocity function $v = ${c}t - t^2$` },
              goal: { bm: 'Cari masa apabila pecutan $a = \\frac{dv}{dt} = 0$, kemudian gantikan $t$ ke dalam $v$', en: 'Find time when acceleration $a = \\frac{dv}{dt} = 0$, then substitute $t$ into $v$' },
              conceptRule: { bm: 'Halaju mencapai nilai maksimum apabila pecutan $a = \\frac{dv}{dt} = 0$', en: 'Velocity reaches its maximum when acceleration $a = \\frac{dv}{dt} = 0$' }
            },
            guidedSteps: [
              { prompt: { bm: `Tetapkan pecutan $a = \\frac{dv}{dt} = ${c} - 2t = 0$. Apakah masa $t$?`, en: `Set acceleration $a = \\frac{dv}{dt} = ${c} - 2t = 0$. What is time $t$?` }, expected: halfC, hint: { bm: `Susun menjadi $2t = ${c}$, maka $t = \\frac{${c}}{2}$.`, en: `Rearrange to $2t = ${c}$, so $t = \\frac{${c}}{2}$.` } },
              { prompt: { bm: `Gantikan $t = ${halfC}$ ke dalam $v = ${c}t - t^2$ untuk halaju maksimum:`, en: `Substitute $t = ${halfC}$ into $v = ${c}t - t^2$ for maximum velocity:` }, expected: vMax, hint: { bm: `Kira ${c}(${halfC}) − (${halfC})² = ${prodC} − ${sqHalf}.`, en: `Compute ${c}(${halfC}) − (${halfC})² = ${prodC} − ${sqHalf}.` } }
            ],
            traps: [
              { value: halfC, message: { bm: 'Perangkap [J]: Itu masa t apabila halaju maksimum berlaku! Gantikan semula t ke dalam fungsi v.', en: 'Trap [J]: That is time t! Substitute t back into v(t) for maximum velocity.' } }
            ],
            hints: [
              lang === 'bm' ? 'Bezakan halaju untuk mendapat pecutan $a = \\frac{dv}{dt}$ dan samakan dengan $0$.' : 'Differentiate velocity to get acceleration $a = \\frac{dv}{dt}$ and set it equal to $0$.',
              lang === 'bm' ? `Selepas mendapat $t = ${halfC}$, gantikan nilai itu kembali ke dalam $v = ${c}t - t^2$.` : `After finding $t = ${halfC}$, substitute it back into $v = ${c}t - t^2$.`
            ],
            steps: [
              { badge: 'P1', title: lang === 'bm' ? 'Bezakan v untuk pecutan a = dv/dt' : 'Differentiate v for acceleration a = dv/dt', tex: `a = \\frac{dv}{dt} = ${c} - 2t`, why: lang === 'bm' ? 'Halaju maksimum berlaku apabila kecerunan v(t), iaitu pecutan a, bernilai sifar.' : 'Maximum velocity occurs when the gradient of v(t), i.e. acceleration a, is zero.' },
              { badge: 'K1', title: lang === 'bm' ? 'Selesaikan a = 0 untuk masa t' : 'Solve a = 0 for time t', tex: `${c} - 2t = 0 \\implies 2t = ${c} \\implies t = \\frac{${c}}{2} = ${halfC}\\text{ s}`, why: lang === 'bm' ? 'Cari detik masa apabila halaju mencapai puncak.' : 'Find the instant when velocity reaches its peak.' },
              { badge: 'J1', title: lang === 'bm' ? 'Nilaikan halaju maksimum v_max' : 'Evaluate maximum velocity v_max', tex: `v_{\\max} = ${c}(${halfC}) - (${halfC})^2 = ${prodC} - ${sqHalf} = ${vMax}\\text{ m s}^{-1}`, why: lang === 'bm' ? 'Gantikan t ke dalam persamaan v(t) untuk nilai halaju maksimum.' : 'Substitute t back into v(t) for the maximum velocity.' }
            ]
          };
        }
        const k = U.pick([2, 3, 4]);
        const T = k + 2;
        const sTurn = -k * k;
        const sFinal = T * T - 2 * k * T;
        const leg1 = Math.abs(sTurn);
        const leg2 = Math.abs(sFinal - sTurn);
        const totalDist = leg1 + leg2;
        return {
          tier: 3, tpLabel: 'TP5–TP6 (KBAT)', subtopic: { bm: '8.4 Jumlah Jarak dengan Pusingan Arah (v = 0)', en: '8.4 Total Distance with Turnaround (v = 0)' }, marks: 5,
          prompt: lang === 'bm'
            ? `Suatu zarah bermula dari titik tetap $O$ ($s = 0$ apabila $t = 0$) dan bergerak dengan halaju $v = 2t - ${2 * k}\\;\\text{m s}^{-1}$. Cari **jumlah jarak** (dalam $\\text{m}$) yang dilalui oleh zarah itu dalam **$${T}$ saat pertama**.`
            : `A particle starts from fixed point $O$ ($s = 0$ at $t = 0$) and moves with velocity $v = 2t - ${2 * k}\\;\\text{m s}^{-1}$. Find the **total distance** (in $\\text{m}$) travelled by the particle in the **first $${T}$ seconds**.`,
          answerType: 'number', correctValue: totalDist, displayAnswerTex: `|${sTurn}| + |${sFinal} - (${sTurn})| = ${totalDist}\\text{ m}`,
          intentMeta: {
            given: { bm: `Halaju $v = 2t - ${2 * k}$, $s(0) = 0$, dan selang $[0, ${T}]$`, en: `Velocity $v = 2t - ${2 * k}$, $s(0) = 0$, and interval $[0, ${T}]$` },
            goal: { bm: 'Kamirkan $s(t)$, cari pusingan arah $v = 0$, dan jumlahkan jarak pergi & patah balik', en: 'Integrate for $s(t)$, find U-turn $v = 0$, and sum forward & return leg distances' },
            conceptRule: { bm: 'Jumlah Jarak $= |s(t_p) - s(0)| + |s(T) - s(t_p)|$', en: 'Total Distance $= |s(t_p) - s(0)| + |s(T) - s(t_p)|$' }
          },
          guidedSteps: [
            { prompt: { bm: `Kamirkan untuk dapat $s(t) = t^2 - ${2 * k}t$. Zarah berpusing arah apabila $v = 0 \\implies t = ${k}$. Berapakah jarak bahagian pertama $|s(${k}) - s(0)|$?`, en: `Integrate to get $s(t) = t^2 - ${2 * k}t$. Turnaround occurs at $v = 0 \\implies t = ${k}$. What is the first-leg distance $|s(${k}) - s(0)|$?` }, expected: leg1, hint: { bm: `s(${k}) = (${k})² − ${2 * k}(${k}) = ${sTurn}; ambil nilai mutlaknya.`, en: `s(${k}) = (${k})² − ${2 * k}(${k}) = ${sTurn}; take its absolute value.` } },
            { prompt: { bm: `Pada $t = ${T}$, sesaran ialah $s(${T}) = ${sFinal}$. Tambahkan jarak patah balik $|${sFinal} - (${sTurn})|$ kepada jarak pertama tadi:`, en: `At $t = ${T}$, $s(${T}) = ${sFinal}$. Add the return-leg distance $|${sFinal} - (${sTurn})|$ to the first leg:` }, expected: totalDist, hint: { bm: `Kira ${leg1} + ${leg2}.`, en: `Compute ${leg1} + ${leg2}.` } }
          ],
          traps: [
            { value: Math.abs(sFinal), message: { bm: `Perangkap Klasik SPM [P]: |s(${T})| = ${Math.abs(sFinal)} m hanyalah sesaran bersih! Zarah telah berpusing arah pada t = ${k} s (di s = ${sTurn} m), jadi wajib jumlahkan jarak pergi dan patah balik!`, en: `Classic SPM Trap [P]: |s(${T})| = ${Math.abs(sFinal)} m is only net displacement! Split at turnaround t = ${k} s.` } }
          ],
          hints: [
            lang === 'bm' ? `Kamirkan $s(t) = \\int (2t - ${2 * k})\\,dt$ dengan $s(0)=0$ ($c=0$), dan selesaikan $v = 0$ untuk masa pusingan U.` : `Integrate $s(t) = \\int (2t - ${2 * k})\\,dt$ with $s(0)=0$ ($c=0$), and solve $v = 0$ for the U-turn time.`,
            lang === 'bm' ? `Hitung $s(0), s(${k}), s(${T})$ dan jumlahkan $|s(${k}) - s(0)| + |s(${T}) - s(${k})|$.` : `Compute $s(0), s(${k}), s(${T})$ and sum $|s(${k}) - s(0)| + |s(${T}) - s(${k})|$.`
          ],
          steps: [
            { badge: 'P1', title: lang === 'bm' ? 'Kamirkan v(t) & cari masa pusingan arah v = 0' : 'Integrate v(t) & find turnaround time v = 0', tex: `s(t) = \\frac{2t^2}{2} - ${2 * k}t + c = t^2 - ${2 * k}t \\;(c=0); \\quad 2t = ${2 * k} \\implies t = ${k}\\text{ s}`, why: lang === 'bm' ? 's(0) = 0 memberi c = 0, dan v = 0 memberi masa pusingan U di dalam (0, ' + T + ').' : 's(0) = 0 gives c = 0, and v = 0 gives the U-turn time inside (0, ' + T + ').' },
            { badge: 'K1', title: lang === 'bm' ? `Kira kedudukan pada t = 0, ${k}, dan ${T}` : `Evaluate positions at t = 0, ${k}, and ${T}`, tex: `s(0) = 0, \\quad s(${k}) = (${k})^2 - ${2 * k}(${k}) = ${sTurn}\\text{ m}, \\quad s(${T}) = (${T})^2 - ${2 * k}(${T}) = ${sFinal}\\text{ m}`, why: lang === 'bm' ? 'Jejak kedudukan zarah sebelum dan selepas berpatah balik.' : 'Track particle positions at start, U-turn, and end.' },
            { badge: 'J1', title: lang === 'bm' ? 'Jumlah jarak dilalui' : 'Total distance travelled', tex: `|${sTurn} - 0| + |${sFinal} - (${sTurn})| = ${leg1} + ${leg2} = ${totalDist}\\text{ m}`, why: lang === 'bm' ? 'Jumlahkan panjang mutlak setiap segmen perjalanan.' : 'Sum the absolute length of every travel segment.' }
          ]
        };
      }
    }
  ];

  App.chapters.push(...f5Stage4);
})(window.AddMathApp);
