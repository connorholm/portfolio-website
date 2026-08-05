import { SITE } from "@/data/site";

/**
 * Guardrail. While src/data/* still contains PLACEHOLDER rows, every page says
 * so — nothing invented can quietly ship as fact. Flip SITE.contentStatus to
 * "live" once the real content is in and this disappears entirely.
 */
export function DraftNotice() {
  if (SITE.contentStatus !== "draft") return null;

  return (
    <div className="border-accent bg-accent-wash border-b">
      <p className="text-accent-ink mx-auto max-w-[76rem] px-5 py-2 font-mono text-[0.64rem] leading-relaxed tracking-[0.1em] uppercase sm:px-8">
        Draft — activity and travel content is placeholder data. Work and roles are real. Replace
        the PLACEHOLDER entries in <span className="normal-case">src/data/</span>, then set
        contentStatus to &ldquo;live&rdquo;.
      </p>
    </div>
  );
}
