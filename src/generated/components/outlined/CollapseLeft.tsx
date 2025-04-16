import type { SVGProps } from "react";
const SvgCollapseLeft = (props: SVGProps<SVGSVGElement>) => (
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
      d="m7.354 11.399 5.458-5.458.848.849-4.61 4.61h10.648v1.2H9.05l4.61 4.61-.848.848-5.458-5.457a.85.85 0 0 1 0-1.203m-3.053 6.1v-11h1.2v11z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCollapseLeft;
