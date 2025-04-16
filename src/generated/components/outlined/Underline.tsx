import type { SVGProps } from "react";
const SvgUnderline = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.733 9.61V3.73h1.2v5.88zm11.338 0V3.73h1.2v5.88zM6.933 11.214a5.07 5.07 0 1 0 10.138 0h1.2a6.269 6.269 0 1 1-12.538 0zm12.243 9.067H4.828v-1.2h14.348z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgUnderline;
