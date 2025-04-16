import type { SVGProps } from "react";
const SvgBattery = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.248 6.9a.85.85 0 0 0-.85.85v8.5c0 .47.381.85.85.85h13.5c.47 0 .85-.38.85-.85v-8.5a.85.85 0 0 0-.85-.85zM19.448 9.4a.85.85 0 0 0-.85.85v3.5c0 .47.38.85.85.85h1.3c.47 0 .85-.38.85-.85v-3.5a.85.85 0 0 0-.85-.85z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgBattery;
