import type { SVGProps } from "react";
const SvgMap = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9.395 3.778a.85.85 0 0 0-.829.032Zm-.37 1.158L4.598 7.641V18.69l3.8-2.28V6.75h1.2v9.628l5.374 2.687 4.426-2.655V5.32l-3.8 2.321v9.608h-1.2V7.673zm5.947 1.682 4.333-2.648a.85.85 0 0 1 1.293.725v11.913a.85.85 0 0 1-.412.729l-4.761 2.856a.85.85 0 0 1-.818.032l-5.582-2.792-4.34 2.604a.85.85 0 0 1-1.287-.73V7.446a.85.85 0 0 1 .407-.725l4.761-2.91.83-.032m0 0 5.576 2.84Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgMap;
