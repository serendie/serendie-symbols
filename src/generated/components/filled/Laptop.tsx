import type { SVGProps } from "react";
const SvgLaptop = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.873 3a.85.85 0 0 0-.85.85v11.219c0 .47.381.85.85.85h18.25c.47 0 .85-.38.85-.85V3.85a.85.85 0 0 0-.85-.85z"
      clipRule="evenodd"
    />
    <path fill="currentColor" d="M2.598 18.72h18.8v1.2h-18.8z" />
  </svg>
);
export default SvgLaptop;
