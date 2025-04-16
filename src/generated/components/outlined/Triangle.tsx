import type { SVGProps } from "react";
const SvgTriangle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.26 4.583a.85.85 0 0 1 1.477 0l8.069 14.12a.85.85 0 0 1-.738 1.272H3.929a.85.85 0 0 1-.738-1.271zM12 5.71 4.532 18.775h14.933z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgTriangle;
