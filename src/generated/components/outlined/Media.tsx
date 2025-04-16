import type { SVGProps } from "react";
const SvgMedia = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 4.25c0-.47.38-.85.85-.85H21.1c.47 0 .85.38.85.85v15.5c0 .47-.38.85-.85.85H2.85a.85.85 0 0 1-.85-.85zm1.2.35v14.8h17.55V4.6zm6.9 5.006v4.79L14.291 12zm-1.2-.603a.85.85 0 0 1 1.272-.738l5.246 2.997a.85.85 0 0 1 0 1.476l-5.246 2.998a.85.85 0 0 1-1.272-.738z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgMedia;
