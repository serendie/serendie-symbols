import type { SVGProps } from "react";
const SvgRecordCircle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12.798 3.261V2.057c5.135.407 9.175 4.703 9.175 9.943s-4.04 9.536-9.175 9.943V20.74a8.776 8.776 0 0 0 0-17.478m-1.6 17.478a8.776 8.776 0 0 1 0-17.478V2.057C6.063 2.464 2.023 6.76 2.023 12s4.04 9.536 9.175 9.943zm.8-11.514a2.775 2.775 0 1 0 0 5.55 2.775 2.775 0 0 0 0-5.55M8.023 12a3.975 3.975 0 1 1 7.95 0 3.975 3.975 0 0 1-7.95 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgRecordCircle;
