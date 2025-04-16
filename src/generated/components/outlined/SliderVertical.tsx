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
      d="m7.6 2.498.044 10.6-1.2.005-.044-10.6zM19.4 6.1a2.4 2.4 0 0 1-1.8 2.324V9.65a3.601 3.601 0 0 0 0-7.1v1.226A2.4 2.4 0 0 1 19.4 6.1m-4.8 0c0-1.118.765-2.058 1.8-2.324V2.55a3.601 3.601 0 0 0 0 7.1V8.424A2.4 2.4 0 0 1 14.6 6.1M17 2.5h.046-.091zm.6 8.398.044 10.6-1.2.005-.044-10.6zM6.45 15.576a2.401 2.401 0 0 0 0 4.648v1.226a3.6 3.6 0 0 1 0-7.1zm1.2 4.648a2.401 2.401 0 0 0 0-4.648V14.35a3.601 3.601 0 0 1 0 7.1zM7.1 14.3h-.101z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSliderVertical;
