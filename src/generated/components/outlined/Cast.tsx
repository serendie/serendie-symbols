import type { SVGProps } from "react";
const SvgCast = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.2 5.705c0-.444.36-.805.805-.805h15.989c.445 0 .805.36.805.805v11.99c0 .445-.36.805-.805.805H11.33v-1.2h8.269V6.1h-15.2v3.97H3.2zm0 6.265a6.53 6.53 0 0 1 6.528 6.53h-1.2A5.33 5.33 0 0 0 3.2 13.17zm0 2.837A3.693 3.693 0 0 1 6.892 18.5h-1.2a2.494 2.494 0 0 0-2.494-2.493z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCast;
