import moment from "moment";

import type { Metadata } from "next";
import Link from "next/link";

import { allPosts } from "contentlayer/generated";

import { Container } from "~/components/common/Container";

export const metadata: Metadata = {
  title: "Blog - Naimul Haque",
  description: "Read my thoughts on software development, design, and more.",
};

export default async function BlogPage() {
  return (
    <section className="mb-16 mt-32 lg:mb-20 lg:mt-40">
      <Container>
        <h1 className="mb-8 text-5xl font-bold text-slate-200">
          Blog{" "}
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-primary"></span>
        </h1>
        {allPosts
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
                <p className="text-sm text-slate-400 md:basis-[256px] md:text-base">
                  {moment(post.publishedAt).format("MMMM Do, YYYY")}{" "}
                </p>
                <h2 className="text-base font-light text-slate-300 md:text-xl">
                  {post.title}
                </h2>
              </div>
            </Link>
          ))}
      </Container>
    </section>
  );
}
