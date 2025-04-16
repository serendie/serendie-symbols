import type { SVGProps } from "react";
const SvgPieChart = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9.798 2.268c-4.45 1.002-7.775 4.978-7.775 9.731 0 5.51 4.466 9.975 9.975 9.975 4.754 0 8.73-3.324 9.732-7.775h-1.234A8.775 8.775 0 1 1 9.799 3.502V2.268m10.691 9.131h.264a8.78 8.78 0 0 0-8.155-8.155V11.4h7.891m1.481.357a9.978 9.978 0 0 0-9.713-9.729.846.846 0 0 0-.859.847v8.875c0 .47.381.85.85.85h8.876c.46 0 .846-.37.846-.843"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgPieChart;
