import type { SVGProps } from "react";
const SvgFilter = (props: SVGProps<SVGSVGElement>) => (
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
      d="M21 7.6H3V6.4h18zM18 12.6H6v-1.2h12zM15 17.6H9v-1.2h6z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgFilter;
