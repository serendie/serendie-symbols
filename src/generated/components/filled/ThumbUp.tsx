import type { SVGProps } from "react";
const SvgThumbUp = (props: SVGProps<SVGSVGElement>) => (
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
      d="M14.114 4.9c-.883 0-1.668.566-1.947 1.404L10.635 10.9H9.417a.85.85 0 0 0-.85.85v6.5c0 .47.38.85.85.85h9.928a.85.85 0 0 0 .844-.75l.941-8a.85.85 0 0 0-.844-.95h-4.119V6.953c0-1.134-.919-2.053-2.053-2.053M2.867 15a4.1 4.1 0 0 1 3.808-4.09.837.837 0 0 1 .892.84v6.5c0 .458-.379.877-.892.84A4.1 4.1 0 0 1 2.867 15"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgThumbUp;
