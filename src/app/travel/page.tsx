import type { Metadata } from "next";
import { WorldMap } from "@/components/charts/WorldMap";
import { Measure, PageHeader, Section } from "@/components/ui/Section";
import { Stats } from "@/components/ui/Stats";
import { NEXT_TRIP, RECENT_TRIPS, TRAVEL_TOTALS, VISITED_COUNTRY_IDS } from "@/data/travel";
import { formatDateRange } from "@/lib/format";

export const metadata: Metadata = {
  title: "Travel",
  description: "A map of where I have been, and write-ups of the trips worth writing up.",
};

export default function TravelPage() {
  return (
    <>
      <PageHeader
        eyebrow="Travel"
        title="Where I've been and what it was like"
        lede="I plan trips the way I plan races: pick something slightly beyond what seems reasonable, then work out the logistics afterwards. The map is the index — each marker is a trip below."
      />

      <Section rail="Map" note="The index">
        <h2 className="sr-only">Map of visited countries</h2>
        <Stats stats={TRAVEL_TOTALS.map((t) => ({ label: t.label, value: t.value }))} />
        <div className="mt-7">
          <WorldMap
            visitedIds={VISITED_COUNTRY_IDS}
            markers={RECENT_TRIPS.map((t) => ({
              id: t.slug,
              label: t.title,
              coords: t.coords,
              href: `#${t.slug}`,
            }))}
          />
        </div>
        <p className="text-ink-3 mt-3 font-mono text-[0.64rem] tracking-[0.1em] uppercase">
          Filled countries are visited · markers link to the trip below
        </p>
      </Section>

      <Section rail="Trips" note={`${RECENT_TRIPS.length} logged`}>
        <h2 className="text-h2">Trip logs</h2>
        <ol className="border-rule mt-8 border-t">
          {RECENT_TRIPS.map((trip) => (
            <li key={trip.slug} id={trip.slug} className="border-rule scroll-mt-24 border-b py-7">
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                <h3 className="text-h3">{trip.title}</h3>
                <p className="tabular text-ink-3 font-mono text-[0.66rem] tracking-[0.1em] uppercase">
                  {trip.country} · {formatDateRange(trip.start, trip.end)}
                </p>
              </div>
              <p className="text-ink-2 mt-3 max-w-[64ch]">{trip.summary}</p>
              {trip.ranThere && (
                <p className="text-survey mt-3 font-mono text-[0.64rem] tracking-[0.12em] uppercase">
                  Ran there
                </p>
              )}
            </li>
          ))}
        </ol>

        <div className="border-rule bg-panel mt-8 border px-5 py-4">
          <p className="label mb-1">Next</p>
          <p className="font-display text-h3">{NEXT_TRIP.destination}</p>
          <p className="text-ink-2 mt-0.5 font-mono text-sm">{NEXT_TRIP.when}</p>
        </div>
      </Section>

      <Section rail="Photos" note="To come">
        <h2 className="text-h2">Photographs</h2>
        <Measure className="mt-4">
          <p className="text-ink-2">
            Each trip gets a photo essay rather than a contact sheet — a handful of frames with real
            captions. A grid of ninety thumbnails is a screensaver, not a story.
          </p>
        </Measure>
        <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="border-rule bg-panel flex aspect-[4/3] items-end border border-dashed p-3"
            >
              <span className="text-ink-3 font-mono text-[0.6rem] tracking-[0.12em] uppercase">
                Frame {i + 1}
              </span>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
