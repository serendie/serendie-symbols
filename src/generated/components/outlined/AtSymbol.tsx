import type { SVGProps } from "react";
const SvgAtSymbol = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12.799 3.261V2.057c5.134.407 9.174 4.703 9.174 9.943s-4.04 9.536-9.174 9.943V20.74a8.76 8.76 0 0 0 5.898-3.07c-1.404-.407-2.52-1.507-3.017-2.91A4.6 4.6 0 1 1 16.599 12v1.114c0 1.817 1.273 3.27 2.869 3.493a8.776 8.776 0 0 0-6.67-13.346m-1.6 17.478a8.776 8.776 0 0 1 0-17.478V2.057C6.062 2.464 2.022 6.76 2.022 12s4.04 9.536 9.176 9.943zm4.2-8.739a3.4 3.4 0 1 0-6.8 0 3.4 3.4 0 0 0 6.8 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgAtSymbol;
