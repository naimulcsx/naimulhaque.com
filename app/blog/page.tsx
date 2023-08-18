import type { Metadata } from "next";
import Link from "next/link";
import { allBlogs } from "~/.contentlayer/generated";
import { PageTransition } from "~/components";
import { Container } from "~/components/Container";

export const metadata: Metadata = {
  title: "Blog - Naimul Haque",
  description: "Read my thoughts on software development, design, and more.",
};

export default async function BlogPage() {
  return (
    <section className="mb-16 mt-32 lg:mb-20 lg:mt-40">
      <Container>
        <h1 className="mb-5 mb-8 text-3xl font-bold text-white">Blog</h1>
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
              className="mb-4 flex flex-col space-y-1"
              href={`/blog/${post.slug}`}
            >
              <div className="flex w-full flex-col md:flex-row md:items-center">
                <p className="text-sm text-zinc-400 md:basis-[160px] md:text-base">
                  {post.publishedAt}
                </p>
                <h2 className="text-base font-light text-zinc-300 md:text-xl">
                  {post.title}
                </h2>
              </div>
            </Link>
          ))}
      </Container>
    </section>
  );
}
