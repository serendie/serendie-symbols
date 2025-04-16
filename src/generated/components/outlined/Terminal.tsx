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
      d="M9.633 11.69 4.067 6.123l.849-.849 5.813 5.813a.85.85 0 0 1 0 1.202l-5.814 5.814-.849-.849zM19.5 18.3h-8v-1.2h8z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgTerminal;
