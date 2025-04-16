import type { SVGProps } from "react";
const SvgAward = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.45 8.874a5.55 5.55 0 1 1 11.1 0 5.55 5.55 0 0 1-11.1 0m9.85 5.204a6.72 6.72 0 0 1-4.3 1.546 6.72 6.72 0 0 1-4.302-1.548v5.747c0 .7.8 1.1 1.36.68l2.94-2.205 2.941 2.205a.85.85 0 0 0 1.36-.68z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgAward;
