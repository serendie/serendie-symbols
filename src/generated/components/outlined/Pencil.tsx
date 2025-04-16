import type { SVGProps } from "react";
const SvgPencil = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15.393 5.213a2.4 2.4 0 1 1 3.394 3.394l-.142.141-.848-.848.141-.142a1.2 1.2 0 0 0-1.697-1.697l-.141.142-.849-.849zm-9.094 10.79 8.67-8.669-.849-.849-8.768 8.769a.85.85 0 0 0-.25.578l-.06 2.253a.85.85 0 0 0 .873.872l2.253-.06a.85.85 0 0 0 .578-.249l8.768-8.768-.848-.849-8.67 8.67-1.744.047z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgPencil;
