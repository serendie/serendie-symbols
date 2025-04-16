import type { SVGProps } from "react";
const SvgArrowRight = (props: SVGProps<SVGSVGElement>) => (
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
      d="m12.693 20.393 7.792-7.791a.85.85 0 0 0 0-1.202l-7.793-7.793-.848.849 6.944 6.945-15.522-.002v1.2l15.523.002-6.944 6.944z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgArrowRight;
