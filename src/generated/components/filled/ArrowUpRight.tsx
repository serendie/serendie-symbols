import type { SVGProps } from "react";
const SvgArrowUpRight = (props: SVGProps<SVGSVGElement>) => (
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
      d="M18.514 17.357V6.338a.85.85 0 0 0-.85-.85H6.644v1.2h9.821L5.488 17.664l.849.848L17.314 7.537v9.82z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgArrowUpRight;
