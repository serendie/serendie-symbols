import type { SVGProps } from "react";
const SvgCar = (props: SVGProps<SVGSVGElement>) => (
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
      d="m6.442 5.225-1.844 5.99v4.315h-1.2v-4.367a.9.9 0 0 1 .038-.25l.573.176-.573-.176 1.935-6.288a.85.85 0 0 1 .812-.6h11.63a.85.85 0 0 1 .813.6l1.935 6.288a.9.9 0 0 1 .037.25v4.367h-1.2v-4.314l-1.843-5.99zm11.756 6.5h-12.4v-1.2h12.4zm-10.7 2a.4.4 0 1 0 0 .8.4.4 0 0 0 0-.8m-1.6.4a1.6 1.6 0 1 1 3.2 0 1.6 1.6 0 0 1-3.2 0m10.6-.4a.4.4 0 1 0 0 .8.4.4 0 0 0 0-.8m-1.6.4a1.6 1.6 0 1 1 3.2 0 1.6 1.6 0 0 1-3.2 0m-7.9 3.6v1.4c0 .47-.38.85-.85.85h-1.9a.85.85 0 0 1-.85-.85v-2h1.2v1.65h1.2v-1.4c0-.47.381-.85.85-.85h10.7c.47 0 .85.38.85.85v1.4h1.2v-1.65h1.2v2c0 .47-.38.85-.85.85h-1.9a.85.85 0 0 1-.85-.85v-1.4z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCar;
