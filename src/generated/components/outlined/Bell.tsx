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
      fillRule="evenodd"
      d="M10.162 2.762A2.6 2.6 0 0 1 14.6 4.6h-1.2a1.4 1.4 0 0 0-2.8 0H9.4c0-.69.274-1.35.761-1.838M7.333 7.333A6.6 6.6 0 0 1 18.6 12h-1.2a5.4 5.4 0 0 0-10.8 0H5.4a6.6 6.6 0 0 1 1.933-4.667M6.6 13.6V16c0 .5-.144.985-.41 1.4h11.62a2.6 2.6 0 0 1-.41-1.4v-2.4h1.2V16a1.4 1.4 0 0 0 1.4 1.4v1.2H4v-1.2A1.4 1.4 0 0 0 5.4 16v-2.4zm4 5.8a1.4 1.4 0 1 0 2.8 0h1.2a2.6 2.6 0 1 1-5.2 0z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgBell;
