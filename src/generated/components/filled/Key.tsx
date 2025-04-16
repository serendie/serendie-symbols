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
      d="M14.616 3.354a5.6 5.6 0 0 0-4.361 9.113L3.78 18.94l.849.848 1.294-1.294 2.154 2.154.849-.849-2.154-2.154 1.3-1.3 2.154 2.154.848-.848-2.154-2.154 2.182-2.182a5.6 5.6 0 1 0 3.513-9.962"
    />
  </svg>
);
export default SvgKey;
