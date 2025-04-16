import type { SVGProps } from "react";
const SvgSkipUp = (props: SVGProps<SVGSVGElement>) => (
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
      d="m12.6 10.361 5.48 5.48-.848.849-5.233-5.233-5.233 5.233-.848-.849 5.48-5.48a.85.85 0 0 1 1.202 0M5.999 7.309h12v1.2h-12z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSkipUp;
