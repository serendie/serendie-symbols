import type { SVGProps } from "react";
const SvgCameraOff = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.788 6.9H2.85a.85.85 0 0 0-.85.85v12.5c0 .47.38.85.85.85h15.138l-3.979-3.979a4.075 4.075 0 0 1-5.555-5.555zm11.434 9.171 4.839 4.839.848-.849-5.082-5.082c-.146.397-.351.764-.605 1.092M10.596 9.75c-.396.145-.764.35-1.092.605L6.051 6.9H7.44q.017-.133.042-.265zm5.425 3.162a4.08 4.08 0 0 0-3.356-3.357L8.128 5.018a4.6 4.6 0 0 1 7.125-.77A4.6 4.6 0 0 1 16.561 6.9h4.589c.47 0 .85.38.85.85v11.14z"
      clipRule="evenodd"
    />
    <path fill="currentColor" d="m3.09 3.94.848-.85L20.91 20.063l-.848.848z" />
  </svg>
);
export default SvgCameraOff;
