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
      d="M4.692 3.736a.85.85 0 0 0-.841.827l-.175 6.658a.85.85 0 0 0 .249.623l8.232 8.233a.85.85 0 0 0 1.202 0l6.718-6.718a.85.85 0 0 0 0-1.202l-8.234-8.234a.85.85 0 0 0-.61-.25zm2.896 4.417a.4.4 0 1 1 .565-.565.4.4 0 0 1-.565.565M6.739 6.74a1.6 1.6 0 1 0 2.263 2.263 1.6 1.6 0 0 0-2.263-2.263"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgTag;
