/**
 * AddMath Mudah — Pengawal Antara Muka Utama (Dwi-Bahasa BM / EN, Mobile-First, Live Dynamic Steps)
 */
window.AddMathApp = window.AddMathApp || {};

(function (App) {
  'use strict';
  const U = App.utils;
  const G = App.gamify;

  const state = G.loadState();
  App.lang = state.lang || 'bm';

  let currentView = 'home'; // 'home' | 'learn' | 'blitz' | 'tutor' | 'profile'
  let activeChapterId = 'f4-c1';
  let activeSubTab = 'concept'; // 'concept' | 'bank' | 'solver' | 'practice'
  let activeTier = 1; // 1, 2, 3
  let currentQuestion = null;
  let draftAnswer = '';
  let lastWrongAttempt = '';
  let coachOutput = null;
  let guidedActive = false;
  let guidedIndex = 0;
  let showFullSolution = false;
  let customEqResult = '';
  let tutorMessages = [];
  let blitzTimer = null;
  let blitzState = { active: false, timeLeft: 60, score: 0, idx: 0 };
  let homeFormFilter = 'all'; // 'all' | '4' | '5'
  let solverRunCount = 0;
  let mbankSearch = '';
  let mbankOpenMistake = {};
  let mbankOpenScheme = {};
  let mbankExpandAll = false;

  function L(bm, en) {
    return App.lang === 'bm' ? bm : en;
  }

  function getChapBankList(chapId) {
    return (App.masterBank && App.masterBank[chapId]) || [];
  }

  function getChapBankStats(chapId) {
    const list = getChapBankList(chapId);
    const doneMap = state.masterBankDone || {};
    let done = 0;
    list.forEach((it) => {
      if (doneMap[chapId + ':' + it.code]) done++;
    });
    return { done, total: list.length };
  }

  function getTotalBankStats() {
    let done = 0;
    let total = 0;
    App.chapters.forEach((c) => {
      const st = getChapBankStats(c.id);
      done += st.done;
      total += st.total;
    });
    return { done, total };
  }

  function getActiveChapter() {
    return App.chapters.find((c) => c.id === activeChapterId) || App.chapters[0];
  }

  function applyTheme() {
    document.documentElement.setAttribute('data-theme', state.theme || 'light');
  }

  function awardXP(pts) {
    state.xp = (state.xp || 0) + pts;
    G.saveState(state);
    renderHeader();
  }

  function ensureQuestion() {
    const ch = getActiveChapter();
    if (!currentQuestion || currentQuestion._chapId !== ch.id || currentQuestion.tier !== activeTier || currentQuestion._lang !== App.lang) {
      currentQuestion = ch.generateQuestion(activeTier, App.lang);
      currentQuestion._chapId = ch.id;
      currentQuestion._lang = App.lang;
      draftAnswer = '';
      lastWrongAttempt = '';
      coachOutput = null;
      guidedActive = false;
      guidedIndex = 0;
      showFullSolution = false;
    }
  }

  function saveDraftAnswer() {
    const inp = document.getElementById('practice-ans-input');
    if (inp) draftAnswer = inp.value;
  }

  function renderHeader() {
    const rank = G.getRankInfo(state.xp, App.lang);
    document.getElementById('hdr-xp').textContent = `${state.xp} XP`;
    document.getElementById('hdr-streak').textContent = `🔥 ${state.streak}`;
    document.getElementById('brand-sub').textContent = L('KSSM Tingkatan 4 & 5 • Pintar', 'KSSM Form 4 & 5 • Smart Coach');
    document.getElementById('btn-lang-bm').classList.toggle('active', App.lang === 'bm');
    document.getElementById('btn-lang-en').classList.toggle('active', App.lang === 'en');
    document.getElementById('btn-theme').textContent = state.theme === 'dark' ? '☀️' : '🌙';

    const navMap = [
      { id: 'home', bm: 'Utama', en: 'Home', ico: '🏠' },
      { id: 'learn', bm: 'Belajar', en: 'Learn', ico: '📘' },
      { id: 'blitz', bm: 'Kilat 60s', en: '60s Blitz', ico: '⚡' },
      { id: 'tutor', bm: 'Cikgu AI', en: 'AI Coach', ico: '🧠' },
      { id: 'profile', bm: 'Formula & Skor', en: 'Vault & Stats', ico: '🏆' }
    ];

    const bnav = document.getElementById('bottom-nav');
    bnav.innerHTML = navMap.map((n) => `
      <button class="bnav-btn ${currentView === n.id ? 'active' : ''}" data-nav="${n.id}">
        <span class="bnav-ico">${n.ico}</span>
        <span>${L(n.bm, n.en)}</span>
      </button>
    `).join('');

    const snav = document.getElementById('side-main-nav');
    snav.innerHTML = navMap.map((n) => `
      <button class="side-link ${currentView === n.id ? 'active' : ''}" data-nav="${n.id}">
        <span>${n.ico}</span><span>${L(n.bm, n.en)}</span>
      </button>
    `).join('') + `<div style="margin-top:10px;font-size:0.76rem;color:var(--text-muted);padding:0 8px;">Lv.${rank.level} • ${rank.title}</div>`;

    const schaps = document.getElementById('side-chap-list');
    const f4Chaps = App.chapters.filter((c) => c.form === 4);
    const f5Chaps = App.chapters.filter((c) => c.form === 5);
    const renderSideGroup = (list) => list.map((c) => {
      const m = state.mastery[c.id] || 0;
      return `<button class="chap-mini-btn ${currentView === 'learn' && activeChapterId === c.id ? 'active' : ''}" data-open-chap="${c.id}">
        <span><strong>${c.num}.</strong> ${U.t(c.title, App.lang)}</span>
        <span style="font-size:0.74rem;color:var(--accent);font-weight:800;">${m}%</span>
      </button>`;
    }).join('');
    schaps.innerHTML =
      `<div style="font-size:0.74rem;font-weight:800;color:var(--primary);margin-bottom:5px;">${L('TINGKATAN 4 (BAB 1–10)', 'FORM 4 (CH 1–10)')}</div>` +
      renderSideGroup(f4Chaps) +
      `<div style="font-size:0.74rem;font-weight:800;color:var(--primary);margin:12px 0 5px;">${L('TINGKATAN 5 (BAB 1–8)', 'FORM 5 (CH 1–8)')}</div>` +
      renderSideGroup(f5Chaps);
  }

  function renderHomeView(container) {
    const rank = G.getRankInfo(state.xp, App.lang);
    const q1 = state.quests.lab ? '✅' : '⬜';
    const q2 = state.quests.solve3 ? '✅' : '⬜';
    const q3 = state.quests.kbat1 ? '✅' : '⬜';
    const totalBank = getTotalBankStats();
    const bankPct = totalBank.total ? Math.round((totalBank.done / totalBank.total) * 100) : 0;
    const visibleChaps = homeFormFilter === 'all'
      ? App.chapters
      : App.chapters.filter((c) => String(c.form) === homeFormFilter);

    container.innerHTML = `
      <div class="hero-banner">
        <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;">
          <span style="background:rgba(255,255,255,0.2);padding:4px 12px;border-radius:999px;font-size:0.76rem;font-weight:800;">
            Lv.${rank.level} • ${rank.title}
          </span>
          <span style="font-size:0.82rem;font-weight:700;">Combo 🔥 x${state.combo || 0}</span>
        </div>
        <h1 style="margin-top:10px;">${L('Kuasai Semua 18 Bab AddMath T4 & T5 Secara Visual!', 'Master All 18 Form 4 & 5 AddMath Chapters Visually!')}</h1>
        <p>${L('Silibus penuh KSSM (T4 Bab 1–10 & T5 Bab 1–8) kini dilengkapi 180 Contoh Soalan Peperiksaan SPM, Analisis Kesilapan Lazim Murid & Skim Pemarkahan Penuh (K1/N1)!', 'Complete KSSM syllabus (F4 Ch 1–10 & F5 Ch 1–8) now equipped with 180 Master SPM Exam Questions, Common Student Mistakes & Analytical K1/N1 Marking Schemes!')}</p>
        <div style="font-size:0.78rem;font-weight:700;">${L('Kemajuan Tahap Seterusnya', 'Next Rank Progress')} (${state.xp} XP)</div>
        <div class="xp-bar-wrap"><div class="xp-bar-fill" style="width:${rank.pct}%"></div></div>
      </div>

      <div class="card" style="border-color:var(--primary);background:linear-gradient(180deg, var(--primary-soft), var(--surface));">
        <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px;">
          <div style="flex:1;min-width:220px;">
            <div style="font-size:0.75rem;font-weight:800;color:var(--primary);">🆕 ${L('CIRI BAHARU • BANK SOALAN MASTER SPM', 'NEW FEATURE • MASTER SPM QUESTION BANK')}</div>
            <h3 style="font-size:1.05rem;margin:2px 0 4px;">📋 ${L('180 Contoh Soalan SPM, Kesilapan Lazim & Cara Menjawab Betul (K1/N1)', '180 SPM Exam Questions, Common Mistakes & Correct K1/N1 Methods')}</h3>
            <div style="font-size:0.84rem;color:var(--text-muted);">
              ${L(`10 soalan peperiksaan setiap bab merentasi kesemua 18 bab T4 & T5 • Dikuasai: ${totalBank.done} / ${totalBank.total} (${bankPct}%)`, `10 exam questions per chapter across all 18 F4 & F5 chapters • Mastered: ${totalBank.done} / ${totalBank.total} (${bankPct}%)`)}
            </div>
            <div class="xp-bar-wrap" style="background:var(--border);height:8px;margin-top:8px;">
              <div class="xp-bar-fill" style="width:${bankPct}%;background:var(--accent);"></div>
            </div>
          </div>
          <button class="btn btn-primary" data-open-bank-chap="${activeChapterId}">📋 ${L('Teroka Bank 180 Soalan SPM →', 'Explore 180 SPM Bank →')}</button>
        </div>
      </div>

      <div class="card">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;flex-wrap:wrap;gap:8px;">
          <h3 style="font-size:1.02rem;">🎯 ${L('Misi Motivasi Harian', 'Daily Motivation Quests')}</h3>
          <button class="btn btn-accent btn-sm" data-nav="blitz">⚡ ${L('Main Kilat Konsep 60s', 'Play 60s Concept Blitz')}</button>
        </div>
        <div style="display:grid;gap:8px;font-size:0.88rem;">
          <div>${q1} ${L('Teroka 1 Makmal Graf Interaktif (+30 XP)', 'Explore 1 Interactive Graph Lab (+30 XP)')}</div>
          <div>${q2} ${L(`Selesaikan 3 Soalan Latihan (${Math.min(3, state.solvedCount)}/3) (+50 XP)`, `Solve 3 Practice Questions (${Math.min(3, state.solvedCount)}/3) (+50 XP)`)}</div>
          <div>${q3} ${L('Tewaskan 1 Soalan Aras KBAT TP5–TP6 (+80 XP)', 'Conquer 1 HOTS TP5–TP6 Problem (+80 XP)')}</div>
        </div>
      </div>

      <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;margin:14px 0 12px;">
        <h3 style="font-size:1.08rem;">📚 ${L('Silibus Lengkap KSSM (18/18 Bab Aktif!)', 'Complete KSSM Syllabus (18/18 Chapters Unlocked!)')}</h3>
        <div style="display:flex;gap:6px;flex-wrap:wrap;">
          <button class="btn btn-sm ${homeFormFilter === 'all' ? 'btn-primary' : 'btn-outline'}" data-form-filter="all">${L('Semua (18)', 'All (18)')}</button>
          <button class="btn btn-sm ${homeFormFilter === '4' ? 'btn-primary' : 'btn-outline'}" data-form-filter="4">${L('Tingkatan 4 (10)', 'Form 4 (10)')}</button>
          <button class="btn btn-sm ${homeFormFilter === '5' ? 'btn-primary' : 'btn-outline'}" data-form-filter="5">${L('Tingkatan 5 (8)', 'Form 5 (8)')}</button>
        </div>
      </div>

      <div class="grid-2">
        ${visibleChaps.map((c) => {
          const m = state.mastery[c.id] || 0;
          const bSt = getChapBankStats(c.id);
          return `
            <div class="chap-card" data-open-chap="${c.id}">
              <div style="display:flex;gap:12px;align-items:flex-start;">
                <div class="chap-icon" style="background:${c.color}">${c.icon}</div>
                <div style="flex:1;">
                  <div style="font-size:0.73rem;font-weight:800;color:var(--primary);">${U.t(c.code, App.lang)} • ${U.t(c.spmWeight, App.lang)}</div>
                  <div style="font-weight:800;font-size:1rem;margin:2px 0;">${U.t(c.title, App.lang)}</div>
                  <div style="font-size:0.82rem;color:var(--text-muted);">${U.t(c.subtitle, App.lang)}</div>
                </div>
              </div>
              <div>
                <div style="display:flex;justify-content:space-between;align-items:center;gap:6px;margin-bottom:6px;flex-wrap:wrap;">
                  <span style="font-size:0.75rem;font-weight:700;">${L('Penguasaan TP1–TP6', 'TP1–TP6 Mastery')}: ${m}%</span>
                  <button type="button" class="btn btn-outline btn-sm" style="padding:3px 9px;min-height:26px;font-size:0.73rem;" data-open-bank-chap="${c.id}">
                    📋 ${L(`Contoh SPM (${bSt.done}/${bSt.total})`, `SPM Bank (${bSt.done}/${bSt.total})`)}
                  </button>
                </div>
                <div class="xp-bar-wrap" style="background:var(--border);height:7px;">
                  <div class="xp-bar-fill" style="width:${m}%;background:${c.color};"></div>
                </div>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;
  }

  function renderMasterBankProgHtml(ch) {
    const cSt = getChapBankStats(ch.id);
    const tSt = getTotalBankStats();
    const pct = cSt.total ? Math.round((cSt.done / cSt.total) * 100) : 0;
    return `
      <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:6px;font-size:0.8rem;font-weight:800;margin-top:10px;">
        <span style="color:var(--accent);">🏅 ${L(`Dikuasai Bab Ini: ${cSt.done} / ${cSt.total} Soalan`, `Chapter Mastered: ${cSt.done} / ${cSt.total} Questions`)}</span>
        <span style="color:var(--primary);">📊 ${L(`Jumlah Keseluruhan SPM: ${tSt.done} / ${tSt.total}`, `Total SPM Bank: ${tSt.done} / ${tSt.total}`)}</span>
      </div>
      <div class="xp-bar-wrap" style="background:var(--border);height:8px;margin-top:6px;">
        <div class="xp-bar-fill" style="width:${pct}%;background:var(--accent);"></div>
      </div>
    `;
  }

  function renderMasterBankCardsHtml(ch) {
    const list = getChapBankList(ch.id);
    const kw = mbankSearch.trim().toLowerCase();
    const filtered = kw
      ? list.filter((it) => {
          const hay = `${it.code} ${U.t(it.topic, App.lang)} ${U.t(it.q, App.lang)} ${(it.mistakes[App.lang] || []).join(' ')}`.toLowerCase();
          return hay.includes(kw);
        })
      : list;

    if (!filtered.length) {
      return `<div class="card" style="text-align:center;color:var(--text-muted);">${L('Tiada soalan sepadan dengan kata kunci carian anda.', 'No questions match your search filter.')}</div>`;
    }

    const doneMap = state.masterBankDone || {};
    return filtered.map((it) => {
      const key = ch.id + ':' + it.code;
      const isDone = Boolean(doneMap[key]);
      const showM = mbankExpandAll || Boolean(mbankOpenMistake[key]);
      const showS = mbankExpandAll || Boolean(mbankOpenScheme[key]);
      const mistakesArr = (it.mistakes && (it.mistakes[App.lang] || it.mistakes.bm)) || [];

      return `
        <div class="mbank-card ${isDone ? 'mastered' : ''}">
          <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:8px;flex-wrap:wrap;">
            <div>
              <span class="spm-badge spm-P1">${L('Soalan', 'Question')} ${it.code}</span>
              <strong style="font-size:0.98rem;">${U.renderMixed(U.t(it.topic, App.lang))}</strong>
            </div>
            <div style="display:flex;align-items:center;gap:6px;">
              ${isDone ? `<span class="spm-badge spm-N1">✅ ${L('Dikuasai', 'Mastered')}</span>` : ''}
              <span style="font-size:0.76rem;font-weight:800;color:var(--primary);">[${it.marks} ${L('Markah', 'Marks')}]</span>
            </div>
          </div>

          <div class="mbank-qbox">${U.renderMixed(U.t(it.q, App.lang))}</div>

          <div style="display:flex;gap:8px;flex-wrap:wrap;">
            <button type="button" class="btn btn-sm ${showM ? 'btn-primary' : 'btn-outline'}" data-mbank-mistake="${key}">
              ⚠️ ${showM ? L('Tutup Kesilapan Lazim', 'Hide Common Mistakes') : L('Kesilapan Lazim Murid', 'Common Mistakes')}
            </button>
            <button type="button" class="btn btn-sm ${showS ? 'btn-accent' : 'btn-outline'}" data-mbank-scheme="${key}">
              ✅ ${showS ? L('Tutup Cara Menjawab & Skim', 'Hide Correct Method & Scheme') : L('Cara Menjawab Betul & Skim K1/N1', 'Correct Method & K1/N1 Scheme')}
            </button>
            <button type="button" class="btn btn-sm ${isDone ? 'btn-accent' : 'btn-outline'}" data-mbank-done="${key}">
              ${isDone ? `🏅 ${L('Telah Dikuasai ✓', 'Mastered ✓')}` : `🏅 ${L('Faham & Kuasai (+10 XP)', 'Mark Mastered (+10 XP)')}`}
            </button>
          </div>

          ${showM ? `
            <div class="mbank-mistake-panel anim-in">
              <div style="font-weight:800;color:var(--danger);margin-bottom:6px;">
                ⚠️ ${L('Analisis Kesilapan Lazim Murid (Elakkan Hilang Markah!):', 'Common Student Mistakes (Avoid Losing Marks!):')}
              </div>
              <ul style="padding-left:18px;display:grid;gap:5px;">
                ${mistakesArr.map((mItem) => `<li>${U.renderMixed(mItem)}</li>`).join('')}
              </ul>
            </div>
          ` : ''}

          ${showS ? `
            <div class="mbank-scheme-panel anim-in">
              <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:6px;margin-bottom:4px;">
                <strong style="color:var(--accent);">✅ ${L('Cara Menjawab Yang Betul & Skim Pemarkahan Analitik SPM:', 'Correct Solution Method & Analytical SPM Marking Scheme:')}</strong>
                <span style="font-size:0.73rem;font-weight:700;color:var(--text-muted);">K1 = ${L('Kaedah', 'Method')} • N1 = ${L('Nilai Tepat', 'Accuracy')}</span>
              </div>
              ${(it.scheme || []).map((st) => `
                <div class="mbank-scheme-row">
                  <span class="spm-badge spm-${st.badge}">${st.badge}</span>
                  <span>${U.renderMixed(U.t(st, App.lang))}</span>
                </div>
              `).join('')}
            </div>
          ` : ''}
        </div>
      `;
    }).join('');
  }

  function renderLearnView(container) {
    const ch = getActiveChapter();
    ensureQuestion();
    const chapBank = getChapBankStats(ch.id);

    const chapSelector = `
      <div style="display:flex;gap:6px;overflow-x:auto;padding-bottom:8px;margin-bottom:10px;">
        ${App.chapters.map((c) => `
          <button class="btn btn-sm ${c.id === ch.id ? 'btn-primary' : 'btn-outline'}" data-switch-chap="${c.id}">
            ${L('T', 'F')}${c.form}•${c.num} ${U.t(c.title, App.lang)}
          </button>
        `).join('')}
      </div>
    `;

    const tabsHtml = `
      <div class="mode-tabs">
        <button class="mode-tab ${activeSubTab === 'concept' ? 'active' : ''}" data-subtab="concept">🎨 ${L('Konsep & Makmal Graf', 'Concept & Visual Lab')}</button>
        <button class="mode-tab ${activeSubTab === 'bank' ? 'active' : ''}" data-subtab="bank">📋 ${L(`Contoh SPM & Kesilapan (${chapBank.total})`, `SPM Examples & Mistakes (${chapBank.total})`)}</button>
        <button class="mode-tab ${activeSubTab === 'solver' ? 'active' : ''}" data-subtab="solver">🧮 ${L('Smart Solver Dinamik', 'Dynamic Smart Solver')}</button>
        <button class="mode-tab ${activeSubTab === 'practice' ? 'active' : ''}" data-subtab="practice">🎯 ${L('Latihan Berpandu TP1–TP6', 'Guided Practice TP1–TP6')}</button>
      </div>
    `;

    let bodyHtml = '';

    if (activeSubTab === 'concept') {
      const lab = App.visualLabs[ch.id];
      bodyHtml = `
        <div class="card">
          <div style="font-size:0.78rem;font-weight:800;color:var(--primary);">${U.t(ch.code, App.lang)} • ${U.t(ch.spmWeight, App.lang)}</div>
          <h2 style="font-size:1.3rem;margin:2px 0 6px;">${U.t(ch.title, App.lang)}</h2>
          <p style="font-size:0.9rem;color:var(--text-muted);">${U.t(ch.subtitle, App.lang)}</p>
        </div>

        ${lab ? `
        <div class="card">
          <h3 style="font-size:1.05rem;margin-bottom:4px;">🔬 ${U.t(lab.title, App.lang)}</h3>
          <p style="font-size:0.85rem;color:var(--text-muted);margin-bottom:12px;">${U.t(lab.desc, App.lang)}</p>
          <canvas id="active-lab-canvas" class="lab-canvas"></canvas>
          <div id="lab-readout" style="margin-top:10px;font-size:0.84rem;font-weight:700;color:var(--primary);background:var(--primary-soft);padding:8px 12px;border-radius:10px;"></div>
          <div id="lab-sliders">
            ${lab.controls.map((ctrl) => `
              <div class="slider-row">
                <div style="display:flex;justify-content:space-between;font-size:0.83rem;font-weight:700;">
                  <span>${U.t(ctrl.label, App.lang)}</span>
                  <span id="lbl-val-${ctrl.id}">${ctrl.default}</span>
                </div>
                <input type="range" data-lab-ctrl="${ctrl.id}" min="${ctrl.min}" max="${ctrl.max}" step="${ctrl.step}" value="${ctrl.default}">
              </div>
            `).join('')}
          </div>
        </div>` : ''}

        ${ch.concepts.map((sec) => `
          <div class="card">
            <h3 style="font-size:1.02rem;margin-bottom:8px;">${U.t(sec.title, App.lang)}</h3>
            <p style="font-size:0.9rem;margin-bottom:10px;">${U.renderMixed(U.t(sec.body, App.lang))}</p>
            ${sec.formulas.map((f) => `
              <div class="formula-box">
                <div style="font-size:0.75rem;font-weight:700;color:var(--text-muted);margin-bottom:4px;">${U.t(f.label, App.lang)}</div>
                <div>${U.renderTex(f.tex, true)}</div>
              </div>
            `).join('')}
            ${sec.tip ? `<div class="tip-box">💡 <strong>${L('Tip Pintar:', 'Smart Tip:')}</strong> ${U.renderMixed(U.t(sec.tip, App.lang))}</div>` : ''}
          </div>
        `).join('')}

        <div class="card">
          <h3 style="font-size:1.02rem;color:var(--danger);">⚠️ ${L('Radar Perangkap Lazim SPM', 'Common SPM Exam Traps')}</h3>
          ${ch.traps.map((tr) => `
            <div class="trap-box">
              <strong>${U.t(tr.title, App.lang)}:</strong> ${U.renderMixed(U.t(tr.desc, App.lang))}
            </div>
          `).join('')}
          <div style="margin-top:14px;">
            <button type="button" class="btn btn-primary" data-subtab="bank">
              📋 ${L(`Lihat ${chapBank.total} Contoh Soalan SPM, Kesilapan Lazim & Cara Menjawab Betul Bab Ini →`, `View All ${chapBank.total} SPM Exam Examples, Common Mistakes & Marking Schemes →`)}
            </button>
          </div>
        </div>
      `;
    } else if (activeSubTab === 'bank') {
      const safeSearch = mbankSearch.replace(/"/g, '&quot;');
      bodyHtml = `
        <div class="card" style="border-color:var(--primary);">
          <div style="font-size:0.76rem;font-weight:800;color:var(--primary);">${U.t(ch.code, App.lang)} • ${L('BANK SOALAN MASTER SPM', 'MASTER SPM QUESTION BANK')}</div>
          <h2 style="font-size:1.22rem;margin:2px 0 6px;">📋 ${U.t(ch.title, App.lang)} — ${L('Contoh Soalan, Kesilapan Lazim & Skim Pemarkahan', 'Exam Questions, Common Mistakes & Marking Scheme')}</h2>
          <p style="font-size:0.86rem;color:var(--text-muted);">
            ${L('Cuba fikirkan jalan kerja dahulu, kemudian semak **Kesilapan Lazim Murid** dan **Cara Menjawab Betul (K1 = Kaedah, N1 = Nilai Tepat)** supaya tidak hilang markah dalam peperiksaan sebenar!', 'Attempt mentally or on paper first, then inspect **Common Student Mistakes** and **Correct Analytical Working (K1 = Method, N1 = Accuracy)** so you never drop marks in the exam!')}
          </p>
          <div id="mbank-prog-wrap">${renderMasterBankProgHtml(ch)}</div>
          <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:12px;">
            <input id="mbank-search-inp" type="text" class="math-input" style="flex:1;min-width:200px;padding:9px 12px;font-size:0.9rem;" value="${safeSearch}" placeholder="${L('Cari subtopik atau kata kunci dalam bab ini...', 'Filter by subtopic or keyword...')}">
            <button type="button" class="btn btn-outline btn-sm" id="btn-mbank-expand-all">
              ${mbankExpandAll ? `🙈 ${L('Tutup Semua Huraian', 'Collapse All')}` : `👁️ ${L('Buka Semua Kesilapan & Jawapan', 'Reveal All Mistakes & Schemes')}`}
            </button>
          </div>
        </div>
        <div id="mbank-list-wrap">${renderMasterBankCardsHtml(ch)}</div>
      `;
    } else if (activeSubTab === 'solver') {
      // Universal Free-Form Expression Solver + Chapter Dynamic Solvers (NOT pre-hardcoded!)
      bodyHtml = `
        <div class="card" style="border-color:var(--primary);">
          <h3 style="font-size:1.05rem;">✨ ${L('Penyelesai Persamaan Bebas (Taip Soalan Sendiri)', 'Free-Form Equation Solver (Type Your Own Problem)')}</h3>
          <p style="font-size:0.84rem;color:var(--text-muted);margin:4px 0 10px;">
            ${L('Taip sebarang kuadratik, kalkulus (d/dx atau int), nilai mutlak, fungsi, atau jujukan janjang — enjin mengira langkah secara langsung:', 'Type any quadratic, calculus (d/dx or int), modulus, function, or sequence — the engine computes every step live:')}
          </p>
          <div class="intent-chips">
            <button class="intent-chip" data-sample-eq="3x^2 - 11x - 4 = 0">3x² − 11x − 4 = 0</button>
            <button class="intent-chip" data-sample-eq="d/dx(3x^3 - 5x^2 + 4x)">d/dx(3x³ − 5x² + 4x)</button>
            <button class="intent-chip" data-sample-eq="int(6x^2 - 4x + 5)">∫(6x² − 4x + 5) dx</button>
            <button class="intent-chip" data-sample-eq="|3x - 6| = 12">|3x − 6| = 12</button>
            <button class="intent-chip" data-sample-eq="32, 16, 8">32, 16, 8</button>
          </div>
          <div style="display:flex;gap:8px;margin-top:6px;">
            <input id="custom-eq-inp" type="text" class="math-input" placeholder="${L('Contoh: 2x^2 - 5x - 3 = 0 atau |2x - 4| = 10', 'e.g. 2x^2 - 5x - 3 = 0 or |2x - 4| = 10')}">
            <button class="btn btn-primary" id="btn-solve-custom-eq">⚡ ${L('Kira Langkah', 'Solve Steps')}</button>
          </div>
          ${customEqResult ? `<div class="step-item anim-in" style="margin-top:12px;white-space:pre-line;">${U.renderMixed(customEqResult)}</div>` : ''}
        </div>

        ${ch.solvers.map((s, idx) => `
          <div class="card" data-solver-card="${idx}">
            <h3 style="font-size:1.06rem;">🧮 ${U.t(s.title, App.lang)}</h3>
            <p style="font-size:0.85rem;color:var(--text-muted);margin-bottom:12px;">${U.t(s.desc, App.lang)}</p>
            <div class="grid-2" style="margin-bottom:12px;">
              ${s.inputs.map((inp) => `
                <div>
                  <label style="font-size:0.78rem;font-weight:700;display:block;margin-bottom:4px;">${U.t(inp.label, App.lang)}</label>
                  <input type="number" step="any" class="math-input solver-inp-${idx}" data-solver-live="${idx}" data-inp-id="${inp.id}" value="${inp.default}">
                </div>
              `).join('')}
            </div>
            <div style="display:flex;gap:8px;flex-wrap:wrap;">
              <button class="btn btn-primary" data-run-solver="${idx}">⚡ ${L('Kira & Jana Langkah SPM', 'Compute & Generate SPM Steps')}</button>
              <button class="btn btn-outline" data-rand-solver="${idx}">🎲 ${L('Cuba Nilai Rawak Baru', 'Try Random Values')}</button>
            </div>
            <div id="solver-out-${idx}" style="margin-top:14px;">
              <div style="font-size:0.84rem;color:var(--text-muted);padding:10px 12px;background:var(--surface-alt);border-radius:10px;border:1px dashed var(--border);">
                👆 ${L('Masukkan sebarang nombor anda di atas atau klik "Cuba Nilai Rawak Baru", kemudian tekan "Kira & Jana Langkah SPM".', 'Enter your own numbers above or click "Try Random Values", then press "Compute & Generate SPM Steps".')}
              </div>
            </div>
          </div>
        `).join('')}
      `;
    } else {
      // GUIDED PRACTICE TAB WITH COMPLETED STEP TRAIL & DYNAMIC INTENT COACH
      const q = currentQuestion;
      const gSteps = q.guidedSteps || [];
      const safeVal = String(draftAnswer || '').replace(/"/g, '&quot;');

      bodyHtml = `
        <div class="card">
          <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;margin-bottom:12px;">
            <div style="display:flex;gap:6px;flex-wrap:wrap;">
              <button class="btn btn-sm ${activeTier === 1 ? 'btn-primary' : 'btn-outline'}" data-tier="1">🌱 ${L('Asas (TP1–2)', 'Easy (TP1–2)')}</button>
              <button class="btn btn-sm ${activeTier === 2 ? 'btn-primary' : 'btn-outline'}" data-tier="2">🔥 ${L('Sederhana (TP3–4)', 'Medium (TP3–4)')}</button>
              <button class="btn btn-sm ${activeTier === 3 ? 'btn-primary' : 'btn-outline'}" data-tier="3">👑 ${L('KBAT (TP5–6)', 'HOTS (TP5–6)')}</button>
            </div>
            <button class="btn btn-outline btn-sm" id="btn-new-q">🎲 ${L('Jana Soalan Baru', 'New Random Question')}</button>
          </div>

          <div style="display:flex;justify-content:space-between;font-size:0.76rem;font-weight:800;color:var(--primary);margin-bottom:8px;">
            <span>${q.tpLabel} • ${q.subtopic ? U.t(q.subtopic, App.lang) : ''}</span>
            <span>[${q.marks} ${L('Markah SPM', 'SPM Marks')}]</span>
          </div>

          <div style="font-size:1.03rem;font-weight:600;background:var(--surface-alt);padding:14px;border-radius:12px;border:1px solid var(--border);margin-bottom:14px;">
            ${U.renderMixed(q.prompt)}
          </div>

          <label style="font-size:0.8rem;font-weight:700;">${L('Jawapan Anda:', 'Your Answer:')}</label>
          <input id="practice-ans-input" type="text" class="math-input" style="margin-top:4px;" value="${safeVal}" placeholder="${q.placeholder ? U.t(q.placeholder, App.lang) : L('Masukkan nilai atau pecahan (cth: 5 atau -3/2)', 'Enter number or fraction (e.g. 5 or -3/2)')}">
          <div class="keypad-row">
            ${['-', '/', ',', '0', '1', '2', '3', '5'].map((chKey) => `<button class="key-chip" data-key-ins="${chKey}">${chKey}</button>`).join('')}
          </div>

          <div style="display:flex;gap:8px;flex-wrap:wrap;">
            <button class="btn btn-primary" id="btn-check-ans">✅ ${L('Semak Jawapan', 'Check Answer')}</button>
            <button class="btn btn-accent" id="btn-start-guided">🧭 ${L(guidedActive ? 'Tutup Mod Langkah' : 'Bimbing Langkah demi Langkah', guidedActive ? 'Hide Step Guide' : 'Guide Me Step-by-Step')}</button>
            <button class="btn btn-outline" id="btn-show-sol">📖 ${L(showFullSolution ? 'Sembunyi Skema' : 'Jana Skema Penuh SPM', showFullSolution ? 'Hide Working' : 'Generate Full SPM Working')}</button>
          </div>

          <div id="practice-feedback-box"></div>

          ${guidedActive && gSteps.length ? `
            <div id="guided-box-anchor" class="guided-step-card anim-in">
              ${gSteps.slice(0, guidedIndex).map((doneSt, idx) => `
                <div class="step-done-row">
                  ✅ <strong>${L('Langkah', 'Step')} ${idx + 1}:</strong> ${U.renderMixed(U.t(doneSt.prompt, App.lang))} ➔ <strong>${doneSt.expected}</strong>
                </div>
              `).join('')}

              <div style="font-size:0.8rem;font-weight:800;color:var(--accent);margin-bottom:6px;">
                🧭 ${L(`Bimbingan Interaktif: Langkah ${guidedIndex + 1} daripada ${gSteps.length}`, `Interactive Step ${guidedIndex + 1} of ${gSteps.length}`)}
              </div>
              <div style="font-size:0.93rem;margin-bottom:8px;">${U.renderMixed(U.t(gSteps[guidedIndex].prompt, App.lang))}</div>
              <div style="display:flex;gap:8px;flex-wrap:wrap;">
                <input id="guided-step-inp" type="text" class="math-input" style="flex:1;min-width:170px;" placeholder="${L('Kira nilai langkah ini...', 'Enter value for this step...')}">
                <button class="btn btn-primary" id="btn-verify-step">${L('Semak Langkah', 'Verify Step')}</button>
                <button class="btn btn-outline btn-sm" id="btn-hint-step">💡 ${L('Petunjuk', 'Hint')}</button>
              </div>
              <div id="guided-step-msg" style="margin-top:8px;font-size:0.86rem;"></div>
            </div>
          ` : ''}

          ${showFullSolution ? `
            <div id="full-sol-anchor" class="anim-in" style="margin-top:14px;">
              <h4 style="margin-bottom:8px;">📋 ${L('Skema Jalan Kerja Dijana Mengikut Soalan Ini', 'Generated SPM Step-by-Step Working')}</h4>
              ${q.steps.map((st) => `
                <div class="step-item anim-in">
                  <div><span class="spm-badge spm-${st.badge}">${st.badge}</span><strong>${U.renderMixed(st.title)}</strong></div>
                  <div style="margin:6px 0;">${U.renderTex(st.tex, true)}</div>
                  <div style="font-size:0.82rem;color:var(--text-muted);">💡 ${U.renderMixed(st.why)}</div>
                </div>
              `).join('')}
            </div>
          ` : ''}

          <!-- INTENT-AWARE DIAGNOSTIC COACH PANEL -->
          <div class="coach-panel">
            <div style="font-weight:800;font-size:0.93rem;">🧠 ${L('Sangkut? Beritahu Cikgu Pintar Di Mana Awak Keliru:', 'Stuck? Tell the Smart Coach Where You Are Confused:')}</div>
            <div class="intent-chips">
              <button class="intent-chip" data-intent-ask="${L('Jana pelan langkah demi langkah', 'Generate step by step plan')}">⚡ ${L('Jana Pelan Langkah', 'Generate Step Plan')}</button>
              <button class="intent-chip" data-intent-ask="${L('Saya tak tahu nak mula dari mana', 'How do I start?')}">🙋 ${L('Tak tahu nak mula', 'How do I start?')}</button>
              <button class="intent-chip" data-intent-ask="${L('Rumus mana perlu saya guna?', 'Which formula should I use?')}">📐 ${L('Rumus mana?', 'Which formula?')}</button>
              <button class="intent-chip" data-intent-ask="${L('Kenapa jawapan saya salah?', 'Why was I wrong?')}">🔍 ${L('Kenapa saya salah?', 'Why was I wrong?')}</button>
              <button class="intent-chip" data-intent-ask="${L('Terangkan konsep soalan ini', 'Explain the concept behind this')}">💡 ${L('Terangkan konsep', 'Explain concept')}</button>
            </div>
            <div style="display:flex;gap:8px;margin-top:6px;">
              <input id="intent-free-inp" type="text" class="math-input" style="background:var(--surface);" placeholder="${L('Taip masalah awak (cth: jana step / keliru tanda negatif)...', 'Type what you need (e.g. show steps / confused about sign)...')}">
              <button class="btn btn-primary" id="btn-ask-intent">${L('Tanya', 'Ask')}</button>
            </div>
            ${coachOutput ? `
              <div id="coach-reply-anchor" class="anim-in" style="margin-top:10px;background:var(--surface);border-radius:12px;padding:12px;border-left:4px solid var(--primary);">
                <div style="font-size:0.74rem;font-weight:800;color:var(--primary);margin-bottom:4px;">${coachOutput.tag}</div>
                <div style="font-size:0.89rem;white-space:pre-line;">${U.renderMixed(coachOutput.reply)}</div>
              </div>
            ` : ''}
          </div>
        </div>
      `;
    }

    container.innerHTML = chapSelector + tabsHtml + bodyHtml;

    if (activeSubTab === 'concept') initActiveLab(ch.id);
  }

  function initActiveLab(chapId) {
    const lab = App.visualLabs[chapId];
    const canvas = document.getElementById('active-lab-canvas');
    if (!lab || !canvas) return;

    const getVals = () => {
      const vals = {};
      document.querySelectorAll('[data-lab-ctrl]').forEach((el) => {
        vals[el.getAttribute('data-lab-ctrl')] = parseFloat(el.value);
      });
      return vals;
    };

    const draw = () => {
      const vals = getVals();
      const info = lab.render(canvas, vals, App.lang, state.theme === 'dark');
      const ro = document.getElementById('lab-readout');
      if (ro) ro.textContent = info;
    };

    draw();
    document.querySelectorAll('[data-lab-ctrl]').forEach((el) => {
      el.addEventListener('input', () => {
        const id = el.getAttribute('data-lab-ctrl');
        const lbl = document.getElementById('lbl-val-' + id);
        if (lbl) lbl.textContent = el.value;
        if (!state.quests.lab) {
          state.quests.lab = true;
          awardXP(30);
        }
        draw();
      });
    });
  }

  function runSolverCard(ch, idx, isRandom = false) {
    const solver = ch.solvers[idx];
    const outEl = document.getElementById('solver-out-' + idx);
    if (!solver || !outEl) return;
    outEl.dataset.opened = '1';
    solverRunCount++;
    const vals = {};
    const pairs = [];
    document.querySelectorAll('.solver-inp-' + idx).forEach((inp) => {
      const k = inp.getAttribute('data-inp-id');
      vals[k] = inp.value;
      pairs.push(`${k}=${inp.value}`);
    });
    const res = solver.solve(vals, App.lang);
    const badgePrefix = isRandom
      ? `🎲 ${L('SET RAWAK BARU DIJANA', 'NEW RANDOM VALUES GENERATED')} (#${solverRunCount})`
      : `⚡ ${L('DIKIRA SECARA DINAMIK', 'COMPUTED LIVE')} (#${solverRunCount})`;

    // Reset DOM briefly so fadeSlideIn animation visibly replays on every click
    outEl.innerHTML = '';
    void outEl.offsetWidth;
    outEl.innerHTML = `
      <div class="anim-in">
        <div class="formula-box" style="margin-bottom:12px;border-left-color:var(--accent);">
          <div style="font-size:0.75rem;font-weight:800;color:var(--accent);margin-bottom:4px;">
            ${badgePrefix} • <span style="color:var(--primary);">[${pairs.join(', ')}]</span>
          </div>
          <div>${U.renderTex(res.problemTex, true)}</div>
        </div>
        ${res.steps.map((st) => `
          <div class="step-item anim-in">
            <div><span class="spm-badge spm-${st.badge}">${st.badge}</span><strong>${U.renderMixed(st.title)}</strong></div>
            <div style="margin:6px 0;">${U.renderTex(st.tex, true)}</div>
            <div style="font-size:0.82rem;color:var(--text-muted);">💡 ${U.renderMixed(st.why)}</div>
          </div>
        `).join('')}
        <div class="tip-box" style="border-color:var(--accent);background:var(--accent-soft);">
          <strong>🎯 ${L('Jawapan Akhir:', 'Final Result:')}</strong> ${U.renderTex(res.finalTex, false)}
        </div>
        ${res.trapWarning ? `<div class="trap-box">⚠️ ${U.renderMixed(res.trapWarning)}</div>` : ''}
      </div>
    `;
  }

  function pickDifferent(prevStr, genFn) {
    let candidate = genFn();
    for (let tries = 0; tries < 15 && String(candidate) === String(prevStr); tries++) {
      candidate = genFn();
    }
    return candidate;
  }

  function randomizeSolverInputs(ch, idx) {
    const solver = ch.solvers[idx];
    if (!solver) return;
    const inputs = Array.from(document.querySelectorAll('.solver-inp-' + idx));

    inputs.forEach((inp) => {
      const id = inp.getAttribute('data-inp-id');
      const prev = inp.value;
      const nextVal = pickDifferent(prev, () => {
        if (id === 'mode') return U.pick([1, 2]);
        if (id === 'quad') return U.pick([1, 2, 3, 4]);
        if (id === 'dr') return U.pick([0.25, 0.5, 1.5, 2, 3, -2]);
        if (id === 'theta') return U.pick([0.6, 0.9, 1.2, 1.5, 1.8, 2.2, 2.5]);
        if (id === 'n' || id === 'm') return U.randInt(4, 10);
        if (id === 'r' && solver.id === 'perm-comb-solver') return U.randInt(1, 4);
        if (id === 'r' || id === 'sd' || id === 'T') return U.randInt(3, 12);
        if (id === 'A') return U.pick([30, 40, 45, 60, 75, 110]);
        if (id === 'opp') return U.pick([3, 4, 5, 7]);
        if (id === 'hyp') return U.pick([8, 10, 12, 13, 15]);
        if (id === 'mu') return U.pick([45, 50, 60, 70, 80, 100]);
        if (id === 'S') return U.pick([35, 45, 50, 60, 70]);
        if (id === 'M') return U.pick([70, 80, 90, 105, 120]);
        if (/^i\d/.test(id)) return U.randInt(105, 155);
        if (/^w\d/.test(id)) return U.randInt(1, 8);
        if (id === 'b' && solver.id === 'surd-rationalizer') return U.pick([2, 3, 5, 6, 7, 10]);
        if (id === 'a' && solver.id === 'log-base-solver') return U.pick([2, 3, 4, 5, 10]);
        if (id === 'b' && solver.id === 'log-base-solver') return U.pick([8, 16, 25, 27, 64, 81, 125]);
        if (solver.id === 'sas-cosine-solver') return U.randInt(5, 15);
        return U.randInt(-6, 10, true);
      });
      inp.value = nextVal;
      inp.classList.remove('inp-flash');
      void inp.offsetWidth;
      inp.classList.add('inp-flash');
    });

    // Keep Normal Z-Score X realistic relative to newly chosen mu & sd
    if (solver.id === 'binomial-normal-solver') {
      const muEl = inputs.find((el) => el.getAttribute('data-inp-id') === 'mu');
      const sdEl = inputs.find((el) => el.getAttribute('data-inp-id') === 'sd');
      const xEl = inputs.find((el) => el.getAttribute('data-inp-id') === 'x');
      if (muEl && sdEl && xEl) {
        const mu = Number(muEl.value) || 60;
        const sd = Number(sdEl.value) || 5;
        xEl.value = pickDifferent(xEl.value, () => U.round(mu + U.pick([-1.8, -1.2, -0.6, 0.5, 0.8, 1.25, 1.5, 2.0]) * sd, 1));
      }
    }

    runSolverCard(ch, idx, true);
  }

  function renderBlitzView(container) {
    if (!blitzState.active) {
      container.innerHTML = `
        <div class="card" style="text-align:center;padding:28px 18px;">
          <div style="font-size:2.6rem;">⚡</div>
          <h2 style="margin:8px 0;">${L('Cabaran Kilat Konsep 60 Saat (T4 & T5)!', '60-Second Concept Blitz (Form 4 & 5)!')}</h2>
          <p style="color:var(--text-muted);max-width:480px;margin:0 auto 16px;">
            ${L('Uji kepantasan ingatan konsep & rumus kesemua 18 bab Tingkatan 4 & 5! Setiap jawapan betul memberi +15 XP.', 'Test your Form 4 & Form 5 concept & formula reflexes across all 18 chapters! Every right hit earns +15 XP.')}
          </p>
          <div style="font-weight:800;margin-bottom:16px;color:var(--primary);">🏆 ${L('Skor Tertinggi Anda:', 'Your Best Score:')} ${state.highBlitz || 0}</div>
          <button class="btn btn-primary" id="btn-start-blitz">🚀 ${L('Mula Cabaran Sekarang!', 'Start Blitz Now!')}</button>
        </div>
      `;
      return;
    }

    const item = App.blitzBank[blitzState.idx % App.blitzBank.length];
    const opts = App.lang === 'bm' ? item.options.bm : item.options.en;
    container.innerHTML = `
      <div class="card">
        <div style="display:flex;justify-content:space-between;font-weight:800;margin-bottom:12px;">
          <span style="color:var(--danger);">⏱️ ${blitzState.timeLeft}s</span>
          <span style="color:var(--accent);">⭐ ${L('Skor:', 'Score:')} ${blitzState.score}</span>
        </div>
        <h3 style="font-size:1.1rem;margin-bottom:16px;">${U.t(item.q, App.lang)}</h3>
        <div style="display:grid;gap:10px;">
          ${opts.map((opt, i) => `<button class="btn btn-outline" style="justify-content:flex-start;" data-blitz-opt="${i}">${opt}</button>`).join('')}
        </div>
      </div>
    `;
  }

  function renderTutorView(container) {
    const ch = getActiveChapter();
    if (tutorMessages.length === 0) {
      tutorMessages.push({
        role: 'bot',
        text: L(
          `Hai! Saya **Cikgu Pintar AddMath** awak 👋\nTaip sebarang persamaan anda sendiri seperti \`2x^2 - 7x + 3 = 0\`, \`d/dx(3x^3 - 5x^2 + 4x)\`, \`int(6x^2 - 4x + 5)\`, \`|2x - 4| = 10\`, atau jujukan \`18, 6, 2\` untuk pengiraan langkah demi langkah secara langsung!`,
          `Hi! I'm your **Smart AddMath Coach** 👋\nType any equation of your own like \`2x^2 - 7x + 3 = 0\`, \`d/dx(3x^3 - 5x^2 + 4x)\`, \`int(6x^2 - 4x + 5)\`, \`|2x - 4| = 10\`, or sequence \`18, 6, 2\` for live step-by-step calculation!`
        )
      });
    }

    const hasKey = Boolean(localStorage.getItem('addmath_gemini_key'));
    container.innerHTML = `
      <div class="card">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;flex-wrap:wrap;gap:8px;">
          <div>
            <h3 style="font-size:1.08rem;">🧠 ${L('Cikgu Pintar AddMath (Pengira & Pengesan Intent)', 'Smart AddMath Live Tutor')}</h3>
            <div style="font-size:0.76rem;color:var(--text-muted);">${L('Konteks Semasa:', 'Active Topic:')} ${U.t(ch.title, App.lang)}</div>
          </div>
          <button class="btn btn-outline btn-sm" id="btn-config-key">🔑 ${hasKey ? L('Gemini API Aktif', 'Gemini API Active') : L('Sambung Gemini API (Pilihan)', 'Optional Gemini Key')}</button>
        </div>

        <div id="tutor-stream" class="chat-stream">
          ${tutorMessages.map((m) => `<div class="msg-bubble ${m.role === 'user' ? 'msg-user' : 'msg-bot'}">${U.renderMixed(m.text)}</div>`).join('')}
        </div>

        <div class="intent-chips" style="margin-top:10px;">
          <button class="intent-chip" data-tutor-chip="${L('Apakah kesilapan lazim dan contoh soalan SPM bab ini?', 'What are the common mistakes and SPM examples for this chapter?')}">⚠️ ${L('Kesilapan Lazim & Skim SPM', 'Common Mistakes & SPM Scheme')}</button>
          <button class="intent-chip" data-tutor-chip="2x^2 - 7x + 3 = 0">2x² − 7x + 3 = 0</button>
          <button class="intent-chip" data-tutor-chip="d/dx(3x^3 - 5x^2 + 4x)">d/dx(3x³ − 5x² + 4x)</button>
          <button class="intent-chip" data-tutor-chip="int(6x^2 - 4x + 5)">∫(6x² − 4x + 5) dx</button>
          <button class="intent-chip" data-tutor-chip="${L('Bagaimana kira jumlah jarak kinematik?', 'How to find total distance in kinematics?')}">${L('Kinematik v=0', 'Kinematics v=0')}</button>
        </div>

        <div style="display:flex;gap:8px;margin-top:8px;">
          <input id="tutor-inp" type="text" class="math-input" placeholder="${L('Taip persamaan atau persoalan konsep...', 'Type an equation or concept question...')}">
          <button class="btn btn-primary" id="btn-send-tutor">${L('Hantar', 'Send')}</button>
        </div>
      </div>
    `;
    const stream = document.getElementById('tutor-stream');
    if (stream) stream.scrollTop = stream.scrollHeight;
  }

  function renderProfileView(container) {
    const r = state.radar || { P: 0, K: 0, J: 0, ok: 0 };
    const totalBank = getTotalBankStats();
    container.innerHTML = `
      <div class="card">
        <h3 style="font-size:1.08rem;margin-bottom:8px;">📊 ${L('Radar Diagnostik Pembelajaran Anda', 'Your Diagnostic Learning Radar')}</h3>
        <p style="font-size:0.84rem;color:var(--text-muted);margin-bottom:12px;">
          ${L('Enjin merekod punca kesilapan supaya awak tahu bahagian mana perlu diperkukuhkan:', 'Our engine tracks error patterns so you know exactly what to strengthen:')}
        </p>
        <div class="grid-2">
          <div class="step-item"><strong>✅ ${L('Soalan Latihan Selesai', 'Practice Questions Solved')}:</strong> ${state.solvedCount}</div>
          <div class="step-item"><strong>📋 ${L('Bank Master SPM Dikuasai', 'Master SPM Bank Mastered')}:</strong> ${totalBank.done} / ${totalBank.total}</div>
          <div class="step-item"><strong>📘 ${L('Isyarat Konsep / Rumus [P]', 'Concept / Formula Alerts [P]')}:</strong> ${r.P}</div>
          <div class="step-item"><strong>🔧 ${L('Isyarat Langkah Algebra [K]', 'Method / Algebra Alerts [K]')}:</strong> ${r.K}</div>
          <div class="step-item"><strong>🎯 ${L('Isyarat Tanda / Akhir [J]', 'Sign / Accuracy Alerts [J]')}:</strong> ${r.J}</div>
        </div>
      </div>

      <div class="card">
        <h3 style="font-size:1.08rem;margin-bottom:10px;">📖 ${L('Buku Formula Pintar KSSM (18 Bab T4 & T5)', 'KSSM Master Formula Vault (All 18 Chapters)')}</h3>
        ${App.chapters.map((c) => `
          <div style="margin-bottom:14px;">
            <div style="font-weight:800;color:var(--primary);">${U.t(c.code, App.lang)} — ${U.t(c.title, App.lang)}</div>
            ${c.concepts.flatMap((s) => s.formulas).map((f) => `
              <div class="formula-box">
                <small style="color:var(--text-muted);font-weight:700;">${U.t(f.label, App.lang)}</small>
                <div>${U.renderTex(f.tex, true)}</div>
              </div>
            `).join('')}
          </div>
        `).join('')}
        ${App.upcomingStages.map((c) => `
          <div style="margin-bottom:14px;">
            <div style="font-weight:800;color:var(--text-muted);">${U.t(c.code, App.lang)} — ${U.t(c.title, App.lang)}</div>
            ${c.formulas.map((f) => `
              <div class="formula-box">
                <small style="color:var(--text-muted);font-weight:700;">${U.t(f.label, App.lang)}</small>
                <div>${U.renderTex(f.tex, true)}</div>
              </div>
            `).join('')}
          </div>
        `).join('')}
      </div>
    `;
  }

  function renderMain() {
    applyTheme();
    renderHeader();
    const main = document.getElementById('main-view');
    if (currentView === 'home') renderHomeView(main);
    else if (currentView === 'learn') renderLearnView(main);
    else if (currentView === 'blitz') renderBlitzView(main);
    else if (currentView === 'tutor') renderTutorView(main);
    else renderProfileView(main);
  }

  // Live update solver & Master Bank filter without losing input cursor focus
  document.addEventListener('input', (e) => {
    if (e.target.id === 'practice-ans-input') {
      draftAnswer = e.target.value;
    }
    if (e.target.id === 'mbank-search-inp') {
      mbankSearch = e.target.value;
      const listWrap = document.getElementById('mbank-list-wrap');
      if (listWrap) listWrap.innerHTML = renderMasterBankCardsHtml(getActiveChapter());
      return;
    }
    const liveIdx = e.target.getAttribute && e.target.getAttribute('data-solver-live');
    if (liveIdx !== null && liveIdx !== undefined) {
      const outEl = document.getElementById('solver-out-' + liveIdx);
      if (outEl && outEl.dataset.opened === '1') {
        runSolverCard(getActiveChapter(), Number(liveIdx));
      }
    }
  });

  document.addEventListener('click', async (e) => {
    const navBtn = e.target.closest('[data-nav]');
    if (navBtn) {
      currentView = navBtn.getAttribute('data-nav');
      if (currentView !== 'blitz' && blitzTimer) { clearInterval(blitzTimer); blitzState.active = false; }
      renderMain();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const formBtn = e.target.closest('[data-form-filter]');
    if (formBtn) {
      homeFormFilter = formBtn.getAttribute('data-form-filter');
      renderMain();
      return;
    }

    const openBankChap = e.target.closest('[data-open-bank-chap]');
    if (openBankChap) {
      activeChapterId = openBankChap.getAttribute('data-open-bank-chap');
      activeSubTab = 'bank';
      currentView = 'learn';
      renderMain();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const openChap = e.target.closest('[data-open-chap]');
    if (openChap) {
      activeChapterId = openChap.getAttribute('data-open-chap');
      currentView = 'learn';
      renderMain();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const swChap = e.target.closest('[data-switch-chap]');
    if (swChap) {
      activeChapterId = swChap.getAttribute('data-switch-chap');
      currentQuestion = null;
      renderMain();
      return;
    }

    const subBtn = e.target.closest('[data-subtab]');
    if (subBtn) {
      activeSubTab = subBtn.getAttribute('data-subtab');
      renderMain();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    function materializeExpandAllForChapter(chapId) {
      getChapBankList(chapId).forEach((it) => {
        const key = chapId + ':' + it.code;
        mbankOpenMistake[key] = true;
        mbankOpenScheme[key] = true;
      });
      mbankExpandAll = false;
      const expBtn = document.getElementById('btn-mbank-expand-all');
      if (expBtn) expBtn.innerHTML = `👁️ ${L('Buka Semua Kesilapan & Jawapan', 'Reveal All Mistakes & Schemes')}`;
    }

    if (e.target.id === 'btn-mbank-expand-all') {
      mbankExpandAll = !mbankExpandAll;
      if (!mbankExpandAll) {
        mbankOpenMistake = {};
        mbankOpenScheme = {};
      }
      renderMain();
      return;
    }

    const mbMistakeBtn = e.target.closest('[data-mbank-mistake]');
    if (mbMistakeBtn) {
      const k = mbMistakeBtn.getAttribute('data-mbank-mistake');
      if (mbankExpandAll) {
        materializeExpandAllForChapter(activeChapterId);
        mbankOpenMistake[k] = false;
      } else {
        mbankOpenMistake[k] = !mbankOpenMistake[k];
      }
      const listWrap = document.getElementById('mbank-list-wrap');
      if (listWrap) listWrap.innerHTML = renderMasterBankCardsHtml(getActiveChapter());
      else renderMain();
      return;
    }

    const mbSchemeBtn = e.target.closest('[data-mbank-scheme]');
    if (mbSchemeBtn) {
      const k = mbSchemeBtn.getAttribute('data-mbank-scheme');
      if (mbankExpandAll) {
        materializeExpandAllForChapter(activeChapterId);
        mbankOpenScheme[k] = false;
      } else {
        mbankOpenScheme[k] = !mbankOpenScheme[k];
      }
      const listWrap = document.getElementById('mbank-list-wrap');
      if (listWrap) listWrap.innerHTML = renderMasterBankCardsHtml(getActiveChapter());
      else renderMain();
      return;
    }

    const mbDoneBtn = e.target.closest('[data-mbank-done]');
    if (mbDoneBtn) {
      const k = mbDoneBtn.getAttribute('data-mbank-done');
      state.masterBankDone = state.masterBankDone || {};
      if (!state.masterBankDone[k]) {
        state.masterBankDone[k] = true;
        const curM = state.mastery[activeChapterId] || 0;
        state.mastery[activeChapterId] = Math.min(100, curM + 5);
        awardXP(10);
        const cSt = getChapBankStats(activeChapterId);
        if (cSt.done === cSt.total) G.fireConfetti();
      } else {
        delete state.masterBankDone[k];
        G.saveState(state);
        renderHeader();
      }
      const chNow = getActiveChapter();
      const progWrap = document.getElementById('mbank-prog-wrap');
      const listWrap = document.getElementById('mbank-list-wrap');
      if (progWrap && listWrap) {
        progWrap.innerHTML = renderMasterBankProgHtml(chNow);
        listWrap.innerHTML = renderMasterBankCardsHtml(chNow);
      } else {
        renderMain();
      }
      return;
    }

    const tierBtn = e.target.closest('[data-tier]');
    if (tierBtn) {
      activeTier = Number(tierBtn.getAttribute('data-tier'));
      currentQuestion = null;
      renderMain();
      return;
    }

    const solverBtn = e.target.closest('[data-run-solver]');
    if (solverBtn) {
      runSolverCard(getActiveChapter(), Number(solverBtn.getAttribute('data-run-solver')));
      return;
    }

    const randBtn = e.target.closest('[data-rand-solver]');
    if (randBtn) {
      randomizeSolverInputs(getActiveChapter(), Number(randBtn.getAttribute('data-rand-solver')));
      return;
    }

    const sampleEq = e.target.closest('[data-sample-eq]');
    if (sampleEq) {
      const eq = sampleEq.getAttribute('data-sample-eq');
      customEqResult = await App.coach.askSmartTutor(eq, getActiveChapter(), App.lang);
      renderMain();
      const inp = document.getElementById('custom-eq-inp');
      if (inp) inp.value = eq;
      return;
    }

    if (e.target.id === 'btn-solve-custom-eq') {
      const inp = document.getElementById('custom-eq-inp');
      if (inp && inp.value.trim()) {
        const eq = inp.value.trim();
        customEqResult = await App.coach.askSmartTutor(eq, getActiveChapter(), App.lang);
        renderMain();
        const inpAfter = document.getElementById('custom-eq-inp');
        if (inpAfter) inpAfter.value = eq;
      }
      return;
    }

    const keyIns = e.target.closest('[data-key-ins]');
    if (keyIns) {
      const inp = document.getElementById('practice-ans-input');
      if (inp) { inp.value += keyIns.getAttribute('data-key-ins'); draftAnswer = inp.value; inp.focus(); }
      return;
    }

    if (e.target.id === 'btn-new-q') {
      currentQuestion = null;
      renderMain();
      return;
    }

    if (e.target.id === 'btn-check-ans') {
      const inp = document.getElementById('practice-ans-input');
      const box = document.getElementById('practice-feedback-box');
      if (!inp || !box) return;
      draftAnswer = inp.value;
      const res = U.evaluateAnswer(currentQuestion, inp.value, App.lang);
      if (res.correct) {
        state.combo = (state.combo || 0) + 1;
        state.solvedCount = (state.solvedCount || 0) + 1;
        if (activeTier === 3) { state.kbatSolved++; state.quests.kbat1 = true; }
        if (state.solvedCount >= 3) state.quests.solve3 = true;
        const gain = activeTier * 20 + Math.min(20, state.combo * 5);
        const curM = state.mastery[activeChapterId] || 0;
        state.mastery[activeChapterId] = Math.min(100, curM + activeTier * 12);
        awardXP(gain);
        G.fireConfetti();
        box.innerHTML = `<div class="tip-box anim-in" style="border-color:var(--accent);background:var(--accent-soft);font-weight:700;">🎉 ${U.renderMixed(res.feedback)} (+${gain} XP • Combo x${state.combo})</div>`;
      } else {
        state.combo = 0;
        lastWrongAttempt = inp.value;
        if (res.trapHit) {
          if (res.feedback.includes('[P]')) state.radar.P++;
          else if (res.feedback.includes('[K]')) state.radar.K++;
          else state.radar.J++;
        }
        G.saveState(state);
        box.innerHTML = `<div class="trap-box anim-in">🔍 <strong>${L('Diagnostik Pintar:', 'Smart Diagnosis:')}</strong> ${U.renderMixed(res.feedback)}</div>`;
      }
      return;
    }

    if (e.target.id === 'btn-start-guided') {
      saveDraftAnswer();
      guidedActive = !guidedActive;
      if (guidedActive) guidedIndex = 0;
      renderMain();
      if (guidedActive) {
        document.getElementById('guided-box-anchor')?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
      return;
    }

    if (e.target.id === 'btn-hint-step') {
      const gSteps = currentQuestion.guidedSteps || [];
      const stepObj = gSteps[guidedIndex];
      const msg = document.getElementById('guided-step-msg');
      if (stepObj && msg) {
        msg.innerHTML = `<span style="color:var(--primary);font-weight:700;">💡 ${U.renderMixed(U.t(stepObj.hint, App.lang))}</span>`;
      }
      return;
    }

    if (e.target.id === 'btn-verify-step') {
      saveDraftAnswer();
      const gSteps = currentQuestion.guidedSteps || [];
      const stepObj = gSteps[guidedIndex];
      const inp = document.getElementById('guided-step-inp');
      const msg = document.getElementById('guided-step-msg');
      if (!stepObj || !inp || !msg) return;
      const v = U.parseStudentNumber(inp.value);
      if (Number.isFinite(v) && Math.abs(v - Number(stepObj.expected)) <= 0.05) {
        if (guidedIndex + 1 < gSteps.length) {
          guidedIndex++;
          awardXP(5);
          renderMain();
        } else {
          draftAnswer = String(stepObj.expected);
          renderMain();
          const msgAfter = document.getElementById('guided-step-msg');
          if (msgAfter) {
            msgAfter.innerHTML = `<span style="color:var(--accent);font-weight:800;">🎉 ${L('Semua langkah tepat! Jawapan telah diisi di atas — tekan "Semak Jawapan" untuk menuntut XP penuh!', 'All steps verified! Final value filled above — press "Check Answer" for full XP!')}</span>`;
          }
        }
      } else {
        msg.innerHTML = `<span style="color:var(--danger);font-weight:700;">💡 ${U.renderMixed(U.t(stepObj.hint, App.lang))}</span>`;
      }
      return;
    }

    if (e.target.id === 'btn-show-sol') {
      saveDraftAnswer();
      showFullSolution = !showFullSolution;
      renderMain();
      if (showFullSolution) {
        document.getElementById('full-sol-anchor')?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
      return;
    }

    const intentChip = e.target.closest('[data-intent-ask]');
    if (intentChip) {
      saveDraftAnswer();
      coachOutput = App.coach.coachOnQuestion(intentChip.getAttribute('data-intent-ask'), currentQuestion, getActiveChapter(), lastWrongAttempt || draftAnswer, App.lang);
      if (coachOutput.openGuided) guidedActive = true;
      renderMain();
      document.getElementById('coach-reply-anchor')?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      return;
    }

    if (e.target.id === 'btn-ask-intent') {
      saveDraftAnswer();
      const inp = document.getElementById('intent-free-inp');
      if (inp && inp.value.trim()) {
        coachOutput = App.coach.coachOnQuestion(inp.value.trim(), currentQuestion, getActiveChapter(), lastWrongAttempt || draftAnswer, App.lang);
        if (coachOutput.openGuided) guidedActive = true;
        renderMain();
        document.getElementById('coach-reply-anchor')?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
      return;
    }

    if (e.target.id === 'btn-start-blitz') {
      blitzState = { active: true, timeLeft: 60, score: 0, idx: Math.floor(Math.random() * App.blitzBank.length) };
      renderMain();
      blitzTimer = setInterval(() => {
        blitzState.timeLeft--;
        if (blitzState.timeLeft <= 0) {
          clearInterval(blitzTimer);
          blitzState.active = false;
          if (blitzState.score > (state.highBlitz || 0)) state.highBlitz = blitzState.score;
          awardXP(blitzState.score);
          G.fireConfetti();
        }
        if (currentView === 'blitz') renderMain();
      }, 1000);
      return;
    }

    const blitzOpt = e.target.closest('[data-blitz-opt]');
    if (blitzOpt && blitzState.active) {
      const item = App.blitzBank[blitzState.idx % App.blitzBank.length];
      if (Number(blitzOpt.getAttribute('data-blitz-opt')) === item.ans) {
        blitzState.score += 15;
      }
      blitzState.idx++;
      renderMain();
      return;
    }

    const tChip = e.target.closest('[data-tutor-chip]');
    if (tChip) {
      const txt = tChip.getAttribute('data-tutor-chip');
      tutorMessages.push({ role: 'user', text: txt });
      const rep = await App.coach.askSmartTutor(txt, getActiveChapter(), App.lang);
      tutorMessages.push({ role: 'bot', text: rep });
      renderMain();
      return;
    }

    if (e.target.id === 'btn-send-tutor') {
      const inp = document.getElementById('tutor-inp');
      if (inp && inp.value.trim()) {
        const txt = inp.value.trim();
        tutorMessages.push({ role: 'user', text: txt });
        inp.value = '';
        renderMain();
        const rep = await App.coach.askSmartTutor(txt, getActiveChapter(), App.lang);
        tutorMessages.push({ role: 'bot', text: rep });
        renderMain();
      }
      return;
    }

    if (e.target.id === 'btn-config-key') {
      const cur = localStorage.getItem('addmath_gemini_key') || '';
      const next = window.prompt(L('Masukkan kunci Gemini API (biarkan kosong untuk guna Enjin Pintar Dalaman):', 'Enter Gemini API Key (leave blank for Built-in Smart Engine):'), cur);
      if (next !== null) {
        if (next.trim()) localStorage.setItem('addmath_gemini_key', next.trim());
        else localStorage.removeItem('addmath_gemini_key');
        renderMain();
      }
      return;
    }

    if (e.target.id === 'btn-lang-bm' || e.target.id === 'btn-lang-en') {
      App.lang = e.target.id === 'btn-lang-bm' ? 'bm' : 'en';
      state.lang = App.lang;
      currentQuestion = null;
      G.saveState(state);
      renderMain();
      return;
    }

    if (e.target.id === 'btn-theme') {
      state.theme = state.theme === 'dark' ? 'light' : 'dark';
      G.saveState(state);
      renderMain();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Enter') return;
    if (e.target.id === 'practice-ans-input') document.getElementById('btn-check-ans')?.click();
    else if (e.target.id === 'guided-step-inp') document.getElementById('btn-verify-step')?.click();
    else if (e.target.id === 'intent-free-inp') document.getElementById('btn-ask-intent')?.click();
    else if (e.target.id === 'custom-eq-inp') document.getElementById('btn-solve-custom-eq')?.click();
    else if (e.target.id === 'tutor-inp') document.getElementById('btn-send-tutor')?.click();
  });

  App.rerender = renderMain;

  window.addEventListener('DOMContentLoaded', () => {
    renderMain();
  });
})(window.AddMathApp);
