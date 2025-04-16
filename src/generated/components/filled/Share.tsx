import type { SVGProps } from "react";
const SvgShare = (props: SVGProps<SVGSVGElement>) => (
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
      d="m8.18 7.927-.848-.849 4.066-4.065a.85.85 0 0 1 1.202 0l4.066 4.065-.849.849-3.219-3.219v10.551h-1.2V4.71zm-4.957 3.332a8.775 8.775 0 1 0 17.55 0h1.2a9.973 9.973 0 0 1-15.516 8.294 9.98 9.98 0 0 1-4.434-8.294z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgShare;
