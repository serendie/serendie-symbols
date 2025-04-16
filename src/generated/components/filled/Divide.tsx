import type { SVGProps } from "react";
const SvgDivide = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 3.525a2.85 2.85 0 1 1 0 5.7 2.85 2.85 0 0 1 0-5.7m0 11.25a2.85 2.85 0 1 1 0 5.7 2.85 2.85 0 0 1 0-5.7m9-3.375H3v1.2h18z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgDivide;
