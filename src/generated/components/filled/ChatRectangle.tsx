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
      d="M3.748 4.15a.85.85 0 0 0-.85.85v13.846a.85.85 0 0 0 1.23.76L8.64 17.35h11.608c.47 0 .85-.38.85-.85V5a.85.85 0 0 0-.85-.85z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgChatRectangle;
