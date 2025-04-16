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
      d="m11.187 5.941 5.458 5.458a.85.85 0 0 1 0 1.202l-5.459 5.457-.848-.848 4.61-4.61H4.301v-1.2h10.648l-4.61-4.61zm8.51.559h-1.2v11h1.2z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCollapseRight;
