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
      d="M11.318 6.76a.85.85 0 0 1 1.322.707v3.36l6.1-4.068a.85.85 0 0 1 1.322.708v9.065a.85.85 0 0 1-1.322.708l-6.1-4.067v3.36a.85.85 0 0 1-1.322.707L4.52 12.707a.85.85 0 0 1 0-1.415l.333.5.004.005m-.004-.006-.333-.499 6.8-4.533M13.042 12l5.819 3.88V8.12zM11.44 8.121l-5.818 3.878 5.818 3.88z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgRewind;
