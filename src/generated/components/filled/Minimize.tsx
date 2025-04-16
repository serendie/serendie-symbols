import type { SVGProps } from "react";
const SvgMinimize = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10.65 7.55v-1.6h-1.2v1.6a1.9 1.9 0 0 1-1.9 1.9h-1.6v1.2h1.6a3.1 3.1 0 0 0 3.1-3.1m0 8.9v1.6h-1.2v-1.6a1.9 1.9 0 0 0-1.9-1.9h-1.6v-1.2h1.6a3.1 3.1 0 0 1 3.1 3.1m2.699 1.6v-1.6a3.1 3.1 0 0 1 3.1-3.1h1.6v1.2h-1.6a1.9 1.9 0 0 0-1.9 1.9v1.6zm0-10.5v-1.6h1.2v1.6c0 1.049.85 1.9 1.9 1.9h1.6v1.2h-1.6a3.1 3.1 0 0 1-3.1-3.1"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgMinimize;
