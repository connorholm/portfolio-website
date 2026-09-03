import type { Route } from "next";

/**
 * Site-wide constants: identity, navigation, and the status strip.
 *
 * `contentStatus` gates the draft notice in the header. Flip it to "live"
 * once the content is real. It drives the draft banner in the header.
 */

export const SITE = {
  name: "Connor Holm",
  domain: "connorholm.com",
  url: "https://www.connorholm.com",
  title: "Connor Holm",
  tagline: "Built to keep going.",
  description:
    "AI engineer, founder of Vantix Strategies, ultrarunner, and traveller. Production AI and machine learning work, plus activities and trip logs.",
  email: "connorjholm@gmail.com",
  contentStatus: "live" as "draft" | "live",
  location: "Eden Prairie, Minnesota",
} as const;

/**
 * Hero portrait. Rendered only once the file is actually present in /public —
 * see hasPhoto() in src/lib/photos.ts — so the hero collapses to a clean
 * single column until then rather than shipping a broken image.
 */
export const HERO_IMAGE: { src: string; alt: string } | null = {
  src: "/images/iceland-skogafoss.jpg",
  alt: "Connor standing with arms outstretched in front of Skógafoss in Iceland, a rainbow arcing across the spray",
};

/**
 * The résumé PDF. Lives in /public so it is served as a plain static file —
 * the path is centralised here because three separate places link to it
 * (the hero, the about page, and the footer).
 */
export const RESUME = {
  href: "/connor-holm-resume.pdf",
  /** ISO date of the version currently in /public. Bump when the file changes. */
  updated: "2026-08-22",
} as const;

export type NavItem = {
  /** Typed against the app's real routes — a broken nav link fails the build. */
  href: Route;
  label: string;
  /** One-line description, used by the mobile menu and the footer sitemap. */
  blurb: string;
};

export const NAV: readonly NavItem[] = [
  { href: "/work", label: "Work", blurb: "What I build, and what came of it" },
  {
    href: "/activities",
    label: "Activities",
    blurb: "Running, skiing, hiking, pickleball",
  },
  { href: "/travel", label: "Travel", blurb: "Where I have been and what it was like" },
  { href: "/about", label: "About", blurb: "The long version, in order" },
  { href: "/now", label: "Now", blurb: "What has my attention this month" },
] as const;

export type SocialLink = {
  label: string;
  href: string;
  handle: string;
};

export const SOCIALS: readonly SocialLink[] = [
  { label: "GitHub", href: "https://github.com/connorholm", handle: "@connorholm" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/holm-connor/", handle: "holm-connor" },
  { label: "Instagram", href: "https://www.instagram.com/connor_holm/", handle: "@connor_holm" },
] as const;

/**
 * The status strip. Three dated cells, shown directly under the hero.
 * A visible date is what makes a site read as current — keep these fresh
 * even when the rest of the site is static.
 *
 * TODO(connor): replace all three with real, current information.
 */
export type StatusCell = {
  key: string;
  value: string;
  detail: string;
  /** ISO date — rendered as "updated <month year>". */
  since: string;
};

export const STATUS: readonly StatusCell[] = [
  {
    key: "Building",
    value: "Vantix Strategies, full time",
    detail:
      "Left UnitedHealthcare in August to run my forward deployed engineering firm full time, currently embedded at Umbrage, a Bain & Company subsidiary, as Director of AI Engineering.",
    since: "2026-08-22",
  },
  {
    key: "Training for",
    value: "Superior Fall Trail Race, 100 Miler",
    detail: "100 miles through the Sawtooth Mountains in Lutsen, MN, on 11 September 2026.",
    since: "2026-08-22",
  },
  {
    key: "Last trip",
    value: "Iceland",
    detail: "Back a few days ago. Japan (Tokyo, Kyoto, Osaka) was in May.",
    since: "2026-08-01",
  },
] as const;
