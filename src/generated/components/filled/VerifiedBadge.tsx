import type { SVGProps } from "react";
const SvgVerifiedBadge = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.47 2.186a.85.85 0 0 1 1.057 0l2.657 2.125 3.381.375a.85.85 0 0 1 .749.748l.375 3.382 2.125 2.656a.85.85 0 0 1 0 1.058l-2.125 2.657-.376 3.379a.85.85 0 0 1-.748.748l-3.382.376-2.656 2.124a.846.846 0 0 1-1.057 0L8.813 19.69l-3.38-.376a.85.85 0 0 1-.748-.748l-.375-3.38-2.124-2.656a.85.85 0 0 1 0-1.058l2.123-2.654.376-3.384a.85.85 0 0 1 .748-.748l3.38-.375zM7.095 12.28l2.882 2.883c.331.33.867.33 1.198 0l5.73-5.73-.845-.846-5.484 5.484-2.636-2.636z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgVerifiedBadge;
