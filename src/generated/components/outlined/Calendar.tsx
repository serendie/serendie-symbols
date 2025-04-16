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
      d="M7.6 3.4v2h1.3v-2zm-1.2-.35c0-.47.38-.85.85-.85h2c.47 0 .85.38.85.85v.75h3.8v-.75c0-.47.38-.85.85-.85h2c.47 0 .85.38.85.85v.75h2.55c.47 0 .85.38.85.85V9.6h-1.2V5h-2.2v.75c0 .469-.38.85-.85.85h-2a.85.85 0 0 1-.85-.85V5h-3.8v.75c0 .469-.38.85-.85.85h-2a.85.85 0 0 1-.85-.85V5H4.2v4.6H3V4.65c0-.47.38-.85.85-.85H6.4zm8.7.35v2h1.3v-2zm3.5 7.6H5.4V9.8h13.2zM4.2 20.6v-9.4H3v9.75c0 .469.38.85.85.85h16.3c.47 0 .85-.381.85-.85V11.2h-1.2v9.4z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCalendar;
