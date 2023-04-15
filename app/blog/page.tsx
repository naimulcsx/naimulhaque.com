import type { Metadata } from "next";
import Link from "next/link";
import { allBlogs } from "~/.contentlayer/generated";
import { PageTransition } from "~/components";

export const metadata: Metadata = {
  title: "Blog - Naimul Haque",
  description: "Read my thoughts on software development, design, and more.",
};

export default async function BlogPage() {
  return (
    <PageTransition>
      <section>
        <h1 className="font-bold text-3xl mb-5 text-white mb-8">Blog</h1>
        {allBlogs
          .filter((post) => !post.draft)
          .sort((a, b) => {
            if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
              return -1;
            }
            return 1;
          })
          .map((post) => (
            <Link
              key={post.slug}
              className="flex flex-col space-y-1 mb-4"
              href={`/blog/${post.slug}`}
            >
              <div className="w-full flex flex-col md:flex-row md:items-center">
                <p className="text-zinc-400 text-sm md:text-base md:basis-[160px]">
                  {post.publishedAt}
                </p>
                <h2 className="text-base md:text-xl text-zinc-300 font-light">
                  {post.title}
                </h2>
              </div>
            </Link>
          ))}
      </section>
    </PageTransition>
  );
}
