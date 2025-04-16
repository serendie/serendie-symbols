import type { SVGProps } from "react";
const SvgArrowUpLeft = (props: SVGProps<SVGSVGElement>) => (
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
      d="M17.357 5.488H6.338a.85.85 0 0 0-.85.85v11.02h1.2V7.537l10.976 10.977.848-.848L7.538 6.688h9.819z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgArrowUpLeft;
