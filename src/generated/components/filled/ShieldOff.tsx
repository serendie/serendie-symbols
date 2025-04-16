import type { SVGProps } from "react";
const SvgShieldOff = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="currentColor" d="m3.09 3.917.848-.848 16.97 16.97-.848.849z" />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M3.399 6.49v7.288h.01a8.6 8.6 0 0 0 13.756 6.477zM19.1 18.23a9 9 0 0 1-.75.947L3.71 4.537a.9.9 0 0 1 .295-.157l.958-.287zm.804-1.459a8.6 8.6 0 0 0 .686-2.993h.009V5.195a.85.85 0 0 0-.606-.815l-7.75-2.325a.85.85 0 0 0-.488 0L6.703 3.571z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgShieldOff;
