import type { SVGProps } from "react";
const SvgCircle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.998 2.025C6.49 2.025 2.023 6.491 2.023 12c0 5.51 4.466 9.975 9.975 9.975 5.51 0 9.975-4.466 9.975-9.975s-4.465-9.975-9.975-9.975"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCircle;
