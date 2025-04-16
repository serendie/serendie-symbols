import type { SVGProps } from "react";
const SvgVolumeLow = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.2 12a3.6 3.6 0 0 1 3.3-3.588c.52-.043.9.383.9.838v5.5c0 .454-.38.88-.9.837a3.6 3.6 0 0 1-3.3-3.588M15.6 4.533a.85.85 0 0 0-1.395-.653l-5.5 4.584a.85.85 0 0 0-.306.653v5.765a.85.85 0 0 0 .306.653l5.5 4.584a.85.85 0 0 0 1.394-.653z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M19.745 9.454a3.6 3.6 0 0 1-2.546 6.146v-1.2a2.4 2.4 0 1 0 0-4.8V8.4a3.6 3.6 0 0 1 2.546 1.054"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgVolumeLow;
