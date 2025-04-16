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
      fillRule="evenodd"
      d="M15.998 4h-8V2.8h8zm-10.4 1.2h.6V4h-.95a.85.85 0 0 0-.85.85v15.5c0 .47.381.85.85.85h13.5c.47 0 .85-.38.85-.85V4.85a.85.85 0 0 0-.85-.85h-1.15v1.2h.8V20h-12.8zm10.4 1.2h-8V5.2h8z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgClipboard;
