import type { MetadataRoute } from "next";
import { getPosts } from "@/lib/content";
import { ACTIVITIES } from "@/data/activities";
import { NAV, SITE } from "@/data/site";

export const dynamic = "force-static";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPosts();
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
    { url: `${SITE.url}/travel/iceland`, lastModified: now, priority: 0.6 },
    ...posts.map((post) => ({
      url: `${SITE.url}/writing/${post.slug}`,
      lastModified: new Date(post.date),
      priority: 0.6,
    })),
  ];
}
