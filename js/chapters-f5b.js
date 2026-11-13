/**
 * AddMath Mudah — Fasa 4: Tingkatan 5 Bab 5 hingga Bab 8 (Lengkap & Dwibahasa BM / EN)
 * Bab 5: Taburan Kebarangkalian | Bab 6: Fungsi Trigonometri | Bab 7: Pengaturcaraan Linear | Bab 8: Kinematik Gerakan Linear
 */
window.AddMathApp = window.AddMathApp || {};
window.AddMathApp.chapters = window.AddMathApp.chapters || [];

(function (App) {
  'use strict';
  const U = App.utils;

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
          title: { bm: '1. Taburan Binomial Diskret X ~ B(n, p)', en: '1. Discrete Binomial Distribution X ~ B(n, p)' },
          body: {
            bm: 'Digunakan bagi **$n$ cubaan tak bersandar** yang hanya mempunyai dua kesudahan: **Berjaya ($p$)** atau **Gagal ($q = 1 - p$)**, dengan $r \\in \\{0, 1, 2, \\dots, n\\}$.',
            en: 'Models **$n$ independent Bernoulli trials** with two outcomes: **Success ($p$)** or **Failure ($q = 1 - p$)**, where $r \\in \\{0, 1, 2, \\dots, n\\}$.'
          },
          formulas: [
            { label: { bm: 'Kebarangkalian Binomial', en: 'Binomial Probability' }, tex: 'P(X = r) = {}^nC_r\\,p^r\\,q^{n-r}, \\qquad p + q = 1' },
            { label: { bm: 'Min, Varians & Sisihan Piawai', en: 'Mean, Variance & Standard Deviation' }, tex: '\\mu = np, \\qquad \\sigma^2 = npq, \\qquad \\sigma = \\sqrt{npq}' }
          ],
          tip: {
            bm: 'Untuk P(X ≥ 1), jalan paling pantas ialah pelengkap: 1 − P(X = 0) = 1 − qⁿ!',
            en: 'For P(X ≥ 1), the fastest shortcut is the complement: 1 − P(X = 0) = 1 − qⁿ!'
          }
        },
        {
          title: { bm: '2. Taburan Normal Selanjar X ~ N(μ, σ²) & Skor-Z', en: '2. Continuous Normal Distribution X ~ N(μ, σ²) & Z-Score' },
          body: {
            bm: 'Bagi pemboleh ubah selanjar (tinggi, jisim, masa), lengkung loceng bersimetri pada min $\\mu$ dengan jumlah luas di bawah lengkung sama dengan $1$. Tukar $X$ kepada **Skor Piawai $Z \\sim N(0, 1)$**!',
            en: 'For continuous variables (height, mass, time), the bell curve is symmetric about $\\mu$ with total area $1$. Standardize $X$ to **$Z \\sim N(0, 1)$**!'
          },
          formulas: [
            { label: { bm: 'Pembolehubah Piawai Skor-Z', en: 'Standard Normal Z-Score' }, tex: 'Z = \\frac{X - \\mu}{\\sigma}' },
            { label: { bm: 'Simetri Ekor Lengkung Normal', en: 'Bell Curve Symmetry Rules' }, tex: 'P(Z < -a) = P(Z > a), \\qquad P(Z > -a) = 1 - P(Z > a)' }
          ],
          tip: {
            bm: 'Hati-hati tatatanda N(μ, σ²): nombor kedua ialah VARIANS σ², jadi punca kuasakan dahulu untuk mendapatkan sisihan piawai σ!',
            en: 'Watch notation N(μ, σ²): the second number is VARIANCE σ² — take its square root to get standard deviation σ!'
          }
        }
      ],
      traps: [
        {
          title: { bm: 'Mengguna Varians σ² Terus sebagai Pembahagi Skor-Z', en: 'Dividing by Variance σ² Instead of σ in Z-Score' },
          desc: {
            bm: 'Jika X ~ N(50, 16), maka σ² = 16 dan sisihan piawai σ = 4 (bukan 16!). Z = (X − 50) / 4.',
            en: 'If X ~ N(50, 16), then σ² = 16 so standard deviation σ = 4 (NOT 16!). Z = (X − 50) / 4.'
          }
        }
      ],
      solvers: [
        {
          id: 'binomial-normal-solver',
          title: { bm: 'Solver Taburan Normal Skor-Z & Kebarangkalian Ekor', en: 'Normal Z-Score & Tail Probability Solver' },
          desc: {
            bm: 'Masukkan nilai X, min μ, dan sisihan piawai σ untuk menjana skor-Z, P(Z < z), dan P(Z > z).',
            en: 'Enter X, mean μ, and standard deviation σ to compute Z-score, P(Z < z), and P(Z > z).'
          },
          inputs: [
            { id: 'x', label: 'Nilai X', default: 68 },
            { id: 'mu', label: 'Min μ', default: 60 },
            { id: 'sd', label: { bm: 'Sisihan piawai σ', en: 'Std Dev σ' }, default: 5 }
          ],
          solve: function (v, lang) {
            const x = Number(v.x) || 0, mu = Number(v.mu) || 0, sd = Math.max(0.1, Math.abs(Number(v.sd) || 1));
            const z = (x - mu) / sd;
            const pLess = U.normalCDF(z);
            const pGreater = 1 - pLess;
            return {
              problemTex: `X \\sim N(${mu},\\; ${U.roundStr(sd * sd)}), \\quad X = ${x}`,
              steps: [
                { badge: 'P1', title: lang === 'bm' ? 'Langkah 1: Piawaikan kepada Skor-Z' : 'Step 1: Standardize to Z-Score', tex: `Z = \\frac{${x} - ${mu}}{${sd}} = ${U.roundStr(z, 3)}`, why: lang === 'bm' ? 'Guna Z = (X − μ) / σ.' : 'Apply Z = (X − μ) / σ.' },
                { badge: 'K1', title: lang === 'bm' ? 'Langkah 2: Kebarangkalian kumulatif kiri P(X < x)' : 'Step 2: Left cumulative probability P(X < x)', tex: `P(Z < ${U.roundStr(z, 3)}) = ${U.roundStr(pLess, 4)}`, why: lang === 'bm' ? 'Luas di sebelah kiri garis Z.' : 'Area to the left of Z.' },
                { badge: 'J1', title: lang === 'bm' ? 'Langkah 3: Kebarangkalian ekor kanan P(X > x)' : 'Step 3: Right-tail probability P(X > x)', tex: `P(Z > ${U.roundStr(z, 3)}) = 1 - ${U.roundStr(pLess, 4)} = ${U.roundStr(pGreater, 4)}`, why: lang === 'bm' ? 'Jumlah luas lengkung normal ialah 1.' : 'Total area under normal curve is 1.' }
              ],
              finalTex: `Z = ${U.roundStr(z, 2)}, \\quad P(X > ${x}) = ${U.roundStr(pGreater, 4)}`
            };
          }
        }
      ],
      generateQuestion: function (tier, lang) {
        if (tier === 1) {
          // Binomial mean & variance -> find SD or variance! Let's make exact clean numbers: n=100, p=0.2 (q=0.8 -> npq=16 -> sd=4) or n=25, p=0.2 (npq=4, sd=2) or n=36, p=0.5 (npq=9, sd=3) or n=64, p=0.5 (npq=16, sd=4)
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
            intentMeta: { given: `n = ${cfg.n}, p = ${cfg.p}, q = ${qVal}`, goal: 'Cari sisihan piawai σ = √(npq)', conceptRule: 'q = 1 − p; σ² = npq; σ = √(npq)' },
            guidedSteps: [
              { prompt: { bm: `Kira varians $\\sigma^2 = npq = (${cfg.n})(${cfg.p})(${qVal})$:`, en: `Compute variance $\\sigma^2 = npq = (${cfg.n})(${cfg.p})(${qVal})$:` }, expected: varVal, hint: { bm: `q = 1 − ${cfg.p} = ${qVal}.`, en: `q = 1 − ${cfg.p} = ${qVal}.` } },
              { prompt: { bm: `Punca kuasakan varians ($\\sqrt{${varVal}}$) untuk mendapat sisihan piawai $\\sigma$:`, en: `Take square root ($\\sqrt{${varVal}}$) for standard deviation $\\sigma$:` }, expected: cfg.sd, hint: { bm: `Kira √${varVal}.`, en: `Compute √${varVal}.` } }
            ],
            traps: [
              { value: varVal, message: { bm: 'Perangkap [J]: Itu ialah varians σ² = npq! Jangan lupa punca kuasakan untuk mendapat sisihan piawai σ.', en: 'Trap [J]: That is variance σ² = npq! Take the square root for standard deviation σ.' } }
            ],
            hints: [lang === 'bm' ? 'Cari q = 1 − p, kemudian kira √(npq).' : 'Find q = 1 − p, then compute √(npq).'],
            steps: [
              { badge: 'P1', title: lang === 'bm' ? 'Kira q = 1 − p' : 'Find q = 1 − p', tex: `q = 1 - ${cfg.p} = ${qVal}`, why: 'Kebarangkalian gagal.' },
              { badge: 'K1', title: lang === 'bm' ? 'Kira varians npq' : 'Compute variance npq', tex: `\\sigma^2 = (${cfg.n})(${cfg.p})(${qVal}) = ${varVal}`, why: 'Rumus varians binomial.' },
              { badge: 'J1', title: lang === 'bm' ? 'Sisihan piawai σ' : 'Standard deviation σ', tex: `\\sigma = \\sqrt{${varVal}} = ${cfg.sd}`, why: 'Punca kuasa dua varians.' }
            ]
          };
        }
        if (tier === 2) {
          // Binomial exact probability P(X = r)
          const n = 5;
          const p = U.pick([0.2, 0.4, 0.5]);
          const r = U.pick([2, 3]);
          const q = U.round(1 - p, 2);
          const prob = U.round(U.nCr(n, r) * Math.pow(p, r) * Math.pow(q, n - r), 4);
          return {
            tier: 2, tpLabel: 'TP3–TP4', subtopic: { bm: '5.2 Kebarangkalian Binomial P(X = r)', en: '5.2 Binomial Probability P(X = r)' }, marks: 3,
            prompt: lang === 'bm'
              ? `Kebarangkalian seorang pemanah mengenai sasaran dalam satu panahan ialah $${p}$. Jika dia melepaskan **$${n}$ panahan** secara bebas, cari kebarangkalian dia mengenai sasaran **tepat $${r}$ kali** (bundarkan kepada 4 tempat perpuluhan).`
              : `The probability an archer hits the target on any shot is $${p}$. In **$${n}$ independent shots**, find the probability of hitting **exactly $${r}$ times** (to 4 d.p.).`,
            answerType: 'number', tolerance: 0.002, correctValue: prob, displayAnswerTex: `P(X=${r}) = ${prob}`,
            intentMeta: { given: `n = ${n}, p = ${p}, q = ${q}, r = ${r}`, goal: 'Kira ⁵Cᵣ pʳ q⁵⁻ʳ', conceptRule: 'P(X = r) = ⁿCᵣ pʳ qⁿ⁻ʳ' },
            guidedSteps: [
              { prompt: { bm: `Berapakah nilai pekali gabungan $^{${n}}C_{${r}}$?`, en: `What is the combination coefficient $^{${n}}C_{${r}}$?` }, expected: U.nCr(n, r), hint: { bm: `⁵C₂ = 10 dan ⁵C₃ = 10.`, en: `⁵C₂ = 10 and ⁵C₃ = 10.` } },
              { prompt: { bm: `Darabkan $^{${n}}C_{${r}} \\times (${p})^{${r}} \\times (${q})^{${n - r}}$ (4 t.p.):`, en: `Multiply $^{${n}}C_{${r}} \\times (${p})^{${r}} \\times (${q})^{${n - r}}$ (4 d.p.):` }, expected: prob, hint: { bm: `Kira ${U.nCr(n, r)} × ${U.roundStr(Math.pow(p, r), 4)} × ${U.roundStr(Math.pow(q, n - r), 4)}.`, en: `Evaluate ${U.nCr(n, r)} × ${U.roundStr(Math.pow(p, r), 4)} × ${U.roundStr(Math.pow(q, n - r), 4)}.` } }
            ],
            traps: [
              { value: U.round(Math.pow(p, r) * Math.pow(q, n - r), 4), message: { bm: 'Perangkap [P]: Anda terlupa mendarab pekali gabungan ⁿCᵣ di hadapan!', en: 'Trap [P]: You forgot the ⁿCᵣ combination factor in front!' } }
            ],
            hints: [lang === 'bm' ? 'Guna P(X = r) = ⁿCᵣ pʳ (1 − p)ⁿ⁻ʳ.' : 'Apply P(X = r) = ⁿCᵣ pʳ (1 − p)ⁿ⁻ʳ.'],
            steps: [
              { badge: 'P1', title: lang === 'bm' ? 'Gantikan ke dalam rumus Binomial' : 'Substitute into Binomial formula', tex: `P(X=${r}) = \\,^{${n}}C_{${r}}(${p})^{${r}}(${q})^{${n - r}}`, why: 'q = 1 − p.' },
              { badge: 'J1', title: lang === 'bm' ? 'Kebarangkalian tepat' : 'Exact probability', tex: `= ${U.nCr(n, r)} \\times ${U.roundStr(Math.pow(p, r), 4)} \\times ${U.roundStr(Math.pow(q, n - r), 4)} = ${prob}`, why: '4 t.p.' }
            ]
          };
        }
        // Tier 3 KBAT: Normal Distribution N(mu, sigma^2) right-tail probability with Variance Trap!
        const mu = U.pick([50, 60, 100]);
        const sd = U.pick([4, 5, 8]);
        const zTarget = U.pick([1.0, 1.25, 1.5]);
        const xCut = mu + zTarget * sd;
        const ans = U.round(1 - U.normalCDF(zTarget), 4);
        const varTrapZ = (xCut - mu) / (sd * sd);
        const varTrapAns = U.round(1 - U.normalCDF(varTrapZ), 4);
        return {
          tier: 3, tpLabel: 'TP5–TP6 (KBAT)', subtopic: { bm: '5.3 Taburan Normal N(μ, σ²) & Skor-Z', en: '5.3 Normal Distribution N(μ, σ²) & Z-Score' }, marks: 4,
          prompt: lang === 'bm'
            ? `Markah ujian sekumpulan pelajar bertaburan secara normal mengikut $X \\sim N(${mu},\\; ${sd * sd})$. Cari kebarangkalian seorang pelajar yang dipilih secara rawak mendapat markah **melebihi $${xCut}$**, iaitu $P(X > ${xCut})$ (bundarkan kepada 4 tempat perpuluhan).`
            : `Test scores of students follow a normal distribution $X \\sim N(${mu},\\; ${sd * sd})$. Find the probability that a randomly chosen student scores **more than $${xCut}$**, i.e. $P(X > ${xCut})$ (to 4 d.p.).`,
          answerType: 'number', tolerance: 0.002, correctValue: ans, displayAnswerTex: `P(Z > ${zTarget}) = ${ans}`,
          intentMeta: { given: `X \\sim N(${mu}, ${sd * sd}) \\implies \\mu=${mu}, \\sigma=${sd}`, goal: 'Tukar X kepada Z dan kira ekor kanan P(Z > z)', conceptRule: 'Ingat σ = √(σ²)! Z = (X − μ) / σ' },
          guidedSteps: [
            { prompt: { bm: `Perhatikan tatatanda $N(${mu}, ${sd * sd})$ memberi $\\sigma^2 = ${sd * sd}$, maka $\\sigma = ${sd}$. Kira skor-$Z = \\frac{${xCut} - ${mu}}{${sd}}$:`, en: `Note $N(${mu}, ${sd * sd})$ gives $\\sigma^2 = ${sd * sd}$, so $\\sigma = ${sd}$. Compute $Z = \\frac{${xCut} - ${mu}}{${sd}}$:` }, expected: zTarget, hint: { bm: `Bahagi ${xCut - mu} dengan ${sd}.`, en: `Divide ${xCut - mu} by ${sd}.` } },
            { prompt: { bm: `Cari kebarangkalian ekor kanan $P(Z > ${zTarget})$ (4 t.p.):`, en: `Find the upper-tail probability $P(Z > ${zTarget})$ (4 d.p.):` }, expected: ans, hint: { bm: `Daripada jadual normal piawai, P(Z > ${zTarget}) ≈ ${ans}.`, en: `From standard normal table, P(Z > ${zTarget}) ≈ ${ans}.` } }
          ],
          traps: [
            { value: varTrapAns, message: { bm: `Perangkap Klasik SPM [P]: Dalam N(${mu}, ${sd * sd}), nombor ${sd * sd} ialah VARIANS σ²! Anda mesti membahagi dengan sisihan piawai σ = √${sd * sd} = ${sd}.`, en: `Classic SPM Trap [P]: In N(${mu}, ${sd * sd}), ${sd * sd} is VARIANCE σ²! Divide by σ = √${sd * sd} = ${sd}.` } },
            { value: U.round(U.normalCDF(zTarget), 4), message: { bm: 'Perangkap [K]: Itu ialah luas kiri P(Z < z)! Bagi P(Z > z), tolak daripada 1.', en: 'Trap [K]: That is left area P(Z < z)! Subtract from 1 for upper tail P(Z > z).' } }
          ],
          hints: [lang === 'bm' ? 'Ambil σ = √(σ²) dahulu, kira Z, kemudian cari ekor atas P(Z > z).' : 'Take σ = √(σ²) first, compute Z, then find upper tail P(Z > z).'],
          steps: [
            { badge: 'P1', title: lang === 'bm' ? 'Kenal pasti σ dan tukar ke skor-Z' : 'Identify σ and standardize to Z', tex: `\\sigma = \\sqrt{${sd * sd}} = ${sd}, \\qquad Z = \\frac{${xCut} - ${mu}}{${sd}} = ${zTarget}`, why: 'Elak perangkap varians!' },
            { badge: 'J1', title: lang === 'bm' ? 'Kebarangkalian ekor kanan' : 'Upper-tail probability', tex: `P(X > ${xCut}) = P(Z > ${zTarget}) = ${ans}`, why: 'Jadual Taburan Normal Piawai.' }
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
        bm: 'Suku ASTC, sec/csc/cot, identiti Pythagoras, sudut majmuk/berganda & lakaran gelombang',
        en: 'ASTC quadrants, sec/csc/cot, Pythagorean identities, compound/double angles & wave graphs'
      },
      spmWeight: { bm: 'Kertas 1 & Kertas 2 (8–12 markah)', en: 'Paper 1 & Paper 2 (8–12 marks)' },
      concepts: [
        {
          title: { bm: '1. Suku ASTC, Nisbah Salingan & Identiti Pythagoras', en: '1. ASTC Quadrants, Reciprocal Ratios & Pythagorean Identities' },
          body: {
            bm: 'Gunakan peraturan **ASTC** (*Add Sugar To Coffee*): Sukuan I (**Semua +**), Sukuan II (**sin +**), Sukuan III (**tan +**), Sukuan IV (**kos +**). Perhatikan huruf ketiga bagi nisbah salingan!',
            en: 'Use **ASTC** (*All Students Take Calculus*): Q1 (**All +**), Q2 (**sin +**), Q3 (**tan +**), Q4 (**cos +**). Check the 3rd letter for reciprocal functions!'
          },
          formulas: [
            { label: { bm: 'Nisbah Salingan', en: 'Reciprocal Ratios' }, tex: '\\sec\\theta = \\frac{1}{\\cos\\theta}, \\qquad \\csc\\theta = \\frac{1}{\\sin\\theta}, \\qquad \\cot\\theta = \\frac{1}{\\tan\\theta} = \\frac{\\cos\\theta}{\\sin\\theta}' },
            { label: { bm: '3 Identiti Asas Pythagoras', en: '3 Core Pythagorean Identities' }, tex: '\\sin^2 A + \\cos^2 A = 1, \\qquad 1 + \\tan^2 A = \\sec^2 A, \\qquad 1 + \\cot^2 A = \\csc^2 A' }
          ],
          tip: {
            bm: 'Bilangan penyelesaian persamaan trig pada [0, 2π] boleh disemak dengan mengira titik persilangan antara graf gelombang dan garis lurus!',
            en: 'Count roots of trig equations on [0, 2π] visually by counting intersections between the wave graph and a straight line!'
          }
        },
        {
          title: { bm: '2. Rumus Sudut Berganda & Parameter Gelombang y = a sin(bx) + c', en: '2. Double-Angle Formulas & Wave Graph y = a sin(bx) + c' },
          body: {
            bm: 'Bagi gelombang $y = a\\sin(bx) + c$ atau $y = a\\cos(bx) + c$: **amplitud** $= |a|$, **bilangan kitaran** dalam $360^\\circ$ ($2\\pi$) ialah $b$ (tempoh $= \\frac{360^\\circ}{b}$), dan **anjakan mencancang** ialah $c$.',
            en: 'For $y = a\\sin(bx) + c$ or $y = a\\cos(bx) + c$: **amplitude** $= |a|$, **cycles** in $360^\\circ$ ($2\\pi$) is $b$ (period $= \\frac{360^\\circ}{b}$), and **vertical shift** is $c$.'
          },
          formulas: [
            { label: { bm: 'Rumus Sudut Berganda', en: 'Double-Angle Formulas' }, tex: '\\sin 2A = 2\\sin A\\cos A, \\qquad \\cos 2A = \\cos^2 A - \\sin^2 A = 2\\cos^2 A - 1 = 1 - 2\\sin^2 A' },
            { label: { bm: 'Tangen Sudut Berganda', en: 'Double-Angle Tangent' }, tex: '\\tan 2A = \\frac{2\\tan A}{1 - \\tan^2 A}' }
          ],
          tip: {
            bm: 'Jangan sekali-kali memansuhkan sin x daripada sin 2x = sin x dengan membahagi! Faktorkan 2 sin x cos x − sin x = 0 supaya punca sin x = 0 tidak hilang!',
            en: 'Never divide out sin x in sin 2x = sin x! Factor sin x(2 cos x − 1) = 0 so you never lose the sin x = 0 roots!'
          }
        }
      ],
      traps: [
        {
          title: { bm: 'Hilang Punca Kerana Membahagi Pemboleh Ubah Trig', en: 'Losing Roots by Dividing Out Trig Expressions' },
          desc: {
            bm: 'Membahagi kedua-dua belah dengan cos θ menghapuskan punca cos θ = 0 (90°, 270°). Sentiasa bawa ke sebelah kiri dan faktorkan!',
            en: 'Dividing both sides by cos θ erases cos θ = 0 (90°, 270°). Always move terms to one side and factorize!'
          }
        }
      ],
      solvers: [
        {
          id: 'trig-double-solver',
          title: { bm: 'Solver Segi Tiga Suku ASTC & Sudut Berganda (sin 2A, kos 2A)', en: 'ASTC Quadrant & Double-Angle Exact Solver' },
          desc: {
            bm: 'Diberi sin A = p/q dan sukuan A (1–4), jana nilai tepat kos A, tan A, sin 2A & kos 2A.',
            en: 'Given sin A = p/q and quadrant (1–4), generate exact cos A, tan A, sin 2A & cos 2A.'
          },
          inputs: [
            { id: 'opp', label: { bm: 'Pengangka |p|', en: 'Numerator |p|' }, default: 3 },
            { id: 'hyp', label: { bm: 'Hipotenus q (>|p|)', en: 'Hypotenuse q (>|p|)' }, default: 5 },
            { id: 'quad', label: { bm: 'Sukuan (1, 2, 3, 4)', en: 'Quadrant (1, 2, 3, 4)' }, default: 2 }
          ],
          solve: function (v, lang) {
            const pAbs = Math.abs(Number(v.opp) || 3);
            const q = Math.max(pAbs + 1, Math.abs(Number(v.hyp) || 5));
            const quad = [1, 2, 3, 4].includes(Math.round(Number(v.quad))) ? Math.round(Number(v.quad)) : 2;
            const adjAbs = Math.sqrt(q * q - pAbs * pAbs);
            const sinSgn = (quad === 1 || quad === 2) ? 1 : -1;
            const cosSgn = (quad === 1 || quad === 4) ? 1 : -1;
            const sinA = (sinSgn * pAbs) / q;
            const cosA = (cosSgn * adjAbs) / q;
            const sin2A = 2 * sinA * cosA;
            const cos2A = cosA * cosA - sinA * sinA;
            return {
              problemTex: `|\\sin A| = \\frac{${pAbs}}{${q}}, \\quad \\text{Sukuan } ${quad}`,
              steps: [
                { badge: 'P1', title: lang === 'bm' ? 'Langkah 1: Teorem Pythagoras & tanda ASTC' : 'Step 1: Pythagoras & ASTC signs', tex: `\\text{Sisi bersebelahan} = \\sqrt{${q}^2 - ${pAbs}^2} = ${U.roundStr(adjAbs, 3)} \\implies \\sin A = ${U.roundStr(sinA, 4)},\\; \\cos A = ${U.roundStr(cosA, 4)}`, why: lang === 'bm' ? `Sukuan ${quad} menentukan tanda positif/negatif.` : `Quadrant ${quad} fixes the ASTC signs.` },
                { badge: 'K1', title: lang === 'bm' ? 'Langkah 2: Kira sin 2A = 2 sin A kos A' : 'Step 2: Compute sin 2A = 2 sin A cos A', tex: `\\sin 2A = 2(${U.roundStr(sinA, 4)})(${U.roundStr(cosA, 4)}) = ${U.roundStr(sin2A, 4)}`, why: lang === 'bm' ? 'Rumus sudut berganda sinus.' : 'Sine double-angle identity.' },
                { badge: 'J1', title: lang === 'bm' ? 'Langkah 3: Kira kos 2A = kos²A − sin²A' : 'Step 3: Compute cos 2A = cos²A − sin²A', tex: `\\cos 2A = (${U.roundStr(cosA, 4)})^2 - (${U.roundStr(sinA, 4)})^2 = ${U.roundStr(cos2A, 4)}`, why: lang === 'bm' ? 'Rumus sudut berganda kosinus.' : 'Cosine double-angle identity.' }
              ],
              finalTex: `\\sin 2A = ${U.roundStr(sin2A, 4)}, \\quad \\cos 2A = ${U.roundStr(cos2A, 4)}`
            };
          }
        }
      ],
      generateQuestion: function (tier, lang) {
        if (tier === 1) {
          const a = U.pick([-4, -3, 2, 3, 5]);
          const b = U.pick([2, 3, 4]);
          const c = U.randInt(1, 4);
          const yMax = Math.abs(a) + c;
          return {
            tier: 1, tpLabel: 'TP1–TP2', subtopic: { bm: '6.3 Amplitud & Nilai Maksimum Gelombang', en: '6.3 Amplitude & Maximum Value of Wave' }, marks: 2,
            prompt: lang === 'bm'
              ? `Diberi fungsi trigonometri $y = ${a}\\sin(${b}x) + ${c}$. Cari **nilai maksimum** bagi $y$.`
              : `Given the trigonometric function $y = ${a}\\sin(${b}x) + ${c}$. Find the **maximum value** of $y$.`,
            answerType: 'number', correctValue: yMax, displayAnswerTex: `y_{\\max} = |${a}| + ${c} = ${yMax}`,
            intentMeta: { given: `y = ${a}\\sin(${b}x) + ${c}`, goal: 'Cari puncak maksimum |a| + c', conceptRule: 'Amplitud ialah |a| (sentiasa positif!), maka y_max = |a| + c' },
            guidedSteps: [
              { prompt: { bm: `Apakah **amplitud** ($|a|$) bagi gelombang $y = ${a}\\sin(${b}x) + ${c}$?`, en: `What is the **amplitude** ($|a|$) of $y = ${a}\\sin(${b}x) + ${c}$?` }, expected: Math.abs(a), hint: { bm: `Amplitud sentiasa positif: |${a}|.`, en: `Amplitude is always positive: |${a}|.` } },
              { prompt: { bm: `Tambahkan anjakan mencancang $+${c}$ kepada amplitud untuk nilai maksimum $y$:`, en: `Add vertical shift $+${c}$ to the amplitude for maximum $y$:` }, expected: yMax, hint: { bm: `Kira ${Math.abs(a)} + ${c}.`, en: `Compute ${Math.abs(a)} + ${c}.` } }
            ],
            traps: [
              { value: a + c, message: { bm: 'Perangkap [P]: Walaupun pekali depan negatif, sin(bx) boleh bernilai −1 menjadikan hasil darab positif! y_max = |a| + c.', en: 'Trap [P]: Even when a < 0, sin(bx) reaches −1 making the product positive! y_max = |a| + c.' } }
            ],
            hints: [lang === 'bm' ? 'Nilai maksimum ialah |a| + c.' : 'Maximum value is |a| + c.'],
            steps: [
              { badge: 'P1', title: lang === 'bm' ? 'Amplitud |a|' : 'Amplitude |a|', tex: `|a| = |${a}| = ${Math.abs(a)}`, why: 'Julat sin(bx) ialah [−1, 1].' },
              { badge: 'J1', title: lang === 'bm' ? 'Nilai maksimum y' : 'Maximum y', tex: `y_{\\max} = ${Math.abs(a)} + ${c} = ${yMax}`, why: 'Puncak gelombang.' }
            ]
          };
        }
        if (tier === 2) {
          // Double angle exact value in Quadrant II (obtuse angle): sin A = 3/5 or 5/13 or 4/5 -> find sin 2A or cos 2A
          const trip = U.pick([
            { opp: 3, adj: 4, hyp: 5 },
            { opp: 4, adj: 3, hyp: 5 },
            { opp: 5, adj: 12, hyp: 13 }
          ]);
          // Angle A is obtuse (90° < A < 180°, Quadrant II): sin A = +opp/hyp, cos A = -adj/hyp -> sin 2A = -2*opp*adj / hyp^2
          const sin2A = U.round((-2 * trip.opp * trip.adj) / (trip.hyp * trip.hyp), 4);
          return {
            tier: 2, tpLabel: 'TP3–TP4', subtopic: { bm: '6.5 Sudut Berganda & Sukuan ASTC', en: '6.5 Double-Angle & ASTC Quadrant' }, marks: 4,
            prompt: lang === 'bm'
              ? `Diberi $\\sin A = \\frac{${trip.opp}}{${trip.hyp}}$ dan $A$ ialah **sudut cakah** ($90^\\circ < A < 180^\\circ$). Tanpa menggunakan kalkulator untuk mencari sudut $A$, cari nilai bagi **$\\sin 2A$** (boleh beri pecahan atau perpuluhan).`
              : `Given $\\sin A = \\frac{${trip.opp}}{${trip.hyp}}$ where $A$ is an **obtuse angle** ($90^\\circ < A < 180^\\circ$). Find the exact value of **$\\sin 2A$** (fraction or decimal accepted).`,
            answerType: 'number', tolerance: 0.002, correctValue: sin2A, displayAnswerTex: `\\sin 2A = ${U.fracTex(-2 * trip.opp * trip.adj, trip.hyp * trip.hyp)} = ${sin2A}`,
            intentMeta: { given: `\\sin A = ${trip.opp}/${trip.hyp},\\; A \\in Q2`, goal: 'Cari kos A (negatif dalam Q2!) dan kira 2 sin A kos A', conceptRule: 'Dalam Sukuan II (cakah), kos A adalah NEGATIF!' },
            guidedSteps: [
              { prompt: { bm: `Oleh sebab $A$ berada dalam Sukuan II, apakah nilai $\\cos A$ (termasuk tanda negatif)?`, en: `Since $A$ lies in Quadrant II, what is $\\cos A$ (including negative sign)?` }, expected: U.round(-trip.adj / trip.hyp, 4), hint: { bm: `Sisi bersebelahan ialah ${trip.adj}, maka kos A = −${trip.adj}/${trip.hyp}.`, en: `Adjacent side is ${trip.adj}, so cos A = −${trip.adj}/${trip.hyp}.` } },
              { prompt: { bm: `Guna rumus $\\sin 2A = 2\\sin A\\cos A$:`, en: `Evaluate $\\sin 2A = 2\\sin A\\cos A$:` }, expected: sin2A, hint: { bm: `Kira 2 × (${trip.opp}/${trip.hyp}) × (−${trip.adj}/${trip.hyp}).`, en: `Compute 2 × (${trip.opp}/${trip.hyp}) × (−${trip.adj}/${trip.hyp}).` } }
            ],
            traps: [
              { value: Math.abs(sin2A), message: { bm: 'Perangkap ASTC [J]: Sudut cakah berada dalam Sukuan II di mana kos A adalah NEGATIF, maka sin 2A mesti negatif!', en: 'ASTC Trap [J]: Obtuse angle A is in Quadrant II where cos A is NEGATIVE, so sin 2A is negative!' } }
            ],
            hints: [lang === 'bm' ? 'Dalam Sukuan II, kos A = −bersebelahan/hipotenus. Kemudian guna 2 sin A kos A.' : 'In Q2, cos A is negative. Then apply 2 sin A cos A.'],
            steps: [
              { badge: 'P1', title: lang === 'bm' ? 'Tentukan kos A dalam Sukuan II' : 'Find cos A in Quadrant II', tex: `\\cos A = -\\frac{${trip.adj}}{${trip.hyp}}`, why: 'Hanya sin positif dalam Sukuan II.' },
              { badge: 'K1', title: lang === 'bm' ? 'Ganti ke dalam sin 2A = 2 sin A kos A' : 'Substitute into sin 2A = 2 sin A cos A', tex: `\\sin 2A = 2\\left(\\frac{${trip.opp}}{${trip.hyp}}\\right)\\left(-\\frac{${trip.adj}}{${trip.hyp}}\\right)`, why: 'Rumus sudut berganda.' },
              { badge: 'J1', title: lang === 'bm' ? 'Nilai tepat' : 'Exact value', tex: `= ${U.fracTex(-2 * trip.opp * trip.adj, trip.hyp * trip.hyp)}`, why: 'Tepat.' }
            ]
          };
        }
        // Tier 3 KBAT: Number of solutions of |2 sin(bx)| = k or 2 cos(bx) + 1 = 0 on [0, 2pi]
        const b = U.pick([2, 3]);
        // Equation: sin(bx) = 1/2 for 0 <= x <= 360° -> each cycle of sin has 2 solutions for 1/2, so b cycles give 2b solutions!
        const rootsCount = 2 * b;
        return {
          tier: 3, tpLabel: 'TP5–TP6 (KBAT)', subtopic: { bm: '6.6 Bilangan Penyelesaian Persamaan Trigonometri', en: '6.6 Counting Roots via Wave Sketching' }, marks: 4,
          prompt: lang === 'bm'
            ? `Berapakah **bilangan penyelesaian** bagi persamaan $2\\sin(${b}x) - 1 = 0$ dalam julat $0^\\circ \\le x \\le 360^\\circ$?`
            : `How many **solutions (roots)** does the equation $2\\sin(${b}x) - 1 = 0$ have in the interval $0^\\circ \\le x \\le 360^\\circ$?`,
          answerType: 'number', correctValue: rootsCount, displayAnswerTex: `${rootsCount}\\text{ penyelesaian}`,
          intentMeta: { given: `\\sin(${b}x) = \\frac{1}{2},\\; 0^\\circ \\le x \\le 360^\\circ`, goal: 'Kira bilangan persilangan gelombang sin(bx) dengan garis y = 1/2', conceptRule: 'Terdapat b kitaran penuh dalam 360°, setiap kitaran memotong y = 0.5 sebanyak 2 kali' },
          guidedSteps: [
            { prompt: { bm: `Berapakah **bilangan kitaran penuh** bagi $y = \\sin(${b}x)$ dalam $0^\\circ \\le x \\le 360^\\circ$?`, en: `How many **complete cycles** does $y = \\sin(${b}x)$ make on $0^\\circ \\le x \\le 360^\\circ$?` }, expected: b, hint: { bm: `Pekali sudut ialah b = ${b}.`, en: `Coefficient of x is b = ${b}.` } },
            { prompt: { bm: `Setiap 1 kitaran gelombang sinus memotong garis mengufuk $y = 0.5$ sebanyak $2$ kali. Berapakah jumlah persilangan bagi $${b}$ kitaran?`, en: `Each sine cycle crosses $y = 0.5$ twice. How many total intersections across $${b}$ cycles?` }, expected: rootsCount, hint: { bm: `Darab ${b} × 2.`, en: `Multiply ${b} × 2.` } }
          ],
          traps: [
            { value: 2, message: { bm: `Perangkap [P]: 2 punca hanya untuk 1 kitaran! Oleh sebab sudut ialah ${b}x, julat 0° ≤ ${b}x ≤ ${360 * b}° mempunyai ${b} kitaran.`, en: `Trap [P]: 2 roots is for 1 cycle! Since angle is ${b}x, 0° ≤ ${b}x ≤ ${360 * b}° spans ${b} cycles.` } }
          ],
          hints: [lang === 'bm' ? 'Tulis semula sin(bx) = 0.5. Setiap satu daripada b kitaran memberi 2 persilangan!' : 'Rewrite sin(bx) = 0.5. Each of the b cycles yields 2 intersections!'],
          steps: [
            { badge: 'P1', title: lang === 'bm' ? 'Susun semula persamaan garis' : 'Rearrange for line intersection', tex: `\\sin(${b}x) = \\frac{1}{2}`, why: 'Persilangan gelombang y = sin(bx) dengan y = 0.5.' },
            { badge: 'K1', title: lang === 'bm' ? 'Kira kitaran dalam 0° ≤ x ≤ 360°' : 'Count cycles in 0° ≤ x ≤ 360°', tex: `\\text{Bilangan kitaran} = ${b}`, why: 'Setiap kitaran memotong y = 0.5 pada Q1 & Q2.' },
            { badge: 'J1', title: lang === 'bm' ? 'Jumlah penyelesaian' : 'Total number of roots', tex: `${b} \\times 2 = ${rootsCount}`, why: 'Tepat.' }
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
        bm: 'Menterjemah kekangan ketaksamaan, melorek rantau tersaur R & mengoptimumkan k = ax + by',
        en: 'Translating constraint inequalities, shading feasible region R & optimizing k = ax + by'
      },
      spmWeight: { bm: 'Kertas 2 Bhg C Pilihan Popular (10 markah!)', en: 'Paper 2 Sec C Top Scorer (10 marks!)' },
      concepts: [
        {
          title: { bm: '1. Kamus Terjemahan Ayat kepada Ketaksamaan Matematik', en: '1. Translating Word Constraints into Inequalities' },
          body: {
            bm: 'Kunci skor 10 markah penuh ialah menterjemah setiap kekangan ayat dengan tanda ketaksamaan dan jenis garis sempadan yang betul:',
            en: 'Scoring 10/10 starts with translating verbal phrases into accurate inequalities and boundary line styles:'
          },
          formulas: [
            { label: { bm: 'Selebih-lebihnya / Tidak Melebihi / Maksimum', en: 'At Most / Does Not Exceed / Maximum' }, tex: 'x + y \\le k \\quad (\\text{Garis padu } \\le,\\; \\text{lorek bawah})' },
            { label: { bm: 'Sekurang-kurangnya / Tidak Kurang Daripada', en: 'At Least / Minimum / Not Less Than' }, tex: 'x + y \\ge k \\quad (\\text{Garis padu } \\ge,\\; \\text{lorek atas})' },
            { label: { bm: 'Ketaksamaan Tegas (< atau >)', en: 'Strict Inequality (< or >)' }, tex: 'y < 2x \\quad (\\text{Garis SEMPADAN PUTUS-PUTUS!})' }
          ],
          tip: {
            bm: 'Sentiasa semak: "y melebihi x selebih-lebihnya k" bermaksud y − x ≤ k!',
            en: 'Watch phrasing: "y exceeds x by at most k" translates to y − x ≤ k!'
          }
        },
        {
          title: { bm: '2. Rantau Tersaur R & Pengoptimuman Bucu k = ax + by', en: '2. Feasible Region R & Corner Vertex Optimization' },
          body: {
            bm: 'Nilai maksimum atau minimum bagi fungsi objektif $k = ax + by$ berlaku pada **bucu-bucu (verteks)** rantau tersaur $R$. Jika $x$ dan $y$ mewakili bilangan orang, kerusi, atau bungkusan, koordinat $(x, y)$ **wajib bernilai integer** di dalam $R$!',
            en: 'Optimal values of $k = ax + by$ occur at the **corner vertices** of feasible region $R$. If $x, y$ represent discrete objects (people, chairs, boxes), only **integer coordinates $(x, y)$ inside $R$** are valid!'
          },
          formulas: [
            { label: { bm: 'Fungsi Objektif Keuntungan / Kos', en: 'Profit / Cost Objective Function' }, tex: 'k = ax + by \\quad \\longrightarrow \\quad \\text{Uji semua bucu }(x, y) \\in R' }
          ],
          tip: {
            bm: 'Jangan pilih titik di atas garis putus-putus (< atau >) kerana titik sempadan garis putus-putus TIDAK termasuk dalam rantau R!',
            en: 'Points lying directly on a dashed boundary line (< or >) are EXCLUDED from feasible region R!'
          }
        }
      ],
      traps: [
        {
          title: { bm: 'Memilih Koordinat Perpuluhan bagi Objek Diskret', en: 'Picking Non-Integer Coordinates for Discrete Items' },
          desc: {
            bm: 'Jika bucu persilangan ialah (12.5, 17.5) bagi bilangan meja dan kerusi, anda TIDAK boleh membeli 12.5 meja! Pilih titik integer terdekat DI DALAM rantau R.',
            en: 'If lines intersect at (12.5, 17.5) tables and chairs, you cannot make 0.5 tables! Test nearby integer points INSIDE region R.'
          }
        }
      ],
      solvers: [
        {
          id: 'lp-vertex-optimizer',
          title: { bm: 'Pengoptimum Bucu Rantau Tersaur (k = ax + by)', en: 'Feasible Region Corner Optimizer (k = ax + by)' },
          desc: {
            bm: 'Bagi kekangan x ≥ 0, y ≥ 0, x + y ≤ S, dan 2x + y ≤ M, cari kesemua bucu R dan keuntungan maksimum k = px + qy.',
            en: 'For x ≥ 0, y ≥ 0, x + y ≤ S, and 2x + y ≤ M, find all corner vertices and maximize profit k = px + qy.'
          },
          inputs: [
            { id: 'S', label: 'Had x + y ≤ S', default: 50 },
            { id: 'M', label: 'Had 2x + y ≤ M', default: 80 },
            { id: 'p', label: 'Untung x (RM p)', default: 30 },
            { id: 'q', label: 'Untung y (RM q)', default: 20 }
          ],
          solve: function (v, lang) {
            const S = Math.max(5, Number(v.S) || 50);
            const M = Math.max(5, Number(v.M) || 80);
            const p = Number(v.p) || 30, q = Number(v.q) || 20;
            const candidates = [
              [0, 0],
              [0, Math.min(S, M)],
              [Math.min(S, M / 2), 0]
            ];
            // Intersection of x + y = S and 2x + y = M -> x = M - S, y = 2S - M
            const ix = M - S, iy = 2 * S - M;
            if (ix >= 0 && iy >= 0) candidates.push([ix, iy]);

            let bestPt = candidates[0], bestK = -Infinity;
            const evalRows = candidates.map(([cx, cy]) => {
              const kv = p * cx + q * cy;
              if (kv > bestK) { bestK = kv; bestPt = [cx, cy]; }
              return `(${U.roundStr(cx)}, ${U.roundStr(cy)}) \\to ${U.roundStr(kv)}`;
            });

            return {
              problemTex: `x+y \\le ${S},\\; 2x+y \\le ${M},\\; x,y \\ge 0; \\quad \\max k = ${p}x + ${q}y`,
              steps: [
                { badge: 'P1', title: lang === 'bm' ? 'Langkah 1: Kenal pasti bucu-bucu rantau R' : 'Step 1: Identify corner vertices of R', tex: candidates.map((pt) => `(${U.roundStr(pt[0])}, ${U.roundStr(pt[1])})`).join(',\\; '), why: lang === 'bm' ? 'Pintasan paksi & persilangan dua sempadan.' : 'Axis intercepts & boundary intersection.' },
                { badge: 'K1', title: lang === 'bm' ? 'Langkah 2: Uji fungsi objektif k pada setiap bucu' : 'Step 2: Evaluate objective k at each vertex', tex: evalRows.join(', \\quad '), why: lang === 'bm' ? 'Bandingkan nilai k = px + qy.' : 'Compare k = px + qy at every vertex.' },
                { badge: 'J1', title: lang === 'bm' ? 'Langkah 3: Titik & nilai optimum' : 'Step 3: Optimal point & maximum k', tex: `k_{\\max} = ${U.roundStr(bestK)} \\quad \\text{pada } (${U.roundStr(bestPt[0])}, ${U.roundStr(bestPt[1])})`, why: lang === 'bm' ? 'Nilai tertinggi dalam rantau R.' : 'Highest objective value in R.' }
              ],
              finalTex: `k_{\\max} = \\text{RM }${U.roundStr(bestK)} \\text{ pada } (${U.roundStr(bestPt[0])}, ${U.roundStr(bestPt[1])})`
            };
          }
        }
      ],
      generateQuestion: function (tier, lang) {
        if (tier === 1) {
          return {
            tier: 1, tpLabel: 'TP1–TP2', subtopic: { bm: '7.1 Menterjemah Kekangan Ayat kepada Ketaksamaan', en: '7.1 Translating Verbal Constraints to Inequalities' }, marks: 2,
            prompt: lang === 'bm'
              ? `Sebuah bengkel menghasilkan $x$ buah meja dan $y$ buah kerusi. Bilangan kerusi adalah **sekurang-kurangnya $2$ kali** bilangan meja. Pilih ketaksamaan yang betul:\n` +
                `**1)** $y \\ge 2x$   |   **2)** $y \\le 2x$   |   **3)** $x \\ge 2y$\n*(Taip nombor pilihan 1, 2, atau 3)*`
              : `A workshop produces $x$ tables and $y$ chairs. The number of chairs is **at least twice** the number of tables. Choose the correct inequality:\n` +
                `**1)** $y \\ge 2x$   |   **2)** $y \\le 2x$   |   **3)** $x \\ge 2y$\n*(Enter option 1, 2, or 3)*`,
            answerType: 'choice', correctValue: '1', displayAnswerTex: '1)\\; y \\ge 2x',
            placeholder: { bm: 'Taip 1, 2, atau 3', en: 'Enter 1, 2, or 3' },
            intentMeta: { given: 'kerusi = y, meja = x, sekurang-kurangnya 2 kali', goal: 'Terjemah kepada ketaksamaan', conceptRule: '"Sekurang-kurangnya" bermaksud ≥, maka y ≥ 2x' },
            guidedSteps: [
              { prompt: { bm: `Apakah pilihan yang mewakili $y$ lebih besar atau sama dengan $2x$ (taip 1, 2, atau 3)?`, en: `Which option states $y$ is greater than or equal to $2x$ (enter 1, 2, or 3)?` }, expected: 1, hint: { bm: `"Sekurang-kurangnya" ialah ≥, jadi y ≥ 2x (Pilihan 1).`, en: `"At least" means ≥, giving y ≥ 2x (Option 1).` } }
            ],
            traps: [
              { value: 2, message: { bm: 'Perangkap [P]: y ≤ 2x bermaksud "selebih-lebihnya 2 kali"! "Sekurang-kurangnya" ialah ≥.', en: 'Trap [P]: y ≤ 2x means "at most twice"! "At least" requires ≥.' } }
            ],
            hints: [lang === 'bm' ? '"Sekurang-kurangnya" = ≥, jadi y ≥ 2x.' : '"At least" = ≥, so y ≥ 2x.'],
            steps: [
              { badge: 'P1', title: lang === 'bm' ? 'Terjemah kata kunci' : 'Translate keyword', tex: `\\text{Kerusi } (y) \\ge 2 \\times \\text{Meja } (x) \\implies y \\ge 2x`, why: 'Pilihan 1.' }
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
          return {
            tier: 2, tpLabel: 'TP3–TP4', subtopic: { bm: '7.1 Mengoptimumkan Fungsi Objektif pada Bucu R', en: '7.1 Optimizing Objective Function at Vertices' }, marks: 3,
            prompt: lang === 'bm'
              ? `Bucu-bucu bagi suatu rantau tersaur $R$ ialah $A(10, 40)$, $B(30, 25)$, dan $C(45, 10)$. Cari **keuntungan maksimum** bagi fungsi objektif $k = ${p}x + ${q}y$.`
              : `The vertices of a feasible region $R$ are $A(10, 40)$, $B(30, 25)$, and $C(45, 10)$. Find the **maximum profit** for the objective function $k = ${p}x + ${q}y$.`,
            answerType: 'number', correctValue: kMax, displayAnswerTex: `k_{\\max} = ${kMax}`,
            intentMeta: { given: `A(10,40), B(30,25), C(45,10); k = ${p}x + ${q}y`, goal: 'Uji ketiga-tiga bucu dan pilih k terbesar', conceptRule: 'Nilai maksimum berlaku pada salah satu bucu rantau R' },
            guidedSteps: [
              { prompt: { bm: `Nilaikan $k$ pada bucu $A(10, 40)$: $${p}(10) + ${q}(40)$:`, en: `Evaluate $k$ at vertex $A(10, 40)$: $${p}(10) + ${q}(40)$:` }, expected: k1, hint: { bm: `Kira ${10 * p} + ${40 * q}.`, en: `Compute ${10 * p} + ${40 * q}.` } },
              { prompt: { bm: `Bandingkan juga $B(30,25) \\to ${k2}$ dan $C(45,10) \\to ${k3}$. Apakah nilai **maksimum** $k$?`, en: `Compare with $B(30,25) \\to ${k2}$ and $C(45,10) \\to ${k3}$. What is **maximum** $k$?` }, expected: kMax, hint: { bm: `Pilih nombor paling besar antara ${k1}, ${k2}, dan ${k3}.`, en: `Pick the largest of ${k1}, ${k2}, and ${k3}.` } }
            ],
            traps: [],
            hints: [lang === 'bm' ? 'Gantikan setiap bucu (x, y) ke dalam k = px + qy dan pilih nilai tertinggi.' : 'Substitute each vertex (x, y) into k = px + qy and pick the highest.'],
            steps: [
              { badge: 'K1', title: lang === 'bm' ? 'Uji setiap bucu' : 'Test each vertex', tex: `k_A = ${k1}, \\quad k_B = ${k2}, \\quad k_C = ${k3}`, why: 'Gantikan x dan y.' },
              { badge: 'J1', title: lang === 'bm' ? 'Nilai maksimum' : 'Maximum value', tex: `k_{\\max} = ${kMax}`, why: 'Tertinggi.' }
            ]
          };
        }
        // Tier 3 KBAT: Full LP Modeling & Optimization
        const S = U.pick([40, 50, 60]);
        const M = S + U.pick([20, 30]);
        const ix = M - S, iy = 2 * S - M; // Both positive! e.g. S=50, M=80 -> (30, 20)
        const p = 50, q = 30;
        const maxProfit = Math.max(q * S, p * (M / 2), p * ix + q * iy);
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
          answerType: 'number', correctValue: maxProfit, displayAnswerTex: `\\text{RM }${maxProfit} \\quad \\text{pada } (${ix}, ${iy})`,
          intentMeta: { given: `x+y \\le ${S},\\; 2x+y \\le ${M},\\; k = ${p}x + ${q}y`, goal: 'Cari bucu persilangan (x, y) dan maksimumkan keuntungan k', conceptRule: 'Selesaikan persamaan serentak sempadan, kemudian uji semua bucu R' },
          guidedSteps: [
            { prompt: { bm: `Cari koordinat-$x$ bagi persilangan garis $x + y = ${S}$ dan $2x + y = ${M}$:`, en: `Find the $x$-coordinate where $x + y = ${S}$ and $2x + y = ${M}$ intersect:` }, expected: ix, hint: { bm: `Tolak persamaan pertama daripada persamaan kedua: x = ${M} − ${S}.`, en: `Subtract eq 1 from eq 2: x = ${M} − ${S}.` } },
            { prompt: { bm: `Dengan titik persilangan $(${ix}, ${iy})$, bandingkan keuntungan bucu $(0, ${S})$, $(${M / 2}, 0)$, dan $(${ix}, ${iy})$ bagi $k = ${p}x + ${q}y$ untuk keuntungan maksimum:`, en: `Compare profits at $(0, ${S})$, $(${M / 2}, 0)$, and $(${ix}, ${iy})$ in $k = ${p}x + ${q}y$ for max profit:` }, expected: maxProfit, hint: { bm: `Pada (${ix}, ${iy}), k = ${p}(${ix}) + ${q}(${iy}) = ${p * ix + q * iy}.`, en: `At (${ix}, ${iy}), k = ${p}(${ix}) + ${q}(${iy}) = ${p * ix + q * iy}.` } }
          ],
          traps: [
            { value: p * (M / 2), message: { bm: `Perangkap [K]: Anda hanya menguji pintasan paksi (${M / 2}, 0)! Bucu persilangan (${ix}, ${iy}) memberi keuntungan lebih tinggi.`, en: `Trap [K]: You only checked intercept (${M / 2}, 0)! Intersection vertex (${ix}, ${iy}) yields higher profit.` } }
          ],
          hints: [lang === 'bm' ? 'Cari bucu persilangan (x, y) dahulu, kemudian uji k = 50x + 30y pada semua bucu.' : 'Find intersection vertex (x, y), then test k = 50x + 30y across all vertices.'],
          steps: [
            { badge: 'P1', title: lang === 'bm' ? 'Cari bucu persilangan sempadan' : 'Find boundary intersection vertex', tex: `(2x+y) - (x+y) = ${M} - ${S} \\implies x = ${ix},\\; y = ${iy}`, why: 'Bucu utama rantau R.' },
            { badge: 'K1', title: lang === 'bm' ? 'Uji kesemua bucu pada k = 50x + 30y' : 'Evaluate k = 50x + 30y at all vertices', tex: `(0,${S})\\to ${q * S}, \\quad (${M / 2},0)\\to ${p * (M / 2)}, \\quad (${ix},${iy})\\to ${p * ix + q * iy}`, why: 'Kaedah bucu.' },
            { badge: 'J1', title: lang === 'bm' ? 'Keuntungan maksimum' : 'Maximum profit', tex: `\\text{RM }${maxProfit}`, why: 'Optimum.' }
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
        bm: 'Sesaran s(t), halaju v = ds/dt, pecutan a = dv/dt, rehat seketika v = 0 & jumlah jarak lalui',
        en: 'Displacement s(t), velocity v = ds/dt, acceleration a = dv/dt, instantaneous rest v = 0 & total distance'
      },
      spmWeight: { bm: 'Wajib Kertas 2 Bhg C (10 markah penuh!)', en: 'Paper 2 Sec C Classic (10 full marks!)' },
      concepts: [
        {
          title: { bm: '1. Jambatan Kalkulus s ↔ v ↔ a & Kamus Istilah Gerakan', en: '1. Calculus Bridge s ↔ v ↔ a & Motion Dictionary' },
          body: {
            bm: 'Zarah bergerak sepanjang garis lurus daripada titik tetap $O$. **Bezakan** terhadap masa $t$ untuk bergerak $s \\to v \\to a$, dan **kamirkan** terhadap masa $t$ untuk berpatah balik $a \\to v \\to s$!',
            en: 'A particle moves along a straight line from fixed point $O$. **Differentiate** w.r.t. $t$ to go $s \\to v \\to a$, and **integrate** w.r.t. $t$ to reverse $a \\to v \\to s$!'
          },
          formulas: [
            { label: { bm: 'Pembezaan & Pengamiran Gerakan', en: 'Kinematics Differentiation & Integration' }, tex: 'v = \\frac{ds}{dt}, \\quad a = \\frac{dv}{dt} = \\frac{d^2s}{dt^2}, \\qquad v = \\int a\\,dt, \\quad s = \\int v\\,dt' },
            { label: { bm: '4 Terjemahan Wajib SPM', en: '4 Essential SPM Triggers' }, tex: '\\text{Awal: } t=0 \\;|\\; \\text{Kembali ke } O: s=0 \\;|\\; \\text{Rehat/Pusing arah: } v=0 \\;|\\; \\text{Halaju maks/min: } a=0' }
          ],
          tip: {
            bm: 'Semasa mengamirkan v = ∫a dt atau s = ∫v dt, jangan lupa guna nilai awal pada t = 0 untuk mencari pemalar +c!',
            en: 'When integrating v = ∫a dt or s = ∫v dt, always use initial conditions at t = 0 to find +c!'
          }
        },
        {
          title: { bm: '2. Jumlah Jarak vs Sesaran Bersih (Perangkap Pusingan Arah v = 0!)', en: '2. Total Distance vs Net Displacement (Turnaround Trap!)' },
          body: {
            bm: 'Jika zarah menukar arah ($v = 0$) pada masa $t = t_p$ di dalam selang $[0, T]$, anda **TIDAK BOLEH** hanya mengira $s(T)$! Anda wajib memecahkan perjalanan kepada sebelum dan selepas pusingan arah!',
            en: 'If the particle reverses direction ($v = 0$) at $t = t_p$ inside $[0, T]$, you **CANNOT** just evaluate $s(T)$! Split the journey at the turnaround time!'
          },
          formulas: [
            { label: { bm: 'Rumus Jumlah Jarak Dilalui pada [0, T]', en: 'Total Distance Travelled on [0, T]' }, tex: '\\text{Jumlah Jarak} = |s(t_p) - s(0)| + |s(T) - s(t_p)| = \\int_0^{t_p} |v|\\,dt + \\int_{t_p}^T |v|\\,dt' }
          ],
          tip: {
            bm: 'Lukis garis nombor ringkas menunjukkan kedudukan s(0) → s(t_p) → s(T) supaya jumlah jarak jelas di depan mata!',
            en: 'Sketch a quick 1D path diagram s(0) → s(t_p) → s(T) so total distance is crystal clear!'
          }
        }
      ],
      traps: [
        {
          title: { bm: 'Mengira s(T) Terus sebagai Jumlah Jarak', en: 'Evaluating Net s(T) Instead of Total Distance' },
          desc: {
            bm: 'Jika zarah bergerak dari O ke +8 m kemudian patah balik ke +2 m, sesaran s(T) ialah 2 m tetapi JUMLAH JARAK ialah 8 + 6 = 14 m!',
            en: 'Moving from O to +8 m then reversing to +2 m gives displacement 2 m, whereas TOTAL DISTANCE is 8 + 6 = 14 m!'
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
            { id: 'p', label: 'p (dlm v = pt − q)', default: 2 },
            { id: 'q', label: 'q', default: 6 },
            { id: 'T', label: { bm: 'Selang masa T (s)', en: 'Time T (s)' }, default: 5 }
          ],
          solve: function (v, lang) {
            const p = Number(v.p) || 2, q = Number(v.q) || 6, T = Math.max(1, Number(v.T) || 5);
            const sFn = (t) => 0.5 * p * t * t - q * t;
            const tTurn = p !== 0 ? q / p : -1;
            const sT = sFn(T);
            let dist = Math.abs(sT);
            let turnNote = lang === 'bm' ? 'Tiada pusingan arah dalam [0, T].' : 'No turnaround inside [0, T].';
            if (tTurn > 0 && tTurn < T) {
              const sTurn = sFn(tTurn);
              dist = Math.abs(sTurn - 0) + Math.abs(sT - sTurn);
              turnNote = `t_p = ${U.roundStr(tTurn)}\\text{ s},\\; s(t_p) = ${U.roundStr(sTurn)}\\text{ m} \\implies |${U.roundStr(sTurn)}| + |${U.roundStr(sT)} - (${U.roundStr(sTurn)})| = ${U.roundStr(dist)}\\text{ m}`;
            }
            return {
              problemTex: `v(t) = ${p}t - ${q}, \\quad s(0) = 0, \\quad [0,\\; ${T}]`,
              steps: [
                { badge: 'P1', title: lang === 'bm' ? 'Langkah 1: Kamirkan v(t) untuk fungsi sesaran s(t)' : 'Step 1: Integrate v(t) for displacement s(t)', tex: `s(t) = \\int (${p}t - ${q})\\,dt = ${U.roundStr(0.5 * p)}t^2 - ${q}t \\quad (c=0)`, why: lang === 'bm' ? 'Melalui titik tetap O pada t = 0.' : 'Starts at O at t = 0.' },
                { badge: 'K1', title: lang === 'bm' ? 'Langkah 2: Semak masa rehat seketika / pusingan arah (v = 0)' : 'Step 2: Check turnaround time (v = 0)', tex: `${p}t - ${q} = 0 \\implies t = ${U.roundStr(tTurn)}\\text{ s}, \\qquad s(${T}) = ${U.roundStr(sT)}\\text{ m}`, why: lang === 'bm' ? 'Pecahkan selang jika 0 < t < T.' : 'Split interval if 0 < t < T.' },
                { badge: 'J1', title: lang === 'bm' ? 'Langkah 3: Jumlah jarak dalam ' + T + ' saat pertama' : 'Step 3: Total distance in first ' + T + ' seconds', tex: turnNote, why: lang === 'bm' ? 'Jumlahkan jarak pergi dan patah balik!' : 'Add forward and return leg distances!' }
              ],
              finalTex: `\\text{Sesaran } s(${T}) = ${U.roundStr(sT)}\\text{ m}, \\quad \\text{Jumlah Jarak} = ${U.roundStr(dist)}\\text{ m}`
            };
          }
        }
      ],
      generateQuestion: function (tier, lang) {
        if (tier === 1) {
          // Given s = t^2 - 2kt, find velocity at t = t0 or time of instantaneous rest
          const k = U.randInt(2, 6);
          return {
            tier: 1, tpLabel: 'TP1–TP2', subtopic: { bm: '8.2 Halaju v = ds/dt & Rehat Seketika', en: '8.2 Velocity v = ds/dt & Instantaneous Rest' }, marks: 3,
            prompt: lang === 'bm'
              ? `Suatu zarah bergerak di sepanjang garis lurus supaya sesarannya $s\\text{ m}$ dari titik tetap $O$ diberi oleh $s = t^2 - ${2 * k}t$. Cari masa $t$ (dalam saat) apabila zarah itu **berhenti seketika**.`
              : `A particle moves along a straight line such that its displacement $s\\text{ m}$ from fixed point $O$ is $s = t^2 - ${2 * k}t$. Find the time $t$ (in seconds) when the particle is **instantaneously at rest**.`,
            answerType: 'number', correctValue: k, displayAnswerTex: `t = ${k}\\text{ s}`,
            intentMeta: { given: `s = t^2 - ${2 * k}t`, goal: 'Bezakan untuk cari v = ds/dt, kemudian tetapkan v = 0', conceptRule: 'Berhenti seketika bermaksud halaju v = ds/dt = 0' },
            guidedSteps: [
              { prompt: { bm: `Bezakan $s = t^2 - ${2 * k}t$ untuk mendapat $v = 2t - C$. Apakah nilai pemalar $C$?`, en: `Differentiate $s = t^2 - ${2 * k}t$ to get $v = 2t - C$. What is $C$?` }, expected: 2 * k, hint: { bm: `d/dt(${2 * k}t) = ${2 * k}.`, en: `d/dt(${2 * k}t) = ${2 * k}.` } },
              { prompt: { bm: `Tetapkan $v = 2t - ${2 * k} = 0$. Apakah nilai $t$?`, en: `Set $v = 2t - ${2 * k} = 0$. What is $t$?` }, expected: k, hint: { bm: `Bahagi ${2 * k} dengan 2.`, en: `Divide ${2 * k} by 2.` } }
            ],
            traps: [
              { value: 2 * k, message: { bm: 'Perangkap [P]: Anda menetapkan s = 0 (kembali ke O), bukan v = 0 (berhenti seketika)! Bezakan ds/dt dahulu.', en: 'Trap [P]: You solved s = 0 (passing O) instead of v = ds/dt = 0 (at rest)!' } }
            ],
            hints: [lang === 'bm' ? 'Berhenti seketika bermaksud v = ds/dt = 0.' : 'Instantaneously at rest means v = ds/dt = 0.'],
            steps: [
              { badge: 'P1', title: lang === 'bm' ? 'Bezakan sesaran untuk halaju' : 'Differentiate displacement for velocity', tex: `v = \\frac{ds}{dt} = 2t - ${2 * k}`, why: 'v = ds/dt.' },
              { badge: 'J1', title: lang === 'bm' ? 'Selesaikan v = 0' : 'Solve v = 0', tex: `2t - ${2 * k} = 0 \\implies t = ${k}\\text{ s}`, why: 'Masa berhenti seketika.' }
            ]
          };
        }
        if (tier === 2) {
          // Maximum velocity when a = dv/dt = 0: v = ct - t^2 -> a = c - 2t = 0 -> t = c/2 -> v_max = c^2 / 4
          const halfC = U.randInt(2, 5);
          const c = 2 * halfC;
          const vMax = halfC * halfC;
          return {
            tier: 2, tpLabel: 'TP3–TP4', subtopic: { bm: '8.3 Halaju Maksimum (Pecutan a = 0)', en: '8.3 Maximum Velocity (Acceleration a = 0)' }, marks: 4,
            prompt: lang === 'bm'
              ? `Halaju suatu zarah, $v\\text{ m s}^{-1}$, diberi oleh $v = ${c}t - t^2$, dengan $t$ ialah masa dalam saat selepas melalui $O$. Cari **halaju maksimum** zarah tersebut.`
              : `The velocity of a particle, $v\\text{ m s}^{-1}$, is given by $v = ${c}t - t^2$, where $t$ is time in seconds after passing $O$. Find the **maximum velocity** of the particle.`,
            answerType: 'number', correctValue: vMax, displayAnswerTex: `v_{\\max} = ${vMax}\\text{ m s}^{-1} \\quad (\\text{pada } t = ${halfC}\\text{ s})`,
            intentMeta: { given: `v = ${c}t - t^2`, goal: 'Cari masa apabila pecutan a = dv/dt = 0, kemudian gantikan t ke dalam v', conceptRule: 'Halaju mencapai nilai maksimum apabila pecutan a = dv/dt = 0' },
            guidedSteps: [
              { prompt: { bm: `Tetapkan pecutan $a = \\frac{dv}{dt} = ${c} - 2t = 0$. Apakah masa $t$?`, en: `Set acceleration $a = \\frac{dv}{dt} = ${c} - 2t = 0$. What is time $t$?` }, expected: halfC, hint: { bm: `2t = ${c}.`, en: `2t = ${c}.` } },
              { prompt: { bm: `Gantikan $t = ${halfC}$ ke dalam $v = ${c}t - t^2$ untuk halaju maksimum:`, en: `Substitute $t = ${halfC}$ into $v = ${c}t - t^2$ for maximum velocity:` }, expected: vMax, hint: { bm: `Kira ${c}(${halfC}) − (${halfC})².`, en: `Compute ${c}(${halfC}) − (${halfC})².` } }
            ],
            traps: [
              { value: halfC, message: { bm: 'Perangkap [J]: Itu masa t apabila halaju maksimum berlaku! Gantikan semula t ke dalam fungsi v.', en: 'Trap [J]: That is time t! Substitute t back into v(t) for maximum velocity.' } }
            ],
            hints: [lang === 'bm' ? 'Cari a = dv/dt = 0 untuk dapat t, kemudian ganti t ke dalam v.' : 'Solve a = dv/dt = 0 for t, then substitute into v.'],
            steps: [
              { badge: 'P1', title: lang === 'bm' ? 'Pecutan a = dv/dt = 0' : 'Set acceleration a = dv/dt = 0', tex: `a = ${c} - 2t = 0 \\implies t = ${halfC}\\text{ s}`, why: 'Syarat halaju maksimum.' },
              { badge: 'J1', title: lang === 'bm' ? 'Nilaikan halaju maksimum' : 'Evaluate maximum velocity', tex: `v_{\\max} = ${c}(${halfC}) - (${halfC})^2 = ${vMax}\\text{ m s}^{-1}`, why: 'Jawapan tepat.' }
            ]
          };
        }
        // Tier 3 KBAT: Total distance travelled in the first T seconds when particle reverses direction!
        // v = 2t - 2k (starts at O -> s = t^2 - 2kt). Turnaround at t = k, s(k) = -k^2. Ask total distance in first T = k + 2 seconds!
        const k = U.pick([2, 3, 4]);
        const T = k + 2;
        const sTurn = -k * k; // at t = k
        const sFinal = T * T - 2 * k * T;
        const totalDist = Math.abs(sTurn) + Math.abs(sFinal - sTurn); // k^2 + 4
        return {
          tier: 3, tpLabel: 'TP5–TP6 (KBAT)', subtopic: { bm: '8.4 Jumlah Jarak dengan Pusingan Arah (v = 0)', en: '8.4 Total Distance with Turnaround (v = 0)' }, marks: 5,
          prompt: lang === 'bm'
            ? `Suatu zarah bermula dari titik tetap $O$ ($s = 0$ apabila $t = 0$) dan bergerak dengan halaju $v = 2t - ${2 * k}\\;\\text{m s}^{-1}$. Cari **jumlah jarak** (dalam $\\text{m}$) yang dilalui oleh zarah itu dalam **$${T}$ saat pertama**.`
            : `A particle starts from fixed point $O$ ($s = 0$ at $t = 0$) and moves with velocity $v = 2t - ${2 * k}\\;\\text{m s}^{-1}$. Find the **total distance** (in $\\text{m}$) travelled by the particle in the **first $${T}$ seconds**.`,
          answerType: 'number', correctValue: totalDist, displayAnswerTex: `|${sTurn}| + |${sFinal} - (${sTurn})| = ${totalDist}\\text{ m}`,
          intentMeta: { given: `v = 2t - ${2 * k}, s(0)=0, \\text{selang }[0, ${T}]`, goal: 'Kamirkan s(t), cari pusingan arah v = 0, dan jumlahkan kedua-dua keratan jarak', conceptRule: 'Jumlah Jarak = |s(t_p) − s(0)| + |s(T) − s(t_p)|' },
          guidedSteps: [
            { prompt: { bm: `Kamirkan untuk dapat $s(t) = t^2 - ${2 * k}t$. Zarah berpusing arah apabila $v = 0 \\implies t = ${k}$. Berapakah jarak keratan pertama $|s(${k}) - s(0)|$?`, en: `Integrate to get $s(t) = t^2 - ${2 * k}t$. Turnaround occurs at $v = 0 \\implies t = ${k}$. What is the first-leg distance $|s(${k}) - s(0)|$?` }, expected: Math.abs(sTurn), hint: { bm: `s(${k}) = (${k})² − ${2 * k}(${k}) = ${sTurn}, ambil nilai mutlaknya.`, en: `s(${k}) = (${k})² − ${2 * k}(${k}) = ${sTurn}; take its absolute value.` } },
            { prompt: { bm: `Pada $t = ${T}$, sesaran ialah $s(${T}) = ${sFinal}$. Tambahkan jarak patah balik $|${sFinal} - (${sTurn})|$ kepada jarak pertama tadi:`, en: `At $t = ${T}$, $s(${T}) = ${sFinal}$. Add the return-leg distance $|${sFinal} - (${sTurn})|$ to the first leg:` }, expected: totalDist, hint: { bm: `Kira ${Math.abs(sTurn)} + ${Math.abs(sFinal - sTurn)}.`, en: `Compute ${Math.abs(sTurn)} + ${Math.abs(sFinal - sTurn)}.` } }
          ],
          traps: [
            { value: Math.abs(sFinal), message: { bm: `Perangkap Klasik SPM [P]: |s(${T})| = ${Math.abs(sFinal)} m hanyalah sesaran bersih! Zarah telah berpusing arah pada t = ${k} s (di s = ${sTurn} m), jadi wajib jumlahkan jarak pergi dan balik!`, en: `Classic SPM Trap [P]: |s(${T})| = ${Math.abs(sFinal)} m is only net displacement! Split at turnaround t = ${k} s.` } }
          ],
          hints: [lang === 'bm' ? 'Cari s(t) = t² − 2kt, semak pusingan arah t = ' + k + ', dan kira |s(' + k + ')| + |s(' + T + ') − s(' + k + ')|.' : 'Find s(t), split at turnaround t = ' + k + ', and sum both legs.'],
          steps: [
            { badge: 'P1', title: lang === 'bm' ? 'Fungsi sesaran & masa pusingan arah' : 'Displacement & turnaround time', tex: `s(t) = t^2 - ${2 * k}t; \\qquad v = 0 \\implies t = ${k}\\text{ s}`, why: 's(0) = 0 memberi c = 0.' },
            { badge: 'K1', title: lang === 'bm' ? 'Kedudukan pada t = 0, ' + k + ', dan ' + T : 'Positions at t = 0, ' + k + ', and ' + T, tex: `s(0) = 0, \\quad s(${k}) = ${sTurn}\\text{ m}, \\quad s(${T}) = ${sFinal}\\text{ m}`, why: 'Jejak kedudukan zarah.' },
            { badge: 'J1', title: lang === 'bm' ? 'Jumlah jarak dilalui' : 'Total distance travelled', tex: `|${sTurn} - 0| + |${sFinal} - (${sTurn})| = ${Math.abs(sTurn)} + ${Math.abs(sFinal - sTurn)} = ${totalDist}\\text{ m}`, why: 'Jumlah jarak sebenar.' }
          ]
        };
      }
    }
  ];

  App.chapters.push(...f5Stage4);
})(window.AddMathApp);
