import * as _jsx_runtime from "react/jsx-runtime";
import React from "react";
import ReactDOM from "react-dom";
import { Callout } from "./Callout";

type MDXContentProps = {
  [props: string]: unknown;
  components?: Record<string, React.FC>;
};

function MDXRenderer({ code }: { code: string }) {
  const Component = useMDXComponent(code);
  return (
    <div>
      <Component
        components={{
          Callout: Callout,
        }}
      />
    </div>
  );
}

export default MDXRenderer;

function getMDXComponent(
  code: string,
  globals: Record<string, unknown> = {}
): React.FC<MDXContentProps> {
  const scope = { React, ReactDOM, _jsx_runtime, ...globals };
  const fn = new Function(...Object.keys(scope), code);
  return fn(...Object.values(scope)).default;
}

function useMDXComponent(code: string, globals: Record<string, unknown> = {}) {
  return React.useMemo(() => getMDXComponent(code, globals), [code, globals]);
}
