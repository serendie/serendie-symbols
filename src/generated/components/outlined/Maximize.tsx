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
      d="M15.898 3.4h1.6a3.1 3.1 0 0 1 3.1 3.1v1.6h-1.2V6.5a1.9 1.9 0 0 0-1.9-1.9h-1.6zm-9.4 1.2a1.9 1.9 0 0 0-1.9 1.9v1.6h-1.2V6.5a3.1 3.1 0 0 1 3.1-3.1h1.6v1.2zm-1.9 11.3v1.6c0 1.05.851 1.9 1.9 1.9h1.6v1.2h-1.6a3.1 3.1 0 0 1-3.1-3.1v-1.6zm16 0v1.6a3.1 3.1 0 0 1-3.1 3.1h-1.6v-1.2h1.6a1.9 1.9 0 0 0 1.9-1.9v-1.6z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgMaximize;
