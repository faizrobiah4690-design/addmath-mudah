/**
 * AddMath Mudah — Makmal Visual Interaktif HTML5 Canvas (Fasa 1: Tingkatan 4 Bab 1–5)
 * Mesra Mudah Alih (Retina DPI, Slider Masa Nyata & Dwibahasa BM/EN)
 */
window.AddMathApp = window.AddMathApp || {};

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
    return { ctx, w, h };
  }

  function drawCartesianGrid(ctx, w, h, rangeX, rangeY, isDark) {
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = isDark ? '#0f172a' : '#f8fafc';
    ctx.fillRect(0, 0, w, h);

    const toX = (x) => ((x - rangeX[0]) / (rangeX[1] - rangeX[0])) * w;
    const toY = (y) => h - ((y - rangeY[0]) / (rangeY[1] - rangeY[0])) * h;

    ctx.strokeStyle = isDark ? 'rgba(148,163,184,0.14)' : 'rgba(100,116,139,0.15)';
    ctx.lineWidth = 1;
    for (let x = Math.ceil(rangeX[0]); x <= Math.floor(rangeX[1]); x++) {
      const px = toX(x);
      ctx.beginPath(); ctx.moveTo(px, 0); ctx.lineTo(px, h); ctx.stroke();
    }
    for (let y = Math.ceil(rangeY[0]); y <= Math.floor(rangeY[1]); y++) {
      const py = toY(y);
      ctx.beginPath(); ctx.moveTo(0, py); ctx.lineTo(w, py); ctx.stroke();
    }

    // Axes
    ctx.strokeStyle = isDark ? '#94a3b8' : '#475569';
    ctx.lineWidth = 1.8;
    const ox = toX(0), oy = toY(0);
    ctx.beginPath(); ctx.moveTo(0, oy); ctx.lineTo(w, oy); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(ox, 0); ctx.lineTo(ox, h); ctx.stroke();

    ctx.fillStyle = isDark ? '#94a3b8' : '#64748b';
    ctx.font = '11px sans-serif';
    ctx.fillText('x', w - 14, oy - 6);
    ctx.fillText('y', ox + 6, 14);
    return { toX, toY };
  }

  function plotCurve(ctx, toX, toY, rangeX, fn, color, dashed = false, lineWidth = 2.6) {
    ctx.save();
    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;
    if (dashed) ctx.setLineDash([6, 5]);
    ctx.beginPath();
    let started = false;
    const steps = 260;
    for (let i = 0; i <= steps; i++) {
      const x = rangeX[0] + (i / steps) * (rangeX[1] - rangeX[0]);
      const y = fn(x);
      if (!Number.isFinite(y) || Math.abs(y) > 80) {
        started = false;
        continue;
      }
      const px = toX(x), py = toY(y);
      if (!started) { ctx.moveTo(px, py); started = true; }
      else ctx.lineTo(px, py);
    }
    ctx.stroke();
    ctx.restore();
  }

  App.visualLabs = {
    'f4-c1': {
      title: { bm: 'Makmal Pantulan Modulus |f(x)| & Songsang f⁻¹(x)', en: 'Modulus |f(x)| & Inverse Mirror Lab' },
      desc: {
        bm: 'Gerakkan slider m dan c bagi f(x) = mx + c. Perhatikan pantulan bentuk-V |f(x)| (hijau) dan pantulan songsang f⁻¹(x) (merah jambu) pada cermin y = x!',
        en: 'Slide m and c for f(x) = mx + c. Watch V-reflection |f(x)| (green) and inverse f⁻¹(x) (pink) mirroring across y = x!'
      },
      controls: [
        { id: 'm', label: { bm: 'Kecerunan m', en: 'Gradient m' }, min: -3, max: 3, step: 0.5, default: 2 },
        { id: 'c', label: { bm: 'Pintasan-y c', en: 'y-intercept c' }, min: -5, max: 5, step: 1, default: -2 }
      ],
      render: function (canvas, vals, lang, isDark) {
        const { ctx, w, h } = setupCanvas(canvas);
        const { toX, toY } = drawCartesianGrid(ctx, w, h, [-8, 8], [-6, 6], isDark);
        const m = Number.isFinite(Number(vals.m)) ? Number(vals.m) : 2;
        const c = Number.isFinite(Number(vals.c)) ? Number(vals.c) : -2;

        // Symmetry mirror line y = x
        plotCurve(ctx, toX, toY, [-8, 8], (x) => x, isDark ? '#64748b' : '#94a3b8', true, 1.4);
        // Original f(x)
        plotCurve(ctx, toX, toY, [-8, 8], (x) => m * x + c, '#6366f1', true, 2);
        // Modulus |f(x)|
        plotCurve(ctx, toX, toY, [-8, 8], (x) => Math.abs(m * x + c), '#10b981', false, 3);

        // Inverse f^-1(x) only exists if m != 0 (One-to-One!)
        if (Math.abs(m) > 0.01) {
          plotCurve(ctx, toX, toY, [-8, 8], (x) => (x - c) / m, '#ec4899', false, 2.4);
          const vx = -c / m;
          if (vx >= -8 && vx <= 8) {
            ctx.fillStyle = '#10b981';
            ctx.beginPath(); ctx.arc(toX(vx), toY(0), 5.5, 0, Math.PI * 2); ctx.fill();
          }
          return lang === 'bm'
            ? `Biru putus: f(x) = ${m}x ${U.signedNum(c)}  |  Hijau: |f(x)| (Bucu V pada x = ${U.roundStr(-c / m, 2)})  |  Merah jambu: f⁻¹(x)`
            : `Dashed blue: f(x) = ${m}x ${U.signedNum(c)}  |  Green: |f(x)| (V-vertex at x = ${U.roundStr(-c / m, 2)})  |  Pink: f⁻¹(x)`;
        }

        return lang === 'bm'
          ? `m = 0: f(x) = ${c} ialah garis mendatar (Banyak-ke-Satu) → TIADA fungsi songsang f⁻¹(x)!`
          : `m = 0: f(x) = ${c} is horizontal (Many-to-One) → Inverse f⁻¹(x) does NOT exist!`;
      }
    },

    'f4-c2': {
      title: { bm: 'Makmal Bentuk Kuadratik & Pembezalayan (Δ = b² − 4ac)', en: 'Quadratic Parabola & Discriminant Δ Lab' },
      desc: {
        bm: 'Gerakkan slider a, b dan c pada f(x) = ax² + bx + c untuk melihat bagaimana Δ = b² − 4ac menentukan bilangan punca serta kedudukan titik pusingan (verteks).',
        en: 'Slide a, b, and c in f(x) = ax² + bx + c to see how Δ = b² − 4ac controls real roots and turning point (vertex).'
      },
      controls: [
        { id: 'a', label: { bm: 'Pekali bentuk a', en: 'Shape coeff a' }, min: -2, max: 2, step: 0.5, default: 1 },
        { id: 'b', label: { bm: 'Pekali b', en: 'Coeff b' }, min: -6, max: 6, step: 1, default: -2 },
        { id: 'c', label: { bm: 'Pemalar c', en: 'Constant c' }, min: -5, max: 5, step: 1, default: -3 }
      ],
      render: function (canvas, vals, lang, isDark) {
        const { ctx, w, h } = setupCanvas(canvas);
        const { toX, toY } = drawCartesianGrid(ctx, w, h, [-7, 7], [-7, 7], isDark);
        const a = Number.isFinite(Number(vals.a)) ? Number(vals.a) : 1;
        const b = Number.isFinite(Number(vals.b)) ? Number(vals.b) : -2;
        const c = Number.isFinite(Number(vals.c)) ? Number(vals.c) : -3;

        if (Math.abs(a) < 0.05) {
          plotCurve(ctx, toX, toY, [-7, 7], (x) => b * x + c, '#8b5cf6', false, 3);
          return lang === 'bm'
            ? `Perhatian: Apabila a = 0, graf menjadi garis lurus y = ${b}x ${U.signedNum(c)} (bukan lagi kuadratik — syarat wajib kuadratik ialah a ≠ 0!).`
            : `Note: When a = 0, the graph becomes a straight line y = ${b}x ${U.signedNum(c)} (quadratic functions require a ≠ 0!).`;
        }

        const disc = b * b - 4 * a * c;
        const vx = -b / (2 * a);
        const vy = a * vx * vx + b * vx + c;

        // Axis of symmetry
        ctx.save();
        ctx.strokeStyle = '#f59e0b';
        ctx.setLineDash([5, 4]);
        ctx.beginPath(); ctx.moveTo(toX(vx), 0); ctx.lineTo(toX(vx), h); ctx.stroke();
        ctx.restore();

        plotCurve(ctx, toX, toY, [-7, 7], (x) => a * x * x + b * x + c, '#8b5cf6', false, 3);

        // Vertex dot
        ctx.fillStyle = '#f59e0b';
        ctx.beginPath(); ctx.arc(toX(vx), toY(vy), 6, 0, Math.PI * 2); ctx.fill();

        // Roots
        if (disc >= 0) {
          const r1 = (-b - Math.sqrt(disc)) / (2 * a);
          const r2 = (-b + Math.sqrt(disc)) / (2 * a);
          ctx.fillStyle = '#10b981';
          ctx.beginPath(); ctx.arc(toX(r1), toY(0), 5.5, 0, Math.PI * 2); ctx.fill();
          ctx.beginPath(); ctx.arc(toX(r2), toY(0), 5.5, 0, Math.PI * 2); ctx.fill();
        }

        const status = disc > 0
          ? (lang === 'bm' ? '2 Punca Berbeza' : '2 Distinct Roots')
          : (disc === 0 ? (lang === 'bm' ? 'Menyentuh 1 Titik (2 Punca Sama)' : 'Touches 1 Point (Equal Roots)') : (lang === 'bm' ? 'Tiada Punca Nyata' : 'No Real Roots'));
        const vLbl = lang === 'bm'
          ? (a > 0 ? 'Titik Minimum' : 'Titik Maksimum')
          : (a > 0 ? 'Min Vertex' : 'Max Vertex');
        return `Δ = ${U.roundStr(disc, 2)} (${status})  |  ${vLbl}: (${U.roundStr(vx, 2)}, ${U.roundStr(vy, 2)})`;
      }
    },

    'f4-c3': {
      title: { bm: 'Makmal Persilangan Garis Lurus & Bulatan', en: 'Linear Line & Non-Linear Circle Intersection Lab' },
      desc: {
        bm: 'Gerakkan slider m, c dan jejari r bagi garis y = mx + c dan bulatan x² + y² = r² untuk melihat 2 titik persilangan, garis tangen (1 titik), atau tiada persilangan!',
        en: 'Slide m, c, and radius r for line y = mx + c across circle x² + y² = r² to see 2 intersections, tangency, or no real solution!'
      },
      controls: [
        { id: 'm', label: { bm: 'Kecerunan garis m', en: 'Line gradient m' }, min: -2, max: 2, step: 0.5, default: 1 },
        { id: 'c', label: { bm: 'Pintasan-y garis c', en: 'Line intercept c' }, min: -6, max: 6, step: 0.5, default: 1 },
        { id: 'r', label: { bm: 'Jejari bulatan r', en: 'Circle radius r' }, min: 2, max: 5, step: 0.5, default: 4 }
      ],
      render: function (canvas, vals, lang, isDark) {
        const { ctx, w, h } = setupCanvas(canvas);
        const { toX, toY } = drawCartesianGrid(ctx, w, h, [-7, 7], [-6, 6], isDark);
        const m = Number.isFinite(Number(vals.m)) ? Number(vals.m) : 1;
        const c = Number.isFinite(Number(vals.c)) ? Number(vals.c) : 1;
        const r = Number(vals.r) || 4;

        // Draw circle parametrically
        ctx.strokeStyle = '#ec4899';
        ctx.lineWidth = 2.8;
        ctx.beginPath();
        for (let i = 0; i <= 120; i++) {
          const ang = (i / 120) * Math.PI * 2;
          const px = toX(r * Math.cos(ang));
          const py = toY(r * Math.sin(ang));
          if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
        }
        ctx.stroke();

        // Draw line
        plotCurve(ctx, toX, toY, [-7, 7], (x) => m * x + c, '#3b82f6', false, 2.6);

        // Solve (1 + m^2)x^2 + 2mc x + (c^2 - r^2) = 0
        const A = 1 + m * m;
        const B = 2 * m * c;
        const C = c * c - r * r;
        const disc = B * B - 4 * A * C;
        if (disc > 1e-4) {
          const x1 = (-B - Math.sqrt(disc)) / (2 * A);
          const x2 = (-B + Math.sqrt(disc)) / (2 * A);
          [x1, x2].forEach((xv) => {
            ctx.fillStyle = '#10b981';
            ctx.beginPath(); ctx.arc(toX(xv), toY(m * xv + c), 6, 0, Math.PI * 2); ctx.fill();
          });
          return lang === 'bm'
            ? `2 Titik Persilangan: (${U.roundStr(x1, 2)}, ${U.roundStr(m * x1 + c, 2)}) & (${U.roundStr(x2, 2)}, ${U.roundStr(m * x2 + c, 2)})`
            : `2 Intersection Points: (${U.roundStr(x1, 2)}, ${U.roundStr(m * x1 + c, 2)}) & (${U.roundStr(x2, 2)}, ${U.roundStr(m * x2 + c, 2)})`;
        }
        if (Math.abs(disc) <= 1e-4) {
          const x0 = -B / (2 * A);
          ctx.fillStyle = '#f59e0b';
          ctx.beginPath(); ctx.arc(toX(x0), toY(m * x0 + c), 6.5, 0, Math.PI * 2); ctx.fill();
          return lang === 'bm'
            ? `Garis Tangen! Menyentuh tepat pada 1 titik (${U.roundStr(x0, 2)}, ${U.roundStr(m * x0 + c, 2)})`
            : `Tangent! Touches at 1 point (${U.roundStr(x0, 2)}, ${U.roundStr(m * x0 + c, 2)})`;
        }
        return lang === 'bm'
          ? 'Δ < 0 : Garis tidak menyentuh bulatan (Tiada penyelesaian nyata)'
          : 'Δ < 0 : Line misses circle (No real solutions)';
      }
    },

    'f4-c4': {
      title: { bm: 'Makmal Lengkung Indeks y = aˣ & Logaritma y = logₐ x', en: 'Exponential y = aˣ vs Logarithm y = logₐ x Lab' },
      desc: {
        bm: 'Lihat bagaimana lengkung indeks y = aˣ (oren) dan lengkung logaritma y = logₐ x (biru) adalah pantulan cermin antara satu sama lain merentasi garis y = x!',
        en: 'Observe how exponential y = aˣ (orange) and logarithmic y = logₐ x (blue) mirror across y = x as exact inverses!'
      },
      controls: [
        { id: 'a', label: { bm: 'Asas a (a > 1)', en: 'Base a (a > 1)' }, min: 1.5, max: 4, step: 0.5, default: 2 }
      ],
      render: function (canvas, vals, lang, isDark) {
        const { ctx, w, h } = setupCanvas(canvas);
        const { toX, toY } = drawCartesianGrid(ctx, w, h, [-4, 8], [-4, 8], isDark);
        const a = Math.max(1.2, Number(vals.a) || 2);

        plotCurve(ctx, toX, toY, [-4, 8], (x) => x, isDark ? '#64748b' : '#94a3b8', true, 1.4);
        plotCurve(ctx, toX, toY, [-4, 8], (x) => Math.pow(a, x), '#f59e0b', false, 3);

        // Plot log_a(x) parametrically via x = a^y so it extends smoothly all the way down to y = -4
        ctx.save();
        ctx.strokeStyle = '#0ea5e9';
        ctx.lineWidth = 3;
        ctx.beginPath();
        let started = false;
        for (let i = 0; i <= 240; i++) {
          const y = -4 + (i / 240) * 12;
          const x = Math.pow(a, y);
          if (x > 8.5) break;
          if (!started) { ctx.moveTo(toX(x), toY(y)); started = true; }
          else ctx.lineTo(toX(x), toY(y));
        }
        ctx.stroke();
        ctx.restore();

        // Key intercepts (0,1) and (1,0)
        ctx.fillStyle = '#f59e0b';
        ctx.beginPath(); ctx.arc(toX(0), toY(1), 5.5, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = '#0ea5e9';
        ctx.beginPath(); ctx.arc(toX(1), toY(0), 5.5, 0, Math.PI * 2); ctx.fill();

        return lang === 'bm'
          ? `Oren: y = ${a}ˣ memotong (0, 1)  |  Biru: y = log_${a}(x) memotong (1, 0), menghampiri paksi-y (x > 0)`
          : `Orange: y = ${a}ˣ passes (0, 1)  |  Blue: y = log_${a}(x) passes (1, 0), asymptote at x = 0`;
      }
    },

    'f4-c5': {
      title: { bm: 'Makmal Hasil Tambah Ketakterhinggaan S∞ (Janjang Geometri)', en: 'GP Sum to Infinity S∞ Visualizer' },
      desc: {
        bm: 'Gerakkan slider a dan nisbah sepunya r untuk melihat bagaimana jumlah terkumpul S₁, S₂... semakin menghampiri garisan had S∞ = a/(1 − r) apabila |r| < 1!',
        en: 'Slide first term a and common ratio r to watch cumulative sum Sₙ approach the ceiling S∞ = a/(1 − r) whenever |r| < 1!'
      },
      controls: [
        { id: 'a', label: { bm: 'Sebutan pertama a', en: 'First term a' }, min: 4, max: 16, step: 2, default: 10 },
        { id: 'r', label: { bm: 'Nisbah sepunya r', en: 'Common ratio r' }, min: 0.2, max: 0.85, step: 0.05, default: 0.5 }
      ],
      render: function (canvas, vals, lang, isDark) {
        const { ctx, w, h } = setupCanvas(canvas);
        ctx.fillStyle = isDark ? '#0f172a' : '#f8fafc';
        ctx.fillRect(0, 0, w, h);

        const a = Number(vals.a) || 10;
        const r = Number(vals.r) || 0.5;
        const sInf = a / (1 - r);
        const padL = 16, padR = 16, padT = 30, padB = 30;
        const plotW = w - padL - padR;
        const plotH = h - padT - padB;
        const maxY = sInf * 1.15;
        const toY = (v) => padT + plotH - (v / maxY) * plotH;

        // S_infinity limit line
        const yInf = toY(sInf);
        ctx.save();
        ctx.strokeStyle = '#ef4444';
        ctx.setLineDash([6, 4]);
        ctx.lineWidth = 2;
        ctx.beginPath(); ctx.moveTo(padL, yInf); ctx.lineTo(w - padR, yInf); ctx.stroke();
        ctx.fillStyle = '#ef4444';
        ctx.font = 'bold 12px sans-serif';
        ctx.fillText(`S∞ = ${U.roundStr(sInf, 2)}`, padL + 4, yInf - 7);
        ctx.restore();

        // Plot bars for S_1 .. S_10 cleanly centered for mobile & desktop
        const N = 10;
        const barGap = plotW / N;
        let cum = 0;
        ctx.save();
        ctx.textAlign = 'center';
        ctx.font = '10px sans-serif';
        for (let i = 1; i <= N; i++) {
          const term = a * Math.pow(r, i - 1);
          cum += term;
          const bx = padL + (i - 1) * barGap + barGap * 0.14;
          const bw = barGap * 0.72;
          const by = toY(cum);
          const bh = padT + plotH - by;
          ctx.fillStyle = 'rgba(16, 185, 129, 0.8)';
          ctx.fillRect(bx, by, bw, bh);
          ctx.fillStyle = isDark ? '#cbd5e1' : '#334155';
          ctx.fillText('S' + i, bx + bw / 2, h - 10);
        }
        ctx.restore();

        return lang === 'bm'
          ? `a = ${a}, r = ${r} (|r| < 1)  |  S₅ = ${U.roundStr((a * (1 - Math.pow(r, 5))) / (1 - r), 2)}  →  Had S∞ = ${U.roundStr(sInf, 2)}`
          : `a = ${a}, r = ${r} (|r| < 1)  |  S₅ = ${U.roundStr((a * (1 - Math.pow(r, 5))) / (1 - r), 2)}  →  Limit S∞ = ${U.roundStr(sInf, 2)}`;
      }
    }
  };
})(window.AddMathApp);
