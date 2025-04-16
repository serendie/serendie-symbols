import type { SVGProps } from "react";
const SvgLink = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9.738 4.93a6.6 6.6 0 0 1 9.334 9.333l-.51.51-.848-.85.51-.508a5.4 5.4 0 1 0-7.638-7.637l-.509.509-.848-.849zm-.792 2.488L7.418 8.946l-.848-.849L8.097 6.57zm6.307 2.178-5.657 5.657-.848-.848 5.657-5.657zM4.93 9.738l.51-.51.848.85-.51.508a5.4 5.4 0 1 0 7.638 7.637l.509-.509.848.849-.509.509a6.6 6.6 0 0 1-9.334-9.334m12.502 6.166-1.527 1.527-.849-.849 1.527-1.527z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgLink;
