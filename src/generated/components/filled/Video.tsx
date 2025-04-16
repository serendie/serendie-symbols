import type { SVGProps } from "react";
const SvgVideo = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.543 6.25c0-.47.38-.85.85-.85h11.5c.47 0 .85.38.85.85v11.5c0 .47-.38.85-.85.85h-11.5a.85.85 0 0 1-.85-.85zM20.08 6.855a.85.85 0 0 1 1.38.665v8.961a.85.85 0 0 1-1.38.664l-3.019-2.408a.85.85 0 0 1-.32-.665V9.93a.85.85 0 0 1 .32-.665z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgVideo;
