import type { SVGProps } from "react";
const SvgFile = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10.247 4.6 5.598 9.25V19.4h12.8V4.6zm-.746-.95a.85.85 0 0 1 .601-.25h8.646c.47 0 .85.38.85.85v15.5c0 .47-.38.85-.85.85h-13.5a.85.85 0 0 1-.85-.85V9.104a.85.85 0 0 1 .25-.601zm2.097 2.547V9.75c0 .47-.38.85-.85.85H7.195V9.4h3.203V6.197z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgFile;
