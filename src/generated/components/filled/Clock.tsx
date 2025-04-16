import type { SVGProps } from "react";
const SvgClock = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 21.375a9.375 9.375 0 1 0 0-18.75 9.375 9.375 0 1 0 0 18.75M11.4 6v5.896c0 .226.09.442.249.601l3.927 3.927.848-.848L12.6 11.75V6z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgClock;
