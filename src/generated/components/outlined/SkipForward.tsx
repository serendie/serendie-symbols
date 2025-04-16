import type { SVGProps } from "react";
const SvgSkipForward = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15.969 11.26V5.5h1.2v13h-1.2v-5.76l-8.25 5.5a.85.85 0 0 1-1.32-.707V6.467a.85.85 0 0 1 1.32-.707zM7.599 7.12 14.916 12l-7.319 4.879zm7.755 4.588Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSkipForward;
