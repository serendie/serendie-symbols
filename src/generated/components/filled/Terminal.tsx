import type { SVGProps } from "react";
const SvgTerminal = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10.73 11.088 4.915 5.275l-.849.849 5.566 5.565-5.567 5.566.849.849 5.814-5.814a.85.85 0 0 0 0-1.202M19.5 18.3h-8v-1.2h8z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgTerminal;
