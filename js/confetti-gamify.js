/**
 * AddMath Mudah — Enjin Gamifikasi, Misi Harian, Profil Diagnostik & Konfeti Perayaan
 */
window.AddMathApp = window.AddMathApp || {};

(function (App) {
  'use strict';

  const STORAGE_KEY = 'addmath_mudah_state_v1';

  const defaultState = {
    lang: 'bm',
    theme: 'light',
    xp: 0,
    streak: 1,
    combo: 0,
    solvedCount: 0,
    kbatSolved: 0,
    labsExplored: {},
    mastery: {}, // { 'f4-c1': 25, ... } (0..100)
    masterBankDone: {}, // { 'f4-c1:1.1': true, ... } (180 Master SPM Bank)
    postersViewed: {},
    radar: { P: 0, K: 0, J: 0, ok: 0 }, // Misconception diagnostic tracker
    quests: { lab: false, solve3: false, kbat1: false },
    highBlitz: 0
  };

  function isPlainObject(val) {
    return Boolean(val && typeof val === 'object' && !Array.isArray(val));
  }

  function nonNegNum(val, fallback) {
    if (typeof val !== 'number' && typeof val !== 'string') return fallback;
    if (typeof val === 'string' && !val.trim()) return fallback;
    const n = Number(val);
    return Number.isFinite(n) && n >= 0 ? n : fallback;
  }

  function loadState() {
    const base = JSON.parse(JSON.stringify(defaultState));
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return base;
      const parsed = JSON.parse(raw);
      if (!isPlainObject(parsed)) return base;

      const merged = Object.assign({}, base);
      merged.lang = parsed.lang === 'en' ? 'en' : 'bm';
      merged.theme = parsed.theme === 'dark' ? 'dark' : 'light';
      merged.xp = nonNegNum(parsed.xp, base.xp);
      merged.streak = nonNegNum(parsed.streak, base.streak);
      merged.combo = nonNegNum(parsed.combo, base.combo);
      merged.solvedCount = nonNegNum(parsed.solvedCount, base.solvedCount);
      merged.kbatSolved = nonNegNum(parsed.kbatSolved, base.kbatSolved);
      merged.highBlitz = nonNegNum(parsed.highBlitz, base.highBlitz);

      merged.labsExplored = isPlainObject(parsed.labsExplored) ? Object.assign({}, parsed.labsExplored) : {};
      merged.masterBankDone = isPlainObject(parsed.masterBankDone) ? Object.assign({}, parsed.masterBankDone) : {};
      merged.postersViewed = isPlainObject(parsed.postersViewed) ? Object.assign({}, parsed.postersViewed) : {};

      const cleanMastery = {};
      if (isPlainObject(parsed.mastery)) {
        Object.keys(parsed.mastery).forEach((k) => {
          cleanMastery[k] = Math.min(100, nonNegNum(parsed.mastery[k], 0));
        });
      }
      merged.mastery = cleanMastery;

      const rawRadar = isPlainObject(parsed.radar) ? parsed.radar : {};
      merged.radar = {
        P: nonNegNum(rawRadar.P, base.radar.P),
        K: nonNegNum(rawRadar.K, base.radar.K),
        J: nonNegNum(rawRadar.J, base.radar.J),
        ok: nonNegNum(rawRadar.ok, base.radar.ok)
      };

      const rawQuests = isPlainObject(parsed.quests) ? parsed.quests : {};
      merged.quests = {
        lab: Boolean(rawQuests.lab),
        solve3: Boolean(rawQuests.solve3),
        kbat1: Boolean(rawQuests.kbat1)
      };

      return merged;
    } catch (_) {
      return base;
    }
  }

  function saveState(st) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(st));
    } catch (_) {}
  }

  function getRankInfo(xp, lang) {
    const safeXp = nonNegNum(xp, 0);
    const ranks = [
      { min: 0, bm: 'Perintis AddMath', en: 'AddMath Novice' },
      { min: 120, bm: 'Penjelajah Algebra', en: 'Algebra Explorer' },
      { min: 300, bm: 'Wira Fungsi & Graf', en: 'Function & Graph Hero' },
      { min: 600, bm: 'Pendekar KBAT', en: 'HOTS Tactician' },
      { min: 1000, bm: 'Legenda A+ SPM', en: 'SPM A+ Legend' }
    ];
    let current = ranks[0];
    let nextMin = 120;
    for (let i = 0; i < ranks.length; i++) {
      if (safeXp >= ranks[i].min) {
        current = ranks[i];
        nextMin = ranks[i + 1] ? ranks[i + 1].min : ranks[i].min + 500;
      }
    }
    const level = Math.floor(safeXp / 100) + 1;
    const pct = Math.min(100, Math.round(((safeXp % 100) / 100) * 100));
    return {
      level,
      title: lang === 'bm' ? current.bm : current.en,
      pct,
      nextMin
    };
  }

  // Lightweight HTML5 Canvas Confetti Burst
  function fireConfetti() {
    const canvas = document.getElementById('confetti-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const colors = ['#4f46e5', '#10b981', '#f59e0b', '#ec4899', '#06b6d4'];
    const pieces = Array.from({ length: 55 }, () => ({
      x: canvas.width * 0.5 + (Math.random() - 0.5) * 160,
      y: canvas.height * 0.42,
      vx: (Math.random() - 0.5) * 11,
      vy: -Math.random() * 10 - 4,
      size: Math.random() * 6 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      rot: Math.random() * Math.PI
    }));
    let frame = 0;
    function step() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pieces.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.36;
        p.rot += 0.1;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
        ctx.restore();
      });
      frame++;
      if (frame < 65) requestAnimationFrame(step);
      else ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    requestAnimationFrame(step);
  }

  App.gamify = {
    loadState,
    saveState,
    getRankInfo,
    fireConfetti
  };
})(window.AddMathApp);
