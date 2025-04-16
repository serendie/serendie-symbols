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
      d="M12.737 4.583a.85.85 0 0 0-1.476 0l-8.07 14.12a.85.85 0 0 0 .738 1.272h16.139a.85.85 0 0 0 .738-1.271z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgTriangle;
