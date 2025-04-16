import type { SVGProps } from "react";
const SvgBed = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.547 5.65h1.2v8.313h8.1V7.231h5.161v1.2h-3.96v5.532h7.202v-2.292h1.2v6.68h-1.2v-3.188H3.747v3.188h-1.2zm5.241 2.781a1.644 1.644 0 1 0 0 3.288 1.644 1.644 0 0 0 0-3.288m-2.844 1.644a2.844 2.844 0 1 1 5.688 0 2.844 2.844 0 0 1-5.688 0m15.306 0c0-.908-.736-1.644-1.644-1.644v-1.2a2.844 2.844 0 0 1 2.844 2.844z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgBed;
