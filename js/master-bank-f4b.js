/**
 * AddMath Mudah — Bank Soalan Master SPM (Fasa 2: Tingkatan 4 Bab 6–10 • 50 Soalan Penuh)
 * Setiap soalan lengkap dengan: Pernyataan Format SPM, 3 Kesilapan Lazim Murid & Skim Pemarkahan Terperinci (K1 / N1 + Kenapa/Why) dalam BM & EN.
 */
window.AddMathApp = window.AddMathApp || {};
window.AddMathApp.masterBank = window.AddMathApp.masterBank || {};

(function (App) {
  'use strict';

  Object.assign(App.masterBank, {
    // =========================================================================
    // TINGKATAN 4 BAB 6: HUKUM LINEAR (10 SOALAN)
    // =========================================================================
    'f4-c6': [
      {
        code: '6.1', marks: 3,
        topic: { bm: 'Penukaran Hubungan Eksponen kepada Bentuk Linear', en: 'Linearizing Exponential Relations' },
        q: {
          bm: 'Tukarkan persamaan tak linear $y = ab^x$, dengan keadaan $a$ dan $b$ ialah pemalar, kepada bentuk linear $Y = mX + c$. Nyatakan $Y$, $X$, kecerunan $m$, dan pintasan-$Y$ iaitu $c$. [3m]',
          en: 'Convert the non-linear equation $y = ab^x$, where $a$ and $b$ are constants, into the linear form $Y = mX + c$. State $Y$, $X$, gradient $m$, and $Y$-intercept $c$. [3m]'
        },
        mistakes: {
          bm: [
            'Membawa eksponen $x$ ke hadapan keseluruhan hasil darab: menulis $\\log_{10}(ab^x) = x\\log_{10}(ab)$ bukannya memecahkan $\\log_{10} a + \\log_{10}(b^x)$ dahulu.',
            'Terlupa bahawa $\\log_{10} a$ ialah pemalar (pintasan-$Y$, $c$) dan menganggap $\\log_{10} b$ sebagai pintasan-$Y$ kerana kedudukannya di belakang.',
            'Menulis paksi-$Y$ sebagai $y$ sahaja dan bukannya $\\log_{10} y$.'
          ],
          en: [
            'Pulling $x$ in front of the whole product: writing $\\log_{10}(ab^x) = x\\log_{10}(ab)$ instead of splitting $\\log_{10} a + \\log_{10}(b^x)$ first.',
            'Treating $\\log_{10} b$ as the $Y$-intercept instead of identifying $\\log_{10} a$ as the constant term $c$.',
            'Writing the vertical axis $Y$ as $y$ instead of $\\log_{10} y$.'
          ]
        },
        scheme: [
          {
            badge: 'K1',
            bm: 'Ambil $\\log_{10}$ pada kedua-dua belah: $\\log_{10} y = \\log_{10}(a \\cdot b^x)$.',
            en: 'Take $\\log_{10}$ on both sides: $\\log_{10} y = \\log_{10}(a \\cdot b^x)$.',
            why: {
              bm: 'Pemboleh ubah $x$ berada di kuasa (eksponen), maka logaritma diperlukan untuk menurunkannya.',
              en: 'The variable $x$ is in the exponent, so taking logarithms brings it down to a linear level.'
            }
          },
          {
            badge: 'K1',
            bm: 'Gunakan hukum hasil darab $\\log_{10}(MN) = \\log_{10} M + \\log_{10} N$: $\\log_{10} y = \\log_{10} a + \\log_{10}(b^x)$.',
            en: 'Apply the product law $\\log_{10}(MN) = \\log_{10} M + \\log_{10} N$: $\\log_{10} y = \\log_{10} a + \\log_{10}(b^x)$.',
            why: {
              bm: 'Pecahkan hasil darab dahulu sebelum menurunkan kuasa supaya $x$ hanya didarab dengan $\\log_{10} b$.',
              en: 'Split the product before using the power law so $x$ only multiplies $\\log_{10} b$.'
            }
          },
          {
            badge: 'K1',
            bm: 'Gunakan hukum kuasa $\\log_{10}(b^x) = x\\log_{10} b$ dan susun mengikut $Y = mX + c$: $\\log_{10} y = (\\log_{10} b)x + \\log_{10} a$.',
            en: 'Apply the power law $\\log_{10}(b^x) = x\\log_{10} b$ and rearrange into $Y = mX + c$: $\\log_{10} y = (\\log_{10} b)x + \\log_{10} a$.',
            why: {
              bm: 'Susunan ini meletakkan sebutan berpemboleh ubah $x$ di depan dan pemalar di belakang.',
              en: 'This puts the $x$-term first and the constant term last to match $Y = mX + c$.'
            }
          },
          {
            badge: 'N1',
            bm: 'Bandingkan dengan $Y = mX + c$: $Y = \\log_{10} y$, $\\;X = x$, $\\;m = \\log_{10} b$, dan $c = \\log_{10} a$.',
            en: 'Compare with $Y = mX + c$: $Y = \\log_{10} y$, $\\;X = x$, $\\;m = \\log_{10} b$, and $c = \\log_{10} a$.',
            why: {
              bm: 'Pekali di hadapan $X$ ialah kecerunan $m$, manakala pemalar bebas ialah pintasan-$Y$ ($c$).',
              en: 'The coefficient multiplying $X$ is the gradient $m$, and the standalone constant is the $Y$-intercept $c$.'
            }
          }
        ]
      },
      {
        code: '6.2', marks: 3,
        topic: { bm: 'Penukaran Persamaan Pecahan kepada Bentuk Linear', en: 'Linearizing Fractional Equations' },
        q: {
          bm: 'Tunjukkan bagaimana persamaan $y = \\frac{p}{x} + qx$ boleh menghasilkan garis lurus apabila $xy$ diplotkan melawan $x^2$, dan nyatakan kecerunan serta pintasan-$Y$ (paksi menegak). [3m]',
          en: 'Show how $y = \\frac{p}{x} + qx$ yields a straight line when $xy$ is plotted against $x^2$, and state its gradient and vertical intercept. [3m]'
        },
        mistakes: {
          bm: [
            'Mendarab hanya satu sebutan di sebelah kanan dengan $x$ lalu menulis $xy = p + qx$ bukannya $xy = p + qx^2$.',
            'Terkeliru antara $m$ dan $c$ kerana tidak menyusun semula $xy = p + qx^2$ kepada $xy = q(x^2) + p$.',
            'Membahagi keseluruhan persamaan dengan $x$ dan mendapat $\\frac{y}{x} = \\frac{p}{x^2} + q$, yang tidak sepadan dengan paksi soalan ($xy$ melawan $x^2$).'
          ],
          en: [
            'Multiplying only one RHS term by $x$ and writing $xy = p + qx$ instead of $xy = p + qx^2$.',
            'Swapping $m$ and $c$ by failing to reorder $xy = p + qx^2$ into $xy = q(x^2) + p$.',
            'Dividing by $x$ to get $\\frac{y}{x} = \\frac{p}{x^2} + q$, which does not match the given axes ($xy$ against $x^2$).'
          ]
        },
        scheme: [
          {
            badge: 'K1',
            bm: 'Darab setiap sebutan di kedua-dua belah dengan $x$: $x(y) = x\\left(\\frac{p}{x}\\right) + x(qx) \\implies xy = p + qx^2$.',
            en: 'Multiply every term on both sides by $x$: $x(y) = x\\left(\\frac{p}{x}\\right) + x(qx) \\implies xy = p + qx^2$.',
            why: {
              bm: 'Mendarab semua sebutan dengan $x$ menghapuskan pecahan $\\frac{p}{x}$ dan menghasilkan $Y = xy$ di sebelah kiri.',
              en: 'Multiplying every term by $x$ clears the denominator $\\frac{p}{x}$ and forms $Y = xy$ on the LHS.'
            }
          },
          {
            badge: 'K1',
            bm: 'Susun semula mengikut bentuk $Y = mX + c$: $(xy) = q(x^2) + p$.',
            en: 'Rearrange into the form $Y = mX + c$: $(xy) = q(x^2) + p$.',
            why: {
              bm: 'Paksi melintang ialah $X = x^2$, jadi sebutan $qx^2$ mesti ditulis dahulu sebelum pemalar $p$.',
              en: 'The horizontal axis is $X = x^2$, so $qx^2$ must come before the constant $p$.'
            }
          },
          {
            badge: 'N1',
            bm: 'Bandingkan dengan $Y = mX + c$ ($Y = xy$, $X = x^2$): kecerunan $m = q$ dan pintasan-$Y$ iaitu $c = p$.',
            en: 'Compare with $Y = mX + c$ ($Y = xy$, $X = x^2$): gradient $m = q$ and vertical intercept $c = p$.',
            why: {
              bm: 'Apabila hubungan sepadan dengan $Y = mX + c$, graf ialah garis lurus dengan pekali $X$ sebagai $m$ dan pemalar sebagai $c$.',
              en: 'Matching $Y = mX + c$ proves the graph is a straight line with $X$-coefficient $m$ and constant $c$.'
            }
          }
        ]
      },
      {
        code: '6.3', marks: 4,
        topic: { bm: 'Mencari Pemalar daripada Dua Titik pada Graf Garis Lurus', en: 'Finding Constants from Two Points on a Linearized Graph' },
        q: {
          bm: 'Pemboleh ubah $x$ dan $y$ dihubungkan oleh $y = hx^2 + kx$. Graf garis lurus $\\frac{y}{x}$ melawan $x$ melalui titik $(2, 7)$ dan $(6, 15)$. Cari nilai pemalar $h$ dan $k$. [4m]',
          en: 'Variables $x$ and $y$ are related by $y = hx^2 + kx$. A straight-line graph of $\\frac{y}{x}$ against $x$ passes through $(2, 7)$ and $(6, 15)$. Find constants $h$ and $k$. [4m]'
        },
        mistakes: {
          bm: [
            'Menggantikan $y = 7$ terus ke dalam $y = hx^2 + kx$ sedangkan nilai $7$ pada titik $(2, 7)$ ialah nilai paksi menegak $Y = \\frac{y}{x}$, bukan $y$.',
            'Terbalik mengira kecerunan sebagai $\\frac{6 - 2}{15 - 7}$ ($\\frac{\\Delta X}{\\Delta Y}$) bukannya $\\frac{\\Delta Y}{\\Delta X}$.',
            'Tertukar nilai kecerunan $h$ dengan pintasan-$Y$ iaitu $k$.'
          ],
          en: [
            'Substituting $y = 7$ directly into $y = hx^2 + kx$, forgetting that $7$ in $(2, 7)$ is the vertical axis value $Y = \\frac{y}{x}$, not $y$.',
            'Inverting the gradient formula as $\\frac{6 - 2}{15 - 7}$ instead of $\\frac{15 - 7}{6 - 2}$.',
            'Swapping the gradient $h$ with the vertical intercept $k$.'
          ]
        },
        scheme: [
          {
            badge: 'K1',
            bm: 'Bahagikan semua sebutan dengan $x$: $\\frac{y}{x} = \\frac{hx^2}{x} + \\frac{kx}{x} \\implies \\frac{y}{x} = hx + k$.',
            en: 'Divide every term by $x$: $\\frac{y}{x} = \\frac{hx^2}{x} + \\frac{kx}{x} \\implies \\frac{y}{x} = hx + k$.',
            why: {
              bm: 'Mengubah persamaan kepada paksi graf $\\frac{y}{x}$ melawan $x$ menunjukkan $m = h$ dan $c = k$.',
              en: 'Matching the graph\'s axes $\\frac{y}{x}$ against $x$ reveals that $m = h$ and $c = k$.'
            }
          },
          {
            badge: 'K1',
            bm: 'Hitung kecerunan garis lurus melalui $(2, 7)$ dan $(6, 15)$: $h = m = \\frac{15 - 7}{6 - 2} = \\frac{8}{4} = 2$.',
            en: 'Compute the gradient through $(2, 7)$ and $(6, 15)$: $h = m = \\frac{15 - 7}{6 - 2} = \\frac{8}{4} = 2$.',
            why: {
              bm: 'Pada graf linear $Y$ melawan $X$, kecerunan $\\frac{Y_2 - Y_1}{X_2 - X_1}$ memberi nilai $h$ secara terus.',
              en: 'On a linearized $Y$-vs-$X$ graph, $\\frac{Y_2 - Y_1}{X_2 - X_1}$ directly equals $h$.'
            }
          },
          {
            badge: 'K1',
            bm: 'Gantikan $(X, Y) = (2, 7)$ dan $h = 2$ ke dalam $Y = hX + k$: $7 = 2(2) + k \\implies 7 = 4 + k$.',
            en: 'Substitute $(X, Y) = (2, 7)$ and $h = 2$ into $Y = hX + k$: $7 = 2(2) + k \\implies 7 = 4 + k$.',
            why: {
              bm: 'Sebarang titik di atas garis lurus memenuhi persamaan garis $Y = mX + c$.',
              en: 'Any point lying on the straight line satisfies $Y = mX + c$.'
            }
          },
          {
            badge: 'N1',
            bm: 'Selesaikan untuk $k$: $k = 7 - 4 = 3$. Maka $h = 2$ dan $k = 3$.',
            en: 'Solve for $k$: $k = 7 - 4 = 3$. Thus $h = 2$ and $k = 3$.',
            why: {
              bm: 'Tolak $4$ daripada kedua-dua belah untuk mengasingkan $k$ dan lengkapkan jawapan akhir.',
              en: 'Subtract $4$ from both sides to isolate $k$ and state both constants clearly.'
            }
          }
        ]
      },
      {
        code: '6.4', marks: 3,
        topic: { bm: 'Membina Semula Persamaan Tak Linear daripada Logaritma', en: 'Reconstructing Non-Linear Equation from Log Graph' },
        q: {
          bm: 'Graf garis lurus $\\log_{10} y$ melawan $\\log_{10} x$ mempunyai persamaan $\\log_{10} y = -2\\log_{10} x + 3$. Ungkapkan $y$ dalam sebutan $x$ dan cari nilai $y$ apabila $x = 10$. [3m]',
          en: 'A straight-line graph of $\\log_{10} y$ against $\\log_{10} x$ has equation $\\log_{10} y = -2\\log_{10} x + 3$. Express $y$ in terms of $x$ and find $y$ when $x = 10$. [3m]'
        },
        mistakes: {
          bm: [
            'Membuang simbol $\\log_{10}$ secara terus lalu menulis $y = -2x + 3$ tanpa menggabungkan sebutan menjadi satu logaritma tunggal.',
            'Lupa menukar pemalar $3$ kepada $\\log_{10}(10^3) = \\log_{10} 1000$, sebaliknya menulis $\\log_{10} 3$.',
            'Tersilap kuasa negatif: menulis $-2\\log_{10} x = \\log_{10}(-2x)$ atau $\\log_{10}(x^2)$ dan bukannya $\\log_{10}(x^{-2})$.'
          ],
          en: [
            'Dropping $\\log_{10}$ term-by-term to write $y = -2x + 3$ instead of combining the RHS into a single logarithm.',
            'Replacing constant $3$ with $\\log_{10} 3$ instead of $\\log_{10}(10^3) = \\log_{10} 1000$.',
            'Misapplying the negative coefficient: writing $-2\\log_{10} x = \\log_{10}(x^2)$ instead of $\\log_{10}(x^{-2})$.'
          ]
        },
        scheme: [
          {
            badge: 'K1',
            bm: 'Tukar pekali $-2$ kepada kuasa dan $3$ kepada asas $10$: $\\log_{10} y = \\log_{10}(x^{-2}) + \\log_{10}(10^3)$.',
            en: 'Rewrite the coefficient $-2$ as a power and $3$ as a base-$10$ log: $\\log_{10} y = \\log_{10}(x^{-2}) + \\log_{10}(10^3)$.',
            why: {
              bm: 'Setiap sebutan di sebelah kanan mesti ditulis sebagai $\\log_{10}(\\dots)$ sebelum dapat digabungkan.',
              en: 'Every RHS term must become $\\log_{10}(\\dots)$ before combining into a single log.'
            }
          },
          {
            badge: 'K1',
            bm: 'Gabungkan hasil tambah logaritma: $\\log_{10} y = \\log_{10}(1000 \\cdot x^{-2}) = \\log_{10}\\left(\\frac{1000}{x^2}\\right)$.',
            en: 'Combine the sum of logs: $\\log_{10} y = \\log_{10}(1000 \\cdot x^{-2}) = \\log_{10}\\left(\\frac{1000}{x^2}\\right)$.',
            why: {
              bm: 'Hukum tambah logaritma $\\log A + \\log B = \\log(AB)$ dan $x^{-2} = \\frac{1}{x^2}$.',
              en: 'By $\\log A + \\log B = \\log(AB)$ and $x^{-2} = \\frac{1}{x^2}$, the RHS collapses to one logarithm.'
            }
          },
          {
            badge: 'N1',
            bm: 'Bandingkan kedua-dua belah untuk menghapuskan $\\log_{10}$: $y = \\frac{1000}{x^2}$.',
            en: 'Equate arguments on both sides to remove $\\log_{10}$: $y = \\frac{1000}{x^2}$.',
            why: {
              bm: 'Jika $\\log_{10} P = \\log_{10} Q$, maka $P = Q$.',
              en: 'Once both sides are single logarithms of the same base, their arguments are equal.'
            }
          },
          {
            badge: 'N1',
            bm: 'Gantikan $x = 10$: $y = \\frac{1000}{10^2} = \\frac{1000}{100} = 10$.',
            en: 'Substitute $x = 10$: $y = \\frac{1000}{10^2} = \\frac{1000}{100} = 10$.',
            why: {
              bm: 'Kuasaduakan $10$ dahulu sebelum membahagi $1000$.',
              en: 'Square $10$ first, then divide $1000$ by $100$ to evaluate $y$.'
            }
          }
        ]
      },
      {
        code: '6.5', marks: 3,
        topic: { bm: 'Mengesan Titik Terpencil (*Outlier*) pada Garis Penyuaian Terbaik', en: 'Detecting an Outlier on a Line of Best Fit' },
        q: {
          bm: 'Set data linear $(X, Y)$ direkodkan sebagai $(1, 3.1),\\; (2, 5.0),\\; (3, 6.9),\\; (4, 10.2),\\; (5, 11.0)$. Kenal pasti satu titik terpencil (*outlier*) yang salah direkod dan anggarkan nilai sebenar $Y$ bagi titik itu. [3m]',
          en: 'Linear data $(X, Y)$ is recorded as $(1, 3.1),\\; (2, 5.0),\\; (3, 6.9),\\; (4, 10.2),\\; (5, 11.0)$. Identify the wrongly recorded outlier and estimate its true $Y$ value. [3m]'
        },
        mistakes: {
          bm: [
            'Memilih titik hujung $(5, 11.0)$ semata-mata kerana nilainya paling besar tanpa menyemak pertambahan malar $\\Delta Y$.',
            'Melukis garis penyuaian terbaik dengan memaksa garis melalui titik terpencil $(4, 10.2)$ sehingga kecerunan menjadi senget.',
            'Melaporkan nilai $X = 4$ sahaja dan lupa menganggarkan nilai $Y$ yang sepatutnya seperti diminta soalan.'
          ],
          en: [
            'Picking endpoint $(5, 11.0)$ simply because it has the largest value without checking the constant step $\\Delta Y$.',
            'Forcing the line of best fit through the outlier $(4, 10.2)$, skewing the gradient.',
            'Stating only $X = 4$ and forgetting to estimate the corrected $Y$ value asked by the question.'
          ]
        },
        scheme: [
          {
            badge: 'K1',
            bm: 'Semak pertambahan nilai $Y$ bagi setiap kenaikan $1$ unit $X$: $5.0 - 3.1 = 1.9$, $\\;6.9 - 5.0 = 1.9$, tetapi $10.2 - 6.9 = 3.3$ (melonjak jauh) dan $11.0 - 10.2 = 0.8$.',
            en: 'Check the change in $Y$ per unit increase in $X$: $5.0 - 3.1 = 1.9$, $\\;6.9 - 5.0 = 1.9$, whereas $10.2 - 6.9 = 3.3$ (sharp jump) and $11.0 - 10.2 = 0.8$.',
            why: {
              bm: 'Pada garis lurus, kecerunan $\\frac{\\Delta Y}{\\Delta X}$ sepatutnya hampir malar bagi setiap selang sama besar.',
              en: 'On a straight line, $\\frac{\\Delta Y}{\\Delta X}$ should stay nearly constant across equal $X$-intervals.'
            }
          },
          {
            badge: 'N1',
            bm: 'Oleh itu, titik terpencil (*outlier*) yang salah direkod ialah $(4, 10.2)$.',
            en: 'Hence, the wrongly recorded outlier is $(4, 10.2)$.',
            why: {
              bm: 'Titik $(4, 10.2)$ menyimpang daripada corak linear yang ditunjukkan oleh empat titik yang lain.',
              en: '$(4, 10.2)$ breaks the linear pattern formed by the other four points.'
            }
          },
          {
            badge: 'N1',
            bm: 'Menggunakan pola seragam $m \\approx 1.9$ dari tiga titik awal ($Y = 1.9X + 1.2$), anggaran $Y(4) \\approx 6.9 + 1.9 = 8.8$ (julat diterima: $8.75 - 9.00$).',
            en: 'Using the uniform pattern $m \\approx 1.9$ from the first three points ($Y = 1.9X + 1.2$), estimated $Y(4) \\approx 6.9 + 1.9 = 8.8$ (accept $8.75 - 9.00$).',
            why: {
              bm: 'Abaikan titik terpencil semasa mengira atau membaca anggaran nilai $Y$ daripada garis penyuaian terbaik.',
              en: 'Ignore the outlier when reading or interpolating the true $Y$ value on the line of best fit.'
            }
          }
        ]
      },
      {
        code: '6.6', marks: 3,
        topic: { bm: 'Menukar Persamaan $y = \\frac{k}{p^x}$ kepada Bentuk Linear', en: 'Linearizing Reciprocal Exponential Functions' },
        q: {
          bm: 'Tunjukkan bahawa $y = \\frac{k}{p^x}$ boleh ditukarkan kepada bentuk garis lurus apabila $\\log_{10} y$ diplotkan melawan $x$. Nyatakan kecerunan dan pintasan-$Y$. [3m]',
          en: 'Show that $y = \\frac{k}{p^x}$ forms a straight line when $\\log_{10} y$ is plotted against $x$. State its gradient and vertical intercept. [3m]'
        },
        mistakes: {
          bm: [
            'Tertinggal tanda negatif pada kecerunan kerana menggunakan hukum tambah bukannya hukum tolak bagi pembahagian logaritma.',
            'Menulis $\\log_{10} y = \\log_{10}\\left(\\frac{k}{p^x}\\right) = \\frac{\\log_{10} k}{\\log_{10}(p^x)}$ (membahagi logaritma, bukan menolak).',
            'Menulis kecerunan sebagai $-p$ dan bukan $-\\log_{10} p$.'
          ],
          en: [
            'Omitting the minus sign on the gradient by adding instead of subtracting logs of a quotient.',
            'Writing $\\log_{10}\\left(\\frac{k}{p^x}\\right) = \\frac{\\log_{10} k}{\\log_{10}(p^x)}$ instead of $\\log_{10} k - \\log_{10}(p^x)$.',
            'Giving the gradient as $-p$ instead of $-\\log_{10} p$.'
          ]
        },
        scheme: [
          {
            badge: 'K1',
            bm: 'Ambil $\\log_{10}$ pada kedua-dua belah: $\\log_{10} y = \\log_{10}\\left(\\frac{k}{p^x}\\right)$.',
            en: 'Take $\\log_{10}$ on both sides: $\\log_{10} y = \\log_{10}\\left(\\frac{k}{p^x}\\right)$.',
            why: {
              bm: 'Mengambil logaritma menukarkan hasil bahagi eksponen kepada bentuk tolak linear.',
              en: 'Taking logs converts the exponential quotient into a linear subtraction.'
            }
          },
          {
            badge: 'K1',
            bm: 'Gunakan hukum bahagi $\\log_{10}\\left(\\frac{A}{B}\\right) = \\log_{10} A - \\log_{10} B$: $\\log_{10} y = \\log_{10} k - \\log_{10}(p^x)$.',
            en: 'Apply the quotient law $\\log_{10}\\left(\\frac{A}{B}\\right) = \\log_{10} A - \\log_{10} B$: $\\log_{10} y = \\log_{10} k - \\log_{10}(p^x)$.',
            why: {
              bm: 'Penyebut $p^x$ bertukar menjadi sebutan bertanda negatif selepas dipecahkan.',
              en: 'The denominator $p^x$ becomes a subtracted log term when split.'
            }
          },
          {
            badge: 'K1',
            bm: 'Turunkan kuasa $x$ dan susun mengikut $Y = mX + c$: $\\log_{10} y = (-\\log_{10} p)x + \\log_{10} k$.',
            en: 'Bring down the power $x$ and reorder into $Y = mX + c$: $\\log_{10} y = (-\\log_{10} p)x + \\log_{10} k$.',
            why: {
              bm: 'Dengan $Y = \\log_{10} y$ dan $X = x$, sebutan $x$ diletakkan di hadapan untuk mengenal pasti kecerunan.',
              en: 'With $Y = \\log_{10} y$ and $X = x$, putting the $x$-term first exposes the gradient.'
            }
          },
          {
            badge: 'N1',
            bm: 'Kecerunan $m = -\\log_{10} p$ dan pintasan-$Y$ iaitu $c = \\log_{10} k$.',
            en: 'Gradient $m = -\\log_{10} p$ and vertical intercept $c = \\log_{10} k$.',
            why: {
              bm: 'Tanda negatif kekal melekat pada pekali $x$, manakala $\\log_{10} k$ ialah pemalar.',
              en: 'The negative sign stays attached to the coefficient of $x$, while $\\log_{10} k$ is the intercept.'
            }
          }
        ]
      },
      {
        code: '6.7', marks: 4,
        topic: { bm: 'Graf Pecahan $\\frac{1}{y}$ Melawan $\\frac{1}{x}$', en: 'Reciprocal Plot $\\frac{1}{y}$ Against $\\frac{1}{x}$' },
        q: {
          bm: 'Diberi $\\frac{a}{y} + \\frac{b}{x} = 1$. Graf $\\frac{1}{y}$ melawan $\\frac{1}{x}$ ialah garis lurus yang melalui $(1, 3)$ dan $(4, 9)$. Cari nilai pemalar $a$ dan $b$. [4m]',
          en: 'Given $\\frac{a}{y} + \\frac{b}{x} = 1$. The graph of $\\frac{1}{y}$ against $\\frac{1}{x}$ passes through $(1, 3)$ and $(4, 9)$. Find constants $a$ and $b$. [4m]'
        },
        mistakes: {
          bm: [
            'Lupa membahagikan semua sebutan dengan $a$ untuk menjadikan pekali $\\frac{1}{y}$ sama dengan $1$ terlebih dahulu.',
            'Tertinggal tanda negatif apabila memindahkan $\\frac{b}{a}\\left(\\frac{1}{x}\\right)$ ke sebelah kanan lalu mendapat $b = +2$ bukannya $-2$.',
            'Menganggap pintasan-$Y$ ($c = 1$) ialah $a$ terus tanpa menyongsangkan $\\frac{1}{a} = 1$ (perangkap besar jika $c \\neq 1$).'
          ],
          en: [
            'Forgetting to divide every term by $a$ so the coefficient of $\\frac{1}{y}$ becomes $1$ first.',
            'Dropping the minus sign when moving $\\frac{b}{a}\\left(\\frac{1}{x}\\right)$ to the RHS, giving $b = +2$ instead of $-2$.',
            'Equating the $Y$-intercept $c$ directly to $a$ instead of $\\frac{1}{a}$.'
          ]
        },
        scheme: [
          {
            badge: 'K1',
            bm: 'Asingkan $\\frac{a}{y}$ dan bahagi semua sebutan dengan $a$: $\\frac{a}{y} = -\\frac{b}{x} + 1 \\implies \\frac{1}{y} = -\\frac{b}{a}\\left(\\frac{1}{x}\\right) + \\frac{1}{a}$.',
            en: 'Isolate $\\frac{a}{y}$ and divide every term by $a$: $\\frac{a}{y} = -\\frac{b}{x} + 1 \\implies \\frac{1}{y} = -\\frac{b}{a}\\left(\\frac{1}{x}\\right) + \\frac{1}{a}$.',
            why: {
              bm: 'Untuk membandingkan dengan $Y = mX + c$, paksi $Y = \\frac{1}{y}$ mesti mempunyai pekali $1$.',
              en: 'To match $Y = mX + c$, the vertical variable $Y = \\frac{1}{y}$ must have coefficient $1$.'
            }
          },
          {
            badge: 'K1',
            bm: 'Kira kecerunan $m$ daripada $(1, 3)$ dan $(4, 9)$: $m = \\frac{9 - 3}{4 - 1} = \\frac{6}{3} = 2$.',
            en: 'Calculate the gradient $m$ from $(1, 3)$ and $(4, 9)$: $m = \\frac{9 - 3}{4 - 1} = \\frac{6}{3} = 2$.',
            why: {
              bm: 'Koordinat $(X, Y)$ yang diberi sudah pun mewakili $\\left(\\frac{1}{x}, \\frac{1}{y}\\right)$.',
              en: 'The given coordinates $(X, Y)$ already represent $\\left(\\frac{1}{x}, \\frac{1}{y}\\right)$.'
            }
          },
          {
            badge: 'K1',
            bm: 'Cari pintasan-$Y$ ($c$) dengan mengganti $(1, 3)$: $3 = 2(1) + c \\implies c = 3 - 2 = 1$.',
            en: 'Find the $Y$-intercept $c$ using $(1, 3)$: $3 = 2(1) + c \\implies c = 3 - 2 = 1$.',
            why: {
              bm: 'Titik $(1, 3)$ terletak di atas garis $Y = 2X + c$.',
              en: 'Point $(1, 3)$ lies on the line $Y = 2X + c$.'
            }
          },
          {
            badge: 'N1',
            bm: 'Bandingkan $\\frac{1}{a} = c = 1 \\implies a = 1$, dan $-\\frac{b}{a} = m = 2 \\implies -\\frac{b}{1} = 2 \\implies b = -2$.',
            en: 'Equate $\\frac{1}{a} = c = 1 \\implies a = 1$, and $-\\frac{b}{a} = m = 2 \\implies -\\frac{b}{1} = 2 \\implies b = -2$.',
            why: {
              bm: 'Cari $a$ daripada pintasan-$Y$ dahulu, kemudian gantikan ke dalam ungkapan kecerunan untuk mendapat $b$.',
              en: 'Solve for $a$ from the intercept first, then substitute $a$ into the gradient equation to find $b$.'
            }
          }
        ]
      },
      {
        code: '6.8', marks: 4,
        topic: { bm: 'Ungkapan $y$ daripada Graf $y\\sqrt{x}$ Melawan $x^2$', en: 'Expressing $y$ from a Graph of $y\\sqrt{x}$ vs $x^2$' },
        q: {
          bm: 'Graf garis lurus $y\\sqrt{x}$ melawan $x^2$ mempunyai kecerunan $-1.5$ dan pintasan-$Y$ bernilai $12$. Ungkapkan $y$ dalam sebutan $x$. [4m]',
          en: 'A straight-line graph of $y\\sqrt{x}$ against $x^2$ has gradient $-1.5$ and $Y$-intercept $12$. Express $y$ in terms of $x$. [4m]'
        },
        mistakes: {
          bm: [
            'Tersilap hukum indeks semasa membahagi $x^2$ dengan $\\sqrt{x} = x^{1/2}$: menulis $x^4$ (membahagi kuasa) bukannya $x^{2 - 1/2} = x^{3/2} = x\\sqrt{x}$.',
            'Membahagi hanya sebutan $-1.5x^2$ dengan $\\sqrt{x}$ dan membiarkan $+12$ tidak dibahagi dengan $\\sqrt{x}$.',
            'Terbalik menukar paksi: menulis $x^2 = -1.5(y\\sqrt{x}) + 12$ bukannya $y\\sqrt{x} = -1.5x^2 + 12$.'
          ],
          en: [
            'Index slip dividing $x^2$ by $\\sqrt{x} = x^{1/2}$: writing $x^4$ instead of $x^{2 - 1/2} = x^{3/2} = x\\sqrt{x}$.',
            'Dividing only $-1.5x^2$ by $\\sqrt{x}$ and forgetting to divide the constant $+12$ by $\\sqrt{x}$.',
            'Swapping the axes by writing $x^2 = -1.5(y\\sqrt{x}) + 12$ instead of $y\\sqrt{x} = -1.5x^2 + 12$.'
          ]
        },
        scheme: [
          {
            badge: 'K1',
            bm: 'Bentuk persamaan garis lurus $Y = mX + c$ dengan $Y = y\\sqrt{x}$ dan $X = x^2$: $y\\sqrt{x} = -1.5x^2 + 12$.',
            en: 'Write the straight-line equation $Y = mX + c$ with $Y = y\\sqrt{x}$ and $X = x^2$: $y\\sqrt{x} = -1.5x^2 + 12$.',
            why: {
              bm: 'Sentiasa masukkan paksi-$Y$, kecerunan $m$, paksi-$X$, dan pintasan $c$ ke dalam $Y = mX + c$ dahulu.',
              en: 'Always build $Y = mX + c$ using the exact vertical axis $Y$ and horizontal axis $X$ first.'
            }
          },
          {
            badge: 'K1',
            bm: 'Bahagikan setiap sebutan dengan $\\sqrt{x}$ untuk menjadikan $y$ sebagai perkara rumus: $y = \\frac{-1.5x^2}{\\sqrt{x}} + \\frac{12}{\\sqrt{x}}$.',
            en: 'Divide every term by $\\sqrt{x}$ to make $y$ the subject: $y = \\frac{-1.5x^2}{\\sqrt{x}} + \\frac{12}{\\sqrt{x}}$.',
            why: {
              bm: 'Setiap sebutan di sebelah kanan mesti dibahagikan dengan $\\sqrt{x}$ secara adil.',
              en: 'Every term on the RHS must be divided by $\\sqrt{x}$.'
            }
          },
          {
            badge: 'K1',
            bm: 'Permudahkan indeks pada sebutan pertama: $\\frac{x^2}{\\sqrt{x}} = \\frac{x^2}{x^{1/2}} = x^{2 - 1/2} = x^{3/2} = x\\sqrt{x}$.',
            en: 'Simplify the indices in the first term: $\\frac{x^2}{\\sqrt{x}} = \\frac{x^2}{x^{1/2}} = x^{2 - 1/2} = x^{3/2} = x\\sqrt{x}$.',
            why: {
              bm: 'Hukum indeks pembahagian asas sama ialah tolak eksponen ($2 - \\frac{1}{2} = \\frac{3}{2}$).',
              en: 'Dividing same-base powers subtracts their exponents ($2 - \\frac{1}{2} = \\frac{3}{2}$).'
            }
          },
          {
            badge: 'N1',
            bm: 'Oleh itu, $y = -\\frac{3}{2}x\\sqrt{x} + \\frac{12}{\\sqrt{x}}$ (atau $y = -1.5x^{3/2} + 12x^{-1/2}$).',
            en: 'Hence, $y = -\\frac{3}{2}x\\sqrt{x} + \\frac{12}{\\sqrt{x}}$ (or $y = -1.5x^{3/2} + 12x^{-1/2}$).',
            why: {
              bm: 'Kedua-dua bentuk surd dan indeks pecahan adalah setara dan diterima dalam skema SPM.',
              en: 'Both the surd form and fractional-index form are equivalent and accepted.'
            }
          }
        ]
      },
      {
        code: '6.9', marks: 3,
        topic: { bm: 'Hukum Kuasa $y = 5x^n$ pada Paksi Logaritma', en: 'Power Law $y = 5x^n$ on Log-Log Axes' },
        q: {
          bm: 'Persamaan $y = 5x^n$ menghasilkan garis lurus berkecerunan $3$ apabila $\\log_{10} y$ diplotkan melawan $\\log_{10} x$. Cari nilai $n$ dan pintasan-$Y$ bagi graf tersebut. [3m]',
          en: 'The equation $y = 5x^n$ yields a straight line of gradient $3$ when $\\log_{10} y$ is plotted against $\\log_{10} x$. Find $n$ and the vertical intercept. [3m]'
        },
        mistakes: {
          bm: [
            'Menyatakan pintasan-$Y$ terus sebagai $5$ dan bukannya $\\log_{10} 5 \\approx 0.6990$.',
            'Terlupa kuasa $n$ hanya milik $x$, bukan $5$, lalu menulis $\\log_{10}(5x^n) = n\\log_{10}(5x)$.',
            'Membundarkan $\\log_{10} 5 = 0.69897\\dots$ menjadi $0.69$ (salah bundar; sepatutnya $0.6990$).'
          ],
          en: [
            'Stating the vertical intercept as $5$ instead of $\\log_{10} 5 \\approx 0.6990$.',
            'Applying the power $n$ to both $5$ and $x$ by writing $n\\log_{10}(5x)$.',
            'Truncating $\\log_{10} 5 = 0.69897\\dots$ to $0.69$ instead of rounding correctly to $0.6990$.'
          ]
        },
        scheme: [
          {
            badge: 'K1',
            bm: 'Ambil $\\log_{10}$ kedua-dua belah: $\\log_{10} y = \\log_{10}(5x^n) = \\log_{10} 5 + \\log_{10}(x^n)$.',
            en: 'Take $\\log_{10}$ on both sides: $\\log_{10} y = \\log_{10}(5x^n) = \\log_{10} 5 + \\log_{10}(x^n)$.',
            why: {
              bm: 'Pecahkan hasil darab $5 \\cdot x^n$ dahulu sebelum menurunkan kuasa $n$.',
              en: 'Split the product $5 \\cdot x^n$ before applying the power law.'
            }
          },
          {
            badge: 'K1',
            bm: 'Turunkan kuasa $n$ dan susun mengikut $Y = mX + c$: $\\log_{10} y = n(\\log_{10} x) + \\log_{10} 5$.',
            en: 'Bring down the power $n$ and arrange into $Y = mX + c$: $\\log_{10} y = n(\\log_{10} x) + \\log_{10} 5$.',
            why: {
              bm: 'Dengan $Y = \\log_{10} y$ dan $X = \\log_{10} x$, pekali $n$ menjadi kecerunan $m$.',
              en: 'With $Y = \\log_{10} y$ and $X = \\log_{10} x$, the coefficient $n$ is the gradient $m$.'
            }
          },
          {
            badge: 'N1',
            bm: 'Bandingkan kecerunan yang diberi ($m = 3$): $n = 3$.',
            en: 'Equate with the given gradient ($m = 3$): $n = 3$.',
            why: {
              bm: 'Kecerunan graf log-log bagi hukum kuasa sentiasa sama dengan eksponen $n$.',
              en: 'On a log-log plot of a power law, the gradient equals the exponent $n$.'
            }
          },
          {
            badge: 'N1',
            bm: 'Pintasan-$Y$ ialah pemalar bebas: $c = \\log_{10} 5 \\approx 0.6990$.',
            en: 'The vertical intercept is the constant term: $c = \\log_{10} 5 \\approx 0.6990$.',
            why: {
              bm: 'Gunakan kalkulator untuk menilai $\\log_{10} 5$ kepada 4 angka bererti.',
              en: 'Evaluate $\\log_{10} 5$ to 4 significant figures.'
            }
          }
        ]
      },
      {
        code: '6.10', marks: 4,
        topic: { bm: 'Aplikasi Sains: Keamatan Cahaya ($I = \\frac{k}{d^2}$)', en: 'Inverse-Square Law Application in Physics' },
        q: {
          bm: 'Keamatan cahaya $I$ pada jarak $d\\text{ m}$ diberi oleh $I = \\frac{k}{d^2}$. Eksperimen mendapati apabila $d = 2,\\; I = 25$ dan apabila $d = 5,\\; I = 4$. Nyatakan paksi-paksi linear yang menghasilkan garis lurus melalui asalan, dan cari nilai $k$. [4m]',
          en: 'Light intensity $I$ at distance $d\\text{ m}$ obeys $I = \\frac{k}{d^2}$. Given $I = 25$ at $d = 2$ and $I = 4$ at $d = 5$, state the axes that give a line through the origin and find $k$. [4m]'
        },
        mistakes: {
          bm: [
            'Mencadangkan plot $I$ melawan $d^2$ (yang masih menghasilkan lengkung hiperbola, bukan garis lurus) bukannya $I$ melawan $\\frac{1}{d^2}$.',
            'Lupa menyongsangkan $d^2$ kepada $\\frac{1}{d^2}$ semasa mengira kecerunan (membahagi dengan $2^2 = 4$ bukannya $\\frac{1}{4} = 0.25$).',
            'Tidak menjelaskan sebab garis lurus melalui asalan (pintasan-$Y$ ialah $c = 0$).'
          ],
          en: [
            'Suggesting plotting $I$ against $d^2$ (still a curve) instead of $I$ against $\\frac{1}{d^2}$.',
            'Dividing by $d^2 = 4$ instead of $\\frac{1}{d^2} = 0.25$ when finding gradient $k$.',
            'Omitting why the line passes through the origin ($c = 0$).'
          ]
        },
        scheme: [
          {
            badge: 'K1',
            bm: 'Tulis semula $I = \\frac{k}{d^2}$ dalam bentuk $Y = mX + c$: $I = k\\left(\\frac{1}{d^2}\\right) + 0$.',
            en: 'Rewrite $I = \\frac{k}{d^2}$ in the form $Y = mX + c$: $I = k\\left(\\frac{1}{d^2}\\right) + 0$.',
            why: {
              bm: 'Mengasingkan $\\frac{1}{d^2}$ sebagai satu pemboleh ubah $X$ menunjukkan hubungan linear berkadar terus dengan $c = 0$.',
              en: 'Isolating $\\frac{1}{d^2}$ as $X$ yields a linear form with zero intercept ($c = 0$).'
            }
          },
          {
            badge: 'N1',
            bm: 'Plotkan paksi-$Y = I$ melawan paksi-$X = \\frac{1}{d^2}$. Garis lurus melalui asalan $(0, 0)$ kerana pintasan-$Y$, $c = 0$.',
            en: 'Plot vertical axis $Y = I$ against horizontal axis $X = \\frac{1}{d^2}$. It passes through $(0, 0)$ because $c = 0$.',
            why: {
              bm: 'Mana-mana garis $Y = mX$ tanpa pemalar $+c$ sentiasa bermula pada asalan.',
              en: 'Any line of the form $Y = mX$ with $c = 0$ passes through the origin.'
            }
          },
          {
            badge: 'K1',
            bm: 'Tukar dua titik $(d, I)$ kepada koordinat $(X, Y) = \\left(\\frac{1}{d^2}, I\\right)$: $\\left(\\frac{1}{4}, 25\\right)$ dan $\\left(\\frac{1}{25}, 4\\right)$, iaitu $(0.25, 25)$ dan $(0.04, 4)$.',
            en: 'Convert the data points to $(X, Y) = \\left(\\frac{1}{d^2}, I\\right)$: $\\left(\\frac{1}{4}, 25\\right)$ and $\\left(\\frac{1}{25}, 4\\right)$, i.e. $(0.25, 25)$ and $(0.04, 4)$.',
            why: {
              bm: 'Jangan masukkan nilai $d$ terus; hitung $\\frac{1}{d^2}$ dahulu untuk mendapatkan koordinat $X$.',
              en: 'Convert $d$ to $X = \\frac{1}{d^2}$ before computing the gradient.'
            }
          },
          {
            badge: 'N1',
            bm: 'Kecerunan $k = \\frac{25 - 4}{0.25 - 0.04} = \\frac{21}{0.21} = 100$ (semakan: $I d^2 = 25(4) = 100$ dan $4(25) = 100$).',
            en: 'Gradient $k = \\frac{25 - 4}{0.25 - 0.04} = \\frac{21}{0.21} = 100$ (check: $I d^2 = 25(4) = 100$ and $4(25) = 100$).',
            why: {
              bm: 'Pada graf $I$ melawan $\\frac{1}{d^2}$, kecerunan garis sama dengan pemalar $k$.',
              en: 'On the linearized graph, the gradient equals $k$, verified by both data pairs.'
            }
          }
        ]
      }
    ],

    // =========================================================================
    // TINGKATAN 4 BAB 7: GEOMETRI KOORDINAT (10 SOALAN)
    // =========================================================================
    'f4-c7': [
      {
        code: '7.1', marks: 3,
        topic: { bm: 'Pembahagian Tembereng Garis Mengikut Nisbah $m : n$', en: 'Internal Division of a Line Segment in Ratio $m : n$' },
        q: {
          bm: 'Titik $P$ membahagikan tembereng garis yang menyambungkan $A(-2, 3)$ dan $B(8, -2)$ dengan nisbah $AP : PB = 2 : 3$. Cari koordinat titik $P$. [3m]',
          en: 'Point $P$ divides the line segment joining $A(-2, 3)$ and $B(8, -2)$ internally in the ratio $AP : PB = 2 : 3$. Find the coordinates of $P$. [3m]'
        },
        mistakes: {
          bm: [
            'Tidak mendarab silang nisbah: mendarab $m = 2$ dengan koordinat $A$ dan $n = 3$ dengan koordinat $B$ secara terus.',
            'Menggunakan $2 - 3$ di penyebut atau lupa membahagi dengan jumlah bahagian $2 + 3 = 5$.',
            'Silap mengira tanda negatif: menulis $3(-2) + 2(8) = -6 + 16 = -10$ atau $3(3) + 2(-2) = 9 + 4 = 13$.'
          ],
          en: [
            'Forgetting to cross-multiply the ratio weights: multiplying $2$ with $A$ and $3$ with $B$ directly.',
            'Using $2 - 3$ in the denominator or forgetting to divide by $2 + 3 = 5$.',
            'Arithmetic sign slip: computing $3(-2) + 2(8)$ as $-10$ or $3(3) + 2(-2)$ as $13$.'
          ]
        },
        scheme: [
          {
            badge: 'K1',
            bm: 'Gantikan $A(x_1, y_1) = (-2, 3)$, $B(x_2, y_2) = (8, -2)$, $m = 2$, dan $n = 3$ ke dalam rumus pembahagi silang $\\left(\\frac{nx_1 + mx_2}{m + n},\\; \\frac{ny_1 + my_2}{m + n}\\right)$: $P = \\left(\\frac{3(-2) + 2(8)}{2 + 3},\\; \\frac{3(3) + 2(-2)}{2 + 3}\\right)$.',
            en: 'Substitute $A(-2, 3)$, $B(8, -2)$, $m = 2$, and $n = 3$ into the section formula $\\left(\\frac{nx_1 + mx_2}{m + n},\\; \\frac{ny_1 + my_2}{m + n}\\right)$: $P = \\left(\\frac{3(-2) + 2(8)}{2 + 3},\\; \\frac{3(3) + 2(-2)}{2 + 3}\\right)$.',
            why: {
              bm: 'Nisbah $2 : 3$ bermakna $P$ lebih dekat kepada $A$, jadi koordinat $A$ menerima pemberat lebih besar ($3$).',
              en: 'Since $AP : PB = 2 : 3$, $P$ is closer to $A$, so $A$ gets the larger weight ($3$).'
            }
          },
          {
            badge: 'K1',
            bm: 'Permudahkan pengangka dan penyebut: $x = \\frac{-6 + 16}{5} = \\frac{10}{5}$ dan $y = \\frac{9 - 4}{5} = \\frac{5}{5}$.',
            en: 'Simplify the numerators and denominators: $x = \\frac{-6 + 16}{5} = \\frac{10}{5}$ and $y = \\frac{9 - 4}{5} = \\frac{5}{5}$.',
            why: {
              bm: 'Selesaikan pendaraban sebelum menambah atau menolak supaya tanda negatif kekal tepat.',
              en: 'Evaluate the products carefully before adding to avoid sign errors.'
            }
          },
          {
            badge: 'N1',
            bm: 'Koordinat $P = (2, 1)$.',
            en: 'Coordinates of $P = (2, 1)$.',
            why: {
              bm: 'Semak logik: $x = 2$ terletak antara $-2$ dan $8$, dan $y = 1$ antara $3$ dan $-2$.',
              en: 'Sanity check: $x = 2$ lies between $-2$ and $8$, and $y = 1$ lies between $3$ and $-2$.'
            }
          }
        ]
      },
      {
        code: '7.2', marks: 3,
        topic: { bm: 'Persamaan Garis Lurus Serenjang', en: 'Equation of a Perpendicular Line' },
        q: {
          bm: 'Garis lurus $L_1$ mempunyai persamaan $2x + 3y = 6$. Garis lurus $L_2$ berserenjang dengan $L_1$ dan melalui titik $(4, -1)$. Cari persamaan $L_2$. [3m]',
          en: 'Line $L_1$ has equation $2x + 3y = 6$. Line $L_2$ is perpendicular to $L_1$ and passes through $(4, -1)$. Find the equation of $L_2$. [3m]'
        },
        mistakes: {
          bm: [
            'Membaca kecerunan $L_1$ terus sebagai $2$ tanpa menyusun kepada bentuk $y = -\\frac{2}{3}x + 2$ terlebih dahulu.',
            'Mengambil kecerunan serenjang hanya sebagai songsangan $\\frac{3}{2}$ atau negatif $-\\frac{2}{3}$ sahaja (lupa melakukan **kedua-duanya**: songsang DAN tukar tanda).',
            'Silap tanda apabila menggantikan $y_1 = -1$: menulis $y - 1 = \\frac{3}{2}(x - 4)$ bukannya $y - (-1) = \\frac{3}{2}(x - 4)$.'
          ],
          en: [
            'Reading the gradient of $L_1$ directly as $2$ without rearranging into $y = -\\frac{2}{3}x + 2$ first.',
            'Taking only the reciprocal OR only the negative sign instead of the negative reciprocal $m_2 = -\\frac{1}{m_1}$.',
            'Sign error substituting $y_1 = -1$: writing $y - 1$ instead of $y - (-1) = y + 1$.'
          ]
        },
        scheme: [
          {
            badge: 'K1',
            bm: 'Susun semula $L_1$ ke bentuk $y = mx + c$: $3y = -2x + 6 \\implies y = -\\frac{2}{3}x + 2$, maka $m_1 = -\\frac{2}{3}$.',
            en: 'Rearrange $L_1$ into $y = mx + c$: $3y = -2x + 6 \\implies y = -\\frac{2}{3}x + 2$, so $m_1 = -\\frac{2}{3}$.',
            why: {
              bm: 'Kecerunan hanya boleh dibaca apabila pekali $y$ ialah $+1$.',
              en: 'The gradient is only the coefficient of $x$ once $y$ is isolated with coefficient $+1$.'
            }
          },
          {
            badge: 'K1',
            bm: 'Gunakan syarat serenjang $m_1 m_2 = -1$: $\\left(-\\frac{2}{3}\\right)m_2 = -1 \\implies m_2 = \\frac{3}{2}$.',
            en: 'Apply the perpendicular condition $m_1 m_2 = -1$: $\\left(-\\frac{2}{3}\\right)m_2 = -1 \\implies m_2 = \\frac{3}{2}$.',
            why: {
              bm: 'Dua garis berserenjang mempunyai kecerunan yang merupakan songsangan negatif antara satu sama lain.',
              en: 'Perpendicular gradients are negative reciprocals of each other.'
            }
          },
          {
            badge: 'K1',
            bm: 'Bina persamaan garis melalui $(4, -1)$: $y - (-1) = \\frac{3}{2}(x - 4) \\implies y + 1 = \\frac{3}{2}x - 6$.',
            en: 'Form the line through $(4, -1)$: $y - (-1) = \\frac{3}{2}(x - 4) \\implies y + 1 = \\frac{3}{2}x - 6$.',
            why: {
              bm: 'Gunakan rumus titik-kecerunan $y - y_1 = m(x - x_1)$ dan kembangkan kurungan.',
              en: 'Use point-slope form $y - y_1 = m(x - x_1)$ and expand the bracket.'
            }
          },
          {
            badge: 'N1',
            bm: 'Tolak $1$ daripada kedua-dua belah: $y = \\frac{3}{2}x - 7$ (atau $3x - 2y - 14 = 0$).',
            en: 'Subtract $1$ from both sides: $y = \\frac{3}{2}x - 7$ (or $3x - 2y - 14 = 0$).',
            why: {
              bm: 'Semak dengan $(4, -1)$: $\\frac{3}{2}(4) - 7 = 6 - 7 = -1$.',
              en: 'Verify with $(4, -1)$: $\\frac{3}{2}(4) - 7 = 6 - 7 = -1$.'
            }
          }
        ]
      },
      {
        code: '7.3', marks: 4,
        topic: { bm: 'Pembahagi Dua Sama Serenjang', en: 'Perpendicular Bisector of a Line Segment' },
        q: {
          bm: 'Cari persamaan pembahagi dua sama serenjang bagi tembereng garis yang menyambungkan titik $P(-1, 5)$ dan $Q(3, 1)$. [4m]',
          en: 'Find the equation of the perpendicular bisector of the line segment joining $P(-1, 5)$ and $Q(3, 1)$. [4m]'
        },
        mistakes: {
          bm: [
            'Menggantikan titik hujung $P$ atau $Q$ ke dalam persamaan garis serenjang dan bukannya titik tengah $M$.',
            'Menolak koordinat $P$ dan $Q$ dalam rumus titik tengah ($\\frac{x_1 - x_2}{2}$) bukannya menambah ($\\frac{x_1 + x_2}{2}$).',
            'Terlupa menukar tanda kecerunan $m_{PQ} = -1$ kepada $m_\\perp = +1$.'
          ],
          en: [
            'Substituting endpoint $P$ or $Q$ into the perpendicular line instead of midpoint $M$.',
            'Subtracting coordinates in the midpoint formula instead of adding $\\left(\\frac{x_1+x_2}{2}, \\frac{y_1+y_2}{2}\\right)$.',
            'Forgetting to negate $m_{PQ} = -1$ to get $m_\\perp = +1$.'
          ]
        },
        scheme: [
          {
            badge: 'K1',
            bm: 'Cari titik tengah $M$ bagi $PQ$: $M = \\left(\\frac{-1 + 3}{2},\\; \\frac{5 + 1}{2}\\right) = \\left(\\frac{2}{2},\\; \\frac{6}{2}\\right) = (1, 3)$.',
            en: 'Find midpoint $M$ of $PQ$: $M = \\left(\\frac{-1 + 3}{2},\\; \\frac{5 + 1}{2}\\right) = \\left(\\frac{2}{2},\\; \\frac{6}{2}\\right) = (1, 3)$.',
            why: {
              bm: 'Pembahagi dua sama serenjang mesti melalui tepat di tengah-tengah antara $P$ dan $Q$.',
              en: 'A perpendicular bisector must pass through the midpoint $M$ of $PQ$.'
            }
          },
          {
            badge: 'K1',
            bm: 'Cari kecerunan tembereng $PQ$: $m_{PQ} = \\frac{1 - 5}{3 - (-1)} = \\frac{-4}{4} = -1$.',
            en: 'Find the gradient of segment $PQ$: $m_{PQ} = \\frac{1 - 5}{3 - (-1)} = \\frac{-4}{4} = -1$.',
            why: {
              bm: 'Kecerunan $PQ$ diperlukan untuk mencari kecerunan garis yang berserenjang dengannya.',
              en: 'We need $m_{PQ}$ before finding the perpendicular gradient.'
            }
          },
          {
            badge: 'K1',
            bm: 'Dapatkan kecerunan serenjang: $m_{PQ} \\cdot m_\\perp = -1 \\implies (-1)m_\\perp = -1 \\implies m_\\perp = 1$.',
            en: 'Find the perpendicular gradient: $m_{PQ} \\cdot m_\\perp = -1 \\implies (-1)m_\\perp = -1 \\implies m_\\perp = 1$.',
            why: {
              bm: 'Songsangan negatif bagi $-1$ ialah $+1$.',
              en: 'The negative reciprocal of $-1$ is $+1$.'
            }
          },
          {
            badge: 'N1',
            bm: 'Bina persamaan melalui $M(1, 3)$ dengan $m_\\perp = 1$: $y - 3 = 1(x - 1) \\implies y = x + 2$.',
            en: 'Form the equation through $M(1, 3)$ with $m_\\perp = 1$: $y - 3 = 1(x - 1) \\implies y = x + 2$.',
            why: {
              bm: 'Gantikan $(1, 3)$ dan permudahkan kepada $y = mx + c$.',
              en: 'Substitute $M(1, 3)$ and simplify to $y = mx + c$.'
            }
          }
        ]
      },
      {
        code: '7.4', marks: 3,
        topic: { bm: 'Luas Segi Tiga Menggunakan Rumus Tali Kasut', en: 'Area of Triangle via Shoelace Formula' },
        q: {
          bm: 'Hitung luas segi tiga dengan bucu-bucu $A(1, 4)$, $B(-2, -1)$, dan $C(3, -2)$. [3m]',
          en: 'Calculate the area of the triangle with vertices $A(1, 4)$, $B(-2, -1)$, and $C(3, -2)$. [3m]'
        },
        mistakes: {
          bm: [
            'Lupa mengulang koordinat bucu pertama $A(1, 4)$ pada lajur terakhir susunan tali kasut.',
            'Lupa tanda modulus $|\\dots|$ lalu meninggalkan jawapan luas bertanda negatif (atau tidak meletakkan faktor $\\frac{1}{2}$).',
            'Menambah dua jumlah pepenjuru ($15 + (-13)$) bukannya menolak ($15 - (-13)$).'
          ],
          en: [
            'Forgetting to repeat the first vertex $A(1, 4)$ at the end of the shoelace array.',
            'Omitting the absolute-value bars or the $\\frac{1}{2}$ factor, giving a negative or doubled area.',
            'Adding the two diagonal sums instead of subtracting them: $15 + (-13)$ instead of $15 - (-13)$.'
          ]
        },
        scheme: [
          {
            badge: 'K1',
            bm: 'Susun koordinat dan ulang titik pertama: $\\text{Luas} = \\frac{1}{2}\\left|\\begin{matrix} 1 & -2 & 3 & 1 \\\\ 4 & -1 & -2 & 4 \\end{matrix}\\right|$.',
            en: 'Arrange vertices and repeat the first point: $\\text{Area} = \\frac{1}{2}\\left|\\begin{matrix} 1 & -2 & 3 & 1 \\\\ 4 & -1 & -2 & 4 \\end{matrix}\\right|$.',
            why: {
              bm: 'Mengulang bucu pertama menutup lilitan poligon dalam rumus tali kasut.',
              en: 'Repeating the starting vertex closes the polygon loop in the shoelace determinant.'
            }
          },
          {
            badge: 'K1',
            bm: 'Kira hasil darab pepenjuru ke bawah dan ke atas: ke bawah $= 1(-1) + (-2)(-2) + 3(4) = -1 + 4 + 12 = 15$; ke atas $= 4(-2) + (-1)(3) + (-2)(1) = -8 - 3 - 2 = -13$.',
            en: 'Compute downward and upward diagonal sums: down $= 1(-1) + (-2)(-2) + 3(4) = -1 + 4 + 12 = 15$; up $= 4(-2) + (-1)(3) + (-2)(1) = -8 - 3 - 2 = -13$.',
            why: {
              bm: 'Kira setiap hasil darab dengan teliti terutamanya apabila kedua-dua nombor bertanda negatif.',
              en: 'Evaluate each signed product carefully, especially negative times negative.'
            }
          },
          {
            badge: 'K1',
            bm: 'Tolakkan kedua-dua jumlah dan ambil nilai mutlak: $\\text{Luas} = \\frac{1}{2}|15 - (-13)| = \\frac{1}{2}|15 + 13| = \\frac{1}{2}(28)$.',
            en: 'Subtract the two sums and take the modulus: $\\text{Area} = \\frac{1}{2}|15 - (-13)| = \\frac{1}{2}|15 + 13| = \\frac{1}{2}(28)$.',
            why: {
              bm: 'Tolak negatif bersamaan tambah ($15 - (-13) = 28$).',
              en: 'Subtracting $-13$ turns into $+13$.'
            }
          },
          {
            badge: 'N1',
            bm: '$\\text{Luas} = 14\\text{ unit}^2$.',
            en: '$\\text{Area} = 14\\text{ units}^2$.',
            why: {
              bm: 'Bahagi $28$ dengan $2$ dan nyatakan unit kuasa dua.',
              en: 'Halve $28$ to obtain the final area in square units.'
            }
          }
        ]
      },
      {
        code: '7.5', marks: 3,
        topic: { bm: 'Syarat Ketaksegarian / Segaris Tiga Titik', en: 'Collinearity of Three Points' },
        q: {
          bm: 'Diberi titik $P(1, k)$, $Q(3, 5)$, dan $R(7, 13)$ adalah segaris. Cari nilai $k$. [3m]',
          en: 'Given points $P(1, k)$, $Q(3, 5)$, and $R(7, 13)$ are collinear. Find the value of $k$. [3m]'
        },
        mistakes: {
          bm: [
            'Tersilap tanda semasa mengembangkan rumus luas sifar, sedangkan menyamakan kecerunan $m_{PQ} = m_{QR}$ jauh lebih pantas dan selamat.',
            'Terbalik susunan penolakan dalam rumus kecerunan: menulis $\\frac{5 - k}{1 - 3}$ (mencampur urutan $Q-P$ di atas dan $P-Q$ di bawah).',
            'Terkeliru pendaraban silang: menulis $5 - k = 2$ (lupa mendarab $2$ dengan penyebut $2$).'
          ],
          en: [
            'Making sign slips expanding a zero-area determinant instead of equating gradients $m_{PQ} = m_{QR}$.',
            'Reversing the subtraction order between numerator and denominator: writing $\\frac{5 - k}{1 - 3}$.',
            'Dropping the denominator $2$ and writing $5 - k = 2$ instead of $5 - k = 4$.'
          ]
        },
        scheme: [
          {
            badge: 'K1',
            bm: 'Kira kecerunan segmen yang diketahui sepenuhnya ($QR$): $m_{QR} = \\frac{13 - 5}{7 - 3} = \\frac{8}{4} = 2$.',
            en: 'Find the gradient of the fully known segment $QR$: $m_{QR} = \\frac{13 - 5}{7 - 3} = \\frac{8}{4} = 2$.',
            why: {
              bm: 'Tiga titik yang segaris terletak pada garis lurus yang sama, jadi kecerunannya adalah sama.',
              en: 'Collinear points lie on the same straight line, so every pair shares the same gradient.'
            }
          },
          {
            badge: 'K1',
            bm: 'Samakan kecerunan $PQ$ dengan $m_{QR}$: $m_{PQ} = \\frac{5 - k}{3 - 1} = 2 \\implies \\frac{5 - k}{2} = 2$.',
            en: 'Equate gradient $PQ$ to $m_{QR}$: $m_{PQ} = \\frac{5 - k}{3 - 1} = 2 \\implies \\frac{5 - k}{2} = 2$.',
            why: {
              bm: 'Pastikan urutan titik konsisten ($Q$ tolak $P$) untuk pengangka dan penyebut.',
              en: 'Keep the subtraction order consistent ($Q$ minus $P$) in both numerator and denominator.'
            }
          },
          {
            badge: 'K1',
            bm: 'Darab kedua-dua belah dengan $2$: $5 - k = 2(2) \\implies 5 - k = 4$.',
            en: 'Multiply both sides by $2$: $5 - k = 2(2) \\implies 5 - k = 4$.',
            why: {
              bm: 'Menghapuskan penyebut memudahkan pengasingan $k$.',
              en: 'Clearing the fraction isolates $5 - k$.'
            }
          },
          {
            badge: 'N1',
            bm: 'Selesaikan untuk $k$: $-k = 4 - 5 = -1 \\implies k = 1$.',
            en: 'Solve for $k$: $-k = 4 - 5 = -1 \\implies k = 1$.',
            why: {
              bm: 'Semak: $m_{PQ} = \\frac{5 - 1}{3 - 1} = \\frac{4}{2} = 2 = m_{QR}$.',
              en: 'Check: $m_{PQ} = \\frac{5 - 1}{3 - 1} = \\frac{4}{2} = 2 = m_{QR}$.'
            }
          }
        ]
      },
      {
        code: '7.6', marks: 3,
        topic: { bm: 'Persamaan Lokus Jarak Malar (Bulatan)', en: 'Equation of Constant-Distance Locus (Circle)' },
        q: {
          bm: 'Titik $P(x, y)$ bergerak dengan keadaan jaraknya dari titik tetap $A(2, -3)$ sentiasa $5\\text{ unit}$. Cari persamaan lokus bagi $P$. [3m]',
          en: 'Point $P(x, y)$ moves such that its distance from fixed point $A(2, -3)$ is always $5\\text{ units}$. Find the equation of the locus of $P$. [3m]'
        },
        mistakes: {
          bm: [
            'Lupa mengkuasaduakan jejari di sebelah kanan: menulis $(x - 2)^2 + (y + 3)^2 = 5$ bukannya $25$.',
            'Silap tanda pada koordinat negatif $-3$: menulis $(y - 3)^2$ bukannya $(y - (-3))^2 = (y + 3)^2$.',
            'Mengembangkan $(x - 2)^2$ sebagai $x^2 - 4$ atau $x^2 + 4$ (tertinggal sebutan tengah $-4x$).'
          ],
          en: [
            'Forgetting to square the radius on the RHS: writing $= 5$ instead of $= 25$.',
            'Sign error on $y_1 = -3$: writing $(y - 3)^2$ instead of $(y + 3)^2$.',
            'Expanding $(x - 2)^2$ as $x^2 + 4$, dropping the middle term $-4x$.'
          ]
        },
        scheme: [
          {
            badge: 'K1',
            bm: 'Gunakan rumus jarak $PA = 5 \\implies \\sqrt{(x - 2)^2 + (y - (-3))^2} = 5$.',
            en: 'Apply the distance formula $PA = 5 \\implies \\sqrt{(x - 2)^2 + (y - (-3))^2} = 5$.',
            why: {
              bm: 'Jarak dari $P(x, y)$ ke titik tetap $A(2, -3)$ sentiasa sama dengan $5$.',
              en: 'The distance from moving point $P(x, y)$ to $A(2, -3)$ is fixed at $5$.'
            }
          },
          {
            badge: 'K1',
            bm: 'Kuasaduakan kedua-dua belah: $(x - 2)^2 + (y + 3)^2 = 5^2 = 25$.',
            en: 'Square both sides: $(x - 2)^2 + (y + 3)^2 = 5^2 = 25$.',
            why: {
              bm: 'Mengkuasaduakan menghapuskan punca kuasa dua di kiri dan menjadikan $5$ kepada $25$ di kanan.',
              en: 'Squaring removes the square root and squares $5$ to $25$.'
            }
          },
          {
            badge: 'K1',
            bm: 'Kembangkan kedua-dua kurungan: $(x^2 - 4x + 4) + (y^2 + 6y + 9) = 25$.',
            en: 'Expand both brackets: $(x^2 - 4x + 4) + (y^2 + 6y + 9) = 25$.',
            why: {
              bm: 'Ingat identiti $(a \\pm b)^2 = a^2 \\pm 2ab + b^2$ supaya sebutan tengah tidak hilang.',
              en: 'Use $(a \\pm b)^2 = a^2 \\pm 2ab + b^2$ so the middle terms $-4x$ and $+6y$ are kept.'
            }
          },
          {
            badge: 'N1',
            bm: 'Kumpul pemalar ($4 + 9 - 25 = -12$): $x^2 + y^2 - 4x + 6y - 12 = 0$.',
            en: 'Collect constants ($4 + 9 - 25 = -12$): $x^2 + y^2 - 4x + 6y - 12 = 0$.',
            why: {
              bm: 'Susun kepada bentuk am persamaan bulatan $= 0$.',
              en: 'Write in general circle equation form equal to $0$.'
            }
          }
        ]
      },
      {
        code: '7.7', marks: 4,
        topic: { bm: 'Persamaan Lokus Nisbah Jarak $PA : PB = 2 : 1$', en: 'Locus of Distance Ratio $PA : PB = 2 : 1$' },
        q: {
          bm: 'Titik $P(x, y)$ bergerak dengan keadaan nisbah jaraknya dari $A(-1, 2)$ dan $B(2, -1)$ ialah $PA : PB = 2 : 1$. Cari persamaan lokus bagi $P$. [4m]',
          en: 'Point $P(x, y)$ moves such that its distances from $A(-1, 2)$ and $B(2, -1)$ satisfy $PA : PB = 2 : 1$. Find the locus of $P$. [4m]'
        },
        mistakes: {
          bm: [
            'Lupa mengkuasaduakan pemalar nisbah $2$ semasa membuang punca kuasa dua: menulis $PA^2 = 2PB^2$ bukannya $PA^2 = 4PB^2$!',
            'Terlupa mendarab faktor $4$ kepada **semua** sebutan di dalam kurungan $[(x - 2)^2 + (y + 1)^2]$, hanya mendarab sebutan pertama.',
            'Terbalik nisbah menjadi $2PA = PB$ bukannya $\\frac{PA}{PB} = \\frac{2}{1} \\implies PA = 2PB$.'
          ],
          en: [
            'Forgetting to square the ratio factor $2$ when squaring both sides: writing $PA^2 = 2PB^2$ instead of $PA^2 = 4PB^2$!',
            'Failing to distribute the factor $4$ to every term inside $[(x - 2)^2 + (y + 1)^2]$.',
            'Reversing the ratio as $2PA = PB$ instead of $\\frac{PA}{PB} = \\frac{2}{1} \\implies PA = 2PB$.'
          ]
        },
        scheme: [
          {
            badge: 'K1',
            bm: 'Tukar nisbah $\\frac{PA}{PB} = \\frac{2}{1}$ kepada $PA = 2PB$, kemudian kuasaduakan kedua-dua belah: $PA^2 = 4PB^2$.',
            en: 'Rewrite $\\frac{PA}{PB} = \\frac{2}{1}$ as $PA = 2PB$, then square both sides: $PA^2 = 4PB^2$.',
            why: {
              bm: 'Pemalar $2$ di luar punca kuasa dua turut dikuasaduakan menjadi $2^2 = 4$.',
              en: 'Squaring both sides turns the factor $2$ into $2^2 = 4$ while clearing the square roots.'
            }
          },
          {
            badge: 'K1',
            bm: 'Gantikan jarak daripada $A(-1, 2)$ dan $B(2, -1)$: $(x + 1)^2 + (y - 2)^2 = 4[(x - 2)^2 + (y + 1)^2]$.',
            en: 'Substitute the distance expressions from $A(-1, 2)$ and $B(2, -1)$: $(x + 1)^2 + (y - 2)^2 = 4[(x - 2)^2 + (y + 1)^2]$.',
            why: {
              bm: 'Pastikan tanda bertukar dengan betul: $x - (-1) = x + 1$ dan $y - (-1) = y + 1$.',
              en: 'Watch the signs carefully: $x - (-1) = x + 1$ and $y - (-1) = y + 1$.'
            }
          },
          {
            badge: 'K1',
            bm: 'Kembangkan setiap kuasa dua: $(x^2 + 2x + 1) + (y^2 - 4y + 4) = 4[(x^2 - 4x + 4) + (y^2 + 2y + 1)]$.',
            en: 'Expand each squared bracket: $(x^2 + 2x + 1) + (y^2 - 4y + 4) = 4[(x^2 - 4x + 4) + (y^2 + 2y + 1)]$.',
            why: {
              bm: 'Kembangkan kurungan dalaman dahulu sebelum mendarab dengan $4$ supaya kesilapan tanda dielakkan.',
              en: 'Expand the inner squares before distributing $4$ to prevent arithmetic slips.'
            }
          },
          {
            badge: 'K1',
            bm: 'Darab masuk $4$ dan kumpul sebutan: $x^2 + y^2 + 2x - 4y + 5 = 4x^2 + 4y^2 - 16x + 8y + 20 \\implies 3x^2 + 3y^2 - 18x + 12y + 15 = 0$.',
            en: 'Distribute $4$ and collect like terms: $x^2 + y^2 + 2x - 4y + 5 = 4x^2 + 4y^2 - 16x + 8y + 20 \\implies 3x^2 + 3y^2 - 18x + 12y + 15 = 0$.',
            why: {
              bm: 'Pindahkan semua sebutan ke sebelah kanan supaya pekali $x^2$ dan $y^2$ kekal positif.',
              en: 'Move all LHS terms to the RHS so the $x^2$ and $y^2$ coefficients stay positive.'
            }
          },
          {
            badge: 'N1',
            bm: 'Bahagikan semua sebutan dengan $3$: $x^2 + y^2 - 6x + 4y + 5 = 0$.',
            en: 'Divide every term by $3$: $x^2 + y^2 - 6x + 4y + 5 = 0$.',
            why: {
              bm: 'Ringkaskan kepada bentuk termudah apabila semua pekali boleh dibahagi dengan $3$.',
              en: 'Simplify to lowest integer coefficients by dividing through by the common factor $3$.'
            }
          }
        ]
      },
      {
        code: '7.8', marks: 3,
        topic: { bm: 'Titik Persilangan Dua Garis Lurus', en: 'Intersection Point of Two Straight Lines' },
        q: {
          bm: 'Cari koordinat titik persilangan bagi garis lurus $3x - 2y = 8$ dan $x + 4y = -2$. [3m]',
          en: 'Find the coordinates of the intersection of lines $3x - 2y = 8$ and $x + 4y = -2$. [3m]'
        },
        mistakes: {
          bm: [
            'Kecuaian tanda semasa menggantikan $x = -2 - 4y$ ke dalam $3x - 2y = 8$: menulis $3(-2 - 4y) = -6 + 12y$ atau $-6 - 4y$.',
            'Terlupa tanda negatif pada $14y$: mendapat $-14y = 14 \\implies y = 1$ bukannya $-1$.',
            'Menulis jawapan sebagai $(y, x) = (-1, 2)$ iaitu tertukar susunan koordinat.'
          ],
          en: [
            'Sign or distribution error expanding $3(-2 - 4y)$ as $-6 + 12y$ or $-6 - 4y$.',
            'Dropping the negative sign in $-14y = 14$, giving $y = 1$ instead of $-1$.',
            'Swapping the coordinate order as $(-1, 2)$ instead of $(x, y) = (2, -1)$.'
          ]
        },
        scheme: [
          {
            badge: 'K1',
            bm: 'Ungkapkan $x$ daripada persamaan kedua: $x + 4y = -2 \\implies x = -2 - 4y$.',
            en: 'Make $x$ the subject in the second equation: $x + 4y = -2 \\implies x = -2 - 4y$.',
            why: {
              bm: 'Pekali $x$ ialah $1$, jadi ia paling mudah diasingkan tanpa pecahan.',
              en: 'Since $x$ has coefficient $1$, isolating $x$ avoids fractions.'
            }
          },
          {
            badge: 'K1',
            bm: 'Ganti $x = -2 - 4y$ ke dalam $3x - 2y = 8$ dan kembangkan: $3(-2 - 4y) - 2y = 8 \\implies -6 - 12y - 2y = 8$.',
            en: 'Substitute $x = -2 - 4y$ into $3x - 2y = 8$ and expand: $3(-2 - 4y) - 2y = 8 \\implies -6 - 12y - 2y = 8$.',
            why: {
              bm: 'Darab $3$ ke kedua-dua sebutan dalam kurungan ($3 \\times (-4y) = -12y$).',
              en: 'Multiply $3$ by both terms inside the bracket.'
            }
          },
          {
            badge: 'K1',
            bm: 'Selesaikan untuk $y$: $-14y = 8 + 6 = 14 \\implies y = \\frac{14}{-14} = -1$.',
            en: 'Solve for $y$: $-14y = 8 + 6 = 14 \\implies y = \\frac{14}{-14} = -1$.',
            why: {
              bm: 'Pindahkan $-6$ ke kanan sebagai $+6$ sebelum membahagi dengan $-14$.',
              en: 'Move $-6$ to the RHS as $+6$ before dividing by $-14$.'
            }
          },
          {
            badge: 'N1',
            bm: 'Ganti $y = -1$ ke dalam $x = -2 - 4y$: $x = -2 - 4(-1) = -2 + 4 = 2$. Titik persilangan ialah $(2, -1)$.',
            en: 'Substitute $y = -1$ into $x = -2 - 4y$: $x = -2 - 4(-1) = -2 + 4 = 2$. Intersection point is $(2, -1)$.',
            why: {
              bm: 'Sentiasa susun jawapan dalam bentuk $(x, y)$ dan semak: $3(2) - 2(-1) = 8$.',
              en: 'Always write $(x, y)$ in order and verify: $3(2) - 2(-1) = 8$.'
            }
          }
        ]
      },
      {
        code: '7.9', marks: 4,
        topic: { bm: 'Jarak Terpendek dari Titik ke Garis Lurus', en: 'Shortest Distance from a Point to a Line' },
        q: {
          bm: 'Cari jarak terpendek dari titik $A(3, 5)$ ke garis lurus $y = 2x - 6$. [4m]',
          en: 'Find the shortest distance from point $A(3, 5)$ to the line $y = 2x - 6$. [4m]'
        },
        mistakes: {
          bm: [
            'Mengira jarak ke pintasan-$y$ $(0, -6)$ bukannya mencari kaki serenjang pada garis $y = 2x - 6$.',
            'Menggunakan kecerunan selari $m = 2$ dan bukannya kecerunan serenjang $m_\\perp = -\\frac{1}{2}$ untuk garis melalui $A(3, 5)$.',
            'Tersilap tanda semasa menyelesaikan persamaan serentak atau memasukkan $(0, 0)$ dalam rumus jarak.'
          ],
          en: [
            'Computing distance to $(0, -6)$ instead of finding the foot of the perpendicular on $y = 2x - 6$.',
            'Using the parallel gradient $2$ instead of the perpendicular gradient $-\\frac{1}{2}$ for the line through $A(3, 5)$.',
            'Sign or arithmetic slips when solving for the intersection $(5, 4)$ or in the distance formula.'
          ]
        },
        scheme: [
          {
            badge: 'K1',
            bm: 'Garis $y = 2x - 6$ mempunyai $m_1 = 2$, maka garis serenjang melalui $A(3, 5)$ berkecerunan $m_2 = -\\frac{1}{2}$: $y - 5 = -\\frac{1}{2}(x - 3) \\implies 2y - 10 = -x + 3 \\implies x + 2y = 13$.',
            en: 'Line $y = 2x - 6$ has $m_1 = 2$, so the perpendicular line through $A(3, 5)$ has $m_2 = -\\frac{1}{2}$: $y - 5 = -\\frac{1}{2}(x - 3) \\implies 2y - 10 = -x + 3 \\implies x + 2y = 13$.',
            why: {
              bm: 'Jarak terpendek dari satu titik ke garis sentiasa diukur secara berserenjang ($90^\\circ$) kepada garis itu.',
              en: 'The shortest distance from a point to a line always meets the line at $90^\\circ$.'
            }
          },
          {
            badge: 'K1',
            bm: 'Cari kaki serenjang dengan menyilangkan $x + 2y = 13$ dan $y = 2x - 6$: $x + 2(2x - 6) = 13 \\implies x + 4x - 12 = 13 \\implies 5x = 25 \\implies x = 5$.',
            en: 'Find the foot of the perpendicular by solving $x + 2y = 13$ and $y = 2x - 6$: $x + 2(2x - 6) = 13 \\implies x + 4x - 12 = 13 \\implies 5x = 25 \\implies x = 5$.',
            why: {
              bm: 'Kaki serenjang ialah titik persilangan antara garis asal dengan garis serenjang melalui $A$.',
              en: 'The foot of the perpendicular is the intersection of the given line and the perpendicular line through $A$.'
            }
          },
          {
            badge: 'K1',
            bm: 'Cari koordinat-$y$: $y = 2(5) - 6 = 4$, maka kaki serenjang ialah $F(5, 4)$.',
            en: 'Find the $y$-coordinate: $y = 2(5) - 6 = 4$, giving foot $F(5, 4)$.',
            why: {
              bm: 'Kita memerlukan kedua-dua koordinat titik $F$ untuk mengira panjang segmen $AF$.',
              en: 'Both coordinates of $F$ are required to compute the distance $AF$.'
            }
          },
          {
            badge: 'N1',
            bm: 'Hitung jarak $AF$: $d = \\sqrt{(5 - 3)^2 + (4 - 5)^2} = \\sqrt{2^2 + (-1)^2} = \\sqrt{5} \\approx 2.236\\text{ unit}$.',
            en: 'Calculate distance $AF$: $d = \\sqrt{(5 - 3)^2 + (4 - 5)^2} = \\sqrt{2^2 + (-1)^2} = \\sqrt{5} \\approx 2.236\\text{ units}$.',
            why: {
              bm: 'Gunakan rumus jarak antara dua titik $A(3, 5)$ dan $F(5, 4)$.',
              en: 'Apply the two-point distance formula between $A(3, 5)$ and $F(5, 4)$.'
            }
          }
        ]
      },
      {
        code: '7.10', marks: 4,
        topic: { bm: 'Luas Poligon Berskala Sebenar ($\\text{m}^2$)', en: 'Scaled Polygon Area in Real Units ($\\text{m}^2$)' },
        q: {
          bm: 'Pelan sebuah taman mempunyai bucu-bucu $P(2, 1)$, $Q(8, 3)$, $R(6, 7)$, dan $S(0, 5)$ mengikut susunan lawan jam. Jika $1\\text{ unit}$ pada paksi mewakili $10\\text{ m}$, hitung luas sebenar taman dalam $\\text{m}^2$. [4m]',
          en: 'A park plan has vertices $P(2, 1)$, $Q(8, 3)$, $R(6, 7)$, and $S(0, 5)$ in anticlockwise order. Given $1\\text{ unit} = 10\\text{ m}$, find the actual park area in $\\text{m}^2$. [4m]'
        },
        mistakes: {
          bm: [
            'Mendarab luas unit grid dengan faktor skala linear $10$ sahaja dan bukannya faktor skala luas $10^2 = 100$!',
            'Lupa mengulang titik awal $P(2, 1)$ di penghujung jadual tali kasut untuk poligon 4 bucu.',
            'Mengubah susunan bucu sehingga sisi poligon bersilang (bukan mengikut tertib lawan jam/ikut jam).'
          ],
          en: [
            'Multiplying the grid area by the linear scale $10$ instead of the area scale factor $10^2 = 100$!',
            'Forgetting to repeat $P(2, 1)$ at the end of the 4-vertex shoelace table.',
            'Reordering the vertices out of anticlockwise sequence, causing sides to cross.'
          ]
        },
        scheme: [
          {
            badge: 'K1',
            bm: 'Susun 4 bucu lawan jam dan ulang $P(2, 1)$: $\\text{Luas}_{\\text{grid}} = \\frac{1}{2}\\left|\\begin{matrix} 2 & 8 & 6 & 0 & 2 \\\\ 1 & 3 & 7 & 5 & 1 \\end{matrix}\\right|$.',
            en: 'Arrange the 4 vertices anticlockwise and repeat $P(2, 1)$: $\\text{Area}_{\\text{grid}} = \\frac{1}{2}\\left|\\begin{matrix} 2 & 8 & 6 & 0 & 2 \\\\ 1 & 3 & 7 & 5 & 1 \\end{matrix}\\right|$.',
            why: {
              bm: 'Rumus tali kasut hanya tepat jika bucu disusun mengikut tertib mengelilingi poligon dan titik mula diulang.',
              en: 'The shoelace formula requires vertices in perimeter order with the starting point repeated.'
            }
          },
          {
            badge: 'K1',
            bm: 'Kira jumlah pepenjuru: ke bawah $= 2(3) + 8(7) + 6(5) + 0(1) = 6 + 56 + 30 + 0 = 92$; ke atas $= 1(8) + 3(6) + 7(0) + 5(2) = 8 + 18 + 0 + 10 = 36$.',
            en: 'Compute diagonal sums: down $= 2(3) + 8(7) + 6(5) + 0(1) = 6 + 56 + 30 + 0 = 92$; up $= 1(8) + 3(6) + 7(0) + 5(2) = 8 + 18 + 0 + 10 = 36$.',
            why: {
              bm: 'Darab silang setiap pasangan lajur bersebelahan dan jumlahkan secara berasingan.',
              en: 'Sum the downward and upward adjacent products separately.'
            }
          },
          {
            badge: 'K1',
            bm: 'Hitung luas dalam unit grid: $\\text{Luas}_{\\text{grid}} = \\frac{1}{2}|92 - 36| = \\frac{1}{2}(56) = 28\\text{ unit}^2$.',
            en: 'Compute the grid area: $\\text{Area}_{\\text{grid}} = \\frac{1}{2}|92 - 36| = \\frac{1}{2}(56) = 28\\text{ units}^2$.',
            why: {
              bm: 'Ini ialah luas pada kertas graf sebelum penukaran skala kepada meter persegi.',
              en: 'This gives the area in grid squares before converting to real square metres.'
            }
          },
          {
            badge: 'N1',
            bm: 'Oleh sebab $1\\text{ unit} = 10\\text{ m} \\implies 1\\text{ unit}^2 = 10^2 = 100\\text{ m}^2$: luas sebenar $= 28 \\times 100 = 2800\\text{ m}^2$.',
            en: 'Since $1\\text{ unit} = 10\\text{ m} \\implies 1\\text{ unit}^2 = 10^2 = 100\\text{ m}^2$: actual area $= 28 \\times 100 = 2800\\text{ m}^2$.',
            why: {
              bm: 'Luas adalah dua dimensi (panjang $\\times$ lebar), jadi faktor skala $10$ mesti dikuasaduakan menjadi $100$.',
              en: 'Area is 2-dimensional (length $\\times$ width), so the linear scale $10$ must be squared to $100$.'
            }
          }
        ]
      }
    ],

    // =========================================================================
    // TINGKATAN 4 BAB 8: VEKTOR (10 SOALAN)
    // =========================================================================
    'f4-c8': [
      {
        code: '8.1', marks: 3,
        topic: { bm: 'Magnitud dan Vektor Unit', en: 'Magnitude & Unit Vector' },
        q: {
          bm: 'Diberi vektor $\\mathbf{a} = 6\\mathbf{i} - 8\\mathbf{j}$, cari magnitud $|\\mathbf{a}|$ dan vektor unit dalam arah $\\mathbf{a}$. [3m]',
          en: 'Given vector $\\mathbf{a} = 6\\mathbf{i} - 8\\mathbf{j}$, find the magnitude $|\\mathbf{a}|$ and the unit vector in the direction of $\\mathbf{a}$. [3m]'
        },
        mistakes: {
          bm: [
            'Menekan kalkulator $-8^2 = -64$ tanpa kurungan $(-8)^2 = +64$ di bawah punca kuasa dua, lalu mendapat $\\sqrt{36 - 64}$.',
            'Terlupa mengambil punca kuasa dua dan membahagi vektor dengan $100$ bukannya $10$.',
            'Menukar tanda komponen $-8\\mathbf{j}$ kepada $+8\\mathbf{j}$ semasa mengira vektor unit (arah vektor unit mesti sama dengan $\\mathbf{a}$).'
          ],
          en: [
            'Typing $-8^2 = -64$ without brackets instead of $(-8)^2 = +64$ inside the square root.',
            'Forgetting the square root and dividing the vector by $100$ instead of $10$.',
            'Changing $-8\\mathbf{j}$ to $+8\\mathbf{j}$ in the unit vector (a unit vector in the direction of $\\mathbf{a}$ keeps $\\mathbf{a}$\'s signs).'
          ]
        },
        scheme: [
          {
            badge: 'N1',
            bm: 'Kira magnitud menggunakan Teorem Pythagoras: $|\\mathbf{a}| = \\sqrt{6^2 + (-8)^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10$.',
            en: 'Compute magnitude using Pythagoras\' theorem: $|\\mathbf{a}| = \\sqrt{6^2 + (-8)^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10$.',
            why: {
              bm: 'Magnitud sentiasa positif; kurungkan nombor negatif sebelum mengkuasadua.',
              en: 'Magnitude is always non-negative; bracket negative components before squaring.'
            }
          },
          {
            badge: 'K1',
            bm: 'Gunakan rumus vektor unit $\\hat{\\mathbf{a}} = \\frac{\\mathbf{a}}{|\\mathbf{a}|}$: $\\hat{\\mathbf{a}} = \\frac{6\\mathbf{i} - 8\\mathbf{j}}{10} = \\frac{6}{10}\\mathbf{i} - \\frac{8}{10}\\mathbf{j}$.',
            en: 'Apply the unit vector formula $\\hat{\\mathbf{a}} = \\frac{\\mathbf{a}}{|\\mathbf{a}|}$: $\\hat{\\mathbf{a}} = \\frac{6\\mathbf{i} - 8\\mathbf{j}}{10} = \\frac{6}{10}\\mathbf{i} - \\frac{8}{10}\\mathbf{j}$.',
            why: {
              bm: 'Membahagi vektor dengan panjangnya mengecilkan magnitud kepada $1$ tanpa mengubah arah.',
              en: 'Dividing a vector by its length scales its magnitude to $1$ while keeping its direction.'
            }
          },
          {
            badge: 'N1',
            bm: 'Permudahkan pecahan: $\\hat{\\mathbf{a}} = \\frac{3}{5}\\mathbf{i} - \\frac{4}{5}\\mathbf{j}$ (atau $0.6\\mathbf{i} - 0.8\\mathbf{j}$).',
            en: 'Simplify the fractions: $\\hat{\\mathbf{a}} = \\frac{3}{5}\\mathbf{i} - \\frac{4}{5}\\mathbf{j}$ (or $0.6\\mathbf{i} - 0.8\\mathbf{j}$).',
            why: {
              bm: 'Semak: $\\sqrt{(0.6)^2 + (-0.8)^2} = \\sqrt{0.36 + 0.64} = 1$.',
              en: 'Verify: $\\sqrt{(0.6)^2 + (-0.8)^2} = \\sqrt{0.36 + 0.64} = 1$.'
            }
          }
        ]
      },
      {
        code: '8.2', marks: 3,
        topic: { bm: 'Syarat Dua Vektor Selari', en: 'Condition for Two Parallel Vectors' },
        q: {
          bm: 'Diberi vektor $\\mathbf{u} = 4\\mathbf{i} + k\\mathbf{j}$ dan $\\mathbf{v} = -6\\mathbf{i} + 9\\mathbf{j}$ adalah selari. Cari nilai pemalar $k$. [3m]',
          en: 'Given vectors $\\mathbf{u} = 4\\mathbf{i} + k\\mathbf{j}$ and $\\mathbf{v} = -6\\mathbf{i} + 9\\mathbf{j}$ are parallel. Find constant $k$. [3m]'
        },
        mistakes: {
          bm: [
            'Menganggap vektor selari bermaksud magnitud sama ($\\sqrt{4^2 + k^2} = \\sqrt{(-6)^2 + 9^2}$), yang memberi jawapan salah tanda.',
            'Tersilap tanda apabila membandingkan perkadaran komponen: menulis $\\frac{4}{6} = \\frac{k}{9} \\implies k = 6$ (hilang tanda negatif pada $-6$).',
            'Menyongsangkan nisbah sebelah sahaja: menulis $\\frac{4}{-6} = \\frac{9}{k}$.'
          ],
          en: [
            'Assuming parallel vectors must have equal magnitudes instead of being scalar multiples.',
            'Dropping the minus sign on $-6$ when equating component ratios, getting $k = 6$ instead of $-6$.',
            'Inverting one side of the ratio: writing $\\frac{4}{-6} = \\frac{9}{k}$.'
          ]
        },
        scheme: [
          {
            badge: 'K1',
            bm: 'Oleh sebab $\\mathbf{u}$ selari dengan $\\mathbf{v}$, maka $\\mathbf{u} = \\lambda\\mathbf{v}$: $4\\mathbf{i} + k\\mathbf{j} = \\lambda(-6\\mathbf{i} + 9\\mathbf{j}) = -6\\lambda\\mathbf{i} + 9\\lambda\\mathbf{j}$.',
            en: 'Since $\\mathbf{u}$ is parallel to $\\mathbf{v}$, $\\mathbf{u} = \\lambda\\mathbf{v}$: $4\\mathbf{i} + k\\mathbf{j} = \\lambda(-6\\mathbf{i} + 9\\mathbf{j}) = -6\\lambda\\mathbf{i} + 9\\lambda\\mathbf{j}$.',
            why: {
              bm: 'Dua vektor selari sentiasa merupakan gandaan skalar antara satu sama lain.',
              en: 'Two parallel vectors are always scalar multiples of each other.'
            }
          },
          {
            badge: 'K1',
            bm: 'Bandingkan pekali $\\mathbf{i}$ untuk mencari $\\lambda$: $4 = -6\\lambda \\implies \\lambda = \\frac{4}{-6} = -\\frac{2}{3}$.',
            en: 'Equate the $\\mathbf{i}$-components to find $\\lambda$: $4 = -6\\lambda \\implies \\lambda = \\frac{4}{-6} = -\\frac{2}{3}$.',
            why: {
              bm: 'Komponen $\\mathbf{i}$ dan $\\mathbf{j}$ adalah berserenjang dan bebas, maka pekalinya boleh disamakan secara berasingan.',
              en: 'Orthogonal $\\mathbf{i}$ and $\\mathbf{j}$ components can be equated independently.'
            }
          },
          {
            badge: 'N1',
            bm: 'Bandingkan pekali $\\mathbf{j}$: $k = 9\\lambda = 9\\left(-\\frac{2}{3}\\right) = -6$.',
            en: 'Equate the $\\mathbf{j}$-components: $k = 9\\lambda = 9\\left(-\\frac{2}{3}\\right) = -6$.',
            why: {
              bm: 'Gantikan $\\lambda = -\\frac{2}{3}$; tanda negatif bermaksud $\\mathbf{u}$ dan $\\mathbf{v}$ berlawanan arah tetapi masih selari.',
              en: 'Substituting $\\lambda = -\\frac{2}{3}$ gives $k = -6$ (opposite direction, still parallel).'
            }
          }
        ]
      },
      {
        code: '8.3', marks: 3,
        topic: { bm: 'Membuktikan Tiga Titik Segaris Menggunakan Vektor', en: 'Proving Collinearity Using Vectors' },
        q: {
          bm: 'Diberi vektor kedudukan $\\vec{OA} = 2\\mathbf{a} + \\mathbf{b}$, $\\vec{OB} = 5\\mathbf{a} + 4\\mathbf{b}$, dan $\\vec{OC} = 11\\mathbf{a} + 10\\mathbf{b}$. Tunjukkan bahawa titik $A$, $B$, dan $C$ adalah segaris. [3m]',
          en: 'Given position vectors $\\vec{OA} = 2\\mathbf{a} + \\mathbf{b}$, $\\vec{OB} = 5\\mathbf{a} + 4\\mathbf{b}$, and $\\vec{OC} = 11\\mathbf{a} + 10\\mathbf{b}$. Show that $A$, $B$, and $C$ are collinear. [3m]'
        },
        mistakes: {
          bm: [
            'Menambah $\\vec{OA} + \\vec{OB}$ untuk mencari $\\vec{AB}$ bukannya $\\vec{OB} - \\vec{OA}$ (peraturan: hujung tolak pangkal).',
            'Tersilap tanda apabila menolak kurungan: menulis $(5\\mathbf{a} + 4\\mathbf{b}) - (2\\mathbf{a} + \\mathbf{b}) = 3\\mathbf{a} + 5\\mathbf{b}$.',
            'Hanya menunjukkan $\\vec{BC} = 2\\vec{AB}$ tanpa menyatakan **titik sepunya $B$** (tanpa titik sepunya, vektor hanya terbukti selari, bukan segaris!).'
          ],
          en: [
            'Adding $\\vec{OA} + \\vec{OB}$ instead of subtracting $\\vec{OB} - \\vec{OA}$ (tail-to-tip rule: end minus start).',
            'Sign error expanding $-(2\\mathbf{a} + \\mathbf{b})$ as $-2\\mathbf{a} + \\mathbf{b}$, getting $3\\mathbf{a} + 5\\mathbf{b}$.',
            'Stating only $\\vec{BC} = 2\\vec{AB}$ without mentioning the **common point $B$** (parallel alone does not prove collinearity).'
          ]
        },
        scheme: [
          {
            badge: 'K1',
            bm: 'Cari $\\vec{AB} = \\vec{OB} - \\vec{OA}$: $\\vec{AB} = (5\\mathbf{a} + 4\\mathbf{b}) - (2\\mathbf{a} + \\mathbf{b}) = 3\\mathbf{a} + 3\\mathbf{b} = 3(\\mathbf{a} + \\mathbf{b})$.',
            en: 'Find $\\vec{AB} = \\vec{OB} - \\vec{OA}$: $\\vec{AB} = (5\\mathbf{a} + 4\\mathbf{b}) - (2\\mathbf{a} + \\mathbf{b}) = 3\\mathbf{a} + 3\\mathbf{b} = 3(\\mathbf{a} + \\mathbf{b})$.',
            why: {
              bm: 'Untuk bergerak dari $A$ ke $B$ melalui asalan $O$, guna $\\vec{AO} + \\vec{OB} = \\vec{OB} - \\vec{OA}$, kemudian faktorkan $3$.',
              en: 'Going from $A$ to $B$ via $O$ gives $\\vec{OB} - \\vec{OA}$; factoring out $3$ reveals the base direction.'
            }
          },
          {
            badge: 'K1',
            bm: 'Cari $\\vec{BC} = \\vec{OC} - \\vec{OB}$: $\\vec{BC} = (11\\mathbf{a} + 10\\mathbf{b}) - (5\\mathbf{a} + 4\\mathbf{b}) = 6\\mathbf{a} + 6\\mathbf{b} = 6(\\mathbf{a} + \\mathbf{b})$.',
            en: 'Find $\\vec{BC} = \\vec{OC} - \\vec{OB}$: $\\vec{BC} = (11\\mathbf{a} + 10\\mathbf{b}) - (5\\mathbf{a} + 4\\mathbf{b}) = 6\\mathbf{a} + 6\\mathbf{b} = 6(\\mathbf{a} + \\mathbf{b})$.',
            why: {
              bm: 'Pilih pasangan kedua yang berkongsi titik $B$ supaya lebih mudah membuktikan segaris.',
              en: 'Choose a second segment sharing point $B$ so collinearity follows directly.'
            }
          },
          {
            badge: 'K1',
            bm: 'Bandingkan kedua-dua vektor: $\\vec{BC} = 6(\\mathbf{a} + \\mathbf{b}) = 2[3(\\mathbf{a} + \\mathbf{b})] = 2\\vec{AB}$.',
            en: 'Compare the two vectors: $\\vec{BC} = 6(\\mathbf{a} + \\mathbf{b}) = 2[3(\\mathbf{a} + \\mathbf{b})] = 2\\vec{AB}$.',
            why: {
              bm: 'Hubungan gandaan skalar $\\vec{BC} = 2\\vec{AB}$ membuktikan $\\vec{BC}$ dan $\\vec{AB}$ adalah selari.',
              en: 'Expressing $\\vec{BC}$ as a scalar multiple $2\\vec{AB}$ proves the segments are parallel.'
            }
          },
          {
            badge: 'N1',
            bm: 'Oleh sebab $\\vec{BC} = 2\\vec{AB}$ (selari) dan kedua-duanya berkongsi titik sepunya $B$, maka $A$, $B$, dan $C$ adalah segaris.',
            en: 'Since $\\vec{BC} = 2\\vec{AB}$ (parallel) and both share the common point $B$, points $A$, $B$, and $C$ are collinear.',
            why: {
              bm: 'Kedua-dua syarat (selari + titik sepunya) wajib ditulis untuk markah kesimpulan N1.',
              en: 'Both conditions (parallel + common point) must be stated explicitly for the conclusion mark.'
            }
          }
        ]
      },
      {
        code: '8.4', marks: 4,
        topic: { bm: 'Hukum Segi Tiga & Pembahagian Nisbah Vektor', en: 'Triangle Law & Ratio Division of Vectors' },
        q: {
          bm: 'Dalam $\\triangle OAB$, $\\vec{OA} = \\mathbf{a}$ dan $\\vec{OB} = \\mathbf{b}$. Titik $C$ terletak pada garis lurus $AB$ dengan keadaan $AC : CB = 1 : 2$. Ungkapkan $\\vec{OC}$ dalam sebutan $\\mathbf{a}$ dan $\\mathbf{b}$. [4m]',
          en: 'In $\\triangle OAB$, $\\vec{OA} = \\mathbf{a}$ and $\\vec{OB} = \\mathbf{b}$. Point $C$ lies on $AB$ such that $AC : CB = 1 : 2$. Express $\\vec{OC}$ in terms of $\\mathbf{a}$ and $\\mathbf{b}$. [4m]'
        },
        mistakes: {
          bm: [
            'Menulis $\\vec{AC} = \\frac{1}{2}\\vec{AB}$ sedangkan jumlah bahagian penuh ialah $1 + 2 = 3$, maka $\\vec{AC} = \\frac{1}{3}\\vec{AB}$.',
            'Tersilap arah $\\vec{AB} = \\mathbf{a} - \\mathbf{b}$ bukannya $\\mathbf{b} - \\mathbf{a}$ ($\\vec{OB} - \\vec{OA}$).',
            'Tersilap mengumpul sebutan $\\mathbf{a}$: menulis $\\mathbf{a} + \\frac{1}{3}(\\mathbf{b} - \\mathbf{a}) = \\frac{4}{3}\\mathbf{a} + \\frac{1}{3}\\mathbf{b}$ bukannya $\\frac{2}{3}\\mathbf{a} + \\frac{1}{3}\\mathbf{b}$.'
          ],
          en: [
            'Writing $\\vec{AC} = \\frac{1}{2}\\vec{AB}$ instead of $\\frac{1}{1+2}\\vec{AB} = \\frac{1}{3}\\vec{AB}$.',
            'Getting the direction wrong as $\\vec{AB} = \\mathbf{a} - \\mathbf{b}$ instead of $\\mathbf{b} - \\mathbf{a}$.',
            'Collecting $\\mathbf{a}$-terms wrongly as $1 + \\frac{1}{3} = \\frac{4}{3}$ instead of $1 - \\frac{1}{3} = \\frac{2}{3}$.'
          ]
        },
        scheme: [
          {
            badge: 'K1',
            bm: 'Cari vektor $\\vec{AB}$ menggunakan Hukum Segi Tiga: $\\vec{AB} = \\vec{AO} + \\vec{OB} = -\\mathbf{a} + \\mathbf{b} = \\mathbf{b} - \\mathbf{a}$.',
            en: 'Find $\\vec{AB}$ using the Triangle Law: $\\vec{AB} = \\vec{AO} + \\vec{OB} = -\\mathbf{a} + \\mathbf{b} = \\mathbf{b} - \\mathbf{a}$.',
            why: {
              bm: 'Bergerak dari $A$ ke $O$ melawan anak panah $\\mathbf{a}$ (jadi $-\\mathbf{a}$), kemudian dari $O$ ke $B$ ($+\\mathbf{b}$).',
              en: 'Travelling $A \\to O$ goes against $\\mathbf{a}$ (giving $-\\mathbf{a}$), then $O \\to B$ adds $+\\mathbf{b}$.'
            }
          },
          {
            badge: 'K1',
            bm: 'Tukar nisbah $AC : CB = 1 : 2$ kepada pecahan daripada jumlah $1 + 2 = 3$: $\\vec{AC} = \\frac{1}{3}\\vec{AB} = \\frac{1}{3}(\\mathbf{b} - \\mathbf{a})$.',
            en: 'Convert ratio $AC : CB = 1 : 2$ into a fraction of $1 + 2 = 3$ parts: $\\vec{AC} = \\frac{1}{3}\\vec{AB} = \\frac{1}{3}(\\mathbf{b} - \\mathbf{a})$.',
            why: {
              bm: 'Panjang penuh $AB$ terbahagi kepada $3$ bahagian sama besar dan $AC$ mengambil $1$ bahagian.',
              en: 'The whole segment $AB$ has $3$ equal parts, and $AC$ is $1$ of those parts.'
            }
          },
          {
            badge: 'K1',
            bm: 'Sambungkan laluan ke $C$: $\\vec{OC} = \\vec{OA} + \\vec{AC} = \\mathbf{a} + \\frac{1}{3}(\\mathbf{b} - \\mathbf{a}) = \\mathbf{a} + \\frac{1}{3}\\mathbf{b} - \\frac{1}{3}\\mathbf{a}$.',
            en: 'Build the path to $C$: $\\vec{OC} = \\vec{OA} + \\vec{AC} = \\mathbf{a} + \\frac{1}{3}(\\mathbf{b} - \\mathbf{a}) = \\mathbf{a} + \\frac{1}{3}\\mathbf{b} - \\frac{1}{3}\\mathbf{a}$.',
            why: {
              bm: 'Kembangkan kurungan $\\frac{1}{3}(\\mathbf{b} - \\mathbf{a})$ supaya sebutan $\\mathbf{a}$ dapat dikumpulkan.',
              en: 'Expand $\\frac{1}{3}(\\mathbf{b} - \\mathbf{a})$ so the $\\mathbf{a}$-terms can be combined.'
            }
          },
          {
            badge: 'N1',
            bm: 'Kumpul sebutan serupa ($1 - \\frac{1}{3} = \\frac{2}{3}$): $\\vec{OC} = \\frac{2}{3}\\mathbf{a} + \\frac{1}{3}\\mathbf{b}$.',
            en: 'Collect like terms ($1 - \\frac{1}{3} = \\frac{2}{3}$): $\\vec{OC} = \\frac{2}{3}\\mathbf{a} + \\frac{1}{3}\\mathbf{b}$.',
            why: {
              bm: 'Semak logik: pemberat $\\frac{2}{3} + \\frac{1}{3} = 1$, dan $C$ lebih dekat kepada $A$ maka pekali $\\mathbf{a}$ lebih besar.',
              en: 'Sanity check: weights sum to $1$, and since $C$ is closer to $A$, $\\mathbf{a}$ has the larger weight.'
            }
          }
        ]
      },
      {
        code: '8.5', marks: 4,
        topic: { bm: 'Perbandingan Pekali Dua Vektor Tak Selari', en: 'Equating Coefficients of Non-Parallel Vectors' },
        q: {
          bm: 'Diberi vektor tak sifar $\\mathbf{x}$ dan $\\mathbf{y}$ adalah tidak selari. Jika $(2h - 1)\\mathbf{x} + 4\\mathbf{y} = 5\\mathbf{x} + (k + 2)\\mathbf{y}$, cari nilai pemalar $h$ dan $k$. [4m]',
          en: 'Non-zero vectors $\\mathbf{x}$ and $\\mathbf{y}$ are non-parallel. Given $(2h - 1)\\mathbf{x} + 4\\mathbf{y} = 5\\mathbf{x} + (k + 2)\\mathbf{y}$, find constants $h$ and $k$. [4m]'
        },
        mistakes: {
          bm: [
            'Mencampuradukkan pekali $\\mathbf{x}$ dan $\\mathbf{y}$ dalam satu persamaan tunggal bukannya menyamakan pekali sepadan secara berasingan.',
            'Terkeliru antara menyamakan dengan $0$ (apabila RHS $= \\mathbf{0}$) dengan menyamakan pekali kiri dan kanan apabila vektor tidak selari.',
            'Kecuaian algebra mudah: menulis $2h - 1 = 5 \\implies 2h = 4$ bukannya $2h = 6$.'
          ],
          en: [
            'Mixing $\\mathbf{x}$ and $\\mathbf{y}$ coefficients into one equation instead of equating corresponding components separately.',
            'Setting each coefficient to $0$ (which only applies when the RHS is $\\mathbf{0}$) instead of equating LHS to RHS coefficients.',
            'Arithmetic slip solving $2h - 1 = 5$ as $2h = 4$ instead of $2h = 6$.'
          ]
        },
        scheme: [
          {
            badge: 'K1',
            bm: 'Oleh sebab $\\mathbf{x}$ dan $\\mathbf{y}$ tak sifar dan tidak selari, samakan pekali $\\mathbf{x}$ dan $\\mathbf{y}$ secara berasingan: $2h - 1 = 5$ dan $4 = k + 2$.',
            en: 'Since $\\mathbf{x}$ and $\\mathbf{y}$ are non-zero and non-parallel, equate the $\\mathbf{x}$ and $\\mathbf{y}$ coefficients separately: $2h - 1 = 5$ and $4 = k + 2$.',
            why: {
              bm: 'Dua vektor tidak selari hanya boleh menghasilkan persamaan yang sama jika pekali masing-masing sepadan.',
              en: 'Non-parallel vectors are linearly independent, so corresponding coefficients must match.'
            }
          },
          {
            badge: 'K1',
            bm: 'Selesaikan persamaan pertama: $2h = 5 + 1 = 6 \\implies h = \\frac{6}{2}$. Selesaikan persamaan kedua: $k = 4 - 2$.',
            en: 'Solve the first equation: $2h = 5 + 1 = 6 \\implies h = \\frac{6}{2}$. Solve the second equation: $k = 4 - 2$.',
            why: {
              bm: 'Asingkan setiap pemboleh ubah dengan memindahkan pemalar ke sebelah yang satu lagi.',
              en: 'Isolate $h$ and $k$ using basic linear rearrangement.'
            }
          },
          {
            badge: 'N1',
            bm: '$h = 3$ dan $k = 2$.',
            en: '$h = 3$ and $k = 2$.',
            why: {
              bm: 'Semak dengan mengganti semula: $(2(3)-1)\\mathbf{x} + 4\\mathbf{y} = 5\\mathbf{x} + (2+2)\\mathbf{y}$.',
              en: 'Check by substitution: $5\\mathbf{x} + 4\\mathbf{y} = 5\\mathbf{x} + 4\\mathbf{y}$.'
            }
          }
        ]
      },
      {
        code: '8.6', marks: 4,
        topic: { bm: 'Halaju Paduan Bot & Arus Sungai', en: 'Resultant Velocity of a Boat in a Current' },
        q: {
          bm: 'Sebuah bot bergerak dengan halaju $\\mathbf{v}_b = (8\\mathbf{i} + 6\\mathbf{j})\\text{ m s}^{-1}$ merentasi sungai yang mempunyai halaju arus $\\mathbf{v}_a = (4\\mathbf{i} - 2\\mathbf{j})\\text{ m s}^{-1}$. Cari vektor halaju paduan bot dan laju sebenar bot. [4m]',
          en: 'A boat moves with velocity $\\mathbf{v}_b = (8\\mathbf{i} + 6\\mathbf{j})\\text{ m s}^{-1}$ in a river current $\\mathbf{v}_a = (4\\mathbf{i} - 2\\mathbf{j})\\text{ m s}^{-1}$. Find the resultant velocity vector and actual speed of the boat. [4m]'
        },
        mistakes: {
          bm: [
            'Keliru antara **halaju** (kuantiti vektor berarah $12\\mathbf{i} + 4\\mathbf{j}$) dengan **laju** (magnitud skalar $\\sqrt{160}$).',
            'Menolak halaju arus ($\\mathbf{v}_b - \\mathbf{v}_a$) bukannya menambah kedua-dua vektor halaju ($\\mathbf{v}_b + \\mathbf{v}_a$).',
            'Mengira magnitud masing-masing dahulu lalu menambah ($\\sqrt{8^2+6^2} + \\sqrt{4^2+(-2)^2} = 10 + 4.47$) bukannya mencari vektor paduan dahulu!'
          ],
          en: [
            'Confusing **velocity** (the vector $12\\mathbf{i} + 4\\mathbf{j}$) with **speed** (its scalar magnitude $\\sqrt{160}$).',
            'Subtracting the current vector ($\\mathbf{v}_b - \\mathbf{v}_a$) instead of adding the two velocities ($\\mathbf{v}_b + \\mathbf{v}_a$).',
            'Adding the individual speeds ($10 + \\sqrt{20}$) instead of finding the resultant vector first and then taking its magnitude.'
          ]
        },
        scheme: [
          {
            badge: 'K1',
            bm: 'Tambahkan vektor halaju bot dan arus sungai mengikut komponen: $\\mathbf{v} = \\mathbf{v}_b + \\mathbf{v}_a = (8\\mathbf{i} + 6\\mathbf{j}) + (4\\mathbf{i} - 2\\mathbf{j}) = (8 + 4)\\mathbf{i} + (6 - 2)\\mathbf{j}$.',
            en: 'Add the boat and river velocity vectors component-wise: $\\mathbf{v} = \\mathbf{v}_b + \\mathbf{v}_a = (8\\mathbf{i} + 6\\mathbf{j}) + (4\\mathbf{i} - 2\\mathbf{j}) = (8 + 4)\\mathbf{i} + (6 - 2)\\mathbf{j}$.',
            why: {
              bm: 'Arus sungai menolak bot bersama-sama dengan enjin bot, maka kesan gabungannya ialah hasil tambah vektor.',
              en: 'The river current pushes the boat simultaneously, so the net velocity is their vector sum.'
            }
          },
          {
            badge: 'N1',
            bm: 'Vektor halaju paduan ialah $\\mathbf{v} = (12\\mathbf{i} + 4\\mathbf{j})\\text{ m s}^{-1}$.',
            en: 'Resultant velocity vector is $\\mathbf{v} = (12\\mathbf{i} + 4\\mathbf{j})\\text{ m s}^{-1}$.',
            why: {
              bm: 'Halaju ialah vektor, jadi jawapannya mesti kekal dalam sebutan $\\mathbf{i}$ dan $\\mathbf{j}$ berserta unit.',
              en: 'Velocity is a vector quantity, so keep it in $\\mathbf{i}, \\mathbf{j}$ form with units.'
            }
          },
          {
            badge: 'K1',
            bm: 'Cari laju sebenar sebagai magnitud $\\mathbf{v}$: $|\\mathbf{v}| = \\sqrt{12^2 + 4^2} = \\sqrt{144 + 16} = \\sqrt{160}$.',
            en: 'Find the actual speed as the magnitude of $\\mathbf{v}$: $|\\mathbf{v}| = \\sqrt{12^2 + 4^2} = \\sqrt{144 + 16} = \\sqrt{160}$.',
            why: {
              bm: 'Laju ialah magnitud bagi halaju paduan yang dikira melalui Pythagoras.',
              en: 'Speed is the scalar length of the resultant velocity vector.'
            }
          },
          {
            badge: 'N1',
            bm: 'Laju sebenar bot $= \\sqrt{160} \\approx 12.65\\text{ m s}^{-1}$ (atau $4\\sqrt{10}\\text{ m s}^{-1}$).',
            en: 'Actual speed of the boat $= \\sqrt{160} \\approx 12.65\\text{ m s}^{-1}$ (or $4\\sqrt{10}\\text{ m s}^{-1}$).',
            why: {
              bm: 'Berikan jawapan kepada 4 angka bererti bersama unit $\\text{m s}^{-1}$.',
              en: 'Give the final speed to 4 significant figures with units.'
            }
          }
        ]
      },
      {
        code: '8.7', marks: 3,
        topic: { bm: 'Operasi Vektor Lajur dan Magnitud', en: 'Column Vector Arithmetic & Magnitude' },
        q: {
          bm: 'Diberi $\\mathbf{p} = \\binom{3}{-4}$ dan $\\mathbf{q} = \\binom{-1}{2}$, ungkapkan $2\\mathbf{p} - 3\\mathbf{q}$ sebagai vektor lajur dan hitung magnitudnya. [3m]',
          en: 'Given $\\mathbf{p} = \\binom{3}{-4}$ and $\\mathbf{q} = \\binom{-1}{2}$, express $2\\mathbf{p} - 3\\mathbf{q}$ as a column vector and find its magnitude. [3m]'
        },
        mistakes: {
          bm: [
            'Kecuaian tanda menolak nombor negatif pada baris atas: menulis $6 - 3 = 3$ bukannya $6 - (-3) = 9$.',
            'Kecuaian pada baris bawah: menulis $-8 - 6 = -2$ bukannya $-14$.',
            'Menulis $-14^2 = -196$ dalam kalkulator tanpa kurungan $(-14)^2 = +196$ semasa mengira magnitud.'
          ],
          en: [
            'Sign slip in the top row: writing $6 - 3 = 3$ instead of $6 - (-3) = 9$.',
            'Arithmetic slip in the bottom row: writing $-8 - 6 = -2$ instead of $-14$.',
            'Entering $-14^2 = -196$ without brackets instead of $(-14)^2 = +196$ in the magnitude root.'
          ]
        },
        scheme: [
          {
            badge: 'K1',
            bm: 'Darab skalar pada setiap komponen: $2\\binom{3}{-4} - 3\\binom{-1}{2} = \\binom{2(3)}{2(-4)} - \\binom{3(-1)}{3(2)} = \\binom{6}{-8} - \\binom{-3}{6}$.',
            en: 'Multiply each scalar into both components: $2\\binom{3}{-4} - 3\\binom{-1}{2} = \\binom{2(3)}{2(-4)} - \\binom{3(-1)}{3(2)} = \\binom{6}{-8} - \\binom{-3}{6}$.',
            why: {
              bm: 'Darabkan skalar $2$ dan $3$ dahulu ke atas komponen $x$ dan $y$ sebelum menolak.',
              en: 'Apply the scalar multipliers $2$ and $3$ to both rows before subtracting.'
            }
          },
          {
            badge: 'N1',
            bm: 'Tolak komponen sepadan: $\\binom{6 - (-3)}{-8 - 6} = \\binom{6 + 3}{-14} = \\binom{9}{-14}$.',
            en: 'Subtract corresponding components: $\\binom{6 - (-3)}{-8 - 6} = \\binom{6 + 3}{-14} = \\binom{9}{-14}$.',
            why: {
              bm: 'Menolak $-3$ bersamaan menambah $+3$; kekalkan bentuk vektor lajur seperti diminta.',
              en: 'Subtracting $-3$ becomes $+3$; leave the result as a column vector.'
            }
          },
          {
            badge: 'K1',
            bm: 'Kira magnitud vektor hasil: $\\sqrt{9^2 + (-14)^2} = \\sqrt{81 + 196} = \\sqrt{277}$.',
            en: 'Compute the magnitude: $\\sqrt{9^2 + (-14)^2} = \\sqrt{81 + 196} = \\sqrt{277}$.',
            why: {
              bm: 'Gunakan kurungan pada $(-14)^2$ supaya kuasaduanya menjadi $+196$.',
              en: 'Bracket $(-14)^2$ so the square is $+196$.'
            }
          },
          {
            badge: 'N1',
            bm: 'Magnitud $= \\sqrt{277} \\approx 16.64\\text{ unit}$.',
            en: 'Magnitude $= \\sqrt{277} \\approx 16.64\\text{ units}$.',
            why: {
              bm: 'Nilaikan $\\sqrt{277}$ kepada 4 angka bererti.',
              en: 'Evaluate $\\sqrt{277}$ to 4 significant figures.'
            }
          }
        ]
      },
      {
        code: '8.8', marks: 3,
        topic: { bm: 'Laluan Vektor Poligon Tertutup', en: 'Polygon Path Vector Addition' },
        q: {
          bm: 'Dalam sisi empat $PQRS$, diberi $\\vec{PQ} = \\mathbf{u}$, $\\vec{QR} = \\mathbf{v}$, dan $\\vec{PS} = \\mathbf{w}$. Ungkapkan $\\vec{SR}$ dalam sebutan $\\mathbf{u}$, $\\mathbf{v}$, dan $\\mathbf{w}$. [3m]',
          en: 'In quadrilateral $PQRS$, $\\vec{PQ} = \\mathbf{u}$, $\\vec{QR} = \\mathbf{v}$, and $\\vec{PS} = \\mathbf{w}$. Express $\\vec{SR}$ in terms of $\\mathbf{u}$, $\\mathbf{v}$, and $\\mathbf{w}$. [3m]'
        },
        mistakes: {
          bm: [
            'Tidak menukar tanda vektor songsang $\\vec{SP} = -\\vec{PS} = -\\mathbf{w}$ semasa membina rantaian dari $S$ ke $R$.',
            'Menulis rantaian yang terputus huruf tengahnya seperti $\\vec{SR} = \\vec{PS} + \\vec{PQ} + \\vec{QR}$ (huruf $S$ di hujung $\\vec{PS}$ tidak bersambung dengan $P$).',
            'Menyangka $\\vec{SR}$ sama dengan $\\vec{PQ} = \\mathbf{u}$ (salah kerana $PQRS$ bukan semestinya segi empat selari).'
          ],
          en: [
            'Failing to negate $\\vec{SP} = -\\vec{PS} = -\\mathbf{w}$ when travelling from $S$ to $P$.',
            'Writing a broken letter chain like $\\vec{PS} + \\vec{PQ} + \\vec{QR}$ where adjacent letters do not match.',
            'Assuming $\\vec{SR} = \\vec{PQ} = \\mathbf{u}$ even though $PQRS$ is a general quadrilateral, not a parallelogram.'
          ]
        },
        scheme: [
          {
            badge: 'K1',
            bm: 'Bina laluan vektor berantai bermula di $S$ dan berakhir di $R$: $\\vec{SR} = \\vec{SP} + \\vec{PQ} + \\vec{QR}$.',
            en: 'Construct a connected vector path starting at $S$ and ending at $R$: $\\vec{SR} = \\vec{SP} + \\vec{PQ} + \\vec{QR}$.',
            why: {
              bm: 'Periksa huruf penyambung: $S \\to P$, $P \\to Q$, $Q \\to R$ menghasilkan $\\vec{SR}$.',
              en: 'Check the domino chain: $S \\to P$, $P \\to Q$, $Q \\to R$ telescopes cleanly to $\\vec{SR}$.'
            }
          },
          {
            badge: 'K1',
            bm: 'Songsangkan $\\vec{PS} = \\mathbf{w}$ untuk mendapat $\\vec{SP} = -\\vec{PS} = -\\mathbf{w}$, lalu gantikan semua vektor: $\\vec{SR} = -\\mathbf{w} + \\mathbf{u} + \\mathbf{v}$.',
            en: 'Reverse $\\vec{PS} = \\mathbf{w}$ to get $\\vec{SP} = -\\vec{PS} = -\\mathbf{w}$, then substitute all vectors: $\\vec{SR} = -\\mathbf{w} + \\mathbf{u} + \\mathbf{v}$.',
            why: {
              bm: 'Mengikut arah bertentangan anak panah vektor menukarkan tanda positif kepada negatif.',
              en: 'Travelling opposite to a given vector arrow negates it.'
            }
          },
          {
            badge: 'N1',
            bm: 'Susun semula ungkapan: $\\vec{SR} = \\mathbf{u} + \\mathbf{v} - \\mathbf{w}$.',
            en: 'Rearrange cleanly: $\\vec{SR} = \\mathbf{u} + \\mathbf{v} - \\mathbf{w}$.',
            why: {
              bm: 'Penambahan vektor bersifat kalis tukar tertib, jadi sebutan positif boleh ditulis dahulu.',
              en: 'Vector addition is commutative, so writing positive terms first is neatest.'
            }
          }
        ]
      },
      {
        code: '8.9', marks: 3,
        topic: { bm: 'Membina Vektor Selari Bermagnitud Tertentu & Arah Bertentangan', en: 'Constructing an Opposite Parallel Vector of Given Magnitude' },
        q: {
          bm: 'Diberi $\\mathbf{a} = 3\\mathbf{i} + 4\\mathbf{j}$. Cari vektor $\\mathbf{b}$ yang selari dengan $\\mathbf{a}$, mempunyai magnitud $25\\text{ unit}$, dan bertentangan arah dengan $\\mathbf{a}$. [3m]',
          en: 'Given $\\mathbf{a} = 3\\mathbf{i} + 4\\mathbf{j}$, find vector $\\mathbf{b}$ parallel to $\\mathbf{a}$ with magnitude $25\\text{ units}$ in the opposite direction. [3m]'
        },
        mistakes: {
          bm: [
            'Mendarab $\\mathbf{a}$ terus dengan $25$ tanpa membahagikannya dengan magnitud asal $|\\mathbf{a}| = 5$, menghasilkan magnitud $125$ bukannya $25$.',
            'Tertinggal tanda negatif bagi syarat "bertentangan arah" (menulis $15\\mathbf{i} + 20\\mathbf{j}$).',
            'Mendarab komponen dengan $25$ tetapi lupa tanda negatif hanya pada satu komponen ($-15\\mathbf{i} + 20\\mathbf{j}$).'
          ],
          en: [
            'Multiplying $\\mathbf{a}$ directly by $25$ without dividing by $|\\mathbf{a}| = 5$, giving magnitude $125$ instead of $25$.',
            'Omitting the minus sign required for the opposite direction (writing $15\\mathbf{i} + 20\\mathbf{j}$).',
            'Negating only the $\\mathbf{i}$-component and leaving $+20\\mathbf{j}$ positive.'
          ]
        },
        scheme: [
          {
            badge: 'K1',
            bm: 'Cari magnitud vektor $\\mathbf{a}$: $|\\mathbf{a}| = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$.',
            en: 'Find the magnitude of $\\mathbf{a}$: $|\\mathbf{a}| = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$.',
            why: {
              bm: 'Kita mesti tahu panjang asal $\\mathbf{a}$ supaya dapat mengecilkannya kepada panjang $1$ unit dahulu.',
              en: 'We need the original length of $\\mathbf{a}$ to normalize it to length $1$ first.'
            }
          },
          {
            badge: 'K1',
            bm: 'Dapatkan vektor unit dalam arah $\\mathbf{a}$: $\\hat{\\mathbf{a}} = \\frac{\\mathbf{a}}{|\\mathbf{a}|} = \\frac{3\\mathbf{i} + 4\\mathbf{j}}{5}$.',
            en: 'Find the unit vector in the direction of $\\mathbf{a}$: $\\hat{\\mathbf{a}} = \\frac{\\mathbf{a}}{|\\mathbf{a}|} = \\frac{3\\mathbf{i} + 4\\mathbf{j}}{5}$.',
            why: {
              bm: 'Vektor unit mempunyai panjang $1$ dan sedia diskalakan kepada sebarang magnitud baharu.',
              en: 'The unit vector has length $1$, making it ready to scale to any target magnitude.'
            }
          },
          {
            badge: 'K1',
            bm: 'Skala kepada magnitud $25$ dalam arah bertentangan (darab dengan $-25$): $\\mathbf{b} = -25\\left(\\frac{3\\mathbf{i} + 4\\mathbf{j}}{5}\\right) = -5(3\\mathbf{i} + 4\\mathbf{j})$.',
            en: 'Scale to magnitude $25$ in the opposite direction (multiply by $-25$): $\\mathbf{b} = -25\\left(\\frac{3\\mathbf{i} + 4\\mathbf{j}}{5}\\right) = -5(3\\mathbf{i} + 4\\mathbf{j})$.',
            why: {
              bm: 'Tanda negatif membalikkan arah vektor, manakala $\\frac{25}{5} = 5$ menetapkan panjangnya kepada $25$.',
              en: 'The minus sign reverses direction while $\\frac{25}{5} = 5$ sets the length to $25$.'
            }
          },
          {
            badge: 'N1',
            bm: 'Kembangkan kurungan: $\\mathbf{b} = -15\\mathbf{i} - 20\\mathbf{j}$.',
            en: 'Expand the bracket: $\\mathbf{b} = -15\\mathbf{i} - 20\\mathbf{j}$.',
            why: {
              bm: 'Semak: $|\\mathbf{b}| = \\sqrt{(-15)^2 + (-20)^2} = \\sqrt{625} = 25$.',
              en: 'Verify: $|\\mathbf{b}| = \\sqrt{(-15)^2 + (-20)^2} = \\sqrt{625} = 25$.'
            }
          }
        ]
      },
      {
        code: '8.10', marks: 4,
        topic: { bm: 'Bearing Tiga Digit Halaju Paduan Kapal Terbang', en: 'Three-Digit Bearing of Aircraft Resultant Velocity' },
        q: {
          bm: 'Sebuah kapal terbang menghala ke Utara dengan kelajuan $200\\text{ km j}^{-1}$, manakala angin bertiup dari Barat ke Timur dengan kelajuan $50\\text{ km j}^{-1}$. Hitung bearing gerakan sebenar kapal terbang. [4m]',
          en: 'An aircraft heads due North at $200\\text{ km h}^{-1}$ while wind blows due East at $50\\text{ km h}^{-1}$. Calculate the three-digit bearing of its resultant path. [4m]'
        },
        mistakes: {
          bm: [
            'Mengukur sudut dari paksi Timur ($\\tan\\theta = \\frac{200}{50} = 4 \\implies 75.96^\\circ$) bukannya dari arah Utara mengikut arah jam.',
            'Tidak menulis sifar di hadapan bagi format **bearing tiga digit** ($14.04^\\circ$ bukannya $014.04^\\circ$ atau $014^\\circ$).',
            'Menggunakan $\\sin\\theta = \\frac{50}{200}$ kerana menganggap $200$ ialah hipotenus (halaju paduan), sedangkan $200$ dan $50$ ialah dua sisi berserenjang.'
          ],
          en: [
            'Measuring the angle from East ($\\tan\\theta = \\frac{200}{50} = 4 \\implies 75.96^\\circ$) instead of clockwise from North.',
            'Omitting the leading zero in **three-digit bearing** format ($14.04^\\circ$ instead of $014.04^\\circ$).',
            'Using $\\sin\\theta = \\frac{50}{200}$ instead of $\\tan\\theta = \\frac{50}{200}$ by treating $200$ as the hypotenuse.'
          ]
        },
        scheme: [
          {
            badge: 'K1',
            bm: 'Bentukkan vektor halaju paduan (Timur $= \\mathbf{i}$, Utara $= \\mathbf{j}$): $\\mathbf{v} = 50\\mathbf{i} + 200\\mathbf{j}$ (terletak di sukuan pertama, Timur Laut).',
            en: 'Form the resultant velocity vector (East $= \\mathbf{i}$, North $= \\mathbf{j}$): $\\mathbf{v} = 50\\mathbf{i} + 200\\mathbf{j}$ (in the 1st quadrant, North-East).',
            why: {
              bm: 'Komponen Utara ialah paksi-$y$ mencancang ($200$) dan angin ke Timur ialah paksi-$x$ mengufuk ($50$).',
              en: 'North is the vertical $y$-component ($200$) and East is the horizontal $x$-component ($50$).'
            }
          },
          {
            badge: 'K1',
            bm: 'Lukis segi tiga bersudut tegak dari paksi Utara ikut jam sebesar $\\theta$: sisi bertentangan $= 50$, sisi bersebelahan $= 200$, maka $\\tan\\theta = \\frac{50}{200} = 0.25$.',
            en: 'Measure angle $\\theta$ clockwise from North: opposite $= 50$, adjacent $= 200$, so $\\tan\\theta = \\frac{50}{200} = 0.25$.',
            why: {
              bm: 'Bearing sentiasa diukur dari arah Utara ($000^\\circ$) mengikut pusingan jam, jadi $\\frac{\\text{Timur}}{\\text{Utara}}$ ialah $\\tan\\theta$.',
              en: 'Bearings are measured clockwise from North, placing East ($50$) opposite $\\theta$ and North ($200$) adjacent.'
            }
          },
          {
            badge: 'K1',
            bm: 'Gunakan songsangan tangen: $\\theta = \\tan^{-1}(0.25) = 14.04^\\circ$.',
            en: 'Take the inverse tangent: $\\theta = \\tan^{-1}(0.25) = 14.04^\\circ$.',
            why: {
              bm: 'Pastikan kalkulator berada dalam mod darjah (`DEG`).',
              en: 'Ensure the calculator is in degree (`DEG`) mode.'
            }
          },
          {
            badge: 'N1',
            bm: 'Tulis dalam format bearing tiga digit: $\\text{Bearing} = 014.04^\\circ$ (atau $014^\\circ$ ke darjah terdekat).',
            en: 'Write in three-digit bearing format: $\\text{Bearing} = 014.04^\\circ$ (or $014^\\circ$ to the nearest degree).',
            why: {
              bm: 'Sudut kurang daripada $100^\\circ$ wajib mempunyai angka $0$ di hadapan untuk format bearing tiga digit.',
              en: 'Angles below $100^\\circ$ require a leading $0$ for standard three-digit bearing notation.'
            }
          }
        ]
      }
    ],

    // =========================================================================
    // TINGKATAN 4 BAB 9: PENYELESAIAN SEGI TIGA (10 SOALAN)
    // =========================================================================
    'f4-c9': [
      {
        code: '9.1', marks: 4,
        topic: { bm: 'Kes Dua Segi Tiga Mungkin (*Ambiguous Case* Petua Sinus SSA)', en: 'Ambiguous Case of the Sine Rule (SSA)' },
        q: {
          bm: 'Dalam $\\triangle ABC$, diberi $\\angle BAC = 35^\\circ$, $AB = 9\\text{ cm}$, dan $BC = 6\\text{ cm}$. Tunjukkan bahawa dua segi tiga berbeza boleh dibentuk (kes berambiguiti / *ambiguous case*) dan cari dua nilai yang mungkin bagi $\\angle ACB$. [4m]',
          en: 'In $\\triangle ABC$, $\\angle BAC = 35^\\circ$, $AB = 9\\text{ cm}$, and $BC = 6\\text{ cm}$. Show that the ambiguous case exists and find the two possible values of $\\angle ACB$. [4m]'
        },
        mistakes: {
          bm: [
            'Hanya memberikan jawapan sudut tirus kalkulator ($59.36^\\circ$) dan terlupa satu lagi kemungkinan sudut cakah iaitu $180^\\circ - 59.36^\\circ = 120.64^\\circ$.',
            'Terlupa menyemak syarat ketinggian tegak $h = c\\sin A < a < c$ untuk membuktikan kewujudan kes berambiguiti (*ambiguous case*).',
            'Terbalik memadankan sisi dan sudut dalam Petua Sinus (memadankan $\\angle ACB$ dengan sisi $BC = 6$ bukannya sisi bertentangan $AB = 9$).'
          ],
          en: [
            'Giving only the acute calculator angle ($59.36^\\circ$) and missing the obtuse supplement $180^\\circ - 59.36^\\circ = 120.64^\\circ$.',
            'Failing to verify the height condition $h = c\\sin A < a < c$ to prove the ambiguous case exists.',
            'Mismatching sides and opposite angles in the Sine Rule (pairing $\\angle ACB$ with $BC = 6$ instead of $AB = 9$).'
          ]
        },
        scheme: [
          {
            badge: 'K1',
            bm: 'Kira tinggi tegak $h$ dari $B$ ke $AC$: $h = AB\\sin 35^\\circ = 9\\sin 35^\\circ = 5.162\\text{ cm}$.',
            en: 'Calculate the perpendicular height $h$ from $B$ to $AC$: $h = AB\\sin 35^\\circ = 9\\sin 35^\\circ = 5.162\\text{ cm}$.',
            why: {
              bm: 'Kes dua segi tiga hanya wujud jika panjang sisi bertentangan $BC$ berada di antara $h$ dan sisi bersebelahan $AB$.',
              en: 'Two triangles exist only if the opposite side $BC$ lies strictly between height $h$ and adjacent side $AB$.'
            }
          },
          {
            badge: 'N1',
            bm: 'Oleh sebab $5.162 < 6 < 9$ (iaitu $h < BC < AB$), maka dua segi tiga berbeza dapat dibentuk (kes berambiguiti wujud).',
            en: 'Since $5.162 < 6 < 9$ ($h < BC < AB$), two distinct triangles can be formed (ambiguous case exists).',
            why: {
              bm: 'Bandingkan ketiga-tiga nilai secara eksplisit untuk membuktikan $BC$ boleh mengayun ke kiri dan kanan garis tinggi.',
              en: 'Explicitly show $h < BC < AB$ to prove side $BC$ can swing to two positions.'
            }
          },
          {
            badge: 'K1',
            bm: 'Guna Petua Sinus: $\\frac{\\sin\\angle ACB}{9} = \\frac{\\sin 35^\\circ}{6} \\implies \\sin\\angle ACB = \\frac{9\\sin 35^\\circ}{6} = 0.8604$.',
            en: 'Apply the Sine Rule: $\\frac{\\sin\\angle ACB}{9} = \\frac{\\sin 35^\\circ}{6} \\implies \\sin\\angle ACB = \\frac{9\\sin 35^\\circ}{6} = 0.8604$.',
            why: {
              bm: 'Padankan setiap sisi dengan sudut bertentangannya ($AB = 9$ bertentangan $\\angle ACB$; $BC = 6$ bertentangan $\\angle BAC$).',
              en: 'Pair each side with its opposite angle ($9$ opposite $\\angle ACB$; $6$ opposite $35^\\circ$).'
            }
          },
          {
            badge: 'N1',
            bm: '$\\angle ACB = \\sin^{-1}(0.8604) = 59.36^\\circ$ (tirus) atau $180^\\circ - 59.36^\\circ = 120.64^\\circ$ (cakah).',
            en: '$\\angle ACB = \\sin^{-1}(0.8604) = 59.36^\\circ$ (acute) or $180^\\circ - 59.36^\\circ = 120.64^\\circ$ (obtuse).',
            why: {
              bm: 'Sinus bernilai positif di sukuan I ($\\theta$) dan sukuan II ($180^\\circ - \\theta$); semak $35^\\circ + 120.64^\\circ = 155.64^\\circ < 180^\\circ$ (sah).',
              en: 'Sine is positive in Quadrant I and II; check $35^\\circ + 120.64^\\circ < 180^\\circ$ (valid).'
            }
          }
        ]
      },
      {
        code: '9.2', marks: 3,
        topic: { bm: 'Petua Kosinus bagi Sudut Cakah (SAS)', en: 'Cosine Rule with an Obtuse Included Angle (SAS)' },
        q: {
          bm: 'Dalam $\\triangle PQR$, diberi $PQ = 7\\text{ cm}$, $PR = 10\\text{ cm}$, dan $\\angle QPR = 115^\\circ$. Hitung panjang sisi $QR$. [3m]',
          en: 'In $\\triangle PQR$, $PQ = 7\\text{ cm}$, $PR = 10\\text{ cm}$, and $\\angle QPR = 115^\\circ$. Calculate the length of $QR$. [3m]'
        },
        mistakes: {
          bm: [
            'Tersilap tanda apabila menilai $-2(7)(10)\\cos 115^\\circ$: menolak $59.167$ seolah-olah positif sedangkan $\\cos 115^\\circ = -0.4226 < 0$ menjadikannya $+59.167$!',
            'Terlupa mengambil punca kuasa dua pada langkah akhir (meninggalkan $QR = 208.17\\text{ cm}$ bukannya $14.43\\text{ cm}$).',
            'Terlupa tertib operasi dan menolak $140$ daripada $149$ dahulu ($9\\cos 115^\\circ$) sebelum mendarab dengan $\\cos 115^\\circ$.'
          ],
          en: [
            'Sign error on $-2(7)(10)\\cos 115^\\circ$: subtracting $59.167$ instead of adding it since $\\cos 115^\\circ = -0.4226 < 0$!',
            'Forgetting the final square root, leaving $QR = 208.17\\text{ cm}$ instead of $14.43\\text{ cm}$.',
            'Breaking order of operations by computing $(149 - 140)\\cos 115^\\circ$ instead of multiplying $140\\cos 115^\\circ$ first.'
          ]
        },
        scheme: [
          {
            badge: 'K1',
            bm: 'Gantikan $PQ = 7$, $PR = 10$, dan sudut kandung $115^\\circ$ ke dalam Petua Kosinus: $QR^2 = 7^2 + 10^2 - 2(7)(10)\\cos 115^\\circ$.',
            en: 'Substitute $PQ = 7$, $PR = 10$, and included angle $115^\\circ$ into the Cosine Rule: $QR^2 = 7^2 + 10^2 - 2(7)(10)\\cos 115^\\circ$.',
            why: {
              bm: 'Dua sisi dan satu sudut kandung (SAS) sentiasa menggunakan Petua Kosinus untuk mencari sisi bertentangan.',
              en: 'Given two sides and the included angle (SAS), the Cosine Rule finds the opposite side.'
            }
          },
          {
            badge: 'K1',
            bm: 'Nilaikan setiap bahagian: $QR^2 = 49 + 100 - 140(-0.4226) = 149 + 59.167$.',
            en: 'Evaluate each term carefully: $QR^2 = 49 + 100 - 140(-0.4226) = 149 + 59.167$.',
            why: {
              bm: 'Sudut cakah ($115^\\circ > 90^\\circ$) mempunyai nilai kosinus negatif, jadi negatif darab negatif menjadi tambah.',
              en: 'An obtuse angle ($115^\\circ > 90^\\circ$) has a negative cosine, turning $-140\\cos 115^\\circ$ into $+59.167$.'
            }
          },
          {
            badge: 'K1',
            bm: 'Jumlahkan nilai untuk $QR^2$: $QR^2 = 208.167$.',
            en: 'Add both values to find $QR^2$: $QR^2 = 208.167$.',
            why: {
              bm: 'Pastikan sisi bertentangan sudut cakah lebih panjang daripada kedua-dua sisi lain ($QR^2 > 100$).',
              en: 'A side opposite an obtuse angle must be the longest side ($QR > 10$).'
            }
          },
          {
            badge: 'N1',
            bm: 'Ambil punca kuasa dua: $QR = \\sqrt{208.167} = 14.43\\text{ cm}$.',
            en: 'Take the square root: $QR = \\sqrt{208.167} = 14.43\\text{ cm}$.',
            why: {
              bm: 'Nyatakan jawapan akhir kepada 4 angka bererti bersama unit $\\text{cm}$.',
              en: 'Give the final length to 4 significant figures with units.'
            }
          }
        ]
      },
      {
        code: '9.3', marks: 3,
        topic: { bm: 'Luas Segi Tiga Menggunakan Sudut Kandung', en: 'Area of Triangle Using Included Angle' },
        q: {
          bm: 'Diberi $XY = 8\\text{ cm}$, $YZ = 11\\text{ cm}$, dan sudut kandung $\\angle XYZ = 64^\\circ$. Hitung luas $\\triangle XYZ$. [3m]',
          en: 'Given $XY = 8\\text{ cm}$, $YZ = 11\\text{ cm}$, and included angle $\\angle XYZ = 64^\\circ$, find the area of $\\triangle XYZ$. [3m]'
        },
        mistakes: {
          bm: [
            'Menggunakan $\\cos 64^\\circ$ atau $\\tan 64^\\circ$ dan bukannya $\\sin 64^\\circ$ dalam rumus luas $\\frac{1}{2}ab\\sin C$.',
            'Terlupa faktor $\\frac{1}{2}$ di hadapan rumus (mendapat $79.09\\text{ cm}^2$ iaitu dua kali ganda luas sebenar).',
            'Mengesetkan kalkulator dalam mod radian (`RAD`) bukannya mod darjah (`DEG`).'
          ],
          en: [
            'Using $\\cos 64^\\circ$ instead of $\\sin 64^\\circ$ in $\\frac{1}{2}ab\\sin C$.',
            'Dropping the $\\frac{1}{2}$ factor, giving $79.09\\text{ cm}^2$ (double the true area).',
            'Computing $\\sin 64$ in radian (`RAD`) mode instead of degree (`DEG`) mode.'
          ]
        },
        scheme: [
          {
            badge: 'K1',
            bm: 'Kenal pasti dua sisi dan sudut kandung ($Y$ terletak di antara $XY$ dan $YZ$), lalu gantikan ke dalam $\\text{Luas} = \\frac{1}{2}ab\\sin C$: $\\text{Luas} = \\frac{1}{2}(8)(11)\\sin 64^\\circ$.',
            en: 'Confirm $64^\\circ$ is the included angle between $XY = 8$ and $YZ = 11$, and substitute into $\\text{Area} = \\frac{1}{2}ab\\sin C$: $\\text{Area} = \\frac{1}{2}(8)(11)\\sin 64^\\circ$.',
            why: {
              bm: 'Rumus $\\frac{1}{2}ab\\sin C$ hanya sah apabila sudut $C$ diapit tepat oleh sisi $a$ dan $b$.',
              en: '$\\frac{1}{2}ab\\sin C$ requires the angle to lie directly between the two given sides.'
            }
          },
          {
            badge: 'K1',
            bm: 'Permudahkan hasil darab: $\\text{Luas} = 44 \\times \\sin 64^\\circ = 44 \\times 0.8988$.',
            en: 'Simplify the product: $\\text{Area} = 44 \\times \\sin 64^\\circ = 44 \\times 0.8988$.',
            why: {
              bm: 'Kira $\\frac{1}{2}(8)(11) = 44$ dahulu sebelum mendarab dengan $\\sin 64^\\circ$ (mod `DEG`).',
              en: 'Multiply $\\frac{1}{2}(8)(11) = 44$ first, then multiply by $\\sin 64^\\circ$ in `DEG` mode.'
            }
          },
          {
            badge: 'N1',
            bm: '$\\text{Luas} = 39.55\\text{ cm}^2$.',
            en: '$\\text{Area} = 39.55\\text{ cm}^2$.',
            why: {
              bm: 'Bundarkan kepada 4 angka bererti dan sertakan unit $\\text{cm}^2$.',
              en: 'Round to 4 significant figures with $\\text{cm}^2$ units.'
            }
          }
        ]
      },
      {
        code: '9.4', marks: 3,
        topic: { bm: 'Rumus Heron Apabila Tiga Sisi Diberi (SSS)', en: 'Heron\'s Formula Given Three Sides (SSS)' },
        q: {
          bm: 'Sebuah segi tiga mempunyai panjang sisi $5\\text{ cm}$, $7\\text{ cm}$, dan $8\\text{ cm}$. Hitung luasnya menggunakan Rumus Heron. [3m]',
          en: 'A triangle has sides $5\\text{ cm}$, $7\\text{ cm}$, and $8\\text{ cm}$. Calculate its area using Heron\'s Formula. [3m]'
        },
        mistakes: {
          bm: [
            'Menggunakan perimeter penuh $20$ sebagai $s$ tanpa membahagikannya dengan $2$ untuk mendapatkan semi-perimeter $s = 10$.',
            'Tersilap memasukkan tanda tambah bukannya darab di bawah punca kuasa dua, atau tertinggal salah satu faktor $(s - c)$.',
            'Terlupa mengambil punca kuasa dua bagi $300$ (menulis jawapan $300\\text{ cm}^2$).'
          ],
          en: [
            'Using full perimeter $20$ instead of semi-perimeter $s = \\frac{5+7+8}{2} = 10$.',
            'Omitting one of the $(s - c)$ factors or forgetting the $s$ outside the brackets inside $\\sqrt{s(s-a)(s-b)(s-c)}$.',
            'Forgetting to take the square root of $300$.'
          ]
        },
        scheme: [
          {
            badge: 'K1',
            bm: 'Kira separuh perimeter ($s$): $s = \\frac{5 + 7 + 8}{2} = \\frac{20}{2} = 10\\text{ cm}$.',
            en: 'Calculate the semi-perimeter ($s$): $s = \\frac{5 + 7 + 8}{2} = \\frac{20}{2} = 10\\text{ cm}$.',
            why: {
              bm: 'Huruf $s$ dalam Rumus Heron bermaksud separuh daripada jumlah panjang ketiga-tiga sisi.',
              en: 'In Heron\'s formula, $s$ always means half the perimeter.'
            }
          },
          {
            badge: 'K1',
            bm: 'Gantikan ke dalam Rumus Heron $\\sqrt{s(s - a)(s - b)(s - c)}$: $\\text{Luas} = \\sqrt{10(10 - 5)(10 - 7)(10 - 8)}$.',
            en: 'Substitute into Heron\'s Formula $\\sqrt{s(s - a)(s - b)(s - c)}$: $\\text{Area} = \\sqrt{10(10 - 5)(10 - 7)(10 - 8)}$.',
            why: {
              bm: 'Pastikan semua empat faktor ($s$ dan tiga perbezaan) berada di dalam punca kuasa dua.',
              en: 'Make sure all four factors ($s$ and the three differences) are inside the square root.'
            }
          },
          {
            badge: 'K1',
            bm: 'Tolak di dalam kurungan dan darabkan: $\\text{Luas} = \\sqrt{10 \\times 5 \\times 3 \\times 2} = \\sqrt{300}$.',
            en: 'Subtract inside each bracket and multiply: $\\text{Area} = \\sqrt{10 \\times 5 \\times 3 \\times 2} = \\sqrt{300}$.',
            why: {
              bm: 'Semak setiap baki penolakan ialah positif kerana setiap sisi segi tiga mesti kurang daripada $s$.',
              en: 'Every factor $(s - a)$ must be positive for a valid triangle.'
            }
          },
          {
            badge: 'N1',
            bm: '$\\text{Luas} = 17.32\\text{ cm}^2$ (atau $10\\sqrt{3}\\text{ cm}^2$).',
            en: '$\\text{Area} = 17.32\\text{ cm}^2$ (or $10\\sqrt{3}\\text{ cm}^2$).',
            why: {
              bm: 'Nilaikan $\\sqrt{300}$ kepada 4 angka bererti bersama unit $\\text{cm}^2$.',
              en: 'Evaluate $\\sqrt{300}$ to 4 significant figures with $\\text{cm}^2$ units.'
            }
          }
        ]
      },
      {
        code: '9.5', marks: 5,
        topic: { bm: 'Geometri Tiga Dimensi: Piramid Tegak', en: '3D Geometry: Right Rectangular Pyramid' },
        q: {
          bm: 'Sebuah piramid tegak mempunyai tapak segi empat tepat $ABCD$ berukuran $8\\text{ cm} \\times 6\\text{ cm}$. Puncak $V$ berada $12\\text{ cm}$ tegak di atas pusat tapak $M$. Cari panjang tepi condong $VA$ dan sudut antara $VA$ dengan tapak $ABCD$. [5m]',
          en: 'A right pyramid has a rectangular base $ABCD$ measuring $8\\text{ cm} \\times 6\\text{ cm}$. Apex $V$ is $12\\text{ cm}$ vertically above center $M$. Find slant edge $VA$ and the angle between $VA$ and base $ABCD$. [5m]'
        },
        mistakes: {
          bm: [
            'Mengambil jarak $MA = 4\\text{ cm}$ (separuh sisi $8\\text{ cm}$) atau $3\\text{ cm}$ bukannya separuh pepenjuru tapak $\\frac{1}{2}\\sqrt{8^2 + 6^2} = 5\\text{ cm}$.',
            'Menggunakan $AC = 10\\text{ cm}$ terus dalam $\\sqrt{12^2 + 10^2}$ dan bukannya separuh pepenjuru $MA = 5\\text{ cm}$.',
            'Mengambil sudut pada puncak $\\angle AVM$ ($22.62^\\circ$) bukannya sudut dengan satah tapak $\\angle VAM$ ($67.38^\\circ$).'
          ],
          en: [
            'Taking $MA = 4\\text{ cm}$ (half a side) instead of half the base diagonal $\\frac{1}{2}\\sqrt{8^2 + 6^2} = 5\\text{ cm}$.',
            'Using full diagonal $AC = 10\\text{ cm}$ instead of half diagonal $MA = 5\\text{ cm}$ in $\\triangle VMA$.',
            'Computing the top angle $\\angle AVM = 22.62^\\circ$ instead of the angle with the base $\\angle VAM = 67.38^\\circ$.'
          ]
        },
        scheme: [
          {
            badge: 'K1',
            bm: 'Cari pepenjuru tapak $AC$ dengan Pythagoras dan bahagi $2$ untuk $MA$: $AC = \\sqrt{8^2 + 6^2} = \\sqrt{64 + 36} = 10\\text{ cm} \\implies MA = \\frac{10}{2} = 5\\text{ cm}$.',
            en: 'Find base diagonal $AC$ via Pythagoras and halve it for $MA$: $AC = \\sqrt{8^2 + 6^2} = \\sqrt{64 + 36} = 10\\text{ cm} \\implies MA = \\frac{10}{2} = 5\\text{ cm}$.',
            why: {
              bm: 'Pusat tapak $M$ ialah titik tengah pepenjuru $AC$ bagi segi empat tepat $ABCD$.',
              en: 'The base center $M$ is the midpoint of the rectangle\'s diagonal $AC$.'
            }
          },
          {
            badge: 'N1',
            bm: 'Dalam segi tiga bersudut tegak $\\triangle VMA$ ($\\angle VMA = 90^\\circ$): $VA = \\sqrt{VM^2 + MA^2} = \\sqrt{12^2 + 5^2} = \\sqrt{144 + 25} = \\sqrt{169} = 13\\text{ cm}$.',
            en: 'In right-angled $\\triangle VMA$ ($\\angle VMA = 90^\\circ$): $VA = \\sqrt{VM^2 + MA^2} = \\sqrt{12^2 + 5^2} = \\sqrt{144 + 25} = \\sqrt{169} = 13\\text{ cm}$.',
            why: {
              bm: 'Puncak $V$ terletak tegak di atas $M$, maka $VM \\perp MA$.',
              en: 'Since $V$ is vertically above $M$, $VM \\perp MA$ forms a right triangle.'
            }
          },
          {
            badge: 'K1',
            bm: 'Unjuran garis $VA$ pada tapak $ABCD$ ialah $MA$, jadi sudut dikehendaki ialah $\\angle VAM$: $\\tan\\angle VAM = \\frac{VM}{MA} = \\frac{12}{5} = 2.4$.',
            en: 'The projection of $VA$ onto base $ABCD$ is $MA$, so the required angle is $\\angle VAM$: $\\tan\\angle VAM = \\frac{VM}{MA} = \\frac{12}{5} = 2.4$.',
            why: {
              bm: 'Sudut antara garis dan satah sentiasa diukur antara garis condong ($VA$) dengan bayang-bayangnya pada satah ($MA$).',
              en: 'The angle between a line and a plane lies between the slant edge ($VA$) and its shadow on the plane ($MA$).'
            }
          },
          {
            badge: 'N1',
            bm: '$\\angle VAM = \\tan^{-1}(2.4) = 67.38^\\circ$.',
            en: '$\\angle VAM = \\tan^{-1}(2.4) = 67.38^\\circ$.',
            why: {
              bm: 'Nilaikan songsangan tangen dalam mod darjah (`DEG`).',
              en: 'Evaluate inverse tangent in degree (`DEG`) mode.'
            }
          }
        ]
      },
      {
        code: '9.6', marks: 3,
        topic: { bm: 'Mencari Sudut Terbesar dalam Segi Tiga', en: 'Finding the Largest Angle in a Triangle' },
        q: {
          bm: 'Sebuah segi tiga mempunyai sisi-sisi $4\\text{ cm}$, $6\\text{ cm}$, dan $8\\text{ cm}$. Hitung sudut terbesar dalam segi tiga tersebut. [3m]',
          en: 'A triangle has sides $4\\text{ cm}$, $6\\text{ cm}$, and $8\\text{ cm}$. Calculate the largest angle in the triangle. [3m]'
        },
        mistakes: {
          bm: [
            'Tidak menyedari sudut terbesar sentiasa bertentangan dengan sisi paling panjang ($8\\text{ cm}$), lalu meletakkan $4^2$ atau $6^2$ di sebelah yang salah.',
            'Terbalik tanda dalam rumus kosinus: menulis $\\cos\\theta = \\frac{8^2 - 4^2 - 6^2}{2(4)(6)} = +0.25$ sehingga mendapat sudut tirus $75.52^\\circ$!',
            'Mengabaikan tanda negatif pada $\\cos\\theta = -0.25$ dan mengambil $\\cos^{-1}(0.25) = 75.52^\\circ$.'
          ],
          en: [
            'Not targeting the angle opposite the longest side ($8\\text{ cm}$).',
            'Reversing the Cosine Rule signs as $\\frac{8^2 - 4^2 - 6^2}{2(4)(6)} = +0.25$, giving $75.52^\\circ$ instead of $104.48^\\circ$!',
            'Ignoring the minus sign in $\\cos^{-1}(-0.25)$ and pressing $\\cos^{-1}(0.25)$.'
          ]
        },
        scheme: [
          {
            badge: 'K1',
            bm: 'Sudut terbesar $\\theta$ bertentangan dengan sisi terpanjang $c = 8\\text{ cm}$. Gantikan ke dalam Petua Kosinus: $8^2 = 4^2 + 6^2 - 2(4)(6)\\cos\\theta$.',
            en: 'The largest angle $\\theta$ is opposite the longest side $c = 8\\text{ cm}$. Substitute into the Cosine Rule: $8^2 = 4^2 + 6^2 - 2(4)(6)\\cos\\theta$.',
            why: {
              bm: 'Dalam mana-mana segi tiga, sisi paling panjang sentiasa menghadap sudut paling besar.',
              en: 'In any triangle, the longest side is always opposite the largest angle.'
            }
          },
          {
            badge: 'K1',
            bm: 'Kira kuasa dua dan susun semula untuk mengasingkan $\\cos\\theta$: $64 = 16 + 36 - 48\\cos\\theta \\implies 48\\cos\\theta = 52 - 64 = -12$.',
            en: 'Evaluate the squares and rearrange for $\\cos\\theta$: $64 = 16 + 36 - 48\\cos\\theta \\implies 48\\cos\\theta = 52 - 64 = -12$.',
            why: {
              bm: 'Pindahkan $-48\\cos\\theta$ ke kiri dan $64$ ke kanan supaya pengiraan tanda jelas.',
              en: 'Move $-48\\cos\\theta$ to the LHS and $64$ to the RHS to keep signs clear.'
            }
          },
          {
            badge: 'K1',
            bm: 'Bahagi dengan $48$: $\\cos\\theta = \\frac{-12}{48} = -0.25$.',
            en: 'Divide by $48$: $\\cos\\theta = \\frac{-12}{48} = -0.25$.',
            why: {
              bm: 'Nilai kosinus negatif bermakna sudut terbesar ini ialah sudut cakah ($> 90^\\circ$).',
              en: 'A negative cosine indicates the largest angle is obtuse ($> 90^\\circ$).'
            }
          },
          {
            badge: 'N1',
            bm: '$\\theta = \\cos^{-1}(-0.25) = 104.48^\\circ$.',
            en: '$\\theta = \\cos^{-1}(-0.25) = 104.48^\\circ$.',
            why: {
              bm: 'Masukkan tanda negatif sekali ke dalam kalkulator $\\cos^{-1}(-0.25)$.',
              en: 'Enter the minus sign directly into $\\cos^{-1}(-0.25)$ on the calculator.'
            }
          }
        ]
      },
      {
        code: '9.7', marks: 4,
        topic: { bm: 'Gabungan Petua Kosinus & Petua Sinus pada Sisi Empat', en: 'Combined Cosine & Sine Rules in a Quadrilateral' },
        q: {
          bm: 'Dalam sisi empat $ABCD$, diberi $AB = 6\\text{ cm}$, $AD = 5\\text{ cm}$, $\\angle BAD = 60^\\circ$, $BC = 7\\text{ cm}$, dan $\\angle BDC = 40^\\circ$. Cari panjang pepenjuru $BD$ dan sudut tirus $\\angle BCD$. [4m]',
          en: 'In quadrilateral $ABCD$, $AB = 6\\text{ cm}$, $AD = 5\\text{ cm}$, $\\angle BAD = 60^\\circ$, $BC = 7\\text{ cm}$, and $\\angle BDC = 40^\\circ$. Find diagonal $BD$ and acute angle $\\angle BCD$. [4m]'
        },
        mistakes: {
          bm: [
            'Cuba menggunakan Petua Sinus pada $\\triangle ABD$ walaupun tiada pasangan sisi-sudut bertentangan yang lengkap diketahui.',
            'Lupa mengambil punca kuasa dua daripada $BD^2 = 31$ sebelum memasukkannya ke dalam Petua Sinus untuk $\\triangle BCD$.',
            'Tersilap memadankan sisi dalam $\\triangle BCD$: menggunakan $\\frac{\\sin\\angle BCD}{7} = \\frac{\\sin 40^\\circ}{BD}$ bukannya sisi bertentangan masing-masing ($BD$ bertentangan $\\angle BCD$, $7$ bertentangan $40^\\circ$).'
          ],
          en: [
            'Attempting the Sine Rule in $\\triangle ABD$ where no opposite side-angle pair is known.',
            'Using $BD^2 = 31$ instead of $BD = \\sqrt{31} \\approx 5.568\\text{ cm}$ in the Sine Rule for $\\triangle BCD$.',
            'Mismatching sides in $\\triangle BCD$: writing $\\frac{\\sin\\angle BCD}{7} = \\frac{\\sin 40^\\circ}{BD}$ instead of pairing $BD$ with $\\angle BCD$ and $BC = 7$ with $40^\\circ$.'
          ]
        },
        scheme: [
          {
            badge: 'K1',
            bm: 'Dalam $\\triangle ABD$ (SAS), guna Petua Kosinus untuk mencari $BD$: $BD^2 = 6^2 + 5^2 - 2(6)(5)\\cos 60^\\circ = 36 + 25 - 60(0.5) = 31$.',
            en: 'In $\\triangle ABD$ (SAS), apply the Cosine Rule to find $BD$: $BD^2 = 6^2 + 5^2 - 2(6)(5)\\cos 60^\\circ = 36 + 25 - 60(0.5) = 31$.',
            why: {
              bm: 'Kita mempunyai dua sisi ($6, 5$) dan sudut kandung ($60^\\circ$), jadi Petua Kosinus mencari pepenjuru sepunya $BD$.',
              en: 'With two sides and an included angle, the Cosine Rule finds the shared diagonal $BD$.'
            }
          },
          {
            badge: 'N1',
            bm: '$BD = \\sqrt{31} \\approx 5.568\\text{ cm}$.',
            en: '$BD = \\sqrt{31} \\approx 5.568\\text{ cm}$.',
            why: {
              bm: 'Simpan sekurang-kurangnya 4 angka bererti bagi nilai pertengahan $BD$ supaya langkah seterusnya kekal tepat.',
              en: 'Keep at least 4 significant figures for $BD$ to prevent rounding drift in step 3.'
            }
          },
          {
            badge: 'K1',
            bm: 'Dalam $\\triangle BCD$, guna Petua Sinus: $\\frac{\\sin\\angle BCD}{5.568} = \\frac{\\sin 40^\\circ}{7} \\implies \\sin\\angle BCD = \\frac{5.568\\sin 40^\\circ}{7} = 0.5113$.',
            en: 'In $\\triangle BCD$, apply the Sine Rule: $\\frac{\\sin\\angle BCD}{5.568} = \\frac{\\sin 40^\\circ}{7} \\implies \\sin\\angle BCD = \\frac{5.568\\sin 40^\\circ}{7} = 0.5113$.',
            why: {
              bm: 'Pepenjuru $BD$ menghadap $\\angle BCD$, manakala $BC = 7$ menghadap $\\angle BDC = 40^\\circ$.',
              en: 'Diagonal $BD$ is opposite $\\angle BCD$, while $BC = 7$ is opposite $\\angle BDC = 40^\\circ$.'
            }
          },
          {
            badge: 'N1',
            bm: '$\\angle BCD = \\sin^{-1}(0.5113) = 30.75^\\circ$ (tirus).',
            en: '$\\angle BCD = \\sin^{-1}(0.5113) = 30.75^\\circ$ (acute).',
            why: {
              bm: 'Oleh sebab $BD < BC$ ($5.568 < 7$), sudut $\\angle BCD$ mestilah lebih kecil daripada $40^\\circ$, maka hanya nilai tirus yang sah.',
              en: 'Since $BD < BC$, $\\angle BCD < 40^\\circ$, so only the acute angle is valid.'
            }
          }
        ]
      },
      {
        code: '9.8', marks: 4,
        topic: { bm: 'Sudut Antara Pepenjuru Ruang Kuboid dengan Tapak', en: 'Angle Between Cuboid Space Diagonal and Base' },
        q: {
          bm: 'Sebuah kuboid mempunyai tapak rata (mengufuk) $ABCD$ berukuran $10\\text{ cm} \\times 6\\text{ cm}$ dan tinggi tegak $AE = 4\\text{ cm}$ ($E$ tegak di atas $A$). Hitung sudut antara garis $EC$ dengan satah tapak $ABCD$. [4m]',
          en: 'A cuboid has horizontal base $ABCD$ ($10\\text{ cm} \\times 6\\text{ cm}$) and vertical height $AE = 4\\text{ cm}$ ($E$ above $A$). Find the angle between $EC$ and base $ABCD$. [4m]'
        },
        mistakes: {
          bm: [
            'Salah memilih garisan bayang-bayang (*unjuran ortogon*) bagi $EC$ pada tapak sebagai sisi tepi $AB = 10$ atau $BC = 6$ bukannya pepenjuru tapak $AC$.',
            'Terbalik nisbah tangen: mengira $\\tan\\angle ECA = \\frac{AC}{AE} = \\frac{\\sqrt{136}}{4} \\implies 71.07^\\circ$ (iaitu sudut dengan garis tegak $EA$).',
            'Mengambil $\\sin\\angle ECA = \\frac{4}{\\sqrt{136}}$ seolah-olah $AC$ ialah hipotenus ruang $EC$.'
          ],
          en: [
            'Taking the orthogonal projection of $EC$ on the base as edge $AB = 10$ or $BC = 6$ instead of base diagonal $AC$.',
            'Inverting the tangent ratio as $\\frac{AC}{AE} = \\frac{\\sqrt{136}}{4} \\implies 71.07^\\circ$ (the angle with the vertical edge $EA$).',
            'Using $\\sin\\angle ECA = \\frac{4}{\\sqrt{136}}$ by confusing base diagonal $AC$ with space diagonal $EC$.'
          ]
        },
        scheme: [
          {
            badge: 'K1',
            bm: 'Kenal pasti unjuran ortogon $EC$ pada tapak $ABCD$ sebagai pepenjuru tapak $AC$ (kerana $EA \\perp$ tapak).',
            en: 'Identify the orthogonal projection of $EC$ on base $ABCD$ as the base diagonal $AC$ (since $EA \\perp$ base).',
            why: {
              bm: 'Jatuhkan garis tegak dari $E$ ke tapak (mendarat di $A$), kemudian sambungkan $A$ ke $C$ untuk mendapat bayang-bayang $AC$.',
              en: 'Drop a perpendicular from $E$ to the base (landing at $A$), then join $A$ to $C$ to find the shadow $AC$.'
            }
          },
          {
            badge: 'K1',
            bm: 'Hitung panjang $AC$ pada tapak segi empat tepat $10 \\times 6$: $AC = \\sqrt{10^2 + 6^2} = \\sqrt{100 + 36} = \\sqrt{136} \\approx 11.662\\text{ cm}$.',
            en: 'Calculate $AC$ on the $10 \\times 6$ rectangular base: $AC = \\sqrt{10^2 + 6^2} = \\sqrt{100 + 36} = \\sqrt{136} \\approx 11.662\\text{ cm}$.',
            why: {
              bm: 'Gunakan Teorem Pythagoras pada $\\triangle ABC$ yang bersudut tegak di $B$.',
              en: 'Apply Pythagoras\' theorem on right-angled $\\triangle ABC$.'
            }
          },
          {
            badge: 'K1',
            bm: 'Dalam segi tiga bersudut tegak $\\triangle EAC$ ($\\angle EAC = 90^\\circ$): $\\tan\\angle ECA = \\frac{AE}{AC} = \\frac{4}{\\sqrt{136}} \\approx 0.3430$.',
            en: 'In right-angled $\\triangle EAC$ ($\\angle EAC = 90^\\circ$): $\\tan\\angle ECA = \\frac{AE}{AC} = \\frac{4}{\\sqrt{136}} \\approx 0.3430$.',
            why: {
              bm: 'Diukur pada bucu $C$, tinggi tegak $AE = 4$ ialah sisi bertentangan dan $AC$ ialah sisi bersebelahan.',
              en: 'At vertex $C$, vertical height $AE = 4$ is opposite and $AC$ is adjacent.'
            }
          },
          {
            badge: 'N1',
            bm: '$\\angle ECA = \\tan^{-1}\\left(\\frac{4}{\\sqrt{136}}\\right) = 18.93^\\circ$.',
            en: '$\\angle ECA = \\tan^{-1}\\left(\\frac{4}{\\sqrt{136}}\\right) = 18.93^\\circ$.',
            why: {
              bm: 'Kekalkan nilai tepat $\\sqrt{136}$ dalam kalkulator sebelum mengambil $\\tan^{-1}$.',
              en: 'Keep the exact $\\sqrt{136}$ in the calculator before taking $\\tan^{-1}$.'
            }
          }
        ]
      },
      {
        code: '9.9', marks: 4,
        topic: { bm: 'Jumlah Luas Tanah Sisi Empat Tak Sekata', en: 'Total Area of an Irregular Quadrilateral Plot' },
        q: {
          bm: 'Sebidang tanah sisi empat $PQRS$ dibahagikan oleh pepenjuru $PR = 12\\text{ m}$. Diberi luas $\\triangle PQR = 45\\text{ m}^2$, $RS = 8\\text{ m}$, dan $\\angle PRS = 50^\\circ$. Hitung jumlah luas tanah $PQRS$. [4m]',
          en: 'Quadrilateral plot $PQRS$ is split by diagonal $PR = 12\\text{ m}$. Given area of $\\triangle PQR = 45\\text{ m}^2$, $RS = 8\\text{ m}$, and $\\angle PRS = 50^\\circ$, find the total area of $PQRS$. [4m]'
        },
        mistakes: {
          bm: [
            'Cuba mencari satu rumus tunggal untuk keseluruhan sisi empat tanpa memecahkannya kepada $\\triangle PQR + \\triangle PRS$.',
            'Terlupa faktor $\\frac{1}{2}$ semasa mengira luas $\\triangle PRS$ (menulis $12 \\times 8 \\times \\sin 50^\\circ = 73.54\\text{ m}^2$).',
            'Menulis jawapan akhir sebagai $36.77\\text{ m}^2$ sahaja dan terlupa menambahkannya kepada luas $\\triangle PQR = 45\\text{ m}^2$.'
          ],
          en: [
            'Trying to apply a single formula to the whole quadrilateral instead of splitting it into $\\triangle PQR + \\triangle PRS$.',
            'Omitting the $\\frac{1}{2}$ factor in $\\text{Area } \\triangle PRS$, getting $73.54\\text{ m}^2$.',
            'Stopping at $36.77\\text{ m}^2$ and forgetting to add $\\text{Area } \\triangle PQR = 45\\text{ m}^2$.'
          ]
        },
        scheme: [
          {
            badge: 'K1',
            bm: 'Dalam $\\triangle PRS$, sudut $\\angle PRS = 50^\\circ$ diapit oleh sisi $PR = 12\\text{ m}$ dan $RS = 8\\text{ m}$: $\\text{Luas } \\triangle PRS = \\frac{1}{2}(12)(8)\\sin 50^\\circ$.',
            en: 'In $\\triangle PRS$, $\\angle PRS = 50^\\circ$ is included between $PR = 12\\text{ m}$ and $RS = 8\\text{ m}$: $\\text{Area } \\triangle PRS = \\frac{1}{2}(12)(8)\\sin 50^\\circ$.',
            why: {
              bm: 'Pepenjuru $PR$ membahagikan sisi empat kepada dua segi tiga, dan $\\triangle PRS$ memenuhi syarat SAS.',
              en: 'Diagonal $PR$ splits the quadrilateral into two triangles, and $\\triangle PRS$ is an SAS triangle.'
            }
          },
          {
            badge: 'K1',
            bm: 'Hitung luas $\\triangle PRS$: $\\text{Luas } \\triangle PRS = 48 \\times \\sin 50^\\circ = 36.77\\text{ m}^2$.',
            en: 'Compute the area of $\\triangle PRS$: $\\text{Area } \\triangle PRS = 48 \\times \\sin 50^\\circ = 36.77\\text{ m}^2$.',
            why: {
              bm: 'Permudahkan $\\frac{1}{2}(12)(8) = 48$ dahulu sebelum mendarab dengan $\\sin 50^\\circ$.',
              en: 'Simplify $\\frac{1}{2}(12)(8) = 48$ before multiplying by $\\sin 50^\\circ$.'
            }
          },
          {
            badge: 'N1',
            bm: 'Jumlah luas tanah $= \\text{Luas } \\triangle PQR + \\text{Luas } \\triangle PRS = 45 + 36.77 = 81.77\\text{ m}^2$.',
            en: 'Total area $= \\text{Area } \\triangle PQR + \\text{Area } \\triangle PRS = 45 + 36.77 = 81.77\\text{ m}^2$.',
            why: {
              bm: 'Gabungkan kedua-dua luas segi tiga dengan unit $\\text{m}^2$.',
              en: 'Add both triangle areas together with $\\text{m}^2$ units.'
            }
          }
        ]
      },
      {
        code: '9.10', marks: 4,
        topic: { bm: 'Jarak Tegak Terpendek Bucu ke Sisi Bertentangan', en: 'Shortest Perpendicular Distance from Vertex to Opposite Side' },
        q: {
          bm: 'Dalam $\\triangle ABC$, diberi $AB = 13\\text{ cm}$, $BC = 14\\text{ cm}$, dan $AC = 15\\text{ cm}$. Hitung jarak terpendek dari bucu $B$ ke sisi $AC$. [4m]',
          en: 'In $\\triangle ABC$, $AB = 13\\text{ cm}$, $BC = 14\\text{ cm}$, and $AC = 15\\text{ cm}$. Calculate the shortest distance from vertex $B$ to side $AC$. [4m]'
        },
        mistakes: {
          bm: [
            'Mengandaikan garis tinggi dari $B$ membahagi dua sama sisi $AC = 15\\text{ cm}$ kepada $7.5\\text{ cm}$ lalu menggunakan Pythagoras $\\sqrt{13^2 - 7.5^2}$ — salah kerana $\\triangle ABC$ bukan sama kaki ($13 \\neq 14$)!',
            'Menggunakan tapak yang salah ($13$ atau $14$) dalam $\\frac{1}{2} \\times \\text{tapak} \\times h = 84$ bukannya tapak $AC = 15\\text{ cm}$.',
            'Lupa membahagi perimeter $42$ dengan $2$ semasa mengira semi-perimeter $s$ dalam Rumus Heron.'
          ],
          en: [
            'Assuming the altitude from $B$ bisects $AC = 15\\text{ cm}$ into $7.5\\text{ cm}$ and using Pythagoras — false because $\\triangle ABC$ is scalene ($13 \\neq 14$)!',
            'Using $13$ or $14$ as the base in $\\frac{1}{2} \\times \\text{base} \\times h = 84$ instead of $AC = 15\\text{ cm}$.',
            'Using full perimeter $42$ instead of semi-perimeter $s = 21$ in Heron\'s formula.'
          ]
        },
        scheme: [
          {
            badge: 'K1',
            bm: 'Cari separuh perimeter ($s$): $s = \\frac{13 + 14 + 15}{2} = \\frac{42}{2} = 21\\text{ cm}$.',
            en: 'Find the semi-perimeter ($s$): $s = \\frac{13 + 14 + 15}{2} = \\frac{42}{2} = 21\\text{ cm}$.',
            why: {
              bm: 'Hanya tiga panjang sisi (SSS) diberi, jadi Rumus Heron ialah cara terpantas mendapatkan luas.',
              en: 'With only three sides (SSS) given, Heron\'s formula is the most direct path to the area.'
            }
          },
          {
            badge: 'K1',
            bm: 'Kira luas dengan Rumus Heron: $\\text{Luas} = \\sqrt{21(21 - 13)(21 - 14)(21 - 15)} = \\sqrt{21 \\times 8 \\times 7 \\times 6} = \\sqrt{7056} = 84\\text{ cm}^2$.',
            en: 'Compute the area using Heron\'s Formula: $\\text{Area} = \\sqrt{21(21 - 13)(21 - 14)(21 - 15)} = \\sqrt{21 \\times 8 \\times 7 \\times 6} = \\sqrt{7056} = 84\\text{ cm}^2$.',
            why: {
              bm: 'Luas yang sama boleh ditulis sebagai $\\frac{1}{2} \\times \\text{tapak} \\times \\text{tinggi tegak}$.',
              en: 'That exact area also equals $\\frac{1}{2} \\times \\text{base} \\times \\text{perpendicular height}$.'
            }
          },
          {
            badge: 'K1',
            bm: 'Samakan dengan $\\frac{1}{2} \\times AC \\times h = 84$: $\\frac{1}{2}(15)h = 84 \\implies 15h = 168$.',
            en: 'Equate with $\\frac{1}{2} \\times AC \\times h = 84$: $\\frac{1}{2}(15)h = 84 \\implies 15h = 168$.',
            why: {
              bm: 'Jarak terpendek dari $B$ ke sisi $AC$ ialah tinggi serenjang $h$ apabila $AC = 15\\text{ cm}$ dipilih sebagai tapak.',
              en: 'The shortest distance from $B$ to $AC$ is the perpendicular height $h$ with base $AC = 15\\text{ cm}$.'
            }
          },
          {
            badge: 'N1',
            bm: '$h = \\frac{168}{15} = 11.2\\text{ cm}$.',
            en: '$h = \\frac{168}{15} = 11.2\\text{ cm}$.',
            why: {
              bm: 'Bahagi $168$ dengan $15$ untuk mendapat jarak tegak terpendek.',
              en: 'Divide $168$ by $15$ to find the shortest perpendicular distance.'
            }
          }
        ]
      }
    ],

    // =========================================================================
    // TINGKATAN 4 BAB 10: NOMBOR INDEKS (10 SOALAN)
    // =========================================================================
    'f4-c10': [
      {
        code: '10.1', marks: 2,
        topic: { bm: 'Pengiraan Asas Indeks Harga', en: 'Basic Price Index Calculation' },
        q: {
          bm: 'Harga sekilogram beras meningkat daripada $\\text{RM }3.20$ pada tahun $2020$ kepada $\\text{RM }4.00$ pada tahun $2024$. Hitung indeks harga beras pada tahun $2024$ berasaskan tahun $2020$. [2m]',
          en: 'The price of $1\\text{ kg}$ of rice rose from $\\text{RM }3.20$ in $2020$ to $\\text{RM }4.00$ in $2024$. Calculate the price index in $2024$ based on $2020$. [2m]'
        },
        mistakes: {
          bm: [
            'Menyongsangkan pecahan dengan meletakkan harga tahun asas di pengangka: $\\frac{3.20}{4.00} \\times 100 = 80$.',
            'Terlupa mendarab dengan $100$ (meninggalkan jawapan sebagai nisbah $1.25$ bukannya indeks $125$).',
            'Mengira peratus kenaikan ($25\\%$) sahaja dan menulis jawapan $25$ tanpa menambah asas $100$.'
          ],
          en: [
            'Inverting the fraction by putting the base-year price on top: $\\frac{3.20}{4.00} \\times 100 = 80$.',
            'Forgetting to multiply by $100$, leaving $1.25$ instead of $125$.',
            'Giving only the percentage increase ($25$) instead of the index number ($100 + 25 = 125$).'
          ]
        },
        scheme: [
          {
            badge: 'K1',
            bm: 'Kenal pasti harga tahun asas $Q_{2020} = 3.20$ dan harga tahun semasa $Q_{2024} = 4.00$, lalu gantikan ke dalam $I = \\frac{Q_1}{Q_0} \\times 100$: $I_{24/20} = \\frac{4.00}{3.20} \\times 100$.',
            en: 'Identify base-year price $Q_{2020} = 3.20$ and current price $Q_{2024} = 4.00$, then substitute into $I = \\frac{Q_1}{Q_0} \\times 100$: $I_{24/20} = \\frac{4.00}{3.20} \\times 100$.',
            why: {
              bm: 'Harga tahun asas ($2020$) sentiasa berada di penyebut ($Q_0 = 100$), manakala tahun yang diukur ($2024$) di pengangka.',
              en: 'The base year ($2020$) always goes in the denominator ($Q_0$), and the target year ($2024$) in the numerator.'
            }
          },
          {
            badge: 'K1',
            bm: 'Bahagi dahulu kemudian darab $100$: $I_{24/20} = 1.25 \\times 100$.',
            en: 'Divide first, then multiply by $100$: $I_{24/20} = 1.25 \\times 100$.',
            why: {
              bm: 'Nisbah $1.25$ menunjukkan harga baharu ialah $1.25$ kali harga asal.',
              en: 'The ratio $1.25$ shows the new price is $1.25$ times the base price.'
            }
          },
          {
            badge: 'N1',
            bm: '$I_{24/20} = 125$ (bermaksud harga meningkat $25\\%$ berbanding tahun $2020$).',
            en: '$I_{24/20} = 125$ (meaning a $25\\%$ price increase from $2020$).',
            why: {
              bm: 'Nombor indeks tidak mempunyai unit $\\text{RM}$; nilai $> 100$ menandakan kenaikan.',
              en: 'Index numbers have no $\\text{RM}$ unit; values above $100$ mean an increase.'
            }
          }
        ]
      },
      {
        code: '10.2', marks: 3,
        topic: { bm: 'Mencari Harga Tahun Asas daripada Indeks Harga', en: 'Finding Base-Year Price from Price Index' },
        q: {
          bm: 'Indeks harga sebuah beg sekolah pada tahun $2023$ berasaskan tahun $2019$ ialah $115$. Jika harganya pada tahun $2023$ ialah $\\text{RM }69.00$, cari harganya pada tahun $2019$. [3m]',
          en: 'The price index of a school bag in $2023$ based on $2019$ is $115$. Given its price in $2023$ is $\\text{RM }69.00$, find its price in $2019$. [3m]'
        },
        mistakes: {
          bm: [
            'Menolak $15\\%$ terus daripada $\\text{RM }69.00$ ($69 \\times 0.85 = \\text{RM }58.65$) bukannya membahagi dengan $1.15$!',
            'Mendarab $69.00 \\times \\frac{115}{100} = \\text{RM }79.35$ (menganggap $\\text{RM }69.00$ ialah harga tahun asas $2019$).',
            'Salah menyusun pendaraban silang menjadi $P_{2019} = \\frac{115 \\times 100}{69}$.'
          ],
          en: [
            'Subtracting $15\\%$ of $\\text{RM }69.00$ ($69 \\times 0.85 = \\text{RM }58.65$) instead of dividing by $1.15$!',
            'Multiplying $69.00 \\times 1.15 = \\text{RM }79.35$ by treating $\\text{RM }69.00$ as the $2019$ base price.',
            'Cross-multiplying backwards as $P_{2019} = \\frac{115 \\times 100}{69}$.'
          ]
        },
        scheme: [
          {
            badge: 'K1',
            bm: 'Gantikan $Q_1 = 69.00$, $Q_0 = P_{2019}$, dan $I = 115$ ke dalam rumus indeks: $\\frac{69.00}{P_{2019}} \\times 100 = 115$.',
            en: 'Substitute $Q_1 = 69.00$, $Q_0 = P_{2019}$, and $I = 115$ into the index formula: $\\frac{69.00}{P_{2019}} \\times 100 = 115$.',
            why: {
              bm: 'Tahun asas ialah $2019$, jadi harga yang tidak diketahui $P_{2019}$ berada di penyebut.',
              en: 'Because $2019$ is the base year, the unknown $P_{2019}$ sits in the denominator.'
            }
          },
          {
            badge: 'K1',
            bm: 'Darab silang dan asingkan $P_{2019}$: $6900 = 115 P_{2019} \\implies P_{2019} = \\frac{6900}{115}$.',
            en: 'Cross-multiply and isolate $P_{2019}$: $6900 = 115 P_{2019} \\implies P_{2019} = \\frac{6900}{115}$.',
            why: {
              bm: 'Untuk mencari harga asal sebelum kenaikan $15\\%$, kita mesti membahagi dengan $115\\%$, bukan menolak $15\\%$ daripada harga baharu.',
              en: 'Reversing a $15\\%$ increase requires dividing by $1.15$, not subtracting $15\\%$ of the new price.'
            }
          },
          {
            badge: 'N1',
            bm: '$P_{2019} = \\text{RM }60.00$.',
            en: '$P_{2019} = \\text{RM }60.00$.',
            why: {
              bm: 'Semak: $\\frac{69.00}{60.00} \\times 100 = 115$ (tepat).',
              en: 'Check: $\\frac{69.00}{60.00} \\times 100 = 115$ (exact).'
            }
          }
        ]
      },
      {
        code: '10.3', marks: 4,
        topic: { bm: 'Indeks Gubahan dengan Pemberat Sudut Carta Pai', en: 'Composite Index Using Pie Chart Sector Angles' },
        q: {
          bm: 'Empat bahan $A, B, C, D$ mempunyai indeks harga $120, 140, 110, 130$ dan diwakili pada carta pai dengan sudut sektor masing-masing $90^\\circ, 120^\\circ, 100^\\circ$, dan $50^\\circ$. Hitung indeks gubahan $\\bar{I}$. [4m]',
          en: 'Four ingredients $A, B, C, D$ have price indices $120, 140, 110, 130$ and pie-chart angles $90^\\circ, 120^\\circ, 100^\\circ$, and $50^\\circ$. Calculate the composite index $\\bar{I}$. [4m]'
        },
        mistakes: {
          bm: [
            'Membahagikan hasil tambah dengan bilangan bahan ($4$) dan bukannya jumlah pemberat sudut bulatan penuh ($360^\\circ$).',
            'Mengambil purata mudah $\\frac{120 + 140 + 110 + 130}{4} = 125$ tanpa mendarab setiap indeks dengan sudut sektor masing-masing.',
            'Tersalah padan sudut sektor dengan indeks bahan (seperti memadankan $140$ dengan $90^\\circ$).'
          ],
          en: [
            'Dividing by the number of items ($4$) instead of the sum of pie-chart weights ($360^\\circ$).',
            'Taking an unweighted mean $\\frac{120+140+110+130}{4} = 125$ without multiplying by the angles.',
            'Mismatching a sector angle with the wrong ingredient\'s index.'
          ]
        },
        scheme: [
          {
            badge: 'K1',
            bm: 'Jumlahkan semua pemberat sudut sektor: $\\sum w_i = 90 + 120 + 100 + 50 = 360$.',
            en: 'Sum all sector angle weights: $\\sum w_i = 90 + 120 + 100 + 50 = 360$.',
            why: {
              bm: 'Satu bulatan penuh carta pai sentiasa berjumlah $360^\\circ$, yang menjadi penyebut indeks gubahan.',
              en: 'A full pie chart totals $360^\\circ$, which forms the denominator $\\sum w_i$.'
            }
          },
          {
            badge: 'K1',
            bm: 'Gantikan ke dalam $\\bar{I} = \\frac{\\sum I_i w_i}{\\sum w_i}$: $\\bar{I} = \\frac{120(90) + 140(120) + 110(100) + 130(50)}{360}$.',
            en: 'Substitute into $\\bar{I} = \\frac{\\sum I_i w_i}{\\sum w_i}$: $\\bar{I} = \\frac{120(90) + 140(120) + 110(100) + 130(50)}{360}$.',
            why: {
              bm: 'Setiap indeks harga didarab dengan sudut pemberatnya mengikut urutan $A, B, C, D$.',
              en: 'Multiply each item\'s price index by its matching angle weight in order $A, B, C, D$.'
            }
          },
          {
            badge: 'K1',
            bm: 'Kira setiap hasil darab dan jumlahkan pengangka: $\\bar{I} = \\frac{10800 + 16800 + 11000 + 6500}{360} = \\frac{45100}{360}$.',
            en: 'Compute each product and sum the numerator: $\\bar{I} = \\frac{10800 + 16800 + 11000 + 6500}{360} = \\frac{45100}{360}$.',
            why: {
              bm: 'Menulis setiap hasil darab berasingan memudahkan semakan dan melayakkan markah kaedah K1.',
              en: 'Listing each $I_i w_i$ product explicitly makes checking easy and secures K1 marks.'
            }
          },
          {
            badge: 'N1',
            bm: '$\\bar{I} = 125.28$.',
            en: '$\\bar{I} = 125.28$.',
            why: {
              bm: 'Indeks gubahan $125.28$ berada di antara nilai minimum ($110$) dan maksimum ($140$), maka munasabah.',
              en: '$125.28$ lies cleanly between the lowest ($110$) and highest ($140$) item indices.'
            }
          }
        ]
      },
      {
        code: '10.4', marks: 4,
        topic: { bm: 'Petua Rantai Penukaran Tahun Asas Indeks', en: 'Chain Rule for Shifting Base Year' },
        q: {
          bm: 'Diberi indeks harga suatu komoditi pada tahun $2020$ berasaskan $2018$ ialah $120$, dan pada tahun $2023$ berasaskan $2020$ ialah $125$. Cari indeks harga pada tahun $2023$ berasaskan $2018$, serta harganya pada $2023$ jika harganya pada $2018$ ialah $\\text{RM }40.00$. [4m]',
          en: 'Given $I_{20/18} = 120$ and $I_{23/20} = 125$, find $I_{23/18}$ and the price in $2023$ if the $2018$ price was $\\text{RM }40.00$. [4m]'
        },
        mistakes: {
          bm: [
            'Menambah peratus kenaikan secara terus ($20\\% + 25\\% = 45\\% \\implies 145$) bukannya mendarab rantai $\\frac{120 \\times 125}{100} = 150$.',
            'Terlupa membahagi hasil darab $125 \\times 120$ dengan $100$ (menulis $I_{23/18} = 15000$).',
            'Menggunakan indeks $125$ sahaja untuk mengira harga $2023$ daripada harga $2018$ ($40 \\times 1.25 = \\text{RM }50.00$) bukannya indeks rantai $150$.'
          ],
          en: [
            'Adding percentage increases ($20\\% + 25\\% = 45\\% \\implies 145$) instead of chaining $\\frac{120 \\times 125}{100} = 150$.',
            'Forgetting to divide $125 \\times 120$ by $100$, leaving $15000$.',
            'Multiplying the $2018$ price by $1.25$ instead of the chained $2023$-on-$2018$ index $1.50$.'
          ]
        },
        scheme: [
          {
            badge: 'K1',
            bm: 'Guna petua rantai tahun $2018 \\to 2020 \\to 2023$: $I_{23/18} = \\frac{I_{23/20} \\times I_{20/18}}{100} = \\frac{125 \\times 120}{100}$.',
            en: 'Apply the chain rule $2018 \\to 2020 \\to 2023$: $I_{23/18} = \\frac{I_{23/20} \\times I_{20/18}}{100} = \\frac{125 \\times 120}{100}$.',
            why: {
              bm: 'Tahun perantara ($2020$) dibatalkan melalui pendaraban dua indeks berantai dibahagi $100$.',
              en: 'The bridge year ($2020$) cancels out when chaining two indices and dividing by $100$.'
            }
          },
          {
            badge: 'N1',
            bm: '$I_{23/18} = \\frac{15000}{100} = 150$.',
            en: '$I_{23/18} = \\frac{15000}{100} = 150$.',
            why: {
              bm: 'Peningkatan berganda $+20\\%$ diikuti $+25\\%$ pada harga yang sudah naik menghasilkan jumlah kenaikan $+50\\%$.',
              en: 'A $+20\\%$ rise followed by $+25\\%$ on the new price compounds to $+50\\%$ total.'
            }
          },
          {
            badge: 'K1',
            bm: 'Gantikan $I_{23/18} = 150$ dan $P_{2018} = 40.00$ ke dalam $\\frac{P_{2023}}{P_{2018}} \\times 100 = 150$: $\\frac{P_{2023}}{40.00} \\times 100 = 150 \\implies P_{2023} = 40.00 \\times \\frac{150}{100}$.',
            en: 'Substitute $I_{23/18} = 150$ and $P_{2018} = 40.00$ into $\\frac{P_{2023}}{P_{2018}} \\times 100 = 150$: $\\frac{P_{2023}}{40.00} \\times 100 = 150 \\implies P_{2023} = 40.00 \\times \\frac{150}{100}$.',
            why: {
              bm: 'Gunakan indeks berasaskan $2018$ ($150$) kerana harga yang diberi ialah harga tahun $2018$.',
              en: 'Use the $2018$-based index ($150$) since the given price is from $2018$.'
            }
          },
          {
            badge: 'N1',
            bm: '$P_{2023} = \\text{RM }60.00$.',
            en: '$P_{2023} = \\text{RM }60.00$.',
            why: {
              bm: 'Semak langkah demi langkah: $40 \\times 1.20 = 48$ ($2020$), lalu $48 \\times 1.25 = 60$ ($2023$).',
              en: 'Step check: $40 \\times 1.20 = 48$ ($2020$), then $48 \\times 1.25 = 60$ ($2023$).'
            }
          }
        ]
      },
      {
        code: '10.5', marks: 4,
        topic: { bm: 'Mencari Pemberat $k$ yang Tidak Diketahui', en: 'Finding an Unknown Weight $k$ from Composite Index' },
        q: {
          bm: 'Tiga komponen $P, Q, R$ mempunyai indeks harga $110, 130, 140$ dan pemberat $3, k, 2$ masing-masing. Jika indeks gubahan ialah $126$, cari nilai $k$. [4m]',
          en: 'Three components $P, Q, R$ have indices $110, 130, 140$ and weights $3, k, 2$. Given the composite index is $126$, find $k$. [4m]'
        },
        mistakes: {
          bm: [
            'Tertinggal pemboleh ubah $k$ pada penyebut jumlah pemberat (menulis penyebut $3 + 2 = 5$ bukannya $3 + k + 2 = 5 + k$).',
            'Terlupa mendarab $126$ dengan kedua-dua sebutan dalam $(5 + k)$: menulis $610 + 130k = 630 + k$.',
            'Silap memindahkan sebutan $126k$: menambah $130k + 126k = 256k$ bukannya menolak $130k - 126k = 4k$.'
          ],
          en: [
            'Forgetting to include $k$ in the denominator sum of weights (using $5$ instead of $5 + k$).',
            'Failing to distribute $126$ across $(5 + k)$, writing $610 + 130k = 630 + k$.',
            'Sign error when collecting $k$-terms: adding $130k + 126k$ instead of $130k - 126k = 4k$.'
          ]
        },
        scheme: [
          {
            badge: 'K1',
            bm: 'Masukkan semua indeks dan pemberat termasuk $k$ ke dalam $\\bar{I} = \\frac{\\sum I_i w_i}{\\sum w_i}$: $\\frac{110(3) + 130k + 140(2)}{3 + k + 2} = 126$.',
            en: 'Substitute all indices and weights including $k$ into $\\bar{I} = \\frac{\\sum I_i w_i}{\\sum w_i}$: $\\frac{110(3) + 130k + 140(2)}{3 + k + 2} = 126$.',
            why: {
              bm: 'Pemberat $k$ wujud di pengangka ($130k$) dan juga di penyebut ($3 + k + 2$).',
              en: 'The unknown weight $k$ appears in both the numerator ($130k$) and the denominator ($3 + k + 2$).'
            }
          },
          {
            badge: 'K1',
            bm: 'Permudahkan pengangka dan penyebut: $\\frac{330 + 130k + 280}{5 + k} = 126 \\implies \\frac{610 + 130k}{5 + k} = 126$.',
            en: 'Simplify numerator and denominator: $\\frac{330 + 130k + 280}{5 + k} = 126 \\implies \\frac{610 + 130k}{5 + k} = 126$.',
            why: {
              bm: 'Kumpul nombor tetap dahulu ($330 + 280 = 610$) sebelum mendarab silang.',
              en: 'Combine the fixed products ($330 + 280 = 610$) before cross-multiplying.'
            }
          },
          {
            badge: 'K1',
            bm: 'Darab silang dengan $(5 + k)$ dan kembangkan: $610 + 130k = 126(5 + k) \\implies 610 + 130k = 630 + 126k$.',
            en: 'Cross-multiply by $(5 + k)$ and expand: $610 + 130k = 126(5 + k) \\implies 610 + 130k = 630 + 126k$.',
            why: {
              bm: 'Darab $126$ dengan kedua-dua $5$ dan $k$ untuk menghapuskan pecahan.',
              en: 'Distribute $126$ over both $5$ and $k$ to clear the fraction.'
            }
          },
          {
            badge: 'N1',
            bm: 'Kumpul sebutan $k$: $130k - 126k = 630 - 610 \\implies 4k = 20 \\implies k = 5$.',
            en: 'Collect $k$-terms: $130k - 126k = 630 - 610 \\implies 4k = 20 \\implies k = 5$.',
            why: {
              bm: 'Semak: $\\frac{610 + 130(5)}{5 + 5} = \\frac{1260}{10} = 126$.',
              en: 'Verify: $\\frac{610 + 130(5)}{5 + 5} = \\frac{1260}{10} = 126$.'
            }
          }
        ]
      },
      {
        code: '10.6', marks: 3,
        topic: { bm: 'Kenaikan Diikuti Penurunan Peratus Berantai', en: 'Successive Percentage Increase and Decrease' },
        q: {
          bm: 'Kos pengeluaran suatu alatan meningkat $10\\%$ dari tahun $2021$ ke $2022$, kemudian menyusut $5\\%$ dari tahun $2022$ ke $2023$. Cari indeks kos pada tahun $2023$ berasaskan $2021$. [3m]',
          en: 'Production cost rose $10\\%$ from $2021$ to $2022$, then dropped $5\\%$ from $2022$ to $2023$. Find the cost index in $2023$ based on $2021$. [3m]'
        },
        mistakes: {
          bm: [
            'Menolak peratus secara naif ($+10\\% - 5\\% = +5\\% \\implies 105$) tanpa mengambil kira asas tahun $2022$ yang lebih tinggi.',
            'Menulis indeks penyusutan $5\\%$ sebagai $5$ atau $105$ bukannya $100 - 5 = 95$.',
            'Menambah kedua-dua indeks ($110 + 95$) atau mengambil puratanya ($102.5$) bukannya menggunakan petua rantai.'
          ],
          en: [
            'Naively subtracting percentages ($10\\% - 5\\% = 5\\% \\implies 105$) instead of chaining on the new $2022$ base.',
            'Writing a $5\\%$ drop as index $5$ or $105$ instead of $100 - 5 = 95$.',
            'Averaging $110$ and $95$ ($102.5$) instead of multiplying via the chain rule.'
          ]
        },
        scheme: [
          {
            badge: 'K1',
            bm: 'Tukar perubahan peratus kepada nombor indeks tahunan: naik $10\\% \\implies I_{22/21} = 100 + 10 = 110$; susut $5\\% \\implies I_{23/22} = 100 - 5 = 95$.',
            en: 'Convert percentage changes to year-on-year indices: $+10\\% \\implies I_{22/21} = 100 + 10 = 110$; $-5\\% \\implies I_{23/22} = 100 - 5 = 95$.',
            why: {
              bm: 'Asas perubahan tahunan sentiasa bermula pada $100$: tambah jika naik, tolak jika susut.',
              en: 'Each yearly change starts from $100$: add for an increase, subtract for a decrease.'
            }
          },
          {
            badge: 'K1',
            bm: 'Guna petua rantai untuk membatalkan tahun $2022$: $I_{23/21} = \\frac{I_{23/22} \\times I_{22/21}}{100} = \\frac{95 \\times 110}{100} = \\frac{10450}{100}$.',
            en: 'Apply the chain rule to bridge $2022$: $I_{23/21} = \\frac{I_{23/22} \\times I_{22/21}}{100} = \\frac{95 \\times 110}{100} = \\frac{10450}{100}$.',
            why: {
              bm: 'Penyusutan $5\\%$ berlaku atas harga tahun $2022$ yang sudah bernilai $110\\%$, bukan atas $100\\%$.',
              en: 'The $5\\%$ drop acts on the already-increased $2022$ cost ($110$), not the original $100$.'
            }
          },
          {
            badge: 'N1',
            bm: '$I_{23/21} = 104.5$.',
            en: '$I_{23/21} = 104.5$.',
            why: {
              bm: 'Contoh nombor: $\\text{RM }100 \\to \\text{RM }110 \\to 110 \\times 0.95 = \\text{RM }104.50$.',
              en: 'Concrete check: $\\text{RM }100 \\to \\text{RM }110 \\to 110 \\times 0.95 = \\text{RM }104.50$.'
            }
          }
        ]
      },
      {
        code: '10.7', marks: 4,
        topic: { bm: 'Indeks Gubahan Berdasarkan Nisbah Kuantiti', en: 'Composite Index Using Ratio Weights' },
        q: {
          bm: 'Sebuah kedai roti mencampurkan tepung, gula, dan mentega mengikut nisbah $5 : 3 : 2$. Indeks harga ketiga-tiga bahan ialah $115$, $125$, dan $105$. Hitung indeks gubahan kos bahan. [4m]',
          en: 'A bakery mixes flour, sugar, and butter in ratio $5 : 3 : 2$. Their price indices are $115$, $125$, and $105$. Calculate the composite index. [4m]'
        },
        mistakes: {
          bm: [
            'Membahagi dengan bilangan bahan ($3$) bukannya jumlah pemberat nisbah $5 + 3 + 2 = 10$.',
            'Menukarkan nisbah $5 : 3 : 2$ menjadi peratus secara salah (cth: $50, 30, 20$ tetapi masih membahagi dengan $10$).',
            'Tersalah padan pemberat dengan indeks bahan (cth: mendarab $125$ dengan $2$).'
          ],
          en: [
            'Dividing by the number of ingredients ($3$) instead of the sum of ratio weights $5 + 3 + 2 = 10$.',
            'Converting $5 : 3 : 2$ to percentages ($50, 30, 20$) in the numerator while still dividing by $10$.',
            'Mismatching a ratio weight with the wrong ingredient\'s index.'
          ]
        },
        scheme: [
          {
            badge: 'K1',
            bm: 'Jumlahkan semua pemberat nisbah: $\\sum w_i = 5 + 3 + 2 = 10$.',
            en: 'Sum all ratio weights: $\\sum w_i = 5 + 3 + 2 = 10$.',
            why: {
              bm: 'Nisbah kuantiti boleh digunakan terus sebagai pemberat $w_i$ dalam rumus indeks gubahan.',
              en: 'Quantity ratios can be used directly as weights $w_i$ in the composite index formula.'
            }
          },
          {
            badge: 'K1',
            bm: 'Gantikan ke dalam $\\bar{I} = \\frac{\\sum I_i w_i}{\\sum w_i}$: $\\bar{I} = \\frac{115(5) + 125(3) + 105(2)}{10}$.',
            en: 'Substitute into $\\bar{I} = \\frac{\\sum I_i w_i}{\\sum w_i}$: $\\bar{I} = \\frac{115(5) + 125(3) + 105(2)}{10}$.',
            why: {
              bm: 'Padankan setiap bahan mengikut urutan: tepung ($115, 5$), gula ($125, 3$), mentega ($105, 2$).',
              en: 'Match each item in order: flour ($115, 5$), sugar ($125, 3$), butter ($105, 2$).'
            }
          },
          {
            badge: 'K1',
            bm: 'Kira setiap hasil darab dan jumlahkan pengangka: $\\bar{I} = \\frac{575 + 375 + 210}{10} = \\frac{1160}{10}$.',
            en: 'Compute each product and sum the numerator: $\\bar{I} = \\frac{575 + 375 + 210}{10} = \\frac{1160}{10}$.',
            why: {
              bm: 'Semak setiap hasil darab sebelum menjumlah supaya ralat tekan kalkulator dikesan awal.',
              en: 'Check each individual product before summing to catch calculator slips.'
            }
          },
          {
            badge: 'N1',
            bm: '$\\bar{I} = 116$.',
            en: '$\\bar{I} = 116$.',
            why: {
              bm: 'Bahagi $1160$ dengan $10$ untuk memperoleh indeks gubahan kos bahan.',
              en: 'Divide $1160$ by $10$ to get the composite cost index.'
            }
          }
        ]
      },
      {
        code: '10.8', marks: 3,
        topic: { bm: 'Aplikasi Indeks Gubahan kepada Jumlah Kos Jualan', en: 'Applying Composite Index to Total Cost' },
        q: {
          bm: 'Indeks gubahan kos pembuatan sebuah kek pada tahun $2024$ berasaskan $2020$ ialah $132$. Jika kos pembuatan sebiji kek pada tahun $2024$ ialah $\\text{RM }39.60$, cari kosnya pada tahun $2020$. [3m]',
          en: 'The composite cost index of making a cake in $2024$ based on $2020$ is $132$. Given the $2024$ cost is $\\text{RM }39.60$, find its cost in $2020$. [3m]'
        },
        mistakes: {
          bm: [
            'Mendarab $39.60 \\times 1.32 = \\text{RM }52.27$ seolah-olah mencari kos masa hadapan, sedangkan tahun $2020$ ialah tahun asas ($100$).',
            'Menolak $32\\%$ daripada $\\text{RM }39.60$ ($39.60 \\times 0.68 = \\text{RM }26.93$).',
            'Menganggap indeks gubahan tidak boleh digunakan dengan rumus harga $\\bar{I} = \\frac{C_1}{C_0} \\times 100$.'
          ],
          en: [
            'Multiplying $39.60 \\times 1.32 = \\text{RM }52.27$ instead of dividing to recover the $2020$ base cost.',
            'Subtracting $32\\%$ of $\\text{RM }39.60$ ($39.60 \\times 0.68 = \\text{RM }26.93$).',
            'Not recognizing that composite index obeys the same total-cost relation $\\bar{I} = \\frac{C_1}{C_0} \\times 100$.'
          ]
        },
        scheme: [
          {
            badge: 'K1',
            bm: 'Gantikan $\\bar{I} = 132$ dan $C_{2024} = 39.60$ ke dalam $\\bar{I} = \\frac{C_{2024}}{C_{2020}} \\times 100$: $\\frac{39.60}{C_{2020}} \\times 100 = 132$.',
            en: 'Substitute $\\bar{I} = 132$ and $C_{2024} = 39.60$ into $\\bar{I} = \\frac{C_{2024}}{C_{2020}} \\times 100$: $\\frac{39.60}{C_{2020}} \\times 100 = 132$.',
            why: {
              bm: 'Indeks gubahan menghubungkan jumlah kos tahun semasa dengan jumlah kos tahun asas dengan cara yang sama seperti indeks harga.',
              en: 'The composite index relates total current cost to total base-year cost just like a single price index.'
            }
          },
          {
            badge: 'K1',
            bm: 'Darab silang dan asingkan $C_{2020}$: $3960 = 132 C_{2020} \\implies C_{2020} = \\frac{3960}{132}$.',
            en: 'Cross-multiply and isolate $C_{2020}$: $3960 = 132 C_{2020} \\implies C_{2020} = \\frac{3960}{132}$.',
            why: {
              bm: 'Kos pada tahun $2020$ mestilah lebih rendah daripada $\\text{RM }39.60$ kerana indeks $> 100$.',
              en: 'The $2020$ cost must be lower than $\\text{RM }39.60$ since the index is above $100$.'
            }
          },
          {
            badge: 'N1',
            bm: '$C_{2020} = \\text{RM }30.00$.',
            en: '$C_{2020} = \\text{RM }30.00$.',
            why: {
              bm: 'Semak: $30.00 \\times 1.32 = 39.60$ (tepat).',
              en: 'Check: $30.00 \\times 1.32 = 39.60$ (exact).'
            }
          }
        ]
      },
      {
        code: '10.9', marks: 4,
        topic: { bm: 'Pemberat Peratus Perbelanjaan Bulanan', en: 'Percentage Expenditure Weights' },
        q: {
          bm: 'Perbelanjaan sebuah keluarga terdiri daripada Makanan ($40\\%$), Pengangkutan ($30\\%$), Utiliti ($15\\%$), dan Lain-lain ($15\\%$) dengan indeks harga masing-masing $120, 110, 140$, dan $100$. Hitung indeks gubahan perbelanjaan. [4m]',
          en: 'A family\'s budget is Food ($40\\%$), Transport ($30\\%$), Utilities ($15\\%$), and Others ($15\\%$) with price indices $120, 110, 140$, and $100$. Find the composite index. [4m]'
        },
        mistakes: {
          bm: [
            'Lupa membahagikan hasil darab peratus dengan jumlah keseluruhan peratus iaitu $100$ (meninggalkan jawapan $11700$).',
            'Membahagi dengan bilangan kategori ($4$) bukannya jumlah pemberat peratus ($100$).',
            'Menukar peratus kepada perpuluhan ($0.4, 0.3, 0.15, 0.15$) tetapi masih membahagi dengan $100$ (mendapat $1.17$ bukannya $117$).'
          ],
          en: [
            'Forgetting to divide the weighted sum by the total percentage $100$, leaving $11700$.',
            'Dividing by the number of categories ($4$) instead of $100$.',
            'Converting percentages to decimals ($0.4, 0.3, \\dots$) while still dividing by $100$, yielding $1.17$.'
          ]
        },
        scheme: [
          {
            badge: 'K1',
            bm: 'Semak jumlah pemberat peratus: $\\sum w_i = 40 + 30 + 15 + 15 = 100$.',
            en: 'Verify the sum of percentage weights: $\\sum w_i = 40 + 30 + 15 + 15 = 100$.',
            why: {
              bm: 'Nilai peratus boleh digunakan terus sebagai pemberat $w_i$ dan jumlahnya ialah $100$.',
              en: 'Percentage shares act directly as weights $w_i$ whose sum is $100$.'
            }
          },
          {
            badge: 'K1',
            bm: 'Gantikan ke dalam $\\bar{I} = \\frac{\\sum I_i w_i}{\\sum w_i}$: $\\bar{I} = \\frac{120(40) + 110(30) + 140(15) + 100(15)}{100}$.',
            en: 'Substitute into $\\bar{I} = \\frac{\\sum I_i w_i}{\\sum w_i}$: $\\bar{I} = \\frac{120(40) + 110(30) + 140(15) + 100(15)}{100}$.',
            why: {
              bm: 'Pastikan setiap kategori dipadankan dengan indeks harganya yang betul.',
              en: 'Match each category with its exact price index.'
            }
          },
          {
            badge: 'K1',
            bm: 'Kira setiap hasil darab dan jumlahkan pengangka: $\\bar{I} = \\frac{4800 + 3300 + 2100 + 1500}{100} = \\frac{11700}{100}$.',
            en: 'Compute each product and sum the numerator: $\\bar{I} = \\frac{4800 + 3300 + 2100 + 1500}{100} = \\frac{11700}{100}$.',
            why: {
              bm: 'Tunjukkan semua empat hasil darab secara jelas sebelum membahagi dengan $100$.',
              en: 'Show all four products explicitly before dividing by $100$.'
            }
          },
          {
            badge: 'N1',
            bm: '$\\bar{I} = 117$.',
            en: '$\\bar{I} = 117$.',
            why: {
              bm: 'Perbelanjaan keseluruhan keluarga meningkat sebanyak $17\\%$.',
              en: 'Overall family expenditure rose by $17\\%$.'
            }
          }
        ]
      },
      {
        code: '10.10', marks: 4,
        topic: { bm: 'Mencari Indeks Harga Satu Bahan daripada Indeks Gubahan', en: 'Finding a Single Item\'s Index from Composite Index' },
        q: {
          bm: 'Indeks gubahan bagi empat bahan $A, B, C, D$ ialah $128$. Diberi pasangan $(I_i, w_i)$ bagi $A(120, 2)$, $B(130, 3)$, $C(140, 1)$, dan $D(I_D, 4)$. Cari nilai $I_D$. [4m]',
          en: 'The composite index for items $A, B, C, D$ is $128$. Given $(I_i, w_i)$ pairs $A(120, 2)$, $B(130, 3)$, $C(140, 1)$, and $D(I_D, 4)$, find $I_D$. [4m]'
        },
        mistakes: {
          bm: [
            'Membahagikan pengangka dengan bilangan item ($4$) bukannya jumlah pemberat $2 + 3 + 1 + 4 = 10$.',
            'Kecuaian mendarab silang atau memindahkan $770$: lupa mendarab $128 \\times 10 = 1280$, atau menambah $1280 + 770$.',
            'Mengabaikan pemberat $4$ bagi bahan $D$ dan menulis $I_D = 1280 - 770 = 510$ tanpa membahagi dengan $4$.'
          ],
          en: [
            'Dividing by the number of items ($4$) instead of total weight $2 + 3 + 1 + 4 = 10$.',
            'Algebraic slip forgetting $128 \\times 10 = 1280$ or adding $770$ instead of subtracting it.',
            'Dropping weight $4$ on $I_D$ and writing $I_D = 510$ without dividing by $4$.'
          ]
        },
        scheme: [
          {
            badge: 'K1',
            bm: 'Kira jumlah pemberat dan gantikan ke dalam $\\bar{I} = \\frac{\\sum I_i w_i}{\\sum w_i}$: $\\frac{120(2) + 130(3) + 140(1) + 4I_D}{2 + 3 + 1 + 4} = 128$.',
            en: 'Sum the weights and substitute into $\\bar{I} = \\frac{\\sum I_i w_i}{\\sum w_i}$: $\\frac{120(2) + 130(3) + 140(1) + 4I_D}{2 + 3 + 1 + 4} = 128$.',
            why: {
              bm: 'Nilai $I_D$ mesti didarab dengan pemberatnya sendiri ($4$) di pengangka, dan jumlah pemberat $10$ berada di penyebut.',
              en: '$I_D$ must be multiplied by its weight $4$ in the numerator, with total weight $10$ in the denominator.'
            }
          },
          {
            badge: 'K1',
            bm: 'Permudahkan hasil darab yang diketahui: $\\frac{240 + 390 + 140 + 4I_D}{10} = 128 \\implies \\frac{770 + 4I_D}{10} = 128$.',
            en: 'Simplify the known products: $\\frac{240 + 390 + 140 + 4I_D}{10} = 128 \\implies \\frac{770 + 4I_D}{10} = 128$.',
            why: {
              bm: 'Jumlahkan hasil darab bahan $A, B, C$ dahulu ($240 + 390 + 140 = 770$).',
              en: 'Sum the known products for $A, B, C$ ($240 + 390 + 140 = 770$) first.'
            }
          },
          {
            badge: 'K1',
            bm: 'Darab silang dengan $10$ dan asingkan $4I_D$: $770 + 4I_D = 1280 \\implies 4I_D = 1280 - 770 = 510$.',
            en: 'Cross-multiply by $10$ and isolate $4I_D$: $770 + 4I_D = 1280 \\implies 4I_D = 1280 - 770 = 510$.',
            why: {
              bm: 'Hapuskan penyebut $10$ dengan mendarab $128 \\times 10$, kemudian tolak $770$.',
              en: 'Clear the denominator by multiplying $128 \\times 10$, then subtract $770$.'
            }
          },
          {
            badge: 'N1',
            bm: 'Bahagi dengan $4$: $I_D = \\frac{510}{4} = 127.5$.',
            en: 'Divide by $4$: $I_D = \\frac{510}{4} = 127.5$.',
            why: {
              bm: 'Semak: $\\frac{770 + 4(127.5)}{10} = \\frac{770 + 510}{10} = 128$.',
              en: 'Verify: $\\frac{770 + 4(127.5)}{10} = \\frac{1280}{10} = 128$.'
            }
          }
        ]
      }
    ]
  });
})(window.AddMathApp);
