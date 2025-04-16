import type { SVGProps } from "react";
const SvgStickyNote = (props: SVGProps<SVGSVGElement>) => (
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
      d="m14.753 19.4 4.649-4.649V4.6h-14.8v14.8zm.746.95a.85.85 0 0 1-.601.25H4.252a.85.85 0 0 1-.85-.85V4.25c0-.47.38-.85.85-.85h15.5c.469 0 .85.38.85.85v10.646a.85.85 0 0 1-.25.601zm-2.097-2.561v-3.54c0-.469.38-.85.85-.85h3.55v1.2h-3.2v3.19z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgStickyNote;
