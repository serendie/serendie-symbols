import type { SVGProps } from "react";
const SvgCornerUpRight = (props: SVGProps<SVGSVGElement>) => (
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
      d="M18.668 7.672h-8.98v1.2h8.98z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="m17.82 8.273-2.847-2.848.848-.849 3.096 3.096a.85.85 0 0 1 0 1.202L15.82 11.97l-.849-.848zm-8.126.6a3.764 3.764 0 0 0-3.764 3.752V19h-1.2v-6.378a4.964 4.964 0 0 1 4.964-4.95z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCornerUpRight;
