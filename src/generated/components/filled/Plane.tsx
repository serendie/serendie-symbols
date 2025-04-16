import type { SVGProps } from "react";
const SvgPlane = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.998 2.03a2.6 2.6 0 0 0-2.6 2.6v3.9l-5.66 4.244a.85.85 0 0 0-.34.68v2.028c0 .58.569.99 1.12.807l4.88-1.627v3.367l-1.66 1.245a.85.85 0 0 0-.34.68v1.055a.85.85 0 0 0 1.057.825l3.543-.886 3.544.886a.85.85 0 0 0 1.056-.825v-1.055a.85.85 0 0 0-.34-.68l-1.66-1.245v-3.367l4.882 1.627a.85.85 0 0 0 1.118-.807v-2.028a.85.85 0 0 0-.34-.68l-5.66-4.245v-3.9a2.6 2.6 0 0 0-2.6-2.6"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgPlane;
