import type { SVGProps } from "react";
const SvgArrowLeft = (props: SVGProps<SVGSVGElement>) => (
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
      d="m3.268 11.399 7.792-7.792.848.849-6.943 6.943 15.522.002v1.2l-15.523-.002 6.945 6.946-.848.848-7.793-7.792a.85.85 0 0 1 0-1.202"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgArrowLeft;
