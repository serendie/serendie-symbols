import type { SVGProps } from "react";
const SvgPin = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16.952 5.327A7.001 7.001 0 0 0 5.024 9.699H3.82a8.201 8.201 0 0 1 16.362 0H18.98a6.97 6.97 0 0 0-2.027-4.372m1.976 5.972a6.97 6.97 0 0 1-1.976 3.93l-4.95 4.95-4.951-4.95a6.97 6.97 0 0 1-1.976-3.93H3.864a8.17 8.17 0 0 0 2.338 4.778l5.372 5.371a.605.605 0 0 0 .855 0l5.372-5.371a8.17 8.17 0 0 0 2.338-4.778zm-6.927-2.2a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8m-2.6 1.4a2.6 2.6 0 1 1 5.2 0 2.6 2.6 0 0 1-5.2 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgPin;
