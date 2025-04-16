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
      d="M3.788 6.9H2.85a.85.85 0 0 0-.85.85v12.5c0 .47.38.85.85.85h15.138l-1.2-1.2H3.2V8.1h1.788zm4.446 4.447a4.375 4.375 0 0 0 5.994 5.994l-.886-.887a3.175 3.175 0 0 1-4.22-4.22zm6.345 4.081-4.431-4.431-.857-.857-6.2-6.2.848-.849 16.97 16.97-.849.849-1.01-1.01h.001l-3.615-3.615zM8.128 5.018l.876.876A3.399 3.399 0 0 1 15.4 7.5h1.2a4.6 4.6 0 0 0-8.472-2.482m4.194 4.194 4.041 4.041a4.376 4.376 0 0 0-4.04-4.04M20.8 17.69l1.2 1.2V7.75a.85.85 0 0 0-.85-.85H18.2v1.2h2.6z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCameraOff;
