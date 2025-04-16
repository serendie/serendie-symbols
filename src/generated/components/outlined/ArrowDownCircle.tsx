import type { SVGProps } from "react";
const SvgArrowDownCircle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12.799 3.261V2.057c5.134.407 9.174 4.703 9.174 9.943s-4.04 9.536-9.174 9.943V20.74a8.776 8.776 0 0 0 0-17.478m-1.6 17.478a8.776 8.776 0 0 1 0-17.478V2.057C6.062 2.464 2.022 6.76 2.022 12s4.04 9.536 9.176 9.943zm.199-6.188L8.666 11.82l-.848.849 3.58 3.58a.85.85 0 0 0 1.201 0l3.58-3.58-.848-.849-2.733 2.733V8h-1.2z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgArrowDownCircle;
