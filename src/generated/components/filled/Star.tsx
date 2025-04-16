import type { SVGProps } from "react";
const SvgStar = (props: SVGProps<SVGSVGElement>) => (
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
      d="M13.37 3.508c-.487-1.25-2.255-1.25-2.742 0l-1.84 4.72-4.704.341c-1.34.098-1.86 1.793-.804 2.624l4.062 3.2-1.855 4.93c-.505 1.34 1.008 2.539 2.198 1.74l4.325-2.903 4.7 2.93c1.232.767 2.713-.52 2.125-1.846l-2.159-4.866 4.042-3.185c1.056-.831.536-2.526-.804-2.624l-4.705-.342z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgStar;
