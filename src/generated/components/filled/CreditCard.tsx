import type { SVGProps } from "react";
const SvgCreditCard = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.023 5.454c0-.47.381-.85.85-.85h18.25c.47 0 .85.38.85.85v13.093c0 .47-.38.85-.85.85H2.873a.85.85 0 0 1-.85-.85zM18.198 15a.8.8 0 0 1-1.6 0h-1.2a2 2 0 1 0 4 0zm1.37-7.2V9H4.429V7.8zm0 2.4H4.429v1.2h15.14z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCreditCard;
