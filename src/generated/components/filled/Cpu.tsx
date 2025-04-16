import type { SVGProps } from "react";
const SvgCpu = (props: SVGProps<SVGSVGElement>) => (
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
      d="M18.75 4.432H14.6V2h-1.2v2.432h-2.8V2H9.4v2.432H5.25a.82.82 0 0 0-.818.818V9.4H2v1.2h2.432v2.8H2v1.2h2.432v4.15c0 .452.366.818.818.818H9.4V22h1.2v-2.432h2.8V22h1.2v-2.432h4.15a.82.82 0 0 0 .818-.818V14.6H22v-1.2h-2.432v-2.8H22V9.4h-2.432V5.25a.82.82 0 0 0-.818-.818M9.775 9.573a.2.2 0 0 0-.202.202v4.45c0 .111.09.202.202.202h4.45c.111 0 .202-.09.202-.202v-4.45a.2.2 0 0 0-.202-.202z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCpu;
