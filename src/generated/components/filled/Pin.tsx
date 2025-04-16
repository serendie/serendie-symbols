import type { SVGProps } from "react";
const SvgPin = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.199 16.077a8.201 8.201 0 1 1 11.598 0l-5.371 5.371a.605.605 0 0 1-.855 0zm3.59-5.578a2.21 2.21 0 1 1 4.42 0 2.21 2.21 0 0 1-4.42 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgPin;
