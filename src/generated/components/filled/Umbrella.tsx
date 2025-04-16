import type { SVGProps } from "react";
const SvgUmbrella = (props: SVGProps<SVGSVGElement>) => (
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
      d="M17.545 20.345a3.6 3.6 0 0 1-6.146-2.546h1.2a2.4 2.4 0 0 0 4.8 0h1.2a3.6 3.6 0 0 1-1.054 2.546M5.21 5.411a9.6 9.6 0 0 1 16.385 6.522.845.845 0 0 1-.846.867h-8.15v3.4h-1.2v-3.4h-8.15a.845.845 0 0 1-.846-.867A9.6 9.6 0 0 1 5.21 5.411"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgUmbrella;
