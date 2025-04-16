import type { SVGProps } from "react";
const SvgHome = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.995 3.526 4.2 10.503v10.09h4.22v-2.2h1.2v2.55c0 .469-.38.85-.85.85H3.85a.85.85 0 0 1-.85-.85V10.345c0-.25.111-.485.295-.644l8.144-7.289.007-.005a.85.85 0 0 1 1.115.015m-.566 1.103 7.805 6.972v10.094H15.58v-2.2h-1.2v2.55c0 .47.38.85.85.85h4.921c.47 0 .85-.38.85-.85v-10.6a.85.85 0 0 0-.283-.635L12.56 2.423M8.42 16.43a3.58 3.58 0 1 1 7.158 0v.357h-1.2v-.357a2.38 2.38 0 1 0-4.759 0v.357h-1.2z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgHome;
