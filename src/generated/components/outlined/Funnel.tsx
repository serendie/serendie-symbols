import type { SVGProps } from "react";
const SvgFunnel = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.864 5.786a.85.85 0 0 1 .66-1.386h14.949a.85.85 0 0 1 .66 1.386l-6.035 7.427v4.654a.85.85 0 0 1-.378.707l-2.5 1.666a.85.85 0 0 1-1.322-.707v-6.32zM5.259 5.6l5.649 6.953a.85.85 0 0 1 .19.536v5.79l1.8-1.2v-4.59a.85.85 0 0 1 .19-.536l5.65-6.953z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgFunnel;
