"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/site/ThemeToggle";
import { NAV, SITE } from "@/data/site";

export function Header() {
  const pathname = usePathname();

  // The menu stores *which route* it was opened on rather than a boolean, so
  // navigating away closes it as a matter of derivation — no effect, and no
  // window where the menu is open over the wrong page.
  const [openedOn, setOpenedOn] = useState<string | null>(null);
  const open = openedOn === pathname;
  const close = () => setOpenedOn(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenedOn(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="border-rule bg-ground/85 sticky top-0 z-40 border-b backdrop-blur-sm">
      <div className="mx-auto flex max-w-[76rem] items-center gap-4 px-5 py-3 sm:px-8">
        <Link
          href="/"
          className="group font-display font-600 flex items-baseline gap-2 text-xl tracking-tight"
        >
          <span>{SITE.name}</span>
          <span
            aria-hidden="true"
            className="text-ink-3 group-hover:text-accent xs:inline hidden font-mono text-[0.6rem] tracking-[0.16em] uppercase transition-colors"
          >
            {SITE.domain}
          </span>
        </Link>

        <nav aria-label="Primary" className="ml-auto hidden lg:block">
          <ul className="flex items-center gap-6">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`hover:text-accent font-mono text-[0.68rem] tracking-[0.14em] uppercase transition-colors ${
                    isActive(item.href) ? "text-accent" : "text-ink-2"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-2 lg:ml-4">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => (open ? close() : setOpenedOn(pathname))}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="border-rule text-ink-3 hover:border-accent hover:text-accent cursor-pointer border px-2 py-1 font-mono text-[0.62rem] tracking-[0.14em] uppercase transition-colors lg:hidden"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Primary"
          className="border-rule bg-ground border-t lg:hidden"
        >
          <ul className="mx-auto max-w-[76rem] px-5 py-2 sm:px-8">
            {NAV.map((item) => (
              <li key={item.href} className="border-rule border-b last:border-b-0">
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className="flex flex-col gap-0.5 py-3"
                >
                  <span
                    className={`font-display text-lg ${isActive(item.href) ? "text-accent" : ""}`}
                  >
                    {item.label}
                  </span>
                  <span className="text-ink-3 font-mono text-[0.66rem] tracking-[0.08em]">
                    {item.blurb}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
