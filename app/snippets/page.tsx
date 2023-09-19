import moment from "moment";

import type { Metadata } from "next";
import Link from "next/link";

import { allSnippets } from "~/.contentlayer/generated";
import { Container } from "~/components/common/Container";

export const metadata: Metadata = {
  title: "Snippets - Naimul Haque",
};

export default async function BlogPage() {
  return (
    <section className="mb-16 mt-32 lg:mb-20 lg:mt-40">
      <Container>
        <h1 className="mb-8 text-5xl font-bold text-neutral-200">
          Snippets{" "}
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-primary"></span>
        </h1>
        {allSnippets
          .filter((snippet) => !snippet.draft)
          .sort((a, b) => {
            if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
              return -1;
            }
            return 1;
          })
          .map((snippet) => (
            <Link
              key={snippet.slug}
              className="mb-4 flex flex-col space-y-1"
              href={`/snippets/${snippet.slug}`}
            >
              <div className="flex w-full flex-col md:flex-row md:items-center">
                <p className="text-sm text-neutral-400 md:basis-[256px] md:text-base">
                  {moment(snippet.publishedAt).format("MMMM Do, YYYY")}{" "}
                </p>
                <h2 className="text-base font-light text-neutral-300 md:text-xl">
                  {snippet.title}
                </h2>
              </div>
            </Link>
          ))}
      </Container>
    </section>
  );
}
