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
      fillRule="evenodd"
      d="M6.044 9.156A6.6 6.6 0 0 0 5.399 12h1.2a5.4 5.4 0 0 1 .358-1.931zM16.55 17.4 7.78 8.63l-.853-.853L3.09 3.939l.848-.848 16.97 16.97-.848.848-2.31-2.309zm-2.262 0H6.19A2.6 2.6 0 0 0 6.6 16v-2.4H5.4V16A1.4 1.4 0 0 1 4 17.4v1.2h11.488zm4.311-1.91V13.6h-1.2v.69zm-8.531-8.533A5.4 5.4 0 0 1 17.4 12h1.2a6.6 6.6 0 0 0-9.445-5.955zM11.999 2a2.6 2.6 0 0 0-2.6 2.6h1.2a1.4 1.4 0 0 1 2.8 0h1.2A2.6 2.6 0 0 0 12 2m1.4 17.4a1.4 1.4 0 1 1-2.8 0H9.4a2.6 2.6 0 1 0 5.2 0z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgBellOff;
