import type { SVGProps } from "react";
const SvgUserCheck = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10.015 3.71a4.238 4.238 0 1 0 0 8.477 4.238 4.238 0 0 0 0-8.476M10.015 13.713a5.977 5.977 0 0 0-5.971 5.7.84.84 0 0 0 .844.877h10.254c.462 0 .867-.38.844-.878a5.977 5.977 0 0 0-5.971-5.7"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="m15.474 14.485-1.87-1.87.848-.85 1.623 1.624 3.035-3.035.848.849-3.282 3.282a.85.85 0 0 1-1.202 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgUserCheck;
