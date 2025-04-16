import type { SVGProps } from "react";
const SvgArrowUp = (props: SVGProps<SVGSVGElement>) => (
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
      d="M20.392 11.306 12.6 3.515a.85.85 0 0 0-1.202 0l-7.793 7.792.849.849L11.4 5.21l-.002 15.523h1.2L12.6 5.211l6.943 6.944z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgArrowUp;
