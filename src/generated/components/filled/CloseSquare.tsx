import type { SVGProps } from "react";
const SvgCloseSquare = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.377 2.557a.82.82 0 0 0-.818.818v17.25c0 .451.366.818.818.818h17.25a.82.82 0 0 0 .818-.818V3.375a.82.82 0 0 0-.818-.818zM11.153 12 8.022 8.868l.848-.848 3.132 3.131 3.131-3.131.849.848L12.85 12l3.132 3.131-.849.849-3.131-3.132L8.87 15.98l-.848-.849z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCloseSquare;
