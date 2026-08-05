import { existsSync } from "node:fs";
import path from "node:path";

/**
 * Whether a photo actually exists in /public.
 *
 * Checked at build time, from server components only. Photos are referenced by
 * path in the data files before the files themselves land, so this keeps the
 * pages correct in the meantime: a missing image is simply not rendered rather
 * than shipping a broken <img> that 404s. Drop the file in and it appears on
 * the next build, with no code change.
 */
export function hasPhoto(src: string | undefined): src is string {
  if (!src) return false;
  return existsSync(path.join(process.cwd(), "public", src.replace(/^\//, "")));
}

export type Photo = {
  src: string;
  alt: string;
  /** Shown under the image where the layout allows for it. */
  caption?: string;
};

/** Filters a list down to the photos that are actually present. */
export function presentPhotos(photos: readonly Photo[] | undefined): Photo[] {
  if (!photos) return [];
  return photos.filter((p) => hasPhoto(p.src));
}
