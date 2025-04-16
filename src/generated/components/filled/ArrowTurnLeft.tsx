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
      d="m5.03 8.584 3.096-3.096.849.849-2.249 2.248h5.93v1.2h-5.93l2.249 2.249-.849.848L5.03 9.786a.85.85 0 0 1 0-1.202M19.217 13.549a4.964 4.964 0 0 0-4.964-4.964v1.2a3.764 3.764 0 1 1 0 7.528v1.2a4.964 4.964 0 0 0 4.964-4.964M12.709 17.4H8.632v1.2h4.077z"
    />
  </svg>
);
export default SvgArrowTurnLeft;
