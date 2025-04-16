import type { SVGProps } from "react";
const SvgListBullet = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.816 7h11.17v1.2H8.816zM8.816 11.4h11.17v1.2H8.816zM8.816 15.8h11.17V17H8.816z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M7.212 7.6a1.6 1.6 0 1 0-3.2 0 1.6 1.6 0 0 0 3.2 0M7.212 12a1.6 1.6 0 1 0-3.2 0 1.6 1.6 0 0 0 3.2 0M7.212 16.4a1.6 1.6 0 1 0-3.2 0 1.6 1.6 0 0 0 3.2 0"
    />
  </svg>
);
export default SvgListBullet;
