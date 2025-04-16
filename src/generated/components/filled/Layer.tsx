import type { SVGProps } from "react";
const SvgLayer = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12.348 3.794a.85.85 0 0 0-.698 0L3.78 7.336a.85.85 0 0 0 .02 1.56l7.873 3.287a.85.85 0 0 0 .655 0l7.871-3.288a.85.85 0 0 0 .022-1.56z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 14.544 3.716 11.31l-.436 1.117 8.403 3.281a.87.87 0 0 0 .63 0l8.403-3.28-.436-1.118z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="m12 18.062-8.283-3.233-.436 1.118 8.403 3.28a.87.87 0 0 0 .63 0l8.403-3.28-.436-1.118z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgLayer;
