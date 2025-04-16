import type { SVGProps } from "react";
const SvgTool = (props: SVGProps<SVGSVGElement>) => (
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
      d="M18.767 6.212c.388-.388 1.084-.324 1.349.219a5.972 5.972 0 0 1-7.545 8.18l-4.266 4.267-3.38-3.38 4.266-4.266a5.971 5.971 0 0 1 8.18-7.546c.544.266.608.96.22 1.35L14.164 8.46l1.177 1.177zM3.793 16.629l-.015.015a2.39 2.39 0 1 0 3.38 3.38l.015-.015z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgTool;
