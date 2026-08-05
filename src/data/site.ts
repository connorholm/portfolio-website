import type { Route } from "next";

/**
 * Site-wide constants: identity, navigation, and the status strip.
 *
 * `contentStatus` gates the draft notice in the header. Flip it to "live"
 * once every PLACEHOLDER marked in src/data/* has been replaced with real
 * information — see running.ts and travel.ts especially.
 */

export const SITE = {
  name: "Connor Holm",
  domain: "connorholm.com",
  url: "https://www.connorholm.com",
  title: "Connor Holm",
  tagline: "I build software and I go long.",
  description:
    "Software engineer, ultrarunner, and traveller. Machine learning and mobile work, race reports, trip logs, and whatever I am currently thinking about.",
  email: "connorjholm@gmail.com",
  contentStatus: "draft" as "draft" | "live",
  location: "Eden Prairie, Minnesota",
} as const;

/**
 * Hero portrait. Deliberately null: the only photo in the repo is a 2020
 * senior portrait, and shipping it would undercut the point of the rebuild.
 * Drop a current image in /public/images and point this at it — ideally
 * mid-race or on a trail rather than a headshot.
 */
export const HERO_IMAGE: { src: string; alt: string } | null = null;

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
  { href: "/writing", label: "Writing", blurb: "Essays on all three, one feed" },
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
    value: "AI systems at Vantix Strategies & UnitedHealthcare",
    detail:
      "Running a firm of forward deployed engineers, and building AI observability and agentic systems in production.",
    since: "2026-08-01",
  },
  {
    key: "Training for",
    value: "Superior Fall Trail Race — 100 Miler",
    detail: "100 miles through the Sawtooth Mountains in Lutsen, MN, on 11 September 2026.",
    since: "2026-08-01",
  },
  {
    key: "Last trip",
    value: "PLACEHOLDER — most recent trip",
    detail: "Where you went and roughly when.",
    since: "2026-08-01",
  },
] as const;
