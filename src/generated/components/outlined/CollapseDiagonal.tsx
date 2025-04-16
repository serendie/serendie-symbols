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
      d="M13.307 9.844V5.98h-1.2v5.063c0 .469.38.85.85.85h5.062v-1.2h-3.863l4.632-4.634-.849-.848zM5.98 12.107h5.063c.469 0 .85.38.85.85v5.062h-1.2v-3.863l-4.634 4.632-.848-.849 4.633-4.632H5.98z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCollapseDiagonal;
