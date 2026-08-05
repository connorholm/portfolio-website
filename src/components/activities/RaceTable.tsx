import { StatusChip } from "@/components/ui/Chip";
import type { Race } from "@/data/activities";
import { formatShortMonth, formatNumber } from "@/lib/format";

export function RaceTable({ races }: { races: readonly Race[] }) {
  return (
    <div className="border-rule overflow-x-auto border">
      <table className="bg-panel w-full min-w-[46rem] border-collapse text-left">
        <caption className="sr-only">Race results, most recent first</caption>
        <thead>
          <tr className="bg-panel-2">
            {["Date", "Race", "Dist", "Vert", "Time", "Place", "Status"].map((h) => (
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
          {races.map((r) => (
            <tr key={r.slug} className="border-rule border-b align-top last:border-b-0">
              <td className="tabular text-ink-3 px-3 py-3 font-mono text-xs whitespace-nowrap">
                {formatShortMonth(r.date)}
              </td>
              <td className="px-3 py-3">
                <span className="font-display text-base">{r.name}</span>
                <span className="text-ink-3 block font-mono text-[0.66rem]">{r.location}</span>
                {r.note && (
                  <span className="text-ink-2 mt-1 block max-w-[42ch] text-sm">{r.note}</span>
                )}
              </td>
              <td className="tabular px-3 py-3 font-mono text-xs whitespace-nowrap">
                {r.distance} mi
              </td>
              <td className="tabular text-ink-2 px-3 py-3 font-mono text-xs whitespace-nowrap">
                {r.vert === null ? (
                  <span className="text-ink-3">—</span>
                ) : (
                  `${formatNumber(r.vert)} ft`
                )}
              </td>
              <td className="tabular px-3 py-3 font-mono text-xs whitespace-nowrap">
                {r.time ?? <span className="text-ink-3">—</span>}
              </td>
              {/* Field sizes are rarely recorded, so a bare placing still shows. */}
              <td className="tabular text-ink-2 px-3 py-3 font-mono text-xs whitespace-nowrap">
                {r.place === null ? (
                  <span className="text-ink-3">—</span>
                ) : r.field === null ? (
                  `${r.place}`
                ) : (
                  `${r.place} / ${r.field}`
                )}
              </td>
              <td className="px-3 py-3 whitespace-nowrap">
                <StatusChip status={r.status} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
