import type { SVGProps } from "react";
const SvgSpeaker = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.248 3.4a.85.85 0 0 0-.85.85v15.5c0 .47.381.85.85.85h11.5c.47 0 .85-.38.85-.85V4.25a.85.85 0 0 0-.85-.85zm5.75 3.7a.4.4 0 1 0 0 .8.4.4 0 0 0 0-.8m-1.6.4a1.6 1.6 0 1 1 3.2 0 1.6 1.6 0 0 1-3.2 0m-.8 7a2.4 2.4 0 1 1 4.8 0 2.4 2.4 0 0 1-4.8 0m2.4-3.6a3.6 3.6 0 1 0 0 7.2 3.6 3.6 0 0 0 0-7.2"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSpeaker;
