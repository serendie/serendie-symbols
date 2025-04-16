import type { SVGProps } from "react";
const SvgBatteryCharging = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M9.773 7.185c.408-.566 1.302-.278 1.302.42v2.965c0 .102.038.19.098.251.064.065.15.1.238.1h1.65c.585 0 .924.663.583 1.138l-3.417 4.751c-.407.567-1.301.279-1.301-.42v-2.964a.36.36 0 0 0-.1-.252.33.33 0 0 0-.237-.1H6.94a.718.718 0 0 1-.583-1.138zm.102 1.914-1.996 2.775h.71c.411 0 .803.165 1.092.457.291.295.445.691.445 1.095v1.47l1.995-2.774h-.71c-.411 0-.804-.166-1.092-.457a1.55 1.55 0 0 1-.444-1.095zM3.598 8.1h3.57V6.9h-3.92a.85.85 0 0 0-.85.85v8.5c0 .47.381.85.85.85h4.08v-1.2h-3.73zm12.8 0h-3.72V6.9h4.07c.47 0 .85.38.85.85v8.5c0 .47-.38.85-.85.85h-4.55v-1.2h4.2zm4 2.5h-1.2V9.4h1.55c.47 0 .85.38.85.85v3.5c0 .47-.38.85-.85.85h-1.55v-1.2h1.2z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgBatteryCharging;
