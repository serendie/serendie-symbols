import type { SVGProps } from "react";
const SvgBook = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.398 4.25c0-.47.381-.85.85-.85h13.5c.47 0 .85.38.85.85v15.5c0 .47-.38.85-.85.85H8.598v-1.2h9.8v-2.8h-9.8v-1.2h9.8V4.6h-12.8v11.21a2.6 2.6 0 0 1 1.4-.41v1.2a1.4 1.4 0 0 0 0 2.8v1.2a2.6 2.6 0 0 1-2.6-2.6z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgBook;
