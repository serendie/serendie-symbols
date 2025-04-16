import type { SVGProps } from "react";
const SvgSkipRight = (props: SVGProps<SVGSVGElement>) => (
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
      d="m13.637 12.602-5.48 5.48-.848-.848L12.54 12 7.31 6.768l.848-.848 5.48 5.48a.85.85 0 0 1 0 1.202M16.69 6v12h-1.2V6z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSkipRight;
