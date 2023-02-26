import Link from "next/link";
import { allBlogs } from "~/.contentlayer/generated";

export function RecentPosts() {
  return (
    <section>
      <h1 className="font-medium text-3xl mb-5 text-white mb-10">
        Recent Articles
      </h1>
      {allBlogs
        .sort((a, b) => {
          if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
            return -1;
          }
          return 1;
        })
        .slice(0, 5)
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4"
            href={`/blog/${post.slug}`}
          >
            <div className="w-full flex items-center">
              <p className="text-zinc-400 basis-[160px]">{post.publishedAt}</p>
              <h2 className="text-xl text-zinc-300 font-light">{post.title}</h2>
            </div>
          </Link>
        ))}
      <div className="mt-8">
        <Link
          className="text-emerald-500 border-b border-emerald-500 pb-1"
          href="/blog"
        >
          All articles
        </Link>
      </div>
    </section>
  );
}
