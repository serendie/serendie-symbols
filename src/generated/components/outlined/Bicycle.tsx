import type { SVGProps } from "react";
const SvgBicycle = (props: SVGProps<SVGSVGElement>) => (
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
      d="m11.439 4.826 4.049.002a.85.85 0 0 1 .832.677l.865 4.177v.003l.412 1.937-1.174.25-.292-1.375-10.315 1.79a.85.85 0 0 1-.995-.838V9.237h-1.38v-1.2h3.96v1.2h-1.38v1.797l9.864-1.711-.683-3.294-3.764-.002zm4.816 11.798h-1.258a3.351 3.351 0 0 0 6.508 0h-1.258a2.15 2.15 0 0 1-3.992 0m3.992-1.6h1.258a3.351 3.351 0 0 0-6.508 0h1.258a2.15 2.15 0 0 1 3.992 0M5.42 14.335a1.82 1.82 0 0 0-1.634 1.02H2.508a3.02 3.02 0 0 1 5.824 0H7.055a1.82 1.82 0 0 0-1.635-1.02m-2.912 2.62h1.278a1.82 1.82 0 0 0 3.269 0h1.277a3.02 3.02 0 0 1-5.824 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgBicycle;
