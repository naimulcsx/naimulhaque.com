import React from "react";
import { rem } from "@mantine/core";

interface IconRemixProps extends React.ComponentPropsWithoutRef<"svg"> {
  size?: number | string;
}

export function IconRemix({ size, style, ...others }: IconRemixProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="800"
      height="800"
      fill="none"
      viewBox="0 0 800 800"
      style={{
        width: rem(size),
        height: rem(size),
        background: "#000",
        borderRadius: 4,
        ...style,
      }}
      {...others}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M587.947 527.768c4.254 54.65 4.254 80.268 4.254 108.232H465.756c0-6.091.109-11.663.219-17.313.342-17.564.699-35.88-2.147-72.868-3.761-54.152-27.08-66.185-69.957-66.185H195v-98.525h204.889c54.16 0 81.241-16.476 81.241-60.098 0-38.357-27.081-61.601-81.241-61.601H195V163h227.456C545.069 163 606 220.912 606 313.42c0 69.193-42.877 114.319-100.799 121.84 48.895 9.777 77.48 37.605 82.746 92.508z"
        clipRule="evenodd"
      ></path>
      <path
        fill="currentColor"
        d="M195 636v-73.447h133.697c22.332 0 27.181 16.563 27.181 26.441V636H195z"
      ></path>
      <path
        stroke="currentColor"
        strokeOpacity="0.8"
        d="M194.5 636v.5h161.878v-47.506c0-5.006-1.226-11.734-5.315-17.224-4.108-5.515-11.059-9.717-22.366-9.717H194.5V636z"
      ></path>
    </svg>
  );
}
