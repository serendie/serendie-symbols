import type { SVGProps } from "react";
const SvgArrowTurnUp = (props: SVGProps<SVGSVGElement>) => (
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
      d="M14.125 5.083a.85.85 0 0 1 1.202 0l3.096 3.096-.849.848-2.248-2.248v5.93h-1.2V6.78l-2.249 2.249-.848-.849zm-7.527 3.55v4.077h-1.2V8.633zm.254 9.183a4.96 4.96 0 0 1-1.453-3.51h1.2a3.764 3.764 0 1 0 7.527 0h1.2a4.964 4.964 0 0 1-8.474 3.51"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgArrowTurnUp;
