import type { SVGProps } from "react";
const SvgExpandRight = (props: SVGProps<SVGSVGElement>) => (
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
      d="m13.99 5.941 5.457 5.458a.85.85 0 0 1 0 1.202l-5.459 5.457-.848-.848 4.61-4.61H7.103v-1.2H17.75l-4.61-4.61zM5.504 6.5h-1.2v11h1.2z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgExpandRight;
