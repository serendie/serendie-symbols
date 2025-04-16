import type { SVGProps } from "react";
const SvgInbox = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.523 4.75c0-.47.381-.85.85-.85h17.25c.47 0 .85.38.85.85v6.626H20.28V5.85a.75.75 0 0 0-.75-.75H4.479a.75.75 0 0 0-.75.75v5.525H2.523zm0 8.226v6.274c0 .47.381.85.85.85h17.25c.47 0 .85-.38.85-.85v-6.274H15.97a3.975 3.975 0 0 1-7.94 0H2.522"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgInbox;
