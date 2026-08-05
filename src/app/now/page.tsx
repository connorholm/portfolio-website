import type { Metadata } from "next";
import { Measure, PageHeader, Section } from "@/components/ui/Section";
import { ACTIVITIES, CURRENT_BLOCK, NEXT_RACE } from "@/data/activities";
import { NEXT_TRIP } from "@/data/travel";
import { formatDate, formatMonth } from "@/lib/format";

export const metadata: Metadata = {
  title: "Now",
  description: "What has my attention this month.",
};

/**
 * A /now page, in the nownownow.com sense. The date at the top is the whole
 * point — it is what separates "current" from "abandoned in 2023".
 *
 * TODO(connor): update LAST_UPDATED whenever you edit this page.
 */
const LAST_UPDATED = "2026-08-01";

/** Joins a list as "a, b and c". */
function sentenceList(items: readonly string[]): string {
  if (items.length <= 1) return items[0] ?? "nothing, apparently";
  return `${items.slice(0, -1).join(", ")} and ${items[items.length - 1]}`;
}

export default function NowPage() {
  const month = new Date().getUTCMonth() + 1;
  const inSeason = sentenceList(
    ACTIVITIES.filter((a) => a.months.includes(month)).map((a) => a.name.toLowerCase()),
  );

  return (
    <>
      <PageHeader
        eyebrow={`Updated ${formatMonth(LAST_UPDATED)}`}
        title="What I'm doing now"
        lede="A snapshot rather than an archive. If it is more than a couple of months stale, assume it has moved on."
      />

      <Section rail="Work" note="Day to day">
        <h2 className="text-h2">Building</h2>
        <Measure className="mt-4">
          <p className="text-ink-2">
            Running <strong className="text-ink">Vantix Strategies</strong>, a firm of forward
            deployed engineers who embed with client teams and ship production AI systems — RAG
            pipelines, agents, and data platforms — in under six weeks.
          </p>
          <p className="text-ink-2 mt-3">
            At <strong className="text-ink">UnitedHealthcare</strong>, building the enterprise AI
            observability platform and a natural-language benefits API, both leaning on MCP servers
            for agentic capability.
          </p>
        </Measure>
      </Section>

      <Section rail="Activities" note="In season">
        <h2 className="text-h2">Outside</h2>
        <Measure className="mt-4">
          {/* Derived from the season data rather than written out, so this
              paragraph stays true as the months roll over. */}
          <p className="text-ink-2">
            In season right now: <strong className="text-ink">{inSeason}</strong>.
          </p>
          <p className="text-ink-2 mt-3">
            Building toward <strong className="text-ink">{CURRENT_BLOCK.goal}</strong>.{" "}
            {CURRENT_BLOCK.focus}
          </p>
          {NEXT_RACE && (
            <p className="tabular text-ink-2 mt-3 font-mono text-sm">
              Next start line: {NEXT_RACE.name} — {formatDate(NEXT_RACE.date)}
            </p>
          )}
        </Measure>
      </Section>

      <Section rail="Travel" note="Next">
        <h2 className="text-h2">Going</h2>
        <Measure className="mt-4">
          <p className="text-ink-2">
            <strong className="text-ink">{NEXT_TRIP.destination}</strong> — {NEXT_TRIP.when}.
          </p>
        </Measure>
      </Section>

      <Section rail="Reading" note="Optional">
        <h2 className="text-h2">Reading</h2>
        <Measure className="mt-4">
          <p className="text-ink-2">
            <strong className="text-ink">PLACEHOLDER</strong> — one or two books. Disproportionate
            personality per byte, and the easiest line on the site to keep current.
          </p>
        </Measure>
      </Section>
    </>
  );
}
