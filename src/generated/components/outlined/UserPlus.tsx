import type { SVGProps } from "react";
const SvgUserPlus = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9.985 5.221a3.038 3.038 0 1 0 0 6.077 3.038 3.038 0 0 0 0-6.077M5.747 8.26a4.238 4.238 0 1 1 8.476 0 4.238 4.238 0 0 1-8.476 0m10.64 4.14V10h1.2v2.4h2.4v1.2h-2.4V16h-1.2v-2.4h-2.4v-1.2zm-6.402 2.823a4.777 4.777 0 0 0-4.777 4.778h-1.2a5.977 5.977 0 1 1 11.954 0h-1.2a4.777 4.777 0 0 0-4.777-4.778"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgUserPlus;
