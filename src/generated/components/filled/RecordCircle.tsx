import type { SVGProps } from "react";
const SvgRecordCircle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M21.375 12a9.375 9.375 0 1 1-18.75 0 9.375 9.375 0 1 1 18.75 0M12 8.325a3.675 3.675 0 1 0 0 7.35 3.675 3.675 0 0 0 0-7.35"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgRecordCircle;
