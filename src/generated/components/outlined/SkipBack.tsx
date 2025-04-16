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
      d="M6.398 18.5v-13h1.2v5.76l8.25-5.5a.85.85 0 0 1 1.32.707v11.066a.85.85 0 0 1-1.32.707l-8.25-5.5v5.76zm9.57-11.379L8.65 12l7.319 4.879z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSkipBack;
