/**
 * AddMath Mudah — Bank Soalan Master SPM (Fasa 1: Tingkatan 4 Bab 1–5 • 50 Soalan Penuh)
 * Setiap soalan lengkap dengan: Pernyataan Format SPM, Kesilapan Lazim Murid & Skim Pemarkahan (K1 / N1) dalam BM & EN.
 */
window.AddMathApp = window.AddMathApp || {};
window.AddMathApp.masterBank = window.AddMathApp.masterBank || {};

(function (App) {
  'use strict';

  Object.assign(App.masterBank, {
    // =========================================================================
    // TINGKATAN 4 BAB 1: FUNGSI (10 SOALAN)
    // =========================================================================
    'f4-c1': [
      {
        code: '1.1', marks: 3,
        topic: { bm: 'Tatatanda dan Jenis Hubungan Fungsi', en: 'Function Notation & Relation Types' },
        q: {
          bm: 'Hubungan antara set $P = \\{-2, -1, 0, 1, 2\\}$ dan set $Q = \\{0, 1, 4\\}$ ditakrifkan oleh $f: x \\mapsto x^2$.\n(a) Nyatakan jenis hubungan tersebut. [1m]\n(b) Nyatakan julat hubungan tersebut. [1m]\n(c) Tulis fungsi dalam tatatanda fungsi yang menghubungkan (memetakan) unsur set $Q$ kepada nombor bukan negatif dalam set $P$. [1m]',
          en: 'The relation between set $P = \\{-2, -1, 0, 1, 2\\}$ and set $Q = \\{0, 1, 4\\}$ is defined by $f: x \\mapsto x^2$.\n(a) State the type of relation. [1m]\n(b) State the range of the relation. [1m]\n(c) Using function notation, write a function mapping elements in $Q$ to non-negative numbers in $P$. [1m]'
        },
        mistakes: {
          bm: [
            'Menjawab jenis hubungan sebagai "fungsi" dan bukannya **hubungan banyak kepada satu** (*many-to-one relation*).',
            'Menulis julat tanpa tanda set $\\{\\;\\}$ atau memasukkan unsur luar kodomain.',
            'Menulis $\\pm\\sqrt{x}$ sedangkan soalan mengehadkan kepada nombor bukan negatif sahaja.'
          ],
          en: [
            'Answering "function" instead of **many-to-one relation** (which describes the mapping type).',
            'Writing the range without curly braces $\\{\\;\\}$ or including elements outside the codomain.',
            'Writing $\\pm\\sqrt{x}$ when the question restricts outputs to non-negative numbers only.'
          ]
        },
        scheme: [
          {
            badge: 'K1',
            bm: 'Uji input dalam $P$: $f(-2) = (-2)^2 = 4$, $f(2) = 2^2 = 4$, $f(-1) = 1$, $f(1) = 1$, $f(0) = 0$.',
            en: 'Test inputs in $P$: $f(-2) = (-2)^2 = 4$, $f(2) = 2^2 = 4$, $f(-1) = 1$, $f(1) = 1$, $f(0) = 0$.',
            why: {
              bm: 'Menguji setiap objek menunjukkan dua input berbeza ($-2$ dan $2$, atau $-1$ dan $1$) memetakan kepada satu imej yang sama ($4$ atau $1$).',
              en: 'Testing each object shows that two different inputs ($-2$ and $2$, or $-1$ and $1$) map to the same image ($4$ or $1$).'
            }
          },
          {
            badge: 'N1',
            bm: '(a) Hubungan banyak kepada satu (*Many-to-one relation*).',
            en: '(a) Many-to-one relation.',
            why: {
              bm: 'Kerana beberapa objek dalam set $P$ berkongsi satu imej yang sama dalam set $Q$ (iaitu $\\pm 2 \\mapsto 4$ dan $\\pm 1 \\mapsto 1$).',
              en: 'Because multiple objects in set $P$ share a single image in set $Q$ (namely $\\pm 2 \\mapsto 4$ and $\\pm 1 \\mapsto 1$).'
            }
          },
          {
            badge: 'N1',
            bm: '(b) $\\text{Julat} = \\{0, 1, 4\\}$.',
            en: '(b) $\\text{Range} = \\{0, 1, 4\\}$.',
            why: {
              bm: 'Julat ialah himpunan semua nilai output (imej) sebenar yang terhasil dalam $Q$, dan wajib ditulis di dalam kurungan set $\\{\\;\\}$.',
              en: 'The range is the set of all actual output values (images) produced in $Q$, written inside curly set braces $\\{\\;\\}$.'
            }
          },
          {
            badge: 'N1',
            bm: '(c) $g: x \\mapsto \\sqrt{x}$ atau $g(x) = \\sqrt{x}$ bagi $x \\in Q$.',
            en: '(c) $g: x \\mapsto \\sqrt{x}$ or $g(x) = \\sqrt{x}$ for $x \\in Q$.',
            why: {
              bm: 'Untuk membalikkan $x \\mapsto x^2$ kepada nombor bukan negatif dalam $P$ ($\\{0, 1, 2\\}$), kita ambil punca kuasa dua positif $\\sqrt{x}$ sahaja.',
              en: 'To reverse $x \\mapsto x^2$ back to non-negative numbers in $P$ ($\\{0, 1, 2\\}$), we take only the principal positive square root $\\sqrt{x}$.'
            }
          }
        ]
      },
      {
        code: '1.2', marks: 3,
        topic: { bm: 'Domain dan Julat Fungsi Nilai Mutlak', en: 'Domain & Range of Modulus Function' },
        q: {
          bm: 'Diberi fungsi $f(x) = |2x - 5|$ untuk domain $-1 \\le x \\le 4$.\n(a) Cari nilai $f(-1)$ dan $f(4)$. [1m]\n(b) Tentukan julat bagi fungsi $f(x)$ dalam domain tersebut. [2m]',
          en: 'Given $f(x) = |2x - 5|$ for domain $-1 \\le x \\le 4$.\n(a) Find $f(-1)$ and $f(4)$. [1m]\n(b) Determine the range of $f(x)$ for the given domain. [2m]'
        },
        mistakes: {
          bm: [
            'Menggantikan hujung domain sahaja lalu menulis $3 \\le f(x) \\le 7$, terlupa bucu pantulan pada $x = 2.5$ di mana $f(2.5) = 0$.',
            'Menulis julat menggunakan huruf $x$ bukannya $f(x)$ atau $y$.',
            'Menggugurkan palang nilai mutlak dan menulis $f(-1) = -7$ bukannya $|-7| = 7$.'
          ],
          en: [
            'Testing endpoints only and writing $3 \\le f(x) \\le 7$, missing the V-vertex at $x = 2.5$ where $f(2.5) = 0$.',
            'Writing the range using $x$ instead of $f(x)$ or $y$.',
            'Dropping the modulus bars and writing $f(-1) = -7$ instead of $|-7| = 7$.'
          ]
        },
        scheme: [
          {
            badge: 'K1',
            bm: '(a) $f(-1) = |2(-1) - 5| = |-7| = 7$; $\\;f(4) = |2(4) - 5| = |3| = 3$.',
            en: '(a) $f(-1) = |2(-1) - 5| = |-7| = 7$; $\\;f(4) = |2(4) - 5| = |3| = 3$.',
            why: {
              bm: 'Nilai mutlak $|u|$ sentiasa memberi jarak positif daripada $0$, maka $|-7|$ bertukar menjadi $+7$.',
              en: 'The modulus $|u|$ always measures positive distance from $0$, turning any negative inside value like $|-7|$ into $+7$.'
            }
          },
          {
            badge: 'K1',
            bm: '(b) Cari bucu pantulan pada paksi-$x$: $2x - 5 = 0 \\implies 2x = 5 \\implies x = 2.5$, dan semak $2.5 \\in [-1, 4]$.',
            en: '(b) Find the V-vertex on the $x$-axis: $2x - 5 = 0 \\implies 2x = 5 \\implies x = 2.5$, and check $2.5 \\in [-1, 4]$.',
            why: {
              bm: 'Graf nilai mutlak melantun ke atas apabila ungkapan dalamannya $= 0$; kerana $x = 2.5$ berada dalam domain $[-1, 4]$, nilai $0$ mesti masuk dalam julat.',
              en: 'A modulus graph bounces off the $x$-axis where the inside expression equals $0$; since $2.5$ lies inside $[-1, 4]$, $0$ is reached in the range.'
            }
          },
          {
            badge: 'K1',
            bm: 'Bandingkan nilai bucu dan hujung: $f(2.5) = 0$, $f(4) = 3$, dan $f(-1) = 7$.',
            en: 'Compare the vertex and endpoint values: $f(2.5) = 0$, $f(4) = 3$, and $f(-1) = 7$.',
            why: {
              bm: 'Oleh sebab graf berbentuk V turun ke $0$ dahulu sebelum naik semula, nilai terendah ialah $0$ (pada bucu) dan nilai tertinggi ialah $7$ (hujung paling tinggi).',
              en: 'Because the V-graph drops down to $0$ at the vertex before rising again, the minimum is $0$ (at the vertex) and the maximum is $7$ (the taller endpoint).'
            }
          },
          {
            badge: 'N1',
            bm: 'Julat: $0 \\le f(x) \\le 7$.',
            en: 'Range: $0 \\le f(x) \\le 7$.',
            why: {
              bm: 'Julat merangkumi semua nilai output dari titik paling rendah ($0$) hingga paling tinggi ($7$) menggunakan $f(x)$ (atau $y$).',
              en: 'The range spans all output values from the lowest point ($0$) to the highest point ($7$), written using $f(x)$ (or $y$).'
            }
          }
        ]
      },
      {
        code: '1.3', marks: 3,
        topic: { bm: 'Fungsi Gubahan Dua Fungsi', en: 'Composite of Two Functions' },
        q: {
          bm: 'Diberi $f(x) = 3x - 2$ dan $g(x) = \\frac{4}{x-1},\\; x \\ne 1$.\n(a) Cari ungkapan fungsi gubahan $fg(x)$. [2m]\n(b) Cari nilai $x$ apabila $fg(x) = 10$. [1m]',
          en: 'Given $f(x) = 3x - 2$ and $g(x) = \\frac{4}{x-1},\\; x \\ne 1$.\n(a) Find the composite function $fg(x)$. [2m]\n(b) Find $x$ when $fg(x) = 10$. [1m]'
        },
        mistakes: {
          bm: [
            'Mendarab $f(x) \\times g(x)$ bukannya menggantikan $f(g(x))$.',
            'Tersilap tanda semasa mengembang $-2(x - 1)$ sebagai $-2x - 2$, lalu menulis $\\frac{10 - 2x}{x - 1}$ bukannya $\\frac{14 - 2x}{x - 1}$.',
            'Lupa menyatakan syarat penyebut $x \\ne 1$ pada jawapan akhir (a).'
          ],
          en: [
            'Multiplying $f(x) \\times g(x)$ instead of substituting $f(g(x))$.',
            'Sign error expanding $-2(x - 1)$ as $-2x - 2$, giving $\\frac{10 - 2x}{x - 1}$ instead of $\\frac{14 - 2x}{x - 1}$.',
            'Forgetting to state the domain restriction $x \\ne 1$ in part (a).'
          ]
        },
        scheme: [
          {
            badge: 'K1',
            bm: '(a) Gantikan $g(x)$ ke dalam $f$: $fg(x) = f\\!\\left(\\frac{4}{x-1}\\right) = 3\\left(\\frac{4}{x-1}\\right) - 2 = \\frac{12}{x-1} - 2$.',
            en: '(a) Substitute $g(x)$ into $f$: $fg(x) = f\\!\\left(\\frac{4}{x-1}\\right) = 3\\left(\\frac{4}{x-1}\\right) - 2 = \\frac{12}{x-1} - 2$.',
            why: {
              bm: 'Dalam $fg(x)$, fungsi $g$ bertindak di sebelah dalam, jadi setiap $x$ dalam $f(x) = 3x - 2$ digantikan dengan $\\frac{4}{x-1}$.',
              en: 'In $fg(x)$, $g(x)$ is the inner function, so replace every $x$ in $f(x) = 3x - 2$ with the whole fraction $\\frac{4}{x-1}$.'
            }
          },
          {
            badge: 'K1',
            bm: 'Samakan penyebut: $fg(x) = \\frac{12 - 2(x - 1)}{x - 1} = \\frac{12 - 2x + 2}{x - 1}$.',
            en: 'Use common denominator: $fg(x) = \\frac{12 - 2(x - 1)}{x - 1} = \\frac{12 - 2x + 2}{x - 1}$.',
            why: {
              bm: 'Tulis $2$ sebagai $\\frac{2(x-1)}{x-1}$ untuk menggabung pecahan, dan kembangkan $-2 \\times (-1) = +2$ dengan teliti.',
              en: 'Rewrite $2$ as $\\frac{2(x-1)}{x-1}$ to combine fractions, and distribute $-2 \\times (-1) = +2$ carefully.'
            }
          },
          {
            badge: 'N1',
            bm: '$fg(x) = \\frac{14 - 2x}{x - 1},\\; x \\ne 1$.',
            en: '$fg(x) = \\frac{14 - 2x}{x - 1},\\; x \\ne 1$.',
            why: {
              bm: 'Gabungkan pemalar $12 + 2 = 14$ dan nyatakan $x \\ne 1$ supaya penyebut tidak menjadi sifar.',
              en: 'Combine constants $12 + 2 = 14$ and state $x \\ne 1$ so the denominator never becomes zero.'
            }
          },
          {
            badge: 'N1',
            bm: '(b) $\\frac{14 - 2x}{x - 1} = 10 \\implies 14 - 2x = 10(x - 1) = 10x - 10 \\implies 24 = 12x \\implies x = 2$.',
            en: '(b) $\\frac{14 - 2x}{x - 1} = 10 \\implies 14 - 2x = 10(x - 1) = 10x - 10 \\implies 24 = 12x \\implies x = 2$.',
            why: {
              bm: 'Darab silang kedua-dua belah dengan $(x - 1)$ untuk menghapuskan pecahan, kemudian kumpulkan sebutan $x$ dan nombor.',
              en: 'Multiply both sides by $(x - 1)$ to clear the denominator, then group $x$ terms on one side and numbers on the other.'
            }
          }
        ]
      },
      {
        code: '1.4', marks: 3,
        topic: { bm: 'Menentukan Fungsi Luar f(x)', en: 'Finding Outer Function f(x)' },
        q: {
          bm: 'Diberi $g(x) = 2x + 3$ dan fungsi gubahan $fg(x) = 4x^2 + 12x + 5$. Cari fungsi $f(x)$. [3m]',
          en: 'Given $g(x) = 2x + 3$ and $fg(x) = 4x^2 + 12x + 5$. Find the function $f(x)$. [3m]'
        },
        mistakes: {
          bm: [
            'Mengembangkan $\\left(\\frac{u-3}{2}\\right)^2$ tanpa mengkuasadua penyebut $2^2 = 4$.',
            'Mengembangkan $(u - 3)^2$ secara salah sebagai $u^2 + 9$ atau $u^2 - 9$ (terlupa sebutan tengah $-6u$).',
            'Kekeliruan menukar semula pemboleh ubah gantian $u$ kepada $x$ pada jawapan akhir.'
          ],
          en: [
            'Expanding $\\left(\\frac{u-3}{2}\\right)^2$ without squaring the denominator $2^2 = 4$.',
            'Expanding $(u - 3)^2$ wrongly as $u^2 + 9$ or $u^2 - 9$ (missing the middle term $-6u$).',
            'Confusion when replacing the dummy variable $u$ back with $x$ in the final answer.'
          ]
        },
        scheme: [
          {
            badge: 'K1',
            bm: 'Biarkan $u = 2x + 3$, susun semula untuk $x$: $2x = u - 3 \\implies x = \\frac{u - 3}{2}$.',
            en: 'Let $u = 2x + 3$, then rearrange for $x$: $2x = u - 3 \\implies x = \\frac{u - 3}{2}$.',
            why: {
              bm: 'Dengan menamakan fungsi dalam sebagai $u$, kita menukar masalah mencari fungsi luar menjadi penggantian algebra biasa.',
              en: 'Naming the inner function $u$ turns finding the outer function into a straightforward algebraic substitution.'
            }
          },
          {
            badge: 'K1',
            bm: 'Gantikan $x = \\frac{u - 3}{2}$ ke dalam $4x^2 + 12x + 5$: $f(u) = 4\\left(\\frac{u^2 - 6u + 9}{4}\\right) + 12\\left(\\frac{u - 3}{2}\\right) + 5$.',
            en: 'Substitute $x = \\frac{u - 3}{2}$ into $4x^2 + 12x + 5$: $f(u) = 4\\left(\\frac{u^2 - 6u + 9}{4}\\right) + 12\\left(\\frac{u - 3}{2}\\right) + 5$.',
            why: {
              bm: 'Kembangkan pengangka $(u - 3)^2 = u^2 - 6u + 9$ dan penyebut $2^2 = 4$ supaya semua $x$ diganti dengan $u$.',
              en: 'Expand both the numerator $(u - 3)^2 = u^2 - 6u + 9$ and denominator $2^2 = 4$ so every $x$ is replaced by $u$.'
            }
          },
          {
            badge: 'K1',
            bm: 'Permudahkan faktor $\\frac{4}{4} = 1$ dan $\\frac{12}{2} = 6$: $f(u) = (u^2 - 6u + 9) + (6u - 18) + 5$.',
            en: 'Cancel factors $\\frac{4}{4} = 1$ and $\\frac{12}{2} = 6$: $f(u) = (u^2 - 6u + 9) + (6u - 18) + 5$.',
            why: {
              bm: 'Memansuhkan pekali luar dahulu mengelakkan nombor besar; perhatikan $-6u + 6u = 0$ saling terhapus.',
              en: 'Cancelling the outer factors first avoids large numbers; notice that $-6u + 6u = 0$ cancels cleanly.'
            }
          },
          {
            badge: 'N1',
            bm: 'Gabungkan sebutan serupa $9 - 18 + 5 = -4$: $f(u) = u^2 - 4 \\implies f(x) = x^2 - 4$.',
            en: 'Combine like terms $9 - 18 + 5 = -4$: $f(u) = u^2 - 4 \\implies f(x) = x^2 - 4$.',
            why: {
              bm: 'Huruf $u$ hanyalah pemegang tempat bagi input fungsi $f$, maka menggantikannya semula dengan $x$ memberi $f(x)$.',
              en: 'Since $u$ is only a dummy placeholder for the input of $f$, replacing $u$ with $x$ gives the required function $f(x)$.'
            }
          }
        ]
      },
      {
        code: '1.5', marks: 3,
        topic: { bm: 'Menentukan Fungsi Dalam g(x)', en: 'Finding Inner Function g(x)' },
        q: {
          bm: 'Diberi $f(x) = 5x - 4$ dan $fg(x) = \\frac{3}{x+2},\\; x \\ne -2$. Cari fungsi $g(x)$. [3m]',
          en: 'Given $f(x) = 5x - 4$ and $fg(x) = \\frac{3}{x+2},\\; x \\ne -2$. Find $g(x)$. [3m]'
        },
        mistakes: {
          bm: [
            'Mengguna kaedah songsang rumit sedangkan boleh ganti terus $f(g(x)) = 5g(x) - 4$.',
            'Kesilapan membahagi pecahan dengan $5$ (mendarab pengangka bukannya meletakkan $5$ di penyebut).',
            'Lupa menyatakan syarat penyebut $x \\ne -2$ pada jawapan akhir.'
          ],
          en: [
            'Overcomplicating with inverse methods instead of direct substitution $f(g(x)) = 5g(x) - 4$.',
            'Dividing the fraction by $5$ incorrectly (multiplying the numerator instead of putting $5$ in the denominator).',
            'Omitting the denominator restriction $x \\ne -2$ in the final answer.'
          ]
        },
        scheme: [
          {
            badge: 'K1',
            bm: 'Gantikan $x$ dalam $f(x) = 5x - 4$ dengan $g(x)$: $5g(x) - 4 = \\frac{3}{x + 2}$.',
            en: 'Replace $x$ in $f(x) = 5x - 4$ with $g(x)$: $5g(x) - 4 = \\frac{3}{x + 2}$.',
            why: {
              bm: 'Apabila fungsi luar $f$ diketahui dan fungsi dalam $g$ dicari, terus masukkan $g(x)$ ke tempat $x$ dalam $f(x)$.',
              en: 'When the outer function $f$ is known and the inner function $g$ is unknown, plug $g(x)$ straight into $f(x)$.'
            }
          },
          {
            badge: 'K1',
            bm: 'Pindahkan $-4$ dan samakan penyebut: $5g(x) = \\frac{3}{x + 2} + \\frac{4(x + 2)}{x + 2} = \\frac{3 + 4(x + 2)}{x + 2}$.',
            en: 'Move $-4$ and form common denominator: $5g(x) = \\frac{3}{x + 2} + \\frac{4(x + 2)}{x + 2} = \\frac{3 + 4(x + 2)}{x + 2}$.',
            why: {
              bm: 'Asingkan sebutan $g(x)$ dahulu, kemudian tukar $+4$ kepada $\\frac{4(x+2)}{x+2}$ supaya boleh digabung menjadi satu pecahan.',
              en: 'Isolate the $g(x)$ term first, then rewrite $+4$ as $\\frac{4(x+2)}{x+2}$ so both terms share one denominator.'
            }
          },
          {
            badge: 'K1',
            bm: 'Kembangkan pengangka: $5g(x) = \\frac{3 + 4x + 8}{x + 2} = \\frac{4x + 11}{x + 2}$.',
            en: 'Expand numerator: $5g(x) = \\frac{3 + 4x + 8}{x + 2} = \\frac{4x + 11}{x + 2}$.',
            why: {
              bm: 'Darab $4$ ke kedua-dua $x$ dan $2$ ($4 \\times 2 = 8$), lalu jumlahkan $3 + 8 = 11$.',
              en: 'Distribute $4$ to both $x$ and $2$ ($4 \\times 2 = 8$), then add $3 + 8 = 11$.'
            }
          },
          {
            badge: 'N1',
            bm: 'Bahagikan dengan $5$ (masukkan ke penyebut): $g(x) = \\frac{4x + 11}{5(x + 2)},\\; x \\ne -2$.',
            en: 'Divide by $5$ (place into denominator): $g(x) = \\frac{4x + 11}{5(x + 2)},\\; x \\ne -2$.',
            why: {
              bm: 'Membahagi pecahan $\\frac{A}{B}$ dengan $5$ sama seperti mendarab dengan $\\frac{1}{5}$, jadi $5$ berada di penyebut; $x \\ne -2$ mengelak pembahagian dengan sifar.',
              en: 'Dividing a fraction $\\frac{A}{B}$ by $5$ is multiplying by $\\frac{1}{5}$, putting $5$ in the denominator; $x \\ne -2$ avoids division by zero.'
            }
          }
        ]
      },
      {
        code: '1.6', marks: 3,
        topic: { bm: 'Fungsi Songsang Pecahan Algebra', en: 'Inverse of Rational Function' },
        q: {
          bm: 'Diberi $f(x) = \\frac{2x+1}{x-3},\\; x \\ne 3$.\n(a) Cari fungsi songsang $f^{-1}(x)$. [2m]\n(b) Nyatakan nilai $x$ apabila $f^{-1}(x)$ tidak tertakrif. [1m]',
          en: 'Given $f(x) = \\frac{2x+1}{x-3},\\; x \\ne 3$.\n(a) Find the inverse function $f^{-1}(x)$. [2m]\n(b) State the value of $x$ for which $f^{-1}(x)$ is undefined. [1m]'
        },
        mistakes: {
          bm: [
            'Mengelirukan fungsi songsang $f^{-1}(x)$ dengan pecahan terbalik / salingan (*reciprocal*) $\\frac{x-3}{2x+1}$!',
            'Gagal mengumpul dan memfaktorkan $y$ daripada $2y + 1 = xy - 3x$.',
            'Tersilap tanda apabila memindahkan $2y$ dan $-3x$ merentasi tanda $=$ (menulis $y(x + 2)$ atau $1 - 3x$).'
          ],
          en: [
            'Confusing inverse $f^{-1}(x)$ with reciprocal $\\frac{x-3}{2x+1}$!',
            'Failing to collect and factor out $y$ from $2y + 1 = xy - 3x$.',
            'Sign slip when moving $2y$ and $-3x$ across the $=$ sign (writing $y(x + 2)$ or $1 - 3x$).'
          ]
        },
        scheme: [
          {
            badge: 'K1',
            bm: '(a) Biarkan $y = f^{-1}(x)$, maka $f(y) = x \\implies \\frac{2y + 1}{y - 3} = x$.',
            en: '(a) Let $y = f^{-1}(x)$, so $f(y) = x \\implies \\frac{2y + 1}{y - 3} = x$.',
            why: {
              bm: 'Mengikut definisi songsang, jika $y = f^{-1}(x)$, maka $f(y) = x$; menggantikan $y$ ke dalam $f$ menukar fokus kepada mencari $y$.',
              en: 'By inverse definition, $y = f^{-1}(x)$ means $f(y) = x$; substituting $y$ into $f$ lets us solve for $y$ in terms of $x$.'
            }
          },
          {
            badge: 'K1',
            bm: 'Darab silang dengan $(y - 3)$: $2y + 1 = x(y - 3) = xy - 3x$.',
            en: 'Cross-multiply by $(y - 3)$: $2y + 1 = x(y - 3) = xy - 3x$.',
            why: {
              bm: 'Mendarab kedua-dua belah dengan penyebut $(y - 3)$ menghapuskan pecahan dan membuka kurungan.',
              en: 'Multiplying both sides by $(y - 3)$ clears the fraction and expands the brackets.'
            }
          },
          {
            badge: 'K1',
            bm: 'Kumpulkan sebutan $y$ dan faktorkan: $xy - 2y = 3x + 1 \\implies y(x - 2) = 3x + 1$.',
            en: 'Group $y$ terms and factorise: $xy - 2y = 3x + 1 \\implies y(x - 2) = 3x + 1$.',
            why: {
              bm: 'Meletakkan semua sebutan ber-$y$ di sebelah yang sama membolehkan kita memfaktorkan $y$ menjadi satu sebutan tunggal.',
              en: 'Collecting all $y$ terms on one side allows factoring out $y$, turning two $y$ terms into a single $y$.'
            }
          },
          {
            badge: 'N1',
            bm: 'Bahagi dengan $(x - 2)$: $f^{-1}(x) = \\frac{3x + 1}{x - 2},\\; x \\ne 2$.',
            en: 'Divide by $(x - 2)$: $f^{-1}(x) = \\frac{3x + 1}{x - 2},\\; x \\ne 2$.',
            why: {
              bm: 'Membahagi kedua-dua belah dengan $(x - 2)$ mengasingkan $y = f^{-1}(x)$, dan kita wajib kecualikan $x = 2$ agar penyebut bukan sifar.',
              en: 'Dividing by $(x - 2)$ isolates $y = f^{-1}(x)$, and $x = 2$ must be excluded so the denominator is never zero.'
            }
          },
          {
            badge: 'N1',
            bm: '(b) Tidak tertakrif apabila penyebut $= 0$: $x - 2 = 0 \\implies x = 2$.',
            en: '(b) Undefined when denominator $= 0$: $x - 2 = 0 \\implies x = 2$.',
            why: {
              bm: 'Pecahan tidak boleh dibahagi dengan sifar, jadi fungsi tidak tertakrif tepat pada nilai $x$ yang menjadikan penyebutnya sifar.',
              en: 'Division by zero is impossible, so a rational function is undefined exactly where its denominator equals zero.'
            }
          }
        ]
      },
      {
        code: '1.7', marks: 2,
        topic: { bm: 'Ujian Garis Mengufuk (Melintang) & Kewujudan Fungsi Songsang', en: 'Horizontal Line Test & Inverse Existence' },
        q: {
          bm: '(a) Terangkan mengapa $f(x) = x^2 - 4x + 5,\\; x \\in \\mathbb{R}$ tidak mempunyai fungsi songsang. [1m]\n(b) Nyatakan satu domain terhad supaya $f^{-1}(x)$ wujud. [1m]',
          en: '(a) Explain why $f(x) = x^2 - 4x + 5,\\; x \\in \\mathbb{R}$ has no inverse function. [1m]\n(b) State a suitable restricted domain so that $f^{-1}(x)$ exists. [1m]'
        },
        mistakes: {
          bm: [
            'Menyebut Ujian Garis Mencancang (*Vertical Line Test*) bukannya **Ujian Garis Mengufuk (*Horizontal Line Test*)**.',
            'Memilih domain yang merentasi paksi simetri $x = 2$ (contohnya $x \\ge 0$).',
            'Menulis ketaksamaan ketat $x > 2$ (tertinggal titik bucu $x = 2$) atau memberi julat $y \\ge 1$ bukannya domain $x \\ge 2$.'
          ],
          en: [
            'Citing the Vertical Line Test instead of the **Horizontal Line Test**.',
            'Choosing a domain that spans both sides of the axis of symmetry $x = 2$ (e.g. $x \\ge 0$).',
            'Writing strict $x > 2$ (omitting vertex $x = 2$) or giving the range $y \\ge 1$ instead of domain $x \\ge 2$.'
          ]
        },
        scheme: [
          {
            badge: 'K1',
            bm: '(a) Contoh penyangkal: $f(0) = 5$ dan $f(4) = 16 - 16 + 5 = 5$, jadi garis mengufuk $y = 5$ memotong graf pada 2 titik.',
            en: '(a) Counterexample: $f(0) = 5$ and $f(4) = 16 - 16 + 5 = 5$, so the horizontal line $y = 5$ cuts the graph at 2 points.',
            why: {
              bm: 'Menunjukkan dua nilai $x$ berbeza menghasilkan nilai $y$ yang sama membuktikan graf gagal Ujian Garis Mengufuk.',
              en: 'Showing two different $x$-values give the same $y$-value proves the graph fails the Horizontal Line Test.'
            }
          },
          {
            badge: 'N1',
            bm: '$f$ ialah fungsi banyak kepada satu (bukan satu kepada satu), maka $f^{-1}(x)$ tidak wujud.',
            en: '$f$ is a many-to-one function (not one-to-one), so $f^{-1}(x)$ does not exist.',
            why: {
              bm: 'Hanya fungsi satu kepada satu mempunyai fungsi songsang; jika banyak input berkongsi satu output, songsangnya akan memberi dua output bagi satu input.',
              en: 'Only one-to-one functions have an inverse function; otherwise reversing the mapping would assign two outputs to one input.'
            }
          },
          {
            badge: 'K1',
            bm: '(b) Cari paksi simetri melalui penyempurnaan kuasa dua: $f(x) = (x - 2)^2 + 1$ (atau $x = -\\frac{-4}{2(1)} = 2$).',
            en: '(b) Find the axis of symmetry by completing the square: $f(x) = (x - 2)^2 + 1$ (or $x = -\\frac{-4}{2(1)} = 2$).',
            why: {
              bm: 'Parabola hanya berubah arah di titik pusingannya ($x = 2$), maka memotong graf di $x = 2$ menjadikan setiap sebelah satu kepada satu.',
              en: 'A parabola turns around only at its vertex ($x = 2$), so splitting at $x = 2$ ensures each half passes the Horizontal Line Test.'
            }
          },
          {
            badge: 'N1',
            bm: 'Domain terhad: $x \\ge 2$ (atau $x \\le 2$).',
            en: 'Restricted domain: $x \\ge 2$ (or $x \\le 2$).',
            why: {
              bm: 'Mengambil sama ada cabang kanan ($x \\ge 2$) atau cabang kiri ($x \\le 2$) memastikan fungsi menjadi satu kepada satu termasuk titik pusingan.',
              en: 'Keeping either the right branch ($x \\ge 2$) or left branch ($x \\le 2$) makes the function one-to-one while including the vertex.'
            }
          }
        ]
      },
      {
        code: '1.8', marks: 4,
        topic: { bm: 'Lakaran Graf Fungsi Nilai Mutlak', en: 'Sketching Modulus Function Graph' },
        q: {
          bm: 'Lakar graf $f(x) = |3 - 2x|$ untuk domain $-1 \\le x \\le 3$. Nyatakan koordinat bucu dan julat fungsi. [4m]',
          en: 'Sketch $f(x) = |3 - 2x|$ for $-1 \\le x \\le 3$. State the vertex coordinates and range of the function. [4m]'
        },
        mistakes: {
          bm: [
            'Melukis garis lurus menembusi bawah paksi-$x$ tanpa memantulkannya ke atas.',
            'Tidak melabel bucu $(1.5, 0)$ dan titik hujung $(-1, 5)$ serta $(3, 3)$.',
            'Menulis julat sebagai $3 \\le f(x) \\le 5$ daripada titik hujung sahaja, terlupa nilai minimum $0$ pada bucu.'
          ],
          en: [
            'Drawing a straight line below the $x$-axis without reflecting it upward into a V-shape.',
            'Omitting labels for the vertex $(1.5, 0)$ and endpoints $(-1, 5), (3, 3)$.',
            'Writing the range as $3 \\le f(x) \\le 5$ from endpoints only, missing the minimum $0$ at the vertex.'
          ]
        },
        scheme: [
          {
            badge: 'K1',
            bm: 'Cari bucu pada paksi-$x$: $3 - 2x = 0 \\implies 2x = 3 \\implies x = 1.5$, maka bucu ialah $(1.5, 0)$.',
            en: 'Find the vertex on the $x$-axis: $3 - 2x = 0 \\implies 2x = 3 \\implies x = 1.5$, giving vertex $(1.5, 0)$.',
            why: {
              bm: 'Bucu graf nilai mutlak sentiasa menyentuh paksi-$x$ ($y = 0$) pada nilai $x$ yang menjadikan ungkapan dalamannya sifar.',
              en: 'The vertex of a modulus graph touches the $x$-axis ($y = 0$) where the expression inside the bars equals zero.'
            }
          },
          {
            badge: 'K1',
            bm: 'Hitung titik hujung dan pintasan-$y$: $f(-1) = |3 - 2(-1)| = 5$, $f(3) = |3 - 6| = 3$, dan $f(0) = |3| = 3$.',
            en: 'Evaluate endpoints and $y$-intercept: $f(-1) = |3 - 2(-1)| = 5$, $f(3) = |3 - 6| = 3$, and $f(0) = |3| = 3$.',
            why: {
              bm: 'Titik hujung $(-1, 5)$ dan $(3, 3)$ mengehadkan lakaran pada domain diberi, manakala $(0, 3)$ menandakan persilangan paksi-$y$.',
              en: 'Endpoints $(-1, 5)$ and $(3, 3)$ fix the exact start and end of the sketch, while $(0, 3)$ marks the $y$-axis crossing.'
            }
          },
          {
            badge: 'K1',
            bm: 'Lakar graf bentuk V di atas paksi-$x$ yang menyambung $(-1, 5) \\to (1.5, 0) \\to (3, 3)$ dengan label koordinat lengkap.',
            en: 'Sketch a V-shaped graph above the $x$-axis connecting $(-1, 5) \\to (1.5, 0) \\to (3, 3)$ with all coordinates labelled.',
            why: {
              bm: 'Oleh sebab $|3 - 2x| \\ge 0$, tiada bahagian graf boleh berada di bawah paksi-$x$; garisan turun ke $(1.5, 0)$ lalu melantun ke $(3, 3)$.',
              en: 'Since $|3 - 2x| \\ge 0$, no part of the graph goes below the $x$-axis; it slopes down to $(1.5, 0)$ and reflects up to $(3, 3)$.'
            }
          },
          {
            badge: 'N1',
            bm: 'Julat fungsi: $0 \\le f(x) \\le 5$.',
            en: 'Range of function: $0 \\le f(x) \\le 5$.',
            why: {
              bm: 'Dari lakaran V, nilai $y$ paling rendah ialah $0$ di bucu dan nilai $y$ paling tinggi ialah $5$ di hujung kiri.',
              en: 'Reading vertically from the V-sketch, the lowest $y$-value is $0$ at the vertex and the highest is $5$ at the left endpoint.'
            }
          }
        ]
      },
      {
        code: '1.9', marks: 4,
        topic: { bm: 'Fungsi Gubahan Berulang fⁿ(x)', en: 'Iterated Composite Functions fⁿ(x)' },
        q: {
          bm: 'Diberi $f(x) = \\frac{x}{x+1},\\; x \\ne -1$.\n(a) Cari ungkapan $f^2(x)$ dan $f^3(x)$. [2m]\n(b) Seterusnya, tentukan ungkapan $f^{30}(x)$ berdasarkan corak tersebut. [2m]',
          en: 'Given $f(x) = \\frac{x}{x+1},\\; x \\ne -1$.\n(a) Find $f^2(x)$ and $f^3(x)$. [2m]\n(b) Hence deduce an expression for $f^{30}(x)$. [2m]'
        },
        mistakes: {
          bm: [
            'Mendarab $\\left(\\frac{x}{x+1}\\right)^2$ bukannya menggantikan fungsi ke dalam dirinya sendiri $f(f(x))$.',
            'Cuai mempermudah pecahan bertingkat pada $f^2(x)$.',
            'Lupa menyatakan syarat penyebut $x \\ne -\\frac{1}{30}$ pada $f^{30}(x)$.'
          ],
          en: [
            'Squaring the fraction $\\left(\\frac{x}{x+1}\\right)^2$ instead of composing $f(f(x))$.',
            'Algebraic slip when simplifying the compound fraction in $f^2(x)$.',
            'Forgetting the domain restriction $x \\ne -\\frac{1}{30}$ for $f^{30}(x)$.'
          ]
        },
        scheme: [
          {
            badge: 'K1',
            bm: '(a) Gantikan $f(x)$ ke dalam $f$: $f^2(x) = f\\!\\left(\\frac{x}{x+1}\\right) = \\frac{\\frac{x}{x+1}}{\\frac{x}{x+1} + 1}$.',
            en: '(a) Substitute $f(x)$ into $f$: $f^2(x) = f\\!\\left(\\frac{x}{x+1}\\right) = \\frac{\\frac{x}{x+1}}{\\frac{x}{x+1} + 1}$.',
            why: {
              bm: '$f^2(x)$ bermaksud menggunakan fungsi $f$ dua kali berturut-turut iaitu $f(f(x))$, bukan mengkuasadua $f(x)$.',
              en: '$f^2(x)$ means applying $f$ twice in a row as $f(f(x))$, not squaring the expression.'
            }
          },
          {
            badge: 'K1',
            bm: 'Darab pengangka dan penyebut dengan $(x + 1)$: $f^2(x) = \\frac{x}{x + (x + 1)} = \\frac{x}{2x + 1}$.',
            en: 'Multiply top and bottom by $(x + 1)$: $f^2(x) = \\frac{x}{x + (x + 1)} = \\frac{x}{2x + 1}$.',
            why: {
              bm: 'Mendarab atas dan bawah dengan $(x + 1)$ menghapuskan semua pecahan kecil di dalam sekali gus.',
              en: 'Multiplying numerator and denominator by $(x + 1)$ clears the inner fractions cleanly in one step.'
            }
          },
          {
            badge: 'K1',
            bm: 'Ulang untuk $f^3(x) = f(f^2(x)) = \\frac{\\frac{x}{2x+1}}{\\frac{x}{2x+1} + 1} = \\frac{x}{x + (2x + 1)} = \\frac{x}{3x + 1}$.',
            en: 'Repeat for $f^3(x) = f(f^2(x)) = \\frac{\\frac{x}{2x+1}}{\\frac{x}{2x+1} + 1} = \\frac{x}{x + (2x + 1)} = \\frac{x}{3x + 1}$.',
            why: {
              bm: 'Mengira $f^3(x)$ mengesahkan sama ada pekali bagi $x$ di penyebut bertambah $1$ setiap kali digubah.',
              en: 'Computing $f^3(x)$ confirms that the coefficient of $x$ in the denominator increases by $1$ on each iteration.'
            }
          },
          {
            badge: 'K1',
            bm: '(b) Kenal pasti corak umum bagi $n$ ulangan: $f^n(x) = \\frac{x}{nx + 1}$.',
            en: '(b) Deduce the general $n$-th pattern: $f^n(x) = \\frac{x}{nx + 1}$.',
            why: {
              bm: 'Membandingkan $f^1(x) = \\frac{x}{1x+1}$, $f^2(x) = \\frac{x}{2x+1}$, dan $f^3(x) = \\frac{x}{3x+1}$ menunjukkan pekali $x$ sentiasa sama dengan $n$.',
              en: 'Comparing $f^1(x) = \\frac{x}{1x+1}$, $f^2(x) = \\frac{x}{2x+1}$, and $f^3(x) = \\frac{x}{3x+1}$ shows the coefficient of $x$ always matches $n$.'
            }
          },
          {
            badge: 'N1',
            bm: 'Gantikan $n = 30$: $f^{30}(x) = \\frac{x}{30x + 1},\\; x \\ne -\\frac{1}{30}$.',
            en: 'Substitute $n = 30$: $f^{30}(x) = \\frac{x}{30x + 1},\\; x \\ne -\\frac{1}{30}$.',
            why: {
              bm: 'Menggantikan $n = 30$ memberi jawapan terus, dan menetapkan $30x + 1 \\ne 0$ menghasilkan syarat $x \\ne -\\frac{1}{30}$.',
              en: 'Plugging $n = 30$ into the rule gives $f^{30}(x)$ directly, and solving $30x + 1 \\ne 0$ gives the domain restriction.'
            }
          }
        ]
      },
      {
        code: '1.10', marks: 4,
        topic: { bm: 'Aplikasi Harian: Diskaun & Kupon', en: 'Contextual Discount & Voucher Modeling' },
        q: {
          bm: 'Kedai menawarkan diskaun 20% diwakili $d(x) = 0.8x$ dan kupon tunai RM15 diwakili $c(x) = x - 15$.\n(a) Tulis fungsi gubahan jika diskaun 20% digunakan **sebelum** kupon tunai. [2m]\n(b) Jika harga asal RM120, hitung harga akhir. [2m]',
          en: 'A store offers a 20% discount $d(x) = 0.8x$ and an RM15 cash voucher $c(x) = x - 15$.\n(a) Find the composite function if the 20% discount is applied **before** the voucher. [2m]\n(b) Find the final price for an item originally priced at RM120. [2m]'
        },
        mistakes: {
          bm: [
            'Tertukar urutan fungsi: menulis $dc(x)$ (memberi $0.8(120 - 15) = \\text{RM }84.00$) sedangkan diskaun bertindak dahulu iaitu $cd(x) = c(d(x))$.',
            'Tersilap tanda apabila menulis $0.8x + 15$ bukannya $0.8x - 15$.'
          ],
          en: [
            'Reversing composition order: computing $dc(120) = 0.8(120 - 15) = \\text{RM }84.00$ instead of $cd(x) = c(d(x))$ when discount acts first.',
            'Sign slip writing $0.8x + 15$ instead of $0.8x - 15$.'
          ]
        },
        scheme: [
          {
            badge: 'K1',
            bm: '(a) Diskaun bertindak dahulu (fungsi dalam), kemudian kupon (fungsi luar): $cd(x) = c(d(x)) = c(0.8x)$.',
            en: '(a) Discount acts first (inner function), then voucher (outer function): $cd(x) = c(d(x)) = c(0.8x)$.',
            why: {
              bm: 'Fungsi gubahan dibaca dari kanan ke kiri (dalam ke luar), jadi tindakan pertama $d(x)$ diletakkan di sebelah dalam.',
              en: 'Composite functions act from right to left (inside out), so the action applied first sits on the inside.'
            }
          },
          {
            badge: 'K1',
            bm: 'Gantikan $0.8x$ ke dalam $c(x) = x - 15$: $cd(x) = 0.8x - 15$.',
            en: 'Substitute $0.8x$ into $c(x) = x - 15$: $cd(x) = 0.8x - 15$.',
            why: {
              bm: 'Menggantikan $x$ dalam $c(x)$ dengan harga diskaun $0.8x$ bermaksud RM15 ditolak selepas diskaun 20% dikira.',
              en: 'Replacing $x$ in $c(x)$ with the discounted price $0.8x$ subtracts RM15 after the 20% discount is taken.'
            }
          },
          {
            badge: 'N1',
            bm: '(b) Gantikan $x = 120$: $cd(120) = 0.8(120) - 15 = 96 - 15$.',
            en: '(b) Substitute $x = 120$: $cd(120) = 0.8(120) - 15 = 96 - 15$.',
            why: {
              bm: 'Mengira $0.8 \\times 120 = 96$ terlebih dahulu memberi harga selepas diskaun sebelum kupon RM15 ditolak.',
              en: 'Evaluating $0.8 \\times 120 = 96$ first gives the post-discount price before subtracting the RM15 voucher.'
            }
          },
          {
            badge: 'N1',
            bm: 'Harga akhir $= \\text{RM }81.00$.',
            en: 'Final price $= \\text{RM }81.00$.',
            why: {
              bm: 'Menolak kupon RM15 daripada RM96 menghasilkan harga bayaran akhir yang lengkap dengan unit RM.',
              en: 'Subtracting the RM15 voucher from RM96 gives the final payable price with the RM unit.'
            }
          }
        ]
      }
    ],

    // =========================================================================
    // TINGKATAN 4 BAB 2: FUNGSI KUADRATIK (10 SOALAN)
    // =========================================================================
    'f4-c2': [
      {
        code: '2.1', marks: 3,
        topic: { bm: 'Rumus Kuadratik', en: 'Quadratic Formula' },
        q: { bm: 'Selesaikan persamaan kuadratik $3x^2 - 7x + 2 = 0$. [3m]', en: 'Solve the quadratic equation $3x^2 - 7x + 2 = 0$. [3m]' },
        mistakes: {
          bm: [
            'Kesilapan tanda pada $-b$: menulis $-7$ bukannya $-(-7) = +7$.',
            'Meletakkan pembahagi $2a$ di bawah punca kuasa sahaja bukannya keseluruhan pengangka.',
            'Menulis $(-7)^2 = -49$ di dalam punca kuasa dua bukannya $+49$.'
          ],
          en: [
            'Sign error on $-b$: writing $-7$ instead of $-(-7) = +7$.',
            'Dividing only the square-root term by $2a$ instead of the entire numerator.',
            'Writing $(-7)^2 = -49$ inside the square root instead of $+49$.'
          ]
        },
        scheme: [
          {
            badge: 'P1',
            bm: 'Kenal pasti $a = 3,\\; b = -7,\\; c = 2$ dan ganti ke dalam rumus: $x = \\frac{-(-7) \\pm \\sqrt{(-7)^2 - 4(3)(2)}}{2(3)}$.',
            en: 'Identify $a = 3,\\; b = -7,\\; c = 2$ and substitute into the formula: $x = \\frac{-(-7) \\pm \\sqrt{(-7)^2 - 4(3)(2)}}{2(3)}$.',
            why: {
              bm: 'Menulis nilai $a, b, c$ bersama tandanya dahulu mengelakkan kecuaian tanda negatif apabila masuk ke dalam rumus kuadratik.',
              en: 'Listing $a, b, c$ with their signs first prevents dropping negative signs when plugging into the quadratic formula.'
            }
          },
          {
            badge: 'K1',
            bm: 'Hitung di dalam punca kuasa: $(-7)^2 - 4(3)(2) = 49 - 24 = 25$, maka $x = \\frac{7 \\pm \\sqrt{25}}{6} = \\frac{7 \\pm 5}{6}$.',
            en: 'Compute inside the root: $(-7)^2 - 4(3)(2) = 49 - 24 = 25$, so $x = \\frac{7 \\pm \\sqrt{25}}{6} = \\frac{7 \\pm 5}{6}$.',
            why: {
              bm: 'Mengkuasadua nombor negatif dalam kurungan sentiasa menghasilkan positif ($+49$), dan $\\sqrt{25} = 5$ memudahkan dua pecahan.',
              en: 'Squaring a negative number inside brackets always gives a positive result ($+49$), and $\\sqrt{25} = 5$ gives two simple fractions.'
            }
          },
          {
            badge: 'K1',
            bm: 'Pecahkan kepada dua kes: $x = \\frac{7 + 5}{6} = \\frac{12}{6}$ atau $x = \\frac{7 - 5}{6} = \\frac{2}{6}$.',
            en: 'Split into two branches: $x = \\frac{7 + 5}{6} = \\frac{12}{6}$ or $x = \\frac{7 - 5}{6} = \\frac{2}{6}$.',
            why: {
              bm: 'Simbol $\\pm$ bermaksud dua pengiraan berasingan — satu menambah $5$ dan satu lagi menolak $5$.',
              en: 'The $\\pm$ symbol produces two separate calculations — one adding $5$ and the other subtracting $5$.'
            }
          },
          {
            badge: 'N1',
            bm: '$x = 2$ atau $x = \\frac{1}{3}$.',
            en: '$x = 2$ or $x = \\frac{1}{3}$.',
            why: {
              bm: 'Sentiasa permudahkan pecahan ($\\frac{2}{6} = \\frac{1}{3}$) kepada bentuk termudah tepat untuk markah penuh.',
              en: 'Always reduce fractions ($\\frac{2}{6} = \\frac{1}{3}$) to simplest exact form for full accuracy marks.'
            }
          }
        ]
      },
      {
        code: '2.2', marks: 3,
        topic: { bm: 'Syarat Pembezalayan Dua Punca Berbeza', en: 'Discriminant Condition for Distinct Roots' },
        q: { bm: 'Persamaan $x^2 + 2kx + (k + 6) = 0$ mempunyai dua punca nyata dan berbeza. Cari julat nilai $k$. [3m]', en: 'The equation $x^2 + 2kx + (k + 6) = 0$ has two distinct real roots. Find the range of values of $k$. [3m]' },
        mistakes: {
          bm: [
            'Mengguna $\\ge 0$ bukannya $> 0$ bagi dua punca **berbeza**.',
            'Mengambil satu rantau tengah sahaja bukannya dua rantau luar bagi $(k - 3)(k + 2) > 0$.',
            'Tersilap mengira $(2k)^2 = 2k^2$ sedangkan $(2k)^2 = 4k^2$.'
          ],
          en: [
            'Using $\\ge 0$ instead of strict $> 0$ for **distinct** roots.',
            'Failing to take the two outer regions for $(k - 3)(k + 2) > 0$.',
            'Squaring error $(2k)^2 = 2k^2$ instead of $4k^2$.'
          ]
        },
        scheme: [
          {
            badge: 'P1',
            bm: 'Kenal pasti $a = 1,\\; b = 2k,\\; c = k + 6$; dua punca nyata berbeza memerlukan $b^2 - 4ac > 0$: $(2k)^2 - 4(1)(k + 6) > 0$.',
            en: 'Identify $a = 1,\\; b = 2k,\\; c = k + 6$; two distinct real roots require $b^2 - 4ac > 0$: $(2k)^2 - 4(1)(k + 6) > 0$.',
            why: {
              bm: 'Perkataan "berbeza" bermaksud dua pintasan-$x$ yang berlainan, jadi pembezalayan mestilah ketat melebihi sifar ($> 0$, bukan $\\ge 0$).',
              en: 'The word "distinct" means two separate $x$-intercepts, so the discriminant must be strictly greater than zero ($> 0$, not $\\ge 0$).'
            }
          },
          {
            badge: 'K1',
            bm: 'Kembangkan dengan teliti: $4k^2 - 4k - 24 > 0$.',
            en: 'Expand carefully: $4k^2 - 4k - 24 > 0$.',
            why: {
              bm: 'Kuasa dua kedua-dua $2$ dan $k$ dalam $(2k)^2 = 4k^2$, serta darab $-4$ kepada $k$ dan $+6$ untuk mendapat $-24$.',
              en: 'Square both $2$ and $k$ in $(2k)^2 = 4k^2$, and distribute $-4$ across both $k$ and $+6$ to get $-24$.'
            }
          },
          {
            badge: 'K1',
            bm: 'Bahagi dengan $4$ dan faktorkan: $k^2 - k - 6 > 0 \\implies (k - 3)(k + 2) > 0$.',
            en: 'Divide by $4$ and factorise: $k^2 - k - 6 > 0 \\implies (k - 3)(k + 2) > 0$.',
            why: {
              bm: 'Membahagi semua sebutan dengan $+4$ mengecilkan nombor tanpa membalikkan tanda ketaksamaan, memudahkan pemfaktoran.',
              en: 'Dividing every term by positive $4$ simplifies the coefficients without flipping the inequality sign, making factorisation straightforward.'
            }
          },
          {
            badge: 'K1',
            bm: 'Lakar parabola $\\cup$ ($a = 1 > 0$) berakar $k = -2$ dan $k = 3$; syarat $> 0$ memilih dua ekor luar di atas paksi.',
            en: 'Sketch a $\\cup$-shaped parabola ($a = 1 > 0$) with roots $k = -2$ and $k = 3$; $> 0$ selects the two outer tails above the axis.',
            why: {
              bm: 'Bagi graf $\\cup$, bahagian bernilai positif ($> 0$) sentiasa berada di sebelah luar kedua-dua punca.',
              en: 'For a $\\cup$-curve, values greater than $0$ lie outside the two roots (to the left of $-2$ and right of $3$).'
            }
          },
          {
            badge: 'N1',
            bm: '$k < -2$ atau $k > 3$.',
            en: '$k < -2$ or $k > 3$.',
            why: {
              bm: 'Dua ekor luar yang terpisah mesti ditulis sebagai dua ketaksamaan berasingan yang disambungkan dengan "atau" ("or").',
              en: 'Two disconnected outer tails must be written as two separate inequalities joined by "or".'
            }
          }
        ]
      },
      {
        code: '2.3', marks: 4,
        topic: { bm: 'Garis Lurus Tangen kepada Parabola', en: 'Straight Line Tangent to a Parabola' },
        q: { bm: 'Garis lurus $y = 2x + c$ menyentuh lengkung $y = x^2 - 4x + 7$ pada satu titik.\n(a) Cari nilai $c$. [3m]\n(b) Cari koordinat titik sentuhan tersebut. [1m]', en: 'The line $y = 2x + c$ touches the curve $y = x^2 - 4x + 7$ at one point.\n(a) Find $c$. [3m]\n(b) Find the coordinates of the point of contact. [1m]' },
        mistakes: {
          bm: [
            'Lupa menyusun persamaan kepada bentuk am $ax^2 + bx + k = 0$ sebelum mengambil $a, b, c$.',
            'Mengguna $b^2 - 4ac > 0$ bukannya $= 0$ untuk tangen.',
            'Kesilapan tanda apabila mengembang $-4(7 - c) = -28 - 4c$ bukannya $-28 + 4c$.'
          ],
          en: [
            'Forgetting to rearrange into standard form $= 0$ before reading $a, b, c$.',
            'Using $b^2 - 4ac > 0$ instead of $= 0$ for tangency.',
            'Sign error expanding $-4(7 - c)$ as $-28 - 4c$ instead of $-28 + 4c$.'
          ]
        },
        scheme: [
          {
            badge: 'K1',
            bm: '(a) Samakan kedua-dua persamaan dan susun ke $= 0$: $x^2 - 4x + 7 = 2x + c \\implies x^2 - 6x + (7 - c) = 0$.',
            en: '(a) Equate both equations and rearrange to $= 0$: $x^2 - 4x + 7 = 2x + c \\implies x^2 - 6x + (7 - c) = 0$.',
            why: {
              bm: 'Kita hanya boleh membaca pekali $a, b, c$ untuk pembezalayan selepas semua sebutan dipindahkan ke sebelah kiri agar RHS $= 0$.',
              en: 'You can only read quadratic coefficients after moving every term to one side so the other side equals $0$.'
            }
          },
          {
            badge: 'K1',
            bm: 'Syarat tangen (sentuh satu titik) ialah $b^2 - 4ac = 0$: $(-6)^2 - 4(1)(7 - c) = 0$.',
            en: 'Tangency (touching at one point) requires $b^2 - 4ac = 0$: $(-6)^2 - 4(1)(7 - c) = 0$.',
            why: {
              bm: 'Garis tangen menyentuh lengkung pada satu punca berulang sahaja, yang hanya berlaku apabila pembezalayan sama dengan $0$.',
              en: 'A tangent touches the curve at a single repeated root, which occurs only when the discriminant equals $0$.'
            }
          },
          {
            badge: 'K1',
            bm: 'Kembangkan dan selesaikan: $36 - 28 + 4c = 0 \\implies 8 + 4c = 0 \\implies 4c = -8 \\implies c = -2$.',
            en: 'Expand and solve: $36 - 28 + 4c = 0 \\implies 8 + 4c = 0 \\implies 4c = -8 \\implies c = -2$.',
            why: {
              bm: 'Mendarab $-4$ dengan $(7 - c)$ memberi $-28 + 4c$ kerana negatif darab negatif menghasilkan positif.',
              en: 'Distributing $-4$ across $(7 - c)$ yields $-28 + 4c$ because a negative times a negative is positive.'
            }
          },
          {
            badge: 'N1',
            bm: '(b) Ganti $c = -2$ ke dalam $x^2 - 6x + (7 - c) = 0$: $x^2 - 6x + 9 = 0 \\implies (x - 3)^2 = 0 \\implies x = 3$.',
            en: '(b) Substitute $c = -2$ into $x^2 - 6x + (7 - c) = 0$: $x^2 - 6x + 9 = 0 \\implies (x - 3)^2 = 0 \\implies x = 3$.',
            why: {
              bm: 'Memasukkan semula $c = -2$ menghasilkan kuasa dua sempurna, memberi koordinat-$x$ tunggal bagi titik sentuhan.',
              en: 'Plugging $c = -2$ back produces a perfect square, giving the unique $x$-coordinate of the point of contact.'
            }
          },
          {
            badge: 'N1',
            bm: 'Cari $y$ melalui $y = 2x + c$: $y = 2(3) + (-2) = 4$, maka titik sentuhan ialah $(3, 4)$.',
            en: 'Find $y$ from $y = 2x + c$: $y = 2(3) + (-2) = 4$, so the point of contact is $(3, 4)$.',
            why: {
              bm: 'Koordinat mesti mempunyai nilai $x$ dan $y$; menggantikan $x = 3$ dan $c = -2$ ke dalam persamaan garis lurus ialah cara terpantas.',
              en: 'Coordinates require both $x$ and $y$; substituting $x = 3$ and $c = -2$ into the straight line is the fastest way to get $y$.'
            }
          }
        ]
      },
      {
        code: '2.4', marks: 3,
        topic: { bm: 'Hasil Tambah dan Hasil Darab Punca (HTP & HDP)', en: 'Sum and Product of Roots (SOR & POR)' },
        q: { bm: 'Diberi $\\alpha$ dan $\\beta$ ialah punca bagi $2x^2 - 5x - 4 = 0$. Tanpa menyelesaikan persamaan, cari nilai $\\frac{1}{\\alpha} + \\frac{1}{\\beta}$. [3m]', en: 'Given $\\alpha$ and $\\beta$ are roots of $2x^2 - 5x - 4 = 0$. Without solving the equation, find $\\frac{1}{\\alpha} + \\frac{1}{\\beta}$. [3m]' },
        mistakes: {
          bm: [
            'Menyelesaikan punca perpuluhan (melanggar arahan "tanpa menyelesaikan").',
            'Salah algebra pecahan: menganggap $\\frac{1}{\\alpha} + \\frac{1}{\\beta} = \\frac{1}{\\alpha + \\beta}$!',
            'Menulis $\\alpha + \\beta = -\\frac{5}{2}$ kerana terlupa tanda negatif berganda dalam $-\\frac{b}{a} = -\\frac{-5}{2}$.'
          ],
          en: [
            'Computing decimal roots directly (violating "without solving").',
            'Illegal fraction addition: writing $\\frac{1}{\\alpha} + \\frac{1}{\\beta} = \\frac{1}{\\alpha + \\beta}$!',
            'Writing $\\alpha + \\beta = -\\frac{5}{2}$ by forgetting the double negative in $-\\frac{b}{a} = -\\frac{-5}{2}$.'
          ]
        },
        scheme: [
          {
            badge: 'K1',
            bm: 'Baca $a = 2, b = -5, c = -4$: $\\alpha + \\beta = -\\frac{-5}{2} = \\frac{5}{2}$ dan $\\alpha\\beta = \\frac{-4}{2} = -2$.',
            en: 'Read $a = 2, b = -5, c = -4$: $\\alpha + \\beta = -\\frac{-5}{2} = \\frac{5}{2}$ and $\\alpha\\beta = \\frac{-4}{2} = -2$.',
            why: {
              bm: 'Mengikut rumus Vieta, Hasil Tambah Punca $= -\\frac{b}{a}$ (negatif berganda jadi $+$) dan Hasil Darab Punca $= \\frac{c}{a}$.',
              en: 'By Vieta formulas, Sum of Roots $= -\\frac{b}{a}$ (double negative becomes $+$) and Product of Roots $= \\frac{c}{a}$.'
            }
          },
          {
            badge: 'K1',
            bm: 'Samakan penyebut pecahan: $\\frac{1}{\\alpha} + \\frac{1}{\\beta} = \\frac{\\beta + \\alpha}{\\alpha\\beta} = \\frac{\\alpha + \\beta}{\\alpha\\beta}$.',
            en: 'Combine fractions over common denominator $\\alpha\\beta$: $\\frac{1}{\\alpha} + \\frac{1}{\\beta} = \\frac{\\beta + \\alpha}{\\alpha\\beta} = \\frac{\\alpha + \\beta}{\\alpha\\beta}$.',
            why: {
              bm: 'Pecahan berlainan penyebut tidak boleh ditambah terus; menyamakan penyebut mengubahnya kepada bentuk $\\alpha + \\beta$ dan $\\alpha\\beta$.',
              en: 'Fractions with different denominators cannot be added straight across; a common denominator expresses everything using $\\alpha + \\beta$ and $\\alpha\\beta$.'
            }
          },
          {
            badge: 'K1',
            bm: 'Gantikan nilai: $\\frac{5/2}{-2} = \\frac{5}{2} \\div (-2) = \\frac{5}{2} \\times \\left(-\\frac{1}{2}\\right)$.',
            en: 'Substitute values: $\\frac{5/2}{-2} = \\frac{5}{2} \\div (-2) = \\frac{5}{2} \\times \\left(-\\frac{1}{2}\\right)$.',
            why: {
              bm: 'Membahagi pecahan dengan $-2$ adalah sama dengan mendarab salingan $-\\frac{1}{2}$, mengelakkan kesilapan pecahan bertingkat.',
              en: 'Dividing a fraction by $-2$ is the same as multiplying by its reciprocal $-\\frac{1}{2}$, avoiding compound-fraction slips.'
            }
          },
          {
            badge: 'N1',
            bm: '$= -\\frac{5}{4}$.',
            en: '$= -\\frac{5}{4}$.',
            why: {
              bm: 'Darab pengangka ($5 \\times -1$) dan darab penyebut ($2 \\times 2$) untuk memperoleh pecahan tepat.',
              en: 'Multiply numerators ($5 \\times -1$) and denominators ($2 \\times 2$) to obtain the exact fraction.'
            }
          }
        ]
      },
      {
        code: '2.5', marks: 4,
        topic: { bm: 'Membentuk Persamaan Kuadratik Baharu', en: 'Forming a New Quadratic Equation' },
        q: { bm: 'Diberi $\\alpha$ dan $\\beta$ ialah punca bagi $x^2 - 4x + 1 = 0$. Bentuk persamaan kuadratik baharu dengan punca $2\\alpha$ dan $2\\beta$. [4m]', en: 'Given $\\alpha, \\beta$ are roots of $x^2 - 4x + 1 = 0$. Form a quadratic equation with roots $2\\alpha$ and $2\\beta$. [4m]' },
        mistakes: {
          bm: [
            'Tertinggal "$= 0$" pada jawapan akhir (ungkapan bukannya persamaan!).',
            'Mengira $\\text{HDP} = (2\\alpha)(2\\beta) = 2\\alpha\\beta$ bukannya $4\\alpha\\beta$.',
            'Tersilap tanda menulis $x^2 + 8x + 4 = 0$ kerana terlupa tanda tolak dalam $x^2 - (\\text{HTP})x + \\text{HDP} = 0$.'
          ],
          en: [
            'Omitting "$= 0$" at the end (an expression is not an equation!).',
            'Computing $\\text{POR} = (2\\alpha)(2\\beta) = 2\\alpha\\beta$ instead of $4\\alpha\\beta$.',
            'Sign error writing $x^2 + 8x + 4 = 0$ by forgetting the minus sign in $x^2 - (\\text{SOR})x + \\text{POR} = 0$.'
          ]
        },
        scheme: [
          {
            badge: 'K1',
            bm: 'Daripada persamaan asal $x^2 - 4x + 1 = 0$: $\\alpha + \\beta = 4$ dan $\\alpha\\beta = 1$.',
            en: 'From the original equation $x^2 - 4x + 1 = 0$: $\\alpha + \\beta = 4$ and $\\alpha\\beta = 1$.',
            why: {
              bm: 'Dapatkan Hasil Tambah dan Hasil Darab Punca asal dahulu tanpa menyelesaikan puncanya.',
              en: 'Extract the original Sum and Product of Roots first without solving the quadratic equation.'
            }
          },
          {
            badge: 'K1',
            bm: '$\\text{HTP}_{\\text{baru}} = 2\\alpha + 2\\beta = 2(\\alpha + \\beta) = 2(4) = 8$.',
            en: '$\\text{SOR}_{\\text{new}} = 2\\alpha + 2\\beta = 2(\\alpha + \\beta) = 2(4) = 8$.',
            why: {
              bm: 'Memfaktorkan $2$ menukar hasil tambah punca baharu kepada gandaan terus nilai $\\alpha + \\beta$ yang diketahui.',
              en: 'Factoring out $2$ turns the new sum of roots into a direct multiple of the known $\\alpha + \\beta$.'
            }
          },
          {
            badge: 'K1',
            bm: '$\\text{HDP}_{\\text{baru}} = (2\\alpha)(2\\beta) = 4\\alpha\\beta = 4(1) = 4$.',
            en: '$\\text{POR}_{\\text{new}} = (2\\alpha)(2\\beta) = 4\\alpha\\beta = 4(1) = 4$.',
            why: {
              bm: 'Mendarab dua sebutan mendarab kedua-dua pekali ($2 \\times 2 = 4$), bukan hanya satu nombor $2$.',
              en: 'Multiplying two terms multiplies both coefficients ($2 \\times 2 = 4$), not just a single $2$.'
            }
          },
          {
            badge: 'N1',
            bm: 'Ganti ke dalam $x^2 - (\\text{HTP})x + \\text{HDP} = 0$: $x^2 - 8x + 4 = 0$.',
            en: 'Substitute into $x^2 - (\\text{SOR})x + \\text{POR} = 0$: $x^2 - 8x + 4 = 0$.',
            why: {
              bm: 'Templat piawai sentiasa mempunyai tanda tolak di depan pekali $x$ ($-8x$) dan mesti berakhir dengan "$= 0$".',
              en: 'The standard template always has a minus sign before the $x$ term ($-8x$) and must end with "$= 0$".'
            }
          }
        ]
      },
      {
        code: '2.6', marks: 3,
        topic: { bm: 'Penyempurnaan Kuasa Dua (Bentuk Verteks)', en: 'Completing the Square (Vertex Form)' },
        q: { bm: 'Ungkapkan $f(x) = 2x^2 - 8x + 5$ dalam bentuk verteks $f(x) = a(x - h)^2 + k$. [3m]', en: 'Express $f(x) = 2x^2 - 8x + 5$ in vertex form $f(x) = a(x - h)^2 + k$. [3m]' },
        mistakes: {
          bm: [
            'Lupa memfaktorkan $2$ keluar daripada dua sebutan pertama sahaja.',
            'Lupa mendarab $-4$ dengan faktor luar $2$ semasa mengeluarkannya dari kurungan.',
            'Salah membahagi dua pekali $-4$ atau turut memfaktorkan $2$ keluar daripada $+5$ sebagai $2[x^2 - 4x + 5]$.'
          ],
          en: [
            'Forgetting to factor $2$ out of the first two terms only.',
            'Forgetting to multiply $-4$ by the outer factor $2$ when expanding brackets.',
            'Halving $-4$ wrongly or factoring $2$ out of $+5$ as well, writing $2[x^2 - 4x + 5]$.'
          ]
        },
        scheme: [
          {
            badge: 'K1',
            bm: 'Faktorkan $2$ daripada dua sebutan pertama sahaja: $f(x) = 2[x^2 - 4x] + 5$.',
            en: 'Factor $2$ out of the first two terms only: $f(x) = 2[x^2 - 4x] + 5$.',
            why: {
              bm: 'Penyempurnaan kuasa dua paling mudah dilakukan apabila pekali $x^2$ di dalam kurungan ialah $1$; biarkan pemalar $+5$ di luar.',
              en: 'Completing the square is easiest when the coefficient of $x^2$ inside the bracket is $1$; leave $+5$ outside.'
            }
          },
          {
            badge: 'K1',
            bm: 'Bahagi dua pekali $x$ ($\\frac{-4}{2} = -2$), kemudian tambah dan tolak $(-2)^2$ di dalam: $f(x) = 2[x^2 - 4x + (-2)^2 - (-2)^2] + 5$.',
            en: 'Halve the $x$-coefficient ($\\frac{-4}{2} = -2$), then add and subtract $(-2)^2$ inside: $f(x) = 2[x^2 - 4x + (-2)^2 - (-2)^2] + 5$.',
            why: {
              bm: 'Menambah dan menolak nombor yang sama $(-2)^2 = 4$ memberi jumlah bersih $0$, mengekalkan nilai fungsi sambil membina kuasa dua sempurna.',
              en: 'Adding and subtracting the same value $(-2)^2 = 4$ adds $0$ net, preserving equality while building a perfect square.'
            }
          },
          {
            badge: 'K1',
            bm: 'Bentuk kuasa dua sempurna: $f(x) = 2[(x - 2)^2 - 4] + 5$.',
            en: 'Form the perfect square: $f(x) = 2[(x - 2)^2 - 4] + 5$.',
            why: {
              bm: 'Tiga sebutan pertama $x^2 - 4x + (-2)^2$ diringkaskan menjadi $(x - 2)^2$, manakala $-(-2)^2 = -4$ kekal di dalam kurungan siku.',
              en: 'The first three terms $x^2 - 4x + (-2)^2$ factor into $(x - 2)^2$, leaving $-(-2)^2 = -4$ inside the square bracket.'
            }
          },
          {
            badge: 'K1',
            bm: 'Kembangkan faktor luar $2$: $f(x) = 2(x - 2)^2 + 2(-4) + 5 = 2(x - 2)^2 - 8 + 5$.',
            en: 'Distribute the outer $2$: $f(x) = 2(x - 2)^2 + 2(-4) + 5 = 2(x - 2)^2 - 8 + 5$.',
            why: {
              bm: 'Oleh sebab $-4$ terkurung di dalam $2[\\dots]$, membebaskannya memerlukan pendaraban $2(-4) = -8$.',
              en: 'Because $-4$ sits inside $2[\\dots]$, pulling it out of the bracket requires multiplying by $2$ ($2 \\times -4 = -8$).'
            }
          },
          {
            badge: 'N1',
            bm: 'Permudahkan pemalar luar: $f(x) = 2(x - 2)^2 - 3$.',
            en: 'Simplify constants outside: $f(x) = 2(x - 2)^2 - 3$.',
            why: {
              bm: 'Menggabungkan $-8 + 5 = -3$ melengkapkan bentuk verteks $a(x - h)^2 + k$ dengan $a = 2, h = 2, k = -3$.',
              en: 'Combining $-8 + 5 = -3$ finishes the vertex form $a(x - h)^2 + k$ with $a = 2, h = 2, k = -3$.'
            }
          }
        ]
      },
      {
        code: '2.7', marks: 2,
        topic: { bm: 'Paksi Simetri dan Titik Optimum', en: 'Axis of Symmetry & Optimum Point' },
        q: { bm: 'Diberi $f(x) = -3(x + 4)^2 + 11$. Nyatakan:\n(a) Nilai maksimum $f(x)$ dan nilai $x$ sepadan. [1m]\n(b) Persamaan paksi simetri. [1m]', en: 'Given $f(x) = -3(x + 4)^2 + 11$. State:\n(a) Maximum value of $f(x)$ and corresponding $x$. [1m]\n(b) Equation of the axis of symmetry. [1m]' },
        mistakes: {
          bm: [
            'Menulis paksi simetri sebagai nombor "$-4$" sahaja tanpa persamaan garis "$x = -4$".',
            'Tersilap tanda pada $(x + 4)$ dengan menulis $x = +4$.',
            'Menyebut $(-4, 11)$ sebagai titik minimum walaupun $a = -3 < 0$.'
          ],
          en: [
            'Writing "$-4$" instead of the line equation "$x = -4$".',
            'Sign error on $(x + 4)$, writing $x = +4$.',
            'Calling $(-4, 11)$ a minimum point even though $a = -3 < 0$.'
          ]
        },
        scheme: [
          {
            badge: 'K1',
            bm: 'Bandingkan $-3(x + 4)^2 + 11$ dengan $a(x - h)^2 + k$: $a = -3 < 0$ (lengkok $\\cap$ / maksimum), $x + 4 = 0 \\implies h = -4$, $k = 11$.',
            en: 'Compare $-3(x + 4)^2 + 11$ with $a(x - h)^2 + k$: $a = -3 < 0$ (frown / maximum), $x + 4 = 0 \\implies h = -4$, $k = 11$.',
            why: {
              bm: 'Menyamakan kurungan $(x + 4)$ dengan $0$ memberi $x = -4$ tanpa silap tanda, dan $a = -3 < 0$ mengesahkan lengkok mempunyai maksimum.',
              en: 'Setting the bracket $(x + 4) = 0$ finds $x = -4$ without sign confusion, and $a = -3 < 0$ confirms a maximum turning point.'
            }
          },
          {
            badge: 'N1',
            bm: '(a) Nilai maksimum $= 11$ apabila $x = -4$.',
            en: '(a) Maximum value $= 11$ at $x = -4$.',
            why: {
              bm: 'Kerana $-3(x + 4)^2 \\le 0$ bagi semua $x$, nilai $f(x)$ mencapai puncak $11$ tepat apabila bahagian kuasa dua bernilai $0$.',
              en: 'Since $-3(x + 4)^2 \\le 0$ for all $x$, $f(x)$ peaks at $11$ exactly when the squared term is $0$.'
            }
          },
          {
            badge: 'N1',
            bm: '(b) Persamaan paksi simetri: $x = -4$.',
            en: '(b) Equation of axis of symmetry: $x = -4$.',
            why: {
              bm: 'Paksi simetri ialah garis mencancang melalui titik pusingan $(-4, 11)$, jadi ia mesti ditulis sebagai persamaan garis $x = -4$.',
              en: 'The axis of symmetry is the vertical line through the vertex $(-4, 11)$, so it must be written as the line equation $x = -4$.'
            }
          }
        ]
      },
      {
        code: '2.8', marks: 3,
        topic: { bm: 'Ketaksamaan Kuadratik Bukan Sifar', en: 'Non-Zero Quadratic Inequality' },
        q: { bm: 'Cari julat nilai $x$ bagi ketaksamaan $(2x - 1)(x + 3) \\ge 7$. [3m]', en: 'Find the range of values of $x$ for $(2x - 1)(x + 3) \\ge 7$. [3m]' },
        mistakes: {
          bm: [
            'Terus memisah $2x - 1 \\ge 7$ dan $x + 3 \\ge 7$! Sifat sifar hanya sah apabila sebelah kanan $= 0$.',
            'Salah tanda dalam pembezalayan $25 - 4(2)(-10)$ sebagai $25 - 80 = -55$ ($c = -10$), atau menggabung julat tengah bukannya rantau luar bagi $\\ge 0$.'
          ],
          en: [
            'Splitting $2x - 1 \\ge 7$ directly! You MUST expand and make RHS $= 0$ first.',
            'Computing $25 - 4(2)(-10)$ as $25 - 80 = -55$ ($c = -10$ sign slip), or sandwiching the middle interval instead of outer regions for $\\ge 0$.'
          ]
        },
        scheme: [
          {
            badge: 'K1',
            bm: 'Kembangkan LHS: $2x^2 + 6x - x - 3 \\ge 7 \\implies 2x^2 + 5x - 3 \\ge 7$.',
            en: 'Expand LHS: $2x^2 + 6x - x - 3 \\ge 7 \\implies 2x^2 + 5x - 3 \\ge 7$.',
            why: {
              bm: 'Ketaksamaan kuadratik tidak boleh diselesaikan dalam bentuk terfaktor selagi sebelah kanan bukan $0$.',
              en: 'A quadratic inequality cannot be solved from factors until the right-hand side is $0$, so expand first.'
            }
          },
          {
            badge: 'K1',
            bm: 'Pindahkan $7$ supaya RHS $= 0$: $2x^2 + 5x - 3 - 7 \\ge 0 \\implies 2x^2 + 5x - 10 \\ge 0$.',
            en: 'Move $7$ to make RHS $= 0$: $2x^2 + 5x - 3 - 7 \\ge 0 \\implies 2x^2 + 5x - 10 \\ge 0$.',
            why: {
              bm: 'Hanya apabila RHS $= 0$ barulah punca sempadan dan lakaran graf $\\cup$ dapat menentukan kawasan $\\ge 0$.',
              en: 'Only when RHS $= 0$ can boundary roots and a $\\cup$-sketch determine where the quadratic is $\\ge 0$.'
            }
          },
          {
            badge: 'K1',
            bm: 'Guna rumus kuadratik ($a=2, b=5, c=-10$): $x = \\frac{-5 \\pm \\sqrt{25 - 4(2)(-10)}}{4} = \\frac{-5 \\pm \\sqrt{105}}{4}$.',
            en: 'Use quadratic formula ($a=2, b=5, c=-10$): $x = \\frac{-5 \\pm \\sqrt{25 - 4(2)(-10)}}{4} = \\frac{-5 \\pm \\sqrt{105}}{4}$.',
            why: {
              bm: 'Perhatikan negatif berganda $-4(2)(-10) = +80$ memberi $25 + 80 = 105$; kerana $105$ bukan kuasa dua sempurna, kekalkan bentuk surd.',
              en: 'Watch the double negative $-4(2)(-10) = +80$, giving $25 + 80 = 105$; since $105$ is not a square number, keep exact surd form.'
            }
          },
          {
            badge: 'K1',
            bm: 'Lakar parabola $\\cup$ ($a = 2 > 0$) berakar $\\frac{-5 - \\sqrt{105}}{4}$ dan $\\frac{-5 + \\sqrt{105}}{4}$; $\\ge 0$ memilih rantau luar pada atau di atas paksi.',
            en: 'Sketch $\\cup$-parabola ($a = 2 > 0$) with roots $\\frac{-5 - \\sqrt{105}}{4}$ and $\\frac{-5 + \\sqrt{105}}{4}$; $\\ge 0$ selects the outer regions on or above the axis.',
            why: {
              bm: 'Bagi lengkung $\\cup$, bahagian pada atau di atas paksi-$x$ ($\\ge 0$) berada di luar kedua-dua punca sempadan.',
              en: 'For a $\\cup$-curve, parts on or above the $x$-axis ($\\ge 0$) lie outside the two boundary roots.'
            }
          },
          {
            badge: 'N1',
            bm: '$x \\le \\frac{-5 - \\sqrt{105}}{4}$ atau $x \\ge \\frac{-5 + \\sqrt{105}}{4}$.',
            en: '$x \\le \\frac{-5 - \\sqrt{105}}{4}$ or $x \\ge \\frac{-5 + \\sqrt{105}}{4}$.',
            why: {
              bm: 'Dua rantau luar ditulis secara terpisah dengan "atau" ("or") dan mengekalkan tanda $\\le, \\ge$ mengikut soalan.',
              en: 'Outer tails are written as two separate inequalities joined by "or", keeping $\\le$ and $\\ge$ to match the question.'
            }
          }
        ]
      },
      {
        code: '2.9', marks: 3,
        topic: { bm: 'Graf Sentiasa Di Atas Paksi-x', en: 'Curve Always Above the x-Axis' },
        q: { bm: 'Fungsi $f(x) = x^2 + 2px + (3p + 4)$ sentiasa berada di atas paksi-$x$. Cari julat nilai $p$. [3m]', en: 'The function $f(x) = x^2 + 2px + (3p + 4)$ lies entirely above the $x$-axis. Find the range of $p$. [3m]' },
        mistakes: {
          bm: [
            'Menganggap "di atas paksi-$x$" bermaksud $b^2 - 4ac > 0$! Tidak memotong paksi-$x$ bermaksud **tiada punca nyata ($b^2 - 4ac < 0$)**.',
            'Mengguna $\\le 0$ (yang membenarkan titik sentuhan pada paksi-$x$) atau tersilap mengira $(2p)^2 = 2p^2$.'
          ],
          en: [
            'Writing $b^2 - 4ac > 0$! Never touching the $x$-axis means **no real roots ($b^2 - 4ac < 0$)**.',
            'Using $\\le 0$ (which allows touching the $x$-axis tangentially) or expanding $(2p)^2 = 2p^2$ instead of $4p^2$.'
          ]
        },
        scheme: [
          {
            badge: 'P1',
            bm: 'Sentiasa di atas paksi-$x$ memerlukan $a = 1 > 0$ dan $b^2 - 4ac < 0$: $(2p)^2 - 4(1)(3p + 4) < 0$.',
            en: 'Always above the $x$-axis requires $a = 1 > 0$ and $b^2 - 4ac < 0$: $(2p)^2 - 4(1)(3p + 4) < 0$.',
            why: {
              bm: 'Lengkung yang sentiasa di atas paksi-$x$ tidak pernah menyentuh atau memotong paksi-$x$, maka tiada punca nyata ($b^2 - 4ac < 0$, bukan $\\le 0$).',
              en: 'A curve entirely above the $x$-axis never crosses or touches it, meaning zero real roots ($b^2 - 4ac < 0$, not $\\le 0$).'
            }
          },
          {
            badge: 'K1',
            bm: 'Kembangkan dan bahagi dengan $4$: $4p^2 - 12p - 16 < 0 \\implies p^2 - 3p - 4 < 0$.',
            en: 'Expand and divide by $4$: $4p^2 - 12p - 16 < 0 \\implies p^2 - 3p - 4 < 0$.',
            why: {
              bm: 'Ingat $(2p)^2 = 4p^2$ dan $-4(3p + 4) = -12p - 16$; membahagi dengan $+4$ tidak mengubah arah ketaksamaan $<$.',
              en: 'Remember $(2p)^2 = 4p^2$ and $-4(3p + 4) = -12p - 16$; dividing by positive $4$ keeps the $<$ sign unchanged.'
            }
          },
          {
            badge: 'K1',
            bm: 'Faktorkan $(p - 4)(p + 1) < 0$; lakar parabola $\\cup$ berakar $-1, 4$ dan lorek rantau tengah di bawah paksi.',
            en: 'Factorise $(p - 4)(p + 1) < 0$; sketch $\\cup$-parabola with roots $-1, 4$ and shade the middle region below the axis.',
            why: {
              bm: 'Bagi ketaksamaan $< 0$ pada lengkung $\\cup$, bahagian yang berada di bawah paksi terletak di antara kedua-dua punca.',
              en: 'For $< 0$ on a $\\cup$-curve, the region below the axis lies strictly between the two roots.'
            }
          },
          {
            badge: 'N1',
            bm: '$-1 < p < 4$.',
            en: '$-1 < p < 4$.',
            why: {
              bm: 'Satu selang tengah yang bersambung ditulis sebagai satu ketaksamaan gabungan $-1 < p < 4$.',
              en: 'A single connected middle interval is written as one combined inequality $-1 < p < 4$.'
            }
          }
        ]
      },
      {
        code: '2.10', marks: 4,
        topic: { bm: 'Pengoptimuman Luas Kandang Kontekstual', en: 'Contextual Enclosure Area Optimization' },
        q: { bm: 'Sebatang dawai $60\\text{ m}$ digunakan untuk memagar kandang segi empat tepat di tepi dinding batu (satu sisi dinding tidak perlu pagar). Cari luas maksimum kandang. [4m]', en: 'A $60\\text{ m}$ wire fences a rectangular enclosure against a stone wall (wall side needs no wire). Find the maximum area. [4m]' },
        mistakes: {
          bm: [
            'Menulis perimeter dawai sebagai $2x + 2y = 60$ bukannya $2x + y = 60$ (kerana hanya 3 sisi berpagar).',
            'Tersilap tanda $-2(-225) = -450$ semasa penyempurnaan kuasa dua, atau memberi jawapan $x = 15$ bukannya luas $450\\text{ m}^2$.'
          ],
          en: [
            'Writing $2x + 2y = 60$ instead of $2x + y = 60$ (only 3 sides use wire).',
            'Sign error computing $-2(-225) = -450$ when completing the square, or stating $x = 15$ instead of the maximum area $450\\text{ m}^2$.'
          ]
        },
        scheme: [
          {
            badge: 'K1',
            bm: 'Hanya 3 sisi berpagar (dua lebar $x$, satu panjang $y$): $2x + y = 60 \\implies y = 60 - 2x$.',
            en: 'Only 3 sides need wire (two widths $x$, one length $y$): $2x + y = 60 \\implies y = 60 - 2x$.',
            why: {
              bm: 'Dinding batu menggantikan sisi keempat, jadi tolak dua sisi $x$ sahaja daripada $60\\text{ m}$ untuk mencari $y$.',
              en: 'The stone wall replaces the fourth side, so subtract only two $x$-sides from $60\\text{ m}$ to express $y$ in terms of $x$.'
            }
          },
          {
            badge: 'K1',
            bm: 'Bina fungsi luas $A$: $A = x(60 - 2x) = -2x^2 + 60x$.',
            en: 'Form the area function $A$: $A = x(60 - 2x) = -2x^2 + 60x$.',
            why: {
              bm: 'Mendarab lebar $x$ dengan panjang $(60 - 2x)$ menghasilkan fungsi kuadratik dengan $a = -2 < 0$ (ada nilai maksimum).',
              en: 'Multiplying width $x$ by length $(60 - 2x)$ gives a downward quadratic ($a = -2 < 0$) that attains a maximum.'
            }
          },
          {
            badge: 'K1',
            bm: 'Sempurnakan kuasa dua: $A = -2[x^2 - 30x] = -2[(x - 15)^2 - 225] = -2(x - 15)^2 - 2(-225) = -2(x - 15)^2 + 450$.',
            en: 'Complete the square: $A = -2[x^2 - 30x] = -2[(x - 15)^2 - 225] = -2(x - 15)^2 - 2(-225) = -2(x - 15)^2 + 450$.',
            why: {
              bm: 'Faktorkan $-2$ dahulu; apabila mengeluarkan $-225$ daripada kurungan, darab $-2 \\times -225 = +450$.',
              en: 'Factor out $-2$ first; when pulling $-225$ out of the bracket, multiply $-2 \\times -225 = +450$.'
            }
          },
          {
            badge: 'N1',
            bm: 'Luas maksimum $= 450\\text{ m}^2$ (apabila $x = 15\\text{ m}$).',
            en: 'Maximum area $= 450\\text{ m}^2$ (at $x = 15\\text{ m}$).',
            why: {
              bm: 'Kerana $-2(x - 15)^2 \\le 0$, luas mencapai nilai puncak $+450\\text{ m}^2$ pada $x = 15\\text{ m}$.',
              en: 'Since $-2(x - 15)^2 \\le 0$, the area reaches its peak of $+450\\text{ m}^2$ when $x = 15\\text{ m}$.'
            }
          }
        ]
      }
    ],

    // =========================================================================
    // TINGKATAN 4 BAB 3: SISTEM PERSAMAAN (10 SOALAN)
    // =========================================================================
    'f4-c3': [
      {
        code: '3.1', marks: 5,
        topic: { bm: 'Sistem Tiga Persamaan Linear', en: 'System of Three Linear Equations' },
        q: { bm: 'Selesaikan sistem persamaan serentak:\n$x + 2y - z = 2$, $\\;2x - y + 3z = 9$, $\\;3x + 3y + z = 10$. [5m]', en: 'Solve the linear system:\n$x + 2y - z = 2$, $\\;2x - y + 3z = 9$, $\\;3x + 3y + z = 10$. [5m]' },
        mistakes: {
          bm: [
            'Menghapuskan pemboleh ubah berbeza daripada dua pasangan persamaan (contoh: hapus $z$, kemudian hapus $y$), menyebabkan masih tinggal 3 pemboleh ubah!',
            'Lupa mendarab sebelah kanan (RHS) apabila menskalakan persamaan, seperti menulis $3(2) = 2$ bukannya $6$, atau menggantikan nilai ke persamaan yang salah.'
          ],
          en: [
            'Eliminating different variables across the two pairs instead of the SAME variable, leaving 3 unknowns!',
            'Forgetting to multiply the right-hand side when scaling (e.g. writing $3(2) = 2$ instead of $6$), or substituting back into the wrong variable.'
          ]
        },
        scheme: [
          {
            badge: 'K1',
            bm: 'Hapuskan $z$ kali pertama: $3 \\times \\text{Pers.(1)} = 3x + 6y - 3z = 6$, tambah Pers.(2) $2x - y + 3z = 9 \\implies 5x + 5y = 15 \\implies x + y = 3$ --- (4).',
            en: 'Eliminate $z$ first time: $3 \\times \\text{Eq(1)} = 3x + 6y - 3z = 6$, add Eq(2) $2x - y + 3z = 9 \\implies 5x + 5y = 15 \\implies x + y = 3$ --- (4).',
            why: {
              bm: 'Pers.(1) ada $-z$ dan Pers.(2) ada $+3z$; mendarab Pers.(1) dengan $3$ menjadikan pekali $z$ bertentangan supaya $+3z - 3z = 0$.',
              en: 'Eq(1) has $-z$ and Eq(2) has $+3z$; multiplying Eq(1) by $3$ makes the $z$ coefficients opposites so they cancel upon addition.'
            }
          },
          {
            badge: 'K1',
            bm: 'Hapuskan pemboleh ubah **yang sama** ($z$): $\\text{Pers.(1)} + \\text{Pers.(3)} \\implies (x + 2y - z) + (3x + 3y + z) = 2 + 10 \\implies 4x + 5y = 12$ --- (5).',
            en: 'Eliminate the **same** variable ($z$): $\\text{Eq(1)} + \\text{Eq(3)} \\implies (x + 2y - z) + (3x + 3y + z) = 2 + 10 \\implies 4x + 5y = 12$ --- (5).',
            why: {
              bm: 'Kita mesti menghapuskan huruf $z$ sekali lagi daripada pasangan berlainan supaya (4) dan (5) kedua-duanya hanya mengandungi $x$ dan $y$.',
              en: 'We must eliminate the same variable $z$ again from a different pair so that (4) and (5) form a 2-variable system in $x$ and $y$.'
            }
          },
          {
            badge: 'K1',
            bm: 'Daripada (4), $y = 3 - x$; ganti ke (5): $4x + 5(3 - x) = 12 \\implies 4x + 15 - 5x = 12 \\implies -x = -3 \\implies x = 3$.',
            en: 'From (4), $y = 3 - x$; substitute into (5): $4x + 5(3 - x) = 12 \\implies 4x + 15 - 5x = 12 \\implies -x = -3 \\implies x = 3$.',
            why: {
              bm: 'Dengan hanya dua pemboleh ubah tinggal, penggantian mudah menghapuskan $y$ untuk mendapatkan nilai berangka $x$.',
              en: 'With only two variables left, substituting $y = 3 - x$ reduces the problem to a single linear equation in $x$.'
            }
          },
          {
            badge: 'K1',
            bm: 'Ganti balik: $y = 3 - 3 = 0$, kemudian ganti ke Pers.(1): $3 + 2(0) - z = 2 \\implies -z = -1 \\implies z = 1$.',
            en: 'Back-substitute: $y = 3 - 3 = 0$, then into Eq(1): $3 + 2(0) - z = 2 \\implies -z = -1 \\implies z = 1$.',
            why: {
              bm: 'Kerja undur dari persamaan 2-pemboleh ubah ke persamaan asal 3-pemboleh ubah membuka baki pemboleh ubah satu demi satu.',
              en: 'Working backward from the 2-variable equation to an original 3-variable equation unlocks the remaining unknowns one by one.'
            }
          },
          {
            badge: 'N1',
            bm: '$x = 3,\\; y = 0,\\; z = 1$.',
            en: '$x = 3,\\; y = 0,\\; z = 1$.',
            why: {
              bm: 'Semakan cepat dalam Pers.(2): $2(3) - 0 + 3(1) = 9$ mengesahkan ketiga-tiga nilai serentak tepat.',
              en: 'A quick check in Eq(2), $2(3) - 0 + 3(1) = 9$, confirms all three values satisfy the system.'
            }
          }
        ]
      },
      {
        code: '3.2', marks: 5,
        topic: { bm: 'Persamaan Serentak Linear & Tak Linear', en: 'Simultaneous Linear & Non-Linear Equations' },
        q: { bm: 'Selesaikan persamaan serentak $2x + y = 1$ dan $2x^2 + xy - y^2 = -4$ (betul kepada 3 tempat perpuluhan). [5m]', en: 'Solve simultaneously $2x + y = 1$ and $2x^2 + xy - y^2 = -4$ (to 3 d.p.). [5m]' },
        mistakes: {
          bm: [
            'Cuai tanda negatif di hadapan kurungan semasa mengembang $-(1 - 2x)^2 = -(1 - 4x + 4x^2)$.',
            'Mengembangkan $(1 - 2x)^2$ secara salah sebagai $1 - 4x^2$ (terlupa sebutan tengah $-4x$).',
            'Salah memadankan pasangan $(x_1, y_2)$ atau gagal membundar betul kepada 3 tempat perpuluhan.'
          ],
          en: [
            'Failing to distribute the minus sign across every term of $-(1 - 2x)^2 = -(1 - 4x + 4x^2)$.',
            'Expanding $(1 - 2x)^2$ wrongly as $1 - 4x^2$ (missing the middle term $-4x$).',
            'Mismatching pairs like $(x_1, y_2)$ or failing to give answers to 3 decimal places.'
          ]
        },
        scheme: [
          {
            badge: 'K1',
            bm: 'Ungkapkan $y$ daripada persamaan linear: $y = 1 - 2x$, dan ganti ke persamaan kuadratik: $2x^2 + x(1 - 2x) - (1 - 2x)^2 = -4$.',
            en: 'Express $y$ from the linear equation: $y = 1 - 2x$, and substitute into the quadratic: $2x^2 + x(1 - 2x) - (1 - 2x)^2 = -4$.',
            why: {
              bm: 'Mengungkapkan $y$ daripada $2x + y = 1$ mengelakkan pecahan (seperti $x = \\frac{1-y}{2}$), sekali gus mengurangkan kesilapan kiraan.',
              en: 'Isolating $y$ from $2x + y = 1$ avoids fractions (unlike isolating $x$), reducing arithmetic mistakes.'
            }
          },
          {
            badge: 'K1',
            bm: 'Kembangkan $-(1 - 2x)^2 = -(1 - 4x + 4x^2)$ dengan cermat: $2x^2 + x - 2x^2 - 1 + 4x - 4x^2 = -4$.',
            en: 'Expand $-(1 - 2x)^2 = -(1 - 4x + 4x^2)$ carefully: $2x^2 + x - 2x^2 - 1 + 4x - 4x^2 = -4$.',
            why: {
              bm: 'Sentiasa kembang $(1 - 2x)^2$ dalam kurungan dahulu sebelum mengagihkan tanda negatif luar kepada setiap sebutan.',
              en: 'Always expand $(1 - 2x)^2$ inside brackets first before distributing the outer minus sign to all three terms.'
            }
          },
          {
            badge: 'K1',
            bm: 'Kumpulkan ke bentuk am: $-4x^2 + 5x + 3 = 0 \\implies 4x^2 - 5x - 3 = 0$.',
            en: 'Collect into standard form: $-4x^2 + 5x + 3 = 0 \\implies 4x^2 - 5x - 3 = 0$.',
            why: {
              bm: 'Mendarab dengan $-1$ menjadikan pekali $x^2$ positif ($+4$), memudahkan penggunaan rumus kuadratik.',
              en: 'Multiplying through by $-1$ gives a positive $x^2$ coefficient ($+4$), making the quadratic formula cleaner.'
            }
          },
          {
            badge: 'K1',
            bm: 'Guna rumus kuadratik: $x = \\frac{5 \\pm \\sqrt{(-5)^2 - 4(4)(-3)}}{2(4)} = \\frac{5 \\pm \\sqrt{73}}{8} \\implies x = 1.6930$ atau $x = -0.4430$.',
            en: 'Apply quadratic formula: $x = \\frac{5 \\pm \\sqrt{(-5)^2 - 4(4)(-3)}}{2(4)} = \\frac{5 \\pm \\sqrt{73}}{8} \\implies x = 1.6930$ or $x = -0.4430$.',
            why: {
              bm: 'Kekalkan 4 angka perpuluhan semasa langkah pertengahan sebelum mencari $y$ supaya ralat pembundaran tidak terkumpul.',
              en: 'Keep extra decimal places before computing $y$ so rounding errors do not build up in the final step.'
            }
          },
          {
            badge: 'N1',
            bm: 'Ganti semula ke $y = 1 - 2x$: $(1.693, -2.386)$ dan $(-0.443, 1.886)$.',
            en: 'Back-substitute into $y = 1 - 2x$: $(1.693, -2.386)$ and $(-0.443, 1.886)$.',
            why: {
              bm: 'Padankan setiap $x$ dengan nilai $y$ sepadannya secara berpasangan dan bundarkan kepada 3 t.p. seperti diminta.',
              en: 'Pair each $x$ with its own $y = 1 - 2x$ value and round both coordinates to 3 decimal places as requested.'
            }
          }
        ]
      },
      {
        code: '3.3', marks: 5,
        topic: { bm: 'Persamaan Serentak Melibatkan Pecahan', en: 'Simultaneous Equations with Algebraic Fractions' },
        q: { bm: 'Selesaikan persamaan serentak $x - 2y = 3$ dan $\\frac{2}{x} + \\frac{3}{y} = 2$ (3 t.p.). [5m]', en: 'Solve simultaneously $x - 2y = 3$ and $\\frac{2}{x} + \\frac{3}{y} = 2$ (to 3 d.p.). [5m]' },
        mistakes: {
          bm: [
            'Menjumlahkan pengangka dan penyebut secara haram: $\\frac{2}{x} + \\frac{3}{y} = \\frac{5}{x+y}$!',
            'Lupa mendarab sebelah kanan ($2$) dengan $xy$ apabila menghapuskan penyebut: menulis $2y + 3x = 2$ bukannya $2xy$.'
          ],
          en: [
            'Adding numerators and denominators illegally: $\\frac{2}{x} + \\frac{3}{y} = \\frac{5}{x+y}$!',
            'Forgetting to multiply the RHS ($2$) by $xy$ when clearing fractions, writing $2y + 3x = 2$ instead of $2xy$.'
          ]
        },
        scheme: [
          {
            badge: 'K1',
            bm: 'Darab semua sebutan $\\frac{2}{x} + \\frac{3}{y} = 2$ dengan $xy$: $2y + 3x = 2xy$.',
            en: 'Multiply every term of $\\frac{2}{x} + \\frac{3}{y} = 2$ by $xy$: $2y + 3x = 2xy$.',
            why: {
              bm: 'Mendarab keseluruhan persamaan (termasuk RHS) dengan $xy$ menghapuskan kedua-dua penyebut $x$ dan $y$ serentak.',
              en: 'Multiplying every term (including the RHS) by $xy$ clears both denominators $x$ and $y$ in one step.'
            }
          },
          {
            badge: 'K1',
            bm: 'Daripada persamaan linear, $x = 3 + 2y$; gantikan ke dalam $2y + 3x = 2xy$: $2y + 3(3 + 2y) = 2(3 + 2y)y$.',
            en: 'From the linear equation, $x = 3 + 2y$; substitute into $2y + 3x = 2xy$: $2y + 3(3 + 2y) = 2(3 + 2y)y$.',
            why: {
              bm: 'Menggantikan $x = 3 + 2y$ menghapuskan $x$ sepenuhnya supaya tinggal satu persamaan dalam $y$ sahaja.',
              en: 'Substituting $x = 3 + 2y$ eliminates $x$ completely, leaving a single equation in $y$.'
            }
          },
          {
            badge: 'K1',
            bm: 'Kembangkan kedua-dua belah: $2y + 9 + 6y = 6y + 4y^2 \\implies 8y + 9 = 6y + 4y^2 \\implies 4y^2 - 2y - 9 = 0$.',
            en: 'Expand both sides: $2y + 9 + 6y = 6y + 4y^2 \\implies 8y + 9 = 6y + 4y^2 \\implies 4y^2 - 2y - 9 = 0$.',
            why: {
              bm: 'Pindahkan semua sebutan ke sebelah yang menjadikan pekali $y^2$ positif ($4y^2$) untuk mengelak kesilapan tanda.',
              en: 'Move all terms to the side where $y^2$ has a positive coefficient ($4y^2$) to reduce sign errors.'
            }
          },
          {
            badge: 'K1',
            bm: 'Guna rumus kuadratik: $y = \\frac{2 \\pm \\sqrt{(-2)^2 - 4(4)(-9)}}{2(4)} = \\frac{2 \\pm \\sqrt{148}}{8} \\implies y = 1.7707$ atau $y = -1.2707$.',
            en: 'Apply quadratic formula: $y = \\frac{2 \\pm \\sqrt{(-2)^2 - 4(4)(-9)}}{2(4)} = \\frac{2 \\pm \\sqrt{148}}{8} \\implies y = 1.7707$ or $y = -1.2707$.',
            why: {
              bm: 'Oleh sebab $4y^2 - 2y - 9 = 0$ tidak boleh difaktorkan secara integer, gunakan rumus kuadratik dengan nilai pertengahan 4 t.p.',
              en: 'Since $4y^2 - 2y - 9 = 0$ does not factor cleanly, use the quadratic formula and keep 4 d.p. before finding $x$.'
            }
          },
          {
            badge: 'N1',
            bm: 'Ganti ke $x = 3 + 2y$: $(6.541, 1.771)$ dan $(0.459, -1.271)$.',
            en: 'Back-substitute into $x = 3 + 2y$: $(6.541, 1.771)$ and $(0.459, -1.271)$.',
            why: {
              bm: 'Hitung $x$ untuk setiap nilai $y$ yang sepadan (kedua-duanya bukan sifar) dan bundarkan kepada 3 t.p.',
              en: 'Compute $x$ for each matching $y$ (neither is zero, so both are valid) and round to 3 d.p.'
            }
          }
        ]
      },
      {
        code: '3.4', marks: 5,
        topic: { bm: 'Pemodelan Segi Tiga Tegak (Pythagoras)', en: 'Right-Triangle Perimeter & Pythagoras' },
        q: { bm: 'Sebuah segi tiga bersudut tegak mempunyai hipotenus $13\\text{ cm}$ dan perimeter $30\\text{ cm}$. Cari panjang dua sisi berserenjang. [5m]', en: 'A right-angled triangle has hypotenuse $13\\text{ cm}$ and perimeter $30\\text{ cm}$. Find the lengths of the two perpendicular legs. [5m]' },
        mistakes: {
          bm: [
            'Menulis $x + y = 30$ (terlupa menolak hipotenus $13$ daripada jumlah perimeter!).',
            'Mengembangkan $(17 - x)^2$ sebagai $289 - x^2$ atau $289 + x^2$ (terlupa sebutan tengah $-34x$).'
          ],
          en: [
            'Writing $x + y = 30$ instead of subtracting hypotenuse $13$ from the perimeter first!',
            'Expanding $(17 - x)^2$ wrongly as $289 - x^2$ or $289 + x^2$ (dropping the middle term $-34x$).'
          ]
        },
        scheme: [
          {
            badge: 'K1',
            bm: 'Bina dua persamaan: perimeter $x + y + 13 = 30 \\implies y = 17 - x$, dan Teorem Pythagoras $x^2 + y^2 = 13^2 = 169$.',
            en: 'Set up two equations: perimeter $x + y + 13 = 30 \\implies y = 17 - x$, and Pythagoras $x^2 + y^2 = 13^2 = 169$.',
            why: {
              bm: 'Perimeter ialah jumlah ketiga-tiga sisi termasuk hipotenus $13\\text{ cm}$, manakala Teorem Pythagoras menghubungkan dua sisi berserenjang.',
              en: 'Perimeter sums all three sides including the $13\\text{ cm}$ hypotenuse, while Pythagoras links the two perpendicular legs.'
            }
          },
          {
            badge: 'K1',
            bm: 'Gantikan $y = 17 - x$ ke dalam persamaan Pythagoras: $x^2 + (17 - x)^2 = 169$.',
            en: 'Substitute $y = 17 - x$ into the Pythagoras equation: $x^2 + (17 - x)^2 = 169$.',
            why: {
              bm: 'Menggantikan $y$ menghasilkan satu persamaan kuadratik dalam $x$ sahaja.',
              en: 'Substituting $y$ reduces the system to a single quadratic equation in $x$.'
            }
          },
          {
            badge: 'K1',
            bm: 'Kembangkan $(17 - x)^2 = 289 - 34x + x^2$: $x^2 + 289 - 34x + x^2 = 169 \\implies 2x^2 - 34x + 120 = 0$.',
            en: 'Expand $(17 - x)^2 = 289 - 34x + x^2$: $x^2 + 289 - 34x + x^2 = 169 \\implies 2x^2 - 34x + 120 = 0$.',
            why: {
              bm: 'Ingat $(a - b)^2 = a^2 - 2ab + b^2$ mempunyai sebutan tengah $-2(17)(x) = -34x$, dan $289 - 169 = 120$.',
              en: 'Remember $(a - b)^2 = a^2 - 2ab + b^2$ has the middle term $-2(17)(x) = -34x$, and $289 - 169 = 120$.'
            }
          },
          {
            badge: 'K1',
            bm: 'Bahagi dengan $2$ dan faktorkan: $x^2 - 17x + 60 = 0 \\implies (x - 12)(x - 5) = 0 \\implies x = 12$ atau $x = 5$.',
            en: 'Divide by $2$ and factorise: $x^2 - 17x + 60 = 0 \\implies (x - 12)(x - 5) = 0 \\implies x = 12$ or $x = 5$.',
            why: {
              bm: 'Membahagi dengan $2$ memudahkan pemfaktoran, dan kedua-dua nilai positif adalah sah untuk panjang sisi.',
              en: 'Dividing by $2$ makes factorisation easy, and both positive values are physically valid side lengths.'
            }
          },
          {
            badge: 'N1',
            bm: 'Ganti ke $y = 17 - x$: apabila $x = 12, y = 5$ (atau $x = 5, y = 12$), maka panjang sisi ialah $5\\text{ cm}$ dan $12\\text{ cm}$.',
            en: 'Back-substitute into $y = 17 - x$: when $x = 12, y = 5$ (or $x = 5, y = 12$), so the leg lengths are $5\\text{ cm}$ and $12\\text{ cm}$.',
            why: {
              bm: 'Oleh sebab $x$ dan $y$ simetri, kedua-dua punca merujuk kepada pasangan sisi berserenjang yang sama: $5\\text{ cm}$ dan $12\\text{ cm}$.',
              en: 'By symmetry between $x$ and $y$, both solutions give the exact same pair of perpendicular sides: $5\\text{ cm}$ and $12\\text{ cm}$.'
            }
          }
        ]
      },
      {
        code: '3.5', marks: 4,
        topic: { bm: 'Pemodelan Kewangan Tiga Pemboleh Ubah', en: '3-Variable Financial Word Problem' },
        q: { bm: 'Ahmad membeli 2 pen, 1 buku, 3 pemadam (RM11). Ali membeli 1 pen, 2 buku, 1 pemadam (RM9). Muthu membeli 3 pen, 1 buku, 2 pemadam (RM12). Cari harga setiap satu. [4m]', en: 'Ahmad buys 2 pens, 1 book, 3 erasers (RM11). Ali buys 1 pen, 2 books, 1 eraser (RM9). Muthu buys 3 pens, 1 book, 2 erasers (RM12). Find the price of each item. [4m]' },
        mistakes: {
          bm: [
            'Kesilapan tanda semasa menolak persamaan untuk penghapusan (contoh: $+2e - (+3e)$ ditulis $+e$ bukannya $-e$).',
            'Menghapuskan pemboleh ubah berbeza bagi dua pasangan persamaan (contoh: hapus $b$ dahulu, kemudian hapus $p$).'
          ],
          en: [
            'Sign error while subtracting equations during elimination (e.g. $+2e - (+3e)$ written as $+e$ instead of $-e$).',
            'Eliminating different variables across the two pairs (e.g. eliminating $b$ in one pair and $p$ in the other).'
          ]
        },
        scheme: [
          {
            badge: 'K1',
            bm: 'Modelkan harga pen $p$, buku $b$, pemadam $e$: $2p + b + 3e = 11$ --- (1), $p + 2b + e = 9$ --- (2), $3p + b + 2e = 12$ --- (3).',
            en: 'Model prices of pen $p$, book $b$, eraser $e$: $2p + b + 3e = 11$ --- (1), $p + 2b + e = 9$ --- (2), $3p + b + 2e = 12$ --- (3).',
            why: {
              bm: 'Menamakan setiap pemboleh ubah dengan jelas dan menomborkan ketiga-tiga persamaan memudahkan penjejakan langkah penghapusan.',
              en: 'Labelling each unknown clearly and numbering the three equations keeps the elimination steps organized.'
            }
          },
          {
            badge: 'K1',
            bm: 'Hapuskan $b$ kali pertama: $(3) - (1) \\implies (3p + b + 2e) - (2p + b + 3e) = 12 - 11 \\implies p - e = 1 \\implies p = e + 1$.',
            en: 'Eliminate $b$ first time: $(3) - (1) \\implies (3p + b + 2e) - (2p + b + 3e) = 12 - 11 \\implies p - e = 1 \\implies p = e + 1$.',
            why: {
              bm: 'Pers.(1) dan Pers.(3) kedua-duanya mempunyai $+1b$, jadi menolak kedua-duanya terus menghapuskan $b$ dalam satu langkah.',
              en: 'Eq(1) and Eq(3) both have $+1b$, so subtracting them immediately cancels $b$ in one step.'
            }
          },
          {
            badge: 'K1',
            bm: 'Hapuskan $b$ kali kedua: $2 \\times (1) - (2) \\implies (4p + 2b + 6e) - (p + 2b + e) = 22 - 9 \\implies 3p + 5e = 13$.',
            en: 'Eliminate $b$ second time: $2 \\times (1) - (2) \\implies (4p + 2b + 6e) - (p + 2b + e) = 22 - 9 \\implies 3p + 5e = 13$.',
            why: {
              bm: 'Mendarab Pers.(1) dengan $2$ menjadikan pekali $b$ sama dengan $+2b$ dalam Pers.(2), supaya $b$ terhapus sekali lagi.',
              en: 'Multiplying Eq(1) by $2$ matches the $+2b$ in Eq(2), letting us eliminate the same variable $b$ again.'
            }
          },
          {
            badge: 'K1',
            bm: 'Ganti $p = e + 1$ ke dalam $3p + 5e = 13$: $3(e + 1) + 5e = 13 \\implies 8e + 3 = 13 \\implies 8e = 10 \\implies e = 1.25$.',
            en: 'Substitute $p = e + 1$ into $3p + 5e = 13$: $3(e + 1) + 5e = 13 \\implies 8e + 3 = 13 \\implies 8e = 10 \\implies e = 1.25$.',
            why: {
              bm: 'Menggantikan $p = e + 1$ meninggalkan hanya pemboleh ubah $e$, menghasilkan harga pemadam terlebih dahulu.',
              en: 'Substituting $p = e + 1$ leaves only $e$, solving for the eraser price first.'
            }
          },
          {
            badge: 'N1',
            bm: 'Ganti balik: $p = 1.25 + 1 = 2.25$, dan daripada (2), $2b = 9 - 2.25 - 1.25 = 5.50 \\implies b = 2.75$; Pen $= \\text{RM }2.25$, Buku $= \\text{RM }2.75$, Pemadam $= \\text{RM }1.25$.',
            en: 'Back-substitute: $p = 1.25 + 1 = 2.25$, and from (2), $2b = 9 - 2.25 - 1.25 = 5.50 \\implies b = 2.75$; Pen $= \\text{RM }2.25$, Book $= \\text{RM }2.75$, Eraser $= \\text{RM }1.25$.',
            why: {
              bm: 'Hitung $p$ daripada $e + 1$, kemudian bahagi $5.50$ dengan $2$ untuk $b$, dan nyatakan semua harga dalam format RM dua tempat perpuluhan.',
              en: 'Find $p$ from $e + 1$, then divide $5.50$ by $2$ for $b$, and write all prices in RM to 2 decimal places.'
            }
          }
        ]
      },
      {
        code: '3.6', marks: 3,
        topic: { bm: 'Tiada Penyelesaian vs Penyelesaian Tak Terhingga', en: 'No Solution vs Infinite Solutions' },
        q: { bm: 'Diberi sistem $x + 2y - z = 4$, $\\;2x + 4y - 2z = 8$, $\\;3x + 6y - 3z = k$. Cari nilai $k$ supaya sistem mempunyai penyelesaian tak terhingga, dan terangkan jika $k \\ne 12$. [3m]', en: 'Given $x + 2y - z = 4$, $\\;2x + 4y - 2z = 8$, $\\;3x + 6y - 3z = k$. Find $k$ for infinite solutions, and explain what happens if $k \\ne 12$. [3m]' },
        mistakes: {
          bm: [
            'Mengelirukan satah selari berasingan ($0 = c \\ne 0$, tiada penyelesaian) dengan satah bertindih ($0 = 0$, penyelesaian tak terhingga).',
            'Lupa mendarab RHS $4$ dengan $3$ apabila membandingkan Pers.(3) dengan Pers.(1) (menulis $k = 4$ bukannya $k = 12$).'
          ],
          en: [
            'Confusing parallel distinct planes ($0 = c \\ne 0$, no solution) with coincident planes ($0 = 0$, infinite solutions).',
            'Forgetting to multiply the RHS $4$ by $3$ when comparing Eq(3) with Eq(1) (writing $k = 4$ instead of $k = 12$).'
          ]
        },
        scheme: [
          {
            badge: 'K1',
            bm: 'Darab Pers.(1) dengan $3$: $3x + 6y - 3z = 12$; tolak daripada Pers.(3) $3x + 6y - 3z = k$: $0 = k - 12$.',
            en: 'Multiply Eq(1) by $3$: $3x + 6y - 3z = 12$; subtract from Eq(3) $3x + 6y - 3z = k$: $0 = k - 12$.',
            why: {
              bm: 'Pekali $x, y, z$ dalam Pers.(3) ialah tepat $3$ kali ganda Pers.(1), jadi penghapusan memansuhkan semua pemboleh ubah sekali gus.',
              en: 'The coefficients of $x, y, z$ in Eq(3) are exactly $3$ times Eq(1), so subtracting cancels all three variables at once.'
            }
          },
          {
            badge: 'N1',
            bm: 'Penyelesaian tak terhingga memerlukan identiti benar $0 = 0$: $k - 12 = 0 \\implies k = 12$ (ketiga-tiga satah bertindih).',
            en: 'Infinite solutions require the true identity $0 = 0$: $k - 12 = 0 \\implies k = 12$ (all three planes are coincident).',
            why: {
              bm: 'Apabila $k = 12$, Pers.(3) ialah persamaan satah yang sama tepat dengan Pers.(1) dan Pers.(2), jadi semua titik pada satah tersebut ialah penyelesaian.',
              en: 'When $k = 12$, Eq(3) describes the exact same plane as Eq(1) and Eq(2), so every point on that plane is a solution.'
            }
          },
          {
            badge: 'N1',
            bm: 'Jika $k \\ne 12$, terhasil percanggahan $0 = k - 12 \\ne 0$, bermakna satah selari tetapi tidak bersilang $\\implies$ tiada penyelesaian.',
            en: 'If $k \\ne 12$, this gives the contradiction $0 = k - 12 \\ne 0$, meaning parallel non-intersecting planes $\\implies$ no solution.',
            why: {
              bm: 'Pernyataan mustahil seperti $0 = 5$ menunjukkan satah mempunyai kecerunan sama (selari) tetapi berbeza kedudukan, jadi tiada titik sepunya.',
              en: 'An impossible statement like $0 = 5$ means the planes share the same orientation (parallel) but never meet, giving zero solutions.'
            }
          }
        ]
      },
      {
        code: '3.7', marks: 4,
        topic: { bm: 'Persilangan Garis Lurus & Bulatan', en: 'Line & Circle Intersection' },
        q: { bm: 'Selesaikan persamaan serentak $x - y = 1$ dan $x^2 + y^2 = 25$. [4m]', en: 'Solve simultaneously $x - y = 1$ and $x^2 + y^2 = 25$. [4m]' },
        mistakes: {
          bm: [
            'Hanya menyenaraikan satu pasangan $(x, y)$ atau salah memadankan $x_1$ dengan $y_2$ seperti $(-3, 3)$.',
            'Mengembangkan $(y + 1)^2$ secara salah sebagai $y^2 + 1$ (terlupa sebutan tengah $+2y$).'
          ],
          en: [
            'Listing only one $(x, y)$ pair or mismatching $x_1$ with $y_2$ such as $(-3, 3)$.',
            'Expanding $(y + 1)^2$ wrongly as $y^2 + 1$ (omitting the middle term $+2y$).'
          ]
        },
        scheme: [
          {
            badge: 'K1',
            bm: 'Susun semula persamaan linear: $x = y + 1$, kemudian ganti ke dalam persamaan bulatan: $(y + 1)^2 + y^2 = 25$.',
            en: 'Rearrange the linear equation: $x = y + 1$, then substitute into the circle equation: $(y + 1)^2 + y^2 = 25$.',
            why: {
              bm: 'Mengungkapkan $x$ dalam sebutan $y$ menghapuskan $x$ daripada $x^2 + y^2 = 25$ tanpa tanda negatif.',
              en: 'Writing $x$ in terms of $y$ eliminates $x$ from $x^2 + y^2 = 25$ cleanly without extra minus signs.'
            }
          },
          {
            badge: 'K1',
            bm: 'Kembangkan dan permudahkan: $y^2 + 2y + 1 + y^2 = 25 \\implies 2y^2 + 2y - 24 = 0 \\implies y^2 + y - 12 = 0$.',
            en: 'Expand and simplify: $y^2 + 2y + 1 + y^2 = 25 \\implies 2y^2 + 2y - 24 = 0 \\implies y^2 + y - 12 = 0$.',
            why: {
              bm: 'Pastikan $(y + 1)^2 = y^2 + 2y + 1$, pindahkan $25$ ke LHS ($1 - 25 = -24$), dan bahagi semua dengan $2$.',
              en: 'Expand $(y + 1)^2 = y^2 + 2y + 1$ properly, move $25$ to LHS ($1 - 25 = -24$), and divide through by $2$.'
            }
          },
          {
            badge: 'K1',
            bm: 'Faktorkan: $(y + 4)(y - 3) = 0 \\implies y = -4$ atau $y = 3$.',
            en: 'Factorise: $(y + 4)(y - 3) = 0 \\implies y = -4$ or $y = 3$.',
            why: {
              bm: 'Cari dua faktor bagi $-12$ yang berjumlah $+1$ (iaitu $+4$ dan $-3$) untuk memperoleh dua nilai $y$.',
              en: 'Find two factors of $-12$ that add to $+1$ (namely $+4$ and $-3$) to get the two $y$-coordinates.'
            }
          },
          {
            badge: 'N1',
            bm: 'Ganti balik ke $x = y + 1$: apabila $y = -4, x = -3$; apabila $y = 3, x = 4$, maka $(-3, -4)$ dan $(4, 3)$.',
            en: 'Back-substitute into $x = y + 1$: when $y = -4, x = -3$; when $y = 3, x = 4$, giving $(-3, -4)$ and $(4, 3)$.',
            why: {
              bm: 'Garis lurus memotong bulatan pada dua titik; padankan setiap $y$ dengan $x = y + 1$ miliknya sendiri.',
              en: 'A secant line cuts a circle at two points; pair each $y$ with its own $x = y + 1$.'
            }
          }
        ]
      },
      {
        code: '3.8', marks: 4,
        topic: { bm: 'Sistem Serentak Melibatkan Indeks', en: 'Simultaneous Equations Involving Indices' },
        q: { bm: 'Selesaikan persamaan serentak $2^x \\times 4^y = 16$ dan $3^{2x - y} = 27$. [4m]', en: 'Solve simultaneously $2^x \\times 4^y = 16$ and $3^{2x - y} = 27$. [4m]' },
        mistakes: {
          bm: [
            'Menyamakan kuasa sebelum menukar $4^y = 2^{2y}$ dan $16 = 2^4$ kepada asas sepunya $2$.',
            'Kesilapan kembang atau tanda dalam $x + 2(2x - 3) = 4$ (menulis $2(2x - 3) = 4x - 3$).'
          ],
          en: [
            'Equating exponents before converting $4^y = 2^{2y}$ and $16 = 2^4$ to the common base $2$.',
            'Distribution or arithmetic slip in $x + 2(2x - 3) = 4$ (writing $2(2x - 3) = 4x - 3$).'
          ]
        },
        scheme: [
          {
            badge: 'K1',
            bm: 'Tukar kepada asas sepunya $2$ dan $3$: $2^x \\cdot 2^{2y} = 2^4 \\implies 2^{x + 2y} = 2^4 \\implies x + 2y = 4$; $\\;3^{2x - y} = 3^3 \\implies 2x - y = 3$.',
            en: 'Convert to common bases $2$ and $3$: $2^x \\cdot 2^{2y} = 2^4 \\implies 2^{x + 2y} = 2^4 \\implies x + 2y = 4$; $\\;3^{2x - y} = 3^3 \\implies 2x - y = 3$.',
            why: {
              bm: 'Hukum indeks $a^m \\cdot a^n = a^{m+n}$ dan perbandingan eksponen $a^p = a^q \\implies p = q$ hanya sah apabila asas kedua-dua belah sama.',
              en: 'The index law $a^m \\cdot a^n = a^{m+n}$ and equating exponents $a^p = a^q \\implies p = q$ only work once both sides share the same base.'
            }
          },
          {
            badge: 'K1',
            bm: 'Daripada $2x - y = 3$, ungkapkan $y = 2x - 3$ dan ganti ke dalam $x + 2y = 4$: $x + 2(2x - 3) = 4$.',
            en: 'From $2x - y = 3$, isolate $y = 2x - 3$ and substitute into $x + 2y = 4$: $x + 2(2x - 3) = 4$.',
            why: {
              bm: 'Mengungkapkan $y$ daripada persamaan kedua mengelakkan pecahan dan menukar sistem kepada satu persamaan linear dalam $x$.',
              en: 'Isolating $y$ from the second equation avoids fractions and reduces the system to one linear equation in $x$.'
            }
          },
          {
            badge: 'K1',
            bm: 'Kembangkan dan selesaikan: $x + 4x - 6 = 4 \\implies 5x = 10 \\implies x = 2$.',
            en: 'Expand and solve: $x + 4x - 6 = 4 \\implies 5x = 10 \\implies x = 2$.',
            why: {
              bm: 'Darab $2$ kepada kedua-dua $2x$ dan $-3$ ($-6$), kemudian pindahkan $-6$ ke kanan ($4 + 6 = 10$).',
              en: 'Distribute $2$ to both $2x$ and $-3$ ($-6$), then add $6$ to both sides ($4 + 6 = 10$).'
            }
          },
          {
            badge: 'N1',
            bm: 'Ganti balik ke $y = 2x - 3$: $y = 2(2) - 3 = 1$, maka $x = 2,\\; y = 1$.',
            en: 'Back-substitute into $y = 2x - 3$: $y = 2(2) - 3 = 1$, so $x = 2,\\; y = 1$.',
            why: {
              bm: 'Semakan: $2^2 \\times 4^1 = 4 \\times 4 = 16$ dan $3^{2(2)-1} = 3^3 = 27$ mengesahkan kedua-dua persamaan dipenuhi.',
              en: 'Check: $2^2 \\times 4^1 = 16$ and $3^{2(2)-1} = 3^3 = 27$ confirm both original equations hold.'
            }
          }
        ]
      },
      {
        code: '3.9', marks: 4,
        topic: { bm: 'Perimeter & Luas Kolam Segi Empat Tepat', en: 'Perimeter & Area of Rectangular Pool' },
        q: { bm: 'Sebuah kolam renang segi empat tepat mempunyai perimeter $50\\text{ m}$ dan luas $150\\text{ m}^2$. Cari panjang dan lebar kolam. [4m]', en: 'A rectangular pool has perimeter $50\\text{ m}$ and area $150\\text{ m}^2$. Find its length and width. [4m]' },
        mistakes: {
          bm: [
            'Menulis perimeter sebagai $x + y = 50$ bukannya $2x + 2y = 50$.',
            'Tersilap tanda apabila memindahkan $-x^2$ ke sebelah kanan ($25x - x^2 = 150$ ditulis $x^2 + 25x + 150 = 0$).'
          ],
          en: [
            'Writing perimeter as $x + y = 50$ instead of $2x + 2y = 50$.',
            'Sign error moving $-x^2$ across $=$ (turning $25x - x^2 = 150$ into $x^2 + 25x + 150 = 0$).'
          ]
        },
        scheme: [
          {
            badge: 'K1',
            bm: 'Persamaan perimeter: $2x + 2y = 50$, bahagi $2$: $x + y = 25 \\implies y = 25 - x$.',
            en: 'Perimeter equation: $2x + 2y = 50$, divide by $2$: $x + y = 25 \\implies y = 25 - x$.',
            why: {
              bm: 'Segi empat tepat mempunyai dua panjang dan dua lebar, maka separuh perimeter ialah $x + y = 25$.',
              en: 'A rectangle has two lengths and two widths, so the semi-perimeter is $x + y = 25$.'
            }
          },
          {
            badge: 'K1',
            bm: 'Ganti ke persamaan luas $xy = 150$: $x(25 - x) = 150 \\implies 25x - x^2 = 150$.',
            en: 'Substitute into area equation $xy = 150$: $x(25 - x) = 150 \\implies 25x - x^2 = 150$.',
            why: {
              bm: 'Menggantikan $y = 25 - x$ membentuk satu persamaan kuadratik dalam $x$.',
              en: 'Replacing $y$ with $25 - x$ produces a single quadratic equation in $x$.'
            }
          },
          {
            badge: 'K1',
            bm: 'Susun dan faktorkan: $x^2 - 25x + 150 = 0 \\implies (x - 15)(x - 10) = 0 \\implies x = 15$ atau $x = 10$.',
            en: 'Rearrange and factorise: $x^2 - 25x + 150 = 0 \\implies (x - 15)(x - 10) = 0 \\implies x = 15$ or $x = 10$.',
            why: {
              bm: 'Memindahkan semua sebutan ke kanan mengubah $-x^2$ menjadi $+x^2$ dan $+25x$ menjadi $-25x$; faktor $15 \\times 10 = 150$ dan $15 + 10 = 25$.',
              en: 'Moving terms to the RHS flips $-x^2$ to $+x^2$ and $+25x$ to $-25x$; factors $15$ and $10$ multiply to $150$ and sum to $25$.'
            }
          },
          {
            badge: 'N1',
            bm: 'Panjang $= 15\\text{ m}$, lebar $= 10\\text{ m}$.',
            en: 'Length $= 15\\text{ m}$, width $= 10\\text{ m}$.',
            why: {
              bm: 'Jika $x = 15$ maka $y = 25 - 15 = 10$ (dan sebaliknya); secara konvensyen, panjang ialah ukuran lebih besar ($15\\text{ m}$).',
              en: 'If $x = 15$ then $y = 25 - 15 = 10$ (and vice versa); by convention, length is the longer side ($15\\text{ m}$).'
            }
          }
        ]
      },
      {
        code: '3.10', marks: 4,
        topic: { bm: 'Syarat Garis Tidak Menyilang Lengkung', en: 'Line Not Intersecting a Curve' },
        q: { bm: 'Garis lurus $y = mx - 5$ tidak menyilang lengkung $y = x^2 - 2x - 1$. Cari julat nilai $m$. [4m]', en: 'The line $y = mx - 5$ does not intersect the curve $y = x^2 - 2x - 1$. Find the range of $m$. [4m]' },
        mistakes: {
          bm: [
            'Mengguna $b^2 - 4ac > 0$ sedangkan tidak bersilang memerlukan $b^2 - 4ac < 0$.',
            'Memilih rantau luar $m < -6$ atau $m > 2$ bukannya rantau tengah bagi $(m - 2)(m + 6) < 0$.'
          ],
          en: [
            'Using $b^2 - 4ac > 0$ instead of $b^2 - 4ac < 0$ for non-intersection.',
            'Taking the outer tails $m < -6$ or $m > 2$ instead of the middle region for $(m - 2)(m + 6) < 0$.'
          ]
        },
        scheme: [
          {
            badge: 'K1',
            bm: 'Samakan dan susun: $x^2 - 2x - 1 = mx - 5 \\implies x^2 - 2x - mx - 1 + 5 = 0 \\implies x^2 - (m + 2)x + 4 = 0$.',
            en: 'Equate and rearrange: $x^2 - 2x - 1 = mx - 5 \\implies x^2 - 2x - mx - 1 + 5 = 0 \\implies x^2 - (m + 2)x + 4 = 0$.',
            why: {
              bm: 'Faktorkan tanda tolak daripada $-2x - mx = -(m + 2)x$ supaya pekali $b = -(m + 2)$ jelas dibaca.',
              en: 'Factor the minus sign out of $-2x - mx = -(m + 2)x$ so the quadratic coefficient $b = -(m + 2)$ is crystal clear.'
            }
          },
          {
            badge: 'K1',
            bm: 'Tiada persilangan bermakna tiada punca nyata ($b^2 - 4ac < 0$): $[-(m + 2)]^2 - 4(1)(4) < 0$.',
            en: 'No intersection means no real roots ($b^2 - 4ac < 0$): $[-(m + 2)]^2 - 4(1)(4) < 0$.',
            why: {
              bm: 'Garis tidak menyentuh atau memotong lengkung bermaksud persamaan gabungan tiada penyelesaian nyata ($b^2 - 4ac < 0$).',
              en: 'A line that neither touches nor cuts a curve gives zero real intersection roots ($b^2 - 4ac < 0$).'
            }
          },
          {
            badge: 'K1',
            bm: 'Kembangkan dan faktorkan: $(m + 2)^2 - 16 = m^2 + 4m + 4 - 16 = m^2 + 4m - 12 < 0 \\implies (m - 2)(m + 6) < 0$.',
            en: 'Expand and factorise: $(m + 2)^2 - 16 = m^2 + 4m + 4 - 16 = m^2 + 4m - 12 < 0 \\implies (m - 2)(m + 6) < 0$.',
            why: {
              bm: 'Kuasa dua tanda negatif menjadi positif ($[-(m+2)]^2 = (m+2)^2$); kembangkan sebelum menolak $16$.',
              en: 'Squaring the negative cancels it ($[-(m+2)]^2 = (m+2)^2$); expand carefully before subtracting $16$.'
            }
          },
          {
            badge: 'N1',
            bm: 'Lakar parabola $\\cup$ berakar $-6, 2$; rantau $< 0$ berada di tengah: $-6 < m < 2$.',
            en: 'Sketch $\\cup$-parabola with roots $-6, 2$; the $< 0$ region lies in the middle: $-6 < m < 2$.',
            why: {
              bm: 'Bagi lengkung $\\cup$, nilai di bawah paksi ($< 0$) terletak di antara kedua-dua punca sebagai satu selang tunggal.',
              en: 'For a $\\cup$-curve, values below the axis ($< 0$) lie strictly between the two roots as a single interval.'
            }
          }
        ]
      }
    ],

    // =========================================================================
    // TINGKATAN 4 BAB 4: INDEKS, SURD & LOGARITMA (10 SOALAN)
    // =========================================================================
    'f4-c4': [
      {
        code: '4.1', marks: 3,
        topic: { bm: 'Persamaan Indeks Asas Sepunya', en: 'Common-Base Index Equation' },
        q: { bm: 'Selesaikan persamaan $8^{2x-1} = \\frac{1}{32^{x+2}}$. [3m]', en: 'Solve $8^{2x-1} = \\frac{1}{32^{x+2}}$. [3m]' },
        mistakes: {
          bm: [
            'Lupa kurungan tanda negatif pada keseluruhan eksponen penyebut: menulis $-5x + 10$ bukannya $-5(x + 2) = -5x - 10$.',
            'Tersilap menukar kuasa asas $2$: menulis $32 = 2^4$ bukannya $32 = 2^5$ (atau $8 = 2^4$).'
          ],
          en: [
            'Failing to negate the entire denominator exponent: writing $-5x + 10$ instead of $-5(x + 2) = -5x - 10$.',
            'Power conversion slip: writing $32 = 2^4$ instead of $32 = 2^5$ (or $8 = 2^4$).'
          ]
        },
        scheme: [
          {
            badge: 'K1',
            bm: 'Tulis semula $\\frac{1}{32^{x+2}} = 32^{-(x+2)}$ dan tukar $8 = 2^3,\\; 32 = 2^5$: $(2^3)^{2x-1} = (2^5)^{-(x+2)}$.',
            en: 'Rewrite $\\frac{1}{32^{x+2}} = 32^{-(x+2)}$ and convert $8 = 2^3,\\; 32 = 2^5$: $(2^3)^{2x-1} = (2^5)^{-(x+2)}$.',
            why: {
              bm: 'Hukum indeks negatif $\\frac{1}{a^m} = a^{-m}$ membawa penyebut ke atas dengan kurungan di sekeliling $(x + 2)$, dan asas sepunya $2$ membolehkan perbandingan kuasa.',
              en: 'The negative index law $\\frac{1}{a^m} = a^{-m}$ brings the denominator up with brackets around $(x + 2)$, and base $2$ aligns both sides.'
            }
          },
          {
            badge: 'K1',
            bm: 'Darab eksponen $(a^m)^n = a^{mn}$: $2^{3(2x-1)} = 2^{-5(x+2)} \\implies 2^{6x-3} = 2^{-5x-10}$.',
            en: 'Multiply exponents $(a^m)^n = a^{mn}$: $2^{3(2x-1)} = 2^{-5(x+2)} \\implies 2^{6x-3} = 2^{-5x-10}$.',
            why: {
              bm: 'Pastikan $3$ didarab kepada kedua-dua $2x$ dan $-1$, manakala $-5$ didarab kepada kedua-dua $x$ dan $+2$ ($-5 \\times 2 = -10$).',
              en: 'Make sure $3$ multiplies both $2x$ and $-1$, while $-5$ distributes to both $x$ and $+2$ ($-5 \\times 2 = -10$).'
            }
          },
          {
            badge: 'K1',
            bm: 'Samakan eksponen dan kumpulkan $x$: $6x - 3 = -5x - 10 \\implies 6x + 5x = -10 + 3 \\implies 11x = -7$.',
            en: 'Equate exponents and group $x$: $6x - 3 = -5x - 10 \\implies 6x + 5x = -10 + 3 \\implies 11x = -7$.',
            why: {
              bm: 'Apabila asas sama ($2^A = 2^B$), eksponennya mesti sama ($A = B$), menukar masalah kepada persamaan linear mudah.',
              en: 'Once bases match ($2^A = 2^B$), their exponents must be equal ($A = B$), reducing the problem to a simple linear equation.'
            }
          },
          {
            badge: 'N1',
            bm: '$x = -\\frac{7}{11}$.',
            en: '$x = -\\frac{7}{11}$.',
            why: {
              bm: 'Bahagi kedua-dua belah dengan $11$ dan kekalkan jawapan sebagai pecahan tepat.',
              en: 'Divide both sides by $11$ and leave the answer as an exact fraction.'
            }
          }
        ]
      },
      {
        code: '4.2', marks: 4,
        topic: { bm: 'Persamaan Indeks Membawa kepada Kuadratik', en: 'Index Equation Reducible to Quadratic' },
        q: { bm: 'Selesaikan persamaan $3^{2x+1} - 10(3^x) + 3 = 0$. [4m]', en: 'Solve $3^{2x+1} - 10(3^x) + 3 = 0$. [4m]' },
        mistakes: {
          bm: [
            'Menganggap $3^{2x+1} = (3^x)^2 + 3$, sedangkan $3^{2x+1} = 3^1 \\cdot (3^x)^2 = 3u^2$!',
            'Berhenti pada $u = \\frac{1}{3}$ atau $u = 3$ tanpa menyambung untuk mencari nilai $x$.'
          ],
          en: [
            'Writing $3^{2x+1} = (3^x)^2 + 3$ instead of $3^1 \\cdot (3^x)^2 = 3u^2$!',
            'Stopping at $u = \\frac{1}{3}$ or $u = 3$ instead of substituting back to solve for $x$.'
          ]
        },
        scheme: [
          {
            badge: 'K1',
            bm: 'Pecahkan $3^{2x+1} = 3^1 \\cdot 3^{2x} = 3(3^x)^2$, maka $3(3^x)^2 - 10(3^x) + 3 = 0$.',
            en: 'Split $3^{2x+1} = 3^1 \\cdot 3^{2x} = 3(3^x)^2$, so $3(3^x)^2 - 10(3^x) + 3 = 0$.',
            why: {
              bm: 'Hukum $a^{m+n} = a^m \\cdot a^n$ memisahkan $+1$ menjadi faktor darab $3^1 = 3$, mendedahkan pola kuadratik dalam $3^x$.',
              en: 'The law $a^{m+n} = a^m \\cdot a^n$ splits $+1$ into a multiplying factor $3^1 = 3$, revealing a quadratic in $3^x$.'
            }
          },
          {
            badge: 'K1',
            bm: 'Biar $u = 3^x$: $3u^2 - 10u + 3 = 0 \\implies (3u - 1)(u - 3) = 0 \\implies u = \\frac{1}{3}$ atau $u = 3$.',
            en: 'Let $u = 3^x$: $3u^2 - 10u + 3 = 0 \\implies (3u - 1)(u - 3) = 0 \\implies u = \\frac{1}{3}$ or $u = 3$.',
            why: {
              bm: 'Gantian $u = 3^x$ menukar persamaan eksponen kepada kuadratik biasa yang mudah difaktorkan.',
              en: 'Substituting $u = 3^x$ turns the exponential equation into a standard quadratic that factors cleanly.'
            }
          },
          {
            badge: 'K1',
            bm: 'Ganti balik $3^x$: $3^x = \\frac{1}{3} = 3^{-1}$ atau $3^x = 3^1$.',
            en: 'Substitute back $3^x$: $3^x = \\frac{1}{3} = 3^{-1}$ or $3^x = 3^1$.',
            why: {
              bm: 'Tulis $\\frac{1}{3}$ sebagai $3^{-1}$ supaya kedua-dua belah mempunyai asas $3$ yang sama (kedua-dua $u > 0$, maka sah).',
              en: 'Rewrite $\\frac{1}{3}$ as $3^{-1}$ so both sides share base $3$ (both $u > 0$, so both branches are valid).'
            }
          },
          {
            badge: 'N1',
            bm: '$x = -1$ atau $x = 1$.',
            en: '$x = -1$ or $x = 1$.',
            why: {
              bm: 'Samakan eksponen asas $3$ untuk mendapat nilai $x$; kedua-duanya memenuhi persamaan asal.',
              en: 'Equate the base-$3$ exponents to solve for $x$; both values satisfy the original equation.'
            }
          }
        ]
      },
      {
        code: '4.3', marks: 3,
        topic: { bm: 'Menghapuskan Surd pada Penyebut (Pasangan Konjugat)', en: 'Rationalizing Surd Denominator' },
        q: { bm: 'Permudahkan $\\frac{3\\sqrt{2} - 1}{2\\sqrt{2} + 3}$ kepada bentuk $a + b\\sqrt{2}$. [3m]', en: 'Simplify $\\frac{3\\sqrt{2} - 1}{2\\sqrt{2} + 3}$ in the form $a + b\\sqrt{2}$. [3m]' },
        mistakes: {
          bm: [
            'Salah mengira $(2\\sqrt{2})^2 = 4$ sedangkan $(2\\sqrt{2})^2 = 4 \\times 2 = 8$!',
            'Mendarab pengangka dan penyebut dengan $(2\\sqrt{2} + 3)$ bukannya pasangan konjugat $(2\\sqrt{2} - 3)$.'
          ],
          en: [
            'Computing $(2\\sqrt{2})^2 = 4$ instead of $4 \\times 2 = 8$!',
            'Multiplying top and bottom by $(2\\sqrt{2} + 3)$ instead of the conjugate $(2\\sqrt{2} - 3)$.'
          ]
        },
        scheme: [
          {
            badge: 'K1',
            bm: 'Darab atas dan bawah dengan pasangan konjugat $(2\\sqrt{2} - 3)$: $\\frac{(3\\sqrt{2} - 1)(2\\sqrt{2} - 3)}{(2\\sqrt{2} + 3)(2\\sqrt{2} - 3)}$.',
            en: 'Multiply top and bottom by the conjugate $(2\\sqrt{2} - 3)$: $\\frac{(3\\sqrt{2} - 1)(2\\sqrt{2} - 3)}{(2\\sqrt{2} + 3)(2\\sqrt{2} - 3)}$.',
            why: {
              bm: 'Mendarab dengan $\\frac{2\\sqrt{2} - 3}{2\\sqrt{2} - 3} = 1$ mengekalkan nilai pecahan sambil menggunakan $(A+B)(A-B) = A^2 - B^2$ untuk menghapuskan surd penyebut.',
              en: 'Multiplying by $\\frac{2\\sqrt{2} - 3}{2\\sqrt{2} - 3} = 1$ preserves value while using $(A+B)(A-B) = A^2 - B^2$ to eliminate the denominator surd.'
            }
          },
          {
            badge: 'K1',
            bm: 'Kembangkan pengangka: $3\\sqrt{2}(2\\sqrt{2}) - 9\\sqrt{2} - 2\\sqrt{2} + 3 = 6(2) - 11\\sqrt{2} + 3 = 15 - 11\\sqrt{2}$.',
            en: 'Expand numerator: $3\\sqrt{2}(2\\sqrt{2}) - 9\\sqrt{2} - 2\\sqrt{2} + 3 = 6(2) - 11\\sqrt{2} + 3 = 15 - 11\\sqrt{2}$.',
            why: {
              bm: 'Gunakan $\\sqrt{2} \\times \\sqrt{2} = 2$ pada sebutan pertama ($6 \\times 2 = 12$), kemudian gabungkan $12 + 3 = 15$ dan $-9\\sqrt{2} - 2\\sqrt{2} = -11\\sqrt{2}$.',
              en: 'Use $\\sqrt{2} \\times \\sqrt{2} = 2$ on the first term ($6 \\times 2 = 12$), then combine $12 + 3 = 15$ and $-9\\sqrt{2} - 2\\sqrt{2} = -11\\sqrt{2}$.'
            }
          },
          {
            badge: 'K1',
            bm: 'Kembangkan penyebut: $(2\\sqrt{2})^2 - 3^2 = 4(2) - 9 = 8 - 9 = -1$.',
            en: 'Expand denominator: $(2\\sqrt{2})^2 - 3^2 = 4(2) - 9 = 8 - 9 = -1$.',
            why: {
              bm: 'Kuasa dua kedua-dua $2$ dan $\\sqrt{2}$ menghasilkan $4 \\times 2 = 8$; penyebut kini menjadi nombor bulat $-1$ tanpa surd.',
              en: 'Square both $2$ and $\\sqrt{2}$ to get $4 \\times 2 = 8$; the denominator is now the rational integer $-1$.'
            }
          },
          {
            badge: 'N1',
            bm: 'Bahagi setiap sebutan dengan $-1$: $\\frac{15 - 11\\sqrt{2}}{-1} = -15 + 11\\sqrt{2}$.',
            en: 'Divide every term by $-1$: $\\frac{15 - 11\\sqrt{2}}{-1} = -15 + 11\\sqrt{2}$.',
            why: {
              bm: 'Membahagi dengan $-1$ menukar tanda kedua-dua bahagian ($+15 \\to -15$ dan $-11\\sqrt{2} \\to +11\\sqrt{2}$) kepada bentuk $a + b\\sqrt{2}$.',
              en: 'Dividing by $-1$ flips the sign of both parts ($+15 \\to -15$ and $-11\\sqrt{2} \\to +11\\sqrt{2}$) into $a + b\\sqrt{2}$ form.'
            }
          }
        ]
      },
      {
        code: '4.4', marks: 4,
        topic: { bm: 'Persamaan Melibatkan Surd', en: 'Solving Surd Equations' },
        q: { bm: 'Selesaikan persamaan $\\sqrt{2x + 5} - \\sqrt{x - 1} = 2$. [4m]', en: 'Solve $\\sqrt{2x + 5} - \\sqrt{x - 1} = 2$. [4m]' },
        mistakes: {
          bm: [
            'Mengkuasadua $(2 + \\sqrt{x - 1})^2$ tanpa sebutan tengah $4\\sqrt{x - 1}$ (atau mengkuasadua terus tanpa mengasingkan satu surd dahulu).',
            'Lupa menguji semula calon jawapan dalam persamaan asal untuk mengesan punca tak sah (*extraneous roots*).'
          ],
          en: [
            'Squaring $(2 + \\sqrt{x - 1})^2$ without the middle term $4\\sqrt{x - 1}$ (or squaring both sides before isolating one surd).',
            'Skipping the substitution check into the original equation to reject any extraneous roots.'
          ]
        },
        scheme: [
          {
            badge: 'K1',
            bm: 'Asingkan satu surd di sebelah kiri: $\\sqrt{2x + 5} = 2 + \\sqrt{x - 1}$.',
            en: 'Isolate one surd on the LHS: $\\sqrt{2x + 5} = 2 + \\sqrt{x - 1}$.',
            why: {
              bm: 'Mengasingkan satu punca kuasa sebelum mengkuasadua mengelakkan hasil darab dua surd serentak yang rumit.',
              en: 'Isolating one square root before squaring avoids creating a messy product of two different surds.'
            }
          },
          {
            badge: 'K1',
            bm: 'Kuasa dua kedua-dua belah: $2x + 5 = 4 + 4\\sqrt{x - 1} + (x - 1) \\implies x + 2 = 4\\sqrt{x - 1}$.',
            en: 'Square both sides carefully: $2x + 5 = 4 + 4\\sqrt{x - 1} + (x - 1) \\implies x + 2 = 4\\sqrt{x - 1}$.',
            why: {
              bm: 'Gunakan $(a + b)^2 = a^2 + 2ab + b^2$ untuk mendapat sebutan tengah $4\\sqrt{x - 1}$, lalu kumpulkan semua sebutan tanpa surd di sebelah kiri.',
              en: 'Apply $(a + b)^2 = a^2 + 2ab + b^2$ to keep the middle term $4\\sqrt{x - 1}$, then move all non-surd terms to the LHS.'
            }
          },
          {
            badge: 'K1',
            bm: 'Kuasa dua kali kedua: $(x + 2)^2 = 16(x - 1) \\implies x^2 + 4x + 4 = 16x - 16$.',
            en: 'Square a second time: $(x + 2)^2 = 16(x - 1) \\implies x^2 + 4x + 4 = 16x - 16$.',
            why: {
              bm: 'Mengkuasadua sekali lagi menghapuskan surd yang tinggal (ingat $4^2 = 16$).',
              en: 'Squaring a second time eliminates the remaining surd completely (remember $4^2 = 16$).'
            }
          },
          {
            badge: 'K1',
            bm: 'Susun dan faktorkan: $x^2 - 12x + 20 = 0 \\implies (x - 2)(x - 10) = 0 \\implies x = 2$ atau $x = 10$.',
            en: 'Rearrange and factorise: $x^2 - 12x + 20 = 0 \\implies (x - 2)(x - 10) = 0 \\implies x = 2$ or $x = 10$.',
            why: {
              bm: 'Pindahkan $16x - 16$ ke LHS ($4x - 16x = -12x$, $4 + 16 = 20$) untuk menyelesaikan kuadratik.',
              en: 'Move $16x - 16$ to LHS ($4x - 16x = -12x$, $4 + 16 = 20$) to solve the quadratic.'
            }
          },
          {
            badge: 'N1',
            bm: 'Uji dalam LHS asal: $x = 2 \\implies \\sqrt{9} - \\sqrt{1} = 3 - 1 = 2$ (sah); $x = 10 \\implies \\sqrt{25} - \\sqrt{9} = 5 - 3 = 2$ (sah); maka $x = 2,\\; x = 10$.',
            en: 'Check in original LHS: $x = 2 \\implies \\sqrt{9} - \\sqrt{1} = 3 - 1 = 2$ (valid); $x = 10 \\implies \\sqrt{25} - \\sqrt{9} = 5 - 3 = 2$ (valid); hence $x = 2,\\; x = 10$.',
            why: {
              bm: 'Langkah mengkuasadua boleh mencipta punca palsu, jadi kita wajib menyemak kedua-dua nilai dalam persamaan asal.',
              en: 'Squaring equations can introduce extraneous roots, so we must verify both candidates in the original equation.'
            }
          }
        ]
      },
      {
        code: '4.5', marks: 3,
        topic: { bm: 'Ungkapan Hukum Logaritma', en: 'Logarithm Laws Expression' },
        q: { bm: 'Diberi $\\log_a 2 = p$ dan $\\log_a 3 = q$. Ungkapkan $\\log_a\\left(\\frac{18}{a^3}\\right)$ dalam sebutan $p$ dan $q$. [3m]', en: 'Given $\\log_a 2 = p$ and $\\log_a 3 = q$, express $\\log_a\\left(\\frac{18}{a^3}\\right)$ in terms of $p$ and $q$. [3m]' },
        mistakes: {
          bm: [
            'Menganggap $\\log_a(a^3) = 1$ bukannya $3\\log_a a = 3$.',
            'Menulis $\\log_a(18) = \\log_a 2 \\times \\log_a 9$ bukannya menambah $\\log_a 2 + \\log_a 9$.'
          ],
          en: [
            'Writing $\\log_a(a^3) = 1$ instead of $3\\log_a a = 3$.',
            'Splitting $\\log_a(18)$ as $\\log_a 2 \\times \\log_a 9$ instead of adding $\\log_a 2 + \\log_a 9$.'
          ]
        },
        scheme: [
          {
            badge: 'K1',
            bm: 'Guna hukum bahagi logaritma: $\\log_a\\left(\\frac{18}{a^3}\\right) = \\log_a 18 - \\log_a(a^3)$.',
            en: 'Apply quotient law of logarithms: $\\log_a\\left(\\frac{18}{a^3}\\right) = \\log_a 18 - \\log_a(a^3)$.',
            why: {
              bm: 'Hukum bahagi $\\log_a\\left(\\frac{M}{N}\\right) = \\log_a M - \\log_a N$ memisahkan pengangka dan penyebut dahulu.',
              en: 'The quotient law $\\log_a\\left(\\frac{M}{N}\\right) = \\log_a M - \\log_a N$ separates numerator and denominator first.'
            }
          },
          {
            badge: 'K1',
            bm: 'Faktorkan $18 = 2 \\times 3^2$: $\\log_a(2 \\times 3^2) - 3\\log_a a$.',
            en: 'Factorise $18 = 2 \\times 3^2$: $\\log_a(2 \\times 3^2) - 3\\log_a a$.',
            why: {
              bm: 'Pecahkan $18$ kepada faktor perdana $2$ dan $3$ kerana nilai yang diberi hanyalah $\\log_a 2$ dan $\\log_a 3$.',
              en: 'Break $18$ into prime factors $2$ and $3$ because only $\\log_a 2$ and $\\log_a 3$ are given.'
            }
          },
          {
            badge: 'K1',
            bm: 'Guna hukum darab dan kuasa: $\\log_a 2 + 2\\log_a 3 - 3(1)$.',
            en: 'Apply product and power laws: $\\log_a 2 + 2\\log_a 3 - 3(1)$.',
            why: {
              bm: 'Darab di dalam log bertukar menjadi tambah di luar ($\\log_a(MN) = \\log_a M + \\log_a N$), kuasa turun ke depan, dan $\\log_a a = 1$.',
              en: 'Multiplication inside a log becomes addition outside, powers drop in front, and $\\log_a a = 1$.'
            }
          },
          {
            badge: 'N1',
            bm: 'Gantikan $p$ dan $q$: $p + 2q - 3$.',
            en: 'Substitute $p$ and $q$: $p + 2q - 3$.',
            why: {
              bm: 'Gantikan $\\log_a 2 = p$ dan $\\log_a 3 = q$ untuk mendapat ungkapan akhir.',
              en: 'Replace $\\log_a 2 = p$ and $\\log_a 3 = q$ to complete the expression.'
            }
          }
        ]
      },
      {
        code: '4.6', marks: 4,
        topic: { bm: 'Penukaran Asas Logaritma', en: 'Change of Base of Logarithms' },
        q: { bm: 'Selesaikan persamaan $\\log_2 x + \\log_4 x = 6$. [4m]', en: 'Solve $\\log_2 x + \\log_4 x = 6$. [4m]' },
        mistakes: {
          bm: [
            'Menjumlahkan logaritma berbeza asas secara terus seperti $\\log_2 x + \\log_4 x = \\log_6(2x)$ tanpa menukar asas.',
            'Menulis $\\log_4 x = 2\\log_2 x$ bukannya $\\frac{1}{2}\\log_2 x$, atau menukar $\\log_2 x = 4$ kepada $x = 2 \\times 4 = 8$ bukannya $2^4$.'
          ],
          en: [
            'Combining logs of different bases directly like $\\log_2 x + \\log_4 x = \\log_6(2x)$ without change-of-base.',
            'Writing $\\log_4 x = 2\\log_2 x$ instead of $\\frac{1}{2}\\log_2 x$, or converting $\\log_2 x = 4$ to $x = 2 \\times 4 = 8$ instead of $2^4$.'
          ]
        },
        scheme: [
          {
            badge: 'K1',
            bm: 'Tukar $\\log_4 x$ kepada asas $2$: $\\log_4 x = \\frac{\\log_2 x}{\\log_2 4} = \\frac{\\log_2 x}{\\log_2(2^2)} = \\frac{1}{2}\\log_2 x$.',
            en: 'Change $\\log_4 x$ to base $2$: $\\log_4 x = \\frac{\\log_2 x}{\\log_2 4} = \\frac{\\log_2 x}{\\log_2(2^2)} = \\frac{1}{2}\\log_2 x$.',
            why: {
              bm: 'Logaritma tidak boleh digabungkan sehingga asasnya sama; rumus tukar asas $\\log_b x = \\frac{\\log_a x}{\\log_a b}$ menukar asas $4$ kepada asas $2$ kerana $4 = 2^2$.',
              en: 'Logs cannot be combined until they share the same base; the change-of-base rule converts base $4$ to base $2$ cleanly since $4 = 2^2$.'
            }
          },
          {
            badge: 'K1',
            bm: 'Gabungkan sebutan log serupa: $\\log_2 x + \\frac{1}{2}\\log_2 x = \\frac{3}{2}\\log_2 x = 6$.',
            en: 'Combine like log terms: $\\log_2 x + \\frac{1}{2}\\log_2 x = \\frac{3}{2}\\log_2 x = 6$.',
            why: {
              bm: 'Anggap $\\log_2 x$ seperti pemboleh ubah tunggal: $1 + \\frac{1}{2} = \\frac{3}{2}$.',
              en: 'Treat $\\log_2 x$ like a single term: $1\\log_2 x + \\frac{1}{2}\\log_2 x = \\frac{3}{2}\\log_2 x$.'
            }
          },
          {
            badge: 'K1',
            bm: 'Asingkan $\\log_2 x$: $\\log_2 x = 6 \\times \\frac{2}{3} = 4$.',
            en: 'Isolate $\\log_2 x$: $\\log_2 x = 6 \\times \\frac{2}{3} = 4$.',
            why: {
              bm: 'Darab kedua-dua belah dengan salingan $\\frac{2}{3}$ untuk mengasingkan $\\log_2 x$ sebelum menukar kepada bentuk indeks.',
              en: 'Multiply both sides by the reciprocal $\\frac{2}{3}$ to isolate $\\log_2 x$ before converting to index form.'
            }
          },
          {
            badge: 'N1',
            bm: 'Tukar kepada bentuk indeks: $x = 2^4 = 16$.',
            en: 'Convert to index form: $x = 2^4 = 16$.',
            why: {
              bm: 'Definisi $\\log_2 x = 4$ bermakna $2$ dikuasakan dengan $4$ menghasilkan $x = 16$ ($x > 0$, sah).',
              en: 'By definition, $\\log_2 x = 4$ means $2$ raised to the power $4$ equals $x = 16$ ($x > 0$, valid).'
            }
          }
        ]
      },
      {
        code: '4.7', marks: 4,
        topic: { bm: 'Persamaan Logaritma Kuadratik', en: 'Quadratic Logarithmic Equation' },
        q: { bm: 'Selesaikan $(\\log_3 x)^2 - 2\\log_3(x^2) - 5 = 0$. [4m]', en: 'Solve $(\\log_3 x)^2 - 2\\log_3(x^2) - 5 = 0$. [4m]' },
        mistakes: {
          bm: [
            'Mengelirukan $(\\log_3 x)^2$ dengan $\\log_3(x^2) = 2\\log_3 x$! Kedua-duanya TIDAK sama.',
            'Lupa menggandakan $2 \\times 2\\log_3 x = 4\\log_3 x$, atau menulis $3^{-1} = -3$ bukannya $\\frac{1}{3}$.'
          ],
          en: [
            'Confusing $(\\log_3 x)^2$ with $\\log_3(x^2) = 2\\log_3 x$! They are NOT the same.',
            'Forgetting $2(2\\log_3 x) = 4\\log_3 x$, or writing $3^{-1} = -3$ instead of $\\frac{1}{3}$.'
          ]
        },
        scheme: [
          {
            badge: 'K1',
            bm: 'Guna hukum kuasa pada $2\\log_3(x^2) = 2(2\\log_3 x) = 4\\log_3 x$: $(\\log_3 x)^2 - 4\\log_3 x - 5 = 0$.',
            en: 'Apply power law to $2\\log_3(x^2) = 2(2\\log_3 x) = 4\\log_3 x$: $(\\log_3 x)^2 - 4\\log_3 x - 5 = 0$.',
            why: {
              bm: 'Hanya kuasa di dalam logaritma ($x^2$) boleh turun ke depan; kuasa di luar $(\\log_3 x)^2$ kekal sebagai kuasa dua.',
              en: 'Only the exponent inside the log ($x^2$) drops to the front; the outer square $(\\log_3 x)^2$ stays squared.'
            }
          },
          {
            badge: 'K1',
            bm: 'Biar $y = \\log_3 x$: $y^2 - 4y - 5 = 0 \\implies (y - 5)(y + 1) = 0$.',
            en: 'Let $y = \\log_3 x$: $y^2 - 4y - 5 = 0 \\implies (y - 5)(y + 1) = 0$.',
            why: {
              bm: 'Gantian $y = \\log_3 x$ memudahkan pemfaktoran persamaan kuadratik.',
              en: 'Substituting $y = \\log_3 x$ makes the quadratic easy to factorise.'
            }
          },
          {
            badge: 'K1',
            bm: '$y = 5$ atau $y = -1$, maka $\\log_3 x = 5$ atau $\\log_3 x = -1$.',
            en: '$y = 5$ or $y = -1$, so $\\log_3 x = 5$ or $\\log_3 x = -1$.',
            why: {
              bm: 'Nilai $y = \\log_3 x$ boleh negatif (hanya input $x$ yang mesti positif), jadi kedua-dua nilai $y$ dikekalkan.',
              en: 'A logarithm output $y = \\log_3 x$ can be negative (only the input $x$ must be positive), so both $y$ branches remain valid.'
            }
          },
          {
            badge: 'N1',
            bm: 'Tukar kepada bentuk indeks: $x = 3^5 = 243$ atau $x = 3^{-1} = \\frac{1}{3}$.',
            en: 'Convert to index form: $x = 3^5 = 243$ or $x = 3^{-1} = \\frac{1}{3}$.',
            why: {
              bm: 'Ingat $a^{-1} = \\frac{1}{a}$ (pecahan positif, bukan nombor negatif); kedua-dua $x > 0$ adalah penyelesaian sah.',
              en: 'Remember $a^{-1} = \\frac{1}{a}$ (a positive fraction, not a negative number); both $x > 0$ are valid solutions.'
            }
          }
        ]
      },
      {
        code: '4.8', marks: 3,
        topic: { bm: 'Logaritma Asli (ln)', en: 'Natural Logarithm (ln)' },
        q: { bm: 'Selesaikan $e^{2x - 1} = 7$ betul kepada 3 tempat perpuluhan. [3m]', en: 'Solve $e^{2x - 1} = 7$ correct to 3 decimal places. [3m]' },
        mistakes: {
          bm: [
            'Terlupa bahawa $\\ln e = 1$, atau menekan $\\log_{10}$ pada kalkulator bukannya $\\ln$.',
            'Membahagi $\\ln 7$ sahaja dengan $2$ ($x = 1 + \\frac{\\ln 7}{2}$) bukannya keseluruhan $(1 + \\ln 7)$.'
          ],
          en: [
            'Forgetting that $\\ln e = 1$, or pressing $\\log_{10}$ instead of $\\ln$ on the calculator.',
            'Dividing only $\\ln 7$ by $2$ ($x = 1 + \\frac{\\ln 7}{2}$) instead of dividing the whole numerator $(1 + \\ln 7)$.'
          ]
        },
        scheme: [
          {
            badge: 'K1',
            bm: 'Ambil $\\ln$ pada kedua-dua belah: $\\ln(e^{2x - 1}) = \\ln 7 \\implies (2x - 1)\\ln e = \\ln 7$.',
            en: 'Take $\\ln$ on both sides: $\\ln(e^{2x - 1}) = \\ln 7 \\implies (2x - 1)\\ln e = \\ln 7$.',
            why: {
              bm: 'Apabila anu $x$ berada di eksponen bagi $e$, mengambil $\\ln$ (logaritma asas $e$) menurunkan kuasa ke hadapan.',
              en: 'When the unknown $x$ sits in the exponent of $e$, taking $\\ln$ (base-$e$ log) brings the exponent down to the front.'
            }
          },
          {
            badge: 'K1',
            bm: 'Guna $\\ln e = 1$: $2x - 1 = \\ln 7 \\implies 2x = 1 + \\ln 7$.',
            en: 'Apply $\\ln e = 1$: $2x - 1 = \\ln 7 \\implies 2x = 1 + \\ln 7$.',
            why: {
              bm: 'Oleh sebab $\\ln e = \\log_e e = 1$, faktor $\\ln e$ hilang dengan bersih meninggalkan persamaan linear dalam $x$.',
              en: 'Since $\\ln e = \\log_e e = 1$, the $\\ln e$ factor disappears cleanly, leaving a linear equation in $x$.'
            }
          },
          {
            badge: 'K1',
            bm: 'Nilaikan $\\ln 7 \\approx 1.94591$: $x = \\frac{1 + 1.94591}{2} = \\frac{2.94591}{2}$.',
            en: 'Evaluate $\\ln 7 \\approx 1.94591$: $x = \\frac{1 + 1.94591}{2} = \\frac{2.94591}{2}$.',
            why: {
              bm: 'Tambah $1$ dahulu sebelum membahagi keseluruhan pengangka dengan $2$, sambil mengekalkan 5 tempat perpuluhan pertengahan.',
              en: 'Add $1$ first before dividing the entire sum by $2$, keeping extra decimal digits during intermediate calculation.'
            }
          },
          {
            badge: 'N1',
            bm: '$x = 1.473$ (3 t.p.).',
            en: '$x = 1.473$ (3 d.p.).',
            why: {
              bm: 'Bundarkan $1.472955\\dots$ kepada 3 tempat perpuluhan tepat seperti kehendak soalan.',
              en: 'Round $1.472955\\dots$ to 3 decimal places as required by the question.'
            }
          }
        ]
      },
      {
        code: '4.9', marks: 3,
        topic: { bm: 'Permudahan Sebutan Surd Serupa', en: 'Simplifying Like Surds' },
        q: { bm: 'Permudahkan $\\sqrt{48} - 3\\sqrt{12} + \\sqrt{75}$ kepada bentuk $k\\sqrt{3}$. [3m]', en: 'Simplify $\\sqrt{48} - 3\\sqrt{12} + \\sqrt{75}$ into the form $k\\sqrt{3}$. [3m]' },
        mistakes: {
          bm: [
            'Menambah nombor terus di dalam punca kuasa (seperti $\\sqrt{48 - 36 + 75}$) atau salah memfaktorkan kuasa dua sempurna.',
            'Lupa mendarab faktor luar $3$ dengan $2\\sqrt{3}$ dalam $3\\sqrt{12}$ (menulis $2\\sqrt{3}$ bukannya $6\\sqrt{3}$).'
          ],
          en: [
            'Adding numbers directly inside roots (like $\\sqrt{48 - 36 + 75}$) or mis-extracting square factors.',
            'Forgetting to multiply the outer $3$ by $2\\sqrt{3}$ in $3\\sqrt{12}$ (writing $2\\sqrt{3}$ instead of $6\\sqrt{3}$).'
          ]
        },
        scheme: [
          {
            badge: 'K1',
            bm: 'Keluarkan faktor kuasa dua sempurna terbesar bagi setiap surd: $\\sqrt{48} = \\sqrt{16 \\times 3} = 4\\sqrt{3}$, $\\sqrt{12} = \\sqrt{4 \\times 3} = 2\\sqrt{3}$, $\\sqrt{75} = \\sqrt{25 \\times 3} = 5\\sqrt{3}$.',
            en: 'Pull out the largest perfect square factor from each surd: $\\sqrt{48} = \\sqrt{16 \\times 3} = 4\\sqrt{3}$, $\\sqrt{12} = \\sqrt{4 \\times 3} = 2\\sqrt{3}$, $\\sqrt{75} = \\sqrt{25 \\times 3} = 5\\sqrt{3}$.',
            why: {
              bm: 'Surd hanya boleh ditambah atau ditolak apabila bahagian puncanya serupa ($\\sqrt{3}$); bahagikan $48, 12, 75$ dengan $3$ untuk mencari kuasa dua sempurna $16, 4, 25$.',
              en: 'Surds can only be added or subtracted when they share the same root ($\\sqrt{3}$); divide $48, 12, 75$ by $3$ to reveal squares $16, 4, 25$.'
            }
          },
          {
            badge: 'K1',
            bm: 'Gantikan ke dalam ungkapan: $4\\sqrt{3} - 3(2\\sqrt{3}) + 5\\sqrt{3}$.',
            en: 'Substitute into the expression: $4\\sqrt{3} - 3(2\\sqrt{3}) + 5\\sqrt{3}$.',
            why: {
              bm: 'Kekalkan pekali $-3$ di hadapan $\\sqrt{12} = 2\\sqrt{3}$ dalam kurungan supaya pendaraban $-3 \\times 2 = -6$ tidak tercicir.',
              en: 'Keep the outer $-3$ in front of $\\sqrt{12} = 2\\sqrt{3}$ using brackets so multiplying $-3 \\times 2 = -6$ is not missed.'
            }
          },
          {
            badge: 'K1',
            bm: 'Darab dan kumpulkan pekali bagi $\\sqrt{3}$: $4\\sqrt{3} - 6\\sqrt{3} + 5\\sqrt{3} = (4 - 6 + 5)\\sqrt{3}$.',
            en: 'Multiply and collect coefficients of $\\sqrt{3}$: $4\\sqrt{3} - 6\\sqrt{3} + 5\\sqrt{3} = (4 - 6 + 5)\\sqrt{3}$.',
            why: {
              bm: 'Dengan semua sebutan berkongsi $\\sqrt{3}$, gabungkan pekalinya seperti algebra biasa ($4x - 6x + 5x$).',
              en: 'Once every term shares $\\sqrt{3}$, combine their coefficients just like like-terms in algebra ($4x - 6x + 5x$).'
            }
          },
          {
            badge: 'N1',
            bm: '$= 3\\sqrt{3}$ ($k = 3$).',
            en: '$= 3\\sqrt{3}$ ($k = 3$).',
            why: {
              bm: 'Hitung $4 - 6 + 5 = 3$ untuk memperoleh bentuk akhir $k\\sqrt{3}$ dengan $k = 3$.',
              en: 'Evaluating $4 - 6 + 5 = 3$ gives the final form $k\\sqrt{3}$ with $k = 3$.'
            }
          }
        ]
      },
      {
        code: '4.10', marks: 4,
        topic: { bm: 'Pertumbuhan Eksponen Bakteria', en: 'Exponential Bacterial Growth' },
        q: { bm: 'Bilangan bakteria selepas $t$ jam ialah $N(t) = 500e^{0.35t}$. Cari masa apabila $N(t) > 10\\,000$. [4m]', en: 'Bacteria count after $t$ hours is $N(t) = 500e^{0.35t}$. Find $t$ when $N(t) > 10\\,000$. [4m]' },
        mistakes: {
          bm: [
            'Mengambil $\\ln$ sebelum membahagikan $10\\,000$ dengan $500$ terlebih dahulu!',
            'Menggunakan $\\log_{10} 20$ bukannya $\\ln 20$ untuk menghapuskan asas $e$.'
          ],
          en: [
            'Taking $\\ln$ before dividing $10\\,000$ by $500$ to isolate $e^{0.35t}$!',
            'Using $\\log_{10} 20$ instead of $\\ln 20$ when cancelling base $e$.'
          ]
        },
        scheme: [
          {
            badge: 'K1',
            bm: 'Bina ketaksamaan $500e^{0.35t} > 10\\,000$ dan bahagi dengan $500$: $e^{0.35t} > \\frac{10\\,000}{500} = 20$.',
            en: 'Set up $500e^{0.35t} > 10\\,000$ and divide by $500$: $e^{0.35t} > \\frac{10\\,000}{500} = 20$.',
            why: {
              bm: 'Sentiasa asingkan sebutan eksponen $e^{0.35t}$ dengan membahagikan pemalar luar $500$ dahulu (arah $>$ kekal kerana $500 > 0$).',
              en: 'Always isolate the exponential term $e^{0.35t}$ by dividing by $500$ first (the $>$ sign stays because $500 > 0$).'
            }
          },
          {
            badge: 'K1',
            bm: 'Ambil $\\ln$ kedua-dua belah: $\\ln(e^{0.35t}) > \\ln 20 \\implies 0.35t\\ln e > \\ln 20 \\implies 0.35t > \\ln 20$.',
            en: 'Take $\\ln$ on both sides: $\\ln(e^{0.35t}) > \\ln 20 \\implies 0.35t\\ln e > \\ln 20 \\implies 0.35t > \\ln 20$.',
            why: {
              bm: 'Mengambil $\\ln$ menurunkan eksponen $0.35t$ dan menggunakan $\\ln e = 1$; fungsi $\\ln$ mengekalkan arah ketaksamaan $>$.',
              en: 'Taking $\\ln$ brings down $0.35t$ and uses $\\ln e = 1$; since $\\ln$ is increasing, the $>$ direction is preserved.'
            }
          },
          {
            badge: 'K1',
            bm: 'Bahagi dengan $0.35$: $t > \\frac{\\ln 20}{0.35} = \\frac{2.99573}{0.35}$.',
            en: 'Divide by $0.35$: $t > \\frac{\\ln 20}{0.35} = \\frac{2.99573}{0.35}$.',
            why: {
              bm: 'Oleh sebab $0.35 > 0$, membahagi kedua-dua belah dengan $0.35$ mengekalkan tanda $>$.',
              en: 'Because $0.35 > 0$, dividing both sides by $0.35$ keeps the $>$ inequality unchanged.'
            }
          },
          {
            badge: 'N1',
            bm: '$t > 8.56\\text{ jam}$.',
            en: '$t > 8.56\\text{ hours}$.',
            why: {
              bm: 'Nilaikan $2.99573 \\div 0.35 \\approx 8.559\\dots \\to 8.56$ lengkap dengan unit masa.',
              en: 'Evaluating $2.99573 \\div 0.35 \\approx 8.559\\dots \\to 8.56$ gives the required time with units.'
            }
          }
        ]
      }
    ],

    // =========================================================================
    // TINGKATAN 4 BAB 5: JANJANG (10 SOALAN)
    // =========================================================================
    'f4-c5': [
      {
        code: '5.1', marks: 3,
        topic: { bm: 'Sebutan ke-n Janjang Aritmetik (JA)', en: 'n-th Term of Arithmetic Progression (AP)' },
        q: { bm: 'Bagi suatu JA, $T_4 = 17$ dan $T_9 = 37$. Cari sebutan pertama $a$ dan beza sepunya $d$. [3m]', en: 'In an AP, $T_4 = 17$ and $T_9 = 37$. Find first term $a$ and common difference $d$. [3m]' },
        mistakes: {
          bm: [
            'Menulis $T_n = a + nd$ bukannya $a + (n - 1)d$.',
            'Kesilapan tolak semasa penghapusan seperti $8d - 3d = 6d$ atau $37 - 17 = 10$.'
          ],
          en: [
            'Writing $T_n = a + nd$ instead of $a + (n - 1)d$.',
            'Subtraction slip during elimination such as $8d - 3d = 6d$ or $37 - 17 = 10$.'
          ]
        },
        scheme: [
          {
            badge: 'K1',
            bm: 'Guna rumus $T_n = a + (n - 1)d$: $T_4 = a + 3d = 17$ --- (1) dan $T_9 = a + 8d = 37$ --- (2).',
            en: 'Apply $T_n = a + (n - 1)d$: $T_4 = a + 3d = 17$ --- (1) and $T_9 = a + 8d = 37$ --- (2).',
            why: {
              bm: 'Dalam JA, sebutan ke-$n$ hanya menambah $(n - 1)$ kali beza sepunya $d$ kepada $a$ (jadi $T_4$ guna $3d$, bukan $4d$).',
              en: 'In an AP, the $n$-th term adds $(n - 1)$ steps of $d$ to $a$ (so $T_4$ uses $3d$, not $4d$).'
            }
          },
          {
            badge: 'K1',
            bm: 'Tolak Pers.(2) $-$ Pers.(1): $(a + 8d) - (a + 3d) = 37 - 17 \\implies 5d = 20$.',
            en: 'Subtract Eq(2) $-$ Eq(1): $(a + 8d) - (a + 3d) = 37 - 17 \\implies 5d = 20$.',
            why: {
              bm: 'Kedua-dua persamaan mempunyai $+1a$, maka penolakan terus menghapuskan $a$ untuk mencari $d$.',
              en: 'Both equations have $+1a$, so subtracting eliminates $a$ immediately to solve for $d$.'
            }
          },
          {
            badge: 'K1',
            bm: 'Bahagi dengan $5$: $d = \\frac{20}{5} = 4$.',
            en: 'Divide by $5$: $d = \\frac{20}{5} = 4$.',
            why: {
              bm: 'Mendapatkan nilai tepat $d = 4$ membolehkan kita mencari $a$ melalui penggantian balik.',
              en: 'Finding the exact value $d = 4$ lets us back-substitute to obtain $a$.'
            }
          },
          {
            badge: 'N1',
            bm: 'Ganti $d = 4$ ke dalam (1): $a + 3(4) = 17 \\implies a = 17 - 12 = 5$, maka $a = 5,\\; d = 4$.',
            en: 'Substitute $d = 4$ into (1): $a + 3(4) = 17 \\implies a = 17 - 12 = 5$, so $a = 5,\\; d = 4$.',
            why: {
              bm: 'Semakan pantas pada Pers.(2): $5 + 8(4) = 5 + 32 = 37$ mengesahkan kedua-dua nilai tepat.',
              en: 'Quick check in Eq(2): $5 + 8(4) = 5 + 32 = 37$ confirms both values are exact.'
            }
          }
        ]
      },
      {
        code: '5.2', marks: 3,
        topic: { bm: 'Hasil Tambah Sebutan ke-6 hingga ke-15', en: 'Sum from 6th Term to 15th Term' },
        q: { bm: 'Bagi JA $7, 11, 15, \\dots$, cari hasil tambah daripada sebutan ke-6 hingga ke-15. [3m]', en: 'For the AP $7, 11, 15, \\dots$, find the sum from the 6th term to the 15th term inclusive. [3m]' },
        mistakes: {
          bm: [
            'Mengira $S_{15} - S_6$ (tertolak sekali sebutan $T_6$!) bukannya **$S_{15} - S_5$**.',
            'Mengira $(n - 1)d$ dalam rumus $S_n$ menggunakan $n$ bukannya $n - 1$ (contoh: $15(4)$ bukannya $14(4)$).'
          ],
          en: [
            'Computing $S_{15} - S_6$ (excluding $T_6$!) instead of **$S_{15} - S_5$**.',
            'Using $n$ instead of $(n - 1)$ in the $S_n$ formula (e.g. $15(4)$ instead of $14(4)$).'
          ]
        },
        scheme: [
          {
            badge: 'K1',
            bm: 'Kenal pasti $a = 7,\\; d = 11 - 7 = 4$; jumlah daripada $T_6$ hingga $T_{15}$ termasuk $T_6$ ialah $S_{15} - S_5$.',
            en: 'Identify $a = 7,\\; d = 11 - 7 = 4$; the inclusive sum from $T_6$ to $T_{15}$ equals $S_{15} - S_5$.',
            why: {
              bm: '$S_{15}$ menjumlahkan $T_1$ hingga $T_{15}$; untuk mengekalkan $T_6$, tolak lima sebutan pertama ($S_5 = T_1 + \\dots + T_5$) sahaja.',
              en: '$S_{15}$ sums $T_1$ through $T_{15}$; to keep $T_6$ included, subtract only the first five terms ($S_5 = T_1 + \\dots + T_5$).'
            }
          },
          {
            badge: 'K1',
            bm: 'Hitung $S_{15} = \\frac{15}{2}[2(7) + (15 - 1)(4)] = 7.5(14 + 56) = 7.5(70) = 525$.',
            en: 'Compute $S_{15} = \\frac{15}{2}[2(7) + (15 - 1)(4)] = 7.5(14 + 56) = 7.5(70) = 525$.',
            why: {
              bm: 'Gunakan $S_n = \\frac{n}{2}[2a + (n - 1)d]$ dengan $n = 15$, jadi $(n - 1) = 14$ dan $14 \\times 4 = 56$.',
              en: 'Apply $S_n = \\frac{n}{2}[2a + (n - 1)d]$ with $n = 15$, giving $(n - 1) = 14$ and $14 \\times 4 = 56$.'
            }
          },
          {
            badge: 'K1',
            bm: 'Hitung $S_5 = \\frac{5}{2}[2(7) + (5 - 1)(4)] = 2.5(14 + 16) = 2.5(30) = 75$.',
            en: 'Compute $S_5 = \\frac{5}{2}[2(7) + (5 - 1)(4)] = 2.5(14 + 16) = 2.5(30) = 75$.',
            why: {
              bm: 'Gantikan $n = 5$ ke dalam rumus yang sama untuk memperoleh hasil tambah lima sebutan pertama yang perlu dibuang.',
              en: 'Plug $n = 5$ into the same formula to find the sum of the first five terms to be removed.'
            }
          },
          {
            badge: 'N1',
            bm: 'Jumlah $= S_{15} - S_5 = 525 - 75 = 450$.',
            en: 'Sum $= S_{15} - S_5 = 525 - 75 = 450$.',
            why: {
              bm: 'Menolak $S_5$ daripada $S_{15}$ meninggalkan hasil tambah tepat bagi $T_6 + T_7 + \\dots + T_{15}$.',
              en: 'Subtracting $S_5$ from $S_{15}$ leaves the exact sum $T_6 + T_7 + \\dots + T_{15}$.'
            }
          }
        ]
      },
      {
        code: '5.3', marks: 3,
        topic: { bm: 'Bilangan Sebutan Minimum Sₙ > k', en: 'Minimum Number of Terms for Sₙ > k' },
        q: { bm: 'Bagi JA $3, 8, 13, \\dots$, cari nilai integer terkecil $n$ supaya $S_n > 400$. [3m]', en: 'For AP $3, 8, 13, \\dots$, find the smallest integer $n$ such that $S_n > 400$. [3m]' },
        mistakes: {
          bm: [
            'Meninggalkan $n$ dalam perpuluhan ($12.55$) atau membundar ke bawah ($12$) yang gagal melepasi $400$.',
            'Lupa mendarab $400$ dengan $2$ apabila menghapuskan pecahan $\\frac{n}{2}$ (menulis $5n^2 + n - 400 > 0$).'
          ],
          en: [
            'Leaving $n = 12.55$ as a decimal or rounding down to $12$, which fails to exceed $400$.',
            'Forgetting to multiply $400$ by $2$ when clearing $\\frac{n}{2}$ (writing $5n^2 + n - 400 > 0$).'
          ]
        },
        scheme: [
          {
            badge: 'K1',
            bm: 'Kenal pasti $a = 3,\\; d = 8 - 3 = 5$; tulis $S_n = \\frac{n}{2}[2(3) + (n - 1)(5)] > 400$.',
            en: 'Identify $a = 3,\\; d = 8 - 3 = 5$; set up $S_n = \\frac{n}{2}[2(3) + (n - 1)(5)] > 400$.',
            why: {
              bm: 'Kira beza sepunya $d = T_2 - T_1 = 5$ dahulu, kemudian masukkan ke dalam ketaksamaan hasil tambah JA.',
              en: 'Compute $d = T_2 - T_1 = 5$ first, then substitute into the AP sum inequality.'
            }
          },
          {
            badge: 'K1',
            bm: 'Darab kedua-dua belah dengan $2$ dan kembangkan: $n(6 + 5n - 5) > 800 \\implies n(5n + 1) > 800 \\implies 5n^2 + n - 800 > 0$.',
            en: 'Multiply both sides by $2$ and simplify: $n(6 + 5n - 5) > 800 \\implies n(5n + 1) > 800 \\implies 5n^2 + n - 800 > 0$.',
            why: {
              bm: 'Mendarab dengan $+2$ menghapuskan pecahan $\\frac{n}{2}$ tanpa menukar arah $>$, menghasilkan kuadratik dalam $n$.',
              en: 'Multiplying by $+2$ clears the $\\frac{n}{2}$ fraction without flipping $>$, yielding a standard quadratic in $n$.'
            }
          },
          {
            badge: 'K1',
            bm: 'Ambil punca positif rumus kuadratik ($n > 0$): $n > \\frac{-1 + \\sqrt{1^2 - 4(5)(-800)}}{2(5)} = \\frac{-1 + \\sqrt{16\\,001}}{10} \\approx 12.55$.',
            en: 'Take the positive quadratic root ($n > 0$): $n > \\frac{-1 + \\sqrt{1^2 - 4(5)(-800)}}{2(5)} = \\frac{-1 + \\sqrt{16\\,001}}{10} \\approx 12.55$.',
            why: {
              bm: 'Bilangan sebutan $n$ mestilah positif, maka kita hanya ambil punca positif $\\frac{-1 + \\sqrt{16\\,001}}{10} \\approx 12.55$ sebagai sempadan bawah.',
              en: 'Number of terms $n$ must be positive, so we use the positive root $\\frac{-1 + \\sqrt{16\\,001}}{10} \\approx 12.55$ as the lower bound.'
            }
          },
          {
            badge: 'N1',
            bm: 'Integer terkecil yang melebihi $12.55$: $n_{\\min} = 13$.',
            en: 'Smallest integer greater than $12.55$: $n_{\\min} = 13$.',
            why: {
              bm: 'Semakan: $S_{12} = 6(6 + 55) = 366 < 400$, manakala $S_{13} = 6.5(6 + 60) = 429 > 400$, jadi $13$ ialah integer terkecil.',
              en: 'Check: $S_{12} = 366 < 400$, while $S_{13} = 429 > 400$, confirming $13$ is the smallest valid integer.'
            }
          }
        ]
      },
      {
        code: '5.4', marks: 3,
        topic: { bm: 'Sebutan ke-n Janjang Geometri (JG)', en: 'n-th Term of Geometric Progression (GP)' },
        q: { bm: 'Bagi suatu JG, $T_2 = \\frac{3}{2}$ dan $T_5 = \\frac{3}{16}$. Cari $a$ dan $r$. [3m]', en: 'In a GP, $T_2 = \\frac{3}{2}$ and $T_5 = \\frac{3}{16}$. Find $a$ and $r$. [3m]' },
        mistakes: {
          bm: [
            'Menolak kedua-dua persamaan seperti JA bukannya **membahagi** $\\frac{ar^4}{ar} = r^3$.',
            'Kesilapan pembahagian pecahan: mengira $\\frac{3}{16} \\div \\frac{3}{2} = \\frac{9}{32}$ kerana lupa menterbalikkan $\\frac{3}{2}$ kepada $\\frac{2}{3}$.'
          ],
          en: [
            'Subtracting equations like an AP instead of **dividing** $\\frac{ar^4}{ar} = r^3$.',
            'Fraction division error: computing $\\frac{3}{16} \\div \\frac{3}{2} = \\frac{9}{32}$ by forgetting to invert $\\frac{3}{2}$ to $\\frac{2}{3}$.'
          ]
        },
        scheme: [
          {
            badge: 'K1',
            bm: 'Guna rumus $T_n = ar^{n-1}$: $T_2 = ar = \\frac{3}{2}$ --- (1) dan $T_5 = ar^4 = \\frac{3}{16}$ --- (2).',
            en: 'Apply $T_n = ar^{n-1}$: $T_2 = ar = \\frac{3}{2}$ --- (1) and $T_5 = ar^4 = \\frac{3}{16}$ --- (2).',
            why: {
              bm: 'Dalam JG, kuasa bagi $r$ ialah $(n - 1)$, jadi $T_2 = ar^1$ dan $T_5 = ar^4$.',
              en: 'In a GP, the exponent of $r$ is $(n - 1)$, giving $T_2 = ar^1$ and $T_5 = ar^4$.'
            }
          },
          {
            badge: 'K1',
            bm: 'Bahagi Pers.(2) dengan Pers.(1): $\\frac{ar^4}{ar} = \\frac{3/16}{3/2} = \\frac{3}{16} \\times \\frac{2}{3} = \\frac{1}{8}$.',
            en: 'Divide Eq(2) by Eq(1): $\\frac{ar^4}{ar} = \\frac{3/16}{3/2} = \\frac{3}{16} \\times \\frac{2}{3} = \\frac{1}{8}$.',
            why: {
              bm: 'Membahagi dua sebutan JG memansuhkan faktor sepunya $a$, dan membahagi dengan pecahan $\\frac{3}{2}$ ialah mendarab dengan $\\frac{2}{3}$.',
              en: 'Dividing the two GP terms cancels $a$, and dividing by $\\frac{3}{2}$ means multiplying by its reciprocal $\\frac{2}{3}$.'
            }
          },
          {
            badge: 'K1',
            bm: 'Ambil punca kuasa tiga: $r^3 = \\frac{1}{8} \\implies r = \\sqrt[3]{\\frac{1}{8}} = \\frac{1}{2}$.',
            en: 'Take cube root: $r^3 = \\frac{1}{8} \\implies r = \\sqrt[3]{\\frac{1}{8}} = \\frac{1}{2}$.',
            why: {
              bm: 'Oleh sebab $\\left(\\frac{1}{2}\\right)^3 = \\frac{1}{8}$, punca kuasa tiga memberi satu nilai nyata unik $r = \\frac{1}{2}$.',
              en: 'Since $\\left(\\frac{1}{2}\\right)^3 = \\frac{1}{8}$, taking the cube root gives the unique real ratio $r = \\frac{1}{2}$.'
            }
          },
          {
            badge: 'N1',
            bm: 'Ganti $r = \\frac{1}{2}$ ke dalam (1): $a\\left(\\frac{1}{2}\\right) = \\frac{3}{2} \\implies a = 3$, maka $a = 3,\\; r = \\frac{1}{2}$.',
            en: 'Substitute $r = \\frac{1}{2}$ into (1): $a\\left(\\frac{1}{2}\\right) = \\frac{3}{2} \\implies a = 3$, so $a = 3,\\; r = \\frac{1}{2}$.',
            why: {
              bm: 'Darab kedua-dua belah dengan $2$ mengasingkan $a = 3$; semakan $T_5 = 3\\left(\\frac{1}{2}\\right)^4 = \\frac{3}{16}$ tepat.',
              en: 'Multiplying both sides by $2$ isolates $a = 3$; checking $T_5 = 3\\left(\\frac{1}{2}\\right)^4 = \\frac{3}{16}$ confirms accuracy.'
            }
          }
        ]
      },
      {
        code: '5.5', marks: 3,
        topic: { bm: 'Hasil Tambah JG dengan Nisbah Negatif', en: 'GP Sum with Negative Common Ratio' },
        q: { bm: 'Cari hasil tambah $8$ sebutan pertama bagi JG $4, -8, 16, -32, \\dots$. [3m]', en: 'Find the sum of the first $8$ terms of the GP $4, -8, 16, -32, \\dots$. [3m]' },
        mistakes: {
          bm: [
            'Lupa kurungan pada kalkulator: menaip $-2^8 = -256$ bukannya $(-2)^8 = +256$!',
            'Kesilapan tanda pada penyebut: mengira $1 - (-2) = -1$ bukannya $1 + 2 = 3$.'
          ],
          en: [
            'Omitting brackets around $-2$: evaluating $-2^8 = -256$ instead of $(-2)^8 = +256$!',
            'Denominator sign error: computing $1 - (-2) = -1$ instead of $1 + 2 = 3$.'
          ]
        },
        scheme: [
          {
            badge: 'K1',
            bm: 'Kenal pasti $a = 4$ dan nisbah sepunya $r = \\frac{T_2}{T_1} = \\frac{-8}{4} = -2$.',
            en: 'Identify $a = 4$ and common ratio $r = \\frac{T_2}{T_1} = \\frac{-8}{4} = -2$.',
            why: {
              bm: 'Sentiasa bahagi sebutan kedua dengan sebutan pertama sambil mengekalkan tanda negatif (tanda berselang-seli bermaksud $r < 0$).',
              en: 'Always divide term 2 by term 1 keeping its sign (alternating signs in the sequence confirm $r < 0$).'
            }
          },
          {
            badge: 'K1',
            bm: 'Ganti ke dalam $S_n = \\frac{a(1 - r^n)}{1 - r}$ dengan $n = 8$: $S_8 = \\frac{4[1 - (-2)^8]}{1 - (-2)}$.',
            en: 'Substitute into $S_n = \\frac{a(1 - r^n)}{1 - r}$ with $n = 8$: $S_8 = \\frac{4[1 - (-2)^8]}{1 - (-2)}$.',
            why: {
              bm: 'Oleh sebab $r = -2 < 1$, gunakan bentuk $\\frac{a(1 - r^n)}{1 - r}$ supaya penyebut positif, dan letakkan kurungan di sekeliling $(-2)^8$.',
              en: 'Since $r = -2 < 1$, using $\\frac{a(1 - r^n)}{1 - r}$ keeps the denominator positive, with brackets around $(-2)^8$.'
            }
          },
          {
            badge: 'K1',
            bm: 'Nilaikan $(-2)^8 = +256$ dan penyebut $1 + 2 = 3$: $S_8 = \\frac{4(1 - 256)}{3} = \\frac{4(-255)}{3}$.',
            en: 'Evaluate $(-2)^8 = +256$ and denominator $1 + 2 = 3$: $S_8 = \\frac{4(1 - 256)}{3} = \\frac{4(-255)}{3}$.',
            why: {
              bm: 'Nombor negatif dikuasakan genap ($8$) menjadi positif ($+256$), jadi di dalam kurungan ialah $1 - 256 = -255$; manakala $1 - (-2) = 3$.',
              en: 'A negative base raised to an even power ($8$) becomes positive ($+256$), giving $1 - 256 = -255$ inside, while $1 - (-2) = 3$.'
            }
          },
          {
            badge: 'N1',
            bm: '$S_8 = \\frac{-1020}{3} = -340$.',
            en: '$S_8 = \\frac{-1020}{3} = -340$.',
            why: {
              bm: 'Bahagi $-255 \\div 3 = -85$ (atau $-1020 \\div 3$), lalu darab $4 \\times (-85) = -340$.',
              en: 'Divide $-255 \\div 3 = -85$ (or $-1020 \\div 3$) to get the exact integer sum $-340$.'
            }
          }
        ]
      },
      {
        code: '5.6', marks: 3,
        topic: { bm: 'Hasil Tambah Ketakterhinggaan S∞', en: 'Sum to Infinity S∞' },
        q: { bm: 'Bagi JG $18, 6, 2, \\dots$, nyatakan syarat kewujudan $S_\\infty$ dan hitung nilainya. [3m]', en: 'For GP $18, 6, 2, \\dots$, state the convergence condition for $S_\\infty$ and find its value. [3m]' },
        mistakes: {
          bm: [
            'Menulis syarat sebagai $r < 1$ sahaja bukannya **$|r| < 1$** (iaitu $-1 < r < 1$).',
            'Mendarab $18 \\times \\frac{2}{3} = 12$ bukannya membahagi $18 \\div \\frac{2}{3} = 18 \\times \\frac{3}{2} = 27$.'
          ],
          en: [
            'Writing $r < 1$ instead of **$|r| < 1$** ($-1 < r < 1$).',
            'Multiplying $18 \\times \\frac{2}{3} = 12$ instead of dividing $18 \\div \\frac{2}{3} = 18 \\times \\frac{3}{2} = 27$.'
          ]
        },
        scheme: [
          {
            badge: 'N1',
            bm: 'Cari $r = \\frac{6}{18} = \\frac{1}{3}$; syarat penumpuan ialah $|r| < 1$ (dipenuhi kerana $|\\frac{1}{3}| < 1$, maka $S_\\infty$ wujud).',
            en: 'Find $r = \\frac{6}{18} = \\frac{1}{3}$; convergence condition is $|r| < 1$ (satisfied since $|\\frac{1}{3}| < 1$, so $S_\\infty$ exists).',
            why: {
              bm: 'Hanya apabila $-1 < r < 1$ ($|r| < 1$), sebutan $r^n \\to 0$ apabila $n \\to \\infty$, membolehkan jumlah tak terhingga menumpu ke satu nilai tetap.',
              en: 'Only when $-1 < r < 1$ ($|r| < 1$) does $r^n \\to 0$ as $n \\to \\infty$, allowing the infinite sum to converge to a finite number.'
            }
          },
          {
            badge: 'K1',
            bm: 'Ganti $a = 18$ dan $r = \\frac{1}{3}$ ke dalam $S_\\infty = \\frac{a}{1 - r}$: $S_\\infty = \\frac{18}{1 - \\frac{1}{3}} = \\frac{18}{2/3}$.',
            en: 'Substitute $a = 18$ and $r = \\frac{1}{3}$ into $S_\\infty = \\frac{a}{1 - r}$: $S_\\infty = \\frac{18}{1 - \\frac{1}{3}} = \\frac{18}{2/3}$.',
            why: {
              bm: 'Hitung penyebut $1 - \\frac{1}{3} = \\frac{2}{3}$ dahulu sebelum membahagi pengangka $18$.',
              en: 'Evaluate the denominator $1 - \\frac{1}{3} = \\frac{2}{3}$ first before dividing $18$ by it.'
            }
          },
          {
            badge: 'N1',
            bm: 'Terbalikkan pecahan penyebut dan darab: $S_\\infty = 18 \\times \\frac{3}{2} = 27$.',
            en: 'Invert the denominator fraction and multiply: $S_\\infty = 18 \\times \\frac{3}{2} = 27$.',
            why: {
              bm: 'Membahagi dengan $\\frac{2}{3}$ ialah mendarab dengan salingannya $\\frac{3}{2}$; kerana $S_\\infty$ lebih besar daripada $18 + 6 + 2 = 26$, nilai $27$ sangat munasabah.',
              en: 'Dividing by $\\frac{2}{3}$ means multiplying by $\\frac{3}{2}$; since $18 + 6 + 2 = 26$, converging to $27$ makes complete sense.'
            }
          }
        ]
      },
      {
        code: '5.7', marks: 3,
        topic: { bm: 'Perpuluhan Berulang kepada Pecahan', en: 'Recurring Decimal to Simplest Fraction' },
        q: { bm: 'Tukarkan $0.272727\\dots$ kepada pecahan termudah menggunakan konsep $S_\\infty$. [3m]', en: 'Express $0.272727\\dots$ as a fraction in lowest terms using $S_\\infty$. [3m]' },
        mistakes: {
          bm: [
            'Mengambil $r = 0.1$ sedangkan ulangan **dua digit** ($0.27 + 0.0027 + \\dots$) mempunyai $r = 0.01$!',
            'Membiarkan jawapan sebagai $\\frac{27}{99}$ tanpa mempermudah kepada pecahan termudah $\\frac{3}{11}$.'
          ],
          en: [
            'Using $r = 0.1$ instead of $r = 0.01$ for a 2-digit repeating block!',
            'Leaving $\\frac{27}{99}$ unsimplified instead of reducing it to lowest terms $\\frac{3}{11}$.'
          ]
        },
        scheme: [
          {
            badge: 'K1',
            bm: 'Pecahkan mengikut blok digit berulang: $0.272727\\dots = 0.27 + 0.0027 + 0.000027 + \\dots$.',
            en: 'Split into repeating digit blocks: $0.272727\\dots = 0.27 + 0.0027 + 0.000027 + \\dots$.',
            why: {
              bm: 'Mengasingkan setiap pasangan "27" mengikut nilai tempatnya mendedahkan satu siri geometri tak terhingga.',
              en: 'Separating each "27" block by place value turns the recurring decimal into an infinite geometric series.'
            }
          },
          {
            badge: 'K1',
            bm: 'Kenal pasti JG: $a = 0.27$ dan $r = \\frac{0.0027}{0.27} = 0.01$ (kerana $|0.01| < 1$).',
            en: 'Identify GP: $a = 0.27$ and $r = \\frac{0.0027}{0.27} = 0.01$ (since $|0.01| < 1$).',
            why: {
              bm: 'Setiap blok seterusnya bergerak 2 tempat perpuluhan ke kanan, bermaksud kita mendarab dengan $\\frac{1}{100} = 0.01$.',
              en: 'Each block shifts 2 decimal places to the right, meaning each term is multiplied by $\\frac{1}{100} = 0.01$.'
            }
          },
          {
            badge: 'K1',
            bm: 'Guna $S_\\infty = \\frac{a}{1 - r}$: $S_\\infty = \\frac{0.27}{1 - 0.01} = \\frac{0.27}{0.99} = \\frac{27}{99}$.',
            en: 'Apply $S_\\infty = \\frac{a}{1 - r}$: $S_\\infty = \\frac{0.27}{1 - 0.01} = \\frac{0.27}{0.99} = \\frac{27}{99}$.',
            why: {
              bm: 'Darab atas dan bawah $\\frac{0.27}{0.99}$ dengan $100$ menukar perpuluhan kepada pecahan nombor bulat $\\frac{27}{99}$.',
              en: 'Multiplying top and bottom of $\\frac{0.27}{0.99}$ by $100$ converts the decimals into whole-number fraction $\\frac{27}{99}$.'
            }
          },
          {
            badge: 'N1',
            bm: 'Permudahkan dengan membahagi $9$: $\\frac{27 \\div 9}{99 \\div 9} = \\frac{3}{11}$.',
            en: 'Simplify by dividing by $9$: $\\frac{27 \\div 9}{99 \\div 9} = \\frac{3}{11}$.',
            why: {
              bm: 'Soalan meminta "pecahan termudah", jadi bahagi pengangka dan penyebut dengan faktor sepunya terbesar $9$.',
              en: 'The question asks for "lowest terms", so divide numerator and denominator by their greatest common factor $9$.'
            }
          }
        ]
      },
      {
        code: '5.8', marks: 3,
        topic: { bm: 'Tiga Sebutan Berturutan JG', en: 'Three Consecutive Terms of a GP' },
        q: { bm: 'Diberi $x - 1,\\; x + 2,\\; 3x$ ialah tiga sebutan berturutan JG bernilai positif. Cari $x$. [3m]', en: 'Given $x - 1,\\; x + 2,\\; 3x$ are three positive consecutive terms of a GP. Find $x$. [3m]' },
        mistakes: {
          bm: [
            'Mengguna beza sepunya JA ($T_2 - T_1 = T_3 - T_2$) bukannya nisbah sepunya JG ($\\frac{T_2}{T_1} = \\frac{T_3}{T_2}$).',
            'Gagal menolak $x = -0.5$ yang menghasilkan sebutan bernilai negatif ($x - 1 = -1.5 < 0$).'
          ],
          en: [
            'Using AP difference ($T_2 - T_1 = T_3 - T_2$) instead of GP ratio ($\\frac{T_2}{T_1} = \\frac{T_3}{T_2}$).',
            'Failing to reject $x = -0.5$, which produces negative terms ($x - 1 = -1.5 < 0$).'
          ]
        },
        scheme: [
          {
            badge: 'K1',
            bm: 'Guna nisbah sepunya JG yang sama: $\\frac{T_2}{T_1} = \\frac{T_3}{T_2} \\implies \\frac{x + 2}{x - 1} = \\frac{3x}{x + 2}$.',
            en: 'Equate the common ratio of the GP: $\\frac{T_2}{T_1} = \\frac{T_3}{T_2} \\implies \\frac{x + 2}{x - 1} = \\frac{3x}{x + 2}$.',
            why: {
              bm: 'Dalam mana-mana JG, hasil bahagi sebutan dengan sebutan sebelumnya sentiasa malar dan sama dengan $r$.',
              en: 'In any GP, the ratio of each term to the previous term is constant and equal to $r$.'
            }
          },
          {
            badge: 'K1',
            bm: 'Darab silang dan kembangkan: $(x + 2)^2 = 3x(x - 1) \\implies x^2 + 4x + 4 = 3x^2 - 3x$.',
            en: 'Cross-multiply and expand: $(x + 2)^2 = 3x(x - 1) \\implies x^2 + 4x + 4 = 3x^2 - 3x$.',
            why: {
              bm: 'Mendarab silang menghapuskan pecahan, dan ingat $(x + 2)^2 = x^2 + 4x + 4$ mempunyai sebutan tengah $+4x$.',
              en: 'Cross-multiplying clears denominators, and remember $(x + 2)^2 = x^2 + 4x + 4$ includes the middle term $+4x$.'
            }
          },
          {
            badge: 'K1',
            bm: 'Susun dan faktorkan: $2x^2 - 7x - 4 = 0 \\implies (2x + 1)(x - 4) = 0 \\implies x = -0.5$ atau $x = 4$.',
            en: 'Rearrange and factorise: $2x^2 - 7x - 4 = 0 \\implies (2x + 1)(x - 4) = 0 \\implies x = -0.5$ or $x = 4$.',
            why: {
              bm: 'Pindahkan semua sebutan ke sebelah kanan supaya pekali $x^2$ positif ($3x^2 - x^2 = 2x^2$) sebelum memfaktorkan.',
              en: 'Move all terms to the RHS so the $x^2$ coefficient is positive ($3x^2 - x^2 = 2x^2$) before factorising.'
            }
          },
          {
            badge: 'N1',
            bm: 'Tolak $x = -0.5$ (kerana $x - 1 = -1.5 < 0$); terima $x = 4$ (memberi sebutan positif $3, 6, 12$).',
            en: 'Reject $x = -0.5$ (gives $x - 1 = -1.5 < 0$); accept $x = 4$ (gives positive terms $3, 6, 12$).',
            why: {
              bm: 'Soalan mensyaratkan semua sebutan bernilai positif, jadi setiap calon $x$ mesti disemak semula pada ungkapan $x - 1,\\; x + 2,\\; 3x$.',
              en: 'The problem specifies positive terms, so each candidate $x$ must be tested back in $x - 1,\\; x + 2,\\; 3x$.'
            }
          }
        ]
      },
      {
        code: '5.9', marks: 3,
        topic: { bm: 'Mencari Tₙ daripada Ungkapan Sₙ', en: 'Finding Tₙ from Cumulative Sum Sₙ' },
        q: { bm: 'Diberi $S_n = 2n^2 + 3n$. Cari sebutan pertama $T_1$ dan ungkapan $T_n$. [3m]', en: 'Given $S_n = 2n^2 + 3n$. Find $T_1$ and an expression for $T_n$. [3m]' },
        mistakes: {
          bm: [
            'Membahagi $T_n = \\frac{S_n}{n}$! Wajib guna hubungan $T_n = S_n - S_{n-1}$.',
            'Kesilapan tanda apabila menolak $S_{n-1} = 2n^2 - n - 1$, khususnya $-(-n - 1)$ menjadi $-n - 1$ bukannya $+n + 1$.'
          ],
          en: [
            'Dividing $T_n = \\frac{S_n}{n}$! You MUST use $T_n = S_n - S_{n-1}$.',
            'Sign error subtracting $S_{n-1} = 2n^2 - n - 1$, especially writing $-(-n - 1)$ as $-n - 1$ instead of $+n + 1$.'
          ]
        },
        scheme: [
          {
            badge: 'N1',
            bm: 'Hitung $T_1 = S_1 = 2(1)^2 + 3(1) = 2 + 3 = 5$.',
            en: 'Compute $T_1 = S_1 = 2(1)^2 + 3(1) = 2 + 3 = 5$.',
            why: {
              bm: 'Hasil tambah 1 sebutan pertama ($S_1$) semestinya sama dengan sebutan pertama itu sendiri ($T_1$).',
              en: 'The sum of the first 1 term ($S_1$) is always identical to the first term itself ($T_1$).'
            }
          },
          {
            badge: 'K1',
            bm: 'Cari $S_{n-1}$ dengan mengganti $n \\to (n - 1)$: $S_{n-1} = 2(n - 1)^2 + 3(n - 1) = 2(n^2 - 2n + 1) + 3n - 3 = 2n^2 - n - 1$.',
            en: 'Find $S_{n-1}$ by replacing $n \\to (n - 1)$: $S_{n-1} = 2(n - 1)^2 + 3(n - 1) = 2(n^2 - 2n + 1) + 3n - 3 = 2n^2 - n - 1$.',
            why: {
              bm: 'Mengembang dan mempermudahkan $S_{n-1}$ terlebih dahulu mengelakkan kesilapan kurungan bertingkat semasa menolak daripada $S_n$.',
              en: 'Expanding and simplifying $S_{n-1}$ first prevents nested-bracket mistakes when subtracting from $S_n$.'
            }
          },
          {
            badge: 'K1',
            bm: 'Tolak $T_n = S_n - S_{n-1} = (2n^2 + 3n) - (2n^2 - n - 1) = 2n^2 + 3n - 2n^2 + n + 1$.',
            en: 'Subtract $T_n = S_n - S_{n-1} = (2n^2 + 3n) - (2n^2 - n - 1) = 2n^2 + 3n - 2n^2 + n + 1$.',
            why: {
              bm: 'Menolak hasil tambah $(n - 1)$ sebutan pertama daripada hasil tambah $n$ sebutan hanya meninggalkan sebutan terakhir $T_n$; agihkan tanda negatif ke seluruh $S_{n-1}$.',
              en: 'Subtracting the sum of the first $(n - 1)$ terms from the sum of $n$ terms leaves only the $n$-th term $T_n$; distribute the minus sign to all terms of $S_{n-1}$.'
            }
          },
          {
            badge: 'N1',
            bm: 'Permudahkan: $T_n = 4n + 1$ (semak $T_1 = 4(1) + 1 = 5$).',
            en: 'Simplify: $T_n = 4n + 1$ (check $T_1 = 4(1) + 1 = 5$).',
            why: {
              bm: 'Menggantikan $n = 1$ ke dalam $4n + 1$ memberi $5 = T_1$, membuktikan rumus $T_n$ sah untuk semua $n \\ge 1$.',
              en: 'Checking $n = 1$ in $4n + 1$ gives $5 = T_1$, proving the formula holds for all $n \\ge 1$.'
            }
          }
        ]
      },
      {
        code: '5.10', marks: 4,
        topic: { bm: 'Simpanan Tahunan Kompaun JG', en: 'Annual Savings Compound GP' },
        q: { bm: 'Siti menyimpan RM1,000 pada tahun pertama. Setiap tahun berikutnya simpanannya bertambah 10% daripada tahun sebelumnya. Cari jumlah simpanan selepas 6 tahun. [4m]', en: 'Siti saves RM1,000 in year 1, increasing her annual deposit by 10% each year. Find total savings after 6 years. [4m]' },
        mistakes: {
          bm: [
            'Mengambil $r = 0.10$ bukannya **$r = 1 + 0.10 = 1.10$**!',
            'Mengira $T_6 = 1000(1.10)^5$ (simpanan tahun ke-6 sahaja) bukannya jumlah kumulatif $S_6$.'
          ],
          en: [
            'Using $r = 0.10$ instead of **$r = 1 + 0.10 = 1.10$**!',
            'Computing $T_6 = 1000(1.10)^5$ (year 6 deposit alone) instead of the cumulative total $S_6$.'
          ]
        },
        scheme: [
          {
            badge: 'K1',
            bm: 'Kenal pasti JG: $a = 1000$, $T_2 = 1000(1.10) = 1100$, maka nisbah sepunya $r = 1 + 0.10 = 1.10$.',
            en: 'Identify GP: $a = 1000$, $T_2 = 1000(1.10) = 1100$, so common ratio $r = 1 + 0.10 = 1.10$.',
            why: {
              bm: 'Bertambah 10% bermakna simpanan tahun baharu ialah $100\\% + 10\\% = 110\\% = 1.10$ kali tahun sebelumnya (bukan $0.10$).',
              en: 'Increasing by 10% means each new year is $100\\% + 10\\% = 110\\% = 1.10$ times the previous year (not $0.10$).'
            }
          },
          {
            badge: 'K1',
            bm: 'Jumlah simpanan selepas $n = 6$ tahun ialah hasil tambah $S_6 = \\frac{1000(1.10^6 - 1)}{1.10 - 1}$.',
            en: 'Total savings after $n = 6$ years is the cumulative sum $S_6 = \\frac{1000(1.10^6 - 1)}{1.10 - 1}$.',
            why: {
              bm: 'Soalan menanya "jumlah simpanan" sepanjang 6 tahun (bukan simpanan pada tahun ke-6 sahaja), dan $r = 1.10 > 1$ sesuai dengan $\\frac{a(r^n - 1)}{r - 1}$.',
              en: 'The question asks for "total savings" across all 6 years (not just year 6), and $r = 1.10 > 1$ fits $\\frac{a(r^n - 1)}{r - 1}$.'
            }
          },
          {
            badge: 'K1',
            bm: 'Nilaikan $1.10^6 = 1.771561$: $S_6 = \\frac{1000(1.771561 - 1)}{0.10} = \\frac{1000(0.771561)}{0.10}$.',
            en: 'Evaluate $1.10^6 = 1.771561$: $S_6 = \\frac{1000(1.771561 - 1)}{0.10} = \\frac{1000(0.771561)}{0.10}$.',
            why: {
              bm: 'Kekalkan semua digit $1.10^6 = 1.771561$ sebelum mendarab dengan $1000$ dan membahagi dengan $0.10$ supaya sen tepat.',
              en: 'Keep full precision for $1.10^6 = 1.771561$ before multiplying by $1000$ and dividing by $0.10$ so the cents stay accurate.'
            }
          },
          {
            badge: 'N1',
            bm: '$S_6 = \\text{RM }7\\,715.61$ (2 t.p.).',
            en: '$S_6 = \\text{RM }7\\,715.61$ (2 d.p.).',
            why: {
              bm: 'Membahagi $771.561$ dengan $0.10$ menghasilkan $7715.61$, dinyatakan dalam RM kepada 2 tempat perpuluhan.',
              en: 'Dividing $771.561$ by $0.10$ gives $7715.61$, expressed in RM to 2 decimal places.'
            }
          }
        ]
      }
    ]
  });
})(window.AddMathApp);
