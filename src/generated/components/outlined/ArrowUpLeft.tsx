import type { SVGProps } from "react";
const SvgArrowUpLeft = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.398 6.25c0-.47.381-.85.85-.85h11.02v1.2h-9.82l10.975 10.977-.849.848L6.598 7.448v9.823h-1.2z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgArrowUpLeft;
