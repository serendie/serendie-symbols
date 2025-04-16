import type { SVGProps } from "react";
const SvgSend = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.35 3.299a.85.85 0 0 1 1.206-.967l17.816 8.908a.85.85 0 0 1 0 1.521L3.556 21.669a.85.85 0 0 1-1.205-.966L4.526 12zm1.35.447 2.012 8.049a.85.85 0 0 1 0 .412L3.7 20.256 20.21 12zM13.34 12.6h-6v-1.2h6z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSend;
