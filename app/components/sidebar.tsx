import Link from "next/link";

import { BookIcon, ShuffleIcon } from "lucide-react";

import { reader } from "@/reader";

export async function Sidebar() {
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
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 animate-pulse rounded-full bg-primary-400" />
          <h4 className="text-lg font-semibold text-gray-200">
            Explore Topics
          </h4>
        </div>
        <div className="flex flex-wrap gap-2">
          {uniqueTags.map((tag) => (
            <Link
              href="#"
              key={tag}
              // href={`/tags/${tag}`}
              className="rounded-full bg-gray-700/50 px-3 py-1.5 text-xs text-gray-300 transition-colors duration-200 hover:bg-gray-600/50 hover:text-primary-300"
            >
              #{tag} <span className="text-gray-500">({tagCounts[tag]})</span>
            </Link>
          ))}
        </div>
      </div>

      <div className="space-y-4 rounded-xl border border-gray-700/50 bg-gradient-to-br from-gray-800/80 via-gray-800/40 to-gray-800/20 p-6 backdrop-blur-sm">
        <div className="flex items-center justify-between">
          <BookIcon className="h-6 w-6 text-primary-400" />
          <span className="text-xs text-gray-500">✨ Try your luck!</span>
        </div>
        <h4 className="text-lg font-semibold text-gray-200">
          Feeling Adventurous?
        </h4>
        <p className="text-sm text-gray-300/90">
          Let serendipity guide you through our collection of articles. Who
          knows what you might discover?
        </p>
        <Link
          href={`/${posts[Math.floor(Math.random() * posts.length)].slug}`}
          className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gray-700/50 px-4 py-2.5 text-sm text-gray-200 transition-colors duration-200 hover:bg-gray-600/50 hover:text-primary-300"
        >
          <ShuffleIcon className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
          Surprise Me!
        </Link>
      </div>
    </div>
  );
}
