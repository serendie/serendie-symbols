import type { SVGProps } from "react";
const SvgTv = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.247 7.4 8.423 4.576l-.849.849L9.55 7.4H3.498a.85.85 0 0 0-.85.85v10.723c0 .47.381.85.85.85h17c.47 0 .85-.38.85-.85V8.25a.85.85 0 0 0-.85-.85h-6.051l1.976-1.975-.849-.849L12.75 7.4zM3.848 8.6v10.023h16.3V8.6z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgTv;
