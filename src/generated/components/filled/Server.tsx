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
    <path fill="currentColor" d="M5.848 8a.4.4 0 1 1 .8 0 .4.4 0 0 1-.8 0" />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M2.523 5.25c0-.47.381-.85.85-.85h17.25c.47 0 .85.38.85.85v5.5c0 .47-.38.85-.85.85H3.373a.85.85 0 0 1-.85-.85zM6.248 6.4a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2"
      clipRule="evenodd"
    />
    <path fill="currentColor" d="M5.848 16a.4.4 0 1 1 .8 0 .4.4 0 0 1-.8 0" />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M2.523 13.25c0-.47.381-.85.85-.85h17.25c.47 0 .85.38.85.85v5.5c0 .47-.38.85-.85.85H3.373a.85.85 0 0 1-.85-.85zm3.725 1.15a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgServer;
