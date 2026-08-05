/**
 * /uses — two columns, desk and everything else. The layout makes the site's
 * argument without saying anything about it.
 *
 * Per-activity kit lives with the activity in src/data/activities.ts and shows
 * on each /activities/<slug> page. This page is the cross-cutting stuff: what
 * gets used regardless of which sport is in season.
 *
 * TODO(connor): the desk column is a reasonable guess from your project
 * history; correct it. The outside column is PLACEHOLDER throughout.
 */

export type UsesGroup = {
  heading: string;
  items: readonly { name: string; note: string }[];
};

export const DESK: readonly UsesGroup[] = [
  {
    heading: "Editor & shell",
    items: [
      { name: "VS Code", note: "PLACEHOLDER — or whatever you actually use." },
      { name: "iTerm2 + zsh", note: "PLACEHOLDER" },
      { name: "Git", note: "PLACEHOLDER" },
    ],
  },
  {
    heading: "Languages",
    items: [
      { name: "Python", note: "Anything with a model in it." },
      { name: "TypeScript", note: "Anything with a browser in it." },
      { name: "Swift & Kotlin", note: "When the thing has to live on a phone." },
    ],
  },
  {
    heading: "Services",
    items: [
      { name: "PLACEHOLDER — cloud", note: "AWS or Azure, whichever is true." },
      { name: "PLACEHOLDER — hosting", note: "" },
      { name: "PLACEHOLDER — everything else", note: "" },
    ],
  },
];

export const OUTSIDE: readonly UsesGroup[] = [
  {
    heading: "Tracking",
    items: [
      { name: "PLACEHOLDER — watch", note: "Whatever logs runs, skis, and hikes alike." },
      { name: "PLACEHOLDER — apps", note: "Strava, Gaia, CalTopo — whichever you actually open." },
    ],
  },
  {
    heading: "Layers",
    items: [
      { name: "PLACEHOLDER — base layer", note: "The one that works at -10°F and at 70°F." },
      { name: "PLACEHOLDER — shell", note: "" },
      { name: "PLACEHOLDER — gloves", note: "Minnesota makes this a real category." },
    ],
  },
  {
    heading: "Fuel",
    items: [
      { name: "PLACEHOLDER — gels or real food", note: "" },
      { name: "PLACEHOLDER — electrolytes", note: "" },
      { name: "PLACEHOLDER — the thing that stops working at hour eight", note: "" },
    ],
  },
];
