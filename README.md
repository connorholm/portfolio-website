# connorholm.com

A personal site — work, the things I do outside it, and travel in one place,
rather than a résumé pretending the rest doesn't exist.

Live at [connorholm.com](https://www.connorholm.com/).

## Running it

```bash
npm install
npm run dev
```

| Script           | Does                                               |
| ---------------- | -------------------------------------------------- |
| `npm run dev`    | Dev server on :3000                                |
| `npm run build`  | Production build; static export written to `./out` |
| `npm run check`  | `tsc --noEmit` then ESLint — what CI runs          |
| `npm run format` | Prettier over the repo                             |

## Stack

Next.js 16 (App Router) · React 19 · TypeScript (strict) · Tailwind CSS v4 · MDX.
No UI or charting libraries: the elevation profiles, mileage chart, world map, and
contour background are all hand-authored SVG or canvas.

Deployed as a static export to GitHub Pages via `.github/workflows/nextjs.yml`.

## Editing content

Content is data, never components. Nothing below requires touching a `.tsx` file.

| What                                     | Where                       |
| ---------------------------------------- | --------------------------- |
| Name, tagline, nav, status strip         | `src/data/site.ts`          |
| Roles, projects, skills, education       | `src/data/work.ts`          |
| Activities, seasons, races, PRs, gear    | `src/data/activities.ts`    |
| Countries, trips, counters               | `src/data/travel.ts`        |
| The merged work/activity/travel timeline | `src/data/timeline.ts`      |
| Cross-cutting desk and outdoor kit       | `src/data/uses.ts`          |
| Posts and race reports                   | `src/content/writing/*.mdx` |

### Adding an activity

Append to `ACTIVITIES` in `src/data/activities.ts`. It gets a row in the season
band, a section on `/activities`, and its own page at `/activities/<slug>`
automatically — no component changes. Set `months` to the months it is actually
in season; that array drives the season band and the derived line on `/now`.

Ultrarunning is the only activity with a race log, PR board, mileage chart, and
course profile. Those modules key off `slug === "ultrarunning"` in
`src/app/activities/[slug]/page.tsx` rather than being forced onto every sport.
Per-activity gear lives on the activity; `/uses` covers only what spans all of them.

### Adding a post

Drop an `.mdx` file into `src/content/writing/` with this frontmatter:

```yaml
---
title: "Post title"
date: "2026-08-04"
tag: "eng" # eng | activity | travel
summary: "One sentence — shows in the feed and in link previews."
draft: false # true keeps it out of the build entirely
---
```

`src/content/writing/_template-race-report.mdx` is a marked-draft skeleton to copy.

## Before going live

The site currently renders a draft banner on every page. It is driven by
`SITE.contentStatus` in `src/data/site.ts`. To clear it:

1. Replace every `PLACEHOLDER` in `src/data/` — `activities.ts` and `travel.ts`
   are entirely placeholder. `work.ts` is real, sourced from LinkedIn and the
   previous live site, but check the Vantix founding date: connorholm.com said
   2025, LinkedIn says Jan 2026, and the file currently uses LinkedIn's.
2. Add a current photo to `public/images/` and point `HERO_IMAGE` at it
   (`src/data/site.ts`). The design leans on real imagery.
3. Set `contentStatus` to `"live"`.

## Design system

Semantic tokens in `src/app/globals.css`. Every colour is a CSS custom property
redefined under `prefers-color-scheme` and again under `[data-theme]`, so the
toggle can override the OS in both directions and components never need a `dark:`
variant — they reference `bg-panel`, `text-ink-2` and are correct in both themes.

Typefaces: Barlow Condensed (display), Source Serif 4 (body), IBM Plex Mono (data).
The font variables are declared on `<html>` rather than `<body>` — Tailwind's
`@theme` resolves them at `:root`, so anywhere else leaves every `var()` invalid.

## Moving off static export

Static export is what keeps GitHub Pages working. It also rules out live Strava
data, a contact form, and server-side image optimisation. To move to a Node host,
delete `output` and `images.unoptimized` from `next.config.ts` — nothing else in
the app depends on either.
