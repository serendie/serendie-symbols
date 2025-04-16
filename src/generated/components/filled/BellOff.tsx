import type { SVGProps } from "react";
const SvgBellOff = (props: SVGProps<SVGSVGElement>) => (
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
      d="m3.09 3.938.848-.848 16.97 16.97-.848.849zM6.044 9.155c-.42.88-.644 1.85-.644 2.845v4A1.4 1.4 0 0 1 4 17.4v1.2h11.488z"
    />
    <path
      fill="currentColor"
      d="M19.448 18.6h-1.697L6.928 7.775a6.6 6.6 0 0 1 .848-.848zM18.6 15.489v-3.49a6.6 6.6 0 0 0-9.445-5.955zM10 19.4h4a1.997 1.997 0 0 1-2 2 1.997 1.997 0 0 1-2-2M13.414 3.185A2 2 0 0 1 14 4.6h-4a2 2 0 0 1 3.414-1.415"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M10 4.6a2 2 0 0 1 4 0z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgBellOff;
