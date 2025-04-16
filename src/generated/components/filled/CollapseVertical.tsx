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
      d="m12.602 9.552 2.732-2.732.848.848-3.58 3.58a.85.85 0 0 1-1.202 0l-3.58-3.58.849-.849 2.733 2.733V3h1.2zm3.58 6.78-3.58-3.58a.85.85 0 0 0-1.202 0l-3.58 3.581.849.849 2.733-2.733V21h1.2v-6.552l2.732 2.732z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCollapseVertical;
