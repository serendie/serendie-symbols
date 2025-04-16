import type { SVGProps } from "react";
const SvgPen = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.32 4.426a.6.6 0 0 1 .594-.152l11.866 3.49a.85.85 0 0 1 .602.696l.656 4.592 1.45 1.45a.85.85 0 0 1 0 1.202l-3.89 3.89a.85.85 0 0 1-1.201 0l-1.45-1.45-4.593-.656a.85.85 0 0 1-.695-.602L4.17 5.019a.6.6 0 0 1 .151-.593m9.758 13.152.92.92 3.394-3.395-.92-.92zm2.758-4.455-.61-4.27L6.833 6.09l3.63 3.63a2.101 2.101 0 1 1-.849.848l-3.63-3.63 2.763 9.393 4.27.61zM12.1 10.931a.9.9 0 1 0-1.273 1.273.9.9 0 0 0 1.272-1.273"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgPen;
