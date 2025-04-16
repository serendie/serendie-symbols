import type { SVGProps } from "react";
const SvgChevronDown = (props: SVGProps<SVGSVGElement>) => (
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
      d="m11.398 15.075-5.48-5.48.848-.848L12 13.979l5.233-5.232.848.848-5.48 5.48a.85.85 0 0 1-1.202 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgChevronDown;
