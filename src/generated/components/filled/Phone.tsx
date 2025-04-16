import type { SVGProps } from "react";
const SvgPhone = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.961 5.417a3.975 3.975 0 0 0 0 5.622l7.955 7.955a3.975 3.975 0 0 0 5.622 0l1.414-1.415a.85.85 0 0 0 0-1.202l-2.829-2.828a.85.85 0 0 0-1.202 0l-1.697 1.697L8.71 9.73l1.697-1.697a.85.85 0 0 0 0-1.202L7.577 4.003a.85.85 0 0 0-1.202 0z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgPhone;
