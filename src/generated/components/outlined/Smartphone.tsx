import type { SVGProps } from "react";
const SvgSmartphone = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.54 2.875c0-.47.38-.85.85-.85h11.218c.47 0 .85.38.85.85V4.22h-1.2v-.995H6.739v.995h-1.2zm8.458 2.745h-4v-1.2h4zM6.74 20.775V5.82h-1.2v15.305c0 .47.38.85.85.85h11.219c.47 0 .85-.38.85-.85V5.82h-1.2v14.955zm5.26-3.55a.775.775 0 1 0 0 1.55.775.775 0 0 0 0-1.55M10.022 18a1.975 1.975 0 1 1 3.95 0 1.975 1.975 0 0 1-3.95 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSmartphone;
