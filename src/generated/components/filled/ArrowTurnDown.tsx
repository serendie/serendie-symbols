import type { SVGProps } from "react";
const SvgArrowTurnDown = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10.452 4.781a4.964 4.964 0 0 1 4.964 4.964h-1.2a3.764 3.764 0 1 0-7.528 0h-1.2a4.964 4.964 0 0 1 4.964-4.964m3.764 12.491-2.25-2.249-.848.849 3.097 3.096a.85.85 0 0 0 1.202 0l3.095-3.096-.848-.848-2.248 2.248V11.34h-1.2zm-7.528-1.854V11.34h-1.2v4.077z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgArrowTurnDown;
