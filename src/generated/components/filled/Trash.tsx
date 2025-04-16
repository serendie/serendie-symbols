import type { SVGProps } from "react";
const SvgTrash = (props: SVGProps<SVGSVGElement>) => (
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
      d="M14.546 3.084a3.6 3.6 0 0 1 1.042 2.246.28.28 0 0 1-.288.3H8.7a.28.28 0 0 1-.288-.3 3.6 3.6 0 0 1 6.134-2.246"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M3 8.43h2.4v12.72c0 .469.38.85.85.85h11.5c.47 0 .85-.381.85-.851l-.004-11.119.003-1.6H21v-1.2H3zm6.4 9.07v-6h1.2v6zm4-6v6h1.2v-6z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgTrash;
