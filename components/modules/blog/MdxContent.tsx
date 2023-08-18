import { useMDXComponent } from "next-contentlayer/hooks";
import { Callout } from "../../mdx-components/Callout";

export interface MdxContentProps {
  code: string;
}

const mdxComponents = {
  Callout,
};

export function MdxContent({ code }: MdxContentProps) {
  const MdxContent = useMDXComponent(code);
  return <MdxContent components={mdxComponents} />;
}
