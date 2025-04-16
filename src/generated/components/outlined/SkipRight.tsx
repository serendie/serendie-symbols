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
      d="m8.423 5.92 5.48 5.48a.85.85 0 0 1 0 1.202l-5.48 5.48-.849-.848L12.807 12 7.574 6.768zm8.533.08v12h-1.2V6z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSkipRight;
