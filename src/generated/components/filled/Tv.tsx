import type { SVGProps } from "react";
const SvgTv = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.423 4.576 11.247 7.4h1.503l2.824-2.824.849.849L14.447 7.4h6.051c.47 0 .85.381.85.85v10.723c0 .47-.38.85-.85.85h-17a.85.85 0 0 1-.85-.85V8.25c0-.469.381-.85.85-.85H9.55L7.574 5.425z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgTv;
