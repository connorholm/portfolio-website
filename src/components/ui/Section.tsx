import type { ReactNode } from "react";

export function Shell({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto max-w-[76rem] px-5 sm:px-8 ${className}`}>{children}</div>;
}

/**
 * The page's structural unit: a sticky marginalia rail on the left carrying the
 * section name, and the content to its right. Below 940px the rail collapses to
 * a label above the content.
 */
export function Section({
  rail,
  note,
  children,
  className = "",
  divider = true,
  id,
}: {
  /** Short section name for the rail. */
  rail: string;
  /** Second line under the rail label. */
  note?: string;
  children: ReactNode;
  className?: string;
  divider?: boolean;
  id?: string;
}) {
  return (
    <section id={id} className={divider ? "border-rule border-t" : undefined}>
      <Shell>
        <div
          className={`reveal grid gap-x-10 py-14 md:py-20 lg:grid-cols-[9.5rem_minmax(0,1fr)] ${className}`}
        >
          <div className="mb-6 lg:sticky lg:top-24 lg:mb-0 lg:self-start">
            <p className="text-accent font-mono text-[0.68rem] tracking-[0.14em] uppercase">
              {rail}
            </p>
            {note && (
              <p className="text-ink-3 font-mono text-[0.66rem] tracking-[0.1em] uppercase">
                {note}
              </p>
            )}
          </div>
          <div className="min-w-0">{children}</div>
        </div>
      </Shell>
    </section>
  );
}

/** Constrains running text to a comfortable measure. */
export function Measure({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`max-w-[68ch] ${className}`}>{children}</div>;
}

/** Standard top-of-page block for the section landing pages. */
export function PageHeader({
  eyebrow,
  title,
  lede,
  children,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
  children?: ReactNode;
}) {
  return (
    <Shell className="pt-14 pb-4 md:pt-20">
      <p className="label mb-4">{eyebrow}</p>
      <h1 className="text-h1 max-w-[18ch]">{title}</h1>
      {lede && <p className="text-lede text-ink-2 mt-5 max-w-[62ch]">{lede}</p>}
      {children}
    </Shell>
  );
}
