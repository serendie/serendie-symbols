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
      d="M9.053 5.4a.85.85 0 0 0-.6.25l-5.75 5.75a.85.85 0 0 0 0 1.201l5.75 5.75a.85.85 0 0 0 .6.25H20.7c.469 0 .85-.381.85-.85V6.25a.85.85 0 0 0-.85-.85zm4.048 6.6-2.576-2.575.849-.849 2.576 2.576 2.575-2.576.849.849L14.798 12l2.576 2.575-.849.849-2.575-2.576-2.576 2.576-.849-.849z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgDelete;
