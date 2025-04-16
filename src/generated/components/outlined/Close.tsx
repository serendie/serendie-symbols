import type { SVGProps } from "react";
const SvgClose = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.15 12 5.21 6.06l.85-.85L12 11.15l5.939-5.94.848.85-5.94 5.94 5.94 5.939-.848.848-5.94-5.94-5.94 5.94-.848-.848z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgClose;
