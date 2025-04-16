import type { SVGProps } from "react";
const SvgArrowLeft = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.306 3.607 3.515 11.4a.85.85 0 0 0 0 1.202l7.792 7.792.849-.848-6.946-6.946 15.523.002v-1.2l-15.522-.002 6.944-6.943z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgArrowLeft;
