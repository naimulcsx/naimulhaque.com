import React from "react";

import { compileMDX } from "next-mdx-remote/rsc";

import { MathFormula } from "@/components/math-formula";
import { MathInline } from "@/components/math-inline";
import { mdxOptions } from "@/lib/mdx";
import { reader } from "@/reader";

export const generateMetadata = async ({
  params
}: {
  params: { slug: string };
}) => {
  const snippet = await reader.collections.snippets.read(params.slug);
  return { title: snippet?.title };
};

export default async function Snippet({
  params
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  const snippet = await reader.collections.snippets.read(slug);

  if (!snippet) return <div>Snippet not found!</div>;

  const markdown = await snippet.content();

  const { content } = await compileMDX({
    source: markdown,
    options: { mdxOptions },
    components: {
      MathFormula,
      MathInline
    }
  });

  return (
    <article className="my-8 md:my-20">
      <div className="container px-4 md:px-0">
        <div className="mx-auto max-w-xl space-y-6 text-center md:space-y-8">
          <h1 className="text-3xl font-bold text-gray-200 md:text-4xl">
            {snippet.title}
          </h1>
          <p className="leading-7 text-gray-400">{snippet.description}</p>
        </div>
        <div className="prose prose-invert mx-auto mt-8 prose-headings:mb-4 prose-headings:mt-8 prose-headings:text-gray-200 prose-p:my-4 prose-p:text-gray-400 prose-code:text-gray-300 prose-pre:bg-gray-800/70 prose-pre:text-sm prose-li:text-gray-300">
          <hr className="border-dashed border-gray-700" />
          {content}
        </div>
      </div>
    </article>
  );
}

export async function generateStaticParams() {
  const slugs = await reader.collections.snippets.list();
  return slugs.map((slug) => ({
    slug
  }));
}
