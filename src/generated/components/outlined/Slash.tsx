import type { SVGProps } from "react";
const SvgSlash = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12.798 3.261V2.057c5.135.407 9.175 4.703 9.175 9.943s-4.04 9.536-9.175 9.944v-1.205a8.74 8.74 0 0 0 4.967-2.124L5.384 6.235a8.776 8.776 0 0 0 5.814 14.505v1.203C6.063 21.536 2.023 17.24 2.023 12s4.04-9.536 9.175-9.943V3.26a8.74 8.74 0 0 0-4.966 2.125l12.381 12.38a8.776 8.776 0 0 0-5.815-14.505"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSlash;
