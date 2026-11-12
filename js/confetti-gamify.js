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
    radar: { P: 0, K: 0, J: 0, ok: 0 }, // Misconception diagnostic tracker
    quests: { lab: false, solve3: false, kbat1: false },
    highBlitz: 0
  };

  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return JSON.parse(JSON.stringify(defaultState));
      return Object.assign(JSON.parse(JSON.stringify(defaultState)), JSON.parse(raw));
    } catch (_) {
      return JSON.parse(JSON.stringify(defaultState));
    }
  }

  function saveState(st) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(st));
    } catch (_) {}
  }

  function getRankInfo(xp, lang) {
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
      if (xp >= ranks[i].min) {
        current = ranks[i];
        nextMin = ranks[i + 1] ? ranks[i + 1].min : ranks[i].min + 500;
      }
    }
    const level = Math.floor(xp / 100) + 1;
    const pct = Math.min(100, Math.round(((xp % 100) / 100) * 100));
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
