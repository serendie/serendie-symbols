import type { SVGProps } from "react";
const SvgLayoutGrid = (props: SVGProps<SVGSVGElement>) => (
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
      d="M20.748 20.6h-8.15v-8.1h9v7.25c0 .47-.38.85-.85.85m.85-9.3h-9V3.4h8.15c.47 0 .85.38.85.85zm-10.2 0V3.4h-8.15a.85.85 0 0 0-.85.85v7.05zm-9 1.2v7.25c0 .47.381.85.85.85h8.15v-8.1z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgLayoutGrid;
