import type { Metadata } from "next";
import { Portrait } from "@/components/site/Portrait";
import { Timeline, ThreadKey } from "@/components/about/Timeline";
import { Measure, PageHeader, Section } from "@/components/ui/Section";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "The longer version: how the engineering, the time outside, and the travel fit together.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="The long version, in order"
        lede="Three threads that look separate on a résumé and are not separate at all."
      />

      <Section rail="Bio" note="Who I am">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_18rem]">
          <Measure>
            <h2 className="sr-only">Biography</h2>
            <div className="text-ink-2 space-y-4">
              <p>
                I&rsquo;m a software engineer in {SITE.location}. I started writing code in a
                high-school Java class in 2018, discovered I could put things on the App Store, and
                never really stopped. Most of what I do now sits somewhere in machine learning —
                vision models, OCR, and the unglamorous engineering that makes them usable on real,
                messy input rather than a clean benchmark.
              </p>
              <p>
                These days that splits two ways. I founded{" "}
                <a
                  href="https://www.vantixstrategies.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-ink underline underline-offset-2"
                >
                  Vantix Strategies
                </a>
                , a boutique firm of forward deployed engineers who embed inside client teams and
                ship production AI systems — not strategy decks — in under six weeks, with the
                client owning the IP. And I&rsquo;m an AI Engineer at UnitedHealthcare, where I
                built an observability platform spanning legacy and cloud-native systems, and a
                benefits API that lets internal agents retrieve member data in natural language
                through MCP servers.
              </p>
              <p>
                Outside of that I run — far enough that it requires planning rather than enthusiasm
                — and I ski, hike, and play a fair amount of pickleball, usually somewhere I
                haven&rsquo;t been before. The ultras in particular are not a sideline to the
                engineering. A hundred-mile race and a multi-year project reward the same narrow
                skill: staying with something whose payoff is a long way off, and managing yourself
                well enough to still be functional at the end.
              </p>
              <p>
                I studied computer science at the University of Minnesota — a BS in 2024, then a
                master&rsquo;s alongside full-time work, finished in 2025. Before all that I built
                apps for my high school, won the Congressional App Challenge for Minnesota&rsquo;s
                third district, and spent an unreasonable amount of time on a 3D iOS game.
              </p>
            </div>
          </Measure>
          <Portrait />
        </div>
      </Section>

      <Section rail="Timeline" note="All three threads">
        <h2 className="text-h2">In order</h2>
        <Measure className="mt-4">
          <p className="text-ink-2">
            Work, activities, and travel on one line rather than three. This is the clearest
            argument the site makes: it is one chronology.
          </p>
        </Measure>
        <div className="mt-6">
          <ThreadKey />
        </div>
        <div className="mt-8">
          <Timeline />
        </div>
      </Section>

      <Section rail="Contact" note="Say hello">
        <h2 className="text-h2">Get in touch</h2>
        <Measure className="mt-4">
          <p className="text-ink-2">
            Email is the reliable route. I answer most things, eventually.
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
