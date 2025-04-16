import type { SVGProps } from "react";
const SvgHash = (props: SVGProps<SVGSVGElement>) => (
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
      d="m8.681 8.213.599-4.787 1.19.149-.58 4.638h5.166l.599-4.787 1.19.149-.58 4.638H20.5v1.2h-4.384l-.647 5.175H20.5v1.2h-5.181l-.599 4.787-1.19-.15.58-4.637H8.943l-.599 4.787-1.19-.15.58-4.637H3.5v-1.2h4.384l.647-5.175H3.5v-1.2zm1.06 1.2-.647 5.175h5.165l.647-5.175z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgHash;
