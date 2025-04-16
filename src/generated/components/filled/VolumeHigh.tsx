import type { SVGProps } from "react";
const SvgVolumeHigh = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.023 12a3.6 3.6 0 0 1 3.3-3.588c.522-.043.9.383.9.838v5.5c0 .454-.378.88-.9.837a3.6 3.6 0 0 1-3.3-3.588M14.423 4.533a.85.85 0 0 0-1.394-.653l-5.5 4.584a.85.85 0 0 0-.306.653v5.765a.85.85 0 0 0 .306.653l5.5 4.584a.85.85 0 0 0 1.394-.653z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M18.427 9.594a3.402 3.402 0 0 1-2.406 5.808v-1.2a2.202 2.202 0 1 0 0-4.405v-1.2c.902 0 1.768.359 2.406.997"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M20.244 7.777a5.971 5.971 0 0 1-4.222 10.194v-1.2a4.771 4.771 0 0 0 0-9.543v-1.2c1.583 0 3.102.63 4.222 1.75"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgVolumeHigh;
