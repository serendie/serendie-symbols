import type { SVGProps } from "react";
const SvgFlag = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.402 3.25c0-.47.38-.85.85-.85h.354v1.2h-.004v18.15h-1.2zm15.22.35H6.202V2.4h13.225a.85.85 0 0 1 .621 1.43m-1.426-.23-3.9 4.178a.85.85 0 0 0 0 1.16l3.9 4.177H6.202v1.2h13.225a.85.85 0 0 0 .621-1.43l-4.225-4.527 4.225-4.528"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgFlag;
