import type { SVGProps } from "react";
const SvgLaptop = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.023 4.55c0-.47.381-.85.85-.85h18.25c.47 0 .85.38.85.85v11.218c0 .47-.38.85-.85.85H2.873a.85.85 0 0 1-.85-.85zm1.2.35v10.518h17.55V4.899zm17.775 15.4h-18v-1.2h18z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgLaptop;
