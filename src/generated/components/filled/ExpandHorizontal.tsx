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
      d="m6.332 7.82-3.58 3.58a.85.85 0 0 0 0 1.202l3.58 3.58.85-.848L4.448 12.6H11v-1.2H4.449l2.732-2.732zm13.22 3.58L16.822 8.67l.848-.849 3.58 3.58a.85.85 0 0 1 0 1.202l-3.58 3.58-.849-.848 2.733-2.733H13v-1.2z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgExpandHorizontal;
