import { useMDXComponent } from "next-contentlayer/hooks";

export interface MdxContentProps {
  code: string;
}

export function MdxContent({ code }: MdxContentProps) {
  const MdxContent = useMDXComponent(code);
  return <MdxContent />;
}
