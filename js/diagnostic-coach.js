/**
 * AddMath Mudah — Enjin Kepintaran Intent & Diagnostik Sokratik (BM / EN)
 * Memahami di mana pelajar gagal faham (Konsep P, Kaedah K, atau Kiraan J) & membimbing langkah demi langkah.
 */
window.AddMathApp = window.AddMathApp || {};

(function (App) {
  'use strict';
  const U = App.utils;

  // Classify student's natural language intent (supports BM, English & Malaysian student expressions)
  function detectIntent(rawText) {
    const s = String(rawText || '').toLowerCase().trim();
    if (!s) return 'stuck_start';

    // Check if user typed an explicit quadratic equation like 2x^2 - 5x + 2 = 0
    if (/[x]\s*(\^2|²)/i.test(s)) return 'solve_quadratic';
    if (/f\s*\(\s*x\s*\)\s*=/i.test(s)) return 'solve_function';

    if (/(susah|stress|putus asa|tak pandai|lemah|bodoh|give up|too hard|takut|pening kepala)/i.test(s)) {
      return 'motivation';
    }
    if (/(tak tahu nak mula|macam mana nak mula|nak mula|how to start|where to start|blur|tak faham soalan|nak buat apa dulu|start from where)/i.test(s)) {
      return 'stuck_start';
    }
    if (/(rumus|formula|petua|hukum mana|which rule|which formula|pakai apa)/i.test(s)) {
      return 'formula_confusion';
    }
    if (/(kenapa salah|saya dapat|jawapan saya|i got|why wrong|tanda|negatif|positif|silap kat mana|sangkut)/i.test(s)) {
      return 'diagnose_wrong';
    }
    if (/(kenapa|why|apa maksud|beza|difference|konsep|concept|explain|terangkan)/i.test(s)) {
      return 'why_concept';
    }
    return 'general_guide';
  }

  // Try parsing a live quadratic expression e.g. "2x^2 - 7x + 3"
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
      ? `**Analisis Pintar Kuadratik** bagi $${U.polyTex([{ c: a, p: 2 }, { c: b, p: 1 }, { c: c, p: 0 }])} = 0$:\n` +
        `1. **[P1] Pembezalayan:** $\\Delta = (${b})^2 - 4(${a})(${c}) = ${U.roundStr(disc)}$\n` +
        `2. **[K1] HTP & HDP:** $\\alpha + \\beta = ${U.roundStr(-b / a)}$, $\\alpha\\beta = ${U.roundStr(c / a)}$\n` +
        `3. **[J1] Punca:** ${rootsStr}\n` +
        `4. **Titik Pusingan (Verteks):** $(${U.roundStr(h)},\\; ${U.roundStr(k)})$`
      : `**Smart Quadratic Analysis** for $${U.polyTex([{ c: a, p: 2 }, { c: b, p: 1 }, { c: c, p: 0 }])} = 0$:\n` +
        `1. **[P1] Discriminant:** $\\Delta = (${b})^2 - 4(${a})(${c}) = ${U.roundStr(disc)}$\n` +
        `2. **[K1] SOR & POR:** $\\alpha + \\beta = ${U.roundStr(-b / a)}$, $\\alpha\\beta = ${U.roundStr(c / a)}$\n` +
        `3. **[J1] Roots:** ${rootsStr}\n` +
        `4. **Turning Point (Vertex):** $(${U.roundStr(h)},\\; ${U.roundStr(k)})$`;
  }

  // Try parsing live linear function f(x) = ax + b for inverse
  function trySolveLiveFunction(text, lang) {
    const cleaned = text.replace(/\s+/g, '');
    const m = cleaned.match(/f\(x\)=([+-]?\d*\.?\d*)x([+-]\d+\.?\d*)?/i);
    if (!m) return null;
    const a = (!m[1] || m[1] === '+') ? 1 : (m[1] === '-' ? -1 : parseFloat(m[1]));
    const b = m[2] ? parseFloat(m[2]) : 0;
    if (!a) return null;
    const signB = -b >= 0 ? ' + ' + Math.abs(b) : ' - ' + Math.abs(b);
    return lang === 'bm'
      ? `**Bimbingan Fungsi Songsang** bagi $f(x) = ${U.polyTex([{ c: a, p: 1 }, { c: b, p: 0 }])}$:\n` +
        `1. Biar $y = ${U.polyTex([{ c: a, p: 1 }, { c: b, p: 0 }])}$\n` +
        `2. Pindahkan pemalar: $${a}x = y ${signB}$\n` +
        `3. Maka fungsi songsang ialah: $$f^{-1}(x) = \\frac{x ${signB}}{${a}}$$`
      : `**Inverse Function Walkthrough** for $f(x) = ${U.polyTex([{ c: a, p: 1 }, { c: b, p: 0 }])}$:\n` +
        `1. Let $y = ${U.polyTex([{ c: a, p: 1 }, { c: b, p: 0 }])}$\n` +
        `2. Isolate $x$: $${a}x = y ${signB}$\n` +
        `3. Replace $y$ with $x$: $$f^{-1}(x) = \\frac{x ${signB}}{${a}}$$`;
  }

  // Context-Aware Socratic Coach for the ACTIVE Practice Question!
  function coachOnQuestion(userText, question, chapter, lastStudentAnswer, lang) {
    const l = lang || App.lang || 'bm';
    const intent = detectIntent(userText);
    const meta = question.intentMeta || {};
    const firstGuided = (question.guidedSteps && question.guidedSteps[0]) ? U.t(question.guidedSteps[0].prompt, l) : '';

    // Check if student typed a number in their message like "saya dapat 12"
    const numInMsgMatch = String(userText || '').match(/(-?\d+(\.\d+)?)/);
    const candidateWrong = lastStudentAnswer || (numInMsgMatch ? numInMsgMatch[1] : '');

    if (intent === 'motivation') {
      return {
        tag: l === 'bm' ? 'Semangat & Strategi' : 'Mindset & Strategy',
        category: 'mindset',
        reply: l === 'bm'
          ? `Jangan risau, AddMath memang rasa mencabar bila kita cuba lompat terus ke jawapan akhir! Rahsianya ialah **pecahkan kepada langkah kecil**.\n\nMari kita mula perlahan-lahan:\n- **Maklumat diberi:** $${meta.given || ''}$\n- **Langkah kecil pertama:** ${firstGuided || question.hints[0]}`
          : `Don't worry — AddMath only feels overwhelming when we try to jump straight to the end! The secret is **breaking it into tiny steps**.\n\nLet's take just Step 1 together:\n- **Given:** $${meta.given || ''}$\n- **First micro-step:** ${firstGuided || question.hints[0]}`
      };
    }

    if (intent === 'stuck_start') {
      return {
        tag: l === 'bm' ? 'Intent Dikesan: Buntu Nak Mula' : 'Intent Detected: Stuck Starting',
        category: 'P',
        reply: l === 'bm'
          ? `Saya nampak awak tak pasti nak mula dari mana. Jom kita bedah soalan ini:\n` +
            `- **Apa yang diberi:** $${meta.given || '-'}$\n` +
            `- **Sasaran kita:** ${meta.goal || '-'}\n\n` +
            `**Cuba jawab langkah pertama ini dahulu:** ${firstGuided || question.hints[0]}`
          : `I see you're unsure how to begin. Let's unpack the question:\n` +
            `- **What we know:** $${meta.given || '-'}$\n` +
            `- **Our goal:** ${meta.goal || '-'}\n\n` +
            `**Try answering just this first step:** ${firstGuided || question.hints[0]}`
      };
    }

    if (intent === 'formula_confusion') {
      return {
        tag: l === 'bm' ? 'Intent Dikesan: Pemilihan Rumus [P]' : 'Intent Detected: Formula Selection [P]',
        category: 'P',
        reply: l === 'bm'
          ? `Untuk subtopik **${U.t(question.subtopic, 'bm')}**, prinsip/rumus kunci yang kita perlukan ialah:\n` +
            `👉 **${meta.conceptRule || question.steps[0].tex}**\n\n` +
            `Cuba padankan nilai daripada soalan ($${meta.given || ''}$) ke dalam hubungan di atas!`
          : `For **${U.t(question.subtopic, 'en')}**, the key rule/formula you need is:\n` +
            `👉 **${meta.conceptRule || question.steps[0].tex}**\n\n` +
            `Try matching the given values ($${meta.given || ''}$) into that rule!`
      };
    }

    if (intent === 'diagnose_wrong' || candidateWrong) {
      if (candidateWrong) {
        const evalRes = U.evaluateAnswer(question, candidateWrong, l);
        if (evalRes.correct) {
          return {
            tag: l === 'bm' ? 'Semakan: Jawapan Betul!' : 'Check: Correct Answer!',
            category: 'ok',
            reply: l === 'bm'
              ? `Sebenarnya nilai **${candidateWrong}** itu sudah **TEPAT**! Masukkan dalam kotak jawapan dan tekan Semak untuk menuntut XP awak!`
              : `Your value **${candidateWrong}** is actually **100% CORRECT**! Submit it in the answer box to claim your XP!`
          };
        }
        if (evalRes.trapHit) {
          return {
            tag: l === 'bm' ? 'Diagnostik Punca Gagal Faham' : 'Misconception Root-Cause Found',
            category: 'K',
            reply: `${evalRes.feedback}\n\n💡 **Langkah pembetulan:** ${firstGuided || question.hints[0]}`
          };
        }
      }
      return {
        tag: l === 'bm' ? 'Diagnostik Langkah Kerja [K]' : 'Working Step Diagnosis [K]',
        category: 'K',
        reply: l === 'bm'
          ? `Mari kita kesan di langkah mana kiraan tersasar! Klik butang **"Bimbing Langkah demi Langkah"** di bawah supaya kita semak nilai awak satu persatu bermula dengan:\n👉 ${firstGuided || question.hints[0]}`
          : `Let's pinpoint exactly which step drifted! Click **"Step-by-Step Guided Mode"** below so we can verify each intermediate value starting with:\n👉 ${firstGuided || question.hints[0]}`
      };
    }

    // Default conceptual why / general guide
    const whyStep = question.steps && question.steps[0] ? question.steps[0].why : '';
    return {
      tag: l === 'bm' ? 'Bimbingan Konsep Sokratik' : 'Socratic Concept Guide',
      category: 'P',
      reply: l === 'bm'
        ? `**Intipati Konsep (${U.t(chapter.title, 'bm')}):** ${whyStep}\n\n` +
          `Prinsip utamanya ialah **${meta.conceptRule || ''}**. Cuba mulakan dengan: ${firstGuided || question.hints[0]}`
        : `**Core Intuition (${U.t(chapter.title, 'en')}):** ${whyStep}\n\n` +
          `The governing principle is **${meta.conceptRule || ''}**. Start by trying: ${firstGuided || question.hints[0]}`
    };
  }

  // Standalone Smart Tutor Responder (Tab "Cikgu AI" + Optional Gemini API)
  async function askSmartTutor(userMessage, activeChapter, lang) {
    const l = lang || App.lang || 'bm';
    const msg = String(userMessage || '').trim();

    // 1. Check live symbolic solvers first!
    const quadOut = trySolveLiveQuadratic(msg, l);
    if (quadOut) return quadOut;

    const fnOut = trySolveLiveFunction(msg, l);
    if (fnOut) return fnOut;

    // 2. If optional Gemini API Key is configured by user, call Gemini with KSSM Socratic prompt
    const apiKey = localStorage.getItem('addmath_gemini_key');
    if (apiKey && navigator.onLine) {
      try {
        const sysPrompt = l === 'bm'
          ? 'Anda ialah Cikgu Pintar Matematik Tambahan KSSM SPM Malaysia. Fahami intent pelajar, kesan di mana pelajar keliru, terangkan konsep dengan mudah menggunakan LaTeX ($...$), dan bimbing secara Sokratik langkah demi langkah ikut skema markah P, K, J.'
          : 'You are an expert Malaysian KSSM SPM Additional Mathematics Socratic Tutor. Detect student misconceptions, explain clearly with LaTeX ($...$), and guide step-by-step with P, K, J marking insights.';
        const resp = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${encodeURIComponent(apiKey)}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            systemInstruction: { parts: [{ text: sysPrompt }] },
            contents: [{ role: 'user', parts: [{ text: `[Bab Semasa: ${U.t(activeChapter.title, l)}] Soalan pelajar: ${msg}` }] }]
          })
        });
        if (resp.ok) {
          const data = await resp.json();
          const aiText = data?.candidates?.[0]?.content?.parts?.[0]?.text;
          if (aiText) return aiText;
        }
      } catch (_) {
        // Gracefully fall back to built-in intelligence engine
      }
    }

    // 3. Built-in KSSM Topic Knowledge & Intent Matcher
    const lower = msg.toLowerCase();
    if (/(songsang|inverse)/i.test(lower)) {
      return l === 'bm'
        ? `**Konsep Fungsi Songsang ($f^{-1}$):**\nBayangkan $f$ ialah mesin yang menukar objek $x$ kepada imej $y$. Fungsi songsang $f^{-1}$ membalikkan proses itu daripada $y$ kembali kepada $x$!\n\n- **Syarat wujud:** $f$ mesti fungsi **satu-ke-satu** (lulus Ujian Garis Mengufuk).\n- **Cara cari $f^{-1}(x)$:**\n  1. Tulis $y = f(x)$\n  2. Jadikan $x$ sebagai perkara rumus dalam sebutan $y$\n  3. Tukar simbol $y$ kepada $x$.\n\n*Tip:* Taip contoh seperti \`f(x) = 3x - 5\` di sini dan saya akan tunjukkan jalannya!`
        : `**Inverse Functions ($f^{-1}$):**\nThink of $f$ as a machine mapping $x \\to y$. The inverse $f^{-1}$ reverses that exact arrow $y \\to x$!\n\n- **Existence rule:** $f$ must be **one-to-one** (passes the Horizontal Line Test).\n- **3-Step Method:**\n  1. Let $y = f(x)$\n  2. Rearrange to isolate $x$ in terms of $y$\n  3. Swap dummy symbol $y$ to $x$.\n\n*Tip:* Type \`f(x) = 3x - 5\` right here and watch me solve it!`;
    }

    if (/(gubahan|composite|gf|fg)/i.test(lower)) {
      return l === 'bm'
        ? `**Rahsia Fungsi Gubahan $gf(x)$:**\nBaca dari **kanan ke kiri** (dari dalam ke luar)!\n- Dalam $gf(x) = g(f(x))$, masukkan $x$ ke dalam **$f$ dahulu**, kemudian hasilnya dimasukkan ke dalam **$g$**.\n- **Perangkap utama SPM:** Jangan tertukar $gf(x)$ dengan $fg(x)$! Jika diberi $f(x)$ dan $gf(x)$ tetapi diminta cari $g(x)$ (fungsi luar), gunakan gantian $u = f(x)$.`
        : `**Secret to Composite Functions $gf(x)$:**\nWork **inside-out** (right to left)!\n- In $gf(x) = g(f(x))$, apply **$f$ first**, then plug that expression into every $x$ inside **$g$**.\n- **Top SPM Trap:** Never confuse $gf(x)$ with $fg(x)$! To find outer $g(x)$ from $gf(x)$ and $f(x)$, let $u = f(x)$.`;
    }

    if (/(kuadratik|quadratic|punca|roots|sor|por|htp|hdp|pembezalayan|discriminant|b\^2)/i.test(lower)) {
      return l === 'bm'
        ? `**Peta Pintar Fungsi Kuadratik ($ax^2 + bx + c = 0$):**\n1. **Sifat Punca ($\\Delta = b^2 - 4ac$):**\n   - $\\Delta > 0$: 2 punca nyata berbeza\n   - $\\Delta = 0$: 2 punca sama (tangen pada paksi-$x$)\n   - $\\Delta < 0$: Tiada punca nyata\n2. **HTP & HDP:** $\\alpha + \\beta = -\\frac{b}{a}$ dan $\\alpha\\beta = \\frac{c}{a}$.\n3. **Verteks:** Sempurnakan kuasa dua ke bentuk $a(x-h)^2 + k$ untuk terus dapat titik pusingan $(h, k)$.\n\n*Cuba taip sebarang kuadratik seperti \`2x^2 - 8x + 6 = 0\` untuk analisis penuh!*`
        : `**Quadratic Mastery Cheat-Map ($ax^2 + bx + c = 0$):**\n1. **Nature of Roots ($\\Delta = b^2 - 4ac$):**\n   - $\\Delta > 0$: 2 distinct real roots\n   - $\\Delta = 0$: 2 equal roots (tangent)\n   - $\\Delta < 0$: No real roots\n2. **SOR & POR:** $\\alpha + \\beta = -\\frac{b}{a}$ and $\\alpha\\beta = \\frac{c}{a}$.\n3. **Vertex:** Complete the square to $a(x-h)^2 + k$ for turning point $(h, k)$.\n\n*Try typing any quadratic like \`2x^2 - 8x + 6 = 0\` for instant step-by-step analysis!*`;
    }

    if (/(serentak|simultaneous|3 pemboleh|three variable|hapus|eliminat)/i.test(lower)) {
      return l === 'bm'
        ? `**Strategi Sistem Persamaan Tanpa Silap:**\n- **Sistem 3 Pemboleh Ubah ($x, y, z$):** Pilih SATU huruf yang paling mudah (pekali $\\pm 1$), hapuskannya daripada Pasangan (1,2) dan Pasangan (2,3). Jangan terhapus huruf berbeza!\n- **1 Linear + 1 Tak Linear:** Asingkan $y$ atau $x$ daripada persamaan **linear** dahulu, gantikan ke dalam tak linear, dan akhir sekali cari pasangan koordinat menggunakan persamaan **linear** semula.`
        : `**Zero-Mistake Systems Strategy:**\n- **3 Linear Variables ($x, y, z$):** Pick ONE variable (ideally coeff $\\pm 1$) and eliminate that EXACT SAME variable from Pair (1,2) and Pair (2,3).\n- **1 Linear + 1 Non-Linear:** Isolate $y$ or $x$ from the **linear** equation first, substitute into the curve, and back-substitute into the **linear** equation.`;
    }

    if (/(log|indeks|surd|konjugat|conjugate|indices)/i.test(lower)) {
      return l === 'bm'
        ? `**Panduan Pantas Indeks, Surd & Logaritma:**\n- **Surd Konjugat:** Untuk $\\frac{k}{a + \\sqrt{b}}$, darab atas & bawah dengan $(a - \\sqrt{b})$ supaya penyebut jadi $a^2 - b$.\n- **Logaritma:** Ingat $N = a^x \\iff \\log_a N = x$. Jika asas berbeza, tukar kepada asas sepunya menggunakan $\\log_a b = \\frac{\\log_c b}{\\log_c a}$.\n- **Amaran Keras:** $\\log_a(x + y)$ TIDAK BOLEH dikembangkan!`
        : `**Indices, Surds & Logs Quick Guide:**\n- **Surd Conjugate:** Multiply $\\frac{k}{a + \\sqrt{b}}$ top & bottom by $(a - \\sqrt{b})$ to get rational $a^2 - b$.\n- **Logarithms:** $N = a^x \\iff \\log_a N = x$. Match different bases via $\\log_a b = \\frac{\\log_c b}{\\log_c a}$.\n- **Golden Warning:** $\\log_a(x + y)$ NEVER splits!`;
    }

    if (/(janjang|progression|aritmetik|geometri|ketakterhinggaan|infinity)/i.test(lower)) {
      return l === 'bm'
        ? `**Cara Bezakan JA vs JG dalam 5 Saat:**\n- **Janjang Aritmetik (JA):** Tambah/tolak nilai malar $d = T_2 - T_1$. Rumus: $T_n = a + (n-1)d$.\n- **Janjang Geometri (JG):** Darab nisbah malar $r = T_2 / T_1$. Rumus: $T_n = ar^{n-1}$, dan jika $|r| < 1$, $S_\\infty = \\frac{a}{1-r}$.\n- **Petua Emas SPM:** Diberi rumus $S_n$ dan diminta cari $T_n$? Gunakan $T_n = S_n - S_{n-1}$!`
        : `**Spot AP vs GP in 5 Seconds:**\n- **Arithmetic (AP):** Constant difference $d = T_2 - T_1$, $T_n = a + (n-1)d$.\n- **Geometric (GP):** Constant ratio $r = T_2 / T_1$, $T_n = ar^{n-1}$, and for $|r| < 1$, $S_\\infty = \\frac{a}{1-r}$.\n- **Golden SPM Trick:** Given $S_n$ formula and asked for $T_n$? Always use $T_n = S_n - S_{n-1}$!`;
    }

    // Fallback grounded in active chapter's concepts & traps
    const chTitle = U.t(activeChapter.title, l);
    const trap = activeChapter.traps && activeChapter.traps[0] ? U.t(activeChapter.traps[0].desc, l) : '';
    return l === 'bm'
      ? `Saya sedia membimbing awak dalam **${chTitle}**! Awak boleh:\n` +
        `1. Tanya konsep spesifik (cth: *"macam mana cari fungsi songsang?"*, *"apa syarat dua punca sama?"*, *"beza JA dan JG"*)\n` +
        `2. Taip persamaan terus seperti \`2x^2 - 5x - 3 = 0\` atau \`f(x) = 4x - 7\`\n` +
        `3. Atau pergi ke tab **Latihan Berpandu** di mana saya boleh mengesan kesilapan awak langkah demi langkah!\n\n💡 *Peringatan SPM Bab Ini:* ${trap}`
      : `I'm ready to coach you on **${chTitle}**! You can:\n` +
        `1. Ask any concept question (e.g. *"how to find inverse function?"*, *"nature of roots"*, *"AP vs GP"*)\n` +
        `2. Type an equation directly like \`2x^2 - 5x - 3 = 0\` or \`f(x) = 4x - 7\`\n` +
        `3. Or jump into **Guided Practice**, where I diagnose where you're stuck step-by-step!\n\n💡 *SPM Trap Alert:* ${trap}`;
  }

  App.coach = {
    detectIntent,
    coachOnQuestion,
    askSmartTutor
  };
})(window.AddMathApp);
