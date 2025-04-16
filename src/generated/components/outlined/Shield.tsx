import type { SVGProps } from "react";
const SvgShield = (props: SVGProps<SVGSVGElement>) => (
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
      d="m11.998 3.256-7.4 2.22V11.8h-1.2V5.216a.85.85 0 0 1 .606-.814l7.75-2.325a.85.85 0 0 1 .489 0l7.75 2.325-.173.575.173-.575a.85.85 0 0 1 .605.814V11.8h-1.2V5.476zM4.598 13.4a7.4 7.4 0 1 0 14.8 0h1.2a8.6 8.6 0 1 1-17.2 0z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgShield;
