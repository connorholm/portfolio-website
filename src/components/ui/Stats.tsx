export type Stat = {
  label: string;
  value: string;
  note?: string;
};

/**
 * A band of headline numbers. Values are set in the mono face with tabular
 * figures so a column of them lines up, which is the whole point of showing
 * numbers rather than prose.
 */
export function Stats({ stats, className = "" }: { stats: readonly Stat[]; className?: string }) {
  return (
    <dl className={`hairline-grid border-rule grid grid-cols-2 border md:grid-cols-4 ${className}`}>
      {stats.map((s) => (
        <div key={s.label} className="bg-panel px-4 py-5">
          <dt className="label">{s.label}</dt>
          <dd className="tabular text-ink mt-1.5 font-mono text-2xl">{s.value}</dd>
          {s.note && <dd className="text-ink-3 mt-0.5 font-mono text-[0.66rem]">{s.note}</dd>}
        </div>
      ))}
    </dl>
  );
}
