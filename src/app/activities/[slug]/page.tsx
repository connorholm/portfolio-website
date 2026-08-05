import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { RaceTable } from "@/components/activities/RaceTable";
import { ElevationProfile } from "@/components/charts/ElevationProfile";
import { Measure, PageHeader, Section } from "@/components/ui/Section";
import { PhotoGrid } from "@/components/ui/PhotoGrid";
import { Stats } from "@/components/ui/Stats";
import {
  ACTIVITIES,
  ACTIVITY_BY_SLUG,
  COMPLETED_RACES,
  CURRENT_BLOCK,
  FEATURED_PROFILE,
  FEATURED_PROFILE_GAIN,
  NEXT_RACE,
  PERSONAL_BESTS,
  UPCOMING_RACES,
  type Activity,
} from "@/data/activities";
import { formatDate } from "@/lib/format";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return ACTIVITIES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const activity = ACTIVITY_BY_SLUG.get(slug as Activity["slug"]);
  if (!activity) return {};

  return {
    title: activity.name,
    description: activity.tagline,
  };
}

/**
 * Running carries modules nothing else needs — the goal course profile, a race
 * log, and a PR board. Rather than forcing every activity into a race-shaped
 * schema, those render only here.
 */
function RunningModules() {
  const dnfCount = COMPLETED_RACES.filter((r) => r.status === "dnf").length;

  return (
    <>
      <Section rail="Block" note="Right now">
        <h2 className="text-h2">Current training block</h2>
        <Measure className="mt-4">
          <p className="text-ink-2">
            Building for <strong>{CURRENT_BLOCK.goal}</strong>. {CURRENT_BLOCK.focus}
          </p>
        </Measure>
        <div className="mt-7">
          <ElevationProfile
            points={FEATURED_PROFILE}
            gain={FEATURED_PROFILE_GAIN}
            caption="Superior 100 — measured from the course GPX"
            startLabel="Gooseberry Falls"
            endLabel="Lutsen · mile 102.9"
          />
        </div>
      </Section>

      <Section rail="Log" note={`${COMPLETED_RACES.length} races`}>
        <div className="flex flex-wrap items-baseline justify-between gap-4">
          <h2 className="text-h2">Race log</h2>
          <p className="text-ink-3 font-mono text-[0.68rem] tracking-[0.12em] uppercase">
            {dnfCount} did not finish
          </p>
        </div>
        <div className="mt-7">
          <RaceTable races={COMPLETED_RACES} />
        </div>

        {UPCOMING_RACES.length > 0 && (
          <>
            <h3 className="text-h3 mt-12">On the calendar</h3>
            <div className="mt-4">
              <RaceTable races={UPCOMING_RACES} />
            </div>
          </>
        )}
      </Section>

      <Section rail="Bests" note="By distance">
        <h2 className="text-h2">Personal bests</h2>
        <div className="border-rule mt-7 overflow-x-auto border">
          <table className="bg-panel w-full min-w-[28rem] border-collapse text-left">
            <thead>
              <tr className="bg-panel-2">
                {["Distance", "Time", "Where", "Year"].map((h) => (
                  <th
                    key={h}
                    scope="col"
                    className="border-rule font-400 text-ink-3 border-b px-3 py-2.5 font-mono text-[0.62rem] tracking-[0.13em] uppercase"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {PERSONAL_BESTS.map((pb) => (
                <tr key={pb.distance} className="border-rule border-b last:border-b-0">
                  <td className="font-display px-3 py-2.5 text-base">{pb.distance}</td>
                  <td className="tabular text-accent px-3 py-2.5 font-mono text-sm">{pb.time}</td>
                  <td className="text-ink-2 px-3 py-2.5 text-sm">{pb.race}</td>
                  <td className="tabular text-ink-3 px-3 py-2.5 font-mono text-sm">
                    {pb.year ?? "—"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>
    </>
  );
}

export default async function ActivityPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const activity = ACTIVITY_BY_SLUG.get(slug as Activity["slug"]);
  if (!activity) notFound();

  return (
    <>
      <PageHeader eyebrow="Activities" title={activity.name} lede={activity.tagline}>
        <div className="mt-6">
          <Link
            href="/activities"
            className="text-ink-3 hover:text-accent font-mono text-[0.66rem] tracking-[0.13em] uppercase"
          >
            ← All activities
          </Link>
        </div>
      </PageHeader>

      <Section rail="Overview" note={activity.months.length === 12 ? "All year" : "Seasonal"}>
        <h2 className="sr-only">Overview</h2>
        {activity.summary && (
          <Measure>
            <p className="text-ink-2">{activity.summary}</p>
          </Measure>
        )}
        {activity.stats && activity.stats.length > 0 && (
          <Stats stats={activity.stats} className={activity.summary ? "mt-7" : ""} />
        )}
        {activity.link && (
          <a
            href={activity.link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-ink mt-5 inline-block font-mono text-[0.68rem] tracking-[0.12em] uppercase hover:underline"
          >
            {activity.link.label} →
          </a>
        )}

        <PhotoGrid photos={activity.photos} className="mt-7" priority />

        {activity.slug === "ultrarunning" && NEXT_RACE && (
          <p className="text-ink-2 mt-5 font-mono text-sm">
            <span className="text-accent">Next:</span> {NEXT_RACE.name} · {NEXT_RACE.distance} mi ·{" "}
            {formatDate(NEXT_RACE.date)}
          </p>
        )}
      </Section>

      {activity.slug === "ultrarunning" && <RunningModules />}

      {activity.highlights && activity.highlights.length > 0 && (
        <Section rail="Highlights" note="Worth remembering">
          <h2 className="text-h2">Highlights</h2>
          <ol className="border-rule mt-7 border-t">
            {/* Dated entries first, newest first; undated ones (recurring
                traditions, or dates not yet pinned down) fall to the bottom. */}
            {[...activity.highlights]
              .sort((a, b) => (b.date ?? "").localeCompare(a.date ?? ""))
              .map((h, i) => (
                <li
                  key={h.date ?? `undated-${i}`}
                  className="border-rule grid gap-x-8 gap-y-1 border-b py-4 sm:grid-cols-[10rem_minmax(0,1fr)]"
                >
                  {/* `when` wins when set: the date may be approximate and
                      exists only to order the list correctly. */}
                  {h.when ? (
                    <span className="text-ink-3 pt-0.5 font-mono text-[0.7rem] tracking-[0.1em] uppercase">
                      {h.when}
                    </span>
                  ) : h.date ? (
                    <time
                      dateTime={h.date}
                      className="tabular text-ink-3 pt-0.5 font-mono text-[0.7rem] tracking-[0.1em] uppercase"
                    >
                      {formatDate(h.date)}
                    </time>
                  ) : (
                    <span className="text-ink-3 pt-0.5 font-mono text-[0.7rem] tracking-[0.1em] uppercase">
                      Undated
                    </span>
                  )}
                  <p className="text-ink-2">{h.text}</p>
                </li>
              ))}
          </ol>
        </Section>
      )}

      {activity.gear && activity.gear.length > 0 && (
        <Section rail="Kit" note="What survived">
          <h2 className="text-h2">Gear</h2>
          <Measure className="mt-4">
            <p className="text-ink-2">
              What I actually use, and what failed. Only useful if it is honest about the second
              part.
            </p>
          </Measure>
          <dl className="border-rule mt-7 border-t">
            {activity.gear.map((g) => (
              <div
                key={g.category}
                className="border-rule grid gap-x-8 gap-y-1 border-b py-4 sm:grid-cols-[11rem_minmax(0,1fr)]"
              >
                <dt className="label pt-1">{g.category}</dt>
                <dd>
                  <span className="font-display text-lg">{g.item}</span>
                  {g.note && <span className="text-ink-2 block text-sm">{g.note}</span>}
                </dd>
              </div>
            ))}
          </dl>
        </Section>
      )}
    </>
  );
}
