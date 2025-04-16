import type { SVGProps } from "react";
const SvgCircle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12.799 2.057V3.26a8.776 8.776 0 0 1 0 17.478v1.204c5.134-.407 9.174-4.703 9.174-9.943s-4.04-9.536-9.174-9.943m-1.6 19.886V20.74a8.776 8.776 0 0 1 0-17.478V2.057C6.062 2.464 2.022 6.76 2.022 12s4.04 9.536 9.176 9.943"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCircle;
