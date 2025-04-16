import type { SVGProps } from "react";
const SvgExpandDiagonal = (props: SVGProps<SVGSVGElement>) => (
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
      d="M13.05 5.035h5.064c.47 0 .85.38.85.85v5.062h-1.2V7.084l-4.633 4.633-.849-.85 4.634-4.632H13.05zm-6.815 11.88v-3.864h-1.2v5.063c0 .47.38.85.85.85h5.062v-1.2H7.084l4.633-4.633-.85-.849z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgExpandDiagonal;
