import type { SVGProps } from "react";
const SvgRewind = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.217 6.76a.85.85 0 0 1 1.321.707v3.36l6.1-4.068a.85.85 0 0 1 1.322.708v9.065a.85.85 0 0 1-1.321.708l-6.1-4.067v3.36a.85.85 0 0 1-1.322.707l-6.8-4.533a.85.85 0 0 1 0-1.415z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgRewind;
