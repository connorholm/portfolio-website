import { THREAD_LABEL, TIMELINE_SORTED, type Thread } from "@/data/timeline";

/**
 * One timeline, three threads, interleaved. The colour-coded gutter is doing
 * the arguing: work, running, and travel are one chronology, not three tabs.
 */

const THREAD_DOT: Record<Thread, string> = {
  work: "bg-accent",
  activity: "bg-survey",
  travel: "bg-ink-3",
};

const THREAD_TEXT: Record<Thread, string> = {
  work: "text-accent",
  activity: "text-survey",
  travel: "text-ink-3",
};

export function ThreadKey() {
  return (
    <ul className="flex flex-wrap gap-x-5 gap-y-1.5">
      {(Object.keys(THREAD_LABEL) as Thread[]).map((t) => (
        <li key={t} className="flex items-center gap-2">
          <span aria-hidden="true" className={`inline-block h-2 w-2 ${THREAD_DOT[t]}`} />
          <span className="text-ink-3 font-mono text-[0.66rem] tracking-[0.12em] uppercase">
            {THREAD_LABEL[t]}
          </span>
        </li>
      ))}
    </ul>
  );
}

export function Timeline() {
  return (
    <ol className="border-rule relative border-l">
      {TIMELINE_SORTED.map((entry, i) => {
        // The year heading prints once per year. Derived from the neighbour
        // rather than carried in a mutable cursor, so the map stays pure.
        const showYear = TIMELINE_SORTED[i - 1]?.year !== entry.year;

        return (
          <li key={`${entry.year}-${i}`} className="relative pb-6 pl-6 last:pb-0">
            <span
              aria-hidden="true"
              className={`absolute top-2 -left-[4.5px] h-2 w-2 ${THREAD_DOT[entry.thread]}`}
            />
            {showYear && <p className="tabular text-ink mb-1 font-mono text-sm">{entry.year}</p>}
            <p
              className={`font-mono text-[0.62rem] tracking-[0.13em] uppercase ${THREAD_TEXT[entry.thread]}`}
            >
              {THREAD_LABEL[entry.thread]}
            </p>
            <p className="text-ink-2 mt-0.5 max-w-[58ch]">{entry.text}</p>
          </li>
        );
      })}
    </ol>
  );
}
