import type { SVGProps } from "react";
const SvgCollapseVertical = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.402 9.552 8.669 6.82l-.849.849 3.58 3.58a.85.85 0 0 0 1.202 0l3.58-3.58-.848-.848-2.732 2.732V3h-1.2zM7.82 16.333l3.58-3.58a.85.85 0 0 1 1.202 0l3.58 3.58-.848.848-2.732-2.732v6.552h-1.2v-6.552l-2.733 2.733z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCollapseVertical;
