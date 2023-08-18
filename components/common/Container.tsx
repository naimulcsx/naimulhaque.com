import { PropsWithChildren } from "react";

export function Container({ children }: PropsWithChildren) {
  return <div className="mx-auto h-full max-w-5xl px-4">{children}</div>;
}
