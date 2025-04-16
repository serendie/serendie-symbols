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
      fillRule="evenodd"
      d="M3.023 5.532c0-.47.381-.85.85-.85h16.25c.47 0 .85.38.85.85V15.75c0 .47-.38.85-.85.85h-3.625v-1.2h3.275V5.882H4.223V15.4h3.275v1.2H3.873a.85.85 0 0 1-.85-.85zm8.975 8.831L9.495 18.12h5.007zm-.687-1.131a.827.827 0 0 1 1.375 0l3.202 4.802a.826.826 0 0 1-.688 1.285H8.797a.827.827 0 0 1-.688-1.285z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgAirplay;
