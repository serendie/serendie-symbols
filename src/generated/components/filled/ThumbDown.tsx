import type { SVGProps } from "react";
const SvgThumbDown = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.837 17.697a2.053 2.053 0 0 1-4-.65V14.6h-4.12a.85.85 0 0 1-.844-.949l.941-8a.85.85 0 0 1 .844-.75h9.928c.47 0 .85.38.85.85v6.5c0 .469-.38.85-.85.85H13.37z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M21.136 9a4.1 4.1 0 0 1-3.807 4.09.837.837 0 0 1-.893-.84v-6.5c0-.457.38-.876.893-.84A4.1 4.1 0 0 1 21.136 9"
    />
  </svg>
);
export default SvgThumbDown;
