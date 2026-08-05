import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader, Shell } from "@/components/ui/Section";
import { Stats } from "@/components/ui/Stats";

export const metadata: Metadata = {
  title: "Iceland: The Ring Road",
  description:
    "An interactive map of nine days around Iceland's Ring Road: 41 stops, 744 photos, from Keflavík to the last light in Reykjavík.",
};

const TRIP_STATS = [
  { label: "Days", value: "9" },
  { label: "Stops", value: "41" },
  { label: "Distance", value: "1,407 km" },
  { label: "Photos", value: "744" },
] as const;

/**
 * A self-contained interactive artifact rather than a native page: a Leaflet
 * map with a day-by-day route, a photo gallery per stop, and a lightbox,
 * built as a single static HTML file with its data embedded inline. Rebuilding
 * that as React/SVG (to match how WorldMap does the world map) would mean
 * reimplementing marker clustering, route segments with gaps, drag-to-jump
 * progress, and a lightbox from scratch for a one-off page — not worth it
 * next to an artifact that already works.
 *
 * It's embedded here via iframe rather than linked out to, and its two
 * dependencies that can be self-hosted (Leaflet, the Fraunces font) are —
 * see public/iceland-scrapbook/vendor/. The CARTO basemap tiles are the one
 * real runtime network dependency, which is unavoidable for any interactive
 * slippy map.
 */
export default function IcelandTripPage() {
  return (
    <>
      <PageHeader
        eyebrow="Travel"
        title="Iceland: The Ring Road"
        lede="Nine days, 41 stops, told in order from the flight into Keflavík to the last light in Reykjavík. The route draws in as you move through it."
      >
        <div className="mt-6">
          <Link
            href="/travel"
            className="text-ink-3 hover:text-accent font-mono text-[0.66rem] tracking-[0.13em] uppercase"
          >
            ← All trips
          </Link>
        </div>
      </PageHeader>

      <Shell className="pb-10">
        <Stats stats={TRIP_STATS} />
      </Shell>

      {/* Full-bleed: the map wants all the width it can get, unlike the rest
          of the site's document-width columns. */}
      <div className="border-rule bg-panel h-[82vh] max-h-[900px] min-h-[560px] border-y">
        <iframe
          src="/iceland-scrapbook/index.html"
          title="Iceland: The Ring Road — interactive trip map"
          className="h-full w-full"
          loading="lazy"
        />
      </div>

      <Shell className="pt-8 pb-16">
        <p className="text-ink-3 max-w-[64ch] font-mono text-[0.72rem] leading-relaxed tracking-[0.02em]">
          Day arrows at the bottom move between days; the arrows on the sidebar step through each
          stop. Click any photo to open it full-screen. Works on a phone, but is happier on a bigger
          screen.
        </p>
      </Shell>
    </>
  );
}
