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
      d="M2.023 3.85c0-.47.381-.85.85-.85h18.25c.47 0 .85.38.85.85v11.219c0 .47-.38.85-.85.85H2.873a.85.85 0 0 1-.85-.85zm1.2.35v10.519h17.55V4.2zm12.775 14.5h-8v-1.2h8zm0 2.4h-8v-1.2h8z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgMonitor;
