import type { SVGProps } from "react";
const SvgItalic = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12.146 5.378H9.835v-1.2h6v1.2h-2.478l-1.834 13.246h1.978v1.2H8.168v-1.2h2.144z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgItalic;
