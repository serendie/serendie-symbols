import type { SVGProps } from "react";
const SvgThumbUp = (props: SVGProps<SVGSVGElement>) => (
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
      d="M14.296 6.1a.85.85 0 0 0-.81.584l-1.663 4.991a.62.62 0 0 1-.59.425H9.948v5.8h9.267l.859-7.3H15.76a.61.61 0 0 1-.612-.61V6.952a.853.853 0 0 0-.852-.853m-1.948.204a2.053 2.053 0 0 1 4 .65V9.4h4.12a.85.85 0 0 1 .843.95l-.94 8a.85.85 0 0 1-.845.75H8.748v-8.2h2.068zm-4.6 5.796a2.9 2.9 0 1 0 0 5.8v1.2a4.1 4.1 0 0 1 0-8.2z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgThumbUp;
