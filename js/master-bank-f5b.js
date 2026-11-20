/**
 * AddMath Mudah — Bank Soalan Master SPM (Fasa 4: Tingkatan 5 Bab 5–8 • 40 Soalan Penuh)
 * Setiap soalan lengkap dengan: Pernyataan Format SPM, Kesilapan Lazim Murid & Skim Pemarkahan (K1 / N1) dalam BM & EN.
 */
window.AddMathApp = window.AddMathApp || {};
window.AddMathApp.masterBank = window.AddMathApp.masterBank || {};

(function (App) {
  'use strict';

  Object.assign(App.masterBank, {
    // =========================================================================
    // TINGKATAN 5 BAB 5: TABURAN KEBARANGKALIAN (10 SOALAN)
    // =========================================================================
    'f5-c5': [
      {
        code: '5.1', marks: 3,
        topic: { bm: 'Rumus Taburan Binomial $P(X = r)$', en: 'Binomial Probability Formula $P(X = r)$' },
        q: {
          bm: 'Kebarangkalian seorang pemanah mengenai sasaran dalam satu cubaan ialah $0.7$. Jika beliau melepaskan $5$ anak panah secara bebas, cari kebarangkalian tepat $4$ mengenai sasaran. [3m]',
          en: 'The probability an archer hits a target on one shot is $0.7$. In $5$ independent shots, find the probability of hitting the target exactly $4$ times. [3m]'
        },
        mistakes: {
          bm: [
            'Mendarab $(0.7)^4(0.3)^1$ sahaja tanpa pekali gabungan $\\,^5C_4 = 5$.',
            'Menukar nilai $p$ dan $q$ atau kuasanya ($(0.7)^1(0.3)^4$ atau lupa mengira $q = 1 - 0.7 = 0.3$).'
          ],
          en: [
            'Computing $(0.7)^4(0.3)^1$ while omitting the combination factor $\\,^5C_4 = 5$.',
            'Swapping $p$ and $q$ or their exponents ($(0.7)^1(0.3)^4$ or forgetting $q = 1 - 0.7 = 0.3$).'
          ]
        },
        scheme: [
          {
            badge: 'K1',
            bm: 'Kenal pasti $X \\sim B(5, 0.7)$: $n = 5$, $p = 0.7$, $q = 1 - 0.7 = 0.3$, dan $r = 4$.',
            en: 'Identify $X \\sim B(5, 0.7)$: $n = 5$, $p = 0.7$, $q = 1 - 0.7 = 0.3$, and $r = 4$.',
            why: { bm: 'Taburan Binomial memerlukan $4$ parameter; kebarangkalian gagal ialah $q = 1 - p$.', en: 'Binomial requires $4$ parameters; failure probability is $q = 1 - p$.' }
          },
          {
            badge: 'K1',
            bm: 'Gantikan ke dalam $P(X = r) = \\,^nC_r p^r q^{n-r}$: $P(X = 4) = \\,^5C_4 (0.7)^4 (0.3)^{5-4}$.',
            en: 'Substitute into $P(X = r) = \\,^nC_r p^r q^{n-r}$: $P(X = 4) = \\,^5C_4 (0.7)^4 (0.3)^{5-4}$.',
            why: { bm: '$\\,^5C_4$ mengira $5$ susunan berbeza untuk memilih $4$ daripada $5$ panahan yang mengena.', en: '$\\,^5C_4$ counts the $5$ ways to choose which $4$ of the $5$ shots hit.' }
          },
          {
            badge: 'K1',
            bm: 'Nilaikan setiap faktor: $5 \\times 0.2401 \\times 0.3 = 0.36015$.',
            en: 'Evaluate each factor: $5 \\times 0.2401 \\times 0.3 = 0.36015$.',
            why: { bm: 'Kira $\\,^5C_4 = 5$ dan $(0.7)^4 = 0.2401$ dahulu sebelum mendarab semuanya.', en: 'Compute $\\,^5C_4 = 5$ and $(0.7)^4 = 0.2401$ before multiplying.' }
          },
          {
            badge: 'N1',
            bm: '$0.3602$ (4 t.p., atau nilai tepat $0.36015$).',
            en: '$0.3602$ (4 d.p., or exact $0.36015$).',
            why: { bm: 'Jawapan kebarangkalian SPM lazimnya dibundarkan kepada $4$ tempat perpuluhan.', en: 'SPM probability answers are standardly given to $4$ decimal places.' }
          }
        ]
      },
      {
        code: '5.2', marks: 3,
        topic: { bm: 'Min dan Varians Taburan Binomial ($\\mu = np,\\; \\sigma^2 = npq$)', en: 'Mean & Variance of Binomial Distribution' },
        q: {
          bm: 'Suatu pemboleh ubah rawak $X \\sim B(n, p)$ mempunyai min $\\mu = 24$ dan varians $\\sigma^2 = 6$. Cari nilai $p$ dan $n$. [3m]',
          en: 'A random variable $X \\sim B(n, p)$ has mean $\\mu = 24$ and variance $\\sigma^2 = 6$. Find $p$ and $n$. [3m]'
        },
        mistakes: {
          bm: [
            'Menganggap $6$ sebagai sisihan piawai $\\sigma$ lalu mengkuasaduakannya menjadi $36$, sedangkan soalan sudah memberi **varians** $\\sigma^2 = 6$.',
            'Membahagi songsang $24 \\div 6 = 4$ atau keliru antara $\\sigma^2 = npq$ dengan $\\sigma = \\sqrt{npq}$.'
          ],
          en: [
            'Squaring $6$ into $36$ as if given $\\sigma$, when $6$ is already the variance $\\sigma^2 = npq$.',
            'Dividing the wrong way around ($24 \\div 6 = 4$) or confusing $\\sigma^2 = npq$ with $\\sigma = \\sqrt{npq}$.'
          ]
        },
        scheme: [
          {
            badge: 'K1',
            bm: 'Tulis dua persamaan: min $\\mu = np = 24$ dan varians $\\sigma^2 = npq = 6$.',
            en: 'Write the two equations: mean $\\mu = np = 24$ and variance $\\sigma^2 = npq = 6$.',
            why: { bm: 'Nilai $6$ sudah merupakan varians $\\sigma^2$, jadi tidak perlu dikuasaduakan.', en: 'Variance is already $\\sigma^2$, so do not square it.' }
          },
          {
            badge: 'K1',
            bm: 'Bahagikan persamaan varians dengan min: $\\frac{npq}{np} = \\frac{6}{24} \\implies q = 0.25$.',
            en: 'Divide variance by mean: $\\frac{npq}{np} = \\frac{6}{24} \\implies q = 0.25$.',
            why: { bm: 'Membahagi $npq$ dengan $np$ menghapuskan $n$ dan $p$ serentak, meninggalkan $q$.', en: 'Dividing $npq$ by $np$ cancels both $n$ and $p$, isolating $q$.' }
          },
          {
            badge: 'K1',
            bm: 'Cari kebarangkalian berjaya: $p = 1 - q = 1 - 0.25 = 0.75$.',
            en: 'Find success probability: $p = 1 - q = 1 - 0.25 = 0.75$.',
            why: { bm: 'Hasil tambah kebarangkalian berjaya dan gagal sentiasa $p + q = 1$.', en: 'Success and failure probabilities always sum to $p + q = 1$.' }
          },
          {
            badge: 'N1',
            bm: 'Gantikan $p = 0.75$ ke dalam $np = 24$: $0.75n = 24 \\implies n = \\frac{24}{0.75} = 32$.',
            en: 'Substitute $p = 0.75$ into $np = 24$: $0.75n = 24 \\implies n = \\frac{24}{0.75} = 32$.',
            why: { bm: '$n$ mesti nombor bulat positif; semakan pantas: $32 \\times 0.75 = 24$.', en: '$n$ must be a positive integer; quick check: $32 \\times 0.75 = 24$.' }
          }
        ]
      },
      {
        code: '5.3', marks: 4,
        topic: { bm: 'Kebarangkalian Pelengkap Binomial $P(X \\ge 1)$', en: 'Binomial Complement Rule $P(X \\ge 1)$' },
        q: {
          bm: 'Kebarangkalian sebiji mentol rosak ialah $0.1$. Jika $4$ biji mentol dipilih secara rawak, cari kebarangkalian sekurang-kurangnya sebiji mentol rosak. [4m]',
          en: 'The probability a bulb is defective is $0.1$. If $4$ bulbs are chosen at random, find the probability that at least $1$ is defective. [4m]'
        },
        mistakes: {
          bm: [
            'Mengira $P(X = 1)$ sahaja dan bukannya semua kes $X \\in \\{1, 2, 3, 4\\}$.',
            'Memasukkan $P(X = 0)$ ke dalam $P(X \\ge 1)$ atau terlupa menolak daripada $1$ selepas mengira $(0.9)^4 = 0.6561$.'
          ],
          en: [
            'Computing only $P(X = 1)$ instead of all cases $X \\in \\{1, 2, 3, 4\\}$.',
            'Including $P(X = 0)$ in $P(X \\ge 1)$ or forgetting $1 - P(X = 0)$ after computing $(0.9)^4 = 0.6561$.'
          ]
        },
        scheme: [
          {
            badge: 'K1',
            bm: 'Kenal pasti $X \\sim B(4, 0.1)$ ($q = 1 - 0.1 = 0.9$) dan guna pelengkap: $P(X \\ge 1) = 1 - P(X = 0)$.',
            en: 'Identify $X \\sim B(4, 0.1)$ ($q = 1 - 0.1 = 0.9$) and apply complement: $P(X \\ge 1) = 1 - P(X = 0)$.',
            why: { bm: '"Sekurang-kurangnya $1$" bermaksud $1, 2, 3,$ atau $4$; menolak satu kes $X = 0$ daripada $1$ menjimatkan $4$ kiraan berasingan.', en: '"At least $1$" means $1, 2, 3,$ or $4$; subtracting the single missing outcome $X = 0$ from $1$ avoids $4$ separate terms.' }
          },
          {
            badge: 'K1',
            bm: 'Gantikan $r = 0$: $P(X = 0) = \\,^4C_0 (0.1)^0 (0.9)^4 = 1 \\times 1 \\times 0.6561 = 0.6561$.',
            en: 'Substitute $r = 0$: $P(X = 0) = \\,^4C_0 (0.1)^0 (0.9)^4 = 1 \\times 1 \\times 0.6561 = 0.6561$.',
            why: { bm: 'Sebarang nombor bukan sifar berkuasa $0$ bersamaan $1$, dan $\\,^4C_0 = 1$.', en: 'Any non-zero number to power $0$ equals $1$, and $\\,^4C_0 = 1$.' }
          },
          {
            badge: 'K1',
            bm: 'Tolak daripada $1$: $P(X \\ge 1) = 1 - 0.6561$.',
            en: 'Subtract from $1$: $P(X \\ge 1) = 1 - 0.6561$.',
            why: { bm: 'Jumlah kebarangkalian semua kesudahan $X = 0, 1, 2, 3, 4$ ialah $1$.', en: 'Total probability across all outcomes $X = 0, 1, 2, 3, 4$ is $1$.' }
          },
          {
            badge: 'N1',
            bm: '$0.3439$.',
            en: '$0.3439$.',
            why: { bm: 'Berikan nilai tepat kepada $4$ tempat perpuluhan.', en: 'Leave exact to $4$ decimal places.' }
          }
        ]
      },
      {
        code: '5.4', marks: 4,
        topic: { bm: 'Menukar kepada Skor-$Z$ Piawai (Taburan Normal)', en: 'Standardizing $Z$-Scores in Normal Distribution' },
        q: {
          bm: 'Jisim buah betik bertaburan secara normal $X \\sim N(55, 8^2)$. Cari (a) $P(X > 67)$, dan (b) $P(47 < X < 63)$. [4m]',
          en: 'Papaya masses follow $X \\sim N(55, 8^2)$. Find (a) $P(X > 67)$, and (b) $P(47 < X < 63)$. [4m]'
        },
        mistakes: {
          bm: [
            'Membahagi dengan varians $64$ bukannya sisihan piawai $\\sigma = 8$.',
            'Mengira $P(-1 < Z < 1)$ sebagai $1 - P(Z > 1)$ tanpa menolak **kedua-dua** ekor ($1 - 2P(Z > 1)$).',
            'Tersilap tanda negatif pada $Z = \\frac{47 - 55}{8} = -1$.'
          ],
          en: [
            'Dividing by variance $64$ instead of standard deviation $\\sigma = 8$.',
            'Treating $P(-1 < Z < 1)$ as $1 - P(Z > 1)$ instead of subtracting **both** tails ($1 - 2P(Z > 1)$).',
            'Losing the negative sign on $Z = \\frac{47 - 55}{8} = -1$.'
          ]
        },
        scheme: [
          {
            badge: 'K1',
            bm: '(a) Kenal pasti $\\mu = 55, \\sigma = 8$. Tukar kepada skor-$Z$: $P(X > 67) = P\\left(Z > \\frac{67 - 55}{8}\\right) = P\\left(Z > \\frac{12}{8}\\right) = P(Z > 1.5)$.',
            en: '(a) Note $\\mu = 55, \\sigma = 8$. Standardize: $P(X > 67) = P\\left(Z > \\frac{67 - 55}{8}\\right) = P\\left(Z > \\frac{12}{8}\\right) = P(Z > 1.5)$.',
            why: { bm: 'Dalam $N(\\mu, \\sigma^2)$, $8^2$ bermaksud $\\sigma = 8$; rumus piawai ialah $Z = \\frac{X - \\mu}{\\sigma}$.', en: 'In $N(\\mu, \\sigma^2)$, $8^2$ gives $\\sigma = 8$; standardize via $Z = \\frac{X - \\mu}{\\sigma}$.' }
          },
          {
            badge: 'N1',
            bm: 'Baca jadual Normal Piawai: $P(Z > 1.5) = 0.0668$.',
            en: 'From Standard Normal table: $P(Z > 1.5) = 0.0668$.',
            why: { bm: 'Jadual SPM terus memberi luas ekor kanan $P(Z > z)$.', en: 'The SPM table directly gives right-tail areas $P(Z > z)$.' }
          },
          {
            badge: 'K1',
            bm: '(b) Piawaikan kedua-dua sempadan: $z_1 = \\frac{47 - 55}{8} = -1$, $z_2 = \\frac{63 - 55}{8} = 1 \\implies P(-1 < Z < 1)$.',
            en: '(b) Standardize both bounds: $z_1 = \\frac{47 - 55}{8} = -1$, $z_2 = \\frac{63 - 55}{8} = 1 \\implies P(-1 < Z < 1)$.',
            why: { bm: 'Tukar kedua-dua nilai $47$ dan $63$ kepada skor-$Z$ sebelum merujuk jadual.', en: 'Convert both endpoints $47$ and $63$ to $Z$ before using the table.' }
          },
          {
            badge: 'K1',
            bm: 'Guna simetri lengkung loceng: $P(-1 < Z < 1) = 1 - P(Z < -1) - P(Z > 1) = 1 - 2P(Z > 1) = 1 - 2(0.1587)$.',
            en: 'Use bell-curve symmetry: $P(-1 < Z < 1) = 1 - P(Z < -1) - P(Z > 1) = 1 - 2P(Z > 1) = 1 - 2(0.1587)$.',
            why: { bm: 'Oleh kerana lengkung simetri pada $Z = 0$, luas ekor kiri $Z < -1$ sama dengan ekor kanan $Z > 1$.', en: 'By bell-curve symmetry around $Z = 0$, the left tail $Z < -1$ equals the right tail $Z > 1$.' }
          },
          {
            badge: 'N1',
            bm: '$1 - 0.3174 = 0.6826$.',
            en: '$1 - 0.3174 = 0.6826$.',
            why: { bm: 'Menggunakan jadual $4$ t.p. SPM ($0.1587$) memberi $0.6826$ (kalkulator terus memberi $0.6827$).', en: 'Using the SPM 4-d.p. table ($0.1587$) yields $0.6826$ (unrounded calculator gives $0.6827$).' }
          }
        ]
      },
      {
        code: '5.5', marks: 4,
        topic: { bm: 'Bacaan Songsang Jadual Normal Piawai', en: 'Inverse Normal Table Lookup' },
        q: {
          bm: 'Markah ujian Matematik Tambahan bertaburan normal dengan min $\\mu = 62$ dan varians $\\sigma^2 = 100$. Jika $15\\%$ murid terbaik mendapat gred A, cari markah minimum untuk mendapat gred A. [4m]',
          en: 'Test scores follow a normal distribution with mean $\\mu = 62$ and variance $\\sigma^2 = 100$. If the top $15\\%$ receive grade A, find the minimum score for grade A. [4m]'
        },
        mistakes: {
          bm: [
            'Menggunakan $\\sigma = 100$ tanpa mengambil punca kuasa dua $\\sigma = \\sqrt{100} = 10$.',
            'Meletakkan tanda negatif $-1.036$ bagi $15\\%$ teratas, atau membaca nilai $Z = 0.15$ di tepi jadual bukannya mencari $0.1500$ di dalam badan jadual.'
          ],
          en: [
            'Using $\\sigma = 100$ instead of $\\sigma = \\sqrt{100} = 10$ in the $Z$-score denominator.',
            'Using $-1.036$ for the top $15\\%$ or reading $P(Z > 0.15)$ from the margin instead of locating $0.1500$ inside the probability body.'
          ]
        },
        scheme: [
          {
            badge: 'K1',
            bm: 'Cari $\\sigma = \\sqrt{100} = 10$ dan tulis syarat: $P(X > k) = 0.15 \\implies P\\left(Z > \\frac{k - 62}{10}\\right) = 0.15$.',
            en: 'Find $\\sigma = \\sqrt{100} = 10$ and write condition: $P(X > k) = 0.15 \\implies P\\left(Z > \\frac{k - 62}{10}\\right) = 0.15$.',
            why: { bm: 'Kumpulan $15\\%$ teratas berada di ekor kanan $> k$, dan varians $\\sigma^2 = 100$ mesti dipuncakuasakan.', en: 'Top $15\\%$ lies in the right tail $> k$, and variance $\\sigma^2 = 100$ must be square-rooted.' }
          },
          {
            badge: 'K1',
            bm: 'Cari $0.1500$ dalam badan Jadual Normal Piawai: $P(Z > 1.03) = 0.1515$, tolak $0.0014$ (lajur beza $6$) $\\implies z = +1.036$.',
            en: 'Look up $0.1500$ in the Standard Normal table body: $P(Z > 1.03) = 0.1515$, subtract $0.0014$ (diff col $6$) $\\implies z = +1.036$.',
            why: { bm: 'Oleh sebab luas ekor kanan $0.15 < 0.5$, nilai $z$ berada di sebelah kanan $0$ (positif).', en: 'Because right-tail area $0.15 < 0.5$, $z$ is positive to the right of $0$.' }
          },
          {
            badge: 'K1',
            bm: 'Samakan dan selesaikan: $\\frac{k - 62}{10} = 1.036 \\implies k - 62 = 10(1.036) = 10.36$.',
            en: 'Equate and solve: $\\frac{k - 62}{10} = 1.036 \\implies k - 62 = 10(1.036) = 10.36$.',
            why: { bm: 'Darab kedua-dua belah dengan $10$ dahulu sebelum menambah $62$.', en: 'Multiply both sides by $10$ first, then add $62$.' }
          },
          {
            badge: 'N1',
            bm: '$k = 62 + 10.36 = 72.36$ (atau $72.4$).',
            en: '$k = 62 + 10.36 = 72.36$ (or $72.4$).',
            why: { bm: 'Semak: $72.36 > \\mu = 62$, munasabah bagi $15\\%$ markah tertinggi.', en: 'Check: $72.36 > \\mu = 62$, which makes sense for the top $15\\%$.' }
          }
        ]
      },
      {
        code: '5.6', marks: 3,
        topic: { bm: 'Jumlah Kebarangkalian Pemboleh Ubah Rawak Diskret', en: 'Discrete Random Variable Probability Sum' },
        q: {
          bm: 'Pemboleh ubah rawak diskret $X$ mempunyai jadual kebarangkalian $P(X = 1) = 0.2$, $P(X = 2) = k$, $P(X = 3) = 2k$, dan $P(X = 4) = 0.35$. Cari nilai pemalar $k$. [3m]',
          en: 'A discrete random variable $X$ has $P(X = 1) = 0.2$, $P(X = 2) = k$, $P(X = 3) = 2k$, and $P(X = 4) = 0.35$. Find constant $k$. [3m]'
        },
        mistakes: {
          bm: [
            'Lupa sifat asas semua taburan kebarangkalian diskret iaitu $\\sum P(X = x_i) = 1$.',
            'Menulis $k + 2k = 2k^2$ bukannya $3k$, atau tersilap menjumlahkan perpuluhan $0.2 + 0.35$.'
          ],
          en: [
            'Forgetting that the sum of all discrete probabilities equals $\\sum P(X = x_i) = 1$.',
            'Writing $k + 2k = 2k^2$ instead of $3k$, or mis-adding decimals $0.2 + 0.35$.'
          ]
        },
        scheme: [
          {
            badge: 'K1',
            bm: 'Gunakan hukum jumlah kebarangkalian $\\sum P(X = x_i) = 1$: $0.2 + k + 2k + 0.35 = 1$.',
            en: 'Apply total probability rule $\\sum P(X = x_i) = 1$: $0.2 + k + 2k + 0.35 = 1$.',
            why: { bm: 'Semua kesudahan dalam jadual taburan diskret mesti berjumlah tepat $1$.', en: 'All possible outcomes in a discrete distribution table must sum to $1$.' }
          },
          {
            badge: 'K1',
            bm: 'Kumpulkan sebutan serupa: $(0.2 + 0.35) + (k + 2k) = 1 \\implies 0.55 + 3k = 1$.',
            en: 'Combine like terms: $(0.2 + 0.35) + (k + 2k) = 1 \\implies 0.55 + 3k = 1$.',
            why: { bm: 'Jumlahkan pemalar perpuluhan dan jumlahkan pekali $k$ secara berasingan.', en: 'Add constant decimals together and $k$-terms together.' }
          },
          {
            badge: 'K1',
            bm: 'Asingkan $3k$: $3k = 1 - 0.55 = 0.45$.',
            en: 'Isolate $3k$: $3k = 1 - 0.55 = 0.45$.',
            why: { bm: 'Tolak $0.55$ pada kedua-dua belah persamaan.', en: 'Subtract $0.55$ from both sides.' }
          },
          {
            badge: 'N1',
            bm: 'Bahagi dengan $3$: $k = \\frac{0.45}{3} = 0.15$.',
            en: 'Divide by $3$: $k = \\frac{0.45}{3} = 0.15$.',
            why: { bm: 'Semak jumlah: $0.2 + 0.15 + 0.30 + 0.35 = 1.00$.', en: 'Quick check: $0.2 + 0.15 + 0.30 + 0.35 = 1.00$.' }
          }
        ]
      },
      {
        code: '5.7', marks: 3,
        topic: { bm: 'Min & Sisihan Piawai Sampel Besar Binomial', en: 'Mean & Standard Deviation of a Large Binomial Sample' },
        q: {
          bm: 'Dalam satu kaji selidik terhadap $800$ orang penduduk, kebarangkalian seorang penduduk memakai cermin mata ialah $0.15$. Cari min dan sisihan piawai bilangan pemakai cermin mata. [3m]',
          en: 'In a survey of $800$ residents, the probability a resident wears glasses is $0.15$. Find the mean and standard deviation of glass wearers. [3m]'
        },
        mistakes: {
          bm: [
            'Berhenti pada varians $\\sigma^2 = npq = 102$ tanpa mengambil punca kuasa dua $\\sigma = \\sqrt{102}$.',
            'Terlupa mendarab $q = 1 - 0.15 = 0.85$ dan terus mengira $\\sqrt{800(0.15)}$.'
          ],
          en: [
            'Stopping at variance $\\sigma^2 = npq = 102$ without taking the square root $\\sigma = \\sqrt{102}$.',
            'Forgetting $q = 1 - 0.15 = 0.85$ and computing $\\sqrt{800(0.15)}$ instead.'
          ]
        },
        scheme: [
          {
            badge: 'N1',
            bm: 'Kenal pasti $n = 800, p = 0.15, q = 1 - 0.15 = 0.85$; Min $\\mu = np = 800(0.15) = 120$.',
            en: 'Identify $n = 800, p = 0.15, q = 1 - 0.15 = 0.85$; Mean $\\mu = np = 800(0.15) = 120$.',
            why: { bm: 'Min Binomial ialah bilangan cubaan didarab kebarangkalian berjaya.', en: 'Binomial mean is simply trials multiplied by success probability.' }
          },
          {
            badge: 'K1',
            bm: 'Kira varians: $\\sigma^2 = npq = 800(0.15)(0.85) = 120(0.85) = 102$.',
            en: 'Compute variance: $\\sigma^2 = npq = 800(0.15)(0.85) = 120(0.85) = 102$.',
            why: { bm: 'Varians mendarabkan min $np = 120$ dengan kebarangkalian gagal $q = 0.85$.', en: 'Variance multiplies the mean $np = 120$ by $q = 0.85$.' }
          },
          {
            badge: 'K1',
            bm: 'Ambil punca kuasa dua untuk sisihan piawai: $\\sigma = \\sqrt{npq} = \\sqrt{102}$.',
            en: 'Take square root for standard deviation: $\\sigma = \\sqrt{npq} = \\sqrt{102}$.',
            why: { bm: 'Sisihan piawai ialah punca kuasa dua bagi varians.', en: 'Standard deviation is the square root of variance.' }
          },
          {
            badge: 'N1',
            bm: '$\\sigma = 10.10$ ($4$ a.b., daripada $10.0995\\dots$).',
            en: '$\\sigma = 10.10$ ($4$ s.f., from $10.0995\\dots$).',
            why: { bm: 'Bundarkan dengan cermat kepada $4$ angka bererti: angka $9$ membundarkan $10.099$ menjadi $10.10$.', en: 'Round carefully to $4$ significant figures: the $9$ rounds $10.099$ up to $10.10$.' }
          }
        ]
      },
      {
        code: '5.8', marks: 3,
        topic: { bm: 'Simetri Kawasan Kiri Taburan Normal Piawai $P(Z < -z)$', en: 'Left-Tail Symmetry of Standard Normal Distribution' },
        q: {
          bm: 'Bagi pemboleh ubah rawak normal piawai $Z \\sim N(0, 1)$, cari nilai $P(Z < -1.85)$. [3m]',
          en: 'For the standard normal variable $Z \\sim N(0, 1)$, find $P(Z < -1.85)$. [3m]'
        },
        mistakes: {
          bm: [
            'Menolak bacaan jadual daripada $1$ ($1 - 0.0322 = 0.9678$) kerana terkeliru antara $Z < -1.85$ dengan $Z < +1.85$.',
            'Membaca lajur $1.80$ dan bukannya lajur $5$ bagi $1.85$ dalam jadual Normal.'
          ],
          en: [
            'Computing $1 - 0.0322 = 0.9678$ by confusing $Z < -1.85$ with $Z < +1.85$.',
            'Reading $1.80$ instead of column $5$ for $1.85$ in the Normal table.'
          ]
        },
        scheme: [
          {
            badge: 'K1',
            bm: 'Tentukan kedudukan: $Z = -1.85$ berada di kiri $0$, maka $P(Z < -1.85)$ ialah ekor kecil di kiri ($< 0.5$).',
            en: 'Note position: $Z = -1.85$ lies to the left of $0$, so $P(Z < -1.85)$ is a small left tail ($< 0.5$).',
            why: { bm: 'Menyemak sama ada luas lorekan $< 0.5$ atau $> 0.5$ mengelakkan kesilapan $1 - \\dots$.', en: 'Checking whether the shaded area is $< 0.5$ or $> 0.5$ prevents the $1 - \\dots$ error.' }
          },
          {
            badge: 'K1',
            bm: 'Guna simetri lengkung loceng: $P(Z < -1.85) = P(Z > 1.85)$.',
            en: 'Apply bell-curve symmetry: $P(Z < -1.85) = P(Z > 1.85)$.',
            why: { bm: 'Lengkung Normal Piawai adalah cermin simetri pada $Z = 0$.', en: 'The standard normal curve is mirror-symmetric about $Z = 0$.' }
          },
          {
            badge: 'N1',
            bm: 'Baca baris $1.8$, lajur $5$ dalam jadual hujung kanan SPM: $0.0322$.',
            en: 'Read row $1.8$, column $5$ in the SPM upper-tail table: $0.0322$.',
            why: { bm: 'Jadual terus memberi nilai $P(Z > z)$ bagi $z > 0$.', en: 'The table directly provides $P(Z > z)$ for $z > 0$.' }
          }
        ]
      },
      {
        code: '5.9', marks: 4,
        topic: { bm: 'Mengasingkan Saiz Sampel $n$ daripada Pengeluaran Harian', en: 'Distinguishing Sample Size $n$ from Daily Output' },
        q: {
          bm: 'Sebuah kilang menghasilkan $2000$ cip sehari dengan kadar kecacatan $2\\%$. Jika sampel rawak $10$ keping cip diperiksa, cari kebarangkalian tepat $2$ keping cip adalah cacat. [4m]',
          en: 'A factory produces $2000$ chips daily with a $2\\%$ defect rate. If a random sample of $10$ chips is inspected, find the probability that exactly $2$ are defective. [4m]'
        },
        mistakes: {
          bm: [
            'Menggunakan angka pengeluaran harian $2000$ sebagai $n$ bukannya saiz sampel $n = 10$.',
            'Menukar $2\\%$ menjadi $p = 0.2$ (sepatutnya $0.02$) atau $q = 0.8$ (sepatutnya $0.98$).'
          ],
          en: [
            'Using daily output $2000$ as $n$ instead of the inspected sample size $n = 10$.',
            'Writing $p = 0.2$ instead of $2\\% = 0.02$ (or $q = 0.8$ instead of $0.98$).'
          ]
        },
        scheme: [
          {
            badge: 'K1',
            bm: 'Kenal pasti $X \\sim B(10, 0.02)$: sampel $n = 10$, $p = \\frac{2}{100} = 0.02$, $q = 1 - 0.02 = 0.98$, dan $r = 2$.',
            en: 'Identify $X \\sim B(10, 0.02)$: sample $n = 10$, $p = \\frac{2}{100} = 0.02$, $q = 1 - 0.02 = 0.98$, and $r = 2$.',
            why: { bm: 'Abaikan jumlah kilang $2000$; hanya $10$ cip yang diperiksa membentuk cubaan Binomial.', en: 'Ignore factory output $2000$; only the $10$ inspected chips form the Binomial trials.' }
          },
          {
            badge: 'K1',
            bm: 'Gantikan ke dalam rumus: $P(X = 2) = \\,^{10}C_2 (0.02)^2 (0.98)^{10-2} = \\,^{10}C_2 (0.02)^2 (0.98)^8$.',
            en: 'Substitute into formula: $P(X = 2) = \\,^{10}C_2 (0.02)^2 (0.98)^{10-2} = \\,^{10}C_2 (0.02)^2 (0.98)^8$.',
            why: { bm: 'Tepat $2$ cacat bermakna baki $10 - 2 = 8$ cip adalah elok.', en: 'Exactly $2$ defective means the other $10 - 2 = 8$ chips are good.' }
          },
          {
            badge: 'K1',
            bm: 'Kira faktor: $45 \\times 0.0004 \\times 0.85076 = 0.015314$.',
            en: 'Compute factors: $45 \\times 0.0004 \\times 0.85076 = 0.015314$.',
            why: { bm: '$\\,^{10}C_2 = \\frac{10 \\times 9}{2} = 45$ dan $(0.98)^8 \\approx 0.85076$.', en: '$\\,^{10}C_2 = \\frac{10 \\times 9}{2} = 45$ and $(0.98)^8 \\approx 0.85076$.' }
          },
          {
            badge: 'N1',
            bm: '$0.0153$ ($4$ t.p.).',
            en: '$0.0153$ ($4$ d.p.).',
            why: { bm: 'Bundarkan kepada $4$ tempat perpuluhan.', en: 'Round to $4$ decimal places.' }
          }
        ]
      },
      {
        code: '5.10', marks: 4,
        topic: { bm: 'Peratusan Dua Ekor Luar Taburan Normal', en: 'Two-Tailed Percentage Outside an Interval' },
        q: {
          bm: 'Jangka hayat bateri bertaburan normal dengan min $50\\text{ jam}$ dan sisihan piawai $5\\text{ jam}$. Cari peratusan bateri yang mempunyai jangka hayat kurang daripada $42\\text{ jam}$ atau melebihi $58\\text{ jam}$. [4m]',
          en: 'Battery lifespan is normally distributed with mean $50\\text{ h}$ and standard deviation $5\\text{ h}$. Find the percentage lasting less than $42\\text{ h}$ or more than $58\\text{ h}$. [4m]'
        },
        mistakes: {
          bm: [
            'Meninggalkan jawapan sebagai kebarangkalian $0.1096$ tanpa mendarab $100\\%$ untuk peratusan.',
            'Mengira satu ekor sahaja ($0.0548 \\to 5.48\\%$) atau menolak daripada $1$ ($1 - 0.1096 = 89.04\\%$, iaitu kawasan tengah).'
          ],
          en: [
            'Leaving the answer as probability $0.1096$ without multiplying by $100\\%$ for percentage.',
            'Finding only one tail ($0.0548 \\to 5.48\\%$) or subtracting from $1$ ($1 - 0.1096 = 89.04\\%$, which is the middle interval).'
          ]
        },
        scheme: [
          {
            badge: 'K1',
            bm: 'Piawaikan kedua-dua ekor ($\\mu = 50, \\sigma = 5$): $z_1 = \\frac{42 - 50}{5} = -1.6$ dan $z_2 = \\frac{58 - 50}{5} = +1.6$.',
            en: 'Standardize both tails ($\\mu = 50, \\sigma = 5$): $z_1 = \\frac{42 - 50}{5} = -1.6$ and $z_2 = \\frac{58 - 50}{5} = +1.6$.',
            why: { bm: 'Tukar kedua-dua nilai $42$ jam dan $58$ jam kepada skor-$Z$.', en: 'Convert both $42$ hours and $58$ hours to $Z$-scores.' }
          },
          {
            badge: 'K1',
            bm: 'Gabung ekor simetri: $P(X < 42) + P(X > 58) = P(Z < -1.6) + P(Z > 1.6) = 2P(Z > 1.6)$.',
            en: 'Combine symmetric tails: $P(X < 42) + P(X > 58) = P(Z < -1.6) + P(Z > 1.6) = 2P(Z > 1.6)$.',
            why: { bm: 'Dengan simetri, $P(Z < -1.6) = P(Z > 1.6)$, maka jumlah luas luar ialah dua kali satu ekor.', en: 'By symmetry, $P(Z < -1.6) = P(Z > 1.6)$, so total outer area is twice one tail.' }
          },
          {
            badge: 'K1',
            bm: 'Baca $P(Z > 1.6) = 0.0548$: jumlah kebarangkalian $= 2(0.0548) = 0.1096$.',
            en: 'Read $P(Z > 1.6) = 0.0548$: total probability $= 2(0.0548) = 0.1096$.',
            why: { bm: 'Darab $2$ kerana "kurang daripada $42$ atau melebihi $58$" merangkumi kedua-dua ekor luar.', en: 'Multiply by $2$ because "less than $42$ or more than $58$" covers both outer tails.' }
          },
          {
            badge: 'N1',
            bm: 'Tukar kepada peratusan: $0.1096 \\times 100\\% = 10.96\\%$.',
            en: 'Convert to percentage: $0.1096 \\times 100\\% = 10.96\\%$.',
            why: { bm: 'Kebarangkalian $\\times 100\\%$ memberi nilai peratusan.', en: 'Probability $\\times 100\\%$ gives the percentage.' }
          }
        ]
      }
    ],

    // =========================================================================
    // TINGKATAN 5 BAB 6: FUNGSI TRIGONOMETRI (10 SOALAN)
    // =========================================================================
    'f5-c6': [
      {
        code: '6.1', marks: 3,
        topic: { bm: 'Tanda Sukuan II (ASTC) & Fungsi Salingan ($\\sec, \\csc, \\cot$)', en: 'Quadrant II Signs (ASTC) & Reciprocal Ratios' },
        q: {
          bm: 'Diberi $\\tan\\theta = -\\frac{3}{4}$ dan $90^\\circ < \\theta < 180^\\circ$. Tanpa menggunakan kalkulator, cari nilai $\\sin\\theta$ dan $\\sec\\theta$. [3m]',
          en: 'Given $\\tan\\theta = -\\frac{3}{4}$ and $90^\\circ < \\theta < 180^\\circ$, find $\\sin\\theta$ and $\\sec\\theta$ without a calculator. [3m]'
        },
        mistakes: {
          bm: [
            'Memberi $\\sec\\theta = +\\frac{5}{4}$ dengan terlupa bahawa kosinus dan sekan adalah **negatif** dalam Sukuan II.',
            'Tertukar pasangan salingan $\\sec\\theta = \\frac{1}{\\sin\\theta}$ bukannya $\\frac{1}{\\cos\\theta}$ (guna peraturan huruf ke-3!).'
          ],
          en: [
            'Writing positive $+\\frac{5}{4}$ for $\\sec\\theta$, forgetting cosine and secant are **negative** in Quadrant II.',
            'Confusing $\\sec\\theta = \\frac{1}{\\sin\\theta}$ instead of $\\frac{1}{\\cos\\theta}$ (use the 3rd-letter rule!).'
          ]
        },
        scheme: [
          {
            badge: 'K1',
            bm: 'Lakar segi tiga bersudut tegak dengan $\\text{tentang} = 3,\\; \\text{sebelahan} = 4$: $\\text{hip} = \\sqrt{3^2 + 4^2} = \\sqrt{25} = 5$.',
            en: 'Sketch right triangle with $\\text{opp} = 3,\\; \\text{adj} = 4$: $\\text{hyp} = \\sqrt{3^2 + 4^2} = \\sqrt{25} = 5$.',
            why: { bm: 'Abaikan tanda negatif sementara semasa mencari panjang sisi segi tiga guna Pythagoras.', en: 'Ignore the minus sign temporarily while finding side lengths via Pythagoras.' }
          },
          {
            badge: 'K1',
            bm: 'Tentukan sukuan ($90^\\circ < \\theta < 180^\\circ$ = Sukuan II, **S** dalam ASTC): $\\sin\\theta > 0$ dan $\\cos\\theta < 0$.',
            en: 'Apply Quadrant II ($90^\\circ < \\theta < 180^\\circ$, **S** in ASTC): $\\sin\\theta > 0$ and $\\cos\\theta < 0$.',
            why: { bm: 'Hanya sinus dan kosekan bernilai positif dalam Sukuan II.', en: 'Only sine and cosecant are positive in Quadrant II.' }
          },
          {
            badge: 'K1',
            bm: 'Baca nisbah asas bertanda: $\\sin\\theta = +\\frac{3}{5}$ dan $\\cos\\theta = -\\frac{4}{5}$.',
            en: 'Read basic ratios with signs: $\\sin\\theta = +\\frac{3}{5}$ and $\\cos\\theta = -\\frac{4}{5}$.',
            why: { bm: 'Guna SOH-CAH ($\\sin = \\text{T/H}$, $\\cos = \\text{S/H}$) bersama tanda Sukuan II.', en: 'Apply SOH-CAH ($\\sin = \\text{O/H}$, $\\cos = \\text{A/H}$) with Quadrant II signs.' }
          },
          {
            badge: 'N1',
            bm: 'Songsangkan $\\cos\\theta$ bagi sekan: $\\sec\\theta = \\frac{1}{\\cos\\theta} = \\frac{1}{-4/5} = -\\frac{5}{4}$.',
            en: 'Invert $\\cos\\theta$ for secant: $\\sec\\theta = \\frac{1}{\\cos\\theta} = \\frac{1}{-4/5} = -\\frac{5}{4}$.',
            why: { bm: 'Sekan berkongsi tanda yang sama dengan kosinus.', en: 'Secant shares the exact same sign as cosine.' }
          }
        ]
      },
      {
        code: '6.2', marks: 6,
        topic: { bm: 'Lakaran Graf Kosinus & Bilangan Penyelesaian Garis Lurus', en: 'Sketching Cosine Graph & Counting Line Intersections' },
        q: {
          bm: '(a) Lakarkan graf $y = 2\\cos 2x$ untuk $0 \\le x \\le \\pi$. [3m]\n(b) Seterusnya, pada paksi yang sama, lakarkan garis lurus yang sesuai untuk mencari bilangan penyelesaian bagi persamaan $2\\pi\\cos 2x = \\pi - x$ dalam julat itu. [3m]',
          en: '(a) Sketch $y = 2\\cos 2x$ for $0 \\le x \\le \\pi$. [3m]\n(b) Hence, draw a suitable straight line on the same axes to state the number of solutions of $2\\pi\\cos 2x = \\pi - x$ in that interval. [3m]'
        },
        mistakes: {
          bm: [
            'Melukis garis $y = \\pi - x$ secara terus tanpa membahagikan persamaan dengan $\\pi$ supaya sebelah kiri sepadan dengan $y = 2\\cos 2x$.',
            'Tersalah baca kala $2x$ sebagai $2\\pi$ (melukis separuh kitaran sahaja pada $[0, \\pi]$) atau amplitud $1$ bukannya $2$.'
          ],
          en: [
            'Drawing $y = \\pi - x$ directly without dividing both sides by $\\pi$ to match $y = 2\\cos 2x$.',
            'Misreading $2x$ as period $2\\pi$ (drawing only half a cycle on $[0, \\pi]$) or amplitude $1$ instead of $2$.'
          ]
        },
        scheme: [
          {
            badge: 'K1',
            bm: '(a) Bagi $y = 2\\cos 2x$: amplitud $= 2$, kala $= \\frac{2\\pi}{2} = \\pi$, jadi $1$ kitaran kosinus lengkap muat pada $[0, \\pi]$.',
            en: '(a) For $y = 2\\cos 2x$: amplitude $= 2$, period $= \\frac{2\\pi}{2} = \\pi$, so $1$ full cosine cycle fits on $[0, \\pi]$.',
            why: { bm: 'Pekali $b = 2$ memampatkan $2$ kitaran dalam $2\\pi$, iaitu $1$ kitaran penuh dalam $[0, \\pi]$.', en: 'Coefficient $b = 2$ fits $2$ cycles into $2\\pi$, giving $1$ full cycle in $[0, \\pi]$.' }
          },
          {
            badge: 'K1',
            bm: 'Plot $5$ titik sukuan: $(0, 2)$, $(\\frac{\\pi}{4}, 0)$, $(\\frac{\\pi}{2}, -2)$, $(\\frac{3\\pi}{4}, 0)$, $(\\pi, 2)$ dan sambung licin.',
            en: 'Plot the $5$ quarter points: $(0, 2)$, $(\\frac{\\pi}{4}, 0)$, $(\\frac{\\pi}{2}, -2)$, $(\\frac{3\\pi}{4}, 0)$, $(\\pi, 2)$ and join smoothly.',
            why: { bm: 'Membahagi kala $\\pi$ kepada $4$ bahagian memberi pintasan-$x$ dan puncak/lembah yang tepat.', en: 'Dividing period $\\pi$ into $4$ quarters gives exact intercepts and extrema.' }
          },
          {
            badge: 'K1',
            bm: '(b) Bahagikan $2\\pi\\cos 2x = \\pi - x$ dengan $\\pi$: $\\frac{2\\pi\\cos 2x}{\\pi} = \\frac{\\pi}{\\pi} - \\frac{x}{\\pi} \\implies 2\\cos 2x = 1 - \\frac{x}{\\pi}$; lukis garis $y = 1 - \\frac{x}{\\pi}$ melalui $(0, 1)$ dan $(\\pi, 0)$.',
            en: '(b) Divide $2\\pi\\cos 2x = \\pi - x$ by $\\pi$: $\\frac{2\\pi\\cos 2x}{\\pi} = \\frac{\\pi}{\\pi} - \\frac{x}{\\pi} \\implies 2\\cos 2x = 1 - \\frac{x}{\\pi}$; draw line $y = 1 - \\frac{x}{\\pi}$ through $(0, 1)$ and $(\\pi, 0)$.',
            why: { bm: 'Gantikan $y = 2\\cos 2x$ supaya persilangan dengan garis lurus menyelesaikan persamaan asal.', en: 'Substitute $y = 2\\cos 2x$ so intersections with the straight line solve the given equation.' }
          },
          {
            badge: 'N1',
            bm: 'Garis lurus memotong lengkung kosinus pada $2$ titik $\\implies$ bilangan penyelesaian $= 2$.',
            en: 'The straight line cuts the cosine curve at $2$ points $\\implies$ number of solutions $= 2$.',
            why: { bm: 'Setiap titik persilangan $(x, y)$ memenuhi kedua-dua lengkung dan garis lurus serentak.', en: 'Each intersection point $(x, y)$ satisfies both equations simultaneously.' }
          }
        ]
      },
      {
        code: '6.3', marks: 4,
        topic: { bm: 'Pembuktian Identiti Sudut Berganda', en: 'Proving a Double-Angle Trigonometric Identity' },
        q: {
          bm: 'Buktikan identiti $\\frac{1 + \\cos 2\\theta}{\\sin 2\\theta} = \\cot\\theta$. [4m]',
          en: 'Prove the identity $\\frac{1 + \\cos 2\\theta}{\\sin 2\\theta} = \\cot\\theta$. [4m]'
        },
        mistakes: {
          bm: [
            'Memilih bentuk $1 - 2\\sin^2\\theta$ bagi $\\cos 2\\theta$ lalu menghasilkan $2 - 2\\sin^2\\theta$ yang gagal menghapuskan $+1$.',
            'Memotong $+1$ atau memindah sebutan merentas tanda $=$ secara tidak sah, atau lupa $\\frac{\\cos\\theta}{\\sin\\theta} = \\cot\\theta$.'
          ],
          en: [
            'Substituting $\\cos 2\\theta = 1 - 2\\sin^2\\theta$ (creating $2 - 2\\sin^2\\theta$ that gets stuck) instead of $2\\cos^2\\theta - 1$.',
            'Cancelling $+1$ illegally across addition or forgetting $\\frac{\\cos\\theta}{\\sin\\theta} = \\cot\\theta$.'
          ]
        },
        scheme: [
          {
            badge: 'K1',
            bm: 'Mula dari LHS dan ganti $\\cos 2\\theta = 2\\cos^2\\theta - 1$ serta $\\sin 2\\theta = 2\\sin\\theta\\cos\\theta$: $\\text{LHS} = \\frac{1 + (2\\cos^2\\theta - 1)}{2\\sin\\theta\\cos\\theta}$.',
            en: 'Start from LHS and substitute $\\cos 2\\theta = 2\\cos^2\\theta - 1$ and $\\sin 2\\theta = 2\\sin\\theta\\cos\\theta$: $\\text{LHS} = \\frac{1 + (2\\cos^2\\theta - 1)}{2\\sin\\theta\\cos\\theta}$.',
            why: { bm: 'Pilih $2\\cos^2\\theta - 1$ secara sengaja supaya $-1$ membatalkan $+1$ pada pengangka.', en: 'Choose $2\\cos^2\\theta - 1$ deliberately so $-1$ cancels $+1$ in the numerator.' }
          },
          {
            badge: 'K1',
            bm: 'Permudahkan pengangka ($1 - 1 = 0$): $= \\frac{2\\cos^2\\theta}{2\\sin\\theta\\cos\\theta}$.',
            en: 'Simplify numerator ($1 - 1 = 0$): $= \\frac{2\\cos^2\\theta}{2\\sin\\theta\\cos\\theta}$.',
            why: { bm: 'Selepas $+1$ terhapus, pengangka menjadi hasil darab tunggal yang boleh dimansuhkan.', en: 'Once $+1$ vanishes, the numerator becomes a single product ready for cancellation.' }
          },
          {
            badge: 'K1',
            bm: 'Mansuhkan faktor sepunya $2\\cos\\theta$: $\\frac{2\\cos\\theta \\times \\cos\\theta}{2\\cos\\theta \\times \\sin\\theta} = \\frac{\\cos\\theta}{\\sin\\theta}$.',
            en: 'Cancel common factor $2\\cos\\theta$: $\\frac{2\\cos\\theta \\times \\cos\\theta}{2\\cos\\theta \\times \\sin\\theta} = \\frac{\\cos\\theta}{\\sin\\theta}$.',
            why: { bm: 'Bahagikan pengangka dan penyebut dengan $2\\cos\\theta$.', en: 'Divide both numerator and denominator by $2\\cos\\theta$.' }
          },
          {
            badge: 'N1',
            bm: '$= \\cot\\theta = \\text{RHS}$ (Terbukti).',
            en: '$= \\cot\\theta = \\text{RHS}$ (Proven).',
            why: { bm: 'Mengikut identiti nisbah, $\\cot\\theta = \\frac{1}{\\tan\\theta} = \\frac{\\cos\\theta}{\\sin\\theta}$.', en: 'By quotient identity, $\\cot\\theta = \\frac{1}{\\tan\\theta} = \\frac{\\cos\\theta}{\\sin\\theta}$.' }
          }
        ]
      },
      {
        code: '6.4', marks: 4,
        topic: { bm: 'Persamaan Trigonometri Kuadratik ($[0^\\circ, 360^\\circ]$)', en: 'Quadratic Trigonometric Equation on $[0^\\circ, 360^\\circ]$' },
        q: {
          bm: 'Selesaikan persamaan $2\\cos^2 x + 3\\sin x - 3 = 0$ bagi $0^\\circ \\le x \\le 360^\\circ$. [4m]',
          en: 'Solve $2\\cos^2 x + 3\\sin x - 3 = 0$ for $0^\\circ \\le x \\le 360^\\circ$. [4m]'
        },
        mistakes: {
          bm: [
            'Gagal menukar $\\cos^2 x = 1 - \\sin^2 x$ untuk mendapat satu nisbah trig sahaja.',
            'Tertinggal sudut Sukuan II iaitu $180^\\circ - 30^\\circ = 150^\\circ$.',
            'Tersilap tanda apabila mendarab $-2\\sin^2 x + 3\\sin x - 1 = 0$ dengan $-1$.'
          ],
          en: [
            'Not converting $\\cos^2 x = 1 - \\sin^2 x$ to obtain a single trig ratio.',
            'Missing the Quadrant II solution $180^\\circ - 30^\\circ = 150^\\circ$.',
            'Sign error when multiplying $-2\\sin^2 x + 3\\sin x - 1 = 0$ by $-1$.'
          ]
        },
        scheme: [
          {
            badge: 'K1',
            bm: 'Gantikan $\\cos^2 x = 1 - \\sin^2 x$: $2(1 - \\sin^2 x) + 3\\sin x - 3 = 0$.',
            en: 'Substitute $\\cos^2 x = 1 - \\sin^2 x$: $2(1 - \\sin^2 x) + 3\\sin x - 3 = 0$.',
            why: { bm: 'Persamaan mesti mengandungi satu fungsi trig sahaja ($\\sin x$) sebelum difaktorkan.', en: 'An equation must contain only one trig function ($\\sin x$) before factorizing.' }
          },
          {
            badge: 'K1',
            bm: 'Kembang dan susun semula: $2 - 2\\sin^2 x + 3\\sin x - 3 = 0 \\implies -2\\sin^2 x + 3\\sin x - 1 = 0 \\implies 2\\sin^2 x - 3\\sin x + 1 = 0$.',
            en: 'Expand and rearrange: $2 - 2\\sin^2 x + 3\\sin x - 3 = 0 \\implies -2\\sin^2 x + 3\\sin x - 1 = 0 \\implies 2\\sin^2 x - 3\\sin x + 1 = 0$.',
            why: { bm: 'Darab dengan $-1$ supaya pekali kuasa dua positif dan mudah difaktorkan.', en: 'Multiply by $-1$ so the squared term is positive and easy to factorize.' }
          },
          {
            badge: 'K1',
            bm: 'Faktorkan: $(2\\sin x - 1)(\\sin x - 1) = 0 \\implies \\sin x = \\frac{1}{2}$ atau $\\sin x = 1$.',
            en: 'Factorize: $(2\\sin x - 1)(\\sin x - 1) = 0 \\implies \\sin x = \\frac{1}{2}$ or $\\sin x = 1$.',
            why: { bm: 'Anggap $\\sin x$ seperti $u$ dalam kuadratik $2u^2 - 3u + 1 = (2u - 1)(u - 1) = 0$.', en: 'Treat $\\sin x$ like $u$ in $2u^2 - 3u + 1 = (2u - 1)(u - 1) = 0$.' }
          },
          {
            badge: 'K1',
            bm: 'Selesaikan setiap cabang pada $[0^\\circ, 360^\\circ]$: $\\sin x = \\frac{1}{2} > 0$ (Sukuan I & II, rujukan $\\alpha = 30^\\circ$) $\\implies x = 30^\\circ,\\; 180^\\circ - 30^\\circ = 150^\\circ$; $\\sin x = 1 \\implies x = 90^\\circ$.',
            en: 'Solve each branch on $[0^\\circ, 360^\\circ]$: $\\sin x = \\frac{1}{2} > 0$ (Quad I & II, ref angle $\\alpha = 30^\\circ$) $\\implies x = 30^\\circ,\\; 180^\\circ - 30^\\circ = 150^\\circ$; $\\sin x = 1 \\implies x = 90^\\circ$.',
            why: { bm: 'Fungsi $\\sin x > 0$ bernilai positif dalam kedua-dua Sukuan I dan Sukuan II.', en: 'Sine $\\sin x > 0$ is positive in both Quadrant I and Quadrant II.' }
          },
          {
            badge: 'N1',
            bm: '$x = 30^\\circ,\\; 90^\\circ,\\; 150^\\circ$.',
            en: '$x = 30^\\circ,\\; 90^\\circ,\\; 150^\\circ$.',
            why: { bm: 'Senaraikan semua sudut mengikut susunan menaik dalam $0^\\circ \\le x \\le 360^\\circ$.', en: 'List all solutions in ascending order within $0^\\circ \\le x \\le 360^\\circ$.' }
          }
        ]
      },
      {
        code: '6.5', marks: 3,
        topic: { bm: 'Nilai Tepat Sudut Majmuk ($\\sin 75^\\circ$)', en: 'Exact Value via Compound-Angle Formula ($\\sin 75^\\circ$)' },
        q: {
          bm: 'Tanpa menggunakan kalkulator, cari nilai tepat bagi $\\sin 75^\\circ$ dalam bentuk surd menggunakan rumus sudut majmuk $\\sin(45^\\circ + 30^\\circ)$. [3m]',
          en: 'Without using a calculator, find the exact surd value of $\\sin 75^\\circ$ using $\\sin(45^\\circ + 30^\\circ)$. [3m]'
        },
        mistakes: {
          bm: [
            'Mengagihkan sinus secara linear: menulis $\\sin(45^\\circ + 30^\\circ) = \\sin 45^\\circ + \\sin 30^\\circ$.',
            'Tertukar rumus $\\sin(A + B)$ dengan $\\cos(A + B)$ ($\\cos A\\cos B - \\sin A\\sin B$) atau tersilap nilai $\\cos 30^\\circ = \\frac{\\sqrt{3}}{2}$.'
          ],
          en: [
            'Distributing sine linearly as $\\sin(45^\\circ + 30^\\circ) = \\sin 45^\\circ + \\sin 30^\\circ$.',
            'Mixing up $\\sin(A + B)$ with $\\cos(A + B)$ ($\\cos A\\cos B - \\sin A\\sin B$) or misremembering $\\cos 30^\\circ = \\frac{\\sqrt{3}}{2}$.'
          ]
        },
        scheme: [
          {
            badge: 'K1',
            bm: 'Guna rumus sudut majmuk: $\\sin(45^\\circ + 30^\\circ) = \\sin 45^\\circ\\cos 30^\\circ + \\cos 45^\\circ\\sin 30^\\circ$.',
            en: 'Apply compound-angle formula: $\\sin(45^\\circ + 30^\\circ) = \\sin 45^\\circ\\cos 30^\\circ + \\cos 45^\\circ\\sin 30^\\circ$.',
            why: { bm: 'Sinus tidak boleh diagihkan terus; guna $\\sin(A + B) = \\sin A\\cos B + \\cos A\\sin B$.', en: 'Sine is not linear; apply $\\sin(A + B) = \\sin A\\cos B + \\cos A\\sin B$.' }
          },
          {
            badge: 'K1',
            bm: 'Gantikan nilai surd sudut istimewa: $= \\left(\\frac{\\sqrt{2}}{2}\\right)\\left(\\frac{\\sqrt{3}}{2}\\right) + \\left(\\frac{\\sqrt{2}}{2}\\right)\\left(\\frac{1}{2}\\right)$.',
            en: 'Substitute special-angle surds: $= \\left(\\frac{\\sqrt{2}}{2}\\right)\\left(\\frac{\\sqrt{3}}{2}\\right) + \\left(\\frac{\\sqrt{2}}{2}\\right)\\left(\\frac{1}{2}\\right)$.',
            why: { bm: 'Sudut istimewa: $\\sin 45^\\circ = \\cos 45^\\circ = \\frac{\\sqrt{2}}{2}$, $\\cos 30^\\circ = \\frac{\\sqrt{3}}{2}$, $\\sin 30^\\circ = \\frac{1}{2}$.', en: 'Special angles: $\\sin 45^\\circ = \\cos 45^\\circ = \\frac{\\sqrt{2}}{2}$, $\\cos 30^\\circ = \\frac{\\sqrt{3}}{2}$, $\\sin 30^\\circ = \\frac{1}{2}$.' }
          },
          {
            badge: 'K1',
            bm: 'Darabkan pengangka dan penyebut: $= \\frac{\\sqrt{6}}{4} + \\frac{\\sqrt{2}}{4}$.',
            en: 'Multiply numerators and denominators: $= \\frac{\\sqrt{6}}{4} + \\frac{\\sqrt{2}}{4}$.',
            why: { bm: 'Darab surd di dalam punca: $\\sqrt{2} \\times \\sqrt{3} = \\sqrt{6}$, penyebut $2 \\times 2 = 4$.', en: 'Multiply surds inside roots: $\\sqrt{2} \\times \\sqrt{3} = \\sqrt{6}$, denominators $2 \\times 2 = 4$.' }
          },
          {
            badge: 'N1',
            bm: 'Gabung atas penyebut sepunya: $\\frac{\\sqrt{6} + \\sqrt{2}}{4}$.',
            en: 'Combine over common denominator: $\\frac{\\sqrt{6} + \\sqrt{2}}{4}$.',
            why: { bm: '$\\sqrt{6}$ dan $\\sqrt{2}$ bukan surd serupa, jadi jangan tambah menjadi $\\sqrt{8}$.', en: '$\\sqrt{6}$ and $\\sqrt{2}$ are unlike surds, so never combine them into $\\sqrt{8}$.' }
          }
        ]
      },
      {
        code: '6.6', marks: 3,
        topic: { bm: 'Rumus Tangen Sudut Berganda $\\tan 2A$', en: 'Double-Angle Tangent Formula $\\tan 2A$' },
        q: {
          bm: 'Diberi $\\tan A = \\frac{4}{3}$, cari nilai tepat bagi $\\tan 2A$. [3m]',
          en: 'Given $\\tan A = \\frac{4}{3}$, find the exact value of $\\tan 2A$. [3m]'
        },
        mistakes: {
          bm: [
            'Mendarab $\\tan A$ dengan $2$ secara terus ($\\frac{8}{3}$) tanpa penyebut $1 - \\tan^2 A$.',
            'Menulis $1 + \\tan^2 A$ pada penyebut bukannya $1 - \\tan^2 A$, atau lupa menguasaduakan $\\frac{4}{3} \\to \\frac{16}{9}$.'
          ],
          en: [
            'Simply doubling $\\tan A$ to $\\frac{8}{3}$ instead of dividing by $1 - \\tan^2 A$.',
            'Writing $1 + \\tan^2 A$ in the denominator instead of $1 - \\tan^2 A$, or failing to square $\\frac{4}{3} \\to \\frac{16}{9}$.'
          ]
        },
        scheme: [
          {
            badge: 'K1',
            bm: 'Nyatakan rumus dan ganti $\\tan A = \\frac{4}{3}$: $\\tan 2A = \\frac{2\\tan A}{1 - \\tan^2 A} = \\frac{2\\left(\\frac{4}{3}\\right)}{1 - \\left(\\frac{4}{3}\\right)^2}$.',
            en: 'State formula and substitute $\\tan A = \\frac{4}{3}$: $\\tan 2A = \\frac{2\\tan A}{1 - \\tan^2 A} = \\frac{2\\left(\\frac{4}{3}\\right)}{1 - \\left(\\frac{4}{3}\\right)^2}$.',
            why: { bm: 'Rumus tangen sudut berganda menggunakan tanda tolak pada penyebut.', en: 'The double-angle tangent formula uses a minus sign in the denominator.' }
          },
          {
            badge: 'K1',
            bm: 'Permudahkan pengangka dan penyebut berasingan: $= \\frac{\\frac{8}{3}}{1 - \\frac{16}{9}} = \\frac{\\frac{8}{3}}{\\frac{9}{9} - \\frac{16}{9}} = \\frac{8}{3} \\div \\left(-\\frac{7}{9}\\right)$.',
            en: 'Simplify numerator and denominator separately: $= \\frac{\\frac{8}{3}}{1 - \\frac{16}{9}} = \\frac{\\frac{8}{3}}{\\frac{9}{9} - \\frac{16}{9}} = \\frac{8}{3} \\div \\left(-\\frac{7}{9}\\right)$.',
            why: { bm: 'Tukar $1$ kepada $\\frac{9}{9}$ dahulu sebelum menolak $\\frac{16}{9}$.', en: 'Convert $1$ to $\\frac{9}{9}$ before subtracting $\\frac{16}{9}$.' }
          },
          {
            badge: 'K1',
            bm: 'Bahagi pecahan dengan mendarab songsangan: $= \\frac{8}{3} \\times \\left(-\\frac{9}{7}\\right) = \\frac{8 \\times (-3)}{7}$.',
            en: 'Divide fractions by multiplying the reciprocal: $= \\frac{8}{3} \\times \\left(-\\frac{9}{7}\\right) = \\frac{8 \\times (-3)}{7}$.',
            why: { bm: 'Permudahkan $9 \\div 3 = 3$ dahulu sebelum mendarab.', en: 'Simplify $9 \\div 3 = 3$ before multiplying.' }
          },
          {
            badge: 'N1',
            bm: '$-\\frac{24}{7}$.',
            en: '$-\\frac{24}{7}$.',
            why: { bm: 'Tanda negatif munasabah kerana $\\tan A = \\frac{4}{3} > 1$ bermakna $A > 45^\\circ$, jadi $2A > 90^\\circ$ berada dalam Sukuan II ($\\tan < 0$).', en: 'The negative sign makes sense since $\\tan A = \\frac{4}{3} > 1$ means $A > 45^\\circ$, so $2A > 90^\\circ$ lies in Quadrant II where $\\tan < 0$.' }
          }
        ]
      },
      {
        code: '6.7', marks: 4,
        topic: { bm: 'Identiti Melibatkan Sekan & Kosekan Kuasa Dua', en: 'Identity Involving $\\sec^2 x$ and $\\csc^2 x$' },
        q: {
          bm: 'Buktikan bahawa $\\sec^2 x + \\csc^2 x = \\sec^2 x\\csc^2 x$. [4m]',
          en: 'Prove that $\\sec^2 x + \\csc^2 x = \\sec^2 x\\csc^2 x$. [4m]'
        },
        mistakes: {
          bm: [
            'Gagal menyamakan penyebut sepunya $\\cos^2 x\\sin^2 x$ selepas menukar $\\sec^2 x$ dan $\\csc^2 x$.',
            'Tertukar pasangan salingan ($\\sec x = \\frac{1}{\\sin x}$ bukannya $\\frac{1}{\\cos x}$).'
          ],
          en: [
            'Failing to combine over common denominator $\\cos^2 x\\sin^2 x$ after converting $\\sec^2 x$ and $\\csc^2 x$.',
            'Confusing reciprocal pairs ($\\sec x = \\frac{1}{\\sin x}$ instead of $\\frac{1}{\\cos x}$).'
          ]
        },
        scheme: [
          {
            badge: 'K1',
            bm: 'Tukar LHS kepada sinus dan kosinus: $\\text{LHS} = \\frac{1}{\\cos^2 x} + \\frac{1}{\\sin^2 x}$.',
            en: 'Convert LHS to sine and cosine: $\\text{LHS} = \\frac{1}{\\cos^2 x} + \\frac{1}{\\sin^2 x}$.',
            why: { bm: 'Apabila tersekat pada bukti $\\sec/\\csc/\\cot$, tukar semuanya kepada $\\sin x$ dan $\\cos x$.', en: 'When stuck on $\\sec/\\csc/\\cot$ proofs, rewrite everything in terms of $\\sin x$ and $\\cos x$.' }
          },
          {
            badge: 'K1',
            bm: 'Gabung atas penyebut sepunya $\\cos^2 x\\sin^2 x$: $= \\frac{\\sin^2 x}{\\cos^2 x\\sin^2 x} + \\frac{\\cos^2 x}{\\cos^2 x\\sin^2 x} = \\frac{\\sin^2 x + \\cos^2 x}{\\cos^2 x\\sin^2 x}$.',
            en: 'Combine over common denominator $\\cos^2 x\\sin^2 x$: $= \\frac{\\sin^2 x}{\\cos^2 x\\sin^2 x} + \\frac{\\cos^2 x}{\\cos^2 x\\sin^2 x} = \\frac{\\sin^2 x + \\cos^2 x}{\\cos^2 x\\sin^2 x}$.',
            why: { bm: 'Darab silang pengangka untuk menggabungkan dua pecahan menjadi satu pecahan.', en: 'Cross-multiply numerators to merge two fractions into one.' }
          },
          {
            badge: 'K1',
            bm: 'Guna identiti Pythagoras $\\sin^2 x + \\cos^2 x = 1$: $= \\frac{1}{\\cos^2 x\\sin^2 x}$.',
            en: 'Apply Pythagorean identity $\\sin^2 x + \\cos^2 x = 1$: $= \\frac{1}{\\cos^2 x\\sin^2 x}$.',
            why: { bm: '$\\sin^2 x + \\cos^2 x = 1$ mempermudahkan pengangka terus kepada $1$.', en: '$\\sin^2 x + \\cos^2 x = 1$ collapses the numerator cleanly to $1$.' }
          },
          {
            badge: 'N1',
            bm: 'Pecahkan kepada hasil darab salingan: $= \\frac{1}{\\cos^2 x} \\times \\frac{1}{\\sin^2 x} = \\sec^2 x\\csc^2 x = \\text{RHS}$ (Terbukti).',
            en: 'Split into product of reciprocals: $= \\frac{1}{\\cos^2 x} \\times \\frac{1}{\\sin^2 x} = \\sec^2 x\\csc^2 x = \\text{RHS}$ (Proven).',
            why: { bm: 'Pecahan tunggal $\\frac{1}{ab}$ boleh dipisahkan kembali menjadi $\\frac{1}{a} \\times \\frac{1}{b}$.', en: 'A single fraction $\\frac{1}{ab}$ splits back into $\\frac{1}{a} \\times \\frac{1}{b}$.' }
          }
        ]
      },
      {
        code: '6.8', marks: 4,
        topic: { bm: 'Perangkap Membahagi Faktor Sifar dalam $\\sin 2x = \\cos x$', en: 'Zero-Factor Division Trap in $\\sin 2x = \\cos x$' },
        q: {
          bm: 'Selesaikan persamaan $\\sin 2x = \\cos x$ bagi julat $0 \\le x \\le 2\\pi$ (jawapan dalam sebutan $\\pi$). [4m]',
          en: 'Solve $\\sin 2x = \\cos x$ for $0 \\le x \\le 2\\pi$ (give answers in terms of $\\pi$). [4m]'
        },
        mistakes: {
          bm: [
            'Membahagi kedua-dua belah dengan $\\cos x$ lalu kehilangan dua punca $\\frac{\\pi}{2}$ dan $\\frac{3\\pi}{2}$.',
            'Memberi jawapan dalam darjah ($30^\\circ, 90^\\circ$) bukannya radian dalam sebutan $\\pi$.',
            'Tertinggal sudut Sukuan II $\\pi - \\frac{\\pi}{6} = \\frac{5\\pi}{6}$ atau punca $\\cos x = 0$ di $\\frac{3\\pi}{2}$.'
          ],
          en: [
            'Dividing both sides by $\\cos x$ and losing the roots $\\frac{\\pi}{2}$ and $\\frac{3\\pi}{2}$.',
            'Giving answers in degrees ($30^\\circ, 90^\\circ$) instead of radians in terms of $\\pi$.',
            'Missing Quadrant II angle $\\pi - \\frac{\\pi}{6} = \\frac{5\\pi}{6}$ or the second $\\cos x = 0$ root $\\frac{3\\pi}{2}$.'
          ]
        },
        scheme: [
          {
            badge: 'K1',
            bm: 'Ganti $\\sin 2x = 2\\sin x\\cos x$ dan pindah semua sebutan ke LHS: $2\\sin x\\cos x - \\cos x = 0$.',
            en: 'Substitute $\\sin 2x = 2\\sin x\\cos x$ and move all terms to LHS: $2\\sin x\\cos x - \\cos x = 0$.',
            why: { bm: 'Jangan sesekali membahagi dengan $\\cos x$ kerana $\\cos x$ boleh bernilai $0$; kumpulkan di satu sisi.', en: 'Never divide by $\\cos x$ when it can equal $0$; collect all terms on one side instead.' }
          },
          {
            badge: 'K1',
            bm: 'Faktorkan faktor sepunya $\\cos x$: $\\cos x(2\\sin x - 1) = 0 \\implies \\cos x = 0$ atau $\\sin x = \\frac{1}{2}$.',
            en: 'Factor out common $\\cos x$: $\\cos x(2\\sin x - 1) = 0 \\implies \\cos x = 0$ or $\\sin x = \\frac{1}{2}$.',
            why: { bm: 'Hukum hasil darab sifar mengekalkan kedua-dua set punca.', en: 'The zero-product rule preserves both sets of roots.' }
          },
          {
            badge: 'K1',
            bm: 'Selesaikan $\\cos x = 0$ pada $[0, 2\\pi]$: $x = \\frac{\\pi}{2},\\; \\frac{3\\pi}{2}$.',
            en: 'Solve $\\cos x = 0$ on $[0, 2\\pi]$: $x = \\frac{\\pi}{2},\\; \\frac{3\\pi}{2}$.',
            why: { bm: 'Pada graf kosinus, $y = 0$ berlaku pada $90^\\circ = \\frac{\\pi}{2}$ dan $270^\\circ = \\frac{3\\pi}{2}$.', en: 'On the cosine wave, $y = 0$ occurs at $90^\\circ = \\frac{\\pi}{2}$ and $270^\\circ = \\frac{3\\pi}{2}$.' }
          },
          {
            badge: 'K1',
            bm: 'Selesaikan $\\sin x = \\frac{1}{2}$ (Sukuan I & II, rujukan $\\frac{\\pi}{6}$): $x = \\frac{\\pi}{6},\\; \\pi - \\frac{\\pi}{6} = \\frac{5\\pi}{6}$.',
            en: 'Solve $\\sin x = \\frac{1}{2}$ (Quad I & II, ref angle $\\frac{\\pi}{6}$): $x = \\frac{\\pi}{6},\\; \\pi - \\frac{\\pi}{6} = \\frac{5\\pi}{6}$.',
            why: { bm: 'Sinus bernilai positif dalam Sukuan I dan Sukuan II.', en: 'Sine is positive in Quadrants I and II.' }
          },
          {
            badge: 'N1',
            bm: '$x = \\frac{\\pi}{6},\\; \\frac{\\pi}{2},\\; \\frac{5\\pi}{6},\\; \\frac{3\\pi}{2}$.',
            en: '$x = \\frac{\\pi}{6},\\; \\frac{\\pi}{2},\\; \\frac{5\\pi}{6},\\; \\frac{3\\pi}{2}$.',
            why: { bm: 'Kesemua $4$ punca berada dalam $[0, 2\\pi]$ dan dinyatakan dalam sebutan $\\pi$.', en: 'All $4$ roots lie in $[0, 2\\pi]$ and are expressed in terms of $\\pi$ as requested.' }
          }
        ]
      },
      {
        code: '6.9', marks: 3,
        topic: { bm: 'Amplitud & Tempoh Graf Nilai Mutlak $y = |\\sin x|$', en: 'Amplitude & Period of Modulus Graph $y = |\\sin x|$' },
        q: {
          bm: 'Nyatakan nilai maksimum, nilai minimum, dan tempoh (dalam radian) bagi fungsi $y = |\\sin x|$ untuk $0 \\le x \\le 2\\pi$. [3m]',
          en: 'State the maximum value, minimum value, and period (in radians) of $y = |\\sin x|$ for $0 \\le x \\le 2\\pi$. [3m]'
        },
        mistakes: {
          bm: [
            'Menyatakan tempoh masih $2\\pi$ sedangkan pantulan bahagian negatif ke atas membahagikan tempoh kepada $\\pi\\text{ rad}$.',
            'Menyatakan nilai minimum ialah $-1$ bukannya $0$ (nilai mutlak sentiasa $\\ge 0$).'
          ],
          en: [
            'Stating the period is still $2\\pi$ instead of $\\pi\\text{ rad}$ after the negative half reflects upward.',
            'Stating the minimum value is $-1$ instead of $0$ (modulus values are never negative).'
          ]
        },
        scheme: [
          {
            badge: 'K1',
            bm: 'Oleh sebab $-1 \\le \\sin x \\le 1$, nilai mutlak memantulkan nilai negatif ke atas: $0 \\le |\\sin x| \\le 1$.',
            en: 'Since $-1 \\le \\sin x \\le 1$, taking absolute value flips negative values upward: $0 \\le |\\sin x| \\le 1$.',
            why: { bm: '$|\\text{negatif}| \\ge 0$, jadi titik terendah menjadi $0$ pada $x = 0, \\pi, 2\\pi$, manakala puncak mencapai $|-1| = 1$.', en: '$|\\text{negative}| \\ge 0$, so the lowest point becomes $0$ at $x = 0, \\pi, 2\\pi$, while peaks reach $|-1| = 1$.' }
          },
          {
            badge: 'N1',
            bm: 'Nilai maksimum $= 1$, nilai minimum $= 0$.',
            en: 'Maximum value $= 1$, minimum value $= 0$.',
            why: { bm: 'Amplitud kekal $1$, tetapi graf tidak boleh turun di bawah paksi-$x$ ($y = 0$).', en: 'Amplitude stays $1$, while the trough cannot drop below $y = 0$.' }
          },
          {
            badge: 'N1',
            bm: 'Tempoh (kala) $= \\pi\\text{ rad}$.',
            en: 'Period $= \\pi\\text{ rad}$.',
            why: { bm: 'Pada $[0, 2\\pi]$, pantulan ke atas membentuk $2$ lengkungan positif seiras, jadi satu kitaran berulang setiap $\\frac{2\\pi}{2} = \\pi\\text{ rad}$.', en: 'On $[0, 2\\pi]$, upward reflection creates $2$ identical positive arches, so one cycle repeats every $\\frac{2\\pi}{2} = \\pi\\text{ rad}$.' }
          }
        ]
      },
      {
        code: '6.10', marks: 4,
        topic: { bm: 'Pemodelan Kedalaman Pasang Surut Air Laut', en: 'Tidal Water Depth Trigonometric Modelling' },
        q: {
          bm: 'Kedalaman air di sebuah jeti dimodelkan oleh $h(t) = 4 + 3\\cos\\left(\\frac{\\pi t}{6}\\right)\\text{ meter}$, dengan $t$ ialah masa dalam jam selepas tengah malam. Cari kedalaman maksimum air dan masa pertama kali air mencapai kedalaman minimum. [4m]',
          en: 'Water depth at a jetty is modelled by $h(t) = 4 + 3\\cos\\left(\\frac{\\pi t}{6}\\right)\\text{ m}$, where $t$ is hours after midnight. Find the maximum depth and the first time minimum depth occurs. [4m]'
        },
        mistakes: {
          bm: [
            'Menyamakan $\\cos\\left(\\frac{\\pi t}{6}\\right) = 0$ bukannya $-1$ untuk kedalaman minimum.',
            'Menggunakan mod darjah bukannya mod radian apabila menyelesaikan $\\frac{\\pi t}{6} = \\pi$.'
          ],
          en: [
            'Setting $\\cos\\left(\\frac{\\pi t}{6}\\right) = 0$ instead of $-1$ for minimum depth.',
            'Using degree mode instead of radian mode when solving $\\frac{\\pi t}{6} = \\pi$.'
          ]
        },
        scheme: [
          {
            badge: 'N1',
            bm: 'Kedalaman maksimum berlaku apabila $\\cos\\left(\\frac{\\pi t}{6}\\right) = +1$: $h_{\\max} = 4 + 3(1) = 7\\text{ m}$.',
            en: 'Maximum depth occurs when $\\cos\\left(\\frac{\\pi t}{6}\\right) = +1$: $h_{\\max} = 4 + 3(1) = 7\\text{ m}$.',
            why: { bm: 'Oleh sebab $-1 \\le \\cos\\theta \\le 1$, nilai terbesar bagi $4 + 3\\cos\\theta$ ialah $4 + 3(1)$.', en: 'Since $-1 \\le \\cos\\theta \\le 1$, the largest value of $4 + 3\\cos\\theta$ is $4 + 3(1)$.' }
          },
          {
            badge: 'K1',
            bm: 'Kedalaman minimum ($h_{\\min} = 4 + 3(-1) = 1\\text{ m}$) berlaku buat pertama kali apabila $\\cos\\left(\\frac{\\pi t}{6}\\right) = -1$.',
            en: 'Minimum depth ($h_{\\min} = 4 + 3(-1) = 1\\text{ m}$) first occurs when $\\cos\\left(\\frac{\\pi t}{6}\\right) = -1$.',
            why: { bm: 'Kosinus mencapai nilai terendahnya $-1$ pada sudut $\\pi\\text{ rad}$.', en: 'Cosine reaches its lowest value $-1$ at $\\pi\\text{ rad}$.' }
          },
          {
            badge: 'K1',
            bm: 'Samakan sudut kepada $\\pi$ pertama bagi $t \\ge 0$: $\\frac{\\pi t}{6} = \\pi \\implies t = \\frac{6\\pi}{\\pi}$.',
            en: 'Equate angle to first $\\pi$ for $t \\ge 0$: $\\frac{\\pi t}{6} = \\pi \\implies t = \\frac{6\\pi}{\\pi}$.',
            why: { bm: 'Dalam mod radian, sudut positif pertama dengan $\\cos = -1$ ialah $\\pi$.', en: 'In radian mode, the first positive angle with $\\cos = -1$ is $\\pi$.' }
          },
          {
            badge: 'N1',
            bm: '$t = 6\\text{ jam}$ ($6:00\\text{ pagi}$).',
            en: '$t = 6\\text{ hours}$ ($6:00\\text{ a.m.}$).',
            why: { bm: 'Memansuhkan $\\pi$ memberi $6$ jam selepas tengah malam.', en: 'Cancelling $\\pi$ gives $6$ hours after midnight.' }
          }
        ]
      }
    ],

    // =========================================================================
    // TINGKATAN 5 BAB 7: PENGATURCARAAN LINEAR (10 SOALAN)
    // =========================================================================
    'f5-c7': [
      {
        code: '7.1', marks: 4,
        topic: { bm: 'Menterjemah Syarat (Kekangan) Perniagaan kepada Ketaksamaan Linear', en: 'Translating Business Constraints into Inequalities' },
        q: {
          bm: 'Sebuah bengkel menghasilkan $x$ buah kerusi kayu dan $y$ buah kerusi plastik sehari berdasarkan syarat-syarat (kekangan) berikut:\nI: Jumlah pengeluaran tidak melebihi $100$ buah.\nII: Bilangan kerusi kayu adalah sekurang-kurangnya separuh daripada kerusi plastik.\nIII: Jumlah kos pengeluaran sekurang-kurangnya $\\text{RM }1600$ (kos seunit kayu $\\text{RM }40$, plastik $\\text{RM }20$).\nTulis tiga ketaksamaan linear selain $x \\ge 0$ dan $y \\ge 0$. [4m]',
          en: 'A workshop makes $x$ wooden chairs and $y$ plastic chairs daily:\nI: Total output does not exceed $100$.\nII: Wooden chairs are at least half the plastic chairs.\nIII: Total cost is at least $\\text{RM }1600$ ($\\text{RM }40$ per wooden, $\\text{RM }20$ per plastic).\nWrite three linear inequalities other than $x \\ge 0, y \\ge 0$. [4m]'
        },
        mistakes: {
          bm: [
            'Terbalik simbol $\\le$ ("tidak melebihi") dan $\\ge$ ("sekurang-kurangnya").',
            'Menulis $y \\ge \\frac{1}{2}x$ bukannya $x \\ge \\frac{1}{2}y$ bagi syarat "kerusi kayu ($x$) sekurang-kurangnya separuh kerusi plastik ($y$)".'
          ],
          en: [
            'Reversing $\\le$ ("does not exceed") and $\\ge$ ("at least").',
            'Writing $y \\ge \\frac{1}{2}x$ instead of $x \\ge \\frac{1}{2}y$ for "wooden ($x$) at least half plastic ($y$)".'
          ]
        },
        scheme: [
          {
            badge: 'N1',
            bm: 'I ("jumlah tidak melebihi $100$"): $x + y \\le 100$.',
            en: 'I ("total does not exceed $100$"): $x + y \\le 100$.',
            why: { bm: '"Tidak melebihi" membenarkan nilai sehingga dan termasuk $100$, maka guna $\\le$.', en: '"Does not exceed" allows up to and including $100$, so use $\\le$.' }
          },
          {
            badge: 'N1',
            bm: 'II ("kerusi kayu $x$ sekurang-kurangnya separuh plastik $y$"): $x \\ge \\frac{1}{2}y$ (atau $2x \\ge y$, $y \\le 2x$).',
            en: 'II ("wooden $x$ at least half of plastic $y$"): $x \\ge \\frac{1}{2}y$ (or $2x \\ge y$, $y \\le 2x$).',
            why: { bm: 'Terjemah perkataan demi perkataan mengikut urutan: $x$ [kayu] $\\ge$ [sekurang-kurangnya] $\\frac{1}{2}y$ [separuh plastik].', en: 'Translate word-for-word in order: $x$ [wooden] $\\ge$ [at least] $\\frac{1}{2}y$ [half plastic].' }
          },
          {
            badge: 'K1',
            bm: 'III ("jumlah kos sekurang-kurangnya $\\text{RM }1600$"): $40x + 20y \\ge 1600$.',
            en: 'III ("total cost at least $\\text{RM }1600$"): $40x + 20y \\ge 1600$.',
            why: { bm: 'Jumlah kos $= \\text{harga seunit} \\times \\text{kuantiti}$ bagi kedua-dua jenis; "sekurang-kurangnya" ialah $\\ge$.', en: 'Total cost $= \\text{unit price} \\times \\text{quantity}$ summed for both chairs; "at least" means $\\ge$.' }
          },
          {
            badge: 'N1',
            bm: 'Bahagi ketaksamaan III dengan $20$: $\\frac{40x}{20} + \\frac{20y}{20} \\ge \\frac{1600}{20} \\implies 2x + y \\ge 80$.',
            en: 'Divide inequality III by $20$: $\\frac{40x}{20} + \\frac{20y}{20} \\ge \\frac{1600}{20} \\implies 2x + y \\ge 80$.',
            why: { bm: 'Membahagi dengan nombor positif $20$ mempermudahkan sempadan tanpa menukar arah $\\ge$.', en: 'Dividing by positive $20$ simplifies the boundary without flipping $\\ge$.' }
          }
        ]
      },
      {
        code: '7.2', marks: 4,
        topic: { bm: 'Keuntungan Maksimum pada Bucu Rantau Berlorek $R$ (*Feasible Region*)', en: 'Maximum Profit at Vertices of Feasible Region $R$' },
        q: {
          bm: 'Rantau berlorek $R$ (rantau yang memenuhi semua syarat) mempunyai bucu-bucu pada $(20, 40)$, $(60, 20)$, dan $(40, 60)$. Cari keuntungan maksimum bagi rumus keuntungan (fungsi objektif) $P = 15x + 25y$ dan nyatakan koordinat titik optimumnya. [4m]',
          en: 'Feasible region $R$ has vertices $(20, 40)$, $(60, 20)$, and $(40, 60)$. Find the maximum profit for $P = 15x + 25y$ and state the optimal point. [4m]'
        },
        mistakes: {
          bm: [
            'Meneka bucu secara pandangan mata tanpa menggantikan semua bucu ke dalam $P = 15x + 25y$.',
            'Tertukar koordinat $x$ dan $y$ atau pekalinya (contoh mengira $15(40) + 25(20)$).'
          ],
          en: [
            'Guessing a vertex visually without substituting all vertices into $P = 15x + 25y$.',
            'Swapping $x$ and $y$ values or coefficients (e.g. computing $15(40) + 25(20)$).'
          ]
        },
        scheme: [
          {
            badge: 'K1',
            bm: 'Uji $(20, 40)$: $P = 15(20) + 25(40) = 300 + 1000 = 1300$.',
            en: 'Test $(20, 40)$: $P = 15(20) + 25(40) = 300 + 1000 = 1300$.',
            why: { bm: 'Sentiasa uji setiap bucu sudut bagi rantau tersaur $R$.', en: 'Always test every corner vertex of feasible region $R$.' }
          },
          {
            badge: 'K1',
            bm: 'Uji $(60, 20)$: $P = 15(60) + 25(20) = 900 + 500 = 1400$.',
            en: 'Test $(60, 20)$: $P = 15(60) + 25(20) = 900 + 500 = 1400$.',
            why: { bm: 'Bandingkan setiap bucu secara sistematik.', en: 'Compare each vertex systematically.' }
          },
          {
            badge: 'K1',
            bm: 'Uji $(40, 60)$: $P = 15(40) + 25(60) = 600 + 1500 = 2100$.',
            en: 'Test $(40, 60)$: $P = 15(40) + 25(60) = 600 + 1500 = 2100$.',
            why: { bm: 'Darab dahulu sebelum menambah kedua-dua hasil.', en: 'Multiply first before adding.' }
          },
          {
            badge: 'N1',
            bm: 'Keuntungan maksimum $= \\text{RM }2100$ pada titik optimum $(40, 60)$.',
            en: 'Maximum profit $= \\text{RM }2100$ at optimal point $(40, 60)$.',
            why: { bm: '$2100$ ialah nilai terbesar antara $1300, 1400, 2100$ (RM ialah unit mata wang piawai bagi keuntungan).', en: '$2100$ is the largest among $1300, 1400, 2100$ (RM is the standard currency unit for profit).' }
          }
        ]
      },
      {
        code: '7.3', marks: 3,
        topic: { bm: 'Julat Nilai $y$ daripada Keratan Tegak Rantau $R$', en: 'Range of $y$ Along a Vertical Slice of Region $R$' },
        q: {
          bm: 'Rantau berlorek $R$ dibatasi oleh $y \\ge x - 10$, $x + y \\le 90$, dan $y \\ge 15$. Jika diberi $x = 30$, cari julat nilai $y$ yang memuaskan rantau $R$. [3m]',
          en: 'Feasible region $R$ is bounded by $y \\ge x - 10$, $x + y \\le 90$, and $y \\ge 15$. Given $x = 30$, find the range of $y$ inside $R$. [3m]'
        },
        mistakes: {
          bm: [
            'Mengambil had bawah $y \\ge 15$ tanpa menyemak bahawa pada $x = 30$, syarat $y \\ge 30 - 10 = 20$ lebih ketat.',
            'Menulis $15 \\le y \\le 20$ atau terbalik tanda $\\ge$ dan $\\le$.'
          ],
          en: [
            'Taking $y \\ge 15$ as the lower bound without checking $y \\ge 30 - 10 = 20$.',
            'Writing $15 \\le y \\le 20$ or reversing $\\ge$ and $\\le$.'
          ]
        },
        scheme: [
          {
            badge: 'K1',
            bm: 'Gantikan $x = 30$ ke dalam ketiga-tiga ketaksamaan: $y \\ge 30 - 10 \\implies y \\ge 20$; $30 + y \\le 90 \\implies y \\le 60$; dan $y \\ge 15$.',
            en: 'Substitute $x = 30$ into all three inequalities: $y \\ge 30 - 10 \\implies y \\ge 20$; $30 + y \\le 90 \\implies y \\le 60$; and $y \\ge 15$.',
            why: { bm: 'Titik $(30, y)$ di dalam $R$ mesti memenuhi SEMUA sempadan secara serentak.', en: 'A point $(30, y)$ inside $R$ must satisfy ALL boundaries simultaneously.' }
          },
          {
            badge: 'K1',
            bm: 'Bandingkan dua had bawah: $y \\ge 20$ dan $y \\ge 15 \\implies$ had bawah lebih ketat ialah $y \\ge 20$.',
            en: 'Compare the two lower bounds: $y \\ge 20$ and $y \\ge 15 \\implies$ stricter lower bound is $y \\ge 20$.',
            why: { bm: 'Sebarang $y$ antara $15$ dan $19$ gagal syarat $y \\ge 20$, jadi ambil had bawah yang lebih besar.', en: 'Any $y$ between $15$ and $19$ fails $y \\ge 20$, so we must take the larger lower bound.' }
          },
          {
            badge: 'K1',
            bm: 'Gabungkan had bawah dan had atas: $y \\ge 20$ dan $y \\le 60$.',
            en: 'Combine lower and upper bounds: $y \\ge 20$ and $y \\le 60$.',
            why: { bm: 'Semak $20 \\le 60$ membentuk selang yang sah.', en: 'Verify $20 \\le 60$ forms a valid non-empty interval.' }
          },
          {
            badge: 'N1',
            bm: '$20 \\le y \\le 60$.',
            en: '$20 \\le y \\le 60$.',
            why: { bm: 'Semua nilai daripada $20$ hingga $60$ termasuk sempadan memenuhi kesemua $3$ syarat pada $x = 30$.', en: 'All values from $20$ to $60$ inclusive satisfy all $3$ conditions at $x = 30$.' }
          }
        ]
      },
      {
        code: '7.4', marks: 4,
        topic: { bm: 'Mencari Kos Minimum pada Bucu Rantau Berlorek $R$', en: 'Minimizing a Cost Function Over Region $R$' },
        q: {
          bm: 'Bucu-bucu bagi suatu rantau berlorek $R$ ialah $(10, 30)$, $(20, 15)$, dan $(40, 10)$. Cari kos minimum bagi fungsi kos $C = 2x + 3y$. [4m]',
          en: 'The vertices of feasible region $R$ are $(10, 30)$, $(20, 15)$, and $(40, 10)$. Find the minimum cost for $C = 2x + 3y$. [4m]'
        },
        mistakes: {
          bm: [
            'Memilih $(10, 30)$ secara membuta tuli kerana $x = 10$ paling kecil tanpa mengira $C = 2x + 3y$.',
            'Memaksimumkan ($110$) bukannya meminimumkan ($85$).'
          ],
          en: [
            'Picking $(10, 30)$ blindly because $x = 10$ is smallest without evaluating $C = 2x + 3y$.',
            'Maximizing ($110$) instead of minimizing ($85$).'
          ]
        },
        scheme: [
          {
            badge: 'K1',
            bm: 'Nilaikan $C$ pada $(10, 30)$: $C = 2(10) + 3(30) = 20 + 90 = 110$.',
            en: 'Evaluate $C$ at $(10, 30)$: $C = 2(10) + 3(30) = 20 + 90 = 110$.',
            why: { bm: 'Kos bergantung pada jumlah berwajaran $2x + 3y$, bukan nilai $x$ semata-mata.', en: 'Cost depends on the weighted sum $2x + 3y$, not on $x$ alone.' }
          },
          {
            badge: 'K1',
            bm: 'Nilaikan $C$ pada $(20, 15)$: $C = 2(20) + 3(15) = 40 + 45 = 85$.',
            en: 'Evaluate $C$ at $(20, 15)$: $C = 2(20) + 3(15) = 40 + 45 = 85$.',
            why: { bm: 'Uji setiap bucu untuk mencari nilai minimum sebenar.', en: 'Test every vertex to find the true minimum.' }
          },
          {
            badge: 'K1',
            bm: 'Nilaikan $C$ pada $(40, 10)$: $C = 2(40) + 3(10) = 80 + 30 = 110$.',
            en: 'Evaluate $C$ at $(40, 10)$: $C = 2(40) + 3(10) = 80 + 30 = 110$.',
            why: { bm: 'Sahkan tiada bucu lain memberi nilai lebih kecil.', en: 'Confirm no other vertex yields a smaller value.' }
          },
          {
            badge: 'N1',
            bm: 'Kos minimum $= \\text{RM }85$ pada $(20, 15)$.',
            en: 'Minimum cost $= \\text{RM }85$ at $(20, 15)$.',
            why: { bm: '$85 < 110$; nyatakan kedua-dua nilai kos minimum dan koordinat bucu $(20, 15)$.', en: '$85 < 110$; state both the minimum cost and the vertex $(20, 15)$.' }
          }
        ]
      },
      {
        code: '7.5', marks: 2,
        topic: { bm: 'Peraturan Garis Padu vs Garis Putus-putus', en: 'Solid vs Dashed Boundary Line Convention' },
        q: {
          bm: 'Nyatakan perbezaan penggunaan garis padu dan garis putus-putus semasa melukis sempadan rantau ketaksamaan pengaturcaraan linear, serta kesannya terhadap pemilihan titik bucu. [2m]',
          en: 'State when to draw a solid line versus a dashed line in linear programming, and how it affects choosing a vertex on that boundary. [2m]'
        },
        mistakes: {
          bm: [
            'Melukis garis padu bagi ketaksamaan ketat $<$ atau $>$.',
            'Memilih bucu optimum yang terletak di atas garis putus-putus sedangkan titik pada garis putus-putus tidak termasuk dalam $R$.'
          ],
          en: [
            'Drawing a solid line for strict $<$ or $>$.',
            'Choosing an optimal vertex lying on a dashed boundary line even though dashed points are excluded from $R$.'
          ]
        },
        scheme: [
          {
            badge: 'K1',
            bm: '**Garis padu** bagi $\\le$ atau $\\ge$: titik yang terletak di atas garis memenuhi persamaan dan **termasuk** dalam rantau $R$.',
            en: '**Solid line** for $\\le$ or $\\ge$: points lying on the line satisfy the equation and **are included** in region $R$.',
            why: { bm: 'Garis "sama dengan" pada $\\le, \\ge$ bermakna sempadan itu sendiri sah.', en: 'The "equal to" bar in $\\le, \\ge$ means the boundary itself is valid.' }
          },
          {
            badge: 'K1',
            bm: '**Garis putus-putus** bagi $<$ atau $>$: titik di atas garis **tidak termasuk** dalam rantau $R$.',
            en: '**Dashed line** for $<$ or $>$: points on the line **are excluded** from region $R$.',
            why: { bm: 'Ketaksamaan ketat mengecualikan titik persamaan di atas sempadan.', en: 'Strict inequalities exclude equality along the boundary.' }
          },
          {
            badge: 'N1',
            bm: 'Kesan pemilihan bucu: bucu pada garis padu boleh dipilih sebagai optimum, manakala sebarang titik pada garis putus-putus adalah tidak sah dan mesti dikecualikan (uji titik integer sah terdekat di dalam $R$).',
            en: 'Effect on vertex choice: a vertex on a solid line may be chosen as optimal, whereas any point on a dashed line is invalid and must be excluded (test the nearest valid integer point inside $R$ instead).',
            why: { bm: 'Penyelesaian optimum wajib memenuhi kesemua kekangan termasuk ketaksamaan ketat.', en: 'An optimal solution must satisfy all constraints, including strict ones.' }
          }
        ]
      },
      {
        code: '7.6', marks: 3,
        topic: { bm: 'Kaedah Pembaris Menggelongsor Garis Pencari ($k = ax + by$)', en: 'Sliding Objective Line Method' },
        q: {
          bm: 'Terangkan bagaimana garis pencari (garis objektif) digunakan pada kertas graf untuk mencari nilai maksimum bagi $k = 3x + 4y$ dalam rantau $R$. [3m]',
          en: 'Explain how an objective line is used graphically to find the maximum of $k = 3x + 4y$ in region $R$. [3m]'
        },
        mistakes: {
          bm: [
            'Melukis garis rujukan dengan kecerunan positif $+\\frac{3}{4}$ bukannya $-\\frac{3}{4}$.',
            'Menggelongsor menuju asalan (yang meminimumkan $k$) bukannya menjauhi asalan (yang memaksimumkan $k$).'
          ],
          en: [
            'Plotting the reference line with positive gradient $+\\frac{3}{4}$ instead of $-\\frac{3}{4}$.',
            'Sliding toward the origin (which minimizes $k$) instead of away from the origin (which maximizes $k$).'
          ]
        },
        scheme: [
          {
            badge: 'K1',
            bm: 'Pilih satu gandaan sesuai bagi $3$ dan $4$ (cth. $c = 12$): $3x + 4y = 12$, memberi pintasan $(4, 0)$ dan $(0, 3)$ dengan kecerunan $m = -\\frac{3}{4}$.',
            en: 'Pick a convenient multiple of $3$ and $4$ (e.g. $c = 12$): $3x + 4y = 12$, giving intercepts $(4, 0)$ and $(0, 3)$ with gradient $m = -\\frac{3}{4}$.',
            why: { bm: 'Menggunakan $\\text{GSTK}(3, 4) = 12$ memberi pintasan nombor bulat yang tepat untuk diplot.', en: 'Using $\\text{LCM}(3, 4) = 12$ gives clean integer intercepts to plot accurately.' }
          },
          {
            badge: 'K1',
            bm: 'Lukis garis rujukan putus-putus ini di atas graf dan sejajarkan pembaris sepanjang garis tersebut.',
            en: 'Draw this dashed reference line on the graph and align a ruler along it.',
            why: { bm: 'Setiap anjakan selari mengekalkan kecerunan $-\\frac{3}{4}$ dan hanya mengubah nilai $k$.', en: 'Every parallel shift preserves gradient $-\\frac{3}{4}$, changing only the value of $k$.' }
          },
          {
            badge: 'K1',
            bm: 'Gelongsor pembaris secara **selari menjauhi asalan $(0, 0)$** (ke kanan/atas) sehingga titik/bucu terakhir di dalam $R$ sebelum keluar dari $R$.',
            en: 'Slide the ruler **parallel away from $(0, 0)$** (to the right/upward) until the last point or vertex inside $R$ before leaving $R$.',
            why: { bm: 'Oleh sebab pekali $+3, +4 > 0$, bergerak menjauhi $(0, 0)$ meningkatkan nilai $k = 3x + 4y$.', en: 'Since coefficients $+3, +4 > 0$, moving away from $(0, 0)$ increases $k = 3x + 4y$.' }
          },
          {
            badge: 'N1',
            bm: 'Baca koordinat $(x, y)$ bagi bucu sentuhan terakhir dalam $R$ dan gantikan ke dalam $k = 3x + 4y$.',
            en: 'Read the coordinates $(x, y)$ of that last touching vertex in $R$ and substitute into $k = 3x + 4y$.',
            why: { bm: 'Garis selari pada bucu tersebut memberi nilai maksimum tersaur bagi $k$.', en: 'The parallel line at that vertex gives the maximum feasible value of $k$.' }
          }
        ]
      },
      {
        code: '7.7', marks: 3,
        topic: { bm: 'Menterjemah Frasa "Melebihi ... Sebanyak Paling Banyak"', en: 'Translating "Exceeds ... By At Most"' },
        q: {
          bm: 'Bilangan peserta perempuan ($y$) melebihi tiga kali bilangan peserta lelaki ($x$) sebanyak paling banyak $5$ orang (dengan $y > 3x$). Tulis ketaksamaan linear yang mewakili situasi ini. [3m]',
          en: 'The number of female participants ($y$) exceeds three times the male participants ($x$) by at most $5$ (given $y > 3x$). Write the linear inequality. [3m]'
        },
        mistakes: {
          bm: [
            'Menulis $y - 3x \\ge 5$ kerana perkataan "melebihi", sedangkan "paling banyak $5$" bermaksud $\\le 5$.',
            'Menulis $3x - y \\le 5$ (terbalik urutan walaupun $y > 3x$).'
          ],
          en: [
            'Writing $y - 3x \\ge 5$ due to the word "exceeds", ignoring "at most $5$" ($\\le 5$).',
            'Writing $3x - y \\le 5$ (reversing order even though $y > 3x$).'
          ]
        },
        scheme: [
          {
            badge: 'K1',
            bm: 'Ungkapkan lebihan: oleh sebab $y > 3x$, beza lebihan $y$ berbanding $3x$ ialah $y - 3x$.',
            en: 'Express the excess: since $y > 3x$, the amount by which $y$ exceeds $3x$ is $y - 3x$.',
            why: { bm: 'Kuantiti lebih besar tolak kuantiti lebih kecil memberi beza positif.', en: 'Larger quantity minus smaller quantity gives a positive difference.' }
          },
          {
            badge: 'K1',
            bm: 'Terjemahkan "paling banyak $5$" sebagai $\\le 5$: $y - 3x \\le 5$.',
            en: 'Translate "at most $5$" as $\\le 5$: $y - 3x \\le 5$.',
            why: { bm: '"Paling banyak $5$" bermaksud beza boleh menjadi $5$ atau kurang, tidak melebihi $5$.', en: '"At most $5$" means the gap can be $5$ or less, never exceeding $5$.' }
          },
          {
            badge: 'N1',
            bm: '$y - 3x \\le 5$ (atau secara setara $y \\le 3x + 5$).',
            en: '$y - 3x \\le 5$ (equivalently $y \\le 3x + 5$).',
            why: { bm: 'Semak dengan contoh: jika $x = 10$, $3x = 30$, maka $y$ boleh mencapai sehingga $35$.', en: 'Check with a sample: if $x = 10$, $3x = 30$, so $y$ can go up to $35$.' }
          }
        ]
      },
      {
        code: '7.8', marks: 4,
        topic: { bm: 'Syarat Jawapan Nombor Bulat (Integer) bagi Bilangan Objek', en: 'Integer Requirement for Discrete Quantities' },
        q: {
          bm: 'Dalam masalah menyewa $x$ buah bas dan $y$ buah van bagi memaksimumkan kapasiti penumpang, bucu persilangan tertinggi dalam rantau $R$ ialah $(15.2, 22.8)$ di bawah syarat $x + y \\le 38$ dan $2y \\le 3x$. Terangkan cara menentukan pasangan $(x, y)$ sebenar dan beri satu calon titik integer yang sah. [4m]',
          en: 'When hiring $x$ buses and $y$ vans, the highest vertex of $R$ is $(15.2, 22.8)$ subject to $x + y \\le 38$ and $2y \\le 3x$. Explain how to pick the valid optimal solution and state a valid integer point nearby. [4m]'
        },
        mistakes: {
          bm: [
            'Membundarkan $(15.2, 22.8)$ terus kepada $(15, 23)$ tanpa menguji syarat — $(15, 23)$ gagal $2y \\le 3x$ ($46 > 45$).',
            'Menerima nilai perpuluhan seperti $15.2$ bas dan $22.8$ van.'
          ],
          en: [
            'Rounding $(15.2, 22.8)$ blindly to $(15, 23)$ without checking constraints — $(15, 23)$ fails $2y \\le 3x$ ($46 > 45$).',
            'Accepting decimal values like $15.2$ buses and $22.8$ vans.'
          ]
        },
        scheme: [
          {
            badge: 'K1',
            bm: 'Tolak $(15.2, 22.8)$ kerana $x$ (bas) dan $y$ (van) mesti **integer** bukan negatif.',
            en: 'Reject $(15.2, 22.8)$ because $x$ (buses) and $y$ (vans) must be non-negative **integers**.',
            why: { bm: 'Kita tidak boleh menyewa $0.2$ buah bas atau $0.8$ buah van.', en: 'You cannot hire $0.2$ of a bus or $0.8$ of a van.' }
          },
          {
            badge: 'K1',
            bm: 'Semak mengapa pembundaran $(15, 23)$ gagal: $x + y = 38 \\le 38$, TETAPI $2y = 2(23) = 46 > 3x = 3(15) = 45$ (di luar $R$!).',
            en: 'Check why naive rounding $(15, 23)$ fails: $x + y = 38 \\le 38$, BUT $2y = 2(23) = 46 > 3x = 3(15) = 45$ (outside $R$!).',
            why: { bm: 'Sentiasa gantikan calon yang dibundarkan ke dalam SETIAP ketaksamaan untuk memastikan ia kekal di dalam $R$.', en: 'Always plug rounded candidates into EVERY inequality to confirm they stay inside $R$.' }
          },
          {
            badge: 'K1',
            bm: 'Uji integer berhampiran $(16, 22)$: $16 + 22 = 38 \\le 38$ (Benar) dan $2(22) = 44 \\le 3(16) = 48$ (Benar).',
            en: 'Test nearby integer $(16, 22)$: $16 + 22 = 38 \\le 38$ (True) and $2(22) = 44 \\le 3(16) = 48$ (True).',
            why: { bm: 'Bergerak sedikit ke dalam $R$ memastikan kedua-dua kekangan dipenuhi.', en: 'Moving slightly inside $R$ keeps both constraints satisfied.' }
          },
          {
            badge: 'N1',
            bm: 'Calon integer sah di dalam $R$ termasuk $(16, 22)$ (atau $(15, 22)$ di mana $37 \\le 38$ dan $44 \\le 45$); pilih titik integer sah yang memberi kapasiti tertinggi.',
            en: 'Valid integer candidates inside $R$ include $(16, 22)$ (or $(15, 22)$ where $37 \\le 38$ and $44 \\le 45$); choose the valid integer point yielding highest capacity.',
            why: { bm: '$(16, 22)$ mengatasi $(15, 22)$ dan mengekalkan sempadan $x + y = 38$.', en: '$(16, 22)$ dominates $(15, 22)$ while keeping $x + y = 38$ at the boundary.' }
          }
        ]
      },
      {
        code: '7.9', marks: 4,
        topic: { bm: 'Syarat Peratusan daripada Jumlah Keseluruhan', en: 'Percentage of Total Output Constraint' },
        q: {
          bm: 'Sebuah kilang menetapkan bilangan produk gred premium ($x$) mestilah sekurang-kurangnya $20\\%$ daripada jumlah keseluruhan produk ($x + y$). Permudahkan ketaksamaan ini kepada bentuk termudah. [4m]',
          en: 'Premium units ($x$) must be at least $20\\%$ of total units ($x + y$). Write and simplify this linear inequality. [4m]'
        },
        mistakes: {
          bm: [
            'Menulis $x \\ge 0.2y$ ($20\\%$ daripada $y$ sahaja) bukannya $x \\ge 0.2(x + y)$ ($20\\%$ daripada **jumlah**).',
            'Lupa mempermudahkan $5x \\ge x + y$ dengan menolak $x$ pada kedua-dua belah.'
          ],
          en: [
            'Writing $x \\ge 0.2y$ ($20\\%$ of $y$ alone) instead of $x \\ge 0.2(x + y)$ ($20\\%$ of **total**).',
            'Forgetting to simplify $5x \\ge x + y$ by subtracting $x$ on both sides.'
          ]
        },
        scheme: [
          {
            badge: 'K1',
            bm: 'Terjemahkan "sekurang-kurangnya $20\\%$ daripada jumlah $(x + y)$": $x \\ge \\frac{20}{100}(x + y)$.',
            en: 'Translate "at least $20\\%$ of total $(x + y)$": $x \\ge \\frac{20}{100}(x + y)$.',
            why: { bm: '"Jumlah keseluruhan produk" ialah $(x + y)$, bukan $y$ sahaja.', en: '"Total units" is $(x + y)$, not $y$ alone.' }
          },
          {
            badge: 'K1',
            bm: 'Permudahkan $\\frac{20}{100} = \\frac{1}{5}$ dan darab kedua-dua belah dengan $5$: $x \\ge \\frac{1}{5}(x + y) \\implies 5x \\ge x + y$.',
            en: 'Simplify $\\frac{20}{100} = \\frac{1}{5}$ and multiply both sides by $5$: $x \\ge \\frac{1}{5}(x + y) \\implies 5x \\ge x + y$.',
            why: { bm: 'Menghapuskan penyebut pecahan mengelakkan kesilapan perpuluhan.', en: 'Clearing the fraction removes decimals cleanly.' }
          },
          {
            badge: 'K1',
            bm: 'Tolak $x$ daripada kedua-dua belah: $5x - x \\ge y \\implies 4x \\ge y$.',
            en: 'Subtract $x$ from both sides: $5x - x \\ge y \\implies 4x \\ge y$.',
            why: { bm: 'Kumpulkan semua sebutan-$x$ di satu sisi untuk bentuk integer termudah.', en: 'Collect all $x$-terms on one side to reach the simplest integer form.' }
          },
          {
            badge: 'N1',
            bm: '$4x \\ge y$ (atau $y \\le 4x$).',
            en: '$4x \\ge y$ (or $y \\le 4x$).',
            why: { bm: 'Semak: jika $x = 20, y = 80$, maka $20 / (20 + 80) = 20\\%$, tepat pada sempadan.', en: 'Check: if $x = 20, y = 80$, then $20 / (20 + 80) = 20\\%$, matching equality.' }
          }
        ]
      },
      {
        code: '7.10', marks: 4,
        topic: { bm: 'Analisis Lengkap Keuntungan Optimum Dua Jenis Kek', en: 'Optimal Bakery Profit Analysis' },
        q: {
          bm: 'Sebuah kedai kek mempunyai bucu-bucu rantau pengeluaran harian bagi $x$ biji kek coklat dan $y$ biji kek keju pada $(10, 50)$, $(30, 40)$, dan $(50, 10)$. Jika keuntungan sebiji kek coklat ialah $\\text{RM }8$ dan kek keju ialah $\\text{RM }10$, cari bilangan setiap kek untuk keuntungan maksimum dan nyatakan keuntungan itu. [4m]',
          en: 'A bakery\'s feasible vertices for $x$ chocolate cakes and $y$ cheesecakes are $(10, 50)$, $(30, 40)$, and $(50, 10)$. Profit is $\\text{RM }8$ per chocolate cake and $\\text{RM }10$ per cheesecake. Find the optimal output and maximum profit. [4m]'
        },
        mistakes: {
          bm: [
            'Menukar pekali $\\text{RM }8$ dan $\\text{RM }10$ antara $x$ dan $y$ semasa menguji bucu.',
            'Hanya menyatakan keuntungan maksimum $\\text{RM }640$ tanpa menyatakan bilangan optimum ($30$ kek coklat, $40$ kek keju).'
          ],
          en: [
            'Swapping $\\text{RM }8$ and $\\text{RM }10$ between $x$ and $y$ during vertex testing.',
            'Stating only the maximum profit $\\text{RM }640$ without answering optimal output ($30$ chocolate, $40$ cheesecakes).'
          ]
        },
        scheme: [
          {
            badge: 'K1',
            bm: 'Tulis fungsi objektif: $P = 8x + 10y$ ($x =$ kek coklat, $y =$ kek keju).',
            en: 'Write objective function: $P = 8x + 10y$ ($x =$ chocolate, $y =$ cheesecake).',
            why: { bm: 'Jumlah keuntungan ialah $\\text{RM }8$ bagi setiap $x$ ditambah $\\text{RM }10$ bagi setiap $y$.', en: 'Total profit equals $\\text{RM }8$ per $x$ plus $\\text{RM }10$ per $y$.' }
          },
          {
            badge: 'K1',
            bm: 'Uji $(10, 50)$ dan $(50, 10)$: $P(10, 50) = 8(10) + 10(50) = 80 + 500 = 580$; $P(50, 10) = 8(50) + 10(10) = 400 + 100 = 500$.',
            en: 'Test $(10, 50)$ and $(50, 10)$: $P(10, 50) = 8(10) + 10(50) = 80 + 500 = 580$; $P(50, 10) = 8(50) + 10(10) = 400 + 100 = 500$.',
            why: { bm: 'Nilaikan setiap bucu sudut dengan teliti.', en: 'Evaluate each corner vertex carefully.' }
          },
          {
            badge: 'K1',
            bm: 'Uji $(30, 40)$: $P(30, 40) = 8(30) + 10(40) = 240 + 400 = 640$.',
            en: 'Test $(30, 40)$: $P(30, 40) = 8(30) + 10(40) = 240 + 400 = 640$.',
            why: { bm: 'Bandingkan $640$ dengan $580$ dan $500$.', en: 'Compare $640$ against $580$ and $500$.' }
          },
          {
            badge: 'N1',
            bm: 'Pengeluaran optimum: $30$ kek coklat dan $40$ kek keju; keuntungan maksimum $= \\text{RM }640$.',
            en: 'Optimal output: $30$ chocolate cakes and $40$ cheesecakes; maximum profit $= \\text{RM }640$.',
            why: { bm: 'Soalan meminta KEDUA-DUA bilangan setiap kek dan nilai keuntungan maksimum.', en: 'The question asks for BOTH the quantity of each cake and the maximum profit.' }
          }
        ]
      }
    ],

    // =========================================================================
    // TINGKATAN 5 BAB 8: KINEMATIK GERAKAN LINEAR (10 SOALAN)
    // =========================================================================
    'f5-c8': [
      {
        code: '8.1', marks: 4,
        topic: { bm: 'Halaju Awal dan Masa Zarah Pegun Seketika ($v = 0$)', en: 'Initial Velocity & Instantaneous Rest ($v = 0$)' },
        q: {
          bm: 'Sesaran suatu zarah $s\\text{ meter}$ dari titik tetap $O$ diberi oleh $s = 2t^3 - 9t^2 + 12t$. Cari halaju awal zarah dan nilai-nilai $t$ apabila zarah berhenti seketika. [4m]',
          en: 'Displacement $s\\text{ m}$ from fixed point $O$ is $s = 2t^3 - 9t^2 + 12t$. Find the initial velocity and the times when the particle is instantaneously at rest. [4m]'
        },
        mistakes: {
          bm: [
            'Menyamakan $s = 0$ bukannya $v = 0$ untuk mencari masa berhenti seketika.',
            'Keliru antara halaju awal ($t = 0$ dalam $v$) dengan sesaran awal ($t = 0$ dalam $s$).'
          ],
          en: [
            'Setting $s = 0$ instead of $v = 0$ for instantaneous rest.',
            'Confusing initial velocity ($t = 0$ in $v$) with initial displacement ($t = 0$ in $s$).'
          ]
        },
        scheme: [
          {
            badge: 'K1',
            bm: 'Bezakan $s$ untuk mendapat $v$: $v = \\frac{ds}{dt} = 6t^2 - 18t + 12$.',
            en: 'Differentiate $s$ to get $v$: $v = \\frac{ds}{dt} = 6t^2 - 18t + 12$.',
            why: { bm: 'Halaju ialah kadar perubahan sesaran terhadap masa.', en: 'Velocity is the rate of change of displacement with respect to time.' }
          },
          {
            badge: 'N1',
            bm: 'Halaju awal ($t = 0$): $v(0) = 6(0)^2 - 18(0) + 12 = 12\\text{ m s}^{-1}$.',
            en: 'Initial velocity ($t = 0$): $v(0) = 6(0)^2 - 18(0) + 12 = 12\\text{ m s}^{-1}$.',
            why: { bm: 'Perkataan "awal" sentiasa bermaksud pada masa $t = 0$.', en: '"Initial" always means at $t = 0$.' }
          },
          {
            badge: 'K1',
            bm: 'Berhenti seketika ($v = 0$): $6t^2 - 18t + 12 = 0 \\implies t^2 - 3t + 2 = 0 \\implies (t - 1)(t - 2) = 0$.',
            en: 'Instantaneous rest ($v = 0$): $6t^2 - 18t + 12 = 0 \\implies t^2 - 3t + 2 = 0 \\implies (t - 1)(t - 2) = 0$.',
            why: { bm: 'Membahagi dengan $6$ memudahkan pemfaktoran kuadratik.', en: 'Dividing by $6$ makes factorizing straightforward.' }
          },
          {
            badge: 'N1',
            bm: '$t = 1\\text{ s}$ dan $t = 2\\text{ s}$ (kedua-duanya sah kerana $t \\ge 0$).',
            en: '$t = 1\\text{ s}$ and $t = 2\\text{ s}$ (both valid as $t \\ge 0$).',
            why: { bm: 'Kedua-dua masa bernilai bukan negatif, jadi kedua-duanya berlaku dalam gerakan fizikal.', en: 'Both times are non-negative, so both occur during physical motion.' }
          }
        ]
      },
      {
        code: '8.2', marks: 5,
        topic: { bm: 'Jumlah Jarak dengan Pusingan Arah Gerakan', en: 'Total Distance with Reversal of Motion' },
        q: {
          bm: 'Suatu zarah bergerak melalui titik tetap $O$ pada masa $t = 0$ dengan halaju $v = 3t^2 - 12t + 9\\text{ m s}^{-1}$. Hitung **jumlah jarak** yang dilalui oleh zarah dalam $4\\text{ saat}$ pertama. [5m]',
          en: 'A particle passes through $O$ at $t = 0$ with velocity $v = 3t^2 - 12t + 9\\text{ m s}^{-1}$. Calculate the **total distance** travelled in the first $4\\text{ seconds}$. [5m]'
        },
        mistakes: {
          bm: [
            'Mengira sesaran bersih $s(4) = 4\\text{ m}$ terus tanpa memecahkan perjalanan pada pusingan U ($v = 0$).',
            'Membuang tanda nilai mutlak $|s(3) - s(1)|$ lalu mendapat $4 + (-4) + 4 = 4$.',
            'Lupa menyemak sama ada punca $v = 0$ berada di dalam selang $0 \\le t \\le 4$.'
          ],
          en: [
            'Computing net displacement $s(4) = 4\\text{ m}$ directly instead of splitting at $v = 0$ U-turns.',
            'Dropping absolute value bars $|s(3) - s(1)|$ and getting $4 + (-4) + 4 = 4$.',
            'Forgetting to check whether $v = 0$ roots lie inside $0 \\le t \\le 4$.'
          ]
        },
        scheme: [
          {
            badge: 'K1',
            bm: 'Kamirkan $v$ untuk $s$: $s = \\int (3t^2 - 12t + 9)\\,dt = t^3 - 6t^2 + 9t + c$; pada $t = 0, s = 0 \\implies c = 0$.',
            en: 'Integrate $v$ for $s$: $s = \\int (3t^2 - 12t + 9)\\,dt = t^3 - 6t^2 + 9t + c$; at $t = 0, s = 0 \\implies c = 0$.',
            why: { bm: 'Melalui $O$ pada $t = 0$ bermaksud $s(0) = 0$.', en: 'Passing through $O$ at $t = 0$ gives $s(0) = 0$.' }
          },
          {
            badge: 'K1',
            bm: 'Cari masa pusingan U ($v = 0$): $3t^2 - 12t + 9 = 0 \\implies t^2 - 4t + 3 = 0 \\implies (t - 1)(t - 3) = 0 \\implies t = 1,\\; 3$.',
            en: 'Find turnaround times ($v = 0$): $3t^2 - 12t + 9 = 0 \\implies t^2 - 4t + 3 = 0 \\implies (t - 1)(t - 3) = 0 \\implies t = 1,\\; 3$.',
            why: { bm: 'Zarah hanya menukar arah apabila $v = 0$; kedua-dua $1$ dan $3$ berada dalam $[0, 4]$.', en: 'A particle only reverses direction when $v = 0$; both $1$ and $3$ lie in $[0, 4]$.' }
          },
          {
            badge: 'K1',
            bm: 'Nilaikan kedudukan: $s(0) = 0$; $s(1) = 1 - 6 + 9 = 4$; $s(3) = 27 - 54 + 27 = 0$; $s(4) = 64 - 96 + 36 = 4$.',
            en: 'Evaluate positions: $s(0) = 0$; $s(1) = 1 - 6 + 9 = 4$; $s(3) = 27 - 54 + 27 = 0$; $s(4) = 64 - 96 + 36 = 4$.',
            why: { bm: 'Rekodkan kedudukan pada mula, setiap pusingan U, dan penghujung selang.', en: 'Record position at start, every U-turn, and end.' }
          },
          {
            badge: 'K1',
            bm: 'Jumlahkan jarak segmen: $|s(1) - s(0)| + |s(3) - s(1)| + |s(4) - s(3)| = |4 - 0| + |0 - 4| + |4 - 0| = 4 + 4 + 4$.',
            en: 'Sum segment distances: $|s(1) - s(0)| + |s(3) - s(1)| + |s(4) - s(3)| = |4 - 0| + |0 - 4| + |4 - 0| = 4 + 4 + 4$.',
            why: { bm: 'Jarak sentiasa positif tidak kira bergerak ke hadapan atau ke belakang.', en: 'Distance is always positive regardless of moving forward or backward.' }
          },
          {
            badge: 'N1',
            bm: 'Jumlah jarak $= 12\\text{ m}$.',
            en: 'Total distance $= 12\\text{ m}$.',
            why: { bm: '$4 + 4 + 4 = 12\\text{ m}$, sedangkan sesaran bersih hanyalah $4\\text{ m}$.', en: '$4 + 4 + 4 = 12\\text{ m}$, whereas net displacement is only $4\\text{ m}$.' }
          }
        ]
      },
      {
        code: '8.3', marks: 4,
        topic: { bm: 'Pengamiran Pecutan kepada Halaju & Sesaran ($a \\to v \\to s$)', en: 'Integrating Acceleration to Velocity & Displacement' },
        q: {
          bm: 'Suatu zarah bermula di titik tetap $O$ dengan halaju awal $5\\text{ m s}^{-1}$ dan pecutan $a = 6t - 4\\text{ m s}^{-2}$. Cari halaju zarah pada $t = 3\\text{ s}$ dan sesarannya pada $t = 2\\text{ s}$. [4m]',
          en: 'A particle starts from $O$ with initial velocity $5\\text{ m s}^{-1}$ and acceleration $a = 6t - 4\\text{ m s}^{-2}$. Find its velocity at $t = 3\\text{ s}$ and displacement at $t = 2\\text{ s}$. [4m]'
        },
        mistakes: {
          bm: [
            'Lupa mencari pemalar $c_1 = 5$ semasa mengamirkan $a$ kepada $v$.',
            'Membezakan $a$ bukannya mengamirkan semasa bergerak dari $a \\to v \\to s$.'
          ],
          en: [
            'Forgetting constant $c_1 = 5$ when integrating $a$ to $v$.',
            'Differentiating $a$ instead of integrating when moving $a \\to v \\to s$.'
          ]
        },
        scheme: [
          {
            badge: 'K1',
            bm: 'Kamirkan $a$ kepada $v$: $v = \\int (6t - 4)\\,dt = 3t^2 - 4t + c_1$; pada $t = 0, v = 5 \\implies c_1 = 5$, jadi $v = 3t^2 - 4t + 5$.',
            en: 'Integrate $a$ to $v$: $v = \\int (6t - 4)\\,dt = 3t^2 - 4t + c_1$; at $t = 0, v = 5 \\implies c_1 = 5$, so $v = 3t^2 - 4t + 5$.',
            why: { bm: 'Sentiasa cari $+c_1$ serta-merta menggunakan halaju awal.', en: 'Always solve for $+c_1$ immediately using initial velocity.' }
          },
          {
            badge: 'N1',
            bm: 'Gantikan $t = 3$: $v(3) = 3(3)^2 - 4(3) + 5 = 27 - 12 + 5 = 20\\text{ m s}^{-1}$.',
            en: 'Substitute $t = 3$: $v(3) = 3(3)^2 - 4(3) + 5 = 27 - 12 + 5 = 20\\text{ m s}^{-1}$.',
            why: { bm: 'Kira kuasa dua dahulu sebelum mendarab dengan $3$.', en: 'Compute powers before multiplying by $3$.' }
          },
          {
            badge: 'K1',
            bm: 'Kamirkan $v$ kepada $s$: $s = \\int (3t^2 - 4t + 5)\\,dt = t^3 - 2t^2 + 5t + c_2$; bermula di $O$ ($t = 0, s = 0$) $\\implies c_2 = 0$.',
            en: 'Integrate $v$ to $s$: $s = \\int (3t^2 - 4t + 5)\\,dt = t^3 - 2t^2 + 5t + c_2$; starts at $O$ ($t = 0, s = 0$) $\\implies c_2 = 0$.',
            why: { bm: 'Bermula di titik tetap $O$ memberi $s(0) = 0$.', en: 'Starting at fixed point $O$ gives $s(0) = 0$.' }
          },
          {
            badge: 'N1',
            bm: 'Gantikan $t = 2$: $s(2) = (2)^3 - 2(2)^2 + 5(2) = 8 - 8 + 10 = 10\\text{ m}$.',
            en: 'Substitute $t = 2$: $s(2) = (2)^3 - 2(2)^2 + 5(2) = 8 - 8 + 10 = 10\\text{ m}$.',
            why: { bm: 'Pastikan $t = 2$ digantikan ke dalam rumus $s$, bukan ke dalam $v$.', en: 'Substitute $t = 2$ into $s$, not into $v$.' }
          }
        ]
      },
      {
        code: '8.4', marks: 4,
        topic: { bm: 'Halaju Maksimum Apabila Pecutan Sifar ($a = 0$)', en: 'Maximum Velocity When Acceleration Is Zero ($a = 0$)' },
        q: {
          bm: 'Halaju suatu zarah diberi oleh $v = 8 + 6t - t^2\\text{ m s}^{-1}$. Cari halaju maksimum zarah tersebut. [4m]',
          en: 'The velocity of a particle is $v = 8 + 6t - t^2\\text{ m s}^{-1}$. Find the maximum velocity of the particle. [4m]'
        },
        mistakes: {
          bm: [
            'Menyamakan $v = 0$ bukannya $a = \\frac{dv}{dt} = 0$.',
            'Berhenti selepas mendapat $t = 3\\text{ s}$ tanpa menggantikannya semula untuk mengira $v_{\\max}$.'
          ],
          en: [
            'Setting $v = 0$ instead of $a = \\frac{dv}{dt} = 0$.',
            'Stopping after finding $t = 3\\text{ s}$ without substituting back to find $v_{\\max}$.'
          ]
        },
        scheme: [
          {
            badge: 'K1',
            bm: 'Bezakan $v$ untuk mendapat pecutan $a$: $a = \\frac{dv}{dt} = 6 - 2t$.',
            en: 'Differentiate $v$ to get acceleration $a$: $a = \\frac{dv}{dt} = 6 - 2t$.',
            why: { bm: 'Halaju maksimum berlaku pada titik pusingan $v$, di mana kecerunan $a = \\frac{dv}{dt} = 0$.', en: 'Maximum velocity occurs at a turning point of $v$, where gradient $a = \\frac{dv}{dt} = 0$.' }
          },
          {
            badge: 'K1',
            bm: 'Selesaikan $a = 0$: $6 - 2t = 0 \\implies 2t = 6 \\implies t = 3\\text{ s}$ ($\\frac{d^2v}{dt^2} = -2 < 0$ mengesahkan maksimum).',
            en: 'Solve $a = 0$: $6 - 2t = 0 \\implies 2t = 6 \\implies t = 3\\text{ s}$ ($\\frac{d^2v}{dt^2} = -2 < 0$ confirms maximum).',
            why: { bm: 'Terbitan kedua negatif mengesahkan $t = 3$ ialah maksimum dan bukan minimum.', en: 'A negative second derivative verifies $t = 3$ is a maximum, not a minimum.' }
          },
          {
            badge: 'N1',
            bm: 'Gantikan $t = 3$ ke dalam $v$: $v_{\\max} = 8 + 6(3) - (3)^2 = 8 + 18 - 9 = 17\\text{ m s}^{-1}$.',
            en: 'Substitute $t = 3$ into $v$: $v_{\\max} = 8 + 6(3) - (3)^2 = 8 + 18 - 9 = 17\\text{ m s}^{-1}$.',
            why: { bm: 'Sentiasa gantikan $t = 3$ kembali ke dalam persamaan $v$.', en: 'Always substitute $t = 3$ back into the $v$ formula.' }
          }
        ]
      },
      {
        code: '8.5', marks: 4,
        topic: { bm: 'Masa Zarah Kembali ke Titik Tetap $O$ ($s = 0$)', en: 'Times Returning to Fixed Point $O$ ($s = 0$)' },
        q: {
          bm: 'Sesaran suatu zarah diberi oleh $s = t^3 - 4t^2 + 3t\\text{ meter}$. Cari nilai-nilai $t > 0$ apabila zarah kembali melalui $O$, serta halajunya pada ketika itu. [4m]',
          en: 'A particle\'s displacement is $s = t^3 - 4t^2 + 3t\\text{ m}$. Find the times $t > 0$ when it returns to $O$ and its velocity at each time. [4m]'
        },
        mistakes: {
          bm: [
            'Menyelesaikan $v = 0$ bukannya $s = 0$ bagi frasa "kembali melalui $O$".',
            'Menyertakan $t = 0$ sebagai jawapan sedangkan soalan menetapkan $t > 0$.'
          ],
          en: [
            'Solving $v = 0$ instead of $s = 0$ for "returns to $O$".',
            'Including $t = 0$ as a return time when the question specifies $t > 0$.'
          ]
        },
        scheme: [
          {
            badge: 'K1',
            bm: 'Tetapkan $s = 0$ dan faktorkan: $t^3 - 4t^2 + 3t = 0 \\implies t(t^2 - 4t + 3) = 0 \\implies t(t - 1)(t - 3) = 0$.',
            en: 'Set $s = 0$ and factorize: $t^3 - 4t^2 + 3t = 0 \\implies t(t^2 - 4t + 3) = 0 \\implies t(t - 1)(t - 3) = 0$.',
            why: { bm: 'Kembali ke titik tetap $O$ bermaksud sesaran $s = 0$.', en: 'Returning to fixed point $O$ means displacement $s = 0$.' }
          },
          {
            badge: 'K1',
            bm: 'Oleh sebab $t > 0$, tolak $t = 0 \\implies t = 1\\text{ s}$ dan $t = 3\\text{ s}$.',
            en: 'Since $t > 0$, reject $t = 0 \\implies t = 1\\text{ s}$ and $t = 3\\text{ s}$.',
            why: { bm: '$t = 0$ ialah detik permulaan, bukan masa kembali.', en: '$t = 0$ is the starting instant, not a return time.' }
          },
          {
            badge: 'K1',
            bm: 'Bezakan $s$ untuk $v$: $v = \\frac{ds}{dt} = 3t^2 - 8t + 3$.',
            en: 'Differentiate $s$ for $v$: $v = \\frac{ds}{dt} = 3t^2 - 8t + 3$.',
            why: { bm: 'Bezakan sesaran sekali untuk mendapat fungsi halaju pada sebarang $t$.', en: 'Differentiate displacement once to get velocity at any instant $t$.' }
          },
          {
            badge: 'N1',
            bm: 'Gantikan $t = 1, 3$: $v(1) = 3(1)^2 - 8(1) + 3 = 3 - 8 + 3 = -2\\text{ m s}^{-1}$; $v(3) = 3(3)^2 - 8(3) + 3 = 27 - 24 + 3 = 6\\text{ m s}^{-1}$.',
            en: 'Substitute $t = 1, 3$: $v(1) = 3(1)^2 - 8(1) + 3 = 3 - 8 + 3 = -2\\text{ m s}^{-1}$; $v(3) = 3(3)^2 - 8(3) + 3 = 27 - 24 + 3 = 6\\text{ m s}^{-1}$.',
            why: { bm: 'Halaju negatif pada $t = 1$ bermakna bergerak ke belakang melalui $O$; positif pada $t = 3$ bermakna bergerak ke hadapan melalui $O$.', en: 'Negative velocity at $t = 1$ means moving backward past $O$; positive at $t = 3$ means moving forward past $O$.' }
          }
        ]
      },
      {
        code: '8.6', marks: 3,
        topic: { bm: 'Nyahpecutan Malar sehingga Berhenti', en: 'Constant Deceleration Until Stopping' },
        q: {
          bm: 'Sebuah kereta bergerak melalui $O$ dengan halaju $24\\text{ m s}^{-1}$ dan mengalami nyahpecutan malar (diperlahankan pada kadar tetap) $4\\text{ m s}^{-2}$ sehingga berhenti. Cari masa yang diambil untuk berhenti dan jarak breknya. [3m]',
          en: 'A car passes $O$ at $24\\text{ m s}^{-1}$ and decelerates uniformly at $4\\text{ m s}^{-2}$ until stopping. Find the stopping time and braking distance. [3m]'
        },
        mistakes: {
          bm: [
            'Menggunakan $a = +4$ bukannya $a = -4$ bagi nyahpecutan.',
            'Menulis $s = 24t + 2t^2$ (tersilap tanda pecutan) atau lupa bahawa $v = 0$ semasa berhenti.'
          ],
          en: [
            'Using $a = +4$ instead of $a = -4$ for deceleration.',
            'Using $s = 24t + 2t^2$ (wrong sign on acceleration term) or forgetting $v = 0$ at stopping.'
          ]
        },
        scheme: [
          {
            badge: 'K1',
            bm: 'Tetapkan $a = -4$ dan kamirkan kepada $v$: $v = \\int -4\\,dt = -4t + c_1$; oleh sebab $v(0) = 24$, $v = 24 - 4t$.',
            en: 'Set $a = -4$ and integrate to $v$: $v = \\int -4\\,dt = -4t + c_1$; since $v(0) = 24$, $v = 24 - 4t$.',
            why: { bm: '"Nyahpecutan" bermaksud halaju berkurang, jadi pecutan bertanda negatif: $a = -4$.', en: '"Decelerates" means velocity decreases, so acceleration is negative: $a = -4$.' }
          },
          {
            badge: 'K1',
            bm: 'Masa berhenti ($v = 0$): $24 - 4t = 0 \\implies 4t = 24 \\implies t = 6\\text{ s}$.',
            en: 'Stopping time ($v = 0$): $24 - 4t = 0 \\implies 4t = 24 \\implies t = 6\\text{ s}$.',
            why: { bm: 'Kereta berhenti apabila halaju seketikanya menjadi $0$.', en: 'The car stops when its instantaneous velocity reaches $0$.' }
          },
          {
            badge: 'K1',
            bm: 'Kamirkan $v$ kepada $s$: $s = \\int (24 - 4t)\\,dt = 24t - 2t^2 + c_2$; pada $O$, $s(0) = 0 \\implies s = 24t - 2t^2$.',
            en: 'Integrate $v$ to $s$: $s = \\int (24 - 4t)\\,dt = 24t - 2t^2 + c_2$; at $O$, $s(0) = 0 \\implies s = 24t - 2t^2$.',
            why: { bm: '$\\int (-4t)\\,dt = -4\\frac{t^2}{2} = -2t^2$.', en: '$\\int (-4t)\\,dt = -4\\frac{t^2}{2} = -2t^2$.' }
          },
          {
            badge: 'N1',
            bm: 'Jarak brek pada $t = 6$: $s(6) = 24(6) - 2(6)^2 = 144 - 2(36) = 144 - 72 = 72\\text{ m}$.',
            en: 'Braking distance at $t = 6$: $s(6) = 24(6) - 2(6)^2 = 144 - 2(36) = 144 - 72 = 72\\text{ m}$.',
            why: { bm: 'Semak juga dengan $v^2 = u^2 + 2as$: $0 = 24^2 - 8s \\implies s = 72\\text{ m}$.', en: 'You can also verify via $v^2 = u^2 + 2as$: $0 = 24^2 - 8s \\implies s = 72\\text{ m}$.' }
          }
        ]
      },
      {
        code: '8.7', marks: 4,
        topic: { bm: 'Pertemuan Dua Zarah Bergerak dari Titik Sama', en: 'Collision / Meeting of Two Particles' },
        q: {
          bm: 'Zarah $P$ dan zarah $Q$ berlepas serentak dari titik $O$ pada garis lurus yang sama dengan sesaran $s_P = 2t^2$ dan $s_Q = 3t^2 - 4t$. Cari masa $t > 0$ apabila kedua-dua zarah bertemu semula dan jaraknya dari $O$. [4m]',
          en: 'Particles $P$ and $Q$ leave $O$ simultaneously along the same line with $s_P = 2t^2$ and $s_Q = 3t^2 - 4t$. Find time $t > 0$ when they meet again and their distance from $O$. [4m]'
        },
        mistakes: {
          bm: [
            'Menyamakan halaju $v_P = v_Q$ bukannya sesaran $s_P = s_Q$.',
            'Membahagi $t^2 = 4t$ dengan $t$ secara cuai atau mengekalkan $t = 0$ sebagai jawapan.'
          ],
          en: [
            'Equating velocities $v_P = v_Q$ instead of displacements $s_P = s_Q$.',
            'Dividing $t^2 = 4t$ by $t$ carelessly or keeping $t = 0$ as the answer.'
          ]
        },
        scheme: [
          {
            badge: 'K1',
            bm: 'Samakan sesaran kedua-dua zarah: $s_P = s_Q \\implies 2t^2 = 3t^2 - 4t$.',
            en: 'Equate displacements: $s_P = s_Q \\implies 2t^2 = 3t^2 - 4t$.',
            why: { bm: 'Bertemu pada kedudukan yang sama pada masa sama bermaksud sesaran dari $O$ sama.', en: 'Meeting at the same spot at the same time means equal displacement from $O$.' }
          },
          {
            badge: 'K1',
            bm: 'Susun semula dan faktorkan: $3t^2 - 2t^2 - 4t = 0 \\implies t^2 - 4t = 0 \\implies t(t - 4) = 0$.',
            en: 'Rearrange and factorize: $3t^2 - 2t^2 - 4t = 0 \\implies t^2 - 4t = 0 \\implies t(t - 4) = 0$.',
            why: { bm: 'Pindahkan semua sebutan ke satu sisi dan faktorkan, jangan membahagi dengan $t$.', en: 'Move all terms to one side and factorize instead of dividing by $t$.' }
          },
          {
            badge: 'K1',
            bm: 'Oleh sebab $t > 0$, tolak $t = 0 \\implies t = 4\\text{ s}$.',
            en: 'Since $t > 0$, reject $t = 0 \\implies t = 4\\text{ s}$.',
            why: { bm: '$t = 0$ ialah ketika kedua-duanya berlepas dari $O$; soalan meminta bila bertemu **semula**.', en: '$t = 0$ is when both left $O$ together; the question asks when they meet **again**.' }
          },
          {
            badge: 'N1',
            bm: 'Jarak dari $O$: $s_P(4) = 2(4)^2 = 2(16) = 32\\text{ m}$ (semak: $s_Q(4) = 3(16) - 4(4) = 32\\text{ m}$).',
            en: 'Distance from $O$: $s_P(4) = 2(4)^2 = 2(16) = 32\\text{ m}$ (check: $s_Q(4) = 3(16) - 4(4) = 32\\text{ m}$).',
            why: { bm: 'Menyemak kedua-dua $s_P$ dan $s_Q$ mengesahkan $t = 4$ adalah tepat.', en: 'Checking both $s_P$ and $s_Q$ confirms $t = 4$ is exact.' }
          }
        ]
      },
      {
        code: '8.8', marks: 3,
        topic: { bm: 'Julat Masa Arah Gerakan Positif vs Negatif', en: 'Time Intervals for Motion Right vs Left' },
        q: {
          bm: 'Halaju suatu zarah diberi oleh $v = 10 - 2t\\text{ m s}^{-1}$ (ke kanan diambil sebagai arah positif). Nyatakan julat masa apabila zarah bergerak ke kanan dan apabila ia bergerak ke kiri. [3m]',
          en: 'Velocity is $v = 10 - 2t\\text{ m s}^{-1}$ (rightward positive). State the time intervals when the particle moves to the right and to the left. [3m]'
        },
        mistakes: {
          bm: [
            'Menulis $t < 5$ tanpa had fizikal bukan negatif $0 \\le t < 5$.',
            'Menyertakan $t = 5$ dengan $\\le$ atau $\\ge$ sedangkan pada $t = 5$ zarah pegun ($v = 0$).'
          ],
          en: [
            'Writing $t < 5$ without the physical non-negative limit $0 \\le t < 5$.',
            'Including $t = 5$ with $\\le$ or $\\ge$ even though at $t = 5$ the particle is stationary ($v = 0$).'
          ]
        },
        scheme: [
          {
            badge: 'K1',
            bm: 'Bergerak ke kanan ($v > 0$): $10 - 2t > 0 \\implies 10 > 2t \\implies t < 5$.',
            en: 'Moving right ($v > 0$): $10 - 2t > 0 \\implies 10 > 2t \\implies t < 5$.',
            why: { bm: 'Gerakan ke arah positif memerlukan halaju positif ketat $v > 0$.', en: 'Motion in the positive direction requires strictly positive velocity $v > 0$.' }
          },
          {
            badge: 'N1',
            bm: 'Silangkan dengan masa fizikal $t \\ge 0$: bergerak ke kanan untuk $0 \\le t < 5\\text{ s}$.',
            en: 'Intersect with physical time $t \\ge 0$: moving right for $0 \\le t < 5\\text{ s}$.',
            why: { bm: 'Masa tidak boleh negatif; pada $t = 0, v = 10 > 0$ ($0$ termasuk), manakala pada $t = 5, v = 0$ ($5$ dikecualikan).', en: 'Time cannot be negative; at $t = 0, v = 10 > 0$ so $0$ is included, while at $t = 5, v = 0$ so $5$ is excluded.' }
          },
          {
            badge: 'K1',
            bm: 'Bergerak ke kiri ($v < 0$): $10 - 2t < 0 \\implies 10 < 2t \\implies t > 5$.',
            en: 'Moving left ($v < 0$): $10 - 2t < 0 \\implies 10 < 2t \\implies t > 5$.',
            why: { bm: 'Halaju negatif bermaksud bergerak ke arah bertentangan (ke kiri).', en: 'Negative velocity means moving in the opposite (leftward) direction.' }
          },
          {
            badge: 'N1',
            bm: 'Bergerak ke kiri untuk $t > 5\\text{ s}$.',
            en: 'Moving left for $t > 5\\text{ s}$.',
            why: { bm: 'Semua $t > 5$ secara automatik memenuhi $t \\ge 0$.', en: 'All $t > 5$ automatically satisfy $t \\ge 0$.' }
          }
        ]
      },
      {
        code: '8.9', marks: 3,
        topic: { bm: 'Halaju Ketika Pecutan Sifar', en: 'Velocity at the Instant of Zero Acceleration' },
        q: {
          bm: 'Sesaran suatu zarah diberi oleh $s = \\frac{1}{3}t^3 - 3t^2 + 8t\\text{ meter}$. Cari halaju zarah pada ketika pecutannya adalah sifar. [3m]',
          en: 'Displacement is $s = \\frac{1}{3}t^3 - 3t^2 + 8t\\text{ m}$. Find the velocity of the particle when its acceleration is zero. [3m]'
        },
        mistakes: {
          bm: [
            'Membezakan sekali sahaja ($v = 0$) bukannya dua kali ($a = 0$).',
            'Tersilap tanda dalam $v(3) = 9 - 18 + 8 = -1$ (menulis $+1$ atau membuang tanda negatif halaju).'
          ],
          en: [
            'Differentiating only once ($v = 0$) instead of twice ($a = 0$).',
            'Sign error in $v(3) = 9 - 18 + 8 = -1$ (writing $+1$ or dropping the negative sign on velocity).'
          ]
        },
        scheme: [
          {
            badge: 'K1',
            bm: 'Bezakan $s$ kepada $v$: $v = \\frac{ds}{dt} = \\frac{1}{3}(3t^2) - 3(2t) + 8 = t^2 - 6t + 8$.',
            en: 'Differentiate $s$ to $v$: $v = \\frac{ds}{dt} = \\frac{1}{3}(3t^2) - 3(2t) + 8 = t^2 - 6t + 8$.',
            why: { bm: 'Guna petua kuasa sebutan demi sebutan; $\\frac{1}{3} \\times 3 = 1$.', en: 'Apply the power rule term-by-term; $\\frac{1}{3} \\times 3 = 1$.' }
          },
          {
            badge: 'K1',
            bm: 'Bezakan $v$ kepada $a$: $a = \\frac{dv}{dt} = 2t - 6$.',
            en: 'Differentiate $v$ to $a$: $a = \\frac{dv}{dt} = 2t - 6$.',
            why: { bm: 'Pecutan ialah terbitan bagi halaju, bukan sesaran.', en: 'Acceleration is the derivative of velocity, not displacement.' }
          },
          {
            badge: 'K1',
            bm: 'Tetapkan $a = 0$: $2t - 6 = 0 \\implies 2t = 6 \\implies t = 3\\text{ s}$.',
            en: 'Set $a = 0$: $2t - 6 = 0 \\implies 2t = 6 \\implies t = 3\\text{ s}$.',
            why: { bm: 'Cari detik masa tepat apabila pecutan adalah sifar.', en: 'Find the exact instant when acceleration is zero.' }
          },
          {
            badge: 'N1',
            bm: 'Gantikan $t = 3$ ke dalam $v$: $v(3) = (3)^2 - 6(3) + 8 = 9 - 18 + 8 = -1\\text{ m s}^{-1}$.',
            en: 'Substitute $t = 3$ into $v$: $v(3) = (3)^2 - 6(3) + 8 = 9 - 18 + 8 = -1\\text{ m s}^{-1}$.',
            why: { bm: 'Halaju boleh bernilai negatif — ini bermakna bergerak ke arah negatif dengan laju $1\\text{ m s}^{-1}$.', en: 'Velocity can be negative — it simply means moving in the negative direction at $-1\\text{ m s}^{-1}$.' }
          }
        ]
      },
      {
        code: '8.10', marks: 4,
        topic: { bm: 'Tinggi Maksimum Roket Air Dilancarkan Tegak Ke Atas', en: 'Maximum Height of a Vertically Launched Rocket' },
        q: {
          bm: 'Sebuah roket air dilancarkan tegak ke atas dari tanah dengan halaju awal $40\\text{ m s}^{-1}$ dan pecutan graviti $a = -10\\text{ m s}^{-2}$. Cari masa untuk mencapai tinggi maksimum dan nilai tinggi maksimum tersebut. [4m]',
          en: 'A water rocket is launched vertically upward from ground level at $40\\text{ m s}^{-1}$ with acceleration $a = -10\\text{ m s}^{-2}$. Find the time to reach maximum height and the maximum height. [4m]'
        },
        mistakes: {
          bm: [
            'Lupa bahawa pada puncak tertinggi, halaju seketika ialah $v = 0$.',
            'Mengabaikan tanda negatif dalam $a = -10\\text{ m s}^{-2}$ (menghasilkan $v = 10t + 40$ yang tidak pernah berhenti).'
          ],
          en: [
            'Forgetting $v = 0$ at the highest point.',
            'Ignoring the minus sign in $a = -10\\text{ m s}^{-2}$ (producing $v = 10t + 40$ which never stops).'
          ]
        },
        scheme: [
          {
            badge: 'K1',
            bm: 'Kamirkan $a = -10$ dengan $v(0) = 40$: $v = \\int -10\\,dt = -10t + c_1 \\implies v = -10t + 40$.',
            en: 'Integrate $a = -10$ with $v(0) = 40$: $v = \\int -10\\,dt = -10t + c_1 \\implies v = -10t + 40$.',
            why: { bm: 'Graviti menarik ke bawah melawan pelancaran ke atas, maka $a = -10$.', en: 'Gravity pulls downward against the upward launch, so $a = -10$.' }
          },
          {
            badge: 'K1',
            bm: 'Pada tinggi maksimum, $v = 0$: $-10t + 40 = 0 \\implies 10t = 40 \\implies t = 4\\text{ s}$.',
            en: 'At maximum height, $v = 0$: $-10t + 40 = 0 \\implies 10t = 40 \\implies t = 4\\text{ s}$.',
            why: { bm: 'Roket berhenti naik seketika di puncak sebelum jatuh semula.', en: 'The rocket stops climbing momentarily at its peak before falling back.' }
          },
          {
            badge: 'K1',
            bm: 'Kamirkan $v$ dengan aras tanah $s(0) = 0$: $s = \\int (-10t + 40)\\,dt = -5t^2 + 40t$.',
            en: 'Integrate $v$ with ground level $s(0) = 0$: $s = \\int (-10t + 40)\\,dt = -5t^2 + 40t$.',
            why: { bm: '$\\int (-10t)\\,dt = -10\\frac{t^2}{2} = -5t^2$, dan pelancaran dari tanah memberi $c_2 = 0$.', en: '$\\int (-10t)\\,dt = -10\\frac{t^2}{2} = -5t^2$, and ground level gives $c_2 = 0$.' }
          },
          {
            badge: 'N1',
            bm: 'Gantikan $t = 4$: $s(4) = -5(4)^2 + 40(4) = -5(16) + 160 = -80 + 160 = 80\\text{ m}$.',
            en: 'Substitute $t = 4$: $s(4) = -5(4)^2 + 40(4) = -5(16) + 160 = -80 + 160 = 80\\text{ m}$.',
            why: { bm: 'Pada $t = 4$, sebutan naik $+160$ ditolak tarikan graviti $-80$ memberi tinggi puncak $80\\text{ m}$.', en: 'At $t = 4$, the upward term $+160$ minus gravity $-80$ gives peak height $80\\text{ m}$.' }
          }
        ]
      }
    ]
  });
})(window.AddMathApp);
