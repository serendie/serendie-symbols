import type { SVGProps } from "react";
const SvgPrinter = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.398 3.5c0-.47.381-.85.85-.85h9.5c.47 0 .85.38.85.85v2.05h-1.2v-1.7h-8.8v1.7h-1.2zm-4 4.5c0-.47.381-.85.85-.85h17.5c.47 0 .85.38.85.85v9.483c0 .47-.38.85-.85.85h-1.55v-1.2h1.2V8.35h-16.8v8.789l1.206.011-.011 1.2-1.553-.015a.85.85 0 0 1-.842-.85zm14 1.548a.8.8 0 0 0 1.6 0h1.2a2 2 0 1 1-4 0zM6.398 16c0-.47.381-.85.85-.85h9.5c.47 0 .85.38.85.85v4.5c0 .47-.38.85-.85.85h-9.5a.85.85 0 0 1-.85-.85zm1.2.35v3.8h8.8v-3.8z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgPrinter;
