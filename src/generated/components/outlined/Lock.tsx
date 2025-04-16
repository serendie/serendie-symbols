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
      d="M8.746 3.347A4.6 4.6 0 0 1 16.598 6.6v3.2h-1.2V6.6a3.4 3.4 0 1 0-6.8 0v3.2h-1.2V6.6a4.6 4.6 0 0 1 1.348-3.253M4.598 10.4h1.2V9.2h-1.55a.85.85 0 0 0-.85.85v11.1c0 .47.381.85.85.85h15.5c.47 0 .85-.38.85-.85v-11.1a.85.85 0 0 0-.85-.85h-1.55v1.2h1.2v10.4h-14.8zm9.2 0h-3.6V9.2h3.6zm-1.795 4.4a.8.8 0 1 0 0 1.6.8.8 0 0 0 0-1.6m-2 .8a2 2 0 1 1 4 0 2 2 0 0 1-4 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgLock;
