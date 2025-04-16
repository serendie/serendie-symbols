import type { SVGProps } from "react";
const SvgTrain = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.941 5.73A2.73 2.73 0 0 1 6.672 3h10.655a2.73 2.73 0 0 1 2.73 2.73v11.954c0 .47-.38.85-.85.85H4.792a.85.85 0 0 1-.85-.85zM17.54 19.758H6.46v1.2h11.08zm-10.8-9.502h4.66V5.778h1.2v4.478h4.66v1.2H6.74zm1.42 3.1a1.365 1.365 0 1 0 0 2.731 1.365 1.365 0 0 0 0-2.73m7.782 0a1.365 1.365 0 1 0 0 2.731 1.365 1.365 0 0 0 0-2.73"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgTrain;
