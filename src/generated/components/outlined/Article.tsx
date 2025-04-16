import type { SVGProps } from "react";
const SvgArticle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.398 4.25c0-.47.381-.85.85-.85h13.5c.47 0 .85.38.85.85v15.5c0 .47-.38.85-.85.85h-13.5a.85.85 0 0 1-.85-.85zm1.2.35v14.8h12.8V4.6zm4.5 3.5a.9.9 0 1 0 0 1.8.9.9 0 0 0 0-1.8m-2.1.9a2.1 2.1 0 1 1 4.2 0 2.1 2.1 0 0 1-4.2 0m8 5.1h-8v-1.2h8zm0 3h-8v-1.2h8z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgArticle;
