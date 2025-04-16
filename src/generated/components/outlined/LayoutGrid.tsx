import type { SVGProps } from "react";
const SvgLayoutGrid = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.398 4.25c0-.47.381-.85.85-.85h17.5c.47 0 .85.38.85.85v15.5c0 .47-.38.85-.85.85h-17.5a.85.85 0 0 1-.85-.85zm1.2.35v6.7h7.8V4.6zm9 0v6.7h7.8V4.6zm7.8 7.9h-7.8v6.9h7.8zm-9 6.9v-6.9h-7.8v6.9z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgLayoutGrid;
