import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeKatex from "rehype-katex";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";

import { SerializeOptions } from "node_modules/next-mdx-remote/dist/types";

export const mdxOptions: SerializeOptions["mdxOptions"] = {
  remarkPlugins: [remarkGfm, remarkMath],
  rehypePlugins: [
    rehypeSlug,
    rehypeKatex,
    [
      rehypePrettyCode,
      {
        theme: "tokyo-night",
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
        }
      }
    ],
    [
      rehypeAutolinkHeadings,
      {
        properties: {
          className: ["anchor"]
        }
      }
    ]
  ]
};
