import "katex/dist/katex.min.css";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";

import Markdown from "react-markdown";

export function MathFormula({ formula }: { formula: string }) {
  return (
    <Markdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
      {"$$\n" + formula + "\n$$"}
    </Markdown>
  );
}
