import type { SVGProps } from "react";
const SvgExpandDiagonal = (props: SVGProps<SVGSVGElement>) => (
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
      d="M18.964 10.947V5.885a.85.85 0 0 0-.85-.85H13.05v1.2h3.865l-4.634 4.633.849.849 4.633-4.633v3.863zm-11.88 6.817h3.863v1.2H5.885a.85.85 0 0 1-.85-.85V13.05h1.2v3.865l4.633-4.634.849.849z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgExpandDiagonal;
