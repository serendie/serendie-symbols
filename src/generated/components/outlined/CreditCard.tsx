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
      d="M2.398 5.75c0-.47.381-.85.85-.85h17.5c.47 0 .85.38.85.85V8.3h-1.2V6.1h-16.8v2.2h-1.2zm18 4.15v8h-16.8v-8h-1.2v8.35c0 .47.381.85.85.85h17.5c.47 0 .85-.38.85-.85V9.9zm-1.4-1.4h-14V7.3h14zm0 2.402h-14v-1.2h14zm-2.8 3.598a.8.8 0 0 0 1.6 0h1.2a2 2 0 1 1-4 0z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCreditCard;
