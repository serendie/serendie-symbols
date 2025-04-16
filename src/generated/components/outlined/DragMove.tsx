import type { SVGProps } from "react";
const SvgDragMove = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.4 3.753a.85.85 0 0 1 1.201 0l3.11 3.11-.848.848L12 4.85 9.137 7.712l-.848-.849zM3.752 11.4l3.11-3.11.848.848-2.862 2.863 2.863 2.863-.849.848-3.11-3.11a.85.85 0 0 1 0-1.202m15.4.6L16.29 9.139l.849-.848 3.11 3.11a.85.85 0 0 1 0 1.202l-3.11 3.11-.85-.848zM12 11.2a.8.8 0 1 0 0 1.6.8.8 0 0 0 0-1.6m-2 .8a2 2 0 1 1 4 0 2 2 0 0 1-4 0m2 7.153L9.136 16.29l-.848.848 3.11 3.11a.85.85 0 0 0 1.202 0l3.11-3.11-.848-.848z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgDragMove;
