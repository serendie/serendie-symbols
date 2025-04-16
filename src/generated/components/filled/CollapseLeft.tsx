import type { SVGProps } from "react";
const SvgCollapseLeft = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12.812 5.941 7.354 11.4a.85.85 0 0 0 0 1.202l5.458 5.457.849-.848-4.61-4.61h10.647v-1.2H9.049l4.611-4.61zM4.3 6.5h1.2v11H4.3z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCollapseLeft;
