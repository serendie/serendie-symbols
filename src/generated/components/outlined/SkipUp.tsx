import type { SVGProps } from "react";
const SvgSkipUp = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.999 7.22h12v1.2h-12zm5.399 3.053a.85.85 0 0 1 1.202 0l5.48 5.48-.848.849-5.233-5.233-5.233 5.233-.848-.848z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSkipUp;
