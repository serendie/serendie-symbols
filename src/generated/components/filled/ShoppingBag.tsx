import type { SVGProps } from "react";
const SvgShoppingBag = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.597 3.435a4.813 4.813 0 0 1 8.217 3.404v.121h-1.2V6.84a3.613 3.613 0 1 0-7.227 0v.121h-1.2V6.84c0-1.277.508-2.501 1.41-3.404M4.027 9.406c0-.47.38-.85.85-.85h14.248c.469 0 .85.38.85.85v11.72c0 .469-.381.85-.85.85H4.877a.85.85 0 0 1-.85-.85zm11.588 1.35a3.614 3.614 0 0 1-7.227 0h-1.2a4.813 4.813 0 0 0 9.627 0z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgShoppingBag;
