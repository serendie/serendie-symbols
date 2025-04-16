import type { SVGProps } from "react";
const SvgCloseSquare = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.523 3.375c0-.47.381-.85.85-.85h17.25c.47 0 .85.38.85.85v17.25c0 .47-.38.85-.85.85H3.373a.85.85 0 0 1-.85-.85zm1.2.35v16.55h16.55V3.725zM11.15 12 8.019 8.87l.848-.849 3.131 3.132L15.13 8.02l.848.849L12.847 12l3.131 3.132-.848.848-3.132-3.131-3.131 3.131-.848-.848z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCloseSquare;
