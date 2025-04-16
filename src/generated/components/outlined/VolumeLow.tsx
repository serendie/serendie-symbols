import type { SVGProps } from "react";
const SvgVolumeLow = (props: SVGProps<SVGSVGElement>) => (
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
      d="M14.4 5.28 9.452 9.404a.85.85 0 0 1-.544.197h-.51V8.4h.383l5.423-4.52a.85.85 0 0 1 1.394.653v14.933a.85.85 0 0 1-1.394.653l-5.423-4.52H8.4v-1.2h.509a.85.85 0 0 1 .544.198l4.946 4.121zM6.8 9.6a2.4 2.4 0 1 0 0 4.8v1.2a3.6 3.6 0 0 1 0-7.2zm10.4-1.2a3.6 3.6 0 1 1 0 7.2v-1.2a2.4 2.4 0 1 0 0-4.8z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgVolumeLow;
