import type { SVGProps } from "react";
const SvgChatCircle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.307 4.583A9.35 9.35 0 1 1 7.525 20.21l-3.46.707a.833.833 0 0 1-.984-.984l.707-3.46A9.35 9.35 0 0 1 6.307 4.583"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgChatCircle;
