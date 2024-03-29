import { defineDocumentType, makeSource } from "contentlayer/source-files";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import GithubSlugger from "github-slugger";
import { basename } from "path";
import fs from "node:fs";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";

export const Snippet = defineDocumentType(() => ({
  name: "Snippet",
  filePathPattern: `snippets/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the snippet",
      required: true,
    },
    language: {
      type: "string",
      required: true,
    },
    publishedAt: {
      type: "string",
      required: true,
    },
    summary: {
      type: "string",
      required: true,
    },
    draft: {
      type: "boolean",
      description: "The status of the snippet",
      default: false,
    },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => basename(doc._raw.flattenedPath, ".mdx"),
    },
    preview: {
      type: "string",
      resolve: async (doc) => {
        const content = fs.readFileSync(
          `./content/${doc._raw.sourceFilePath}`,
          "utf-8"
        );

        let hasStarted = false,
          initialCodeBlock = "";
        const lines = content.split("\n");

        for (let i = 0; i < lines.length; ++i) {
          if (lines[i].startsWith("```") && hasStarted) {
            initialCodeBlock += "```\n";
            break;
          }
          if (lines[i].startsWith("```") && !hasStarted) {
            hasStarted = true;
          }
          if (hasStarted) initialCodeBlock += lines[i] + "\n";
        }

        const result = await unified()
          .use(remarkParse)
          .use(remarkRehype)
          .use(rehypeStringify)
          .use(rehypePrettyCode)
          .process(initialCodeBlock);

        return result.value;
      },
    },
  },
}));

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `posts/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the post",
      required: true,
    },
    featuredImage: {
      type: "string",
      description: "Featured image of the post",
      required: true,
    },
    publishedAt: {
      type: "string",
      required: true,
    },
    summary: {
      type: "string",
      required: true,
    },
    draft: {
      type: "boolean",
      description: "The status of the blog",
      default: false,
    },
    image: {
      type: "string",
    },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => basename(doc._raw.flattenedPath, ".mdx"),
    },
    readingTime: {
      type: "number",
      resolve: (post) => calculateReadingTime(post.body.raw),
    },
    headings: {
      type: "json",
      resolve: async (doc) => {
        const regXHeader = /\n(?<flag>#{1,6})\s+(?<content>.+)/g;
        const slugger = new GithubSlugger();
        const headings = Array.from(doc.body.raw.matchAll(regXHeader)).map(
          ({ groups }) => {
            const flag = groups?.flag;
            const content = groups?.content;
            return {
              level: flag.length,
              text: content,
              slug: content ? slugger.slug(content) : undefined,
            };
          }
        );
        return headings;
      },
    },
  },
}));

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Post, Snippet],
  mdx: {
    remarkPlugins: [remarkGfm, remarkMath],
    rehypePlugins: [
      rehypeSlug,
      rehypeKatex,
      [
        rehypePrettyCode,
        {
          theme: "rose-pine-moon",
          keepBackground: false,
          onVisitLine(node) {
            // Prevent lines from collapsing in `display: grid` mode, and allow empty
            // lines to be copy/pasted
            if (node.children.length === 0) {
              node.children = [{ type: "text", value: " " }];
            }
          },
          onVisitHighlightedLine(node) {
            node.properties.className.push("line--highlighted");
          },
          onVisitHighlightedWord(node) {
            node.properties.className = ["word--highlighted"];
          },
        },
      ],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ["anchor"],
          },
        },
      ],
    ],
  },
});

function calculateReadingTime(content) {
  const wordsPerMinute = 235;
  const numberOfWords = content.split(/\s/g).length;
  const minutes = numberOfWords / wordsPerMinute;

  return Math.ceil(minutes);
}
