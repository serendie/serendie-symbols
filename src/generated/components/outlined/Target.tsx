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
      d="M2.023 12c0-5.24 4.04-9.536 9.176-9.943V3.26a8.776 8.776 0 0 0 0 17.478v1.204C6.064 21.536 2.023 17.24 2.023 12M12.8 21.943c5.134-.407 9.174-4.703 9.174-9.943s-4.04-9.536-9.174-9.943V3.26a8.776 8.776 0 0 1 0 17.478zm-.8-15.218a5.275 5.275 0 1 0 0 10.55 5.275 5.275 0 0 0 0-10.55M5.524 12a6.475 6.475 0 1 1 12.95 0 6.475 6.475 0 0 1-12.95 0m6.475-1.775a1.775 1.775 0 1 0 0 3.55 1.775 1.775 0 0 0 0-3.55M9.024 12a2.975 2.975 0 1 1 5.95 0 2.975 2.975 0 0 1-5.95 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgTarget;
