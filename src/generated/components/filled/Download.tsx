import type { SVGProps } from "react";
const SvgDownload = (props: SVGProps<SVGSVGElement>) => (
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
      d="m11.4 14.55-3.22-3.217-.848.848 4.066 4.066a.85.85 0 0 0 1.202 0l4.066-4.066-.849-.848L12.6 14.55V2h-1.2zM5.793 5.796a8.775 8.775 0 1 0 12.41 0l.848-.849a9.975 9.975 0 1 1-14.107 0z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgDownload;
