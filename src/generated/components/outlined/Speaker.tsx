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
      d="M6.248 3.4a.85.85 0 0 0-.85.85v15.5c0 .47.381.85.85.85h11.5c.47 0 .85-.38.85-.85V4.25a.85.85 0 0 0-.85-.85zm.35 16V4.6h10.8v14.8zm5-11.9a.4.4 0 1 1 .8 0 .4.4 0 0 1-.8 0m.4-1.6a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2m.6 10.925a2.401 2.401 0 0 0 0-4.649V10.95a3.601 3.601 0 0 1 0 7.1zm-1.2-4.649a2.401 2.401 0 0 0 0 4.649v1.226a3.601 3.601 0 0 1 0-7.1z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSpeaker;
