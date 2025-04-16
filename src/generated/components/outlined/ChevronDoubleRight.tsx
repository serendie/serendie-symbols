import type { SVGProps } from "react";
const SvgChevronDoubleRight = (props: SVGProps<SVGSVGElement>) => (
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
      d="m13.423 7.576 3.823 3.823a.85.85 0 0 1 0 1.203l-3.823 3.823-.849-.849L16.15 12l-3.576-3.575zm-6 0 3.823 3.823a.85.85 0 0 1 0 1.203l-3.823 3.823-.849-.849L10.15 12 6.574 8.425z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgChevronDoubleRight;
