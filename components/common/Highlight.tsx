import { PropsWithChildren } from "react";

export function Highlight({ children }: PropsWithChildren) {
  return (
    <span className="text-slate-300 underline underline-offset-4">
      {children}
    </span>
  );
}
