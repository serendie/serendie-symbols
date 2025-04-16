import type { SVGProps } from "react";
const SvgChevronRight = (props: SVGProps<SVGSVGElement>) => (
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
      d="m9.595 5.918 5.48 5.48a.85.85 0 0 1 0 1.202l-5.48 5.48-.849-.848 5.233-5.233-5.233-5.233z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgChevronRight;
