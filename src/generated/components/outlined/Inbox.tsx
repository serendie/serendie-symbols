import type { SVGProps } from "react";
const SvgInbox = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.523 4.75c0-.47.381-.85.85-.85h17.25c.47 0 .85.38.85.85v6.83h-1.2V5.1H3.723v6.48h-1.2zm2.406 7.025 3.445.001c.469 0 .85.38.85.85v.154a2.775 2.775 0 1 0 5.55 0v-.154c0-.47.38-.85.85-.85h3.455v1.2h-3.11a3.975 3.975 0 0 1-7.94 0h-3.1zM3.723 18.9v-5.72h-1.2v6.07c0 .47.381.85.85.85h17.25c.47 0 .85-.38.85-.85v-6.07h-1.2v5.72z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgInbox;
