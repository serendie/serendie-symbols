import type { SVGProps } from "react";
const SvgSmile = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 25 24"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M2.523 12c0-5.24 4.04-9.536 9.175-9.943V3.26a8.776 8.776 0 0 0 0 17.478v1.204C6.563 21.536 2.523 17.24 2.523 12m10.775 9.943c5.135-.407 9.175-4.703 9.175-9.943s-4.04-9.536-9.175-9.943V3.26a8.776 8.776 0 0 1 0 17.478zM8.998 8.6a.4.4 0 1 0 0 .8.4.4 0 0 0 0-.8m-1.6.4a1.6 1.6 0 1 1 3.2 0 1.6 1.6 0 0 1-3.2 0m8.6-.4a.4.4 0 1 0 0 .8.4.4 0 0 0 0-.8m-1.6.4a1.6 1.6 0 1 1 3.2 0 1.6 1.6 0 0 1-3.2 0m-7.3 3a5.4 5.4 0 1 0 10.8 0h1.2a6.6 6.6 0 1 1-13.2 0z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSmile;
