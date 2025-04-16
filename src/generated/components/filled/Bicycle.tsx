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
      d="m11.437 4.826 4.048.002a.85.85 0 0 1 .832.677l.866 4.177v.003l.411 1.937-1.173.25-.292-1.375-10.315 1.79a.85.85 0 0 1-.995-.838V9.237h-1.38v-1.2h3.96v1.2h-1.38v1.797l9.864-1.711-.683-3.294-3.764-.002z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M5.418 13.135a3.02 3.02 0 1 0 0 6.04 3.02 3.02 0 0 0 0-6.04M18.248 12.474a3.35 3.35 0 1 0 0 6.7 3.35 3.35 0 0 0 0-6.7"
    />
  </svg>
);
export default SvgBicycle;
