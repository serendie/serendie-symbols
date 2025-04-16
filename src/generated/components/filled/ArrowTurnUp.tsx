import type { SVGProps } from "react";
const SvgArrowTurnUp = (props: SVGProps<SVGSVGElement>) => (
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
      d="M18.513 8.126 15.417 5.03a.85.85 0 0 0-1.202 0l-3.097 3.096.849.849 2.249-2.249v5.931h1.2v-5.93l2.248 2.248zm-8.06 11.09a4.964 4.964 0 0 0 4.963-4.963h-1.2a3.764 3.764 0 1 1-7.528 0h-1.2a4.964 4.964 0 0 0 4.964 4.964M6.687 8.582v4.076h-1.2V8.581z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgArrowTurnUp;
