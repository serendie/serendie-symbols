import type { SVGProps } from "react";
const SvgArrowDownRight = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16.55 17.4 5.574 6.423l.849-.849 10.975 10.977V6.73h1.2v11.02c0 .47-.38.85-.85.85H6.73v-1.2z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgArrowDownRight;
