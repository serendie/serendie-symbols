import type { SVGProps } from "react";
const SvgSlash = (props: SVGProps<SVGSVGElement>) => (
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
      d="M19.04 18.192A9.34 9.34 0 0 0 21.375 12 9.375 9.375 0 0 0 12 2.625 9.34 9.34 0 0 0 5.808 4.96zm-.849.848A9.34 9.34 0 0 1 12 21.375 9.375 9.375 0 0 1 2.625 12 9.34 9.34 0 0 1 4.96 5.809z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSlash;
