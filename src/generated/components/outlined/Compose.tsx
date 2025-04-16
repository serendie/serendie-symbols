import type { SVGProps } from "react";
const SvgCompose = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16.413 4.637a2.1 2.1 0 0 1 2.97 2.97l-.04.039-.848-.849.04-.04a.9.9 0 1 0-1.273-1.272l-.425-.424.425.424-.04.04-.848-.85zM5.598 5.6h8.2V4.4h-8.55a.85.85 0 0 0-.85.85v13.5c0 .47.381.85.85.85h13.5c.47 0 .85-.38.85-.85V10.2h-1.2v8.2h-12.8zm4.047 7.501 6.697-6.697-.848-.848-6.801 6.8a.85.85 0 0 0-.249.608l.013 1.755a.85.85 0 0 0 .844.843l1.755.013a.85.85 0 0 0 .607-.249l6.8-6.8-.848-.849-6.697 6.697-1.263-.01z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCompose;
