import type { SVGProps } from "react";
const SvgAward = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.199 3.05a6.152 6.152 0 0 0-3.502 10.497V20.1c0 .7.8 1.1 1.36.68l2.941-2.205 2.94 2.205a.85.85 0 0 0 1.36-.68v-6.55a6.152 6.152 0 0 0-3.5-10.498v1.213a4.952 4.952 0 0 1 0 9.773v1.213l.091-.013a6.1 6.1 0 0 0 2.21-.773v4.935l-2.591-1.943a.85.85 0 0 0-1.02 0L8.898 19.4v-4.936a6.1 6.1 0 0 0 2.3.787v-1.213a4.953 4.953 0 0 1 0-9.773z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgAward;
