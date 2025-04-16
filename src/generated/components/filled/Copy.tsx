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
      d="M4.248 6.6a.85.85 0 0 0-.85.85v12.3c0 .47.381.85.85.85h12.3c.47 0 .85-.38.85-.85V7.45a.85.85 0 0 0-.85-.85z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M6.6 4.25c0-.47.38-.85.85-.85h12.298c.47 0 .85.38.85.85v12.3c0 .47-.38.85-.85.85h-1.15v-1.2h.8V4.6H7.8v.8H6.6z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCopy;
