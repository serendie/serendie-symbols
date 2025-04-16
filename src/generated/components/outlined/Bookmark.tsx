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
      d="M5.567 3.425v16.901l5.9-4.72a.85.85 0 0 1 1.062 0l5.9 4.72V3.425zm-1.2-.35c0-.47.38-.85.85-.85H18.78c.47 0 .85.38.85.85v17.98a.85.85 0 0 1-1.381.663l-6.25-5-6.25 5a.85.85 0 0 1-1.382-.663z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgBookmark;
