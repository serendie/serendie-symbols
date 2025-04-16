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
      d="M9.898 3.4h-4v17.2h6v-1.2h-4.8v-6.8h2.8v-1.2h-2.8V4.6h2.8zm4.853 7.853A4.6 4.6 0 0 0 11.5 3.401v1.2a3.4 3.4 0 0 1 .002 6.8H11.5v1.2h2a3.4 3.4 0 1 1 0 6.8v1.2a4.6 4.6 0 0 0 .978-9.095q.142-.12.274-.253"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgBold;
