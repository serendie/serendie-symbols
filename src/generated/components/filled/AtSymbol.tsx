import type { SVGProps } from "react";
const SvgAtSymbol = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.023 12c0-5.509 4.466-9.975 9.975-9.975 5.51 0 9.975 4.466 9.975 9.975 0 5.51-4.465 9.975-9.975 9.975S2.023 17.51 2.023 12m2.257 0a7.719 7.719 0 1 1 14.15 4.27c-1.076-.572-1.832-1.76-1.832-3.155V12a4.6 4.6 0 1 0-.919 2.76 4.68 4.68 0 0 0 2 2.465A7.719 7.719 0 0 1 4.28 12m11.118 0a3.4 3.4 0 1 1-6.8 0 3.4 3.4 0 0 1 6.8 0m-3.4-8.774a8.774 8.774 0 1 0 0 17.549 8.774 8.774 0 0 0 0-17.549"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgAtSymbol;
