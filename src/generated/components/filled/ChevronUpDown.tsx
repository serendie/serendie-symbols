import type { SVGProps } from "react";
const SvgChevronUpDown = (props: SVGProps<SVGSVGElement>) => (
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
      d="m12.6 5.632 3.823 3.823-.849.848L12 6.728l-3.576 3.576-.849-.849 3.824-3.823a.85.85 0 0 1 1.202 0M11.397 18.369l-3.823-3.823.849-.849 3.576 3.576 3.575-3.576.849.849-3.823 3.823a.85.85 0 0 1-1.203 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgChevronUpDown;
