import type { SVGProps } from "react";
const SvgZoomIn = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10.004 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16m11.14 3.991-5.063-5.063.848-.848 5.063 5.063zM9.4 10.6h-2.4V9.4h2.4V7h1.2v2.4h2.4v1.2h-2.4V13h-1.2z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgZoomIn;
