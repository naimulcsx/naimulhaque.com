import { useMDXComponent } from "next-contentlayer/hooks";
import { Callout } from "../../mdx-components/Callout";
import { Pre } from "~/components/mdx-components/Pre";

export interface MdxContentProps {
  code: string;
}

const mdxComponents = {
  Callout,
  Pre,
};

export function MdxContent({ code }: MdxContentProps) {
  const MdxContent = useMDXComponent(code);
  return <MdxContent components={mdxComponents} />;
}
