import type { SVGProps } from "react";
const SvgAirplay = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.873 4.682a.85.85 0 0 0-.85.85V15.75c0 .47.381.85.85.85h3.99l2.616-3.923a1.827 1.827 0 0 1 3.04 0l2.615 3.923h3.99c.469 0 .85-.38.85-.85V5.532a.85.85 0 0 0-.85-.85z"
    />
    <path
      fill="currentColor"
      d="M12.166 12.88a.818.818 0 0 0-.855.351l-3.202 4.803a.827.827 0 0 0 .688 1.285H15.2a.827.827 0 0 0 .688-1.285l-3.202-4.802a.82.82 0 0 0-.52-.352"
    />
  </svg>
);
export default SvgAirplay;
