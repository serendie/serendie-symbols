import type { SVGProps } from "react";
const SvgServer = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.523 5.25c0-.47.381-.85.85-.85h17.25c.47 0 .85.38.85.85v5.5c0 .47-.38.85-.85.85H3.373a.85.85 0 0 1-.85-.85zm1.2.35v4.8h16.55V5.6zm2.525 2a.4.4 0 1 0 0 .8.4.4 0 0 0 0-.8m-1.6.4a1.6 1.6 0 1 1 3.2 0 1.6 1.6 0 0 1-3.2 0m-2.125 5.25c0-.47.381-.85.85-.85h17.25c.47 0 .85.38.85.85v5.5c0 .47-.38.85-.85.85H3.373a.85.85 0 0 1-.85-.85zm1.2.35v4.8h16.55v-4.8zm2.525 2a.4.4 0 1 0 0 .8.4.4 0 0 0 0-.8m-1.6.4a1.6 1.6 0 1 1 3.2 0 1.6 1.6 0 0 1-3.2 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgServer;
