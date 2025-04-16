import type { SVGProps } from "react";
const SvgSun = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16.625 12a4.625 4.625 0 1 1-9.25 0 4.625 4.625 0 0 1 9.25 0"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12.6 19.6V22h-1.2v-2.4zM12.6 2v2.4h-1.2V2zM4.4 12.6H2v-1.2h2.4zM22 12.6h-2.4v-1.2H22zM7.05 17.798l-1.697 1.697-.848-.848 1.697-1.697zM19.495 5.353 17.798 7.05l-.849-.848 1.697-1.697zM16.95 17.798l1.697 1.697.848-.848-1.697-1.697zM4.504 5.353 6.201 7.05l.849-.848-1.697-1.697z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSun;
