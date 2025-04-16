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
      d="m17.372 5.337-.688-.688a1.9 1.9 0 0 1 2.686 2.686l-.69-.69-.918.919.69.69-6.984 6.983a.68.68 0 0 1-.465.2l-1.768.048a.683.683 0 0 1-.701-.701l.048-1.768a.68.68 0 0 1 .2-.465l6.983-6.984.689.689zM15.236 4.4H5.248a.85.85 0 0 0-.85.85v13.5c0 .47.381.85.85.85h13.5c.47 0 .85-.38.85-.85V8.804l-7.281 7.282c-.341.34-.8.538-1.281.55l-1.768.049a1.883 1.883 0 0 1-1.934-1.934l.048-1.768c.013-.482.21-.94.551-1.28z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCompose;
