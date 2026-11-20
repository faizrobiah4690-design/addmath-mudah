/**
 * AddMath Mudah — Fasa 2: Tingkatan 4 Bab 6 hingga Bab 10 (Lengkap & Dwibahasa BM / EN)
 * Bab 6: Hukum Linear | Bab 7: Geometri Koordinat | Bab 8: Vektor | Bab 9: Penyelesaian Segi Tiga | Bab 10: Nombor Indeks
 */
window.AddMathApp = window.AddMathApp || {};
window.AddMathApp.chapters = window.AddMathApp.chapters || [];

(function (App) {
  'use strict';
  const U = App.utils;

  function isNumInput(val) {
    if (typeof val === 'number') return Number.isFinite(val);
    if (typeof val === 'string') return val.trim() !== '' && Number.isFinite(Number(val));
    return false;
  }

  function fmtSmart(val, dp = 4) {
    if (!Number.isFinite(val)) return 'Undefined';
    if (val === 0) return '0';
    if (Math.abs(val) < Math.pow(10, -dp)) {
      const s = String(Number(val.toPrecision(4)));
      if (s.includes('e')) {
        const [mant, exp] = s.split('e');
        return `${mant} \\times 10^{${Number(exp)}}`;
      }
      return s;
    }
    return U.roundStr(val, dp);
  }

  function dedupTraps(traps, correctValue, tol) {
    if (!Array.isArray(traps)) return [];
    const tTol = tol !== undefined ? tol : 0.05;
    const seen = [];
    return traps.filter((tr) => {
      if (!tr) return false;
      const tv = Number(tr.value);
      if (Number.isFinite(tv) && Number.isFinite(Number(correctValue))) {
        const cv = Number(correctValue);
        const ansTol = Math.max(tTol, Math.abs(cv) * 0.005);
        const trapTol = Math.max(tTol, Math.abs(tv) * 0.01);
        if (Math.abs(tv - cv) <= Math.max(ansTol, trapTol)) return false;
        for (const prev of seen) {
          const prevTol = Math.max(tTol, Math.abs(prev) * 0.01);
          if (Math.abs(tv - prev) <= Math.max(trapTol, prevTol)) return false;
        }
        seen.push(tv);
        return true;
      }
      const key = String(tr.value);
      if (key === String(correctValue) || seen.includes(key)) return false;
      seen.push(key);
      return true;
    });
  }

  function formatSignedFrac(num, den) {
    if (num === 0) return '';
    const isNeg = (num < 0) ^ (den < 0);
    const absTex = U.fracTex(Math.abs(num), Math.abs(den));
    return (isNeg ? ' - ' : ' + ') + absTex;
  }

  const f4Stage2 = [
    // =========================================================================
    // FORM 4 CHAPTER 6: LINEAR LAW / HUKUM LINEAR
    // =========================================================================
    {
      id: 'f4-c6',
      stage: 2,
      unlocked: true,
      form: 4,
      num: 6,
      code: { bm: 'T4 • Bab 6', en: 'F4 • Ch 6' },
      icon: 'Y=mX',
      color: '#06b6d4',
      category: 'algebra',
      title: { bm: 'Hukum Linear', en: 'Linear Law' },
      subtitle: {
        bm: 'Penukaran persamaan tak linear kepada Y = mX + C, pembinaan semula persamaan & garis penyuaian terbaik',
        en: 'Data linearization to Y = mX + C, equation reconstruction & line of best fit extraction'
      },
      spmWeight: { bm: 'Kertas 1 & Kertas 2 Bhg B (10 markah graf!)', en: 'Paper 1 & Paper 2 Sec B (10-mark graph!)' },
      concepts: [
        {
          title: { bm: '1. Jambatan y = mx + c & Penukaran kepada Y = mX + C', en: '1. Bridge from y = mx + c & Reduction to Y = mX + C' },
          prereq: {
            bm: 'Ingat semula garis lurus Tingkatan 3 **$y = mx + c$**: $m$ ialah kecerunan (kecuraman garis) dan $c$ ialah nilai $y$ apabila $x = 0$. Bayangkan melukis lengkung bebas dengan tangan — ia mudah senget! Jadi kita "seterika" lengkung itu menjadi garis lurus pembaris **$Y = mX + C$**.\nKotak huruf besar **$Y$** dan **$X$** hanya boleh mengandungi ungkapan $(x, y)$ sahaja, manakala **$m$** dan **$C$** wajib menjadi **pemalar tulen**.',
            en: 'Recall Form 3 straight lines **$y = mx + c$**: $m$ is gradient (steepness) and $c$ is the $y$-value when $x = 0$. Imagine ironing a bent wire flat so a straight ruler can measure it accurately! That is **$Y = mX + C$**.\nCapital boxes **$Y$** and **$X$** hold expressions of $(x, y)$ ONLY, while **$m$** and **$C$** must be **pure constants**.'
          },
          body: {
            bm: 'Pilih senjata yang betul mengikut bentuk persamaan asal:\n- **Senjata 1 (Algebra $\\div$ atau $\\times$):** Jika ada dua sebutan dipisahkan oleh $+$ atau $-$ (cth: $y = ax^2 + bx$), bahagi atau darab semua sebutan supaya satu pemalar terasing sebagai $+ C$.\n- **Senjata 2 ($\\log_{10}$ kedua-dua belah):** Jika berbentuk satu hasil darab berkuasa ($y = ab^x$ atau $y = ax^b$), ambil $\\log_{10}$ untuk menurunkan eksponen!\n**Semakan Wajib:** Jika huruf $x$ atau $y$ masih muncul di dalam $m$ atau $C$, penukaran anda belum siap.',
            en: 'Choose the right tool from the equation structure:\n- **Toolkit 1 (Algebraic $\\div$ or $\\times$):** When two terms are separated by $+$ or $-$ (e.g. $y = ax^2 + bx$), divide or multiply every term until one pure constant stands alone as $+ C$.\n- **Toolkit 2 ($\\log_{10}$ on both sides):** For a single product with powers ($y = ab^x$ or $y = ax^b$), take $\\log_{10}$ to bring exponents down!\n**Constant Check:** If $x$ or $y$ still sits inside $m$ or $C$, your linearization is NOT finished.'
          },
          firstStep: {
            bm: '1. Periksa sama ada persamaan ada tanda $+$ / $-$ (guna algebra $\\div / \\times$) atau hanya satu hasil darab berkuasa (guna $\\log_{10}$).\n2. Asingkan satu sebutan yang **langsung tiada $x$ atau $y$** sebagai $+ C$.\n3. Semak semula: $Y$ dan $X$ hanya ada pemboleh ubah; $m$ dan $C$ hanya ada pemalar.',
            en: '1. Check for $+$ / $-$ terms (use algebra $\\div / \\times$) vs a single product with a power (use $\\log_{10}$).\n2. Isolate one term containing **zero $x$ or $y$** to act as $+ C$.\n3. Confirm: $Y$ and $X$ hold variables only; $m$ and $C$ hold constants only.'
          },
          formulas: [
            { label: { bm: 'Bahagi dengan x (Kuadratik)', en: 'Divide by x (Quadratic)' }, tex: 'y = ax^2 + bx \\xrightarrow{\\div x} \\frac{y}{x} = ax + b \\quad \\left(Y=\\frac{y}{x},\\; X=x,\\; m=a,\\; C=b\\right)' },
            { label: { bm: 'Ambil log₁₀ (Eksponen)', en: 'Apply log₁₀ (Exponential)' }, tex: 'y = ab^x \\implies \\log_{10} y = (\\log_{10} b)x + \\log_{10} a' },
            { label: { bm: 'Ambil log₁₀ (Kuasa)', en: 'Apply log₁₀ (Power)' }, tex: 'y = ax^b \\implies \\log_{10} y = b(\\log_{10} x) + \\log_{10} a' }
          ],
          workedExample: {
            title: { bm: 'Contoh: Mencari Pemalar a dan b daripada Graf log₁₀ y melawan x', en: 'Example: Finding Constants a and b from log₁₀ y against x' },
            problem: {
              bm: 'Pemboleh ubah $x$ dan $y$ mematuhi $y = ab^x$. Graf garis lurus $\\log_{10} y$ melawan $x$ melalui titik $(1, 1.3)$ dan $(5, 2.5)$. Cari nilai $a$ dan $b$.',
              en: 'Variables $x$ and $y$ obey $y = ab^x$. The straight-line graph of $\\log_{10} y$ against $x$ passes through $(1, 1.3)$ and $(5, 2.5)$. Find the values of $a$ and $b$.'
            },
            steps: [
              {
                label: { bm: 'Tukarkan $y = ab^x$ kepada bentuk $Y = mX + C$', en: 'Linearize $y = ab^x$ into $Y = mX + C$' },
                tex: '\\log_{10} y = (\\log_{10} b)x + \\log_{10} a',
                why: {
                  bm: 'Mengambil $\\log_{10}$ memecahkan hasil darab $\\log_{10} a + \\log_{10}(b^x)$ dan menurunkan kuasa $x$. Maka $m = \\log_{10} b$ dan $C = \\log_{10} a$.',
                  en: 'Taking $\\log_{10}$ splits $\\log_{10} a + \\log_{10}(b^x)$ and brings $x$ down. Hence $m = \\log_{10} b$ and $C = \\log_{10} a$.'
                }
              },
              {
                label: { bm: 'Kira kecerunan $m$ daripada dua titik', en: 'Compute gradient $m$ from two points' },
                tex: 'm = \\frac{2.5 - 1.3}{5 - 1} = \\frac{1.2}{4} = 0.3',
                why: {
                  bm: 'Kecerunan graf linear ialah nisbah perubahan paksi menegak $Y$ kepada perubahan paksi mengufuk $X$.',
                  en: 'The gradient of the straight line is vertical change $\\Delta Y$ divided by horizontal change $\\Delta X$.'
                }
              },
              {
                label: { bm: 'Kira pintasan-$Y$ ($C$) secara algebra', en: 'Compute $Y$-intercept $C$ algebraically' },
                tex: 'C = 1.3 - 0.3(1) = 1.3 - 0.3 = 1.0',
                why: {
                  bm: 'Gantikan titik $(1, 1.3)$ dan $m = 0.3$ ke dalam $Y = mX + C$ untuk mencari $C$.',
                  en: 'Substitute point $(1, 1.3)$ and $m = 0.3$ into $Y = mX + C$ to solve for $C$.'
                }
              },
              {
                label: { bm: 'Ambil antilog ($10^{\\dots}$) untuk mendapat $b$ dan $a$', en: 'Take base-10 antilog ($10^{\\dots}$) to find $b$ and $a$' },
                tex: 'b = 10^{0.3} \\approx 1.995, \\qquad a = 10^{1.0} = 10',
                why: {
                  bm: 'Oleh sebab $\\log_{10} b = 0.3$ dan $\\log_{10} a = 1.0$, tukarkan bentuk log kepada indeks asas $10$.',
                  en: 'Since $\\log_{10} b = 0.3$ and $\\log_{10} a = 1.0$, convert from log form back to base-$10$ index form.'
                }
              }
            ],
            trap: {
              bm: 'Jangan sekali-kali berhenti pada $a = 1.0$! Nilai $1.0$ ialah $\\log_{10} a$, jadi wajib tekan $10^{1.0} = 10$.',
              en: 'Never stop at $a = 1.0$! That $1.0$ is $\\log_{10} a$, so you must take $10^{1.0} = 10$.'
            }
          },
          tip: {
            bm: 'Semak $m$ dan $C$ anda: jika masih ada huruf $x$ atau $y$ di dalam $m$ atau $C$, penukaran anda BELUM selesai!',
            en: 'Always check $m$ and $C$: if $x$ or $y$ still appears inside $m$ or $C$, your reduction is incomplete!'
          }
        },
        {
          title: { bm: '2. Prinsip Garis Penyuaian Terbaik & Pintasan Algebra', en: '2. Line of Best Fit & Algebraic Intercept' },
          prereq: {
            bm: 'Bayangkan papan jongkang-jongket yang seimbang di tengah paku: garis penyuaian terbaik bukan disambung zig-zag dari titik ke titik, tetapi dilaras menggunakan pembaris lutsinar supaya bilangan titik di atas dan di bawah garis seimbang!',
            en: 'Think of balancing a seesaw across scattered nails: a line of best fit NEVER zig-zags dot-to-dot. Use a clear ruler to pass through as many points as possible while balancing remaining points evenly above and below!'
          },
          body: {
            bm: 'Lukis satu garis lurus selanjar menggunakan pembaris. Abaikan sebarang **titik terpencil (*outlier*)** yang menyimpang jauh. Untuk mengira $m$, pilih **dua titik berjauhan di atas garis yang dilukis** (bukan titik jadual yang terkeluar dari garis!).\nJika paksi-$X$ pada kertas graf **tidak bermula pada $X = 0$**, sempadan kiri graf BUKAN pintasan-$Y$ — kira $C = Y_1 - mX_1$ secara algebra.',
            en: 'Draw one continuous straight line with a ruler. Ignore any clear **outlier** lying far off the trend. To find $m$, pick **two widely spaced points lying ON the drawn line** (not off-line raw table values!).\nIf the $X$-axis does **not start at $X = 0$**, the left border is NOT $C$ — calculate $C = Y_1 - mX_1$ algebraically.'
          },
          firstStep: {
            bm: '1. Plot setiap pasangan $(X, Y)$ dengan pangkah halus $\\times$.\n2. Imbangi titik di kiri dan kanan pembaris lutsinar sebelum melukis garis.\n3. Pilih 2 titik silang grid di atas garis $\\to$ kira $m$ $\\to$ kira $C = Y_1 - mX_1$.',
            en: '1. Plot each $(X, Y)$ pair with neat $\\times$ crosses.\n2. Balance points above and below a clear ruler before drawing.\n3. Pick 2 grid-intersection points on the line $\\to$ find $m$ $\\to$ find $C = Y_1 - mX_1$.'
          },
          formulas: [
            { label: { bm: 'Kecerunan & Pintasan Algebra', en: 'Gradient & Algebraic Intercept' }, tex: 'm = \\frac{Y_2 - Y_1}{X_2 - X_1}, \\qquad C = Y_1 - mX_1' }
          ],
          workedExample: {
            title: { bm: 'Contoh: Mencari Pintasan-Y Apabila Paksi-X Bermula pada X = 2', en: 'Example: Finding Y-Intercept When X-Axis Starts at X = 2' },
            problem: {
              bm: 'Paksi mengufuk graf garis lurus bermula pada $X = 2$. Garis lurus melalui $(2, 5)$ pada tepi kiri graf dan titik $(6, 13)$. Cari kecerunan $m$ dan pintasan-$Y$ sebenar $C$.',
              en: 'The horizontal axis of a straight-line graph starts at $X = 2$. The line passes through $(2, 5)$ on the left border and $(6, 13)$. Find gradient $m$ and the true $Y$-intercept $C$.'
            },
            steps: [
              {
                label: { bm: 'Kira kecerunan $m$ daripada dua titik pada garis', en: 'Compute gradient $m$ from two points on the line' },
                tex: 'm = \\frac{13 - 5}{6 - 2} = \\frac{8}{4} = 2',
                why: {
                  bm: 'Walaupun graf bermula di $X = 2$, rumus kecerunan $\\frac{Y_2 - Y_1}{X_2 - X_1}$ tetap sah digunakan.',
                  en: 'Even when the graph starts at $X = 2$, the gradient formula $\\frac{Y_2 - Y_1}{X_2 - X_1}$ still applies directly.'
                }
              },
              {
                label: { bm: 'Gantikan $(2, 5)$ dan $m = 2$ ke dalam $C = Y_1 - mX_1$', en: 'Substitute $(2, 5)$ and $m = 2$ into $C = Y_1 - mX_1$' },
                tex: 'C = 5 - 2(2) = 5 - 4 = 1',
                why: {
                  bm: 'Nilai $5$ terletak pada $X = 2$, bukannya $X = 0$. Mengira $5 - 2(2) = 1$ membawa garis itu undur ke $X = 0$.',
                  en: 'The value $5$ occurs at $X = 2$, not $X = 0$. Subtracting $2(2)$ steps back to the true intercept at $X = 0$.'
                }
              }
            ],
            trap: {
              bm: 'Pelajar sering tersilap membaca $C = 5$ dari tepi kiri graf! Semak paksi-$X$ dahulu: $C$ hanya boleh dibaca terus jika paksi menegak berada tepat di $X = 0$.',
              en: 'Students often misread $C = 5$ from the left border! Always check the $X$-axis scale: you can only read $C$ directly at $X = 0$.'
            }
          },
          tip: {
            bm: 'Jika paksi-$X$ tidak bermula pada $X = 0$, JANGAN baca pintasan pada tepi graf — kira $C = Y_1 - mX_1$ secara algebra!',
            en: 'If the $X$-axis does not start at $X = 0$, NEVER read $C$ off the vertical border — calculate $C = Y_1 - mX_1$ algebraically!'
          }
        },
        {
          title: { bm: '3. Membina Semula Persamaan Asal y dalam Sebutan x daripada Graf', en: '3. Reconstructing Original Equation y in Terms of x from a Graph' },
          prereq: {
            bm: 'Ini seperti membaca resipi secara terbalik: anda sudah diberi garis lurus siap $Y = mX + C$ pada graf, dan tugas anda ialah membuka semula kotak $Y$ dan $X$ untuk mendapatkan persamaan asal $y$ dalam sebutan $x$.',
            en: 'Think of working a recipe backwards: the graph already gives you the straight line $Y = mX + C$, and your job is to unwrap capital $Y$ and $X$ back into the original equation for $y$ in terms of $x$.'
          },
          body: {
            bm: 'Sentiasa bermula dengan menulis label paksi graf tepat mengikut bentuk $(\\text{Paksi-}Y) = m(\\text{Paksi-}X) + C$. Selepas mendapat nilai nombor $m$ dan $C$, darab penyebut (jika pecahan) atau tukar logaritma menjadi indeks supaya $y$ berdiri seorang diri di sebelah kiri.',
            en: 'Always start by writing the exact axis labels into $(Y\\text{-axis}) = m(X\\text{-axis}) + C$. After substituting the numerical values of $m$ and $C$, clear any denominator or convert logarithms back to exponential/power form so $y$ stands alone on the left.'
          },
          firstStep: {
            bm: '1. Baca label paksi menegak ($Y$) dan paksi mengufuk ($X$) pada graf.\n2. Tulis $(\\text{Paksi-}Y) = m(\\text{Paksi-}X) + C$ dan kira $m, C$.\n3. Darab/bahagi atau ambil antilog untuk menjadikan $y$ sebagai perkara rumus.',
            en: '1. Read the vertical ($Y$) and horizontal ($X$) axis labels from the graph.\n2. Write $(Y\\text{-axis}) = m(X\\text{-axis}) + C$ and solve for $m, C$.\n3. Multiply/divide or take antilogs to make $y$ the subject.'
          },
          formulas: [
            {
              label: { bm: 'Templat Membina Semula Persamaan', en: 'Equation Reconstruction Template' },
              tex: { bm: '(\\text{Paksi-}Y) = m(\\text{Paksi-}X) + C', en: '(Y\\text{-axis}) = m(X\\text{-axis}) + C' }
            }
          ],
          workedExample: {
            title: { bm: 'Contoh: Membina Semula y daripada Graf y/x melawan 1/x', en: 'Example: Reconstructing y from a Graph of y/x against 1/x' },
            problem: {
              bm: 'Graf garis lurus $\\frac{y}{x}$ melawan $\\frac{1}{x}$ melalui titik $(1, 7)$ dan $(3, 11)$. Ungkapkan $y$ dalam sebutan $x$.',
              en: 'A straight-line graph of $\\frac{y}{x}$ against $\\frac{1}{x}$ passes through $(1, 7)$ and $(3, 11)$. Express $y$ in terms of $x$.'
            },
            steps: [
              {
                label: { bm: 'Kira kecerunan $m$ daripada $(1, 7)$ dan $(3, 11)$', en: 'Calculate gradient $m$ from $(1, 7)$ and $(3, 11)$' },
                tex: 'm = \\frac{11 - 7}{3 - 1} = \\frac{4}{2} = 2',
                why: {
                  bm: 'Koordinat titik diberi ialah pasangan $(X, Y)$ pada graf linear tersebut.',
                  en: 'The given coordinates are $(X, Y)$ pairs on the linearized graph.'
                }
              },
              {
                label: { bm: 'Cari pintasan-$Y$ ($C$) menggunakan titik $(1, 7)$', en: 'Find $Y$-intercept $C$ using point $(1, 7)$' },
                tex: 'C = 7 - 2(1) = 5',
                why: {
                  bm: 'Gantikan $(X_1, Y_1) = (1, 7)$ dan $m = 2$ ke dalam $C = Y_1 - mX_1$.',
                  en: 'Substitute $(X_1, Y_1) = (1, 7)$ and $m = 2$ into $C = Y_1 - mX_1$.'
                }
              },
              {
                label: { bm: 'Gantikan label paksi $Y = \\frac{y}{x}$ dan $X = \\frac{1}{x}$', en: 'Substitute axis labels $Y = \\frac{y}{x}$ and $X = \\frac{1}{x}$' },
                tex: '\\frac{y}{x} = 2\\left(\\frac{1}{x}\\right) + 5',
                why: {
                  bm: 'Jangan gantikan dengan $y$ dan $x$ biasa; wajib ikut label paksi sebenar graf.',
                  en: 'Do not use plain $y$ and $x$; substitute the exact vertical and horizontal axis expressions.'
                }
              },
              {
                label: { bm: 'Darab semua sebutan dengan $x$ untuk mengasingkan $y$', en: 'Multiply every term by $x$ to isolate $y$' },
                tex: 'y = 2 + 5x',
                why: {
                  bm: 'Mendarab $\\frac{y}{x}$ dengan $x$ memberi $y$, manakala $2(\\frac{1}{x}) \\cdot x = 2$ dan $5 \\cdot x = 5x$.',
                  en: 'Multiplying $\\frac{y}{x}$ by $x$ isolates $y$, while $2(\\frac{1}{x}) \\cdot x = 2$ and $5 \\cdot x = 5x$.'
                }
              }
            ],
            trap: {
              bm: 'Jangan lupa mendarab pemalar $+5$ dengan $x$ juga! Ramai pelajar tersilap menulis $y = 2 + 5$ sahaja.',
              en: 'Do not forget to multiply the constant $+5$ by $x$ as well! Every term on both sides must be multiplied by $x$.'
            }
          },
          tip: {
            bm: 'Sentiasa uji jawapan akhir dengan memasukkan satu titik $(X, Y)$ graf ke dalam persamaan $y$ yang dibina semula!',
            en: 'Always test your reconstructed equation by plugging one graph point $(X, Y)$ back in to verify it matches!'
          }
        }
      ],
      traps: [
        {
          title: { bm: 'Tertinggal Antilog Semasa Mencari Pemalar Asal', en: 'Forgetting Antilog When Recovering Original Constants' },
          desc: {
            bm: 'Jika $C = \\log_{10} a = 2$, maka $a = 10^2 = 100$ (**bukan** $a = 2$!).',
            en: 'If $C = \\log_{10} a = 2$, then $a = 10^2 = 100$ (**never** leave $a = 2$!).'
          }
        },
        {
          title: { bm: 'Membaca Tepi Kiri Graf Sebagai C Apabila X ≠ 0', en: 'Reading the Left Graph Border as C When X ≠ 0' },
          desc: {
            bm: 'Jika paksi-$X$ bermula pada $X = 2$ atau $X = 1$, garis menegak di sebelah kiri bukan $X = 0$. Wajib kira $C = Y_1 - mX_1$ secara algebra!',
            en: 'If the $X$-axis starts at $X = 2$ or $X = 1$, the left border is NOT $X = 0$. Always calculate $C = Y_1 - mX_1$ algebraically!'
          }
        },
        {
          title: { bm: 'Membiarkan x atau y di Dalam m atau C', en: 'Leaving x or y Inside Gradient m or Intercept C' },
          desc: {
            bm: 'Menulis $y = px + \\frac{q}{x}$ dengan $Y = y, X = x$ adalah SALAH kerana sebutan $\\frac{q}{x}$ masih mengandungi $x$. Sepatutnya darab $x$: $xy = p(x^2) + q$.',
            en: 'Writing $y = px + \\frac{q}{x}$ with $Y = y, X = x$ is WRONG because $\\frac{q}{x}$ still contains $x$. Instead multiply by $x$: $xy = p(x^2) + q$.'
          }
        }
      ],
      solvers: [
        {
          id: 'lin-law-solver',
          title: { bm: 'Solver Garis Penyuaian Terbaik (Dua Titik pada Y = mX + C)', en: 'Line of Best Fit Extractor (Two Points on Y = mX + C)' },
          desc: {
            bm: 'Kira kecerunan m, pintasan-Y (C), dan nilai pemalar asal bagi log₁₀ y = (log₁₀ b)x + log₁₀ a.',
            en: 'Compute gradient m, Y-intercept C, and recover constants for log₁₀ y = (log₁₀ b)x + log₁₀ a.'
          },
          inputs: [
            { id: 'x1', label: 'X₁', default: 1 },
            { id: 'y1', label: 'Y₁', default: 1.3 },
            { id: 'x2', label: 'X₂', default: 5 },
            { id: 'y2', label: 'Y₂', default: 2.5 }
          ],
          solve: function (v, lang) {
            if (!isNumInput(v.x1) || !isNumInput(v.y1) || !isNumInput(v.x2) || !isNumInput(v.y2)) {
              const msg = lang === 'bm' ? '\\text{Masukkan semua empat nombor yang sah}' : '\\text{Enter all four valid numbers}';
              return {
                problemTex: msg,
                steps: [{ badge: 'P1', title: lang === 'bm' ? 'Input tidak sah' : 'Invalid input', tex: msg, why: lang === 'bm' ? 'Pastikan X₁, Y₁, X₂, Y₂ ialah nombor nyata.' : 'Ensure X₁, Y₁, X₂, Y₂ are valid finite numbers.' }],
                finalTex: msg
              };
            }
            const x1 = Number(v.x1), y1 = Number(v.y1), x2 = Number(v.x2), y2 = Number(v.y2);
            const rawDx = x2 - x1;
            const rawDy = y2 - y1;
            if (Math.abs(rawDx) < 1e-6) {
              const vMsg = lang === 'bm' ? '\\text{Garis mencancang (kecerunan tak tertakrif)}' : '\\text{Vertical line (undefined gradient)}';
              const dxDiffTex = rawDx === 0 ? '0' : `${fmtSmart(rawDx, 6)} \\approx 0`;
              return {
                problemTex: `(${x1}, ${y1}),\\; (${x2}, ${y2})`,
                steps: [{ badge: 'P1', title: lang === 'bm' ? 'Semakan penyebut X₂ − X₁' : 'Denominator check X₂ − X₁', tex: `X_2 - X_1 = ${x2} - (${x1}) = ${dxDiffTex}`, why: lang === 'bm' ? 'Pembahagian dengan sifar (atau perbezaan X terlalu kecil < 10⁻⁶) tidak tertakrif; pilih dua titik berlainan nilai X.' : 'Division by zero (or near-zero X difference < 10⁻⁶) is undefined; pick two points with distinct X values.' }],
                finalTex: vMsg
              };
            }
            const m = rawDy / rawDx;
            const mx1 = m * x1;
            const C = y1 - mx1;
            const mStr = fmtSmart(m, 4);
            const cStr = fmtSmart(C, 4);
            const aVal = Math.pow(10, C);
            const bVal = Math.pow(10, m);
            const aOverflow = !Number.isFinite(aVal) || aVal === 0;
            const bOverflow = !Number.isFinite(bVal) || bVal === 0;
            const aTex = aOverflow ? `10^{${cStr}}` : fmtSmart(aVal, 3);
            const bTex = bOverflow ? `10^{${mStr}}` : fmtSmart(bVal, 3);
            const aStepTex = aOverflow ? `10^{${cStr}}` : `10^{${cStr}} = ${fmtSmart(aVal, 4)}`;
            const bStepTex = bOverflow ? `10^{${mStr}}` : `10^{${mStr}} = ${fmtSmart(bVal, 4)}`;
            const rangeNote = (aOverflow || bOverflow)
              ? (lang === 'bm' ? ' \\;(\\text{bentuk indeks tepat})' : ' \\;(\\text{exact exponential form})')
              : '';
            const intFracNote = (Number.isInteger(rawDy) && Number.isInteger(rawDx) && U.fracTex(rawDy, rawDx) !== U.roundStr(m, 4))
              ? ` = ${U.fracTex(rawDy, rawDx)} \\approx ${mStr}`
              : ` = ${mStr}`;
            return {
              problemTex: lang === 'bm'
                ? `A(${x1}, ${y1}), \\; B(${x2}, ${y2}) \\text{ pada graf } \\log_{10} y \\text{ lawan } x`
                : `A(${x1}, ${y1}), \\; B(${x2}, ${y2}) \\text{ on graph of } \\log_{10} y \\text{ against } x`,
              steps: [
                {
                  badge: 'K1',
                  title: lang === 'bm' ? 'Langkah 1: Kira kecerunan m' : 'Step 1: Compute gradient m',
                  tex: `m = \\frac{${y2} - (${y1})}{${x2} - (${x1})} = \\frac{${fmtSmart(rawDy, 4)}}{${fmtSmart(rawDx, 4)}}${intFracNote}`,
                  why: lang === 'bm' ? 'Tolak koordinat Y dahulu di pengangka, kemudian tolak koordinat X di penyebut.' : 'Subtract Y-values in numerator and X-values in denominator.'
                },
                {
                  badge: 'K1',
                  title: lang === 'bm' ? 'Langkah 2: Kira pintasan-Y (C)' : 'Step 2: Compute Y-intercept C',
                  tex: `C = ${y1} - (${mStr})(${x1}) = ${y1} - (${fmtSmart(mx1, 4)}) = ${cStr}`,
                  why: lang === 'bm' ? 'Gantikan titik pertama (X₁, Y₁) dan kecerunan m ke dalam C = Y₁ − mX₁.' : 'Substitute point 1 (X₁, Y₁) and m into C = Y₁ − mX₁.'
                },
                {
                  badge: 'K1',
                  title: lang === 'bm' ? 'Langkah 3: Dapatkan a dan b bagi y = abˣ' : 'Step 3: Recover a and b for y = abˣ',
                  tex: `\\log_{10} b = ${mStr} \\implies b = ${bStepTex}; \\quad \\log_{10} a = ${cStr} \\implies a = ${aStepTex}${rangeNote}`,
                  why: (aOverflow || bOverflow)
                    ? (lang === 'bm' ? 'Ambil antilog asas 10; bagi eksponen melangkaui julat perpuluhan piawai, nilai tepat dikekalkan sebagai kuasa $10^{n}$.' : 'Take base-10 antilog; for exponents outside standard floating-point range, the exact value is kept in exponential form $10^{n}$.')
                    : (lang === 'bm' ? 'Ambil antilog asas 10 (SHIFT + log) untuk menukar logaritma kepada pemalar asal.' : 'Take base-10 antilog (10^power) to recover original constants a and b.')
                },
                {
                  badge: 'J1',
                  title: lang === 'bm' ? 'Langkah 4: Bina semula persamaan asal' : 'Step 4: Reconstruct original equation',
                  tex: `y = ${aTex}(${bTex})^x`,
                  why: lang === 'bm' ? 'Masukkan a dan b kembali ke dalam persamaan asal y = abˣ.' : 'Substitute recovered a and b back into y = abˣ.'
                }
              ],
              finalTex: `m = ${mStr},\\; C = ${cStr} \\implies a = ${aTex},\\; b = ${bTex}${rangeNote}`,
              trapWarning: lang === 'bm'
                ? `Jangan tersilap menulis $a = ${cStr}$! Nilai $C$ ialah $\\log_{10} a$, jadi mesti ambil $10^{${cStr}} = ${aTex}$.`
                : `Never stop at $a = ${cStr}$! $C$ equals $\\log_{10} a$, so always take $10^{${cStr}} = ${aTex}$.`
            };
          }
        }
      ],
      generateQuestion: function (tier, lang) {
        if (tier === 1) {
          const p = U.randInt(2, 7);
          let q = U.randInt(-6, 8, true);
          while (q === p || q === 3 * p) q = U.randInt(-6, 8, true);
          const x1 = 1, y1 = p * 1 + q;
          const x2 = 4, y2 = p * 4 + q;
          const dy = y2 - y1;
          const dx = x2 - x1;
          return {
            tier: 1, tpLabel: 'TP1–TP2', subtopic: { bm: '6.1 Kecerunan & Pintasan Y = mX + C', en: '6.1 Gradient & Intercept of Y = mX + C' }, marks: 3,
            prompt: lang === 'bm'
              ? `Pemboleh ubah $x$ dan $y$ dihubungkan oleh $y = px^2 + qx$. Graf garis lurus $\\frac{y}{x}$ melawan $x$ melalui titik $(${x1}, ${y1})$ dan $(${x2}, ${y2})$. Cari nilai pemalar **$p$**.`
              : `Variables $x$ and $y$ are related by $y = px^2 + qx$. The straight-line graph of $\\frac{y}{x}$ against $x$ passes through $(${x1}, ${y1})$ and $(${x2}, ${y2})$. Find the constant **$p$**.`,
            answerType: 'number', correctValue: p, displayAnswerTex: `p = ${p} \\quad (q = ${q})`,
            intentMeta: {
              given: {
                bm: `$\\frac{y}{x} = px + q$, melalui $(${x1}, ${y1})$ dan $(${x2}, ${y2})$`,
                en: `$\\frac{y}{x} = px + q$, through $(${x1}, ${y1})$ and $(${x2}, ${y2})$`
              },
              goal: { bm: 'Cari kecerunan $p$', en: 'Find the gradient $p$' },
              conceptRule: { bm: 'Bahagi $x$: $\\frac{y}{x} = px + q$, maka $p = m$', en: 'Divide by $x$: $\\frac{y}{x} = px + q$, so $p = m$' }
            },
            guidedSteps: [
              {
                prompt: {
                  bm: `Apabila $y = px^2 + qx$ dibahagi dengan $x$, kita dapat $\\frac{y}{x} = px + q$. Kira perubahan menegak $\\Delta Y = ${y2} - (${y1})$:`,
                  en: `Dividing $y = px^2 + qx$ by $x$ gives $\\frac{y}{x} = px + q$. First compute $\\Delta Y = ${y2} - (${y1})$:`
                },
                expected: dy,
                hint: { bm: `${y2} − (${y1}) = ${dy}.`, en: `${y2} − (${y1}) = ${dy}.` }
              },
              {
                prompt: {
                  bm: `Sekarang bahagikan $\\Delta Y = ${dy}$ dengan $\\Delta X = ${x2} - ${x1} = ${dx}$ untuk mencari kecerunan $p$:`,
                  en: `Now divide $\\Delta Y = ${dy}$ by $\\Delta X = ${x2} - ${x1} = ${dx}$ to find gradient $p$:`
                },
                expected: p,
                hint: { bm: `${dy} ÷ ${dx} = ${p}.`, en: `${dy} ÷ ${dx} = ${p}.` }
              }
            ],
            traps: [
              {
                value: q,
                message: {
                  bm: `Diagnostik Pemalar [P]: ${q} ialah pintasan-Y (q), bukannya kecerunan p!`,
                  en: `Constant Diagnosis [P]: ${q} is Y-intercept q, whereas p is the gradient!`
                }
              },
              {
                value: dy,
                message: {
                  bm: `Cuai Langkah [K]: ${dy} ialah perbezaan Y₂ − Y₁ sahaja! Anda lupa membahagikannya dengan X₂ − X₁ = ${dx}.`,
                  en: `Missing Division [K]: ${dy} is only Y₂ − Y₁! You forgot to divide by X₂ − X₁ = ${dx}.`
                }
              }
            ],
            hints: [
              lang === 'bm' ? `Bahagi setiap sebutan $y = px^2 + qx$ dengan $x$ untuk mendapatkan $\\frac{y}{x} = px + q$.` : `Divide every term of $y = px^2 + qx$ by $x$ to get $\\frac{y}{x} = px + q$.`,
              lang === 'bm' ? `Bandingkan dengan $Y = mX + C$: $p$ ialah kecerunan $\\frac{${y2} - (${y1})}{${x2} - ${x1}}$.` : `Compare with $Y = mX + C$: $p$ is the gradient $\\frac{${y2} - (${y1})}{${x2} - ${x1}}$.`
            ],
            steps: [
              {
                badge: 'P1',
                title: lang === 'bm' ? 'Tukarkan ke bentuk linear' : 'Reduce to linear form',
                tex: `\\frac{y}{x} = px + q \\implies m = p,\\; C = q`,
                why: lang === 'bm' ? 'Membahagi semua sebutan dengan x memadankan paksi Y = y/x dan X = x dalam Y = mX + C.' : 'Dividing every term by x matches Y = y/x and X = x in Y = mX + C.'
              },
              {
                badge: 'K1',
                title: lang === 'bm' ? 'Hitung perbezaan ΔY dan ΔX' : 'Calculate ΔY and ΔX',
                tex: `p = \\frac{${y2} - (${y1})}{${x2} - ${x1}} = \\frac{${dy}}{${dx}}`,
                why: lang === 'bm' ? 'Masukkan kedua-dua titik (X, Y) ke dalam rumus kecerunan.' : 'Substitute both (X, Y) points into the gradient formula.'
              },
              {
                badge: 'J1',
                title: lang === 'bm' ? 'Permudahkan kecerunan p' : 'Simplify gradient p',
                tex: `p = ${p}`,
                why: lang === 'bm' ? 'Bahagikan perubahan Y dengan perubahan X.' : 'Divide vertical rise by horizontal run.'
              }
            ]
          };
        } else if (tier === 2) {
          const cExp = U.pick([2, 3]);
          const aAns = Math.pow(10, cExp);
          const mGrad = U.pick([0.5, 1, 2].filter((g) => g !== cExp));
          return {
            tier: 2, tpLabel: 'TP3–TP4', subtopic: { bm: '6.1 Transformasi Logaritma y = abˣ', en: '6.1 Logarithmic Linearization y = abˣ' }, marks: 4,
            prompt: lang === 'bm'
              ? `Pemboleh ubah $x$ dan $y$ dihubungkan oleh persamaan tak linear $y = ab^x$. Apabila graf $\\log_{10} y$ melawan $x$ diplotkan, garis lurus yang diperoleh mempunyai kecerunan $${mGrad}$ dan pintasan-$Y$ bernilai $${cExp}$. Cari nilai pemalar **$a$**.`
              : `Variables $x$ and $y$ satisfy $y = ab^x$. When $\\log_{10} y$ is plotted against $x$, the straight line has gradient $${mGrad}$ and $Y$-intercept $${cExp}$. Find the exact value of **$a$**.`,
            answerType: 'number', correctValue: aAns, displayAnswerTex: `a = 10^{${cExp}} = ${aAns}`,
            intentMeta: {
              given: {
                bm: `$\\log_{10} y = (\\log_{10} b)x + \\log_{10} a$, pintasan $C = ${cExp}$`,
                en: `$\\log_{10} y = (\\log_{10} b)x + \\log_{10} a$, intercept $C = ${cExp}$`
              },
              goal: { bm: `Cari $a = 10^{${cExp}}$`, en: `Find $a = 10^{${cExp}}$` },
              conceptRule: { bm: 'Pintasan-$Y$ $C = \\log_{10} a \\implies a = 10^C$', en: '$Y$-intercept $C = \\log_{10} a \\implies a = 10^C$' }
            },
            guidedSteps: [
              {
                prompt: {
                  bm: `Ambil $\\log_{10}$ pada kedua-dua belah: $\\log_{10} y = (\\log_{10} b)x + \\log_{10} a$. Berapakah nilai $\\log_{10} a$ daripada pintasan-$Y$ graf?`,
                  en: `Taking $\\log_{10}$ gives $\\log_{10} y = (\\log_{10} b)x + \\log_{10} a$. What is $\\log_{10} a$ from the $Y$-intercept?`
                },
                expected: cExp,
                hint: { bm: `Pintasan-Y = ${cExp}, maka log₁₀ a = ${cExp}.`, en: `The Y-intercept is ${cExp}, so log₁₀ a = ${cExp}.` }
              },
              {
                prompt: {
                  bm: `Sekarang tukarkan $\\log_{10} a = ${cExp}$ kepada bentuk indeks: $a = 10^{${cExp}} = \\;?$`,
                  en: `Now convert $\\log_{10} a = ${cExp}$ to index form: $a = 10^{${cExp}} = \\;?$ `
                },
                expected: aAns,
                hint: { bm: `10 kuasa ${cExp} = ${aAns}.`, en: `10 to the power of ${cExp} = ${aAns}.` }
              }
            ],
            traps: [
              {
                value: cExp,
                message: {
                  bm: `Diagnostik Antilog [K]: ${cExp} ialah nilai log₁₀ a, bukannya nilai a! Tukarkan kepada a = 10^${cExp} = ${aAns}.`,
                  en: `Antilog Diagnosis [K]: ${cExp} is log₁₀ a! Take antilog: a = 10^${cExp} = ${aAns}.`
                }
              },
              {
                value: mGrad,
                message: {
                  bm: `Silap Padan Pemalar [P]: ${mGrad} ialah kecerunan (log₁₀ b), sedangkan a diperoleh daripada pintasan-Y!`,
                  en: `Constant Mix-Up [P]: ${mGrad} is the gradient (log₁₀ b), whereas a comes from the Y-intercept!`
                }
              }
            ],
            hints: [
              lang === 'bm' ? `Tulis $\\log_{10} y = (\\log_{10} b)x + \\log_{10} a$ dan padankan pemalar belakang dengan pintasan-$Y$ ($${cExp}$).` : `Write $\\log_{10} y = (\\log_{10} b)x + \\log_{10} a$ and match the constant term to $Y$-intercept $${cExp}$.`,
              lang === 'bm' ? `Gunakan antilog asas $10$: jika $\\log_{10} a = ${cExp}$, maka $a = 10^{${cExp}}$.` : `Take the base-$10$ antilog: if $\\log_{10} a = ${cExp}$, then $a = 10^{${cExp}}$.`
            ],
            steps: [
              {
                badge: 'P1',
                title: lang === 'bm' ? 'Tukarkan ke bentuk linear dengan log₁₀' : 'Linearize using log₁₀',
                tex: `\\log_{10} y = \\log_{10} a + \\log_{10}(b^x) = (\\log_{10} b)x + \\log_{10} a`,
                why: lang === 'bm' ? 'Gunakan hukum hasil darab log(abˣ) = log a + log(bˣ) dan hukum kuasa log(bˣ) = x log b.' : 'Apply log(abˣ) = log a + log(bˣ) and the power law log(bˣ) = x log b.'
              },
              {
                badge: 'K1',
                title: lang === 'bm' ? 'Bandingkan pintasan-Y dengan Y = mX + C' : 'Match Y-intercept with Y = mX + C',
                tex: `C = \\log_{10} a = ${cExp}`,
                why: lang === 'bm' ? 'Pemalar tanpa x di sebelah kanan ialah pintasan-Y.' : 'The standalone constant without x is the Y-intercept.'
              },
              {
                badge: 'J1',
                title: lang === 'bm' ? 'Ambil antilog asas 10' : 'Take base-10 antilog',
                tex: `a = 10^{${cExp}} = ${aAns}`,
                why: lang === 'bm' ? 'Tukarkan logaritma asas 10 kepada bentuk indeks untuk mendapat nilai tepat a.' : 'Convert base-10 logarithm to index form for the exact value of a.'
              }
            ]
          };
        } else {
          const aVal = U.randInt(3, 9);
          const bVal = U.pick([4, 6, 8, -4].filter((val) => val !== aVal && val !== -aVal));
          const X1 = 1, Y1 = bVal * 1 + aVal;
          const X2 = 3, Y2 = bVal * 3 + aVal;
          const dy = Y2 - Y1;
          const dx = X2 - X1;
          const wrongSignTrap = aVal + 2 * bVal;
          return {
            tier: 3, tpLabel: 'TP5–TP6 (KBAT)', subtopic: { bm: '6.1 Paksi Pecahan (1/x) bagi xy = ax + b', en: '6.1 Reciprocal Axis xy = ax + b' }, marks: 4,
            prompt: lang === 'bm'
              ? `Diberi hubungan tak linear $xy = ax + b$. Apabila graf $y$ melawan $\\frac{1}{x}$ diplotkan, garis lurus melalui titik $(${X1}, ${Y1})$ dan $(${X2}, ${Y2})$. Cari nilai bagi **$a$**.`
              : `Given the non-linear relation $xy = ax + b$. When $y$ is plotted against $\\frac{1}{x}$, the straight line passes through $(${X1}, ${Y1})$ and $(${X2}, ${Y2})$. Find the value of **$a$**.`,
            answerType: 'number', correctValue: aVal, displayAnswerTex: `a = ${aVal} \\quad (b = ${bVal})`,
            intentMeta: {
              given: {
                bm: `$xy = ax + b$, graf $y$ melawan $\\frac{1}{x}$ melalui $(${X1}, ${Y1})$ dan $(${X2}, ${Y2})$`,
                en: `$xy = ax + b$, graph of $y$ against $\\frac{1}{x}$ through $(${X1}, ${Y1})$ and $(${X2}, ${Y2})$`
              },
              goal: { bm: 'Susun semula $y = b\\left(\\frac{1}{x}\\right) + a$ untuk cari pintasan $a$', en: 'Rearrange $y = b\\left(\\frac{1}{x}\\right) + a$ to find intercept $a$' },
              conceptRule: { bm: 'Bahagi $x$: $y = b\\left(\\frac{1}{x}\\right) + a \\implies m = b, C = a$', en: 'Divide by $x$: $y = b\\left(\\frac{1}{x}\\right) + a \\implies m = b, C = a$' }
            },
            guidedSteps: [
              {
                prompt: {
                  bm: `Bahagi $xy = ax + b$ dengan $x$ memberi $y = b\\left(\\frac{1}{x}\\right) + a$. Jadi kecerunan garis ialah $b$! Kira kecerunan $b = \\frac{${Y2} - (${Y1})}{${X2} - ${X1}}$:`,
                  en: `Dividing by $x$ gives $y = b\\left(\\frac{1}{x}\\right) + a$, so gradient $m = b$! Compute $b = \\frac{${Y2} - (${Y1})}{${X2} - ${X1}}$:`
                },
                expected: bVal,
                hint: { bm: `(${dy}) ÷ ${dx} = ${bVal}.`, en: `(${dy}) ÷ ${dx} = ${bVal}.` }
              },
              {
                prompt: {
                  bm: `Sekarang cari pintasan-$Y$ iaitu $a = Y_1 - bX_1 = ${Y1} - (${bVal})(${X1})$:`,
                  en: `Now find $Y$-intercept $a = Y_1 - bX_1 = ${Y1} - (${bVal})(${X1})$:`
                },
                expected: aVal,
                hint: { bm: `${Y1} − (${bVal}) = ${aVal}.`, en: `${Y1} − (${bVal}) = ${aVal}.` }
              }
            ],
            traps: [
              {
                value: bVal,
                message: {
                  bm: `Perangkap Susunan KBAT [P]! Apabila xy = ax + b dibahagi dengan x, ia menjadi y = b(1/x) + a. Maka kecerunan ialah b (${bVal}), manakala a ialah pintasan-Y (${aVal})!`,
                  en: `HOTS Rearrangement Trap [P]! Dividing xy = ax + b by x gives y = b(1/x) + a, so gradient is b (${bVal}) while a is the Y-intercept (${aVal})!`
                }
              },
              {
                value: wrongSignTrap,
                message: {
                  bm: `Cuai Tanda [K]: Anda menambah (${Y1} + ${bVal}) bukannya menolak Y₁ − bX₁ = ${Y1} − (${bVal}) = ${aVal}!`,
                  en: `Sign Slip [K]: You added (${Y1} + ${bVal}) instead of subtracting Y₁ − bX₁ = ${Y1} − (${bVal}) = ${aVal}!`
                }
              }
            ],
            hints: [
              lang === 'bm' ? `Bahagi semua sebutan dengan $x$ untuk memadankan paksi $Y = y$ dan $X = \\frac{1}{x}$: $y = b\\left(\\frac{1}{x}\\right) + a$.` : `Divide every term by $x$ to match axes $Y = y$ and $X = \\frac{1}{x}$: $y = b\\left(\\frac{1}{x}\\right) + a$.`,
              lang === 'bm' ? `Hati-hati: pekali $\\frac{1}{x}$ ialah $b$ (kecerunan), manakala $a$ ialah pintasan-$Y = Y_1 - bX_1$!` : `Watch out: the $\\frac{1}{x}$-coefficient $b$ is the gradient, and $a$ is the $Y$-intercept $Y_1 - bX_1$!`
            ],
            steps: [
              {
                badge: 'P1',
                title: lang === 'bm' ? 'Susun ikut paksi X = 1/x' : 'Arrange for X = 1/x',
                tex: `\\frac{xy}{x} = \\frac{ax}{x} + \\frac{b}{x} \\implies y = b\\left(\\frac{1}{x}\\right) + a \\quad (m = b,\\; C = a)`,
                why: lang === 'bm' ? 'Susun sebutan berpemboleh ubah 1/x dahulu supaya pekalinya m = b dan pemalar bebas C = a jelas kelihatan.' : 'Put the 1/x-term first so gradient m = b and intercept C = a stand out clearly.'
              },
              {
                badge: 'K1',
                title: lang === 'bm' ? 'Kira kecerunan b' : 'Calculate gradient b',
                tex: `b = \\frac{${Y2} - (${Y1})}{${X2} - ${X1}} = \\frac{${dy}}{${dx}} = ${bVal}`,
                why: lang === 'bm' ? 'Hitung kecerunan daripada dua titik pada garis lurus.' : 'Compute the gradient from two points on the line.'
              },
              {
                badge: 'J1',
                title: lang === 'bm' ? 'Kira pintasan a' : 'Calculate intercept a',
                tex: `a = ${Y1} - (${bVal})(${X1}) = ${aVal}`,
                why: lang === 'bm' ? 'Gantikan titik pertama ke dalam C = Y₁ − mX₁.' : 'Substitute the first point into C = Y₁ − mX₁.'
              }
            ]
          };
        }
      }
    },

    // =========================================================================
    // FORM 4 CHAPTER 7: COORDINATE GEOMETRY / GEOMETRI KOORDINAT
    // =========================================================================
    {
      id: 'f4-c7',
      stage: 2,
      unlocked: true,
      form: 4,
      num: 7,
      code: { bm: 'T4 • Bab 7', en: 'F4 • Ch 7' },
      icon: '(x,y)',
      color: '#0ea5e9',
      category: 'geometry',
      title: { bm: 'Geometri Koordinat', en: 'Coordinate Geometry' },
      subtitle: {
        bm: 'Asas T2, pembahagi tembereng m:n, garis selari/serenjang, luas poligon & persamaan lokus',
        en: 'F2 bridges, line divisor m:n, parallel/perpendicular lines, polygon area & equations of loci'
      },
      spmWeight: { bm: 'Kertas 1 & Kertas 2 Bhg B (10 markah)', en: 'Paper 1 & Paper 2 Sec B (10 marks)' },
      concepts: [
        {
          title: { bm: '1. Asas T2 (Jarak, Titik Tengah, Kecerunan) & Pembahagi Tembereng m : n', en: '1. Form 2 Bridges (Distance, Midpoint, Gradient) & Divisor m : n' },
          prereq: {
            bm: 'Ingat semula 3 alat Tingkatan 2 sebelum mula:\n- **Jarak** (Pythagoras): $d = \\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$\n- **Titik Tengah** (purata): $M = \\left(\\frac{x_1+x_2}{2},\\; \\frac{y_1+y_2}{2}\\right)$\n- **Kecerunan**: $m = \\frac{y_2-y_1}{x_2-x_1}$\nUntuk pembahagi nisbah $m : n$, bayangkan tarik tali: jika $P$ lebih dekat ke $A$ ($AP:PB = 1:2$), titik $A$ menarik $P$ dengan pemberat lebih kuat ($2$), jadi nisbah **$m$ didarab silang dengan hujung jauh $B$**!',
            en: 'Recall 3 Form 2 tools before starting:\n- **Distance** (Pythagoras): $d = \\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$\n- **Midpoint** (average): $M = \\left(\\frac{x_1+x_2}{2},\\; \\frac{y_1+y_2}{2}\\right)$\n- **Gradient**: $m = \\frac{y_2-y_1}{x_2-x_1}$\nFor ratio $m : n$, imagine tug-of-war: if $P$ is closer to $A$ ($AP:PB = 1:2$), $A$ pulls $P$ with the heavier weight ($2$), so **$m$ cross-multiplies the opposite end $B$**!'
          },
          body: {
            bm: 'Titik $P(x, y)$ yang membahagi tembereng $AB$ secara dalaman dalam nisbah $AP : PB = m : n$ dikira secara **darab silang nisbah** lalu dibahagi dengan jumlah bahagian $m + n$. Perhatikan apabila $m = n = 1$, rumus ini menjadi Titik Tengah Tingkatan 2!',
            en: 'Point $P(x, y)$ dividing segment $AB$ internally in ratio $AP : PB = m : n$ uses **cross-weighted coordinates** divided by total parts $m + n$. Notice when $m = n = 1$, this collapses directly into the Form 2 Midpoint!'
          },
          firstStep: {
            bm: '1. Lakar garis ringkas $A$—$P$—$B$ dan tulis $m$ di sebelah $A$, $n$ di sebelah $B$.\n2. Lukis anak panah menyilang: $n \\to A(x_1, y_1)$ dan $m \\to B(x_2, y_2)$.\n3. Jumlahkan hasil darab dan bahagi dengan $m + n$.',
            en: '1. Sketch a quick line $A$—$P$—$B$ and label $m$ next to $A$, $n$ next to $B$.\n2. Draw cross-arrows: $n \\to A(x_1, y_1)$ and $m \\to B(x_2, y_2)$.\n3. Sum both products and divide by $m + n$.'
          },
          formulas: [
            { label: { bm: 'Asas T2: Jarak & Titik Tengah', en: 'F2 Bridge: Distance & Midpoint' }, tex: 'd = \\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}, \\qquad M = \\left(\\frac{x_1+x_2}{2},\\; \\frac{y_1+y_2}{2}\\right)' },
            { label: { bm: 'Rumus Pembahagi Nisbah m : n', en: 'Ratio Theorem m : n' }, tex: 'P(x,y) = \\left(\\frac{nx_1 + mx_2}{m+n},\\; \\frac{ny_1 + my_2}{m+n}\\right)' }
          ],
          workedExample: {
            title: { bm: 'Contoh: Pembahagi Tembereng AP : PB = 1 : 2', en: 'Example: Line Segment Divisor AP : PB = 1 : 2' },
            problem: {
              bm: 'Cari koordinat titik $P$ yang membahagi tembereng garis $A(1, 2)$ dan $B(7, 10)$ dalam nisbah $AP : PB = 1 : 2$.',
              en: 'Find the coordinates of point $P$ dividing the line segment joining $A(1, 2)$ and $B(7, 10)$ in the ratio $AP : PB = 1 : 2$.'
            },
            steps: [
              {
                label: { bm: 'Kenal pasti $(x_1, y_1)$, $(x_2, y_2)$, $m = 1$, $n = 2$', en: 'Identify $(x_1, y_1)$, $(x_2, y_2)$, $m = 1$, $n = 2$' },
                tex: 'P = \\left(\\frac{2(1) + 1(7)}{1 + 2},\\; \\frac{2(2) + 1(10)}{1 + 2}\\right)',
                why: {
                  bm: 'Nisbah $n = 2$ didarab silang dengan $A(1, 2)$ dan $m = 1$ didarab silang dengan $B(7, 10)$.',
                  en: 'Ratio $n = 2$ cross-multiplies $A(1, 2)$ and $m = 1$ cross-multiplies $B(7, 10)$.'
                }
              },
              {
                label: { bm: 'Kira hasil tambah pengangka dan penyebut', en: 'Evaluate numerators and denominators' },
                tex: 'P = \\left(\\frac{2 + 7}{3},\\; \\frac{4 + 10}{3}\\right) = \\left(\\frac{9}{3},\\; \\frac{14}{3}\\right) = \\left(3,\\; \\frac{14}{3}\\right)',
                why: {
                  bm: 'Selesaikan pendaraban sebelum menambah, kemudian ringkaskan pecahan kepada bentuk termudah.',
                  en: 'Evaluate products before adding, then simplify fractions cleanly.'
                }
              }
            ],
            trap: {
              bm: 'Jangan darab $m = 1$ dengan $A$ dan $n = 2$ dengan $B$ — sentiasa silangkan nisbah ke hujung bertentangan!',
              en: 'Never multiply $m = 1$ with $A$ and $n = 2$ with $B$ — always cross-multiply to the opposite endpoint!'
            }
          },
          tip: {
            bm: 'Darab silang nisbah! Nisbah $m$ (sebelah $A$) didarab dengan koordinat $B(x_2, y_2)$, manakala $n$ didarab dengan $A(x_1, y_1)$.',
            en: 'Cross-multiply the ratio! Ratio $m$ (near $A$) multiplies $B(x_2, y_2)$, while $n$ multiplies $A(x_1, y_1)$.'
          }
        },
        {
          title: { bm: '2. Garis Selari, Serenjang & 3 Bentuk Persamaan Garis Lurus', en: '2. Parallel, Perpendicular & 3 Straight-Line Forms' },
          prereq: {
            bm: 'Garis **selari** seperti landasan kereta api — kecuramannya sama ($m_1 = m_2$). Garis **serenjang** bertemu pada sudut $90^\\circ$ seperti sesiku L tukang kayu: untuk mendapat $m_2$, **songsangkan pecahan DAN tukar tanda** ($m_1 m_2 = -1$, cth: $\\frac{4}{3} \\to -\\frac{3}{4}$).',
            en: '**Parallel** lines are like railway tracks — identical steepness ($m_1 = m_2$). **Perpendicular** lines meet at $90^\\circ$ like a carpenter\'s T-square: to get $m_2$, **flip the fraction AND flip the sign** ($m_1 m_2 = -1$, e.g. $\\frac{4}{3} \\to -\\frac{3}{4}$).'
          },
          body: {
            bm: 'Kenali keempat-empat bentuk persamaan garis lurus SPM:\n- **Bentuk Kecerunan-Pintasan:** $y = mx + c$ (baca $m$ terus hanya apabila pekali $y = +1$)\n- **Bentuk Titik-Kecerunan:** $y - y_1 = m(x - x_1)$ (paling pantas membina garis baharu)\n- **Bentuk Pintasan:** $\\frac{x}{a} + \\frac{y}{b} = 1$ ($a$ = pintasan-$x$, $b$ = pintasan-$y$, $m = -\\frac{b}{a}$)\n- **Bentuk Am:** $ax + by + c = 0$ ($m = -\\frac{a}{b}$ selepas disusun kepada $y = mx + c$).',
            en: 'Master all SPM straight-line forms:\n- **Gradient-Intercept Form:** $y = mx + c$ (read $m$ only when $y$ has coefficient $+1$)\n- **Point-Gradient Form:** $y - y_1 = m(x - x_1)$ (fastest to build a new line)\n- **Intercept Form:** $\\frac{x}{a} + \\frac{y}{b} = 1$ ($a$ = $x$-intercept, $b$ = $y$-intercept, $m = -\\frac{b}{a}$)\n- **General Form:** $ax + by + c = 0$ ($m = -\\frac{a}{b}$ after rearranging to $y = mx + c$).'
          },
          firstStep: {
            bm: '1. Jika diberi bentuk am $ax + by = c$, susun kepada $y = mx + c$ dahulu untuk baca $m$.\n2. Jika serenjang, songsangkan pecahan dan tukar tanda ($m_\\perp = -\\frac{1}{m}$).\n3. Gantikan titik yang dilalui $(x_1, y_1)$ ke dalam $y - y_1 = m(x - x_1)$.',
            en: '1. If given $ax + by = c$, rearrange to $y = mx + c$ first before reading $m$.\n2. If perpendicular, flip and negate the gradient ($m_\\perp = -\\frac{1}{m}$).\n3. Plug the point $(x_1, y_1)$ into $y - y_1 = m(x - x_1)$.'
          },
          formulas: [
            { label: { bm: 'Selari & Serenjang', en: 'Parallel & Perpendicular' }, tex: 'm_1 = m_2 \\;(\\parallel), \\qquad m_1 m_2 = -1 \\;(\\perp)' },
            { label: { bm: 'Titik-Kecerunan & Pintasan', en: 'Point-Gradient & Intercept Form' }, tex: 'y - y_1 = m(x - x_1), \\qquad \\frac{x}{a} + \\frac{y}{b} = 1 \\;\\left(m = -\\frac{b}{a}\\right)' }
          ],
          workedExample: {
            title: { bm: 'Contoh: Pembahagi Dua Sama Serenjang bagi AB', en: 'Example: Perpendicular Bisector of Segment AB' },
            problem: {
              bm: 'Cari persamaan pembahagi dua sama serenjang bagi tembereng garis yang menyambungkan $A(1, 2)$ dan $B(7, 10)$.',
              en: 'Find the equation of the perpendicular bisector of the line segment joining $A(1, 2)$ and $B(7, 10)$.'
            },
            steps: [
              {
                label: { bm: 'Cari titik tengah $M$ bagi $AB$', en: 'Find midpoint $M$ of $AB$' },
                tex: 'M = \\left(\\frac{1 + 7}{2},\\; \\frac{2 + 10}{2}\\right) = (4, 6)',
                why: {
                  bm: 'Pembahagi dua sama serenjang wajib melalui titik tengah $M$ antara $A$ dan $B$.',
                  en: 'A perpendicular bisector must pass through the midpoint $M$ of $AB$.'
                }
              },
              {
                label: { bm: 'Kira kecerunan $m_{AB}$ dan songsangan negatif $m_\\perp$', en: 'Compute $m_{AB}$ and negative reciprocal $m_\\perp$' },
                tex: 'm_{AB} = \\frac{10 - 2}{7 - 1} = \\frac{8}{6} = \\frac{4}{3} \\implies m_\\perp = -\\frac{3}{4}',
                why: {
                  bm: 'Menggunakan $m_{AB} \\cdot m_\\perp = -1$: songsangkan $\\frac{4}{3}$ menjadi $\\frac{3}{4}$ dan tukar tanda kepada negatif.',
                  en: 'Using $m_{AB} \\cdot m_\\perp = -1$: flip $\\frac{4}{3}$ to $\\frac{3}{4}$ and negate the sign.'
                }
              },
              {
                label: { bm: 'Gantikan $M(4, 6)$ dan $m_\\perp = -\\frac{3}{4}$ ke dalam $y - y_1 = m(x - x_1)$', en: 'Substitute $M(4, 6)$ and $m_\\perp = -\\frac{3}{4}$ into $y - y_1 = m(x - x_1)$' },
                tex: 'y - 6 = -\\frac{3}{4}(x - 4) \\implies 4y - 24 = -3x + 12 \\implies 3x + 4y = 36',
                why: {
                  bm: 'Mendarab kedua-dua belah dengan $4$ menghapuskan pecahan untuk mendapat bentuk persamaan kemas.',
                  en: 'Multiplying both sides by $4$ clears the fraction cleanly.'
                }
              }
            ],
            trap: {
              bm: 'Jangan masukkan titik hujung $A(1, 2)$ atau $B(7, 10)$ ke dalam garis serenjang — mesti guna titik tengah $M(4, 6)$!',
              en: 'Never substitute endpoint $A(1, 2)$ or $B(7, 10)$ into the perpendicular line — it must pass through midpoint $M(4, 6)$!'
            }
          },
          tip: {
            bm: 'Sentiasa susun $ax + by = c$ kepada $y = mx + c$ dahulu sebelum membaca kecerunan!',
            en: 'Always rearrange $ax + by = c$ into $y = mx + c$ before reading the gradient!'
          }
        },
        {
          title: { bm: '3. Luas Poligon (Tali Kasut) & Titik Segaris', en: '3. Area of Polygon (Shoelace) & Collinearity' },
          prereq: {
            bm: 'Bayangkan mengikat tali kasut dari lubang 1 ke 2 ke 3 dan **kembali ke lubang 1** untuk menutup gelung! Jika bucu pertama $(x_1, y_1)$ tidak diulang di hujung, tali kasut tidak tertutup dan luasnya salah.',
            en: 'Picture lacing a shoe from eyelet 1 to 2 to 3 and **back to eyelet 1** to close the loop! If you forget to repeat $(x_1, y_1)$ at the end, the shoelace loop stays open and the area is wrong.'
          },
          body: {
            bm: 'Senaraikan bucu mengikut urutan keliling poligon (lawan jam atau ikut jam) dan **ulang bucu pertama $(x_1, y_1)$ di hujung**. Kira hasil darab pepenjuru ke bawah ($\\searrow$) tolak pepenjuru ke atas ($\\swarrow$), ambil modulus $|\\dots|$, dan darab $\\frac{1}{2}$.\nJika soalan memberi nilai luas dan meminta nilai koordinat $k$, buka modulus kepada **dua kes $\\pm$**. Tiga titik adalah **segaris** jika dan hanya jika luas $= 0$ (atau $m_{AB} = m_{BC}$).',
            en: 'List vertices in order around the perimeter and **repeat the first vertex $(x_1, y_1)$ at the end**. Subtract the upward diagonal sum ($\\swarrow$) from the downward sum ($\\searrow$), take the modulus $|\\dots|$, and multiply by $\\frac{1}{2}$.\nWhen solving for an unknown $k$ from a given area, split $|\\dots|$ into **both $\\pm$ cases**. Three points are **collinear** iff area $= 0$ (or $m_{AB} = m_{BC}$).'
          },
          firstStep: {
            bm: '1. Susun koordinat mengikut tertib keliling dan ulang $(x_1, y_1)$ di lajur akhir.\n2. Jumlahkan semua darab silang ke bawah ($\\sum\\searrow$) dan ke atas ($\\sum\\swarrow$) secara berasingan.\n3. Kira $\\frac{1}{2}|\\sum\\searrow - \\sum\\swarrow|$.',
            en: '1. Order vertices around the perimeter and repeat $(x_1, y_1)$ in the final column.\n2. Sum downward products ($\\sum\\searrow$) and upward products ($\\sum\\swarrow$) separately.\n3. Evaluate $\\frac{1}{2}|\\sum\\searrow - \\sum\\swarrow|$.'
          },
          formulas: [
            {
              label: { bm: 'Luas Segi Tiga ABC (Rumus Tali Kasut)', en: 'Shoelace Area Formula' },
              tex: {
                bm: '\\text{Luas} = \\frac{1}{2}|(x_1y_2 + x_2y_3 + x_3y_1) - (x_2y_1 + x_3y_2 + x_1y_3)|',
                en: '\\text{Area} = \\frac{1}{2}|(x_1y_2 + x_2y_3 + x_3y_1) - (x_2y_1 + x_3y_2 + x_1y_3)|'
              }
            }
          ],
          workedExample: {
            title: { bm: 'Contoh: Luas Segi Tiga Tali Kasut', en: 'Example: Shoelace Area of Triangle ABC' },
            problem: {
              bm: 'Hitung luas segi tiga dengan bucu-bucu $A(1, 2)$, $B(5, 1)$, dan $C(4, 7)$.',
              en: 'Calculate the area of triangle $ABC$ with vertices $A(1, 2)$, $B(5, 1)$, and $C(4, 7)$.'
            },
            steps: [
              {
                label: { bm: 'Susun koordinat dan ulang bucu pertama $A(1, 2)$', en: 'Arrange coordinates and repeat starting vertex $A(1, 2)$' },
                tex: '\\frac{1}{2}\\left|\\begin{matrix} 1 & 5 & 4 & 1 \\\\ 2 & 1 & 7 & 2 \\end{matrix}\\right|',
                why: {
                  bm: 'Mengulang $(1, 2)$ di lajur keempat menutup lilitan segi tiga.',
                  en: 'Repeating $(1, 2)$ in the fourth column closes the triangle perimeter.'
                }
              },
              {
                label: { bm: 'Kira jumlah pepenjuru ke bawah ($\\searrow$) dan ke atas ($\\swarrow$)', en: 'Compute downward ($\\searrow$) and upward ($\\swarrow$) diagonal sums' },
                tex: '\\sum\\searrow = 1(1) + 5(7) + 4(2) = 1 + 35 + 8 = 44, \\quad \\sum\\swarrow = 2(5) + 1(4) + 7(1) = 10 + 4 + 7 = 21',
                why: {
                  bm: 'Asingkan pengiraan jumlah ke bawah dan ke atas supaya tanda negatif/positif mudah disemak.',
                  en: 'Computing the downward and upward sums separately prevents sign mistakes.'
                }
              },
              {
                label: { bm: 'Tolak kedua-dua jumlah, ambil nilai positif & darab $\\frac{1}{2}$', en: 'Subtract sums, take absolute value & multiply by $\\frac{1}{2}$' },
                tex: '\\frac{1}{2}|44 - 21| = \\frac{1}{2}(23) = 11.5',
                why: {
                  bm: 'Luas geometri sentiasa positif dan faktor $\\frac{1}{2}$ wajib ada dalam rumus tali kasut.',
                  en: 'Geometric area is always non-negative and the $\\frac{1}{2}$ factor is mandatory.'
                }
              }
            ],
            trap: {
              bm: 'Jangan menambah $44 + 21$, dan jangan lupa faktor $\\frac{1}{2}$ di hadapan modulus!',
              en: 'Never add $44 + 21$, and never drop the $\\frac{1}{2}$ in front of the absolute value!'
            }
          },
          tip: {
            bm: 'Jika tiga titik $A, B, C$ adalah segaris (*collinear*), luas segi tiga $ABC$ ialah tepat $0$ (atau $m_{AB} = m_{BC}$)!',
            en: 'Three points $A, B, C$ are collinear if and only if the area of triangle $ABC$ equals $0$ (or $m_{AB} = m_{BC}$)!'
          }
        },
        {
          title: { bm: '4. Persamaan Lokus Titik Bergerak P(x, y)', en: '4. Equation of Locus of Moving Point P(x, y)' },
          prereq: {
            bm: 'Bayangkan seekor kambing diikat dengan tali sepanjang $r$ pada sebatang tiang: jejak tapak kakinya membentuk **bulatan** ($PA = r$). Jika seorang pelajar berjalan supaya jaraknya sentiasa sama dari dua tiang $A$ dan $B$ ($PA = PB$), laluan tengah itu ialah **pembahagi dua sama serenjang**!',
            en: 'Imagine a goat tied to a pole by a rope of length $r$: its footprints trace a **circle** ($PA = r$). If a student walks staying equally far from poles $A$ and $B$ ($PA = PB$), their path is the **perpendicular bisector**!'
          },
          body: {
            bm: 'Terjemahkan syarat geometri ke dalam persamaan algebra bagi $P(x, y)$:\n- $PA = r \\implies (x-x_1)^2 + (y-y_1)^2 = r^2$\n- $PA = PB \\implies (x-x_A)^2+(y-y_A)^2 = (x-x_B)^2+(y-y_B)^2$ (kuasa dua $x^2, y^2$ terbatal menjadi garis lurus)\n- $PA : PB = m : n \\implies nPA = mPB \\implies n^2 PA^2 = m^2 PB^2$\n- $\\angle APB = 90^\\circ \\implies m_{PA} \\cdot m_{PB} = -1$ (atau $PA^2 + PB^2 = AB^2$).',
            en: 'Translate geometric constraints into $(x, y)$ algebra for $P(x, y)$:\n- $PA = r \\implies (x-x_1)^2 + (y-y_1)^2 = r^2$\n- $PA = PB \\implies (x-x_A)^2+(y-y_A)^2 = (x-x_B)^2+(y-y_B)^2$ ($x^2, y^2$ cancel into a line)\n- $PA : PB = m : n \\implies nPA = mPB \\implies n^2 PA^2 = m^2 PB^2$\n- $\\angle APB = 90^\\circ \\implies m_{PA} \\cdot m_{PB} = -1$ (or $PA^2 + PB^2 = AB^2$).'
          },
          firstStep: {
            bm: '1. Tetapkan titik bergerak sebagai $P(x, y)$ dan tulis persamaan jarak dengan $\\sqrt{\\dots}$.\n2. Kuasa duakan **kedua-dua belah** (termasuk nombor nisbah di depan $\\sqrt{\\dots}$!).\n3. Kembangkan $(x-a)^2 = x^2 - 2ax + a^2$ dengan teliti dan kumpul semua sebutan ke sebelah kiri $= 0$.',
            en: '1. Let the moving point be $P(x, y)$ and write the distance equation with $\\sqrt{\\dots}$.\n2. Square **both sides** (including any ratio number multiplying $\\sqrt{\\dots}$!).\n3. Expand $(x-a)^2 = x^2 - 2ax + a^2$ carefully and collect all terms $= 0$.'
          },
          formulas: [
            { label: { bm: 'Lokus Jarak Malar r', en: 'Constant Distance Locus' }, tex: '(x - x_1)^2 + (y - y_1)^2 = r^2' },
            { label: { bm: 'Lokus Nisbah Jarak PA : PB = m : n', en: 'Distance Ratio Locus PA : PB = m : n' }, tex: 'n^2[(x-x_A)^2+(y-y_A)^2] = m^2[(x-x_B)^2+(y-y_B)^2]' }
          ],
          workedExample: {
            title: { bm: 'Contoh: Persamaan Lokus Nisbah PA = 2PB', en: 'Example: Equation of Locus PA = 2PB' },
            problem: {
              bm: 'Titik $P(x, y)$ bergerak dengan keadaan $PA = 2PB$ bagi $A(1, 0)$ dan $B(4, 0)$. Cari persamaan lokus bagi $P$.',
              en: 'Point $P(x, y)$ moves such that $PA = 2PB$ for $A(1, 0)$ and $B(4, 0)$. Find the equation of the locus of $P$.'
            },
            steps: [
              {
                label: { bm: 'Tulis rumus jarak dan kuasa duakan kedua-dua belah', en: 'Write distance rule and square both sides' },
                tex: 'PA^2 = 4PB^2 \\implies (x - 1)^2 + y^2 = 4[(x - 4)^2 + y^2]',
                why: {
                  bm: 'Mengkuasaduakan $2PB$ menjadikan pemalar $2$ kepada $2^2 = 4$ sambil membuang punca kuasa dua.',
                  en: 'Squaring $2PB$ turns the factor $2$ into $2^2 = 4$ while clearing both square roots.'
                }
              },
              {
                label: { bm: 'Kembangkan kurungan di dalam dan darab masuk $4$', en: 'Expand squared brackets and distribute $4$' },
                tex: 'x^2 - 2x + 1 + y^2 = 4(x^2 - 8x + 16 + y^2) = 4x^2 - 32x + 64 + 4y^2',
                why: {
                  bm: 'Darab $4$ dengan setiap sebutan di sebelah kanan supaya tiada sebutan tertinggal.',
                  en: 'Multiply $4$ into every term inside the RHS bracket.'
                }
              },
              {
                label: { bm: 'Kumpul sebutan serupa dan bahagi faktor sepunya $3$', en: 'Collect like terms and divide by common factor $3$' },
                tex: '3x^2 + 3y^2 - 30x + 63 = 0 \\implies x^2 + y^2 - 10x + 21 = 0',
                why: {
                  bm: 'Membahagi dengan $3$ memberi persamaan bulatan dalam bentuk termudah.',
                  en: 'Dividing by $3$ reduces the circle equation to simplest integer form.'
                }
              }
            ],
            trap: {
              bm: 'Jangan tulis $PA^2 = 2PB^2$! Nombor $2$ di luar punca kuasa dua wajib dikuasaduakan menjadi $4$.',
              en: 'Never write $PA^2 = 2PB^2$! The multiplier $2$ outside the root must be squared to $4$.'
            }
          },
          tip: {
            bm: 'Ingat $(x - a)^2 = x^2 - 2ax + a^2$ — jangan sekali-kali lupa sebutan tengah $-2ax$!',
            en: 'Remember $(x - a)^2 = x^2 - 2ax + a^2$ — never drop the middle term $-2ax$!'
          }
        }
      ],
      traps: [
        {
          title: { bm: 'Terlupa Ulang Koordinat Pertama dalam Rumus Luas Poligon', en: 'Forgetting to Repeat the Starting Vertex in Shoelace Formula' },
          desc: {
            bm: 'Sentiasa tutup gelung poligon dengan mengulang semula $(x_1, y_1)$ pada lajur terakhir, dan ingat faktor $\\frac{1}{2}$ serta buka $|\\dots|$ kepada $\\pm$ jika mencari nilai $k$!',
            en: 'Always close the polygon loop by repeating $(x_1, y_1)$ in the final column, include $\\frac{1}{2}$, and split $|\\dots|$ into $\\pm$ when solving for unknown $k$!'
          }
        },
        {
          title: { bm: 'Mendarab Nisbah m dengan Titik A Tanpa Darab Silang', en: 'Multiplying Ratio m with Adjacent Point A Without Cross-Multiplying' },
          desc: {
            bm: 'Dalam $AP : PB = m : n$, nisbah $m$ (sebelah $A$) mesti didarab dengan koordinat **$B(x_2, y_2)$**, manakala $n$ didarab dengan **$A(x_1, y_1)$**!',
            en: 'In $AP : PB = m : n$, ratio $m$ (near $A$) must multiply **$B(x_2, y_2)$**, while $n$ multiplies **$A(x_1, y_1)$**!'
          }
        },
        {
          title: { bm: 'Lupa Mengkuasaduakan Pemalar Nisbah dalam Lokus', en: 'Forgetting to Square the Ratio Multiplier in Loci' },
          desc: {
            bm: 'Apabila $PA = 2PB$ dikuasaduakan kedua-dua belah, hasilnya ialah $PA^2 = 4PB^2$, **bukan** $2PB^2$!',
            en: 'When $PA = 2PB$ is squared on both sides, it becomes $PA^2 = 4PB^2$, **never** $2PB^2$!'
          }
        }
      ],
      solvers: [
        {
          id: 'coord-geom-solver',
          title: { bm: 'Solver Pembahagi Tembereng m:n & Pembahagi Dua Sama Serenjang', en: 'Segment Divisor m:n & Perpendicular Bisector Solver' },
          desc: {
            bm: 'Kira jarak AB, titik pembahagi P(x,y) nisbah m:n, dan persamaan pembahagi dua sama serenjang.',
            en: 'Compute distance AB, internal divisor P(x,y) for ratio m:n, and perpendicular bisector equation.'
          },
          inputs: [
            { id: 'x1', label: 'A: x₁', default: 1 }, { id: 'y1', label: 'A: y₁', default: 2 },
            { id: 'x2', label: 'B: x₂', default: 7 }, { id: 'y2', label: 'B: y₂', default: 10 },
            { id: 'm', label: { bm: 'Nisbah m', en: 'Ratio m' }, default: 1 },
            { id: 'n', label: { bm: 'Nisbah n', en: 'Ratio n' }, default: 2 }
          ],
          solve: function (v, lang) {
            if (!isNumInput(v.x1) || !isNumInput(v.y1) || !isNumInput(v.x2) || !isNumInput(v.y2) || !isNumInput(v.m) || !isNumInput(v.n)) {
              const msg = lang === 'bm' ? '\\text{Masukkan semua input nombor yang sah}' : '\\text{Enter valid numbers for all inputs}';
              return {
                problemTex: msg,
                steps: [{ badge: 'P1', title: lang === 'bm' ? 'Input tidak lengkap' : 'Incomplete input', tex: msg, why: lang === 'bm' ? 'Pastikan koordinat A, B serta nisbah m, n diisi dengan nombor sah.' : 'Ensure coordinates A, B and ratios m, n are valid numbers.' }],
                finalTex: msg
              };
            }
            const x1 = Number(v.x1), y1 = Number(v.y1), x2 = Number(v.x2), y2 = Number(v.y2);
            const m = Number(v.m), n = Number(v.n);
            if (m <= 1e-6 || n <= 1e-6 || (m + n) <= 1e-6) {
              const rMsg = lang === 'bm' ? '\\text{Nisbah } m \\text{ dan } n \\text{ mestilah positif } (> 10^{-6})' : '\\text{Ratios } m \\text{ and } n \\text{ must be strictly positive } (> 10^{-6})';
              return {
                problemTex: `A(${x1}, ${y1}),\\; B(${x2}, ${y2}),\\; m:n = ${m}:${n}`,
                steps: [{ badge: 'P1', title: lang === 'bm' ? 'Nisbah tidak sah' : 'Invalid ratio', tex: `m = ${m},\\; n = ${n} \\implies ${rMsg}`, why: lang === 'bm' ? 'Pembahagian dalaman tembereng memerlukan nisbah positif m > 10⁻⁶ dan n > 10⁻⁶.' : 'Internal segment division requires strictly positive ratios m > 10⁻⁶ and n > 10⁻⁶.' }],
                finalTex: rMsg
              };
            }
            const rawDx = x2 - x1, rawDy = y2 - y1;
            const dxSq = rawDx * rawDx, dySq = rawDy * rawDy;
            const distSq = dxSq + dySq;
            const dist = Math.sqrt(distSq);
            const sumMN = m + n;
            const nx1 = n * x1, mx2 = m * x2;
            const ny1 = n * y1, my2 = m * y2;
            const sumX = nx1 + mx2, sumY = ny1 + my2;
            const px = sumX / sumMN, py = sumY / sumMN;
            const mx = (x1 + x2) / 2, my = (y1 + y2) / 2;

            const allIntDiv = Number.isInteger(sumX) && Number.isInteger(sumY) && Number.isInteger(sumMN);
            const pxFrac = allIntDiv ? U.fracTex(sumX, sumMN) : fmtSmart(px, 3);
            const pyFrac = allIntDiv ? U.fracTex(sumY, sumMN) : fmtSmart(py, 3);
            const pDisplayTex = allIntDiv && (!Number.isInteger(px) || !Number.isInteger(py))
              ? `\\left(${pxFrac},\\; ${pyFrac}\\right) \\approx (${fmtSmart(px, 3)},\\; ${fmtSmart(py, 3)})`
              : `(${fmtSmart(px, 3)},\\; ${fmtSmart(py, 3)})`;

            let perpWorkTex = '';
            let perpFinalTex = '';
            if (Math.abs(rawDx) < 1e-6 && Math.abs(rawDy) < 1e-6) {
              const sameMsg = lang === 'bm' ? '\\text{Titik A dan B sama/terlalu dekat (tiada pembahagi)}' : '\\text{Points A and B coincide/too close (no bisector)}';
              perpWorkTex = sameMsg;
              perpFinalTex = sameMsg;
            } else if (Math.abs(rawDy) < 1e-6) {
              perpFinalTex = `x = ${fmtSmart(mx, 4)}`;
              perpWorkTex = `m_{AB} = 0 \\;(\\text{${lang === 'bm' ? 'mengufuk' : 'horizontal'}}) \\implies ${perpFinalTex}`;
            } else if (Math.abs(rawDx) < 1e-6) {
              perpFinalTex = `y = ${fmtSmart(my, 4)}`;
              perpWorkTex = `m_{AB}\\text{ ${lang === 'bm' ? 'tak tertakrif (mencancang)' : 'undefined (vertical)'}} \\implies ${perpFinalTex}`;
            } else {
              const mAB = rawDy / rawDx;
              const mPerp = -1 / mAB;
              const cPerp = my - mPerp * mx;
              const canExact = Number.isInteger(2 * x1) && Number.isInteger(2 * y1) && Number.isInteger(2 * x2) && Number.isInteger(2 * y2);
              if (canExact) {
                const idx = Math.round(2 * rawDx), idy = Math.round(2 * rawDy);
                const imx4 = Math.round(4 * mx), imy4 = Math.round(4 * my);
                const mABTex = U.fracTex(idy, idx);
                const mPerpTex = U.fracTex(-idx, idy);
                const cNum = imy4 * idy + idx * imx4;
                const cDen = 4 * idy;
                const cPerpTex = U.fracTex(cNum, cDen);
                const mTerm = mPerpTex === '1' ? 'x' : (mPerpTex === '-1' ? '-x' : `${mPerpTex}x`);
                const cTerm = cNum === 0 ? '' : formatSignedFrac(cNum, cDen);
                perpFinalTex = `y = ${mTerm}${cTerm}`;
                const mDecRound = U.round(mPerp, 3);
                const cDecRound = U.round(cPerp, 3);
                const mDecTerm = mDecRound === 1 ? 'x' : (mDecRound === -1 ? '-x' : `${fmtSmart(mPerp, 3)}x`);
                const cDecTerm = cDecRound === 0 ? '' : U.signedNum(cDecRound);
                const decNote = (!Number.isInteger(mPerp) || !Number.isInteger(cPerp))
                  ? ` \\;\\left(y = ${mDecTerm}${cDecTerm}\\right)`
                  : '';
                perpWorkTex = `m_{AB} = ${mABTex} \\implies m_\\perp = ${mPerpTex}, \\quad c_\\perp = ${fmtSmart(my, 4)} - (${mPerpTex})(${fmtSmart(mx, 4)}) = ${cPerpTex} \\implies ${perpFinalTex}${decNote}`;
              } else {
                const mDecRound = U.round(mPerp, 3);
                const cDecRound = U.round(cPerp, 3);
                const mDecTerm = mDecRound === 1 ? 'x' : (mDecRound === -1 ? '-x' : `${fmtSmart(mPerp, 3)}x`);
                const cDecTerm = cDecRound === 0 ? '' : U.signedNum(cDecRound);
                perpFinalTex = `y = ${mDecTerm}${cDecTerm}`;
                perpWorkTex = `m_{AB} = ${fmtSmart(mAB, 4)} \\implies m_\\perp = -\\frac{1}{${fmtSmart(mAB, 4)}} = ${fmtSmart(mPerp, 4)}, \\quad c_\\perp = ${fmtSmart(my, 4)} - (${fmtSmart(mPerp, 4)})(${fmtSmart(mx, 4)}) = ${fmtSmart(cPerp, 4)} \\implies ${perpFinalTex}`;
              }
            }
            return {
              problemTex: `A(${x1}, ${y1}), \\; B(${x2}, ${y2}), \\; AP : PB = ${m} : ${n}`,
              steps: [
                {
                  badge: 'K1',
                  title: lang === 'bm' ? 'Langkah 1: Jarak AB & Titik Tengah M' : 'Step 1: Distance AB & Midpoint M',
                  tex: `|AB| = \\sqrt{(${fmtSmart(rawDx, 4)})^2 + (${fmtSmart(rawDy, 4)})^2} = \\sqrt{${fmtSmart(dxSq, 4)} + ${fmtSmart(dySq, 4)}} = \\sqrt{${fmtSmart(distSq, 4)}} = ${fmtSmart(dist, 3)}, \\quad M = \\left(\\frac{${x1} + (${x2})}{2},\\; \\frac{${y1} + (${y2})}{2}\\right) = (${fmtSmart(mx, 4)},\\; ${fmtSmart(my, 4)})`,
                  why: lang === 'bm' ? 'Guna Teorem Pythagoras untuk jarak dan purata koordinat untuk titik tengah.' : 'Apply Pythagoras for distance and coordinate average for midpoint.'
                },
                {
                  badge: 'K1',
                  title: lang === 'bm' ? 'Langkah 2: Titik Pembahagi P(x, y)' : 'Step 2: Divisor Point P(x, y)',
                  tex: `P = \\left(\\frac{${n}(${x1}) + ${m}(${x2})}{${m} + ${n}},\\; \\frac{${n}(${y1}) + ${m}(${y2})}{${m} + ${n}}\\right) = \\left(\\frac{${fmtSmart(nx1, 4)} + (${fmtSmart(mx2, 4)})}{${fmtSmart(sumMN, 4)}},\\; \\frac{${fmtSmart(ny1, 4)} + (${fmtSmart(my2, 4)})}{${fmtSmart(sumMN, 4)}}\\right) = \\left(\\frac{${fmtSmart(sumX, 4)}}{${fmtSmart(sumMN, 4)}},\\; \\frac{${fmtSmart(sumY, 4)}}{${fmtSmart(sumMN, 4)}}\\right) = ${pDisplayTex}`,
                  why: lang === 'bm' ? 'Darab silang nisbah n dengan A dan m dengan B, lalu bahagi dengan m + n.' : 'Cross-multiply n with A and m with B, then divide by m + n.'
                },
                {
                  badge: 'J1',
                  title: lang === 'bm' ? 'Langkah 3: Pembahagi Dua Sama Serenjang' : 'Step 3: Perpendicular Bisector',
                  tex: perpWorkTex,
                  why: lang === 'bm' ? 'Garis melalui titik tengah M dengan kecerunan serenjang m₁m₂ = −1.' : 'Line passes through midpoint M with negative-reciprocal gradient m₁m₂ = −1.'
                }
              ],
              finalTex: `P = ${pDisplayTex}, \\quad \\perp: ${perpFinalTex}`
            };
          }
        }
      ],
      generateQuestion: function (tier, lang) {
        if (tier === 1) {
          const m1 = U.pick([2, -2, 4, -4, 0.5]);
          const m2 = -1 / m1;
          return {
            tier: 1, tpLabel: 'TP1–TP2', subtopic: { bm: '7.2 Garis Lurus Serenjang', en: '7.2 Perpendicular Lines' }, marks: 2,
            prompt: lang === 'bm'
              ? `Garis lurus $L_1$ mempunyai kecerunan $m_1 = ${m1}$. Cari kecerunan garis lurus $L_2$ yang **serenjang** dengan $L_1$.`
              : `Straight line $L_1$ has gradient $m_1 = ${m1}$. Find the gradient of line $L_2$ which is **perpendicular** to $L_1$.`,
            answerType: 'number', correctValue: m2, displayAnswerTex: `m_2 = -\\frac{1}{${m1}} = ${m2}`,
            intentMeta: {
              given: { bm: `$m_1 = ${m1}$`, en: `$m_1 = ${m1}$` },
              goal: { bm: 'Cari $m_2$ supaya $m_1 m_2 = -1$', en: 'Find $m_2$ such that $m_1 m_2 = -1$' },
              conceptRule: { bm: 'Garis serenjang: $m_1 \\times m_2 = -1$', en: 'Perpendicular lines: $m_1 \\times m_2 = -1$' }
            },
            guidedSteps: [
              {
                prompt: {
                  bm: `Langkah 1: Apakah songsangan ($\\frac{1}{m_1}$) bagi $${m1}$ sebelum menukar tanda? Kira $1 \\div (${m1})$:`,
                  en: `Step 1: What is the reciprocal ($\\frac{1}{m_1}$) of $${m1}$ before flipping the sign? Compute $1 \\div (${m1})$:`
                },
                expected: 1 / m1,
                hint: { bm: `1 ÷ (${m1}) = ${1 / m1}.`, en: `1 ÷ (${m1}) = ${1 / m1}.` }
              },
              {
                prompt: {
                  bm: `Langkah 2: Sekarang tukar tanda negatif ($m_2 = -\\frac{1}{m_1}$) supaya $m_1 m_2 = -1$:`,
                  en: `Step 2: Now negate the sign ($m_2 = -\\frac{1}{m_1}$) so $m_1 m_2 = -1$:`
                },
                expected: m2,
                hint: { bm: `−(${1 / m1}) = ${m2}.`, en: `−(${1 / m1}) = ${m2}.` }
              }
            ],
            traps: [
              {
                value: 1 / m1,
                message: {
                  bm: 'Cuai Tanda [J]: Awak sudah terbalikkan pecahan (1/m₁) tetapi terlupa tukar tanda negatif! Syarat serenjang ialah m₁m₂ = −1.',
                  en: 'Sign Diagnosis [J]: You took 1/m₁ without flipping the sign! Perpendicular lines satisfy m₁m₂ = −1.'
                }
              },
              {
                value: m1,
                message: {
                  bm: 'Silap Konsep [P]: Kecerunan sama (m₁ = m₂) ialah untuk garis SELARI, bukan serenjang!',
                  en: 'Concept Diagnosis [P]: Equal gradients are for PARALLEL lines, not perpendicular!'
                }
              }
            ],
            hints: [
              lang === 'bm' ? `Gunakan rumus syarat dua garis serenjang: $m_1 m_2 = -1$.` : `Apply the perpendicular line condition: $m_1 m_2 = -1$.`,
              lang === 'bm' ? `Songsangkan pecahan $m_1 = ${m1}$ DAN tukar tandanya (+ menjadi −, − menjadi +).` : `Flip the reciprocal of $m_1 = ${m1}$ AND negate its sign.`
            ],
            steps: [
              {
                badge: 'P1',
                title: lang === 'bm' ? 'Syarat serenjang' : 'Perpendicular condition',
                tex: `m_1 m_2 = -1 \\implies (${m1})m_2 = -1`,
                why: lang === 'bm' ? 'Dua garis bersudut 90° sentiasa mempunyai hasil darab kecerunan −1.' : 'Two lines meeting at 90° always satisfy m₁m₂ = −1.'
              },
              {
                badge: 'J1',
                title: lang === 'bm' ? 'Selesaikan m₂' : 'Solve m₂',
                tex: `m_2 = -\\frac{1}{${m1}} = ${m2}`,
                why: lang === 'bm' ? 'Songsangkan nilai m₁ dan tukar tandanya kepada berlawanan.' : 'Take the negative reciprocal of m₁.'
              }
            ]
          };
        } else if (tier === 2) {
          const [m, n] = U.pick([[1, 2], [1, 3], [2, 3], [3, 2], [3, 1]]);
          const sum = m + n;
          const x1 = U.randInt(-4, 2);
          const stepK = U.randInt(2, 5);
          const x2 = x1 + sum * stepK;
          const y1 = U.randInt(1, 5), y2 = y1 + sum * 2;
          const numSum = n * x1 + m * x2;
          const px = numSum / sum;
          const wrongNoCross = (m * x1 + n * x2) / sum;
          const trapsList = [
            {
              value: wrongNoCross,
              message: {
                bm: `Diagnostik Darab Silang [K]: Anda mendarab m dengan x₁ tanpa darab silang! Ingat: nisbah m (sebelah A) mesti didarab dengan koordinat B (${x2}).`,
                en: `Cross-Ratio Diagnosis [K]: You multiplied m by x₁ instead of cross-multiplying! Ratio m must multiply x₂ (${x2}).`
              }
            }
          ];
          if (numSum !== px && numSum !== wrongNoCross) {
            trapsList.push({
              value: numSum,
              message: {
                bm: `Cuai Langkah [K]: ${numSum} ialah pengangka nx₁ + mx₂ sahaja! Anda lupa membahagi dengan jumlah nisbah m + n = ${sum}.`,
                en: `Missing Denominator [K]: ${numSum} is only nx₁ + mx₂! You forgot to divide by m + n = ${sum}.`
              }
            });
          } else {
            const midTrap = (x1 + x2) / 2;
            if (midTrap !== px && midTrap !== wrongNoCross) {
              trapsList.push({
                value: midTrap,
                message: {
                  bm: `Salah Rumus [P]: ${midTrap} ialah titik tengah (1:1)! Nisbah diberi ialah ${m}:${n}, bukan sama panjang.`,
                  en: `Formula Mix-Up [P]: ${midTrap} is the midpoint (1:1)! The given ratio is ${m}:${n}, not equal halves.`
                }
              });
            }
          }
          return {
            tier: 2, tpLabel: 'TP3–TP4', subtopic: { bm: '7.1 Pembahagi Tembereng Garis m : n', en: '7.1 Divisor of Line Segment m : n' }, marks: 3,
            prompt: lang === 'bm'
              ? `Titik $P(x, y)$ membahagi tembereng garis yang menyambungkan $A(${x1}, ${y1})$ dan $B(${x2}, ${y2})$ dengan nisbah $AP : PB = ${m} : ${n}$. Cari **koordinat-$x$** bagi titik $P$.`
              : `Point $P(x, y)$ divides the line segment joining $A(${x1}, ${y1})$ and $B(${x2}, ${y2})$ internally in the ratio $AP : PB = ${m} : ${n}$. Find the **$x$-coordinate** of point $P$.`,
            answerType: 'number', correctValue: px, displayAnswerTex: `x = ${px}`,
            intentMeta: {
              given: {
                bm: `$A(${x1},${y1}),\\; B(${x2},${y2}),\\; m:n = ${m}:${n}$`,
                en: `$A(${x1},${y1}),\\; B(${x2},${y2}),\\; m:n = ${m}:${n}$`
              },
              goal: { bm: 'Cari $x = \\frac{nx_1 + mx_2}{m + n}$', en: 'Find $x = \\frac{nx_1 + mx_2}{m + n}$' },
              conceptRule: { bm: 'Darab silang nisbah: $n$ darab $A$, $m$ darab $B$', en: 'Cross-multiply ratio: $n$ times $A$, $m$ times $B$' }
            },
            guidedSteps: [
              {
                prompt: {
                  bm: `Darab silang untuk pengangka-$x$: kira $n x_1 + m x_2 = ${n}(${x1}) + ${m}(${x2})$:`,
                  en: `Cross-multiply for the numerator: compute $n x_1 + m x_2 = ${n}(${x1}) + ${m}(${x2})$:`
                },
                expected: numSum,
                hint: { bm: `${n * x1} + ${m * x2} = ${numSum}.`, en: `${n * x1} + ${m * x2} = ${numSum}.` }
              },
              {
                prompt: {
                  bm: `Bahagikan hasil itu dengan jumlah nisbah $m + n = ${sum}$:`,
                  en: `Divide that sum by $m + n = ${sum}$:`
                },
                expected: px,
                hint: { bm: `${numSum} ÷ ${sum} = ${px}.`, en: `${numSum} ÷ ${sum} = ${px}.` }
              }
            ],
            traps: trapsList,
            hints: [
              lang === 'bm' ? `Gunakan rumus darab silang $x = \\frac{nx_1 + mx_2}{m + n}$ dengan $m = ${m}$ dan $n = ${n}$.` : `Use the cross-weighted formula $x = \\frac{nx_1 + mx_2}{m + n}$ with $m = ${m}$ and $n = ${n}$.`,
              lang === 'bm' ? `Pastikan $n = ${n}$ didarab dengan $x_1 = ${x1}$ dan $m = ${m}$ didarab dengan $x_2 = ${x2}$, kemudian bahagi dengan ${sum}.` : `Multiply $n = ${n}$ by $x_1 = ${x1}$ and $m = ${m}$ by $x_2 = ${x2}$, then divide by ${sum}.`
            ],
            steps: [
              {
                badge: 'K1',
                title: lang === 'bm' ? 'Gantikan ke dalam rumus pembahagi tembereng' : 'Substitute into ratio formula',
                tex: `x = \\frac{${n}(${x1}) + ${m}(${x2})}{${m} + ${n}}`,
                why: lang === 'bm' ? 'Darab silang nisbah ke hujung bertentangan dan bahagi dengan jumlah bahagian.' : 'Cross-multiply weights to opposite endpoints and divide by total parts.'
              },
              {
                badge: 'K1',
                title: lang === 'bm' ? 'Kira pengangka dan penyebut' : 'Evaluate numerator and denominator',
                tex: `x = \\frac{${n * x1} + ${m * x2}}{${sum}} = \\frac{${numSum}}{${sum}}`,
                why: lang === 'bm' ? 'Nilaikan setiap hasil darab dahulu sebelum menjumlah.' : 'Evaluate the products carefully before summing.'
              },
              {
                badge: 'J1',
                title: lang === 'bm' ? 'Permudahkan nilai x' : 'Simplify x-coordinate',
                tex: `x = ${px}`,
                why: lang === 'bm' ? 'Bahagi untuk mendapat koordinat-x titik P.' : 'Divide to obtain the x-coordinate of P.'
              }
            ]
          };
        } else {
          const x1 = 1, y1 = 2;
          const x2 = U.randInt(5, 8), y2 = U.randInt(1, 3);
          const x3 = U.randInt(2, 5), y3 = U.randInt(6, 9);
          const sumDown = x1 * y2 + x2 * y3 + x3 * y1;
          const sumUp = y1 * x2 + y2 * x3 + y3 * x1;
          const diff = Math.abs(sumDown - sumUp);
          const area = 0.5 * diff;
          const areaLabel = lang === 'bm' ? '\\text{Luas}' : '\\text{Area}';
          const unitLabel = lang === 'bm' ? '\\text{unit}^2' : '\\text{units}^2';
          const wrongSumTrap = 0.5 * Math.abs(sumDown + sumUp);
          const trapsList = [
            {
              value: area * 2,
              message: {
                bm: 'Diagnostik Rumus [K]: Anda terlupa darab dengan 1/2 di hadapan rumus luas tali kasut!',
                en: 'Formula Diagnosis [K]: You forgot to multiply by 1/2 in front of the Shoelace formula!'
              }
            }
          ];
          if (wrongSumTrap !== area && wrongSumTrap !== area * 2) {
            trapsList.push({
              value: wrongSumTrap,
              message: {
                bm: 'Silap Operasi [K]: Dalam Rumus Tali Kasut, anda mesti MENOLAK jumlah atas daripada jumlah bawah, bukan menambahkannya!',
                en: 'Operation Trap [K]: In the Shoelace Formula, you must SUBTRACT the upward sum from the downward sum, not add them!'
              }
            });
          }
          return {
            tier: 3, tpLabel: 'TP5–TP6 (KBAT)', subtopic: { bm: '7.3 Luas Poligon (Rumus Tali Kasut)', en: '7.3 Area of Polygon (Shoelace)' }, marks: 4,
            prompt: lang === 'bm'
              ? `Cari luas segi tiga $ABC$ dengan bucu-bucu $A(${x1}, ${y1})$, $B(${x2}, ${y2})$, dan $C(${x3}, ${y3})$.`
              : `Find the area of triangle $ABC$ with vertices $A(${x1}, ${y1})$, $B(${x2}, ${y2})$, and $C(${x3}, ${y3})$.`,
            answerType: 'number', correctValue: area, displayAnswerTex: `${areaLabel} = ${area}\\text{ ${lang === 'bm' ? 'unit' : 'units'}}^2`,
            intentMeta: {
              given: {
                bm: `$A(${x1},${y1}),\\; B(${x2},${y2}),\\; C(${x3},${y3})$`,
                en: `$A(${x1},${y1}),\\; B(${x2},${y2}),\\; C(${x3},${y3})$`
              },
              goal: { bm: '$\\text{Luas} = \\frac{1}{2}|\\sum\\searrow - \\sum\\swarrow|$', en: '$\\text{Area} = \\frac{1}{2}|\\sum\\searrow - \\sum\\swarrow|$' },
              conceptRule: { bm: 'Ulang bucu pertama $A$ pada hujung susunan tali kasut!', en: 'Repeat starting vertex $A$ at the end of the shoelace array!' }
            },
            guidedSteps: [
              {
                prompt: {
                  bm: `Susun bucu $(${x1},${y1}), (${x2},${y2}), (${x3},${y3}), (${x1},${y1})$. Kira jumlah hasil darab pepenjuru ke bawah $(x_1y_2 + x_2y_3 + x_3y_1)$:`,
                  en: `Arrange $(${x1},${y1}), (${x2},${y2}), (${x3},${y3}), (${x1},${y1})$. Compute the downward diagonal sum $(x_1y_2 + x_2y_3 + x_3y_1)$:`
                },
                expected: sumDown,
                hint: { bm: `${x1 * y2} + ${x2 * y3} + ${x3 * y1} = ${sumDown}.`, en: `${x1 * y2} + ${x2 * y3} + ${x3 * y1} = ${sumDown}.` }
              },
              {
                prompt: {
                  bm: `Kira jumlah hasil darab pepenjuru ke atas $(y_1x_2 + y_2x_3 + y_3x_1)$:`,
                  en: `Compute the upward diagonal sum $(y_1x_2 + y_2x_3 + y_3x_1)$:`
                },
                expected: sumUp,
                hint: { bm: `${y1 * x2} + ${y2 * x3} + ${y3 * x1} = ${sumUp}.`, en: `${y1 * x2} + ${y2 * x3} + ${y3 * x1} = ${sumUp}.` }
              },
              {
                prompt: {
                  bm: `Akhir sekali, kira $\\frac{1}{2}|${sumDown} - ${sumUp}|$:`,
                  en: `Finally, evaluate $\\frac{1}{2}|${sumDown} - ${sumUp}|$:`
                },
                expected: area,
                hint: { bm: `½ × ${diff} = ${area}.`, en: `½ × ${diff} = ${area}.` }
              }
            ],
            traps: trapsList,
            hints: [
              lang === 'bm' ? `Ulang bucu pertama $A(${x1}, ${y1})$ di hujung susunan dan tolak jumlah ke atas daripada jumlah ke bawah.` : `Repeat starting vertex $A(${x1}, ${y1})$ at the end and subtract upward sum from downward sum.`,
              lang === 'bm' ? `Jangan lupa ambil nilai positif (modulus) dan darab dengan $\\frac{1}{2}$!` : `Remember to take the positive modulus and multiply by $\\frac{1}{2}$!`
            ],
            steps: [
              {
                badge: 'K1',
                title: lang === 'bm' ? 'Kira hasil darab pepenjuru ke bawah dan ke atas' : 'Compute downward and upward diagonal products',
                tex: `\\sum\\searrow = ${x1}(${y2}) + ${x2}(${y3}) + ${x3}(${y1}) = ${sumDown}, \\quad \\sum\\swarrow = ${y1}(${x2}) + ${y2}(${x3}) + ${y3}(${x1}) = ${sumUp}`,
                why: lang === 'bm' ? 'Ulang koordinat A di hujung susunan supaya lilitan segi tiga tertutup.' : 'Repeat vertex A at the end so the triangle loop closes.'
              },
              {
                badge: 'K1',
                title: lang === 'bm' ? 'Masukkan ke dalam rumus modulus tali kasut' : 'Substitute into Shoelace modulus formula',
                tex: `${areaLabel} = \\frac{1}{2}|${sumDown} - ${sumUp}| = \\frac{1}{2}(${diff})`,
                why: lang === 'bm' ? 'Tolak kedua-dua jumlah dan ambil nilai mutlak.' : 'Subtract the two sums and take the absolute value.'
              },
              {
                badge: 'J1',
                title: lang === 'bm' ? 'Nilai luas segi tiga' : 'Final triangle area',
                tex: `${areaLabel} = ${area}\\text{ }${unitLabel}`,
                why: lang === 'bm' ? 'Bahagikan dengan 2 untuk mendapat luas tepat.' : 'Halve the modulus difference to get the exact area.'
              }
            ]
          };
        }
      }
    },

    // =========================================================================
    // FORM 4 CHAPTER 8: VECTORS / VEKTOR
    // =========================================================================
    {
      id: 'f4-c8',
      stage: 2,
      unlocked: true,
      form: 4,
      num: 8,
      code: { bm: 'T4 • Bab 8', en: 'F4 • Ch 8' },
      icon: 'a⃗',
      color: '#3b82f6',
      category: 'geometry',
      title: { bm: 'Vektor', en: 'Vectors' },
      subtitle: {
        bm: 'Skalar vs vektor, hukum segi tiga & segi empat selari, nisbah bahagian & vektor lajur/Cartesan',
        en: 'Scalar vs vector, triangle & parallelogram laws, ratio split & column/Cartesian vectors'
      },
      spmWeight: { bm: 'Kertas 1 & Kertas 2 Bhg B (8–10 markah)', en: 'Paper 1 & Paper 2 Sec B (8–10 marks)' },
      concepts: [
        {
          title: { bm: '1. Skalar vs Vektor, Hukum Segi Tiga, Segi Empat Selari & Nisbah', en: '1. Scalar vs Vector, Triangle & Parallelogram Laws, Ratio Split' },
          prereq: {
            bm: '**Skalar** hanya ada saiz ("berjalan 5 km"), manakala **Vektor** ada saiz **DAN arah** ("berjalan 5 km ke Timur Laut").\n- **Hukum Segi Tiga:** bayangkan tiket penerbangan bersambung $A \\to B$ lalu $B \\to C$: perjalanan bersih ialah $A \\to C$ ($\\vec{AB} + \\vec{BC} = \\vec{AC}$).\n- **Hukum Segi Empat Selari:** dua bot tunda menarik kapal di sepanjang dua sisi bersebelahan menghasilkan laluan paduan di pepenjuru tengah!\n**Peraturan Tulisan Tangan SPM:** Huruf tebal bercetak $\\mathbf{a}$ wajib ditulis dengan garis beralun $\\underset{\\sim}{a}$ di atas kertas peperiksaan!',
            en: 'A **Scalar** has size only ("walk 5 km"), whereas a **Vector** has size **AND direction** ("walk 5 km North-East").\n- **Triangle Law:** think of connecting flights $A \\to B$ then $B \\to C$: net trip is $A \\to C$ ($\\vec{AB} + \\vec{BC} = \\vec{AC}$).\n- **Parallelogram Law:** two tugboats pulling along adjacent edges produce the central diagonal resultant!\n**SPM Handwriting Rule:** Printed bold $\\mathbf{a}$ must be written with a wavy underline $\\underset{\\sim}{a}$ on exam paper!'
          },
          body: {
            bm: 'Dua pintasan penting Bab 8:\n1. **Lawan arah tukar tanda:** $\\vec{BA} = -\\vec{AB}$, maka $\\vec{AB} = \\vec{AO} + \\vec{OB} = \\vec{OB} - \\vec{OA}$ ("Hujung tolak Mula").\n2. **Pembahagian Nisbah:** Jika titik $C$ di atas $AB$ dengan nisbah $AC : CB = m : n$, jumlah bahagian ialah **$m + n$** (bukan $n$!), maka $\\vec{AC} = \\frac{m}{m+n}\\vec{AB}$.',
            en: 'Two essential Chapter 8 tools:\n1. **Reversing direction flips sign:** $\\vec{BA} = -\\vec{AB}$, so $\\vec{AB} = \\vec{AO} + \\vec{OB} = \\vec{OB} - \\vec{OA}$ ("Head minus Tail").\n2. **Ratio Splitting:** If point $C$ lies on $AB$ with $AC : CB = m : n$, total parts equal **$m + n$** (not $n$!), so $\\vec{AC} = \\frac{m}{m+n}\\vec{AB}$.'
          },
          firstStep: {
            bm: '1. Lukis anak panah pada rajah dan ikut laluan sedia ada.\n2. Tukar tanda kepada negatif ($-$) setiap kali berjalan melawan arah anak panah asal.\n3. Bagi nisbah $m : n$, sentiasa letak jumlah $m + n$ di penyebut.',
            en: '1. Trace the arrows on the diagram from start to destination.\n2. Flip to negative ($-$) whenever you walk opposite to a given arrow.\n3. For ratio $m : n$, always put total $m + n$ in the denominator.'
          },
          formulas: [
            { label: { bm: 'Vektor Negatif & Hukum Segi Tiga', en: 'Negative & Triangle Law' }, tex: '\\vec{BA} = -\\vec{AB}, \\qquad \\vec{AB} = \\vec{AO} + \\vec{OB} = \\vec{OB} - \\vec{OA}' },
            {
              label: { bm: 'Segi Empat Selari & Pembahagian Nisbah', en: 'Parallelogram Law & Ratio Split' },
              tex: {
                bm: '\\vec{AD} = \\vec{AB} + \\vec{AC} \\;(\\text{pepenjuru}), \\qquad \\vec{AC} = \\frac{m}{m+n}\\vec{AB}',
                en: '\\vec{AD} = \\vec{AB} + \\vec{AC} \\;(\\text{diag.}), \\qquad \\vec{AC} = \\frac{m}{m+n}\\vec{AB}'
              }
            }
          ],
          workedExample: {
            title: { bm: 'Contoh: Pembahagian Nisbah Vektor AC : CB = 1 : 2', en: 'Example: Vector Ratio Split AC : CB = 1 : 2' },
            problem: {
              bm: 'Diberi $\\vec{OA} = \\mathbf{a}$ dan $\\vec{OB} = \\mathbf{b}$. Titik $C$ terletak pada garis lurus $AB$ dengan keadaan $AC : CB = 1 : 2$. Ungkapkan $\\vec{OC}$ dalam sebutan $\\mathbf{a}$ dan $\\mathbf{b}$.',
              en: 'Given $\\vec{OA} = \\mathbf{a}$ and $\\vec{OB} = \\mathbf{b}$. Point $C$ lies on straight line $AB$ such that $AC : CB = 1 : 2$. Express $\\vec{OC}$ in terms of $\\mathbf{a}$ and $\\mathbf{b}$.'
            },
            steps: [
              {
                label: { bm: 'Cari $\\vec{AB}$ menggunakan Hujung tolak Mula', en: 'Find $\\vec{AB}$ via Head minus Tail' },
                tex: '\\vec{AB} = \\vec{OB} - \\vec{OA} = \\mathbf{b} - \\mathbf{a}',
                why: {
                  bm: 'Untuk bergerak dari $A$ ke $B$ melalui $O$, pergi $A \\to O$ ($-\\mathbf{a}$) diikuti $O \\to B$ ($+\\mathbf{b}$).',
                  en: 'Going from $A$ to $B$ via $O$ travels against $\\mathbf{a}$ ($-\\mathbf{a}$) then along $\\mathbf{b}$ ($+\\mathbf{b}$).'
                }
              },
              {
                label: { bm: 'Tukar nisbah $1 : 2$ kepada pecahan jumlah $1 + 2 = 3$', en: 'Convert ratio $1 : 2$ into fraction of $1 + 2 = 3$' },
                tex: '\\vec{AC} = \\frac{1}{1 + 2}\\vec{AB} = \\frac{1}{3}(\\mathbf{b} - \\mathbf{a})',
                why: {
                  bm: 'Keseluruhan $AB$ dibahagi kepada $3$ bahagian sama besar dan $AC$ mengambil $1$ bahagian.',
                  en: 'The full segment $AB$ is split into $3$ equal parts, and $AC$ takes $1$ part.'
                }
              },
              {
                label: { bm: 'Sambung laluan $\\vec{OC} = \\vec{OA} + \\vec{AC}$ dan permudahkan', en: 'Join path $\\vec{OC} = \\vec{OA} + \\vec{AC}$ and simplify' },
                tex: '\\vec{OC} = \\mathbf{a} + \\frac{1}{3}(\\mathbf{b} - \\mathbf{a}) = \\left(1 - \\frac{1}{3}\\right)\\mathbf{a} + \\frac{1}{3}\\mathbf{b} = \\frac{2}{3}\\mathbf{a} + \\frac{1}{3}\\mathbf{b}',
                why: {
                  bm: 'Kembangkan kurungan dan kumpulkan sebutan $\\mathbf{a}$ bersama ($1 - \\frac{1}{3} = \\frac{2}{3}$).',
                  en: 'Expand the bracket and combine the $\\mathbf{a}$-terms ($1 - \\frac{1}{3} = \\frac{2}{3}$).'
                }
              }
            ],
            trap: {
              bm: 'Jangan menulis $\\vec{AC} = \\frac{1}{2}\\vec{AB}$! Nisbah $1 : 2$ bermaksud penyebutnya ialah $1 + 2 = 3$.',
              en: 'Never write $\\vec{AC} = \\frac{1}{2}\\vec{AB}$! Ratio $1 : 2$ means the denominator is $1 + 2 = 3$.'
            }
          },
          tip: {
            bm: 'Ingat pintasan emas: $\\vec{AB} = \\vec{OB} - \\vec{OA}$ ("Hujung tolak Mula")!',
            en: 'Golden shortcut: $\\vec{AB} = \\vec{OB} - \\vec{OA}$ ("Head minus Tail")!'
          }
        },
        {
          title: { bm: '2. Vektor Selari, Segaris & Pekali Tak Selari', en: '2. Parallel Vectors, Collinearity & Non-Parallel Coefficients' },
          prereq: {
            bm: 'Dua eskalator bersebelahan yang menghala arah sama (atau bertentangan $180^\\circ$) adalah **selari** ($\\mathbf{u} = k\\mathbf{v}$). Tiga tiang lampu di atas satu jalan lurus adalah **segaris** — bukan sahaja selari, malah mesti berkongsi **satu titik sepunya**!',
            en: 'Two escalators side by side are **parallel** ($\\mathbf{u} = k\\mathbf{v}$). Three lamp posts along one straight road are **collinear** — not only parallel, they also share a **common post (point)**!'
          },
          body: {
            bm: '- **Selari:** $\\mathbf{u} = k\\mathbf{v}$ bagi pemalar skalar $k \\neq 0$.\n- **Segaris (*Collinear*):** Wajib buktikan DUA perkara untuk markah penuh: (1) $\\vec{AB} = k\\vec{BC}$ (selari), DAN (2) titik $B$ ialah titik sepunya.\n- **Perbandingan Pekali Tak Selari:** Jika $\\mathbf{a}$ dan $\\mathbf{b}$ bukan sifar dan tidak selari, maka $h\\mathbf{a} + k\\mathbf{b} = \\mathbf{0}$ memaksa kedua-dua pekali skalar sifar: $h = 0$ dan $k = 0$.',
            en: '- **Parallel:** $\\mathbf{u} = k\\mathbf{v}$ for scalar $k \\neq 0$.\n- **Collinear:** Must state TWO things for full marks: (1) $\\vec{AB} = k\\vec{BC}$ (parallel), AND (2) point $B$ is a common point.\n- **Non-Parallel Comparison:** If $\\mathbf{a}, \\mathbf{b}$ are non-zero and non-parallel, then $h\\mathbf{a} + k\\mathbf{b} = \\mathbf{0}$ forces both scalar brackets to vanish: $h = 0$ and $k = 0$.'
          },
          firstStep: {
            bm: '1. Untuk segaris, cari $\\vec{AB}$ dan $\\vec{BC}$ dahulu, kemudian faktorkan keluar nombor skalar $k$.\n2. Nyatakan kedua-dua ayat: "$\\vec{AB} = k\\vec{BC}$ dan $B$ titik sepunya".\n3. Untuk persamaan vektor tak selari, kumpul $\\mathbf{a}$ dan $\\mathbf{b}$ berasingan lalu samakan setiap kurungan dengan $0$.',
            en: '1. For collinearity, find $\\vec{AB}$ and $\\vec{BC}$ first, then factor out the scalar multiple $k$.\n2. Explicitly write BOTH: "$\\vec{AB} = k\\vec{BC}$ and $B$ is a common point".\n3. For non-parallel equations, group $\\mathbf{a}$ and $\\mathbf{b}$ separately and equate each bracket to $0$.'
          },
          formulas: [
            {
              label: { bm: 'Syarat Segaris', en: 'Collinearity Condition' },
              tex: {
                bm: '\\vec{AB} = k\\vec{BC} \\quad (B\\text{ sepunya})',
                en: '\\vec{AB} = k\\vec{BC} \\quad (B\\text{ common})'
              }
            },
            {
              label: { bm: 'Perbandingan Pekali Vektor Tak Selari', en: 'Non-Parallel Vector Comparison' },
              tex: {
                bm: 'h\\mathbf{a} + k\\mathbf{b} = \\mathbf{0} \\implies h = 0 \\text{ dan } k = 0',
                en: 'h\\mathbf{a} + k\\mathbf{b} = \\mathbf{0} \\implies h = 0 \\text{ and } k = 0'
              }
            }
          ],
          workedExample: {
            title: { bm: 'Contoh: Persamaan Vektor Tak Selari', en: 'Example: Equating Non-Parallel Vector Coefficients' },
            problem: {
              bm: 'Diberi $\\mathbf{a}$ dan $\\mathbf{b}$ tak sifar dan tidak selari. Jika $(h - 3)\\mathbf{a} + (2h + k - 1)\\mathbf{b} = \\mathbf{0}$, cari nilai $h$ dan $k$.',
              en: 'Given $\\mathbf{a}$ and $\\mathbf{b}$ are non-zero and non-parallel. If $(h - 3)\\mathbf{a} + (2h + k - 1)\\mathbf{b} = \\mathbf{0}$, find $h$ and $k$.'
            },
            steps: [
              {
                label: { bm: 'Samakan kedua-dua kurungan skalar dengan sifar', en: 'Set both scalar brackets equal to zero' },
                tex: 'h - 3 = 0, \\qquad 2h + k - 1 = 0',
                why: {
                  bm: 'Kerana $\\mathbf{a}$ dan $\\mathbf{b}$ tidak selari, kedua-dua komponen tidak boleh saling menghapus melainkan pekalinya $0$.',
                  en: 'Because $\\mathbf{a}$ and $\\mathbf{b}$ are non-parallel, the sum can only equal $\\mathbf{0}$ if each coefficient is $0$.'
                }
              },
              {
                label: { bm: 'Selesaikan $h$, kemudian gantikan ke dalam persamaan kedua', en: 'Solve $h$, then substitute into the second equation' },
                tex: 'h = 3 \\implies 2(3) + k - 1 = 0 \\implies 5 + k = 0 \\implies k = -5',
                why: {
                  bm: 'Cari pemalar yang berdiri sendiri ($h$) dahulu supaya $k$ dapat dicari dengan mudah.',
                  en: 'Solve the single-variable equation ($h$) first, then substitute to find $k$.'
                }
              }
            ],
            trap: {
              bm: 'Dalam soalan "tunjukkan $A, B, C$ segaris", ramai pelajar kehilangan markah akhir N1 kerana lupa menulis perkataan "titik sepunya $B$"!',
              en: 'In collinearity proofs, students lose the final N1 mark by forgetting to state "common point $B$"!'
            }
          },
          tip: {
            bm: 'Segaris = Selari + 1 Titik Sepunya! Wajib tulis kedua-dua syarat.',
            en: 'Collinear = Parallel + 1 Common Point! Always state both conditions.'
          }
        },
        {
          title: { bm: '3. Vektor Cartesan (xi + yj) & Vektor Lajur', en: '3. Cartesian Vectors (xi + yj) & Column Vectors' },
          prereq: {
            bm: 'Bayangkan berjalan di atas petak peta atau menaiki lif koordinat: "$3$ langkah ke Timur ($x$) dan $4$ tingkat ke atas ($y$)" boleh ditulis sebagai **$3\\mathbf{i} + 4\\mathbf{j}$** ATAU sebagai **vektor lajur** $\\binom{3}{4}$!',
            en: 'Think of walking a city grid or riding a coordinate elevator: "$3$ steps East ($x$) and $4$ floors up ($y$)" can be written as **$3\\mathbf{i} + 4\\mathbf{j}$** OR as a **column vector** $\\binom{3}{4}$!'
          },
          body: {
            bm: 'Vektor lajur $\\binom{x}{y}$ meletakkan komponen mengufuk ($\\mathbf{i}$) di baris atas dan komponen mencancang ($\\mathbf{j}$) di baris bawah. Untuk mendarab skalar $k\\binom{x}{y} = \\binom{kx}{ky}$, darab **kedua-dua baris**.\nPanjang atau **magnitud** vektor dikira melalui Teorem Pythagoras $|\\mathbf{r}| = \\sqrt{x^2 + y^2}$, dan **vektor unit** $\\hat{\\mathbf{r}}$ mengecilkan panjangnya menjadi tepat $1$ unit dalam arah yang sama.',
            en: 'Column vector $\\binom{x}{y}$ places the horizontal ($\\mathbf{i}$) step on top and vertical ($\\mathbf{j}$) step at the bottom. Scalar multiplication $k\\binom{x}{y} = \\binom{kx}{ky}$ scales **both rows**.\nThe length or **magnitude** uses Pythagoras $|\\mathbf{r}| = \\sqrt{x^2 + y^2}$, and the **unit vector** $\\hat{\\mathbf{r}}$ scales its length to exactly $1$ in the same direction.'
          },
          firstStep: {
            bm: '1. Cari $\\vec{AB} = \\vec{OB} - \\vec{OA}$ mengikut komponen (atas tolak atas, bawah tolak bawah).\n2. Kurungkan nombor negatif sebelum mengkuasadua: $(-4)^2 = +16$.\n3. Untuk vektor unit, bahagi vektor asal dengan magnitud $|\\mathbf{r}|$ (biar dalam pecahan/surd tepat jika tidak bulat).',
            en: '1. Find $\\vec{AB} = \\vec{OB} - \\vec{OA}$ component-wise (top minus top, bottom minus bottom).\n2. Bracket negative numbers before squaring: $(-4)^2 = +16$.\n3. For the unit vector, divide the vector by $|\\mathbf{r}|$ (keep exact fraction/surd if irrational).'
          },
          formulas: [
            { label: { bm: 'Bentuk Cartesan & Vektor Lajur', en: 'Cartesian & Column Vector Form' }, tex: 'x\\mathbf{i} + y\\mathbf{j} = \\binom{x}{y}, \\qquad k\\binom{x}{y} = \\binom{kx}{ky}' },
            { label: { bm: 'Magnitud & Vektor Unit', en: 'Magnitude & Unit Vector' }, tex: '|\\mathbf{r}| = \\sqrt{x^2 + y^2}, \\qquad \\hat{\\mathbf{r}} = \\frac{x\\mathbf{i} + y\\mathbf{j}}{\\sqrt{x^2 + y^2}}' }
          ],
          workedExample: {
            title: { bm: 'Contoh: Vektor Lajur, Magnitud & Vektor Unit AB⃗', en: 'Example: Column Vector, Magnitude & Unit Vector AB⃗' },
            problem: {
              bm: 'Diberi $A(2, -1)$ dan $B(5, 3)$. Cari $\\vec{AB}$ dalam bentuk vektor lajur, magnitud $|\\vec{AB}|$, dan vektor unit $\\hat{\\mathbf{u}}$ dalam arah $\\vec{AB}$.',
              en: 'Given $A(2, -1)$ and $B(5, 3)$, find $\\vec{AB}$ as a column vector, its magnitude $|\\vec{AB}|$, and unit vector $\\hat{\\mathbf{u}}$ in the direction of $\\vec{AB}$.'
            },
            steps: [
              {
                label: { bm: 'Tulis $\\vec{OA}$ dan $\\vec{OB}$ sebagai vektor lajur dan tolak', en: 'Write $\\vec{OA}$ and $\\vec{OB}$ as column vectors and subtract' },
                tex: '\\vec{AB} = \\vec{OB} - \\vec{OA} = \\binom{5}{3} - \\binom{2}{-1} = \\binom{5 - 2}{3 - (-1)} = \\binom{3}{4}',
                why: {
                  bm: 'Perhatikan tanda di baris bawah: $3 - (-1) = 3 + 1 = 4$.',
                  en: 'Watch the bottom row sign: $3 - (-1) = 3 + 1 = 4$.'
                }
              },
              {
                label: { bm: 'Hitung magnitud $|\\vec{AB}|$ dengan Pythagoras', en: 'Compute magnitude $|\\vec{AB}|$ via Pythagoras' },
                tex: '|\\vec{AB}| = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5',
                why: {
                  bm: 'Pasangan $(3, 4, 5)$ ialah segi tiga Pythagoras klasik.',
                  en: '$(3, 4, 5)$ is a classic Pythagorean triple.'
                }
              },
              {
                label: { bm: 'Bahagikan $\\vec{AB}$ dengan magnitudnya untuk vektor unit', en: 'Divide $\\vec{AB}$ by its magnitude for the unit vector' },
                tex: '\\hat{\\mathbf{u}} = \\frac{1}{5}\\binom{3}{4} = \\frac{3}{5}\\mathbf{i} + \\frac{4}{5}\\mathbf{j}',
                why: {
                  bm: 'Membahagi dengan $5$ mengekalkan arah $\\vec{AB}$ tetapi menjadikan panjangnya $1$.',
                  en: 'Dividing by $5$ keeps the exact direction of $\\vec{AB}$ while scaling its length to $1$.'
                }
              }
            ],
            trap: {
              bm: 'Sentiasa kurungkan nombor negatif dalam kalkulator: $(-4)^2 = +16$, bukannya $-4^2 = -16$!',
              en: 'Always bracket negative components in your calculator: $(-4)^2 = +16$, NOT $-4^2 = -16$!'
            }
          },
          tip: {
            bm: 'Pasangan Pythagoras popular dalam SPM: $(3,4)\\to 5$, $(5,12)\\to 13$, $(6,8)\\to 10$, $(8,15)\\to 17$!',
            en: 'Classic SPM Pythagorean triples: $(3,4)\\to 5$, $(5,12)\\to 13$, $(6,8)\\to 10$, $(8,15)\\to 17$!'
          }
        }
      ],
      traps: [
        {
          title: { bm: 'Tertukar AB⃗ = OA⃗ − OB⃗ Secara Terbalik', en: 'Writing AB⃗ = OA⃗ − OB⃗ Backwards' },
          desc: {
            bm: '$\\vec{AB}$ bergerak dari $A$ ke $B$: pergi $A\\to O$ ($-\\vec{OA}$) diikuti $O\\to B$ ($+\\vec{OB}$), jadi wajib $\\vec{OB} - \\vec{OA}$ ("Hujung tolak Mula")!',
            en: '$\\vec{AB}$ goes $A\\to O$ ($-\\vec{OA}$) then $O\\to B$ ($+\\vec{OB}$), so it is ALWAYS $\\vec{OB} - \\vec{OA}$ ("Head minus Tail")!'
          }
        },
        {
          title: { bm: 'Menolak Kuasa Dua dalam Rumus Magnitud', en: 'Subtracting Squares Inside Magnitude' },
          desc: {
            bm: 'Magnitud $|3\\mathbf{i} - 4\\mathbf{j}|$ ialah $\\sqrt{3^2 + (-4)^2} = \\sqrt{9 + 16} = 5$, **bukan** $\\sqrt{3^2 - 4^2} = \\sqrt{-7}$!',
            en: 'Magnitude $|3\\mathbf{i} - 4\\mathbf{j}|$ is $\\sqrt{3^2 + (-4)^2} = \\sqrt{9 + 16} = 5$, **never** $\\sqrt{3^2 - 4^2}$!'
          }
        },
        {
          title: { bm: 'Lupa Titik Sepunya (Segaris) & Penyebut m + n (Nisbah)', en: 'Omitting Common Point (Collinearity) & Total m + n (Ratio)' },
          desc: {
            bm: 'Untuk membuktikan $A, B, C$ segaris, wajib nyatakan $\\vec{AB} = k\\vec{BC}$ **DAN titik $B$ sepunya**. Untuk nisbah $AC : CB = 1 : 2$, guna $\\frac{1}{3}\\vec{AB}$, bukan $\\frac{1}{2}\\vec{AB}$!',
            en: 'To prove $A, B, C$ collinear, state $\\vec{AB} = k\\vec{BC}$ **AND common point $B$**. For $AC : CB = 1 : 2$, use $\\frac{1}{3}\\vec{AB}$, not $\\frac{1}{2}\\vec{AB}$!'
          }
        }
      ],
      solvers: [
        {
          id: 'vec-cartesian',
          title: { bm: 'Solver Vektor Cartesan, Magnitud & Vektor Unit', en: 'Cartesian Vector, Magnitude & Unit Vector Solver' },
          desc: {
            bm: 'Kira AB⃗ = OB⃗ − OA⃗, magnitud |AB⃗|, dan vektor unit selari dengan AB⃗.',
            en: 'Compute AB⃗ = OB⃗ − OA⃗, magnitude |AB⃗|, and unit vector in the direction of AB⃗.'
          },
          inputs: [
            { id: 'ax', label: 'OA: x₁', default: 2 }, { id: 'ay', label: 'OA: y₁', default: -1 },
            { id: 'bx', label: 'OB: x₂', default: 5 }, { id: 'by', label: 'OB: y₂', default: 3 }
          ],
          solve: function (v, lang) {
            if (!isNumInput(v.ax) || !isNumInput(v.ay) || !isNumInput(v.bx) || !isNumInput(v.by)) {
              const msg = lang === 'bm' ? '\\text{Masukkan semua komponen vektor yang sah}' : '\\text{Enter valid numbers for all vector components}';
              return {
                problemTex: msg,
                steps: [{ badge: 'P1', title: lang === 'bm' ? 'Input tidak sah' : 'Invalid input', tex: msg, why: lang === 'bm' ? 'Pastikan semua komponen x dan y diisi.' : 'Ensure all x and y components are valid numbers.' }],
                finalTex: msg
              };
            }
            const ax = Number(v.ax), ay = Number(v.ay), bx = Number(v.bx), by = Number(v.by);
            const dx = bx - ax;
            const dy = by - ay;
            const sqX = dx * dx;
            const sqY = dy * dy;
            const magSq = sqX + sqY;
            const mag = Math.sqrt(magSq);
            const formatVecIJ = (x, y) => {
              const zx = Math.abs(x) < 1e-9 ? 0 : x;
              const zy = Math.abs(y) < 1e-9 ? 0 : y;
              if (zx === 0 && zy === 0) return '\\mathbf{0}';
              const parts = [];
              if (zx !== 0) {
                const absX = Math.abs(zx);
                const xMag = Math.abs(absX - 1) < 1e-9 ? '' : fmtSmart(absX, 4);
                parts.push(`${zx < 0 ? '-' : ''}${xMag}\\mathbf{i}`);
              }
              if (zy !== 0) {
                const absY = Math.abs(zy);
                const yMag = Math.abs(absY - 1) < 1e-9 ? '' : fmtSmart(absY, 4);
                if (parts.length === 0) parts.push(`${zy < 0 ? '-' : ''}${yMag}\\mathbf{j}`);
                else parts.push(`${zy < 0 ? ' - ' : ' + '}${yMag}\\mathbf{j}`);
              }
              return parts.join('');
            };
            const vecTex = formatVecIJ(dx, dy);

            let unitTex = '';
            if (mag === 0) {
              unitTex = lang === 'bm' ? '\\text{Vektor sifar (tiada vektor unit)}' : '\\text{Zero vector (no unit vector)}';
            } else if (Number.isInteger(dx) && Number.isInteger(dy) && Number.isInteger(mag)) {
              const uParts = [];
              if (dx !== 0) {
                const uxFrac = U.fracTex(dx, mag);
                const uxCoeff = uxFrac === '1' ? '' : (uxFrac === '-1' ? '-' : uxFrac);
                uParts.push(`${uxCoeff}\\mathbf{i}`);
              }
              if (dy !== 0) {
                const uyAbsFrac = U.fracTex(Math.abs(dy), mag);
                const uyCoeff = uyAbsFrac === '1' ? '' : uyAbsFrac;
                if (uParts.length === 0) uParts.push(`${dy < 0 ? '-' : ''}${uyCoeff}\\mathbf{j}`);
                else uParts.push(`${dy < 0 ? ' - ' : ' + '}${uyCoeff}\\mathbf{j}`);
              }
              unitTex = `\\hat{\\mathbf{u}} = \\frac{${vecTex}}{${mag}} = ${uParts.join('')}`;
            } else if (Number.isInteger(magSq)) {
              unitTex = `\\hat{\\mathbf{u}} = \\frac{${vecTex}}{\\sqrt{${magSq}}} \\approx \\frac{${vecTex}}{${fmtSmart(mag, 4)}}`;
            } else {
              unitTex = `\\hat{\\mathbf{u}} = \\frac{${vecTex}}{${fmtSmart(mag, 4)}}`;
            }

            return {
              problemTex: `\\vec{OA} = \\binom{${ax}}{${ay}} = ${formatVecIJ(ax, ay)}, \\quad \\vec{OB} = \\binom{${bx}}{${by}} = ${formatVecIJ(bx, by)}`,
              steps: [
                {
                  badge: 'K1',
                  title: lang === 'bm' ? 'Langkah 1: Cari vektor sesaran AB⃗ = OB⃗ − OA⃗' : 'Step 1: Displacement vector AB⃗ = OB⃗ − OA⃗',
                  tex: `\\vec{AB} = \\binom{${bx}}{${by}} - \\binom{${ax}}{${ay}} = \\binom{${bx} - (${ax})}{${by} - (${ay})} = \\binom{${fmtSmart(dx, 4)}}{${fmtSmart(dy, 4)}} = ${vecTex}`,
                  why: lang === 'bm' ? 'Tolak komponen hujung tolak mula secara baris demi baris.' : 'Subtract Head minus Tail row by row (column vector form).'
                },
                {
                  badge: 'K1',
                  title: lang === 'bm' ? 'Langkah 2: Magnitud |AB⃗|' : 'Step 2: Magnitude |AB⃗|',
                  tex: `|\\vec{AB}| = \\sqrt{(${fmtSmart(dx, 4)})^2 + (${fmtSmart(dy, 4)})^2} = \\sqrt{${fmtSmart(sqX, 4)} + ${fmtSmart(sqY, 4)}} = \\sqrt{${fmtSmart(magSq, 4)}} = ${fmtSmart(mag, 4)}`,
                  why: lang === 'bm' ? 'Guna Teorem Pythagoras dan sentiasa tambah kuasa dua kedua-dua komponen.' : 'Apply Pythagoras and always sum both squared components.'
                },
                {
                  badge: 'J1',
                  title: lang === 'bm' ? 'Langkah 3: Vektor Unit' : 'Step 3: Unit Vector',
                  tex: unitTex,
                  why: lang === 'bm' ? 'Bahagikan vektor dengan magnitudnya; kekalkan bentuk punca tepat apabila bukan nombor bulat.' : 'Divide the vector by its magnitude; keep exact radical form when irrational.'
                }
              ],
              finalTex: `\\vec{AB} = \\binom{${fmtSmart(dx, 4)}}{${fmtSmart(dy, 4)}} = ${vecTex}, \\quad |\\vec{AB}| = ${Number.isInteger(mag) ? mag : `\\sqrt{${fmtSmart(magSq, 4)}} \\approx ${fmtSmart(mag, 4)}`}`
            };
          }
        }
      ],
      generateQuestion: function (tier, lang) {
        if (tier === 1) {
          const triples = [[3, 4, 5], [6, 8, 10], [5, 12, 13], [8, 15, 17], [-3, 4, 5], [5, -12, 13]];
          const [vx, vy, mag] = U.pick(triples);
          const vxSq = vx * vx, vySq = vy * vy, magSq = mag * mag;
          return {
            tier: 1, tpLabel: 'TP1–TP2', subtopic: { bm: '8.3 Magnitud Vektor Cartesan', en: '8.3 Magnitude of Cartesian Vector' }, marks: 2,
            prompt: lang === 'bm'
              ? `Diberi vektor $\\mathbf{v} = ${vx}\\mathbf{i} ${U.signedNum(vy)}\\mathbf{j}$. Cari magnitud $|\\mathbf{v}|$.`
              : `Given the vector $\\mathbf{v} = ${vx}\\mathbf{i} ${U.signedNum(vy)}\\mathbf{j}$, find its magnitude $|\\mathbf{v}|$.`,
            answerType: 'number', correctValue: mag, displayAnswerTex: `|\\mathbf{v}| = ${mag}`,
            intentMeta: {
              given: { bm: `$x = ${vx},\\; y = ${vy}$`, en: `$x = ${vx},\\; y = ${vy}$` },
              goal: { bm: `Cari $|\\mathbf{v}| = \\sqrt{(${vx})^2 + (${vy})^2}$`, en: `Find $|\\mathbf{v}| = \\sqrt{(${vx})^2 + (${vy})^2}$` },
              conceptRule: { bm: 'Magnitud vektor: $|\\mathbf{r}| = \\sqrt{x^2 + y^2}$', en: 'Vector magnitude: $|\\mathbf{r}| = \\sqrt{x^2 + y^2}$' }
            },
            guidedSteps: [
              {
                prompt: {
                  bm: `Kira hasil tambah kuasa dua komponen: $(${vx})^2 + (${vy})^2 = \\;?$`,
                  en: `Compute the sum of squared components: $(${vx})^2 + (${vy})^2 = \\;?$ `
                },
                expected: magSq,
                hint: { bm: `${vxSq} + ${vySq} = ${magSq}.`, en: `${vxSq} + ${vySq} = ${magSq}.` }
              },
              {
                prompt: {
                  bm: `Ambil punca kuasa dua $\\sqrt{${magSq}}$:`,
                  en: `Take the square root $\\sqrt{${magSq}}$:`
                },
                expected: mag,
                hint: { bm: `√${magSq} = ${mag}.`, en: `√${magSq} = ${mag}.` }
              }
            ],
            traps: [
              {
                value: magSq,
                message: {
                  bm: `Diagnostik Langkah Akhir [J]: ${magSq} ialah x² + y²! Jangan lupa punca kuasa dua untuk mendapat |v| = ${mag}.`,
                  en: `Final Step Diagnosis [J]: ${magSq} is x² + y²! Take the square root to get ${mag}.`
                }
              }
            ],
            hints: [
              lang === 'bm' ? `Gunakan Teorem Pythagoras $|\\mathbf{v}| = \\sqrt{(${vx})^2 + (${vy})^2}$.` : `Apply Pythagoras' theorem $|\\mathbf{v}| = \\sqrt{(${vx})^2 + (${vy})^2}$.`,
              lang === 'bm' ? `Sentiasa tambah kuasa dua (nombor negatif dikuasaduakan menjadi positif: ${vxSq} + ${vySq} = ${magSq}).` : `Always add the squares (squaring a negative gives positive: ${vxSq} + ${vySq} = ${magSq}).`
            ],
            steps: [
              {
                badge: 'K1',
                title: lang === 'bm' ? 'Gantikan ke dalam rumus magnitud' : 'Substitute into magnitude formula',
                tex: `|\\mathbf{v}| = \\sqrt{(${vx})^2 + (${vy})^2} = \\sqrt{${vxSq} + ${vySq}} = \\sqrt{${magSq}}`,
                why: lang === 'bm' ? 'Kuasa dua setiap komponen adalah positif dan dijumlahkan di bawah punca.' : 'Each squared component is positive and added inside the square root.'
              },
              {
                badge: 'J1',
                title: lang === 'bm' ? 'Nilai tepat magnitud' : 'Exact magnitude',
                tex: `|\\mathbf{v}| = ${mag}`,
                why: lang === 'bm' ? 'Ambil punca kuasa dua bagi pasangan nombor Pythagoras.' : 'Take the square root of the Pythagorean sum.'
              }
            ]
          };
        } else if (tier === 2) {
          const a = U.pick([2, 3, 4, -3]);
          const b = U.pick([5, -4, 7].filter((val) => !(Math.abs(a) === 2 && val === -4)));
          const k = U.pick([2, 3, -2]);
          const qa = k * a;
          const mAns = k * b;
          const perpTrapVal = U.round(-(a * qa) / b, 4);
          const trapsList = [
            {
              value: perpTrapVal,
              message: {
                bm: 'Diagnostik Konsep [P]: Anda menggunakan syarat serenjang, sedangkan soalan menyatakan SELARI (nisbah komponen sama)!',
                en: 'Concept Diagnosis [P]: Parallel vectors have proportional components (q = kp), not perpendicular!'
              }
            },
            {
              value: k,
              message: {
                bm: `Berhenti Awal [K]: ${k} ialah nilai faktor skala k! Anda masih perlu mendarabkannya dengan ${b} untuk mendapat m = ${mAns}.`,
                en: `Stopped Early [K]: ${k} is the scalar k! You still need to multiply it by ${b} to get m = ${mAns}.`
              }
            }
          ];
          return {
            tier: 2, tpLabel: 'TP3–TP4', subtopic: { bm: '8.1 Syarat Dua Vektor Selari', en: '8.1 Parallel Vectors Condition' }, marks: 3,
            prompt: lang === 'bm'
              ? `Diberi vektor $\\mathbf{p} = ${a}\\mathbf{i} ${U.signedNum(b)}\\mathbf{j}$ dan $\\mathbf{q} = ${qa}\\mathbf{i} + m\\mathbf{j}$ adalah **selari**. Cari nilai pemalar **$m$**.`
              : `Given that vectors $\\mathbf{p} = ${a}\\mathbf{i} ${U.signedNum(b)}\\mathbf{j}$ and $\\mathbf{q} = ${qa}\\mathbf{i} + m\\mathbf{j}$ are **parallel**, find the constant **$m$**.`,
            answerType: 'number', correctValue: mAns, displayAnswerTex: `m = ${mAns}`,
            intentMeta: {
              given: {
                bm: `$\\mathbf{p} = ${a}\\mathbf{i} ${U.signedNum(b)}\\mathbf{j},\\; \\mathbf{q} = ${qa}\\mathbf{i} + m\\mathbf{j}$ (selari)`,
                en: `$\\mathbf{p} = ${a}\\mathbf{i} ${U.signedNum(b)}\\mathbf{j},\\; \\mathbf{q} = ${qa}\\mathbf{i} + m\\mathbf{j}$ (parallel)`
              },
              goal: { bm: 'Guna $\\mathbf{q} = k\\mathbf{p}$ untuk cari $k$ dan $m$', en: 'Use $\\mathbf{q} = k\\mathbf{p}$ to find $k$ and $m$' },
              conceptRule: { bm: 'Vektor selari mempunyai nisbah komponen $\\mathbf{i}$ dan $\\mathbf{j}$ yang sama!', en: 'Parallel vectors share equal $\\mathbf{i}$ and $\\mathbf{j}$ component ratios!' }
            },
            guidedSteps: [
              {
                prompt: {
                  bm: `Oleh sebab $\\mathbf{q} = k\\mathbf{p}$, bandingkan komponen-$\\mathbf{i}$: $${qa} = k(${a})$. Apakah nilai faktor skala $k$?`,
                  en: `Since $\\mathbf{q} = k\\mathbf{p}$, compare $\\mathbf{i}$-components: $${qa} = k(${a})$. What is scalar $k$?`
                },
                expected: k,
                hint: { bm: `${qa} ÷ (${a}) = ${k}.`, en: `${qa} ÷ (${a}) = ${k}.` }
              },
              {
                prompt: {
                  bm: `Sekarang bandingkan komponen-$\\mathbf{j}$: kira $m = k(${b}) = (${k})(${b})$:`,
                  en: `Now compare $\\mathbf{j}$-components: compute $m = (${k})(${b})$:`
                },
                expected: mAns,
                hint: { bm: `${k} × (${b}) = ${mAns}.`, en: `${k} × (${b}) = ${mAns}.` }
              }
            ],
            traps: trapsList,
            hints: [
              lang === 'bm' ? `Tulis $\\mathbf{q} = k\\mathbf{p}$ supaya $${qa}\\mathbf{i} + m\\mathbf{j} = ${a}k\\mathbf{i} ${U.signedNum(b)}k\\mathbf{j}$.` : `Set $\\mathbf{q} = k\\mathbf{p}$ so $${qa}\\mathbf{i} + m\\mathbf{j} = ${a}k\\mathbf{i} ${U.signedNum(b)}k\\mathbf{j}$.`,
              lang === 'bm' ? `Cari $k = \\frac{${qa}}{${a}}$ daripada komponen $\\mathbf{i}$ dahulu, kemudian darab $k$ dengan $${b}$.` : `Find $k = \\frac{${qa}}{${a}}$ from the $\\mathbf{i}$-component first, then multiply $k$ by $${b}$.`
            ],
            steps: [
              {
                badge: 'P1',
                title: lang === 'bm' ? 'Gunakan hubungan vektor selari' : 'Apply parallel vector relation',
                tex: `${qa}\\mathbf{i} + m\\mathbf{j} = k(${a}\\mathbf{i} ${U.signedNum(b)}\\mathbf{j})`,
                why: lang === 'bm' ? 'Dua vektor selari ialah gandaan skalar antara satu sama lain (q = kp).' : 'Two parallel vectors are scalar multiples of each other (q = kp).'
              },
              {
                badge: 'K1',
                title: lang === 'bm' ? 'Cari pemalar skala k' : 'Find scalar k',
                tex: `k = \\frac{${qa}}{${a}} = ${k}`,
                why: lang === 'bm' ? 'Samakan pekali komponen i di kedua-dua belah.' : 'Equate the i-component coefficients on both sides.'
              },
              {
                badge: 'J1',
                title: lang === 'bm' ? 'Kira m' : 'Evaluate m',
                tex: `m = (${k})(${b}) = ${mAns}`,
                why: lang === 'bm' ? 'Gantikan k ke dalam persamaan pekali komponen j.' : 'Substitute k into the j-component coefficient equation.'
              }
            ]
          };
        } else {
          const hAns = U.randInt(2, 6);
          let kAns = U.randInt(-7, -2);
          while (kAns === -hAns) kAns = U.randInt(-7, -2);
          const target = 2 * hAns + kAns;
          const andWord = lang === 'bm' ? '\\text{dan}' : '\\text{and}';
          return {
            tier: 3, tpLabel: 'TP5–TP6 (KBAT)', subtopic: { bm: '8.1 Perbandingan Pekali Vektor Tak Selari', en: '8.1 Non-Parallel Vector Comparison' }, marks: 4,
            prompt: lang === 'bm'
              ? `Diberi $\\mathbf{a}$ dan $\\mathbf{b}$ ialah vektor bukan sifar dan **tidak selari**. Jika $(h - ${hAns})\\mathbf{a} + (2h + k ${U.signedNum(-target)})\\mathbf{b} = \\mathbf{0}$, cari nilai pemalar **$k$**.`
              : `Given $\\mathbf{a}$ and $\\mathbf{b}$ are non-zero and **non-parallel** vectors. If $(h - ${hAns})\\mathbf{a} + (2h + k ${U.signedNum(-target)})\\mathbf{b} = \\mathbf{0}$, find the value of **$k$**.`,
            answerType: 'number', correctValue: kAns, displayAnswerTex: `k = ${kAns} \\quad (h = ${hAns})`,
            intentMeta: {
              given: {
                bm: `$(h - ${hAns})\\mathbf{a} + (2h + k ${U.signedNum(-target)})\\mathbf{b} = \\mathbf{0}$`,
                en: `$(h - ${hAns})\\mathbf{a} + (2h + k ${U.signedNum(-target)})\\mathbf{b} = \\mathbf{0}$`
              },
              goal: { bm: 'Samakan kedua-dua pekali dengan $0$ untuk mencari $k$', en: 'Set both coefficients to $0$ and solve for $k$' },
              conceptRule: { bm: '$p\\mathbf{a} + q\\mathbf{b} = \\mathbf{0}$ (tak selari) $\\implies p = 0$ dan $q = 0$', en: '$p\\mathbf{a} + q\\mathbf{b} = \\mathbf{0}$ (non-parallel) $\\implies p = 0$ and $q = 0$' }
            },
            guidedSteps: [
              {
                prompt: {
                  bm: `Oleh sebab $\\mathbf{a}$ dan $\\mathbf{b}$ tidak selari, pekali bagi $\\mathbf{a}$ mesti sifar: $h - ${hAns} = 0$. Apakah nilai $h$?`,
                  en: `Since $\\mathbf{a}, \\mathbf{b}$ are non-parallel, the coefficient of $\\mathbf{a}$ must be zero: $h - ${hAns} = 0$. What is $h$?`
                },
                expected: hAns,
                hint: { bm: `h = ${hAns}.`, en: `h = ${hAns}.` }
              },
              {
                prompt: {
                  bm: `Pekali bagi $\\mathbf{b}$ juga mesti sifar: gantikan $h = ${hAns}$ ke dalam $2(${hAns}) + k ${U.signedNum(-target)} = 0$. Apakah nilai $k$?`,
                  en: `Now set the $\\mathbf{b}$-coefficient to zero with $h = ${hAns}$: solve $2(${hAns}) + k ${U.signedNum(-target)} = 0$ for $k$:`
                },
                expected: kAns,
                hint: { bm: `k = ${target} − ${2 * hAns} = ${kAns}.`, en: `k = ${target} − ${2 * hAns} = ${kAns}.` }
              }
            ],
            traps: [
              {
                value: hAns,
                message: {
                  bm: `Diagnostik Sasaran [J]: ${hAns} ialah nilai h! Gantikan h = ${hAns} ke dalam kurungan kedua untuk mencari k.`,
                  en: `Target Diagnosis [J]: ${hAns} is h! Substitute it into the second bracket to find k.`
                }
              },
              {
                value: target,
                message: {
                  bm: `Terlupa Ganti 2h [K]: Anda terlupa memasukkan 2(${hAns}) = ${2 * hAns} semasa menyelesaikan k!`,
                  en: `Forgot 2h [K]: You forgot to substitute 2(${hAns}) = ${2 * hAns} when solving for k!`
                }
              }
            ],
            hints: [
              lang === 'bm' ? `Samakan kedua-dua kurungan skalar dengan $0$: $h - ${hAns} = 0$ dan $2h + k ${U.signedNum(-target)} = 0$.` : `Equate both scalar brackets to $0$: $h - ${hAns} = 0$ and $2h + k ${U.signedNum(-target)} = 0$.`,
              lang === 'bm' ? `Cari $h = ${hAns}$ dahulu, kemudian masukkan $2(${hAns}) = ${2 * hAns}$ untuk menyelesaikan $k$.` : `Find $h = ${hAns}$ first, then substitute $2(${hAns}) = ${2 * hAns}$ to solve for $k$.`
            ],
            steps: [
              {
                badge: 'P1',
                title: lang === 'bm' ? 'Prinsip vektor tak selari' : 'Non-parallel zero-vector rule',
                tex: `h - ${hAns} = 0 \\quad ${andWord} \\quad 2h + k ${U.signedNum(-target)} = 0`,
                why: lang === 'bm' ? 'Oleh sebab a dan b bukan sifar dan tidak selari, kedua-dua pekali skalar wajib sifar.' : 'Since a and b are non-zero and non-parallel, both scalar coefficients must vanish.'
              },
              {
                badge: 'K1',
                title: lang === 'bm' ? 'Cari h dan gantikan ke persamaan kedua' : 'Solve h and substitute',
                tex: `h = ${hAns} \\implies 2(${hAns}) + k ${U.signedNum(-target)} = 0 \\implies ${2 * hAns} + k ${U.signedNum(-target)} = 0`,
                why: lang === 'bm' ? 'Gantikan h untuk mendapatkan persamaan linear tunggal bagi k.' : 'Substitute h to reduce the second equation to k alone.'
              },
              {
                badge: 'J1',
                title: lang === 'bm' ? 'Selesaikan k' : 'Solve k',
                tex: `k = ${target} - ${2 * hAns} = ${kAns}`,
                why: lang === 'bm' ? 'Asingkan k di sebelah kiri.' : 'Isolate k on the left-hand side.'
              }
            ]
          };
        }
      }
    },

    // =========================================================================
    // FORM 4 CHAPTER 9: SOLUTION OF TRIANGLES / PENYELESAIAN SEGI TIGA
    // =========================================================================
    {
      id: 'f4-c9',
      stage: 2,
      unlocked: true,
      form: 4,
      num: 9,
      code: { bm: 'T4 • Bab 9', en: 'F4 • Ch 9' },
      icon: '△',
      color: '#14b8a6',
      category: 'trigonometry',
      title: { bm: 'Penyelesaian Segi Tiga', en: 'Solution of Triangles' },
      subtitle: {
        bm: 'Jambatan SOHCAHTOA, pokok keputusan Petua Sinus/Kosinus, Kes Berambiguiti SSA, 3D & Rumus Luas',
        en: 'SOHCAHTOA bridge, Sine/Cosine decision tree, Ambiguous Case SSA, 3D projection & Area'
      },
      spmWeight: { bm: 'Kertas 2 Bahagian C (10 markah pilihan popular!)', en: 'Paper 2 Section C (10-mark favorite!)' },
      concepts: [
        {
          title: { bm: '1. Jambatan T3 (SOHCAHTOA), Penamaan & Pokok Keputusan Rumus', en: '1. Form 3 Bridge (SOHCAHTOA), Naming & Formula Decision Tree' },
          prereq: {
            bm: 'Di Tingkatan 3, **SOHCAHTOA** ($\\sin\\theta=\\frac{O}{H}, \\cos\\theta=\\frac{A}{H}, \\tan\\theta=\\frac{O}{A}$) dan Pythagoras hanya sah untuk segi tiga bersudut **$90^\\circ$**. Di Tingkatan 4, segi tiga tidak lagi perlu ada sudut $90^\\circ$!\nSentiasa guna peraturan nama: huruf kecil **$a$** duduk tepat **di hadapan (bertentangan)** sudut **$A$**; $b$ bertentangan $B$; $c$ bertentangan $C$.',
            en: 'In Form 3, **SOHCAHTOA** and Pythagoras only work for **$90^\\circ$ right-angled** triangles. In Form 4, triangles can have ANY angles!\nUse the standard naming rule: lowercase side **$a$** sits directly **opposite** angle **$A$**; $b$ opposite $B$; $c$ opposite $C$.'
          },
          body: {
            bm: '**Pokok Keputusan 3 Saat — Pilih Rumus Yang Betul:**\n- Lukis anak panah dari setiap sudut yang diketahui ke sisi bertentangannya.\n- **Ada sekurang-kurangnya 1 pasangan lengkap $(a, \\angle A)$?** $\\implies$ Guna **Petua Sinus**!\n- **Tiada pasangan bertentangan lengkap** (diberi 2 sisi mengepit 1 sudut **SAS**, atau diberi ketiga-tiga sisi **SSS**)? $\\implies$ Wajib guna **Petua Kosinus**!',
            en: '**3-Second Formula Decision Tree:**\n- Draw an arrow from every known angle to its opposite side.\n- **Got at least 1 complete opposite pair $(a, \\angle A)$?** $\\implies$ Use the **Sine Rule**!\n- **No complete opposite pair** (given 2 sides sandwiching an angle **SAS**, or all 3 sides **SSS**)? $\\implies$ Use the **Cosine Rule**!'
          },
          firstStep: {
            bm: '1. Pastikan paparan kalkulator dalam mod **`[D]` (Degrees)**, bukan `[R]`.\n2. Labelkan sisi $a, b, c$ di hadapan sudut $A, B, C$.\n3. Semak anak panah pasangan bertentangan: ada pasangan $\\to$ Petua Sinus; SAS/SSS $\\to$ Petua Kosinus.',
            en: '1. Check calculator screen shows **`[D]` (Degrees)**, NOT `[R]`.\n2. Label sides $a, b, c$ opposite angles $A, B, C$.\n3. Check opposite arrows: complete pair $\\to$ Sine Rule; SAS/SSS $\\to$ Cosine Rule.'
          },
          formulas: [
            { label: { bm: 'Petua Sinus', en: 'Sine Rule' }, tex: '\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C}' },
            { label: { bm: 'Petua Kosinus (Sisi & Sudut)', en: 'Cosine Rule (Side & Angle)' }, tex: 'a^2 = b^2 + c^2 - 2bc\\cos A \\iff \\cos A = \\frac{b^2 + c^2 - a^2}{2bc}' }
          ],
          workedExample: {
            title: { bm: 'Contoh: Petua Kosinus pada Segi Tiga SAS', en: 'Example: Cosine Rule on an SAS Triangle' },
            problem: {
              bm: 'Dalam $\\triangle ABC$, diberi $b = 8\\text{ cm}$, $c = 5\\text{ cm}$, dan sudut kandung $A = 60^\\circ$. Cari panjang sisi $a$.',
              en: 'In $\\triangle ABC$, given $b = 8\\text{ cm}$, $c = 5\\text{ cm}$, and included angle $A = 60^\\circ$. Find the length of side $a$.'
            },
            steps: [
              {
                label: { bm: 'Semak pokok keputusan: SAS (tiada pasangan bertentangan) → Petua Kosinus', en: 'Decision tree: SAS (no opposite pair) → Cosine Rule' },
                tex: 'a^2 = 8^2 + 5^2 - 2(8)(5)\\cos 60^\\circ',
                why: {
                  bm: 'Sudut $60^\\circ$ diapit oleh sisi $8$ dan $5$, dan sisi bertentangannya $a$ tidak diketahui.',
                  en: 'Angle $60^\\circ$ is sandwiched between sides $8$ and $5$, with opposite side $a$ unknown.'
                }
              },
              {
                label: { bm: 'Kira kuasa dua dan hasil darab $2bc\\cos 60^\\circ$ dahulu', en: 'Evaluate squares and $2bc\\cos 60^\\circ$ first' },
                tex: 'a^2 = 64 + 25 - 80(0.5) = 89 - 40 = 49',
                why: {
                  bm: 'Ikut tertib operasi: darab $80 \\times 0.5 = 40$ sebelum menolak daripada $89$.',
                  en: 'Follow order of operations: multiply $80 \\times 0.5 = 40$ before subtracting from $89$.'
                }
              },
              {
                label: { bm: 'Ambil punca kuasa dua pada langkah akhir', en: 'Take the square root at the end' },
                tex: 'a = \\sqrt{49} = 7\\text{ cm}',
                why: {
                  bm: 'Hasil $49$ ialah $a^2$; panjang sisi ialah punca kuasa dua positifnya.',
                  en: '$49$ is $a^2$; side length is its positive square root.'
                }
              }
            ],
            trap: {
              bm: 'Jangan lupa punca kuasa dua di hujung, dan jangan tolak $89 - 80 = 9$ sebelum mendarab dengan $\\cos 60^\\circ$!',
              en: 'Never forget the final $\\sqrt{\\dots}$, and never subtract $89 - 80$ before multiplying by $\\cos 60^\\circ$!'
            }
          },
          tip: {
            bm: 'Sentiasa sahkan mod **`[D]` (DEG)** pada kalkulator sebelum menekan `sin`, `cos`, atau `tan`!',
            en: 'Always verify **`[D]` (DEG)** mode on your calculator before pressing `sin`, `cos`, or `tan`!'
          }
        },
        {
          title: { bm: '2. Kes Berambiguiti (SSA — 2 Segi Tiga) & Unjuran Ortogon 3D', en: '2. Ambiguous Case (SSA — 2 Triangles) & 3D Orthogonal Projection' },
          prereq: {
            bm: '- **Analogi Pintu Pagar Berayun (SSA):** Jika pintu pagar sepanjang $a$ berayun dari engsel $C$, dan panjangnya lebih panjang daripada tinggi tegak $b\\sin A$ tetapi lebih pendek daripada palang $b$, hujung pintu itu menyentuh tapak di **dua tempat**: membentuk sudut tirus $B_1$ dan sudut cakah $B_2 = 180^\\circ - B_1$!\n- **Analogi Bayang Matahari Tengah Hari (3D):** Bayangkan matahari tegak di atas piramid atau kuboid — bayang tepi condong jatuh di atas **pepenjuru tapak**, bukan sisi tepi!',
            en: '- **Swinging Gate Analogy (SSA):** If a gate of length $a$ swings from hinge $C$, and $a$ is longer than the vertical drop $b\\sin A$ but shorter than side $b$, it hits the base twice: once at acute $B_1$ and once inward at obtuse $B_2 = 180^\\circ - B_1$!\n- **Noon-Sun Shadow Analogy (3D):** Shine a torch straight down onto a pyramid or cuboid — the shadow of a slant edge falls along the **base diagonal**, NOT a side edge!'
          },
          body: {
            bm: 'Bagi kes **SSA** dengan sudut tirus $A$, jika $b\\sin A < a < b$, wujud **dua segi tiga berbeza** dengan $\\angle B_2 = 180^\\circ - B_1$ (kerana $\\sin(180^\\circ - \\theta) = \\sin\\theta$).\nDalam geometri **3D**, jatuhkan garis tegak dari bucu atas ke tapak rata untuk membentuk **segi tiga bersudut tegak 2D** dengan bayang tapak, kemudian selesai dengan Pythagoras dan SOHCAHTOA Tingkatan 3.',
            en: 'For **SSA** with acute angle $A$, if $b\\sin A < a < b$, **two distinct triangles** exist with $\\angle B_2 = 180^\\circ - B_1$ (since $\\sin(180^\\circ - \\theta) = \\sin\\theta$).\nIn **3D geometry**, drop a perpendicular from the upper vertex to the base plane to extract a flat **2D right-angled triangle** using the base shadow, then finish with Form 3 Pythagoras and SOHCAHTOA.'
          },
          firstStep: {
            bm: '1. Dalam SSA, semak syarat tinggi $b\\sin A < a < b \\to$ cari sudut tirus $B_1 \\to$ kira sudut cakah $B_2 = 180^\\circ - B_1$.\n2. Dalam soalan 3D, lukis semula **segi tiga 2D leper** secara berasingan dengan label $90^\\circ$ di tapak bayang.',
            en: '1. In SSA, verify $b\\sin A < a < b \\to$ find acute $B_1 \\to$ compute obtuse $B_2 = 180^\\circ - B_1$.\n2. In 3D questions, sketch the **flat 2D right triangle** separately with the $90^\\circ$ mark at the base shadow.'
          },
          formulas: [
            { label: { bm: 'Syarat 2 Segi Tiga (SSA)', en: 'Ambiguous Case Condition (SSA)' }, tex: 'b\\sin A < a < b \\implies B_2 = 180^\\circ - B_1' },
            { label: { bm: 'Identiti Sukuan II & Kosinus Cakah', en: 'Quadrant II Sine & Obtuse Cosine' }, tex: '\\sin(180^\\circ - \\theta) = \\sin\\theta, \\qquad \\cos(180^\\circ - \\theta) = -\\cos\\theta' }
          ],
          workedExample: {
            title: { bm: 'Contoh: Mencari Sudut Tirus & Cakah dalam Kes Berambiguiti SSA', en: 'Example: Finding Acute & Obtuse Angles in SSA Ambiguous Case' },
            problem: {
              bm: 'Dalam $\\triangle ABC$, diberi $\\angle A = 30^\\circ$, $a = 8\\text{ cm}$, dan $b = 12\\text{ cm}$. Tunjukkan kes berambiguiti wujud dan cari dua nilai $\\angle B$.',
              en: 'In $\\triangle ABC$, $\\angle A = 30^\\circ$, $a = 8\\text{ cm}$, and $b = 12\\text{ cm}$. Show that the ambiguous case exists and find both values of $\\angle B$.'
            },
            steps: [
              {
                label: { bm: 'Semak tinggi tegak $b\\sin A < a < b$', en: 'Check height condition $b\\sin A < a < b$' },
                tex: 'b\\sin A = 12\\sin 30^\\circ = 6\\text{ cm}, \\qquad 6 < 8 < 12',
                why: {
                  bm: 'Oleh sebab $a = 8$ berada di antara $6$ dan $12$, sisi $a$ boleh berayun ke dua kedudukan.',
                  en: 'Since $a = 8$ lies strictly between $6$ and $12$, side $a$ can swing into two positions.'
                }
              },
              {
                label: { bm: 'Cari sudut rujukan tirus $B_1$ menggunakan Petua Sinus', en: 'Find acute angle $B_1$ via Sine Rule' },
                tex: '\\frac{\\sin B}{12} = \\frac{\\sin 30^\\circ}{8} \\implies \\sin B = \\frac{12(0.5)}{8} = 0.75 \\implies B_1 = 48.59^\\circ',
                why: {
                  bm: 'Kalkulator sentiasa memberi jawapan sudut tirus sukuan pertama apabila menekan $\\sin^{-1}$.',
                  en: 'The calculator always returns the acute Quadrant I angle from $\\sin^{-1}$.'
                }
              },
              {
                label: { bm: 'Cari sudut cakah $B_2$ di Sukuan II', en: 'Find obtuse angle $B_2$ in Quadrant II' },
                tex: 'B_2 = 180^\\circ - 48.59^\\circ = 131.41^\\circ',
                why: {
                  bm: 'Semak jumlah sudut segi tiga: $30^\\circ + 131.41^\\circ = 161.41^\\circ < 180^\\circ$, maka sah!',
                  en: 'Check triangle angle sum: $30^\\circ + 131.41^\\circ = 161.41^\\circ < 180^\\circ$, so it is valid!'
                }
              }
            ],
            trap: {
              bm: 'Jika soalan menyatakan $\\angle B$ ialah **cakah**, jangan tulis $48.59^\\circ$ — jawapan wajib $131.41^\\circ$!',
              en: 'If the question states $\\angle B$ is **obtuse**, never stop at $48.59^\\circ$ — you must give $131.41^\\circ$!'
            }
          },
          tip: {
            bm: 'Jika soalan Kertas 2 menyebut "segi tiga berbeza $A\'BC$ dengan panjang yang sama", itu 100% petunjuk Kes Berambiguiti ($B_2 = 180^\\circ - B_1$)!',
            en: 'Whenever Paper 2 mentions "another triangle $A\'BC$ different in shape with the same lengths", that is 100% the Ambiguous Case ($B_2 = 180^\\circ - B_1$)!'
          }
        },
        {
          title: { bm: '3. Luas Segi Tiga (SAS & Rumus Heron SSS)', en: '3. Area of Triangles (SAS & Heron\'s Formula)' },
          prereq: {
            bm: 'Di sekolah rendah, $\\text{Luas} = \\frac{1}{2} \\times \\text{tapak} \\times \\text{tinggi}$. Apabila tinggi tegak tidak diberi, bayangkan tinggi itu ialah $h = b\\sin C$ daripada trigonometri T3 — menggantikannya terus melahirkan rumus **$\\frac{1}{2}ab\\sin C$**!',
            en: 'In primary school, $\\text{Area} = \\frac{1}{2} \\times \\text{base} \\times \\text{height}$. When vertical height is missing, Form 3 trigonometry gives $h = b\\sin C$, turning the formula directly into **$\\frac{1}{2}ab\\sin C$**!'
          },
          body: {
            bm: 'Guna **$\\frac{1}{2}ab\\sin C$** apabila diberi 2 sisi ($a, b$) dan sudut $C$ yang **dikepit di tengah-tengahnya (SAS)**.\nApabila hanya **3 panjang sisi (SSS)** diketahui tanpa sebarang sudut, guna **Rumus Heron** dengan semi-perimeter $s = \\frac{a + b + c}{2}$ (separuh perimeter, bukan perimeter penuh!).',
            en: 'Use **$\\frac{1}{2}ab\\sin C$** when given 2 sides ($a, b$) and the angle $C$ **sandwiched between them (SAS)**.\nWhen only **3 side lengths (SSS)** are given without any angle, use **Heron\'s Formula** with semi-perimeter $s = \\frac{a + b + c}{2}$ (half the perimeter, not the full perimeter!).'
          },
          firstStep: {
            bm: '1. Ada 2 sisi + sudut di celah-celahnya (SAS) $\\to$ guna $\\frac{1}{2}ab\\sin C$.\n2. Hanya ada 3 sisi (SSS) $\\to$ kira $s = \\frac{a+b+c}{2}$ dahulu, kemudian $\\sqrt{s(s-a)(s-b)(s-c)}$.',
            en: '1. Have 2 sides + angle sandwiched between them (SAS) $\\to$ use $\\frac{1}{2}ab\\sin C$.\n2. Have 3 sides only (SSS) $\\to$ compute $s = \\frac{a+b+c}{2}$ first, then $\\sqrt{s(s-a)(s-b)(s-c)}$.'
          },
          formulas: [
            {
              label: { bm: 'Luas SAS & Rumus Heron (SSS)', en: 'SAS Area & Heron\'s Formula (SSS)' },
              tex: {
                bm: '\\text{Luas} = \\frac{1}{2}ab\\sin C = \\sqrt{s(s-a)(s-b)(s-c)}, \\qquad s = \\frac{a+b+c}{2}',
                en: '\\text{Area} = \\frac{1}{2}ab\\sin C = \\sqrt{s(s-a)(s-b)(s-c)}, \\qquad s = \\frac{a+b+c}{2}'
              }
            }
          ],
          workedExample: {
            title: { bm: 'Contoh: Luas Segi Tiga SSS Menggunakan Rumus Heron', en: 'Example: SSS Triangle Area via Heron\'s Formula' },
            problem: {
              bm: 'Sebuah segi tiga mempunyai panjang sisi $5\\text{ cm}$, $6\\text{ cm}$, dan $7\\text{ cm}$. Hitung luasnya.',
              en: 'A triangle has side lengths $5\\text{ cm}$, $6\\text{ cm}$, and $7\\text{ cm}$. Calculate its area.'
            },
            steps: [
              {
                label: { bm: 'Kira separuh perimeter $s$', en: 'Calculate the semi-perimeter $s$' },
                tex: 's = \\frac{5 + 6 + 7}{2} = \\frac{18}{2} = 9\\text{ cm}',
                why: {
                  bm: 'Huruf $s$ dalam Rumus Heron bermaksud separuh daripada jumlah ketiga-tiga sisi.',
                  en: 'In Heron\'s formula, $s$ always means half the sum of all three sides.'
                }
              },
              {
                label: { bm: 'Gantikan $s = 9$ ke dalam Rumus Heron', en: 'Substitute $s = 9$ into Heron\'s Formula' },
                tex: '\\sqrt{9(9 - 5)(9 - 6)(9 - 7)} = \\sqrt{9 \\times 4 \\times 3 \\times 2} = \\sqrt{216} \\approx 14.70\\text{ cm}^2',
                why: {
                  bm: 'Pastikan faktor $s$ di hadapan ($9$) dan ketiga-tiga baki ($4, 3, 2$) semuanya didarab di dalam punca kuasa dua.',
                  en: 'Include the leading $s$ ($9$) and all three differences ($4, 3, 2$) multiplied inside the square root.'
                }
              }
            ],
            trap: {
              bm: 'Jangan guna perimeter penuh $18$ sebagai $s$, dan jangan lupa menekan $\\sqrt{216}$ di langkah akhir!',
              en: 'Never use full perimeter $18$ for $s$, and never forget to take $\\sqrt{216}$ at the end!'
            }
          },
          tip: {
            bm: 'Untuk jarak terpendek dari bucu $B$ ke sisi $AC$, samakan luas yang dikira dengan $\\frac{1}{2} \\times AC \\times h$!',
            en: 'For the shortest distance from vertex $B$ to side $AC$, equate your calculated Area to $\\frac{1}{2} \\times AC \\times h$!'
          }
        }
      ],
      traps: [
        {
          title: { bm: 'Terlupa Sudut Cakah B₂ = 180° − B₁ dalam Kes SSA', en: 'Missing Obtuse Angle B₂ = 180° − B₁ in SSA' },
          desc: {
            bm: 'Kalkulator hanya memaparkan sudut tirus $\\sin^{-1}$! Jika rajah atau soalan menyebut sudut cakah, wajib kira $180^\\circ - B_1$.',
            en: 'Calculators only return acute $\\sin^{-1}$! If the diagram or question specifies an obtuse angle, compute $180^\\circ - B_1$.'
          }
        },
        {
          title: { bm: 'Kalkulator dalam Mod Radian [R] Bukannya Darjah [D]', en: 'Calculator Stuck in RAD [R] Instead of DEG [D] Mode' },
          desc: {
            bm: 'Semua sudut Bab 9 diberi dalam darjah ($^\\circ$). Jika skrin kalkulator memaparkan `[R]`, jawapan $\\sin$, $\\cos$, dan $\\tan$ semuanya salah!',
            en: 'All Chapter 9 angles are in degrees ($^\\circ$). If your calculator shows `[R]`, every $\\sin$, $\\cos$, and $\\tan$ value will be wrong!'
          }
        },
        {
          title: { bm: 'Lupa Punca Kuasa Dua √ atau Guna Sudut Tak Dikepit dalam Luas', en: 'Forgetting √ in Cosine Rule or Using Non-Included Angle in Area' },
          desc: {
            bm: 'Petua Kosinus memberi $a^2$, jadi jangan lupa $\\sqrt{\\dots}$! Dalam $\\frac{1}{2}ab\\sin C$, sudut $C$ mestilah **diapit** antara sisi $a$ dan $b$.',
            en: 'Cosine Rule gives $a^2$, so always take $\\sqrt{\\dots}$! In $\\frac{1}{2}ab\\sin C$, angle $C$ MUST be **sandwiched** between sides $a$ and $b$.'
          }
        }
      ],
      solvers: [
        {
          id: 'sas-triangle-solver',
          title: { bm: 'Solver Segi Tiga SAS (Petua Kosinus & Luas)', en: 'SAS Triangle Solver (Cosine Rule & Area)' },
          desc: {
            bm: 'Masukkan sisi b, sisi c, dan sudut kandung A (°) untuk mencari sisi bertentangan a serta luas segi tiga.',
            en: 'Enter side b, side c, and included angle A (°) to compute opposite side a and triangle area.'
          },
          inputs: [
            { id: 'b', label: { bm: 'Sisi b (cm)', en: 'Side b (cm)' }, default: 8 },
            { id: 'c', label: { bm: 'Sisi c (cm)', en: 'Side c (cm)' }, default: 11 },
            { id: 'A', label: { bm: 'Sudut kandung A (°)', en: 'Included angle A (°)' }, default: 60 }
          ],
          solve: function (v, lang) {
            if (!isNumInput(v.b) || !isNumInput(v.c) || !isNumInput(v.A)) {
              const msg = lang === 'bm' ? '\\text{Masukkan nilai b, c, dan sudut A yang sah}' : '\\text{Enter valid numbers for sides b, c and angle A}';
              return {
                problemTex: msg,
                steps: [{ badge: 'P1', title: lang === 'bm' ? 'Input tidak sah' : 'Invalid input', tex: msg, why: lang === 'bm' ? 'Pastikan b, c, dan A ialah nombor nyata.' : 'Ensure b, c, and A are valid finite numbers.' }],
                finalTex: msg
              };
            }
            const b = Number(v.b);
            const c = Number(v.c);
            const Adeg = Number(v.A);
            if (b <= 0 || c <= 0 || Adeg <= 0 || Adeg >= 180) {
              const errMsg = lang === 'bm'
                ? '\\text{Syarat sah: } b > 0,\\; c > 0,\\; 0^\\circ < \\angle A < 180^\\circ'
                : '\\text{Valid domain: } b > 0,\\; c > 0,\\; 0^\\circ < \\angle A < 180^\\circ';
              return {
                problemTex: `b = ${b},\\; c = ${c},\\; \\angle A = ${Adeg}^\\circ`,
                steps: [{ badge: 'P1', title: lang === 'bm' ? 'Dimensi segi tiga tidak sah' : 'Invalid triangle dimensions', tex: errMsg, why: lang === 'bm' ? 'Panjang sisi mesti positif dan sudut kandung berada di antara 0° dan 180°.' : 'Side lengths must be positive and the included angle strictly between 0° and 180°.' }],
                finalTex: errMsg
              };
            }
            const Arad = (Adeg * Math.PI) / 180;
            const bSq = b * b;
            const cSq = c * c;
            const sumSq = bSq + cSq;
            const twoBC = 2 * b * c;
            const cosA = Math.cos(Arad);
            const prodCos = twoBC * cosA;
            const aSq = Math.max(0, sumSq - prodCos);
            const a = Math.sqrt(aSq);
            const halfBC = 0.5 * b * c;
            const sinA = Math.sin(Arad);
            const area = halfBC * sinA;
            const areaLabel = lang === 'bm' ? '\\text{Luas}' : '\\text{Area}';
            const signTerm = prodCos < 0 ? `+ ${fmtSmart(Math.abs(prodCos), 4)}` : `- ${fmtSmart(prodCos, 4)}`;

            return {
              problemTex: `b = ${b}\\text{ cm}, \\; c = ${c}\\text{ cm}, \\; \\angle A = ${Adeg}^\\circ`,
              steps: [
                {
                  badge: 'K1',
                  title: lang === 'bm' ? 'Langkah 1: Gunakan Petua Kosinus (SAS)' : 'Step 1: Apply Cosine Rule (SAS)',
                  tex: `a^2 = ${b}^2 + ${c}^2 - 2(${b})(${c})\\cos ${Adeg}^\\circ = ${fmtSmart(bSq, 4)} + ${fmtSmart(cSq, 4)} - ${fmtSmart(twoBC, 4)}(${fmtSmart(cosA, 4)}) = ${fmtSmart(sumSq, 4)} ${signTerm} = ${fmtSmart(aSq, 4)}`,
                  why: lang === 'bm' ? 'Dua sisi dan sudut kandung diberi; nilaikan b² + c² dan 2bc cos A dahulu.' : 'Two sides and included angle are known; evaluate b² + c² and 2bc cos A separately.'
                },
                {
                  badge: 'J1',
                  title: lang === 'bm' ? 'Langkah 2: Panjang sisi a' : 'Step 2: Length of side a',
                  tex: `a = \\sqrt{${fmtSmart(aSq, 4)}} = ${fmtSmart(a, 3)}\\text{ cm}`,
                  why: lang === 'bm' ? 'Ambil punca kuasa dua positif bagi a².' : 'Take the positive square root of a².'
                },
                {
                  badge: 'J1',
                  title: lang === 'bm' ? 'Langkah 3: Luas Segi Tiga ABC' : 'Step 3: Area of Triangle ABC',
                  tex: `${areaLabel} = \\frac{1}{2}(${b})(${c})\\sin ${Adeg}^\\circ = ${fmtSmart(halfBC, 4)}(${fmtSmart(sinA, 4)}) = ${fmtSmart(area, 3)}\\text{ cm}^2`,
                  why: lang === 'bm' ? 'Darab ½ × b × c dahulu, kemudian darab dengan sin A (mod DEG).' : 'Multiply ½ × b × c first, then multiply by sin A (DEG mode).'
                }
              ],
              finalTex: `a = ${fmtSmart(a, 3)}\\text{ cm}, \\quad ${areaLabel} = ${fmtSmart(area, 3)}\\text{ cm}^2`,
              trapWarning: Adeg > 90
                ? (lang === 'bm'
                  ? `Perhatikan sudut cakah $\\angle A = ${Adeg}^\\circ > 90^\\circ$ memberi $\\cos ${Adeg}^\\circ = ${U.roundStr(cosA, 4)} < 0$, jadi tanda tolak $- 2bc\\cos A$ bertukar menjadi **tambah**!`
                  : `Notice obtuse $\\angle A = ${Adeg}^\\circ > 90^\\circ$ has $\\cos ${Adeg}^\\circ = ${U.roundStr(cosA, 4)} < 0$, so subtracting $- 2bc\\cos A$ flips to **addition**!`)
                : undefined
            };
          }
        }
      ],
      generateQuestion: function (tier, lang) {
        if (tier === 1) {
          const a = U.pick([8, 10, 12, 14]);
          const b = U.pick([6, 8, 10, 12]);
          const halfAB = 0.5 * a * b;
          const area = 0.25 * a * b;
          const areaLabel = lang === 'bm' ? '\\text{Luas}' : '\\text{Area}';
          return {
            tier: 1, tpLabel: 'TP1–TP2', subtopic: { bm: '9.4 Luas Segi Tiga', en: '9.4 Area of a Triangle' }, marks: 2,
            prompt: lang === 'bm'
              ? `Dalam $\\triangle ABC$, diberi $a = ${a}\\text{ cm}$, $b = ${b}\\text{ cm}$, dan sudut kandung $C = 30^\\circ$. Cari luas $\\triangle ABC$ dalam $\\text{cm}^2$.`
              : `In $\\triangle ABC$, given $a = ${a}\\text{ cm}$, $b = ${b}\\text{ cm}$, and included angle $C = 30^\\circ$, find the area of $\\triangle ABC$ in $\\text{cm}^2$.`,
            answerType: 'number', correctValue: area, displayAnswerTex: `${areaLabel} = ${area}\\text{ cm}^2`,
            intentMeta: {
              given: { bm: `$a = ${a},\\; b = ${b},\\; C = 30^\\circ$`, en: `$a = ${a},\\; b = ${b},\\; C = 30^\\circ$` },
              goal: { bm: 'Cari $\\text{Luas} = \\frac{1}{2}ab\\sin C$', en: 'Find $\\text{Area} = \\frac{1}{2}ab\\sin C$' },
              conceptRule: { bm: '$\\text{Luas} = \\frac{1}{2}ab\\sin C$ (sudut kandung)', en: '$\\text{Area} = \\frac{1}{2}ab\\sin C$ (included angle)' }
            },
            guidedSteps: [
              {
                prompt: { bm: `Apakah nilai $\\sin 30^\\circ$?`, en: `What is the value of $\\sin 30^\\circ$?` },
                expected: 0.5,
                hint: { bm: `sin 30° = 0.5 (atau 1/2).`, en: `sin 30° = 0.5.` }
              },
              {
                prompt: { bm: `Kira $\\frac{1}{2} \\times ${a} \\times ${b} \\times 0.5$:`, en: `Calculate $\\frac{1}{2} \\times ${a} \\times ${b} \\times 0.5$:` },
                expected: area,
                hint: { bm: `${halfAB} × 0.5 = ${area}.`, en: `${halfAB} × 0.5 = ${area}.` }
              }
            ],
            traps: [
              {
                value: area * 2,
                message: {
                  bm: `Diagnostik Rumus [K]: ${area * 2} ialah ½ × ${a} × ${b} tanpa mendarab sin 30° = 0.5!`,
                  en: `Formula Diagnosis [K]: ${area * 2} is ½ × ${a} × ${b} without multiplying by sin 30° = 0.5!`
                }
              },
              {
                value: area * 4,
                message: {
                  bm: `Cuai Faktor ½ [K]: Anda terlupa faktor ½ dan sin 30° = 0.5! Luas = ½(${a})(${b})(0.5) = ${area}.`,
                  en: `Missing ½ Factor [K]: You dropped both ½ and sin 30° = 0.5! Area = ½(${a})(${b})(0.5) = ${area}.`
                }
              }
            ],
            hints: [
              lang === 'bm' ? `Gunakan rumus luas SAS: $\\text{Luas} = \\frac{1}{2}ab\\sin C = \\frac{1}{2}(${a})(${b})\\sin 30^\\circ$.` : `Apply the SAS area formula: $\\text{Area} = \\frac{1}{2}ab\\sin C = \\frac{1}{2}(${a})(${b})\\sin 30^\\circ$.`,
              lang === 'bm' ? `Ingat nilai tepat $\\sin 30^\\circ = 0.5$, maka $\\text{Luas} = ${halfAB} \\times 0.5$.` : `Remember $\\sin 30^\\circ = 0.5$, so $\\text{Area} = ${halfAB} \\times 0.5$.`
            ],
            steps: [
              {
                badge: 'K1',
                title: lang === 'bm' ? 'Gantikan ke dalam rumus luas SAS' : 'Substitute into SAS area formula',
                tex: `${areaLabel} = \\frac{1}{2}(${a})(${b})\\sin 30^\\circ = ${halfAB} \\times 0.5`,
                why: lang === 'bm' ? 'Sudut C = 30° diapit antara sisi a dan b, dan sin 30° = 0.5.' : 'Angle C = 30° is sandwiched between sides a and b, and sin 30° = 0.5.'
              },
              {
                badge: 'J1',
                title: lang === 'bm' ? 'Jawapan tepat luas' : 'Exact area',
                tex: `${areaLabel} = ${area}\\text{ cm}^2`,
                why: lang === 'bm' ? 'Selesaikan pendaraban dengan unit cm².' : 'Evaluate the product with cm² units.'
              }
            ]
          };
        } else if (tier === 2) {
          const combos = [[8, 5, 7], [8, 3, 7], [15, 8, 13], [16, 10, 14]];
          const [b, c, aAns] = U.pick(combos);
          const sumSq = b * b + c * c;
          const bcProd = b * c;
          const aSq = aAns * aAns;
          return {
            tier: 2, tpLabel: 'TP3–TP4', subtopic: { bm: '9.3 Petua Kosinus (SAS)', en: '9.3 The Cosine Rule (SAS)' }, marks: 3,
            prompt: lang === 'bm'
              ? `Dalam $\\triangle ABC$, diberi $b = ${b}\\text{ cm}$, $c = ${c}\\text{ cm}$, dan $\\angle A = 60^\\circ$. Cari panjang tepat sisi **$a$** dalam $\\text{cm}$.`
              : `In $\\triangle ABC$, given $b = ${b}\\text{ cm}$, $c = ${c}\\text{ cm}$, and $\\angle A = 60^\\circ$, find the exact length of side **$a$** in $\\text{cm}$.`,
            answerType: 'number', correctValue: aAns, displayAnswerTex: `a = ${aAns}\\text{ cm}`,
            intentMeta: {
              given: { bm: `$b = ${b},\\; c = ${c},\\; A = 60^\\circ$`, en: `$b = ${b},\\; c = ${c},\\; A = 60^\\circ$` },
              goal: { bm: 'Cari $a$ daripada $a^2 = b^2 + c^2 - 2bc\\cos 60^\\circ$', en: 'Find $a$ from $a^2 = b^2 + c^2 - 2bc\\cos 60^\\circ$' },
              conceptRule: { bm: 'Petua Kosinus (SAS) dengan $\\cos 60^\\circ = 0.5$', en: 'Cosine Rule (SAS) with $\\cos 60^\\circ = 0.5$' }
            },
            guidedSteps: [
              {
                prompt: {
                  bm: `Oleh sebab $\\cos 60^\\circ = 0.5$, kira nilai $a^2 = ${b}^2 + ${c}^2 - 2(${b})(${c})(0.5)$:`,
                  en: `Since $\\cos 60^\\circ = 0.5$, compute $a^2 = ${b}^2 + ${c}^2 - 2(${b})(${c})(0.5)$:`
                },
                expected: aSq,
                hint: { bm: `${b * b} + ${c * c} − ${bcProd} = ${aSq}.`, en: `${b * b} + ${c * c} − ${bcProd} = ${aSq}.` }
              },
              {
                prompt: {
                  bm: `Ambil punca kuasa dua $\\sqrt{${aSq}}$ untuk mendapat $a$:`,
                  en: `Take $\\sqrt{${aSq}}$ to get $a$:`
                },
                expected: aAns,
                hint: { bm: `a = ${aAns}.`, en: `a = ${aAns}.` }
              }
            ],
            traps: [
              {
                value: aSq,
                message: {
                  bm: `Diagnostik Langkah Akhir [J]: ${aSq} ialah a²! Ambil punca kuasa dua untuk dapat a = ${aAns}.`,
                  en: `Final Step Diagnosis [J]: ${aSq} is a²! Square root it to get a = ${aAns}.`
                }
              },
              {
                value: sumSq,
                message: {
                  bm: `Terlupa −2bc cos A [K]: ${sumSq} ialah b² + c² sahaja (Pythagoras 90°). Tolakkan 2bc cos 60° = ${bcProd} dahulu!`,
                  en: `Forgot −2bc cos A [K]: ${sumSq} is only b² + c² (90° Pythagoras). Subtract 2bc cos 60° = ${bcProd} first!`
                }
              }
            ],
            hints: [
              lang === 'bm' ? `Tiada pasangan sisi-sudut bertentangan lengkap, jadi guna Petua Kosinus $a^2 = b^2 + c^2 - 2bc\\cos 60^\\circ$.` : `No complete opposite pair exists, so apply the Cosine Rule $a^2 = b^2 + c^2 - 2bc\\cos 60^\\circ$.`,
              lang === 'bm' ? `Gantikan $\\cos 60^\\circ = 0.5$: $a^2 = ${b * b} + ${c * c} - ${bcProd} = ${aSq}$, lalu ambil $\\sqrt{${aSq}}$.` : `Use $\\cos 60^\\circ = 0.5$: $a^2 = ${b * b} + ${c * c} - ${bcProd} = ${aSq}$, then take $\\sqrt{${aSq}}$.`
            ],
            steps: [
              {
                badge: 'K1',
                title: lang === 'bm' ? 'Gunakan Petua Kosinus dan nilai cos 60° = 0.5' : 'Apply Cosine Rule with cos 60° = 0.5',
                tex: `a^2 = ${b}^2 + ${c}^2 - 2(${b})(${c})\\cos 60^\\circ = ${b * b} + ${c * c} - ${bcProd} = ${aSq}`,
                why: lang === 'bm' ? 'Dua sisi dan sudut kandung (SAS) diselesaikan dengan Petua Kosinus.' : 'Two sides and an included angle (SAS) require the Cosine Rule.'
              },
              {
                badge: 'J1',
                title: lang === 'bm' ? 'Ambil punca kuasa dua' : 'Take square root',
                tex: `a = \\sqrt{${aSq}} = ${aAns}\\text{ cm}`,
                why: lang === 'bm' ? 'Panjang sisi segi tiga ialah nilai positif.' : 'Side length is the positive square root.'
              }
            ]
          };
        } else {
          const b = 12;
          const a = U.pick([8, 9, 10]);
          const sinB = (b * 0.5) / a;
          const B1 = U.round((Math.asin(sinB) * 180) / Math.PI, 2);
          const B2 = U.round(180 - B1, 2);
          return {
            tier: 3, tpLabel: 'TP5–TP6 (KBAT)', subtopic: { bm: '9.2 Kes Berambiguiti Segi Tiga (SSA)', en: '9.2 Ambiguous Case of Triangles (SSA)' }, marks: 5,
            prompt: lang === 'bm'
              ? `Dalam $\\triangle ABC$, diberi $\\angle A = 30^\\circ$, $a = ${a}\\text{ cm}$, dan $b = ${b}\\text{ cm}$. Diberi bahawa $\\angle B$ ialah **sudut cakah**, cari nilai $\\angle B$ dalam darjah (bundarkan kepada 2 tempat perpuluhan).`
              : `In $\\triangle ABC$, $\\angle A = 30^\\circ$, $a = ${a}\\text{ cm}$, and $b = ${b}\\text{ cm}$. Given that $\\angle B$ is **obtuse**, find $\\angle B$ in degrees (to 2 decimal places).`,
            answerType: 'number', tolerance: 0.15, correctValue: B2, displayAnswerTex: `\\angle B = 180^\\circ - ${B1}^\\circ = ${B2}^\\circ`,
            intentMeta: {
              given: {
                bm: `$A = 30^\\circ,\\; a = ${a},\\; b = ${b}$ ($\\angle B$ cakah)`,
                en: `$A = 30^\\circ,\\; a = ${a},\\; b = ${b}$ ($\\angle B$ obtuse)`
              },
              goal: { bm: 'Cari $B_1$ tirus, kemudian $B_2 = 180^\\circ - B_1$', en: 'Find acute $B_1$, then obtuse $B_2 = 180^\\circ - B_1$' },
              conceptRule: { bm: 'Kes Berambiguiti SSA: $B_{\\text{cakah}} = 180^\\circ - B_{\\text{tirus}}$', en: 'Ambiguous Case SSA: $B_{\\text{obtuse}} = 180^\\circ - B_{\\text{acute}}$' }
            },
            guidedSteps: [
              {
                prompt: {
                  bm: `Gunakan Petua Sinus $\\frac{\\sin B}{${b}} = \\frac{\\sin 30^\\circ}{${a}}$. Cari sudut tirus rujukan $B_1 = \\sin^{-1}\\left(\\frac{6}{${a}}\\right)$ (2 t.p.):`,
                  en: `Using $\\frac{\\sin B}{${b}} = \\frac{\\sin 30^\\circ}{${a}}$, find acute reference angle $B_1 = \\sin^{-1}\\left(\\frac{6}{${a}}\\right)$ (2 d.p.):`
                },
                expected: B1,
                hint: { bm: `sin⁻¹(${U.roundStr(6 / a, 4)}) = ${B1}°.`, en: `sin⁻¹(${U.roundStr(6 / a, 4)}) = ${B1}°.` }
              },
              {
                prompt: {
                  bm: `Oleh sebab $\\angle B$ ialah sudut **cakah**, tolakkan daripada $180^\\circ$: $180^\\circ - ${B1}^\\circ = \\;?$`,
                  en: `Since $\\angle B$ is **obtuse**, compute $180^\\circ - ${B1}^\\circ$:`
                },
                expected: B2,
                hint: { bm: `180 − ${B1} = ${B2}°.`, en: `180 − ${B1} = ${B2}°.` }
              }
            ],
            traps: [
              {
                value: B1,
                message: {
                  bm: `Perangkap Kes Berambiguiti SPM [P]! ${B1}° ialah sudut TIRUS daripada kalkulator. Soalan menyatakan ∠B ialah SUDUT CAKAH, jadi kira 180° − ${B1}° = ${B2}°!`,
                  en: `SPM Ambiguous Case Trap [P]! ${B1}° is the ACUTE angle. For OBTUSE ∠B, compute 180° − ${B1}° = ${B2}°!`
                }
              }
            ],
            hints: [
              lang === 'bm' ? `Guna Petua Sinus $\\frac{\\sin B}{${b}} = \\frac{\\sin 30^\\circ}{${a}}$ dengan $12 \\sin 30^\\circ = 6$ untuk cari sudut tirus $B_1$.` : `Use Sine Rule $\\frac{\\sin B}{${b}} = \\frac{\\sin 30^\\circ}{${a}}$ with $12 \\sin 30^\\circ = 6$ to find acute $B_1$.`,
              lang === 'bm' ? `Kerana $\\angle B$ adalah **cakah**, tolak sudut tirus daripada $180^\\circ$: $B_2 = 180^\\circ - ${B1}^\\circ$.` : `Since $\\angle B$ is **obtuse**, subtract the acute angle from $180^\\circ$: $B_2 = 180^\\circ - ${B1}^\\circ$.`
            ],
            steps: [
              {
                badge: 'K1',
                title: lang === 'bm' ? 'Gunakan Petua Sinus' : 'Apply Sine Rule',
                tex: `\\frac{\\sin B}{${b}} = \\frac{\\sin 30^\\circ}{${a}} \\implies \\sin B = \\frac{12(0.5)}{${a}} = \\frac{6}{${a}} = ${U.roundStr(sinB, 4)}`,
                why: lang === 'bm' ? 'Pasangan sisi a bertentangan ∠A = 30° lengkap, maka Petua Sinus digunakan.' : 'Opposite pair a and ∠A = 30° is complete, so Sine Rule applies.'
              },
              {
                badge: 'K1',
                title: lang === 'bm' ? 'Sudut rujukan tirus B₁' : 'Acute reference angle B₁',
                tex: `B_1 = \\sin^{-1}(${U.roundStr(sinB, 4)}) = ${B1}^\\circ`,
                why: lang === 'bm' ? 'Nilai sukuan pertama daripada kalkulator (mod DEG).' : 'First quadrant calculator value (DEG mode).'
              },
              {
                badge: 'J1',
                title: lang === 'bm' ? 'Sudut cakah Sukuan II' : 'Obtuse Quadrant II angle',
                tex: `\\angle B = 180^\\circ - ${B1}^\\circ = ${B2}^\\circ`,
                why: lang === 'bm' ? 'sin(180° − θ) = sin θ, dan 30° + B₂ < 180° adalah sah.' : 'sin(180° − θ) = sin θ, and 30° + B₂ < 180° is valid.'
              }
            ]
          };
        }
      }
    },

    // =========================================================================
    // FORM 4 CHAPTER 10: INDEX NUMBERS / NOMBOR INDEKS
    // =========================================================================
    {
      id: 'f4-c10',
      stage: 2,
      unlocked: true,
      form: 4,
      num: 10,
      code: { bm: 'T4 • Bab 10', en: 'F4 • Ch 10' },
      icon: 'Ī',
      color: '#84cc16',
      category: 'statistics',
      title: { bm: 'Nombor Indeks', en: 'Index Numbers' },
      subtitle: {
        bm: 'Penanda aras 100, harga tahun asas & untung, indeks gubahan berpemberat & indeks berantai',
        en: 'Benchmark 100, base price & profit margin, weighted composite index & chained indices'
      },
      spmWeight: { bm: 'Kertas 2 Bahagian C (10 markah skor mudah!)', en: 'Paper 2 Section C (10-mark high scorer!)' },
      concepts: [
        {
          title: { bm: '1. Asas Peratus = 100, Glosari Simbol, Harga Asal & Margin Untung', en: '1. Percentage = 100 Bridge, Symbol Glossary, Base Price & Profit Margin' },
          prereq: {
            bm: 'Nombor indeks sebenarnya hanyalah **peratus Tingkatan 1 dengan tahun asas = $100$**:\n- Jika harga naik $15\\%$: $I = 100 + 15 = 115$. Jika turun $8\\%$: $I = 100 - 8 = 92$.\n**Glosari Simbol:**\n- **$Q_0$**: harga/kuantiti **tahun asas** (sentiasa tahun selepas perkataan *"berasaskan..."*)\n- **$Q_1$**: harga/kuantiti **tahun semasa**\n- **$I$**: indeks harga (**tiada simbol `%`**!)\n- **$w$**: pemberat kepentingan.',
            en: 'Index numbers are simply **Form 1 percentages with base year = $100$**:\n- Up $15\\% \\implies I = 100 + 15 = 115$. Down $8\\% \\implies I = 100 - 8 = 92$.\n**Symbol Glossary:**\n- **$Q_0$**: **base year** price/quantity (always the year after *"based on..."*)\n- **$Q_1$**: **current year** price/quantity\n- **$I$**: price index (**NO `%` sign**!)\n- **$w$**: weightage.'
          },
          body: {
            bm: 'Guna hubungan $I = \\frac{Q_1}{Q_0} \\times 100$ untuk kedua-dua arah:\n- **Ke hadapan** (cari $Q_1$): $Q_1 = Q_0 \\times \\frac{I}{100}$\n- **Patah balik ke tahun asas** (cari $Q_0$): $Q_0 = \\frac{Q_1 \\times 100}{I}$ (JANGAN tolak peratus secara terus!)\n- **Harga jualan dengan margin untung $p\\%$:** Kira kos tahun semasa $Q_1$ dahulu, kemudian darab dengan $\\left(1 + \\frac{p}{100}\\right)$ (jangan tambah $p$ terus ke indeks!).',
            en: 'Use $I = \\frac{Q_1}{Q_0} \\times 100$ in both directions:\n- **Forward** (find $Q_1$): $Q_1 = Q_0 \\times \\frac{I}{100}$\n- **Reverse base-year price** (find $Q_0$): $Q_0 = \\frac{Q_1 \\times 100}{I}$ (NEVER subtract the percentage directly!)\n- **Selling price with $p\\%$ profit margin:** Scale cost to current year $Q_1$ first, then multiply by $\\left(1 + \\frac{p}{100}\\right)$ (never add $p$ to the index!).'
          },
          firstStep: {
            bm: '1. Bulatkan ayat *"berasaskan tahun..."* dan tanda tahun itu sebagai **$Q_0$ (bawah)**.\n2. Tulis $\\frac{Q_1}{Q_0} \\times 100 = I$ dan masukkan nilai diketahui.\n3. Darab silang untuk mencari yang tidak diketahui; untuk untung, kira kos semasa dahulu baru darab $1.\\text{untung}$.',
            en: '1. Circle *"based on year..."* and mark that year as **$Q_0$ (denominator)**.\n2. Write $\\frac{Q_1}{Q_0} \\times 100 = I$ and substitute known values.\n3. Cross-multiply to solve; for profit, find current cost first, then multiply by $(1 + \\text{profit rate})$.'
          },
          formulas: [
            { label: { bm: 'Indeks Harga (Ke Hadapan)', en: 'Price Index (Forward)' }, tex: 'I = \\frac{Q_1}{Q_0}\\times 100' },
            { label: { bm: 'Harga Tahun Asas (Songsang)', en: 'Base-Year Price (Reverse)' }, tex: 'Q_0 = \\frac{Q_1 \\times 100}{I}' }
          ],
          workedExample: {
            title: { bm: 'Contoh: Mencari Harga Asal & Harga Jualan Beruntung 20%', en: 'Example: Finding Base Price & Selling Price with 20% Profit' },
            problem: {
              bm: 'Kos pengeluaran pada tahun $2025$ ialah $\\text{RM }60$ dengan indeks $I_{2025/2022} = 125$. Cari kos pada tahun $2022$ dan harga jualan pada tahun $2025$ untuk memperoleh keuntungan $20\\%$.',
              en: 'Production cost in $2025$ is $\\text{RM }60$ with index $I_{2025/2022} = 125$. Find the $2022$ base cost and the $2025$ selling price for a $20\\%$ profit.'
            },
            steps: [
              {
                label: { bm: 'Masukkan $Q_1 = 60$, $I = 125$ ke dalam rumus indeks untuk cari $Q_0$', en: 'Substitute $Q_1 = 60$, $I = 125$ into index formula to find $Q_0$' },
                tex: '\\frac{60}{Q_0} \\times 100 = 125 \\implies Q_0 = \\frac{60 \\times 100}{125} = \\text{RM }48.00',
                why: {
                  bm: 'Tahun $2022$ ialah tahun asas, jadi $Q_0$ duduk di penyebut; bahagi dengan $1.25$, bukan tolak $25\\%$.',
                  en: '$2022$ is the base year so $Q_0$ sits in the denominator; divide by $1.25$, never subtract $25\\%$ of $60$.'
                }
              },
              {
                label: { bm: 'Kira harga jualan $2025$ dengan margin untung $20\\%$', en: 'Calculate $2025$ selling price with $20\\%$ profit margin' },
                tex: '60 \\times \\frac{120}{100} = 60 \\times 1.20 = \\text{RM }72.00',
                why: {
                  bm: 'Keuntungan $20\\%$ dikira atas kos tahun $2025$ ($\\text{RM }60$), bukan kos tahun $2022$.',
                  en: 'The $20\\%$ profit markup applies on the $2025$ cost ($\\text{RM }60$), not the $2022$ cost.'
                }
              }
            ],
            trap: {
              bm: 'Jangan kira $60 \\times 0.75 = \\text{RM }45$ untuk mencari kos $2022$! Peningkatan $25\\%$ pada $48$ menghasilkan $60$, tetapi pengurangan $25\\%$ daripada $60$ memberi $45$.',
              en: 'Never calculate $60 \\times 0.75 = \\text{RM }45$ for the $2022$ cost! Always divide by $\\frac{I}{100} = 1.25$.'
            }
          },
          tip: {
            bm: 'Nombor indeks TIDAK PERNAH memakai simbol `%` — tulis $125$, bukan $125\\%$!',
            en: 'Index numbers NEVER carry a `%` sign — write $125$, not $125\\%$!'
          }
        },
        {
          title: { bm: '2. Indeks Gubahan Berpemberat', en: '2. Weighted Composite Index' },
          prereq: {
            bm: 'Bayangkan bakul barang dapur: jika harga **beras** (pemberat $70\\%$) naik, kesannya jauh lebih besar daripada kenaikan harga **garam** (pemberat $2\\%$). Jadi kita tidak boleh ambil purata biasa — setiap indeks mesti didarab dengan pemberatnya ($w_i$)!',
            en: 'Think of a grocery basket: if **rice** ($70\\%$ of spending) rises, it affects your bill far more than **salt** ($2\\%$). So we cannot take a plain average — every index must be multiplied by its weight ($w_i$)!'
          },
          body: {
            bm: '**Indeks gubahan** $\\bar{I} = \\frac{\\sum I_i w_i}{\\sum w_i}$ menggabungkan semua komponen dengan pemberat $w_i$ yang boleh diberi sebagai:\n- Peratus ($\\sum w_i = 100$)\n- Sudut carta pai ($\\sum w_i = 360^\\circ$)\n- Nisbah (cth: $3:5:2 \\implies \\sum w_i = 10$)\n- Perbelanjaan/kos tahun asas (bukan tahun semasa!).',
            en: '**Composite index** $\\bar{I} = \\frac{\\sum I_i w_i}{\\sum w_i}$ combines all items using weights $w_i$ given as:\n- Percentages ($\\sum w_i = 100$)\n- Pie chart angles ($\\sum w_i = 360^\\circ$)\n- Ratios (e.g. $3:5:2 \\implies \\sum w_i = 10$)\n- Base-year expenditure/cost (never current-year cost!).'
          },
          firstStep: {
            bm: '1. Senaraikan pasangan $(I_i, w_i)$ bagi setiap bahan mengikut urutan.\n2. Darab setiap $I_i \\times w_i$ secara berasingan dan kira jumlah $\\sum w_i$.\n3. Jika mencari nilai tak diketahui $x$, darab silang $\\sum w_i$ dahulu sebelum mengasingkan $x$.',
            en: '1. List each $(I_i, w_i)$ pair in matching order.\n2. Multiply each $I_i \\times w_i$ separately and find total $\\sum w_i$.\n3. When solving for unknown $x$, cross-multiply $\\sum w_i$ first before isolating $x$.'
          },
          formulas: [
            { label: { bm: 'Rumus Indeks Gubahan', en: 'Weighted Composite Index Formula' }, tex: '\\bar{I} = \\frac{\\sum I_i w_i}{\\sum w_i}' }
          ],
          workedExample: {
            title: { bm: 'Contoh: Mencari Indeks x daripada Indeks Gubahan', en: 'Example: Finding Unknown Index x from Composite Index' },
            problem: {
              bm: 'Tiga bahan mempunyai indeks $120, 110, x$ dan pemberat $3, 5, 2$. Jika indeks gubahan $\\bar{I} = 119$, cari nilai $x$.',
              en: 'Three items have indices $120, 110, x$ and weights $3, 5, 2$. Given the composite index $\\bar{I} = 119$, find $x$.'
            },
            steps: [
              {
                label: { bm: 'Gantikan semua pasangan $(I_i, w_i)$ dan jumlah pemberat $10$', en: 'Substitute all $(I_i, w_i)$ pairs and total weight $10$' },
                tex: '\\frac{120(3) + 110(5) + 2x}{3 + 5 + 2} = 119 \\implies \\frac{360 + 550 + 2x}{10} = 119',
                why: {
                  bm: 'Kira hasil darab yang diketahui ($360$ dan $550$) dan jumlahkan pemberat $3 + 5 + 2 = 10$.',
                  en: 'Evaluate known products ($360$ and $550$) and sum the weights $3 + 5 + 2 = 10$.'
                }
              },
              {
                label: { bm: 'Darab silang dengan $10$ dan selesaikan $x$', en: 'Cross-multiply by $10$ and solve for $x$' },
                tex: '910 + 2x = 1190 \\implies 2x = 1190 - 910 = 280 \\implies x = 140',
                why: {
                  bm: 'Mendarab $119 \\times 10$ menghapuskan pecahan, kemudian bahagi $280$ dengan $2$.',
                  en: 'Multiplying $119 \\times 10$ clears the denominator, then divide $280$ by $2$.'
                }
              }
            ],
            trap: {
              bm: 'Jangan bahagi dengan bilangan bahan ($3$)! Sentiasa bahagi dengan **jumlah pemberat** ($3 + 5 + 2 = 10$).',
              en: 'Never divide by the number of items ($3$)! Always divide by the **sum of weights** ($3 + 5 + 2 = 10$).'
            }
          },
          tip: {
            bm: 'Pemberat $w_i$ boleh diberi dalam bentuk peratus ($\\sum w_i = 100$), sudut carta pai ($\\sum w_i = 360^\\circ$), atau nisbah!',
            en: 'Weights $w_i$ can be percentages ($\\sum w_i = 100$), pie chart angles ($\\sum w_i = 360^\\circ$), or ratios!'
          }
        },
        {
          title: { bm: '3. Indeks Berantai Tiga Tempoh (A → B → C)', en: '3. Chained Indices (A → B → C)' },
          prereq: {
            bm: 'Bayangkan harga naik $+20\\%$ pada tahun pertama ($\\text{RM }100 \\to \\text{RM }120$), kemudian naik lagi $+10\\%$ pada tahun kedua. Kenaikan $10\\%$ itu dikira ke atas $\\text{RM }120$ (bukan $\\text{RM }100$!), jadi harga akhir ialah $120 \\times 1.10 = \\text{RM }132$, bukannya $130$!',
            en: 'Imagine a price rising $+20\\%$ in year 1 ($\\text{RM }100 \\to \\text{RM }120$), then $+10\\%$ in year 2. That second $10\\%$ acts on $\\text{RM }120$ (not $\\text{RM }100$!), giving $\\text{RM }132$, NEVER $130$!'
          },
          body: {
            bm: 'Apabila tahun asas berubah merentasi tiga tempoh masa mengikut urutan $A \\to B \\to C$, gunakan petua rantai (Kaedah Bibir): **$I_{A \\to C} = \\frac{I_{A \\to B} \\times I_{B \\to C}}{100}$**. Rumus yang sama berfungsi ke belakang jika anda tahu $I_{A \\to C}$ dan $I_{A \\to B}$ dan ingin mencari $I_{B \\to C}$!',
            en: 'When the base year shifts across three chronological periods $A \\to B \\to C$, use the chain rule (Lips Method): **$I_{A \\to C} = \\frac{I_{A \\to B} \\times I_{B \\to C}}{100}$**. The exact same equation works backwards if you know $I_{A \\to C}$ and $I_{A \\to B}$ and want $I_{B \\to C}$!'
          },
          firstStep: {
            bm: '1. Susun tiga tahun mengikut garis masa $A \\to B \\to C$.\n2. Tukar sebarang kenaikan/penurunan peratus ($\\pm r\\%$) kepada indeks $100 \\pm r$.\n3. Masukkan ketiga-tiga indeks ke dalam $I_{A\\to C} = \\frac{I_{A\\to B} \\times I_{B\\to C}}{100}$.',
            en: '1. Line up the three years on a timeline $A \\to B \\to C$.\n2. Convert any percentage change ($\\pm r\\%$) into an index $100 \\pm r$.\n3. Plug all indices into $I_{A\\to C} = \\frac{I_{A\\to B} \\times I_{B\\to C}}{100}$.'
          },
          formulas: [
            { label: { bm: 'Rumus Rantai Indeks', en: 'Chained Index Formula' }, tex: 'I_{A \\to C} = \\frac{I_{A \\to B} \\times I_{B \\to C}}{100}' }
          ],
          workedExample: {
            title: { bm: 'Contoh: Petua Rantai Tiga Tahun (2022 → 2024 → 2026)', en: 'Example: Three-Year Chain Rule (2022 → 2024 → 2026)' },
            problem: {
              bm: 'Diberi $I_{2024/2022} = 125$ dan kos meningkat $20\\%$ dari tahun $2024$ ke $2026$. Cari $I_{2026/2022}$.',
              en: 'Given $I_{2024/2022} = 125$ and cost rises by $20\\%$ from $2024$ to $2026$. Find $I_{2026/2022}$.'
            },
            steps: [
              {
                label: { bm: 'Tukar kenaikan $20\\%$ kepada indeks $2026$ berasaskan $2024$', en: 'Convert $+20\\%$ rise into $2026$-on-$2024$ index' },
                tex: 'I_{2026/2024} = 100 + 20 = 120',
                why: {
                  bm: 'Tahun asas perantaraan $2024$ dianggap $100$, maka naik $20\\%$ memberi $120$.',
                  en: 'Intermediate base year $2024$ starts at $100$, so $+20\\%$ gives $120$.'
                }
              },
              {
                label: { bm: 'Guna rumus rantai dan bahagi $100$', en: 'Apply the chain rule and divide by $100$' },
                tex: 'I_{2026/2022} = \\frac{125 \\times 120}{100} = \\frac{15000}{100} = 150',
                why: {
                  bm: 'Mendarab dua indeks dan membahagi $100$ membatalkan tahun perantaraan $2024$.',
                  en: 'Multiplying both chained indices and dividing by $100$ cancels the bridge year $2024$.'
                }
              }
            ],
            trap: {
              bm: 'Jangan tambah terus $125 + 20 = 145$! Indeks $125$ diikuti $+20\\%$ sentiasa didarab: $\\frac{125 \\times 120}{100} = 150$.',
              en: 'Never add $125 + 20 = 145$! Chained indices multiply and divide by $100$: $\\frac{125 \\times 120}{100} = 150$.'
            }
          },
          tip: {
            bm: 'Jangan sesekali tambah peratus perubahan dua tahun secara terus — wajib guna $\\frac{I_{A\\to B} \\times I_{B\\to C}}{100}$!',
            en: 'Never add successive percentage changes directly — always use $\\frac{I_{A\\to B} \\times I_{B\\to C}}{100}$!'
          }
        }
      ],
      traps: [
        {
          title: { bm: 'Tertukar Q₁ dan Q₀ pada Pengangka & Penyebut', en: 'Swapping Current Q₁ and Base Q₀' },
          desc: {
            bm: 'Tahun selepas perkataan *"berasaskan tahun..."* sentiasa duduk di **BAWAH (penyebut $Q_0$)**, bukan di atas!',
            en: 'The year stated after *"based on the year..."* ALWAYS goes in the **DENOMINATOR ($Q_0$)**, never on top!'
          }
        },
        {
          title: { bm: 'Menambah Peratus Berantai Secara Terus Tanpa Bahagi 100', en: 'Adding Chained Percentages Directly Instead of Multiplying / 100' },
          desc: {
            bm: 'Kenaikan $+20\\%$ diikuti $+10\\%$ ialah $\\frac{120 \\times 110}{100} = 132$, **bukan** $100 + 20 + 10 = 130$!',
            en: 'A $+20\\%$ rise followed by $+10\\%$ gives $\\frac{120 \\times 110}{100} = 132$, **never** $100 + 20 + 10 = 130$!'
          }
        },
        {
          title: { bm: 'Menulis % Pada Indeks atau Menolak % Secara Terus untuk Q₀', en: 'Writing % on Indices or Subtracting % Directly for Base Price Q₀' },
          desc: {
            bm: 'Nombor indeks tiada tanda `%`. Jika $I = 115$ dan harga baharu ialah RM69, harga asal ialah $\\frac{69 \\times 100}{115} = \\text{RM }60$, **bukan** $69 \\times 0.85$!',
            en: 'Index numbers have no `%` sign. If $I = 115$ and new price is RM69, base price is $\\frac{69 \\times 100}{115} = \\text{RM }60$, **never** $69 \\times 0.85$!'
          }
        }
      ],
      solvers: [
        {
          id: 'comp-index-solver',
          title: { bm: 'Kalkulator Indeks Gubahan 3 Bahan & Kos Semasa', en: '3-Item Composite Index & Cost Projector' },
          desc: {
            bm: 'Kira indeks gubahan Ī bagi 3 komponen dengan pemberat w₁, w₂, w₃.',
            en: 'Compute composite index Ī across 3 weighted items.'
          },
          inputs: [
            { id: 'i1', label: 'I₁', default: 120 }, { id: 'w1', label: 'w₁', default: 3 },
            { id: 'i2', label: 'I₂', default: 110 }, { id: 'w2', label: 'w₂', default: 5 },
            { id: 'i3', label: 'I₃', default: 135 }, { id: 'w3', label: 'w₃', default: 2 }
          ],
          solve: function (v, lang) {
            if (!isNumInput(v.i1) || !isNumInput(v.w1) || !isNumInput(v.i2) || !isNumInput(v.w2) || !isNumInput(v.i3) || !isNumInput(v.w3)) {
              const msg = lang === 'bm' ? '\\text{Masukkan semua nilai indeks dan pemberat yang sah}' : '\\text{Enter valid numbers for all indices and weights}';
              return {
                problemTex: msg,
                steps: [{ badge: 'P1', title: lang === 'bm' ? 'Input tidak sah' : 'Invalid input', tex: msg, why: lang === 'bm' ? 'Pastikan kesemua 6 medan diisi nombor nyata.' : 'Ensure all 6 fields contain valid numbers.' }],
                finalTex: msg
              };
            }
            const i1 = Number(v.i1), w1 = Number(v.w1), i2 = Number(v.i2), w2 = Number(v.w2), i3 = Number(v.i3), w3 = Number(v.w3);
            if (i1 < 0 || i2 < 0 || i3 < 0) {
              const errMsg = lang === 'bm'
                ? '\\text{Indeks harga tidak sah: } I_i \\ge 0'
                : '\\text{Invalid price index: } I_i \\ge 0';
              return {
                problemTex: `I = [${i1}, ${i2}, ${i3}], \\quad w = [${w1}, ${w2}, ${w3}]`,
                steps: [{ badge: 'P1', title: lang === 'bm' ? 'Indeks harga tidak sah' : 'Invalid price index', tex: errMsg, why: lang === 'bm' ? 'Nombor indeks harga Iᵢ tidak boleh negatif (Iᵢ ≥ 0).' : 'Price index numbers Iᵢ cannot be negative (Iᵢ ≥ 0).' }],
                finalTex: errMsg
              };
            }
            const sumW = w1 + w2 + w3;
            if (w1 < 0 || w2 < 0 || w3 < 0 || sumW <= 1e-6) {
              const errMsg = lang === 'bm'
                ? '\\text{Pemberat } w_i \\ge 0 \\text{ dan jumlah pemberat } \\sum w_i > 10^{-6}'
                : '\\text{Weights } w_i \\ge 0 \\text{ and total weight } \\sum w_i > 10^{-6}';
              return {
                problemTex: `I = [${i1}, ${i2}, ${i3}], \\quad w = [${w1}, ${w2}, ${w3}]`,
                steps: [{ badge: 'P1', title: lang === 'bm' ? 'Pemberat tidak sah' : 'Invalid weightages', tex: errMsg, why: lang === 'bm' ? 'Setiap pemberat tidak boleh negatif dan jumlah pemberat mesti lebih besar daripada 10⁻⁶.' : 'Weights cannot be negative and their sum must be strictly greater than 10⁻⁶.' }],
                finalTex: errMsg
              };
            }
            const p1 = i1 * w1;
            const p2 = i2 * w2;
            const p3 = i3 * w3;
            const sumIW = p1 + p2 + p3;
            const iBar = sumIW / sumW;
            return {
              problemTex: `I = [${i1}, ${i2}, ${i3}], \\quad w = [${w1}, ${w2}, ${w3}]`,
              steps: [
                {
                  badge: 'K1',
                  title: lang === 'bm' ? 'Langkah 1: Kira setiap hasil darab Iᵢwᵢ dan jumlah ∑ Iᵢwᵢ' : 'Step 1: Compute each Iᵢwᵢ product and ∑ Iᵢwᵢ',
                  tex: `\\sum I_i w_i = (${i1})(${w1}) + (${i2})(${w2}) + (${i3})(${w3}) = ${fmtSmart(p1, 4)} + ${fmtSmart(p2, 4)} + ${fmtSmart(p3, 4)} = ${fmtSmart(sumIW, 4)}`,
                  why: lang === 'bm' ? 'Darab setiap indeks harga dengan pemberat masing-masing dahulu sebelum menjumlah.' : 'Multiply each price index by its matching weight before summing.'
                },
                {
                  badge: 'K1',
                  title: lang === 'bm' ? 'Langkah 2: Jumlahkan semua pemberat ∑ wᵢ' : 'Step 2: Sum all weights ∑ wᵢ',
                  tex: `\\sum w_i = ${w1} + ${w2} + ${w3} = ${fmtSmart(sumW, 4)}`,
                  why: lang === 'bm' ? 'Penyebut ialah jumlah pemberat, bukannya bilangan item (3).' : 'The denominator is the sum of weights, not the count of items (3).'
                },
                {
                  badge: 'J1',
                  title: lang === 'bm' ? 'Langkah 3: Bahagikan untuk Indeks Gubahan Ī' : 'Step 3: Composite Index Ī',
                  tex: `\\bar{I} = \\frac{${fmtSmart(sumIW, 4)}}{${fmtSmart(sumW, 4)}} = ${fmtSmart(iBar, 2)}`,
                  why: lang === 'bm' ? 'Purata berpemberat bagi keseluruhan komponen.' : 'Weighted average across all components.'
                }
              ],
              finalTex: `\\bar{I} = ${fmtSmart(iBar, 2)}`
            };
          }
        }
      ],
      generateQuestion: function (tier, lang) {
        if (tier === 1) {
          const q0 = U.pick([4, 5, 8, 10, 20]);
          const idx = U.pick([115, 120, 125, 130, 140]);
          const q1 = (q0 * idx) / 100;
          const ratio = q1 / q0;
          const invTrap = U.round((q0 / q1) * 100, 2);
          return {
            tier: 1, tpLabel: 'TP1–TP2', subtopic: { bm: '10.1 Indeks Harga', en: '10.1 Price Index' }, marks: 2,
            prompt: lang === 'bm'
              ? `Harga sekilogram bahan mentah pada tahun $2022$ ialah $\\text{RM}${q0}$ dan meningkat kepada $\\text{RM}${q1}$ pada tahun $2025$. Cari indeks harga bahan itu pada tahun $2025$ berasaskan tahun $2022$.`
              : `The price per kg of a raw material was $\\text{RM}${q0}$ in $2022$ and rose to $\\text{RM}${q1}$ in $2025$. Find the price index in $2025$ based on $2022$.`,
            answerType: 'number', correctValue: idx, displayAnswerTex: `I = \\frac{${q1}}{${q0}} \\times 100 = ${idx}`,
            intentMeta: {
              given: {
                bm: `$Q_0\\;(2022) = \\text{RM }${q0},\\; Q_1\\;(2025) = \\text{RM }${q1}$`,
                en: `$Q_0\\;(2022) = \\text{RM }${q0},\\; Q_1\\;(2025) = \\text{RM }${q1}$`
              },
              goal: { bm: 'Cari $I = \\frac{Q_1}{Q_0} \\times 100$', en: 'Find $I = \\frac{Q_1}{Q_0} \\times 100$' },
              conceptRule: { bm: 'Tahun selepas "berasaskan" ialah penyebut $Q_0$', en: 'Year after "based on" sits in denominator $Q_0$' }
            },
            guidedSteps: [
              {
                prompt: {
                  bm: `Langkah 1: Bahagikan harga semasa $Q_1 = ${q1}$ dengan harga tahun asas $Q_0 = ${q0}$ ($\\frac{${q1}}{${q0}}$):`,
                  en: `Step 1: Divide current price $Q_1 = ${q1}$ by base price $Q_0 = ${q0}$ ($\\frac{${q1}}{${q0}}$):`
                },
                expected: ratio,
                hint: { bm: `${q1} ÷ ${q0} = ${ratio}.`, en: `${q1} ÷ ${q0} = ${ratio}.` }
              },
              {
                prompt: {
                  bm: `Langkah 2: Darabkan nisbah ${ratio} dengan $100$ untuk mendapat nombor indeks:`,
                  en: `Step 2: Multiply the ratio ${ratio} by $100$ to get the index number:`
                },
                expected: idx,
                hint: { bm: `${ratio} × 100 = ${idx}.`, en: `${ratio} × 100 = ${idx}.` }
              }
            ],
            traps: [
              {
                value: ratio,
                message: {
                  bm: 'Diagnostik Darab 100 [J]: Jangan lupa darab dengan 100 untuk nombor indeks!',
                  en: 'Index Scale Diagnosis [J]: Multiply the ratio by 100 for an index number!'
                }
              },
              {
                value: invTrap,
                message: {
                  bm: `Terbalik Q₀ dan Q₁ [P]: Tahun 2022 ialah tahun asas (Q₀), jadi ${q0} mesti di penyebut (bawah), bukan pengangka!`,
                  en: `Swapped Q₀ and Q₁ [P]: 2022 is the base year (Q₀), so ${q0} belongs in the denominator (bottom), not on top!`
                }
              }
            ],
            hints: [
              lang === 'bm' ? `Tahun selepas "berasaskan" ialah $2022$, jadi $Q_0 = ${q0}$ duduk di penyebut: $I = \\frac{${q1}}{${q0}} \\times 100$.` : `The year after "based on" is $2022$, so $Q_0 = ${q0}$ goes in the denominator: $I = \\frac{${q1}}{${q0}} \\times 100$.`,
              lang === 'bm' ? `Bahagi ${q1} ÷ ${q0} = ${ratio}, kemudian darab dengan $100$.` : `Divide ${q1} ÷ ${q0} = ${ratio}, then multiply by $100$.`
            ],
            steps: [
              {
                badge: 'K1',
                title: lang === 'bm' ? 'Gantikan Q₁ dan Q₀ ke dalam rumus indeks' : 'Substitute Q₁ and Q₀ into index formula',
                tex: `I = \\frac{${q1}}{${q0}} \\times 100 = ${ratio} \\times 100`,
                why: lang === 'bm' ? 'Tahun asas 2022 sentiasa diletakkan di penyebut.' : 'Base year 2022 always sits in the denominator.'
              },
              {
                badge: 'J1',
                title: lang === 'bm' ? 'Indeks harga muktamad' : 'Final price index',
                tex: `I = ${idx}`,
                why: lang === 'bm' ? 'Nyatakan nombor indeks tanpa simbol %.' : 'State the index number without a % sign.'
              }
            ]
          };
        } else if (tier === 2) {
          const w1 = 3, w2 = 5, w3 = 2;
          const i1 = 120, i2 = 110;
          const xAns = U.pick([125, 130, 140, 150]);
          const prod1 = i1 * w1, prod2 = i2 * w2, knownSum = prod1 + prod2;
          const iBar = (knownSum + xAns * w3) / 10;
          const totalIW = 10 * iBar;
          const rem = totalIW - knownSum;
          return {
            tier: 2, tpLabel: 'TP3–TP4', subtopic: { bm: '10.2 Indeks Gubahan Berpemberat', en: '10.2 Weighted Composite Index' }, marks: 4,
            prompt: lang === 'bm'
              ? `Tiga bahan $A, B, C$ mempunyai indeks harga masing-masing $${i1},\\; ${i2},\\; x$ dan pemberat $${w1},\\; ${w2},\\; ${w3}$. Jika indeks gubahan ialah $${iBar}$, cari nilai **$x$**.`
              : `Three items $A, B, C$ have price indices $${i1},\\; ${i2},\\; x$ and weightages $${w1},\\; ${w2},\\; ${w3}$ respectively. Given the composite index is $${iBar}$, find **$x$**.`,
            answerType: 'number', correctValue: xAns, displayAnswerTex: `x = ${xAns}`,
            intentMeta: {
              given: {
                bm: `$I = [${i1}, ${i2}, x],\\; w = [${w1}, ${w2}, ${w3}],\\; \\bar{I} = ${iBar}$`,
                en: `$I = [${i1}, ${i2}, x],\\; w = [${w1}, ${w2}, ${w3}],\\; \\bar{I} = ${iBar}$`
              },
              goal: { bm: 'Guna $\\frac{\\sum I_i w_i}{\\sum w_i} = \\bar{I}$ untuk mencari $x$', en: 'Solve $\\frac{\\sum I_i w_i}{\\sum w_i} = \\bar{I}$ for $x$' },
              conceptRule: { bm: 'Jumlah pemberat $\\sum w_i = 3 + 5 + 2 = 10$', en: 'Sum of weights $\\sum w_i = 3 + 5 + 2 = 10$' }
            },
            guidedSteps: [
              {
                prompt: {
                  bm: `Jumlah pemberat ialah $${w1}+${w2}+${w3} = 10$. Maka $\\sum I_i w_i = 10 \\times ${iBar} = \\;?$`,
                  en: `Total weightage is $10$. So $\\sum I_i w_i = 10 \\times ${iBar} = \\;?$ `
                },
                expected: totalIW,
                hint: { bm: `10 × ${iBar} = ${totalIW}.`, en: `10 × ${iBar} = ${totalIW}.` }
              },
              {
                prompt: {
                  bm: `Sekarang selesaikan $${prod1} + ${prod2} + ${w3}x = ${totalIW}$ (iaitu $${knownSum} + ${w3}x = ${totalIW}$) untuk mencari $x$:`,
                  en: `Now solve $${prod1} + ${prod2} + ${w3}x = ${totalIW}$ (i.e. $${knownSum} + ${w3}x = ${totalIW}$) for $x$:`
                },
                expected: xAns,
                hint: { bm: `${w3}x = ${rem} ⟹ x = ${xAns}.`, en: `${w3}x = ${rem} ⟹ x = ${xAns}.` }
              }
            ],
            traps: [
              {
                value: rem,
                message: {
                  bm: `Lupa Bahagi Pemberat [K]: ${rem} ialah nilai ${w3}x! Anda masih perlu membahagi dengan pemberat w₃ = ${w3} untuk mendapat x = ${xAns}.`,
                  en: `Forgot Weight Division [K]: ${rem} is ${w3}x! You still need to divide by weight w₃ = ${w3} to get x = ${xAns}.`
                }
              },
              {
                value: iBar,
                message: {
                  bm: `Salah Konsep [P]: ${iBar} ialah indeks gubahan purata keseluruhan, bukan indeks bahan C!`,
                  en: `Concept Error [P]: ${iBar} is the overall composite index, not item C's index!`
                }
              }
            ],
            hints: [
              lang === 'bm' ? `Masukkan ke dalam rumus $\\bar{I} = \\frac{\\sum I_i w_i}{\\sum w_i}$: $\\frac{${i1}(${w1}) + ${i2}(${w2}) + ${w3}x}{${w1}+${w2}+${w3}} = ${iBar}$.` : `Substitute into $\\bar{I} = \\frac{\\sum I_i w_i}{\\sum w_i}$: $\\frac{${i1}(${w1}) + ${i2}(${w2}) + ${w3}x}{${w1}+${w2}+${w3}} = ${iBar}$.`,
              lang === 'bm' ? `Permudahkan: $\\frac{${knownSum} + ${w3}x}{10} = ${iBar} \\implies ${knownSum} + ${w3}x = ${totalIW}$, kemudian bahagi ${rem} dengan ${w3}.` : `Simplify: $\\frac{${knownSum} + ${w3}x}{10} = ${iBar} \\implies ${knownSum} + ${w3}x = ${totalIW}$, then divide ${rem} by ${w3}.`
            ],
            steps: [
              {
                badge: 'K1',
                title: lang === 'bm' ? 'Bentuk persamaan indeks gubahan' : 'Set up composite index equation',
                tex: `\\frac{${i1}(${w1}) + ${i2}(${w2}) + ${w3}x}{${w1} + ${w2} + ${w3}} = ${iBar}`,
                why: lang === 'bm' ? 'Darab setiap indeks dengan pemberatnya dan bahagi dengan jumlah pemberat.' : 'Multiply each index by its weight and divide by total weight.'
              },
              {
                badge: 'K1',
                title: lang === 'bm' ? 'Permudahkan hasil darab & darab silang 10' : 'Evaluate products & cross-multiply 10',
                tex: `\\frac{${prod1} + ${prod2} + ${w3}x}{10} = ${iBar} \\implies ${knownSum} + ${w3}x = ${totalIW}`,
                why: lang === 'bm' ? 'Jumlahkan hasil darab diketahui (360 + 550 = 910) dahulu sebelum mendarab silang 10.' : 'Sum known products (360 + 550 = 910) before cross-multiplying by 10.'
              },
              {
                badge: 'J1',
                title: lang === 'bm' ? 'Selesaikan nilai x' : 'Solve for x',
                tex: `${w3}x = ${totalIW} - ${knownSum} = ${rem} \\implies x = \\frac{${rem}}{${w3}} = ${xAns}`,
                why: lang === 'bm' ? 'Tolak 910 dan bahagikan dengan pemberat 2 untuk mengasingkan x.' : 'Subtract 910 and divide by weight 2 to isolate x.'
              }
            ]
          };
        } else {
          const iAB = U.pick([120, 125, 130]);
          const rise = U.pick([10, 20]);
          const iBC = 100 + rise;
          const prod = iAB * iBC;
          const ans = prod / 100;
          const wrongAdd = iAB + rise;
          return {
            tier: 3, tpLabel: 'TP5–TP6 (KBAT)', subtopic: { bm: '10.3 Indeks Berantai Tiga Tempoh', en: '10.3 Chained Indices Across Three Periods' }, marks: 4,
            prompt: lang === 'bm'
              ? `Indeks gubahan kos pengeluaran pada tahun $2024$ berasaskan tahun $2022$ ialah $${iAB}$. Kos itu meningkat lagi sebanyak $${rise}\\%$ dari tahun $2024$ ke tahun $2026$. Cari indeks gubahan pada tahun $2026$ berasaskan tahun $2022$.`
              : `The composite production cost index in $2024$ based on $2022$ was $${iAB}$. The cost increased by another $${rise}\\%$ from $2024$ to $2026$. Find the composite index in $2026$ based on $2022$.`,
            answerType: 'number', correctValue: ans, displayAnswerTex: `I_{2022 \\to 2026} = \\frac{${iAB} \\times ${iBC}}{100} = ${ans}`,
            intentMeta: {
              given: {
                bm: `$I_{2024/2022} = ${iAB}$, naik $${rise}\\%$ dari $2024$ ke $2026$`,
                en: `$I_{2024/2022} = ${iAB}$, rises $${rise}\\%$ from $2024$ to $2026$`
              },
              goal: { bm: `Cari $\\frac{${iAB} \\times ${iBC}}{100}$`, en: `Find $\\frac{${iAB} \\times ${iBC}}{100}$` },
              conceptRule: { bm: '$I_{A \\to C} = \\frac{I_{A \\to B} \\times I_{B \\to C}}{100}$', en: '$I_{A \\to C} = \\frac{I_{A \\to B} \\times I_{B \\to C}}{100}$' }
            },
            guidedSteps: [
              {
                prompt: {
                  bm: `Peningkatan $${rise}\\%$ dari $2024$ ke $2026$ bermakna indeks $I_{2024 \\to 2026} = 100 + ${rise} = \\;?$`,
                  en: `A $${rise}\\%$ increase from $2024$ to $2026$ means $I_{2024 \\to 2026} = 100 + ${rise} = \\;?$ `
                },
                expected: iBC,
                hint: { bm: `100 + ${rise} = ${iBC}.`, en: `100 + ${rise} = ${iBC}.` }
              },
              {
                prompt: {
                  bm: `Gunakan rumus rantai $\\frac{${iAB} \\times ${iBC}}{100}$:`,
                  en: `Apply the chain formula $\\frac{${iAB} \\times ${iBC}}{100}$:`
                },
                expected: ans,
                hint: { bm: `${prod} ÷ 100 = ${ans}.`, en: `${prod} ÷ 100 = ${ans}.` }
              }
            ],
            traps: [
              {
                value: wrongAdd,
                message: {
                  bm: `Perangkap Rantai Indeks [P]! Jangan tambah terus ${iAB} + ${rise} = ${wrongAdd}! Peningkatan ${rise}% dikira ke atas nilai 2024, jadi wajib darab (${iAB} × ${iBC}) / 100 = ${ans}.`,
                  en: `Chained Index Trap [P]! Never add ${iAB} + ${rise} = ${wrongAdd}! Multiply (${iAB} × ${iBC}) / 100 = ${ans}.`
                }
              }
            ],
            hints: [
              lang === 'bm' ? `Tukar kenaikan $${rise}\\%$ kepada indeks $I_{2024 \\to 2026} = 100 + ${rise} = ${iBC}$.` : `Convert the $${rise}\\%$ rise into $I_{2024 \\to 2026} = 100 + ${rise} = ${iBC}$.`,
              lang === 'bm' ? `Gunakan rumus rantai (Kaedah Bibir): $I_{2022 \\to 2026} = \\frac{I_{2022 \\to 2024} \\times I_{2024 \\to 2026}}{100}$.` : `Apply the chain rule (Lips Method): $I_{2022 \\to 2026} = \\frac{I_{2022 \\to 2024} \\times I_{2024 \\to 2026}}{100}$.`
            ],
            steps: [
              {
                badge: 'P1',
                title: lang === 'bm' ? 'Tentukan indeks 2026 berasaskan 2024' : 'Determine 2026 index based on 2024',
                tex: `I_{2024 \\to 2026} = 100 + ${rise} = ${iBC}`,
                why: lang === 'bm' ? 'Tahun asas perantaraan 2024 dianggap 100, jadi kenaikan r% memberi 100 + r.' : 'Intermediate base year 2024 starts at 100, so an r% rise gives 100 + r.'
              },
              {
                badge: 'K1',
                title: lang === 'bm' ? 'Gunakan pendaraban rantai' : 'Apply chain rule',
                tex: `I_{2022 \\to 2026} = \\frac{${iAB} \\times ${iBC}}{100} = \\frac{${prod}}{100}`,
                why: lang === 'bm' ? 'Mendarab dua indeks berantai dan membahagi 100 membatalkan tahun tengah 2024.' : 'Multiplying the chained indices and dividing by 100 cancels bridge year 2024.'
              },
              {
                badge: 'J1',
                title: lang === 'bm' ? 'Nilai indeks akhir' : 'Final chained index',
                tex: `I_{2022 \\to 2026} = ${ans}`,
                why: lang === 'bm' ? 'Bahagikan hasil darab dengan 100 untuk mendapat indeks 2026 berasaskan 2022.' : 'Divide the product by 100 to obtain the 2026-on-2022 index.'
              }
            ]
          };
        }
      }
    }
  ];

  f4Stage2.forEach((ch) => {
    const rawGen = ch.generateQuestion;
    ch.generateQuestion = function (tier, lang) {
      const q = rawGen.call(ch, tier, lang);
      if (q && Array.isArray(q.traps)) {
        q.traps = dedupTraps(q.traps, q.correctValue, q.tolerance);
      }
      return q;
    };
  });

  App.chapters.push(...f4Stage2);
})(window.AddMathApp);
