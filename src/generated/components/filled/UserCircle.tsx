import type { SVGProps } from "react";
const SvgUserCircle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10m0-6.9a3.4 3.4 0 0 0-3.4 3.4H7.4a4.6 4.6 0 0 1 9.2 0h-1.2a3.4 3.4 0 0 0-3.4-3.4M9.6 9.125a2.4 2.4 0 1 1 4.8 0 2.4 2.4 0 0 1-4.8 0m2.4-3.6a3.6 3.6 0 1 0 0 7.2 3.6 3.6 0 0 0 0-7.2"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgUserCircle;
