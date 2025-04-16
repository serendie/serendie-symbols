import type { SVGProps } from "react";
const SvgAlertTriangle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.76 18.494a1.198 1.198 0 0 0 1.03 1.808h16.423c.916 0 1.493-.986 1.044-1.784L13.265 4.31a1.198 1.198 0 0 0-2.073-.024zm8.875-3.794V8.302h1.2V14.7zm1.4 2.4a.8.8 0 1 0-1.6 0 .8.8 0 0 0 1.6 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgAlertTriangle;
