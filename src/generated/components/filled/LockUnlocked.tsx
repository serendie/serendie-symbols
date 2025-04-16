import type { SVGProps } from "react";
const SvgLockUnlocked = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.999 2a4.6 4.6 0 0 0-3.253 1.347l.848.849A3.4 3.4 0 0 1 15.4 6.6v1h1.2v-1a4.6 4.6 0 0 0-4.6-4.6m-8.6 8.05c0-.47.38-.85.85-.85h15.5c.469 0 .85.38.85.85v11.1c0 .47-.381.85-.85.85h-15.5a.85.85 0 0 1-.85-.85zm7.032 5.55a1.571 1.571 0 1 1 3.143 0 1.571 1.571 0 0 1-3.143 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgLockUnlocked;
