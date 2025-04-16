import type { SVGProps } from "react";
const SvgCollapseHorizontal = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9.552 11.4 6.82 8.67l.848-.849 3.58 3.58a.85.85 0 0 1 0 1.202l-3.58 3.58-.849-.848L9.552 12.6H3v-1.2zm3.201 0 3.58-3.58.848.849L14.45 11.4h6.552v1.2h-6.552l2.733 2.733-.849.848-3.58-3.58a.85.85 0 0 1 0-1.202"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCollapseHorizontal;
