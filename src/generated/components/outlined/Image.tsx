import type { SVGProps } from "react";
const SvgImage = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 4.25c0-.47.38-.85.85-.85H21.1c.47 0 .85.38.85.85v15.5c0 .47-.38.85-.85.85H2.85a.85.85 0 0 1-.85-.85zm1.2.35v14.8h17.55V4.6zm12 3.7a1.3 1.3 0 1 0 0 2.6 1.3 1.3 0 0 0 0-2.6m-2.5 1.3a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0m-2.14 4.663a2.4 2.4 0 0 0-3.084.747l-1.984 2.834-.983-.688 1.984-2.834a3.6 3.6 0 0 1 4.625-1.121l7.162 3.768-.56 1.062z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgImage;
