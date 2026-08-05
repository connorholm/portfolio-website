import Image from "next/image";
import { HERO_IMAGE, SITE } from "@/data/site";

/**
 * The hero image slot.
 *
 * Three states, in order of preference: a real photograph; nothing at all
 * (the hero collapses to a single column and reads as a deliberate
 * typographic opening); or, while the site is still in draft, a labelled
 * frame so the missing asset stays visible to whoever is building it.
 *
 * What it never does is fall back to an old photo.
 */
export function Portrait({ className = "" }: { className?: string }) {
  if (HERO_IMAGE) {
    return (
      <div
        className={`border-rule bg-panel relative aspect-[4/5] overflow-hidden border ${className}`}
      >
        <Image
          src={HERO_IMAGE.src}
          alt={HERO_IMAGE.alt}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 40vw"
          className="object-cover"
        />
      </div>
    );
  }

  if (SITE.contentStatus === "live") return null;

  return (
    <div
      className={`border-rule bg-panel flex aspect-[4/5] flex-col justify-end border border-dashed p-5 ${className}`}
    >
      <p className="label mb-1">Photograph</p>
      <p className="text-ink-2 max-w-[30ch] text-sm">
        A current photo of you goes here — on a trail, mid-race, or somewhere far from home. Set{" "}
        <span className="text-survey font-mono text-xs">HERO_IMAGE</span> in{" "}
        <span className="text-survey font-mono text-xs">src/data/site.ts</span>.
      </p>
    </div>
  );
}

/** True when the hero should lay out as a single column. */
export const HAS_PORTRAIT = HERO_IMAGE !== null || SITE.contentStatus !== "live";
