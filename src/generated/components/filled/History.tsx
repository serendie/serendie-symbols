import type { SVGProps } from "react";
const SvgHistory = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.368 4.549A8.8 8.8 0 0 0 4.528 7.4h2.723v1.2h-3.75a.85.85 0 0 1-.85-.85V4h1.2v2.25a9.974 9.974 0 0 1 18.093 4.95H20.74A8.775 8.775 0 0 0 7.368 4.55M20.74 12.8h1.204a9.975 9.975 0 0 1-19.886 0h1.205a8.775 8.775 0 0 0 17.477 0M11.402 6v5.897c0 .225.089.441.248.6l3.927 3.928.849-.849-3.824-3.824V6z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgHistory;
