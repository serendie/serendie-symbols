import type { SVGProps } from "react";
const SvgRefresh = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.2 2.064a9.97 9.97 0 0 0-7.35 4.192V4h-1.2v3.687c0 .504.408.913.912.913h3.687V7.4H4.532A8.77 8.77 0 0 1 11.2 3.269zm0 18.824a8.77 8.77 0 0 1-6.366-3.63 8.78 8.78 0 0 1-1.567-6.256l-1.19-.157A9.975 9.975 0 0 0 11.2 22.093zm1.6 1.2v-1.206a8.78 8.78 0 0 0 6.729-4.282H16.81v-1.2H20.5c.504 0 .912.408.912.912V20h-1.2v-2.237a9.97 9.97 0 0 1-7.411 4.324m0-18.82V2.065a9.977 9.977 0 0 1 9.09 11.245l-1.19-.156a8.775 8.775 0 0 0-7.9-9.884"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgRefresh;
