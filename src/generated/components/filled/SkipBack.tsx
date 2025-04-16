import type { SVGProps } from "react";
const SvgSkipBack = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.613 5.5v13h1.2v-5.76l8.25 5.5a.85.85 0 0 0 1.32-.707V6.467a.85.85 0 0 0-1.32-.707l-8.25 5.5V5.5z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSkipBack;
