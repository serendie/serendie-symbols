import type { SVGProps } from "react";
const SvgPause = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.398 6.25c0-.47.381-.85.85-.85h3.5c.47 0 .85.38.85.85v11.5c0 .47-.38.85-.85.85h-3.5a.85.85 0 0 1-.85-.85zm1.2.35v10.8h2.8V6.6zm6.8-.35c0-.47.381-.85.85-.85h3.5c.47 0 .85.38.85.85v11.5c0 .47-.38.85-.85.85h-3.5a.85.85 0 0 1-.85-.85zm1.2.35v10.8h2.8V6.6z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgPause;
