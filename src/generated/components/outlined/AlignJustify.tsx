import type { SVGProps } from "react";
const SvgAlignJustify = (props: SVGProps<SVGSVGElement>) => (
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
      d="M20 7.6H4V6.4h16zm0 3.5H4V9.9h16zm0 3.5H4v-1.2h16zm0 3.5H4v-1.2h16z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgAlignJustify;
