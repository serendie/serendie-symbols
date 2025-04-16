import type { SVGProps } from "react";
const SvgCalendar = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.85 2h.7C9.351 2 10 2.65 10 3.45V4h4v-.55c0-.8.65-1.45 1.45-1.45h.7c.801 0 1.45.65 1.45 1.45V4h2.55c.47 0 .85.38.85.85v16.3c0 .47-.38.85-.85.85H3.85a.85.85 0 0 1-.85-.85V4.85c0-.47.38-.85.85-.85H6.4v-.55c0-.8.65-1.45 1.45-1.45M5.4 11.2h13.2V10H5.4z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCalendar;
