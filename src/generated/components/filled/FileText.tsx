import type { SVGProps } from "react";
const SvgFileText = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.248 3.4a.85.85 0 0 0-.85.85v15.5c0 .47.381.85.85.85h13.5c.47 0 .85-.38.85-.85V4.25a.85.85 0 0 0-.85-.85zm2.75 6.2h8V8.4h-8zm8 3h-8v-1.2h8zm-8 3h6v-1.2h-6z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgFileText;
