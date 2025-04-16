import type { SVGProps } from "react";
const SvgRepeat = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.767 3.824a.85.85 0 0 1 1.36.68V9.23a.85.85 0 0 1-1.345.691L2.555 7.616a.85.85 0 0 1-.016-1.372zm.16 1.38L3.642 6.917 5.927 8.55zM8.73 6.34h5.318a5.17 5.17 0 0 1 5.169 5.17v.804h-1.2v-.805a3.97 3.97 0 0 0-3.97-3.969H8.732zm-3.22 5.343v.969a3.97 3.97 0 0 0 3.968 3.969h5.792v1.2H9.479a5.17 5.17 0 0 1-5.169-5.17v-.968zm12.565 3.767v3.345l2.284-1.713zm-1.2-.68a.85.85 0 0 1 1.343-.692l3.228 2.305a.85.85 0 0 1 .016 1.372l-3.228 2.42a.85.85 0 0 1-1.36-.68z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgRepeat;
