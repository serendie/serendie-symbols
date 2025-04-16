import type { SVGProps } from "react";
const SvgSeal = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12.529 2.147a.85.85 0 0 0-1.062 0L8.8 4.281l-3.393.376a.85.85 0 0 0-.75.751l-.378 3.397-2.132 2.664a.85.85 0 0 0 0 1.062l2.132 2.666.378 3.393a.85.85 0 0 0 .75.751l3.393.377 2.667 2.133a.85.85 0 0 0 1.062 0l2.665-2.133 3.396-.377a.85.85 0 0 0 .75-.75l.377-3.392 2.134-2.668a.85.85 0 0 0 0-1.062l-2.133-2.666-.377-3.395a.85.85 0 0 0-.751-.75l-3.395-.378z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSeal;
