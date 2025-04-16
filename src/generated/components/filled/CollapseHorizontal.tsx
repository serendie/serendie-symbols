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
      d="m16.333 7.82-3.58 3.58a.85.85 0 0 0 0 1.202l3.58 3.58.849-.848-2.733-2.733H21v-1.2h-6.552l2.732-2.732zM9.552 11.4 6.82 8.67l.848-.849 3.58 3.58a.85.85 0 0 1 0 1.202l-3.58 3.58-.849-.848L9.552 12.6H3v-1.2z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCollapseHorizontal;
