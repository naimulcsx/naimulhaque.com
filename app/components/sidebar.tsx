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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
      <div className="space-y-3 mt-6 md:mt-0 lg:mt-6 bg-gradient-to-tr from-gray-800 via-gray-800/50 to-gray-800/20 p-6 border border-gray-700/50 rounded-xl backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-primary-400 animate-pulse" />
          <h4 className="text-lg font-semibold text-gray-200">
            Explore Topics
          </h4>
        </div>
        <div className="flex flex-wrap gap-2">
          {uniqueTags.map((tag) => (
            <Link
              key={tag}
              href={`/tags/${tag}`}
              className="px-3 py-1.5 text-xs bg-gray-700/50 hover:bg-gray-600/50 text-gray-300 rounded-full transition-colors duration-200 hover:text-primary-300"
            >
              #{tag} <span className="text-gray-500">({tagCounts[tag]})</span>
            </Link>
          ))}
        </div>
      </div>

      <div className="space-y-4 bg-gradient-to-br from-gray-800/80 via-gray-800/40 to-gray-800/20 p-6 border border-gray-700/50 rounded-xl backdrop-blur-sm">
        <div className="flex items-center justify-between">
          <BookIcon className="w-6 h-6 text-primary-400" />
          <span className="text-xs text-gray-500">✨ Try your luck!</span>
        </div>
        <h4 className="text-lg font-semibold text-gray-200">
          Feeling Adventurous?
        </h4>
        <p className="text-sm text-gray-400">
          Let serendipity guide you through our collection of articles. Who
          knows what you might discover?
        </p>
        <Link
          href={`/${posts[Math.floor(Math.random() * posts.length)].slug}`}
          className="inline-flex items-center gap-2 w-full justify-center px-4 py-2.5 bg-gray-700/50 hover:bg-gray-600/50 text-gray-200 rounded-lg text-sm group transition-colors duration-200 hover:text-primary-300"
        >
          <ShuffleIcon className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
          Surprise Me!
        </Link>
      </div>
    </div>
  );
}
