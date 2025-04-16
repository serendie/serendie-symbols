import type { SVGProps } from "react";
const SvgFolderAdd = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.898 5.55c0-.47.381-.85.85-.85h4.133a.85.85 0 0 1 .653.305L10.28 7.1h9.97c.469 0 .85.38.85.85v10.5c0 .47-.381.85-.85.85h-16.5a.85.85 0 0 1-.85-.85zm8.5 10.45v-2.4h-2.4v-1.2h2.4V10h1.2v2.4h2.4v1.2h-2.4V16z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgFolderAdd;
