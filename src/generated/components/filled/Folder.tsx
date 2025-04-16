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
      d="M3.748 4.7a.85.85 0 0 0-.85.85v12.9c0 .469.381.85.85.85h16.5c.47 0 .85-.381.85-.85V7.95a.85.85 0 0 0-.85-.85H10.28L8.534 5.004a.85.85 0 0 0-.653-.306z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgFolder;
