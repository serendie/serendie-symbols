import type { SVGProps } from "react";
const SvgMenu = (props: SVGProps<SVGSVGElement>) => (
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
      d="M21 12.6H3v-1.2h18zM21 18.6H3v-1.2h18zM21 6.6H3V5.4h18z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgMenu;
