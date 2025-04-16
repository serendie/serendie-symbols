import type { SVGProps } from "react";
const SvgEject = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.27 6.093a.863.863 0 0 1 1.459 0l5.522 8.718a.863.863 0 0 1-.73 1.325H6.479a.863.863 0 0 1-.73-1.325zM12 7.184l-4.91 7.752h9.82zm6.316 11.352H5.684v-1.2h12.632z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgEject;
