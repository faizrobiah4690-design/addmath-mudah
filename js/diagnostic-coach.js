/**
 * AddMath Mudah — Enjin Kepintaran Intent, Penjana Langkah Dinamik & Diagnostik Sokratik (BM / EN)
 */
window.AddMathApp = window.AddMathApp || {};

(function (App) {
  'use strict';
  const U = App.utils;

  // Classify student's natural language intent (supports BM, English & Manglish)
  function detectIntent(rawText) {
    const s = String(rawText || '').toLowerCase().trim();
    if (!s) return 'stuck_start';

    if (/[x]\s*(\^2|²)/i.test(s)) return 'solve_quadratic';
    if (/\|[^|]+x[^|]*\|\s*=/i.test(s)) return 'solve_modulus';
    if (/f\s*\(\s*x\s*\)\s*=/i.test(s)) return 'solve_function';
    if (/^-?\d+(\.\d+)?\s*,\s*-?\d+(\.\d+)?\s*,\s*-?\d+(\.\d+)?/.test(s)) return 'solve_sequence';

    if (/(susah|stress|putus asa|tak pandai|lemah|bodoh|give up|too hard|takut|pening kepala)/i.test(s)) {
      return 'motivation';
    }
    if (/(jana|step|langkah|jalan kerja|cara kira|cara jawab|tunjuk|show|working|solve|selesaikan)/i.test(s)) {
      return 'generate_steps';
    }
    if (/(tak tahu nak mula|macam mana nak mula|nak mula|how to start|where to start|how do i start|blur|tak faham soalan|nak buat apa dulu)/i.test(s)) {
      return 'stuck_start';
    }
    if (/(rumus|formula|petua|hukum mana|which rule|which formula|pakai apa)/i.test(s)) {
      return 'formula_confusion';
    }
    if (/(kenapa salah|why was i wrong|saya dapat|jawapan saya|i got|why wrong|tanda|negatif|positif|silap kat mana|sangkut)/i.test(s)) {
      return 'diagnose_wrong';
    }
    if (/(kenapa|why|apa maksud|beza|difference|konsep|concept|explain|terangkan)/i.test(s)) {
      return 'why_concept';
    }
    return 'generate_steps';
  }

  // Live Quadratic Solver: e.g. "2x^2 - 7x + 3 = 0"
  function trySolveLiveQuadratic(text, lang) {
    const cleaned = text.replace(/²/g, '^2').replace(/\s+/g, '').replace(/=0$/, '');
    const m = cleaned.match(/^([+-]?\d*\.?\d*)x\^2([+-]\d*\.?\d*x)?([+-]\d+\.?\d*)?$/i);
    if (!m) return null;
    const parseCoeff = (str, def) => {
      if (!str || str === '+') return def;
      if (str === '-') return -def;
      return parseFloat(str);
    };
    const a = parseCoeff(m[1], 1);
    const b = m[2] ? parseCoeff(m[2].replace(/x/i, ''), 1) : 0;
    const c = m[3] ? parseFloat(m[3]) : 0;
    if (!Number.isFinite(a) || a === 0) return null;

    const disc = b * b - 4 * a * c;
    const h = -b / (2 * a);
    const k = a * h * h + b * h + c;
    const rootsStr = disc >= 0
      ? `$x_1 = ${U.roundStr((-b - Math.sqrt(disc)) / (2 * a))},\\; x_2 = ${U.roundStr((-b + Math.sqrt(disc)) / (2 * a))}$`
      : (lang === 'bm' ? 'Tiada punca nyata ($\\Delta < 0$)' : 'No real roots ($\\Delta < 0$)');

    return lang === 'bm'
      ? `**Analisis Dinamik Kuadratik** bagi $${U.polyTex([{ c: a, p: 2 }, { c: b, p: 1 }, { c: c, p: 0 }])} = 0$:\n` +
        `1. **[P1] Pembezalayan:** $\\Delta = (${b})^2 - 4(${a})(${c}) = ${U.roundStr(disc)}$\n` +
        `2. **[K1] HTP & HDP:** $\\alpha + \\beta = ${U.roundStr(-b / a)}$, $\\alpha\\beta = ${U.roundStr(c / a)}$\n` +
        `3. **[J1] Punca:** ${rootsStr}\n` +
        `4. **Verteks Titik Pusingan:** $(${U.roundStr(h)},\\; ${U.roundStr(k)})$`
      : `**Dynamic Quadratic Solution** for $${U.polyTex([{ c: a, p: 2 }, { c: b, p: 1 }, { c: c, p: 0 }])} = 0$:\n` +
        `1. **[P1] Discriminant:** $\\Delta = (${b})^2 - 4(${a})(${c}) = ${U.roundStr(disc)}$\n` +
        `2. **[K1] SOR & POR:** $\\alpha + \\beta = ${U.roundStr(-b / a)}$, $\\alpha\\beta = ${U.roundStr(c / a)}$\n` +
        `3. **[J1] Roots:** ${rootsStr}\n` +
        `4. **Turning Point (Vertex):** $(${U.roundStr(h)},\\; ${U.roundStr(k)})$`;
  }

  // Live Modulus Equation Solver: e.g. "|2x - 5| = 9"
  function trySolveLiveModulus(text, lang) {
    const cleaned = text.replace(/\s+/g, '');
    const m = cleaned.match(/^\|([+-]?\d*\.?\d*)x([+-]\d+\.?\d*)?\|=([+-]?\d+\.?\d*)$/i);
    if (!m) return null;
    const a = (!m[1] || m[1] === '+') ? 1 : (m[1] === '-' ? -1 : parseFloat(m[1]));
    const b = m[2] ? parseFloat(m[2]) : 0;
    const k = parseFloat(m[3]);
    if (!a || !Number.isFinite(k)) return null;
    if (k < 0) return lang === 'bm' ? 'Tiada penyelesaian nyata kerana nilai mutlak tidak boleh negatif ($k < 0$).' : 'No real solution because absolute value cannot be negative ($k < 0$).';
    const x1 = (k - b) / a;
    const x2 = (-k - b) / a;
    const inner = U.polyTex([{ c: a, p: 1 }, { c: b, p: 0 }]);
    return lang === 'bm'
      ? `**Penyelesaian Nilai Mutlak** bagi $|${inner}| = ${k}$:\n` +
        `1. **[P1] Pecahkan dua cabang:** $${inner} = ${k}$ atau $${inner} = ${-k}$\n` +
        `2. **[K1] Cabang 1:** $${a}x = ${k - b} \\implies x = ${U.roundStr(x1)}$\n` +
        `3. **[J1] Cabang 2:** $${a}x = ${-k - b} \\implies x = ${U.roundStr(x2)}$`
      : `**Modulus Step-by-Step Solution** for $|${inner}| = ${k}$:\n` +
        `1. **[P1] Split into two branches:** $${inner} = ${k}$ or $${inner} = ${-k}$\n` +
        `2. **[K1] Branch 1:** $${a}x = ${k - b} \\implies x = ${U.roundStr(x1)}$\n` +
        `3. **[J1] Branch 2:** $${a}x = ${-k - b} \\implies x = ${U.roundStr(x2)}$`;
  }

  // Live Function Inverse Solver: e.g. "f(x) = 3x - 5"
  function trySolveLiveFunction(text, lang) {
    const cleaned = text.replace(/\s+/g, '');
    const m = cleaned.match(/f\(x\)=([+-]?\d*\.?\d*)x([+-]\d+\.?\d*)?/i);
    if (!m) return null;
    const a = (!m[1] || m[1] === '+') ? 1 : (m[1] === '-' ? -1 : parseFloat(m[1]));
    const b = m[2] ? parseFloat(m[2]) : 0;
    if (!a) return null;
    const signB = -b >= 0 ? ' + ' + Math.abs(b) : ' - ' + Math.abs(b);
    return lang === 'bm'
      ? `**Janaan Langkah Fungsi Songsang** bagi $f(x) = ${U.polyTex([{ c: a, p: 1 }, { c: b, p: 0 }])}$:\n` +
        `1. **[P1]** Biar $y = ${U.polyTex([{ c: a, p: 1 }, { c: b, p: 0 }])}$\n` +
        `2. **[K1]** Asingkan $x$: $${a}x = y ${signB} \\implies x = \\frac{y ${signB}}{${a}}$\n` +
        `3. **[J1]** Fungsi songsang: $$f^{-1}(x) = \\frac{x ${signB}}{${a}}$$`
      : `**Generated Inverse Function Steps** for $f(x) = ${U.polyTex([{ c: a, p: 1 }, { c: b, p: 0 }])}$:\n` +
        `1. **[P1]** Let $y = ${U.polyTex([{ c: a, p: 1 }, { c: b, p: 0 }])}$\n` +
        `2. **[K1]** Isolate $x$: $${a}x = y ${signB} \\implies x = \\frac{y ${signB}}{${a}}$\n` +
        `3. **[J1]** Inverse function: $$f^{-1}(x) = \\frac{x ${signB}}{${a}}$$`;
  }

  // Live Sequence Detector (AP / GP): e.g. "12, 6, 3" or "4, 9, 14"
  function trySolveLiveSequence(text, lang) {
    const nums = text.split(',').map((p) => parseFloat(p.trim())).filter(Number.isFinite);
    if (nums.length < 3) return null;
    const [t1, t2, t3] = nums;
    const isAP = Math.abs((t2 - t1) - (t3 - t2)) < 1e-6;
    const isGP = t1 !== 0 && t2 !== 0 && Math.abs((t2 / t1) - (t3 / t2)) < 1e-6;

    if (isAP) {
      const d = t2 - t1;
      const t10 = t1 + 9 * d;
      const s10 = 5 * (2 * t1 + 9 * d);
      return lang === 'bm'
        ? `**Pengesanan Automatik: Janjang Aritmetik (JA)**\n` +
          `1. **[P1]** Sebutan pertama $a = ${t1}$, beza sepunya $d = ${t2} - ${t1} = ${U.roundStr(d)}$\n` +
          `2. **[K1]** Rumus sebutan ke-$n$: $T_n = ${t1} + (n - 1)(${U.roundStr(d)})$\n` +
          `3. **[J1]** Contoh nilai: $T_{10} = ${U.roundStr(t10)}$ dan $S_{10} = ${U.roundStr(s10)}$`
        : `**Auto-Detected: Arithmetic Progression (AP)**\n` +
          `1. **[P1]** First term $a = ${t1}$, common difference $d = ${t2} - ${t1} = ${U.roundStr(d)}$\n` +
          `2. **[K1]** General $n$-th term: $T_n = ${t1} + (n - 1)(${U.roundStr(d)})$\n` +
          `3. **[J1]** Sample evaluation: $T_{10} = ${U.roundStr(t10)}$ and $S_{10} = ${U.roundStr(s10)}$`;
    }
    if (isGP) {
      const r = t2 / t1;
      const t6 = t1 * Math.pow(r, 5);
      const sInfLine = Math.abs(r) < 1
        ? `\\implies S_\\infty = \\frac{${t1}}{1 - (${U.roundStr(r)})} = ${U.roundStr(t1 / (1 - r))}`
        : (lang === 'bm' ? '(Tiada $S_\\infty$ kerana $|r| \\ge 1$)' : '(No $S_\\infty$ since $|r| \\ge 1$)');
      return lang === 'bm'
        ? `**Pengesanan Automatik: Janjang Geometri (JG)**\n` +
          `1. **[P1]** Sebutan pertama $a = ${t1}$, nisbah sepunya $r = \\frac{${t2}}{${t1}} = ${U.roundStr(r)}$\n` +
          `2. **[K1]** Sebutan ke-6: $T_6 = ${t1}(${U.roundStr(r)})^5 = ${U.roundStr(t6)}$\n` +
          `3. **[J1]** Ketakterhinggaan: ${sInfLine}`
        : `**Auto-Detected: Geometric Progression (GP)**\n` +
          `1. **[P1]** First term $a = ${t1}$, common ratio $r = \\frac{${t2}}{${t1}} = ${U.roundStr(r)}$\n` +
          `2. **[K1]** 6th term: $T_6 = ${t1}(${U.roundStr(r)})^5 = ${U.roundStr(t6)}$\n` +
          `3. **[J1]** Sum to infinity: ${sInfLine}`;
    }
    return null;
  }

  // Context-Aware Socratic Coach for the ACTIVE Practice Question!
  function coachOnQuestion(userText, question, chapter, lastStudentAnswer, lang) {
    const l = lang || App.lang || 'bm';
    const intent = detectIntent(userText);
    const meta = question.intentMeta || {};
    const gSteps = question.guidedSteps || [];
    const firstGuided = gSteps[0] ? U.t(gSteps[0].prompt, l) : question.hints[0];

    const numInMsgMatch = String(userText || '').match(/(-?\d+(\.\d+)?)/);
    const candidateWrong = lastStudentAnswer || (numInMsgMatch ? numInMsgMatch[1] : '');

    // Dynamically construct step-by-step guided plan WITHOUT exposing only the final answer prematurely, OR showing all setup steps clearly!
    if (intent === 'generate_steps') {
      const stepLines = (question.steps || []).map((st, idx) => {
        const isLast = idx === question.steps.length - 1;
        if (isLast && question.steps.length > 1) {
          return `${idx + 1}. **[${st.badge}] ${st.title}:** ${l === 'bm' ? 'Permudahkan langkah di atas untuk mendapat jawapan akhir! *(Klik "Lihat Skema Penuh" di atas jika mahu semak angka akhir)*' : 'Simplify the expression above to get the final answer! *(Click "Full SPM Working" above to reveal the final number)*'}`;
        }
        return `${idx + 1}. **[${st.badge}] ${st.title}:** $${st.tex}$ — *${st.why}*`;
      }).join('\n');

      return {
        tag: l === 'bm' ? 'Pelan Langkah Kerja Dijana Secara Dinamik' : 'Dynamically Generated Step Plan',
        category: 'K',
        openGuided: true,
        reply: (l === 'bm'
          ? `Berikut ialah **pelan langkah demi langkah** khusus untuk angka dalam soalan ini:\n\n${stepLines}\n\nSaya juga telah membuka kotak **Bimbingan Interaktif** di atas supaya awak boleh menguji pengiraan setiap langkah!`
          : `Here is the **step-by-step working plan** tailored to the exact numbers in this question:\n\n${stepLines}\n\nI've also opened the **Interactive Step Box** above so you can verify each step live!`)
      };
    }

    if (intent === 'motivation') {
      return {
        tag: l === 'bm' ? 'Semangat & Strategi' : 'Mindset & Strategy',
        category: 'mindset',
        reply: l === 'bm'
          ? `Jangan risau! Rahsia menguasai AddMath ialah **pecahkan soalan kepada langkah-langkah kecil**.\n\n- **Maklumat diberi:** $${meta.given || '-'}$\n- **Langkah kecil pertama:** ${firstGuided}`
          : `Don't stress! The secret to mastering AddMath is **breaking the problem into small steps**.\n\n- **Given info:** $${meta.given || '-'}$\n- **First micro-step:** ${firstGuided}`
      };
    }

    if (intent === 'stuck_start') {
      return {
        tag: l === 'bm' ? 'Intent Dikesan: Buntu Nak Mula' : 'Intent Detected: How to Start',
        category: 'P',
        openGuided: true,
        reply: l === 'bm'
          ? `Jom kita mulakan langkah pertama bersama-sama:\n` +
            `- **Apa yang diberi dalam soalan:** $${meta.given || '-'}$\n` +
            `- **Apa yang kita mahu cari:** ${meta.goal || '-'}\n\n` +
            `**Langkah 1:** ${firstGuided}`
          : `Let's kick off Step 1 together:\n` +
            `- **Given in the problem:** $${meta.given || '-'}$\n` +
            `- **Our target:** ${meta.goal || '-'}\n\n` +
            `**Step 1:** ${firstGuided}`
      };
    }

    if (intent === 'formula_confusion') {
      return {
        tag: l === 'bm' ? 'Intent Dikesan: Pemilihan Rumus [P]' : 'Intent Detected: Formula Selection [P]',
        category: 'P',
        reply: l === 'bm'
          ? `Untuk subtopik **${U.t(question.subtopic, 'bm')}**, hubungan/rumus utama yang perlu digunakan ialah:\n` +
            `- **Rumus Kunci:** ${meta.conceptRule || ('$' + question.steps[0].tex + '$')}\n` +
            `- **Nilai daripada soalan:** $${meta.given || '-'}$\n\n` +
            `Cuba gantikan nilai tersebut ke dalam rumus di atas!`
          : `For **${U.t(question.subtopic, 'en')}**, the key governing formula is:\n` +
            `- **Key Rule:** ${meta.conceptRule || ('$' + question.steps[0].tex + '$')}\n` +
            `- **Values from question:** $${meta.given || '-'}$\n\n` +
            `Try substituting those values into the rule above!`
      };
    }

    if (intent === 'diagnose_wrong') {
      if (candidateWrong) {
        const evalRes = U.evaluateAnswer(question, candidateWrong, l);
        if (evalRes.correct) {
          return {
            tag: l === 'bm' ? 'Semakan: Jawapan Betul!' : 'Check: Correct Answer!',
            category: 'ok',
            reply: l === 'bm'
              ? `Sebenarnya nilai **${candidateWrong}** itu sudah **TEPAT**! Masukkan dalam kotak jawapan utama dan klik **Semak Jawapan** untuk menuntut XP awak!`
              : `Your value **${candidateWrong}** is actually **100% CORRECT**! Enter it in the main answer box and click **Check Answer** to claim your XP!`
          };
        }
        if (evalRes.trapHit) {
          return {
            tag: l === 'bm' ? 'Diagnostik Punca Gagal Faham' : 'Misconception Root-Cause Found',
            category: 'K',
            openGuided: true,
            reply: `${evalRes.feedback}\n\n**Langkah pembetulan:** ${firstGuided}`
          };
        }
        return {
          tag: l === 'bm' ? 'Diagnostik Kiraan Anda' : 'Diagnosing Your Attempt',
          category: 'K',
          openGuided: true,
          reply: l === 'bm'
            ? `Nilai **${candidateWrong}** belum tepat. Mari kita semak langkah demi langkah supaya kita jumpa di baris mana kiraan tersasar!\n\n**Semakan Langkah 1:** ${firstGuided}`
            : `Your value **${candidateWrong}** isn't quite right yet. Let's check each intermediate value in the Step Box above so we catch exactly which line drifted!\n\n**Step 1 Check:** ${firstGuided}`
        };
      }
      return {
        tag: l === 'bm' ? 'Semakan Langkah Kerja [K]' : 'Step-by-Step Verification [K]',
        category: 'K',
        openGuided: true,
        reply: l === 'bm'
          ? `Taip jawapan yang awak dapat di dalam kotak jawapan dahulu (atau uji langkah satu persatu dalam kotak **Bimbingan Interaktif** di atas) supaya saya boleh mengesan dengan tepat punca kesilapan awak!`
          : `Enter the value you got into the answer box first (or test each step inside the **Interactive Step Box** above) so I can pinpoint the exact cause of the error!`
      };
    }

    // Concept explanation ('why_concept') — explain clearly using chapter & subtopic context!
    const subName = question.subtopic ? U.t(question.subtopic, l) : U.t(chapter.title, l);
    return {
      tag: l === 'bm' ? 'Penerangan Konsep Jelas' : 'Clear Concept Explanation',
      category: 'P',
      reply: l === 'bm'
        ? `**Konsep Di Sebalik Soalan Ini (${subName}):**\n` +
          `- Soalan ini memberi $${meta.given || '-'}$ dan meminta kita **${meta.goal || 'menyelesaikan nilai sasaran'}**.\n` +
          `- Prinsip matematik utamanya ialah **${meta.conceptRule || question.hints[0]}**.\n\n` +
          `Cuba langkah pertama ini: ${firstGuided}`
        : `**Concept Behind This Question (${subName}):**\n` +
          `- We are given $${meta.given || '-'}$ and asked to find **${meta.goal || 'the target value'}**.\n` +
          `- The core mathematical principle is **${meta.conceptRule || question.hints[0]}**.\n\n` +
          `Start with this first check: ${firstGuided}`
    };
  }

  // Standalone Smart Tutor Responder (Tab "Cikgu AI" + Live Symbolic Parsers + Optional Gemini API)
  async function askSmartTutor(userMessage, activeChapter, lang) {
    const l = lang || App.lang || 'bm';
    const msg = String(userMessage || '').trim();

    // 1. Live dynamic math solvers (100% computed on-the-fly from student's own input!)
    const quadOut = trySolveLiveQuadratic(msg, l);
    if (quadOut) return quadOut;

    const modOut = trySolveLiveModulus(msg, l);
    if (modOut) return modOut;

    const fnOut = trySolveLiveFunction(msg, l);
    if (fnOut) return fnOut;

    const seqOut = trySolveLiveSequence(msg, l);
    if (seqOut) return seqOut;

    // 2. Optional Gemini API Key if configured
    const apiKey = localStorage.getItem('addmath_gemini_key');
    if (apiKey && navigator.onLine) {
      try {
        const sysPrompt = l === 'bm'
          ? 'Anda ialah Cikgu Pintar Matematik Tambahan KSSM SPM Malaysia. Fahami intent pelajar, terangkan konsep dengan mudah menggunakan LaTeX ($...$), dan jana bimbingan langkah demi langkah mengikut markah P, K, J.'
          : 'You are an expert Malaysian KSSM SPM Additional Mathematics Tutor. Understand student intent, use LaTeX ($...$), and generate clear step-by-step guidance with P, K, J marks.';
        const resp = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${encodeURIComponent(apiKey)}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            systemInstruction: { parts: [{ text: sysPrompt }] },
            contents: [{ role: 'user', parts: [{ text: `[Topik: ${U.t(activeChapter.title, l)}] Soalan pelajar: ${msg}` }] }]
          })
        });
        if (resp.ok) {
          const data = await resp.json();
          const aiText = data?.candidates?.[0]?.content?.parts?.[0]?.text;
          if (aiText) return aiText;
        }
      } catch (_) {}
    }

    // 3. Built-in KSSM Topic Knowledge & Intent Matcher
    const lower = msg.toLowerCase();
    if (/(songsang|inverse)/i.test(lower)) {
      return l === 'bm'
        ? `**Konsep Fungsi Songsang ($f^{-1}$):**\nBayangkan $f$ memetakan objek $x \\to y$. Fungsi songsang $f^{-1}$ membalikkan anak panah itu daripada $y \\to x$!\n\n- **Syarat wujud:** $f$ mesti fungsi **satu-ke-satu**.\n- **3 Langkah Mudah:**\n  1. Tulis $y = f(x)$\n  2. Asingkan $x$ dalam sebutan $y$\n  3. Tukar simbol $y$ kepada $x$.\n\n*Cuba taip sebarang fungsi seperti \`f(x) = 5x - 8\` di sini untuk saya kirakan langkahnya!*`
        : `**Inverse Functions ($f^{-1}$):**\nIf $f$ maps $x \\to y$, the inverse $f^{-1}$ reverses that mapping $y \\to x$!\n\n- **Existence rule:** $f$ must be **one-to-one**.\n- **3 Easy Steps:**\n  1. Let $y = f(x)$\n  2. Isolate $x$ in terms of $y$\n  3. Replace $y$ with $x$.\n\n*Try typing any function like \`f(x) = 5x - 8\` right here and watch me solve it live!*`;
    }

    if (/(gubahan|composite|gf|fg)/i.test(lower)) {
      return l === 'bm'
        ? `**Rahsia Fungsi Gubahan $gf(x)$:**\nBaca dari **kanan ke kiri** (dalam ke luar)!\n- Dalam $gf(x) = g(f(x))$, fungsi **$f$ bertindak dahulu**, kemudian hasilnya dimasukkan ke dalam setiap $x$ bagi fungsi **$g$**.\n- **Perangkap SPM:** Jangan tertukar $gf(x)$ dengan $fg(x)$!`
        : `**Secret to Composite Functions $gf(x)$:**\nWork **inside-out** (right to left)!\n- In $gf(x) = g(f(x))$, **$f$ acts first**, then plug its output into every $x$ inside **$g$**.\n- **SPM Trap:** Never swap $gf(x)$ with $fg(x)$!`;
    }

    if (/(kuadratik|quadratic|punca|roots|sor|por|htp|hdp|pembezalayan|discriminant)/i.test(lower)) {
      return l === 'bm'
        ? `**Peta Pintar Fungsi Kuadratik ($ax^2 + bx + c = 0$):**\n1. **Sifat Punca ($\\Delta = b^2 - 4ac$):** $\\Delta > 0$ (2 punca berbeza), $\\Delta = 0$ (2 punca sama), $\\Delta < 0$ (tiada punca nyata).\n2. **HTP & HDP:** $\\alpha + \\beta = -\\frac{b}{a}$ dan $\\alpha\\beta = \\frac{c}{a}$.\n3. **Verteks:** Bentuk $a(x-h)^2 + k$ terus memberi titik pusingan $(h, k)$.\n\n*Taip sebarang persamaan seperti \`3x^2 - 10x + 3 = 0\` untuk pengiraan penuh!*`
        : `**Quadratic Mastery Cheat-Map ($ax^2 + bx + c = 0$):**\n1. **Nature of Roots ($\\Delta = b^2 - 4ac$):** $\\Delta > 0$ (2 distinct roots), $\\Delta = 0$ (equal roots), $\\Delta < 0$ (no real roots).\n2. **SOR & POR:** $\\alpha + \\beta = -\\frac{b}{a}$ and $\\alpha\\beta = \\frac{c}{a}$.\n3. **Vertex:** Form $a(x-h)^2 + k$ gives turning point $(h, k)$.\n\n*Type any equation like \`3x^2 - 10x + 3 = 0\` for live step-by-step calculation!*`;
    }

    if (/(janjang|progression|aritmetik|geometri|ketakterhinggaan|infinity)/i.test(lower)) {
      return l === 'bm'
        ? `**Cara Bezakan JA vs JG:**\n- **Janjang Aritmetik (JA):** Beza sepunya malar $d = T_2 - T_1$, $T_n = a + (n-1)d$.\n- **Janjang Geometri (JG):** Nisbah sepunya malar $r = T_2 / T_1$, $T_n = ar^{n-1}$, dan jika $|r| < 1$, $S_\\infty = \\frac{a}{1-r}$.\n\n*Cuba taip sebarang jujukan nombor seperti \`18, 6, 2\` atau \`5, 9, 13\` untuk saya analisis secara langsung!*`
        : `**AP vs GP Quick Guide:**\n- **Arithmetic (AP):** Constant difference $d = T_2 - T_1$, $T_n = a + (n-1)d$.\n- **Geometric (GP):** Constant ratio $r = T_2 / T_1$, $T_n = ar^{n-1}$, and for $|r| < 1$, $S_\\infty = \\frac{a}{1-r}$.\n\n*Try typing any sequence like \`18, 6, 2\` or \`5, 9, 13\` and watch me analyze it live!*`;
    }

    const chTitle = U.t(activeChapter.title, l);
    return l === 'bm'
      ? `Saya boleh mengira dan menjana langkah kerja secara langsung! Cuba taip:\n` +
        `- Persamaan kuadratik: \`2x^2 - 5x - 3 = 0\`\n` +
        `- Nilai mutlak: \`|2x - 4| = 10\`\n` +
        `- Fungsi songsang: \`f(x) = 4x - 7\`\n` +
        `- Jujukan janjang: \`24, 12, 6\` atau \`4, 11, 18\`\n` +
        `- Atau tanya sebarang konsep berkaitan **${chTitle}**!`
      : `I can calculate and generate live working steps! Try typing:\n` +
        `- A quadratic: \`2x^2 - 5x - 3 = 0\`\n` +
        `- A modulus equation: \`|2x - 4| = 10\`\n` +
        `- A function: \`f(x) = 4x - 7\`\n` +
        `- A progression sequence: \`24, 12, 6\` or \`4, 11, 18\`\n` +
        `- Or ask any concept question about **${chTitle}**!`;
  }

  App.coach = {
    detectIntent,
    coachOnQuestion,
    askSmartTutor
  };
})(window.AddMathApp);
