import Link from "next/link";

import { CodeIcon, WrenchIcon } from "lucide-react";

import { reader } from "@/reader";

import { TableOfContents } from "./table-of-content";

export async function SidebarAbout() {
  const posts = await reader.collections.posts.all();
  const tags = posts.map((p) => p.entry.tags).flat();

  const tagCounts = tags.reduce(
    (acc, tag) => {
      acc[tag] = (acc[tag] || 0) + 1;
      return acc;
    },
    {} as Record<string, number>
  );

  const uniqueTags = Array.from(new Set(tags))
    .sort((a, b) => tagCounts[b] - tagCounts[a])
    .slice(0, 5);

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-1">
      <div className="mt-6 space-y-3 rounded-xl border border-gray-700/50 bg-gradient-to-tr from-gray-800 via-gray-800/50 to-gray-800/20 p-6 backdrop-blur-sm md:mt-0 lg:mt-6">
        <h4 className="text-lg font-semibold text-gray-200">
          Table of Contents
        </h4>
        <div className="flex flex-wrap gap-2">
          <TableOfContents
            headings={[
              {
                text: "About",
                slug: "about",
                level: 1
              },
              {
                text: "Experiences",
                slug: "experiences",
                level: 1
              },
              {
                text: "Achievements",
                slug: "achievements",
                level: 1
              }
            ]}
          />
        </div>
      </div>

      <div className="space-y-4 rounded-xl border border-gray-700/50 bg-gradient-to-br from-gray-800/80 via-gray-800/40 to-gray-800/20 p-6 backdrop-blur-sm">
        <div className="flex items-center justify-between">
          <WrenchIcon className="h-6 w-6 text-primary-400" />
        </div>
        <h4 className="text-lg font-semibold text-gray-200">My Tech Setup</h4>
        <p className="text-sm text-gray-400">
          Curious about my development setup? Check out the tools, apps, and
          gear I use daily.
        </p>
        <Link
          href="/uses"
          className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gray-700/50 px-4 py-2.5 text-sm text-gray-200 transition-colors duration-200 hover:bg-gray-600/50 hover:text-primary-300"
        >
          <WrenchIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          View My Setup
        </Link>
      </div>

      <div className="space-y-4 rounded-xl border border-gray-700/50 bg-gradient-to-br from-gray-800/80 via-gray-800/40 to-gray-800/20 p-6 backdrop-blur-sm">
        <div className="flex items-center justify-between">
          <CodeIcon className="h-6 w-6 text-primary-400" />
        </div>
        <h4 className="text-lg font-semibold text-gray-200">
          Browse Code Snippets
        </h4>
        <p className="text-sm text-gray-400">
          Explore my collection of useful code snippets, tips, and tricks that
          I've gathered over time.
        </p>
        <Link
          href="/snippets"
          className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gray-700/50 px-4 py-2.5 text-sm text-gray-200 transition-colors duration-200 hover:bg-gray-600/50 hover:text-primary-300"
        >
          <CodeIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          View All Snippets
        </Link>
      </div>
    </div>
  );
}
