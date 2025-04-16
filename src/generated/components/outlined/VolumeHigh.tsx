import type { SVGProps } from "react";
const SvgVolumeHigh = (props: SVGProps<SVGSVGElement>) => (
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
      d="M13.223 5.28 8.276 9.404a.85.85 0 0 1-.544.197h-.514V8.4h.387l5.424-4.52a.85.85 0 0 1 1.394.653v14.933a.85.85 0 0 1-1.394.653l-5.424-4.52h-.387v-1.2h.514a.85.85 0 0 1 .544.198l4.947 4.121zm2.799.748a5.971 5.971 0 0 1 0 11.943v-1.2a4.771 4.771 0 0 0 0-9.543zM5.623 9.6a2.4 2.4 0 1 0 0 4.8v1.2a3.6 3.6 0 0 1 0-7.2zm10.398-1.003a3.402 3.402 0 1 1 0 6.805v-1.2a2.202 2.202 0 1 0 0-4.405z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgVolumeHigh;
