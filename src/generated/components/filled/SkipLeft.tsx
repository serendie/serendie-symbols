import type { SVGProps } from "react";
const SvgSkipLeft = (props: SVGProps<SVGSVGElement>) => (
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
      d="m10.361 11.398 5.48-5.48.849.848L11.457 12l5.233 5.233-.849.848-5.48-5.48a.85.85 0 0 1 0-1.202M7.309 18V6h1.2v12z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSkipLeft;
