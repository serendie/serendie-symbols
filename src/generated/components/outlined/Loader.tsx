import type { SVGProps } from "react";
const SvgLoader = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12.6 2v5h-1.2V2zM5.353 4.505l3.071 3.07-.848.85-3.071-3.072zm14.142.848-3.07 3.071-.85-.848 3.072-3.071zM22 12.6h-5v-1.2h5zm-15 0H2v-1.2h5zm9.424 2.975 3.073 3.07-.848.848-3.073-3.069zm-8 .85-3.072 3.07-.848-.85 3.072-3.07zM12.6 17v5h-1.2v-5z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgLoader;
