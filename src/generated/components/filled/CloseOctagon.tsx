import type { SVGProps } from "react";
const SvgCloseOctagon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.104 2a.85.85 0 0 0-.601.249L2.249 7.503a.85.85 0 0 0-.249.6v7.794c0 .225.09.441.249.6l5.254 5.254a.85.85 0 0 0 .6.249h7.794a.85.85 0 0 0 .6-.249l5.254-5.254a.85.85 0 0 0 .25-.6V8.104a.85.85 0 0 0-.25-.601l-5.254-5.254a.85.85 0 0 0-.6-.249zm3.048 10L8.02 8.869l.849-.849L12 11.152l3.132-3.132.848.849L12.849 12l3.131 3.131-.848.849L12 12.848 8.87 15.98l-.849-.848z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCloseOctagon;
