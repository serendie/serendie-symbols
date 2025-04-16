import type { SVGProps } from "react";
const SvgMail = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.031 5.25c0-.47.38-.85.85-.85h18.25c.47 0 .85.38.85.85v13.5c0 .47-.38.85-.85.85H2.881a.85.85 0 0 1-.85-.85zm1.2.35v12.8h17.55V5.6zm8.248 7.755L4.883 8.224l.737-.947L12 12.24l6.382-4.963.737.947-6.597 5.13a.85.85 0 0 1-1.044 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgMail;
