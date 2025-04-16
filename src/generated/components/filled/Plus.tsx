import type { SVGProps } from "react";
const SvgPlus = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.4 12.6V20h1.2v-7.4H20v-1.2h-7.4V4h-1.2v7.4H4v1.2z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgPlus;
