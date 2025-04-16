import type { SVGProps } from "react";
const SvgArrowDown = (props: SVGProps<SVGSVGElement>) => (
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
      d="m11.398 19.037-6.944-6.944-.849.848 7.792 7.792a.85.85 0 0 0 1.202 0l7.793-7.793-.85-.848-6.944 6.945.001-15.523h-1.2z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgArrowDown;
