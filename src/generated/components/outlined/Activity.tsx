import type { SVGProps } from "react";
const SvgActivity = (props: SVGProps<SVGSVGElement>) => (
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
      d="m10 6.475-1.37 5.482a.85.85 0 0 1-.825.644H4v-1.2h3.532l1.643-6.576c.215-.858 1.435-.858 1.65 0L14 17.527l1.37-5.482a.85.85 0 0 1 .825-.644H20v1.2h-3.532l-1.643 6.575c-.215.859-1.435.859-1.65 0z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgActivity;
