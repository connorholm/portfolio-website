import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader, Shell } from "@/components/ui/Section";
import { getPosts, TAG_LABEL } from "@/lib/content";
import { formatDate } from "@/lib/format";

export const metadata: Metadata = {
  title: "Writing",
  description: "Essays on engineering, running, and travel — one feed, three tags.",
};

export default async function WritingPage() {
  const posts = await getPosts();

  return (
    <>
      <PageHeader
        eyebrow="Writing"
        title="One feed, three subjects"
        lede="Engineering write-ups, race reports, and trip notes all land here. They are tagged rather than separated, because keeping them apart would suggest they are unrelated, and they are not."
      />

      <Shell className="pb-16">
        {posts.length === 0 ? (
          <div className="border-rule bg-panel mt-10 border border-dashed p-6">
            <p className="label mb-2">Empty</p>
            <p className="text-ink-2 max-w-[58ch]">
              No posts yet. Add an <span className="text-survey font-mono text-sm">.mdx</span> file
              to <span className="text-survey font-mono text-sm">src/content/writing/</span> with{" "}
              <span className="text-survey font-mono text-sm">title</span>,{" "}
              <span className="text-survey font-mono text-sm">date</span>,{" "}
              <span className="text-survey font-mono text-sm">tag</span>, and{" "}
              <span className="text-survey font-mono text-sm">summary</span> in the frontmatter.
            </p>
          </div>
        ) : (
          <ul className="border-rule mt-10 border-t">
            {posts.map((post) => (
              <li key={post.slug} className="border-rule border-b">
                <Link href={`/writing/${post.slug}`} className="group block py-6">
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                    <span className="text-accent font-mono text-[0.64rem] tracking-[0.13em] uppercase">
                      {TAG_LABEL[post.tag]}
                    </span>
                    <time
                      dateTime={post.date}
                      className="tabular text-ink-3 font-mono text-[0.64rem]"
                    >
                      {formatDate(post.date)}
                    </time>
                    <span className="tabular text-ink-3 font-mono text-[0.64rem]">
                      {post.readingMinutes} min
                    </span>
                  </div>
                  <h2 className="text-h3 group-hover:text-accent mt-1.5">{post.title}</h2>
                  <p className="text-ink-2 mt-1 max-w-[64ch]">{post.summary}</p>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </Shell>
    </>
  );
}
