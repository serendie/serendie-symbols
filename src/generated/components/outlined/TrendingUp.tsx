import type { SVGProps } from "react";
const SvgTrendingUp = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15.186 7.586h4.379c.47 0 .85.38.85.85v4.378h-1.2v-3.18l-4.771 4.77a.85.85 0 0 1-1.202 0l-3.4-3.398-5.232 5.232-.848-.848 5.48-5.48.396.396-.396-.396a.85.85 0 0 1 1.202 0l3.399 3.399 4.523-4.523h-3.18z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgTrendingUp;
