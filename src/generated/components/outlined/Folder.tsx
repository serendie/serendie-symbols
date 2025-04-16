import type { SVGProps } from "react";
const SvgFolder = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.098 5.9v12.2h15.8V8.3h-9.782a.85.85 0 0 1-.653-.307L7.717 5.9zm-1.2-.35c0-.47.381-.85.85-.85h4.133a.85.85 0 0 1 .653.305L10.28 7.1h9.97c.469 0 .85.38.85.85v10.5c0 .47-.381.85-.85.85h-16.5a.85.85 0 0 1-.85-.85z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgFolder;
