import type { SVGProps } from "react";
const SvgMonitor = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.873 3a.85.85 0 0 0-.85.85v11.219c0 .47.381.85.85.85h18.25c.47 0 .85-.38.85-.85V3.85a.85.85 0 0 0-.85-.85zM15.998 17.52v1.2h-8v-1.2zm0 2.4h-8v1.2h8z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgMonitor;
