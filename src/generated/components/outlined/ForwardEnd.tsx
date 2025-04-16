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
      d="M19.129 11.238V6.5h1.2v11h-1.2v-4.738L12.41 17.24a.85.85 0 0 1-1.321-.707v-3.36l-6.1 4.067-.333-.5.332.5a.85.85 0 0 1-1.321-.707V7.467a.85.85 0 0 1 1.321-.707l6.1 4.067v-3.36a.85.85 0 0 1 1.322-.707zM10.686 12 4.868 8.121v7.758zm1.604-3.879L18.108 12l-5.818 3.879z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgForwardEnd;
