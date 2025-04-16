import type { SVGProps } from "react";
const SvgTag = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.85 4.563a.85.85 0 0 1 .842-.827l6.541-.062a.85.85 0 0 1 .61.249l8.234 8.234a.85.85 0 0 1 0 1.202l-6.718 6.718a.85.85 0 0 1-1.202 0l-8.232-8.233a.85.85 0 0 1-.249-.623zm1.191.37-.161 6.169 7.878 7.879 6.223-6.223-7.883-7.883z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M7.588 7.588a.4.4 0 1 0 .566.565.4.4 0 0 0-.566-.565m-.849 1.414a1.6 1.6 0 1 1 2.263-2.263A1.6 1.6 0 0 1 6.74 9.002"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgTag;
