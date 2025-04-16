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
      d="M7.4 7.4V4h1.2v3.4h7.15c.47 0 .85.38.85.85v7.15H20v1.2h-3.4V20h-1.2v-3.4H8.25a.85.85 0 0 1-.85-.85V8.6H4V7.4zm1.2 1.2v6.8h6.8V8.6z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCrop;
