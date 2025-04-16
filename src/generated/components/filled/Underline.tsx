import type { SVGProps } from "react";
const SvgUnderline = (props: SVGProps<SVGSVGElement>) => (
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
      d="M17.071 9.61V3.73h1.2v5.88zm-5.069 7.873a6.27 6.27 0 0 1-6.27-6.27h1.2a5.07 5.07 0 0 0 10.139 0h1.2a6.27 6.27 0 0 1-6.269 6.27M4.828 20.28h14.348v-1.2H4.828zm.905-16.55v5.88h1.2V3.73z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgUnderline;
