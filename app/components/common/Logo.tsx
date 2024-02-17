import { type SVGProps } from "react";

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="80"
      height="80"
      fill="none"
      viewBox="0 0 280 280"
      {...props}
    >
      <g clipPath="url(#clip0_59_9)">
        <path fill="hsl(var(--secondary))" d="M0 0H280V280H0z"></path>
        <path
          fill="#fff"
          d="M87.42 110.338l-9.373-23.643H74.64l1.704 24.921V190H47.801V41.326H81.03l37.488 79.662 9.372 23.643h3.408l-1.704-24.921V41.326h28.542V190h-33.228l-37.488-79.662z"
        ></path>
        <path
          fill="hsl(var(--primary))"
          d="M204.67 195.8h-46.4V254h-28.6V114.4h28.6V171h46.4v-56.6h28.6V254h-28.6v-58.2z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_59_9">
          <rect width="280" height="280" fill="#fff" rx="32"></rect>
        </clipPath>
      </defs>
    </svg>
  );
}
