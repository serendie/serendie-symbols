import type { SVGProps } from "react";
const SvgAlignCenter = (props: SVGProps<SVGSVGElement>) => (
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
      d="M20 7.6H4V6.4h16zm-2 3.5H6V9.9h12zm2 3.5H4v-1.2h16zm-2 3.5H6v-1.2h12z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgAlignCenter;
