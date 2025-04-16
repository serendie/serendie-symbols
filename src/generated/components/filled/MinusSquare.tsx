import type { SVGProps } from "react";
const SvgMinusSquare = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.559 3.375c0-.452.366-.818.818-.818h17.25c.451 0 .818.366.818.818v17.25a.82.82 0 0 1-.818.818H3.377a.82.82 0 0 1-.818-.818zM6.002 12.6h12v-1.2h-12z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgMinusSquare;
