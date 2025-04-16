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
    <path fill="currentColor" d="M11.472 3h1.039v18h-1.039z" />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M10.272 5.1H9.75a3.75 3.75 0 0 0 0 7.5h.522v-1.2H9.75a2.55 2.55 0 1 1 0-5.1h.522zm3.439 6.3v1.2h.413c.717 0 1.4.274 1.9.755.5.48.776 1.127.776 1.795a2.5 2.5 0 0 1-.775 1.795c-.5.481-1.184.755-1.901.755h-.413v1.2h.413c1.02 0 2.004-.39 2.732-1.09A3.7 3.7 0 0 0 18 15.15a3.7 3.7 0 0 0-1.144-2.66 3.94 3.94 0 0 0-2.606-1.088V11.4zm-3.439 6.3v1.2H6.6v-1.2zm3.439-11.4V5.1H17.4v1.2z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgDollarSign;
