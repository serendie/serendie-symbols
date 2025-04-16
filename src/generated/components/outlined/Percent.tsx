import type { SVGProps } from "react";
const SvgPercent = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.398 7.5c0-1.436.976-2.643 2.3-2.996v1.272a1.9 1.9 0 0 0 0 3.448v1.271a3.1 3.1 0 0 1-2.3-2.995m5 0a1.9 1.9 0 0 1-1.1 1.724v1.271a3.101 3.101 0 0 0 0-5.991v1.272a1.9 1.9 0 0 1 1.1 1.724M4.574 18.575l14-14 .849.849-14 14zm11.124-3.8a1.9 1.9 0 0 0 0 3.449v1.271a3.101 3.101 0 0 1 0-5.991zm1.6 3.449a1.9 1.9 0 0 0 0-3.448v-1.272a3.101 3.101 0 0 1 0 5.992z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgPercent;
