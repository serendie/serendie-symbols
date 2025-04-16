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
      d="M2.873 3.4a.85.85 0 0 0-.85.85v15.5c0 .47.381.85.85.85h18.25c.47 0 .85-.38.85-.85V4.25a.85.85 0 0 0-.85-.85zm7.71 10.863a2.4 2.4 0 0 0-3.084.747l-1.984 2.835-.983-.688 1.984-2.835a3.6 3.6 0 0 1 4.626-1.121l7.161 3.769-.559 1.062zm6.84-4.663a2.2 2.2 0 1 1-4.4 0 2.2 2.2 0 0 1 4.4 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgImage;
