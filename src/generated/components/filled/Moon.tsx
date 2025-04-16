import type { SVGProps } from "react";
const SvgMoon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.154 4.19a.84.84 0 0 0 .009-.9.82.82 0 0 0-.855-.376A9.177 9.177 0 0 0 12.076 21.1c4.464 0 8.182-3.187 9.007-7.409a.82.82 0 0 0-.376-.855.84.84 0 0 0-.899.009 6.262 6.262 0 0 1-8.654-8.655"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgMoon;
