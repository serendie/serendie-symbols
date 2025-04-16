import type { SVGProps } from "react";
const SvgCompass = (props: SVGProps<SVGSVGElement>) => (
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
      d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-7.226-3.787c.708-.294 1.413.426 1.104 1.128l-1.869 4.237a.85.85 0 0 1-.442.438l-4.29 1.842c-.706.303-1.42-.41-1.117-1.116L10 10.454a.85.85 0 0 1 .456-.45z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCompass;
