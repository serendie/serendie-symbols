import type { SVGProps } from "react";
const SvgBookOpen = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.598 5.4v11.8h6.4c.5 0 .986.143 1.4.408V6.8a1.4 1.4 0 0 0-1.4-1.4zm8.4-.262a2.6 2.6 0 0 0-2-.939h-6.75a.85.85 0 0 0-.85.85v12.5c0 .47.381.85.85.85h6.75a1.4 1.4 0 0 1 1.4 1.4h1.2a1.4 1.4 0 0 1 1.4-1.4h6.75c.47 0 .85-.38.85-.85V5.05a.85.85 0 0 0-.85-.85h-6.75a2.6 2.6 0 0 0-2 .939m.6 12.47a2.6 2.6 0 0 1 1.4-.409h6.4V5.4h-6.4a1.4 1.4 0 0 0-1.4 1.4z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgBookOpen;
