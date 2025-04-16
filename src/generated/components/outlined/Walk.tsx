import type { SVGProps } from "react";
const SvgWalk = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.498 3.6a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8M8.898 5a2.6 2.6 0 1 1 5.2 0 2.6 2.6 0 0 1-5.2 0m2 4.402a3.4 3.4 0 0 0-3.3 3.398h-1.2a4.6 4.6 0 0 1 4.5-4.599h1.2v.1a3.9 3.9 0 0 0 3.9 3.9v1.2a5.09 5.09 0 0 1-3.9-1.814v3.645a5.6 5.6 0 0 1 5 5.568h-1.2a4.4 4.4 0 0 0-3.839-4.364A5.1 5.1 0 0 1 7 20.9v-1.2a3.9 3.9 0 0 0 3.9-3.9z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgWalk;
