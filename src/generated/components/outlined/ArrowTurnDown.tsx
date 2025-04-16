import type { SVGProps } from "react";
const SvgArrowTurnDown = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10.362 5.93A3.764 3.764 0 0 0 6.6 9.694h-1.2a4.964 4.964 0 1 1 9.927 0h-1.2a3.764 3.764 0 0 0-3.764-3.764m-4.964 9.437V11.29h1.2v4.077zm8.728 1.854V11.29h1.2v5.93l2.248-2.247.849.848-3.096 3.096a.85.85 0 0 1-1.202 0l-3.096-3.096.848-.849z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgArrowTurnDown;
