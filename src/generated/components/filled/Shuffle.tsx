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
      d="M17.938 9.165a.85.85 0 0 1-1.36-.68V3.428a.85.85 0 0 1 1.344-.692l3.454 2.467a.85.85 0 0 1 .016 1.372zm-9.317.042A6.94 6.94 0 0 0 2.266 5.06v1.2a5.745 5.745 0 1 1 0 11.49v1.2a6.95 6.95 0 0 0 6.355-4.145 6.94 6.94 0 0 0 6.356 4.146v-1.2a5.745 5.745 0 1 1 0-11.49v-1.2a6.95 6.95 0 0 0-6.356 4.145m7.96 11.364c0 .7.799 1.1 1.36.68l3.453-2.59a.85.85 0 0 0-.016-1.372l-3.454-2.467a.85.85 0 0 0-1.344.692z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgShuffle;
