import { Metadata } from "next";
import Link from "next/link";

import React from "react";

import { reader } from "@/reader";

export const metadata: Metadata = {
  title: "Snippets — Naimul Haque",
  description:
    "A curated collection of useful code snippets and solutions across various programming languages. Practical examples and reusable code from my development experience."
};

export default async function SnippetsPage() {
  const snippets = await reader.collections.snippets.all();

  return (
    <div className="container py-8 sm:py-12 lg:py-16">
      <div className="mb-16 text-center">
        <h1 className="mb-4 text-3xl font-bold text-gray-100 md:text-4xl">
          Snippets
        </h1>
        <p className="text-sm leading-6 text-gray-300 md:text-base md:leading-7">
          A curated list of snippets that I have found useful.
        </p>
      </div>

      <div className="divide-y divide-gray-700">
        {snippets.map((snippet) => (
          <Link
            key={snippet.slug}
            href={`/snippets/${snippet.slug}`}
            className="block py-4 sm:py-6"
          >
            <div className="flex flex-col items-start gap-2 sm:flex-row sm:gap-8">
              <time className="shrink-0 text-xs text-gray-400 sm:text-sm">
                {new Date(snippet.entry.publishedAt).toLocaleDateString(
                  "en-US",
                  {
                    year: "numeric",
                    month: "short",
                    day: "numeric"
                  }
                )}
              </time>

              <div className="space-y-2">
                <h2 className="text-lg font-semibold text-gray-200 sm:text-xl">
                  {snippet.entry.title}
                </h2>
                <div className="flex flex-wrap gap-2">
                  {snippet.entry.language.map((lang) => (
                    <span
                      key={lang}
                      className="rounded bg-primary-500/10 px-2 py-1 text-xs text-primary-300"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-gray-400 sm:text-sm">
                  {snippet.entry.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
