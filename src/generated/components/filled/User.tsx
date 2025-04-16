import type { SVGProps } from "react";
const SvgUser = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.999 3.71a4.238 4.238 0 1 0 0 8.477 4.238 4.238 0 0 0 0-8.476m0 10.003a5.977 5.977 0 0 0-5.97 5.7.84.84 0 0 0 .843.877h10.254c.463 0 .867-.38.844-.878l-.6.028.6-.028a5.98 5.98 0 0 0-5.97-5.7"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgUser;
