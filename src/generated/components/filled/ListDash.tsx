import type { SVGProps } from "react";
const SvgListDash = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.8 8.2H4V7h2.8zM20 7H8.83v1.2H20zm0 4.4H8.83v1.2H20zM8.83 15.8H20V17H8.83zM4 12.6h2.8v-1.2H4zM6.8 17H4v-1.2h2.8z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgListDash;
