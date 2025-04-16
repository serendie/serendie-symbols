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
      d="M8.83 7H20v1.2H8.83zM4 7h2.8v1.2H4zm4.83 4.4H20v1.2H8.83zM4 11.4h2.8v1.2H4zm0 4.4h2.8V17H4zm4.83 0H20V17H8.83z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgListDash;
