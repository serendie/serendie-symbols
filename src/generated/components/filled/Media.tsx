import type { SVGProps } from "react";
const SvgMedia = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 4.25c0-.47.38-.85.85-.85H21.1c.47 0 .85.38.85.85v15.5c0 .47-.38.85-.85.85H2.85a.85.85 0 0 1-.85-.85zm7.2 4.753a.55.55 0 0 1 .823-.478l5.246 2.998a.55.55 0 0 1 0 .955l-5.246 2.998a.55.55 0 0 1-.823-.478z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgMedia;
