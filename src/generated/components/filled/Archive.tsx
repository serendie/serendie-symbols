import type { SVGProps } from "react";
const SvgArchive = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.523 4.75c0-.47.381-.85.85-.85h17.25c.47 0 .85.38.85.85v4.5c0 .47-.38.85-.85.85H3.373a.85.85 0 0 1-.85-.85zm1 6.35h16.95v8.15c0 .47-.38.85-.85.85H4.373a.85.85 0 0 1-.85-.85zM9 13.6h6v-1.2h-6z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgArchive;
