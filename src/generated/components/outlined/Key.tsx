import type { SVGProps } from "react";
const SvgKey = (props: SVGProps<SVGSVGElement>) => (
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
      d="M13.933 3.373a5.601 5.601 0 0 0-3.678 9.072l-2.606 2.606L5.5 17.2l-1.719 1.718.849.849 1.294-1.295 2.154 2.154.849-.848-2.154-2.154 1.3-1.3 2.154 2.154.848-.849-2.154-2.154 2.182-2.181a5.57 5.57 0 0 0 2.83 1.197v-1.212a4.401 4.401 0 0 1 0-8.695zm1.6 9.863a4.402 4.402 0 0 0 0-8.608V3.407a5.602 5.602 0 0 1 0 11.05z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgKey;
