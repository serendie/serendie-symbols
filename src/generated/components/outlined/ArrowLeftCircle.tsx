import type { SVGProps } from "react";
const SvgArrowLeftCircle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12.799 3.261V2.057c5.134.407 9.174 4.703 9.174 9.943s-4.04 9.536-9.174 9.943V20.74a8.776 8.776 0 0 0 0-17.478m-1.6 17.478a8.776 8.776 0 0 1 0-17.478V2.057C6.062 2.464 2.022 6.76 2.022 12s4.04 9.536 9.176 9.943zM7.75 11.4l3.58-3.58.849.849L9.447 11.4h6.552v1.2H9.445l2.733 2.733-.848.848-3.58-3.58a.85.85 0 0 1 0-1.202"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgArrowLeftCircle;
