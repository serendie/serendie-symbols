import type { SVGProps } from "react";
const SvgCar = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.398 17.125v-5.962a.9.9 0 0 1 .038-.25l1.935-6.288a.85.85 0 0 1 .812-.6h11.63a.85.85 0 0 1 .813.6l1.935 6.288a.9.9 0 0 1 .037.25v7.962c0 .47-.38.85-.85.85h-1.9a.85.85 0 0 1-.85-.85v-1.4h-10v1.4c0 .47-.38.85-.85.85h-1.9a.85.85 0 0 1-.85-.85v-2m2.8-3a1.3 1.3 0 1 1 2.6 0 1.3 1.3 0 0 1-2.6 0m10.3-1.3a1.3 1.3 0 1 0 0 2.6 1.3 1.3 0 0 0 0-2.6m-10.7-1.1h12.4v-1.2h-12.4z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCar;
