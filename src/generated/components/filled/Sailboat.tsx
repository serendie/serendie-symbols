import type { SVGProps } from "react";
const SvgSailboat = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.449 15.934a.85.85 0 0 0-.724 1.295l1.826 2.967a.85.85 0 0 0 .724.404h11.454a.85.85 0 0 0 .724-.404l1.825-2.967a.85.85 0 0 0-.724-1.295zM12.852 4.682c0-.792-.987-1.154-1.499-.55l-7.46 8.8a.85.85 0 0 0 .648 1.399h7.46c.47 0 .85-.38.85-.85z"
    />
  </svg>
);
export default SvgSailboat;
