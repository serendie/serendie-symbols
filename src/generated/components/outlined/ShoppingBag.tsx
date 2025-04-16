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
      d="M8.597 3.435a4.813 4.813 0 0 1 8.217 3.404v2.317h-1.2V6.84a3.613 3.613 0 1 0-7.227 0v2.317h-1.2V6.84c0-1.277.508-2.501 1.41-3.404m-3.37 6.321h.363v-1.2h-.713a.85.85 0 0 0-.85.85v11.72c0 .469.38.85.85.85h14.248c.469 0 .85-.381.85-.85V9.405a.85.85 0 0 0-.85-.85h-.715v1.2h.364v11.02H5.227zm8.784 0H9.99v-1.2h4.02zm-5.624 1a3.613 3.613 0 1 0 7.227 0h1.2a4.813 4.813 0 1 1-9.627 0z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgShoppingBag;
