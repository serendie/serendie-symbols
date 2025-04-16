import type { SVGProps } from "react";
const SvgLayer = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.65 3.794a.85.85 0 0 1 .698 0l7.872 3.542a.85.85 0 0 1-.021 1.56l-7.872 3.287a.85.85 0 0 1-.655 0L3.8 8.895a.85.85 0 0 1-.021-1.56zM12 4.953 5.006 8.099l6.992 2.92 6.992-2.92zm0 9.59-8.283-3.232-.436 1.117 8.403 3.281.219-.559-.219.559a.87.87 0 0 0 .63 0l8.403-3.28-.436-1.118zm0 3.519-8.283-3.233-.436 1.118 8.403 3.28a.87.87 0 0 0 .63 0l8.403-3.28-.436-1.118zm-.122.047Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgLayer;
