/**
 * AddMath Mudah — Makmal Visual Interaktif HTML5 Canvas (Fasa 2, 3 & 4: T4 Bab 6–10 & T5 Bab 1–8)
 * Semua 18 Bab KSSM kini mempunyai Makmal Visual masa nyata!
 */
window.AddMathApp = window.AddMathApp || {};
window.AddMathApp.visualLabs = window.AddMathApp.visualLabs || {};

(function (App) {
  'use strict';
  const U = App.utils;

  function setupCanvas(canvas) {
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    const w = Math.max(280, rect.width || 560);
    const h = Math.max(240, rect.height || 290);
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    const ctx = canvas.getContext('2d');
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, w, h);
    return { ctx, w, h };
  }

  function drawGrid(ctx, w, h, rx, ry, isDark, xLbl = 'x', yLbl = 'y') {
    ctx.fillStyle = isDark ? '#0f172a' : '#f8fafc';
    ctx.fillRect(0, 0, w, h);
    const toX = (x) => ((x - rx[0]) / (rx[1] - rx[0])) * w;
    const toY = (y) => h - ((y - ry[0]) / (ry[1] - ry[0])) * h;

    ctx.strokeStyle = isDark ? 'rgba(148,163,184,0.14)' : 'rgba(100,116,139,0.15)';
    ctx.lineWidth = 1;
    const stepX = Math.max(1, Math.round((rx[1] - rx[0]) / 10));
    const stepY = Math.max(1, Math.round((ry[1] - ry[0]) / 8));
    for (let x = Math.ceil(rx[0]); x <= Math.floor(rx[1]); x += stepX) {
      const px = toX(x); ctx.beginPath(); ctx.moveTo(px, 0); ctx.lineTo(px, h); ctx.stroke();
    }
    for (let y = Math.ceil(ry[0]); y <= Math.floor(ry[1]); y += stepY) {
      const py = toY(y); ctx.beginPath(); ctx.moveTo(0, py); ctx.lineTo(w, py); ctx.stroke();
    }
    ctx.strokeStyle = isDark ? '#94a3b8' : '#475569';
    ctx.lineWidth = 1.8;
    const ox = Math.min(w - 6, Math.max(6, toX(0)));
    const oy = Math.min(h - 6, Math.max(6, toY(0)));
    ctx.beginPath(); ctx.moveTo(0, oy); ctx.lineTo(w, oy); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(ox, 0); ctx.lineTo(ox, h); ctx.stroke();
    ctx.fillStyle = isDark ? '#94a3b8' : '#64748b';
    ctx.font = '11px sans-serif';
    ctx.fillText(xLbl, w - 22, oy - 6);
    ctx.fillText(yLbl, ox + 6, 14);
    return { toX, toY };
  }

  function plotFn(ctx, toX, toY, rx, fn, color, dashed = false, lw = 2.6) {
    ctx.save();
    ctx.strokeStyle = color;
    ctx.lineWidth = lw;
    if (dashed) ctx.setLineDash([6, 5]);
    ctx.beginPath();
    let started = false;
    for (let i = 0; i <= 240; i++) {
      const x = rx[0] + (i / 240) * (rx[1] - rx[0]);
      const y = fn(x);
      if (!Number.isFinite(y) || Math.abs(y) > 200) { started = false; continue; }
      if (!started) { ctx.moveTo(toX(x), toY(y)); started = true; }
      else ctx.lineTo(toX(x), toY(y));
    }
    ctx.stroke();
    ctx.restore();
  }

  function drawDot(ctx, px, py, color, label, isDark) {
    ctx.fillStyle = color;
    ctx.beginPath(); ctx.arc(px, py, 5, 0, Math.PI * 2); ctx.fill();
    if (label) {
      ctx.fillStyle = isDark ? '#f8fafc' : '#0f172a';
      ctx.font = 'bold 11px sans-serif';
      ctx.fillText(label, px + 7, py - 6);
    }
  }

  function drawArrow(ctx, x1, y1, x2, y2, color, lw = 2.8) {
    const ang = Math.atan2(y2 - y1, x2 - x1);
    ctx.strokeStyle = color; ctx.fillStyle = color; ctx.lineWidth = lw;
    ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x2, y2);
    ctx.lineTo(x2 - 10 * Math.cos(ang - 0.35), y2 - 10 * Math.sin(ang - 0.35));
    ctx.lineTo(x2 - 10 * Math.cos(ang + 0.35), y2 - 10 * Math.sin(ang + 0.35));
    ctx.closePath(); ctx.fill();
  }

  Object.assign(App.visualLabs, {
    // F4 Ch 6: Linear Law
    'f4-c6': {
      title: { bm: 'Makmal Garis Penyuaian Terbaik Y = mX + C', en: 'Line of Best Fit Y = mX + C Explorer' },
      desc: { bm: 'Laras kecerunan m dan pintasan-Y (C) untuk memadankan taburan titik eksperimen dan ekstrak pemalar asal!', en: 'Adjust gradient m and Y-intercept C to fit experimental data points!' },
      controls: [
        { id: 'm', label: { bm: 'Kecerunan m', en: 'Gradient m' }, min: -1.5, max: 2.5, step: 0.25, default: 1.25 },
        { id: 'C', label: { bm: 'Pintasan-Y (C)', en: 'Y-intercept C' }, min: -2, max: 4, step: 0.5, default: 1 }
      ],
      render: function (canvas, vals, lang, isDark) {
        const { ctx, w, h } = setupCanvas(canvas);
        const { toX, toY } = drawGrid(ctx, w, h, [-1, 7], [-2, 10], isDark, 'X', 'Y');
        const m = Number(vals.m), C = Number(vals.C);
        [1, 2, 3, 4, 5, 6].forEach((X, i) => {
          const jitter = (i % 2 === 0 ? 0.28 : -0.24);
          drawDot(ctx, toX(X), toY(m * X + C + jitter), '#f59e0b', '', isDark);
        });
        plotFn(ctx, toX, toY, [-1, 7], (X) => m * X + C, '#06b6d4', false, 2.8);
        drawDot(ctx, toX(0), toY(C), '#ef4444', `C=${C}`, isDark);
        return `Y = ${m}X ${U.signedNum(C)}  |  Jika log₁₀ y = mX + C ⇒ a = 10^C = ${U.roundStr(Math.pow(10, C), 2)}, b = 10^m = ${U.roundStr(Math.pow(10, m), 2)}`;
      }
    },

    // F4 Ch 7: Coordinate Geometry
    'f4-c7': {
      title: { bm: 'Makmal Pembahagi Tembereng m : n & Pembahagi Dua Sama Serenjang', en: 'Segment Divisor m : n & Perpendicular Line Lab' },
      desc: { bm: 'Gerakkan nisbah m dan n sepanjang tembereng A(−6, −2) ke B(6, 4). Garis putus-putus ungu ialah garis serenjang di P!', en: 'Slide ratio m : n along segment A(−6, −2) to B(6, 4). Dashed purple shows the perpendicular line through P!' },
      controls: [
        { id: 'm', label: { bm: 'Nisbah m (AP)', en: 'Ratio m (AP)' }, min: 1, max: 5, step: 1, default: 1 },
        { id: 'n', label: { bm: 'Nisbah n (PB)', en: 'Ratio n (PB)' }, min: 1, max: 5, step: 1, default: 2 }
      ],
      render: function (canvas, vals, lang, isDark) {
        const { ctx, w, h } = setupCanvas(canvas);
        const { toX, toY } = drawGrid(ctx, w, h, [-8, 8], [-6, 6], isDark);
        const m = Number(vals.m), n = Number(vals.n);
        const ax = -6, ay = -2, bx = 6, by = 4;
        const px = (n * ax + m * bx) / (m + n), py = (n * ay + m * by) / (m + n);
        ctx.strokeStyle = '#0ea5e9'; ctx.lineWidth = 3;
        ctx.beginPath(); ctx.moveTo(toX(ax), toY(ay)); ctx.lineTo(toX(bx), toY(by)); ctx.stroke();
        const mAB = (by - ay) / (bx - ax), mPerp = -1 / mAB;
        plotFn(ctx, toX, toY, [-8, 8], (x) => mPerp * (x - px) + py, '#a855f7', true, 2);
        drawDot(ctx, toX(ax), toY(ay), '#0ea5e9', 'A(-6,-2)', isDark);
        drawDot(ctx, toX(bx), toY(by), '#0ea5e9', 'B(6,4)', isDark);
        drawDot(ctx, toX(px), toY(py), '#ef4444', `P(${U.roundStr(px, 1)},${U.roundStr(py, 1)})`, isDark);
        return `Nisbah ${m}:${n} ⇒ P = (${U.roundStr(px, 2)}, ${U.roundStr(py, 2)})  |  m_AB = 0.5, m_⊥ = −2`;
      }
    },

    // F4 Ch 8: Vectors
    'f4-c8': {
      title: { bm: 'Makmal Segi Empat Selari Vektor Paduan (a + b)', en: '2D Vector Parallelogram Resultant (a + b) Lab' },
      desc: { bm: 'Ubah komponen vektor a = (ax, ay) dan perhatikan paduan a + b = (ax+2, ay+3) serta magnitudnya!', en: 'Change components of vector a = (ax, ay) and watch resultant a + b with vector b = (2, 3)!' },
      controls: [
        { id: 'ax', label: 'a_x', min: -4, max: 5, step: 1, default: 4 },
        { id: 'ay', label: 'a_y', min: -3, max: 4, step: 1, default: 1 }
      ],
      render: function (canvas, vals, lang, isDark) {
        const { ctx, w, h } = setupCanvas(canvas);
        const { toX, toY } = drawGrid(ctx, w, h, [-5, 8], [-4, 8], isDark);
        const ax = Number(vals.ax), ay = Number(vals.ay), bx = 2, by = 3;
        const rx = ax + bx, ry = ay + by;
        ctx.strokeStyle = isDark ? 'rgba(148,163,184,0.45)' : 'rgba(100,116,139,0.45)';
        ctx.setLineDash([5, 4]);
        ctx.beginPath(); ctx.moveTo(toX(ax), toY(ay)); ctx.lineTo(toX(rx), toY(ry)); ctx.lineTo(toX(bx), toY(by)); ctx.stroke();
        ctx.setLineDash([]);
        drawArrow(ctx, toX(0), toY(0), toX(ax), toY(ay), '#3b82f6');
        drawArrow(ctx, toX(0), toY(0), toX(bx), toY(by), '#10b981');
        drawArrow(ctx, toX(0), toY(0), toX(rx), toY(ry), '#ef4444', 3.2);
        return `a = ${ax}i ${U.signedNum(ay)}j, b = 2i + 3j ⇒ a + b = ${rx}i ${U.signedNum(ry)}j  |  |a + b| = ${U.roundStr(Math.hypot(rx, ry), 2)}`;
      }
    },

    // F4 Ch 9: Solution of Triangles (SSA Ambiguous Case!)
    'f4-c9': {
      title: { bm: 'Simulator Kes Berambiguiti SSA (0, 1 atau 2 Segi Tiga!)', en: 'SSA Ambiguous Triangle Live Simulator' },
      desc: { bm: 'Dengan A = 30° dan b = 8 tetap (tinggi tegak h = b sin A = 4), ubah panjang sisi a untuk melihat bila terbentuk 0, 1, atau 2 segi tiga!', en: 'With A = 30° and b = 8 fixed (height h = 4), slide side a to see 0, 1, or 2 valid triangles!' },
      controls: [
        { id: 'a', label: { bm: 'Panjang sisi bertentangan a', en: 'Opposite side length a' }, min: 2.5, max: 9.5, step: 0.5, default: 5.5 }
      ],
      render: function (canvas, vals, lang, isDark) {
        const { ctx, w, h } = setupCanvas(canvas);
        ctx.fillStyle = isDark ? '#0f172a' : '#f8fafc'; ctx.fillRect(0, 0, w, h);
        const a = Number(vals.a), b = 8, A = Math.PI / 6;
        const hMin = b * Math.sin(A); // 4
        const scale = Math.min(w / 14, h / 7);
        const ox = 40, oy = h - 36;
        const cx = ox + b * Math.cos(A) * scale, cy = oy - hMin * scale;

        // Base line & side b
        ctx.strokeStyle = isDark ? '#64748b' : '#94a3b8'; ctx.lineWidth = 2;
        ctx.beginPath(); ctx.moveTo(ox, oy); ctx.lineTo(w - 20, oy); ctx.stroke();
        ctx.strokeStyle = '#0ea5e9'; ctx.lineWidth = 3;
        ctx.beginPath(); ctx.moveTo(ox, oy); ctx.lineTo(cx, cy); ctx.stroke();

        // Swing circle of radius a from C
        ctx.strokeStyle = 'rgba(245,158,11,0.55)'; ctx.setLineDash([5, 4]);
        ctx.beginPath(); ctx.arc(cx, cy, a * scale, 0, Math.PI); ctx.stroke(); ctx.setLineDash([]);

        let count = 0;
        if (a >= hMin - 1e-6) {
          const dx = Math.sqrt(Math.max(0, a * a - hMin * hMin)) * scale;
          [cx + dx, cx - dx].forEach((bx, idx) => {
            if (bx > ox + 2 && (dx > 1 || idx === 0)) {
              count++;
              ctx.strokeStyle = idx === 0 ? '#10b981' : '#ef4444'; ctx.lineWidth = 2.8;
              ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(bx, oy); ctx.stroke();
              drawDot(ctx, bx, oy, idx === 0 ? '#10b981' : '#ef4444', `B${count}`, isDark);
            }
          });
        }
        drawDot(ctx, ox, oy, '#0ea5e9', 'A(30°)', isDark);
        drawDot(ctx, cx, cy, '#0ea5e9', 'C', isDark);
        const msg = a < hMin ? (lang === 'bm' ? '0 Segi Tiga (a < h = 4, tak sampai tapak!)' : '0 Triangles (a < h = 4)')
          : (Math.abs(a - hMin) < 0.01 ? '1 Segi Tiga Tegak (a = h = 4)' : (a < b ? (lang === 'bm' ? 'KES BERAMBIGUITI: 2 Segi Tiga Sah (h < a < b)!' : 'AMBIGUOUS CASE: 2 Valid Triangles (h < a < b)!') : '1 Segi Tiga (a ≥ b)'));
        return `a = ${a}, b = 8, h = 4  ⇒  ${msg}`;
      }
    },

    // F4 Ch 10: Index Numbers
    'f4-c10': {
      title: { bm: 'Makmal Bar Indeks Gubahan Berpemberat (Ī = ∑Iᵢwᵢ / ∑wᵢ)', en: 'Weighted Composite Index Bar Visualizer' },
      desc: { bm: 'Ubah pemberat bahan A (I_A = 140) berbanding bahan B (I_B = 110) & C (I_C = 120) untuk melihat bagaimana Ī tertarik ke arah pemberat terbesar!', en: 'Slide weight w_A (for I_A = 140) and watch composite index Ī shift toward the heaviest weight!' },
      controls: [
        { id: 'wA', label: { bm: 'Pemberat Bahan A (I=140)', en: 'Weight of Item A (I=140)' }, min: 1, max: 8, step: 1, default: 4 },
        { id: 'wB', label: { bm: 'Pemberat Bahan B (I=110)', en: 'Weight of Item B (I=110)' }, min: 1, max: 6, step: 1, default: 2 }
      ],
      render: function (canvas, vals, lang, isDark) {
        const { ctx, w, h } = setupCanvas(canvas);
        ctx.fillStyle = isDark ? '#0f172a' : '#f8fafc'; ctx.fillRect(0, 0, w, h);
        const items = [
          { name: 'A (I=140)', I: 140, wt: Number(vals.wA), col: '#6366f1' },
          { name: 'B (I=110)', I: 110, wt: Number(vals.wB), col: '#10b981' },
          { name: 'C (I=120)', I: 120, wt: 4, col: '#f59e0b' }
        ];
        const sumW = items.reduce((s, it) => s + it.wt, 0);
        const iBar = items.reduce((s, it) => s + it.I * it.wt, 0) / sumW;
        const yScale = (val) => h - 34 - ((val - 80) / 80) * (h - 64);

        items.forEach((it, idx) => {
          const bx = 50 + idx * ((w - 100) / 3);
          const bw = Math.min(72, 24 + it.wt * 6);
          const by = yScale(it.I);
          ctx.fillStyle = it.col;
          ctx.fillRect(bx, by, bw, (h - 34) - by);
          ctx.fillStyle = isDark ? '#f8fafc' : '#0f172a'; ctx.font = 'bold 11px sans-serif';
          ctx.fillText(`${it.name} [w=${it.wt}]`, bx - 6, h - 14);
        });
        const yBar = yScale(iBar);
        ctx.strokeStyle = '#ef4444'; ctx.lineWidth = 2.6; ctx.setLineDash([6, 4]);
        ctx.beginPath(); ctx.moveTo(20, yBar); ctx.lineTo(w - 20, yBar); ctx.stroke(); ctx.setLineDash([]);
        ctx.fillStyle = '#ef4444'; ctx.fillText(`Ī = ${U.roundStr(iBar, 2)}`, w - 92, yBar - 6);
        return `Jumlah pemberat ∑w = ${sumW}  ⇒  Indeks Gubahan Ī = ${U.roundStr(iBar, 2)} (+${U.roundStr(iBar - 100, 1)}%)`;
      }
    },

    // F5 Ch 1: Circular Measure
    'f5-c1': {
      title: { bm: 'Makmal Sektor, Perentas & Tembereng Bulatan (Mod Radian)', en: 'Circular Sector, Chord & Shaded Segment Lab' },
      desc: { bm: 'Ubah sudut pusat θ (dalam radian) dan jejari r. Kawasan oren ialah tembereng berlorek ½r²(θ − sin θ)!', en: 'Slide central angle θ (radians) and radius r. Orange shows shaded segment ½r²(θ − sin θ)!' },
      controls: [
        { id: 'theta', label: { bm: 'Sudut pusat θ (rad)', en: 'Central angle θ (rad)' }, min: 0.4, max: 3.0, step: 0.2, default: 1.6 },
        { id: 'r', label: { bm: 'Jejari r (cm)', en: 'Radius r (cm)' }, min: 5, max: 12, step: 1, default: 9 }
      ],
      render: function (canvas, vals, lang, isDark) {
        const { ctx, w, h } = setupCanvas(canvas);
        ctx.fillStyle = isDark ? '#0f172a' : '#f8fafc'; ctx.fillRect(0, 0, w, h);
        const th = Number(vals.theta), r = Number(vals.r);
        const cx = w / 2, cy = h * 0.62, radPx = (Math.min(w, h) * 0.36) * (r / 10);
        const a1 = -Math.PI / 2 - th / 2, a2 = -Math.PI / 2 + th / 2;

        ctx.strokeStyle = isDark ? 'rgba(148,163,184,0.28)' : 'rgba(100,116,139,0.25)'; ctx.lineWidth = 1.5;
        ctx.beginPath(); ctx.arc(cx, cy, radPx, 0, Math.PI * 2); ctx.stroke();

        // Sector fill
        ctx.fillStyle = 'rgba(14,165,233,0.18)';
        ctx.beginPath(); ctx.moveTo(cx, cy); ctx.arc(cx, cy, radPx, a1, a2); ctx.closePath(); ctx.fill();

        // Segment fill
        ctx.fillStyle = 'rgba(249,115,22,0.55)';
        ctx.beginPath(); ctx.arc(cx, cy, radPx, a1, a2); ctx.closePath(); ctx.fill();

        ctx.strokeStyle = '#f97316'; ctx.lineWidth = 2.6;
        ctx.beginPath(); ctx.moveTo(cx, cy); ctx.arc(cx, cy, radPx, a1, a2); ctx.closePath(); ctx.stroke();
        const s = r * th, seg = 0.5 * r * r * (th - Math.sin(th));
        return `s = rθ = ${U.roundStr(s, 2)} cm  |  Luas Sektor = ${U.roundStr(0.5 * r * r * th, 2)} cm²  |  Luas Tembereng = ${U.roundStr(seg, 2)} cm²`;
      }
    },

    // F5 Ch 2: Differentiation
    'f5-c2': {
      title: { bm: 'Makmal Tangen, Normal & Titik Pusingan Kubik (dy/dx)', en: 'Cubic Tangent, Normal & Turning Point Explorer' },
      desc: { bm: 'Gerakkan titik x₀ sepanjang y = x³ − 3x. Perhatikan kecerunan tangen menjadi SIFAR tepat pada titik pusingan x = −1 dan x = 1!', en: 'Slide x₀ along y = x³ − 3x. Watch tangent slope hit ZERO at turning points x = −1 and x = 1!' },
      controls: [
        { id: 'x0', label: { bm: 'Kedudukan titik x₀', en: 'Point position x₀' }, min: -2.2, max: 2.2, step: 0.2, default: 1.0 }
      ],
      render: function (canvas, vals, lang, isDark) {
        const { ctx, w, h } = setupCanvas(canvas);
        const { toX, toY } = drawGrid(ctx, w, h, [-3, 3], [-5, 5], isDark);
        const f = (x) => x * x * x - 3 * x;
        const x0 = Number(vals.x0), y0 = f(x0), mT = 3 * x0 * x0 - 3, d2y = 6 * x0;
        plotFn(ctx, toX, toY, [-3, 3], f, '#6366f1', false, 2.8);
        plotFn(ctx, toX, toY, [-3, 3], (x) => mT * (x - x0) + y0, '#ef4444', false, 2.2);
        drawDot(ctx, toX(-1), toY(2), '#10b981', 'Max(-1,2)', isDark);
        drawDot(ctx, toX(1), toY(-2), '#10b981', 'Min(1,-2)', isDark);
        drawDot(ctx, toX(x0), toY(y0), '#ef4444', `x₀=${x0}`, isDark);
        return `Pada x₀ = ${x0}: y = ${U.roundStr(y0, 2)}, dy/dx = ${U.roundStr(mT, 2)}, d²y/dx² = ${U.roundStr(d2y, 2)}`;
      }
    },

    // F5 Ch 3: Integration
    'f5-c3': {
      title: { bm: 'Makmal Luas Bawah Lengkung Kamiran Tentu ∫ₐᵇ (4 − x²) dx', en: 'Definite Integral Shaded Area ∫ₐᵇ (4 − x²) dx Lab' },
      desc: { bm: 'Ubah had atas b. Apabila b melebihi 2, lengkung turun ke bawah paksi-x (merah = sumbangan kamiran negatif)!', en: 'Slide upper limit b. Beyond x = 2, the curve dips below the x-axis (red = negative integral region)!' },
      controls: [
        { id: 'b', label: { bm: 'Had atas kamiran b', en: 'Upper limit b' }, min: 0.5, max: 3.0, step: 0.25, default: 2.0 }
      ],
      render: function (canvas, vals, lang, isDark) {
        const { ctx, w, h } = setupCanvas(canvas);
        const { toX, toY } = drawGrid(ctx, w, h, [-1, 3.5], [-6, 5], isDark);
        const b = Number(vals.b), f = (x) => 4 - x * x;
        for (let i = 0; i < 80; i++) {
          const x1 = (i / 80) * b, x2 = ((i + 1) / 80) * b, ym = f((x1 + x2) / 2);
          ctx.fillStyle = ym >= 0 ? 'rgba(16,185,129,0.35)' : 'rgba(239,68,68,0.38)';
          ctx.fillRect(toX(x1), Math.min(toY(0), toY(ym)), toX(x2) - toX(x1) + 0.5, Math.abs(toY(ym) - toY(0)));
        }
        plotFn(ctx, toX, toY, [-1, 3.5], f, '#dc2626', false, 2.8);
        const netInt = 4 * b - (b * b * b) / 3;
        const physArea = b <= 2 ? netInt : (16 / 3) + Math.abs(netInt - 16 / 3);
        return `Kamiran Bersih ∫₀^${b} y dx = ${U.roundStr(netInt, 2)}  |  Jumlah Luas Fizikal = ${U.roundStr(physArea, 2)} unit²`;
      }
    },

    // F5 Ch 4: Permutations & Combinations
    'f5-c4': {
      title: { bm: 'Visual Perbandingan Pertumbuhan ⁿPᵣ vs ⁿCᵣ', en: 'Permutations ⁿPᵣ vs Combinations ⁿCᵣ Growth Visualizer' },
      desc: { bm: 'Lihat betapa jauh lebih besarnya susunan ⁿPᵣ berbanding pemilihan ⁿCᵣ kerana faktor susunan dalaman r!!', en: 'Compare how much faster ordered ⁿPᵣ grows against unordered ⁿCᵣ (ratio = r!)!' },
      controls: [
        { id: 'n', label: 'Jumlah objek n', min: 4, max: 9, step: 1, default: 6 },
        { id: 'r', label: 'Dipilih r', min: 1, max: 4, step: 1, default: 3 }
      ],
      render: function (canvas, vals, lang, isDark) {
        const { ctx, w, h } = setupCanvas(canvas);
        ctx.fillStyle = isDark ? '#0f172a' : '#f8fafc'; ctx.fillRect(0, 0, w, h);
        const n = Number(vals.n), r = Math.min(n, Number(vals.r));
        const npr = U.nPr(n, r), ncr = U.nCr(n, r), maxV = Math.max(1, npr);
        const hP = (npr / maxV) * (h - 70), hC = (ncr / maxV) * (h - 70);
        ctx.fillStyle = '#a855f7'; ctx.fillRect(w * 0.22, h - 36 - hP, 80, hP);
        ctx.fillStyle = '#10b981'; ctx.fillRect(w * 0.58, h - 36 - hC, 80, Math.max(4, hC));
        ctx.fillStyle = isDark ? '#f8fafc' : '#0f172a'; ctx.font = 'bold 12px sans-serif';
        ctx.fillText(`ⁿPᵣ = ${npr}`, w * 0.22, h - 44 - hP);
        ctx.fillText(`ⁿCᵣ = ${ncr}`, w * 0.58, h - 44 - Math.max(4, hC));
        ctx.fillText('Pilih Atur (Tertib Penting)', w * 0.16, h - 14);
        ctx.fillText('Gabungan (Pasukan)', w * 0.55, h - 14);
        return `n = ${n}, r = ${r}  ⇒  ⁿPᵣ = ${npr},  ⁿCᵣ = ${ncr}  (Nisbah ⁿPᵣ / ⁿCᵣ = ${r}! = ${U.factorial(r)})`;
      }
    },

    // F5 Ch 5: Probability Distributions (Standard Normal Bell Curve)
    'f5-c5': {
      title: { bm: 'Makmal Lengkung Loceng Normal Piawai Skor-Z', en: 'Standard Normal Z-Score Shaded Tail Lab' },
      desc: { bm: 'Gerakkan garis potong skor-Z untuk melihat luas kebarangkalian ekor kanan P(Z > z) secara langsung!', en: 'Slide Z-cutoff to visualize upper-tail probability P(Z > z) under the bell curve!' },
      controls: [
        { id: 'z', label: 'Skor-Z', min: -2.5, max: 2.5, step: 0.25, default: 1.0 }
      ],
      render: function (canvas, vals, lang, isDark) {
        const { ctx, w, h } = setupCanvas(canvas);
        const { toX, toY } = drawGrid(ctx, w, h, [-3.5, 3.5], [-0.05, 0.45], isDark, 'Z', 'f(z)');
        const zCut = Number(vals.z);
        ctx.fillStyle = 'rgba(217,70,239,0.38)';
        ctx.beginPath(); ctx.moveTo(toX(zCut), toY(0));
        for (let z = zCut; z <= 3.5; z += 0.05) ctx.lineTo(toX(z), toY(U.normalPDF(z)));
        ctx.lineTo(toX(3.5), toY(0)); ctx.closePath(); ctx.fill();
        plotFn(ctx, toX, toY, [-3.5, 3.5], (z) => U.normalPDF(z), '#d946ef', false, 2.8);
        const pRight = 1 - U.normalCDF(zCut);
        return `Z = ${zCut}  ⇒  Ekor Kanan P(Z > ${zCut}) = ${U.roundStr(pRight, 4)}  |  Kiri P(Z < ${zCut}) = ${U.roundStr(1 - pRight, 4)}`;
      }
    },

    // F5 Ch 6: Trigonometric Functions
    'f5-c6': {
      title: { bm: 'Makmal Gelombang y = a sin(bx) + c & Pengira Punca Persilangan', en: 'Trig Wave y = a sin(bx) + c Explorer' },
      desc: { bm: 'Ubah amplitud a, kitaran b, dan anjakan c pada domain [0°, 360°] (0 ke 2π rad)!', en: 'Adjust amplitude a, frequency b, and shift c across [0°, 360°]!' },
      controls: [
        { id: 'a', label: 'Amplitud a', min: -3, max: 3, step: 1, default: 2 },
        { id: 'b', label: 'Bilangan kitaran b', min: 1, max: 4, step: 1, default: 2 },
        { id: 'c', label: 'Anjakan c', min: -2, max: 2, step: 1, default: 0 }
      ],
      render: function (canvas, vals, lang, isDark) {
        const { ctx, w, h } = setupCanvas(canvas);
        const { toX, toY } = drawGrid(ctx, w, h, [0, 360], [-5, 5], isDark, 'x°', 'y');
        const a = Number(vals.a), b = Number(vals.b), c = Number(vals.c);
        plotFn(ctx, toX, toY, [0, 360], () => c, '#94a3b8', true, 1.4);
        plotFn(ctx, toX, toY, [0, 360], (deg) => a * Math.sin((b * deg * Math.PI) / 180) + c, '#7c3aed', false, 2.8);
        return `y = ${a} sin(${b}x) ${U.signedNum(c)}  |  Amplitud = ${Math.abs(a)}, Tempoh = ${U.roundStr(360 / b, 0)}°, Julat y ∈ [${c - Math.abs(a)}, ${c + Math.abs(a)}]`;
      }
    },

    // F5 Ch 7: Linear Programming
    'f5-c7': {
      title: { bm: 'Makmal Rantau Tersaur R & Garis Objektif Menggelongsor k = 30x + 20y', en: 'Linear Programming Feasible Region R & Sliding Objective Line' },
      desc: { bm: 'Rantau hijau R memenuhi x + y ≤ 50 dan 2x + y ≤ 80. Gelongsorkan nilai keuntungan k sehingga menyentuh bucu terakhir (30, 20)!', en: 'Green region R satisfies x + y ≤ 50 and 2x + y ≤ 80. Slide objective line k = 30x + 20y to the optimal vertex (30, 20)!' },
      controls: [
        { id: 'k', label: { bm: 'Nilai garis objektif k', en: 'Objective value k' }, min: 300, max: 1500, step: 100, default: 1300 }
      ],
      render: function (canvas, vals, lang, isDark) {
        const { ctx, w, h } = setupCanvas(canvas);
        const { toX, toY } = drawGrid(ctx, w, h, [-5, 60], [-5, 60], isDark);
        const k = Number(vals.k);
        // Feasible polygon: (0,0) -> (0,50) -> (30,20) -> (40,0)
        ctx.fillStyle = 'rgba(5,150,105,0.32)';
        ctx.beginPath();
        [[0, 0], [0, 50], [30, 20], [40, 0]].forEach(([x, y], i) => i === 0 ? ctx.moveTo(toX(x), toY(y)) : ctx.lineTo(toX(x), toY(y)));
        ctx.closePath(); ctx.fill();
        plotFn(ctx, toX, toY, [0, 55], (x) => 50 - x, '#0ea5e9', false, 2);
        plotFn(ctx, toX, toY, [0, 45], (x) => 80 - 2 * x, '#f59e0b', false, 2);
        plotFn(ctx, toX, toY, [-5, 60], (x) => (k - 30 * x) / 20, '#ef4444', true, 2.6);
        drawDot(ctx, toX(30), toY(20), '#ef4444', 'Opt(30,20)', isDark);
        return `Garis Objektif: 30x + 20y = ${k}  |  Keuntungan Maksimum R berlaku pada bucu (30, 20) dengan k_max = 1300!`;
      }
    },

    // F5 Ch 8: Kinematics of Linear Motion
    'f5-c8': {
      title: { bm: 'Simulator Jejak Gerakan Zarah & Pusingan Arah (v = 0)', en: '1D Particle Motion & Turnaround (v = 0) Simulator' },
      desc: { bm: 'Zarah bergerak mengikut s(t) = t² − 6t. Gerakkan masa t dari 0 ke 6 s untuk melihat zarah bergerak ke kiri sehingga s = −9 m (pada t = 3 s) sebelum berpatah balik!', en: 'Particle follows s(t) = t² − 6t. Slide time t from 0 to 6 s to watch it reverse direction at t = 3 s (s = −9 m)!' },
      controls: [
        { id: 't', label: { bm: 'Masa t (saat)', en: 'Time t (seconds)' }, min: 0, max: 6, step: 0.5, default: 4.5 }
      ],
      render: function (canvas, vals, lang, isDark) {
        const { ctx, w, h } = setupCanvas(canvas);
        ctx.fillStyle = isDark ? '#0f172a' : '#f8fafc'; ctx.fillRect(0, 0, w, h);
        const t = Number(vals.t);
        const s = t * t - 6 * t, v = 2 * t - 6;
        const toX = (pos) => ((pos - (-12)) / 16) * (w - 50) + 25;
        const midY = h * 0.58;

        ctx.strokeStyle = isDark ? '#64748b' : '#94a3b8'; ctx.lineWidth = 2;
        ctx.beginPath(); ctx.moveTo(20, midY); ctx.lineTo(w - 20, midY); ctx.stroke();
        [-10, -9, -5, 0, 4].forEach((p) => {
          ctx.fillStyle = isDark ? '#94a3b8' : '#475569'; ctx.font = '11px sans-serif';
          ctx.fillText(p === 0 ? 'O(0)' : `${p}m`, toX(p) - 10, midY + 22);
        });

        // Path trace
        if (t <= 3) {
          drawArrow(ctx, toX(0), midY - 18, toX(s), midY - 18, '#3b82f6', 3);
        } else {
          drawArrow(ctx, toX(0), midY - 26, toX(-9), midY - 26, '#3b82f6', 2.5);
          drawArrow(ctx, toX(-9), midY - 12, toX(s), midY - 12, '#10b981', 3);
        }
        drawDot(ctx, toX(s), midY, '#e11d48', `t=${t}s`, isDark);
        const dist = t <= 3 ? Math.abs(s) : 9 + Math.abs(s - (-9));
        return `t = ${t}s ⇒ Sesaran s = ${U.roundStr(s, 2)} m, Halaju v = ${U.roundStr(v, 2)} m/s  |  Jumlah Jarak Dilalui = ${U.roundStr(dist, 2)} m`;
      }
    }
  });
})(window.AddMathApp);
