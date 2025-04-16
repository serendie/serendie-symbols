import type { SVGProps } from "react";
const SvgArrowDown = (props: SVGProps<SVGSVGElement>) => (
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
      d="m12.598 18.789.001-15.523h-1.2l-.001 15.523-6.944-6.944-.849.849 7.792 7.791a.85.85 0 0 0 1.202 0l7.793-7.792-.85-.849z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgArrowDown;
