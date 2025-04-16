import type { SVGProps } from "react";
const SvgExternalLink = (props: SVGProps<SVGSVGElement>) => (
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
      d="M14.402 3.4h5.35c.47 0 .85.38.85.85V9.6h-1.2V5.45l-6.975 6.975-.849-.849L18.554 4.6h-4.152zm-2.4 1.2a7.4 7.4 0 1 0 7.4 7.4h1.2a8.6 8.6 0 1 1-8.6-8.6z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgExternalLink;
