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
      d="M12.6 17v5h-1.2v-5zM12.6 2v5h-1.2V2zM7 12.6H2v-1.2h5zM22 12.6h-5v-1.2h5zM8.425 16.424l-3.073 3.07-.848-.848 3.072-3.07zM19.495 5.353l-3.07 3.071-.85-.848 3.072-3.071zM15.576 16.424l3.073 3.07.848-.85-3.073-3.069zM4.505 5.353l3.07 3.071.85-.848-3.072-3.071z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgLoader;
