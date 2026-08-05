/**
 * Stand-in for a screenshot. Drawn from the same vocabulary as the rest of the
 * site — hairlines and nodes over a panel — so a project without imagery still
 * sits in the grid rather than leaving a hole.
 */

const NODES: readonly { x: number; y: number; r: number }[] = [
  { x: 100, y: 62, r: 7 },
  { x: 168, y: 40, r: 5 },
  { x: 214, y: 96, r: 6 },
  { x: 150, y: 132, r: 5 },
  { x: 74, y: 128, r: 6 },
  { x: 40, y: 74, r: 5 },
  { x: 262, y: 52, r: 4 },
  { x: 268, y: 140, r: 4 },
];

/** Index pairs into NODES. The hub (0) carries most of them, as a hub should. */
const EDGES: readonly (readonly [number, number])[] = [
  [0, 1],
  [0, 2],
  [0, 3],
  [0, 4],
  [0, 5],
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [1, 6],
  [2, 7],
];

export function ProjectGlyph({ kind }: { kind: "network" }) {
  if (kind !== "network") return null;

  return (
    <svg
      viewBox="0 0 300 180"
      className="h-full w-full"
      role="img"
      aria-label="A network of connected nodes"
      preserveAspectRatio="xMidYMid meet"
    >
      <g stroke="var(--accent)" strokeWidth={1} opacity={0.5}>
        {EDGES.map(([a, b]) => {
          const from = NODES[a];
          const to = NODES[b];
          if (!from || !to) return null;
          return <line key={`${a}-${b}`} x1={from.x} y1={from.y} x2={to.x} y2={to.y} />;
        })}
      </g>
      <g>
        {NODES.map((n, i) => (
          <circle
            key={i}
            cx={n.x}
            cy={n.y}
            r={n.r}
            fill={i === 0 ? "var(--accent)" : "var(--panel)"}
            stroke="var(--accent)"
            strokeWidth={1.5}
          />
        ))}
      </g>
    </svg>
  );
}
