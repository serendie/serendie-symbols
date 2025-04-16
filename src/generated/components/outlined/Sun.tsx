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
      fillRule="evenodd"
      d="M12.6 4.4V2h-1.2v2.4zM7.05 6.202 5.353 4.505l-.849.848L6.201 7.05zm12.445-.849-.849-.848-1.697 1.697.849.848zM12.8 15.945a4.026 4.026 0 0 0 0-7.89v-1.22a5.226 5.226 0 0 1 0 10.329zm-1.6-7.89a4.026 4.026 0 0 0 0 7.89v1.22a5.226 5.226 0 0 1 0-10.33zM2 12.6h2.4v-1.2H2zm17.6 0H22v-1.2h-2.4zm-.105 6.047-1.697-1.697-.848.848 1.697 1.697zm-14.142.848 1.697-1.697-.848-.848-1.697 1.697zM12.6 22v-2.4h-1.2V22z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSun;
