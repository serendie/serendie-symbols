import type { SVGProps } from "react";
const SvgPauseCircle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M21.375 12a9.375 9.375 0 1 1-18.75 0 9.375 9.375 0 1 1 18.75 0m-12.5-3.675a.55.55 0 0 0-.55.55v6.25c0 .304.246.55.55.55h1.75a.55.55 0 0 0 .55-.55v-6.25a.55.55 0 0 0-.55-.55zm4.5 0a.55.55 0 0 0-.55.55v6.25c0 .304.246.55.55.55h1.75a.55.55 0 0 0 .55-.55v-6.25a.55.55 0 0 0-.55-.55z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgPauseCircle;
