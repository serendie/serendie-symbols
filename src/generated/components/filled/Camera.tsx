import type { SVGProps } from "react";
const SvgCamera = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.748 4.248A4.6 4.6 0 0 1 16.56 6.9h4.589c.47 0 .85.38.85.85v12.5c0 .47-.38.85-.85.85H2.85a.85.85 0 0 1-.85-.85V7.75c0-.47.38-.85.85-.85h4.59a4.6 4.6 0 0 1 1.308-2.652m7.327 9.328a4.075 4.075 0 1 1-8.15 0 4.075 4.075 0 0 1 8.15 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCamera;
