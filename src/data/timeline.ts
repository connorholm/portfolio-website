/**
 * One timeline carrying all three threads, interleaved chronologically.
 *
 * This is the component that argues the site's thesis: it shows one life
 * rather than three tabs. Career entries are real, ported from the old site.
 * Name the specific pursuit in the text ("first 50K", "first Birkie"); the
 * thread only supplies the colour.
 */

export type Thread = "work" | "activity" | "travel";

export type TimelineEntry = {
  year: number;
  /** Optional month for ordering within a year. 1-12. */
  month?: number;
  thread: Thread;
  text: string;
};

export const THREAD_LABEL: Record<Thread, string> = {
  work: "Work",
  activity: "Activities",
  travel: "Travel",
};

export const TIMELINE: readonly TimelineEntry[] = [
  { year: 2018, thread: "work", text: "Learned Java in a high-school class. That was the start." },
  { year: 2020, thread: "work", text: "Took iOS development and built the EPHS app." },
  {
    year: 2021,
    month: 2,
    thread: "work",
    text: "Released Target Practice Mania on the App Store.",
  },
  {
    year: 2021,
    month: 5,
    thread: "work",
    text: "Won the Congressional App Challenge for MN-03 with the COVID-19 information site.",
  },
  {
    year: 2021,
    month: 8,
    thread: "work",
    text: "Joined Jed Mahonis Group as an Android engineer, including work on the Little Free Library app.",
  },
  { year: 2022, thread: "work", text: "Built an appointment app's API in Ruby on Rails." },
  {
    year: 2022,
    month: 8,
    thread: "activity",
    text: "Started a run streak: at least one mile every single day. Still going.",
  },
  {
    year: 2023,
    month: 3,
    thread: "work",
    text: "Got properly interested in AI, and trained a Flappy Bird agent with a genetic algorithm.",
  },
  {
    year: 2023,
    month: 6,
    thread: "work",
    text: "Interned at UnitedHealth Group, building computer-vision models for medical documents.",
  },
  {
    year: 2023,
    month: 9,
    thread: "work",
    text: "Built the TikTok watermark remover, combining object detection and inpainting.",
  },
  {
    year: 2023,
    month: 9,
    thread: "activity",
    text: "First trail marathon, at the Superior Fall Trail Race in the Sawtooth Mountains.",
  },
  {
    year: 2024,
    month: 5,
    thread: "work",
    text: "Earned a BS in Computer Science from the University of Minnesota, and started a master's.",
  },
  {
    year: 2024,
    month: 6,
    thread: "work",
    text: "Moved to cloud migration at UnitedHealth Group, containerizing 52 APIs with Docker, Kubernetes, and Helm.",
  },
  {
    year: 2025,
    month: 5,
    thread: "work",
    text: "Finished the master's in Computer Science.",
  },
  {
    year: 2025,
    month: 7,
    thread: "work",
    text: "Became an AI Engineer at UnitedHealthcare, building the enterprise AI observability platform.",
  },
  {
    year: 2025,
    month: 5,
    thread: "activity",
    text: "Finished my first hundred at Massanutten Mountain Trails, in 34:45:24.",
  },
  {
    year: 2025,
    month: 6,
    thread: "activity",
    text: "Ran Grandma's Marathon as a double: finish to start, then the race back. 52.4 miles.",
  },
  {
    year: 2026,
    month: 1,
    thread: "work",
    text: "Founded Vantix Strategies, a firm of forward deployed engineers shipping production AI systems in under six weeks.",
  },
  {
    year: 2026,
    month: 3,
    thread: "work",
    text: "Observability work prevented over $1M in annual losses by cutting mean time to recovery.",
  },
  { year: 2026, month: 5, thread: "travel", text: "Two weeks in Japan: Tokyo, Kyoto, Osaka." },
  { year: 2026, month: 8, thread: "travel", text: "Iceland." },
];

export const TIMELINE_SORTED = [...TIMELINE].sort(
  (a, b) => b.year - a.year || (b.month ?? 0) - (a.month ?? 0),
);
