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
      d="M9.28 3.426 8.68 8.213H3.5v1.2h5.031l-.647 5.175H3.5v1.2h4.234l-.58 4.638 1.191.149.599-4.787h5.165l-.58 4.638 1.191.149.599-4.787H20.5v-1.2h-5.031l.647-5.175H20.5v-1.2h-4.235l.58-4.638-1.19-.15-.599 4.788H9.891l.58-4.638zm4.98 11.162.646-5.175H9.741l-.647 5.175z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgHash;
