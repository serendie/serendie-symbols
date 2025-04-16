import type { SVGProps } from "react";
const SvgTaxi = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.999 2.02a3 3 0 0 0-3 3v.205H6.183a.85.85 0 0 0-.812.6l-1.935 6.287a.9.9 0 0 0-.038.25v7.963c0 .47.381.85.85.85h1.9c.47 0 .85-.38.85-.85v-1.4h5V18.5v.425h5v1.4c0 .47.38.85.85.85h1.9c.47 0 .85-.38.85-.85v-7.963a.9.9 0 0 0-.037-.25l-1.935-6.287a.85.85 0 0 0-.812-.6h-2.815V5.02a3 3 0 0 0-3-3m-5.8 13.304a1.3 1.3 0 1 1 2.6 0 1.3 1.3 0 0 1-2.6 0m9 0a1.3 1.3 0 1 1 2.6 0 1.3 1.3 0 0 1-2.6 0m-9.4-2.4h12.399v-1.2h-12.4z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgTaxi;
