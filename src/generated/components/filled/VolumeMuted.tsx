import type { SVGProps } from "react";
const SvgVolumeMuted = (props: SVGProps<SVGSVGElement>) => (
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
      d="m18.96 12.848 2.143 2.142.848-.848L19.81 12l2.142-2.143-.848-.848-2.143 2.142-2.142-2.142-.848.848L18.112 12l-2.142 2.142.848.848z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgVolumeMuted;
