import type { SVGProps } from "react";
const SvgSmile = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.023 12c0-5.509 4.466-9.975 9.975-9.975 5.51 0 9.975 4.466 9.975 9.975 0 5.51-4.465 9.975-9.975 9.975S2.023 17.51 2.023 12m6.075-3a.4.4 0 1 1 .8 0 .4.4 0 0 1-.8 0m.4-1.6a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2m7 1.2a.4.4 0 1 0 0 .8.4.4 0 0 0 0-.8m-1.6.4a1.6 1.6 0 1 1 3.2 0 1.6 1.6 0 0 1-3.2 0m-1.9 8.4a5.4 5.4 0 0 1-5.4-5.4h-1.2a6.6 6.6 0 1 0 13.2 0h-1.2a5.4 5.4 0 0 1-5.4 5.4"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSmile;
