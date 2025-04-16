import type { SVGProps } from "react";
const SvgThumbDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 25 24"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="m5.767 6.1-.86 7.3h4.315c.337 0 .611.274.611.612v3.035a.853.853 0 0 0 1.662.27l1.664-4.991a.62.62 0 0 1 .59-.426h1.284V6.1zM4.61 5.651a.85.85 0 0 1 .844-.75h10.778v8.2h-2.068l-1.532 4.596a2.053 2.053 0 0 1-4-.65V14.6H4.514a.85.85 0 0 1-.844-.949zM19.284 6.95a2.9 2.9 0 0 0-2.051-.85V4.9a4.1 4.1 0 1 1 0 8.2v-1.2a2.9 2.9 0 0 0 2.05-4.95"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgThumbDown;
