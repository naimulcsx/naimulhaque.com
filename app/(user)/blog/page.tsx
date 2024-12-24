import { Metadata } from "next";

import BlogCard from "@/components/blog-card";
import { reader } from "@/reader";

export const metadata: Metadata = {
  title: "Blog — Naimul Haque",
  description:
    "Explore articles about software development, maintainable architecture, and scalable applications. Technical insights and best practices from Naimul Haque.",
  openGraph: {
    images: "/og_image.png"
  }
};

export default async function BlogPage() {
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
        {formattedPosts.map((post, index) => (
          <BlogCard key={post.slug} post={post} index={index} />
        ))}
      </div>
    </div>
  );
}
