import type { SVGProps } from "react";
const SvgLayoutAlt = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.399 2.4h-8.15a.85.85 0 0 0-.85.85v8.15h9zm0 10.2h-9v8.15c0 .47.38.85.85.85h8.15zm1.2 9h8.15c.469 0 .85-.38.85-.85V3.25a.85.85 0 0 0-.85-.85h-8.15z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgLayoutAlt;
