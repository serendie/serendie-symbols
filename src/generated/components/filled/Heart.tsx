import type { SVGProps } from "react";
const SvgHeart = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.535 3.373A5.035 5.035 0 0 0 2.5 8.408v.533c0 1.45.567 2.842 1.579 3.88l7.402 7.588a.725.725 0 0 0 1.038 0l7.224-7.41a6.17 6.17 0 0 0 1.753-4.308h.004v-.283A5.035 5.035 0 0 0 12 6.079a5.03 5.03 0 0 0-4.465-2.706"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgHeart;
