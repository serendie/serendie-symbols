import type { SVGProps } from "react";
const SvgChevronDown = (props: SVGProps<SVGSVGElement>) => (
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
      d="m18.08 9.597-5.48 5.48a.85.85 0 0 1-1.202 0l.424-.425-.424.425-5.48-5.48.848-.849L12 13.981l5.233-5.233z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgChevronDown;
