import type { SVGProps } from "react";
const SvgMusic = (props: SVGProps<SVGSVGElement>) => (
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
      d="M18.476 4.138H13.12v13.128a3.799 3.799 0 1 1-1.2-2.771V3.788c0-.47.38-.85.85-.85h5.705z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgMusic;
