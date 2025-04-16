import type { SVGProps } from "react";
const SvgChevronLeft = (props: SVGProps<SVGSVGElement>) => (
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
      d="m8.925 11.398 5.48-5.48.848.848L10.021 12l5.232 5.233-.848.848-5.48-5.48a.85.85 0 0 1 0-1.202"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgChevronLeft;
