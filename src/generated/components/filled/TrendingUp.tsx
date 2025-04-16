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
      d="M20.325 12.902V8.524a.85.85 0 0 0-.85-.85h-4.379v1.2h3.18l-4.523 4.523-3.399-3.4a.85.85 0 0 0-1.202 0l-5.48 5.48.848.85 5.233-5.233 3.399 3.399a.85.85 0 0 0 1.202 0l4.771-4.771v3.18z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgTrendingUp;
