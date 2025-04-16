import type { SVGProps } from "react";
const SvgTablet = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.567 3.225v17.55H18.43V3.225zm-1.2-.35c0-.47.38-.85.85-.85H18.78c.47 0 .85.38.85.85v18.25c0 .47-.38.85-.85.85H5.217a.85.85 0 0 1-.85-.85zm7.631 14.35a.775.775 0 1 0 0 1.55.775.775 0 0 0 0-1.55M10.023 18a1.975 1.975 0 1 1 3.95 0 1.975 1.975 0 0 1-3.95 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgTablet;
