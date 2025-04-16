import type { SVGProps } from "react";
const SvgLogout = (props: SVGProps<SVGSVGElement>) => (
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
      d="M13.71 3.394a8.775 8.775 0 1 0 4.493 14.811l.849.849a9.975 9.975 0 1 1 0-14.107l-.849.849a8.78 8.78 0 0 0-4.493-2.402m4.363 4.182 3.783 3.783a.85.85 0 0 1 0 1.202l-3.783 3.783-.849-.848L20.12 12.6H11v-1.2h9.2l-2.975-2.975z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgLogout;
