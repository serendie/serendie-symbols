import type { SVGProps } from "react";
const SvgEye = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.223 15a8.775 8.775 0 1 1 17.55 0h1.2c0-5.509-4.465-9.975-9.975-9.975S2.023 9.491 2.023 15zm9.375-.29a2.776 2.776 0 0 0 0-5.42V8.07a3.976 3.976 0 0 1 0 7.86zm-1.2-5.42a2.776 2.776 0 0 0 0 5.42v1.22a3.976 3.976 0 0 1 0-7.86zm.6 8.485c-2.9 0-5.47-1.405-7.07-3.575l-.965.712a9.96 9.96 0 0 0 8.035 4.063c3.297 0 6.22-1.6 8.035-4.063l-.966-.712a8.76 8.76 0 0 1-7.069 3.575"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgEye;
