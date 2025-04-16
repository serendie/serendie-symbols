import type { SVGProps } from "react";
const SvgSliderHorizontal = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.6 4.424a3.6 3.6 0 1 0 0 7.2 3.6 3.6 0 0 0 0-7.2m12.8 7.952a3.6 3.6 0 1 0 0 7.2 3.6 3.6 0 0 0 0-7.2m-7.602-4.952 10.2-.044.005 1.2-10.2.044zm2.4 7.956-10.2.044.005 1.2 10.2-.044z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSliderHorizontal;
