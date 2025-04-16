import type { SVGProps } from "react";
const SvgCollapseRight = (props: SVGProps<SVGSVGElement>) => (
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
      d="m14.95 11.4-4.611-4.61.848-.849 5.458 5.458a.85.85 0 0 1 0 1.202l-5.459 5.457-.848-.848 4.61-4.61H4.301v-1.2zm3.548 6.1v-11h1.2v11z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCollapseRight;
