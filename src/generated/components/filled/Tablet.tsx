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
      d="M4.367 2.875c0-.47.38-.85.85-.85H18.78c.47 0 .85.38.85.85v18.25c0 .47-.38.85-.85.85H5.217a.85.85 0 0 1-.85-.85zM11.223 18a.775.775 0 1 1 1.55 0 .775.775 0 0 1-1.55 0m.775-1.975a1.975 1.975 0 1 0 0 3.95 1.975 1.975 0 0 0 0-3.95"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgTablet;
