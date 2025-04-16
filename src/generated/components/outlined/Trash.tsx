import type { SVGProps } from "react";
const SvgTrash = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9.454 3.084A3.6 3.6 0 0 1 15.6 5.629h-1.2a2.4 2.4 0 0 0-4.8 0H8.4a3.6 3.6 0 0 1 1.054-2.545M21 7.229v1.2H3v-1.2zM17.4 20.8l-.004-10.77h1.2l.004 11.12c0 .47-.38.85-.85.85H6.25a.85.85 0 0 1-.85-.85V10.03h1.2V20.8zm-8-3.3v-6h1.2v6zm4 0v-6h1.2v6z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgTrash;
