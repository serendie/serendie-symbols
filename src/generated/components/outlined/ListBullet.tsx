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
      d="M5.627 7.2a.4.4 0 1 0 0 .8.4.4 0 0 0 0-.8m-1.6.4a1.6 1.6 0 1 1 3.2 0 1.6 1.6 0 0 1-3.2 0M8.831 7h11.17v1.2H8.831zm-3.204 4.6a.4.4 0 1 0 0 .8.4.4 0 0 0 0-.8m-1.6.4a1.6 1.6 0 1 1 3.2 0 1.6 1.6 0 0 1-3.2 0m4.804-.6h11.17v1.2H8.831zM5.627 16a.4.4 0 1 0 0 .8.4.4 0 0 0 0-.8m-1.6.4a1.6 1.6 0 1 1 3.2 0 1.6 1.6 0 0 1-3.2 0m4.804-.6h11.17V17H8.831z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgListBullet;
