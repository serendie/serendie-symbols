import type { SVGProps } from "react";
const SvgBookmark = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.217 2.225a.85.85 0 0 0-.85.85v17.98a.85.85 0 0 0 1.381.663l6.25-5 6.25 5a.85.85 0 0 0 1.382-.663V3.075a.85.85 0 0 0-.85-.85z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgBookmark;
