import type { SVGProps } from "react";
const SvgArrowUpCircle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M21.375 12a9.375 9.375 0 1 1-18.75 0 9.375 9.375 0 1 1 18.75 0M12.6 9.448l2.732 2.732.848-.848-3.58-3.58a.85.85 0 0 0-1.201 0l-3.58 3.58.848.849L11.4 9.448V16h1.2z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgArrowUpCircle;
