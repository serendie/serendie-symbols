import type { SVGProps } from "react";
const SvgFileUpload = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9.5 3.65a.85.85 0 0 1 .602-.25h8.646c.47 0 .85.38.85.85v15.5c0 .47-.38.85-.85.85h-13.5a.85.85 0 0 1-.85-.85V9.104a.85.85 0 0 1 .25-.601zm3.098 6.8 1.793 1.792.848-.849-2.64-2.64a.85.85 0 0 0-1.202 0l-2.64 2.64.848.849 1.793-1.794V15h1.2z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgFileUpload;
