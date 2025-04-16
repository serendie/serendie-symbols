import type { SVGProps } from "react";
const SvgVolumeNone = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16.598 5.28 11.65 9.404a.85.85 0 0 1-.544.197h-.91V8.4h.783l5.424-4.52a.85.85 0 0 1 1.394.653v14.933a.85.85 0 0 1-1.394.653l-5.424-4.52h-.782v-1.2h.91a.85.85 0 0 1 .543.198l4.947 4.121zm-5.715 10.238ZM8.998 9.6a2.4 2.4 0 1 0 0 4.8v1.2a3.6 3.6 0 0 1 0-7.2z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgVolumeNone;
