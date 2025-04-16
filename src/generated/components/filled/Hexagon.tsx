import type { SVGProps } from "react";
const SvgHexagon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.548 2.575a.85.85 0 0 1 .9 0l7.75 4.843a.85.85 0 0 1 .4.721v7.723a.85.85 0 0 1-.4.72l-7.75 4.845a.85.85 0 0 1-.9 0l-7.75-4.844a.85.85 0 0 1-.4-.721V8.139a.85.85 0 0 1 .4-.72m0 0 7.75-4.844Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgHexagon;
