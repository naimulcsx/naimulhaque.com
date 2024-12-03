import Link from "next/link";

import { ArrowRight } from "lucide-react";

import { reader } from "../reader";

export function ArticleCard({
  post
}: {
  post: Awaited<ReturnType<typeof reader.collections.posts.all>>[number];
}) {
  return (
    <article
      key={post.slug}
      className="flex flex-col gap-4 py-5 sm:flex-row sm:gap-6"
    >
      <div className="h-48 w-full rounded-lg bg-slate-800 sm:h-24 sm:w-24 sm:shrink-0 sm:basis-24">
        <img
          src={`/images/posts/${post.slug}/${post.entry.featuredImage}`}
          className="h-full w-full rounded-lg border border-slate-700 object-cover"
          alt=""
        />
      </div>
      <div className="relative flex grow flex-col">
        <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-100">
          <Link href={`${post.slug}`}>
            <span className="relative z-10">{post.entry.title}</span>
          </Link>
        </h2>
        <time className="relative z-10 order-first mb-2 flex items-center pl-3.5 text-sm text-slate-400 dark:text-slate-500">
          <span
            className="absolute inset-y-0 left-0 flex items-center"
            aria-hidden="true"
          >
            <span className="h-0.5 w-6 rounded-full bg-slate-200 dark:bg-slate-500"></span>
          </span>
          <span className="ml-4">{post.entry.publishedDate}</span>
        </time>
        <div className="relative w-full pr-12">
          <p className="z-10 mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
            {post.entry.excerpt}
          </p>
        </div>
        <Link
          href={`${post.slug}`}
          className="absolute right-0 top-[50%] z-10 mt-2 text-sm text-slate-600 dark:text-slate-400"
        >
          <ArrowRight className="h-5 w-5 text-primary-500" />
        </Link>
      </div>
    </article>
  );
}
