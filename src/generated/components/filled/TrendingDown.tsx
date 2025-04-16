import type { SVGProps } from "react";
const SvgTrendingDown = (props: SVGProps<SVGSVGElement>) => (
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
      d="m3.672 8.522 5.48 5.48a.85.85 0 0 0 1.202 0l3.399-3.399 4.523 4.523h-3.18v1.2h4.38c.469 0 .85-.38.85-.85v-4.378h-1.2v3.18l-4.772-4.77a.85.85 0 0 0-1.202 0l-3.399 3.399L4.52 7.674z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgTrendingDown;
