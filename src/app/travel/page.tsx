import type { Metadata } from "next";
import { WorldMap } from "@/components/charts/WorldMap";
import { PhotoGrid } from "@/components/ui/PhotoGrid";
import { PageHeader, Section } from "@/components/ui/Section";
import { Stats } from "@/components/ui/Stats";
import { RECENT_TRIPS, TRAVEL_TOTALS, VISITED_COUNTRY_IDS } from "@/data/travel";

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
        lede="I plan trips the way I plan races: pick something slightly beyond what seems reasonable, then work out the logistics afterwards. The map is the index, and each marker is a trip below."
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
          {RECENT_TRIPS.map((trip, i) => (
            <li key={trip.slug} id={trip.slug} className="border-rule scroll-mt-24 border-b py-7">
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                <h3 className="text-h3">{trip.title}</h3>
                <p className="tabular text-ink-3 font-mono text-[0.66rem] tracking-[0.1em] uppercase">
                  {trip.country} · {trip.when}
                </p>
              </div>
              <p className="text-ink-2 mt-3 max-w-[64ch]">{trip.summary}</p>
              <PhotoGrid photos={trip.photos} className="mt-5" priority={i === 0} />
            </li>
          ))}
        </ol>
      </Section>
    </>
  );
}
