import type { SVGProps } from "react";
const SvgChatRectangle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.898 5c0-.47.381-.85.85-.85h16.5c.47 0 .85.38.85.85v11.5c0 .47-.38.85-.85.85H8.64L4.13 19.606a.85.85 0 0 1-1.23-.76zm1.2.35v12.93l4.08-2.04a.85.85 0 0 1 .38-.09h11.34V5.35z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgChatRectangle;
