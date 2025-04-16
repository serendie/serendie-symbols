import type { SVGProps } from "react";
const SvgHexagon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12.449 2.575a.85.85 0 0 0-.901 0l-7.75 4.843a.85.85 0 0 0-.4.721v7.723a.85.85 0 0 0 .4.72l7.75 4.845a.85.85 0 0 0 .9 0l7.75-4.844a.85.85 0 0 0 .4-.721V8.139a.85.85 0 0 0-.4-.72zm-7.85 5.758 7.4-4.625 7.4 4.625v7.335l-7.4 4.625-7.4-4.625z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12.449 2.575a.85.85 0 0 0-.901 0l-7.75 4.843a.85.85 0 0 0-.4.721v7.723a.85.85 0 0 0 .4.72l7.75 4.845a.85.85 0 0 0 .9 0l7.75-4.844a.85.85 0 0 0 .4-.721V8.139a.85.85 0 0 0-.4-.72zm-7.85 5.758 7.4-4.625 7.4 4.625v7.335l-7.4 4.625-7.4-4.625z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgHexagon;
