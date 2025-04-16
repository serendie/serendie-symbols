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
      d="M15.496 20.351a.85.85 0 0 1-.601.25H4.248a.85.85 0 0 1-.85-.85V4.25c0-.47.381-.85.85-.85h15.5c.47 0 .85.38.85.85v10.646a.85.85 0 0 1-.248.6zm-2.098-6.1v3.538h1.2V14.6h3.2v-1.2h-3.55a.85.85 0 0 0-.85.85"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgStickyNote;
