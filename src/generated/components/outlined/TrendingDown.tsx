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
      d="m9.242 14.09-5.48-5.48.848-.848 5.233 5.232 3.399-3.399a.85.85 0 0 1 1.202 0l-.424.425-.015.014m.015-.014.424-.425 4.77 4.771v-3.18h1.2v4.378c0 .47-.38.85-.85.85h-4.378v-1.2h3.18l-4.523-4.523-3.4 3.4a.85.85 0 0 1-1.201 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgTrendingDown;
