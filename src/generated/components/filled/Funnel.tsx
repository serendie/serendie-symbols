import type { SVGProps } from "react";
const SvgFunnel = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.523 4.4a.85.85 0 0 0-.66 1.386l6.035 7.427v6.32a.85.85 0 0 0 1.322.707l2.5-1.666a.85.85 0 0 0 .378-.707v-4.654l6.035-7.427a.85.85 0 0 0-.66-1.386z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgFunnel;
