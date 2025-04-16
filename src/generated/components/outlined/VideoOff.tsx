import type { SVGProps } from "react";
const SvgVideoOff = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.753 5.69a.85.85 0 0 0-.21.56v11.5c0 .47.38.85.85.85h11.5c.214 0 .41-.08.56-.21l-.99-.99H3.743V6.68zm11.79 10.093v-.001L5.361 6.6H5.36l-1.2-1.2h.001l-1.46-1.46.848-.848L20.518 20.06l-.848.848-3.927-3.927zm1.2-2.194v-7.34a.85.85 0 0 0-.85-.85h-7.34l1.2 1.2h5.79v5.79zm5.717-6.07a.85.85 0 0 0-1.38-.664l-3.113 2.484.749.938 2.544-2.03v7.507l-2.544-2.031-.749.938 3.113 2.484a.85.85 0 0 0 1.38-.665z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgVideoOff;
