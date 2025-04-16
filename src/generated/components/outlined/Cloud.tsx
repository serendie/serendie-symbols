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
      d="M5.806 8.7a6.2 6.2 0 0 1 12.4 0h-1.2a5 5 0 0 0-10 0zM2.03 15.9a5.6 5.6 0 0 1 5.6-5.6v1.2a4.4 4.4 0 0 0 0 8.8v1.2a5.6 5.6 0 0 1-5.6-5.6m7.2 5.6h5.55v-1.2H9.23zm7.21-1.2h-.06v1.2a5.6 5.6 0 1 0 0-11.2v1.2a4.4 4.4 0 0 1 .06 8.8m-1.66-8.5v-1.268c-2.313.689-4 2.831-4 5.368h1.2a4.4 4.4 0 0 1 2.8-4.1"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCloud;
