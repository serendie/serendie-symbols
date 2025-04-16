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
      d="M11.398 2.092a2.976 2.976 0 0 0 0 5.829V6.677a1.776 1.776 0 0 1 0-3.342zm1.2 4.585a1.776 1.776 0 0 0 0-3.342V2.092a2.976 2.976 0 0 1 0 5.829v12.766a8.776 8.776 0 0 0 8.155-8.155h-1.755v-1.2h2.975v.6c0 5.51-4.465 9.975-9.975 9.975s-9.975-4.465-9.975-9.974v-.6h2.975v1.2H3.244a8.776 8.776 0 0 0 8.154 8.154V7.933h1.2z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgAnchor;
