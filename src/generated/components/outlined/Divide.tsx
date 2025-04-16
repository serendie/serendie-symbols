import type { SVGProps } from "react";
const SvgDivide = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9.15 6.375c0-1.369.964-2.511 2.25-2.787v1.25a1.65 1.65 0 0 0 0 3.074v1.25a2.85 2.85 0 0 1-2.25-2.787m4.5 0c0 .7-.435 1.297-1.05 1.537v1.25a2.851 2.851 0 0 0 0-5.574v1.25a1.65 1.65 0 0 1 1.05 1.537M3 12.6v-1.2h18v1.2zm8.4 3.487a1.65 1.65 0 0 0 0 3.075v1.25a2.851 2.851 0 0 1 0-5.574zm1.2 3.075a1.65 1.65 0 0 0 0-3.075v-1.25a2.85 2.85 0 0 1 0 5.574z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgDivide;
