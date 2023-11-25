import { rem } from "@mantine/core";
import React from "react";

interface IconMongoProps extends React.ComponentPropsWithoutRef<"svg"> {
  size?: number | string;
}

export function IconMongo({ size, style, ...others }: IconMongoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="800"
      height="800"
      viewBox="0 0 1024 1024"
      style={{ width: rem(size), height: rem(size), ...style }}
      {...others}
    >
      <circle cx="512" cy="512" r="512" fill="#13aa52"></circle>
      <path
        fill="#fff"
        d="M648.86 449.44c-32.34-142.73-108.77-189.66-117-207.59-9-12.65-18.12-35.15-18.12-35.15-.15-.38-.39-1.05-.67-1.7-.93 12.65-1.41 17.53-13.37 30.29-18.52 14.48-113.54 94.21-121.27 256.37-7.21 151.24 109.25 241.36 125 252.85l1.79 1.27v-.11c.1.76 5 36 8.44 73.34H526a726.68 726.68 0 0113-78.53l1-.65a204.48 204.48 0 0020.11-16.45l.72-.65c33.48-30.93 93.67-102.47 93.08-216.53a347.07 347.07 0 00-5.05-56.76zM512.35 659.12s0-212.12 7-212.08c5.46 0 12.53 273.61 12.53 273.61-9.72-1.17-19.53-45.03-19.53-61.53z"
      ></path>
    </svg>
  );
}
