import { rem } from "@mantine/core";
import React from "react";

interface IconGitProps extends React.ComponentPropsWithoutRef<"svg"> {
  size?: number | string;
}

export function IconGit({ size, style, ...others }: IconGitProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="800"
      height="800"
      fill="none"
      viewBox="0 0 32 32"
      style={{ width: rem(size), height: rem(size), ...style }}
      {...others}
    >
      <path
        fill="#EE513B"
        d="M2.585 17.413a1.999 1.999 0 010-2.826L14.587 2.585c.78-.78 2.046-.78 2.826 0l12.002 12.002c.78.78.78 2.046 0 2.826L17.413 29.415c-.78.78-2.046.78-2.826 0L2.585 17.413z"
      ></path>
      <path
        fill="#fff"
        d="M12.149 5.062l-1.215 1.215 3.139 3.139A2.126 2.126 0 0015.25 12.3v7.679a2.126 2.126 0 101.718.097v-7.765l3 3a2.125 2.125 0 101.283-1.147l-3.221-3.223a2.125 2.125 0 00-2.66-2.66l-3.221-3.22z"
      ></path>
    </svg>
  );
}
