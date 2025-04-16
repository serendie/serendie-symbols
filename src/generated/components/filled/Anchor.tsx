import type { SVGProps } from "react";
const SvgAnchor = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9.023 5.073a2.975 2.975 0 1 1 3.575 2.914v12.767a8.776 8.776 0 0 0 8.155-8.155h-1.755v-1.2h2.975v.6c0 5.509-4.465 9.975-9.975 9.975s-9.975-4.466-9.975-9.975v-.6h2.975v1.2H3.244a8.776 8.776 0 0 0 8.154 8.155V7.987a2.976 2.976 0 0 1-2.375-2.914"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgAnchor;
