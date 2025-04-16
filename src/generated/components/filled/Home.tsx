import type { SVGProps } from "react";
const SvgHome = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12.566 2.425a.85.85 0 0 0-1.133 0l-8.15 7.28A.85.85 0 0 0 3 10.34V20.94c0 .47.38.85.85.85h4.92c.47 0 .85-.38.85-.85v-7.05h4.778l-.009 2.298v2.802l-.01 1.946a.85.85 0 0 0 .85.854h4.921c.47 0 .85-.38.85-.85v-10.6a.85.85 0 0 0-.283-.635z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgHome;
