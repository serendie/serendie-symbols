import type { SVGProps } from "react";
const SvgBriefcase = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.746 3.947A4.6 4.6 0 0 1 16.598 7.2h-1.2a3.4 3.4 0 1 0-6.8 0h-1.2a4.6 4.6 0 0 1 1.348-3.253M4.098 10v9.8h15.8V10zm-1.2-.35c0-.47.381-.85.85-.85h16.5c.47 0 .85.38.85.85v10.5c0 .47-.38.85-.85.85h-16.5a.85.85 0 0 1-.85-.85zm4 8.55v-6.6h1.2v6.6zm9 0v-6.6h1.2v6.6z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgBriefcase;
