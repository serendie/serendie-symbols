import type { SVGProps } from "react";
const SvgWalk = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.748 2.75a2.6 2.6 0 1 0 0 5.2 2.6 2.6 0 0 0 0-5.2"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12.348 8.65v-.1h-1.2v.001a4.6 4.6 0 0 0-4.5 4.6h1.2a3.4 3.4 0 0 1 3.3-3.4v6.399a3.9 3.9 0 0 1-3.9 3.9v1.2a5.1 5.1 0 0 0 5.061-4.465 4.4 4.4 0 0 1 3.84 4.365h1.2a5.6 5.6 0 0 0-5-5.568v-3.645a5.09 5.09 0 0 0 3.9 1.813v-1.2a3.9 3.9 0 0 1-3.9-3.9"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgWalk;
