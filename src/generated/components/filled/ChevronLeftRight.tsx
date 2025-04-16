import type { SVGProps } from "react";
const SvgChevronLeftRight = (props: SVGProps<SVGSVGElement>) => (
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
      d="m5.632 11.4 3.823-3.824.848.849L6.728 12l3.576 3.576-.849.849L5.632 12.6a.85.85 0 0 1 0-1.202M18.369 12.602l-3.823 3.823-.849-.849L17.273 12l-3.576-3.575.849-.849 3.823 3.823a.85.85 0 0 1 0 1.203"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgChevronLeftRight;
