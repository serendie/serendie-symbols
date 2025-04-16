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
      d="m15.872 4.787 3.096 3.096a.85.85 0 0 1 0 1.202l-3.097 3.096-.848-.848 2.249-2.25H9.745a3.764 3.764 0 0 0-3.764 3.753v6.375h-1.2v-6.363a4.964 4.964 0 0 1 4.946-4.964h7.545l-2.249-2.248z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCornerUpRight;
