import type { SVGProps } from "react";
const SvgStopCircle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M21.375 12a9.375 9.375 0 1 1-18.75 0 9.375 9.375 0 1 1 18.75 0m-12.2-3.675a.85.85 0 0 0-.85.85v5.65c0 .47.38.85.85.85h5.65c.47 0 .85-.38.85-.85v-5.65a.85.85 0 0 0-.85-.85z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgStopCircle;
