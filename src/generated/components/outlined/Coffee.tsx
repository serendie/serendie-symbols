import type { SVGProps } from "react";
const SvgCoffee = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.428 4.991a1.4 1.4 0 1 0 0 2.8v1.2a2.6 2.6 0 1 1 0-5.2zm3.6 0a1.4 1.4 0 0 0 0 2.8v1.2a2.6 2.6 0 1 1 0-5.2zm3.6 0a1.4 1.4 0 0 0 0 2.8v1.2a2.6 2.6 0 1 1 0-5.2zm2.311 6.703H3.11v-1.2h13.83zm2.746 1.4a1.4 1.4 0 0 0-1.4-1.4v-1.2a2.6 2.6 0 1 1 0 5.2v-1.2a1.4 1.4 0 0 0 1.4-1.4m-15.372.2a5.714 5.714 0 0 0 11.43 0h1.2a6.914 6.914 0 0 1-13.83 0z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCoffee;
