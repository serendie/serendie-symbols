import type { SVGProps } from "react";
const SvgVolumeMuted = (props: SVGProps<SVGSVGElement>) => (
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
      d="M13.223 5.28 8.276 9.404a.85.85 0 0 1-.544.197h-.514V8.4h.387l5.424-4.52a.85.85 0 0 1 1.394.653v14.933a.85.85 0 0 1-1.394.653l-5.424-4.52h-.387v-1.2h.514a.85.85 0 0 1 .544.198l4.947 4.121zm-7.6 4.32a2.4 2.4 0 1 0 0 4.8v1.2a3.6 3.6 0 0 1 0-7.2zM18.112 12 15.97 9.857l.848-.848 2.142 2.142 2.142-2.142.85.848L19.808 12l2.142 2.142-.849.848-2.142-2.142-2.142 2.142-.848-.848z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgVolumeMuted;
