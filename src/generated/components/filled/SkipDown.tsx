import type { SVGProps } from "react";
const SvgSkipDown = (props: SVGProps<SVGSVGElement>) => (
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
      d="m11.398 13.637-5.48-5.48.848-.848L12 12.54l5.233-5.232.848.848-5.48 5.48a.85.85 0 0 1-1.202 0M18 16.69H6v-1.2h12z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSkipDown;
