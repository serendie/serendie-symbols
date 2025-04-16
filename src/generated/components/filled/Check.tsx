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
      d="m9.437 16.278-4.035-4.034.849-.849 3.787 3.787 7.707-7.707.849.848-7.955 7.955a.85.85 0 0 1-1.202 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCheck;
