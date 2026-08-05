import { formatNumber } from "@/lib/format";

/**
 * The site's signature instrument. One drawing style, many datasets: the home
 * page uses it for the site's own structure, race reports use it for a real
 * course, and both read as the same object.
 *
 * Renders to static SVG on the server — no client JavaScript. The draw-in is a
 * CSS animation over a `pathLength="1"` path.
 */

export type ProfilePoint = readonly [number, number];

export type ProfileMarker = {
  /** X value in data units — must fall inside the series. */
  at: number;
  label: string;
  href?: string;
};

const VIEW_W = 1000;
const VIEW_H = 320;
const PAD = { left: 48, right: 30, top: 64, bottom: 46 };

/** Catmull-Rom through the points, converted to cubic beziers. */
function smoothPath(pts: readonly (readonly [number, number])[]): string {
  if (pts.length === 0) return "";
  const first = pts[0]!;
  let d = `M${first[0].toFixed(1)},${first[1].toFixed(1)}`;

  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] ?? pts[i]!;
    const p1 = pts[i]!;
    const p2 = pts[i + 1]!;
    const p3 = pts[i + 2] ?? p2;

    const c1x = p1[0] + (p2[0] - p0[0]) / 6;
    const c1y = p1[1] + (p2[1] - p0[1]) / 6;
    const c2x = p2[0] - (p3[0] - p1[0]) / 6;
    const c2y = p2[1] - (p3[1] - p1[1]) / 6;

    d += `C${c1x.toFixed(1)},${c1y.toFixed(1)} ${c2x.toFixed(1)},${c2y.toFixed(1)} ${p2[0].toFixed(1)},${p2[1].toFixed(1)}`;
  }
  return d;
}

/** Linear interpolation of the series at an arbitrary x. */
function valueAt(points: readonly ProfilePoint[], x: number): number {
  for (let i = 0; i < points.length - 1; i++) {
    const a = points[i]!;
    const b = points[i + 1]!;
    if (x >= a[0] && x <= b[0]) {
      const t = (x - a[0]) / (b[0] - a[0] || 1);
      return a[1] + t * (b[1] - a[1]);
    }
  }
  return points[points.length - 1]?.[1] ?? 0;
}

export function ElevationProfile({
  points,
  markers = [],
  startLabel = "Start",
  endLabel = "Finish",
  yUnit = "ft",
  xUnit = "mi",
  caption,
  animate = true,
  showAxis = true,
}: {
  points: readonly ProfilePoint[];
  markers?: readonly ProfileMarker[];
  startLabel?: string;
  endLabel?: string;
  yUnit?: string;
  xUnit?: string;
  caption?: string;
  animate?: boolean;
  showAxis?: boolean;
}) {
  if (points.length < 2) return null;

  const xs = points.map((p) => p[0]);
  const ys = points.map((p) => p[1]);
  const minX = Math.min(...xs);
  const maxX = Math.max(...xs);
  const minY = Math.min(...ys);
  const maxY = Math.max(...ys);

  // A little headroom so summit labels are never clipped by the frame.
  const padY = (maxY - minY) * 0.12 || 1;
  const lowY = minY - padY;
  const highY = maxY + padY;

  const plotW = VIEW_W - PAD.left - PAD.right;
  const plotH = VIEW_H - PAD.top - PAD.bottom;

  const sx = (x: number) => PAD.left + ((x - minX) / (maxX - minX || 1)) * plotW;
  const sy = (y: number) => PAD.top + plotH - ((y - lowY) / (highY - lowY || 1)) * plotH;

  const screen = points.map((p) => [sx(p[0]), sy(p[1])] as const);
  const d = smoothPath(screen);
  const baseline = PAD.top + plotH;
  const areaD = `${d}L${sx(maxX).toFixed(1)},${baseline}L${sx(minX).toFixed(1)},${baseline}Z`;

  const gridValues = [lowY, (lowY + highY) / 2, highY];
  const gain = points.reduce((total, p, i) => {
    if (i === 0) return 0;
    const prev = points[i - 1]!;
    return total + Math.max(0, p[1] - prev[1]);
  }, 0);

  return (
    <figure className="border-rule bg-panel border">
      <div className="overflow-x-auto">
        <svg
          viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
          className="block h-auto w-full min-w-[34rem]"
          role="img"
          aria-label={
            markers.length > 0
              ? `Elevation profile. Marked points: ${markers.map((m) => m.label).join(", ")}.`
              : `Elevation profile rising from ${formatNumber(Math.round(minY))} to ${formatNumber(Math.round(maxY))} ${yUnit} over ${formatNumber(Math.round(maxX - minX))} ${xUnit}.`
          }
        >
          {showAxis &&
            gridValues.map((v) => (
              <g key={v}>
                <line
                  x1={PAD.left}
                  y1={sy(v)}
                  x2={VIEW_W - PAD.right}
                  y2={sy(v)}
                  stroke="var(--rule)"
                  strokeWidth={1}
                />
                <text
                  x={PAD.left - 8}
                  y={sy(v) + 3.5}
                  textAnchor="end"
                  className="font-mono"
                  fontSize={10}
                  fill="var(--ink-3)"
                  style={{ letterSpacing: "0.06em" }}
                >
                  {formatNumber(Math.round(v))}
                </text>
              </g>
            ))}

          <path d={areaD} fill="var(--accent-wash)" />
          <path
            d={d}
            pathLength={1}
            fill="none"
            stroke="var(--accent)"
            strokeWidth={2.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            className={animate ? "route-draw" : undefined}
          />

          {markers.map((m) => {
            const x = sx(m.at);
            const y = sy(valueAt(points, m.at));
            const anchor =
              m.at > minX + (maxX - minX) * 0.88
                ? "end"
                : m.at < minX + (maxX - minX) * 0.12
                  ? "start"
                  : "middle";
            return (
              <g key={m.label}>
                <line x1={x} y1={y - 9} x2={x} y2={y - 24} stroke="var(--ink-3)" strokeWidth={1} />
                <circle
                  cx={x}
                  cy={y}
                  r={4.5}
                  fill="var(--ground)"
                  stroke="var(--accent)"
                  strokeWidth={2}
                />
                <text
                  x={x}
                  y={y - 32}
                  textAnchor={anchor}
                  className="font-mono"
                  fontSize={11}
                  fill="var(--ink)"
                  style={{ letterSpacing: "0.1em", textTransform: "uppercase" }}
                >
                  {m.label}
                </text>
              </g>
            );
          })}

          {showAxis && (
            <>
              <line
                x1={PAD.left}
                y1={baseline}
                x2={VIEW_W - PAD.right}
                y2={baseline}
                stroke="var(--rule)"
                strokeWidth={1}
              />
              <text
                x={PAD.left}
                y={baseline + 24}
                className="font-mono"
                fontSize={10}
                fill="var(--ink-3)"
                style={{ letterSpacing: "0.1em", textTransform: "uppercase" }}
              >
                {startLabel}
              </text>
              <text
                x={VIEW_W - PAD.right}
                y={baseline + 24}
                textAnchor="end"
                className="font-mono"
                fontSize={10}
                fill="var(--ink-3)"
                style={{ letterSpacing: "0.1em", textTransform: "uppercase" }}
              >
                {endLabel}
              </text>
            </>
          )}
        </svg>
      </div>

      {caption && (
        <figcaption className="border-rule text-ink-3 border-t px-4 py-2.5 font-mono text-[0.64rem] tracking-[0.1em] uppercase">
          {caption}
          {gain > 0 && (
            <span className="tabular">
              {" "}
              · {formatNumber(Math.round(gain))} {yUnit} gain
            </span>
          )}
        </figcaption>
      )}
    </figure>
  );
}
