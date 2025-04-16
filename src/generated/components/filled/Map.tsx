import type { SVGProps } from "react";
const SvgMap = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9.395 3.778a.85.85 0 0 0-.829.032l-4.76 2.91a.85.85 0 0 0-.408.725v11.863a.85.85 0 0 0 1.288.729l3.712-2.228V6.75h1.2V17.72l5.01 2.505a.85.85 0 0 0 .817-.032l4.76-2.856a.85.85 0 0 0 .413-.73V4.696a.85.85 0 0 0-1.293-.725l-3.707 2.265V17.25h-1.2V6.326z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgMap;
