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
      d="M11.398 3.267a.85.85 0 0 1 1.202 0l7.792 7.791-.85.848L12.6 4.964l-.002 15.522h-1.2L11.4 4.962l-6.946 6.946-.849-.849z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgArrowUp;
