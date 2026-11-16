/**
 * AddMath Mudah — Makmal Visual Interaktif HTML5 Canvas (Fasa 2, 3 & 4: T4 Bab 6–10 & T5 Bab 1–8)
 * Semua 18 Bab KSSM mempunyai Makmal Visual masa nyata (responsif mudah alih & dwibahasa penuh BM/EN)!
 */
window.AddMathApp = window.AddMathApp || {};
window.AddMathApp.visualLabs = window.AddMathApp.visualLabs || {};

(function (App) {
  'use strict';
  const U = App.utils;

  function setupCanvas(canvas) {
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    const w = Math.max(260, rect.width || 560);
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

  function drawDot(ctx, w, h, px, py, color, label, isDark, yOffset = -7) {
    ctx.fillStyle = color;
    ctx.beginPath(); ctx.arc(px, py, 5, 0, Math.PI * 2); ctx.fill();
    if (label) {
      ctx.save();
      ctx.fillStyle = isDark ? '#f8fafc' : '#0f172a';
      ctx.font = 'bold 11px sans-serif';
      const tw = ctx.measureText(label).width;
      const lx = Math.min(w - tw - 5, Math.max(5, px + 7));
      const ly = Math.max(13, Math.min(h - 6, py + yOffset));
      ctx.fillText(label, lx, ly);
      ctx.restore();
    }
  }

  function drawArrow(ctx, x1, y1, x2, y2, color, lw = 2.8) {
    if (Math.hypot(x2 - x1, y2 - y1) < 2) return;
    const ang = Math.atan2(y2 - y1, x2 - x1);
    ctx.save();
    ctx.strokeStyle = color; ctx.fillStyle = color; ctx.lineWidth = lw;
    ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x2, y2);
    ctx.lineTo(x2 - 10 * Math.cos(ang - 0.35), y2 - 10 * Math.sin(ang - 0.35));
    ctx.lineTo(x2 - 10 * Math.cos(ang + 0.35), y2 - 10 * Math.sin(ang + 0.35));
    ctx.closePath(); ctx.fill();
    ctx.restore();
  }

  Object.assign(App.visualLabs, {
    // F4 Ch 6: Linear Law
    'f4-c6': {
      title: { bm: 'Makmal Garis Penyuaian Terbaik (Line of Best Fit) Y = mX + C', en: 'Line of Best Fit Y = mX + C Explorer' },
      desc: {
        bm: 'Titik kuning ialah data eksperimen tetap. Gerakkan slider kecerunan m dan pintasan-Y (C) sehingga garis biru melalui tengah-tengah taburan titik!',
        en: 'Yellow dots are fixed experimental data. Adjust gradient m and Y-intercept C until the blue line fits cleanly through the points!'
      },
      controls: [
        { id: 'm', label: { bm: 'Kecerunan m', en: 'Gradient m' }, min: 0.25, max: 2.25, step: 0.25, default: 1.25 },
        { id: 'C', label: { bm: 'Pintasan-Y (C)', en: 'Y-intercept C' }, min: -1, max: 3, step: 0.5, default: 1 }
      ],
      render: function (canvas, vals, lang, isDark) {
        const { ctx, w, h } = setupCanvas(canvas);
        const { toX, toY } = drawGrid(ctx, w, h, [-0.8, 7], [-2, 13], isDark, 'X', 'Y');
        const m = Number.isFinite(Number(vals.m)) ? Number(vals.m) : 1.25;
        const C = Number.isFinite(Number(vals.C)) ? Number(vals.C) : 1;

        // Fixed experimental points around true line Y = 1.25X + 1
        const pts = [[1, 2.4], [2, 3.3], [3, 4.9], [4, 5.8], [5, 7.4], [6, 8.3]];
        pts.forEach(([X, Y]) => {
          drawDot(ctx, w, h, toX(X), toY(Y), '#f59e0b', '', isDark);
        });

        const isBest = Math.abs(m - 1.25) < 0.05 && Math.abs(C - 1) < 0.05;
        plotFn(ctx, toX, toY, [-0.8, 7], (X) => m * X + C, isBest ? '#10b981' : '#06b6d4', false, 2.8);
        drawDot(ctx, w, h, toX(0), toY(C), '#ef4444', `C=${C}`, isDark);

        const fitMsg = isBest
          ? (lang === 'bm' ? '✅ Penyuaian Terbaik!' : '✅ Best Fit Matched!')
          : (lang === 'bm' ? 'Sasaran terbaik: m = 1.25, C = 1' : 'Best fit target: m = 1.25, C = 1');
        return lang === 'bm'
          ? `Y = ${m}X ${U.signedNum(C)} (${fitMsg})  |  Jika Y = log₁₀ y ⇒ a = 10^C = ${U.roundStr(Math.pow(10, C), 2)}`
          : `Y = ${m}X ${U.signedNum(C)} (${fitMsg})  |  If Y = log₁₀ y ⇒ a = 10^C = ${U.roundStr(Math.pow(10, C), 2)}`;
      }
    },

    // F4 Ch 7: Coordinate Geometry
    'f4-c7': {
      title: { bm: 'Makmal Pembahagi Tembereng m : n & Garis Serenjang', en: 'Segment Divisor m : n & Perpendicular Line Lab' },
      desc: {
        bm: 'Gerakkan slider nisbah m dan n sepanjang garis A(−6, −2) ke B(6, 4). Garis putus-putus ungu ialah garis berserenjang yang melalui titik P!',
        en: 'Slide ratio m : n along segment A(−6, −2) to B(6, 4). Dashed purple shows the perpendicular line passing through P!'
      },
      controls: [
        { id: 'm', label: { bm: 'Nisbah m (AP)', en: 'Ratio m (AP)' }, min: 1, max: 5, step: 1, default: 1 },
        { id: 'n', label: { bm: 'Nisbah n (PB)', en: 'Ratio n (PB)' }, min: 1, max: 5, step: 1, default: 2 }
      ],
      render: function (canvas, vals, lang, isDark) {
        const { ctx, w, h } = setupCanvas(canvas);
        const { toX, toY } = drawGrid(ctx, w, h, [-8, 8], [-6, 6], isDark);
        const m = Number(vals.m) || 1, n = Number(vals.n) || 2;
        const ax = -6, ay = -2, bx = 6, by = 4;
        const px = (n * ax + m * bx) / (m + n), py = (n * ay + m * by) / (m + n);
        ctx.strokeStyle = '#0ea5e9'; ctx.lineWidth = 3;
        ctx.beginPath(); ctx.moveTo(toX(ax), toY(ay)); ctx.lineTo(toX(bx), toY(by)); ctx.stroke();
        const mAB = (by - ay) / (bx - ax), mPerp = -1 / mAB;
        plotFn(ctx, toX, toY, [-8, 8], (x) => mPerp * (x - px) + py, '#a855f7', true, 2.2);
        drawDot(ctx, w, h, toX(ax), toY(ay), '#0ea5e9', 'A(-6,-2)', isDark, 15);
        drawDot(ctx, w, h, toX(bx), toY(by), '#0ea5e9', 'B(6,4)', isDark, -8);
        drawDot(ctx, w, h, toX(px), toY(py), '#ef4444', `P(${U.roundStr(px, 1)},${U.roundStr(py, 1)})`, isDark, -9);
        return lang === 'bm'
          ? `Nisbah ${m}:${n} ⇒ P = (${U.roundStr(px, 2)}, ${U.roundStr(py, 2)})  |  m_AB = 0.5, m_serenjang = −2`
          : `Ratio ${m}:${n} ⇒ P = (${U.roundStr(px, 2)}, ${U.roundStr(py, 2)})  |  m_AB = 0.5, m_⊥ = −2`;
      }
    },

    // F4 Ch 8: Vectors
    'f4-c8': {
      title: { bm: 'Makmal Vektor Paduan (a + b) — Hukum Segi Empat Selari', en: '2D Vector Parallelogram Resultant (a + b) Lab' },
      desc: {
        bm: 'Ubah komponen vektor biru a = (a_x, a_y) dan perhatikan vektor paduan merah (a + b) apabila digabungkan dengan vektor hijau b = 2i + 3j!',
        en: 'Adjust blue vector a = (a_x, a_y) and watch the red resultant (a + b) combined with green vector b = 2i + 3j!'
      },
      controls: [
        { id: 'ax', label: { bm: 'Komponen mengufuk a_x', en: 'Horizontal component a_x' }, min: -4, max: 5, step: 1, default: 4 },
        { id: 'ay', label: { bm: 'Komponen mencancang a_y', en: 'Vertical component a_y' }, min: -3, max: 4, step: 1, default: 1 }
      ],
      render: function (canvas, vals, lang, isDark) {
        const { ctx, w, h } = setupCanvas(canvas);
        const { toX, toY } = drawGrid(ctx, w, h, [-5, 8], [-4, 8], isDark);
        const ax = Number.isFinite(Number(vals.ax)) ? Number(vals.ax) : 4;
        const ay = Number.isFinite(Number(vals.ay)) ? Number(vals.ay) : 1;
        const bx = 2, by = 3;
        const rx = ax + bx, ry = ay + by;
        ctx.save();
        ctx.strokeStyle = isDark ? 'rgba(148,163,184,0.45)' : 'rgba(100,116,139,0.45)';
        ctx.setLineDash([5, 4]);
        ctx.beginPath(); ctx.moveTo(toX(ax), toY(ay)); ctx.lineTo(toX(rx), toY(ry)); ctx.lineTo(toX(bx), toY(by)); ctx.stroke();
        ctx.restore();

        drawArrow(ctx, toX(0), toY(0), toX(ax), toY(ay), '#3b82f6');
        drawArrow(ctx, toX(0), toY(0), toX(bx), toY(by), '#10b981');
        drawArrow(ctx, toX(0), toY(0), toX(rx), toY(ry), '#ef4444', 3.2);

        drawDot(ctx, w, h, toX(ax), toY(ay), '#3b82f6', 'a', isDark, 14);
        drawDot(ctx, w, h, toX(bx), toY(by), '#10b981', 'b', isDark, -8);
        drawDot(ctx, w, h, toX(rx), toY(ry), '#ef4444', 'a+b', isDark, -8);

        return `a = ${ax}i ${U.signedNum(ay)}j,  b = 2i + 3j  ⇒  a + b = ${rx}i ${U.signedNum(ry)}j  |  |a + b| = ${U.roundStr(Math.hypot(rx, ry), 2)}`;
      }
    },

    // F4 Ch 9: Solution of Triangles (SSA Ambiguous Case!)
    'f4-c9': {
      title: { bm: 'Simulator Ambiguous Case SSA (0, 1 atau 2 Segi Tiga!)', en: 'SSA Ambiguous Triangle Live Simulator' },
      desc: {
        bm: 'Dengan sudut A = 30° dan sisi b = 8 tetap (tinggi tegak h = b sin 30° = 4), gerakkan slider sisi a untuk melihat bila terbentuk 2 segi tiga berbeza!',
        en: 'With A = 30° and b = 8 fixed (height h = 4), slide opposite side a to see when 0, 1, or 2 distinct triangles form!'
      },
      controls: [
        { id: 'a', label: { bm: 'Panjang sisi bertentangan a', en: 'Opposite side length a' }, min: 2.5, max: 9.5, step: 0.5, default: 5.5 }
      ],
      render: function (canvas, vals, lang, isDark) {
        const { ctx, w, h } = setupCanvas(canvas);
        ctx.fillStyle = isDark ? '#0f172a' : '#f8fafc'; ctx.fillRect(0, 0, w, h);
        const a = Number(vals.a) || 5.5, b = 8, A = Math.PI / 6;
        const hMin = b * Math.sin(A); // 4
        // Scale fits maximum horizontal extent (b cos 30 + sqrt(9.5^2 - 4^2) = 15.55) cleanly on 280px+ screens
        const scale = Math.min((w - 56) / 16, (h - 56) / 5.2);
        const ox = 24, oy = h - 32;
        const cx = ox + b * Math.cos(A) * scale, cy = oy - hMin * scale;

        // Base line, height h dashed line & side b
        ctx.strokeStyle = isDark ? '#64748b' : '#94a3b8'; ctx.lineWidth = 2;
        ctx.beginPath(); ctx.moveTo(ox, oy); ctx.lineTo(w - 16, oy); ctx.stroke();
        ctx.save();
        ctx.strokeStyle = isDark ? 'rgba(148,163,184,0.35)' : 'rgba(100,116,139,0.35)';
        ctx.setLineDash([4, 4]);
        ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(cx, oy); ctx.stroke();
        ctx.restore();

        ctx.strokeStyle = '#0ea5e9'; ctx.lineWidth = 3;
        ctx.beginPath(); ctx.moveTo(ox, oy); ctx.lineTo(cx, cy); ctx.stroke();

        // Swing circle of radius a from C
        ctx.save();
        ctx.strokeStyle = 'rgba(245,158,11,0.55)'; ctx.setLineDash([5, 4]);
        ctx.beginPath(); ctx.arc(cx, cy, a * scale, 0, Math.PI); ctx.stroke();
        ctx.restore();

        let count = 0;
        if (a >= hMin - 1e-6) {
          const dx = Math.sqrt(Math.max(0, a * a - hMin * hMin)) * scale;
          [cx + dx, cx - dx].forEach((bx, idx) => {
            if (bx > ox + 2 && (dx > 1 || idx === 0)) {
              count++;
              ctx.strokeStyle = idx === 0 ? '#10b981' : '#ef4444'; ctx.lineWidth = 2.8;
              ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(bx, oy); ctx.stroke();
              drawDot(ctx, w, h, bx, oy, idx === 0 ? '#10b981' : '#ef4444', `B${count}`, isDark, 16);
            }
          });
        }
        drawDot(ctx, w, h, ox, oy, '#0ea5e9', 'A(30°)', isDark, 16);
        drawDot(ctx, w, h, cx, cy, '#0ea5e9', 'C (h=4)', isDark, -9);

        let msg;
        if (a < hMin) {
          msg = lang === 'bm' ? '0 Segi Tiga (a < h = 4, sisi terlalu pendek!)' : '0 Triangles (a < h = 4, too short!)';
        } else if (Math.abs(a - hMin) < 0.01) {
          msg = lang === 'bm' ? '1 Segi Tiga Bersudut Tegak (a = h = 4)' : '1 Right-Angled Triangle (a = h = 4)';
        } else if (a < b) {
          msg = lang === 'bm' ? 'AMBIGUOUS CASE: 2 Segi Tiga Terbentuk (4 < a < 8)!' : 'AMBIGUOUS CASE: 2 Valid Triangles (4 < a < 8)!';
        } else {
          msg = lang === 'bm' ? '1 Segi Tiga Sahaja (a ≥ b)' : '1 Single Triangle (a ≥ b)';
        }
        return `a = ${a}, b = 8, h = 4  ⇒  ${msg}`;
      }
    },

    // F4 Ch 10: Index Numbers
    'f4-c10': {
      title: { bm: 'Makmal Carta Palang Indeks Gubahan (Ī = ∑Iᵢwᵢ / ∑wᵢ)', en: 'Weighted Composite Index Bar Visualizer' },
      desc: {
        bm: 'Ubah pemberat w bagi Bahan A (I = 140) dan Bahan B (I = 110) untuk melihat bagaimana purata Indeks Gubahan Ī ditarik ke arah pemberat paling besar!',
        en: 'Slide weights for Item A (I = 140) and Item B (I = 110) and watch composite index Ī shift toward the heaviest weight!'
      },
      controls: [
        { id: 'wA', label: { bm: 'Pemberat Bahan A (I = 140)', en: 'Weight of Item A (I = 140)' }, min: 1, max: 8, step: 1, default: 4 },
        { id: 'wB', label: { bm: 'Pemberat Bahan B (I = 110)', en: 'Weight of Item B (I = 110)' }, min: 1, max: 6, step: 1, default: 2 }
      ],
      render: function (canvas, vals, lang, isDark) {
        const { ctx, w, h } = setupCanvas(canvas);
        ctx.fillStyle = isDark ? '#0f172a' : '#f8fafc'; ctx.fillRect(0, 0, w, h);
        const items = [
          { code: 'A', I: 140, wt: Number(vals.wA) || 4, col: '#6366f1' },
          { code: 'B', I: 110, wt: Number(vals.wB) || 2, col: '#10b981' },
          { code: 'C', I: 120, wt: 4, col: '#f59e0b' }
        ];
        const sumW = items.reduce((s, it) => s + it.wt, 0);
        const iBar = items.reduce((s, it) => s + it.I * it.wt, 0) / sumW;
        const baseBottom = h - 34;
        const yScale = (val) => baseBottom - ((val - 80) / 80) * (h - 72);

        const colW = (w - 28) / 3;
        ctx.save();
        ctx.textAlign = 'center';
        items.forEach((it, idx) => {
          const centerX = 14 + idx * colW + colW / 2;
          const bw = Math.min(colW - 14, 20 + it.wt * 5.5);
          const by = yScale(it.I);
          ctx.fillStyle = it.col;
          ctx.fillRect(centerX - bw / 2, by, bw, baseBottom - by);
          ctx.fillStyle = isDark ? '#f8fafc' : '#0f172a';
          ctx.font = 'bold 11px sans-serif';
          ctx.fillText(`${it.code} (I=${it.I})`, centerX, by - 7);
          ctx.fillStyle = isDark ? '#cbd5e1' : '#334155';
          ctx.font = '11px sans-serif';
          ctx.fillText(`w = ${it.wt}`, centerX, h - 14);
        });
        ctx.restore();

        const yBar = yScale(iBar);
        ctx.save();
        ctx.strokeStyle = '#ef4444'; ctx.lineWidth = 2.6; ctx.setLineDash([6, 4]);
        ctx.beginPath(); ctx.moveTo(14, yBar); ctx.lineTo(w - 14, yBar); ctx.stroke();
        ctx.fillStyle = '#ef4444'; ctx.font = 'bold 12px sans-serif';
        ctx.fillText(`Ī = ${U.roundStr(iBar, 2)}`, 18, yBar - 7);
        ctx.restore();

        return lang === 'bm'
          ? `Jumlah pemberat ∑w = ${sumW}  ⇒  Indeks Gubahan Ī = ${U.roundStr(iBar, 2)} (Naik +${U.roundStr(iBar - 100, 1)}%)`
          : `Total weight ∑w = ${sumW}  ⇒  Composite Index Ī = ${U.roundStr(iBar, 2)} (+${U.roundStr(iBar - 100, 1)}% rise)`;
      }
    },

    // F5 Ch 1: Circular Measure
    'f5-c1': {
      title: { bm: 'Makmal Sektor, Perentas & Tembereng Bulatan (Unit Radian)', en: 'Circular Sector, Chord & Shaded Segment Lab' },
      desc: {
        bm: 'Gerakkan slider sudut pusat θ (dalam radian) dan jejari r. Kawasan oren ialah tembereng berlorek = Luas Sektor − Luas Segi Tiga!',
        en: 'Slide central angle θ (radians) and radius r. Orange shows shaded segment = Sector Area − Triangle Area!'
      },
      controls: [
        { id: 'theta', label: { bm: 'Sudut pusat θ (rad)', en: 'Central angle θ (rad)' }, min: 0.4, max: 3.0, step: 0.2, default: 1.6 },
        { id: 'r', label: { bm: 'Jejari r (cm)', en: 'Radius r (cm)' }, min: 5, max: 12, step: 1, default: 9 }
      ],
      render: function (canvas, vals, lang, isDark) {
        const { ctx, w, h } = setupCanvas(canvas);
        ctx.fillStyle = isDark ? '#0f172a' : '#f8fafc'; ctx.fillRect(0, 0, w, h);
        const th = Number(vals.theta) || 1.6, r = Number(vals.r) || 9;
        const cx = w / 2, cy = h * 0.62, radPx = (Math.min(w, h) * 0.35) * (r / 10);
        const a1 = -Math.PI / 2 - th / 2, a2 = -Math.PI / 2 + th / 2;

        ctx.strokeStyle = isDark ? 'rgba(148,163,184,0.28)' : 'rgba(100,116,139,0.25)'; ctx.lineWidth = 1.5;
        ctx.beginPath(); ctx.arc(cx, cy, radPx, 0, Math.PI * 2); ctx.stroke();

        // Sector fill
        ctx.fillStyle = 'rgba(14,165,233,0.18)';
        ctx.beginPath(); ctx.moveTo(cx, cy); ctx.arc(cx, cy, radPx, a1, a2); ctx.closePath(); ctx.fill();

        // Segment fill
        ctx.fillStyle = 'rgba(249,115,22,0.55)';
        ctx.beginPath(); ctx.arc(cx, cy, radPx, a1, a2); ctx.closePath(); ctx.fill();

        // Chord AB + Sector outline
        const ax = cx + radPx * Math.cos(a1), ay = cy + radPx * Math.sin(a1);
        const bx = cx + radPx * Math.cos(a2), by = cy + radPx * Math.sin(a2);
        ctx.strokeStyle = '#0ea5e9'; ctx.lineWidth = 2;
        ctx.beginPath(); ctx.moveTo(ax, ay); ctx.lineTo(bx, by); ctx.stroke();

        ctx.strokeStyle = '#f97316'; ctx.lineWidth = 2.6;
        ctx.beginPath(); ctx.moveTo(cx, cy); ctx.arc(cx, cy, radPx, a1, a2); ctx.closePath(); ctx.stroke();

        drawDot(ctx, w, h, cx, cy, '#0ea5e9', `O (θ=${th} rad)`, isDark, 17);
        drawDot(ctx, w, h, ax, ay, '#f97316', 'A', isDark, -8);
        drawDot(ctx, w, h, bx, by, '#f97316', 'B', isDark, -8);

        const s = r * th, secArea = 0.5 * r * r * th, seg = 0.5 * r * r * (th - Math.sin(th));
        return lang === 'bm'
          ? `Lengkok s = ${U.roundStr(s, 2)} cm  |  Luas Sektor = ${U.roundStr(secArea, 2)} cm²  |  Luas Tembereng = ${U.roundStr(seg, 2)} cm²`
          : `Arc s = ${U.roundStr(s, 2)} cm  |  Sector Area = ${U.roundStr(secArea, 2)} cm²  |  Segment Area = ${U.roundStr(seg, 2)} cm²`;
      }
    },

    // F5 Ch 2: Differentiation
    'f5-c2': {
      title: { bm: 'Makmal Tangen, Normal & Titik Pusingan Kubik (dy/dx)', en: 'Cubic Tangent, Normal & Turning Point Explorer' },
      desc: {
        bm: 'Gerakkan titik x₀ sepanjang y = x³ − 3x. Garis merah padu = Tangen, garis oren putus-putus = Normal. Di x = −1 & x = 1, kecerunan tangen dy/dx = 0!',
        en: 'Slide x₀ along y = x³ − 3x. Solid red = Tangent, dashed orange = Normal. At turning points x = −1 & x = 1, slope dy/dx = 0!'
      },
      controls: [
        { id: 'x0', label: { bm: 'Kedudukan titik x₀', en: 'Point position x₀' }, min: -2.2, max: 2.2, step: 0.2, default: 0.4 }
      ],
      render: function (canvas, vals, lang, isDark) {
        const { ctx, w, h } = setupCanvas(canvas);
        const { toX, toY } = drawGrid(ctx, w, h, [-3, 3], [-5, 5], isDark);
        const f = (x) => x * x * x - 3 * x;
        const x0 = Number.isFinite(Number(vals.x0)) ? Number(vals.x0) : 0.4;
        const y0 = f(x0), mT = 3 * x0 * x0 - 3, d2y = 6 * x0;

        plotFn(ctx, toX, toY, [-3, 3], f, '#6366f1', false, 2.8);
        // Normal line (dashed orange)
        if (Math.abs(mT) < 1e-4) {
          ctx.save();
          ctx.strokeStyle = '#f59e0b'; ctx.lineWidth = 2; ctx.setLineDash([5, 4]);
          ctx.beginPath(); ctx.moveTo(toX(x0), 0); ctx.lineTo(toX(x0), h); ctx.stroke();
          ctx.restore();
        } else {
          const mN = -1 / mT;
          plotFn(ctx, toX, toY, [-3, 3], (x) => mN * (x - x0) + y0, '#f59e0b', true, 2);
        }
        // Tangent line (solid red)
        plotFn(ctx, toX, toY, [-3, 3], (x) => mT * (x - x0) + y0, '#ef4444', false, 2.4);

        drawDot(ctx, w, h, toX(-1), toY(2), '#10b981', 'Max(-1,2)', isDark, -8);
        drawDot(ctx, w, h, toX(1), toY(-2), '#10b981', 'Min(1,-2)', isDark, 15);
        const nearTurn = Math.abs(x0 - 1) < 0.35 || Math.abs(x0 + 1) < 0.35;
        drawDot(ctx, w, h, toX(x0), toY(y0), '#ef4444', `x₀=${x0}`, isDark, nearTurn ? -18 : -8);

        return lang === 'bm'
          ? `Pada x₀ = ${x0}: y = ${U.roundStr(y0, 2)}, Kecerunan Tangen dy/dx = ${U.roundStr(mT, 2)}, d²y/dx² = ${U.roundStr(d2y, 2)}`
          : `At x₀ = ${x0}: y = ${U.roundStr(y0, 2)}, Tangent Slope dy/dx = ${U.roundStr(mT, 2)}, d²y/dx² = ${U.roundStr(d2y, 2)}`;
      }
    },

    // F5 Ch 3: Integration
    'f5-c3': {
      title: { bm: 'Makmal Luas Bawah Lengkung ∫₀ᵇ (4 − x²) dx', en: 'Definite Integral Shaded Area ∫₀ᵇ (4 − x²) dx Lab' },
      desc: {
        bm: 'Gerakkan had atas b. Apabila b melebihi 2, lengkung turun ke bawah paksi-x (merah = nilai kamiran negatif, wajib guna modulus |...| untuk luas)!',
        en: 'Slide upper limit b. Beyond x = 2, the curve dips below the x-axis (red = negative integral; take |...| for physical area)!'
      },
      controls: [
        { id: 'b', label: { bm: 'Had atas kamiran b', en: 'Upper limit b' }, min: 0.5, max: 3.0, step: 0.25, default: 2.0 }
      ],
      render: function (canvas, vals, lang, isDark) {
        const { ctx, w, h } = setupCanvas(canvas);
        const { toX, toY } = drawGrid(ctx, w, h, [-1, 3.5], [-6, 5], isDark);
        const b = Number(vals.b) || 2.0, f = (x) => 4 - x * x;
        for (let i = 0; i < 80; i++) {
          const x1 = (i / 80) * b, x2 = ((i + 1) / 80) * b, ym = f((x1 + x2) / 2);
          ctx.fillStyle = ym >= 0 ? 'rgba(16,185,129,0.35)' : 'rgba(239,68,68,0.38)';
          ctx.fillRect(toX(x1), Math.min(toY(0), toY(ym)), toX(x2) - toX(x1) + 0.5, Math.abs(toY(ym) - toY(0)));
        }
        plotFn(ctx, toX, toY, [-1, 3.5], f, '#dc2626', false, 2.8);
        const netInt = 4 * b - (b * b * b) / 3;
        const physArea = b <= 2 ? netInt : (16 / 3) + Math.abs(netInt - 16 / 3);
        return lang === 'bm'
          ? `Nilai Kamiran ∫₀^${b} y dx = ${U.roundStr(netInt, 2)}  |  Jumlah Luas Berlorek = ${U.roundStr(physArea, 2)} unit²`
          : `Net Integral ∫₀^${b} y dx = ${U.roundStr(netInt, 2)}  |  Total Shaded Area = ${U.roundStr(physArea, 2)} unit²`;
      }
    },

    // F5 Ch 4: Permutations & Combinations
    'f5-c4': {
      title: { bm: 'Makmal Perbandingan Pilih Atur ⁿPᵣ vs Gabungan ⁿCᵣ', en: 'Permutations ⁿPᵣ vs Combinations ⁿCᵣ Visualizer' },
      desc: {
        bm: 'Lihat betapa jauh lebih besarnya bilangan susunan ⁿPᵣ berbanding pemilihan kumpulan ⁿCᵣ kerana didarab dengan faktor susunan r! (faktorial).',
        en: 'Compare how much faster ordered ⁿPᵣ grows against unordered team selection ⁿCᵣ (ratio = r!)!'
      },
      controls: [
        { id: 'n', label: { bm: 'Jumlah objek n', en: 'Total objects n' }, min: 4, max: 9, step: 1, default: 6 },
        { id: 'r', label: { bm: 'Bilangan dipilih r', en: 'Chosen count r' }, min: 1, max: 4, step: 1, default: 3 }
      ],
      render: function (canvas, vals, lang, isDark) {
        const { ctx, w, h } = setupCanvas(canvas);
        ctx.fillStyle = isDark ? '#0f172a' : '#f8fafc'; ctx.fillRect(0, 0, w, h);
        const n = Number(vals.n) || 6, r = Math.min(n, Number(vals.r) || 3);
        const npr = U.nPr(n, r), ncr = U.nCr(n, r), maxV = Math.max(1, npr);
        const hP = (npr / maxV) * (h - 74), hC = (ncr / maxV) * (h - 74);
        const bw = Math.min(82, w * 0.25);
        const cxP = w * 0.28, cxC = w * 0.72;

        ctx.fillStyle = '#a855f7'; ctx.fillRect(cxP - bw / 2, h - 38 - hP, bw, hP);
        ctx.fillStyle = '#10b981'; ctx.fillRect(cxC - bw / 2, h - 38 - Math.max(5, hC), bw, Math.max(5, hC));

        ctx.save();
        ctx.textAlign = 'center';
        ctx.fillStyle = isDark ? '#f8fafc' : '#0f172a';
        ctx.font = 'bold 12px sans-serif';
        ctx.fillText(`ⁿPᵣ = ${npr}`, cxP, h - 45 - hP);
        ctx.fillText(`ⁿCᵣ = ${ncr}`, cxC, h - 45 - Math.max(5, hC));
        ctx.font = 'bold 11px sans-serif';
        ctx.fillText(lang === 'bm' ? 'Pilih Atur (Susunan)' : 'Permutation (Order)', cxP, h - 14);
        ctx.fillText(lang === 'bm' ? 'Gabungan (Kumpulan)' : 'Combination (Group)', cxC, h - 14);
        ctx.restore();

        return lang === 'bm'
          ? `n = ${n}, r = ${r}  ⇒  ⁿPᵣ = ${npr},  ⁿCᵣ = ${ncr}  (Beza gandaan = ${r}! = ${U.factorial(r)} kali)`
          : `n = ${n}, r = ${r}  ⇒  ⁿPᵣ = ${npr},  ⁿCᵣ = ${ncr}  (Ratio ⁿPᵣ / ⁿCᵣ = ${r}! = ${U.factorial(r)})`;
      }
    },

    // F5 Ch 5: Probability Distributions (Standard Normal Bell Curve)
    'f5-c5': {
      title: { bm: 'Makmal Lengkung Loceng Normal Piawai (Skor-Z)', en: 'Standard Normal Z-Score Bell Curve Lab' },
      desc: {
        bm: 'Gerakkan garis nilai skor-Z untuk melihat luas kebarangkalian kawasan kanan P(Z > z) seperti dalam Jadual Sifir SPM!',
        en: 'Slide Z-score to visualize upper-tail probability P(Z > z) under the standard normal bell curve!'
      },
      controls: [
        { id: 'z', label: { bm: 'Nilai Skor-Z', en: 'Z-Score value' }, min: -2.5, max: 2.5, step: 0.25, default: 1.0 }
      ],
      render: function (canvas, vals, lang, isDark) {
        const { ctx, w, h } = setupCanvas(canvas);
        const { toX, toY } = drawGrid(ctx, w, h, [-3.5, 3.5], [-0.05, 0.45], isDark, 'Z', 'f(z)');
        const zCut = Number.isFinite(Number(vals.z)) ? Number(vals.z) : 1.0;
        ctx.fillStyle = 'rgba(217,70,239,0.38)';
        ctx.beginPath(); ctx.moveTo(toX(zCut), toY(0));
        for (let z = zCut; z <= 3.5; z += 0.05) ctx.lineTo(toX(z), toY(U.normalPDF(z)));
        ctx.lineTo(toX(3.5), toY(0)); ctx.closePath(); ctx.fill();
        plotFn(ctx, toX, toY, [-3.5, 3.5], (z) => U.normalPDF(z), '#d946ef', false, 2.8);
        drawDot(ctx, w, h, toX(zCut), toY(0), '#d946ef', `z=${zCut}`, isDark, 15);
        const pRight = 1 - U.normalCDF(zCut);
        return lang === 'bm'
          ? `Z = ${zCut}  ⇒  Kawasan Kanan P(Z > ${zCut}) = ${U.roundStr(pRight, 4)}  |  Kawasan Kiri P(Z < ${zCut}) = ${U.roundStr(1 - pRight, 4)}`
          : `Z = ${zCut}  ⇒  Right Area P(Z > ${zCut}) = ${U.roundStr(pRight, 4)}  |  Left Area P(Z < ${zCut}) = ${U.roundStr(1 - pRight, 4)}`;
      }
    },

    // F5 Ch 6: Trigonometric Functions
    'f5-c6': {
      title: { bm: 'Makmal Graf Gelombang y = a sin(bx) + c', en: 'Trig Wave y = a sin(bx) + c Explorer' },
      desc: {
        bm: 'Ubah amplitud a, bilangan kitaran b, dan anjakan paksi tengah c bagi julat 0° ≤ x ≤ 360° (0 hingga 2π rad)!',
        en: 'Adjust amplitude a, number of cycles b, and vertical shift c across 0° ≤ x ≤ 360°!'
      },
      controls: [
        { id: 'a', label: { bm: 'Amplitud a', en: 'Amplitude a' }, min: -3, max: 3, step: 1, default: 2 },
        { id: 'b', label: { bm: 'Bilangan kitaran b', en: 'Cycles b' }, min: 1, max: 4, step: 1, default: 2 },
        { id: 'c', label: { bm: 'Anjakan tegak c', en: 'Vertical shift c' }, min: -2, max: 2, step: 1, default: 0 }
      ],
      render: function (canvas, vals, lang, isDark) {
        const { ctx, w, h } = setupCanvas(canvas);
        const { toX, toY } = drawGrid(ctx, w, h, [0, 360], [-5, 5], isDark, 'x°', 'y');
        const a = Number.isFinite(Number(vals.a)) ? Number(vals.a) : 2;
        const b = Number(vals.b) || 2;
        const c = Number.isFinite(Number(vals.c)) ? Number(vals.c) : 0;
        plotFn(ctx, toX, toY, [0, 360], () => c, '#94a3b8', true, 1.4);
        plotFn(ctx, toX, toY, [0, 360], (deg) => a * Math.sin((b * deg * Math.PI) / 180) + c, '#7c3aed', false, 2.8);
        return lang === 'bm'
          ? `y = ${a} sin(${b}x) ${U.signedNum(c)}  |  Amplitud = ${Math.abs(a)}, Kala (1 kitaran) = ${U.roundStr(360 / b, 0)}°, Julat y: [${c - Math.abs(a)}, ${c + Math.abs(a)}]`
          : `y = ${a} sin(${b}x) ${U.signedNum(c)}  |  Amplitude = ${Math.abs(a)}, Period = ${U.roundStr(360 / b, 0)}°, Range y: [${c - Math.abs(a)}, ${c + Math.abs(a)}]`;
      }
    },

    // F5 Ch 7: Linear Programming
    'f5-c7': {
      title: { bm: 'Makmal Rantau Berlorek R (Feasible Region) & Garis Objektif', en: 'Linear Programming Feasible Region R & Objective Line' },
      desc: {
        bm: 'Kawasan hijau R memenuhi x + y ≤ 50 dan 2x + y ≤ 80. Gerakkan slider keuntungan k bagi garis merah 30x + 20y = k sehingga menyentuh bucu terakhir (30, 20)!',
        en: 'Green region R satisfies x + y ≤ 50 and 2x + y ≤ 80. Slide profit k on dashed line 30x + 20y = k to find optimal vertex (30, 20)!'
      },
      controls: [
        { id: 'k', label: { bm: 'Nilai fungsi objektif k', en: 'Objective value k' }, min: 300, max: 1500, step: 100, default: 1300 }
      ],
      render: function (canvas, vals, lang, isDark) {
        const { ctx, w, h } = setupCanvas(canvas);
        const { toX, toY } = drawGrid(ctx, w, h, [-5, 60], [-5, 60], isDark);
        const k = Number(vals.k) || 1300;
        // Feasible polygon: (0,0) -> (0,50) -> (30,20) -> (40,0)
        ctx.fillStyle = 'rgba(5,150,105,0.32)';
        ctx.beginPath();
        [[0, 0], [0, 50], [30, 20], [40, 0]].forEach(([x, y], i) => i === 0 ? ctx.moveTo(toX(x), toY(y)) : ctx.lineTo(toX(x), toY(y)));
        ctx.closePath(); ctx.fill();

        // Mandatory SPM 'R' label inside feasible region
        ctx.save();
        ctx.fillStyle = isDark ? '#34d399' : '#065f46';
        ctx.font = 'bold 16px sans-serif';
        ctx.fillText('R', toX(12), toY(15));
        ctx.restore();

        plotFn(ctx, toX, toY, [0, 55], (x) => 50 - x, '#0ea5e9', false, 2);
        plotFn(ctx, toX, toY, [0, 45], (x) => 80 - 2 * x, '#f59e0b', false, 2);
        plotFn(ctx, toX, toY, [-5, 60], (x) => (k - 30 * x) / 20, '#ef4444', true, 2.6);
        drawDot(ctx, w, h, toX(30), toY(20), '#ef4444', 'Opt(30,20)', isDark, -8);

        return lang === 'bm'
          ? `Garis Objektif: 30x + 20y = ${k}  |  Nilai Maksimum dalam R berlaku di bucu (30, 20) dengan k_maks = 1300!`
          : `Objective Line: 30x + 20y = ${k}  |  Maximum in R occurs at vertex (30, 20) with k_max = 1300!`;
      }
    },

    // F5 Ch 8: Kinematics of Linear Motion
    'f5-c8': {
      title: { bm: 'Simulator Gerakan Zarah & Pusingan U (v = 0)', en: '1D Particle Motion & U-Turn (v = 0) Simulator' },
      desc: {
        bm: 'Zarah bergerak mengikut s(t) = t² − 6t. Gerakkan masa t dari 0 ke 6 s untuk melihat zarah ke kiri sehingga s = −9 m (pada t = 3 s, v = 0) sebelum patah balik!',
        en: 'Particle follows s(t) = t² − 6t. Slide time t from 0 to 6 s to watch it stop & U-turn at t = 3 s (s = −9 m, v = 0)!'
      },
      controls: [
        { id: 't', label: { bm: 'Masa t (saat)', en: 'Time t (seconds)' }, min: 0, max: 6, step: 0.5, default: 4.5 }
      ],
      render: function (canvas, vals, lang, isDark) {
        const { ctx, w, h } = setupCanvas(canvas);
        ctx.fillStyle = isDark ? '#0f172a' : '#f8fafc'; ctx.fillRect(0, 0, w, h);
        const t = Number.isFinite(Number(vals.t)) ? Number(vals.t) : 4.5;
        const s = t * t - 6 * t, v = 2 * t - 6;
        const toX = (pos) => ((pos - (-11)) / 16) * (w - 48) + 24;
        const midY = h * 0.58;

        ctx.strokeStyle = isDark ? '#64748b' : '#94a3b8'; ctx.lineWidth = 2;
        ctx.beginPath(); ctx.moveTo(20, midY); ctx.lineTo(w - 20, midY); ctx.stroke();

        ctx.save();
        ctx.textAlign = 'center';
        ctx.fillStyle = isDark ? '#94a3b8' : '#475569';
        ctx.font = '11px sans-serif';
        [-9, -5, 0, 4].forEach((p) => {
          ctx.fillText(p === 0 ? 'O(0)' : `${p}m`, toX(p), midY + 22);
        });
        ctx.restore();

        // Path trace
        if (t > 0 && t <= 3) {
          drawArrow(ctx, toX(0), midY - 18, toX(s), midY - 18, '#3b82f6', 3);
        } else if (t > 3) {
          drawArrow(ctx, toX(0), midY - 26, toX(-9), midY - 26, '#3b82f6', 2.5);
          drawArrow(ctx, toX(-9), midY - 12, toX(s), midY - 12, '#10b981', 3);
        }
        drawDot(ctx, w, h, toX(s), midY, '#e11d48', `t=${t}s`, isDark, -10);
        const dist = t <= 3 ? Math.abs(s) : 9 + Math.abs(s - (-9));
        return lang === 'bm'
          ? `t = ${t}s ⇒ Sesaran s = ${U.roundStr(s, 2)} m, Halaju v = ${U.roundStr(v, 2)} m/s  |  Jumlah Jarak = ${U.roundStr(dist, 2)} m`
          : `t = ${t}s ⇒ Displacement s = ${U.roundStr(s, 2)} m, Velocity v = ${U.roundStr(v, 2)} m/s  |  Total Distance = ${U.roundStr(dist, 2)} m`;
      }
    }
  });
})(window.AddMathApp);
