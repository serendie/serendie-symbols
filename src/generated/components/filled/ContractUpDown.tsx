import type { SVGProps } from "react";
const SvgContractUpDown = (props: SVGProps<SVGSVGElement>) => (
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
      d="m12.6 13.632 3.823 3.823-.849.849L12 14.728l-3.576 3.576-.849-.849 3.824-3.823a.85.85 0 0 1 1.202 0M11.397 10.127 7.574 6.304l.849-.849 3.576 3.576 3.575-3.576.849.849-3.823 3.823a.85.85 0 0 1-1.203 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgContractUpDown;
