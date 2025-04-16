import type { SVGProps } from "react";
const SvgZoomIn = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.004 10a8 8 0 0 1 7.223-7.963v1.207a6.801 6.801 0 0 0 0 13.512v1.206A8 8 0 0 1 2.004 10m8.823 7.958a8 8 0 0 0 0-15.916v1.207a6.801 6.801 0 0 1 0 13.502zM9.4 9.4V7h1.2v2.4H13v1.2h-2.4V13H9.4v-2.4H7V9.4zm11.743 12.59-4.782-4.78.849-.85 4.781 4.782z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgZoomIn;
