import { useMDXComponent } from "next-contentlayer/hooks";
import { Pre } from "~/components/mdx-components/Pre";
import { Callout } from "~/components/mdx-components/Callout";

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
