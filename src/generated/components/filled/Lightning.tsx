import type { SVGProps } from "react";
const SvgLightning = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12.055 2.957c.457-.629 1.452-.305 1.452.473v5.785c0 .348.132.673.368.91.241.24.568.376.91.376h3.257a.803.803 0 0 1 .649 1.275l-6.745 9.267c-.458.629-1.453.305-1.453-.473v-5.785a1.28 1.28 0 0 0-.37-.909 1.29 1.29 0 0 0-.909-.377H5.957a.803.803 0 0 1-.65-1.275m0 0 6.748-9.267Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgLightning;
