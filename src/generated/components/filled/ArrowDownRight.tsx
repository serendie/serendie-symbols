import type { SVGProps } from "react";
const SvgArrowDownRight = (props: SVGProps<SVGSVGElement>) => (
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
      d="M17.312 16.464 6.337 5.486l-.849.849 10.976 10.977h-9.82v1.2h11.018c.47 0 .85-.38.85-.85V6.642h-1.2z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgArrowDownRight;
