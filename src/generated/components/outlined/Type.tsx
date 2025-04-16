import type { SVGProps } from "react";
const SvgType = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.098 5.378v3.4h-1.2v-3.75c0-.47.381-.85.85-.85h14.5c.47 0 .85.38.85.85v3.75h-1.2v-3.4h-6.3v13.246h2.067v1.2H9.332v-1.2h2.066V5.378z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgType;
