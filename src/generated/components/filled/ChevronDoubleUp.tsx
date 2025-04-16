import type { SVGProps } from "react";
const SvgChevronDoubleUp = (props: SVGProps<SVGSVGElement>) => (
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
      d="m12.6 12.753 3.823 3.823-.849.849L12 13.849l-3.576 3.576-.849-.849 3.823-3.823a.85.85 0 0 1 1.203 0M12.6 6.753l3.823 3.823-.849.849L12 7.849l-3.576 3.576-.849-.849 3.823-3.823a.85.85 0 0 1 1.203 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgChevronDoubleUp;
