import Link from "next/link";
import { WorldMap } from "@/components/charts/WorldMap";
import { Portrait } from "@/components/site/Portrait";
import { StatusStrip } from "@/components/site/StatusStrip";
import { Measure, Section, Shell } from "@/components/ui/Section";
import { Stats } from "@/components/ui/Stats";
import { ProjectCard } from "@/components/work/ProjectCard";
import { SeasonBand } from "@/components/activities/SeasonBand";
import { FEATURED_PROJECTS } from "@/data/work";
import { ACTIVITIES, NEXT_RACE } from "@/data/activities";
import { SITE } from "@/data/site";
import { RECENT_TRIPS, TRAVEL_TOTALS, VISITED_COUNTRY_IDS } from "@/data/travel";
import { getPosts, TAG_LABEL } from "@/lib/content";
import { daysUntil, formatDate, formatDateRange } from "@/lib/format";

export default async function HomePage() {
  const posts = (await getPosts()).slice(0, 3);
  const countdown = NEXT_RACE ? daysUntil(NEXT_RACE.date) : null;

  return (
    <>
      {/* ---------- Hero ---------- */}
      <Shell className="pt-14 pb-16 md:pt-24">
        <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,1fr)_22rem]">
          <div>
            <p className="label mb-5">{SITE.location}</p>
            <h1 className="text-display max-w-[14ch]">{SITE.tagline}</h1>
            <Measure className="mt-7">
              <p className="text-lede text-ink-2">
                I&rsquo;m Connor. I build software — mostly machine learning and the things around
                it. The rest of the time I&rsquo;m running very long distances, on skis, up a trail,
                or on a pickleball court, and fairly often somewhere I haven&rsquo;t been before.
                This site is all of it, not just the part that fits on a résumé.
              </p>
            </Measure>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
              <Link
                href="/about"
                className="text-accent-ink font-mono text-[0.7rem] tracking-[0.14em] uppercase hover:underline"
              >
                The long version →
              </Link>
              <a
                href={`mailto:${SITE.email}`}
                className="text-ink-3 hover:text-accent font-mono text-[0.7rem] tracking-[0.14em] uppercase"
              >
                Say hello →
              </a>
            </div>
          </div>
          <Portrait />
        </div>

        <div className="mt-14">
          <StatusStrip />
        </div>
      </Shell>

      {/* ---------- Selected work ---------- */}
      <Section rail="Work" note="Three of them" id="work">
        <div className="flex flex-wrap items-baseline justify-between gap-4">
          <h2 className="text-h2">What I build</h2>
          <Link
            href="/work"
            className="text-accent-ink font-mono text-[0.68rem] tracking-[0.13em] uppercase hover:underline"
          >
            All work →
          </Link>
        </div>
        <Measure className="mt-4">
          <p className="text-ink-2">
            Machine learning that has to survive contact with messy real input, and mobile apps that
            had to pass review and then keep working. Three below; the rest, including the old
            high-school stuff, is on the work page.
          </p>
        </Measure>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {FEATURED_PROJECTS.map((p, i) => (
            <ProjectCard key={p.slug} project={p} priority={i === 0} />
          ))}
        </div>
      </Section>

      {/* ---------- Activities ---------- */}
      <Section rail="Activities" note="Off the desk" id="activities">
        <div className="flex flex-wrap items-baseline justify-between gap-4">
          <h2 className="text-h2">The rest of the week</h2>
          <Link
            href="/activities"
            className="text-accent-ink font-mono text-[0.68rem] tracking-[0.13em] uppercase hover:underline"
          >
            All activities →
          </Link>
        </div>
        <Measure className="mt-4">
          <p className="text-ink-2">
            Ultras take the most planning and give back the most; the others fill in around them.
            Minnesota does most of the scheduling.
          </p>
        </Measure>

        <div className="mt-7">
          <SeasonBand activities={ACTIVITIES} />
        </div>

        {NEXT_RACE && (
          <p className="text-ink-2 mt-5 font-mono text-sm">
            <span className="text-accent">Next start line:</span> {NEXT_RACE.name} ·{" "}
            {NEXT_RACE.distance} mi · {formatDate(NEXT_RACE.date)}
            {countdown !== null && countdown >= 0 && (
              <span className="tabular text-ink-3"> · {countdown} days out</span>
            )}
          </p>
        )}
      </Section>

      {/* ---------- Travel ---------- */}
      <Section rail="Travel" note="Where" id="travel">
        <div className="flex flex-wrap items-baseline justify-between gap-4">
          <h2 className="text-h2">Places I&rsquo;ve been</h2>
          <Link
            href="/travel"
            className="text-accent-ink font-mono text-[0.68rem] tracking-[0.13em] uppercase hover:underline"
          >
            Trip logs →
          </Link>
        </div>

        <Stats
          stats={TRAVEL_TOTALS.map((t) => ({ label: t.label, value: t.value }))}
          className="mt-7"
        />

        <div className="mt-8">
          <WorldMap
            visitedIds={VISITED_COUNTRY_IDS}
            markers={RECENT_TRIPS.map((t) => ({
              id: t.slug,
              label: t.title,
              coords: t.coords,
              href: "/travel/",
            }))}
          />
        </div>

        <ul className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">
          {RECENT_TRIPS.slice(0, 4).map((t) => (
            <li key={t.slug} className="border-rule border-t pt-3">
              <p className="font-display text-lg">{t.title}</p>
              <p className="text-ink-3 font-mono text-[0.66rem] tracking-[0.1em] uppercase">
                {t.country} · {formatDateRange(t.start, t.end)}
                {t.ranThere && " · ran there"}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      {/* ---------- Writing ---------- */}
      <Section rail="Writing" note="One feed" id="writing">
        <div className="flex flex-wrap items-baseline justify-between gap-4">
          <h2 className="text-h2">Recently written</h2>
          <Link
            href="/writing"
            className="text-accent-ink font-mono text-[0.68rem] tracking-[0.13em] uppercase hover:underline"
          >
            All writing →
          </Link>
        </div>

        {posts.length === 0 ? (
          <p className="text-ink-2 mt-6">
            Nothing published yet. Drop an{" "}
            <span className="text-survey font-mono text-sm">.mdx</span> file into{" "}
            <span className="text-survey font-mono text-sm">src/content/writing/</span> and it shows
            up here.
          </p>
        ) : (
          <ul className="mt-7">
            {posts.map((post) => (
              <li key={post.slug} className="border-rule last:border-rule border-t last:border-b">
                <Link href={`/writing/${post.slug}`} className="group block py-5">
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                    <span className="text-accent font-mono text-[0.64rem] tracking-[0.13em] uppercase">
                      {TAG_LABEL[post.tag]}
                    </span>
                    <span className="tabular text-ink-3 font-mono text-[0.64rem]">
                      {formatDate(post.date)}
                    </span>
                  </div>
                  <p className="text-h3 group-hover:text-accent mt-1">{post.title}</p>
                  <p className="text-ink-2 mt-1 max-w-[62ch]">{post.summary}</p>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </Section>

      {/* ---------- Contact ---------- */}
      <Section rail="Contact" note="Say hello" divider>
        <h2 className="text-h2">Get in touch</h2>
        <Measure className="mt-4">
          <p className="text-ink-2">
            I like hearing from people — about a project, a race, a route worth running somewhere I
            haven&rsquo;t been, or nothing in particular. Email is best.
          </p>
        </Measure>
        <a
          href={`mailto:${SITE.email}`}
          className="border-accent text-accent-ink hover:bg-accent hover:text-ground mt-6 inline-block border px-5 py-2.5 font-mono text-sm transition-colors"
        >
          {SITE.email}
        </a>
      </Section>
    </>
  );
}
