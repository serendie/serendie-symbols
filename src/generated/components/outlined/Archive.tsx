import type { SVGProps } from "react";
const SvgArchive = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.723 5.1v3.8h16.55V5.1zm-1.2-.35c0-.47.381-.85.85-.85h17.25c.47 0 .85.38.85.85v4.5c0 .47-.38.85-.85.85H3.373a.85.85 0 0 1-.85-.85zm2.2 14.15v-7.2h-1.2v7.55c0 .47.381.85.85.85h15.25c.47 0 .85-.38.85-.85V11.7h-1.2v7.2zm10.275-5.3h-6v-1.2h6z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgArchive;
