import type { SVGProps } from "react";
const SvgArrowTurnRight = (props: SVGProps<SVGSVGElement>) => (
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
      d="m15.872 5.488 3.096 3.096a.85.85 0 0 1 0 1.202l-3.097 3.096-.848-.848 2.249-2.249H11.34v-1.2h5.932l-2.249-2.248zm-11.09 8.06a4.964 4.964 0 0 1 4.963-4.963v1.2a3.764 3.764 0 1 0 0 7.528v1.2a4.964 4.964 0 0 1-4.964-4.964m10.636 3.765H11.34v1.2h4.078z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgArrowTurnRight;
