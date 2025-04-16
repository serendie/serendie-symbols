import type { SVGProps } from "react";
const SvgPlay = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.322 5.76A.85.85 0 0 0 7 6.466v11.065a.85.85 0 0 0 1.322.708l8.299-5.533a.85.85 0 0 0 0-1.415z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgPlay;
