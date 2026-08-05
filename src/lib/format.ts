/** Dates are formatted in UTC so a static build and a client hydrate agree. */
const UTC = { timeZone: "UTC" } as const;

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    ...UTC,
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function formatMonth(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    ...UTC,
    year: "numeric",
    month: "long",
  });
}

export function formatShortMonth(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    ...UTC,
    year: "numeric",
    month: "short",
  });
}

/** "June 14 – 28, 2026" when the months match, otherwise both months. */
export function formatDateRange(startIso: string, endIso: string): string {
  const start = new Date(startIso);
  const end = new Date(endIso);
  const sameMonth =
    start.getUTCFullYear() === end.getUTCFullYear() && start.getUTCMonth() === end.getUTCMonth();

  if (sameMonth) {
    const month = start.toLocaleDateString("en-US", { ...UTC, month: "long" });
    return `${month} ${start.getUTCDate()}–${end.getUTCDate()}, ${end.getUTCFullYear()}`;
  }

  const startPart = start.toLocaleDateString("en-US", { ...UTC, month: "long", day: "numeric" });
  const endPart = end.toLocaleDateString("en-US", {
    ...UTC,
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  return `${startPart} – ${endPart}`;
}

export function formatNumber(n: number): string {
  return n.toLocaleString("en-US");
}

/**
 * Whole days from `from` until `iso`. Negative once the date has passed.
 * Computed against UTC midnight so it does not flicker across a build boundary.
 */
export function daysUntil(iso: string, from: Date = new Date()): number {
  const target = Date.parse(`${iso.slice(0, 10)}T00:00:00Z`);
  const today = Date.UTC(from.getUTCFullYear(), from.getUTCMonth(), from.getUTCDate());
  return Math.round((target - today) / 86_400_000);
}
