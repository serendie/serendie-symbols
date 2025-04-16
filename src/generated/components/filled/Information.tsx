import type { SVGProps } from "react";
const SvgInformation = (props: SVGProps<SVGSVGElement>) => (
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
      d="M21.375 12a9.375 9.375 0 1 1-18.75 0 9.375 9.375 0 1 1 18.75 0M12 6.4A.8.8 0 1 1 12 8a.8.8 0 0 1 0-1.6m-.6 11.2v-8h1.2v8z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgInformation;
