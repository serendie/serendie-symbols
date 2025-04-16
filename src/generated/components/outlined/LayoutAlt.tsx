import type { SVGProps } from "react";
const SvgLayoutAlt = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.398 3.25c0-.47.381-.85.85-.85h17.5c.47 0 .85.38.85.85v17.5c0 .47-.38.85-.85.85h-17.5a.85.85 0 0 1-.85-.85zm1.2.35v7.8h7.8V3.6zm9 0v16.8h7.8V3.6zm-1.2 16.8v-7.8h-7.8v7.8z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgLayoutAlt;
