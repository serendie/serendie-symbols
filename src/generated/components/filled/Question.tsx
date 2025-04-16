import type { SVGProps } from "react";
const SvgQuestion = (props: SVGProps<SVGSVGElement>) => (
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
      d="M21.375 12a9.375 9.375 0 1 1-18.75 0 9.375 9.375 0 1 1 18.75 0M9.857 6.666a3.85 3.85 0 1 1 1.925 7.184v-1.2a2.65 2.65 0 1 0-2.295-3.975l-1.039-.6a3.85 3.85 0 0 1 1.41-1.41M12.8 16.45a.8.8 0 1 0-1.6 0 .8.8 0 0 0 1.6 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgQuestion;
