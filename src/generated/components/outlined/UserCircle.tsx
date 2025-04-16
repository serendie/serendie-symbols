import type { SVGProps } from "react";
const SvgUserCircle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12.799 3.261V2.057c5.134.407 9.174 4.703 9.174 9.943s-4.04 9.536-9.174 9.943V20.74a8.776 8.776 0 0 0 0-17.478m-1.6 17.478a8.776 8.776 0 0 1 0-17.478V2.057C6.062 2.464 2.022 6.76 2.022 12s4.04 9.536 9.176 9.943zm.8-14.014a2.4 2.4 0 1 0 0 4.8 2.4 2.4 0 0 0 0-4.8m-3.6 2.4a3.6 3.6 0 1 1 7.2 0 3.6 3.6 0 0 1-7.2 0m3.6 5.975a3.4 3.4 0 0 0-3.4 3.4h-1.2a4.6 4.6 0 1 1 9.2 0h-1.2a3.4 3.4 0 0 0-3.4-3.4"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgUserCircle;
