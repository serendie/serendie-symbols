import type { SVGProps } from "react";
const SvgNavigation = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16.925 6.332 5.01 10.385l5.543 1.79c.247.08.442.273.524.52l1.865 5.592zm.342-1.383a.818.818 0 0 1 1.04 1.033l-4.59 13.77c-.249.747-1.304.747-1.553 0L10 13.258l-6.455-2.085c-.75-.242-.758-1.3-.012-1.553z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgNavigation;
