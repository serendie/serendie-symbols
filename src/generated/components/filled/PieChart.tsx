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
      d="M9.798 2.269C5.348 3.27 2.023 7.247 2.023 12c0 5.51 4.466 9.975 9.975 9.975 4.754 0 8.73-3.324 9.732-7.775H11.648a1.85 1.85 0 0 1-1.85-1.85V2.27"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M12.248 12.6h8.875c.468 0 .86-.382.847-.866a9.975 9.975 0 0 0-9.705-9.705.846.846 0 0 0-.867.847v8.875c0 .47.381.85.85.85"
    />
  </svg>
);
export default SvgPieChart;
