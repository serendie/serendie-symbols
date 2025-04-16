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
      d="M2.398 7.75c0-.47.381-.85.85-.85h13.5c.47 0 .85.38.85.85v8.5c0 .47-.38.85-.85.85h-13.5a.85.85 0 0 1-.85-.85zm1.2.35v7.8h12.8V8.1zm16.8 2.5h-1.2V9.4h1.55c.47 0 .85.381.85.85v3.5c0 .47-.38.85-.85.85h-1.55v-1.2h1.2z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgBattery;
