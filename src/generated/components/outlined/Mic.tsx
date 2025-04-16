import type { SVGProps } from "react";
const SvgMic = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.333 3.544a5.184 5.184 0 0 1 8.85 3.666v3.4h-1.2v-3.4a3.984 3.984 0 0 0-7.969 0v3.4h-1.2v-3.4c0-1.375.547-2.694 1.519-3.666m6.483 11.48a3.99 3.99 0 0 0 1.167-2.817h1.2a5.184 5.184 0 0 1-10.369 0h1.2a3.984 3.984 0 0 0 6.802 2.817m3.241 3.242a8.57 8.57 0 0 0 2.51-6.059h1.2a9.768 9.768 0 1 1-19.537 0h1.2a8.568 8.568 0 0 0 14.627 6.059"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgMic;
