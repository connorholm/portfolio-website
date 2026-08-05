/**
 * What Connor does outside work.
 *
 * Adding an activity: append to ACTIVITIES. It gets a row in the season band,
 * a section on /activities, and its own page at /activities/<slug> for free.
 * Only ultrarunning renders the race log and PR board — those modules key off
 * `slug === "ultrarunning"` in the detail page.
 *
 * Everything here is real. Where a number was not to hand it is simply left
 * out rather than estimated, which is why some activities carry no stats.
 */

export type ActivitySlug = "ultrarunning" | "nordic-skiing" | "hiking" | "pickleball" | "lifting";

export type ActivityStat = {
  label: string;
  value: string;
  note?: string;
};

export type GearItem = {
  category: string;
  item: string;
  note: string;
};

export type Highlight = {
  /** ISO date used for ordering, or null when only the story is known. */
  date: string | null;
  /**
   * Shown instead of the formatted date whenever it is set. Use it when the
   * month or year is known but the exact day is not, so ordering can still be
   * precise without the page claiming a day it cannot vouch for.
   */
  when?: string;
  text: string;
};

export type Activity = {
  slug: ActivitySlug;
  name: string;
  /** One line — what this is to you, not what the sport is. */
  tagline: string;
  /** Optional longer form. Omitted where the tagline says enough. */
  summary?: string;
  /** Months it is actually in season, 1–12. Drives the season band. */
  months: readonly number[];
  stats?: readonly ActivityStat[];
  highlights?: readonly Highlight[];
  gear?: readonly GearItem[];
  /** An outbound reference, where one exists. */
  link?: { href: string; label: string };
};

const ALL_YEAR = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export const ACTIVITIES: readonly Activity[] = [
  {
    slug: "ultrarunning",
    name: "Running",
    tagline: "At least a mile every day for four years, and occasionally a hundred at once.",
    summary:
      "It started at the Superior Fall Trail Race marathon in 2023 and has gone up in distance every year since — 50K at Afton, the Superior 50, then a hundred at Massanutten in 2025. Underneath the racing is a streak: at least one mile every single day for over four years. In September 2026 I go back to the Sawtooth Mountains for the Superior 100.",
    months: ALL_YEAR,
    // Race counts are derived by hand from RACES below — update both together.
    stats: [
      { label: "Run streak", value: "4 years", note: "1 mile minimum, daily" },
      { label: "Ultras finished", value: "5", note: "2023 onward" },
      { label: "Longest effort", value: "100 mi", note: "34:45:24" },
      { label: "Grandma's Marathon", value: "Every year", note: "including one double" },
    ],
    link: { href: "https://runeveryday.com/index.html", label: "Streak registry" },
    highlights: [
      {
        date: "2025-05-17",
        text: "Finished my first hundred at Massanutten Mountain Trails in 34:45:24 — rocky the entire way.",
      },
      {
        date: "2025-09-19",
        text: "Covered 75.6 miles at Last Dot Standing, a last-person-standing format where you keep going until you cannot.",
      },
      {
        date: "2025-06-01",
        when: "June 2025",
        text: "Ran Grandma's Marathon as a double: the course from finish to start, then turned around and ran the actual race back. 52.4 miles, 26.2 of which had a bib on it.",
      },
      {
        date: null,
        when: "Every June",
        text: "Grandma's Marathon in Duluth — the one race I run every single year.",
      },
    ],
  },
  {
    slug: "nordic-skiing",
    name: "Nordic skiing",
    tagline: "Three American Birkebeiners, and the reason a Minnesota December is bearable.",
    months: [12, 1, 2],
    stats: [{ label: "American Birkebeiners", value: "3", note: "completed" }],
  },
  {
    slug: "hiking",
    name: "Hiking & camping",
    tagline: "Spring through fall, usually with a tent at the end of it.",
    months: [3, 4, 5, 6, 7, 8, 9, 10, 11],
  },
  {
    slug: "pickleball",
    name: "Pickleball",
    tagline: "Summer, and the only thing on this list with no endurance argument behind it.",
    months: [6, 7, 8],
  },
  {
    slug: "lifting",
    name: "Lifting",
    tagline: "The year-round baseline that keeps everything else running.",
    months: ALL_YEAR,
  },
];

export const ACTIVITY_BY_SLUG = new Map(ACTIVITIES.map((a) => [a.slug, a]));

/* ------------------------------------------------------------------------ *
 * Ultrarunning-specific modules
 * ------------------------------------------------------------------------ */

export type RaceStatus = "finished" | "dnf" | "upcoming";

export type Race = {
  slug: string;
  date: string; // ISO
  name: string;
  location: string;
  /**
   * Distance in miles. For last-person-standing events this is what was
   * actually covered rather than an advertised distance.
   */
  distance: number;
  /** Total climb in feet, or null where it is not recorded. */
  vert: number | null;
  /** Elapsed time as H:MM:SS. Null for upcoming, DNF, or timed formats. */
  time: string | null;
  place: number | null;
  /** Field size, where known. UltraSignup does not report it. */
  field: number | null;
  status: RaceStatus;
  note?: string;
};

/**
 * Real, from the UltraSignup record for Connor Holm.
 *
 * Vert is null throughout because UltraSignup does not report it — fill it in
 * per race rather than letting the table imply numbers nobody measured. Field
 * sizes are unreported for the same reason, so the table shows a bare placing.
 *
 * Grandma's Marathon is not here: it is a road marathon and does not appear on
 * UltraSignup. It lives in the ultrarunning highlights below.
 */
export const RACES: readonly Race[] = [
  {
    slug: "superior-100-2026",
    date: "2026-09-11",
    name: "Superior Fall Trail Race — 100 Miler",
    location: "Lutsen, MN",
    distance: 100,
    vert: null,
    time: null,
    place: null,
    field: null,
    status: "upcoming",
    note: "The Sawtooth Mountains, on the Superior Hiking Trail. Third time at this race, third distance.",
  },
  {
    slug: "last-dot-standing-2025",
    date: "2025-09-19",
    name: "Last Dot Standing — Last Person Standing",
    location: "Belleville, WI",
    distance: 75.6,
    vert: null,
    time: null,
    place: 9,
    field: null,
    status: "finished",
    note: "A last-person-standing format, so the result is distance rather than time: 75.6 miles, 9th overall.",
  },
  {
    slug: "massanutten-100-2025",
    date: "2025-05-17",
    name: "Massanutten Mountain Trails 100 Mile Run",
    location: "Fort Valley, VA",
    distance: 100,
    vert: null,
    time: "34:45:24",
    place: 77,
    field: null,
    status: "finished",
    note: "First hundred. Notoriously rocky, and the clock shows it.",
  },
  {
    slug: "superior-50-2024",
    date: "2024-09-07",
    name: "Superior Fall Trail Race — 50 Miler",
    location: "Lutsen, MN",
    distance: 50,
    vert: null,
    time: "13:20:41",
    place: 40,
    field: null,
    status: "finished",
  },
  {
    slug: "afton-50k-2024",
    date: "2024-07-06",
    name: "Afton Trail Run — 50K",
    location: "Afton, MN",
    distance: 31,
    vert: null,
    time: "5:40:35",
    place: 64,
    field: null,
    status: "finished",
  },
  {
    slug: "superior-marathon-2023",
    date: "2023-09-09",
    name: "Superior Fall Trail Race — Marathon",
    location: "Lutsen, MN",
    distance: 26.2,
    vert: null,
    time: "5:14:26",
    place: 30,
    field: null,
    status: "finished",
    note: "The first one.",
  },
];

export const UPCOMING_RACES = RACES.filter((r) => r.status === "upcoming").sort((a, b) =>
  a.date.localeCompare(b.date),
);

export const COMPLETED_RACES = RACES.filter((r) => r.status !== "upcoming").sort((a, b) =>
  b.date.localeCompare(a.date),
);

export const NEXT_RACE = UPCOMING_RACES[0] ?? null;

export type PersonalBest = {
  distance: string;
  time: string;
  race: string;
  /** Null when the year it was set is not recorded. */
  year: number | null;
};

/**
 * Trail bests are exact, from the UltraSignup record. The road marathon best
 * is Grandma's, which is not on UltraSignup — Connor reports it as sub-three,
 * so it is recorded that way rather than invented to the second. Replace
 * "Sub-3:00" with the real time and year when you have them to hand.
 */
export const PERSONAL_BESTS: readonly PersonalBest[] = [
  { distance: "Marathon (road)", time: "Sub-3:00", race: "Grandma's Marathon", year: null },
  { distance: "Marathon (trail)", time: "5:14:26", race: "Superior Fall Trail Race", year: 2023 },
  { distance: "50K", time: "5:40:35", race: "Afton Trail Run", year: 2024 },
  { distance: "50M", time: "13:20:41", race: "Superior Fall Trail Race", year: 2024 },
  { distance: "100M", time: "34:45:24", race: "Massanutten Mountain Trails", year: 2025 },
];

export const CURRENT_BLOCK = {
  goal: "the Superior 100",
  focus:
    "102.9 miles along the Superior Hiking Trail with about 18,400 feet of climbing, none of it in one piece — the course trades a thousand feet up and down for the better part of two days.",
} as const;

/**
 * The real Superior 100 course, sampled every ~0.95 mi from the route GPX
 * (plotaroute export, 9,623 track points). 102.9 miles, 623–1,749 ft, and
 * roughly 18,400 ft of cumulative climb.
 */
export const FEATURED_PROFILE: readonly (readonly [number, number])[] = [
  [0.0, 689],
  [0.96, 850],
  [1.92, 902],
  [2.85, 909],
  [3.78, 974],
  [4.73, 925],
  [5.68, 945],
  [6.61, 843],
  [7.56, 653],
  [8.5, 663],
  [9.45, 889],
  [10.41, 840],
  [11.34, 991],
  [12.28, 948],
  [13.23, 1175],
  [14.17, 1237],
  [15.12, 1138],
  [16.06, 1329],
  [17.01, 1207],
  [17.95, 1175],
  [18.91, 919],
  [19.86, 840],
  [20.79, 971],
  [21.72, 1155],
  [22.66, 1171],
  [23.61, 1178],
  [24.56, 1257],
  [25.51, 1329],
  [26.45, 1312],
  [27.39, 1381],
  [28.35, 1093],
  [29.3, 1509],
  [30.24, 1404],
  [31.18, 1266],
  [32.12, 988],
  [33.05, 794],
  [34.0, 719],
  [34.96, 922],
  [35.9, 912],
  [36.84, 1181],
  [37.78, 1184],
  [38.73, 1148],
  [39.67, 1411],
  [40.61, 1391],
  [41.55, 1424],
  [42.5, 1188],
  [43.44, 1306],
  [44.39, 1427],
  [45.33, 1276],
  [46.3, 1394],
  [47.23, 1388],
  [48.16, 1362],
  [49.12, 1617],
  [50.05, 1388],
  [50.99, 1312],
  [51.94, 1519],
  [52.88, 1680],
  [53.83, 1650],
  [54.77, 1686],
  [55.71, 1686],
  [56.66, 1614],
  [57.61, 1634],
  [58.56, 1516],
  [59.51, 1453],
  [60.44, 1493],
  [61.4, 1467],
  [62.34, 1460],
  [63.27, 1430],
  [64.22, 1385],
  [65.16, 1558],
  [66.11, 1591],
  [67.05, 1368],
  [68.0, 1135],
  [68.94, 1043],
  [69.89, 1056],
  [70.83, 1017],
  [71.77, 1079],
  [72.72, 1145],
  [73.67, 1119],
  [74.61, 1263],
  [75.55, 1145],
  [76.49, 1191],
  [77.44, 1280],
  [78.38, 1342],
  [79.33, 1302],
  [80.27, 1319],
  [81.23, 1237],
  [82.16, 1171],
  [83.11, 1237],
  [84.07, 1253],
  [84.99, 787],
  [85.94, 827],
  [86.88, 958],
  [87.82, 1211],
  [88.78, 1329],
  [89.76, 1145],
  [90.67, 1306],
  [91.6, 1220],
  [92.55, 1414],
  [93.49, 1263],
  [94.44, 1398],
  [95.38, 1224],
  [96.33, 1296],
  [97.27, 1135],
  [98.21, 1522],
  [99.18, 1368],
  [100.11, 1545],
  [101.04, 1460],
  [101.99, 1260],
  [102.93, 1181],
];

/** Cumulative gain measured on the full-resolution track, not the samples. */
export const FEATURED_PROFILE_GAIN = 18400;
