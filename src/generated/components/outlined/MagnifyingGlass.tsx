import type { SVGProps } from "react";
const SvgMagnifyingGlass = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9.227 2.037a8.001 8.001 0 0 0 0 15.926v-1.207a6.801 6.801 0 0 1 0-13.512zm1.6 14.714a6.801 6.801 0 0 0 0-13.502V2.042a8.001 8.001 0 0 1 0 15.916zm5.534.458 4.782 4.782.848-.849-4.781-4.781z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgMagnifyingGlass;
