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
      d="M20 7.6H4V6.4h16zM20 14.6H4v-1.2h16zM18 11.1H6V9.9h12zM18 18.1H6v-1.2h12z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgAlignCenter;
