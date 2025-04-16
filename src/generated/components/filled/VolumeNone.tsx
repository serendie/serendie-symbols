import type { SVGProps } from "react";
const SvgVolumeNone = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.398 12a3.6 3.6 0 0 1 3.3-3.588c.522-.043.9.383.9.838v5.5c0 .454-.378.88-.9.837a3.6 3.6 0 0 1-3.3-3.588M17.798 4.533a.85.85 0 0 0-1.394-.653l-5.5 4.584a.85.85 0 0 0-.306.653v5.765a.85.85 0 0 0 .305.653l5.5 4.584a.85.85 0 0 0 1.395-.653z"
    />
  </svg>
);
export default SvgVolumeNone;
