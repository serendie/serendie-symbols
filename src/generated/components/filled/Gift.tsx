import type { SVGProps } from "react";
const SvgGift = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9.74 2.65a2.858 2.858 0 0 0-1.796 5.081H4.901a.85.85 0 0 0-.85.85v3.64c0 .47.38.85.85.85h6.497V7.719h.154q.25-.205.447-.459.198.255.447.46h.152v5.351h6.499c.47 0 .85-.38.85-.85v-3.64a.85.85 0 0 0-.85-.85h-3.043A2.858 2.858 0 1 0 12 3.756 2.85 2.85 0 0 0 9.741 2.65M4.88 15c0-.47.38-.85.85-.85h5.668v7.2H5.73a.85.85 0 0 1-.85-.85zm7.718 6.35v-7.2h5.672c.47 0 .85.38.85.85v5.5c0 .47-.38.85-.85.85z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgGift;
