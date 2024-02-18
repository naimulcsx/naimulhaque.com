import { json, type MetaFunction } from "@remix-run/node";
import { allPosts } from "contentlayer/generated";
import { HeroSection } from "~/components/homepage/HeroSection";
import { LatestBlog } from "~/components/homepage/LatestBlog";
import { Technologies } from "~/components/homepage/Technologies";

export const meta: MetaFunction = () => {
  return [
    { title: "Naimul Haque - Software Engineer" },
    {
      name: "description",
      content:
        "Passionate software engineer with expertise in React, Node.js, and TypeScript. Discover system design, clean code, and tech insights. Join me in tech exploration and thoughtful articles.",
    },
  ];
};

export async function loader() {
  return json({ allPosts });
}

export default function Index() {
  return (
    <>
      <HeroSection />
      <Technologies />
      <LatestBlog />
    </>
  );
}
