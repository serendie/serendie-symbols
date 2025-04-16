import type { SVGProps } from "react";
const SvgExpandVertical = (props: SVGProps<SVGSVGElement>) => (
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
      d="m16.182 6.332-3.58-3.58a.85.85 0 0 0-1.202 0l-3.58 3.58.849.85 2.733-2.733L11.4 11h1.2V4.449l2.733 2.732zm-3.58 13.22 2.732-2.731.848.848-3.58 3.58a.85.85 0 0 1-1.202 0l-3.58-3.58.849-.849 2.733 2.733L11.4 13h1.2z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgExpandVertical;
