import type { SVGProps } from "react";
const SvgShuffle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M17.732 4.102v3.677l2.51-1.883zm-1.2-.68a.85.85 0 0 1 1.344-.692l3.453 2.467a.85.85 0 0 1 .016 1.372l-3.453 2.59a.85.85 0 0 1-1.36-.68zM2.219 5.055a6.95 6.95 0 0 1 6.356 4.146 6.94 6.94 0 0 1 6.355-4.146v1.2a5.745 5.745 0 1 0 0 11.491v1.2A6.95 6.95 0 0 1 8.575 14.8a6.94 6.94 0 0 1-6.356 4.146v-1.2a5.745 5.745 0 0 0 0-11.49zm15.515 11.133v3.677l2.51-1.883zm2.9 2.072Zm-4.1-2.752a.85.85 0 0 1 1.344-.692l3.453 2.467a.85.85 0 0 1 .016 1.372l-3.454 2.59a.85.85 0 0 1-1.36-.68z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgShuffle;
