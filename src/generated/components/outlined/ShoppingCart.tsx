import type { SVGProps } from "react";
const SvgShoppingCart = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.984 4.285a1.72 1.72 0 0 0-1.218-.505v-1.2a2.923 2.923 0 0 1 2.922 2.923h-1.2c0-.457-.181-.895-.504-1.218m.504 3.667c0-.47.38-.85.85-.85h15.107a.85.85 0 0 1 .825 1.056l-2.197 8.79a.85.85 0 0 1-.825.644H5.338a.85.85 0 0 1-.85-.85zm1.2.35v8.09h12.287l2.022-8.09zm.581 10.89a1.026 1.026 0 0 0 2.052 0h1.2a2.226 2.226 0 0 1-4.452 0zm8.362 0a1.026 1.026 0 0 0 2.051 0h1.2a2.226 2.226 0 0 1-4.451 0z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgShoppingCart;
