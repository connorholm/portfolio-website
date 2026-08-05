import { geoNaturalEarth1, geoPath } from "d3-geo";
import type { Feature, FeatureCollection, Geometry } from "geojson";
import { feature } from "topojson-client";
import type { Topology } from "topojson-specification";
import world from "world-atlas/countries-110m.json";

/**
 * Vector world map rendered on the server — no tile provider, no client
 * JavaScript, and the palette comes from the same tokens as everything else,
 * so it changes with the theme for free.
 *
 * Countries are matched by ISO 3166-1 numeric id, which is how the
 * world-atlas TopoJSON keys them.
 */

export type MapMarker = {
  id: string;
  label: string;
  coords: readonly [number, number];
  href?: string;
};

const W = 960;
const H = 480;

const topology = world as unknown as Topology;
const allCountries = feature(topology, topology.objects.countries!) as unknown as FeatureCollection<
  Geometry,
  { name?: string }
>;

/** Antarctica (ISO 010) is a distorted smear in this projection and nobody has been. */
const countries: FeatureCollection<Geometry, { name?: string }> = {
  ...allCountries,
  features: allCountries.features.filter((f) => String(f.id) !== "010"),
};

export function WorldMap({
  visitedIds,
  markers = [],
}: {
  visitedIds: readonly string[];
  markers?: readonly MapMarker[];
}) {
  const projection = geoNaturalEarth1().fitSize([W, H], countries);
  const path = geoPath(projection);
  const visited = new Set(visitedIds);

  return (
    <div className="border-rule bg-panel overflow-x-auto border">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="block h-auto w-full min-w-[30rem]"
        role="img"
        aria-label={`World map with ${visitedIds.length} countries marked as visited.`}
      >
        <g>
          {countries.features.map((f: Feature<Geometry, { name?: string }>, i) => {
            const id = String(f.id ?? "");
            const d = path(f);
            if (!d) return null;
            const isVisited = visited.has(id);
            return (
              <path
                key={id || i}
                d={d}
                fill={isVisited ? "var(--accent-wash)" : "var(--panel-2)"}
                stroke={isVisited ? "var(--accent)" : "var(--rule)"}
                strokeWidth={isVisited ? 0.8 : 0.5}
              >
                {f.properties?.name && <title>{f.properties.name}</title>}
              </path>
            );
          })}
        </g>

        <g>
          {markers.map((m) => {
            const pt = projection([m.coords[0], m.coords[1]]);
            if (!pt) return null;
            const [x, y] = pt;
            const dot = (
              <>
                <circle cx={x} cy={y} r={9} fill="var(--accent)" opacity={0.16} />
                <circle
                  cx={x}
                  cy={y}
                  r={4}
                  fill="var(--accent)"
                  stroke="var(--ground)"
                  strokeWidth={1.5}
                />
                <title>{m.label}</title>
              </>
            );

            return m.href ? (
              <a key={m.id} href={m.href} aria-label={m.label}>
                {dot}
              </a>
            ) : (
              <g key={m.id}>{dot}</g>
            );
          })}
        </g>
      </svg>
    </div>
  );
}
