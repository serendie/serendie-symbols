import type { SVGProps } from "react";
const SvgMic = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.999 2.025A5.184 5.184 0 0 0 6.814 7.21v4.997a5.184 5.184 0 0 0 10.369 0V7.21a5.184 5.184 0 0 0-5.184-5.185"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M5.092 19.114a9.768 9.768 0 0 0 16.675-6.907h-1.2a8.568 8.568 0 1 1-17.137 0h-1.2c0 2.591 1.03 5.075 2.862 6.907"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgMic;
