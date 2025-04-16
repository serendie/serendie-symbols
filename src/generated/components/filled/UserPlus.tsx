import type { SVGProps } from "react";
const SvgUserPlus = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9.984 3.71a4.238 4.238 0 1 0 0 8.477 4.238 4.238 0 0 0 0-8.476m0 10.003a5.977 5.977 0 0 0-5.971 5.7.84.84 0 0 0 .843.877h10.255c.462 0 .866-.38.843-.878a5.98 5.98 0 0 0-5.97-5.7M16.385 13.29v2.4h1.2v-2.4h2.4v-1.2h-2.4v-2.4h-1.2v2.4h-2.4v1.2z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgUserPlus;
