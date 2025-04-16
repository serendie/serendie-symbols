import type { SVGProps } from "react";
const SvgPlayCircle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M21.375 12a9.375 9.375 0 1 1-18.75 0 9.375 9.375 0 1 1 18.75 0M10.7 8.476a.8.8 0 0 0-1.244.666v5.716a.8.8 0 0 0 1.244.666l4.287-2.858a.8.8 0 0 0 0-1.332z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgPlayCircle;
