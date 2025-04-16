import type { SVGProps } from "react";
const SvgPlay = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.231 7.12v9.758L15.55 12zm7.755 4.588ZM7.031 6.467a.85.85 0 0 1 1.322-.708l8.3 5.533a.85.85 0 0 1 0 1.415l-8.3 5.533a.85.85 0 0 1-1.322-.708z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgPlay;
