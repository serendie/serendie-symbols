import type { SVGProps } from "react";
const SvgCpu = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9.4 4.4V2h1.2v2.4h2.8V2h1.2v2.4h4.15c.47 0 .85.38.85.85V9.4H22v1.2h-2.4v2.8H22v1.2h-2.4v4.15c0 .47-.38.85-.85.85H14.6V22h-1.2v-2.4h-2.8V22H9.4v-2.4H5.25a.85.85 0 0 1-.85-.85V14.6H2v-1.2h2.4v-2.8H2V9.4h2.4V5.25c0-.47.38-.85.85-.85zM5.6 5.6v12.8h12.8V5.6zm2.8 3.65c0-.47.38-.85.85-.85h5.5c.47 0 .85.38.85.85v5.5c0 .47-.38.85-.85.85h-5.5a.85.85 0 0 1-.85-.85zm1.2.35v4.8h4.8V9.6z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCpu;
