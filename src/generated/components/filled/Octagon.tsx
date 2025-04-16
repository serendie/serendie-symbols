import type { SVGProps } from "react";
const SvgOctagon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.503 2.249a.85.85 0 0 1 .6-.249h7.794a.85.85 0 0 1 .6.249l5.254 5.254a.85.85 0 0 1 .25.6v7.794a.85.85 0 0 1-.25.6l-5.254 5.254a.85.85 0 0 1-.6.249H8.104a.85.85 0 0 1-.601-.249l-5.254-5.254a.85.85 0 0 1-.249-.6V8.104a.85.85 0 0 1 .249-.601z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgOctagon;
