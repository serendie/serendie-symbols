import type { SVGProps } from "react";
const SvgCursor = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.624 5.66a.819.819 0 0 1 1.055-1.053l13.01 4.898c.69.26.711 1.228.033 1.519l-4.804 2.059 3.962 3.962-.848.849-3.962-3.962-2.059 4.802c-.29.678-1.26.656-1.519-.037zm1.417.366 4.242 11.36 2.033-4.742a.6.6 0 0 1 .315-.315l4.748-2.035zm4.575 12.252Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCursor;
