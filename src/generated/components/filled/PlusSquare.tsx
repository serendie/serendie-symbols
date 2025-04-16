import type { SVGProps } from "react";
const SvgPlusSquare = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.373 2.525a.85.85 0 0 0-.85.85v17.25c0 .47.381.85.85.85h17.25c.47 0 .85-.38.85-.85V3.375a.85.85 0 0 0-.85-.85zM11.4 12.6h-3.4v-1.2h3.4V8h1.2v3.4h3.4v1.2h-3.4V16h-1.2z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgPlusSquare;
