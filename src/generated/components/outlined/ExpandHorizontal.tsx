import type { SVGProps } from "react";
const SvgExpandHorizontal = (props: SVGProps<SVGSVGElement>) => (
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
      d="m2.753 11.4 3.58-3.58.848.849L4.449 11.4h6.552v1.2H4.449l2.732 2.733-.848.848-3.58-3.58a.85.85 0 0 1 0-1.202m16.8 0L16.82 8.67l.848-.849 3.58 3.58a.85.85 0 0 1 0 1.202l-3.58 3.58-.849-.848 2.733-2.733h-6.552v-1.2z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgExpandHorizontal;
