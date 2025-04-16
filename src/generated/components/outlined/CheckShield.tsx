import type { SVGProps } from "react";
const SvgCheckShield = (props: SVGProps<SVGSVGElement>) => (
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
      d="m11.998 3.256-7.4 2.22V11.8h-1.2V5.216a.85.85 0 0 1 .606-.814l7.75-2.325a.85.85 0 0 1 .489 0l7.75 2.325-.173.575.173-.575a.85.85 0 0 1 .605.814V11.8h-1.2V5.476zm4.925 6.15L11.17 15.16a.85.85 0 0 1-1.202 0l-2.894-2.894.849-.848 2.646 2.646 5.505-5.505zM4.598 13.4a7.4 7.4 0 1 0 14.8 0h1.2a8.6 8.6 0 1 1-17.2 0z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCheckShield;
