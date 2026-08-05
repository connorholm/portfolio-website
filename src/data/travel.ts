/**
 * ⚠️  EVERY VALUE IN THIS FILE IS PLACEHOLDER DATA.
 *
 * Country codes are ISO 3166-1 numeric, which is what the world-atlas TopoJSON
 * keys on — the map fills a country by matching these ids. Replace the list
 * with the places you have actually been.
 */

/** ISO 3166-1 numeric ids of visited countries. PLACEHOLDER. */
export const VISITED_COUNTRY_IDS: readonly string[] = [
  "840", // United States
  "124", // Canada
  "484", // Mexico
  "352", // Iceland
  "372", // Ireland
  "826", // United Kingdom
  "250", // France
  "380", // Italy
  "724", // Spain
  "756", // Switzerland
  "276", // Germany
  "578", // Norway
  "392", // Japan
  "554", // New Zealand
  "152", // Chile
  "032", // Argentina
  "504", // Morocco
];

/** PLACEHOLDER — headline counters. */
export const TRAVEL_TOTALS = [
  { label: "Countries", value: "17" },
  { label: "Continents", value: "5" },
  { label: "US states", value: "34" },
  { label: "Countries run in", value: "11" },
] as const;

export type Trip = {
  slug: string;
  title: string;
  country: string;
  /** [longitude, latitude] — where the marker sits. */
  coords: readonly [number, number];
  start: string; // ISO
  end: string; // ISO
  summary: string;
  /** Set when there is a full write-up at /writing/<slug>. */
  report?: string;
  /** Did you run there? Ties the two threads together on the map. */
  ranThere?: boolean;
};

export const TRIPS: readonly Trip[] = [
  {
    slug: "placeholder-alps",
    title: "PLACEHOLDER — the Alps",
    country: "Switzerland",
    coords: [7.75, 46.02],
    start: "2026-06-14",
    end: "2026-06-28",
    summary:
      "PLACEHOLDER — two sentences on what this trip actually was. Where you stayed, what you did, the one thing you would tell someone about it.",
    ranThere: true,
  },
  {
    slug: "placeholder-japan",
    title: "PLACEHOLDER — Japan",
    country: "Japan",
    coords: [138.25, 36.2],
    start: "2025-11-02",
    end: "2025-11-19",
    summary: "PLACEHOLDER — two sentences.",
    ranThere: true,
  },
  {
    slug: "placeholder-patagonia",
    title: "PLACEHOLDER — Patagonia",
    country: "Chile",
    coords: [-72.99, -50.94],
    start: "2025-02-08",
    end: "2025-02-22",
    summary: "PLACEHOLDER — two sentences.",
    ranThere: true,
  },
  {
    slug: "placeholder-iceland",
    title: "PLACEHOLDER — Iceland",
    country: "Iceland",
    coords: [-19.02, 64.96],
    start: "2024-08-03",
    end: "2024-08-13",
    summary: "PLACEHOLDER — two sentences.",
  },
];

export const RECENT_TRIPS = [...TRIPS].sort((a, b) => b.start.localeCompare(a.start));

/** PLACEHOLDER — where you are going next. Dated, like everything else. */
export const NEXT_TRIP = {
  destination: "PLACEHOLDER — next destination",
  when: "PLACEHOLDER — month and year",
} as const;
