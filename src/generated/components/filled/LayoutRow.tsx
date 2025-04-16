import type { SVGProps } from "react";
const SvgLayoutRow = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.398 3.25c0-.47.381-.85.85-.85h17.5c.47 0 .85.38.85.85v8.15h-19.2zm0 9.35v8.15c0 .47.381.85.85.85h17.5c.47 0 .85-.38.85-.85V12.6z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgLayoutRow;
