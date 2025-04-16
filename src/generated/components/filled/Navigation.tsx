import type { SVGProps } from "react";
const SvgNavigation = (props: SVGProps<SVGSVGElement>) => (
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
      d="M18.306 5.983a.818.818 0 0 0-1.04-1.034L3.532 9.62c-.745.254-.737 1.311.012 1.553L10 13.258l2.165 6.496c.248.746 1.303.746 1.552 0z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgNavigation;
