import type { Metadata } from "next";
import Link from "next/link";
import { SeasonBand } from "@/components/activities/SeasonBand";
import { Measure, PageHeader, Section } from "@/components/ui/Section";
import { Stats } from "@/components/ui/Stats";
import { ACTIVITIES, NEXT_RACE } from "@/data/activities";
import { daysUntil, formatDate } from "@/lib/format";

export const metadata: Metadata = {
  title: "Activities",
  description:
    "Ultrarunning, Nordic skiing, hiking, and pickleball — what I do when I am not at a desk.",
};

export default function ActivitiesPage() {
  const countdown = NEXT_RACE ? daysUntil(NEXT_RACE.date) : null;

  return (
    <>
      <PageHeader
        eyebrow="Activities"
        title="What I do when I'm not at a desk"
        lede="Four of them, running the deepest. Some are seasonal and some are year-round, which is most of the reason there are four."
      />

      <Section rail="The year" note="What's in season">
        <h2 className="text-h2">A year, roughly</h2>
        <Measure className="mt-4">
          <p className="text-ink-2">
            Minnesota does most of the scheduling. Skiing takes the months running cannot use,
            hiking fills the long summer days, and pickleball is the one that does not care what
            month it is.
          </p>
        </Measure>
        <div className="mt-7">
          <SeasonBand activities={ACTIVITIES} />
        </div>

        {NEXT_RACE && (
          <div className="border-accent bg-accent-wash mt-6 border px-5 py-4">
            <p className="label mb-1">Next start line</p>
            <p className="font-display text-h3">{NEXT_RACE.name}</p>
            <p className="tabular text-ink-2 mt-1 font-mono text-sm">
              {NEXT_RACE.distance} mi · {NEXT_RACE.location} · {formatDate(NEXT_RACE.date)}
              {countdown !== null && countdown >= 0 && ` · ${countdown} days out`}
            </p>
          </div>
        )}
      </Section>

      {ACTIVITIES.map((activity) => (
        <Section
          key={activity.slug}
          rail={activity.name}
          note={`Since ${activity.since}`}
          id={activity.slug}
        >
          <div className="flex flex-wrap items-baseline justify-between gap-4">
            <h2 className="text-h2">{activity.name}</h2>
            <Link
              href={`/activities/${activity.slug}`}
              className="text-accent-ink font-mono text-[0.68rem] tracking-[0.13em] uppercase hover:underline"
            >
              More →
            </Link>
          </div>

          <Measure className="mt-3">
            <p className="text-ink font-display text-h3">{activity.tagline}</p>
            <p className="text-ink-2 mt-3">{activity.summary}</p>
          </Measure>

          {activity.stats.length > 0 && <Stats stats={activity.stats} className="mt-7" />}
        </Section>
      ))}
    </>
  );
}
