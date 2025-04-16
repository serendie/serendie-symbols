import type { SVGProps } from "react";
const SvgExpandDiagonalLinked = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12.344 5.742h5.063c.469 0 .85.38.85.85v5.062h-1.2V7.791L7.79 17.057h3.863v1.2H6.592a.85.85 0 0 1-.85-.85v-5.063h1.2v3.865l9.267-9.267h-3.865z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgExpandDiagonalLinked;
