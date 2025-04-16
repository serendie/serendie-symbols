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
      d="M7.788 7.231a2.844 2.844 0 1 0 0 5.688 2.844 2.844 0 0 0 0-5.688"
    />
    <path
      fill="currentColor"
      d="M2.547 5.65h1.2v8.313h8.1V7.231h6.759c1.57 0 2.842 1.27 2.844 2.84v8.28h-1.2v-3.188H3.747v3.188h-1.2z"
    />
  </svg>
);
export default SvgBed;
