import type { SVGProps } from "react";
const SvgLock = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.746 3.347A4.6 4.6 0 0 1 16.598 6.6v1h-1.2v-1a3.4 3.4 0 1 0-6.8 0v1h-1.2v-1a4.6 4.6 0 0 1 1.348-3.253M4.248 9.2a.85.85 0 0 0-.85.85v11.1c0 .47.381.85.85.85h15.5c.47 0 .85-.38.85-.85v-11.1a.85.85 0 0 0-.85-.85zm6.184 6.4a1.571 1.571 0 1 1 3.142 0 1.571 1.571 0 0 1-3.142 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgLock;
