"use client";

import Image from "next/image";
import Link from "next/link";

import { GlareCard } from "./glare-card";

interface BlogCardProps {
  post: {
    slug: string;
    title: string;
    date: string;
    readingTime: string;
    description: string;
    coverImage: string;
  };
  index: number;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`${post.slug}`} className="block h-full">
      <GlareCard className="flex h-full flex-col">
        <Image
          width={470}
          height={246}
          src={`/images/posts/${post.slug}/${post.coverImage}`}
          alt={post.title}
          className="object-cover"
        />
        <div className="p-6">
          <h2 className="mb-2 text-xl font-semibold">{post.title}</h2>
          <div className="mb-4 flex items-center text-xs text-gray-500">
            <span>{post.date}</span>
            <span className="mx-2">•</span>
            <span>{post.readingTime}</span>
          </div>
          <p className="text-sm leading-6 text-gray-400">{post.description}</p>
        </div>
      </GlareCard>
    </Link>
  );
}
