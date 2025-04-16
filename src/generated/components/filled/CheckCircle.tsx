import type { SVGProps } from "react";
const SvgCheckCircle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.023 12c0-5.509 4.466-9.975 9.975-9.975 5.51 0 9.975 4.466 9.975 9.975 0 5.51-4.465 9.975-9.975 9.975S2.023 17.51 2.023 12m8.872 3.747 6.894-6.894-.848-.849-6.647 6.647-3.238-3.237-.848.848 3.485 3.485a.85.85 0 0 0 1.202 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCheckCircle;
