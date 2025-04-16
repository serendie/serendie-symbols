import type { SVGProps } from "react";
const SvgCopy = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.599 4.25c0-.47.38-.85.85-.85h12.3c.469 0 .85.38.85.85v12.3c0 .47-.381.85-.85.85h-1.15v-1.2h.8V4.6h-11.6v.8h-1.2zm-3.2 3.2c0-.47.38-.85.85-.85h12.299c.47 0 .85.381.85.85v12.3c0 .47-.38.85-.85.85h-12.3a.85.85 0 0 1-.85-.85zm1.2.35v11.6h11.599V7.8z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCopy;
