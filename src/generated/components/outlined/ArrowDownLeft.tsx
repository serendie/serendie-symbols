import type { SVGProps } from "react";
const SvgArrowDownLeft = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.598 16.552 17.576 5.576l.848.849L7.447 17.4h9.822v1.2H6.249a.85.85 0 0 1-.85-.85V6.73h1.2z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgArrowDownLeft;
