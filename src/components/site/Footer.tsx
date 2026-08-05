import Link from "next/link";
import { NAV, SITE, SOCIALS } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-rule mt-24 border-t">
      <div className="mx-auto grid max-w-[76rem] gap-10 px-5 py-12 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-display text-h3">{SITE.tagline}</p>
          <p className="text-ink-2 mt-2 max-w-[38ch] text-sm">
            {SITE.name}, {SITE.location}. Best way to reach me is email.
          </p>
          <a
            href={`mailto:${SITE.email}`}
            className="text-accent-ink mt-4 inline-block font-mono text-sm underline underline-offset-2"
          >
            {SITE.email}
          </a>
        </div>

        <nav aria-label="Footer">
          <h2 className="label mb-3">Pages</h2>
          <ul className="space-y-1.5">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-ink-2 hover:text-accent text-sm">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="label mb-3">Elsewhere</h2>
          <ul className="space-y-1.5">
            {SOCIALS.map((s) => (
              <li key={s.href}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="me noopener noreferrer"
                  className="text-ink-2 hover:text-accent text-sm"
                >
                  {s.label} <span className="text-ink-3 font-mono text-xs">{s.handle}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-rule border-t">
        <div className="text-ink-3 mx-auto flex max-w-[76rem] flex-wrap gap-x-6 gap-y-1 px-5 py-4 font-mono text-[0.62rem] tracking-[0.14em] uppercase sm:px-8">
          <span>
            &copy; {new Date().getUTCFullYear()} {SITE.name}
          </span>
          <span>Built with Next.js and Tailwind</span>
          <a
            href="https://github.com/connorholm/portfolio-website"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent"
          >
            Source
          </a>
        </div>
      </div>
    </footer>
  );
}
