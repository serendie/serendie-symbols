import type { SVGProps } from "react";
const SvgCollapseDiagonal = (props: SVGProps<SVGSVGElement>) => (
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
      d="M14.156 10.693h3.863v1.2h-5.062a.85.85 0 0 1-.85-.85V5.98h1.2v3.864l4.632-4.633.849.848zm-2.264 7.326v-5.062a.85.85 0 0 0-.85-.85H5.98v1.2h3.865l-4.633 4.632.848.85 4.633-4.633v3.863z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCollapseDiagonal;
