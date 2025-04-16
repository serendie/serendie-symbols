import type { SVGProps } from "react";
const SvgCrop = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.4 15.75V8.6H4V7.4h3.4V4h1.2v3.4h7.15c.47 0 .85.38.85.85v7.15H20v1.2h-3.4V20h-1.2v-3.4H8.25a.85.85 0 0 1-.85-.85"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCrop;
