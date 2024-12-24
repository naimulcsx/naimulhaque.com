import Image from "next/image";

import React from "react";

import { compileMDX } from "next-mdx-remote/rsc";

import { MathFormula } from "@/components/math-formula";
import { MathInline } from "@/components/math-inline";
import { TableOfContents } from "@/components/table-of-content";
import { extractHeadings } from "@/lib/extract-headings";
import { mdxOptions } from "@/lib/mdx";
import { reader } from "@/reader";

export const generateMetadata = async ({
  params
}: {
  params: { slug: string };
}) => {
  const post = await reader.collections.posts.read(params.slug);
  return { title: post?.title, description: post?.excerpt };
};

export default async function Post({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const post = await reader.collections.posts.read(slug);

  if (!post) return <div>Post not found!</div>;

  const markdown = await post.content();

  const { content } = await compileMDX({
    source: markdown,
    options: { mdxOptions },
    components: {
      MathFormula,
      MathInline
    }
  });

  const headings = extractHeadings(markdown);

  const formattedDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric"
  }).format(new Date(post.publishedDate!));

  return (
    <article className="my-8 md:my-20">
      <div className="container">
        <div className="mx-auto max-w-xl space-y-6 text-center md:space-y-8">
          <span className="inline-block rounded-md bg-gray-600/30 px-3 py-1 text-xs text-gray-200">
            {formattedDate}
          </span>

          <div>
            <h1 className="text-3xl font-bold text-gray-200 md:text-4xl">
              {post.title}
            </h1>
            <ul className="mx-auto mt-3 flex flex-wrap justify-center gap-2 text-center font-medium md:mt-4">
              {post.tags.map((tag) => (
                <li key={tag} className="px-2 text-sm text-primary-300">
                  #{tag}
                </li>
              ))}
            </ul>
          </div>
          <p className="leading-7 text-gray-400">{post.excerpt}</p>
        </div>
        <Image
          width={1024}
          height={512}
          alt={post.title}
          src={`/images/posts/${slug}/${post.featuredImage}`}
          className="mb-12 mt-8 w-full rounded-xl md:mb-16 md:mt-12"
          quality={95}
        />
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-16">
          <div className="prose prose-sm prose-invert max-w-none grow sm:prose prose-headings:mb-4 prose-headings:mt-8 prose-headings:text-gray-200 prose-p:my-4 prose-p:text-gray-400 prose-a:text-gray-300 prose-code:text-gray-300 prose-pre:bg-gray-800/70 prose-li:text-gray-300">
            {content}
          </div>
          <div className="sidebar order-first hidden lg:sticky lg:top-20 lg:order-last lg:block lg:w-64 lg:shrink-0 lg:basis-64 lg:self-start">
            <h4 className="mb-4 text-xl font-semibold md:mb-6">
              Table of Contents
            </h4>
            <TableOfContents headings={headings} />
          </div>
        </div>
      </div>
    </article>
  );
}

export async function generateStaticParams() {
  const slugs = await reader.collections.posts.list();
  return slugs.map((slug) => ({
    slug
  }));
}
