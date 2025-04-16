import type { SVGProps } from "react";
const SvgDragMove = (props: SVGProps<SVGSVGElement>) => (
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
      d="m14.863 7.711.848-.848-3.11-3.11a.85.85 0 0 0-1.202 0l-3.11 3.11.848.849 2.864-2.863zm0 8.58.848.848-3.11 3.11a.85.85 0 0 1-1.202 0l-3.11-3.11.848-.85 2.864 2.864zm-8-8.001.848.848-2.862 2.863 2.863 2.863-.849.848-3.11-3.11a.85.85 0 0 1 0-1.202zm9.427.848.849-.848 3.11 3.11a.85.85 0 0 1 0 1.202l-3.11 3.11-.85-.848L19.154 12zm-4.29.863a2 2 0 1 0 0 4 2 2 0 0 0 0-4"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgDragMove;
