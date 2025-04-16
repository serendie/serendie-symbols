import type { SVGProps } from "react";
const SvgArrowTurnLeft = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.085 8.672 8.18 5.576l.848.849-2.248 2.248h5.93v1.2h-5.93l2.249 2.249-.849.848-3.096-3.096a.85.85 0 0 1 0-1.202m9.223.001a4.964 4.964 0 1 1 0 9.927v-1.2a3.764 3.764 0 1 0 0-7.527zM8.635 17.4h4.076v1.2H8.635z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgArrowTurnLeft;
