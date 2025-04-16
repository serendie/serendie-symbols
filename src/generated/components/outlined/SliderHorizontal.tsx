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
      d="M5.6 5.6a2.4 2.4 0 0 0-2.263 1.6H2.089a3.601 3.601 0 0 1 7.022 0H7.863A2.4 2.4 0 0 0 5.6 5.6M2.09 8.8h1.247a2.401 2.401 0 0 0 4.526 0h1.248a3.601 3.601 0 0 1-7.022 0M2 7.947v.107zm8.798-.547 10.2-.043.005 1.2-10.2.043zm5.338 9.352H14.89a3.601 3.601 0 0 0 7.022 0h-1.248a2.4 2.4 0 0 1-4.527 0m4.527-1.6h1.248a3.601 3.601 0 0 0-7.022 0h1.247a2.401 2.401 0 0 1 4.527 0m-5.863.854v-.108zM2.998 15.4l10.2-.043.005 1.2-10.2.043z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSliderHorizontal;
