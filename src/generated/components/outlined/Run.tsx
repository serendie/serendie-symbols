import type { SVGProps } from "react";
const SvgRun = (props: SVGProps<SVGSVGElement>) => (
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
      d="M13.726 3.952a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8m-2.6 1.4a2.6 2.6 0 1 1 5.2 0 2.6 2.6 0 0 1-5.2 0m1.592 4.267a3.9 3.9 0 0 0-4.177 2.872l-1.159-.311a5.1 5.1 0 0 1 6.249-3.608l.444.12v.46a3.4 3.4 0 0 0 3.398 3.398v1.2a4.6 4.6 0 0 1-4.014-2.355l-1.205 4.216a5.1 5.1 0 0 1 4.318 5.037h-1.2a3.897 3.897 0 0 0-3.477-3.874 4.6 4.6 0 0 1-5.532 2.697l.331-1.154a3.4 3.4 0 0 0 4.205-2.33l1.139-4 .003.002z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgRun;
