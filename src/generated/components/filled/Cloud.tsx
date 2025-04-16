import type { SVGProps } from "react";
const SvgCloud = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.806 8.7a6.2 6.2 0 1 1 12.4 0v1.905A5.602 5.602 0 0 1 16.381 21.5H7.63a5.6 5.6 0 0 1-1.825-10.896zm6.174 7.2a4.4 4.4 0 0 1 5.826-4.164l.39-1.135a5.6 5.6 0 0 0-7.415 5.3z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCloud;
