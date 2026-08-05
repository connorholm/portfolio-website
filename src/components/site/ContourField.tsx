"use client";

import { useEffect, useRef } from "react";

/**
 * The site's ambient ground: a contour map generated with marching squares
 * over a smooth scalar field. Fixed to the viewport, so it costs one
 * viewport-sized canvas no matter how long the page is.
 *
 * The field is seeded deterministically, so the same lines appear on every
 * load and across a resize — it reads as paper texture rather than noise.
 */

type Bump = { x: number; y: number; r: number; a: number };

function makeBumps(seed: number, count: number): Bump[] {
  let s = seed;
  const rnd = () => {
    s = (s * 1103515245 + 12345) % 2147483648;
    return s / 2147483648;
  };

  return Array.from({ length: count }, () => ({
    x: rnd(),
    y: rnd(),
    r: 0.14 + rnd() * 0.32,
    a: (rnd() < 0.45 ? -1 : 1) * (0.5 + rnd() * 0.9),
  }));
}

const BUMPS = makeBumps(20260804, 9);

function fieldAt(u: number, v: number, aspect: number): number {
  let sum = 0;
  for (const b of BUMPS) {
    const dx = (u - b.x) * aspect;
    const dy = v - b.y;
    sum += b.a * Math.exp(-(dx * dx + dy * dy) / (2 * b.r * b.r));
  }
  return sum;
}

export function ContourField() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let frame = 0;

    const draw = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = window.innerWidth;
      const h = window.innerHeight;

      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);

      const stroke =
        getComputedStyle(document.documentElement).getPropertyValue("--rule").trim() || "#c7c9be";
      ctx.strokeStyle = stroke;
      ctx.globalAlpha = 0.55;
      ctx.lineWidth = 1;

      const aspect = w / h;
      const cols = Math.max(24, Math.round(w / 9));
      const rows = Math.max(24, Math.round(h / 9));
      const cw = w / cols;
      const ch = h / rows;

      const vals = new Float32Array((cols + 1) * (rows + 1));
      for (let j = 0; j <= rows; j++) {
        for (let i = 0; i <= cols; i++) {
          vals[j * (cols + 1) + i] = fieldAt(i / cols, j / rows, aspect);
        }
      }

      const at = (x: number, y: number) => vals[y * (cols + 1) + x] ?? 0;
      const lerp = (t: number, a: number, b: number) => (t - a) / (b - a || 1e-6);

      ctx.beginPath();
      for (let level = -1.6; level <= 1.6; level += 0.17) {
        for (let y = 0; y < rows; y++) {
          for (let x = 0; x < cols; x++) {
            const tl = at(x, y);
            const tr = at(x + 1, y);
            const br = at(x + 1, y + 1);
            const bl = at(x, y + 1);

            const code =
              (tl > level ? 8 : 0) |
              (tr > level ? 4 : 0) |
              (br > level ? 2 : 0) |
              (bl > level ? 1 : 0);
            if (code === 0 || code === 15) continue;

            const x0 = x * cw;
            const y0 = y * ch;
            const top: [number, number] = [x0 + cw * lerp(level, tl, tr), y0];
            const right: [number, number] = [x0 + cw, y0 + ch * lerp(level, tr, br)];
            const bottom: [number, number] = [x0 + cw * lerp(level, bl, br), y0 + ch];
            const left: [number, number] = [x0, y0 + ch * lerp(level, tl, bl)];

            let segs: [number, number][];
            switch (code) {
              case 1:
              case 14:
                segs = [left, bottom];
                break;
              case 2:
              case 13:
                segs = [bottom, right];
                break;
              case 3:
              case 12:
                segs = [left, right];
                break;
              case 4:
              case 11:
                segs = [top, right];
                break;
              case 5:
                segs = [left, top, bottom, right];
                break;
              case 6:
              case 9:
                segs = [top, bottom];
                break;
              case 7:
              case 8:
                segs = [left, top];
                break;
              default:
                segs = [left, bottom, top, right];
                break;
            }

            for (let i = 0; i < segs.length; i += 2) {
              const a = segs[i];
              const b = segs[i + 1];
              if (!a || !b) continue;
              ctx.moveTo(a[0], a[1]);
              ctx.lineTo(b[0], b[1]);
            }
          }
        }
      }
      ctx.stroke();
      ctx.globalAlpha = 1;
    };

    const schedule = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(draw);
    };

    schedule();

    let resizeTimer: ReturnType<typeof setTimeout>;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(schedule, 180);
    };
    window.addEventListener("resize", onResize);

    // Redraw when the palette changes, from either the toggle or the OS.
    const observer = new MutationObserver(schedule);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    media.addEventListener("change", schedule);

    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(resizeTimer);
      window.removeEventListener("resize", onResize);
      observer.disconnect();
      media.removeEventListener("change", schedule);
    };
  }, []);

  return <canvas ref={ref} aria-hidden="true" className="fixed inset-0 z-0 h-full w-full" />;
}
