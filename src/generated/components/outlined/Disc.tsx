import type { SVGProps } from "react";
const SvgDisc = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.023 12c0-5.24 4.04-9.536 9.175-9.943V3.26a8.776 8.776 0 0 0 0 17.478v1.204C6.063 21.536 2.023 17.24 2.023 12m10.775 9.943c5.135-.407 9.175-4.703 9.175-9.943s-4.04-9.536-9.175-9.943V3.26a8.776 8.776 0 0 1 0 17.478zm-.8-12.718a2.775 2.775 0 1 0 0 5.55 2.775 2.775 0 0 0 0-5.55M8.023 12a3.975 3.975 0 1 1 7.95 0 3.975 3.975 0 0 1-7.95 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgDisc;
