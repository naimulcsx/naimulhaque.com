import { PropsWithChildren } from "react";

export function Highlight({ children }: PropsWithChildren) {
  return (
    <span className="text-neutral-300 underline underline-offset-4">
      {children}
    </span>
  );
}
