import type { SVGProps } from "react";
const SvgEdit = (props: SVGProps<SVGSVGElement>) => (
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
      d="M19.785 20.2h-15V19h15zM15.143 5.941l-.804-.804a2.219 2.219 0 0 1 3.137 3.138l-.805-.806-1.073 1.073.805.806-8.157 8.157a.8.8 0 0 1-.543.234l-2.065.056a.8.8 0 0 1-.82-.82l.056-2.065a.8.8 0 0 1 .234-.543l8.158-8.158.804.805z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgEdit;
