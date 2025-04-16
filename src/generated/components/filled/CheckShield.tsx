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
      d="M11.754 2.077a.85.85 0 0 1 .489 0l7.75 2.325a.85.85 0 0 1 .605.814V13.4a8.6 8.6 0 1 1-17.2 0V5.216a.85.85 0 0 1 .606-.814zm-4.68 10.205 2.894 2.894a.85.85 0 0 0 1.202 0l5.753-5.753-.849-.848-5.505 5.505-2.646-2.646z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCheckShield;
