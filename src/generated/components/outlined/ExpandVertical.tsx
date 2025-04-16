import type { SVGProps } from "react";
const SvgExpandVertical = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.4 2.753a.85.85 0 0 1 1.202 0l3.58 3.58-.848.848-2.732-2.732v6.552h-1.2V4.449L8.669 7.18l-.849-.848zm.002 16.8L8.669 16.82l-.849.849 3.58 3.58a.85.85 0 0 0 1.202 0l3.58-3.58-.848-.848-2.732 2.731v-6.551h-1.2z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgExpandVertical;
