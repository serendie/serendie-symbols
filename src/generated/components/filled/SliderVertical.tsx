import type { SVGProps } from "react";
const SvgSliderVertical = (props: SVGProps<SVGSVGElement>) => (
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
      d="m7.62 13.098-.043-10.6-1.2.005.044 10.6zM20.578 6.1a3.6 3.6 0 1 0-7.2 0 3.6 3.6 0 0 0 7.2 0m-9.951 11.8a3.6 3.6 0 1 0-7.2 0 3.6 3.6 0 0 0 7.2 0m6.951-7.002.044 10.6-1.2.005-.044-10.6z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSliderVertical;
