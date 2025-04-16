import type { SVGProps } from "react";
const SvgSkipForward = (props: SVGProps<SVGSVGElement>) => (
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
      d="M17.384 18.5v-13h-1.2v5.76l-8.25-5.5a.85.85 0 0 0-1.32.707v11.066a.85.85 0 0 0 1.32.707l8.25-5.5v5.76z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSkipForward;
