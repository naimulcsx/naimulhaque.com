import { CopyButton } from "./CopyButton";

type PreProps = JSX.IntrinsicElements["pre"] & {
  raw: string;
  "data-language": string;
};

export const Pre = ({ children, raw, ...props }: PreProps) => {
  const lang = props["data-language"] || "shell";
  return (
    <pre {...props} className="p-0">
      <div className="code-header">
        {lang}
        <CopyButton text={raw} />
      </div>
      {children}
    </pre>
  );
};
