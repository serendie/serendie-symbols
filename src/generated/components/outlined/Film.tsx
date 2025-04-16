import type { SVGProps } from "react";
const SvgFilm = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.523 3.375c0-.47.381-.85.85-.85h17.25c.47 0 .85.38.85.85v17.25c0 .47-.38.85-.85.85H3.373a.85.85 0 0 1-.85-.85zm1.2.35V6.9h2.675V3.725zm3.875 0V11.4h8.8V3.725zm10 0V6.9h2.675V3.725zM20.273 8.1h-2.675v3.3h2.675zm0 4.5h-2.675v2.8h2.675zm0 4h-2.675v3.675h2.675zm-3.875 3.675V12.6h-8.8v7.675zm-10 0V16.6H3.723v3.675zM3.723 15.4h2.675v-2.8H3.723zm0-4h2.675V8.1H3.723z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgFilm;
