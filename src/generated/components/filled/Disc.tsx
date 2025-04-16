import type { SVGProps } from "react";
const SvgDisc = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.023 12c0-5.509 4.466-9.975 9.975-9.975 5.51 0 9.975 4.466 9.975 9.975 0 5.51-4.465 9.975-9.975 9.975S2.023 17.51 2.023 12m7.2 0a2.775 2.775 0 1 1 5.55 0 2.775 2.775 0 0 1-5.55 0m2.775-3.975a3.975 3.975 0 1 0 0 7.95 3.975 3.975 0 0 0 0-7.95"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgDisc;
