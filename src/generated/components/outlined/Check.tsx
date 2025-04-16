import type { SVGProps } from "react";
const SvgCheck = (props: SVGProps<SVGSVGElement>) => (
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
      d="M18.766 8.636 10.81 16.59a.85.85 0 0 1-1.202 0l-4.035-4.035.849-.848 3.787 3.787 7.707-7.708z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCheck;
