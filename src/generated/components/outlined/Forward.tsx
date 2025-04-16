import type { SVGProps } from "react";
const SvgForward = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.138 8.12v7.758L10.956 12zm6.221 5.053-6.1 4.067a.85.85 0 0 1-1.322-.708V7.467a.85.85 0 0 1 1.322-.708l6.1 4.067v-3.36a.85.85 0 0 1 1.322-.707l6.8 4.533a.85.85 0 0 1 0 1.415l-6.8 4.533a.85.85 0 0 1-1.322-.708zm1.2-5.052v7.757L18.378 12z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgForward;
