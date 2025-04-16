import type { SVGProps } from "react";
const SvgDollarSign = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10.272 5.1H9.75a3.75 3.75 0 1 0 0 7.5h.522v-1.2H9.75a2.55 2.55 0 1 1 0-5.1h.522zm0 12.6H6.6v1.2h3.672zm3.438 1.2h.414c1.02 0 2.004-.39 2.732-1.09A3.7 3.7 0 0 0 18 15.15a3.7 3.7 0 0 0-1.144-2.66 3.94 3.94 0 0 0-2.606-1.088V11.4h-.54v1.2h.417c.716 0 1.398.275 1.898.755.499.48.775 1.127.775 1.795a2.5 2.5 0 0 1-.775 1.795c-.5.48-1.184.755-1.901.755h-.414zm0-12.6h3.69V5.1h-3.69zM11.472 3h1.038v18h-1.038z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgDollarSign;
