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
      d="m12 12.848 5.939 5.94.848-.85L12.847 12l5.94-5.94-.848-.848-5.94 5.94-5.94-5.94-.848.848L11.15 12l-5.94 5.94.849.848z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgClose;
