import { readFile, readdir } from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "src", "content");

/** One feed, three subjects — the tag is what keeps them legible together. */
export const POST_TAGS = ["eng", "activity", "travel"] as const;
export type PostTag = (typeof POST_TAGS)[number];

export const TAG_LABEL: Record<PostTag, string> = {
  eng: "Engineering",
  activity: "Activities",
  travel: "Travel",
};

export type PostFrontmatter = {
  title: string;
  date: string;
  tag: PostTag;
  summary: string;
  draft?: boolean;
};

export type Post = PostFrontmatter & {
  slug: string;
  body: string;
  readingMinutes: number;
};

function isPostTag(value: unknown): value is PostTag {
  return typeof value === "string" && (POST_TAGS as readonly string[]).includes(value);
}

function parse(slug: string, raw: string): Post {
  const { data, content } = matter(raw);

  if (typeof data.title !== "string" || typeof data.date !== "string") {
    throw new Error(`Post "${slug}" is missing a title or date in its frontmatter.`);
  }
  if (!isPostTag(data.tag)) {
    throw new Error(`Post "${slug}" needs a tag of ${POST_TAGS.join(", ")}.`);
  }

  const words = content.trim().split(/\s+/).length;

  return {
    slug,
    title: data.title,
    date: data.date,
    tag: data.tag,
    summary: typeof data.summary === "string" ? data.summary : "",
    draft: data.draft === true,
    body: content,
    readingMinutes: Math.max(1, Math.round(words / 220)),
  };
}

/** All published posts, newest first. Drafts are excluded from the build. */
export async function getPosts(): Promise<Post[]> {
  const dir = path.join(CONTENT_DIR, "writing");
  const files = await readdir(dir).catch(() => [] as string[]);

  const posts = await Promise.all(
    files
      .filter((f) => f.endsWith(".mdx"))
      .map(async (file) => {
        const raw = await readFile(path.join(dir, file), "utf8");
        return parse(file.replace(/\.mdx$/, ""), raw);
      }),
  );

  return posts.filter((p) => !p.draft).sort((a, b) => b.date.localeCompare(a.date));
}

export async function getPost(slug: string): Promise<Post | null> {
  const posts = await getPosts();
  return posts.find((p) => p.slug === slug) ?? null;
}
