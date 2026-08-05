import Image from "next/image";
import { presentPhotos, type Photo } from "@/lib/photos";

/**
 * A small set of photographs with real captions — a photo essay rather than a
 * contact sheet. Renders nothing at all when none of the files are present, so
 * a trip without imagery simply reads as text.
 */
export function PhotoGrid({
  photos,
  className = "",
  priority = false,
}: {
  photos: readonly Photo[] | undefined;
  className?: string;
  priority?: boolean;
}) {
  const present = presentPhotos(photos);
  if (present.length === 0) return null;

  return (
    <ul className={`grid gap-3 ${present.length > 1 ? "sm:grid-cols-2" : "max-w-md"} ${className}`}>
      {present.map((photo, i) => (
        <li key={photo.src} className="border-rule bg-panel border">
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              priority={priority && i === 0}
              sizes="(max-width: 640px) 100vw, 24rem"
              className="object-cover"
            />
          </div>
          {photo.caption && (
            <p className="border-rule text-ink-3 border-t px-3 py-2 font-mono text-[0.64rem] tracking-[0.1em] uppercase">
              {photo.caption}
            </p>
          )}
        </li>
      ))}
    </ul>
  );
}
