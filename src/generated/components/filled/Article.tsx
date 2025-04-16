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
      d="M4.398 4.25c0-.47.381-.85.85-.85h13.5c.47 0 .85.38.85.85v15.5c0 .47-.38.85-.85.85h-13.5a.85.85 0 0 1-.85-.85zM9.198 9a.9.9 0 1 1 1.8 0 .9.9 0 0 1-1.8 0m.9-2.1a2.1 2.1 0 1 0 0 4.2 2.1 2.1 0 0 0 0-4.2m5.9 7.2h-8v-1.2h8zm-8 3h8v-1.2h-8z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgArticle;
