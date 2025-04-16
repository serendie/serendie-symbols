import type { SVGProps } from "react";
const SvgSave = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.598 4.6v14.8h2.8v-5.114c0-.49.397-.886.886-.886h7.429c.489 0 .885.397.885.886V19.4h2.8V7.677L16.321 4.6zm10.8 14.8v-4.8h-6.8v4.8zm-12-15.114c0-.49.397-.886.886-.886h12.168c.234 0 .46.094.626.26l3.261 3.261c.166.166.26.391.26.626v12.168c0 .489-.397.885-.886.885H4.284a.886.886 0 0 1-.886-.885zm10.2 1.914a3.1 3.1 0 1 1-6.2 0h1.2a1.9 1.9 0 1 0 3.8 0z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSave;
