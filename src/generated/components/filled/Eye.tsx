import type { SVGProps } from "react";
const SvgEye = (props: SVGProps<SVGSVGElement>) => (
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
      d="M21.974 14.459q0-.1-.002-.201C21.862 8.844 17.44 4.49 12 4.49S2.137 8.845 2.027 14.26q-.003.1-.003.2l-.004.003q.063.087.13.173a12.37 12.37 0 0 0 9.849 4.874 12.37 12.37 0 0 0 9.98-5.047zM12 15.075a3.075 3.075 0 1 0 0-6.15 3.075 3.075 0 0 0 0 6.15"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgEye;
