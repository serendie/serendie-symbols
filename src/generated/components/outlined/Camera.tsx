import type { SVGProps } from "react";
const SvgCamera = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 2.9a4.6 4.6 0 0 0-4.6 4.6h1.2a3.4 3.4 0 1 1 6.8 0h1.2A4.6 4.6 0 0 0 12 2.9M5.805 8.1H3.2v11.8h17.6V8.1h-2.6V6.9h2.95c.47 0 .85.38.85.85v12.5c0 .47-.38.85-.85.85H2.85a.85.85 0 0 1-.85-.85V7.75c0-.47.38-.85.85-.85h2.955zM12.8 16.65a3.176 3.176 0 0 0 0-6.147V9.273a4.376 4.376 0 0 1 0 8.605zm-1.6-6.147a3.176 3.176 0 0 0 0 6.147v1.228a4.376 4.376 0 0 1 0-8.604z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCamera;
