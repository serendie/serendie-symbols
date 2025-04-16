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
      d="M11.163 3.292a.84.84 0 0 1-.01.9 6.262 6.262 0 0 0 8.654 8.655.84.84 0 0 1 .9-.01c.26.16.45.48.376.855a9.177 9.177 0 0 1-18.184-1.769c0-4.464 3.186-8.182 7.409-9.007a.82.82 0 0 1 .855.376M9.716 4.3a7.977 7.977 0 1 0 9.982 9.983A7.462 7.462 0 0 1 9.717 4.3"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgMoon;
