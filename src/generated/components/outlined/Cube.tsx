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
      d="M11.998 3.708 5.131 8.001l6.867 4.292 6.868-4.292zm7.4 5.375-6.8 4.25v6.585l6.8-4.25zm-8 10.835v-6.585l-6.8-4.25v6.585zm.15-17.343a.85.85 0 0 1 .9 0l7.868 4.917a.6.6 0 0 1 .282.509v7.86a.85.85 0 0 1-.4.722l-7.882 4.926a.6.6 0 0 1-.636 0l-7.882-4.926a.85.85 0 0 1-.4-.721V8a.6.6 0 0 1 .282-.51z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCube;
