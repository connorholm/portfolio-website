import Link from "next/link";
import { STATUS } from "@/data/site";
import { formatMonth } from "@/lib/format";

/**
 * Three dated cells under the hero. A visible date stamp is what makes a
 * personal site read as current — an undated page always reads as abandoned,
 * however recently it was touched.
 */
export function StatusStrip() {
  return (
    <div className="hairline-grid border-rule grid grid-cols-1 border sm:grid-cols-3">
      {STATUS.map((cell) => (
        <div key={cell.key} className="bg-panel px-4 py-4">
          <p className="label">{cell.key}</p>
          <p className="font-display mt-1.5 text-lg leading-snug">{cell.value}</p>
          <p className="text-ink-2 mt-1 text-sm">{cell.detail}</p>
          <p className="text-ink-3 mt-2 font-mono text-[0.62rem] tracking-[0.1em] uppercase">
            Updated {formatMonth(cell.since)}
          </p>
        </div>
      ))}
      <p className="bg-panel col-span-full px-4 py-2.5">
        <Link
          href="/now"
          className="text-accent-ink font-mono text-[0.66rem] tracking-[0.12em] uppercase hover:underline"
        >
          The longer version, on /now →
        </Link>
      </p>
    </div>
  );
}
