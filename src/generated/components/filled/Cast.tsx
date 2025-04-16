import type { SVGProps } from "react";
const SvgCast = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.2 15.106a3.693 3.693 0 0 1 3.693 3.693h-1.2a2.494 2.494 0 0 0-2.494-2.493z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M3.2 12.27a6.53 6.53 0 0 1 6.528 6.529h-1.2a5.33 5.33 0 0 0-5.329-5.33z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M5.85 7.6a.25.25 0 0 0-.25.25v3.601a7.73 7.73 0 0 1 4.947 4.948h7.602a.25.25 0 0 0 .25-.25v-8.3a.25.25 0 0 0-.25-.25z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M3.2 6.004c0-.444.36-.805.805-.805h15.989c.445 0 .805.36.805.805v11.99c0 .445-.36.805-.805.805H11.33v-1.2h8.269V6.4h-15.2v3.97H3.2z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCast;
