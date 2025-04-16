import type { SVGProps } from "react";
const SvgArrowRightCircle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M21.375 12a9.375 9.375 0 1 1-18.75 0 9.375 9.375 0 1 1 18.75 0m-6.824-.6L11.82 8.668l.849-.849 3.58 3.58a.85.85 0 0 1 0 1.202l-3.58 3.58-.85-.849 2.734-2.732H8v-1.2z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgArrowRightCircle;
