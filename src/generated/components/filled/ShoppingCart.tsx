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
      d="M15.656 20.819c.898 0 1.626-.728 1.626-1.626h-3.251c0 .898.727 1.625 1.625 1.625"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M14.03 19.193a1.62 1.62 0 0 0 1.626 1.625 1.621 1.621 0 0 0 1.626-1.626z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M7.295 20.819c.898 0 1.626-.728 1.626-1.626H5.669c0 .898.728 1.625 1.626 1.625"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M5.67 19.193a1.62 1.62 0 0 0 1.625 1.625 1.622 1.622 0 0 0 1.626-1.626z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M5.338 7.102a.85.85 0 0 0-.85.85v8.79c0 .47.38.85.85.85h12.91a.85.85 0 0 0 .824-.643l2.198-8.79a.85.85 0 0 0-.825-1.057z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M5.688 5.503A2.923 2.923 0 0 0 2.766 2.58v1.2a1.723 1.723 0 0 1 1.722 1.723z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgShoppingCart;
