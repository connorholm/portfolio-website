import type { MetadataRoute } from "next";
import { ACTIVITIES } from "@/data/activities";
import { NAV, SITE } from "@/data/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    { url: `${SITE.url}/`, lastModified: now, priority: 1 },
    ...NAV.map((item) => ({
      url: `${SITE.url}${item.href}`,
      lastModified: now,
      priority: 0.8,
    })),
    ...ACTIVITIES.map((a) => ({
      url: `${SITE.url}/activities/${a.slug}`,
      lastModified: now,
      priority: 0.6,
    })),
  ];
}
