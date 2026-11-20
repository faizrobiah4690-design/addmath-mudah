/**
 * AddMath Mudah — Klinik Cikgu Pakar & Poster Infografik Visual (Tingkatan 5: Bab 5–8)
 * Dirangka khas dari perspektif Guru Cemerlang Matematik Tambahan KSSM untuk merawat
 * "sakit kepala" sebenar pelajar Tingkatan 5: kejutan Kalkulus, keliru Pilih Atur vs Gabungan,
 * perangkap sisihan piawai Normal, tanda sukuan Trigonometri, Pengaturcaraan Linear & Kinematik.
 *
 * Struktur modular: menyambung terus pendaftaran App.teacherClinic['f5-c5' .. 'f5-c8'].
 */
window.AddMathApp = window.AddMathApp || {};
window.AddMathApp.teacherClinic = window.AddMathApp.teacherClinic || {};

(function (App) {
  'use strict';

  const F5B_CLINIC = {
    'f5-c5': {
      poster: 'assets/posters/f5-c5.jpg',
      posterTitle: {
        bm: 'Poster Visual Bab 5: Taburan Kebarangkalian (Taburan Binomial & Taburan Normal)',
        en: 'Chapter 5 Visual Poster: Probability Distributions (Discrete Binomial & Continuous Standard Normal)'
      },
      vocabBridge: {
        bm: 'Kamus Istilah KSSM ↔ DLP: **Pemboleh Ubah Rawak Diskret / Selanjar** ↔ *Discrete / Continuous Random Variable* • **Taburan Binomial** $B(n, p)$ ↔ *Binomial Distribution* $B(n, p)$ • **Taburan Normal Piawai** $Z \\sim N(0, 1)$ ↔ *Standard Normal Distribution* $Z \\sim N(0, 1)$ • **Varians** ($\\sigma^2$) & **Sisihan Piawai** ($\\sigma$) ↔ *Variance* ($\\sigma^2$) & *Standard Deviation* ($\\sigma$) • **Skor-$Z$** & **Jadual Kawasan Hujung Kanan** $P(Z > z)$ ↔ *$Z$-Score* & *Upper-Tail Table* $P(Z > z)$',
        en: 'KSSM ↔ DLP Terminology: **Discrete / Continuous Random Variable** ↔ *Pemboleh Ubah Rawak Diskret / Selanjar* • **Binomial Distribution** $B(n, p)$ ↔ *Taburan Binomial* $B(n, p)$ • **Standard Normal Distribution** $Z \\sim N(0, 1)$ ↔ *Taburan Normal Piawai* $Z \\sim N(0, 1)$ • **Variance** ($\\sigma^2$) & **Standard Deviation** ($\\sigma$) ↔ *Varians* ($\\sigma^2$) & *Sisihan Piawai* ($\\sigma$) • **$Z$-Score** & **Upper-Tail Table** $P(Z > z)$ ↔ *Skor-$Z$* & *Jadual Kawasan Hujung Kanan* $P(Z > z)$'
      },
      painSummary: {
        bm: 'Dua kesilapan paling mahal: membahagi dengan varians $\\sigma^2$ (bukannya sisihan piawai $\\sigma$!) semasa menukar $Z = \\frac{X - \\mu}{\\sigma}$ daripada tatatanda $X \\sim N(\\mu, \\sigma^2)$, serta salah tanda positif/negatif $z$ semasa baca songsang jadual Normal apabila $P(X > k) > 0.5$ atau $P(X < k) < 0.5$!',
        en: 'Two costly mistakes: dividing by variance $\\sigma^2$ instead of standard deviation $\\sigma$ when given $X \\sim N(\\mu, \\sigma^2)$ in $Z = \\frac{X - \\mu}{\\sigma}$, and forgetting a negative sign on $z$ during inverse lookup when $P(X > k) > 0.5$ or $P(X < k) < 0.5$!'
      },
      mentalModels: [
        {
          icon: '🎯',
          tag: { bm: 'Kompas Binomial vs Normal', en: 'Binomial vs Normal Compass' },
          title: { bm: 'Boleh Bilang Jari ($0, 1, 2\\dots$) = Binomial; Boleh Ukur Perpuluhan = Normal!', en: 'Countable Whole Trials ($0, 1, 2\\dots$) = Binomial; Measurable Scale = Normal!' },
          desc: {
            bm: '**Binomial $X \\sim B(n, p)$** (macam lambung duit syiling / sepakan penalti): bilangan percubaan tetap $n$, hanya 2 kesudahan (**Berjaya $p$** atau **Gagal $q = 1 - p$**): $$P(X = r) = {}^nC_r\\,p^r q^{n-r}, \\quad \\mu = np, \\quad \\sigma = \\sqrt{npq}$$ **Normal $X \\sim N(\\mu, \\sigma^2)$** (macam tinggi pelajar / jisim durian): ukuran selanjar berbentuk loceng simetri dengan jumlah luas $= 1$.',
            en: '**Binomial $X \\sim B(n, p)$** (like coin flips / penalty kicks): fixed trials $n$ with two outcomes (**Success $p$** or **Failure $q = 1 - p$**): $$P(X = r) = {}^nC_r\\,p^r q^{n-r}, \\quad \\mu = np, \\quad \\sigma = \\sqrt{npq}$$ **Normal $X \\sim N(\\mu, \\sigma^2)$** (like student height / durian mass): continuous measurements under a symmetric bell curve with total area $= 1$.'
          }
        },
        {
          icon: '🚨',
          tag: { bm: 'Perangkap #1 SPM: Tatatanda Varians!', en: 'SPM Trap #1: Variance Notation!' },
          title: { bm: 'Dalam $X \\sim N(50, 16)$, Nombor Kedua Itu $\\sigma^2 = 16$, Jadi $\\sigma = 4$!', en: 'In $X \\sim N(50, 16)$, the Second Number Is $\\sigma^2 = 16$, So $\\sigma = 4$!' },
          desc: {
            bm: 'Ini perangkap kegemaran penggubal soalan! Tatatanda rasmi $N(\\mu, \\sigma^2)$ meletakkan **varians** di belakang. Sebelum guna $Z = \\frac{X - \\mu}{\\sigma}$, puncakuasakan dahulu $\\sigma = \\sqrt{16} = 4$! Jika ditulis $N(50, 4^2)$, barulah $\\sigma = 4$ sedia diguna.',
            en: 'A classic exam-writer trap! Official notation $N(\\mu, \\sigma^2)$ puts **variance** in the second slot. Before computing $Z = \\frac{X - \\mu}{\\sigma}$, ALWAYS take the square root $\\sigma = \\sqrt{16} = 4$! Only when written as $N(50, 4^2)$ is $\\sigma = 4$ already ready.'
          }
        },
        {
          icon: '🔔',
          tag: { bm: 'Wajib Lakar Loceng Kecil 3-Saat!', en: '3-Second Mini Bell Sketch!' },
          title: { bm: 'Lorekkan Ekor Loceng Sebelum Baca Jadual $P(Z > z)$!', en: 'Shade the Bell Curve Tail Before Touching the $Z$-Table!' },
          desc: {
            bm: 'Separuh kiri $= 0.5$ dan separuh kanan $= 0.5$! Jadual SPM memberi **luas ekor kecil di hujung kanan** $P(Z > z)$. Jika lorekan anda **melebihi separuh loceng ($> 0.5$)**, tolak daripada $1$ untuk cari ekor kecil! Dan semasa cari nilai $k$: jika garis $k$ berada di **sebelah kiri min $0$**, nilai skor-$z$ anda **WAJIB bertanda negatif ($-z$)**!',
            en: 'Each half of the bell has area $0.5$! The SPM table directly gives the **upper-right tail area** $P(Z > z)$. If your shaded region is **more than half the bell ($> 0.5$)**, subtract from $1$ to get the small tail! When finding $k$: if $k$ sits to the **left of mean $0$**, your $z$-score **MUST carry a negative sign ($-z$)**!'
          }
        },
        {
          icon: '⚡',
          tag: { bm: 'Jalan Pintas Pelengkap Binomial', en: 'Binomial Complement Shortcut' },
          title: { bm: '"Sekurang-kurangnya $1$" = $1 - P(X = 0)$!', en: '"At Least $1$" = $1 - P(X = 0)$!' },
          desc: {
            bm: 'Jika $n = 10$ dan diminta $P(X \\ge 1)$, jangan kira $P(1) + P(2) + \\dots + P(10)$ sampai habis masa! Gunakan pelengkap: **tiada langsung berjaya** ialah $P(X = 0) = q^n$, jadi $P(X \\ge 1) = 1 - P(X = 0)$ dalam satu baris sahaja!',
            en: 'For $n = 10$ and $P(X \\ge 1)$, never add $P(1) + P(2) + \\dots + P(10)$! Use the complement: **zero successes at all** is $P(X = 0) = q^n$, so $P(X \\ge 1) = 1 - P(X = 0) = 1 - q^n$ in a single line!'
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
          action: { bm: 'Kerana kawasan kanan $> 0.5$, garis $k$ mesti di **sebelah kiri min** ($z$ negatif)! Cari ekor kecil $1 - 0.7881 = 0.2119$ dalam jadual ($0.80$), letak tanda negatif **$z = -0.80$**, kemudian selesaikan $\\frac{k - \\mu}{\\sigma} = -0.80$.', en: 'Since right-tail area $> 0.5$, $k$ lies **left of the mean**! Look up small tail $1 - 0.7881 = 0.2119 \\implies 0.80$, attach the minus sign **$z = -0.80$**, then solve $\\frac{k - \\mu}{\\sigma} = -0.80$.' }
        },
        {
          cue: { bm: 'Gabungan Normal $\\rightarrow$ Binomial di hujung Kertas 2: selepas dapat kebarangkalian satu buah oren gred A ialah $0.25$, "8 biji dipilih secara rawak..."', en: 'Paper 2 Normal-to-Binomial switch: after finding 1 fruit has probability $0.25$, "8 fruits are chosen at random..."' },
          action: { bm: 'Tukar gear terus daripada Normal kepada **Binomial**! Jadikan kebarangkalian Normal tadi sebagai $p = 0.25$ dan saiz sampel baharu sebagai $n = 8$ dalam $Y \\sim B(8, 0.25)$!', en: 'Switch gears immediately from Normal to **Binomial**! Use the Normal probability just found as $p = 0.25$ with $n = 8$ in $Y \\sim B(8, 0.25)$!' }
        },
        {
          cue: { bm: 'Soalan selang simetri / dua ekor: "Cari $P(47 < X < 63)$" atau "antara $a$ dan $b$"', en: 'Interval / two-tailed Normal question: "Find $P(47 < X < 63)$" or "between $a$ and $b$"' },
          action: { bm: 'Tukar **kedua-dua had** kepada $z_1$ dan $z_2$, lakar loceng, dan tolak kedua-dua ekor luar daripada $1$: $1 - P(Z < z_1) - P(Z > z_2)$ (atau $1 - 2P(Z > a)$ jika simetri)!', en: 'Standardize **both bounds** to $z_1$ and $z_2$, sketch the bell curve, and subtract both outer tails from $1$: $1 - P(Z < z_1) - P(Z > z_2)$ (or $1 - 2P(Z > a)$ when symmetric)!' }
        }
      ],
      rxFix: {
        wrong: { bm: 'Bagi $X \\sim N(120, 25)$, menulis $Z = \\frac{130 - 120}{25} = 0.4$ (membahagi dengan varians $25$).', en: 'For $X \\sim N(120, 25)$, writing $Z = \\frac{130 - 120}{25} = 0.4$ (dividing by variance $25$).' },
        right: { bm: 'Kenal pasti $\\sigma^2 = 25 \\implies \\sigma = 5$ dahulu, maka $Z = \\frac{130 - 120}{5} = 2.0$.', en: 'Extract $\\sigma = \\sqrt{25} = 5$ first, giving $Z = \\frac{130 - 120}{5} = 2.0$.' }
      }
    },

    'f5-c6': {
      poster: 'assets/posters/f5-c6.jpg',
      posterTitle: {
        bm: 'Poster Visual Bab 6: Fungsi Trigonometri (Sukuan ASTC, Graf, Identiti & Persamaan)',
        en: 'Chapter 6 Visual Poster: Trigonometric Functions (ASTC Quadrants, Graphs, Identities & Equations)'
      },
      vocabBridge: {
        bm: 'Kamus Istilah KSSM ↔ DLP: **Sudut Rujukan Sepadan** ($\\alpha$) ↔ *Corresponding Reference Angle* ($\\alpha$) • **Nisbah Salingan** ($\\csc, \\sec, \\cot$) ↔ *Reciprocal Ratios* ($\\csc, \\sec, \\cot$) • **Sudut Majmuk** $(A \\pm B)$ & **Sudut Berganda** ($2A$) ↔ *Compound Angles* $(A \\pm B)$ & *Double Angles* ($2A$) • **Amplitud** ($|a|$) & **Bilangan Kitaran / Kala** ($b$) ↔ *Amplitude* ($|a|$) & *Cycles / Period* ($b$) • **Buktikan Identiti** ($\\text{LHS} = \\text{RHS}$) ↔ *Prove the Identity* ($\\text{LHS} = \\text{RHS}$)',
        en: 'KSSM ↔ DLP Terminology: **Corresponding Reference Angle** ($\\alpha$) ↔ *Sudut Rujukan Sepadan* ($\\alpha$) • **Reciprocal Ratios** ($\\csc, \\sec, \\cot$) ↔ *Nisbah Salingan* ($\\csc, \\sec, \\cot$) • **Compound Angles** $(A \\pm B)$ & **Double Angles** ($2A$) ↔ *Sudut Majmuk* $(A \\pm B)$ & *Sudut Berganda* ($2A$) • **Amplitude** ($|a|$) & **Cycles / Period** ($b$) ↔ *Amplitud* ($|a|$) & *Bilangan Kitaran / Kala* ($b$) • **Prove the Identity** ($\\text{LHS} = \\text{RHS}$) ↔ *Buktikan Identiti* ($\\text{LHS} = \\text{RHS}$)'
      },
      painSummary: {
        bm: 'Pelajar sering tertukar pasangan $\\sec$ dan $\\csc$, tertinggal separuh jawapan kerana tidak menggandakan julat domain bagi $\\sin 2x$, dan memotong $\\sin x$ pada kedua-dua belah persamaan sehingga punca $\\sin x = 0$ hilang!',
        en: 'Students confuse $\\sec$ with $\\csc$, lose half the roots of $\\sin 2x = k$ by forgetting to expand the domain to $720^\\circ$ first, and cancel $\\sin x$ across an equation instead of factoring!'
      },
      mentalModels: [
        {
          icon: '🧭',
          tag: { bm: 'Mnemonik: Semua Suka Teh Kosong (S-S-T-K) + Huruf Ke-3!', en: 'Hook: Add Sugar To Coffee (A-S-T-C) + 3rd Letter Rule!' },
          title: { bm: 'Kompas Sukuan & Rahsia Huruf Ketiga Fungsi Salingan', en: 'Quadrant Compass & 3rd-Letter Reciprocal Secret' },
          desc: {
            bm: 'Sukuan I–IV (**S-S-T-K**: **S**emua $+$ $\\to$ **S**in $\\to$ **T**an $\\to$ **K**os, *"Semua Suka Teh Kosong"*): Sukuan I Semua $+$, II **S**in $+$, III **T**an $+$, IV **K**os $+$! Untuk fungsi salingan, tengok **huruf ke-3**: `co`**s**`ec` $\\rightarrow \\frac{1}{\\sin}$, `se`**c** $\\rightarrow \\frac{1}{\\cos}$, `co`**t** $\\rightarrow \\frac{1}{\\tan}$! Sudut rujukan $\\alpha$ pula **sentiasa diukur daripada paksi-$x$ mendatar** ($180^\\circ - \\alpha$, $180^\\circ + \\alpha$, $360^\\circ - \\alpha$).',
            en: 'Quadrants I–IV (**A-S-T-C**: **A**dd **S**ugar **T**o **C**offee): Q1 All $+$, Q2 **S**in $+$, Q3 **T**an $+$, Q4 **C**os $+$! For reciprocals, check the **3rd letter**: `co`**s**`ec` $= \\frac{1}{\\sin}$, `se`**c** $= \\frac{1}{\\cos}$, `co`**t** $= \\frac{1}{\\tan}$! Reference angle $\\alpha$ is ALWAYS measured from the horizontal $x$-axis ($180^\\circ - \\alpha$, $180^\\circ + \\alpha$, $360^\\circ - \\alpha$).'
          }
        },
        {
          icon: '🌊',
          tag: { bm: 'Kod Graf: y = a sin(bx) + c', en: 'Graph Decoder: y = a sin(bx) + c' },
          title: { bm: '$a$ = Tinggi Ombak, $b$ = Bilangan Kitaran, $c$ = Lif Naik/Turun!', en: '$a$ = Wave Height, $b$ = Cycles, $c$ = Elevator Shift!' },
          desc: {
            bm: 'Bagi $y = a\\sin(bx) + c$ dalam julat $0 \\le x \\le 2\\pi$: **$|a|$** ialah amplitud dari garis tengah, **$b$** ialah bilangan ombak lengkap dalam $2\\pi$ (kala $= \\frac{2\\pi}{b}$), dan **$+c$** mengangkat seluruh paksi tengah ke $y = c$ (maksimum $= c + |a|$, minimum $= c - |a|$)! Jika ada modulus $|\\dots|$, pantulkan lembah negatif ke atas!',
            en: 'For $y = a\\sin(bx) + c$ on $[0, 2\\pi]$: **$|a|$** is amplitude from midline, **$b$** is the number of full cycles in $2\\pi$ (period $= \\frac{2\\pi}{b}$), and **$+c$** shifts the midline to $y = c$ (max $= c + |a|$, min $= c - |a|$)! With modulus $|\\dots|$, reflect negative troughs upward!'
          }
        },
        {
          icon: '🔓',
          tag: { bm: 'SOP 5 Langkah Persamaan Sudut Berganda', en: '5-Step Double-Angle Equation SOP' },
          title: { bm: 'Gandakan Julat Domain DAHULU Sebelum Bahagi $2$!', en: 'Expand the Domain Range BEFORE Dividing by $2$!' },
          desc: {
            bm: 'Jika $0^\\circ \\le x \\le 360^\\circ$ dan persamaan mempunyai **$2x$**, langkah pertama tulis **$0^\\circ \\le 2x \\le 720^\\circ$**! **(1)** Tentukan sukuan ikut tanda $+/-$. **(2)** Tekan $\\sin^{-1}|k|$ (**abaikan tanda negatif!**) untuk dapat sudut rujukan $\\alpha$. **(3)** Senaraikan sudut dalam pusingan 1 & pusingan 2 ($+360^\\circ$). **(4)** Akhir sekali baru bahagi semua dengan $2$!',
            en: 'When $0^\\circ \\le x \\le 360^\\circ$ and solving for **$2x$**, first expand to **$0^\\circ \\le 2x \\le 720^\\circ$**! **(1)** Pick quadrants from $+/-$ sign. **(2)** Press $\\sin^{-1}|k|$ (**ignore the minus sign!**) for acute reference $\\alpha$. **(3)** List angles in Cycle 1 & Cycle 2 ($+360^\\circ$, up to $720^\\circ$). **(4)** Divide every angle by $2$ ONLY on the very last line!'
          }
        },
        {
          icon: '🧩',
          tag: { bm: 'Strategi Bukti Identiti Tanpa Pening', en: 'Stress-Free Identity Proof Strategy' },
          title: { bm: 'Pilih Sebelah Paling Rumit & Tukar Semua Jadi $\\sin$ / $\\cos$!', en: 'Pick the Messier Side & Convert to $\\sin$ / $\\cos$!' },
          desc: {
            bm: 'Jangan pindah sebutan merentas tanda $=$ semasa membuktikan identiti! Mulakan daripada sebelah yang lebih kompleks (biasanya `LHS`), tukar $\\tan = \\frac{\\sin}{\\cos}$, samakan penyebut pecahan, dan gunakan tiga identiti induk: $\\sin^2 x + \\cos^2 x = 1$, $1 + \\tan^2 x = \\sec^2 x$, $1 + \\cot^2 x = \\csc^2 x$, serta $\\cos 2x$ (pilih $2\\cos^2 x - 1$ atau $1 - 2\\sin^2 x$ untuk membatalkan $1$)!',
            en: 'Never cross-multiply across $=$ when proving an identity! Start with the messier side (`LHS`), rewrite $\\tan = \\frac{\\sin}{\\cos}$, combine fractions, and apply the 3 core identities: $\\sin^2 x + \\cos^2 x = 1$, $1 + \\tan^2 x = \\sec^2 x$, $1 + \\cot^2 x = \\csc^2 x$, plus $\\cos 2x$ (pick $2\\cos^2 x - 1$ or $1 - 2\\sin^2 x$ to cancel the $1$ cleanly)!'
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
          action: { bm: '**DILARANG potong $\\sin x$!** Pindah ke kiri dan faktorkan: $\\sin x(2\\cos x - 1) = 0 \\implies \\sin x = 0$ ATAU $\\cos x = \\frac{1}{2}$ supaya punca $0^\\circ, 180^\\circ, 360^\\circ$ tidak tercicir!', en: '**NEVER divide out $\\sin x$!** Move to one side and factor: $\\sin x(2\\cos x - 1) = 0 \\implies \\sin x = 0$ OR $\\cos x = \\frac{1}{2}$ so you keep all boundary roots!' }
        },
        {
          cue: { bm: 'Persamaan kuadratik campur $\\cos^2 x$ dan $\\sin x$: "$2\\cos^2 x + 3\\sin x - 3 = 0$"', en: 'Quadratic trig equation mixing $\\cos^2 x$ and $\\sin x$: "$2\\cos^2 x + 3\\sin x - 3 = 0$"' },
          action: { bm: 'Tukar sebutan kuasa dua guna $\\cos^2 x = 1 - \\sin^2 x$ supaya **seluruh persamaan hanya ada satu fungsi** ($\\sin x$), faktorkan seperti kuadratik biasa, lalu semak sukuan ASTC!', en: 'Replace the squared term using $\\cos^2 x = 1 - \\sin^2 x$ so the whole equation uses **ONE trig ratio** ($\\sin x$), factorize as a quadratic, then apply ASTC!' }
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
        bm: 'Kamus Istilah KSSM ↔ DLP: **Kekangan** ↔ *Constraint* • **Rantau Tersaur / Berlorek ($R$)** ↔ *Feasible Region ($R$)* • **Fungsi Objektif ($k = ax + by$)** ↔ *Objective Function ($k = ax + by$)* • **Bucu Optimum** ↔ *Optimal Vertex* • **Garis Padu ($\\le, \\ge$) vs Garis Putus-putus ($<, >$)** ↔ *Solid ($\\le, \\ge$) vs Dashed Line ($<, >$)* • **Titik Integer $(x, y)$** ↔ *Integer Point $(x, y)$*',
        en: 'KSSM ↔ DLP Terminology: **Constraint** ↔ *Kekangan* • **Feasible Region ($R$)** ↔ *Rantau Tersaur / Berlorek ($R$)* • **Objective Function ($k = ax + by$)** ↔ *Fungsi Objektif ($k = ax + by$)* • **Optimal Vertex** ↔ *Bucu Optimum* • **Solid ($\\le, \\ge$) vs Dashed Line ($<, >$)** ↔ *Garis Padu ($\\le, \\ge$) vs Garis Putus-putus ($<, >$)* • **Integer Point $(x, y)$** ↔ *Titik Integer $(x, y)$*'
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
            bm: 'Hafal 5 pasangan ini: **(1)** *"tidak melebihi / selebih-lebihnya / maksimum"* $\\rightarrow \\le$. **(2)** *"sekurang-kurangnya / tidak kurang daripada / minimum"* $\\rightarrow \\ge$. **(3)** *"kurang daripada / lebih daripada"* $\\rightarrow <, >$ (**garis putus-putus!**). **(4)** *"$y$ melebihi $x$ sebanyak sekurang-kurangnya $k$"* $\\rightarrow y - x \\ge k$. **(5)** *"nisbah $y$ kepada $x$ selebih-lebihnya $3:2$"* $\\rightarrow \\frac{y}{x} \\le \\frac{3}{2} \\implies 2y \\le 3x$!',
            en: 'Master these 5 cues: **(1)** *"at most / does not exceed / maximum"* $\\rightarrow \\le$. **(2)** *"at least / minimum"* $\\rightarrow \\ge$. **(3)** *"less than / more than"* $\\rightarrow <, >$ (**dashed line!**). **(4)** *"$y$ exceeds $x$ by at least $k$"* $\\rightarrow y - x \\ge k$. **(5)** *"ratio of $y$ to $x$ is at most $3:2$"* $\\rightarrow \\frac{y}{x} \\le \\frac{3}{2} \\implies 2y \\le 3x$!'
          }
        },
        {
          icon: '🧭',
          tag: { bm: 'Kompas Lorekan Rantau R (Ujian Titik 0,0)', en: 'Shading Compass & (0, 0) Test Point' },
          title: { bm: 'Pastikan $+y$ Positif & Sahkan Dengan Titik Ujian $(0, 0)$!', en: 'Make $+y$ Positive & Verify With Test Point $(0, 0)$!' },
          desc: {
            bm: 'Selagi pekali $y$ di sebelah kiri **positif** (contoh $+2y \\ge \\dots$): **$> / \\ge$ lorek ATAS**, manakala **$< / \\le$ lorek BAWAH**; bagi garis tegak $x \\ge a$, lorek kanan. **Sahkan dengan uji $(0, 0)$**: gantikan $(0, 0)$ ke dalam ketaksamaan — jika **BENAR**, lorek sebelah yang mengandungi $(0, 0)$ (jika garis melalui asalan, uji $(0, 2)$)! Guna **garis padu ($\\le, \\ge$)** lawan **putus-putus ($<, >$)** dan label **$R$**!',
            en: 'Once the $y$-term on LHS is **positive** (e.g. $+2y \\ge \\dots$): **$> / \\ge$ shades ABOVE**, **$< / \\le$ shades BELOW**; vertical lines $x \\ge a$ shade right. **Verify with $(0, 0)$**: plug $(0, 0)$ in — if **TRUE**, shade the side containing $(0, 0)$ (if the line passes through origin, test $(0, 2)$)! Use **solid lines ($\\le, \\ge$)** vs **dashed ($<, >$)** and label **$R$**!'
          }
        },
        {
          icon: '📏',
          tag: { bm: 'Taktik Pembaris Gelongsor GSTK (LCM)', en: 'LCM Sliding Ruler Technique' },
          title: { bm: 'Lukis Garis Pencari $ax + by = \\text{GSTK}(a, b)$ & Tolak Pembaris!', en: 'Plot Search Line $ax + by = \\text{LCM}(a, b)$ & Slide Parallel!' },
          desc: {
            bm: 'Untuk optimumkan $k = 3x + 5y$: pilih nilai cubaan cantik menggunakan **GSTK** bagi $3$ dan $5$ iaitu $15$ ($3x + 5y = 15$ memotong $(5, 0)$ dan $(0, 3)$ dengan tepat!). Letakkan pembaris selari dengan garis putus-putus itu dan gelongsorkan merentas rantau $R$: **titik terakhir disentuh ke atas = Maksimum**, **titik paling bawah = Minimum**!',
            en: 'To optimize $k = 3x + 5y$: pick $k = \\text{LCM}(3, 5) = 15$ so $3x + 5y = 15$ hits clean intercepts $(5, 0)$ and $(0, 3)$! Place your ruler on that dashed search line and slide it parallel across $R$ to spot the last vertex touched outward (Max) or lowest vertex (Min)!'
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
          action: { bm: 'Kenal pasti kesemua bucu integer yang sah dalam rantau $R$, masukkan setiap $(x, y)$ ke dalam fungsi objektif $k = ax + by$, dan nyatakan kedua-dua **titik optimum $(x, y)$** serta **nilai maksimum $k$**!', en: 'Test all valid integer vertices around the optimal corner of $R$ in $k = ax + by$ to confirm the true winner, and clearly state both the optimal $(x, y)$ and maximum/minimum value $k$!' }
        },
        {
          cue: { bm: 'Kekangan peratusan atau nisbah: "$x$ sekurang-kurangnya $20\\%$ daripada jumlah" atau "nisbah $y:x$ selebih-lebihnya $3:2$"', en: 'Percentage-of-total or ratio constraint: "$x$ is at least $20\\%$ of total" or "ratio $y:x$ is at most $3:2$"' },
          action: { bm: 'Jangan lupa **jumlah ialah $(x + y)$** dalam peratusan ($x \\ge 0.20(x + y) \\implies 4x \\ge y$), dan tulis nisbah sebagai pecahan $\\frac{y}{x} \\le \\frac{3}{2} \\implies 2y \\le 3x$!', en: 'Never forget **total is $(x + y)$** in percentages ($x \\ge 0.20(x + y) \\implies 4x \\ge y$), and convert ratios into fractions $\\frac{y}{x} \\le \\frac{3}{2} \\implies 2y \\le 3x$!' }
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
        bm: 'Kamus Istilah KSSM ↔ DLP: **Sesaran ($s$)** ↔ *Displacement ($s$)* • **Halaju ($v$)** ↔ *Velocity ($v$)* • **Pecutan ($a$) & Nyahpecutan ($a < 0$)** ↔ *Acceleration ($a$) & Deceleration ($a < 0$)* • **Berhenti Seketika / Berpatah Balik ($v = 0$)** ↔ *Instantaneous Rest / Reverses Direction ($v = 0$)* • **Titik Tetap $O$ ($s = 0$) & Pada Mulanya ($t = 0$)** ↔ *Fixed Point $O$ ($s = 0$) & Initially ($t = 0$)*',
        en: 'KSSM ↔ DLP Terminology: **Displacement ($s$)** ↔ *Sesaran ($s$)* • **Velocity ($v$)** ↔ *Halaju ($v$)* • **Acceleration ($a$) & Deceleration ($a < 0$)** ↔ *Pecutan ($a$) & Nyahpecutan ($a < 0$)* • **Instantaneous Rest / Reverses Direction ($v = 0$)** ↔ *Berhenti Seketika / Berpatah Balik ($v = 0$)* • **Fixed Point $O$ ($s = 0$) & Initially ($t = 0$)** ↔ *Titik Tetap $O$ ($s = 0$) & Pada Mulanya ($t = 0$)*'
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
            bm: 'Hafal susunan **S – V – A**: $$s \\to v \\to a \\;(\\text{bezakan } d/dt) \\qquad \\text{dan} \\qquad a \\to v \\to s \\;(\\text{kamirkan } \\int dt)$$ **AMARAN**: Setiap kali naik tangga guna $\\int dt$, **WAJIB letak $+ c$** dan guna maklumat masa mula $t = 0$ (contoh *"melalui $O$ pada mulanya"* $\\implies t = 0, s = 0$) untuk cari nilai $c$ dahulu!',
            en: 'Memorize **S – V – A**: $$s \\to v \\to a \\;(\\text{differentiate } d/dt) \\qquad \\text{and} \\qquad a \\to v \\to s \\;(\\text{integrate } \\int dt)$$ **WARNING**: Every integration step going up **MUST include $+ c$**, solved immediately using initial conditions at $t = 0$ (e.g. *"passes through $O$ initially"* $\\implies t = 0, s = 0$)!'
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
            bm: 'Pada graf halaju-masa ($v$ lawan $t$): titik memotong paksi-$t$ ialah masa **pusingan U ($v = 0$)**; puncak/lembah melengkung ialah masa **halaju maksimum / minimum ($a = 0$)**; kawasan di **atas paksi-$t$** ialah gerakan ke kanan, manakala kawasan di **bawah paksi-$t$** ialah gerakan patah balik ke kiri (jumlahkan $|\\text{kedua-dua luas}|$ untuk jumlah jarak!).',
            en: 'On a velocity-time ($v$ vs $t$) graph: points crossing the $t$-axis mark **U-turn times ($v = 0$)**; peaks/troughs mark **maximum / minimum velocity ($a = 0$)**; the area **above the $t$-axis** is forward motion to the right, while the area **below the $t$-axis** is backward return motion to the left (sum $|\\text{both areas}|$ for total distance!).'
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
        },
        {
          cue: { bm: 'Soalan sebut: "Cari jumlah jarak yang dilalui oleh zarah dalam $4$ saat pertama"', en: 'Exam says: "Find the total distance travelled by the particle in the first $4$ seconds"' },
          action: { bm: 'Selesaikan **$v = 0$** dahulu! Mana-mana masa $t_p$ di dalam $(0, 4)$ ialah **pusingan U** — pecahkan $[0, 4]$ pada $t_p$ dan jumlahkan $|s(t_p) - s(0)| + |s(4) - s(t_p)|$!', en: 'Solve **$v = 0$** first! Any $t_p$ inside $(0, 4)$ is a **U-turn** — split $[0, 4]$ at $t_p$ and sum $|s(t_p) - s(0)| + |s(4) - s(t_p)|$!' }
        }
      ],
      rxFix: {
        wrong: { bm: 'Bagi $s = t^2 - 4t$, menjawab jumlah jarak dalam $5$ saat pertama ialah $s(5) = 5^2 - 4(5) = 5\\text{ m}$.', en: 'For $s = t^2 - 4t$, claiming total distance in the first $5$ seconds is $s(5) = 25 - 20 = 5\\text{ m}$.' },
        right: { bm: 'Semak $v = 2t - 4 = 0 \\implies t = 2\\text{ s}$ (pusing U!). Kira $s(0) = 0$, $s(2) = -4$, $s(5) = 5$. Jumlah jarak $= |-4 - 0| + |5 - (-4)| = 4 + 9 = 13\\text{ m}$!', en: 'Solve $v = 2t - 4 = 0 \\implies t = 2\\text{ s}$ (U-turn!). Evaluate $s(0) = 0$, $s(2) = -4$, $s(5) = 5$. Total distance $= |-4 - 0| + |5 - (-4)| = 4 + 9 = 13\\text{ m}$!' }
      }
    }
  };

  Object.keys(F5B_CLINIC).forEach(function (k) {
    App.teacherClinic[k] = F5B_CLINIC[k];
  });
})(window.AddMathApp);
