import type { SVGProps } from "react";
const SvgExpandLeft = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10.012 5.941 4.554 11.4a.85.85 0 0 0 0 1.202l5.458 5.457.849-.848-4.61-4.61h10.647v-1.2H6.249l4.611-4.61zm8.484.559h1.2v11h-1.2z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgExpandLeft;
