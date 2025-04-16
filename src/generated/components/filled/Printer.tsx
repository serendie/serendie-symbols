import type { SVGProps } from "react";
const SvgPrinter = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.248 7.449a.85.85 0 0 0-.85.85v9.482c0 .47.381.85.85.85h3.15V16.3c0-.47.381-.85.85-.85h9.5c.47 0 .85.38.85.85v2.332h3.15c.47 0 .85-.38.85-.85V8.3a.85.85 0 0 0-.85-.85zm13.95 3.197a.8.8 0 0 0 .8-.8h1.2a2 2 0 1 1-4 0h1.2a.8.8 0 0 0 .8.8"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M7.6 16.838c0-.105.099-.19.22-.19h8.357c.122 0 .22.085.22.19v3.422c0 .105-.098.19-.22.19H7.82c-.121 0-.22-.085-.22-.19zM16.749 3.549h-9.5a.25.25 0 0 0-.25.25v1.8c0 .138.111.25.25.25h9.5a.25.25 0 0 0 .25-.25v-1.8a.25.25 0 0 0-.25-.25"
    />
  </svg>
);
export default SvgPrinter;
