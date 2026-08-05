import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, IBM_Plex_Mono, Source_Serif_4 } from "next/font/google";
import { ContourField } from "@/components/site/ContourField";
import { DraftNotice } from "@/components/site/DraftNotice";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { SITE } from "@/data/site";
import "./globals.css";

/* Display: a condensed grotesque — the face of map labels and race bibs. */
const display = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-barlow-condensed",
  display: "swap",
});

/* Body: a book serif, because the running and travel writing is long-form. */
const body = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
  display: "swap",
});

/* Data: mono with real tabular figures, for every number on the site. */
const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.title,
    template: `%s — ${SITE.name}`,
  },
  description: SITE.description,
  openGraph: {
    type: "website",
    siteName: SITE.name,
    title: SITE.title,
    description: SITE.description,
    url: SITE.url,
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#e4e5df" },
    { media: "(prefers-color-scheme: dark)", color: "#121412" },
  ],
};

/** Runs before paint so the stored theme is applied without a flash. */
const BOOT = `(function(){try{var t=localStorage.getItem("theme");if(t==="dark"||t==="light"){document.documentElement.setAttribute("data-theme",t)}}catch(e){}})()`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE.name,
    url: SITE.url,
    email: `mailto:${SITE.email}`,
    description: SITE.description,
    homeLocation: SITE.location,
  };

  return (
    // The font variables must land on <html>: Tailwind's @theme resolves them
    // at :root, so declaring them on <body> leaves every var() reference invalid.
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: BOOT }} />
      </head>
      <body>
        <a
          href="#main"
          className="focus:bg-accent focus:text-ground sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:px-3 focus:py-2 focus:font-mono focus:text-xs focus:tracking-widest focus:uppercase"
        >
          Skip to content
        </a>
        <ContourField />
        <div className="relative z-10 flex min-h-screen flex-col">
          <Header />
          <DraftNotice />
          <main id="main" className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
        />
      </body>
    </html>
  );
}
