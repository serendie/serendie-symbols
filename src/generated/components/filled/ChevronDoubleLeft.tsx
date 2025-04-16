import type { SVGProps } from "react";
const SvgChevronDoubleLeft = (props: SVGProps<SVGSVGElement>) => (
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
      d="m12.753 11.4 3.823-3.824.849.849L13.849 12l3.576 3.576-.849.849-3.823-3.824a.85.85 0 0 1 0-1.202M6.753 11.4l3.823-3.824.849.849L7.849 12l3.576 3.576-.849.849L6.753 12.6a.85.85 0 0 1 0-1.202"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgChevronDoubleLeft;
