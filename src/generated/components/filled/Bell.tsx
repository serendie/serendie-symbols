import type { SVGProps } from "react";
const SvgBell = (props: SVGProps<SVGSVGElement>) => (
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
      d="M13.414 3.185A2 2 0 0 1 14 4.6h-4a2 2 0 0 1 3.414-1.415"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M10 4.6a2 2 0 0 1 4 0z"
      clipRule="evenodd"
    />
    <path fill="currentColor" d="M12 21.4a2 2 0 0 0 2-2h-4a2 2 0 0 0 2 2" />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M10 19.4h4a1.997 1.997 0 0 1-2 2 1.997 1.997 0 0 1-2-2M5.4 12a6.6 6.6 0 0 1 13.2 0v4a1.4 1.4 0 0 0 1.4 1.4v1.2H4v-1.2A1.4 1.4 0 0 0 5.4 16z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgBell;
