import { Metadata } from "next";
import Link from "next/link";

import BlogCard from "@/components/blog-card";
import { reader } from "@/reader";

export const metadata: Metadata = {
  title: "Blog — Naimul Haque"
};

interface BlogPageProps {
  searchParams: { page?: string };
}

const POSTS_PER_PAGE = 6;

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const currentPage = Number(searchParams.page) || 1;

  const posts = await reader.collections.posts.all();
  const formattedPosts = posts.map((post) => ({
    slug: post.slug,
    title: post.entry.title,
    date: new Date(post.entry.publishedDate || "")
      .toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "2-digit"
      })
      .toUpperCase(),
    readingTime: `${5} MIN READ`,
    description: post.entry.excerpt,
    coverImage: post.entry.featuredImage || "/images/default-post.png"
  }));

  const totalPosts = formattedPosts.length;
  const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);

  const currentPosts = formattedPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  return (
    <div className="container py-8 sm:py-12 lg:py-16">
      <div className="mx-auto mb-16 max-w-xl text-center">
        <h1 className="mb-4 text-3xl font-bold text-gray-100 md:text-4xl">
          {" "}
          Blog
        </h1>
        <p className="text-sm leading-6 text-gray-300 md:text-base md:leading-7">
          My thoughts, stories, and knowledge, all in one place. I explore
          approaches to building maintainable and scalable applications.
        </p>
      </div>

      <div className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-2">
        {currentPosts.map((post, index) => (
          <BlogCard key={post.slug} post={post} index={index} />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="mt-12 flex justify-center space-x-2">
          {Array.from({ length: totalPages }).map((_, i) => {
            const pageNumber = i + 1;
            const isCurrentPage = currentPage === pageNumber;

            return (
              <Link
                key={i}
                href={`/blog?page=${pageNumber}`}
                className={`rounded px-4 py-2 ${
                  isCurrentPage
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700"
                }`}
              >
                {pageNumber}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
