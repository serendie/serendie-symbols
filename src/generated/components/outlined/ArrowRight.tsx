import type { SVGProps } from "react";
const SvgArrowRight = (props: SVGProps<SVGSVGElement>) => (
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
      d="m12.942 3.607 7.793 7.793a.85.85 0 0 1 0 1.202l-7.792 7.791-.848-.848 6.944-6.944-15.523-.002v-1.2l15.522.002-6.944-6.945z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgArrowRight;
