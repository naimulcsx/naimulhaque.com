import fs from "fs";
import { MetadataRoute } from "next";
import path from "path";

const baseUrl = process.env.SITE_URL || "http://localhost:3000";
const baseDir = "/app/(user)";
const excludeDirs = ["api", "fonts"];

export const revalidate = 3600; // revalidate at most every hour

async function getRoutes(): Promise<MetadataRoute.Sitemap> {
  const fullPath = path.join(process.cwd(), baseDir);
  console.log(fullPath, "fullPath");
  const entries = fs.readdirSync(fullPath, { withFileTypes: true });
  let routes: string[] = ["/"];

  entries.forEach((entry) => {
    if (entry.isDirectory() && entry.name === "[slug]") {
      const contentPath = path.join(process.cwd(), "/content/posts");
      const posts = fs.readdirSync(contentPath, { withFileTypes: true });
      posts.forEach((post) => {
        routes.push(`/${path.parse(post.name).name}`);
      });
      return;
    }
    if (entry.isDirectory() && !excludeDirs.includes(entry.name)) {
      routes.push(`/${entry.name}`);
    }
  });

  const snippetsPath = path.join(process.cwd(), "/content/snippets");
  const snippets = fs.readdirSync(snippetsPath, { withFileTypes: true });
  snippets.forEach((snippet) => {
    routes.push(`/snippets/${path.parse(snippet.name).name}`);
  });

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 1.0
  }));
}

export default function sitemap() {
  return getRoutes();
}
