import "katex/dist/katex.min.css";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";

import React from "react";
import Markdown from "react-markdown";

export function MathInline({ formula }: { formula: string }) {
  return (
    <Markdown
      remarkPlugins={[remarkMath]}
      rehypePlugins={[rehypeKatex]}
      disallowedElements={["p"]}
      unwrapDisallowed={true}
    >
      {"$" + formula + "$"}
    </Markdown>
  );
}
