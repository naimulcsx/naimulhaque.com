import { SVGProps } from "react";

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="320"
      height="320"
      fill="none"
      viewBox="0 0 320 320"
      {...props}
    >
      <path
        fill="#fff"
        d="m107.419 130.338-9.372-23.643H94.64l1.704 24.921V210H67.801V61.326h33.228l37.488 79.662 9.372 23.643h3.408l-1.704-24.921V61.326h28.542V210h-33.228z"
      ></path>
      <path
        fill="currentColor"
        d="M224.67 215.8h-46.4V274h-28.6V134.4h28.6V191h46.4v-56.6h28.6V274h-28.6z"
      ></path>
    </svg>
  );
}
