/**
 * Weekly mileage for the current block. Static SVG, server-rendered.
 * Takes a plain number[] so a Strava fetch can replace the data file later
 * without touching this component.
 */
export function MileageChart({ weeks, caption }: { weeks: readonly number[]; caption?: string }) {
  if (weeks.length === 0) return null;

  const max = Math.max(...weeks);
  const total = weeks.reduce((a, b) => a + b, 0);
  const peak = weeks.indexOf(max);
  const lastIndex = weeks.length - 1;

  const W = 640;
  const H = 180;
  const PAD = { top: 14, bottom: 26, left: 0, right: 0 };
  const plotH = H - PAD.top - PAD.bottom;
  const slot = W / weeks.length;
  const barW = Math.min(slot * 0.62, 26);

  return (
    <figure className="border-rule bg-panel border">
      <div className="overflow-x-auto">
        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="block h-auto w-full min-w-[22rem]"
          role="img"
          aria-label={`Weekly mileage over the last ${weeks.length} weeks, peaking at ${max} miles. Total ${total} miles.`}
        >
          <line
            x1={0}
            y1={PAD.top + plotH}
            x2={W}
            y2={PAD.top + plotH}
            stroke="var(--rule)"
            strokeWidth={1}
          />
          {weeks.map((mi, i) => {
            const h = (mi / (max || 1)) * plotH;
            const x = i * slot + (slot - barW) / 2;
            const y = PAD.top + plotH - h;
            // The most recent week reads as current; the peak week reads as the
            // block's ceiling. Everything else stays quiet.
            const emphasised = i === lastIndex || i === peak;
            return (
              <g key={i}>
                <rect
                  x={x}
                  y={y}
                  width={barW}
                  height={Math.max(1, h)}
                  fill={emphasised ? "var(--accent)" : "var(--accent-wash)"}
                  stroke={emphasised ? "none" : "var(--accent)"}
                  strokeWidth={emphasised ? 0 : 1}
                />
                {emphasised && (
                  <text
                    x={x + barW / 2}
                    y={y - 5}
                    textAnchor="middle"
                    className="font-mono"
                    fontSize={10}
                    fill="var(--ink)"
                  >
                    {mi}
                  </text>
                )}
              </g>
            );
          })}
          <text
            x={0}
            y={H - 8}
            className="font-mono"
            fontSize={10}
            fill="var(--ink-3)"
            style={{ letterSpacing: "0.1em", textTransform: "uppercase" }}
          >
            {weeks.length} weeks ago
          </text>
          <text
            x={W}
            y={H - 8}
            textAnchor="end"
            className="font-mono"
            fontSize={10}
            fill="var(--ink-3)"
            style={{ letterSpacing: "0.1em", textTransform: "uppercase" }}
          >
            This week
          </text>
        </svg>
      </div>
      {caption && (
        <figcaption className="border-rule text-ink-3 border-t px-4 py-2.5 font-mono text-[0.64rem] tracking-[0.1em] uppercase">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
