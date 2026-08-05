import type { RaceStatus } from "@/data/activities";

const STATUS_STYLE: Record<RaceStatus, string> = {
  finished: "border-survey text-survey",
  dnf: "border-accent text-accent",
  upcoming: "border-ink-3 text-ink-3",
};

const STATUS_LABEL: Record<RaceStatus, string> = {
  finished: "Finished",
  dnf: "DNF",
  upcoming: "Upcoming",
};

/** State encoded in form as well as text, so a race log scans at a glance. */
export function StatusChip({ status }: { status: RaceStatus }) {
  return (
    <span
      className={`inline-block border px-1.5 py-0.5 font-mono text-[0.6rem] tracking-[0.12em] uppercase ${STATUS_STYLE[status]}`}
    >
      {STATUS_LABEL[status]}
    </span>
  );
}

export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="border-rule text-ink-3 inline-block border px-1.5 py-0.5 font-mono text-[0.6rem] tracking-[0.1em] uppercase">
      {children}
    </span>
  );
}
