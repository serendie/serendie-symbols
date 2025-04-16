import type { SVGProps } from "react";
const SvgArrowUpRight = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.73 5.4h11.02c.469 0 .85.38.85.85v11.02h-1.2V7.45L6.422 18.423l-.849-.848L16.551 6.6H6.73z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgArrowUpRight;
