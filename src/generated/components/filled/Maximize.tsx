import type { SVGProps } from "react";
const SvgMaximize = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.398 8.1V6.5a3.1 3.1 0 0 1 3.1-3.1h1.6v1.2h-1.6a1.9 1.9 0 0 0-1.9 1.9v1.6zm17.2-1.6v1.6h-1.2V6.5a1.9 1.9 0 0 0-1.9-1.9h-1.6V3.4h1.6a3.1 3.1 0 0 1 3.1 3.1m0 11v-1.6h-1.2v1.6a1.9 1.9 0 0 1-1.9 1.9h-1.6v1.2h1.6a3.1 3.1 0 0 0 3.1-3.1m-17.2 0v-1.6h1.2v1.6c0 1.05.851 1.9 1.9 1.9h1.6v1.2h-1.6a3.1 3.1 0 0 1-3.1-3.1"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgMaximize;
