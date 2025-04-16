import type { SVGProps } from "react";
const SvgTarget = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.998 3.225a8.775 8.775 0 1 0 0 17.55 8.775 8.775 0 0 0 0-17.55M2.023 12c0-5.509 4.466-9.975 9.975-9.975 5.51 0 9.975 4.466 9.975 9.975 0 5.51-4.465 9.975-9.975 9.975S2.023 17.51 2.023 12"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M5.523 12a6.475 6.475 0 1 1 12.95 0 6.475 6.475 0 0 1-12.95 0M12 13.773a1.772 1.772 0 1 0 0-3.545 1.772 1.772 0 0 0 0 3.545"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgTarget;
