import Link from "next/link";
import type { Activity } from "@/data/activities";

const MONTHS = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"] as const;
const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
] as const;

/**
 * The year at a glance: which pursuits are live in which months.
 *
 * This is the one view that makes several activities read as a single life
 * rather than a list — the overlaps and the handoffs (skiing into running,
 * pickleball straight through) are the actual information.
 */
export function SeasonBand({ activities }: { activities: readonly Activity[] }) {
  const currentMonth = new Date().getUTCMonth() + 1;

  return (
    <div className="border-rule bg-panel overflow-x-auto border">
      <table className="w-full min-w-[34rem] border-collapse">
        <caption className="sr-only">
          Which activities are in season in each month of the year
        </caption>
        <thead>
          <tr>
            <th scope="col" className="border-rule text-ink-3 label border-b px-3 py-2 text-left">
              Season
            </th>
            {MONTHS.map((m, i) => (
              <th
                key={`${m}-${i}`}
                scope="col"
                className={`border-rule w-[6%] border-b px-0 py-2 text-center font-mono text-[0.62rem] ${
                  i + 1 === currentMonth ? "text-accent" : "text-ink-3"
                }`}
              >
                <abbr title={MONTH_NAMES[i]} className="no-underline">
                  {m}
                </abbr>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {activities.map((activity) => {
            const inSeason = new Set(activity.months);
            return (
              <tr key={activity.slug} className="border-rule border-b last:border-b-0">
                <th scope="row" className="px-3 py-2.5 text-left">
                  <Link
                    href={`/activities/${activity.slug}`}
                    className="font-display hover:text-accent font-500 text-base whitespace-nowrap"
                  >
                    {activity.name}
                  </Link>
                </th>
                {MONTHS.map((_, i) => {
                  const month = i + 1;
                  const on = inSeason.has(month);
                  const now = month === currentMonth;
                  return (
                    <td key={month} className="px-0.5 py-2.5 text-center align-middle">
                      <span
                        className={`mx-auto block h-3.5 ${
                          on ? (now ? "bg-accent" : "bg-accent/35") : now ? "bg-rule" : "bg-rule/40"
                        }`}
                        title={`${activity.name}, ${MONTH_NAMES[i]}: ${on ? "in season" : "off"}`}
                      />
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <p className="border-rule text-ink-3 border-t px-3 py-2 font-mono text-[0.62rem] tracking-[0.1em] uppercase">
        Filled = in season · the highlighted column is this month
      </p>
    </div>
  );
}
