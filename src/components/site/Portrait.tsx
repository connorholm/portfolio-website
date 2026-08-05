import Image from "next/image";
import { HERO_IMAGE } from "@/data/site";

/**
 * The hero image slot. When no current photograph is configured this renders
 * a labelled frame rather than falling back to an old one — a visible gap is
 * more useful than a stale portrait, and this design leans hard on real imagery.
 */
export function Portrait({ className = "" }: { className?: string }) {
  if (!HERO_IMAGE) {
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
