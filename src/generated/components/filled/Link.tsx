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
      d="M4.93 9.738a6.6 6.6 0 0 0 9.333 9.334l.51-.51-.85-.848-.508.51a5.4 5.4 0 1 1-7.637-7.638l.509-.509-.849-.848zM9.738 4.93a6.6 6.6 0 0 1 9.334 9.333l-.51.51-.848-.85.51-.508a5.4 5.4 0 1 0-7.638-7.637l-.509.509-.848-.849zM8.946 7.418 7.418 8.946l-.848-.849L8.097 6.57zM17.431 15.904l-1.527 1.527-.849-.849 1.527-1.527z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="m15.253 9.596-5.657 5.657-.848-.848 5.657-5.657z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgLink;
