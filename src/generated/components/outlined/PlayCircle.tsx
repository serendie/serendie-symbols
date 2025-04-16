import type { SVGProps } from "react";
const SvgPlayCircle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12.798 3.261V2.057c5.135.407 9.175 4.703 9.175 9.943s-4.04 9.536-9.175 9.943V20.74a8.776 8.776 0 0 0 0-17.478m-1.6 17.478a8.776 8.776 0 0 1 0-17.478V2.057C6.063 2.464 2.023 6.76 2.023 12s4.04 9.536 9.175 9.943zM10.38 9.496v5.008L14.136 12zm-1.2-.698a.827.827 0 0 1 1.285-.687l4.803 3.201a.827.827 0 0 1 0 1.376l-4.802 3.201a.827.827 0 0 1-1.286-.687z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgPlayCircle;
