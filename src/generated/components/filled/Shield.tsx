import type { SVGProps } from "react";
const SvgShield = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12.243 2.077a.85.85 0 0 0-.489 0l-7.75 2.325a.85.85 0 0 0-.606.814V13.4a8.6 8.6 0 1 0 17.2 0V5.216a.85.85 0 0 0-.605-.814z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgShield;
