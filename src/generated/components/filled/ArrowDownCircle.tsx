import type { SVGProps } from "react";
const SvgArrowDownCircle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M21.375 12a9.375 9.375 0 1 1-18.75 0 9.375 9.375 0 1 1 18.75 0M11.4 14.551 8.668 11.82l-.849.849 3.58 3.58a.85.85 0 0 0 1.202 0l3.58-3.58-.849-.85-2.732 2.734V8h-1.2z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgArrowDownCircle;
