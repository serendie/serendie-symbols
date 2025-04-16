import type { SVGProps } from "react";
const SvgVideo = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.543 6.25c0-.47.38-.85.85-.85h11.5c.47 0 .85.38.85.85v11.5c0 .47-.38.85-.85.85h-11.5a.85.85 0 0 1-.85-.85zm1.2.35v10.8h10.8V6.6zm16.337.255a.85.85 0 0 1 1.38.665v8.961a.85.85 0 0 1-1.38.664l-3.113-2.483.749-.938 2.544 2.03V8.247l-2.544 2.03-.749-.938z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgVideo;
