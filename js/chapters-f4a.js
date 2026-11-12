/**
 * AddMath Mudah — Fasa 1: Tingkatan 4 Bab 1 hingga Bab 5 (Mendalam & Lengkap)
 * Dilengkapi Micro-Checkpoints (guidedSteps), Meta Intent Diagnostik & Dwibahasa (BM / EN)
 */
window.AddMathApp = window.AddMathApp || {};
window.AddMathApp.chapters = [];

(function (App) {
  'use strict';
  const U = App.utils;

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
          title: { bm: '1. Hubungan, Domain, Kodomain & Julat', en: '1. Relations, Domain, Kodomain & Range' },
          body: {
            bm: 'Hubungan memetakan objek $x \\in X$ (domain) kepada imej $y \\in Y$ (kodomain). Suatu hubungan ialah **fungsi** hanya jika ia bersifat **satu-ke-satu** atau **banyak-ke-satu**. Gunakan **Ujian Garis Mencancang** ($x = k$ menyilang graf paling banyak 1 titik).',
            en: 'A relation maps object $x \\in X$ (domain) to image $y \\in Y$ (codomain). It is a valid **function** iff it is **one-to-one** or **many-to-one**. Use the **Vertical Line Test** ($x = k$ cuts at most once).'
          },
          formulas: [
            { label: { bm: 'Tatanda Fungsi', en: 'Function Notation' }, tex: 'f : x \\mapsto ax + b \\iff f(x) = ax + b' },
            { label: { bm: 'Julat (Range)', en: 'Range Subset' }, tex: '\\text{Julat} = \\{y \\in Y \\mid y = f(x) \\text{ bagi } x \\in X\\}' }
          ],
          tip: {
            bm: 'Ingat! Satu objek TIDAK BOLEH ada dua imej (satu-ke-banyak bukan fungsi).',
            en: 'Remember! One object can NEVER map to two images (one-to-many is NOT a function).'
          }
        },
        {
          title: { bm: '2. Fungsi Nilai Mutlak |f(x)|', en: '2. Absolute Value Functions |f(x)|' },
          body: {
            bm: 'Nilai mutlak mengukur magnitud bukan negatif. Pada graf $y = |f(x)|$, mana-mana bahagian di bawah paksi-$x$ dipantulkan ke atas paksi-$x$ membentuk bucu berbentuk **V**.',
            en: 'Absolute value measures non-negative magnitude. Graphing $y = |f(x)|$ reflects any portion below the $x$-axis upwards into a characteristic **V-shape**.'
          },
          formulas: [
            { label: { bm: 'Takrif Cebis demi Cebis', en: 'Piecewise Definition' }, tex: '|f(x)| = \\begin{cases} f(x), & f(x) \\ge 0 \\\\ -f(x), & f(x) < 0 \\end{cases}' }
          ],
          tip: {
            bm: 'Apabila menyelesaikan |ax + b| = k (dengan k > 0), wajib pecahkan kepada DUA kes: ax + b = k ATAU ax + b = −k.',
            en: 'When solving |ax + b| = k (with k > 0), ALWAYS split into TWO branches: ax + b = k OR ax + b = −k.'
          }
        },
        {
          title: { bm: '3. Fungsi Gubahan & Fungsi Songsang', en: '3. Composite & Inverse Functions' },
          body: {
            bm: 'Dalam $gf(x) = g(f(x))$, fungsi dalam $f$ bertindak dahulu diikuti $g$. Fungsi songsang $f^{-1}$ hanya wujud jika $f$ ialah **satu-ke-satu** (lulus **Ujian Garis Mengufuk**), dan grafnya terpantul pada garis $y = x$.',
            en: 'In $gf(x) = g(f(x))$, inner function $f$ acts first followed by $g$. Inverse $f^{-1}$ exists iff $f$ is **one-to-one** (passes **Horizontal Line Test**), reflecting across $y = x$.'
          },
          formulas: [
            { label: { bm: 'Kewujudan Gubahan', en: 'Composite Existence' }, tex: 'gf(x) = g(f(x)), \\quad \\text{Julat } f \\subseteq \\text{Domain } g' },
            { label: { bm: 'Sifat Songsang & Domain', en: 'Inverse & Domain Swap' }, tex: 'f(x) = y \\iff f^{-1}(y) = x, \\quad \\text{Domain } f^{-1} = \\text{Julat } f' }
          ],
          tip: {
            bm: 'Untuk mencari fungsi luar g(x) apabila diberi f(x) dan gf(x): biar u = f(x), ungkapkan x dalam sebutan u, dan gantikan ke dalam gf(x)!',
            en: 'To find outer function g(x) given f(x) and gf(x): let u = f(x), solve x in terms of u, and substitute into gf(x)!'
          }
        }
      ],
      traps: [
        {
          title: { bm: 'Tertukar Urutan gf(x) dengan fg(x)', en: 'Swapping Order of gf(x) vs fg(x)' },
          desc: {
            bm: 'Bagi gf(x), gantikan f(x) ke dalam g(x), bukan sebaliknya! Secara umum gf(x) ≠ fg(x).',
            en: 'For gf(x), substitute f(x) inside g(x), never the reverse! Generally gf(x) ≠ fg(x).'
          }
        },
        {
          title: { bm: 'Terlupa Cabang Negatif dalam |f(x)| = k', en: 'Forgetting the Negative Branch in |f(x)| = k' },
          desc: {
            bm: 'Pelajar sering menulis ax + b = k sahaja dan hilang separuh markah kerana tertinggal ax + b = −k.',
            en: 'Students often write ax + b = k only, losing half the marks by omitting ax + b = −k.'
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
            const a = Number(v.a) || 1;
            const b = Number(v.b) || 0;
            const c = Number(v.c) || 1;
            const d = Number(v.d) || 0;
            const k = Number(v.k) || 0;
            const fTex = U.polyTex([{ c: a, p: 1 }, { c: b, p: 0 }]);
            const gTex = U.polyTex([{ c: c, p: 1 }, { c: d, p: 0 }]);
            const gfA = c * a;
            const gfB = c * b + d;
            const fgA = a * c;
            const fgB = a * d + b;
            const gfTex = U.polyTex([{ c: gfA, p: 1 }, { c: gfB, p: 0 }]);
            const fgTex = U.polyTex([{ c: fgA, p: 1 }, { c: fgB, p: 0 }]);
            const gfk = gfA * k + gfB;
            const invK = (k - b) / a;
            const signB = -b >= 0 ? ' + ' + Math.abs(b) : ' - ' + Math.abs(b);
            const invTex = a === 1 ? `x${signB}` : `\\frac{x${signB}}{${a}}`;

            return {
              problemTex: `f(x) = ${fTex}, \\quad g(x) = ${gTex}`,
              steps: [
                {
                  badge: 'K1',
                  title: lang === 'bm' ? 'Langkah 1: Cari Fungsi Gubahan gf(x) & fg(x)' : 'Step 1: Find Composite gf(x) & fg(x)',
                  tex: `gf(x) = ${c}(${fTex}) ${U.signedNum(d)} = ${gfTex}, \\quad fg(x) = ${a}(${gTex}) ${U.signedNum(b)} = ${fgTex}`,
                  why: lang === 'bm' ? 'Perhatikan bagaimana urutan fungsi mengubah jawapan akhir.' : 'Notice how changing the order of composition changes the constant term.'
                },
                {
                  badge: 'J1',
                  title: lang === 'bm' ? `Langkah 2: Nilaikan gf(${k})` : `Step 2: Evaluate gf(${k})`,
                  tex: `gf(${k}) = ${gfA}(${k}) ${U.signedNum(gfB)} = ${U.roundStr(gfk)}`,
                  why: lang === 'bm' ? `Gantikan x = ${k} ke dalam ungkapan gf(x).` : `Substitute x = ${k} into gf(x).`
                },
                {
                  badge: 'K1',
                  title: lang === 'bm' ? 'Langkah 3: Terbitkan Fungsi Songsang f⁻¹(x)' : 'Step 3: Derive Inverse Function f⁻¹(x)',
                  tex: `y = ${fTex} \\implies ${a}x = y ${signB} \\implies f^{-1}(x) = ${invTex}`,
                  why: lang === 'bm' ? 'Biar y = f(x), asingkan x dalam sebutan y, kemudian tukar simbol y kepada x.' : 'Set y = f(x), isolate x in terms of y, then replace y with x.'
                },
                {
                  badge: 'J1',
                  title: lang === 'bm' ? `Langkah 4: Nilaikan f⁻¹(${k})` : `Step 4: Evaluate f⁻¹(${k})`,
                  tex: `f^{-1}(${k}) = ${U.fracTex(k - b, a)} \\approx ${U.roundStr(invK)}`,
                  why: lang === 'bm' ? `Semak: f(${U.roundStr(invK)}) memberi semula ${k}!` : `Check: f(${U.roundStr(invK)}) maps right back to ${k}!`
                }
              ],
              finalTex: `gf(x) = ${gfTex}, \\quad f^{-1}(x) = ${invTex}`,
              trapWarning: lang === 'bm'
                ? 'Ingat: f⁻¹(x) BUKAN 1/f(x)! Indeks -1 pada fungsi bermaksud pemetaan songsang.'
                : 'Remember: f⁻¹(x) is NOT 1/f(x)! The -1 superscript denotes inverse mapping.'
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
            const a = Number(v.a) || 1;
            const b = Number(v.b) || 0;
            const k = Number(v.k);
            const inner = U.polyTex([{ c: a, p: 1 }, { c: b, p: 0 }]);
            if (k < 0) {
              return {
                problemTex: `|${inner}| = ${k}`,
                steps: [
                  { badge: 'P1', title: lang === 'bm' ? 'Semak sifat nilai mutlak' : 'Check modulus non-negativity', tex: `|${inner}| \\ge 0 \\text{ sentiasa, tetapi } k = ${k} < 0`, why: lang === 'bm' ? 'Nilai mutlak tidak mungkin bernilai negatif.' : 'Absolute value can never equal a negative number.' }
                ],
                finalTex: lang === 'bm' ? '\\text{Tiada Penyelesaian Nyata}' : '\\text{No Real Solution}'
              };
            }
            const x1 = (k - b) / a;
            const x2 = (-k - b) / a;
            return {
              problemTex: `|${inner}| = ${k}`,
              steps: [
                { badge: 'P1', title: lang === 'bm' ? 'Langkah 1: Pecahkan kepada dua kes' : 'Step 1: Split into two branches', tex: `${inner} = ${k} \\quad \\text{ATAU / OR} \\quad ${inner} = ${-k}`, why: lang === 'bm' ? 'Kedua-dua +k dan −k mempunyai magnitud |k| yang sama.' : 'Both +k and −k have absolute value k.' },
                { badge: 'K1', title: lang === 'bm' ? 'Langkah 2: Selesaikan kedua-dua persamaan linear' : 'Step 2: Solve both linear equations', tex: `${a}x = ${k - b} \\implies x = ${U.fracTex(k - b, a)}; \\qquad ${a}x = ${-k - b} \\implies x = ${U.fracTex(-k - b, a)}`, why: lang === 'bm' ? 'Asingkan x bagi setiap cabang.' : 'Isolate x in each branch.' },
                { badge: 'J1', title: lang === 'bm' ? 'Langkah 3: Nyatakan kedua-dua punca' : 'Step 3: State both solutions', tex: `x = ${U.roundStr(x1)}, \\quad x = ${U.roundStr(x2)}`, why: lang === 'bm' ? 'Graf garis y = k memotong bucu V pada dua titik.' : 'Horizontal line y = k intersects the V-graph twice.' }
              ],
              finalTex: `x = ${U.roundStr(x1)} \\text{ atau } x = ${U.roundStr(x2)}`
            };
          }
        }
      ],
      generateQuestion: function (tier, lang) {
        if (tier === 1) {
          const variant = U.pick([1, 2]);
          if (variant === 1) {
            const a = U.pick([2, 3, 4, -2]);
            const b = U.randInt(-8, 8, true);
            const xAns = U.randInt(-5, 7, true);
            const y0 = a * xAns + b;
            const fTex = U.polyTex([{ c: a, p: 1 }, { c: b, p: 0 }]);
            const wrongDirect = a * y0 + b;
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
                given: `f(x) = ${fTex}, imej = ${y0}`,
                goal: lang === 'bm' ? `Mencari objek asal x supaya f(x) = ${y0}` : `Find original object x such that f(x) = ${y0}`,
                conceptRule: 'f⁻¹(y) = x ⟺ f(x) = y'
              },
              guidedSteps: [
                {
                  prompt: {
                    bm: `Jika $f^{-1}(${y0}) = x$, apakah nilai bagi $f(x)$, iaitu nilai di sebelah kanan persamaan $${fTex} = \\;?$`,
                    en: `If $f^{-1}(${y0}) = x$, what number should we equate $${fTex}$ to?`
                  },
                  expected: y0,
                  hint: { bm: `Imej ialah ${y0}, jadi samakan f(x) dengan ${y0}.`, en: `The image is ${y0}, so set f(x) = ${y0}.` }
                },
                {
                  prompt: {
                    bm: `Sekarang selesaikan $${a}x ${U.signedNum(b)} = ${y0}$. Apakah nilai bagi $${a}x$ selepas memindahkan $${U.signedNum(b)}$?`,
                    en: `Now in $${a}x ${U.signedNum(b)} = ${y0}$, what is $${a}x$ equal to?`
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
                    bm: `Diagnostik Konsep [P]: Anda mengira f(${y0}) = ${wrongDirect}! Ingat, f⁻¹(${y0}) mencari OBJEK asal x yang menghasilkan imej ${y0}, bukan menggantikan ${y0} terus ke dalam x.`,
                    en: `Concept Diagnosis [P]: You computed f(${y0}) = ${wrongDirect}! Remember, f⁻¹(${y0}) asks for the original OBJECT x whose image is ${y0}.`
                  }
                }
              ],
              hints: [
                lang === 'bm' ? `Gunakan sifat songsang: jika $f^{-1}(${y0}) = x$, maka $f(x) = ${y0}$.` : `Use inverse property: if $f^{-1}(${y0}) = x$, then $f(x) = ${y0}$.`,
                lang === 'bm' ? `Selesaikan $${a}x ${U.signedNum(b)} = ${y0}$$ untuk mencari $x$.` : `Solve $${a}x ${U.signedNum(b)} = ${y0}$$ for $x$.`
              ],
              steps: [
                { badge: 'P1', title: lang === 'bm' ? 'Gunakan sifat songsang' : 'Apply inverse property', tex: `f(x) = ${y0} \\implies ${fTex} = ${y0}`, why: lang === 'bm' ? 'f⁻¹ memetakan imej kembali kepada objek.' : 'f⁻¹ maps image back to object.' },
                { badge: 'J1', title: lang === 'bm' ? 'Selesaikan persamaan linear' : 'Solve linear equation', tex: `${a}x = ${y0 - b} \\implies x = ${xAns}`, why: lang === 'bm' ? 'Asingkan x.' : 'Isolate x.' }
              ]
            };
          } else {
            // Absolute value evaluation |ax - b| at x = k
            const a = U.pick([2, 3, 4]);
            const b = U.randInt(10, 22);
            const x0 = U.randInt(1, 3); // ensures ax0 - b is negative!
            const rawInside = a * x0 - b;
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
                given: `f(x) = |${a}x - ${b}|, x = ${x0}`,
                goal: lang === 'bm' ? `Nilaikan |${a}(${x0}) - ${b}|` : `Evaluate |${a}(${x0}) - ${b}|`,
                conceptRule: '|u| ≥ 0 sentiasa positif'
              },
              guidedSteps: [
                {
                  prompt: { bm: `Kira dahulu nilai di dalam palang modulus: $${a}(${x0}) - ${b} = \\;?$`, en: `First compute the value inside the modulus bars: $${a}(${x0}) - ${b} = \\;?$ ` },
                  expected: rawInside,
                  hint: { bm: `${a * x0} − ${b} = ${rawInside}.`, en: `${a * x0} − ${b} = ${rawInside}.` }
                },
                {
                  prompt: { bm: `Sekarang ambil nilai mutlak $|${rawInside}|$. Apakah hasilnya?`, en: `Now take the absolute value $|${rawInside}|$. What do you get?` },
                  expected: ans,
                  hint: { bm: `Nilai mutlak menukar tanda negatif kepada positif: ${ans}.`, en: `Modulus makes negative magnitude positive: ${ans}.` }
                }
              ],
              traps: [
                {
                  value: rawInside,
                  message: {
                    bm: `Diagnostik Konsep [P]: Anda mendapat ${rawInside} dan terlupa palang nilai mutlak |...|! Nilai mutlak sentiasa bukan negatif (+${ans}).`,
                    en: `Concept Diagnosis [P]: You got ${rawInside} and forgot the modulus bars |...|! Absolute value is always non-negative (+${ans}).`
                  }
                }
              ],
              hints: [
                lang === 'bm' ? `Gantikan $x = ${x0}$ ke dalam bahagian dalam: $${a}(${x0}) - ${b} = ${rawInside}$.` : `Substitute $x = ${x0}$ inside: $${a}(${x0}) - ${b} = ${rawInside}$.`,
                lang === 'bm' ? `Ingat $|${rawInside}| = ${ans}$ kerana nilai mutlak sentiasa positif.` : `Recall $|${rawInside}| = ${ans}$ since modulus is non-negative.`
              ],
              steps: [
                { badge: 'K1', title: lang === 'bm' ? 'Gantikan objek x' : 'Substitute object x', tex: `f(${x0}) = |${a}(${x0}) - ${b}| = |${rawInside}|`, why: lang === 'bm' ? 'Nilaikan ungkapan dalam dahulu.' : 'Evaluate inner expression first.' },
                { badge: 'J1', title: lang === 'bm' ? 'Ambil magnitud positif' : 'Take positive magnitude', tex: `f(${x0}) = ${ans}`, why: lang === 'bm' ? 'Takrif |−n| = n.' : 'Definition |−n| = n.' }
              ]
            };
          }
        } else if (tier === 2) {
          // TP3-TP4: Composite gf(k) or |ax + b| = k two roots
          const variant = U.pick([1, 2]);
          if (variant === 1) {
            const a = U.pick([2, 3, -2]);
            const b = U.randInt(-4, 4, true);
            const c = U.randInt(-6, 6, true);
            const k = U.randInt(-3, 4, true);
            const fk = a * k + b;
            const gfk = fk * fk + c;
            const fgk = a * (k * k + c) + b;
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
                given: `f(x) = ${fTex}, g(x) = ${gTex}, x = ${k}`,
                goal: lang === 'bm' ? `Kira f(${k}) dahulu, kemudian masukkan ke dalam g` : `Evaluate f(${k}) first, then plug into g`,
                conceptRule: 'gf(x) = g(f(x)) — dari kanan ke kiri!'
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
                  hint: { bm: `(${fk})² ${U.signedNum(c)} = ${fk * fk} ${U.signedNum(c)} = ${gfk}.`, en: `(${fk})² ${U.signedNum(c)} = ${gfk}.` }
                }
              ],
              traps: [
                {
                  value: fgk,
                  message: {
                    bm: `Diagnostik Kaedah [K]: Anda mengira fg(${k}) = ${fgk} (urutan terbalik!). Dalam gf(${k}), huruf kanan f bekerja dahulu pada ${k}, kemudian hasilnya masuk ke g.`,
                    en: `Method Diagnosis [K]: You computed fg(${k}) = ${fgk} (reversed order!). In gf(${k}), inner f acts on ${k} first, then g acts on that output.`
                  }
                }
              ],
              hints: [
                lang === 'bm' ? `Langkah 1: Nilaikan fungsi dalam $f(${k}) = ${a}(${k}) ${U.signedNum(b)}$.` : `Step 1: Evaluate inner $f(${k}) = ${a}(${k}) ${U.signedNum(b)}$.`,
                lang === 'bm' ? `Langkah 2: Gantikan hasil $f(${k}) = ${fk}$ ke dalam $g(x) = ${gTex}$.` : `Step 2: Substitute $f(${k}) = ${fk}$ into $g(x) = ${gTex}$.`
              ],
              steps: [
                { badge: 'K1', title: lang === 'bm' ? 'Kira fungsi dalam f' : 'Evaluate inner f', tex: `f(${k}) = ${a}(${k}) ${U.signedNum(b)} = ${fk}`, why: lang === 'bm' ? 'Fungsi sebelah kanan bertindak dahulu.' : 'Inner function operates first.' },
                { badge: 'K1', title: lang === 'bm' ? 'Masukkan ke dalam fungsi luar g' : 'Feed into outer function g', tex: `gf(${k}) = g(${fk}) = (${fk})^2 ${U.signedNum(c)}`, why: lang === 'bm' ? 'Takrif g(f(x)).' : 'Definition g(f(x)).' },
                { badge: 'J1', title: lang === 'bm' ? 'Jawapan tepat' : 'Final value', tex: `gf(${k}) = ${gfk}`, why: lang === 'bm' ? 'Permudahkan nilai.' : 'Simplify.' }
              ]
            };
          } else {
            // Solve |2x - b| = k (two roots pair!)
            const x1 = U.randInt(3, 8);
            const x2 = U.randInt(-6, 1);
            // Midpoint m = (x1+x2)/2 -> 2x - (x1+x2) = ±(x1-x2)
            const b = x1 + x2;
            const k = x1 - x2; // > 0
            return {
              tier: 2,
              tpLabel: 'TP3–TP4',
              subtopic: { bm: '1.2 Persamaan Nilai Mutlak', en: '1.2 Modulus Equations' },
              marks: 3,
              prompt: lang === 'bm'
                ? `Selesaikan persamaan nilai mutlak $|2x ${U.signedNum(-b)}| = ${k}$. Nyatakan kedua-dua nilai $x$ (pisahkan dengan koma).`
                : `Solve the absolute value equation $|2x ${U.signedNum(-b)}| = ${k}$. Enter both values of $x$ (separated by a comma).`,
              answerType: 'pair',
              orderedPair: false,
              placeholder: { bm: 'Contoh: 5, -2', en: 'e.g. 5, -2' },
              correctValue: [x1, x2],
              displayAnswerTex: `x = ${x1}, \\quad x = ${x2}`,
              intentMeta: {
                given: `|2x ${U.signedNum(-b)}| = ${k}`,
                goal: lang === 'bm' ? 'Pecahkan kepada +k dan −k untuk cari 2 nilai x' : 'Split into +k and −k to find both x values',
                conceptRule: '|U| = k ⟹ U = k atau U = −k'
              },
              guidedSteps: [
                {
                  prompt: { bm: `Cabang Positif: Selesaikan $2x ${U.signedNum(-b)} = ${k}$. Apakah nilai $x$ pertama?`, en: `Positive Branch: Solve $2x ${U.signedNum(-b)} = ${k}$. What is the first $x$?` },
                  expected: x1,
                  hint: { bm: `2x = ${k + b} ⟹ x = ${x1}.`, en: `2x = ${k + b} ⟹ x = ${x1}.` }
                },
                {
                  prompt: { bm: `Cabang Negatif: Selesaikan $2x ${U.signedNum(-b)} = -${k}$. Apakah nilai $x$ kedua?`, en: `Negative Branch: Solve $2x ${U.signedNum(-b)} = -${k}$. What is the second $x$?` },
                  expected: x2,
                  hint: { bm: `2x = ${-k + b} ⟹ x = ${x2}.`, en: `2x = ${-k + b} ⟹ x = ${x2}.` }
                }
              ],
              hints: [
                lang === 'bm' ? `Pecahkan kepada DUA persamaan: $2x ${U.signedNum(-b)} = ${k}$ dan $2x ${U.signedNum(-b)} = -${k}$.` : `Split into TWO equations: $2x ${U.signedNum(-b)} = ${k}$ and $2x ${U.signedNum(-b)} = -${k}$.`,
                lang === 'bm' ? `Selesaikan setiap persamaan untuk mendapatkan $x = ${x1}$ dan $x = ${x2}$.` : `Solve each branch to obtain $x = ${x1}$ and $x = ${x2}$.`
              ],
              steps: [
                { badge: 'P1', title: lang === 'bm' ? 'Pecahkan dua cabang modulus' : 'Split modulus into two cases', tex: `2x ${U.signedNum(-b)} = ${k} \\quad \\text{atau} \\quad 2x ${U.signedNum(-b)} = -${k}`, why: lang === 'bm' ? 'Takrif nilai mutlak.' : 'Definition of modulus.' },
                { badge: 'J1', title: lang === 'bm' ? 'Selesaikan kedua-dua cabang' : 'Solve both branches', tex: `x = ${x1}, \\quad x = ${x2}`, why: lang === 'bm' ? 'Kedua-dua punca sah.' : 'Both roots are valid.' }
              ]
            };
          }
        } else {
          // TP5-TP6 KBAT: Find outer function g(m) given f(x) = x + p and gf(x) = Ax^2 + Bx + C
          const p = U.pick([2, 3, -2, -3]);
          const A = U.pick([1, 2]);
          const B = U.randInt(-5, 5, true);
          const C = U.randInt(-6, 6);
          const m = U.randInt(1, 6);
          const xTarget = m - p;
          const ans = A * xTarget * xTarget + B * xTarget + C;
          const wrongSubM = A * m * m + B * m + C;
          const fTex = U.polyTex([{ c: 1, p: 1 }, { c: p, p: 0 }]);
          const gfTex = U.polyTex([{ c: A, p: 2 }, { c: B, p: 1 }, { c: C, p: 0 }]);
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
              given: `f(x) = ${fTex}, g(f(x)) = ${gfTex}`,
              goal: lang === 'bm' ? `Mencari g(${m}) dengan mencari x supaya f(x) = ${m}` : `Find g(${m}) by solving f(x) = ${m} for x`,
              conceptRule: 'Biar f(x) = m, cari x, kemudian gantikan x ke dalam gf(x)'
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
                  bm: `Diagnostik Konsep KBAT [P]: Anda menggantikan x = ${m} terus ke dalam gf(x) (dapat gf(${m}) = ${wrongSubM})! Ingat: kita mahu g(${m}), jadi bahagian dalam f(x) mesti bernilai ${m} dahulu.`,
                  en: `HOTS Concept Diagnosis [P]: You plugged x = ${m} directly into gf(x) (getting gf(${m}) = ${wrongSubM})! We want g(${m}), so set inner f(x) = ${m} first.`
                }
              }
            ],
            hints: [
              lang === 'bm' ? `Tulis semula $gf(x)$ sebagai $g(${fTex}) = ${gfTex}$.` : `Rewrite $gf(x)$ as $g(${fTex}) = ${gfTex}$.`,
              lang === 'bm' ? `Supaya dalam kurungan menjadi $${m}$, tetapkan $${fTex} = ${m} \\implies x = ${xTarget}$, kemudian gantikan $x = ${xTarget}$ ke sebelah kanan!` : `Set $${fTex} = ${m} \\implies x = ${xTarget}$, then plug $x = ${xTarget}$ into the RHS!`
            ],
            steps: [
              { badge: 'P1', title: lang === 'bm' ? 'Tulis dalam bentuk g(f(x))' : 'Write as g(f(x))', tex: `g(${fTex}) = ${gfTex}`, why: lang === 'bm' ? 'Takrif fungsi gubahan.' : 'Composite function definition.' },
              { badge: 'K1', title: lang === 'bm' ? `Cari x apabila f(x) = ${m}` : `Find x when f(x) = ${m}`, tex: `${fTex} = ${m} \\implies x = ${xTarget}`, why: lang === 'bm' ? 'Padankan input kepada fungsi g.' : 'Match input of outer function g.' },
              { badge: 'J1', title: lang === 'bm' ? `Gantikan x = ${xTarget}` : `Substitute x = ${xTarget}`, tex: `g(${m}) = ${A}(${xTarget})^2 ${U.signedNum(B)}(${xTarget}) ${U.signedNum(C)} = ${ans}`, why: lang === 'bm' ? 'Jawapan tepat.' : 'Exact output.' }
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
          title: { bm: '1. Hasil Tambah (HTP) & Hasil Darab Punca (HDP)', en: '1. Sum of Roots (SOR) & Product of Roots (POR)' },
          body: {
            bm: 'Jika $\\alpha$ dan $\\beta$ ialah punca bagi $ax^2 + bx + c = 0$, kita boleh mencari nilai ungkapan simetri dan membina semula persamaan kuadratik baharu secara terus.',
            en: 'If $\\alpha$ and $\\beta$ are roots of $ax^2 + bx + c = 0$, symmetric root expressions and reconstructed quadratic equations follow directly.'
          },
          formulas: [
            { label: { bm: 'HTP & HDP', en: 'SOR & POR' }, tex: '\\text{SOR} = \\alpha + \\beta = -\\frac{b}{a}, \\qquad \\text{POR} = \\alpha\\beta = \\frac{c}{a}' },
            { label: { bm: 'Membina Persamaan', en: 'Equation Reconstruction' }, tex: 'x^2 - (\\text{SOR})x + (\\text{POR}) = 0' },
            { label: { bm: 'Identiti Simetri', en: 'Symmetric Identities' }, tex: '\\alpha^2 + \\beta^2 = (\\alpha+\\beta)^2 - 2\\alpha\\beta, \\quad \\frac{1}{\\alpha}+\\frac{1}{\\beta} = \\frac{\\alpha+\\beta}{\\alpha\\beta}' }
          ],
          tip: {
            bm: 'Hati-hati tanda NEGATIF pada −b/a dan dalam x² − (SOR)x + (POR) = 0!',
            en: 'Watch the MINUS sign in −b/a and inside x² − (SOR)x + (POR) = 0!'
          }
        },
        {
          title: { bm: '2. Pembezalayan Δ = b² − 4ac & Sifat Punca', en: '2. Discriminant Δ = b² − 4ac & Nature of Roots' },
          body: {
            bm: 'Nilai $\\Delta = b^2 - 4ac$ menentukan hubungan graf $y = ax^2 + bx + c$ dengan paksi-$x$: $\\Delta > 0$ (2 titik berbeza), $\\Delta = 0$ (menyentuh pada 1 titik tangen), $\\Delta < 0$ (tidak menyilang paksi-$x$).',
            en: 'The discriminant $\\Delta = b^2 - 4ac$ governs x-axis intersection: $\\Delta > 0$ (2 distinct roots), $\\Delta = 0$ (1 tangent root), $\\Delta < 0$ (no real roots).'
          },
          formulas: [
            { label: { bm: 'Wujud Punca Nyata', en: 'Real Roots Exist' }, tex: 'b^2 - 4ac \\ge 0 \\quad (\\text{merangkumi berbeza & sama})' }
          ],
          tip: {
            bm: 'Jika soalan sebut "mempunyai punca nyata" tanpa perkataan "berbeza", gunakan b² − 4ac ≥ 0!',
            en: 'If a problem says "has real roots" without "distinct", use b² − 4ac ≥ 0!'
          }
        },
        {
          title: { bm: '3. Bentuk Verteks & Ketaksamaan Kuadratik', en: '3. Vertex Form & Quadratic Inequalities' },
          body: {
            bm: 'Penyempurnaan kuasa dua menukar $f(x) = ax^2 + bx + c$ kepada $a(x - h)^2 + k$ dengan verteks $(h, k)$ dan paksi simetri $x = h$. Bagi ketaksamaan $(x-a)(x-b)$ dengan $a < b$: $\\le 0$ berada **di dalam** julat $a \\le x \\le b$, manakala $\\ge 0$ berada **di luar** julat $x \\le a$ atau $x \\ge b$.',
            en: 'Completing the square gives $a(x - h)^2 + k$ with vertex $(h, k)$ and symmetry axis $x = h$. For $(x-a)(x-b)$ with $a < b$: $\\le 0$ lies **between** roots ($a \\le x \\le b$); $\\ge 0$ lies **outside** ($x \\le a$ or $x \\ge b$).'
          },
          formulas: [
            { label: { bm: 'Bentuk Verteks', en: 'Vertex Form' }, tex: 'f(x) = a(x - h)^2 + k, \\quad h = -\\frac{b}{2a}, \\quad k = f(h)' }
          ],
          tip: {
            bm: 'Ingat akronim mudah: Kurang (< 0) = Kawasan Dalam; Lebih (> 0) = Luar Kawasan (apabila pekali x² positif)!',
            en: 'Memory hook (when x² coeff > 0): Less (< 0) = Inside roots; Greater (> 0) = Outside roots!'
          }
        }
      ],
      traps: [
        {
          title: { bm: 'Tertinggal Faktor "a" Semasa Penyempurnaan Kuasa Dua', en: 'Forgetting to Factor Out "a" When Completing the Square' },
          desc: {
            bm: 'Bagi 2x² − 8x + 5, keluarkan 2 dahulu: 2[x² − 4x] + 5 = 2[(x−2)² − 4] + 5 = 2(x−2)² − 3 (darab 2 dengan −4!).',
            en: 'For 2x² − 8x + 5, factor 2 out first: 2[(x−2)² − 4] + 5 = 2(x−2)² − 3 (remember to multiply −4 by 2!).'
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
            const a = Number(v.a) || 1;
            const b = Number(v.b) || 0;
            const c = Number(v.c) || 0;
            const disc = b * b - 4 * a * c;
            const h = -b / (2 * a);
            const k = a * h * h + b * h + c;
            const sor = -b / a;
            const por = c / a;
            const fTex = U.polyTex([{ c: a, p: 2 }, { c: b, p: 1 }, { c: c, p: 0 }]);
            const nature = disc > 0
              ? (lang === 'bm' ? '2 punca nyata & berbeza' : '2 distinct real roots')
              : (disc === 0 ? (lang === 'bm' ? '2 punca nyata & sama' : '2 equal real roots') : (lang === 'bm' ? 'Tiada punca nyata' : 'No real roots'));
            const rootTex = disc >= 0
              ? `x_1 = ${U.roundStr((-b - Math.sqrt(disc)) / (2 * a))}, \\; x_2 = ${U.roundStr((-b + Math.sqrt(disc)) / (2 * a))}`
              : `\\text{${nature}}`;
            const hPart = h === 0 ? 'x^2' : `(x ${U.signedNum(-h)})^2`;
            const vertexForm = `${a === 1 ? '' : (a === -1 ? '-' : a)}${hPart} ${U.signedNum(k)}`;

            return {
              problemTex: `f(x) = ${fTex}`,
              steps: [
                { badge: 'P1', title: lang === 'bm' ? 'Langkah 1: Pembezalayan Δ = b² − 4ac' : 'Step 1: Discriminant Δ = b² − 4ac', tex: `\\Delta = (${b})^2 - 4(${a})(${c}) = ${U.roundStr(disc)} \\implies \\text{${nature}}`, why: lang === 'bm' ? 'Menentukan sifat persilangan dengan paksi-x.' : 'Determines x-axis intersection nature.' },
                { badge: 'K1', title: lang === 'bm' ? 'Langkah 2: HTP, HDP & Punca' : 'Step 2: SOR, POR & Roots', tex: `\\text{SOR} = ${U.roundStr(sor)}, \\quad \\text{POR} = ${U.roundStr(por)}, \\quad ${rootTex}`, why: lang === 'bm' ? 'Daripada rumus −b/a, c/a dan rumus kuadratik.' : 'From −b/a, c/a and quadratic formula.' },
                { badge: 'K1', title: lang === 'bm' ? 'Langkah 3: Penyempurnaan Kuasa Dua' : 'Step 3: Completing the Square', tex: `f(x) = ${vertexForm}`, why: lang === 'bm' ? 'Tukar ke bentuk verteks a(x − h)² + k.' : 'Convert into vertex form a(x − h)² + k.' },
                { badge: 'J1', title: lang === 'bm' ? 'Langkah 4: Titik Pusingan & Paksi Simetri' : 'Step 4: Turning Point & Axis of Symmetry', tex: `\\text{Verteks } (${U.roundStr(h)},\\; ${U.roundStr(k)}), \\quad x = ${U.roundStr(h)}`, why: lang === 'bm' ? (a > 0 ? 'a > 0 maka titik minimum (∪).' : 'a < 0 maka titik maksimum (∩).') : (a > 0 ? 'a > 0 gives minimum point (∪).' : 'a < 0 gives maximum point (∩).') }
              ],
              finalTex: `f(x) = ${vertexForm}, \\quad (${U.roundStr(h)}, ${U.roundStr(k)})`
            };
          }
        }
      ],
      generateQuestion: function (tier, lang) {
        if (tier === 1) {
          const variant = U.pick([1, 2]);
          if (variant === 1) {
            const a = U.pick([2, 3, 4]);
            const b = U.pick([-12, -9, -8, 6, 8, 12]);
            const c = U.randInt(-7, 7, true);
            const sor = -b / a;
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
              displayAnswerTex: `\\alpha + \\beta = ${U.fracTex(-b, a)}`,
              intentMeta: { given: `a = ${a}, b = ${b}, c = ${c}`, goal: 'α + β = −b/a', conceptRule: 'SOR = −b/a' },
              guidedSteps: [
                { prompt: { bm: `Apakah nilai pekali $b$ dalam persamaan $${eqTex}$ (termasuk tandanya)?`, en: `What is coefficient $b$ in $${eqTex}$ (including sign)?` }, expected: b, hint: { bm: `Pekali bagi x ialah ${b}.`, en: `Coefficient of x is ${b}.` } },
                { prompt: { bm: `Sekarang kira $-\\frac{b}{a} = -\\frac{${b}}{${a}}$:`, en: `Now evaluate $-\\frac{b}{a} = -\\frac{${b}}{${a}}$:` }, expected: sor, hint: { bm: `Hati-hati tanda negatif: ${sor}.`, en: `Watch the minus sign: ${sor}.` } }
              ],
              traps: [
                { value: b / a, message: { bm: 'Diagnostik Tanda [J]: Anda tertinggal tanda negatif dalam rumus HTP = −b/a!', en: 'Sign Diagnosis [J]: You missed the minus sign in SOR = −b/a!' } }
              ],
              hints: [
                lang === 'bm' ? `Kenal pasti $a = ${a}$ dan $b = ${b}$.` : `Identify $a = ${a}$ and $b = ${b}$.`,
                lang === 'bm' ? `Gunakan rumus $\\alpha + \\beta = -\\frac{b}{a}$.` : `Use $\\alpha + \\beta = -\\frac{b}{a}$.`
              ],
              steps: [
                { badge: 'K1', title: lang === 'bm' ? 'Gunakan rumus HTP' : 'Apply SOR formula', tex: `\\alpha + \\beta = -\\frac{${b}}{${a}}`, why: lang === 'bm' ? 'Rumus −b/a.' : 'Formula −b/a.' },
                { badge: 'J1', title: lang === 'bm' ? 'Permudahkan' : 'Simplify', tex: `\\alpha + \\beta = ${U.roundStr(sor)}`, why: lang === 'bm' ? 'Semak tanda.' : 'Verify sign.' }
              ]
            };
          } else {
            // Vertex coordinate from f(x) = a(x - h)^2 + k -> find minimum/maximum value k
            const a = U.pick([2, 3, -2, -3]);
            const h = U.randInt(-5, 5, true);
            const k = U.randInt(-9, 9, true);
            const word = a > 0 ? (lang === 'bm' ? 'minimum' : 'minimum') : (lang === 'bm' ? 'maksimum' : 'maximum');
            const fTex = `${a}(x ${U.signedNum(-h)})^2 ${U.signedNum(k)}`;
            return {
              tier: 1,
              tpLabel: 'TP1–TP2',
              subtopic: { bm: '2.4 Bentuk Verteks', en: '2.4 Vertex Form' },
              marks: 2,
              prompt: lang === 'bm'
                ? `Diberi fungsi kuadratik dalam bentuk verteks $f(x) = ${fTex}$. Nyatakan **nilai ${word}** bagi fungsi itu.`
                : `Given the quadratic function in vertex form $f(x) = ${fTex}$, state the **${word} value** of the function.`,
              answerType: 'number',
              correctValue: k,
              displayAnswerTex: `\\text{Nilai ${word}} = ${k} \\quad (\\text{pada } x = ${h})`,
              intentMeta: { given: `f(x) = ${fTex}`, goal: `Nilai ${word} k`, conceptRule: 'Nilai min/maks ialah koordinat-y verteks (k), BUKAN x = h!' },
              guidedSteps: [
                { prompt: { bm: `Nilai paling kecil bagi kuasa dua $(x ${U.signedNum(-h)})^2$ ialah $0$. Apabila bahagian kuasa dua itu menjadi $0$, apakah baki nilai $f(x)$?`, en: `The smallest value of $(x ${U.signedNum(-h)})^2$ is $0$. When that squared bracket is $0$, what does $f(x)$ equal?` }, expected: k, hint: { bm: `Pemalar di luar kurungan ialah ${k}.`, en: `The constant outside is ${k}.` } }
              ],
              traps: [
                { value: h, message: { bm: `Diagnostik Konsep [P]: x = ${h} ialah paksi simetri (di mana titik pusingan berlaku), bukannya NILAI ${word} fungsi! Nilai fungsi merujuk kepada y = k = ${k}.`, en: `Concept Diagnosis [P]: x = ${h} is where it occurs (axis of symmetry), NOT the ${word} VALUE! Function value means y = k = ${k}.` } }
              ],
              hints: [
                lang === 'bm' ? `Dalam bentuk $a(x - h)^2 + k$, verteks ialah $(h, k) = (${h}, ${k})$.` : `In $a(x - h)^2 + k$, the vertex is $(h, k) = (${h}, ${k})$.`,
                lang === 'bm' ? `Nilai ${word} fungsi merujuk kepada koordinat-$y$ verteks, iaitu $k$.` : `The ${word} value of $f(x)$ is the $y$-coordinate of the vertex, $k$.`
              ],
              steps: [
                { badge: 'P1', title: lang === 'bm' ? 'Kenal pasti verteks (h, k)' : 'Identify vertex (h, k)', tex: `(h, k) = (${h},\\; ${k})`, why: lang === 'bm' ? 'Bandingkan dengan a(x − h)² + k.' : 'Compare with a(x − h)² + k.' },
                { badge: 'J1', title: lang === 'bm' ? `Nyatakan nilai ${word}` : `State ${word} value`, tex: `f_{\\text{${word}}} = ${k}`, why: lang === 'bm' ? 'Koordinat-y titik pusingan.' : 'y-coordinate of turning point.' }
              ]
            };
          }
        } else if (tier === 2) {
          // Equal roots b^2 - 4ac = 0
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
            intentMeta: { given: `a = ${a}, b = -k, c = ${c}`, goal: 'Cari k > 0 apabila Δ = 0', conceptRule: 'Dua punca sama ⟹ b² − 4ac = 0' },
            guidedSteps: [
              { prompt: { bm: `Untuk dua punca sama, $b^2 - 4ac = 0$. Kira dahulu nilai $4ac = 4(${a})(${c})$:`, en: `For equal roots, $b^2 - 4ac = 0$. First compute $4ac = 4(${a})(${c})$:` }, expected: 4 * a * c, hint: { bm: `4 × ${a} × ${c} = ${4 * a * c}.`, en: `4 × ${a} × ${c} = ${4 * a * c}.` } },
              { prompt: { bm: `Maka $k^2 = ${4 * a * c}$. Oleh sebab $k > 0$, apakah nilai $k = \\sqrt{${4 * a * c}}$?`, en: `So $k^2 = ${4 * a * c}$. Since $k > 0$, what is $k = \\sqrt{${4 * a * c}}$?` }, expected: kAns, hint: { bm: `√${4 * a * c} = ${kAns}.`, en: `√${4 * a * c} = ${kAns}.` } }
            ],
            traps: [
              { value: kAns * kAns, message: { bm: `Diagnostik Langkah Akhir [J]: ${kAns * kAns} ialah nilai k²! Jangan lupa ambil punca kuasa dua untuk mendapatkan k = ${kAns}.`, en: `Final Step Diagnosis [J]: ${kAns * kAns} is k²! Take the square root to get k = ${kAns}.` } }
            ],
            hints: [
              lang === 'bm' ? `Gunakan syarat dua punca sama: $b^2 - 4ac = 0$.` : `Apply equal roots condition: $b^2 - 4ac = 0$.`,
              lang === 'bm' ? `$(-k)^2 - 4(${a})(${c}) = 0 \\implies k^2 = ${4 * a * c}$.` : `$(-k)^2 - 4(${a})(${c}) = 0 \\implies k^2 = ${4 * a * c}$.`
            ],
            steps: [
              { badge: 'P1', title: lang === 'bm' ? 'Syarat dua punca sama' : 'Equal roots condition', tex: `b^2 - 4ac = 0`, why: lang === 'bm' ? 'Tangen kepada paksi-x.' : 'Tangent to x-axis.' },
              { badge: 'K1', title: lang === 'bm' ? 'Gantikan a, b, c' : 'Substitute a, b, c', tex: `(-k)^2 - 4(${a})(${c}) = 0 \\implies k^2 = ${4 * a * c}`, why: lang === 'bm' ? 'Kumpulkan k².' : 'Isolate k².' },
              { badge: 'J1', title: lang === 'bm' ? 'Punca kuasa dua positif' : 'Positive square root', tex: `k = ${kAns}`, why: lang === 'bm' ? 'Diberi k > 0.' : 'Given k > 0.' }
            ]
          };
        } else {
          // TP5-TP6 KBAT: Symmetric expression alpha^2 + beta^2
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
            intentMeta: { given: eqTex, goal: 'α² + β² = (α+β)² − 2αβ', conceptRule: 'α² + β² = (SOR)² − 2(POR)' },
            guidedSteps: [
              { prompt: { bm: `Langkah 1: Cari Hasil Tambah Punca $\\alpha + \\beta = -\\frac{b}{a}$:`, en: `Step 1: Find Sum of Roots $\\alpha + \\beta = -\\frac{b}{a}$:` }, expected: sor, hint: { bm: `−(${b}) / ${a} = ${sor}.`, en: `−(${b}) / ${a} = ${sor}.` } },
              { prompt: { bm: `Langkah 2: Cari Hasil Darab Punca $\\alpha\\beta = \\frac{c}{a}$:`, en: `Step 2: Find Product of Roots $\\alpha\\beta = \\frac{c}{a}$:` }, expected: por, hint: { bm: `${c} / ${a} = ${por}.`, en: `${c} / ${a} = ${por}.` } },
              { prompt: { bm: `Langkah 3: Gunakan identiti $(\\alpha + \\beta)^2 - 2\\alpha\\beta = (${sor})^2 - 2(${por})$:`, en: `Step 3: Evaluate $(\\alpha + \\beta)^2 - 2\\alpha\\beta = (${sor})^2 - 2(${por})$:` }, expected: ans, hint: { bm: `${sor * sor} − (${2 * por}) = ${ans}.`, en: `${sor * sor} − (${2 * por}) = ${ans}.` } }
            ],
            traps: [
              { value: sor * sor, message: { bm: 'Diagnostik Identiti [K]: (α + β)² mengembangkan α² + 2αβ + β², bukannya α² + β² sahaja! Anda wajib menolak 2αβ.', en: 'Identity Diagnosis [K]: (α + β)² = α² + 2αβ + β², so you must subtract 2αβ!' } },
              { value: sor * sor + 2 * por, message: { bm: 'Diagnostik Tanda [K]: Tolak 2αβ, bukan tambah 2αβ! Rumusnya (α + β)² − 2αβ.', en: 'Sign Diagnosis [K]: Subtract 2αβ, do not add! Formula is (α + β)² − 2αβ.' } }
            ],
            hints: [
              lang === 'bm' ? `Cari $\\alpha + \\beta = ${sor}$ dan $\\alpha\\beta = ${por}$ dahulu.` : `Find $\\alpha + \\beta = ${sor}$ and $\\alpha\\beta = ${por}$ first.`,
              lang === 'bm' ? `Gunakan $\\alpha^2 + \\beta^2 = (\\alpha + \\beta)^2 - 2\\alpha\\beta$.` : `Apply $\\alpha^2 + \\beta^2 = (\\alpha + \\beta)^2 - 2\\alpha\\beta$.`
            ],
            steps: [
              { badge: 'P1', title: lang === 'bm' ? 'Ekstrak HTP & HDP' : 'Extract SOR & POR', tex: `\\alpha + \\beta = ${sor}, \\quad \\alpha\\beta = ${por}`, why: lang === 'bm' ? 'Daripada pekali persamaan.' : 'From equation coefficients.' },
              { badge: 'K1', title: lang === 'bm' ? 'Gantikan ke dalam identiti' : 'Substitute into identity', tex: `\\alpha^2 + \\beta^2 = (${sor})^2 - 2(${por})`, why: lang === 'bm' ? 'Identiti simetri.' : 'Symmetric identity.' },
              { badge: 'J1', title: lang === 'bm' ? 'Nilai akhir' : 'Final value', tex: `\\alpha^2 + \\beta^2 = ${U.roundStr(ans)}`, why: lang === 'bm' ? 'Kira dengan teliti.' : 'Simplify carefully.' }
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
          body: {
            bm: 'Tiga persamaan linear mewakili tiga satah rata dalam ruang 3D: **Penyelesaian Unik** (bersilang pada 1 titik), **Penyelesaian Tak Terhingga** (bersilang sepanjang 1 garis), atau **Tiada Penyelesaian** (satah selari / prisma segi tiga).',
            en: 'Three linear equations represent three flat 3D planes: **Unique Solution** (1 point), **Infinite Solutions** (common line), or **No Solution** (parallel planes / prism).'
          },
          formulas: [
            { label: { bm: 'Algoritma Penghapusan', en: 'Elimination Algorithm' }, tex: '(\\text{Pers 1, 2}) \\xrightarrow{-z} (4), \\quad (\\text{Pers 2, 3}) \\xrightarrow{-z} (5) \\implies \\text{Selesai } x, y' }
          ],
          tip: {
            bm: 'Pilih pemboleh ubah yang mempunyai pekali ±1 untuk dihapuskan dahulu — jalan kerja jadi jauh lebih pendek!',
            en: 'Pick the variable with coefficient ±1 to eliminate first — it cuts algebra mistakes in half!'
          }
        },
        {
          title: { bm: '2. Persamaan Serentak: 1 Linear & 1 Tak Linear', en: '2. Simultaneous: 1 Linear & 1 Non-Linear' },
          body: {
            bm: 'Ungkapkan satu pemboleh ubah daripada persamaan linear ($y = mx + c$), gantikan ke dalam lengkung tak linear untuk membentuk $Ax^2 + Bx + C = 0$, kemudian gantikan nilai $x$ kembali ke persamaan **linear**.',
            en: 'Isolate one variable from the linear equation ($y = mx + c$), substitute into the non-linear curve to get $Ax^2 + Bx + C = 0$, then back-substitute $x$ into the **linear** equation.'
          },
          formulas: [
            { label: { bm: 'Sifat Persilangan Garis-Lengkung', en: 'Line-Curve Intersection' }, tex: '\\Delta > 0 \\text{ (2 titik)}, \\quad \\Delta = 0 \\text{ (tangen)}, \\quad \\Delta < 0 \\text{ (tak bersilang)}' }
          ],
          tip: {
            bm: 'Jangan lupa kembangkan (mx + c)² sebagai m²x² + 2mcx + c² (jangan tertinggal sebutan tengah 2mcx!).',
            en: 'Always expand (mx + c)² as m²x² + 2mcx + c² (never drop the middle term 2mcx!).'
          }
        }
      ],
      traps: [
        {
          title: { bm: 'Tertinggal Sebutan Tengah Semasa Kembang (x + k)²', en: 'Dropping the Middle Term When Expanding (x + k)²' },
          desc: {
            bm: '(x + 3)² ialah x² + 6x + 9, BUKAN x² + 9! Kesilapan ini memusnahkan semua markah akhir.',
            en: '(x + 3)² is x² + 6x + 9, NEVER x² + 9! Dropping 6x ruins the entire quadratic.'
          }
        }
      ],
      solvers: [
        {
          id: 'sys-3x3',
          title: { bm: 'Solver Sistem Linear 3 Pemboleh Ubah (x, y, z)', en: '3-Variable Linear System Solver (x, y, z)' },
          desc: {
            bm: 'Selesaikan mana-mana sistem 3 persamaan linear secara tepat dengan semakan automatik.',
            en: 'Solve any 3×3 linear system with automatic geometric & substitution verification.'
          },
          inputs: [
            { id: 'a1', label: 'a₁ (Pers 1: x)', default: 1 }, { id: 'b1', label: 'b₁ (Pers 1: y)', default: 2 }, { id: 'c1', label: 'c₁ (Pers 1: z)', default: -1 }, { id: 'd1', label: 'd₁ (Hasil 1)', default: 3 },
            { id: 'a2', label: 'a₂ (Pers 2: x)', default: 2 }, { id: 'b2', label: 'b₂ (Pers 2: y)', default: -1 }, { id: 'c2', label: 'c₂ (Pers 2: z)', default: 1 }, { id: 'd2', label: 'd₂ (Hasil 2)', default: 5 },
            { id: 'a3', label: 'a₃ (Pers 3: x)', default: 3 }, { id: 'b3', label: 'b₃ (Pers 3: y)', default: 1 }, { id: 'c3', label: 'c₃ (Pers 3: z)', default: 2 }, { id: 'd3', label: 'd₃ (Hasil 3)', default: 11 }
          ],
          solve: function (v, lang) {
            const M = [
              [Number(v.a1), Number(v.b1), Number(v.c1)],
              [Number(v.a2), Number(v.b2), Number(v.c2)],
              [Number(v.a3), Number(v.b3), Number(v.c3)]
            ];
            const D = [Number(v.d1), Number(v.d2), Number(v.d3)];
            const res = U.solve3x3(M, D);
            if (!res.unique) {
              return {
                problemTex: '\\text{Sistem Satah Tak Unik}',
                steps: [{ badge: 'P1', title: lang === 'bm' ? 'Penentu Sifar' : 'Zero Determinant', tex: '\\det(A) = 0', why: lang === 'bm' ? 'Tiada titik persilangan tunggal.' : 'No unique intersection point.' }],
                finalTex: lang === 'bm' ? '\\text{Tiada Penyelesaian Unik}' : '\\text{No Unique Solution}'
              };
            }
            return {
              problemTex: `\\begin{cases} ${M[0][0]}x ${U.signedNum(M[0][1])}y ${U.signedNum(M[0][2])}z = ${D[0]} \\\\ ${M[1][0]}x ${U.signedNum(M[1][1])}y ${U.signedNum(M[1][2])}z = ${D[1]} \\\\ ${M[2][0]}x ${U.signedNum(M[2][1])}y ${U.signedNum(M[2][2])}z = ${D[2]} \\end{cases}`,
              steps: [
                { badge: 'K1', title: lang === 'bm' ? 'Langkah 1: Penghapusan kepada Sistem 2×2' : 'Step 1: Reduce to 2×2 System', tex: `\\text{Hapuskan } z \\text{ daripada pasangan (1,2) dan (2,3)}`, why: lang === 'bm' ? 'Pastikan pemboleh ubah yang sama dihapuskan.' : 'Eliminate the identical variable across both pairs.' },
                { badge: 'K1', title: lang === 'bm' ? 'Langkah 2: Dapatkan Nilai Ketiga-tiga Pemboleh Ubah' : 'Step 2: Solve & Back-Substitute', tex: `x = ${U.roundStr(res.x)}, \\quad y = ${U.roundStr(res.y)}, \\quad z = ${U.roundStr(res.z)}`, why: lang === 'bm' ? 'Gantikan balik ke persamaan asal.' : 'Back-substitute into original plane equation.' },
                { badge: 'J1', title: lang === 'bm' ? 'Langkah 3: Semakan Ketepatan' : 'Step 3: Accuracy Check', tex: `${M[0][0]}(${U.roundStr(res.x)}) ${U.signedNum(M[0][1])}(${U.roundStr(res.y)}) ${U.signedNum(M[0][2])}(${U.roundStr(res.z)}) = ${D[0]} \\; \\checkmark`, why: lang === 'bm' ? 'Disahkan memenuhi persamaan!' : 'Verified against Eq 1!' }
              ],
              finalTex: `(x, y, z) = (${U.roundStr(res.x)},\\; ${U.roundStr(res.y)},\\; ${U.roundStr(res.z)})`
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
          const ans = x0 - y0;
          return {
            tier: 1,
            tpLabel: 'TP1–TP2',
            subtopic: { bm: '3.2 Penggantian & Pemfaktoran Serentak', en: '3.2 Simultaneous Substitution' },
            marks: 2,
            prompt: lang === 'bm'
              ? `Diberi $x + y = ${sum}$ dan $x^2 - y^2 = ${sqDiff}$. Cari nilai bagi $x - y$.`
              : `Given $x + y = ${sum}$ and $x^2 - y^2 = ${sqDiff}$, find the value of $x - y$.`,
            answerType: 'number',
            correctValue: ans,
            displayAnswerTex: `x - y = ${ans}`,
            intentMeta: { given: `x + y = ${sum}, x² − y² = ${sqDiff}`, goal: 'x − y', conceptRule: 'x² − y² = (x + y)(x − y)' },
            guidedSteps: [
              { prompt: { bm: `Oleh sebab $(x + y)(x - y) = ${sqDiff}$ dan $x + y = ${sum}$, bahagikan $${sqDiff}$ dengan $${sum}$:`, en: `Since $(x + y)(x - y) = ${sqDiff}$ and $x + y = ${sum}$, divide $${sqDiff}$ by $${sum}$:` }, expected: ans, hint: { bm: `${sqDiff} ÷ ${sum} = ${ans}.`, en: `${sqDiff} ÷ ${sum} = ${ans}.` } }
            ],
            hints: [
              lang === 'bm' ? `Faktorkan $x^2 - y^2 = (x + y)(x - y)$.` : `Factorize $x^2 - y^2 = (x + y)(x - y)$.`,
              lang === 'bm' ? `Gantikan $x + y = ${sum}$ untuk mencari $x - y$.` : `Substitute $x + y = ${sum}$ to get $x - y$.`
            ],
            steps: [
              { badge: 'K1', title: lang === 'bm' ? 'Faktorkan beza dua kuasa dua' : 'Factor difference of squares', tex: `(x + y)(x - y) = ${sqDiff} \\implies ${sum}(x - y) = ${sqDiff}`, why: lang === 'bm' ? 'Identiti algebra.' : 'Algebraic identity.' },
              { badge: 'J1', title: lang === 'bm' ? 'Selesaikan' : 'Solve', tex: `x - y = ${ans}`, why: lang === 'bm' ? 'Bahagikan dengan ' + sum : 'Divide by ' + sum }
            ]
          };
        } else if (tier === 2) {
          const x1 = U.randInt(1, 4);
          const y1 = U.randInt(2, 5);
          const k = y1 - x1;
          const R = x1 * x1 + y1 * y1;
          const x2 = -k - x1;
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
            intentMeta: { given: `y = x ${U.signedNum(k)}, x² + y² = ${R}`, goal: 'Kedua-dua punca x', conceptRule: 'Asingkan y dari linear, gantikan ke dalam tak linear' },
            guidedSteps: [
              { prompt: { bm: `Gantikan $y = x ${U.signedNum(k)}$ ke dalam $x^2 + y^2 = ${R}$ memberi $2x^2 ${U.signedNum(2 * k)}x + (${k * k - R}) = 0$. Bahagikan semua dengan $2$: apakah pemalar akhir dalam $x^2 ${U.signedNum(k)}x + C = 0$?`, en: `Substituting $y = x ${U.signedNum(k)}$ gives $2x^2 ${U.signedNum(2 * k)}x + (${k * k - R}) = 0$. Dividing by $2$, what is the constant term $C$?` }, expected: (k * k - R) / 2, hint: { bm: `(${k * k} − ${R}) ÷ 2 = ${(k * k - R) / 2}.`, en: `(${k * k} − ${R}) ÷ 2 = ${(k * k - R) / 2}.` } },
              { prompt: { bm: `Salah satu punca positif bagi $x^2 ${U.signedNum(k)}x ${U.signedNum((k * k - R) / 2)} = 0$ ialah:`, en: `What is the positive root of $x^2 ${U.signedNum(k)}x ${U.signedNum((k * k - R) / 2)} = 0$?` }, expected: x1, hint: { bm: `Faktorkan kepada (x − ${x1})(x ${U.signedNum(-x2)}) = 0.`, en: `Factorize into (x − ${x1})(x ${U.signedNum(-x2)}) = 0.` } }
            ],
            hints: [
              lang === 'bm' ? `Tulis $y = x ${U.signedNum(k)}$ dan gantikan ke dalam $x^2 + (x ${U.signedNum(k)})^2 = ${R}$.` : `Write $y = x ${U.signedNum(k)}$ and substitute into $x^2 + (x ${U.signedNum(k)})^2 = ${R}$.`,
              lang === 'bm' ? `Permudahkan kepada $x^2 ${U.signedNum(k)}x ${U.signedNum((k * k - R) / 2)} = 0$ dan faktorkan.` : `Simplify to $x^2 ${U.signedNum(k)}x ${U.signedNum((k * k - R) / 2)} = 0$ and factorize.`
            ],
            steps: [
              { badge: 'P1', title: lang === 'bm' ? 'Ungkapkan y daripada persamaan linear' : 'Isolate y from linear eq', tex: `y = x ${U.signedNum(k)}`, why: lang === 'bm' ? 'Mudah digantikan.' : 'Ready for substitution.' },
              { badge: 'K1', title: lang === 'bm' ? 'Gantikan & kembangkan' : 'Substitute & expand', tex: `x^2 + (x ${U.signedNum(k)})^2 = ${R} \\implies 2x^2 ${U.signedNum(2 * k)}x ${U.signedNum(k * k - R)} = 0`, why: lang === 'bm' ? 'Bentuk persamaan kuadratik.' : 'Form quadratic equation.' },
              { badge: 'J1', title: lang === 'bm' ? 'Faktorkan untuk x' : 'Factorize for x', tex: `(x - ${x1})(x ${U.signedNum(-x2)}) = 0 \\implies x = ${x1},\\; ${x2}`, why: lang === 'bm' ? 'Kedua-dua koordinat-x persilangan.' : 'Both intersection x-coordinates.' }
            ]
          };
        } else {
          const x = U.randInt(2, 5);
          const y = U.randInt(2, 6);
          const z = U.randInt(3, 7);
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
            intentMeta: { given: '3 persamaan linear x, y, z', goal: 'Cari nilai z', conceptRule: 'Hapuskan y melalui (1)+(3) dan (2)+(3)' },
            guidedSteps: [
              { prompt: { bm: `Tambah Pers (1) dan Pers (3) untuk menghapuskan $y$: $(x+y+z) + (x-y+2z) = 2x + 3z = \\;?$`, en: `Add Eq (1) and Eq (3) to eliminate $y$: $2x + 3z = \\;?$ ` }, expected: d1 + d3, hint: { bm: `${d1} + ${d3} = ${d1 + d3}.`, en: `${d1} + ${d3} = ${d1 + d3}.` } },
              { prompt: { bm: `Tambah Pers (2) dan Pers (3) untuk menghapuskan $y$ lagi: $3x + z = \\;?$`, en: `Add Eq (2) and Eq (3) to eliminate $y$ again: $3x + z = \\;?$ ` }, expected: d2 + d3, hint: { bm: `${d2} + ${d3} = ${d2 + d3}.`, en: `${d2} + ${d3} = ${d2 + d3}.` } },
              { prompt: { bm: `Daripada $2x + 3z = ${d1 + d3}$ dan $3x + z = ${d2 + d3}$, kita dapat $7z = ${7 * z}$. Apakah nilai $z$?`, en: `From $2x + 3z = ${d1 + d3}$ and $3x + z = ${d2 + d3}$, we get $7z = ${7 * z}$. What is $z$?` }, expected: z, hint: { bm: `${7 * z} ÷ 7 = ${z}.`, en: `${7 * z} ÷ 7 = ${z}.` } }
            ],
            traps: [
              { value: x, message: { bm: `Diagnostik Sasaran [J]: ${x} ialah nilai x! Soalan meminta nilai z.`, en: `Target Diagnosis [J]: ${x} is x! The question asks for z.` } },
              { value: y, message: { bm: `Diagnostik Sasaran [J]: ${y} ialah nilai y! Soalan meminta nilai z.`, en: `Target Diagnosis [J]: ${y} is y! The question asks for z.` } }
            ],
            hints: [
              lang === 'bm' ? `Perhatikan pekali $y$: $+y, +y, -y$. Tambah (1)+(3) dan (2)+(3) untuk menghapuskan $y$ terus!` : `Notice $y$ has $+y, +y, -y$. Add (1)+(3) and (2)+(3) to eliminate $y$ immediately!`,
              lang === 'bm' ? `Selesaikan $2x + 3z = ${d1 + d3}$ dan $3x + z = ${d2 + d3}$ untuk mendapatkan $z$.` : `Solve $2x + 3z = ${d1 + d3}$ and $3x + z = ${d2 + d3}$ for $z$.`
            ],
            steps: [
              { badge: 'K1', title: lang === 'bm' ? 'Hapuskan y melalui (1)+(3)' : 'Eliminate y via (1)+(3)', tex: `2x + 3z = ${d1 + d3}`, why: lang === 'bm' ? '+y dan −y terhapus.' : '+y and −y cancel.' },
              { badge: 'K1', title: lang === 'bm' ? 'Hapuskan y melalui (2)+(3)' : 'Eliminate y via (2)+(3)', tex: `3x + z = ${d2 + d3}`, why: lang === 'bm' ? 'Kekalkan x dan z.' : 'Keep x and z.' },
              { badge: 'J1', title: lang === 'bm' ? 'Hapuskan x & cari z' : 'Eliminate x & solve z', tex: `7z = ${7 * z} \\implies z = ${z}`, why: lang === 'bm' ? '3×Pers(4) − 2×Pers(5).' : '3×Eq(4) − 2×Eq(5).' }
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
          title: { bm: '1. Hukum Indeks & Surd Konjugat', en: '1. Laws of Indices & Conjugate Surds' },
          body: {
            bm: 'Samakan asas apabila menyelesaikan persamaan indeks ($a^m = a^n \\implies m = n$). Bagi pecahan surd $\\frac{k}{a + \\sqrt{b}}$, darab pengangka dan penyebut dengan **konjugat** $a - \\sqrt{b}$.',
            en: 'Match bases for index equations ($a^m = a^n \\implies m = n$). For surd fractions $\\frac{k}{a + \\sqrt{b}}$, multiply numerator and denominator by **conjugate** $a - \\sqrt{b}$.'
          },
          formulas: [
            { label: { bm: 'Hukum Indeks Utama', en: 'Core Index Laws' }, tex: 'a^m \\times a^n = a^{m+n}, \\quad a^m \\div a^n = a^{m-n}, \\quad a^{\\frac{m}{n}} = (\\sqrt[n]{a})^m' },
            { label: { bm: 'Konjugat Surd', en: 'Surd Rationalization' }, tex: '\\frac{k}{a + \\sqrt{b}} = \\frac{k(a - \\sqrt{b})}{a^2 - b}' }
          ],
          tip: {
            bm: 'a⁰ = 1 bagi sebarang a ≠ 0, dan a⁻ⁿ = 1/aⁿ (bukan nombor negatif!).',
            en: 'a⁰ = 1 for any a ≠ 0, and a⁻ⁿ = 1/aⁿ (it is a reciprocal, NOT negative!).'
          }
        },
        {
          title: { bm: '2. Hukum Logaritma, Tukar Asas & ln x', en: '2. Logarithm Laws, Change of Base & ln x' },
          body: {
            bm: '$N = a^x \\iff x = \\log_a N$. Logaritma asli menggunakan asas $e \\approx 2.71828$, ditulis $\\ln x = \\log_e x$ dengan $\\ln e = 1$ dan $\\ln 1 = 0$.',
            en: '$N = a^x \\iff x = \\log_a N$. Natural logarithms use base $e \\approx 2.71828$, written $\\ln x = \\log_e x$ where $\\ln e = 1$ and $\\ln 1 = 0$.'
          },
          formulas: [
            { label: { bm: 'Hukum Hasil Darab/Bahagi/Kuasa', en: 'Product/Quotient/Power Laws' }, tex: '\\log_a(mn) = \\log_a m + \\log_a n, \\quad \\log_a(m^p) = p\\log_a m' },
            { label: { bm: 'Rumus Tukar Asas', en: 'Change of Base Formula' }, tex: '\\log_a b = \\frac{\\log_c b}{\\log_c a} = \\frac{1}{\\log_b a}' }
          ],
          tip: {
            bm: 'Apabila diberi persamaan dengan asas log_a x dan log_x a, tukar log_x a = 1/(log_a x) dan biar u = log_a x!',
            en: 'When an equation mixes log_a x and log_x a, rewrite log_x a = 1/(log_a x) and let u = log_a x!'
          }
        }
      ],
      traps: [
        {
          title: { bm: 'Kembangkan log(x + y) Secara Salah', en: 'Falsely Expanding log(x + y)' },
          desc: {
            bm: 'logₐ(x + y) TIADA rumus pengembangan! Hanya darab di dalam log menjadi tambah: logₐ(xy) = logₐ x + logₐ y.',
            en: 'logₐ(x + y) has NO expansion! Only multiplication inside log splits into addition: logₐ(xy) = logₐ x + logₐ y.'
          }
        }
      ],
      solvers: [
        {
          id: 'surd-rationalizer',
          title: { bm: 'Penisbah Penyebut Surd Konjugat k / (a + √b)', en: 'Surd Conjugate Rationalizer k / (a + √b)' },
          desc: {
            bm: 'Nisbahkan penyebut k / (a + √b) kepada bentuk tepat p + q√b.',
            en: 'Rationalize k / (a + √b) into exact simplified form p + q√b.'
          },
          inputs: [
            { id: 'k', label: { bm: 'Pengangka k', en: 'Numerator k' }, default: 14 },
            { id: 'a', label: { bm: 'Sebutan bulat a', en: 'Integer term a' }, default: 3 },
            { id: 'b', label: { bm: 'Nilai dalam surd b (√b)', en: 'Radicand b in √b' }, default: 2 }
          ],
          solve: function (v, lang) {
            const k = Number(v.k) || 1;
            const a = Number(v.a) || 2;
            const b = Math.max(2, Math.abs(Number(v.b) || 2));
            const denom = a * a - b;
            if (denom === 0) {
              return { problemTex: '\\text{Penyebut sifar}', steps: [], finalTex: '\\text{Tak Tertakrif}' };
            }
            const pTex = U.fracTex(k * a, denom);
            const qTex = U.fracTex(-k, denom);
            return {
              problemTex: `\\frac{${k}}{${a} + \\sqrt{${b}}}`,
              steps: [
                { badge: 'P1', title: lang === 'bm' ? 'Langkah 1: Tentukan konjugat penyebut' : 'Step 1: Identify conjugate surd', tex: `\\text{Konjugat} = ${a} - \\sqrt{${b}}`, why: lang === 'bm' ? 'Tukar tanda di tengah.' : 'Flip the middle sign.' },
                { badge: 'K1', title: lang === 'bm' ? 'Langkah 2: Darab atas dan bawah' : 'Step 2: Multiply numerator & denominator', tex: `\\frac{${k}(${a} - \\sqrt{${b}})}{${a}^2 - (\\sqrt{${b}})^2} = \\frac{${k * a} - ${k}\\sqrt{${b}}}{${denom}}`, why: lang === 'bm' ? '(a+√b)(a−√b) = a² − b menghapuskan punca.' : '(a+√b)(a−√b) = a² − b clears the radical.' },
                { badge: 'J1', title: lang === 'bm' ? 'Langkah 3: Bentuk termudah' : 'Step 3: Simplest form', tex: `${pTex} + \\left(${qTex}\\right)\\sqrt{${b}}`, why: lang === 'bm' ? 'Permudahkan pecahan.' : 'Reduce fractions.' }
              ],
              finalTex: `${pTex} + \\left(${qTex}\\right)\\sqrt{${b}}`
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
            const a = Number(v.a);
            const b = Number(v.b);
            if (!(a > 0 && a !== 1 && b > 0)) {
              return { problemTex: '\\text{Syarat: } a > 0, a \\ne 1, N > 0', steps: [], finalTex: '\\text{Input Tidak Sah}' };
            }
            const logB = Math.log10(b);
            const logA = Math.log10(a);
            const res = logB / logA;
            return {
              problemTex: `\\log_{${a}} ${b}`,
              steps: [
                { badge: 'K1', title: lang === 'bm' ? 'Langkah 1: Gunakan rumus tukar asas 10' : 'Step 1: Apply base-10 conversion', tex: `\\log_{${a}} ${b} = \\frac{\\log_{10} ${b}}{\\log_{10} ${a}} = \\frac{${U.roundStr(logB, 4)}}{${U.roundStr(logA, 4)}}`, why: lang === 'bm' ? 'Membolehkan penilaian terus pada kalkulator saintifik.' : 'Allows direct evaluation on any scientific calculator.' },
                { badge: 'J1', title: lang === 'bm' ? 'Langkah 2: Nilai tepat & semakan indeks' : 'Step 2: Value & exponential check', tex: `\\log_{${a}} ${b} = ${U.roundStr(res, 4)} \\quad \\left(\\text{Semak: } ${a}^{${U.roundStr(res, 4)}} = ${b}\\right)`, why: lang === 'bm' ? 'Sahkan dengan bentuk indeks.' : 'Verify via index definition.' }
              ],
              finalTex: `\\log_{${a}} ${b} = ${U.roundStr(res, 4)}`
            };
          }
        }
      ],
      generateQuestion: function (tier, lang) {
        if (tier === 1) {
          const base = U.pick([2, 3, 4, 5]);
          const p = U.pick([2, 3]);
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
            intentMeta: { given: `log_${base}(${innerTex}) = ${p}`, goal: 'Tukar ke bentuk indeks & cari x', conceptRule: 'logₐ N = p ⟺ N = aᵖ' },
            guidedSteps: [
              { prompt: { bm: `Tukarkan $\\log_{${base}}(${innerTex}) = ${p}$ kepada bentuk indeks: berapakah nilai $${base}^{${p}}$?`, en: `Convert to index form: what is $${base}^{${p}}$?` }, expected: target, hint: { bm: `${base} kuasa ${p} ialah ${target}.`, en: `${base} to the power of ${p} is ${target}.` } },
              { prompt: { bm: `Sekarang selesaikan $2x ${U.signedNum(b)} = ${target}$. Apakah nilai $x$?`, en: `Now solve $2x ${U.signedNum(b)} = ${target}$. What is $x$?` }, expected: xAns, hint: { bm: `2x = ${target - b} ⟹ x = ${xAns}.`, en: `2x = ${target - b} ⟹ x = ${xAns}.` } }
            ],
            traps: [
              { value: (base * p - b) / 2, message: { bm: `Diagnostik Konsep [P]: Anda mendarab ${base} × ${p} = ${base * p}! Ingat: log_${base}(N) = ${p} bermaksud N = ${base}^${p} = ${target} (kuasa, bukan darab!).`, en: `Concept Diagnosis [P]: You multiplied ${base} × ${p}! Remember log_${base}(N) = ${p} means N = ${base}^${p} = ${target}.` } }
            ],
            hints: [
              lang === 'bm' ? `Tukar ke bentuk indeks: $${innerTex} = ${base}^{${p}}$.` : `Convert to index form: $${innerTex} = ${base}^{${p}}$.`,
              lang === 'bm' ? `Selesaikan $2x ${U.signedNum(b)} = ${target}$.` : `Solve $2x ${U.signedNum(b)} = ${target}$.`
            ],
            steps: [
              { badge: 'K1', title: lang === 'bm' ? 'Tukar ke bentuk indeks' : 'Convert to index form', tex: `${innerTex} = ${base}^{${p}} = ${target}`, why: lang === 'bm' ? 'Takrif logaritma.' : 'Definition of logarithm.' },
              { badge: 'J1', title: lang === 'bm' ? 'Selesaikan untuk x' : 'Solve for x', tex: `2x = ${target - b} \\implies x = ${xAns}`, why: lang === 'bm' ? 'Asingkan x.' : 'Isolate x.' }
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
            intentMeta: { given: `${a}^(3x ${U.signedNum(m)}) = ${a2}^(x + ${n})`, goal: `Samakan asas kepada ${a}`, conceptRule: `(a²)ⁿ = a^(2n)` },
            guidedSteps: [
              { prompt: { bm: `Tulis $${a2}$ sebagai kuasa asas $${a}$: $${a2} = ${a}^k$. Apakah nilai $k$?`, en: `Write $${a2}$ as a power of $${a}$: $${a2} = ${a}^k$. What is $k$?` }, expected: 2, hint: { bm: `${a}² = ${a2}, jadi k = 2.`, en: `${a}² = ${a2}, so k = 2.` } },
              { prompt: { bm: `Kembangkan kuasa di sebelah kanan: $2(x + ${n}) = 2x + \\;?$`, en: `Expand the RHS exponent: $2(x + ${n}) = 2x + \\;?$ ` }, expected: 2 * n, hint: { bm: `2 × ${n} = ${2 * n}.`, en: `2 × ${n} = ${2 * n}.` } },
              { prompt: { bm: `Samakan kuasa $3x ${U.signedNum(m)} = 2x + ${2 * n}$. Apakah nilai $x$?`, en: `Equate exponents $3x ${U.signedNum(m)} = 2x + ${2 * n}$. What is $x$?` }, expected: xAns, hint: { bm: `x = ${2 * n} − (${m}) = ${xAns}.`, en: `x = ${2 * n} − (${m}) = ${xAns}.` } }
            ],
            traps: [
              { value: n - m, message: { bm: `Diagnostik Kurungan [K]: Semasa menukar (${a}²)^(x + ${n}), anda menulis kuasa sebagai 2x + ${n} dan terlupa darab 2 dengan ${n}! Sepatutnya 2x + ${2 * n}.`, en: `Bracket Diagnosis [K]: In (${a}²)^(x + ${n}), distribute 2 to BOTH terms: 2x + ${2 * n}, not 2x + ${n}!` } }
            ],
            hints: [
              lang === 'bm' ? `Tulis $${a2} = ${a}^2$ supaya kedua-dua belah mempunyai asas $${a}$.` : `Rewrite $${a2} = ${a}^2$ so both sides share base $${a}$.`,
              lang === 'bm' ? `Samakan kuasa: $3x ${U.signedNum(m)} = 2(x + ${n})$.` : `Equate exponents: $3x ${U.signedNum(m)} = 2(x + ${n})$.`
            ],
            steps: [
              { badge: 'K1', title: lang === 'bm' ? 'Samakan asas indeks' : 'Match index bases', tex: `${a}^{3x ${U.signedNum(m)}} = (${a}^2)^{x + ${n}} = ${a}^{2x + ${2 * n}}`, why: lang === 'bm' ? 'Gunakan (aᵐ)ⁿ = aᵐⁿ.' : 'Apply (aᵐ)ⁿ = aᵐⁿ.' },
              { badge: 'J1', title: lang === 'bm' ? 'Samakan kuasa & selesaikan' : 'Equate powers & solve', tex: `3x ${U.signedNum(m)} = 2x + ${2 * n} \\implies x = ${xAns}`, why: lang === 'bm' ? 'Kumpulkan x.' : 'Solve for x.' }
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
            intentMeta: { given: `log_${a} x + log_${aSq} x = ${k}`, goal: `Tukar asas ${aSq} kepada asas ${a}`, conceptRule: `log_(a²) x = (log_a x)/2` },
            guidedSteps: [
              { prompt: { bm: `Tukar asas $\\log_{${aSq}} x = \\frac{\\log_{${a}} x}{\\log_{${a}} ${aSq}}$. Berapakah nilai penyebut $\\log_{${a}} ${aSq}$?`, en: `In $\\log_{${aSq}} x = \\frac{\\log_{${a}} x}{\\log_{${a}} ${aSq}}$, what is $\\log_{${a}} ${aSq}$?` }, expected: 2, hint: { bm: `Kerana ${a}² = ${aSq}, maka log_${a}(${aSq}) = 2.`, en: `Since ${a}² = ${aSq}, log_${a}(${aSq}) = 2.` } },
              { prompt: { bm: `Maka $\\log_{${a}} x + \\frac{1}{2}\\log_{${a}} x = \\frac{3}{2}\\log_{${a}} x = ${k}$. Apakah nilai $\\log_{${a}} x$?`, en: `Then $\\frac{3}{2}\\log_{${a}} x = ${k}$. What is $\\log_{${a}} x$?` }, expected: logAx, hint: { bm: `${k} × (2/3) = ${logAx}.`, en: `${k} × (2/3) = ${logAx}.` } },
              { prompt: { bm: `Akhir sekali, jika $\\log_{${a}} x = ${logAx}$, apakah nilai $x = ${a}^{${logAx}}$?`, en: `Finally, since $\\log_{${a}} x = ${logAx}$, what is $x = ${a}^{${logAx}}$?` }, expected: xAns, hint: { bm: `${a}^${logAx} = ${xAns}.`, en: `${a}^${logAx} = ${xAns}.` } }
            ],
            traps: [
              { value: logAx, message: { bm: `Diagnostik Langkah Akhir [J]: ${logAx} ialah nilai log_${a}(x), belum lagi nilai x! Tukarkan kepada x = ${a}^${logAx} = ${xAns}.`, en: `Final Step Diagnosis [J]: ${logAx} is log_${a}(x), not x yet! Compute x = ${a}^${logAx} = ${xAns}.` } }
            ],
            hints: [
              lang === 'bm' ? `Tukar $\\log_{${aSq}} x$ kepada asas $${a}$: dapat $\\frac{\\log_{${a}} x}{2}$.` : `Change $\\log_{${aSq}} x$ to base $${a}$: you get $\\frac{\\log_{${a}} x}{2}$.`,
              lang === 'bm' ? `Gabungkan $\\frac{3}{2}\\log_{${a}} x = ${k} \\implies \\log_{${a}} x = ${logAx}$.` : `Combine $\\frac{3}{2}\\log_{${a}} x = ${k} \\implies \\log_{${a}} x = ${logAx}$.`
            ],
            steps: [
              { badge: 'K1', title: lang === 'bm' ? 'Tukar kepada asas ' + a : 'Change to base ' + a, tex: `\\log_{${a}} x + \\frac{\\log_{${a}} x}{2} = ${k}`, why: lang === 'bm' ? `log_${a}(${aSq}) = 2.` : `log_${a}(${aSq}) = 2.` },
              { badge: 'K1', title: lang === 'bm' ? 'Cari log_a x' : 'Solve for log_a x', tex: `\\frac{3}{2}\\log_{${a}} x = ${k} \\implies \\log_{${a}} x = ${logAx}`, why: lang === 'bm' ? 'Darab 2/3.' : 'Multiply by 2/3.' },
              { badge: 'J1', title: lang === 'bm' ? 'Nilai x' : 'Evaluate x', tex: `x = ${a}^{${logAx}} = ${xAns}`, why: lang === 'bm' ? 'Bentuk indeks.' : 'Exponential form.' }
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
          body: {
            bm: 'Setiap sebutan bertambah/berkurang sebanyak **beza sepunya** malar $d = T_n - T_{n-1}$. Sebutan ke-$n$ juga diperoleh daripada hasil tambah melalui $T_n = S_n - S_{n-1}$.',
            en: 'Each term changes by a constant **common difference** $d = T_n - T_{n-1}$. Individual terms relate to cumulative sums via $T_n = S_n - S_{n-1}$.'
          },
          formulas: [
            { label: { bm: 'Sebutan ke-n & S_n JA', en: 'AP n-th Term & S_n' }, tex: 'T_n = a + (n-1)d, \\qquad S_n = \\frac{n}{2}[2a + (n-1)d] = \\frac{n}{2}(a + l)' },
            { label: { bm: 'Hasil Tambah Julat p ke q', en: 'Inclusive Range Sum p to q' }, tex: 'S_{p \\to q} = S_q - S_{p-1}' }
          ],
          tip: {
            bm: 'Ingat! Untuk jumlah dari T₅ hingga T₁₂, tolak S₄ (bukan S₅!) supaya T₅ kekal di dalam jumlah.',
            en: 'Remember! For the sum from T₅ to T₁₂, subtract S₄ (never S₅!) so T₅ remains included.'
          }
        },
        {
          title: { bm: '2. Janjang Geometri (JG / GP) & Ketakterhinggaan S∞', en: '2. Geometric Progressions (GP) & Sum to Infinity S∞' },
          body: {
            bm: 'Setiap sebutan didarab dengan **nisbah sepunya** $r = \\frac{T_n}{T_{n-1}}$. Apabila $|r| < 1$ ($-1 < r < 1$), siri tak terhingga menumpu kepada $S_\\infty = \\frac{a}{1 - r}$. Digunakan juga untuk menukar perpuluhan berulang (cth: $0.2323\\dots$) kepada pecahan!',
            en: 'Each term is multiplied by **common ratio** $r = \\frac{T_n}{T_{n-1}}$. When $|r| < 1$, the infinite series converges to $S_\\infty = \\frac{a}{1 - r}$, which also converts recurring decimals into fractions!'
          },
          formulas: [
            { label: { bm: 'Sebutan ke-n & S_n JG', en: 'GP n-th Term & S_n' }, tex: 'T_n = ar^{n-1}, \\qquad S_n = \\frac{a(1 - r^n)}{1 - r}' },
            { label: { bm: 'Hasil Tambah Ketakterhinggaan', en: 'Sum to Infinity (|r| < 1)' }, tex: 'S_\\infty = \\frac{a}{1 - r}, \\quad -1 < r < 1' }
          ],
          tip: {
            bm: 'Bagi 0.363636... = 0.36 + 0.0036 + ..., ambil a = 0.36 dan r = 0.01, maka S∞ = 0.36 / 0.99 = 4/11!',
            en: 'For 0.363636... = 0.36 + 0.0036 + ..., set a = 0.36 and r = 0.01, giving S∞ = 0.36 / 0.99 = 4/11!'
          }
        }
      ],
      traps: [
        {
          title: { bm: 'Keliru Antara Tₙ (Sebutan ke-n) dengan Sₙ (Hasil Tambah)', en: 'Confusing Tₙ (n-th Term) with Sₙ (Sum of n Terms)' },
          desc: {
            bm: 'Baca kata kunci soalan dengan teliti: "pada hari ke-8" = T₈, manakala "jumlah sepanjang 8 hari" = S₈!',
            en: 'Read keywords carefully: "on the 8th day" = T₈, whereas "total over 8 days" = S₈!'
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
            const isGP = Math.round(Number(v.mode)) === 2;
            const a = Number(v.a) || 1;
            const dr = Number(v.dr);
            const n = Math.max(1, Math.round(Number(v.n) || 5));
            if (!isGP) {
              const tn = a + (n - 1) * dr;
              const sn = (n / 2) * (2 * a + (n - 1) * dr);
              return {
                problemTex: `\\text{JA / AP: } a = ${a},\\; d = ${dr},\\; n = ${n}`,
                steps: [
                  { badge: 'K1', title: lang === 'bm' ? `Sebutan ke-${n} (T_${n})` : `${n}-th Term (T_${n})`, tex: `T_{${n}} = ${a} + (${n - 1})(${dr}) = ${U.roundStr(tn)}`, why: lang === 'bm' ? 'Rumus Tₙ = a + (n−1)d.' : 'Formula Tₙ = a + (n−1)d.' },
                  { badge: 'J1', title: lang === 'bm' ? `Hasil Tambah S_${n}` : `Sum S_${n}`, tex: `S_{${n}} = \\frac{${n}}{2}[2(${a}) + (${n - 1})(${dr})] = ${U.roundStr(sn)}`, why: lang === 'bm' ? 'Rumus Sₙ JA.' : 'AP sum formula.' }
                ],
                finalTex: `T_{${n}} = ${U.roundStr(tn)}, \\quad S_{${n}} = ${U.roundStr(sn)}`
              };
            } else {
              const tn = a * Math.pow(dr, n - 1);
              const sn = dr === 1 ? a * n : (a * (1 - Math.pow(dr, n))) / (1 - dr);
              const hasInf = Math.abs(dr) < 1;
              const sInf = hasInf ? a / (1 - dr) : null;
              return {
                problemTex: `\\text{JG / GP: } a = ${a},\\; r = ${dr},\\; n = ${n}`,
                steps: [
                  { badge: 'K1', title: lang === 'bm' ? `Sebutan ke-${n} (T_${n})` : `${n}-th Term (T_${n})`, tex: `T_{${n}} = (${a})(${dr})^{${n - 1}} = ${U.roundStr(tn)}`, why: lang === 'bm' ? 'Rumus Tₙ = arⁿ⁻¹.' : 'Formula Tₙ = arⁿ⁻¹.' },
                  { badge: 'K1', title: lang === 'bm' ? `Hasil Tambah S_${n}` : `Sum S_${n}`, tex: dr === 1 ? `S_{${n}} = ${U.roundStr(sn)}` : `S_{${n}} = \\frac{${a}(1 - (${dr})^{${n}})}{1 - (${dr})} = ${U.roundStr(sn)}`, why: lang === 'bm' ? 'Rumus Sₙ JG.' : 'GP sum formula.' },
                  { badge: 'J1', title: lang === 'bm' ? 'Semakan S∞' : 'Sum to Infinity S∞', tex: hasInf ? `S_\\infty = \\frac{${a}}{1 - (${dr})} = ${U.roundStr(sInf)}` : `|r| \\ge 1 \\implies S_\\infty \\text{ tiada}`, why: lang === 'bm' ? 'Wujud hanya jika |r| < 1.' : 'Converges iff |r| < 1.' }
                ],
                finalTex: hasInf ? `T_{${n}} = ${U.roundStr(tn)}, \\; S_{${n}} = ${U.roundStr(sn)}, \\; S_\\infty = ${U.roundStr(sInf)}` : `T_{${n}} = ${U.roundStr(tn)}, \\; S_{${n}} = ${U.roundStr(sn)}`
              };
            }
          }
        }
      ],
      generateQuestion: function (tier, lang) {
        if (tier === 1) {
          const r = U.pick([0.5, 0.25, 0.2, -0.5]);
          const a = U.pick([12, 18, 24, 36]);
          const sInf = a / (1 - r);
          const t2 = a * r;
          const t3 = a * r * r;
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
            intentMeta: { given: `a = ${a}, T₂ = ${t2}`, goal: 'S∞ = a / (1 − r)', conceptRule: 'r = T₂ / T₁, S∞ = a / (1 − r)' },
            guidedSteps: [
              { prompt: { bm: `Cari nisbah sepunya $r = \\frac{T_2}{T_1} = \\frac{${t2}}{${a}}$:`, en: `Find common ratio $r = \\frac{T_2}{T_1} = \\frac{${t2}}{${a}}$:` }, expected: r, hint: { bm: `${t2} ÷ ${a} = ${r}.`, en: `${t2} ÷ ${a} = ${r}.` } },
              { prompt: { bm: `Gantikan ke dalam $S_\\infty = \\frac{${a}}{1 - (${r})}$:`, en: `Evaluate $S_\\infty = \\frac{${a}}{1 - (${r})}$:` }, expected: sInf, hint: { bm: `${a} ÷ ${1 - r} = ${sInf}.`, en: `${a} ÷ ${1 - r} = ${sInf}.` } }
            ],
            traps: [
              { value: a / (1 + r), message: { bm: 'Diagnostik Tanda [K]: Rumus ialah a / (1 − r), hati-hati dengan tanda penolakan pada penyebut!', en: 'Sign Diagnosis [K]: Formula is a / (1 − r), watch the minus sign in the denominator!' } }
            ],
            hints: [
              lang === 'bm' ? `Nisbah sepunya $r = \\frac{${t2}}{${a}} = ${r}$.` : `Common ratio $r = \\frac{${t2}}{${a}} = ${r}$.`,
              lang === 'bm' ? `Gunakan $S_\\infty = \\frac{a}{1 - r}$.` : `Use $S_\\infty = \\frac{a}{1 - r}$.`
            ],
            steps: [
              { badge: 'P1', title: lang === 'bm' ? 'Cari nisbah sepunya r' : 'Find ratio r', tex: `r = \\frac{${t2}}{${a}} = ${r}`, why: lang === 'bm' ? '|r| < 1 disahkan.' : '|r| < 1 verified.' },
              { badge: 'J1', title: lang === 'bm' ? 'Kira S∞' : 'Evaluate S∞', tex: `S_\\infty = \\frac{${a}}{1 - (${r})} = ${U.roundStr(sInf)}`, why: lang === 'bm' ? 'Rumus ketakterhinggaan.' : 'Infinity sum formula.' }
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
            intentMeta: { given: `Sₙ = ${snTex}`, goal: `T_${n} = S_${n} − S_${n - 1}`, conceptRule: 'Tₙ = Sₙ − Sₙ₋₁' },
            guidedSteps: [
              { prompt: { bm: `Kira dahulu jumlah sehingga sebutan ke-${n}, iaitu $S_{${n}}$:`, en: `First calculate $S_{${n}}$:` }, expected: sn, hint: { bm: `${p}(${n})² ${U.signedNum(q)}(${n}) = ${sn}.`, en: `${p}(${n})² ${U.signedNum(q)}(${n}) = ${sn}.` } },
              { prompt: { bm: `Sekarang kira jumlah sehingga sebutan sebelumnya, iaitu $S_{${n - 1}}$:`, en: `Now calculate the preceding sum $S_{${n - 1}}$:` }, expected: snPrev, hint: { bm: `${p}(${n - 1})² ${U.signedNum(q)}(${n - 1}) = ${snPrev}.`, en: `${p}(${n - 1})² ${U.signedNum(q)}(${n - 1}) = ${snPrev}.` } },
              { prompt: { bm: `Tolakkan $S_{${n}} - S_{${n - 1}}$ untuk mendapatkan $T_{${n}}$:`, en: `Subtract $S_{${n}} - S_{${n - 1}}$ to isolate $T_{${n}}$:` }, expected: tn, hint: { bm: `${sn} − ${snPrev} = ${tn}.`, en: `${sn} − ${snPrev} = ${tn}.` } }
            ],
            traps: [
              { value: sn, message: { bm: `Diagnostik Konsep SPM [P]: ${sn} ialah jumlah terkumpul S_${n}, bukannya sebutan tunggal T_${n}! Tolak S_${n - 1} (${snPrev}) daripada S_${n}.`, en: `SPM Concept Diagnosis [P]: ${sn} is cumulative sum S_${n}, not single term T_${n}! Subtract S_${n - 1} (${snPrev}).` } }
            ],
            hints: [
              lang === 'bm' ? `Gunakan hubungan emas: $T_{${n}} = S_{${n}} - S_{${n - 1}}$.` : `Use the golden relation: $T_{${n}} = S_{${n}} - S_{${n - 1}}$.`,
              lang === 'bm' ? `Kira $S_{${n}} = ${sn}$ dan $S_{${n - 1}} = ${snPrev}$.` : `Evaluate $S_{${n}} = ${sn}$ and $S_{${n - 1}} = ${snPrev}$.`
            ],
            steps: [
              { badge: 'K1', title: lang === 'bm' ? `Nilaikan S_${n} dan S_${n - 1}` : `Evaluate S_${n} and S_${n - 1}`, tex: `S_{${n}} = ${sn}, \\quad S_{${n - 1}} = ${snPrev}`, why: lang === 'bm' ? 'Gantikan n dan n−1.' : 'Substitute n and n−1.' },
              { badge: 'J1', title: lang === 'bm' ? 'Tolakkan untuk T_n' : 'Subtract for T_n', tex: `T_{${n}} = ${sn} - ${snPrev} = ${tn}`, why: lang === 'bm' ? 'Tₙ = Sₙ − Sₙ₋₁.' : 'Tₙ = Sₙ − Sₙ₋₁.' }
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
            intentMeta: { given: `a = ${a}, d = ${d}, julat T_${p}..T_${q}`, goal: `S_${q} − S_${p - 1}`, conceptRule: 'Tolak S_(p−1), BUKAN S_p!' },
            guidedSteps: [
              { prompt: { bm: `Untuk menyimpan $T_{${p}}$ di dalam jumlah, kita mesti menolak $S_k$ daripada $S_{${q}}$. Apakah nilai indeks $k$ itu?`, en: `To keep $T_{${p}}$ included when subtracting $S_k$ from $S_{${q}}$, what must index $k$ be?` }, expected: p - 1, hint: { bm: `Kita buang sebutan sebelum ke-${p}, iaitu k = ${p} − 1 = ${p - 1}.`, en: `Remove terms strictly before ${p}, so k = ${p - 1}.` } },
              { prompt: { bm: `Kira nilai $S_{${q}}$ menggunakan $\\frac{${q}}{2}[2(${a}) + ${q - 1}(${d})]$:`, en: `Compute $S_{${q}} = \\frac{${q}}{2}[2(${a}) + ${q - 1}(${d})]$:` }, expected: sq, hint: { bm: `S_${q} = ${sq}.`, en: `S_${q} = ${sq}.` } },
              { prompt: { bm: `Dengan $S_{${p - 1}} = ${spMinus1}$, kira jawapan akhir $S_{${q}} - S_{${p - 1}}$:`, en: `With $S_{${p - 1}} = ${spMinus1}$, compute $S_{${q}} - S_{${p - 1}}$:` }, expected: ans, hint: { bm: `${sq} − ${spMinus1} = ${ans}.`, en: `${sq} − ${spMinus1} = ${ans}.` } }
            ],
            traps: [
              { value: sq - sp, message: { bm: `Diagnostik Sempadan [P]: Anda mengira S_${q} − S_${p} = ${sq - sp}, yang menyebabkan T_${p} ikut terbuang! Anda wajib mengira S_${q} − S_${p - 1}.`, en: `Boundary Diagnosis [P]: You computed S_${q} − S_${p}, accidentally excluding T_${p}! Compute S_${q} − S_${p - 1}.` } }
            ],
            hints: [
              lang === 'bm' ? `Gunakan $S_{${q}} - S_{${p - 1}}$ supaya sebutan ke-$${p}$ tidak terbuang.` : `Use $S_{${q}} - S_{${p - 1}}$ so term $${p}$ stays included.`,
              lang === 'bm' ? `Kira $S_{${q}} = ${sq}$ dan $S_{${p - 1}} = ${spMinus1}$.` : `Evaluate $S_{${q}} = ${sq}$ and $S_{${p - 1}} = ${spMinus1}$.`
            ],
            steps: [
              { badge: 'P1', title: lang === 'bm' ? 'Tetapkan rumus julat' : 'Set range sum formula', tex: `S_{${p} \\to ${q}} = S_{${q}} - S_{${p - 1}}`, why: lang === 'bm' ? 'Kekalkan T_' + p + '.' : 'Keep T_' + p + ' included.' },
              { badge: 'K1', title: lang === 'bm' ? 'Kira kedua-dua hasil tambah' : 'Compute both sums', tex: `S_{${q}} = ${sq}, \\quad S_{${p - 1}} = ${spMinus1}`, why: lang === 'bm' ? 'Rumus Sₙ JA.' : 'AP sum formula.' },
              { badge: 'J1', title: lang === 'bm' ? 'Beza tepat' : 'Subtract', tex: `${sq} - ${spMinus1} = ${ans}`, why: lang === 'bm' ? 'Jawapan akhir.' : 'Final answer.' }
            ]
          };
        }
      }
    }
  ];

  App.chapters.push(...f4Stage1);
})(window.AddMathApp);
