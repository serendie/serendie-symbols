import type { SVGProps } from "react";
const SvgAlertOctagon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.104 2a.85.85 0 0 0-.601.249L2.249 7.503a.85.85 0 0 0-.249.6v7.794c0 .225.09.441.249.6l5.254 5.254a.85.85 0 0 0 .6.249h7.794a.85.85 0 0 0 .6-.249l5.254-5.254a.85.85 0 0 0 .25-.6V8.104a.85.85 0 0 0-.25-.601l-5.254-5.254a.85.85 0 0 0-.6-.249zM11.4 14.1v-8h1.2v8zm1.4 3a.8.8 0 1 0-1.6 0 .8.8 0 0 0 1.6 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgAlertOctagon;
