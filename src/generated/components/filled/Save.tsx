import type { SVGProps } from "react";
const SvgSave = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.284 3.4a.886.886 0 0 0-.886.886v15.429c0 .489.397.885.886.885h3.114v-6.314c0-.49.397-.886.886-.886h7.429c.489 0 .885.397.885.886V20.6h3.115c.489 0 .885-.396.885-.885V7.547a.89.89 0 0 0-.259-.626L17.078 3.66a.89.89 0 0 0-.626-.26zm4.314 11.2v5.8h6.8v-5.8zm0-8.4a1.9 1.9 0 1 0 3.8 0h1.2a3.1 3.1 0 1 1-6.2 0z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSave;
