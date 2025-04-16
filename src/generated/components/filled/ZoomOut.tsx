import type { SVGProps } from "react";
const SvgZoomOut = (props: SVGProps<SVGSVGElement>) => (
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
      d="m21.144 21.991-5.063-5.063.848-.848 5.063 5.063zM18.004 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0M7 9.4v1.2h6V9.4z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgZoomOut;
