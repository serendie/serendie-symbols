import type { SVGProps } from "react";
const SvgBluetooth = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12.599 5.449v5.103L15.15 8zm-1.2 5.103V4.604c0-.758.915-1.137 1.45-.601l3.397 3.396a.85.85 0 0 1 0 1.202l-3.399 3.4 3.399 3.398a.85.85 0 0 1 0 1.202l-3.396 3.397c-.536.535-1.451.156-1.451-.601v-5.948l-2.976 2.975-.849-.848L11.15 12 7.574 8.424l.849-.848zm1.2 2.897v5.103L15.15 16z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgBluetooth;
