import type { SVGProps } from "react";
const SvgPencil = (props: SVGProps<SVGSVGElement>) => (
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
      d="m16.143 6.244-.849-.848a2.34 2.34 0 0 1 3.31 3.308l-.85-.849-1.132 1.132.85.849-8.603 8.603a.84.84 0 0 1-.573.247l-2.178.058a.84.84 0 0 1-.864-.864l.06-2.177a.84.84 0 0 1 .245-.573l8.604-8.603.848.848z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgPencil;
