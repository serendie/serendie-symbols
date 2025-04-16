import type { SVGProps } from "react";
const SvgSeal = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.467 2.147a.85.85 0 0 1 1.062 0l2.666 2.133 3.395.377a.85.85 0 0 1 .75.751l.378 3.395 2.133 2.666a.85.85 0 0 1 0 1.062L19.717 15.2l-.377 3.391a.85.85 0 0 1-.75.751l-3.395.377-2.666 2.133a.85.85 0 0 1-1.062 0L8.8 19.718l-3.393-.377a.85.85 0 0 1-.75-.75l-.378-3.394-2.132-2.666a.85.85 0 0 1 0-1.062L4.28 8.805l.377-3.397a.85.85 0 0 1 .751-.75L8.8 4.28zm.53 1.112L9.47 5.281a.85.85 0 0 1-.437.181l-3.215.357-.358 3.219a.85.85 0 0 1-.18.437L3.26 12l2.02 2.526a.85.85 0 0 1 .18.437l.358 3.217 3.216.357a.85.85 0 0 1 .437.18l2.527 2.022 2.526-2.02a.85.85 0 0 1 .437-.182l3.218-.357.357-3.215a.85.85 0 0 1 .18-.437L20.74 12l-2.022-2.527a.85.85 0 0 1-.18-.437l-.358-3.217-3.217-.357a.85.85 0 0 1-.437-.181z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSeal;
