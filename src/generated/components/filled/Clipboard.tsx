import type { SVGProps } from "react";
const SvgClipboard = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.398 4.85c0-.469.381-.85.85-.85h2.75v1.2h8V4h2.75c.47 0 .85.381.85.85v15.5c0 .47-.38.85-.85.85h-13.5a.85.85 0 0 1-.85-.85z"
    />
    <path fill="currentColor" d="M7.999 2.8h8V4h-8z" />
  </svg>
);
export default SvgClipboard;
