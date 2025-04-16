import type { SVGProps } from "react";
const SvgTruck = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.148 5.551c0-.47.381-.85.85-.85h11.3c.47 0 .85.38.85.85v9.5c0 .47-.38.85-.85.85h-11.3a.85.85 0 0 1-.85-.85zm1.2.35v8.8h10.6v-8.8zm14.051 3h-1.45v-1.2h3.627a.85.85 0 0 1 .796.552l1.477 3.94v2.858c0 .47-.38.85-.85.85h-5.05v-1.2h4.7v-1.8h-2.4a.85.85 0 0 1-.85-.85zm1.2 0v2.8h1.784l-1.05-2.8zm-13.75 7.8a1.4 1.4 0 1 0 2.8 0h1.2a2.6 2.6 0 0 1-5.2 0zm10 0a1.4 1.4 0 1 0 2.8 0h1.2a2.6 2.6 0 1 1-5.2 0z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgTruck;
