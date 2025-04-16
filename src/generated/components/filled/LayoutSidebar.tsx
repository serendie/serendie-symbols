import type { SVGProps } from "react";
const SvgLayoutSidebar = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.248 2.4a.85.85 0 0 0-.85.85V7.4h19.2V3.25a.85.85 0 0 0-.85-.85zm-.85 18.35V8.6h5v12.987h1.2V8.6h13v12.15c0 .47-.38.85-.85.85h-17.5a.85.85 0 0 1-.85-.85"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgLayoutSidebar;
