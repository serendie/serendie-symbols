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
      d="M4.413 2.324a.85.85 0 0 0-.85.85v18.5h1.2V3.524h.004v-1.2zm1.949 0h13.225a.85.85 0 0 1 .622 1.43l-4.226 4.527 4.226 4.528a.85.85 0 0 1-.622 1.43H6.362z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgFlag;
