import type { SVGProps } from "react";
const SvgExpandLeft = (props: SVGProps<SVGSVGElement>) => (
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
      d="m4.55 11.399 5.458-5.458.848.849-4.61 4.61h10.648v1.2H6.246l4.611 4.61-.848.848-5.46-5.457a.85.85 0 0 1 0-1.203m13.942 6.1v-11h1.2v11z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgExpandLeft;
