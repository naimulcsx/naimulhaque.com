import { PropsWithChildren } from "react";

export function Callout({ children }: PropsWithChildren) {
  return (
    <div className="flex rounded-md bg-zinc-900 px-4 text-red-500">
      <div className="shrink-0 basis-[32px] py-6">💡</div>
      <div>{children}</div>
    </div>
  );
}
