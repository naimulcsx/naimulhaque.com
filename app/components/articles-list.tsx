import Link from "next/link";

import { reader } from "@/reader";

import { ArticleCard } from "./article-card";

export async function ArticlesList() {
  const posts = await reader.collections.posts.all();
  return (
    <div>
      <h3 className="text-2xl font-semibold text-gray-100">Latest Articles</h3>
      <div>
        <div className="mt-4 flex flex-col divide-y divide-slate-800">
          {posts
            .sort(
              (a, b) =>
                new Date(b.entry.publishedDate!).getTime() -
                new Date(a.entry.publishedDate!).getTime()
            )
            .slice(0, 5)
            .map((post) => (
              <ArticleCard key={post.slug} post={post} />
            ))}
        </div>

        <Link
          href="/blog"
          className="group mt-8 flex w-48 items-center justify-center gap-2 rounded-xl border border-gray-700/50 bg-gradient-to-r from-gray-600 to-gray-700 px-4 py-2 text-sm font-medium text-gray-300 backdrop-blur-sm transition-all duration-300 hover:from-gray-700 hover:to-gray-700/90"
        >
          View All Articles
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </Link>
      </div>
    </div>
  );
}
