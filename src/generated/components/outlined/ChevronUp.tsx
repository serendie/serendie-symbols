import type { SVGProps } from "react";
const SvgChevronUp = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.398 8.925a.85.85 0 0 1 1.202 0l5.48 5.48-.848.848-5.233-5.232-5.233 5.232-.848-.848z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgChevronUp;
