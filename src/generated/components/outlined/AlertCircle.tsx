import type { SVGProps } from "react";
const SvgAlertCircle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12.799 2.057V3.26a8.776 8.776 0 0 1 0 17.478v1.204c5.134-.407 9.174-4.703 9.174-9.943s-4.04-9.536-9.174-9.943M3.223 12a8.776 8.776 0 0 0 7.975 8.74v1.203C6.063 21.536 2.023 17.24 2.023 12s4.04-9.536 9.176-9.943V3.26A8.776 8.776 0 0 0 3.222 12m8.175-5.9v8h1.2v-8zm1.4 11a.8.8 0 1 0-1.6 0 .8.8 0 0 0 1.6 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgAlertCircle;
