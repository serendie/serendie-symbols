import type { SVGProps } from "react";
const SvgVoicemail = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.398 12a3.975 3.975 0 1 1 6.821 2.775h5.475a3.975 3.975 0 1 1 2.846 1.2H6.374A3.975 3.975 0 0 1 2.397 12"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgVoicemail;
