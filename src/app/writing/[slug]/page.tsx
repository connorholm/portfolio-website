import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Shell } from "@/components/ui/Section";
import { getPost, getPosts, TAG_LABEL } from "@/lib/content";
import { formatDate } from "@/lib/format";

type Params = { slug: string };

export async function generateStaticParams(): Promise<Params[]> {
  const posts = await getPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.summary,
    openGraph: {
      type: "article",
      title: post.title,
      description: post.summary,
      publishedTime: post.date,
    },
  };
}

export default async function PostPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  return (
    <article>
      {/* Same rail grid as every other page: metadata in the margin, prose in
          the column. Keeps the article inside the site's structure rather than
          floating in a wide empty shell. */}
      <Shell className="py-14 md:py-20">
        <div className="grid gap-x-10 lg:grid-cols-[9.5rem_minmax(0,1fr)]">
          <div className="mb-8 lg:sticky lg:top-24 lg:mb-0 lg:self-start">
            <Link
              href="/writing"
              className="text-ink-3 hover:text-accent font-mono text-[0.66rem] tracking-[0.13em] uppercase"
            >
              ← Writing
            </Link>
            <p className="text-accent mt-5 font-mono text-[0.64rem] tracking-[0.13em] uppercase">
              {TAG_LABEL[post.tag]}
            </p>
            <time
              dateTime={post.date}
              className="tabular text-ink-3 mt-1 block font-mono text-[0.64rem]"
            >
              {formatDate(post.date)}
            </time>
            <p className="tabular text-ink-3 font-mono text-[0.64rem]">
              {post.readingMinutes} min read
            </p>
          </div>

          <div className="min-w-0">
            <h1 className="text-h1 max-w-[20ch]">{post.title}</h1>
            {post.summary && (
              <p className="text-lede text-ink-2 mt-4 max-w-[62ch]">{post.summary}</p>
            )}
            <div className="prose border-rule mt-9 border-t pt-9">
              <MDXRemote source={post.body} />
            </div>
          </div>
        </div>
      </Shell>
    </article>
  );
}
