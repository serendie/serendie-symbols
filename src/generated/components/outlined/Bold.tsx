import type { SVGProps } from "react";
const SvgBold = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.898 3.4h4v1.2h-2.8v6.8h2.8v1.2h-2.8v6.8h4.8v1.2h-6zm8.005 2.196a3.4 3.4 0 0 0-2.405-.996V3.4a4.6 4.6 0 0 1 2.98 8.106 4.6 4.6 0 0 1-.98 9.094v-1.2a3.4 3.4 0 1 0 0-6.8h-2v-1.2a3.4 3.4 0 0 0 2.405-5.804"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgBold;
