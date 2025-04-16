import type { SVGProps } from "react";
const SvgShare = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.398 3.065a.85.85 0 0 1 1.202 0l4.066 4.066-.849.848-3.219-3.218v10.551h-1.2V4.762L8.181 7.98l-.849-.849zm8.708 11.605a8.8 8.8 0 0 0 .667-3.358h1.2a9.973 9.973 0 0 1-9.975 9.975 9.975 9.975 0 0 1-9.975-9.975h1.2a8.775 8.775 0 0 0 16.883 3.358"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgShare;
