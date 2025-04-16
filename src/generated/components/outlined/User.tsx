import type { SVGProps } from "react";
const SvgUser = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 5.221a3.038 3.038 0 1 0 0 6.077 3.038 3.038 0 0 0 0-6.077M7.763 8.26a4.238 4.238 0 1 1 8.477 0 4.238 4.238 0 0 1-8.477 0m4.239 6.963a4.777 4.777 0 0 0-4.778 4.778h-1.2a5.977 5.977 0 1 1 11.955 0h-1.2A4.777 4.777 0 0 0 12 15.223"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgUser;
