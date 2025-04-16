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
      d="M10.102 3.4a.85.85 0 0 0-.601.25L4.647 8.502a.85.85 0 0 0-.249.6V19.75c0 .47.381.85.85.85h13.5c.47 0 .85-.38.85-.85V4.25a.85.85 0 0 0-.85-.85zm1.497 6.35V6.198h-1.2v3.204H7.195v1.2h3.554c.47 0 .85-.381.85-.85"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgFile;
