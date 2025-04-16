import type { SVGProps } from "react";
const SvgCube = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.548 2.686a.85.85 0 0 1 .9 0l7.557 4.722-.315.19-7.692 4.806-7.66-4.787-.309-.232zm-8.15 5.726v7.561a.85.85 0 0 0 .4.721l7.6 4.75v-8L3.68 8.622l-.042-.03zm9.2 13.032 7.6-4.75a.85.85 0 0 0 .4-.72V8.451l-.286.172-7.714 4.82z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCube;
