import type { SVGProps } from "react";
const SvgDelete = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.503 5.65a.85.85 0 0 1 .6-.25H20.75c.47 0 .85.38.85.85v11.5c0 .47-.38.85-.85.85H9.104a.85.85 0 0 1-.601-.249l.424-.424-.424.424-5.75-5.75a.85.85 0 0 1 0-1.202zm.746.95-5.4 5.4 5.4 5.4H20.4V6.6zm-5.647 5.153L3.353 12zm5.75-5.255-.248-.248zM14 11.152l2.576-2.576.849.849L14.849 12l2.576 2.576-.849.849L14 12.849l-2.575 2.576-.849-.849L13.152 12l-2.576-2.575.849-.849z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgDelete;
