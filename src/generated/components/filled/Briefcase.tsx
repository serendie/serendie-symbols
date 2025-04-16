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
      d="M2.898 9.65c0-.47.381-.85.85-.85h16.5c.47 0 .85.38.85.85v10.5c0 .47-.38.85-.85.85h-16.5a.85.85 0 0 1-.85-.85zm4 1.95v6.6h1.2v-6.6zm9 0v6.6h1.2v-6.6zM8.746 3.947A4.6 4.6 0 0 1 16.599 7.2h-1.2a3.4 3.4 0 1 0-6.8 0h-1.2a4.6 4.6 0 0 1 1.347-3.253"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgBriefcase;
