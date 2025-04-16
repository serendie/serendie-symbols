import type { SVGProps } from "react";
const SvgForwardEnd = (props: SVGProps<SVGSVGElement>) => (
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
      d="M20.33 6.5v11h-1.2v-4.738L12.41 17.24a.85.85 0 0 1-1.321-.707v-3.36l-6.1 4.067a.85.85 0 0 1-1.322-.707V7.467a.85.85 0 0 1 1.321-.707l6.1 4.067v-3.36a.85.85 0 0 1 1.322-.707l6.718 4.478V6.5z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgForwardEnd;
