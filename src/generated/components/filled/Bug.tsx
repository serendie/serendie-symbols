import type { SVGProps } from "react";
const SvgBug = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10.062 2.937a2.671 2.671 0 0 1 4.56 1.889v.471H9.28v-.471c0-.709.281-1.388.782-1.89M6.26 9.857a6.306 6.306 0 0 1 11.478 0 2.4 2.4 0 0 0 2.37-2.4h1.2a3.6 3.6 0 0 1-3.169 3.574q.141.6.162 1.237h-1.794v3.6H18.3q-.02.63-.158 1.227a3.6 3.6 0 0 1 3.164 3.573h-1.2a2.4 2.4 0 0 0-2.361-2.4 6.306 6.306 0 0 1-11.493 0 2.4 2.4 0 0 0-2.349 2.4h-1.2a3.6 3.6 0 0 1 3.152-3.572 6.3 6.3 0 0 1-.159-1.228h1.795v-3.6H5.696q.022-.639.163-1.239a3.6 3.6 0 0 1-3.156-3.572h1.2a2.4 2.4 0 0 0 2.356 2.4m12.044 4.811h-.597v-1.2h3v1.2zm-15.012-1.2h3v1.2h-3zm9.32 6.05v-4.135h-1.2v4.135z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgBug;
