import type { SVGProps } from "react";
const SvgArrowDownLeft = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.536 17.313 18.514 6.337l-.848-.849L6.688 16.464v-9.82h-1.2v11.019c0 .47.38.85.85.85h11.02v-1.2z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgArrowDownLeft;
