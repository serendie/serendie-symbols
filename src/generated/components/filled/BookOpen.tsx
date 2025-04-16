import type { SVGProps } from "react";
const SvgBookOpen = (props: SVGProps<SVGSVGElement>) => (
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
      d="M20.748 18.4h-6.75a1.4 1.4 0 0 0-1.4 1.38v.012V4.608a2.6 2.6 0 0 1 1.4-.409h6.75c.47 0 .85.38.85.85v12.5c0 .47-.38.85-.85.85m-9.35-13.792a2.6 2.6 0 0 0-1.4-.409h-6.75a.85.85 0 0 0-.85.85v12.5c0 .47.381.85.85.85h6.75a1.4 1.4 0 0 1 1.4 1.38zm0 15.178v.013z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgBookOpen;
