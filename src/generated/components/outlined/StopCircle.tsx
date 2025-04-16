import type { SVGProps } from "react";
const SvgStopCircle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12.798 3.261V2.057c5.135.407 9.175 4.703 9.175 9.943s-4.04 9.536-9.175 9.943V20.74a8.776 8.776 0 0 0 0-17.478m-1.6 17.478a8.776 8.776 0 0 1 0-17.478V2.057C6.063 2.464 2.023 6.76 2.023 12s4.04 9.536 9.175 9.943zM8.023 8.875c0-.47.38-.85.85-.85h6.25c.47 0 .85.38.85.85v6.25c0 .47-.38.85-.85.85h-6.25a.85.85 0 0 1-.85-.85zm1.2.35v5.55h5.55v-5.55z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgStopCircle;
