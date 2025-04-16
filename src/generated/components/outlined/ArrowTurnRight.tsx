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
      d="m17.22 8.673-2.247-2.248.848-.849 3.096 3.096a.85.85 0 0 1 0 1.202L15.82 12.97l-.849-.848 2.249-2.249h-5.932v-1.2zm-7.526 1.2a3.764 3.764 0 0 0 0 7.527v1.2a4.964 4.964 0 1 1 0-9.927zm5.673 8.727h-4.078v-1.2h4.078z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgArrowTurnRight;
