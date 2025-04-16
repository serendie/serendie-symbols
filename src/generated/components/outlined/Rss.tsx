import type { SVGProps } from "react";
const SvgRss = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15.738 8.262A16.6 16.6 0 0 0 4 3.4v1.2A15.4 15.4 0 0 1 19.4 20h1.2a16.6 16.6 0 0 0-4.862-11.738m-3.536 3.536A11.6 11.6 0 0 0 4 8.4v1.2A10.4 10.4 0 0 1 14.4 20h1.2a11.6 11.6 0 0 0-3.398-8.202m-4.752 6.89a1.65 1.65 0 0 0 0-3.075v-1.25a2.851 2.851 0 0 1 0 5.574zm-1.2-3.075a1.65 1.65 0 0 0 0 3.075v1.25a2.851 2.851 0 0 1 0-5.574z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgRss;
