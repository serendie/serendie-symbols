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
    <path fill="currentColor" d="M18.004 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0" />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="m16.361 17.21.849-.85 4.781 4.782-.848.849z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgMagnifyingGlass;
