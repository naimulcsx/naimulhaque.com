import React from "react";
import { rem } from "@mantine/core";

interface IconTailwindProps extends React.ComponentPropsWithoutRef<"svg"> {
  size?: number | string;
}

export function IconTailwind({ size, style, ...others }: IconTailwindProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="800"
      height="800"
      viewBox="0 0 32 32"
      style={{ width: rem(size), height: rem(size), ...style }}
      {...others}
    >
      <path
        fill="#44a8b3"
        d="M9 13.7q1.4-5.6 7-5.6c5.6 0 6.3 4.2 9.1 4.9q2.8.7 4.9-2.1-1.4 5.6-7 5.6c-5.6 0-6.3-4.2-9.1-4.9q-2.8-.7-4.9 2.1zm-7 8.4q1.4-5.6 7-5.6c5.6 0 6.3 4.2 9.1 4.9q2.8.7 4.9-2.1-1.4 5.6-7 5.6c-5.6 0-6.3-4.2-9.1-4.9q-2.8-.7-4.9 2.1z"
      ></path>
    </svg>
  );
}
