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
      d="M10.7 6v1.6a3.1 3.1 0 0 1-3.1 3.1H6V9.5h1.6a1.9 1.9 0 0 0 1.9-1.9V6zm3.9 0v1.6c0 1.05.85 1.9 1.9 1.9h1.6v1.2h-1.6a3.1 3.1 0 0 1-3.1-3.1V6zM6 13.4h1.6a3.1 3.1 0 0 1 3.1 3.1v1.6H9.5v-1.6a1.9 1.9 0 0 0-1.9-1.9H6zm10.5 1.2a1.9 1.9 0 0 0-1.9 1.9v1.6h-1.2v-1.6a3.1 3.1 0 0 1 3.1-3.1h1.6v1.2z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgMinimize;
