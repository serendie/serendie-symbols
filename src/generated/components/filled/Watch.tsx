import type { SVGProps } from "react";
const SvgWatch = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16.026 16.952A6.36 6.36 0 0 1 12 18.382a6.36 6.36 0 0 1-4.026-1.43q0 .057.008.114l.496 3.974a.926.926 0 0 0 .92.81h5.205c.467 0 .86-.347.919-.81l.496-3.973a1 1 0 0 0 .008-.115M8.478 2.962a.926.926 0 0 1 .92-.812h5.205c.467 0 .86.348.919.812l.496 3.973a1 1 0 0 1 .008.114A6.36 6.36 0 0 0 12 5.619a6.36 6.36 0 0 0-4.026 1.43 1 1 0 0 1 .008-.114z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 17.192a5.191 5.191 0 1 0 0-10.383 5.191 5.191 0 0 0 0 10.383m-.6-8.66v3.349a.9.9 0 0 0 .26.628l2.228 2.228.849-.848-2.137-2.137v-3.22z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgWatch;
