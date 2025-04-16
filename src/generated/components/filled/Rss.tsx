import type { SVGProps } from "react";
const SvgRss = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4 8.4A11.6 11.6 0 0 1 15.6 20h-1.2A10.4 10.4 0 0 0 4 9.6z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M4 3.4A16.6 16.6 0 0 1 20.6 20h-1.2A15.4 15.4 0 0 0 4 4.6zM6.85 14.3a2.85 2.85 0 1 0 0 5.7 2.85 2.85 0 0 0 0-5.7"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgRss;
