import type { SVGProps } from "react";
const SvgFileText = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.398 4.25c0-.47.381-.85.85-.85h13.5c.47 0 .85.38.85.85v15.5c0 .47-.38.85-.85.85h-13.5a.85.85 0 0 1-.85-.85zm1.2.35v14.8h12.8V4.6zm10.4 5h-8V8.4h8zm0 3h-8v-1.2h8zm-2 3h-6v-1.2h6z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgFileText;
