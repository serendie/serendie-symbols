import type { SVGProps } from "react";
const SvgCloseCircle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M21.375 12a9.375 9.375 0 1 1-18.75 0 9.375 9.375 0 1 1 18.75 0m-10.223 0L8.02 8.869l.849-.849L12 11.152l3.132-3.132.848.849L12.849 12l3.131 3.131-.848.849L12 12.848 8.87 15.98l-.849-.848z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCloseCircle;
