import type { SVGProps } from "react";
const SvgAlertTriangle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M13.277 4.007a1.198 1.198 0 0 0-2.074-.024L2.771 18.19A1.198 1.198 0 0 0 3.801 20h16.424c.916 0 1.492-.987 1.043-1.785zM3.805 18.8l8.428-14.201 7.988 14.2zM11.647 8v6.397h1.2V8zm1.4 8.797a.8.8 0 1 0-1.6 0 .8.8 0 0 0 1.6 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgAlertTriangle;
