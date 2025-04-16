import type { SVGProps } from "react";
const SvgPercent = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.498 4.4a3.1 3.1 0 1 1 0 6.2 3.1 3.1 0 0 1 0-6.2m11.076.176-14 14 .849.849 14-14zM19.598 16.5a3.1 3.1 0 1 0-6.2 0 3.1 3.1 0 0 0 6.2 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgPercent;
