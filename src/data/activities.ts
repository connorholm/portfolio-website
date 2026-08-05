/**
 * ⚠️  ALMOST EVERY VALUE IN THIS FILE IS PLACEHOLDER DATA.
 *
 * The shapes are right and the pages render correctly from them, but none of
 * these races, times, or totals are real. Replace them before setting
 * SITE.contentStatus to "live" in src/data/site.ts.
 *
 * Adding an activity: append to ACTIVITIES. It gets a row in the season band,
 * a section on /activities, and its own page at /activities/<slug> for free.
 * Only ultrarunning renders the race log, PR board, and mileage chart — those
 * modules key off `slug === "ultrarunning"` in the detail page.
 */

export type ActivitySlug = "ultrarunning" | "nordic-skiing" | "hiking" | "pickleball";

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
  /** ISO date, or null when only the story is known and not the date. */
  date: string | null;
  /** Shown in place of a formatted date when `date` is null. */
  when?: string;
  text: string;
};

export type Activity = {
  slug: ActivitySlug;
  name: string;
  /** One line — what this is to you, not what the sport is. */
  tagline: string;
  /** Two or three sentences for the section and the detail page. */
  summary: string;
  /** Months it is actually in season, 1–12. Drives the season band. */
  months: readonly number[];
  since: number;
  stats: readonly ActivityStat[];
  highlights?: readonly Highlight[];
  gear?: readonly GearItem[];
};

export const ACTIVITIES: readonly Activity[] = [
  {
    slug: "ultrarunning",
    name: "Ultrarunning",
    tagline: "The one that takes the most planning and gives back the most.",
    summary:
      "It started at the Superior Fall Trail Race marathon in 2023 and has gone up in distance every year since — 50K at Afton, the Superior 50, then a hundred at Massanutten in 2025. Superior keeps pulling me back to the Sawtooth Mountains, and in September 2026 I go back for the full hundred there.",
    months: [3, 4, 5, 6, 7, 8, 9, 10, 11],
    since: 2023,
    // Counts derived by hand from RACES below — update both together.
    stats: [
      { label: "Ultras finished", value: "5", note: "2023 onward" },
      { label: "Hundreds finished", value: "1", note: "Massanutten 2025" },
      { label: "Longest effort", value: "100 mi", note: "34:45:24" },
      { label: "Grandma's Marathon", value: "Every year", note: "including one double" },
    ],
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
        date: null,
        when: "PLACEHOLDER — year",
        text: "Ran Grandma's Marathon as a double: the course from finish to start, then turned around and ran the actual race back. 52.4 miles, one of which had a bib on it.",
      },
      {
        date: null,
        when: "Every June",
        text: "Grandma's Marathon in Duluth — the one race I run every single year.",
      },
    ],
    gear: [
      { category: "Shoes — trail", item: "PLACEHOLDER", note: "What you race in and why." },
      { category: "Shoes — road", item: "PLACEHOLDER", note: "Daily mileage." },
      { category: "Vest", item: "PLACEHOLDER", note: "Litres, and what fits in it." },
      { category: "Watch", item: "PLACEHOLDER", note: "Battery life at 100-mile pace." },
      { category: "Light", item: "PLACEHOLDER", note: "The one that got you through the night." },
      {
        category: "Nutrition",
        item: "PLACEHOLDER",
        note: "Carbs per hour, and what stops working.",
      },
    ],
  },
  {
    slug: "nordic-skiing",
    name: "Nordic skiing",
    tagline: "What winter is for, and the reason the running season starts fit.",
    summary:
      "PLACEHOLDER — classic or skate, where you ski, whether you race. Minnesota has a real Nordic culture, so this is worth more than a sentence.",
    months: [12, 1, 2, 3],
    since: 2022,
    stats: [
      { label: "Days on snow", value: "34", note: "last season" },
      { label: "Longest tour", value: "42 km", note: "PLACEHOLDER" },
      { label: "Races", value: "3", note: "PLACEHOLDER" },
      { label: "Discipline", value: "Skate", note: "PLACEHOLDER" },
    ],
    highlights: [
      { date: "2026-02-21", text: "PLACEHOLDER — a race or a tour worth remembering." },
      { date: "2025-01-11", text: "PLACEHOLDER — another one." },
    ],
    gear: [
      { category: "Skis", item: "PLACEHOLDER", note: "" },
      { category: "Boots", item: "PLACEHOLDER", note: "" },
      { category: "Poles", item: "PLACEHOLDER", note: "" },
      {
        category: "Wax",
        item: "PLACEHOLDER",
        note: "Or whether you have given up and gone glide.",
      },
    ],
  },
  {
    slug: "hiking",
    name: "Hiking",
    tagline: "Long days on foot without a clock involved.",
    summary:
      "PLACEHOLDER — where you hike, whether you are chasing anything (peaks, a trail, a list), and how it fits alongside the running.",
    months: [4, 5, 6, 7, 8, 9, 10],
    since: 2019,
    stats: [
      { label: "Trail miles", value: "PLACEHOLDER", note: "" },
      { label: "Peaks", value: "PLACEHOLDER", note: "" },
      { label: "Longest day", value: "PLACEHOLDER", note: "" },
      { label: "Nights out", value: "PLACEHOLDER", note: "" },
    ],
    highlights: [{ date: "2025-08-16", text: "PLACEHOLDER — a hike worth writing about." }],
    gear: [
      { category: "Pack", item: "PLACEHOLDER", note: "" },
      { category: "Boots", item: "PLACEHOLDER", note: "" },
      { category: "Shelter", item: "PLACEHOLDER", note: "If you go out overnight." },
    ],
  },
  {
    slug: "pickleball",
    name: "Pickleball",
    tagline: "The only one on this list with no endurance argument behind it.",
    summary:
      "PLACEHOLDER — how often you play, indoor or outdoor, whether you are competitive about it. This one is allowed to just be fun; not everything has to be training.",
    months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    since: 2024,
    stats: [
      { label: "Plays per week", value: "PLACEHOLDER", note: "" },
      { label: "Level", value: "PLACEHOLDER", note: "DUPR, if you track it" },
      { label: "Court", value: "PLACEHOLDER", note: "Indoor or out" },
    ],
    gear: [
      { category: "Paddle", item: "PLACEHOLDER", note: "" },
      { category: "Shoes", item: "PLACEHOLDER", note: "Court shoes, not running shoes." },
    ],
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
  year: number;
};

/**
 * Trail bests are real, taken from the UltraSignup record. Road bests —
 * including Grandma's, which is run every year — are not on UltraSignup, so
 * they are left as PLACEHOLDER rather than guessed at.
 */
export const PERSONAL_BESTS: readonly PersonalBest[] = [
  { distance: "Marathon (trail)", time: "5:14:26", race: "Superior Fall Trail Race", year: 2023 },
  { distance: "50K", time: "5:40:35", race: "Afton Trail Run", year: 2024 },
  { distance: "50M", time: "13:20:41", race: "Superior Fall Trail Race", year: 2024 },
  { distance: "100M", time: "34:45:24", race: "Massanutten Mountain Trails", year: 2025 },
  { distance: "Marathon (road)", time: "PLACEHOLDER", race: "Grandma's Marathon", year: 2026 },
];

/**
 * Weekly mileage for the current block, oldest first. Swap for a Strava fetch
 * once the site is on a Node host; the chart takes the same shape either way.
 */
export const WEEKLY_MILEAGE: readonly number[] = [38, 44, 51, 32, 55, 62, 58, 41, 68, 74, 66, 45];

export const CURRENT_BLOCK = {
  goal: "the Superior 100",
  focus:
    "PLACEHOLDER — what this block is actually for. Superior is relentless rather than steep, so presumably time on feet and downhill legs.",
} as const;

/**
 * ⚠️  PLACEHOLDER — these are invented numbers in the right shape, not the
 * Superior course. Export the real profile from a GPX before this goes live.
 */
export const FEATURED_PROFILE: readonly (readonly [number, number])[] = [
  [0, 820],
  [4, 1650],
  [9, 1180],
  [14, 3100],
  [19, 2400],
  [24, 4250],
  [29, 3050],
  [34, 5400],
  [38, 4100],
  [43, 5900],
  [47, 3300],
  [50, 2100],
];
