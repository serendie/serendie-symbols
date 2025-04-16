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
      d="M11.998 4.6a7.4 7.4 0 1 0 7.4 7.4h1.2a8.6 8.6 0 1 1-8.6-8.6zm7.4.85V9.6h1.2V4.25a.85.85 0 0 0-.85-.85h-5.35v1.2h4.153l-6.976 6.976.848.849z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgExternalLink;
