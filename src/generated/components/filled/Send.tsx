import type { SVGProps } from "react";
const SvgSend = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.556 2.332A.85.85 0 0 0 2.35 3.3L4.526 12l-2.175 8.702a.85.85 0 0 0 1.205.966l17.816-8.908a.85.85 0 0 0 0-1.52zM7.34 12.601h6v-1.2h-6z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSend;
