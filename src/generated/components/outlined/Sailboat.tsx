import type { SVGProps } from "react";
const SvgSailboat = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.353 4.132c.512-.604 1.499-.242 1.499.55v8.799c0 .47-.381.85-.85.85h-7.46a.85.85 0 0 1-.649-1.4zm.299 1.504L5.297 13.13h6.355zM3.725 17.229a.85.85 0 0 1 .724-1.295h15.105a.85.85 0 0 1 .724 1.295l-1.825 2.967a.85.85 0 0 1-.724.404H6.275a.85.85 0 0 1-.724-.404zm1.35-.095L6.47 19.4h11.063l1.395-2.266z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSailboat;
