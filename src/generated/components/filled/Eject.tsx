import type { SVGProps } from "react";
const SvgEject = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.478 16.023a.863.863 0 0 1-.73-1.325l5.523-8.719a.863.863 0 0 1 1.458 0l5.522 8.719a.863.863 0 0 1-.73 1.325zm-.794 2.4h12.632v-1.2H5.684z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgEject;
