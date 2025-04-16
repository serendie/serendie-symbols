import type { SVGProps } from "react";
const SvgListNumber = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.325 6.3v2.6h.6V6.3zm1.037 4.4H4.44v.6h1.872v.4H4.89a.55.55 0 0 0-.55.55v.5c0 .305.246.55.55.55h1.92v-.6H4.94v-.4h1.422a.55.55 0 0 0 .55-.55v-.5a.55.55 0 0 0-.55-.55m0 4.4H4.44v.6h1.872v.4H4.44v.6h1.872v.4H4.44v.6h1.922a.55.55 0 0 0 .55-.55v-1.5a.55.55 0 0 0-.55-.55M20 7H8.83v1.2H20zm0 4.4H8.83v1.2H20zm0 4.4H8.83V17H20z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgListNumber;
