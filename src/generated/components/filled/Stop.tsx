import type { SVGProps } from "react";
const SvgStop = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.248 5.4a.85.85 0 0 0-.85.85v11.5c0 .47.381.85.85.85h11.5c.47 0 .85-.38.85-.85V6.25a.85.85 0 0 0-.85-.85z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgStop;
