/**
 * Where Connor has been.
 *
 * Country ids are ISO 3166-1 numeric, which is what the world-atlas TopoJSON
 * keys on — the map fills a country by matching these ids.
 *
 * Trips carry a `when` label rather than start/end dates, because for several
 * of them only the month or the season is known. `sort` exists purely to order
 * the list and is never displayed.
 */

export const VISITED_COUNTRY_IDS: readonly string[] = [
  "840", // United States
  "124", // Canada — Whistler
  "484", // Mexico — cruise
  "340", // Honduras — cruise
  "392", // Japan
  "352", // Iceland
];

export const TRAVEL_TOTALS = [
  { label: "Countries", value: "6" },
  { label: "Continents", value: "3" },
  { label: "Trips logged", value: "4" },
] as const;

export type Trip = {
  slug: string;
  title: string;
  country: string;
  /** [longitude, latitude] — where the marker sits. */
  coords: readonly [number, number];
  /** Human label: a month, a season, or whatever is actually known. */
  when: string;
  /** Sort key only, never rendered. Empty sorts last. */
  sort: string;
  summary: string;
  /** Did you run there? With the streak running, mostly yes. */
  ranThere?: boolean;
};

export const TRIPS: readonly Trip[] = [
  {
    slug: "iceland",
    title: "Iceland",
    country: "Iceland",
    coords: [-19.02, 64.96],
    when: "August 2026",
    sort: "2026-08",
    summary: "Just back from this one.",
    ranThere: true,
  },
  {
    slug: "japan",
    title: "Japan — Tokyo, Kyoto, Osaka",
    country: "Japan",
    coords: [139.69, 35.69],
    when: "May 2026",
    sort: "2026-05",
    summary: "Three cities, moving south and west: Tokyo, then Kyoto, then Osaka.",
    ranThere: true,
  },
  {
    slug: "whistler",
    title: "Whistler",
    country: "Canada",
    coords: [-122.95, 50.12],
    when: "Skiing",
    sort: "",
    summary: "Downhill rather than nordic, for once.",
  },
  {
    slug: "caribbean-cruise",
    title: "Mexico & Honduras",
    country: "Cruise",
    coords: [-86.53, 16.32],
    when: "Cruise",
    sort: "",
    summary: "Two countries in one trip, most of it from the water.",
  },
];

export const RECENT_TRIPS = [...TRIPS].sort((a, b) => b.sort.localeCompare(a.sort));
