import Image from "next/image";
import { HERO_IMAGE } from "@/data/site";
import { hasPhoto } from "@/lib/photos";

/** True when a real hero photograph is present, so layouts can adapt. */
export const HAS_PORTRAIT = hasPhoto(HERO_IMAGE?.src);

/**
 * The hero image slot.
 *
 * Renders the photograph when the file exists, and nothing at all when it does
 * not — the hero then collapses to a single column and reads as a deliberate
 * typographic opening. What it never does is ship a broken image or fall back
 * to an old photo.
 */
export function Portrait({ className = "" }: { className?: string }) {
  if (!HERO_IMAGE || !HAS_PORTRAIT) return null;

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
