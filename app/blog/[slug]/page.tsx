import { notFound } from "next/navigation";
import { allBlogs } from "contentlayer/generated";
import { MdxContent } from "~/components/MdxContent";
import { PageTransition } from "~/components";

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = allBlogs.find((post) => post.slug === params.slug);
  return { title: `${post?.title} - Naimul Haque` };
}

export async function generateStaticParams() {
  return allBlogs.map((post) => ({
    slug: post.slug,
  }));
}

export default async function Blog({ params }: { params: { slug: string } }) {
  const post = allBlogs.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <PageTransition>
      <section>
        <h1 className="font-bold text-3xl md:text-4xl bg-gradient-to-r from-indigo-400 from-10% via-pink-400 via-30% to-orange-500 to-90% bg-clip-text text-transparent">
          {post.title}
        </h1>
        <div className="grid grid-cols-[auto_1fr_auto] items-center mt-4 mb-8 font-mono text-sm">
          <div className="bg-white/5 rounded-md text-zinc-400 px-2 py-1 tracking-tighter">
            {post.publishedAt}
          </div>
          <div className="h-[0.2em] bg-white/10 mx-2 w-full" />
        </div>
        <article className="prose md:prose-lg prose-invert prose-p:font-light space-y-6 prose-pre:bg-transparent prose-pre:border prose-pre:border-white/[0.15] prose-headings:font-semibold prose-strong:font-semibold">
          <MdxContent code={post.body.code} />
        </article>
      </section>
    </PageTransition>
  );
}
