import type { SVGProps } from "react";
const SvgSmartphone = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.39 2.025a.85.85 0 0 0-.85.85v18.25c0 .47.38.85.85.85h11.218c.47 0 .85-.38.85-.85V2.875a.85.85 0 0 0-.85-.85zm5.608 14a1.975 1.975 0 1 0 0 3.95 1.975 1.975 0 0 0 0-3.95m-2-10.325h4V4.5h-4z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSmartphone;
