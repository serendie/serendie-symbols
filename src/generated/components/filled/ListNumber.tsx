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
      d="M5.157 6.3v2.6h.6V6.3zm14.675.7H8.662v1.2h11.17zm0 4.4H8.662v1.2h11.17zm-11.17 4.4h11.17V17H8.662zm-2.518-4.5H4.272v-.6h1.922a.55.55 0 0 1 .55.55v.5a.55.55 0 0 1-.55.55H4.772v.4h1.87v.6h-1.92a.55.55 0 0 1-.55-.55v-.5a.55.55 0 0 1 .55-.55h1.422zm-1.872 4.4h1.872v.4H4.272v.6h1.872v.4H4.272v.6h1.922a.55.55 0 0 0 .55-.55v-1.5a.55.55 0 0 0-.55-.55H4.272z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgListNumber;
