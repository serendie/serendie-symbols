import type { SVGProps } from "react";
const SvgForward = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.36 6.76a.85.85 0 0 0-1.32.707v9.065a.85.85 0 0 0 1.32.708l6.1-4.067v3.36a.85.85 0 0 0 1.322.707l6.8-4.533a.85.85 0 0 0 0-1.415l-6.8-4.533a.85.85 0 0 0-1.321.708v3.36z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgForward;
