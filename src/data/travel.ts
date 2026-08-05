import type { Route } from "next";
import type { Photo } from "@/lib/photos";

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
  { label: "Trips logged", value: "5" },
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
  /** Rendered only where the file exists — see src/lib/photos.ts. */
  photos?: readonly Photo[];
  /** A full write-up page for this trip, when one exists. */
  detailHref?: Route;
};

export const TRIPS: readonly Trip[] = [
  {
    slug: "iceland",
    title: "Iceland",
    country: "Iceland",
    coords: [-19.02, 64.96],
    when: "August 2026",
    sort: "2026-08",
    summary:
      "Just back from this one: nine days around the Ring Road, 41 stops from Keflavík to the last light in Reykjavík.",
    photos: [
      {
        src: "/images/iceland-skogafoss.jpg",
        alt: "Standing with arms outstretched in front of Skógafoss, a rainbow arcing across the spray",
        caption: "Skógafoss",
      },
    ],
    detailHref: "/travel/iceland",
  },
  {
    slug: "japan",
    title: "Japan: Tokyo, Kyoto, Osaka",
    country: "Japan",
    coords: [139.69, 35.69],
    when: "May 2026",
    sort: "2026-05",
    summary: "Three cities, moving south and west: Tokyo, then Kyoto, then Osaka.",
    photos: [
      {
        src: "/images/japan-meiji-shrine.jpg",
        alt: "Standing on the approach to the Meiji Shrine in Tokyo, crowds moving past the gate behind",
        caption: "Meiji Shrine, Tokyo",
      },
      {
        src: "/images/japan-neon-tunnel.jpg",
        alt: "Riding an escalator through a tunnel lit in purple and yellow neon",
        caption: "Somewhere underground",
      },
    ],
  },
  {
    slug: "bozeman",
    title: "Bozeman, Montana",
    country: "United States",
    coords: [-111.04, 45.68],
    when: "Summer",
    sort: "2025-07",
    summary: "Alpine lakes and a lot of vertical, in the mountains south of town.",
    photos: [
      {
        src: "/images/bozeman-alpine-lake.jpg",
        alt: "Standing in front of an alpine lake below a steep rocky ridge in the mountains near Bozeman",
        caption: "Above Bozeman",
      },
    ],
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
