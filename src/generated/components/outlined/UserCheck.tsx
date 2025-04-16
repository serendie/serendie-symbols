import type { SVGProps } from "react";
const SvgUserCheck = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9.985 5.221a3.038 3.038 0 1 0 0 6.077 3.038 3.038 0 0 0 0-6.077M5.747 8.26a4.238 4.238 0 1 1 8.476 0 4.238 4.238 0 0 1-8.476 0m14.182 3.253-3.282 3.282a.85.85 0 0 1-1.202 0l-1.87-1.87.848-.849 1.623 1.623 3.034-3.034zm-9.944 3.71a4.777 4.777 0 0 0-4.777 4.778h-1.2a5.977 5.977 0 1 1 11.954 0h-1.2a4.777 4.777 0 0 0-4.777-4.778"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgUserCheck;
